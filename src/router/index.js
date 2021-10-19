// import Vue from "vue";
// import Router from "vue-router";

// Vue.use(Router);

// const router = new Router({
//   mode: "history",
//   routes: [
//     {
//       path: "/dashboard",
//       name: "dashboard",
//       component: () =>
//         import(/*webpackChunkName: "Dashboard"*/ "../views/Dashboard.vue"),
//     },
//     // {
//     //   path: "/dashboard/:page",
//     //   name: "dashboard",
//     //   component: Dashboard,
//     // },
//     {
//       path: "/about*",
//       name: "About",
//       component: () =>
//         import(/*webpackChunkName: "About"*/ "../views/About.vue"),
//     },
//     {
//       path: "/404",
//       name: "notfound",
//       component: () =>
//         import(/*webpackChunkName: "NotFound"*/ "../views/NotFound.vue"),
//     },
//     {
//       path: "*",
//       redirect: "notfound",
//     },
//   ],
// });

// const titles = {
//   dashboard: "Dashboard",
//   About: "About",
//   NotFound: "NotFound",
// };

// router.afterEach((to) => {
//   document.title = titles[to.name];
// });

// export default router;
import Vue from "vue";
import Router from "vue-router";

import Dashboard from "../views/Dashboard";
import About from "../views/About";
import NotFound from "../views/NotFound";

// import {
//     Dashboard,
//     About,
//     NotFound
// } from '@/views'

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
