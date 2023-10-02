import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AppLayout from "@/layout/AppLayout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/pages/auth/LoginView.vue"),
  },
  {
    path: "/",
    component: AppLayout,
    children: [
      {
        path: "/",
        name: "Dashboard",
        component: () => import("@/views/pages/common/DashboardView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
