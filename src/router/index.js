import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/layout';
import Login from 'view/login';
import store from '@/store';
import Dashboard from 'view/dashboard';
import {getToken} from '@/utils/auth';
// () => import ('@/view/dashboard/component/page'),
import page from '@/view/dashboard/component/page';
import progress from '@/view/dashboard/component/progress';
import table from '@/view/dashboard/component/table';
Vue.use (Router);

const router = new Router ({
  base: process.env.VUE_APP_URL,
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
const asyncRouter = [
  {
    path: '/test',
    name: 'test',
    component: {template: `<p>test</p>`},
    icon: 'el-icon-moon-night',
    meta: {name: '测试'},
  },
  {
    path: '/layout',
    name: 'Layout',
    component: Layout,
    icon: 'el-icon-menu',
    meta: {name: '懒加载'},
  },
  {
    path: '/',
    name: 'Home',
    redirect: '/layout',
    meta: {name: '主页'},
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    redirect: '/dashboard/page',
    icon: 'el-icon-location',
    meta: {name: 'dashboard'},
    children: [
      {
        path: '/test',
        name: 'test',
        component: {template: `<p>test</p>`},
        meta: {name: '测试'},
        children: [
          {
            path: 'page',
            name: 'page',
            component: page,
            meta: {name: '主页'},
          },
        ],
      },
      {
        path: 'pagemain',
        name: 'page',
        component: page,
        meta: {name: 'pagemain'},
      },
      {
        path: 'progress',
        name: 'progress',
        component: progress,
        meta: {name: 'progress'},
      },
      {
        path: 'table',
        name: 'table',
        component: table,
        meta: {name: 'table'},
      },
    ],
  },
];
router.beforeEach (function (to, from, next) {
  const token = getToken ();
  if (token) {
    if (store.getters.routes.length) {
      next ();
    } else {
      store.commit ('account/routerArr');
      const routers = store.getters.routes;
      router.addRoutes (routers);
      next ({...to});
    }
  } else if (to.path === '/login') {
    next ();
  } else {
    next ('login');
  }
});
export {router, asyncRouter};
