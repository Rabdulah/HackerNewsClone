import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Single from '@/components/Single'
import New from '@/components/New'
import Job from '@/components/Job'
import Best from '@/components/Best'
import Ask from '@/components/Ask'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/story/:id',
      name: 'Single',
      component: Single
    },
    {
      path: '/new',
      name: 'New',
      component: New
    },
    {
      path: '/job',
      name: 'Job',
      component: Job
    },
    {
      path: '/best',
      name: 'Best',
      component: Best
    },
    {
      path: '/ask',
      name: 'Ask',
      component: Ask
    }
  ]
})
