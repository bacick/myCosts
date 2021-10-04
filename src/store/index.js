import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paymentList: [],
    categoryList: [],
  },
  mutations: {
    setPaymentsListData(state, payload) {
      state.paymentList = payload;
    },
    addDataToPaymentList(state, payload) {
      state.paymentList.push(payload);
    },
    setCategoryList(state, payload) {
      if (!Array.isArray(payload)) {
        payload = [payload]
      }
      state.categoryList = payload
    },
  },
  getters: {
    getPaymentList: (state) => state.paymentList,
    getFullPaymentValue: (state) => {
      return state.paymentList.reduce((sum, item) => sum + item.value, 0);
    },
    getCategoryList: (state) => state.categoryList,
  },
  actions: {
    fetchData ({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: 1,
              date: "28.03.2020",
              category: "Food",
              value: 169,
            },
            {
              id: 2,
              date: "24.03.2020",
              category: "Transport",
              value: 360,
            },
            {
              id: 3,
              date: "24.03.2020",
              category: "Food",
              value: 532,
            },
          ])
        }, 3000)
      })
        .then(res => {
          commit('setPaymentsListData', res)
        })
    },
    loadCategoryList({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(['Foot', 'Transport', 'Drugs', 'Harlots', 'Pets', 'Books', 'Alcohol'])
        },2000)
      })
        .then(res => {
          commit('setCategoryList', res)
      })
    },
  }
});
