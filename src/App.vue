<template>
  <div id="App">
    <header>
      <div class="header">My personal costs</div>
      <a href="#dashboard" class="link">Dashboard</a>
      <a href="#about" class="link">About</a>
      <a href="#notfound" class="link">NotFound</a>
    </header>
    <Dashboard v-if="page === 'dashboard'" />
    <About v-if="page === 'about'" />
    <NotFound v-if="page === 'notfound'" />
  </div>
</template>

<script>
import Dashboard from "./views/Dashboard.vue";
import About from "./views/About.vue";
import NotFound from "./views/NotFound.vue";

export default {
  name: "App",
  components: {
    Dashboard,
    About,
    NotFound,
  },
  data() {
    return {
      page: "dashboard",
    };
  },
  methodes: {
    setPage() {
      this.page = location.hash.slice(1);
    },
  },
  mounted() {
    this.setPage();
    window.addEventListener("hashchange", () => {
      this.setPage();
    });
  },
  created() {
    this.$store.dispatch("fetchData");
    this.$store.dispatch("fetchCategoryList");
  },
};
</script>

<style>
  .header {
    text-align: center;
  }
  .link {
    margin: 0 auto;
    margin-right: 10px;
  }
</style>
