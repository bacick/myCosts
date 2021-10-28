<template>
  <div id="app">
    <main>
      <PaymentsDisplay :items="setImageElement" />
      <router-link to="/dashboard/add/payment/Sport?value=400">
        Sport400</router-link
      >
      /

      <router-link to="/dashboard/add/payment/Education?value=500">
        Education500</router-link
      >
      /

      <router-link to="/dashboard/add/payment/Transport?value=600">
        Transport600</router-link
      >
      <Pagination
        :pages="setPages"
        :activPage="activPage"
        @changepage="changeActivPage"
      />
      <button @click="addPayment">Add Payment</button>
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import Pagination from "../components/Pagination.vue";
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    Pagination,
  },

  data: () => {
    return {
      activPage: 1,
      perPage: 10,
      page: 1,
    };
  },

  methods: {
    ...mapMutations(["setPaymentsListData"]),

    changeActivPage(numPage) {
      this.activPage = numPage;
    },
    addPayment() {
      this.$modal.show({
        title: "Add Payment Form",
        content: "AddPaymentForm",
      });
    },
    addItem() {
      this.$modal.show({
        title: "Add Payment Form",
        content: "AddPaymentForm",
        data: {
          category: this.$route.params.category || "",
          value: this.$route.query?.value || "",
        },
      });
    },
  },

  computed: {
    ...mapGetters(["getPaymentList", "getFullPaymentValue"]),

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
  watch: {
    $route(to) {
      if (to.name === "AddPaymentFromUrl") {
        this.addItem();
      }
    },
  },
  async created() {
    if (this.$route.params.page) {
      this.page = Number(this.$route.params.page);
    }
    await this.$store.dispatch("fetchData");
    await this.$store.dispatch("loadCategoryList");
    // this.activPage = Number(this.$route.params.page);
    this.$route.params.page = this.activPage;
    if (this.$route.name === "AddPaymentFromUrl") {
      this.addItem();
    }
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
  margin-top: 20px;
}
</style>
