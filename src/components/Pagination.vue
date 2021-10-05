<template>
  <div class="pagination">
    <button v-if='page > 1' @click="page--">Previous</button>
    <button v-for="(pageNumber, idx) in pages.slice(page-1, page+2)" :key="idx">
        {{ pageNumber }}
    </button>
    <button v-if='page < pages.length-2' @click="page++">Next</button>
  </div>
</template>

<script>
export default {
    name: "Pagination",
    props: {
        pages: {
            type: Array,
            default: () => []
        },
    },
    data () {
      return {
          page: 1
        }
    }
}
</script>

<style>
    .pagination {
        display: flex;
        justify-content: center;
    }
</style>
