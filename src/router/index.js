import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/home.vue';
import AboutPage from '../views/pages/about.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name:'home',
      component:HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component:AboutPage,
    },
    {
      path: '/contact',
      component: () => import('../views/pages/contact.vue')
    },
    {
      path: '/career',
      component: () => import('../views/pages/career.vue')
    },
    {
      path: '/transformer-oil',
      component: () => import('../views/pages/transformer-oil.vue')
    },
    {
      path: '/candid-oil-bangladesh-opdc',
      component: () => import('../views/pages/candid-oil-bangladesh-opdc.vue')
    },
    {
      path: '/candid-wood-polish-industries',
      component: () => import('../views/pages/candid-wood-polish-industries.vue')
    },
    {
      path: '/candid-corporation',
      component: () => import('../views/pages/candid-corporation.vue')
    },
    {
      path: '/candid-corporation-bangladesh',
      component: () => import('../views/pages/candid-corporation-bangladesh.vue')
    },
    {
      path: '/rubicon-multi-product-industry',
      component: () => import('../views/pages/rubicon-multi-product-industry.vue')
    },
    {
      path: '/rubicon-petrolium',
      component: () => import('../views/pages/rubicon-petrolium.vue')
    },
    {
      path: '/rubicon-corporation',
      component: () => import('../views/pages/rubicon-corporation.vue')
    },
    {
      path: '/rubicon-agri-support',
      component: () => import('../views/pages/rubicon-agri-support.vue')
    },
    {
      path: '/commitment-shipping-line',
      component: () => import('../views/pages/commitment-shipping-line.vue')
    },
    {
      path: '/commitment-international',
      component: () => import('../views/pages/commitment-international.vue')
    },
    {
      path: '/nexus-logistics',
      component: () => import('../views/pages/nexus-logistics.vue')
    },
  ]
})

export default router
