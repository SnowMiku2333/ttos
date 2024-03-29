import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './route/router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.use(VueAxios, axios)
app.mount('#app')

app.provide('axios', app.config.globalProperties.axios)
axios.defaults.baseURL = 'http://localhost:7600/api'
const debounce = (fn, delay) => {
  let timer = null;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  }
}

const _ResizeObserver = window.ResizeObserver;
window.ResizeObserver = class ResizeObserver extends _ResizeObserver {
  constructor(callback) {
    callback = debounce(callback, 16);
    super(callback);
  }
}
