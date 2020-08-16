<template>
    <div class="main">
        <h1>Register</h1>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="" prop="">
                <el-link type="primary" @click="goLogin()">Login</el-link>
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
                <el-input v-model.number="ruleForm.phone" prefix-icon="el-icon-phone"/>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="学校名字" prop="uniName">
                <el-input v-model="ruleForm.uniName"></el-input>
            </el-form-item>
            <el-form-item label="学校英文名字" prop="uniEngName">
                <el-input v-model="ruleForm.uniEngName"></el-input>
            </el-form-item>
            <el-form-item label="邮寄地址" prop="address">
                <el-input v-model="ruleForm.address"></el-input>
            </el-form-item>
            <el-form-item label="老师名字" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="发票抬头" prop="invoice">
                <el-input v-model="ruleForm.invoice"></el-input>
            </el-form-item>
            <el-form-item label="税号" prop="tfn">
                <el-input v-model="ruleForm.tfn"></el-input>
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
            <el-form-item >
                <el-button type="success" style="width: 150px;" @click="getCodeMessage">点击获取验证码</el-button>
                <el-input v-model="ruleForm.code" placeholder="验证码" style="width: 150px;"></el-input>
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
    export default {
        name: "Register",
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
            var checkuniName = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('学校名字不能为空'));
                }
                callback();
            };
            var checkuniEngName= (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('学校英文名字不能为空'));
                }
                callback();
            };
            var checkaddress= (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('邮寄地址不能为空'));
                }
                callback();
            };

            var checkname= (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('老师名字不能为空'));
                }
                callback();
            };
            var checkinvoice= (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('发票抬头不能空'));
                }
                callback();
            };
            var checktfn= (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('税号不能为空'));
                }
                callback();
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
                    phone: '',
                    uniName:'',
                    uniEngName:'',
                    address:'',
                    name:'',
                    invoice:'',
                    tfn:''
                },
                rules: {
                    password: [
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                    // checkPass: [
                    //     { trigger: 'blur'}
                    // ],
                    phone: [
                        {validator: checkPhone, trigger: 'blur'}
                    ],
                    uniName: [
                        {validator: checkuniName, trigger: 'blur'}
                    ],
                    uniEngName:[
                        {validator: checkuniEngName, trigger: 'blur'}
                    ],
                    address:[
                        {validator: checkaddress, trigger: 'blur'}
                    ],
                    name:[
                        {validator: checkname, trigger: 'blur'}
                    ],
                    invoice:[
                        {validator: checkinvoice, trigger: 'blur'}
                    ],
                    tfn:[
                        {validator: checktfn, trigger: 'blur'}
                    ]
                },
                loginInfo:{}
            }
        },
        methods:{
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
            goLogin(){
                this.$router.push({path:"/login"})
            },
            getCodeMessage(){
                    checkImgApi.checkImgCode(this.imgVC)
                        .then(res=>{
                            this.$message({
                                type:'success',
                                message:res.msg
                            })
                            userApi.getcodeByMsm(this.ruleForm.phone)
                                .then(()=>{
                                    this.$message({
                                        type:"success",
                                        message:"手机短信发送成功"
                                    })
                                })
                        })
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        userApi.register(this.ruleForm)
                            .then(res=>{
                                console.log(res)
                                this.$message("注册成功")
                                this.$router.push({path:"/login"})
                            })
                    } else {
                        return false;
                    }
                });
            },
        },
        created(){
            this.getNewImg();
        }
    }
</script>

<style scoped>

    .main{
        margin: 0px auto;
        width: 400px;
    }
    .main h1{
        text-align: center;
    }

</style>
