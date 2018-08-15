<style lang="scss" scoped>
    .container{
        padding-top: .89rem;
    }
    nav{
        display: flex;
        width: 100%;
        font-size: .15rem;
        line-height: .15rem;
        padding: .15rem 0;
        background: white;
        border-bottom: solid .01rem #dcdcdc;
        position: fixed;
        left: 0;
        top: .44rem;
        a{
            width: 25%;
            text-align: center;
            box-sizing: border-box;
            border-right: .01rem solid #eee;
            color: black;
            position: relative;
            &:last-child{
                border: none;
            }
            &.active{
                color: #e94d3e;
            }
            span{
                width: 100%;
                height: .02rem;
                background: #e94d3e;
                position: absolute;
                left: 0;
                bottom: -.15rem;
            }
        }
    }
    .wraper{
        padding-bottom: .12rem;
    }
</style>

<template>
    <div class="container">
        <user-header left="search" :msg="message" text="我的订单"></user-header>
        <nav>
            <a href="javascript:;" @click="changeNav" index="1" :class="navIndex==1?'active':''">进行中<span v-if="navIndex==1"></span></a>
            <a href="javascript:;" @click="changeNav" index="2" :class="navIndex==2?'active':''">已完成<span v-if="navIndex==2"></span></a>
            <a href="javascript:;" @click="changeNav" index="3" :class="navIndex==3?'active':''">已取消<span v-if="navIndex==3"></span></a>
            <a href="javascript:;" @click="changeNav" index="4" :class="navIndex==4?'active':''">投诉中<span v-if="navIndex==4"></span></a>
        </nav>
        <div class="wraper">
            <order-item v-for="item of orderItem" :key="item.number" :data="item" @onPay="onPayClick"></order-item>
        </div>
        <pay-dialog v-if="paying" :identify="payNumber"></pay-dialog>
    </div>
</template>

<script>
import header from '../widget/header'
import OrderItem from '../widget/order-item'
import PayDialog from '../widget/pay-dialog'

export default {
    data(){
        return {
            navIndex: 1,
            message: 0,
            payNumber: null,
            paying: false,
            orderItem: [{
                number: '55665765757',
                status: '待处理',
                scopeOfTime: '11:00-12:00',
                origin: '嘉兴·海盐·武原街道',
                terminus: '杭州·滨江区·西兴镇',
                mileage: 15.4,
                account: 680.00,
                isPay: true,
                payWay: '现付'
            },{
                number: '56745766787643',
                status: '已处理',
                scopeOfTime: '11:00-12:00',
                origin: '嘉兴·海盐·武原街道',
                terminus: '杭州·滨江区·西兴镇',
                mileage: 115.4,
                account: 1680.00,
                isPay: false,
                payWay: '见面付'
            },{
                number: '3457645877456',
                status: '已装货',
                scopeOfTime: '11:00-12:00',
                origin: '嘉兴·海盐·武原街道',
                terminus: '杭州·滨江区·西兴镇',
                mileage: 115.4,
                account: 1680.00,
                isPay: true,
                payWay: '现付'
            },{
                number: '98765433432432',
                status: '已签收',
                scopeOfTime: '11:00-12:00',
                origin: '嘉兴·海盐·武原街道',
                terminus: '杭州·滨江区·西兴镇',
                mileage: 115.4,
                account: 16800.00,
                isPay: true,
                payWay: '见面付'
            }]
        }
    },
    components: {
        'user-header': header,
        'order-item': OrderItem,
        'pay-dialog': PayDialog
    },
    methods: {
        changeNav(event){
            this.navIndex = event.target.getAttribute('index');
            console.log(this.navIndex);
        },
        onPayClick(number){
            this.payNumber = number;
            this.paying = true;
        }
    }
}
</script>
