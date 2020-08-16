<template>
    <div class="">
        <div class="text">
            <p style="text-align: center; font-size: 43px; padding: 30px; line-height: 53px;">
                参赛要求
            </p>
            <p style="padding-top: 30px">
                <span class="after">参赛队伍以四川省内高校队伍为主，同时邀请国内部分知名高校、西南地区高校及省内部分知名中学队伍参赛。3名参赛队员必须同时符合以下要求：报名参赛的学生必须是自愿的；报名参赛的学生必须是同一所全日制大学的正式在册学生；每支高校队伍中的队员必须是高中毕业不超过五年的在校大学生；队员均为女生的参赛队定义为女队。</span>
                <br /> <br />
                <span class="after">组队规定：每个参赛队最多由4人组成：3名学生队员和1名教练。教练须由学校专任教师担任，一个参赛队只能有一个教练。</span>
                <br /> <br />
                <span class="after">报名办法：由各个学校教练自愿报名，每个学校最多5支参赛队；如果有女队，则每个学校最多可以有6支队伍参赛。</span>
                <br /> <br />
                <span class="after">各参赛高校按报送队伍数量缴纳参赛报名费，标准为600元/队。此参赛报名费由参赛高校缴纳，学校不得以任何方式向学生收取。</span>
                <br /> <br />
                <span class="after">组委会将为参赛者和教练提供6月2日晚餐和6月3日早餐和午餐（含在参赛费中）。采用集中封闭的竞赛形式。各高校参赛队伍同时竞赛，在竞赛举办学校相对集中的场地进行。</span>
                <br /> <br />
                <span class="after">鼓励不同类型的高校和不同专业的学生参赛，但各高校统一上机比赛，原则上不单独为高职高专院校参赛队伍设立题目。</span>
                <br /> <br />
                <span class="after">竞赛场地及计算机、网络设备及耗材等由竞赛承办学校准备。</span>
                <br /> <br />
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
        name: "guide_require"
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
