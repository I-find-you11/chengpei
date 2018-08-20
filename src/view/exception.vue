<style lang="scss" scoped>
.contain{
    padding-top: .44rem;
}
.card{
    background: white;
    padding-left: .12rem;
    margin-top: .12rem;
    box-shadow: 0px 2px 15px 0px rgba(144, 143, 143, 0.35);
    border-radius: .04rem;
    font-size: 0;
    .item{
        line-height: .52rem;
        font-size: .15rem;
        display: flex;
        border-bottom: solid .01rem #eee;
        align-items: center;
        span:nth-child(1){
            width: 20%;
            flex-shrink: 0;
            margin-right: .08rem;
        }
        span:nth-child(2){
            flex: 1;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        img{
            width: .52rem;
            height: .34rem;
        }
    }
}
</style>

<template>
    <div class="wraper contain">
        <user-header text="异常历史"></user-header>
        <div class="card">
            <div class="item">
                <span>异常阶段</span>
                <span>装货异常</span>
            </div>
            <div class="item">
                <span>异常类型</span>
                <span>少货</span>
            </div>
            <div class="item">
                <span>异常内容</span>
                <span>少货</span>
                <img src="../../static/img/goodpic.png" alt="">
            </div>
            <div class="item">
                <span>上报时间</span>
                <span>2018-07-24   16:15</span>
            </div>
            <div class="item">
                <span>上报人</span>
                <span>张三三</span>
            </div>
            <div class="item">
                <span>处理结果</span>
                <span>已经沟通好，并赔偿X元已经沟通好，并赔偿X元已经沟通好，并赔偿X元已经沟通好，并赔偿X元</span>
            </div>
            <div class="item">
                <span>处理时间</span>
                <span>2018-07-24   16:15</span>
            </div>
            <div class="item">
                <span>处理人</span>
                <span>李思思</span>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../widget/header'

export default {
    data(){
        return {}
    },
    components: {
        'user-header': Header,
    }
}
</script>
