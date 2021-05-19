import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Topic1 from '../views/1-ClassStyleBinding.vue'
import Topic2 from '../views/2-Conditionals Rendering.vue'
import Topic3 from '../views/3-ListRendering.vue'
import Topic4 from '../views/4-EventHanding.vue'
import Topic5 from '../views/5-FormInputBindings.vue'
import Topic6 from '../views/6-VueMultipleComponents.vue'
import Topic7 from '../views/7-VueCLI.vue'
import Topic8 from '../views/8-VueRouter.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/topic1',
    name: 'Topic1',
    component: Topic1
  },

  {
    path: '/topic2',
    name: 'Topic2',
    component: Topic2
  },
  {
    path: '/topic3',
    name: 'Topic3',
    component: Topic3
  }
  ,
  {
    path: '/topic4',
    name: 'Topic4',
    component: Topic4
  },
  {
    path: '/topic5',
    name: 'Topic5',
    component: Topic5
  },
  {
    path: '/topic6',
    name: 'Topic6',
    component: Topic6
  },
  {
    path: '/topic7',
    name: 'Topic7',
    component: Topic7
  },
  {
    path: '/topic8',
    name: 'Topic8',
    component: Topic8
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
