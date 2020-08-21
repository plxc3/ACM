<template>
<div class="Excel">
    <div id="allBox" class="allBox">
        <el-page-header @back="goBack" content="excel页面" style="margin-top: 20px">
        </el-page-header>
        <table>
            <thead>
            <tr>
                <th rowspan="2">学校中文名</th>
                <th rowspan="2">学校英文名</th>
                <th rowspan="2">发票抬头</th>
                <th rowspan="2">税号</th>
                <th rowspan="2">中文队名</th>
                <th rowspan="2">英文队名</th>
                <th colspan="4">队员1</th>
                <th colspan="4">队员2</th>
                <th colspan="4">队员3</th>
                <th colspan="4">教练</th>
                <th colspan="3">证书接收人</th>
            </tr>
            <tr>
                <th>中文姓名</th>
                <th>拼音</th>
                <th>性别</th>
                <th>T恤尺码</th>
                <th>中文姓名</th>
                <th>拼音</th>
                <th>性别</th>
                <th>T恤尺码</th>
                <th>中文姓名</th>
                <th>拼音</th>
                <th>性别</th>
                <th>T恤尺码</th>
                <th>中文姓名</th>
                <th>拼音</th>
                <th>性别</th>
                <th>T恤尺码</th>
                <th>邮寄地址</th>
                <th>联系人</th>
                <th>电话</th>
            </tr>
            </thead>
            <tr v-for="i in teamsExceL">
                <td>{{i.uniName}}</td>
                <td>{{i.uniEngName}}</td>
                <td>{{i.invoice}}</td>
                <td>{{i.tfn}}</td>
                <td>{{i.teamName}}</td>
                <td>{{i.teamEngName}}</td>
                <td>{{i.name1}}</td>
                <td>{{i.pinyin1}}</td>
                <td>{{i.sex1}}</td>
                <td>{{i.tsize1}}</td>
                <td>{{i.name2}}</td>
                <td>{{i.pinyin2}} </td>
                <td>{{i.sex2}}</td>
                <td>{{i.tsize2}}</td>
                <td>{{i.name3}}</td>
                <td>{{i.pinyin3}}</td>
                <td>{{i.sex3}}</td>
                <td>{{i.tsize3}}</td>
                <td>{{i.coachName}}</td>
                <td>{{i.coachPinyin}}</td>
                <td>{{i.coachSex}}</td>
                <td>{{i.coachTsize}}</td>
                <td>{{i.address}}</td>
                <td>{{i.name}}</td>
                <td>{{i.phone}}</td>
            </tr>
        </table>
    </div>
</div>
</template>

<script>
    import cookie from 'js-cookie'
    import itemApi from "../../api/iteam";
    export default {
        name: "Excel",
        data(){
            return{
                teamsExceL:[],
                proxyId:''
            }
        },
        methods:{
            /**
             * 获取Excel
             */
            getExcel(){
                itemApi.getTeamExcel(this.proxyId)
                    .then(res=>{
                        this.teamsExceL=res.data.TeamList
                    })
            },
            goBack(){
                this.$router.push("/managerPage")
            }
        },
        created(){
            this.proxyId=cookie.get("proxyId")
            this.getExcel()
        }
    }
</script>

