import Vue from 'vue';
import Router from 'vue-router';
import One from '@/components/One';
import Two from '@/components/Two';
import Three from '@/components/Three';
import Four from '@/components/Four';
import Five from '@/components/Five';
import Six from '@/components/Six';
import Seven from '@/components/Seven';
import Eight from '@/components/Eight';
import Nine from '@/components/Nine';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'One',
      component: One,
    },
    {
      path: '/one',
      name: 'One',
      component: One,
    },
    {
      path: '/two',
      name: 'Two',
      component: Two,
    },
    {
      path: '/three',
      name: 'Three',
      component: Three,
    },
    {
      path: '/four',
      name: 'Four',
      component: Four,
    },
    {
      path: '/five',
      name: 'Five',
      component: Five,
    },
    {
      path: '/six',
      name: 'Six',
      component: Six,
    },
    {
      path: '/seven',
      name: 'Seven',
      component: Seven,
    },
    {
      path: '/eight',
      name: 'Eight',
      component: Eight,
    },
    {
      path: '/nine',
      name: 'Nine',
      component: Nine,
    },
  ],
});
