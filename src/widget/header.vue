<style lang="scss" scoped>
    header{
        height: .44rem;
        width: 100%;
        background: #d43d3e;
        box-sizing: border-box;
        padding: 0 .12rem;
        font-size: .16rem;
        color: white;
        position: fixed;
        left: 0;
        z-index: 99;
        top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
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
            position: absolute;
            width: 4em;
            text-align: center;
            left: 50%;
            margin-left: -2em;
        }
        &>div {
            width: 1.42rem;
            height: .31rem; 
            position: absolute;
            border-radius: .07rem;
            box-sizing: border-box;
            left: 50%;
            color: #fff;
            background: #fff;
            margin-left: -.71rem;
            line-height: .29rem;
            text-align: center;
            font-size: 0;
            border:.01rem solid #fff;
            overflow: hidden;
            span {
                display: inline-block;
                width: 50%;
                height: 100%;
                font-size: .14rem;
                background: #d43d3e;
            }
        }
    }
    .back{
        height: .2rem;
        line-height: .2rem;
        display: flex;
        align-items: center;
        img{
            height: 100%;
            margin-right: .04rem;
        }
        span{
            font-size: .15rem;
            color: white;
            width: .4rem
        }
    }
</style>


<template>
    <header>
        <a href="javascript:;" class="icon f-left" v-if="left">
            <img :src="leftImg" />
        </a>
        <a href="javascript:;" class="back f-left" v-if="!left" @click="back">
            <img :src="leftImg">
            <span>返回</span>
        </a>
        <slot><span>{{text?text:''}}</span></slot>
        <a href="javascript:;" class="icon f-right" v-if="msg!==undefined">
            <img src="../assets/img/message.png" />
            <span v-if="msg>0">{{msg}}</span>
        </a>
        <a href="javascript:;" class="icon f-right" v-if="mark!==undefined">
            <img src="../assets/img/message1.png" />
        </a>
    </header>
</template>

<script>
export default {
    data(){
        return {
            leftImg: this.left?require('../assets/img/'+this.left+'.png'):require('../assets/img/back.png'),
        }
    },
    props: ['left','msg',"text",'mark'],
    methods: {
        back(){
            this.$router.go(-1);
        }
    }
}
</script>

