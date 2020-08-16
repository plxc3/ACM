<template>
    <div class="">
        <div class="text">
            <p style="text-align: center; font-size: 43px; padding: 30px; line-height: 53px;">
                关于举办2020年（第十二届）四川省大学生程序设计竞赛的通知
            </p>
            <p style="padding-top: 30px">
                <strong>各高等院校：</strong>
                <br /><br />
                为深化我省高等教育教学改革，展示大学生创新能力、团队精神和在压力下编写程序、分析和解决问题的能力，经四川省教育厅批准(川教函〔2020〕85号)，我省拟于2020年6月1日至6月3日在四川轻化工大学举办“2020年（第十二届）四川省大学生程序设计竞赛”，现将大赛方案印发你们，请遵照执行。
                <br /><br />
                ACM-ICPC（国际大学生程序设计竞赛）是由ACM于1970年发起组织的年度性竞赛活动，是当今国际计算机界历史悠久并得到全球公认的规模最大、水平最高的国际大学生程序设计竞赛。
                <br /><br />
                依照大赛方案，贵校最多可以选派5支（如果有女队，则最多可派6支）参赛队参加比赛，每支参赛队需缴纳参赛费人民币600 元，参赛费由参赛学校缴纳，不得向参赛学生收取。所有参赛队在2020年4 月28日前完成报名手续，详情请参见大赛方案（附件1）。本次大赛参赛报名费由四川轻化工大学收取，并开据发票；各参赛队自行联系酒店住宿，住宿缴费和住宿发票由酒店开据。
                <br /><br />
                大赛邮箱： susecxzx@163.com
                <br /><br /><br /><br />
                <span style="float: right;">四川省大学生程序设计大赛组委会</span>
                <br /><br />
                <span style="float: right;">四川轻化工大学计算机科学与工程学院</span>
                <br /><br />
                <span style="float: right;">2020年3月26日</span>
                <br /><br />
                四川省教育厅文件链接：<a href="null">http://gjc.scedu.net/p/13/?StId=st_app_news_i_x636578329766947119</a>
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
        name: "inform"
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
