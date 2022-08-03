import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import DealerView from '../views/DealerView.vue'
import DigitalView from '../views/DigitalView.vue'
import MobilityView from '../views/MobilityView.vue'
import TradeView from '../views/TradeView.vue'
import AccesoriesView from '../views/AccesoriesView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/productos',
      name: 'productos',
      component: ProductsView
    },
    {
      path: '/productos/dealer-ecommerce',
      name: 'DealerViews',
      component: DealerView
    },
    {
      path: '/productos/digital-retailing',
      name: 'DigitalViews',
      component: DigitalView
    },
    {
      path: '/productos/mobility-store',
      name: 'MobilityViews',
      component: MobilityView
    },
    {
      path: '/productos/trade-in-module',
      name: 'TradeViews',
      component: TradeView
    },
    {
      path: '/productos/accesories-&-parts',
      name: 'AccesoriesViews',
      component: AccesoriesView
    },
    {
      path: '/productos/checkout-module',
      name: 'CheckoutViews',
      component: CheckoutView
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: ContactView
    }
    //{
    //  path: '/about',
    //  name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    //  component: () => import('../views/AboutView.vue')
    //}
  ],
  scrollBehavior ( to, from, savedPosition) {
    return savedPosition || { top:0, behavior: 'smooth' }
  }
})

export default router
