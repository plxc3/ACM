<template>
    <div class="" v-if="$store.state.admin">
        <div class="guide">
            <ul style="position: relative; text-align: center;">
                <li>
                    <img src="../../assets/0.png" style="height: 40px; position: relative; top: 10px;" />
                </li>
                <li class="guide_a">
                    <a  @click="goMain()">首页</a>
                </li>
                <li class="guide_a">
                    <a  @click="goInformM()">参赛通知</a>
                    <ul class="guide_ul">
                        <li>
                            <a @click="goInform()">竞赛邀请函</a>
                        </li>
                        <li>
                            <a @click="goCommittee()">赛项组委会</a>
                        </li>
                        <li>
                            <a @click="goTime()">竞赛时间</a>
                        </li>
                        <li>
                            <a @click="goBaoming()">竞赛报名</a>
                        </li>
                    </ul>
                </li>
                <li class="guide_a">
                    <a @click="guide()">参赛指南</a>
                    <ul class="guide_ul">
                        <li>
                            <a @click="goRequire()">参赛要求</a>
                        </li>
                        <li>
                            <a @click="goawdards()">奖项设置</a>
                        </li>
                    </ul>
                </li>
                <li class="guide_a">
                    <a @click="lodging()" >吃喝住行</a>
                    <ul class="guide_ul">
                        <li>
                            <a @click="recommend()">住宿推荐</a>
                        </li>
                        <li>
                            <a @click="lodgingway()">交通路线</a>
                        </li>
                        <li>
                            <a @click="goMap()">校园地图</a>
                        </li>
                    </ul>
                </li>
                <li class="guide_a">
                    <a @click="goyibin()">宜宾之美</a>
                </li>
                <li class="guide_a">
                    <a @click="golist()">竞赛榜单</a>
                </li>
                <li class="guide_a">
                    <a @click="goLogin" v-if="!$store.state.loginState">参赛院校登录</a>
                </li>
                <li class="guide_a" v-if="$store.state.loginState">
                    <a @click="goManage()">管理页面</a>
                </li>
                <li class="guide_a" v-if="$store.state.loginState">
                    <a @click="goLoginOut()">退出登录</a>
                </li>
            </ul>
        </div>
        <div class="header">
            <img src="../../assets/head.png" style="width: 100%" v-if="!$store.state.loginState" />
        </div>
    </div>
</template>

<script>
    import cookie from 'js-cookie'
    export default {
        name: "HeaderNav",
        data() {
            return {
            };
        },
        methods: {
            goInform(){
                this.$router.push({path:"/inform_invitation"})
            },
            goMain(){
                this.$router.push({path:"/main"})
            },
            goCommittee(){
                this.$router.push({path:"/inform_committee"})
            },
            goTime(){
                this.$router.push({path:"/inform_time"})
            },
            goBaoming(){
                this.$router.push({path:"/inform_register"})
            },
            goRequire(){
                this.$router.push({path:"/guide_require"})
            },
            goInformM(){
                this.$router.push({path:"/inform"})
            },
            guide(){
                this.$router.push({path:"/guide"})
            },
            goawdards(){
                this.$router.push({path:"/guide_awards"})
            },
            lodging(){
                this.$router.push({path:"/lodging"})
            },
            recommend(){
                this.$router.push({path:"/lodging_recommend"})
            },
            lodgingway(){
                this.$router.push({path:"/lodging_way"})
            },
            goMap(){
                this.$router.push({path:"/lodging_map"})
            },
            goyibin(){
                this.$router.push({path:"/yibin"})
            },
            golist(){
                this.$router.push({path:"/list"})
            },
            goLogin(){
                this.$router.push({path:"/login"})
            },
            goLoginOut(){
                cookie.set("token",'')
                cookie.set("proxyId",'')
                cookie.set("infoVo",'')
                this.$store.commit("loginOut")
                this.$router.push({path:"/main"})
                this.$message({
                    type:"success",
                    message:"注销成功"
                })
            },
            goManage(){
                this.$router.push({path:"/managerPage"})
            }

        }
    }
</script>

<style scoped>
    * {
        margin: 0px;
        padding: 0px;
        word-break: break-all;
        letter-spacing: 2px;
    }
    html {
        line-height: 1.15; /* Correct the line height in all browsers */
        -webkit-text-size-adjust: 100%; /* Prevent adjustments of font size after orientation changes in iOS. */
    }
    body {
        margin: 0;
        background-color: #fff;
    }
    a {
        background-color: transparent; /* Remove the gray background on active links in IE 10. */
        text-decoration: none;
        font-family: Georgia;
        color: #119;
        cursor: pointer;
    }
    img {
        border-style: none; /*  Remove the border on images inside links in IE 10. */
        margin: 0px;
        padding: 0px;
    }
    .after {
        border-left: solid 10px #133;
        padding-left: 15px;
    }
    .header {
        width: 100%;
        height: auto;
    }
    .guide > img {
        display: none;
    }
    /**************************/
    .guide {
        width: 100%;
        height: auto;
        background-color: #133;
        box-shadow: 0 0px 10px #888;
    }
    .guide_a > a{
        padding: 20px 0px;
        color: #fff;
        white-space:nowrap;
        font-size: 20px;
        transition: color 0.3s;
    }
    .guide_ul > li > a{
        white-space:nowrap;
        line-height: 30px;
        font-size: 15px;
        color: white;
    }
    @media screen and (min-width: 700px) {
        .guide_a > a{
            line-height: 70px;
        }
        .guide > ul > li {
            padding: 20px 0px;
            position: relative;
            padding: 0;
            display: inline;
            margin: 0 20px;
        }
        .guide_ul{
            position: absolute;
            padding: 13px 25px;
            color: #fff;
            left: 0px;
            opacity: 0;
            top: 50px;
            z-index: -1;
            visibility: hidden;
            list-style: none;
            background-color: #122;
            border-top: solid 3px #599;
            transition: top 0.3s, opacity 0.3s;
        }
        .guide2 {
            display: none;
        }

    }

    @media screen and (max-width: 700px) {
        .guide_a > a{
            line-height: 50px;
        }
        .guide > ul > li {
            display: list-item;
            margin: 0px;
            padding: 0px;
            list-style: none;
        }
        #guide_ul{
            display: none;
        }
        .guide2 {
            display: block;
            margin-top: 15px;
            margin-left: 10%;
        }
        .guide2 > a{
            line-height: 35px;
            white-space:nowrap;
            color: #133;
            font-family: "";
        }.guide2 > a:hover{
             color: #399;
         }

    }

    /*************************/
    .guide_a:hover > a{
        color: #599;
    }
    .guide_ul > li:hover > a{
        color: #599;
    }
    .guide_ul:hover ,
    .guide_a:hover > .guide_ul {
        visibility: visible;
        z-index: 1001;
        opacity: 1;
        top:40px;
    }
    .text {
        width: 80%;
        height: auto;
        background-color: #fff;
        margin: 50px auto;
    }
    .text > p {
        font-size: 18px;
        line-height: 28px;
    }
    .icon {
        margin: 30px auto;
        text-align: center;
        width: 90%;
    }
    .icon > a > img {
        width: 20%;
        min-width: 100px;
        margin: 20px 30px;
    }
    .end {
        width: 100%;
        height: auto;
        background-color: #122;
        text-align: center;
    }
    .etext {
        width: 100%;
        height: auto;
        padding-top: 40px;
        padding-bottom: 40px;
    }
    .etext> span {
        font-size: 15px;
        color: #ddd;
    }
</style>
