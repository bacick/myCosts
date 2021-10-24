<template>
  <div>
    <div class="payments" v-for="item in items" :key="item.id">
      <span>{{ item.id }}</span
      >-<span>{{ item.date }}</span
      >-<span>{{ item.category }}</span
      >-<span>{{ item.value }}</span
      >-<span @click="onClickContextItem($event, item)" class="contextevent"
        >...</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onClickContextItem(event, item) {
      const items = [
        {
          text: "Edit",
          action: () => {
            // console.log("edit", item);
            this.actionEdit(item);
          },
        },
        {
          text: "Delete",
          action: () => {
            this.actionDelete(item.id);
          },
        },
      ];
      this.$context.show({ event, items });
    },
    actionDelete(id) {
      this.$store.commit("deleteItemPayment", id);
      this.$context.close();
    },
    actionEdit(item) {
      // console.log(item);
      this.$modal.show({
        title: "Add Payment Form",
        content: "AddPaymentForm",
        data: {
          id: item.id,
          category: item.category || "",
          value: item.value || "",
          date: item.date || "",
        },
      });
      this.$context.close();
    },
  },
};
</script>

<style>
.contextevent {
  cursor: pointer;
}
</style>
