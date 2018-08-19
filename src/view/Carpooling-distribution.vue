<style lang="scss" scoped>
.order_details {
    width: 3.5rem;
    border-radius: .05rem;
    margin:  .56rem auto 0;
    box-shadow: 0 0 .05rem #e1e2e3;
    font-size: 0;
    background: #fff;
    padding-top: .12rem;
    &>div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: .11rem;
        img {
            width: .22rem;
            vertical-align: middle;
            height: auto;
        }
        &.item>div {
            height: .52rem;
            width: 3rem;
            border-bottom: #f8f8f8 solid .01rem;
            line-height: .52rem;
            font-size: .15rem;
            color:#666666;
            position: relative;
            
        }
        &.item .on{
            color:#333;
        }
        a {
            display: inline;
            color:inherit;
        }
        &.time, &.note {
            &>div {
                display: flex;
                justify-content: space-between;
                align-items: center;
                &>span {
                    display: inline-block;
                    width: 1.37rem;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }
                &>div {
                    width: 1.77rem;
                    border-left: .01rem solid #f6f6f6;
                    height: .15rem;
                    box-sizing: border-box;
                    padding-left: .13rem;
                    font-size: 0;
                    line-height: 1;
                    img {
                        margin-right: .13rem;
                        vertical-align: middle;
                    }
                    span {
                        font-size: .15rem;
                        vertical-align: middle;
                    }
                }
            }
        }
        &.goods_infor_add>div>a {
            position: absolute;
            width: .73rem;
            height: .28rem;
            display: inline-block;
            right: .15rem;
            top:0;
            bottom: 0;
            margin: auto 0;
            line-height: .28rem; 
            text-align: center;
            border: .01rem solid #f6b8b2;
            color:#f6b8b2;
            font-size: .13rem;
            border-radius: .02rem;
        }
        &.adress {
            line-height:.97rem;
            height: .97rem;
           &>div>div {
                width: 3rem;
                height: .52rem;
                line-height: .52rem;
                border-bottom: #f8f8f8 solid .01rem;
                position: relative;
                p{
                    font-size: .15rem;
                    line-height: .26rem;
                    color:#666666;
                    &:last-child {
                        font-size: .11rem;
                    }
                }
                div {
                    line-height: .52rem;
                    color: #d43d3e;
                    font-size: .16rem;
                }
                span {
                    position: absolute;
                    right: .15rem;
                    top:0;
                    bottom: 0;
                    margin: auto 0;
                    line-height: .52rem;
                    img {
                        width: .08rem;
                        vertical-align: middle;
                    }
                }
            }
        }
    }
}
.footer {
    width: 3.5rem;
    border-radius: .05rem;
    position: fixed;
    bottom: .1rem;
    z-index: 999;
    left:0;
    right: 0;
    margin: 0 auto;
    div {
        height: .54rem;
        line-height: .54rem;
        text-align: center;
    }
    .last_price {
        position: relative;
        background: #fff;
        p {
            font-size: .15rem;
            color: #333333;
            span {
                color: #e94d3e;
                font-size: .28rem;
                font-weight: bold;
            }
        }
        a {
            position: absolute;
            right: .15rem;
            top:0;
            bottom: 0;
            margin: auto 0;
            line-height: .52rem;
            color:#a9a9a9;
            font-size: .14rem;
        }
    }
    .submit {
        background: #4a4c5b;
        color: #fff;
        font-size: .17rem;
        &.on {
            background: #e94d3e;
        }
    }
}
</style>
<template>
    <div>
        <user-header text='拼车配货'></user-header>
        <div class='order_details'>
            <div class='adress'>
                <img src='@/assets/img/adress.png' />
                <div>
                    <div class='adress_start'>
                        <p>{{order_derails.data.adress_start.adress}}·{{order_derails.data.adress_start.adress1}}</p>
                        <p>{{order_derails.data.adress_start.name}} {{order_derails.data.adress_start.phone}}</p>
                        <span><a href=''><img src='@/assets/img/arrow.png' /></a></span>
                    </div>
                    <div class='adress_end'>
                        <p v-if='order_derails.data.adress_end'>{{order_derails.data.adress_end.adress}}·{{order_derails.data.adress_end.adress1}}</p>
                        <p v-if='order_derails.data.adress_end'>{{order_derails.data.adress_end.name}} {{order_derails.data.adress_end.phone}}</p>
                        <div v-if='!order_derails.data.adress_end'>发货去哪儿</div>
                        <span><a href=''><img src='@/assets/img/arrow.png' /></a></span>
                    </div>
                </div>
            </div>
            <div 
                class='item goods_infor' 
                v-for='(item,index) in order_derails.data.goods'
                :key='index'
            >
                <img src='@/assets/img/detail2.png' />
                <div class='on'>{{item.infor}}</div>
            </div>
            <div class='item goods_infor_add'>
                <img src='@/assets/img/detail2.png' />
                <div>
                    <p>货物信息{{order_derails.data.goods.length != 0 ? order_derails.data.goods.length + 1 : ''}}</p>
                    <a href='"#/goods-infor/" + order_derails.data.id'>+添加货物</a>
                </div>
            </div>
            <div class='item time'>
                <img src='@/assets/img/detail1.png' />
                <div>
                    <span :class='order_derails.data.time?"on":""'><a href=''>{{order_derails.data.time? order_derails.data.time : '取货时间'}}</a></span>
                    <div>
                        <img src='@/assets/img/icon_1.png'>
                        <span :class='order_derails.data.insurance?"on":""'><a href=''>{{order_derails.data.insurance? order_derails.data.insurance : '货物保险'}}</a></span>
                    </div>
                </div>
            </div>
            <div class='item note'>
                <img src='@/assets/img/icon_2.png' />
                <div>
                    <span :class='order_derails.data.note?"on":""'><a href=''>{{order_derails.data.note? order_derails.data.note : '需求备注'}}</a></span>
                    <div>
                        <img src='@/assets/img/detail3.png'>
                        <span :class='order_derails.data.premium?"on":""'><a href=''>{{order_derails.data.premium? order_derails.data.premium : '我要加价'}}</a></span>
                    </div>
                </div>
            </div>
        </div>
        <div class='footer'>
            <div class='last_price'>
                <p>￥<span>{{order_derails.data.cost?order_derails.data.cost : 0}}</span></p>
                <a :href='"#/shipping-details/" + order_derails.data.id'>查看明细></a>
            </div>
            <div class='submit' :class='{on:validation}' @click='submit'>确认下单</div>
        </div>
    </div>
</template>

<script>
    import header from '../widget/header'
    export default {
        data() {
            return {
                order_derails : {
                    data : {
                        adress_start : {
                            adress: '嘉兴市',
                            adress1: '浙江海港智慧家居城-北一门',
                            name: '朱泽铭',
                            phone: 13600556300
                        },
                        adress_end : {
                            adress: '嘉兴市',
                            adress1: '浙江海港智慧家居城-北一门',
                            name: '朱泽铭',
                            phone: 13600556300
                        },
                        goods : [
                            {
                                infor : '建材 5件 200公斤/2方'
                            }
                        ],
                        time : '今天11：00-12：00',
                        insurance : '免费保险',
                        note: '1',
                        premium : '',
                        cost : '',
                        id: 1
                    }
                }
            }
        },
        methods : {
            submit() {
                if(this.validation) {
                    console.log('提交成功');
                }
            },
           
        },
        computed: {
            validation() {
                for(let i in this.order_derails.data) {
                    if(!this.order_derails.data[i]) {
                        return false;
                    }
                }
                return true;
            }
        },
        components : {
            'user-header': header
        }
    }
</script>

