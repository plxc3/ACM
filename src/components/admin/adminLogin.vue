<template>
<div class="main">
    <h1>ACM后台管理页面</h1>
    <div class="loginBox">
        <input class="userName" placeholder="请输入用户名" v-model="admin.userName" type="text"/>
        <br/>
        <input class="password" placeholder="请输入密码"  v-model="admin.password" type="password"/>
        <br/>
        <input class="button" type="button" value="登录" @click="login()"/>
    </div>
</div>
</template>

<script>
    import proApi from "../../api/pro"
    import cookie from 'js-cookie'
    export default {
        name: "adminLogin",
        data(){
            return{
                admin:{}
            }
        },
        methods:{
            login(){
                proApi.login(this.admin)
                    .then((res)=>{
                        cookie.set("token",res.data.id)
                        this.$message({
                            type:"success",
                            message:res.msg
                        })
                        this.$store.commit("adminIn")
                        this.$router.push({path:"/adminManage"})
                    })
            }
        },

    }
</script>

<style scoped>
    * {
        padding: 0;
        margin: 0;
    }

    .headImg {
        width: 100%;
    }

    .loginBox {
        width: 300px;
        padding: 20px 20px;
        margin: 50px auto;
        text-align: center;
        border-radius: 5px;
        box-shadow: 0 0 5px #555;
        background: #59cccb;
    }
    .userName, .password {
        height: 20px;
        font-size: 18px;
        margin: 10px 0;
        padding: 2px 10px;
        border-radius:20px;
        border: solid 1px #333;
        outline: none;
    }
    .button {
        font-size: 15px;
        padding: 3px 10px;
        border-radius: 22px;
        border: solid 1px #333;
        background: white;
        transition: 0.5s;
    }
    .button:hover {
        box-shadow: 0 0 3px #444;
        background: #cfc;
        outline: none;
    }
    .main{
        text-align: center;
        margin: 150px auto;
    }
</style>
