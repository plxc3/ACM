import request from "../utils/request"

export  default {
    selectManager(){
        return request({
            url:"/admin/manager/select",
            method:"get"
        })
    }
}
