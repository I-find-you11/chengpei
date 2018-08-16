<style lang="scss" scoped>
    .card{
        background: white;
        margin-top: .12rem;
        font-size: .14rem;
        border-radius: .03rem;
        box-shadow: 0px 2px 15px 0px rgba(144, 143, 143, 0.35);
        .card-body{
            padding: .12rem;
            border-bottom: solid .01rem #e5e5e5;
        }
        .order-number{
            color: #333;
            span{
                color: #666;
            }
            .icon-info{
                display: block;
                height: .12rem;
                width: .12rem;
                background: url('../assets/img/orange-info.png') no-repeat center / .12rem;
                margin-top: .04rem;
                margin-right: .02rem;
            }
        }
        .info-item{
            box-sizing: border-box;
            padding-left: .18rem;
            margin-top: .1rem;
            color: #666;
            span{
                font-size: .12rem;
                color: #adadad;
            }
        }
        .clock{
            background: url('../assets/img/clock.png') no-repeat 0 center / .1rem .1rem;
        }
        .green{
            background: url('../assets/img/green.png') no-repeat 0 center / .1rem .1rem;
        }
        .orange{
            background: url('../assets/img/orange.png') no-repeat 0 center / .1rem .1rem;
        }
        .qrcode{
            background: url('../assets/img/qrcode.png') no-repeat center / cover;
            width: .14rem;
            height: .14rem;
            margin-top: .0rem;
        }
        .card-bottom{
            padding: .12rem;
            font-size: .14rem;
            .f-left{
                color: #333;
                line-height: .26rem;
                span{
                    color: #d43d3e;
                }
            }
            .f-right{
                width: .66rem;
                height: .26rem;
                line-height: .26rem;
                box-sizing: border-box;
                border-radius: .03rem;
                text-align: center;
                &.hasPay{
                    border: solid .01rem #a0a0a0;
                    color: #999;
                }
                &.notPay{
                    color: white;
                    background: #d43d3e;
                }
            }
        }
    }
</style>

<template>
    <div class="card">
        <div class="card-body">
            <p class="order-number clearfix">
                订单编号：{{data.number}}
                <span class="f-right">{{data.status}}</span>
                <i class="icon-info f-right" v-if="data.status=='已装货'"></i>
            </p>
            <p class="info-item clock">今天{{data.scopeOfTime}}取货</p>
            <p class="info-item green">{{data.origin}}<i class="qrcode f-right"></i></p>
            <p class="info-item orange">{{data.terminus}} <span>里程15.4km</span></p>
        </div>
        <div class="card-bottom clearfix">
            <div class="f-left">{{data.payWay}} <span>￥{{data.account}}</span>({{data.isPay?'已付':'未付'}})</div>
            <a :href="'#/order-detail/'+data.number" class="f-right hasPay" v-if="data.isPay&&data.status!='已签收'">订单详情</a>
            <a href="javascript:;" class="f-right notPay" v-if="!data.isPay" @click="onPay">付款</a>
            <a href="javascript:;" class="f-right notPay" v-if="data.status=='已签收'">评价</a>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    props: ['data'],
    methods: {
        onPay(){
            this.$emit('onPay',this.data.number)
        }
    }
}
</script>
