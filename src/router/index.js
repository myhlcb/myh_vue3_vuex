import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/layout';
import Login from 'view/login';
import store from '@/store';
import Dashboard from 'view/dashboard';
import {getToken} from '@/utils/auth';
Vue.use (Router);

const router = new Router ({
  base: process.env.VUE_APP_URL,
  routes: [
    {
      path: '/test',
      name: 'test',
      component: {template: `<p>test</p>`},
    },
    {
      path: '/user',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'poo',
          name: 'Poo',
          component: {template: `<p>Poo</p>`},
        },
        {
          path: 'foo',
          name: 'Foo',
          component: {template: '<p>Foo</p>'},
        },
      ],
    },
    {
      path: '/',
      name: 'Home',
      redirect: '/dashboard',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
  ],
});
router.beforeEach (function (to, from, next) {
  const token = getToken ();

  if (token) {
    if (to.path != '/dashboard') {
      next ({path: 'dashboard'});
    }
    next ();
  } else if (to.path === '/login') {
    next ();
  } else {
    next ('login');
  }
});
export default router;
