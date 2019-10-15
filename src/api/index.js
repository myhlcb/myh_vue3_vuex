const axios = require ('axios');
const $axios = axios.create ({
  timeout: 5000,
});

module.exports = {
  post (url, data) {
    return $axios ({
      method: 'post',
      url,
      data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },

  get (url) {
    return $axios ({
      method: 'get',
      url,
    });
  },
};
