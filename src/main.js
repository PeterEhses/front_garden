import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

//LAZYLOADING, AJAX
import VueLazyload from 'vue-lazyload'
import axios from 'axios'
import VueAxios from 'vue-axios'

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


Vue.use(VueRouter)
Vue.use(VueLazyload)
Vue.use(VueAxios, axios)

// declare api interaction variables and some shared processing
Vue.prototype.$gardenApi= {
  garden: 2,
  basePath: 'https://tangled.garden/api',
  imagesPath:'/images',
  seedsPath: '/seeds',
  tagsPath: '/tags',
  format: '',// 'format=api',
  getPath: function(path, uuid = undefined, format = ""){

    path = this.basePath + path
    if(typeof(uuid) !== 'undefined'){
        path += "/" + uuid
    }
    if(format.length && format.length > 0){
      path += "/?format="
      path += format
    }

    return path
  }
}

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
    name:"care",
    title: "care",
    component: () => import("./components/careGallery.vue"), // remove 'Gallery' for use with children
    meta: {
        visible: true
    },
    // children: [
    //   {
    //     path:"",
    //     name:"care",
    //     title: "care",
    //     meta: {
    //         visible: true
    //     },
    //     component: () => import("./components/careSelect.vue")
    //   },
    //   {
    //     path:"breed",
    //     name:"breed",
    //     component: () => import("./components/careGallery.vue")
    //   },
    //   {
    //     path:"name",
    //     name:"name"
    //   },
    //   {
    //     path:"want",
    //     name:"want"
    //   },
    //   {
    //     path:"decompose",
    //     name:"decompose"
    //   }
    // ]
  },
  {
    path: '/datenschutz',
    name: 'legal',
    title: "datenschutz & impressum",
    component: () => import("./components/legal.vue"),
    meta: {
        visible: false
    }
  }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

let vue = new Vue({
  router, // app watches for route change & resets scroll of scroll container!!!! needs change if keep position is desired!
  render: h => h(App),
}).$mount('#app')
console.log(vue.$gardenApi)
