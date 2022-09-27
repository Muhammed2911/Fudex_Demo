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
                  <div class="step" id="step-1" v-if="stepper == 1">
                    <h3>{{ $t('front.new_account') }}</h3>
                    <p class="grey">{{ $t('front.new_account') }}</p>
                    <b-form @submit.prevent="submit()" class="form">
                      <input class="form-control login-input" type="text" name="name" :placeholder="$t('front.username')"
                        v-model="form.name" v-validate="{ required: true }">
                      <span v-show="errors.has('name')" class="text-error text-danger text-sm">
                        {{ errors.first("name") }}
                      </span>

                      <input class="form-control login-input" type="text" name="email" :placeholder="$t('front.email')"
                        v-model="form.email" v-validate="{ required: true, email: true }">
                      <span v-show="errors.has('email')" class="text-error text-danger text-sm">
                        {{ errors.first("email") }}
                      </span>

                      <!-- <VuePhoneNumberInput v-model="form.phone"
                        v-validate="{ required: true }"
                        :translations="translations"
                        default-country-code="SA"
                        @update="updatePhoneNumber"
                        name="phone"
                      /> -->
                      <div class="input-group">
                        <select :title="$t('front.country_code')" class="selectpicker form-control login-input" v-model="form.country_code">
                          <option v-for="(country, key) in countries" :key="`count${key}`"
                            :data-thumbnail="country.flag" :value="country.code" :selected="country.code == '966'">
                            {{country.code}}
                          </option>
                        </select>
                        <input class="form-control login-input" type="text" name="phone" :placeholder="$t('front.phone')" @input="handlePhoneNumber"
                          v-model="form.phone" v-validate="{ required: true, numeric: true, min: 7, max: 15 }">
                      </div>
                      <span v-show="errors.has('phone')" class="text-error text-danger text-sm">
                        {{ errors.first("phone") }}
                      </span>

                      <input class="form-control login-input" type="password" name="password" :placeholder="$t('front.password')"
                        v-model="form.password" v-validate="{ required: true, min: 8 }">
                      <span v-show="errors.has('password')" class="text-error text-danger text-sm">
                        {{ errors.first("password") }}
                      </span>
                      <input class="form-control login-input" type="password" name="password_confirmation" :placeholder="$t('front.confirm_password')"
                        v-model="form.password_confirmation" v-validate="{ required: true, min: 8 }">
                      <span v-show="errors.has('password_confirmation')" class="text-error text-danger text-sm">
                        {{ errors.first("password_confirmation") }}
                      </span>

                      <button type="submit" class="button btn-gredient full">{{ $t('front.next') }}</button>
                      <div class="inline-d">
                        <p class="grey">{{ $t('front.have_account') }}</p>
                        <nuxt-link class="blue" :to="localePath('login')">
                          {{ $t('front.make_login') }}
                        </nuxt-link>
                      </div>
                    </b-form>
                  </div>

                  <activation-modal
                    :phone="form.phone"
                    :country_code="form.country_code"
                    :type="'activate'"
                    v-if="stepper == 2"
                  />

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
