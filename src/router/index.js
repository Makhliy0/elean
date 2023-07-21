import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/favourite',
      name: 'favourite',
      component: () => import('../views/FavouriteView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutBrend.vue')
    },
    {
      path: '/item',
      name: 'item',
      component: () => import('../views/CardOfGoods.vue')
    },
  ]
})

export default router