import Vue from 'vue';
import Router from 'vue-router';
Vue.use (Router);

const router = new Router ({
  routes: [
    {
      path: '/test',
      name: 'test',
      component: {template: `<p>test</p>`},
    },
  ],
});
router.beforeEach ((to, from, next) => {
  // 合法性校验
  if (to.meta.auth) {
    console.log ('into auth');
    next ();
  }
  next ();
});
export default router;
