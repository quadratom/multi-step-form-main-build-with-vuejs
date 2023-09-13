import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Dashboard from "./views/Dashboard.vue";
// import Forms from "./views/Forms.vue";
import Tables from "./views/Tables.vue";
import UIElements from "./views/UIElements.vue";
import Login from "./views/Login.vue";
// import Modal from "./views/Modal.vue";
import Card from "./views/Card.vue";
import Blank from "./views/Blank.vue";
// import NotFound from "./views/NotFound.vue";
// 
const routes: RouteRecordRaw[] = [
  
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { layout: "empty" },
  },
   { path: '/:pathMatch(.*)', component: Blank }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
