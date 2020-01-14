export default {
  userInfo: state => {
    return state.account.userInfo;
  },
  count: state => {
    return state.account.count;
  },
  routes: state => {
    return state.account.routes;
  },
};
