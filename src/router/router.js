import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//导入相应组件
const index = () => import('../components/index.vue')
const category = () => import('../components/category.vue')
const cart = () => import('../components/cart.vue')
const me = () => import('../components/me.vue')


const routes = [{
        path: '/',
        component: index
    },
    {
        path: '/category',
        component: category
    },
    {
        path: '/cart',
        component: cart
    },
    {
        path: '/me',
        component: me
    }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    mode: 'history',
    routes // (缩写) 相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
export default router