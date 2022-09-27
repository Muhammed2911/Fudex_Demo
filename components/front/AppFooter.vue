<template>
  <client-only>
    <!-- Main footer-->
    <footer class="main-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-2">
            <div class="foot-logo">
              <!-- <img src="~/assets/website/imgs/home/logo-foot@2x.png" alt=""> -->
              <nuxt-link :to="localePath('index')" class="cursor">
                <img
                  v-if="currentLocale == 'en'"
                  src="../../assets/website/imgs/home/foot-logo-en.svg"
                  alt=""
                />
                <img
                  v-else
                  src="~/assets/website/imgs/home/foot-logo-ar.svg"
                  alt=""
                />
              </nuxt-link>
            </div>
          </div>
          <div class="col-md-4">
            <h4>{{ $t("front.important_links") }}</h4>
            <div class="row">
              <div class="col-6">
                <ul>
                  <li>
                    <nuxt-link :to="localePath('stores')">{{
                      $t("front.stores")
                    }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="localePath('centers')">{{
                      $t("front.centers")
                    }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="localePath('about')">{{
                      $t("front.about_us")
                    }}</nuxt-link>
                  </li>
                </ul>
              </div>
              <div class="col-6">
                <ul>
                  <li>
                    <nuxt-link :to="localePath('refund-policy')">{{
                      $t("front.refund_policy")
                    }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="localePath('policy')">{{
                      $t("front.policy")
                    }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="localePath('terms')">{{
                      $t("front.terms")
                    }}</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <client-only>
            <div class="col-6 col-md-3" v-if="settings">
              <h4>{{ $t("front.shop_from_apps") }}</h4>
              <ul class="download">
                <li>
                  <a target="_blank" :href="settings.google_store"
                    ><img
                      src="~/assets/website/imgs/home/google-play.png"
                      alt=""
                  /></a>
                </li>
                <li>
                  <a target="_blank" :href="settings.apple_store"
                    ><img src="~/assets/website/imgs/home/app-store.png" alt=""
                  /></a>
                </li>
              </ul>
            </div>
            <div class="col-6 col-md-3 text-right" v-if="settings">
              <h4>{{ $t("front.contacts") }}</h4>
              <ul class="social-footer">
                <li>
                  <a target="_blank" :href="settings.youtube"
                    ><i class="fab fa-youtube"></i
                  ></a>
                </li>
                <li>
                  <a target="_blank" :href="settings.facebook"
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                </li>
                <li>
                  <a target="_blank" :href="settings.instagram"
                    ><i class="fab fa-instagram"></i
                  ></a>
                </li>
                <li>
                  <a target="_blank" :href="settings.twitter"
                    ><i class="fab fa-twitter"></i
                  ></a>
                </li>
              </ul>
              <h5>{{ settings.email }}</h5>
              <p>{{ $t("front.all_rights_reserved") }}</p>
            </div>
          </client-only>
        </div>
      </div>
    </footer>
    <!-- End Main footer-->
  </client-only>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      currentLocale: (state) => state.localStorage.currentLocale,
      settings: (state) => state.localStorage.settings,
    }),
  },
  methods: {},
};
</script>
