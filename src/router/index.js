import Vue from 'vue';
import VueRouter from 'vue-router';
import Dialogue from '../views/dialogue/Dialogue.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'dialogue',
    component: Dialogue,
    children: [
      {
        path: '',
        name: 'no-dialogue',
        component: () => import('../views/dialogue/NoDialogue'),
      },
      {
        path: ':id',
        name: 'dialogue-window',
        component: () => import('../views/dialogue/DialogueWindow'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
