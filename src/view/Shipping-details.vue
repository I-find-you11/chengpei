<template>
    <div class='shipping-details'>
        <user-header text='运费明细'></user-header>
        <div class='detail'>
            <div class='price'>
                ￥<span>{{details.data.price}}</span>元
            </div>
            <div class='shot mileage'>
                <span>里程</span><span>{{details.data.mileage}}公里</span>
            </div>
            <div class='shot weight'>
                <span>体积重量</span><span>{{details.data.weight}}公斤/{{details.data.volume}}方</span>
            </div>
            <div class='shot u_price'>
                <span>计费单价</span><span>{{details.data.u_price}}元/公斤</span>
            </div>
            <div class='shot min_charge'>
                <span>最低收费</span><span>{{details.data.min_charge}}元</span>
            </div>
            <div class='shot cost'>
                <span>总共费用</span><span>{{details.data.cost}}元（开票价{{details.data.cost1}}元）</span>
            </div>
            <div class='costs_that'>
                <span>费用说明</span>
                <p>{{details.data.costs_that}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import header from '../widget/header'
    export default {
        data() {
            return {    
                details : {
                    data : {
                       price : 210,
                       cost :202.60,
                       cost1 : 210,
                       min_charge: 10,
                       u_price: 0.5,
                       weight: 300,
                       volume: 3,
                       mileage:40,
                       costs_that: '这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的后台说明'
                    }
                }
            }
        },
        methods : {

        },
        components : {
            'user-header': header
        }
    }
</script>

<style lang="scss" scoped>
.detail {
    width: 3.5rem;
    border-radius: .05rem;
    background-color: #fff;
    margin: .56rem auto 0;
    .price {
        height: .89rem;
        line-height: .89rem;
        border-bottom: solid #f6f6f6 .02rem;
        text-align: center;
        font-size: .14rem;
        span {
            font-size: .35rem;
            font-family: '黑体';
            font-weight: bold;
        }
    }
    .shot {
        height: .44rem;
        line-height: .44rem;
        border-bottom: .01rem solid #f6f6f6;
        width: 2.8rem;
        margin:0 auto;
        font-size: .16rem;
        display: flex;
        justify-content: space-between;
        &.cost {
            border-bottom:none;
        }
        
    }
    .costs_that {
        width: 3.5rem;
        padding: .17rem .35rem;
        font-size: .14rem;
        border-top: solid #f6f6f6 .02rem;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        p {
            width: 2.1rem;
        }
    }
}
</style>