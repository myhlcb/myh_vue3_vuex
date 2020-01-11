const axios = require ('axios');
const $axios = axios.create ({
  timeout: 5000,
});

module.exports = {
  post (url, data) {
    console.log (url, data, 333);
    return $axios ({
      method: 'post',
      url,
      data,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .catch (err => {
        return {success: false};
      })
      .then (res => res.data);
  },

  get (url) {
    return $axios ({
      method: 'get',
      url,
    });
  },
};
