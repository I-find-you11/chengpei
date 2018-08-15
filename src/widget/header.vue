<style lang="scss" scoped>
    header{
        height: .44rem;
        width: 100%;
        background: #d43d3e;
        box-sizing: border-box;
        padding: 0 .12rem;
        text-align: center;
        font-size: .16rem;
        color: white;
        position: fixed;
        left: 0;
        top: 0;
        .icon{
            width: .19rem;
            height: .19rem;
            padding: .12rem 0;
            font-size: 0;
            position: relative;
            img{
                width: 100%;
                height: 100%;
            }
            span{
                width: .14rem;
                height: .14rem;
                display: block;
                border-radius: .1rem;
                background: #ff3737;
                position: absolute;
                top: .05rem;
                right: -.07rem;
                font-size: .1rem;
                color: white;
                text-align: center;
                line-height: .14rem;
            }
        }
        &>span{
            line-height: .44rem;
        }
    }
</style>


<template>
    <header>
        <a href="javascript:;" class="icon f-left">
            <img :src="leftImg" />
        </a>
        <span>{{text?text:''}}</span>
        <a href="javascript:;" class="icon f-right" v-if="msg!==undefined">
            <img src="../assets/img/message.png" />
            <span v-if="msg>0">{{msg}}</span>
        </a>
    </header>
</template>

<script>
export default {
    data(){
        return {
            leftImg: require('../assets/img/'+this.left+'.png'),
        }
    },
    props: ['left','msg',"text"]
}
</script>

