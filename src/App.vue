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
      <PaymentsDisplay :items="getPaymentList" />
      <Pagination :pages="pages" />
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import AddPaymentForm from "./components/AddPaymentForm.vue";
import Pagination from "./components/Pagination.vue";
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination,
  },

  data: () => {
    return {
      showForm: false,
      pages: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      activPage: 1,
      perPage: 3,
      images: [],
    };
  },

  methods: {
    ...mapMutations(["setPaymentsListData"]),
    
    addNewPayment(data) {
      data.id = this.getPaymentList.length + 1;
      this.$store.commit("addDataToPaymentList", data);
    },
    showAddForm() {
      return (this.showForm = !this.showForm);
    },
    setImageElement() {
      let from = (this.page * this.perPage) - this.perPage;
      let to = this.page * this.perPage;
      return this.images = this.getPaymentList.slice(from, to)
    }
  },

  computed: {
    ...mapGetters(["getPaymentList", "getFullPaymentValue", "getCategoryList"]),
  },

  // actions: {
  //   ...mapActions(['loadCategotyList'])
  // },

  created() {
    // this.paymentsList = this.fetchData();
    // this.setPaymentsListData(this.fetchData);
    this.$store.dispatch("fetchData");
    this.$store.dispatch("loadCategoryList");
    this.setImageElement()
  },
  // mounted() {
  //   if(!this.getCategoryList.length) {
  //     // this.loadeCategoryList()
  //     this.$store.dispatch('loadCategoryList')
  //   }
  // }
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
