import Vue from 'vue'
import App from './App.vue'
import './styles/global.less'

import router from './router/index.js'
import './api'

console.log({router})
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
