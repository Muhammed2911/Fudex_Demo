<template>
  <!-- Main Content-->
  <client-only>
    <main class="main-content">
      <!--banner-->
      <section class="banner">
        <div id="banner-carousel">
          <VueSlickCarousel v-bind="adsSetting" v-if="ads.length">
            <div class="caro-img" v-for="(item, key) in ads" :key="key">
              <img :src="item.image" alt="banner" />
            </div>
          </VueSlickCarousel>
        </div>
      </section>
      <!--brands-->

      <LazyMostFamous :brands="brands"></LazyMostFamous>
      <!-- end:: most_famous_brands -->

      <!--ad-->
      <section class="custom-padd">
        <div class="container">
          <a href="#" v-for="banner in banners" :key="banner.id">
            <div class="adss-wrap">
              <img :src="banner.image" alt="" />
            </div>
          </a>
        </div>
      </section>

      <LazyOffersSection
        :offers="offers"
        :productSlides="productSlides"
      ></LazyOffersSection>
      <!-- end:: offers_section -->

      <LazyMostSellingProducts
        :products="products"
        :productSlides="productSlides"
      ></LazyMostSellingProducts>
    </main>
  </client-only>
  <!-- End Main Content-->
</template>

<script>
export default {
  name: "HomePage",
  async asyncData(context) {},
  data() {
    return {
      titlePage: this.$t("front.home"),
      adsSetting: {
        dots: true,
        rtl: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        initialSlide: 1,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
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
      productSlides: {
        dots: true,
        rtl: true,
        infinite: true,
        autoplay: true,
        focusOnSelect: false,
        autoplaySpeed: 3000,
        initialSlide: 4,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        touchThreshold: 5,
        adaptiveHeight: true,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
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
      products: [
        {
          name: "Product For Test",
          image: require("~/assets/website/imgs/home/banner.png"),
          price: 15000,
          discount: 150,
          price_including_tax: 15500,
        },
        {
          name: "Product For Test",
          image: require("~/assets/website/imgs/home/banner.png"),
          price: 15000,
          discount: 150,
          price_including_tax: 15500,
        },
        {
          name: "Product For Test",
          image: require("~/assets/website/imgs/home/banner.png"),
          price: 15000,
          discount: 150,
          price_including_tax: 15500,
        },
        {
          name: "Product For Test",
          image: require("~/assets/website/imgs/home/banner.png"),
          price: 15000,
          discount: 150,
          price_including_tax: 15500,
        },
      ],
      offers: [],
      centers: [],
      banners: [{ image: require("~/assets/website/imgs/home/banner.png") }],
      stores: [],
      brands: [
        { image: require("~/assets/website/imgs/home/banner.png") },
        { image: require("~/assets/website/imgs/home/banner.png") },
        { image: require("~/assets/website/imgs/home/banner.png") },
        { image: require("~/assets/website/imgs/home/banner.png") },
      ],
      ads: [
        { image: require("~/assets/website/imgs/home/banner.png") },
        { image: require("~/assets/website/imgs/home/banner.png") },
      ],
    };
  },
  async mounted() {},
  computed: {},
  head() {
    return {
      title: this.titlePage,
    };
  },
};
</script>
