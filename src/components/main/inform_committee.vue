<template>
    <div class="">
        <div class="text">
            <p style="text-align: center; font-size: 43px; padding: 30px; line-height: 53px;">
                赛项组委会
            </p>
            <p style="padding-top: 30px; padding-left: 10%;">
                <strong class="after">赛项组委会： </strong>
                <br /><br />
                <strong>主任委员： </strong>
                <br />
                李光华 中共四川省委教育工委副书记、四川省教育厅党组成员
                <br /><br />
                <strong>副主任委员： </strong>
                <br />
                杨亚培  四川省教育厅高教处处长
                <br /><br />
                <strong>委员：</strong>
                <br />
                宋亚兰  四川省教育厅高教处副处长
                <br />
                周世杰  电子科技大学信息与软件工程学院院长
                <br />
                吕建成  四川大学计算机学院院长
                <br />
                郝  莉  西南交通大学教务处处长
                <br />
                张应辉  成都东软学院院长
                <br /><br /><br />

                <strong class="after">赛项执委会：</strong>
                <br /><br />
                <strong>主任委员： </strong>
                <br />
                陈  波  西南科技大学副校长
                <br /><br />
                <strong>副主任委员： </strong>
                <br />
                韩永国  西南科技大学教务处处长
                <br /><br />
                <strong>委员：</strong>
                <br />
                左旭辉  西南科技大学计算机科学与技术学院党委书记
                <br />
                吴亚东  西南科技大学计算机科学与技术学院副院长
                <br />
                俞文心  西南科技大学计算机科学与技术学院副院长
                <br /><br /><br />

                <strong class="after">大赛执委会办公室：</strong>
                <br /><br />
                <strong>主任： </strong>
                <br />
                余  洋  西南科技大学计算机科学与技术学院党委副书记
                <br /><br />
                <strong>成员： </strong>
                <br />
                王修竹  西南科技大学计算机科学与技术学院党政办主任
                <br />
                李  理  西南科技大学计算机科学与技术学院实验中心主任
                <br />
                王  娇  西南科技大学计算机科学与技术学院学办副主任
                <br />
                王  娇  西南科技大学计算机科学与技术学院学办副主任
                <br /><br /><br />
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
        name: "inform_committee"
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
