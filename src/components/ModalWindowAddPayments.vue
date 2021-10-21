<template>
  <div class="wrapper" v-if="showForm">
    <div class="overlay"></div>
    <div class="header add-titel">{{ title }}</div>
    <div class="content">
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

<style >
.wrapper {
  border: 1px solid red;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  }  

.overlay {
    z-index: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: #ccccccbf;;
  }
.add-titel {
    margin-top: 20px;
    z-index: 100;
    position: relative;
}

.content {
    position: relative;
    z-index: 100;
    text-align: center
  }

  
</style>

