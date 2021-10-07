<template>
  <div class="pagination">
    <button v-if="page > 1" @click="page--">Previous</button>
    <button
      v-for="(pageNumber, idx) in pages.slice(page - 1, page + 6)"
      :key="idx"
      @click="setActivPage(pageNumber)"
      :class="{ active: activPage === pageNumber }"
    >
      {{ pageNumber }}
    </button>
    <button v-if="page < pages.length - 2" @click="page++">Next</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    pages: {
      type: Array,
      default: () => [],
    },
    activPage: {
      type: Number,
    },
  },
  data() {
    return {
      page: 1,
    };
  },
  methods: {
    setActivPage(numPage) {
      this.$emit("changepage", numPage);
    },
  },
};
</script>

<style>
.pagination {
  display: flex;
  justify-content: center;
}

.active {
  background: rgb(36, 142, 212);
  color: #000;
}
</style>
