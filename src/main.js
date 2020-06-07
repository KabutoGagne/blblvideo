import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.css'

import Vant from 'vant';
import 'vant/lib/index.css';
import { Field ,CellGroup } from 'vant';
import { Button } from 'vant';
import { Form } from 'vant';
import { Toast ,Icon ,Cell ,Popup ,Uploader ,Dialog ,Tab ,Tabs ,List } from 'vant';
Vue.use(Vant);
Vue.use(Field);
Vue.use(CellGroup);
Vue.use(Button);
Vue.use(Form);
Vue.use(Icon);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Popup);
Vue.use(Uploader);
Vue.use(Dialog);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(List);
Vue.prototype.$message =Toast;

//引入axios
import axios from 'axios'
axios.defaults.baseURL ="http://112.74.99.5:3000/web/api"     //请求地址的根路径
Vue.prototype.$http =axios;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
