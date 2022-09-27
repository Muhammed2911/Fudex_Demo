<template>
  <!-- Main Content-->
  <main class="main-content">
    <!--login-content-->
    <section class="login-content">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="l-form">
              <div class="text-center">
                <h3>{{ $t("front.login") }}</h3>
                <p class="grey">{{ $t("front.add_all_data") }}</p>
                <b-form @submit.prevent="" class="form">
                  <div class="input-group">
                    <select
                      :title="$t('front.country_code')"
                      class="selectpicker form-control login-input"
                    >
                      <option value="966">SA</option>
                      <option value="20">EG</option>
                    </select>
                    <input
                      class="form-control login-input"
                      type="text"
                      :placeholder="$t('front.phone')"
                      @input="handlePhoneNumber"
                    />
                  </div>
                  <!-- </div> -->
                  <input
                    class="form-control login-input"
                    type="password"
                    name="password"
                    :placeholder="$t('front.password')"
                  />

                  <button type="submit" class="button btn-gredient full">
                    {{ $t("front.login") }}
                  </button>
                  <div class="inline-d">
                    <p class="grey">{{ $t("front.not_have_account") }}</p>
                    <nuxt-link class="blue" :to="localePath('register')">
                      {{ $t("front.new_account") }}
                    </nuxt-link>
                  </div>
                </b-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- End Main Content-->
</template>

<script src="./index.js"></script>
