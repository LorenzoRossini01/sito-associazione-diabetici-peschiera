import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import AddEvent from "../pages/AddEvent.vue";
import EventDetail from "../pages/EventDetail.vue";
import LoginPage from "../pages/LoginPage.vue";
import { auth } from "../firebaseConfig"; // Importa l'oggetto di autenticazione Firebase

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/create-event",
    name: "AddEvent",
    component: AddEvent,
    meta: { requiresAuth: true }, // Richiede autenticazione per accedere a questa route
  },
  {
    path: "/event/:id",
    name: "EventDetail",
    component: EventDetail,
    props: true,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// Navigation guard per controllare l'autenticazione
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = auth.currentUser; // Controlla se l'utente è autenticato

  if (requiresAuth && !isAuthenticated) {
    next({ name: "LoginPage" }); // Reindirizza alla pagina di login se non è autenticato ma è richiesta l'autenticazione
  } else {
    next(); // Continua la navigazione
  }
});

export default router;
