export default {
  install(Vue) {
    if (this.installed) {
      return;
    }
    this.installed = true;

    Vue.prototype.$modal = {
      EventBus: new Vue(),
      show(setting) {
        this.EventBus.$emit("onShown", setting);
      },
      hide() {
        this.EventBus.$emit("onHide");
      },
    };
  },
};
