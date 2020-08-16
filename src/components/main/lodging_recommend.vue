<template>
    <div class="">
        <div class="text">
            <p style="text-align: center; font-size: 43px; padding: 30px; line-height: 53px;">
                住宿推荐
            </p>
            <p class="after" style="margin-top: 30px">竞赛推荐酒店如下，比赛日会安排车辆接送到赛场。</p>
            <table class="table" border="0" style="margin-left: 10%; width: 80%; margin-top: 50px; margin-bottom: 50px;">
                <tbody>
                <caption style="margin-bottom: 10px">推荐酒店</caption>
                <tr style="background-color: #ddd">
                    <th>酒店名称</th>
                    <th>地址</th>
                    <th>距离学校公里</th>
                    <th>单间协议价</th>
                    <th>标间协议价</th>
                </tr>
                <tr>
                    <td>1223</td>
                    <td>132</td>
                    <td>3421</td>
                    <td>1423</td>
                    <td>334521</td>
                </tr>
                <tr style="background-color: #ddd">
                    <td>354621</td>
                    <td>145623</td>
                    <td>1345623</td>
                    <td>1345623</td>
                    <td>345612</td>
                </tr>
                <tr>
                    <td>2345643</td>
                    <td>14523</td>
                    <td>434523</td>
                    <td>25434</td>
                    <td>14523</td>
                </tr>
                <tr style="background-color: #ddd">
                    <td>354621</td>
                    <td>145623</td>
                    <td>1345623</td>
                    <td>1345623</td>
                    <td>345612</td>
                </tr>
                <tr>
                    <td>2345643</td>
                    <td>14523</td>
                    <td>434523</td>
                    <td>25434</td>
                    <td>14523</td>
                </tr>
                </tbody>
            </table>
            <p>另外，学校周边也有一些宾馆。各位老师可在携程上预定。</p>
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
        name: "lodging_recommend"
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
