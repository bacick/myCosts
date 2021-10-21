

<template>
  <div class="context" v-on-clickaway="onClose" v-if="shown" :style="styles">
    <div
      class="context__item"
      v-for="item in items"
      :key="item.text"
      @click="onCLick(item)"
    >
      {{ item.text }}
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
export default {
  name: "ContextMenu",
  mixins: [ clickaway ],
  data() {
    return {
      items: [],
      shown: false,
      xPos: 0,
      yPos: 0,
    };
  },
  methods: {
    onCLick(item) {
      item.action();
    },
    onShown({ items, caller }) {
      this.items = items;
      this.shown = true;
      this.setPosition(caller);
    },
    onClose() {
      this.items = [];
      this.shown = false;
    },
    setPosition(caller) {
      const pos = caller.getBoundingClientRect();
      this.xPos = pos.left;
      this.yPos = pos.top;
    },
  },
  computed: {
    styles() {
      return {
        top: `${this.yPos + 10}px`,
        left: `${this.xPos + 20}px`,
      };
    },
  },
  // created() {
  //          let vm = this;
  //           document.addEventListener('click', function () {
  //            vm.onClose();
  //           });
  //       },
  mounted() {
    this.$context.EventBus.$on("shown", this.onShown);
    this.$context.EventBus.$on("close", this.onClose);
  },
  beforeDestroy() {
    this.$context.EventBus.$off("shown", this.onShown);
    this.$context.EventBus.$off("close", this.onClose);
  },
};
</script>

<style>
.context {
  position: absolute;
  background: #eee;
  cursor: pointer;
}
</style>
