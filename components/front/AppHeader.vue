<template>
  <!-- Main Header-->
  <header class="main-header">
    <div class="bef-h">
      <div class="container">
        <div class="row">
          <div class="offset-md-5 col-md-7">
            <ul class="user-mnu">
              <client-only>
                <li v-show="!authUser">
                  <div class="dropdown">
                    <nuxt-link :to="localePath('/login')">
                      <img src="~/assets/website/imgs/home/user.svg" alt="" />
                    </nuxt-link>
                    <div class="dropdown-menu">
                      <h3>{{ $t("front.make_login") }}</h3>
                      <p class="grey">{{ $t("front.welcome_again") }}</p>
                      <div class="dropdown-items padd-i"></div>
                    </div>
                  </div>
                </li>
                <!--logged user-->
                <li v-show="authUser">
                  <div class="dropdown">
                    <nuxt-link :to="localePath('/login')">
                      <img src="~/assets/website/imgs/home/user.svg" alt="" />
                    </nuxt-link>
                    <div class="dropdown-menu">
                      <h3>{{ $t("front.home") }}</h3>
                      <ul class="dropdown-items">
                        <li>
                          <nuxt-link :to="localePath('profile')">
                            {{ $t("front.profile") }}
                            <i class="fas fa-angle-left"></i>
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link :to="localePath('orders')">
                            {{ $t("front.myorders") }}
                            <i class="fas fa-angle-left"></i>
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link :to="localePath('orders-services')">
                            {{ $t("front.myservices") }}
                            <i class="fas fa-angle-left"></i>
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link :to="localePath('addresses')">
                            {{ $t("front.addresses") }}
                            <i class="fas fa-angle-left"></i>
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link :to="localePath('favourites')">
                            {{ $t("front.favourites") }}
                            <i class="fas fa-angle-left"></i>
                          </nuxt-link>
                        </li>

                        <li>
                          <nuxt-link :to="localePath('profile-wallet')">
                            {{ $t("front.wallet") }}
                            <i class="fas fa-angle-left"></i>
                          </nuxt-link>
                        </li>

                        <!-- <li>
                            <nuxt-link :to="localePath('notifications')">
                              {{$t('admin.notifications')}}
                              <i class="fas fa-angle-left"></i>
                            </nuxt-link>
                          </li> -->
                        <button @click="logout" class="no-btn">
                          <img
                            src="~/assets/website/imgs/account/logout.svg"
                            alt=""
                          />
                          {{ $t("front.logout") }}
                        </button>

                        <!-- <li>
                            <a href="account.html">
                              التنبيهات
                              <i class="fas fa-angle-left"></i>
                            </a>
                          </li> -->
                      </ul>
                    </div>
                  </div>
                </li>

                <li v-show="authUser">
                  <div class="dropdown">
                    <button class="dropdown-toggle" data-toggle="dropdown">
                      <img
                        src="~/assets/website/imgs/home/bell.svg"
                        alt=""
                      /><span class="notifi">{{ notificationCount }}</span>
                    </button>
                    <div class="dropdown-menu">
                      <div class="dropdown-items" v-if="notifications.length">
                        <div
                          class="notification new"
                          v-for="item in notifications"
                          :key="item.id"
                        >
                          <nuxt-link
                            :to="
                              item.data.type != 'order'
                                ? item.data.type == 'service_order'
                                  ? localePath(`/orders/services`)
                                  : localePath(`/orders/${item.data.model_id}`)
                                : '#'
                            "
                          >
                            <div class="row">
                              <div class="col-3 padd-l-0">
                                <!-- <img src="~/assets/website/imgs/account/notification@2x.png" alt=""> -->
                                <img
                                  v-if="item.data.type == 'order'"
                                  :src="authUser.avatar"
                                  alt=""
                                />
                                <img
                                  v-else-if="currentLocale == 'en'"
                                  src="../../assets/website/imgs/home/logo-en.svg"
                                  alt=""
                                />
                                <img
                                  v-else
                                  src="../../assets/website/imgs/home/logo-ar.svg"
                                  alt=""
                                />
                              </div>
                              <div class="col-9">
                                <div class="row">
                                  <div class="col-8">
                                    <h6 class="b">{{ item.data.title }}</h6>
                                  </div>
                                  <div class="col-4 text-right">
                                    <p class="grey">{{ item.created_at }}</p>
                                  </div>
                                </div>
                                <p class="grey">{{ item.data.body }}</p>
                              </div>
                            </div>
                          </nuxt-link>
                        </div>
                      </div>

                      <div v-else class="text-center alert-div">
                        {{ $t("front.no_notification") }}
                      </div>

                      <div class="text-center" v-if="notifications.length">
                        <nuxt-link
                          class="grey more"
                          :to="localePath('notifications')"
                          >{{ $t("front.show_all_notifications") }}</nuxt-link
                        >
                      </div>
                    </div>
                  </div>
                </li>
                <li v-show="authUser">
                  <nuxt-link :to="localePath('favourites')">
                    <img src="~/assets/website/imgs/home/love.png" alt="" />
                  </nuxt-link>
                </li>
              </client-only>

              <li>
                <a @click="switchMyLang('en')">
                  <img
                    v-if="this.$i18n.locale == 'ar'"
                    src="~/assets/website/imgs/home/internet.png"
                    alt=""
                  />
                </a>
                <a @click="switchMyLang('ar')">
                  <img
                    v-if="this.$i18n.locale == 'en'"
                    src="~/assets/website/imgs/home/internet.png"
                    alt=""
                  />
                </a>
              </li>
            </ul>
            <form @submit.prevent="handleSearch">
              <div class="input-group search-g">
                <input
                  class="form-control"
                  type="text"
                  v-model="publicSearch"
                  :placeholder="$t('front.search_about')"
                />
                <div class="input-group-prepend">
                  <button>
                    <img src="~/assets/website/imgs/home/search.svg" alt="" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#menuToggle"
          aria-expanded="false"
        >
          <span class="sr-only">Toggle navigation</span
          ><i class="fas fa-bars"></i>
        </button>
        <nuxt-link :to="localePath('index')" class="navbar-brand cursor">
          <img
            v-if="this.$i18n.locale == 'en'"
            src="~/assets/website/imgs/home/logo-en.svg"
            alt=""
          />
          <img v-else src="~/assets/website/imgs/home/logo-ar.svg" alt="" />
        </nuxt-link>
      </div>
    </nav>
  </header>
  <!-- End Main Header-->
