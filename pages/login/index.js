import { mapState } from "vuex";
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import ActivationModal from "~/pages/register/-modal/-activation/-index.vue";

export default {
  components: {
    VuePhoneNumberInput,
    ActivationModal,
  },
  async asyncData(context) {
    const countries = await context.$axios
      .$get("/location/countries?all=1")
      .catch(() => {});
    return { countries };
  },
  data() {
    return {
      titlePage: this.$t("front.login"),
      phoneData: null,
      stepper: 1,
      translations: {
        countrySelectorLabel: this.$t("front.country_code"),
        phoneNumberLabel: this.$t("front.phone"),
      },
      form: {
        phone: null,
        country_code: "",
        password: null,
        // device_id: null
      },
      customEvents: [
        {
          eventName: "display-activation-modal",
          callback: this.handleActivation,
        },
      ],
    };
  },
  created() {
    this.form.country_code = this.countries.length
      ? this.countries[0].code
      : "";
  },
  computed: {
    ...mapState({
      currentLocale: (state) => state.localStorage.currentLocale,
    }),
  },
  methods: {
    updatePhoneNumber(value) {
      this.phoneData = value;
      this.form.country_code = value.countryCallingCode;
      value.phoneNumber = value.phoneNumber
        ? value.phoneNumber.replace(/\s+/g, "")
        : "";
      this.form.phone = this.form.phone
        ? this.form.phone.replace(/\s+/g, "")
        : null;
    },
    handlePhoneNumber() {
      if (this.form.phone.startsWith("0") || this.form.phone.startsWith("٠")) {
        this.form.phone = this.form.phone.substring(1);
      }
    },
  },
  head() {
    return {
      title: this.titlePage,
    };
  },
};
