export const state = () => ({
  ads: [],
  brands: [],
  stores: [],
  centers: [],
  products: [],
  offers: [],
  banners: [],

  connected: false,
});

export const mutations = {
  SET_ADS(state, payload) {
    state.ads = payload;
  },
  SET_BRANDS(state, payload) {
    state.brands = payload;
  },
  SET_STORES(state, payload) {
    state.stores = payload;
  },
  SET_CENTERS(state, payload) {
    state.centers = payload;
  },
  SET_PRODUCTS(state, payload) {
    state.products = payload;
  },
  SET_OFFERS(state, payload) {
    state.offers = payload;
  },
  SET_BANNERS(state, payload) {
    state.banners = payload;
  },
};

export const getters = {
  get_ads(state) {
    return state.ads;
  },
  get_brands(state) {
    return state.brands;
  },
  get_stores(state) {
    return state.stores;
  },
  get_centers(state) {
    return state.centers;
  },
  get_products(state) {
    return state.products;
  },
  get_offers(state) {
    return state.offers;
  },
  get_banners(state) {
    return state.banners;
  },
  get_status(state) {
    return state.connected;
  },
};
