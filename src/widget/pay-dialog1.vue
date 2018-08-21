<style lang="scss" scoped>
.bg{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,.5);
    padding: 0 .12rem;
}
.box{
    position: absolute;
    left: .12rem;
    bottom: 0;
    width: calc(100% - .24rem);
    background: white;
    border-radius: .03rem .03rem 0 0;
    overflow: hidden;
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
    &:nth-child(3) .info,&:nth-child(4) .info,&:nth-child(5) .info{
        border: none;
    }
    &:nth-child(4){
        border-top: .01rem solid #efefef;
        border-bottom: .01rem solid #efefef;
    }
    &:nth-child(5){
        border-bottom: .01rem solid #efefef;
    }
    @for $i from 1 to 6{
        &:nth-child(#{$i})>i{
            @if $i == 1 {background: url('../assets/img/wallet.png') no-repeat center / .23rem .23rem}
            @if $i == 2 {background: url('../assets/img/alipay.png') no-repeat center / .23rem .23rem}
            @if $i == 3 {background: url('../assets/img/weixin.png') no-repeat center / .23rem .23rem}
            @if $i == 4 {background: url('../assets/img/credit.png') no-repeat center / .23rem .17rem}
            @if $i == 5 {background: url('../assets/img/credit1.png') no-repeat center / .23rem .17rem}
        }
    }
}
.btns{
    display: flex;
    font-size: .16rem;
    color: white;
    text-align: center;
    line-height: .6rem;
    cursor: pointer;
    .cancel{
        background: #ff7f24;
        width: 33%;
    }
    .confirm{
        background: #d43d3e;
        width: 67%;
    }
}
</style>

<template>
    <div class="bg">
        <div class="box">
            <div class="dialog-header">
                <div class="ff">
                    <div>
                        <span>运费</span>
                        <div>
                            ￥<span>{{account}}</span>元
                        </div>
                    </div>
                    <a href="javascript:;">{{couponNum}}张优惠券</a>
                </div>
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
                <div class="pay-way" @click="selectPayWay('credit1')">
                    <i></i>
                    <div class="info">
                        <div>
                            <div>
                                <span>见面付</span>
                                <span>·取货后付款</span>
                            </div>
                        </div>
                        <i :class="selectWay=='credit1'?'selected':'unselected'"></i>
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
                        </div>
                        <i :class="selectWay=='credit'?'selected':'unselected'"></i>
                    </div>
                </div>
            </div>
            <div class="btns">
                <div class="cancel" @click="cancel">取消</div>
                <div class="confirm" @click="confirm">{{selectWay=='credit'?'确定':'去支付'}}</div>
            </div>
        </div>
    </div>
</template>

<script>
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
    props: ['identify'],
    mounted(){
        document.body.style.overflow = 'hidden';
    },
    destroyed(){
        document.body.style.overflow = 'auto';
    },
    methods: {
        selectPayWay(type){
            if(type=='wallet'&&this.balance<this.account) return;
            this.selectWay = type;
        },
        cancel(){
            this.$emit('cancel')
        },
        confirm(){
            if(!this.selectWay) return;
            this.$emit('confirm',{type:this.selectWay,account:this.account})
        }
    }
}
</script>
