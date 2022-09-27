<template>
  <section class="stores">
    <div class="container">
      <div class="h3 sub-head">
        {{ $t("front.most_famous_stores") }}
        <nuxt-link class="more" :to="localePath('stores')">{{
          $t("front.more")
        }}</nuxt-link>
      </div>
      <div id="store-carousel">
        <VueSlickCarousel v-bind="slides" v-if="stores.length">
          <div class="store-item" v-for="(store, key) in stores" :key="key">
            <div class="store">
              <nuxt-link
                :to="{
                  path: localePath('products'),
                  query: { store: store.id },
                }"
              >
                <div class="store-img">
                  <nuxt-img
                    :src="store.image"
                    loading="lazy"
                    alt="stores"
                    format="webp"
                    width="160"
                    height="125"
                    preload
                  />
                </div>
                <div class="store-wrap">
                  <!-- <img src="~/assets/website/imgs/home/panasonic@2x.png"> -->
                </div>
              </nuxt-link>
            </div>
            <div class="store-link">
              <nuxt-link
                :to="{
                  path: localePath('products'),
                  query: { store: store.id },
                }"
              >
                {{ store.name }}
              </nuxt-link>
            </div>
            <div class="special" v-show="store.is_featured">
              <i class="fas fa-star"></i>
            </div>
          </div>
        </VueSlickCarousel>
        <div v-else class="text-center alert-div">
          {{ $t("front.no_results") }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FamousStores",
  props: ["stores"],
  data() {
    return {
      slides: {
        dots: true,
        rtl: true,
        infinite: true,
        autoplay: true,
        focusOnSelect: false,
        autoplaySpeed: 3000,
        initialSlide: 6,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 2,
        adaptiveHeight: true,
        touchThreshold: 6,
        dotsClass: "slick-dots custom-dot-class",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
};
</script>
