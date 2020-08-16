

import request from "../utils/request"

export default {
    //用户登录
    loginSubmit(user){
        return request({
            url:"/admin/proxy/login",
            method:"post",
            data:user
        })
    },
    //根据token获取用户信息
    userLoginInfo(){
        return request(
            {
                url:"/admin/proxy/getInfoBytoken",
                method: "get",
            }
        )
    },
    //获取短信验证码
    getcodeByMsm(phone){
        return request({
            url:"/admin/msm/send/"+phone,
            method:"get"
        })
    },
    //用户注册
    register(user){
        return request({
            url:"/admin/proxy/register",
            method:"post",
            data:user
        })
    },
    /**
     * 更新信息 card
     */
    updateCard(card){
        return request({
            url:"/admin/proxy/update",
            method:"post",
            data:card
        })
    }
}
