import { createRouter, createWebHashHistory } from 'vue-router'
import info from '../info/info.vue'
import position from '../position/position.vue'
import chat from '../chat/chat.vue'

const routes = [
  {
    path:'/'
  },
  {
    path:'/info',
    components:{
      main:info
    },
  },
  {
    path:'/position',
    components:{
      main:position
    },
  },
  {
    path:'/chat',
    components:{
      main:chat
    },
  },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})

export default router