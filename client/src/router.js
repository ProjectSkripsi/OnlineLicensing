import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Confirmation from "./views/Confirmation.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import Dashboard from "./views/Dasboard.vue";
Vue.use(Router);

let router = new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      },
    },
    {
      path: "/landing",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      components: {
        default: Dashboard,
        footer: AppFooter
      },
    },
    {
      path: "/confirmation",
      name: "confirmation",
      components: {
        // header: AppHeader,
        default: Confirmation,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        // header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        // header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    },
    {
      path: '/:id',
      name: 'letter',
      component: () => import('./views/Letter')
    }
  ],



  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})
export default router
