<template>
  <div class="add-form" v-if="showForm">
    <input type="date" placeholder="Date" v-model="date" />
    <select name="Category" v-model="category">
      <option v-for="(option, idx) in categoryList" :value="option" :key="idx">
        {{ option }}
      </option>
    </select>
    <!-- <input type="text" placeholder="Category" v-model="category" /> -->
    <input type="number" placeholder="Value" v-model.number="value" />
    <button @click="onSaveClick">Save</button>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",
  props: {
    showForm: {
      type: Boolean,
      default: false,
    },
    categoryList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      category: "",
      value: "",
      date: "",
    };
  },
  methods: {
    onSaveClick() {
      const data = {
        id: "",
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: +this.value,
      };
      this.$emit("addNewPayment", data);
    },
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const day = today.getDate();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();
      return `${day}.${month}.${year}`;
    },
  },
};
</script>
