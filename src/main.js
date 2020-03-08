import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'


// CSS FIX

 function vhFix(){
  // viewport height 1%
  let vh = window.innerHeight * 0.01;
  //--vh custom property @ root
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
vhFix();
window.onresize = vhFix;


// VUE


Vue.use(VueRouter)

Vue.config.productionTip = false


const Donate = { template: '<div>donate</div>' }
const Care = { template: '<div>care</div>' }
const Legal = { template: '<div>legal</div>' }

const routes = [
  { path: '/donate', component: Donate },
  { path: '/care', component: Care },
  { path: '/datenschutz', component: Legal }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
