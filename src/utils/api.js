import axios from 'axios'
import {hashHistory} from 'react-router'

axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
});

axios.interceptors.response.use(response => response, error => Promise.resolve(error.response))

function checkStatus(response) {
  // console.log(response);
  if (response.request.responseURL.indexOf('login') !== -1) {
    // console.log('push to login');
    hashHistory.push('/blog');
  }
  // console.log(response.status);

  if (response.status > 399 && response.status < 500) {
    hashHistory.push('/blog');
    return {
      data: {
        code: 40,
        message: response.statusText,
        data: response.statusText,
      },
    }
  }
  if (response.status > 299 && response.status !== 304 && response.status < 400) {
    hashHistory.push('/blog');
    return {
      data: {
        code: 30,
        message: response.statusText,
        data: response.statusText,
      },
    }
  }
  if (response.status === 200 || response.status === 304) {
    return response
  }

  if (response.status > 499) {
    hashHistory.push('/blog');
    return {
      data: {
        code: 50,
        message: response.statusText,
        data: response.statusText,
      },
    }
  }
  hashHistory.push('/blog');
  return {
    data: {
      code: 99,
      message: response.statusText,
      data: response.statusText,
    },
  }
}

// function checkCode(res) {
//   if (res.data.code !== 200) {
//     alert(res.data.message)
//   }
//   return res
// }

export default {
  post(url, data) {
    return axios({
      method: 'post',
      url,
      data: data,
      timeout: 30000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json; charset=UTF-8',
      },
    }).then(checkStatus)
    // .then(checkCode)
  },
  get(url, params) {
    return axios({
      method: 'get',
      url,
      params,
      timeout: 30000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
    }).then(checkStatus)
    // .then(checkCode)
  },
}
