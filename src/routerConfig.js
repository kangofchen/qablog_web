// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import AsideLayout from './layouts/AsideLayout';
import Home from './pages/Home';
import MeLogin from './pages/MeLogin';
import BlankLayout from './layouts/BlankLayout';
import Homepage from './pages/Homepage';
import Blog from './pages/Blog';
import Post from './pages/Post';
import Project from './pages/Project';
import About from './pages/About';
import PostsTable from './pages/PostsTable';
import PostAdd from './pages/PostAdd';
import NotFound from './pages/NotFound';

const routerConfig = [
  {
    path: '/about',
    layout: BlankLayout,
    component: About,
  },
  {
    path: '/project',
    layout: BlankLayout,
    component: Project,
  },
  {
    path: '/homepage',
    layout: BlankLayout,
    component: Homepage,
  },
  {
    path: '/blog',
    layout: BlankLayout,
    component: Blog,
  },
  {
    path: '/post/:id',
    layout: BlankLayout,
    component: Post,
  },
  {
    path: '/',
    layout: BlankLayout,
    component: Homepage,
  },
  {
    path: '/admin',
    layout: AsideLayout,
    component: Home,
  },
  {
    path: '/me/login',
    layout: BlankLayout,
    component: MeLogin,
  },
  {
    path: '/admin/post/list',
    layout: AsideLayout,
    component: PostsTable,
  },
  {
    path: '/admin/post/add',
    layout: AsideLayout,
    component: PostAdd,
  },
  {
    path: '*',
    layout: BlankLayout,
    component: NotFound,
  },
];

export default routerConfig;
