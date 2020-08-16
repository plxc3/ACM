<template>
    <div class="">

        <div class="recipienterBox card">
            电话
            <el-input
                    placeholder="请输入内容"
                    v-model="infoVo.phone"
                    :disabled="disabledVaule">
            </el-input>
            <!--<p contenteditable="plaintext-only" onkeydown="key13(this)">{{infoVo.phone}}</p>-->
            学校中文名
            <el-input
                    placeholder="请输入内容"
                    v-model="infoVo.uniName"
                    :disabled="disabledVaule">
            </el-input>
            <!--<p contenteditable="plaintext-only" onkeydown="key13(this)">{{infoVo.uniName}}</p>-->
            学校英文名
            <el-input
                    placeholder="请输入内容"
                    v-model="infoVo.uniEngName"
                    :disabled="disabledVaule">
            </el-input>
            <!--<p contenteditable="plaintext-only" onkeydown="key13(this)">{{infoVo.uniEngName}}</p>-->
            发票抬头
            <el-input
                    placeholder="请输入内容"
                    v-model="infoVo.invoice"
                    :disabled="disabledVaule">
            </el-input>
            <!--<p contenteditable="plaintext-only" onkeydown="key13(this)">{{infoVo.invoice}}</p>-->
            税号
            <el-input
                    placeholder="请输入内容"
                    v-model="infoVo.tfn"
                    :disabled="disabledVaule">
            </el-input>
            <!--<p contenteditable="plaintext-only" onkeydown="key13(this)">{{infoVo.tfn}}</p>-->
            联系人
            <el-input
                    placeholder="请输入内容"
                    v-model="infoVo.name"
                    :disabled="disabledVaule">
            </el-input>
            <!--<p contenteditable="plaintext-only" onkeydown="key13(this)">{{infoVo.name}}</p>-->
            地址
            <el-input
                    placeholder="请输入内容"
                    v-model="infoVo.address"
                    :disabled="disabledVaule">
            </el-input>
            <!--<p contenteditable="plaintext-only" onkeydown="key13(this)">{{infoVo.address}}</p>-->
            <input v-if="disabledVaule" class="changeButton" @click="udateCard()" type="button" value="修改信息"/>
            <input  v-if="!disabledVaule" class="changeButton" @click="sureUpdateCard()" type="button" value="确认修改" >
        </div>
        <div id="groups" class="groupsBox">
            <div class="group-add" onclick="addGroup()">添加队伍+</div>
            <div class="groups-item card" v-for="i in 2">
                <span class="group-nameNotice">队名：</span>
                <input class="group-name" type="text" placeholder="请输入队名" />
                <br />
                <span class="group-nameNotice">英文队名：</span>
                <input class="group-name" type="text" placeholder="请输入英文队名" />
                <!-- <span class="group-name" contenteditable="plaintext-only" onkeydown="key13(this)">adf</span> -->
                <br />
                <input class="changeButton" type="button" value="修改信息"  onclick="changeData(this)"/>
                <span class="group-state">未开始</span>
                <input class="changeButton group-delete" onclick="deleteGroup(this)" type="button" value="删除队伍"/>
                <table>
                    <thead>
                    <tr>
                        <th>职位</th>
                        <th>姓名</th>
                        <th>拼音</th>
                        <th>性别</th>
                        <th>T恤尺码</th>
                    </tr>
                    </thead>
                    <tr>
                        <th>教练</th>
                        <th contenteditable="plaintext-only" onkeydown="key13(this)">柯震东</th>
                        <th contenteditable="plaintext-only" onkeydown="key13(this)">kezhendong</th>
                        <th>
                            <select>
                                <option>男</option>
                                <option>女</option>
                            </select>
                        </th>
                        <th>
                            <select>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                                <option>XXL</option>
                            </select>
                        </th>
                    </tr>
                    <tr>
                        <th>队员</th>
                        <th contenteditable="plaintext-only" onkeydown="key13(this)">柯震东</th>
                        <th contenteditable="plaintext-only" onkeydown="key13(this)">kezhendong</th>
                        <th>
                            <select>
                                <option>男</option>
                                <option>女</option>
                            </select>
                        </th>
                        <th>
                            <select>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                                <option>XXL</option>
                            </select>
                        </th>
                    </tr>
                    <tr>
                        <th>队员</th>
                        <th contenteditable="plaintext-only" onkeydown="key13(this)">柯震东</th>
                        <th contenteditable="plaintext-only" onkeydown="key13(this)">kezhendong</th>
                        <th>
                            <select>
                                <option>男</option>
                                <option>女</option>
                            </select>
                        </th>
                        <th>
                            <select>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                                <option>XXL</option>
                            </select>
                        </th>
                    </tr>
                    <tr>
                        <th>队员</th>
                        <th contenteditable="plaintext-only" onkeydown="key13(this)">柯震东</th>
                        <th contenteditable="plaintext-only" onkeydown="key13(this)">kezhendong</th>
                        <th>
                            <select>
                                <option>男</option>
                                <option>女</option>
                            </select>
                        </th>
                        <th>
                            <select>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                                <option>XXL</option>
                            </select>
                        </th>
                    </tr>
                </table>
            </div>
            <!-- <div class="group-add" onclick="addGroup()">添加队伍+</div> -->
        </div>


        <div id="deleteBox" class="deleteBox">
            <input class="changeButton" type="button" value="确定删除" onclick="isDeleteGroup()" />
            <input class="changeButton" type="button" value="取消" onclick="noDleteGroup()" />
        </div>

    </div>
</template>

<script>
    import cookie from 'js-cookie'
    import usrApi from '../../api/user'
    export default {
        name: "managerPage",
        data(){
            return{
                infoVo:{},
                disabledVaule:true
            }
        },
        methods:{
            udateCard(){
                this.disabledVaule=false;
            },
            sureUpdateCard(){
                usrApi.updateCard(this.infoVo)
                    .then(res=>{
                        cookie.set("infoVo",this.infoVo)
                        this.$message({
                            type:"success",
                            message:res.msg
                        })
                        this.disabledVaule=true;
                    })
            }

        },
        created(){
            if(cookie.get("infoVo")){
                let str=cookie.get("infoVo")
                this.infoVo=JSON.parse(str)
            }
        }
    }
</script>

<style scoped>

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
        pointer-events: auto;
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
        pointer-events: none;
    }
    .groups-item>span {
        margin: 10px;
    }
    .group-nameNotice {
        float: left;
        width: 100px;
    }
    .group-name {
        font-size: 30px;
        line-height: 40px;
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
        padding: 2px 10px;
        line-height: 20px;
        font-size: 18px;
        border-radius: 15px;
        border: solid 1px #333;
        background: #50c6df;
        float: right;
    }


    .deleteBox {
        position: fixed;
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
        margin: 0 auto;
        text-align: center;
    }
    table td, table th {
        border: 1px solid #cad9ea;
        color: #555;
        padding: 5px 0px;
        outline: none;
    }
    table thead th {
        padding: 2px 5px;
        background-color: #CCE8EB;
        min-width: 100px;
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

</style>
