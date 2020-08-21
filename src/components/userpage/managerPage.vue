<template>
    <div class="">
        <el-dialog
                title="提示"
                :visible.sync="centerDialogVisible"
                width="100%"
                center>
            <div class="groups-item card">
                <span class="group-nameNotice">队名：</span>
                <input  v-model="insertTeam.teamName" class="group-name" type="text" placeholder="请输入队名" />
                <br />
                <span class="group-nameNotice">英文队名：</span>
                <input  v-model="insertTeam.teamEngName" class="group-name" type="text" placeholder="请输入英文队名" />
                <!-- <span class="group-name" contenteditable="plaintext-only" onkeydown="key13(this)">adf</span> -->
                <br />
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
                        <th>
                            <el-input
                                    placeholder="请输入内容"
                                    v-model="insertTeam.coachName"
                                  >
                            </el-input>
                        </th>
                        <th>
                            <el-input
                                    placeholder="请输入内容"
                                    v-model="insertTeam.coachPinyin"
                            >
                            </el-input>
                        </th>
                        <th>
                            <el-select v-model="insertTeam.coachSex" placeholder="请选择" >
                                <el-option
                                        label="男"
                                        value="男">
                                </el-option>
                                <el-option
                                        label="女"
                                        value="女">
                                </el-option>
                            </el-select>
                        </th>
                        <th>
                            <el-select v-model="insertTeam.coachTsize" placeholder="请选择">
                                <el-option
                                        v-for="item in Tsize"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </th>
                    </tr>
                    <tr>
                        <th>队员1</th>
                        <th >
                            <el-input
                                    placeholder="请输入内容"
                                    v-model="insertTeam.name1"
                                  >
                            </el-input>
                        </th>
                        <th>
                            <el-input
                                    placeholder="请输入内容"
                                    v-model="insertTeam.pinyin1"
                                 >
                            </el-input>
                        </th>
                        <th>
                            <el-select v-model="insertTeam.sex1" placeholder="请选择" >
                                <el-option
                                        label="男"
                                        value="男">
                                </el-option>
                                <el-option
                                        label="女"
                                        value="女">
                                </el-option>
                            </el-select>
                        </th>
                        <th>
                            <el-select v-model="insertTeam.tsize1" placeholder="请选择" >
                                <el-option
                                        v-for="item in Tsize"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </th>
                    </tr>
                    <tr>
                        <th>队员2</th>
                        <th>
                            <el-input
                                    placeholder="请输入内容"
                                    v-model="insertTeam.name2"
                                  >
                            </el-input>
                        </th>
                        <th>
                            <el-input
                                    placeholder="请输入内容"
                                    v-model="insertTeam.pinyin2"
                                    >
                            </el-input>
                        </th>
                        <th>
                            <el-select v-model="insertTeam.sex2" placeholder="请选择" >
                                <el-option
                                        label="男"
                                        value="男">
                                </el-option>
                                <el-option
                                        label="女"
                                        value="女">
                                </el-option>
                            </el-select>
                        </th>
                        <th>
                            <el-select v-model="insertTeam.tsize2" placeholder="请选择" >
                                <el-option
                                        v-for="item in Tsize"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </th>
                    </tr>
                    <tr>
                        <th>队员3</th>
                        <th>
                            <el-input
                                    placeholder="请输入内容"
                                    v-model="insertTeam.name3"
                                   >
                            </el-input>
                        </th>
                        <th>
                            <el-input
                                    placeholder="请输入内容"
                                    v-model="insertTeam.pinyin3"
                                   >
                            </el-input>
                        </th>
                        <th>
                            <el-select v-model="insertTeam.sex3" placeholder="请选择" >
                                <el-option
                                        label="男"
                                        value="男">
                                </el-option>
                                <el-option
                                        label="女"
                                        value="女">
                                </el-option>
                            </el-select>
                        </th>
                        <th>
                            <el-select v-model="insertTeam.tsize3" placeholder="请选择" >
                                <el-option
                                        v-for="item in Tsize"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </th>
                    </tr>
                </table>
            </div>
            <!-- <div class="group-add" onclick="addGroup()">添加队伍+</div> -->
            <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="sureSave()">确 定</el-button>
  </span>
        </el-dialog>

        <!--===========================================================================================================-->
        <div class="recipienterBox card">
            电话
            <el-input
                    placeholder="请输入内容"
                    v-model="infoVo.phone"
                    :disabled="true">
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
            <input v-if="disabledVaule" class="changeButton" @click="udateCard()" type="button" value="修改学校信息"v-show="roleVaule" />
            <input  v-if="!disabledVaule" class="changeButton" @click="sureUpdateCard()" type="button" value="确认修改"v-show="roleVaule"  >
            <br>
            <input  class="changeButton" @click="updatePassword()" type="button" value="修改学校密码" >
        </div>
        <div id="groups" class="groupsBox">
            <div class="group-add" @click="allGroup()">全部队伍列表</div>
            <div class="group-add" @click="addGroup()" v-show="roleVaule">添加队伍+</div>
            <div class="groups-item card" v-for="i in team" :key="i.id">
                <span class="group-nameNotice">队名：</span>
                <el-input
                        placeholder="请输入队名"
                        v-model="i.teamName"
                        style="width: 60%;margin-left: 50px"
                        :disabled="true">
                </el-input>
                <!--<input  v-model="i.teamName" class="group-name" type="text" placeholder="请输入队名" :disabled="tableVaule" />-->
                <br />
                <span class="group-nameNotice">英文队名：</span>
                <el-input
                        placeholder="请输入队名"
                        v-model="i.teamEngName"
                        style="width: 60%;margin-left: 50px"
                        :disabled="true">
                </el-input>
                <!--<input  v-model="i.teamEngName" class="group-name" type="text" placeholder="请输入英文队名" :disabled="tableVaule" />-->
                <!-- <span class="group-name" contenteditable="plaintext-only" onkeydown="key13(this)">adf</span> -->
                <br />
                <input v-if="tableVaule" class="changeButton" type="button" value="修改成员信息"v-show="roleVaule"   @click="changeData(i)"/>
                <input v-if="!tableVaule" class="changeButton" type="button" value="确认修改"  v-show="roleVaule" @click="sureChangeData(i)"/>
                <span class="group-state">{{i.state}}</span>
                <input class="changeButton group-delete" @click="deleteGroup(i)" type="button" value="删除队伍" v-show="roleVaule"/>
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
                        <th>
                            <el-input
                                placeholder="请输入内容"
                                v-model="i.coachName"
                                :disabled="tableVaule">
                        </el-input>
                        </th>
                        <th>
                            <el-input
                                    placeholder="请输入内容"
                                    v-model="i.coachPinyin"
                                    :disabled="tableVaule">
                            </el-input>
                        </th>
                        <th>
                            <el-select v-model="i.coachSex" placeholder="请选择" :disabled="tableVaule">
                                <el-option
                                        label="男"
                                        value="男">
                                </el-option>
                                <el-option
                                        label="女"
                                        value="女">
                                </el-option>
                            </el-select>
                        </th>
                        <th>
                            <el-select v-model="i.coachTsize" placeholder="请选择" :disabled="tableVaule">
                                <el-option
                                        v-for="item in Tsize"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </th>
                    </tr>
                    <tr>
                        <th>队员1</th>
                        <th >
                            <el-input
                                    placeholder="请输入内容"
                                    v-model="i.name1"
                                    :disabled="tableVaule">
                            </el-input>
                        </th>
                        <th>
                            <el-input
                                    placeholder="请输入内容"
                                    v-model="i.pinyin1"
                                    :disabled="tableVaule">
                            </el-input>
                        </th>
                        <th>
                            <el-select v-model="i.sex1" placeholder="请选择" :disabled="tableVaule">
                                <el-option
                                        label="男"
                                        value="男">
                                </el-option>
                                <el-option
                                        label="女"
                                        value="女">
                                </el-option>
                            </el-select>
                        </th>
                        <th>
                            <el-select v-model="i.tsize1" placeholder="请选择" :disabled="tableVaule">
                                <el-option
                                        v-for="item in Tsize"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </th>
                    </tr>
                    <tr>
                        <th>队员2</th>
                        <th>
                            <el-input
                                    placeholder="请输入内容"
                                    v-model="i.name2"
                                    :disabled="tableVaule">
                            </el-input>
                        </th>
                        <th>
                            <el-input
                                    placeholder="请输入内容"
                                    v-model="i.pinyin2"
                                    :disabled="tableVaule">
                            </el-input>
                        </th>
                        <th>
                            <el-select v-model="i.sex2" placeholder="请选择" :disabled="tableVaule">
                                <el-option
                                        label="男"
                                        value="男">
                                </el-option>
                                <el-option
                                        label="女"
                                        value="女">
                                </el-option>
                            </el-select>
                        </th>
                        <th>
                            <el-select v-model="i.tsize2" placeholder="请选择" :disabled="tableVaule">
                                <el-option
                                        v-for="item in Tsize"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </th>
                    </tr>
                    <tr>
                        <th>队员3</th>
                        <th>
                            <el-input
                                    placeholder="请输入内容"
                                    v-model="i.name3"
                                    :disabled="tableVaule">
                            </el-input>
                        </th>
                        <th>
                            <el-input
                                    placeholder="请输入内容"
                                    v-model="i.pinyin3"
                                    :disabled="tableVaule">
                            </el-input>
                        </th>
                        <th>
                            <el-select v-model="i.sex3" placeholder="请选择" :disabled="tableVaule">
                                <el-option
                                        label="男"
                                        value="男">
                                </el-option>
                                <el-option
                                        label="女"
                                        value="女">
                                </el-option>
                            </el-select>
                        </th>
                        <th>
                            <el-select v-model="i.tsize3" placeholder="请选择" :disabled="tableVaule">
                                <el-option
                                        v-for="item in Tsize"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </th>
                    </tr>
                </table>
            </div>
            <!-- <div class="group-add" onclick="addGroup()">添加队伍+</div> -->
        </div>

        <el-dialog
                title="提示"
                :visible.sync="dialogVisible2"
                width="30%"
        >
            <div id="allBox" class="allBox">
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
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible2 = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible2=false">确 定</el-button>
  </span>
        </el-dialog>


        <!--修改密码-->
        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
        >
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="surePassword('ruleForm')">确 定</el-button>
                    <!--<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>-->
                    <!--<el-button @click="resetForm('ruleForm')">重置</el-button>-->
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
  </span>
        </el-dialog>


    </div>
