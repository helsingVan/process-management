import Home from '@/view/home';
import Admin from '@/view/admin';

export default [
    {
        path: 'home',
        name: 'home',
        component: Home,
        meta: { 
            name: '首页' 
        }
    },
    {
        path: 'admin',
        name: 'admin',
        component: Admin,
        meta: { 
            name: '用户管理' 
        }
    }
];