import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    // redirect: "/home"
    meta: {
      title: "首页"
    },
    component: () => import("../views/home/home.vue")
  },
  {
    path: "/taskList",
    name: "taskList",
    meta: {
      title: "任务列表"
    },
    component: () => import("../views/taskList/taskList.vue")
  }
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes
});
