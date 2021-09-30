import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paymentList: [],
  },
  mutations: {
    setPaymentsListData(state, payload) {
      state.paymentList = payload;
    },
    addDataToPaymentList(state, payload) {
      state.paymentList.push(payload);
    },
  },
  getters: {
    getPaymentList: (state) => state.paymentList,
    getFullPaymentValue: (state) => {
      return state.paymentList.reduce((sum, item) => sum + item.value, 0);
    },
  },
});
