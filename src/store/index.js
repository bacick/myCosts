import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paymentList: [],
    categoryList: [],
  },
  mutations: {
    deleteItemPayment(state, payload) {
      let arr = state.paymentList;
      arr.splice(payload - 1, 1);
      arr.forEach((item, idx) => {
        item.id = idx + 1;
      });
      state.paymentList = arr;
    },
    setPaymentsListData(state, payload) {
      state.paymentList = payload;
    },
    addDataToPaymentList(state, payload) {
      state.paymentList.push(payload);
    },
    setCategoryList(state, payload) {
      if (!Array.isArray(payload)) {
        payload = [payload];
      }
      state.categoryList = payload;
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
    fetchData({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          let elements = [];
          for (let i = 1; i <= 100; i++) {
            elements.push({
              id: i,
              date: "28.03.2020",
              category: "Food",
              value: i * 10,
            });
          }
          resolve(elements);
        }, 1000);
      }).then((res) => {
        commit("setPaymentsListData", res);
      });
    },
    loadCategoryList({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            "Foot",
            "Transport",
            "Drugs",
            "Harlots",
            "Pets",
            "Books",
            "Alcohol",
          ]);
        }, 2000);
      }).then((res) => {
        commit("setCategoryList", res);
      });
    },
  },
});
