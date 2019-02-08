import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store'
import Argon from "./plugins/argon-kit";
import VueScrollTo from 'vue-scrollto';
import VueCollapse from 'vue2-collapse'
import Axios from 'axios'
Vue.use(VueCollapse)



Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

Vue.prototype.$http = Axios;
const token = localStorage.getItem('user-token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}


Vue.config.productionTip = false
Vue.use(Argon);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
