import { createRouter, createWebHistory } from 'vue-router';
import Main from '@components/Main/Main.vue';
import Grabber from '@components/Grabber/Grabber.vue';
import Viewer from '@components/Viewer/Viewer.vue';

const routes = [
  { path: '/', name: 'root', component: Main },
  { path: '/grabber', name: 'grabber', component: Grabber },
  { path: '/viewer', name: 'viewer', component: Viewer },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
