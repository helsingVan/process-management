// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueResource from 'vue-resource'
import Iview from 'iview'
import Cookie from 'js-cookie'
import Mixins from './mixins'

import "./assets/style/common.sass"
import "iview/dist/styles/iview.css"
import "./assets/style/iview-reset.sass"

Vue.use(VueResource)
Vue.use(Iview)

Vue.http.options.root = '/api'
Vue.http.interceptors.push((req, next) => {
  next(res => {
    if (res.status !== 200) {
      Iview.Message.error('服务器错误');
    }
  })
})
router.beforeEach((to, from, next) => {
  let session_id = Cookie.get('session_id');
  if (!session_id && to.name !== 'login') {
    next({ name: 'login' });
  } else {
    Vue.http.headers.common['sessionId'] = session_id;
    next();
  }
})

Vue.mixin(Mixins)

Vue.prototype.$cookie = Cookie;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
