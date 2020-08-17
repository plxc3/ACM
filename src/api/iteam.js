import request from "../utils/request"

export default {
    addIteaam(iteam){
        return request({
            url:"/admin/team/addIteam",
            method:"post",
            data:iteam
        })
    },
    getList(id){
        return request({
            url:"/admin/team/getList/"+id,
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
    /**
     * 小组删除
     */
    deleteTeam(id){
        return request({
            url:"/admin/team/deleted/"+id,
            method:"get"
        })
    },
    /**
     * 小组Excel获取
     */
    getTeamExcel(id){
        return request({
            url:"/admin/team/getFrontEndList/"+id,
            method:"get"
        })
    }
}
