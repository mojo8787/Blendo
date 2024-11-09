import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import CareersPage from '@/views/CareersPage.vue';
import ContactUsPage from '@/views/ContactUsPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/careers',
    name: 'Careers',
    component: CareersPage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactUsPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router; 