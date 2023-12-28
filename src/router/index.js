import { createRouter, createWebHistory } from 'vue-router';
import { useSiteStore } from '@/stores/site.store';

const routes = [
  {
    path: '/',
    component: () => import('@/views/LandingPage.vue'),
    meta: { layout: 'main' },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  const siteStore = useSiteStore();
  siteStore.setLayout(to.meta.layout);
});

export default router;
