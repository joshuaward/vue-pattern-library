import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Docs from '@/components/Docs'
import Download from '@/components/Download'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Docs',
      name: 'Docs',
      component: Docs
    },
    {
      path: '/Download',
      name: 'Download',
      component: Download
    }
  ]
})
