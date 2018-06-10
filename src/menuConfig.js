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
                path: '/admin',
            },
            {
                name: '数据监控',
                path: '/monitor',
            },
        ],
    },
    {
        name: '博文',
        path: '/admin/post',
        icon: 'yonghu',
        children: [
            {
                name: '博文配置',
                path: '/admin/post/list',
            },
            {
                name: '博文添加',
                path: '/admin/post/add',
            },
        ],
    },
    {
        name: '评论',
        path: '/message',
        icon: 'yonghu',
        children: [
            {
                name: '评论配置',
                path: '/message/list',
            },
            {
                name: '博文添加',
                path: '/message/feedback',
            },
        ],
    },
    {
        name: '标签',
        path: '/tag',
        icon: 'yonghu',
        children: [
            {
                name: '标签列表',
                path: '/tag/list',
            },
            {
                name: '博文添加',
                path: '/tag/feedback',
            },
        ],
    },
    {
        name: '设置',
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
];

export {headerMenuConfig, asideMenuConfig};
