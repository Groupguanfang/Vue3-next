import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./Views/Home.vue"),
    },
    {
      path: "/user",
      name: "user",
      component: () => import("./Views/User/User.vue"),
    },
    {
      path: "/user/newdraft",
      name: "newdraft",
      component: () => import("./Views/User/NewDraft.vue"),
    },
    {
      path: "/discover",
      name: "discover",
      component: () => import("./Views/Discover/Discover.vue"),
    },
    {
      path: "/apps/:e",
      name: "bilibili",
      component: () => import('./Views/Apps/Bilibili.vue')
    },
  ],
})

router.beforeEach(() => {
    
})

export default router
