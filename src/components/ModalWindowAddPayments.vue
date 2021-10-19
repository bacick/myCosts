<template>
  <div class="wrapper" v-if="showForm">
    <div class="overlay"></div>
    <div class="header">{{ title }}</div>
    <div class="content">
      <!-- <AddPaymentForm v-if="content === 'AddPaymentForm'" /> -->
      <component :is="content" />
      <div class="footer">
        <button @click="onCloseClick">Close</button>
      </div>
    </div>
  </div>
</template>
<script>
import AddPaymentForm from "./AddPaymentForm.vue";

export default {
  name: "ModalWindowAddPayments",
  components: { AddPaymentForm },
  props: {
    content: String,
    title: String,
    showForm: Boolean,
  },
  methods: {
    onCloseClick() {
      this.$modal.hide();
    },
  },
};
</script>
