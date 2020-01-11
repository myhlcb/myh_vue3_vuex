import Cookies from 'js-cookie';

const getToken = () => {
  return Cookies.get ('info');
};
const setToken = (msg, data) => {
  console.log (data, 'data');
  Cookies.set (msg, data);
};
export {getToken, setToken};
