import HelloWorld from '@/components/HelloWorld' // index
import Login from '@/components/Login.vue'
import ATdata from '@/components/ATdata.vue'
import Header from '@/components/Header.vue'
import UserInfo from '@/components/UserInfo.vue'
export const routes = [
    {
      path: '/',
      components: {
        default: HelloWorld,
        nav: Header
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/userinfo',
      name: 'UserInfo',
      component: UserInfo
    },
    {
      path: '/AT',
      name: 'ATdata',
      component: ATdata
    },
    { //讓不存在或錯誤的路由不會再是 404，自動導向回根路徑
      path: '*',
      redirect: '/',
    }
  ]
