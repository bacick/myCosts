<template>
  <div id="app">
    <header>
      <div class="header">My personal costs</div>      
    </header>    
    <main>
      <button @click="showAddForm">ADD NEW COST +</button>
      <AddPaymentForm
        @addNewPayment="addNewPayment"
        :categoryList="getCategoryList"
        :showForm="showForm"
      />
      <PaymentsDisplay :items="setImageElement" />
      <Pagination
        :pages="setPages"
        :activPage="activPage"
        @changepage="changeActivPage"
      />
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import AddPaymentForm from "../components/AddPaymentForm.vue";
import Pagination from "../components/Pagination.vue";
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination,
  },

  data: () => {
    return {
      showForm: false,
      activPage: 1,
      perPage: 10,
    };
  },

  methods: {
    ...mapMutations(["setPaymentsListData"]),

    addNewPayment(data) {
      data.id = this.paymentList.length + 1;
      this.$store.commit("addDataToPaymentList", data);
    },
    showAddForm() {
      return (this.showForm = !this.showForm);
    },

    changeActivPage(numPage) {
      this.activPage = numPage;
    },
  },

  computed: {
    ...mapGetters(["getPaymentList", "getFullPaymentValue", "getCategoryList"]),

    paymentList() {
      return this.$store.getters.getPaymentList;
    },
    setImageElement() {
      let from = this.activPage * this.perPage - this.perPage;
      let to = this.activPage * this.perPage;
      return this.paymentList.slice(from, to);
    },
    setPages() {
      let pages = [];
      let pagesNum = Math.ceil(this.paymentList.length / this.perPage);
      for (let i = 1; i <= pagesNum; i++) {
        pages.push(i);
      }
      return pages;
    },
  },
  created() {
    this.$store.dispatch("fetchData");
    this.$store.dispatch("loadCategoryList");
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
