<template>
  <div class="col-12 sm-6 product">
    <div class="product-img">
      <nuxt-link to="">
        <img :src="product.image" loading="lazy" />
      </nuxt-link>
    </div>
    <div class="product-details">
      <div class="border-b">
        <nuxt-link to="">
          <h4>{{ product.name }}</h4>
        </nuxt-link>
      </div>
      <div class="border-b">
        <div class="row">
          <div class="col-6">
            <h5 class="blue price">
              {{ Number(product.price) }}
              <span>{{ $t("front.riyal") }}</span>
            </h5>
          </div>
          <div class="col-6 text-right" v-if="product.discount">
            <h6 class="sale">
              {{ product.price_including_tax }}{{ $t("front.riyal") }}
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./-index.js"></script>
<style scoped>
/* .product .product-img img {
  max-width: 250px;
  max-height: 150px;
} */
.product .product-img {
  height: 200px !important;
}
</style>
