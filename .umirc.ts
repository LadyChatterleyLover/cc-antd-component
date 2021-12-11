import { defineConfig } from 'umi'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/layouts/layouts',
      routes: [
        {
          path: '/',
          component: '@/pages/index',
          title: '首页'
        },
        {
          path: '/chooseIcon',
          component: '@/pages/chooseIcon/index',
          title: '图标选择器'
        },
        {
          path: '/chooseArea',
          component: '@/pages/chooseArea/index',
          title: '省市区选择器'
        },
        {
          path: '/chooseTime',
          component: '@/pages/chooseTime/index',
          title: '时间选择器'
        },
        {
          path: '/chooseCity',
          component: '@/pages/chooseCity/index',
          title: '城市选择器'
        },
        {
          path: '/trend',
          component: '@/pages/trend/index',
          title: '趋势标记'
        },
        {
          path: '/notification',
          component: '@/pages/notification/index',
          title: '通知菜单'
        },
        {
          path: '/progress',
          component: '@/pages/progress/index',
          title: '进度条'
        },
        {
          path: '/timeline',
          component: '@/pages/timeline/index',
          title: '时间轴'
        },
        {
          path: '/calendar',
          component: '@/pages/calendar/index',
          title: '日历'
        },
        {
          path: '/form',
          component: '@/pages/form/index',
          title: '表单'
        },
      ]
    },
  ],
  fastRefresh: {},
  locale: {
    default: 'zh-CN'
  }
})