</template>

<script>
import { mapState } from "vuex";
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import NotificationService from "~/services/notification/NotificationService.js";
import CountryService from "~/services/location/CountryService.js";
import moment from "moment";
import LoginService from "~/services/auth/LoginService.js";

export default {
  props: {},
  components: {
    VuePhoneNumberInput,
  },
  data() {
    return {
      routeName: this.$route.name, // dashboard-locations-states___en
      loginData: {
        phone: null,
        country_code: "",
        password: null,
        remember: false,
      },
      translations: {
        countrySelectorLabel: this.$t("front.country_code"),
        // countrySelectorError: 'Choisir un pays',
        phoneNumberLabel: this.$t("front.phone"),
        // example: 'Exemple :'
      },
      publicSearch: "",
      notifications: [],
      notificationCount: "",
      country_codes: [],
      customEvents: [
        {
          eventName: "reset-notification-counter",
          callback: this.resetNotificationCounter,
        },
        { eventName: "load-notification", callback: this.callNotifications },
      ],
    };
  },
  created() {
    this.countryCodes();
    if (this.authUser) {
      this.callNotifications();
    }
    this.customEvents.forEach(
      function (customEvent) {
        // eslint-disable-next-line no-undef
        this.$EventBus.$on(customEvent.eventName, customEvent.callback);
      }.bind(this)
    );
  },
  beforeDestroy() {
    this.customEvents.forEach(
      function (customEvent) {
        // eslint-disable-next-line no-undef
        this.$EventBus.$off(customEvent.eventName, customEvent.callback);
      }.bind(this)
    );
  },
  computed: {
    ...mapState({
      currentLocale: (state) => state.localStorage.currentLocale,
      authUser: (state) => state.localStorage.authUser,
      firebaseToken: (state) => state.localStorage.firebaseToken,
    }),
    currentDate() {
      return moment().lang(this.currentLocale).format("D MMM YYYY");
    },
  },
  methods: {
    async logout() {
      this.$nuxt.$loading.start();

      await LoginService.logout({ device_token: this.firebaseToken })
        .then((res) => {
          this.$store.commit("localStorage/RESET_DATA");
          this.$router.replace(this.localePath("login"));

          this.$toast.success(this.$t("admin.logged_out_successfully"));
        })
        .catch(() => {});
      this.$nuxt.$loading.finish();
    },
    countryCodes() {
      CountryService.getAll("?all=1&is_paginated=0")
        .then((res) => {
          this.country_codes = res;
          this.loginData.country_code = res.length ? res[0].code : "";
        })
        .catch(() => {});
    },
    resetNotificationCounter() {
      this.notificationCount = 0;
    },
    callNotifications() {
      this.messiging();
      this.loadNotificationsData();
    },
    messiging() {
      const messaging = this.$fire.messaging;
      debugger;
      messaging.onMessage((payload) => {
        // debugger
        // console.log('payload', payload)
        // fire event to load data
        this.notificationCount++;
        this.notifications.unshift({
          data: payload.data,
          created_at: this.currentDate,
        });
        debugger;
        if (this.notifications.length >= 3) {
          this.notifications.pop();
        }
        // let beeb = new Audio(require("../assets/notification.mp3"));
        // beeb.play();
        // console.log('onMessage: ', payload)
        // this.loadNotificationsData();
      });
    },
    async loadNotificationsData() {
      const response = await Promise.all([
        NotificationService.firstPage().catch(() => {}),
        NotificationService.count().catch(() => {}),
      ]);
      debugger;
      this.notifications = response[0] ? response[0]?.data : [];
      this.notificationCount = response[1]
        ? response[1]?.notifications_count
        : "";
    },
    async loginForm() {
      this.loginData.phone = this.loginData.phone
        ? this.loginData.phone.replace(/\s+/g, "")
        : null;
      const validData = await this.$validator.validateAll();

      if (validData) {
        this.login(this.loginData);
      }
    },
    updatePhoneNumber(value) {
      this.phoneData = value;
      this.loginData.country_code = value.countryCallingCode;
      this.loginData.phone = this.loginData.phone
        ? this.loginData.phone.replace(/\s+/g, "")
        : null;
    },
    handleSearch() {
      this.$router.push({
        path: this.localePath("products"),
        query: { search: this.publicSearch },
      });
    },
  },
};
</script>
<style scoped>
.navbar-brand img {
  width: 216px;
  height: 66px;
}
</style>
