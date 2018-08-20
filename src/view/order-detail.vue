<style lang="scss" scoped>
.container{
    padding: .44rem 0;
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
.address-box{
    margin-top: .12rem;
    background: white;
    font-size: 0;
    .item{
        padding: .12rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: solid .01rem #eee;
        .left{
            display: flex;
            align-items: center;
            img{
                width: .16rem;
                height: .22rem;
                margin-right: .1rem;
            }
            p:nth-child(1){
                font-size: .14rem;
                color: #333;
            }
            p:nth-child(2){
                font-size: .12rem;
                color: #999;
            }
            span{
                padding: .01rem;
                font-size: .1rem;
                color: black;
                border: solid .01rem black;
                border-radius: .03rem;
                margin-left: .2rem;
                vertical-align: top;
            }
        }
        a{
            background: url('../assets/img/tel-gray.png') no-repeat center / .24rem;
            width: .24rem;
            height: .24rem;
        }
    }
}
.order-info{
    margin-top: .12rem;
    background: white;
    font-size: 0;
    .head{
        border-bottom: solid .01rem #eee;
        line-height: .32rem;
        font-size: .14rem;
        color: #1a1a1a;
    }
    dl{
        display: flex;
        flex-wrap: wrap;
        dt{
            height: .4rem;
            width: .3rem;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            i{
                width: .13rem;
                height: .13rem;
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
            }
            @for $i from 0 to 7{
                &:nth-child(#{$i*2+1}) i{
                    background-image: url('../assets/img/detail#{$i+1}.png')
                }
            }
        }
        dd{
            height: .4rem;
            width: calc(100% - .3rem);
            border-bottom: solid .01rem #eee;
            line-height: .4rem;
            span{
                font-size: .14rem;
                vertical-align: middle;
                &:nth-child(1){
                    color: #999;
                    margin-right: .1rem;
                }
                &:nth-child(2){
                    color: #333;
                }
                &:nth-child(3){
                    color: #999;
                    font-size: .12rem;
                    margin-left: .04rem;
                }
            }
            a{
                font-size: .12rem;
                color: #424141;
                padding-right: .13rem;
                background: url('../assets/img/right-arrow.png') no-repeat right center / .05rem .08rem;
            }
            img{
                width: .4rem;
                height: .4rem;
                vertical-align: middle;
            }
        }
    }
}
.account{
    margin-top: .12rem;
    font-size: 0;
    background: white;
    line-height: .4rem;
    border-bottom: solid .01rem #eee;
    p{
        font-size: .14rem;
        line-height: .32rem;
        color: black;
        border-bottom: solid .01rem #eee;
    }
    .foot{
        line-height: .4rem;
        border: none;
    }
    .item{
        height: .4rem;
        border-bottom: solid .01rem #eee;
        &>span{
            color: #333;
            &:nth-child(1){
                font-size: .14rem;
            }
            &:nth-child(3){
                font-size: .15rem;
            }
        }
        a{
            font-size: .12rem;
            color: #6a6a6a;
            margin-left: .06rem;
            span{
                text-decoration: underline;
            }
        }
    }
}
.number-list{
    background: white;
    margin-top: .12rem;
    border-bottom: solid .01rem #eee;
    p{
        font-size: .14rem;
        line-height: .32rem;
        color: black;
        border-bottom: solid .01rem #eee;
    }
    .container{
        padding: .12rem;
        display: flex;
        flex-wrap: wrap;
        span{
            font-size: .14rem;
            line-height: .2rem;
            color: #999;
            margin-right: .2rem;
        }
    }
}
.time{
    background: white;
    margin-top: .12rem;
    border-bottom: solid .01rem #eee;
    font-size: 0;
    padding-bottom: .12rem;
    p{
        font-size: .14rem;
        line-height: .32rem;
        color: black;
    }
    li{
        font-size: .12rem;
        line-height: .18rem;
        color: #666;
        span{
            color: #999;
        }
    }
}

.operator{
    padding: .1rem .12rem;
    background: white;
    border-top: solid .01rem #eee;
    box-sizing: border-box;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    font-size: 0;
    button{
        font-size: .15rem;
        color: #e94d3e;
        width: .74rem;
        height: .26rem;
        border-radius: .04rem;
        border: solid .01rem #bfbfbf;
        margin-left: .1rem;
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
        <div class="address-box">
            <div class="item">
                <div class="left">
                    <img src="../assets/img/origin.png">
                    <div>
                        <p>章三 18888888888</p>
                        <p>杭州市滨江区滨兴路华盛达广场</p>
                    </div>
                </div>
                <a href="tel:188888888888"></a>
            </div>
            <div class="item">
                <div class="left">
                    <img src="../assets/img/terminus.png">
                    <div>
                        <p>
                            章三 18888888888
                            <span>点击修改</span>
                        </p>
                        <p>杭州市滨江区滨兴路华盛达广场</p>
                    </div>
                </div>
                <a href="tel:188888888888"></a>
            </div>
        </div>
        <div class="order-info">
            <p class="head wraper">订单详情</p>
            <dl class="wraper">
                <dt><i></i></dt>
                <dd>
                    <span>取货时间:</span>
                    <span>今天 08:05</span>
                    <a href="javascript:;" class="f-right">货主未付履约金</a>
                </dd>
                <dt><i></i></dt>
                <dd>
                    <span>货物名称:</span>
                    <span>建材五金 15件</span>
                    <span>价值10000元</span>
                </dd>
                <dt><i></i></dt>
                <dd>
                    <span>货物规格:</span>
                    <span>0.4吨 (400公斤) / 1.1方</span>
                    <span>重货</span>
                </dd>
                <dt><i></i></dt>
                <dd>
                    <span>装卸包装:</span>
                    <span>纸箱包装、人工装卸</span>
                </dd>
                <dt><i></i></dt>
                <dd>
                    <span>额外需求:</span>
                    <span>回单、到付、上楼取货，送货上楼</span>
                </dd>
                <dt><i></i></dt>
                <dd>
                    <span>货物照片:</span>
                    <img src="../../static/img/goodpic.png">
                    <img src="../../static/img/goodpic.png">
                </dd>
                <dt><i></i></dt>
                <dd>
                    <span>备注留言:</span>
                    <span>超高、超长、付费装卸</span>
                </dd>
            </dl>
        </div>
        <div class="account wraper">
            <p>费用详情</p>
            <div class="item">
                <span class="f-left">保费</span>
                <a href="javascript:;" class="f-left">(<span>保险协议</span>)</a>
                <span class="f-right">¥ 2.50元</span>
            </div>
            <div class="item">
                <span class="f-left">运费</span>
                <a href="javascript:;" class="f-left">(<span>价格明细</span>)</a>
                <span class="f-right">¥ 2.50元</span>
            </div>
            <p class="foot clearfix">
                <span class="f-left">合计</span>
                <span class="f-right">¥ 2.50元(未付)</span>
            </p>
        </div>

        <div class="number-list">
            <p class="wraper">货物编码</p>
            <div class="container">
                <span>45023150102-4-1</span>
                <span>45023150102-4-1</span>
                <span>45023150102-4-1</span>
                <span>45023150102-4-1</span>
            </div>
        </div>

        <div class="time wraper">
            <p>交易时间</p>
            <ul>
                <li>下单时间: <span>2015-02-22 12:00</span></li>
                <li>取货时间: <span>2015-02-22 12:00</span></li>
                <li>付款时间: <span>2015-02-22 12:00</span></li>
                <li>完成时间: <span>2015-02-22 12:00</span></li>
            </ul>
        </div>

        <div class="operator clearfix">
            <button class="f-right" @click="onTrack">跟踪记录</button>
            <button class="f-right">异常历史</button>
            <button class="f-right" @click="onDiscuss">评价</button>
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
    },
    methods: {
        onTrack(){
            this.$router.push('/tracking/'+this.id);
        },
        onDiscuss(){
            this.$router.push('/discuss/'+this.id);
        }
    }
}
</script>
