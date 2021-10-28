import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  // history: createWebHashHistory(),
  routes: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: () =>
        import(/*webpackChunkName: "Dashboard"*/ "../views/Dashboard.vue"),
    },
    // {
    //   path: "/dashboard/:page",
    //   name: "dashboard",
    //   component: Dashboard,
    // },
    {
      path: "/dashboard/:action/:section/:category",
      name: "AddPaymentFromUrl",
      component: () =>
        import(
          /* webpackChunkName: "PageDashBoard" */ "../views/Dashboard.vue"
        ),
    },
    {
      path: "/about*",
      name: "About",
      component: () =>
        import(/*webpackChunkName: "About"*/ "../views/About.vue"),
    },
    {
      path: "/404",
      name: "notfound",
      component: () =>
        import(/*webpackChunkName: "NotFound"*/ "../views/NotFound.vue"),
    },
    // {
    //   path: "*",
    //   redirect: "notfound",
    // },
  ],
});

const titles = {
  dashboard: "Dashboard",
  About: "About",
  NotFound: "NotFound",
};

router.afterEach((to) => {
  document.title = titles[to.name];
});

export default router;
