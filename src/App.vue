<template>
  <div id="App">
    <header>
      <div class="header">My personal costs</div>
      <div class="main">
        <router-link to="/dashboard" class="link">dashboard</router-link>
        <router-link to="/about" class="link">about</router-link>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
  created() {
    this.$store.dispatch("fetchData");
    this.$store.dispatch("fetchCategoryList");
    this.$router.push({ name: "dashboard" });
  },
};
</script>

<style>
.header {
  text-align: center;
}

.main {
  display: flex;
  justify-content: center;
}
.link {
  margin-right: 10px;
}
</style>
