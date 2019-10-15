import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/layout';
import Login from 'view/login';
import Dashboard from 'view/dashboard';
Vue.use (Router);

const router = new Router ({
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
router.beforeEach ((to, from, next) => {
  const a = true;
  console.log (this.$store, 3333);
  if (to.path === '/login') {
    next ();
  } else if (a) {
    console.log (1111);
    next ();
  } else {
    next ('/login');
  }
  // next ('/login');
});
export default router;
