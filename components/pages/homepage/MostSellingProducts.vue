<template>
  <section class="products padd-t-30">
    <div class="container">
      <div class="h3 sub-head">
        {{ $t("front.most_selling_products") }}
        <nuxt-link class="more" :to="localePath('products')">{{
          $t("front.more")
        }}</nuxt-link>
      </div>
      <div id="product-carousel">
        <VueSlickCarousel v-bind="productSlides" v-if="products.length">
          <productBlock
            v-for="(product, key) in products"
            :key="key"
            :product="product"
          />
        </VueSlickCarousel>
        <div v-else class="text-center alert-div">
          {{ $t("front.no_results") }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import productBlock from "~/pages/products/-product/-index.vue";

export default {
  name: "MostSellingProducts",
  props: ["products", "productSlides"],
  components: { productBlock },
};
</script>
