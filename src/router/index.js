import Vue from "vue";
import Router from "vue-router";

import Dashboard from "../views/Dashboard";
import About from "../views/About";
import NotFound from "../views/NotFound";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
    // {
    //   path: "/dashboard/:page",
    //   name: "dashboard",
    //   component: Dashboard,
    // },
    {
      path: "/about*",
      name: "about",
      component: About,
    },
    {
      path: "/404",
      name: "notfound",
      component: NotFound,
    },
    {
      path: "*",
      redirect: "notfound",
    },
  ],
});

const titles = {
  dashboard: "Dashboard",
  about: "About",
  NotFound: "NotFound",
};

router.afterEach((to) => {
  document.title = titles[to.name];
});

export default router;
