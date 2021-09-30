<template>
  <div id="app">
    <header>
      <div class="header">My personal costs</div>
    </header>
    <main>
      <button @click="showAddForm">ADD NEW COST +</button>
      <AddPaymentForm @addNewPayment="addNewPayment" :showForm="showForm" />
      <PaymentsDisplay :items="getPaymentList" />
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import AddPaymentForm from "./components/AddPaymentForm.vue";
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
  },

  data: () => {
    return {
      paymentsList: [],
      showForm: false,
    };
  },

  methods: {
    ...mapMutations(["setPaymentsListData"]),
    fetchData() {
      return [
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
      ];
    },
    addNewPayment(data) {
      data.id = this.getPaymentList.length + 1;
      this.$store.commit('addDataToPaymentList', data);
    },
    showAddForm() {
      return (this.showForm = !this.showForm);
    },
  },

  computed: {
    ...mapGetters(["getPaymentList", "getFullPaymentValue"]),
  },

  created() {
    // this.paymentsList = this.fetchData();
    this.setPaymentsListData(this.fetchData());
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
