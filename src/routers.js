import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue";
import Dashboard from "./components/Dashboard.vue";
import { createRouter, createWebHistory } from "vue-router";

const isUserAuthenticated = () => {
  let isValidUser = sessionStorage.getItem("userLoggedIn");
  return isValidUser || false;
};

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    name: "dashboard",
    component: Dashboard,
    path: "/dashboard",
    meta: { requiresAuth: true },
  },
  {
    name: "Login",
    component: Login,
    path: "/login",
    meta: { requiresAuth: false },
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/signup",
    meta: { requiresAuth: false },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from) => {    // Navigation to -- from  entry condition check
  if (to.meta.requiresAuth) {              
    const canAccess = await isUserAuthenticated(to, from);
    if (!canAccess && to.name !=="home") return "/login";  // if user isnt login && current pg is not home then redirect to login page
    else if (canAccess && to.name==="home") return "/dashboard"; // if user is login and current path is home then redirecting it to dashboard 
  }
});

export default router;
