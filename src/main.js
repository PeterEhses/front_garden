import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
//import PerfectScrollbar from 'vue2-perfect-scrollbar'
//import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

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

//Vue.use(PerfectScrollbar)
Vue.use(VueRouter)



Vue.filter('kb', val => {
  return Math.floor(val/1024);
});



Vue.config.productionTip = false

const routes = [
  {
    path: '/',
    redirect: { path: '/home'},
    meta: {
        visible: false
    }
  },
  {
    path: '/home',
    name: 'home',
    title: "home",
    component: () => import("./components/home.vue"),
    meta: {
        visible: true
    }
  },
  {
    path: '/donate',
    name: 'donate',
    title: "donate",
    component: () => import("./components/donate.vue"),
    meta: {
        visible: true
      }
  },
  {
    path: '/care',
    component: () => import("./components/care.vue"),
    meta: {
        visible: false
    },
    children: [
      {
        path:"",
        name:"care",
        title: "care",
        meta: {
            visible: true
        },
        component: () => import("./components/careSelect.vue")
      },
      {
        path:"breed",
        name:"breed",
        component: () => import("./components/careGallery.vue")
      },
      {
        path:"name",
        name:"name"
      },
      {
        path:"want",
        name:"want"
      },
      {
        path:"decompose",
        name:"decompose"
      }
    ]
  },
  {
    path: '/datenschutz',
    name: 'legal',
    title: "datenschutz & impressum",
    component: () => import("./components/legal.vue"),
    meta: {
        visible: true
    }
  }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router, // app watches for route change & resets scroll of scroll container!!!! needs change if keep position is desired!
  render: h => h(App),
}).$mount('#app')
