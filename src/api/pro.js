import request from '../utils/request'

export default {
    getProList(){
        return request({
            url:"/admin/proxy/getProList",
            method:"get"
        })
    },
    /**
     * admin登陆
     */
    login(admin){
        return request({
            url:"/admin/admin/login",
            method: "post",
            data:admin
        })
    },
    /**
     * 修改密码
     */
    changePassword(admin){
        return request({
            url:"/admin/admin/changePassword",
            method:"post",
            data: admin
        })
    }
}
