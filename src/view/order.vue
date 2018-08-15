<style lang="scss" scoped>
    .container{
        padding-top: .44rem;
    }
    nav{
        display: flex;
        width: 100%;
        font-size: .15rem;
        line-height: .15rem;
        padding: .15rem 0;
        background: white;
        border-bottom: solid .01rem #dcdcdc;
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
</style>

<template>
    <div class="container">
        <user-header left="search" msg="message" text="我的订单"></user-header>
        <nav>
            <a href="javascript:;" @click="changeNav" index="1" :class="navIndex==1?'active':''">进行中<span v-if="navIndex==1"></span></a>
            <a href="javascript:;" @click="changeNav" index="2" :class="navIndex==2?'active':''">已完成<span v-if="navIndex==2"></span></a>
            <a href="javascript:;" @click="changeNav" index="3" :class="navIndex==3?'active':''">已取消<span v-if="navIndex==3"></span></a>
            <a href="javascript:;" @click="changeNav" index="4" :class="navIndex==4?'active':''">投诉中<span v-if="navIndex==4"></span></a>
        </nav>
        <div class="wraper">
            <order-item></order-item>
        </div>
    </div>
</template>

<script>
import header from '../widget/header'
import OrderItem from '../widget/order-item'

export default {
    data(){
        return {
            navIndex: 1
        }
    },
    components: {
        'user-header': header,
        'order-item': OrderItem
    },
    methods: {
        changeNav(event){
            this.navIndex = event.target.getAttribute('index');
        }
    }
}
</script>
