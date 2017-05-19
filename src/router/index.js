import Vue from 'vue';
import Router from 'vue-router';
import Header from '@/components/Header';
import Top from '@/components/Top';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header,
    },
    {
      path: '/',
      name: 'Top',
      component: Top,
    },
  ],
});
