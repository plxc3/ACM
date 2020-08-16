<template>
    <div class="main">
        <h1>LOGIN</h1>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="" prop="">
                <el-link type="primary" @click="goRegister()">Register</el-link>
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
                <el-input v-model.number="ruleForm.phone" prefix-icon="el-icon-phone"/>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="验证码" >
                <el-input
                        v-model="imgVC.imgCode"
                        placeholder="验证码"
                        autocomplete="off"
                        autocapitalize="off"
                        spellcheck="false"
                        maxlength="6"
                        style="float: left; width: 122px;"
                ></el-input>
                <div >
                    <img :src="imgVC.data" ref="code" @click="getNewImg">
                </div>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import checkImgApi from '../../api/checkImg'
    import userApi from "../../api/user"
    import cookie from 'js-cookie'
    export default {
        name: "Login",
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
            /**
             * 手机号验证
             */
            var checkPhone = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('手机号不能为空'));
                } else {
                    const reg = /^1[3|4|5|7|8|9][0-9]\d{8}$/
                    console.log(reg.test(value));
                    if (reg.test(value)) {
                        callback();
                    } else {
                        return callback(new Error('请输入正确的手机号'));
                    }
                }
            };
            return{
                /**
                 *图片验证码
                 */
                imgVC:{
                    /**
                     * imgurl
                     */
                    data:"",
                    imgCodeKey:"",
                    imgCode:""
                },
                ruleForm: {
                    password: '',
                    checkPass: '',
                    phone: ''
                },
                rules: {
                    password: [
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    checkPass: [
                        { trigger: 'blur'}
                    ],
                    phone: [
                        {validator: checkPhone, trigger: 'blur'}
                    ]
                },
                loginInfo:{}
            }
        },
        /**
         * methods
         */
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        checkImgApi.checkImgCode(this.imgVC)
                            .then(res => {
                                this.$message({
                                    type: 'success',
                                    message: res.msg
                                })
                                userApi.loginSubmit(this.ruleForm)
                                    .then(res => {
                                        /**
                                         * 获取token并放到cookie里面
                                         * 第一个参数cookie名称，参数值，作用范围
                                         */
                                        cookie.set("token", res.data.token)
                                        //调用接口获取用户信息，放到cookie里
                                        userApi.userLoginInfo()
                                            .then(res=>{
                                                console.log(res)
                                                cookie.set("infoVo",res.data.infoVo)
                                                this.$message("登陆成功")
                                                this.$store.commit("loginIn")
                                                this.$router.push({path:"/managerPage"})
                                            })

                                    }).catch(err => console.log(err))
                            }).catch(err => {
                            console.log(err)
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            /**
             * 刷新验证码
             */
            getNewImg(){
                // this.imgvalue=false
                // this.$nextTick(()=>{
                //     this.imgvalue=true
                // })
                checkImgApi.getImg()
                    .then(res=>{
                        console.log(res)
                        this.imgVC.imgCodeKey=res.data.result.imgCodeKey
                        this.imgVC.data=res.data.result.data
                    })
            },
            goRegister(){
                this.$router.push({path:"/register"})
            }
        },
        created(){
            this.getNewImg();
        }
    }
</script>

<style scoped>
    .main{
        margin: 78px auto;
        width: 400px;
    }
    .main h1{
        text-align: center;
    }
</style>
