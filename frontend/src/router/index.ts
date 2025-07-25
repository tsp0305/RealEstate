import { createRouter, createWebHistory } from 'vue-router'
import Signup from '../views/Signup.vue'
import Login from '../views/login.vue'
import tenant from '../views/tenant.vue'
import owner from '../views/owner.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard/tenant',
      name: 'tenant',
      component: tenant,
      meta: { requiresAuth: true, role: 'tenant' }
    },
    {
      path: '/dashboard/owner',
      name: 'owner',
      component: owner,
      meta: { requiresAuth: true, role: 'owner' }
    },
  ],
})


export default router