<style scoped>
    .Excel{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 78px;
    }

    body {
        min-width: 700px;
    }
    .card {
        background: #f5f5f5;
        border: solid 1px #aaa;
        border-radius: 10px;
        font-size: 18px;
        box-shadow: 0 0 5px #888;
    }
    .recipienterBox {
        width: 20%;
        margin: 10px 20px;
        padding: 10px 20px;
        text-align: center;
        font-size: 13px;
        font-weight: 700;
        color: #111;
        /*pointer-events: none;*/
    }
    @media screen and (min-width: 1200px) {
        .recipienterBox {
            float: left;
            width: 20%;
            margin: 10px 20px;
        }
    }
    @media screen and (max-width: 1200px) {
        .recipienterBox {
            width: 300px;
            margin: 10px auto;
        }
    }
    .recipienterBox>p {
        margin: 15px 0;
        padding: 2px 5px;
        font-size: 17px;
        line-height: 20px;
        font-weight: 300;
        border: solid 1px #777;
        border-radius: 10px;
        user-select: none;
        transition: 0.3s;
        background: #fff;
        outline: none;
    }
    .recipienterBox>p:hover {
        box-shadow: 0 0 5px #754;
    }
    .changeButton {
        font-size: 15px;
        margin: 10px 0;
        padding: 2px 5px;
        border-radius: 5px;
        border: solid 1px #333;
        transition: 0.5s;
        background: #798;
        /*pointer-events: auto;*/
    }
    .changeButton:hover {
        box-shadow: 0 0 5px #754;
    }
    @media screen and (min-width: 1200px) {
        .groupsBox {
            float: left;
            width: 70%;
        }
    }
    @media screen and (max-width: 1200px) {
        .groupsBox {
            width: 650px;
            margin: 0 auto;
        }
    }
    .group-add {
        text-align: center;
        width: 190px;
        margin: 10px auto;
        padding: 3px 10px;
        font-size: 20px;
        font-weight: 600;
        background: #eee;
        border-radius: 15px;
        border: solid 1px black;
        transition: 0.5s;
        user-select: none;
    }
    .groups-item {
        margin: 10px;
        padding: 20px 10px;
        /*pointer-events: none;*/
    }
    .groups-item>span {
        line-height: 30px;
    }
    .group-nameNotice {
        float: left;
        width: 100px;
    }
    .group-name {
        font-size: 20px;
        line-height: 30px;
        width: calc(90% - 100px);
        padding: 0 15px;
        background: #88bba2;
        border-radius: 6px;
        text-align: center;
        outline: none;
    }
    .group-delete {
        float: right;
    }
    .group-state {
        margin: 5px;
        padding: 2px 10px;
        line-height: 15px;
        font-size: 15px;
        border-radius: 15px;
        border: solid 1px #333;
        background: #50c6df;
        float: right;
    }

    .deleteBox {
        /*position: fixed;*/
        width: 400px;
        padding: 50px 20px;
        top: 40vh;
        left: calc(50% - 200px);
        text-align: center;
        box-shadow: 0 0 10px #333;
        border-radius: 10px;
        background: #eee;
        opacity: 0;
        pointer-events: none;
        transition: 0.5s;
    }
    .deleteBox > input {
        padding: 5px 0;
        text-align: center;
        width: 80%;
    }

    table {
        border-collapse: collapse;
        margin: 78px auto;
        text-align: center;
    }
    table td, table th {
        border: 1px solid #cad9ea;
        color: #555;
        padding: 0px 0px;
        outline: none;
    }
    table thead th {
        padding: 2px 5px;
        background-color: #CCE8EB;
        /*min-width: 100px;*/
        color: #333;
    }
    table tr:nth-child(odd) {
        background: #fff;
    }
    table tr:nth-child(even) {
        background: #F5FAFA;
    }
    select {
        height: 100%;
        font-size: 18px;
        text-align: center;
        border: none;
        color: #555;
        outline: none;
        background: transparent;
    }


    .allBox {
        width: 95%;
        padding: 10px 1%;
        margin: 10px 0px;
        /*position: fixed;*/
        top: 150px;
        left: 1.5%;
        overflow: auto;
        background: #eee;
        box-shadow: 0 0 10px #666;
        font-size: 13px;
        /*opacity: 0;*/
        /*pointer-events: auto;*/
        transition: .5s;
        /*pointer-events: none;*/
        transform: translate(0, -30px);
    }
    .allBox > table {
        margin-top: 10px;
        width: 100%;
    }
    .allBox > table td, .allBox >table th {
        border: 1px solid black;
    }
    .allBox table thead th {
        min-width: 10px;
    }

</style>
