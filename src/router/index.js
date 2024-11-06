import { createRouter, createWebHistory } from "vue-router";
 
import dashboard from '../pages/master/dashboard'
import login from "@/pages/login.vue";
import home from '../pages/home'
import profile from '../pages/profile'

  const routes = [
    {
      name: 'Dashboard',
      path: '/',
      component: dashboard,
      children: [
         {
          name: 'home',
          path: '/home',
          component:home
        },
        {
          name: 'profile',
          path: '/profile',
          component:profile
        },
        {
          name: 'login',
          path: '/login',
          component:login
        }
      ]
    },
       
  ];
const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}
  