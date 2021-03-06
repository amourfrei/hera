// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'
import { routerMode } from './config/env'
import FastClick from 'fastclick'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

if('addEventListener' in document){
  document.addEventListener('DOMContentLoaded', function(){
    FastClick.attach(document.body);
  }, false);
}

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: routerMode,
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavihor(to, from, savedPosition){
    if(savedPosition){
      return savedPosition
    }else{
      if(from.meta.keepAlive){
        from.meta.savedPosition = document.body.scrollTop;
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',router,
  template: '<App/>',
  components: { App }
})
