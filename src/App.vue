<template>
  <div id="App">
    <header>
      <div class="header">My personal costs</div>
      <div class="main">
        <router-link to="/dashboard" class="link">dashboard</router-link>
        <router-link to="/about" class="link">about</router-link>
      </div>
    </header>
    <main>
      <router-view />
    </main>
    <ModalWindowAddPayments
      v-if="modalSettings.showForm"
      v-bind="modalSettings"
    />
  </div>
</template>

<script>
import ModalWindowAddPayments from "./components/ModalWindowAddPayments.vue";
export default {
  name: "App",
  components: { ModalWindowAddPayments },
  data() {
    return {
      modalSettings: {
        showForm: false,
      },
    };
  },
  methods: {
    showAddForm() {
      this.showForm = false;
    },
    onShown(settings) {
      this.modalSettings = settings;
      this.modalSettings.showForm = true;
    },
    onHide() {
      this.modalSettings = {};
      this.modalSettings.showForm = false;
    },
  },
  mounted() {
    this.$modal.EventBus.$on("onShown", this.onShown);
    this.$modal.EventBus.$on("onHide", this.onHide);
  },
  created() {
    this.$store.dispatch("fetchData");
    this.$store.dispatch("loadCategoryList");
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
