// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
// Vue.config.devtools = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// setTimeout(() => {//macro(后)
//   console.log(5)
// },0);
// var promise = new Promise(function(resolve,reject){
//   console.log(1);
//   resolve();//异步
//   console.log(2);
// });
// promise.then(function(){//micro (先)
//   console.log(3);
// });
// console.log(4);
//micro  maco

// import d,{b,c} from './mode';//d放在前面
// // import * as b from './mode';//{__esModule: true}
// console.log(d,b,c);
// // import d from './mode';//export default a;
// // console.log(d);









