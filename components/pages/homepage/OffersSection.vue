<template>
  <section class="products padd-t-30" v-if="offers.length">
    <div class="container">
      <div class="h3 sub-head">
        {{ $t("front.offers") }}
        <nuxt-link class="more" :to="localePath('offers')">{{
          $t("front.more")
        }}</nuxt-link>
      </div>
      <div id="product-carousel">
        <VueSlickCarousel v-bind="productSlides">
          <productBlock
            v-for="(product, key) in offers"
            :key="key"
            :product="product"
          />
        </VueSlickCarousel>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "OffersSection",
  props: ["offers", "productSlides"],
};
</script>
