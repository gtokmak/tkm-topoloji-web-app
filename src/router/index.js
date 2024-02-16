import { createRouter, createWebHistory } from "vue-router";
import Anasayfa from "../views/Anasayfa.vue";
import Rehber from "../views/Rehber.vue";
import Kamera from "../views/Kamera.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import NotFount from "../views/NotFoundView.vue"
import Profile from "../views/ProfilPage.vue"
import useAuthUser from "@/composables/UseAuthUser";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Anasayfa",
      component: Anasayfa,
      meta: {
        authRequired: true,
        layout: "MainLayout",
      },
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        layout: "LoginLayout",
      },
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        layout: "LoginLayout",
      },
    },
    {
      path: "/rehber",
      name: "rehber",
      component: Rehber,
      meta: {
        authRequired: true,
        layout: "MainLayout",
      },
    },
    {
      path: "/kamera",
      name: "kamera",
      component: Kamera,
      meta: {
        authRequired: true,
        layout: "MainLayout",
      },
    },
    {
      path: "/user-profile",
      name: "Profile",
      component: Profile,
      meta: {
        authRequired: true,
        layout: "MainLayout",
      },
    },
    {
      path : "/:pathMatch(.*)*",
      name : "notFound",
      component : NotFount,
      meta: {
        authRequired: true,
        layout: "LoginLayout",
      },
    }
  ],
});

router.beforeEach(async (to, from, next) => {

  const {isLoggedIn} = useAuthUser()

  // console.log(`isAuthenticated: `, isAuthenticated)
  if (to.name !== "login" && !isLoggedIn() && to.meta.authRequired) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
