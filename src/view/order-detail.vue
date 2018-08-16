<style lang="scss" scoped>
.container{
    padding-top: .44rem;
}
.status-bar{
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: .4rem;
    border-bottom: solid .01rem #eee;
    .left{
        font-size: .15rem;
        color: #3e3e3e;
        display: flex;
        align-items: center;
        i{
            width: .17rem;
            height: .19rem;
            margin-right: .1rem;
            background: url('../assets/img/order-id.png') no-repeat center / contain;
        }
    }
    .right{
        font-size: .14rem;
        color: #e94d3e;
    }
}
.carrier{
    background: white;
    font-size: 0;
    margin-top: .12rem;
    border-bottom: solid .01rem #eee;
    .head{
        border-bottom: solid .01rem #f2f3f4;
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: .33rem;
        span{
            font-size: .14rem;
            color: #1a1a1a;
        }
        a{
            font-size: .12rem;
            color: #e84d3d;
        }
    }
    .body{
        padding: .1rem .12rem;
        .head-img{
            width: .44rem;
            height: .44rem;
            margin-right: .2rem;
            border-radius: .03rem;
            overflow: hidden;
        }
        .info{
            height: .44rem;
            p{
                display: flex;
                align-items: center;
                font-size: .15rem;
                color: #222;
                line-height: .15rem;
                &:nth-child(2){
                    margin-top: .1rem;
                    font-size: .12rem;
                    color: #666;
                }
            }
            span{
                font-size: .15rem;
                color: #555;
                line-height: .15rem;
                margin-right: .12rem;
            }
            img{
                width: .12rem;
                height: .12rem;
                margin-right: .06rem;
            }
            .brand{
                padding: .02rem .04rem;
                display: inline-block;
                font-size: .1rem;
                color: white;
                border-radius: .03rem;
            }
            .cyan{
                background: #4cbbd6;
            }
            .purple{
                background: #777af7;
            }
        }
        .f-right{
            height: .44rem;
            width: .28rem;
            background: url('../assets/img/telphone.png') no-repeat center / contain;
        }
    }
}
</style>

<template>
    <div class="container">
        <user-header text="订单详情"></user-header>
        <div class="status-bar wraper">
            <div class="left">
                <i></i>
                <span>订单编号：34534556456</span>
            </div>
            <span class="right">已签收</span>
        </div>
        <div class="carrier">
            <div class="head wraper">
                <span>承运信息</span>
                <a href="javascript:;" v-if="type=='personal'">更多></a>
            </div>
            <div class="body clearfix">
                <img src="static/img/header-img.png" class="f-left head-img">
                <div class="info f-left" v-if="type=='personal'">
                    <p>
                        <span>姓名name</span>
                        <img src="../assets/img/diamond.png">
                        <img src="../assets/img/diamond.png">
                    </p>
                    <p>
                        <span class="brand purple">实名</span>
                        <span class="brand cyan">保1000</span>
                    </p>
                </div>
                <div class="info f-left" v-if="type=='organizational'">
                    <p>公司名字</p>
                    <p>400-88208820</p>
                </div>
                <a href="tel:99999" class="f-right"></a>
            </div>
        </div>
    </div>
</template>


<script>
import Header from '../widget/header'

export default {
    data(){
        return {
            id: this.$router.currentRoute.params.id,
            type: 'organizational', //'personal' 
        }
    },
    components: {
        'user-header': Header
    }
}
</script>
