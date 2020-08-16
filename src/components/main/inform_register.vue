<template>
    <div class="">
        <div class="text">
            <p style="text-align: center; font-size: 43px; padding: 30px; line-height: 53px;">
                竞赛报名
            </p>
            <p style="padding-top: 30px;">
                <strong class="after">报名方式： </strong>
                <br /><br />
                请各高校以学校为单位于2020年4月28日前填写《2020年（第十二届）四川省大学生程序设计竞赛报名登记表》（附件3），加盖教务处公章后报送至四川轻化工大学，同时请发电子版至指定邮箱swustacm2020@163.com。
                <br /><br /><br />
                <strong>4月16日，2020年（第十二届）四川省大学生程序设计竞赛已正式加入ICPC Asia Special Provincial contest Program（ICPC亚洲区省赛专署计划），参加本次竞赛的队伍将有机会获得2020年ACM-ICPC亚洲区（西安）的现场赛名额。</strong>
                <br /><br />
                <strong>各参赛队伍还需到ICPC官网进行注册，<a href="null"> 点击注册>> </a> </strong>
                <br /><br />
                联系人：四川轻化工大学   韩强
                <br /><br />
                联系电话：0816-6089341，
                <br /><br />
                电子信箱：swustacm2020@163.com
                <br /><br />
                联系地址：四川省绵阳市涪城区青龙大道中段59号
                <br /><br />
                邮编：621010
                <br /><br />
                大赛讨论QQ群：732818609
                <br /><br /><br />
                <strong class="after">缴费方式：</strong>
                <br /><br />
                参赛报名费由四川轻化工大学收取，600元/支队伍，并开据发票；各参赛队自行联系酒店住宿，住宿缴费和住宿发票由酒店开据。
                <br /><br />
                参赛报名费缴费时间：2020年4月28日前。
                <br /><br />
                逾期未缴报名费的学校视为放弃参赛。
                <br /><br />
                缴费方式：请参赛高校将参赛报名费统一汇入大赛指定的账户，并注明“ACM参赛费-XX大学”。
                <br /><br />
                账户信息如下：
                <br /><br />
                账户名：四川轻化工大学
                <br /><br />
                账号：22240901040000456
                <br /><br />
                开户行：绵阳市农行四川轻化工大学支行
                <br /><br />
                附件3：<a href="null">2020年（第十二届）四川省大学生程序设计竞赛报名登记表</a>
            </p>
        </div>
        <div class="end">
            <div class="etext">
                <span>主办：四川省教育厅 &nbsp; &nbsp; &nbsp; 承办：四川轻化工大学</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "inform_register"
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
    #guide_a > a{
        padding: 20px 0px;
        color: #fff;
        white-space:nowrap;
        font-size: 20px;
        transition: color 0.3s;
    }
    #guide_ul > li > a{
        white-space:nowrap;
        line-height: 30px;
        font-size: 15px;
        color: white;
    }
    @media screen and (min-width: 700px) {
        #guide_a > a{
            line-height: 70px;
        }
        .guide > ul > li {
            padding: 20px 0px;
            position: relative;
            padding: 0;
            display: inline;
            margin: 0 20px;
        }
        #guide_ul{
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
        #guide_a > a{
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
    #guide_a:hover > a{
        color: #599;
    }
    #guide_ul > li:hover > a{
        color: #599;
    }
    #guide_ul:hover ,
    #guide_a:hover > #guide_ul {
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
