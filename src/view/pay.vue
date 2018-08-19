<style lang="scss" scoped>
.box{
    background: white;
    margin: 0 .12rem;
    margin-top: .56rem;
    border-radius: .03rem .03rem 0 0;
    overflow: hidden;
    box-shadow: 0px 2px 15px 0px rgba(144, 143, 143, 0.35);
}
.dialog-header{
    padding: .12rem;
    border-bottom: solid .01rem #efefef;
    .ff{
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        &>div{
            display: flex;
            align-items: baseline;
        }
        &>div>span{
            font-size: .15rem;
            color: black;
            margin-right: .1rem;
        }
        &>div>div{
            font-size: .13rem;
            color: black;
            span{
                font-size: .3rem;
                display: inline-block;
                line-height: .3rem;
                font-weight: bold;
                color: #d43d3e;
                margin: 0 .04rem;
            }
        }
        a{
            font-size: .13rem;
            color: #797979;
            line-height: .19rem;
            padding: 0 .18rem 0 .3rem;
            background: url('../assets/img/discount.png') no-repeat 0 center / .19rem .19rem,url('../assets/img/right-arrow.png') no-repeat right center / .05rem .1rem;
        }
    }
}
.explain{
    font-size: .15rem;
    margin-top: .06rem;
}
.select-group{
    padding: .06rem 0;
}
.pay-way{
    display: flex;
    height: .52rem;
    i{
        width: .66rem;
    }
    .info{
        flex: 1;
        border-bottom: .01rem solid #efefef;
        display: flex;
        justify-content: space-between;
        align-items: center;
        i{
            width: .2rem;
            height: .2rem;
            margin-right: .12rem;
        }
        &>div{
            display: flex;
            font-size: 0;
            flex-direction: column;
            .balance{
                font-size: .12rem;
                color: #aeaeae;
            }
            .ex{
                font-size: .12rem;
                color: #666;
            }
            div span:nth-child(2){
                font-size: .16rem;
                color: #999;
            }
        }
        span{
            font-size: .15rem;
        }
        .unselected{
            background: url('../assets/img/unselected.png') no-repeat center / contain;
        }
        .selected{
            background: url('../assets/img/selected.png') no-repeat center / contain;
        }
    }
    &:nth-child(3) .info,&:nth-child(4) .info{
        border: none;
    }
    &:nth-child(4){
        border-top: .01rem solid #efefef;
        border-bottom: .01rem solid #efefef;
    }
    @for $i from 1 to 5{
        &:nth-child(#{$i})>i{
            @if $i == 1 {background: url('../assets/img/wallet.png') no-repeat center / .23rem .23rem}
            @if $i == 2 {background: url('../assets/img/alipay.png') no-repeat center / .23rem .23rem}
            @if $i == 3 {background: url('../assets/img/weixin.png') no-repeat center / .23rem .23rem}
            @if $i == 4 {background: url('../assets/img/credit.png') no-repeat center / .23rem .17rem}
        }
    }
}
.btns{
    display: flex;
    justify-content: space-between;
    font-size: .16rem;
    color: white;
    text-align: center;
    line-height: .6rem;
    margin-top: .12rem;
    cursor: pointer;
    .cancel{
        background: #ff7f24;
        border-radius: .04rem;
        width: 32%;
    }
    .confirm{
        background: #d43d3e;
        border-radius: .04rem;
        width: 64%;
    }
}
</style>

<template>
    <div>
        <user-header text="付款"></user-header>
        <div class="box">
            <div class="dialog-header">
                <div class="ff">
                    <div>
                        <span>合计</span>
                        <div>
                            ￥<span>{{account}}</span>元
                        </div>
                    </div>
                    <a href="javascript:;">{{couponNum}}张优惠券</a>
                </div>
                <p class="explain">运费¥{{freight}}元、保费¥{{permium}}元、附加费¥{{charge}}元</p>
            </div>
            <div class="select-group">
                <div class="pay-way" @click="selectPayWay('wallet')">
                    <i></i>
                    <div class="info">
                        <div>
                            <span>我的钱包</span>
                            <span class="balance">可用余额:{{balance}}</span>
                        </div>
                        <i :class="selectWay=='wallet'?'selected':'unselected'" v-if="balance>account"></i>
                        <span style="margin-right:.12rem;" v-if="balance<account">余额不足</span>
                    </div>
                </div>
                <div class="pay-way" @click="selectPayWay('alipay')">
                    <i></i>
                    <div class="info">
                        <span>支付宝</span>
                        <i :class="selectWay=='alipay'?'selected':'unselected'"></i>
                    </div>
                </div>
                <div class="pay-way" @click="selectPayWay('weixin')">
                    <i></i>
                    <div class="info">
                        <span>微信支付</span>
                        <i :class="selectWay=='weixin'?'selected':'unselected'"></i>
                    </div>
                </div>
                <div class="pay-way" @click="selectPayWay('credit')">
                    <i></i>
                    <div class="info">
                        <div>
                            <div>
                                <span>到付</span>
                                <span>·收货人付款</span>
                            </div>
                            <!-- <span class="ex" v-if="selectWay=='credit'">在收到货后，收货人扫码支付</span> -->
                        </div>
                        <i :class="selectWay=='credit'?'selected':'unselected'"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="btns wraper">
            <div class="cancel" @click="qrcode">扫码支付</div>
            <div class="confirm" @click="confirm">{{selectWay=='credit'?'确定':'去支付'}}</div>
        </div>
    </div>
</template>

<script>
import Header from '../widget/header'

export default {
    data(){
        return {
            account: 500,
            couponNum: 6,
            freight: 300,
            permium: 100,
            charge: 100,
            balance: 53,
            selectWay: null
        }
    },
    components: {
        'user-header': Header
    },
    methods: {
        selectPayWay(type){
            if(type=='wallet'&&this.balance<this.account) return;
            this.selectWay = type;
        },
        qrcode(){
            console.log('qrcode')
        },
        confirm(){
            if(!this.selectWay) return;
            console.log(this.selectWay)
        }
    }
}
</script>
