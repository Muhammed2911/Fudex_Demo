<template>
  <!-- Main Content-->
  <main class="main-content">
    <!--map-->
    <client-only>
      <div class="custom-padd">
        <div class="container">
          <ul class="map">
            <li>
              <nuxt-link :to="localePath('index')">{{
                $t("front.home")
              }}</nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="{
                  path: localePath('products'),
                  query: { category: product.category.id },
                }"
              >
                {{ product.category.name }}
              </nuxt-link>
            </li>
            <li>
              <a href="#">{{ product.name }}</a>
            </li>
          </ul>
        </div>
      </div>
      <!--product-det-->
      <section class="product-det">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="carousel slide" id="product-car" data-ride="carousel">
                <div class="carousel-inner">
                  <VueSlickCarousel v-bind="slides">
                    <div class="carousel-item active">
                      <img :src="product.image" alt="" />
                    </div>
                    <div
                      v-for="(attachment, key) in product.attachments"
                      :key="`attach_up${key}`"
                      class="carousel-item"
                    >
                      <img :src="attachment.file" alt="" />
                    </div>
                  </VueSlickCarousel>
                </div>
                <!-- <ul class="carousel-indicators">
                  <li class="d-flex justify-content-center active"
                    data-target="#product-car" data-slide-to="0">
                    <img src="~/assets/website/imgs/home/product-img@2x.png" alt="">
                  </li>
                  <li class="d-flex justify-content-center" data-target="#product-car" data-slide-to="1"><img src="~/assets/website/imgs/home/product-img@2x.png" alt=""></li>
                  <li class="d-flex justify-content-center" data-target="#product-car" data-slide-to="2"><img src="~/assets/website/imgs/home/product-img@2x.png" alt=""></li>
                </ul> -->
              </div>
            </div>
            <div class="col-md-6">
              <div class="product-info">
                <h3>{{ product.name }}</h3>
                <div class="rate">
                  <i
                    v-for="idx in totalRate"
                    :key="`incre${idx}`"
                    class="fas fa-star rated"
                  ></i>
                  <i
                    v-for="idx in 5 - totalRate"
                    :key="`decre${idx}`"
                    class="fas fa-star"
                  ></i>
                  <span class="yellow">{{ product.rate }}</span>
                </div>
                <div class="price-info">
                  <h5 class="blue price">
                    {{ product.price_after_discount
                    }}<span>{{ $t("front.riyal") }}</span>
                  </h5>
                  <h6 class="sale" v-if="product.discount">
                    {{ product.price_including_tax }}{{ $t("front.riyal") }}
                  </h6>
                  <div class="red-sale" v-if="product.discount">
                    <span
                      >{{ $t("front.discount") }}{{ product.discount }}%</span
                    >
                  </div>
                </div>
                <p class="grey">
                  {{ product.description }}
                </p>
                <div class="seller">
                  <span class="blue">{{ $t("front.merchant") }} : </span>
                  <!-- <img src="~/assets/website/imgs/product/seller-logo.png" alt=""> -->
                  <span class="green">{{ product.store.name }}</span>
                </div>
                <div class="row mr-15">
                  <div class="col-4">
                    <div class="increament-input">
                      <button
                        class="value-button pro-decrease"
                        @click="decreaseQty"
                      >
                        -
                      </button>
                      <input
                        class="pro-number"
                        type="number"
                        min="1"
                        :max="product.quantity"
                        v-model="cart.quantity"
                      />
                      <button
                        class="value-button pro-increase"
                        @click="increaseQty"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div class="col-6 col-md-5">
                    <button class="button btn-gredient full" @click="addToCart">
                      <img
                        src="~/assets/website/imgs/product/cart.svg"
                        alt=""
                      />
                      {{ $t("front.add_to_cart") }}
                    </button>
                  </div>
                </div>
                <div class="mr-15">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="pro-like" @click="switchFav()">
                        <i
                          :class="`fas fa-heart ${
                            product.is_favourite ? 'active' : ''
                          }`"
                        ></i
                        ><span class="grey">
                          {{
                            !product.is_favourite
                              ? $t("front.add_to_favourite")
                              : $t("front.remove_from_favourite")
                          }}
                        </span>
                      </div>
                    </div>
                    <div class="col-md-6 text-right">
                      <ul class="share-pro">
                        <li>
                          <a
                            v-if="product.catalog && product.catalog != ''"
                            :href="product.catalog"
                            target="_blank"
                            class="pdf-icon"
                            :title="$t('front.catalog')"
                          >
                            <i class="fas fa-file-pdf red"></i>
                          </a>
                        </li>
                        <li>
                          <!-- <a href="#"> -->
                          <img
                            src="~/assets/website/imgs/product/share.svg"
                            alt="thumb"
                            style="cursor: pointer"
                            @click="$refs['share_modal'].show()"
                          />
                          <!-- </a> -->
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- <div class="pro-more">
                  <label class="grey">?????? ????????????  :</label><span class="blue">254178954</span>
                </div> -->
                <div class="pro-more" v-if="product.category">
                  <label class="grey">{{ $t("front.category") }} :</label>
                  <span class="blue">{{ product.category.name }}</span>
                </div>
                <div class="pro-more">
                  <label class="grey">{{ $t("front.barcode") }} :</label>
                  <span class="blue">{{ product.barcode }}</span>
                </div>
                <div class="pro-more" v-if="product.tags.length">
                  <label class="grey">{{ $t("front.tags") }} :</label>
                  <span class="blue">{{ product.tags.join() }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!--description-->
      <section class="description mr-15">
        <div class="container">
          <h4>{{ $t("front.product_details") }}</h4>
          <p class="grey">{{ product.description }}</p>
          <div class="table-responsive" v-if="product.properties.length">
            <table class="table table-striped">
              <tbody>
                <tr
                  v-for="(property, key) in product.properties"
                  :key="`prop${key}`"
                >
                  <td class="grey col-3">{{ property.property.name }}</td>
                  <td class="blue col-9">{{ property.value }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <!--description-->

      <!--products-->
      <section class="products custom-padd">
        <div class="container">
          <div class="h3 sub-head">
            {{ $t("front.related_products") }}
            <nuxt-link
              class="more"
              v-if="products.length"
              :to="{
                path: localePath('products'),
                query: { category: product.category.id },
              }"
            >
              {{ $t("front.more") }}
            </nuxt-link>
          </div>
          <div id="product-carousel2">
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
      <!--rate-->
      <section class="rate">
        <div class="container">
          <h3>{{ $t("front.ratings") }}</h3>
          <div class="row align-items-center">
            <div class="col-6 col-md-4">
              <div class="rate lg">
                <span class="yellow">{{ product.rate }}</span>
                <i
                  v-for="idx in totalRate"
                  :key="`incre${idx}`"
                  class="fas fa-star rated"
                ></i>
                <i
                  v-for="idx in 5 - totalRate"
                  :key="`decre${idx}`"
                  class="fas fa-star"
                ></i>
              </div>
              <p class="grey">
                {{ $t("front.based_on") }} {{ product.rating_users_no }}
                {{ $t("front.rate") }}
              </p>
            </div>
            <div class="col-6 col-md-4">
              <div
                v-for="(rating, key) in product.rating_statistics"
                :key="`rate${key}`"
                class="row align-items-center"
              >
                <div class="col-2">
                  <span>{{ rating.rate }}</span>
                </div>
                <div class="col-8">
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      :style="`width: ${rating.rate / 100}%;`"
                    ></div>
                  </div>
                </div>
                <div class="col-2">
                  <span>{{ rating.users_no }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--rate-->
      <section class="client-rate mr-15">
        <div class="container" v-if="ratings.length">
          <h3>{{ $t("front.comments") }}</h3>
          <div
            v-for="(rating, key) in ratings"
            :key="`comment${key}`"
            class="rate-desc"
          >
            <div class="row align-items-end">
              <div class="col-4 col-md-2 col-lg-1">
                <img :src="rating.user.avatar" :alt="rating.user.name" />
              </div>
              <div class="col-8 col-md-10 col-lg-11">
                <span class="grey date">
                  {{ rating.created_at }}
                </span>
                <div class="inline-d">
                  <p>{{ rating.user.name }}</p>
                  <!-- <div class="check"><img src="~/assets/website/imgs/product/check.svg" alt=""><span class="blue">?????????? ????????????</span></div> -->
                </div>
                <div class="rate">
                  <i
                    v-for="index in rating.rate"
                    :key="`comment${key}inc_${index}`"
                    class="fas fa-star rated"
                  ></i>
                  <i
                    v-for="index in 5 - rating.rate"
                    :key="`comment${key}dec_${index}`"
                    class="fas fa-star"
                  ></i>
                </div>
                <p class="dgrey">{{ rating.comment }}</p>
              </div>
            </div>
          </div>

          <button
            class="button btn-gredient mt-2"
            v-if="enableLoadMore"
            @click="loadMoreRatings"
          >
            {{ $t("front.more") }}
          </button>
        </div>
        <div class="container" v-else>
          <h3>{{ $t("front.comments") }}</h3>
          <div class="text-center alert-div">
            {{ $t("front.no_results") }}
          </div>
        </div>
      </section>
      <section class="user-rate" v-if="canRate">
        <div class="container">
          <div class="row">
            <div class="col-md-6 rate-form">
              <form @submit.prevent="create">
                <h3>{{ $t("front.add_rate") }}</h3>
                <div class="inline-d">
                  <label>{{ $t("front.your_rate") }}</label>
                  <div class="starrating risingstar">
                    <StarsRatings
                      v-bind:increment="1"
                      v-bind:max-rating="5"
                      inactive-color="#D3E6FB"
                      active-color="#f9ae00"
                      v-bind:star-size="20"
                      v-model="form.rate"
                      name="rate"
                      v-validate="'required'"
                    >
                    </StarsRatings>
                    <span
                      v-show="errors.has('rate')"
                      class="text-error text-danger text-sm"
                    >
                      {{ errors.first("rate") }}
                    </span>
                  </div>
                </div>
                <textarea
                  v-model="form.comment"
                  v-validate="'required'"
                  class="form-control mr-15"
                  name="comment"
                  cols="40"
                  rows="10"
                  :placehoder="$t('front.add_comment')"
                ></textarea>
                <span
                  v-show="errors.has('comment')"
                  class="text-error text-danger text-sm"
                >
                  {{ errors.first("comment") }}
                </span>
                <br />
                <button type="submit" class="button btn-gredient">
                  {{ $t("front.send_rate") }}
                </button>
              </form>
            </div>
          </div>
        </div>

        <!-- start:: share_modal -->
        <b-modal ref="share_modal" id="share_modal" hide-footer hide-header>
          <div class="modal-f text-center">
            <h4 class="text-black">{{ $t("front.share_title") }}</h4>
            <h6 class="text-black">{{ $t("front.share_desc") }}</h6>
            <div class="share_buttons">
              <ShareNetwork
                v-for="network in networks"
                :network="network.network"
                :key="network.network"
                :style="{ backgroundColor: network.color }"
                :url="sharing.url"
                :title="$t('front.share_text')"
              >
                <b-icon :icon="network.icon" variant="light"></b-icon>
              </ShareNetwork>
            </div>
          </div>
        </b-modal>
        <!-- end:: share_modal -->
      </section>
    </client-only>
  </main>
  <!-- End Main Content-->
</template>

<script src="./index.js"></script>
<style src="./index.css"></style>
