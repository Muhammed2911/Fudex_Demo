<template>
  <section class="centers">
    <div class="container">
      <div class="h3 sub-head">
        {{ $t("front.most_famous_centers") }}
        <nuxt-link class="more" :to="localePath('centers')">{{
          $t("front.more")
        }}</nuxt-link>
      </div>
      <div id="center-carousel">
        <VueSlickCarousel v-bind="slides" v-if="centers.length">
          <div class="center" v-for="(center, key) in centers" :key="key">
            <nuxt-link
              :to="{
                path: localePath('services'),
                query: { store: center.id },
              }"
            >
              <div class="center-img">
                <nuxt-img
                  :src="center.image"
                  loading="lazy"
                  alt="centers"
                  format="webp"
                  width="160"
                  height="100"
                  preload
                />
              </div>
            </nuxt-link>
            <div class="store-link">
              <nuxt-link
                :to="{
                  path: localePath('services'),
                  query: { store: center.id },
                }"
              >
                {{ center.name }}
              </nuxt-link>
            </div>
            <div class="special" v-show="center.is_featured">
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
  name: "FamousCenter",
  props: ["centers", "slides"],
};
</script>
