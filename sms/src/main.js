// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
/*引入路由*/
import router from './router'

/*引入http请求*/
import httpconfig from './util/http'
Vue.prototype.$http=httpconfig;

/*引入vuex*/
import vuex from 'vuex';
Vue.use(vuex);

/*引入element-ui*/
import ElementUI from 'element-ui';
/*引入element ui自带的样式*/
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false;





new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
