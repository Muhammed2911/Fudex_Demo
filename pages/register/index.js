import { mapState } from 'vuex'
import VuePhoneNumberInput from 'vue-phone-number-input'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'
import RegisterService from "~/services/auth/RegisterService.js"
import ActivationModal from "~/pages/register/-modal/-activation/-index.vue"

export default {
  components: {
    VuePhoneNumberInput,
    ActivationModal
  },
  async asyncData(context) {
    const countries = await context.$axios.$get('/location/countries?all=1').catch(() => {
    })
    return {countries}
  },
  data () {
    return {
      titlePage: this.$t('front.register'),
      phoneData: null,
      stepper: 1,
      translations: {
        countrySelectorLabel: this.$t('front.country_code'),
        // countrySelectorError: 'Choisir un pays',
        phoneNumberLabel: this.$t('front.phone'),
        // example: 'Exemple :'
      },
      form: {
        phone: null,
        country_code: '',
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
        // device_id: null
      }
    }
  },
  created () {
    this.form.country_code = this.countries.length ? this.countries[0].code : ''
  },
  computed: {
    ...mapState({
      currentLocale: state => state.localStorage.currentLocale
    })
  },
  methods: {
    updatePhoneNumber (value) {
      this.phoneData = value
      this.form.country_code = value.countryCallingCode
      this.form.phone = this.form.phone ? this.form.phone.replace(/\s+/g, '') : null
    },
    handlePhoneNumber () {
      if (this.form.phone.startsWith("0") || this.form.phone.startsWith("٠")) {
        this.form.phone = this.form.phone.substring(1)
      }
    },
    async submit () {
      this.form.phone = this.form.phone ? this.form.phone.replace(/\s+/g, '') : null
      const validData = await this.$validator.validateAll()

      if (validData) {
        this.register()
      }
    },
    async register () {
      this.$nuxt.$loading.start()
      await RegisterService.register(this.form)
        .then((res) => {
          this.stepper = 2
        })
        .catch(() => {});
        this.$nuxt.$loading.finish();
    },
  },
  head () {
    return {
      title: this.titlePage
    }
  }
}
