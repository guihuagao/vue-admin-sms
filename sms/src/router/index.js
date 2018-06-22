import Vue from 'vue'
import Router from 'vue-router'
/*左侧菜单*/
import menuBar from '@/components/menuBar'

/*首页*/
import homePage from '@/components/home/homePage'

/*指定号码群发*/
import phoneFilter from '@/components/smsMass/phoneFilter'
/*订单筛选群发*/
import orderFilter from '@/components/smsMass/orderFilter'
/*会员筛选群发*/
import vipFilter from '@/components/smsMass/vipFilter'
/*会员分组群发*/
import vipGroupFilter from '@/components/smsMass/vipGroupFilter'


/*催付提醒*/
import expeditRemind from '@/components/messageCare/expeditRemind'
/*发货提醒*/
import consignRemind from '@/components/messageCare/consignRemind'

/*发送日志*/
import sendLog from '@/components/sendLog/sendLog'

/*会员管理*/
import vipManage from '@/components/manageMenu/vipManage'
/*黑名单管理*/
import blacklistManage from '@/components/manageMenu/blacklistManage'

/*短信充值*/
import messageRecharge from '@/components/recharge/messageRecharge'
/*充值记录*/
import recordRecharge from '@/components/recharge/recordRecharge'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/menuBar',
      name: 'menuBar',
      component: menuBar
    },

    {
      path: '/home',
      name: 'home',
      component:menuBar,
      redirect:'/home/homePage',
      children:[
        {
          path: 'homePage',
          name: 'homePage',
          component: homePage
        },
      ]
    },

    {
      path: '/smsMass',
      name: 'smsMass',
      component:menuBar,
      redirect:'/smsMass/phoneFilter',
      children:[
        {
          path: 'phoneFilter',
          name: 'phoneFilter',
          component: phoneFilter
        },
        {
          path: 'orderFilter',
          name: 'orderFilter',
          component: orderFilter
        },
        {
          path: 'vipFilter',
          name: 'vipFilter',
          component: vipFilter
        },
        {
          path: 'vipGroupFilter',
          name: 'vipGroupFilter',
          component: vipGroupFilter
        },

      ]
    },
    {
      path: '/messageCare',
      name: 'messageCare',
      component: menuBar,
      redirect: '/messageCare/expeditReminder',
      children:[
        {
          path: 'expeditRemind',
          name: 'expeditRemind',
          component: expeditRemind
        },
        {
          path: 'consignRemind',
          name: 'consignRemind',
          component: consignRemind
        },

        ]
    },
    {
      path: '/sendLog',
      name: 'sendLog',
      component: menuBar,
      redirect: '/sendLog/sendLog',
      children:[
        {
          path: 'sendLog',
          name: 'sendLog',
          component: sendLog
        },

      ]
    },

    {
      path: '/manageMenu',
      name: 'manageMenu',
      component: menuBar,
      redirect: '/manageMenu/vipManage',
      children:[
        {
          path: 'vipManage',
          name: 'vipManage',
          component: vipManage
        },
        {
          path: 'blacklistManage',
          name: 'blacklistManage',
          component: blacklistManage
        },
      ]
     },

    {
      path: '/recharge',
      name: 'recharge',
      component: menuBar,
      redirect: '/recharge/messageRecharge',
      children:[
        {
          path: 'messageRecharge',
          name: 'messageRecharge',
          component: messageRecharge
        },
        {
          path: 'recordRecharge',
          name: 'recordRecharge',
          component: recordRecharge
        },
      ]
    },
    {
      path: '/*',
      redirect: '/home'
    },

    /*http://114.55.239.78/jingdong/jdcrmVue.git*/


  ]
})
