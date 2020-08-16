<template>
    <div class="">
        <div class="text">
            <p style="text-align: center; font-size: 43px; padding: 30px; line-height: 53px;">
                参赛指南</p>
            <br />
            <p style="font-family:'Georgia'">
                本次竞赛将采用ACM-ICPC国际大学生程序设计竞赛的比赛方式，至少命题10题，全英文题面，比赛时间为5个小时。
                <br /><br />
                比赛期间，每队使用1台电脑需要在5个小时内使用C、C++或Java中的一种编写程序解决问题。程序完成之后提交裁判运行，运行的结果会判定为“AC(正确)/WA（错误）/TLE（超时）/MLE（超出内存限制）/RE（运行错误）/PE（格式错误）”中的一种并及时通知参赛队。每队在正确完成一题后，组织者将在其位置上升起一只代表该题颜色的气球。
                <br /><br />
                最后的获胜者为正确解答题目最多且总用时最少的队伍。每道试题用时将从竞赛开始到试题解答被判定为正确为止，其间每一次提交运行结果被判错误的话将被加罚20分钟时间，未正确解答的试题不记时。例如：A、B两队都正确完成两道题目，其中A队提交这两题的时间分别是比赛开始后1:00和2:45，B队为1:20和2:00，B队有一题曾错误提交了1次。这样A队的总用时为1:00+2:45=3:45而B队为1:20+2:00+0:20=3:40，所以B队以总用时少而获胜。
                <br /><br />
                参赛队员可以携带诸如词典、书、手册、程序清单等纸质参考资料。不能携带磁盘、存储功能计算器以及任何可用计算机处理的软件或数据。参赛队员不能携带任何类型的通讯工具，包括无线电接收器和移动电话等。不得自带键盘。比赛过程中严禁作弊，一旦发现将立即取消该队参赛资格并通报批评。
                <br /><br />
                <span class="after">竞赛语言： C,C++（gcc/g++ 4.6.1）和Java 1.8。</span>
                <br /><br />
                <span class="after">裁判软件： PC^2 9.2.3-2565或者Online Judge。</span>
                <br /><br />
                <span class="after">编辑器及版本：vim/vim-gtk 7.3.154，Emacs 23.3.1，gedit 3.2.3。</span>
                <br /><br />
                <span class="after">IDE：CodeBlocks 10.05，Eclipse(Neon.1) 4.6.1。</span>
                <br /><br />
                <span class="after">竞赛题目在难易程度上，既要考虑使一般参赛学生能在规定时间内完成基本的题目，又能使优秀学生有充分发挥与展示的余地。</span>
                <br /><br />
                <span class="after">题目描述为全英文，知识点涉及数据结构、图论、动态规划、计算几何、搜索、组合数学和数论等。</span>
                <br /><br />
                <span class="after">每支队伍使用一台计算机，所有队伍使用的计算机配置基本相同。</span>
                <br /><br />
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
        name: "guide"
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
