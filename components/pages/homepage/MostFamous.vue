<template>
  <section class="brands custom-padd">
    <div class="container">
      <div class="h3 sub-head">
        {{ $t("front.most_famous_brands") }}
        <nuxt-link class="more" :to="localePath('brands')">{{
          $t("front.more")
        }}</nuxt-link>
      </div>
      <div class="row brand-logos">
        <div
          class="col-6 col-md-3 col-lg-2"
          v-for="(brand, key) in brands"
          :key="key"
        >
          <nuxt-link
            :to="{ path: localePath('products'), query: { brand: brand.id } }"
          >
            <div class="brand">
              <div class="brand-img">
                <img :src="brand.image" loading="lazy" alt="brands" />
              </div>
              <div class="brand-wrap">
                <!-- <div class="row center-v">
                            <div class="col-6"><img src="~/assets/website/imgs/home/lg@2x.png"></div>
                            <div class="col-6 text-right"><img src="~/assets/website/imgs/home/air-conditioner.svg" alt=""></div>
                          </div> -->
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MostFamousBrands",
  props: ["brands"],
};
</script>
