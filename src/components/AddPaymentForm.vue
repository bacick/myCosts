<template>
  <div class="add-form">
    <input type="" placeholder="Date" v-model="date" />
    <select name="Category" v-model="category">
      <option v-for="(option, idx) in categoryList" :value="option" :key="idx">
        {{ option }}
      </option>
    </select>
    <input type="number" placeholder="Value" v-model.number="value" />
    <button @click="onSaveClick">Save</button>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",
  props: {
    data: Object,
  },
  data() {
    return {
      category: this.data?.category || "",
      value: this.data?.value || "",
      date: this.data?.date || "",
    };
  },
  methods: {
    editSave() {
      const data = {
        id: this.data.id,
        date: this.date,
        category: this.category,
        value: +this.value,
      };
      this.$modal.hide();
      this.$store.commit("editItemPayment", data);
    },
    onSaveClick() {
      if (this.data?.id) {
        this.editSave();
        return;
      }
      const data = {
        id: "",
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: +this.value,
      };
      this.addData(data);
    },
    addData(data) {
      data.id = this.paymentList.length + 1;
      this.$store.commit("addDataToPaymentList", data);
    },
  },
  computed: {
    categoryList() {
      return this.$store.getters.getCategoryList;
    },
    paymentList() {
      return this.$store.getters.getPaymentList;
    },
    getCurrentDate() {
      return new Intl.DateTimeFormat("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }).format(new Date());
    },
  },
};
</script>
