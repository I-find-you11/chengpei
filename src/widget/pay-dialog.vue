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
    &>span{
        font-size: .15rem;
        color: black;
    }
    div{
        font-size: .13rem;
        color: black;
        span{
            font-size: .3rem;
            font-weight: bold;
            color: #d43d3e;
        }
    }
    a{
        font-size: .12rem;
        color: #797979;
    }
}
</style>

<template>
    <div class="bg">
        <div class="box">
            <div class="dialog-header clearfix">
                <span class="f-left">合计</span>
                <div class="f-left">
                    ￥<span>202</span>元
                </div>
                <a href="javascript:;" class="f-right">已优惠8元</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    props: ['identify']
}
</script>
