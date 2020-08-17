import Vue from 'vue'
import VueRouter from 'vue-router'
import { Message } from 'element-ui';
import cookie from 'js-cookie'

Vue.use(VueRouter)

const routes=[
    {
        path:"/",
        redirect:"/main"
    },
    //首页
    {
        path:"/main",
        meta:{title:"Main"},
        component: resolve => require(['../components/main/Main'], resolve)
    },
    //inform_invitation
    {
        path:"/inform_invitation",
        component: resolve => require(['../components/main/inform_invitation'], resolve)
    },
    //inform_invitation
    {
        path:"/inform_committee",
        component: resolve => require(['../components/main/inform_committee.vue'], resolve)
    },
    //inform_time.html
    {
        path:"/inform_time",
        component: resolve => require(['../components/main/inform_time.vue'], resolve)
    },
    //inform_register.html.html
    {
        path:"/inform_register",
        component: resolve => require(['../components/main/inform_register.vue'], resolve)
    },
    //inform_register.html.html
    {
        path:"/guide_require",
        component: resolve => require(['../components/main/guide_require.vue'], resolve)
    },
    //inform.html
    {
        path:"/inform",
        component: resolve => require(['../components/main/inform.vue'], resolve)
    },
    //guide.html.html
    {
        path:"/guide",
        component: resolve => require(['../components/main/guide.vue'], resolve)
    },
    //guide_awards.html.html
    {
        path:"/guide_awards",
        component: resolve => require(['../components/main/guide_awards.vue'], resolve)
    },
    //lodging.html.html
    {
        path:"/lodging",
        component: resolve => require(['../components/main/lodging.vue'], resolve)
    },
    //lodging_recommend.html.html
    {
        path:"/lodging_recommend",
        component: resolve => require(['../components/main/lodging_recommend.vue'], resolve)
    },
    //lodging_recommend.html.html
    {
        path:"/lodging_way",
        component: resolve => require(['../components/main/lodging_way.vue'], resolve)
    },
    //lodging_map.html.html
    {
        path:"/lodging_map",
        component: resolve => require(['../components/main/lodging_map.vue'], resolve)
    },
    //yibin.html.html
    {
        path:"/yibin",
        component: resolve => require(['../components/main/yibin.vue'], resolve)
    },
    //list.html.html
    {
        path:"/list",
        component: resolve => require(['../components/main/list.vue'], resolve)
    },
    //Login
    {
        path:"/login",
        component: resolve => require(['../components/Login/Login.vue'], resolve)
    },
    //Register
    {
        path:"/register",
        component: resolve => require(['../components/Login/Register.vue'], resolve)
    },
    //managerPage
    {
        path:"/managerPage",
        component: resolve => require(['../components/userpage/managerPage.vue'], resolve)
    },
]

const router=new VueRouter({
    routes:routes
})


/**
 * 防止输入url跳转登录才能显示的界面调用全局导航守卫进行验证
 */
router.beforeEach((to, from, next) => {

    if ( to.path=='/managerPage') {
        // 每次页面跳转执行，token或openId錯誤，均提示跳转到首页
        let token = cookie.get('token')
        if (token === null || token === '' || token === undefined) {
            Message({
                type:'error',
                message:"没有登录请登录"
            })
            setTimeout(function () {
                next('/login');
            },1000)
        }else{
            next();
        }

    } else {
        next();
    }
});

export default router
