import request from '../utils/request'

export default {
    /**
     * 获取组列表后台页面
     */
    getAdminList(){
        return request({
            url:"/admin/team/getAdminList",
            method:"get"
        })
    },
    /**
     * 小组更新
     */
    updateTeam(team){
        return request({
            url:"/admin/team/updateById",
            method:"post",
            data: team
        })
    },

}