</template>

<script>
    import cookie from 'js-cookie'
    import usrApi from '../../api/user'
    import itemApi from '../../api/iteam'
    export default {
        name: "managerPage",
        data(){
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            }
            return{
                dialogVisible:false,
                roleVaule:true,
                ruleForm: {
                    password: '',
                    checkPass: '',
                },
                rules: {
                    password: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                },
                dialogVisible2:false,
                teamsExceL:[],
                proxyId:'',
                insertTeam:{
                    coachTsize:"S",
                    coachSex:"男",
                    name2:"",
                    pinyin2:"",
                    sex2:"男",
                    sex1:"男",
                    tsize2:"S",
                    name3:"",
                    pinyin3:"",
                    sex3:"男",
                    tsize3:"S",
                    tsize1:"S",
                },
                insertTeam2:{
                    coachTsize:"S",
                    coachSex:"男",
                    name2:"",
                    pinyin2:"",
                    sex2:"男",
                    sex1:"男",
                    tsize2:"S",
                    name3:"",
                    pinyin3:"",
                    sex3:"男",
                    tsize3:"S",
                    tsize1:"S",
                },
                centerDialogVisible: false,
                infoVo:{},
                disabledVaule:true,
                team:[
                ],
                tableVaule:true,
                Tsize:[
                    {
                    value: 'S',
                    label: 'S'
                },
                    {
                        value: 'M',
                        label: 'M'
                    },
                    {
                        value: 'L',
                        label: 'L'
                    },
                    {
                        value: 'Xl',
                        label: 'XL'
                    },
                    {
                        value: 'XXl',
                        label: 'XXL'
                    },
                ]
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
            },
            /**
             * 删除队伍
             */
            deleteGroup(i){
                this.$confirm('此操作将删除队伍, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    itemApi.deleteTeam(i.id)
                        .then(res=>{
                            this.$message({
                                type: 'success',
                                message: res.msg
                            });
                            this.getList()
                        })

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            /**
             * 修改信息
             */
            changeData(){
                this.tableVaule=false
            },
            /**
             * 确认修改
             */
            sureChangeData(i){
                itemApi.updateTeam(i)
                    .then(res=>{
                        this.$message({
                            type:"success",
                            message:res.msg
                        })
                        this.getList()
                        this.tableVaule=true
                    })
            },
            /**
             * 添加队伍
             */
            addGroup(){
                this.insertTeam.proxyId=this.proxyId
                this.centerDialogVisible=true
            },
            /**
             * 确认添加
             */
            sureSave(){
                itemApi.addIteaam(this.insertTeam)
                    .then(res=>{
                        this.$message({
                            type:"success",
                            message:res.msg
                        })
                        this.insertTeam={}
                        this.insertTeam=this.insertTeam2
                        this.getList()
                        this.centerDialogVisible=false
                    })
            },
            /**
             * 获取队伍列表
             */
            getList(){
                itemApi.getList(this.proxyId)
                    .then((res)=>{
                        this.team=res.data.teams
                    })
            },
            allGroup(){
                this.$router.push("/excel")
            },
            updatePassword(){
                this.dialogVisible=true
            },
            surePassword(){
                console.log(this.ruleForm)
                usrApi.updateCard(this.ruleForm)
                    .then(res=>{
                        this.$message({
                            type:"success",
                            message:res.msg
                        })
                        this.dialogVisible=false
                        cookie.set("token",'')
                        cookie.set("proxyId",'')
                        cookie.set("infoVo",'')
                        cookie.set("role",'')
                        this.$store.commit("loginOut")
                        this.$router.push({path:"/main"})
                    })
            }
        },
        created(){
            if(cookie.get("infoVo")){
                let str=cookie.get("infoVo")
                this.infoVo=JSON.parse(str)
                this.proxyId=cookie.get("proxyId")
                this.ruleForm.id=cookie.get("proxyId")
                this.getList()
            }
            if(cookie.get("role")>0){
                this.roleVaule=true
            }else {
                this.roleVaule=false
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
        position: fixed;
        top: 0;
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
