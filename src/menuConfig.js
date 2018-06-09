// 菜单配置
// headerMenuConfig：头部导航配置

const headerMenuConfig = [
  {
    name: '首页',
    path: '/',
    icon: 'home',
  },
  {
    name: '反馈',
    path: 'https://github.com/alibaba/ice',
    external: true,
    newWindow: true,
    icon: 'message',
  },
  {
    name: '帮助',
    path: 'https://alibaba.github.io/ice',
    external: true,
    newWindow: true,
    icon: 'bangzhu',
  },
];

// asideMenuConfig：侧边导航配置

const asideMenuConfig = [
  {
    name: 'Dashboard',
    path: '/',
    icon: 'home',
    children: [
      {
        name: '平台概况',
        path: '/',
      },
      {
        name: '数据监控',
        path: '/monitor',
      },
    ],
  },
  {
    name: '客户信息',
    path: '/message',
    icon: 'yonghu',
    children: [
      {
        name: '评论信息',
        path: '/message/comment',
      },
      {
        name: '客户反馈',
        path: '/message/feedback',
      },
    ],
  },
  {
    name: '通用设置',
    path: '/setting',
    icon: 'shezhi',
    children: [
      {
        name: '基础设置',
        path: '/setting/basic',
      },
      {
        name: '菜单设置',
        path: '/setting/navigation',
      },
    ],
  },
  {
    name: '\u767B\u5F55',
    path: '/me/login',
    icon: 'home',
  },
  {
    name: '\u9996\u9875',
    path: '/homepage',
    icon: 'home',
  },
  {
    name: '\u535A\u6587',
    path: '/blog',
    icon: 'home',
  },
  {
    name: '\u6587\u7AE0',
    path: '/post/:id',
    icon: 'home',
  },
  {
    name: '\u9879\u76EE',
    path: '/project',
    icon: 'home',
  },
  {
    name: '\u5173\u4E8E',
    path: '/about',
    icon: 'home',
  },
];

export { headerMenuConfig, asideMenuConfig };
