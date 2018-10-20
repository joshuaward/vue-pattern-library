// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/scss/main.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// other javascripts
const hamburger = document.querySelector('.hamburger')
const navigation = document.querySelector('nav')
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('menu-open')
  navigation.classList.toggle('menu-open')
})

const navLinks = document.querySelectorAll('.nav-link')
navLinks.forEach(navLink => navLink.addEventListener('click', () => {
  hamburger.classList.toggle('menu-open')
  navigation.classList.toggle('menu-open')
}))