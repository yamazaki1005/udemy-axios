import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router';
import store from './store';


Vue.config.productionTip = false

axios.defaults.baseURL = 
  "https://firestore.googleapis.com/v1/projects/vuejs-http-yama/databases/(default)/documents";

axios.interceptors.request.use(
  config => {
    console.log('interceptors request', config);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    console.log('interceptors response', response);
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

store.dispatch('autoLogin');

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
