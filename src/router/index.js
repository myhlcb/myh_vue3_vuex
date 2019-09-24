import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Detail from '@/components/Detail'
import MyhVue from '@/components/MyhVue'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/test',
      name: 'test',
      component: { template: `<p>test</p>` }
    },
    {
      path: '/myh_vue',
      name: 'myh_vue',
      component: MyhVue
    },
  ]
})
router.beforeEach((to, from, next) => {
  // 合法性校验
  if (to.meta.auth) {
    console.log('into auth');
    next();
  }
  next();
});
export default router;

