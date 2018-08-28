<style lang="scss" scoped>
.container{
    padding-top: .56rem;
}
.card{
    background: white;
    border-radius: .04rem;
    box-shadow: 0px 2px 15px 0px rgba(144, 143, 143, 0.35);
    font-size: 0;
    .head{
        font-size: .14rem;
        color: #333;
        line-height: .44rem;
        text-align: center;
        border-bottom: solid .01rem #eee;
    }
    .item-box{
        display: flex;
        flex-shrink: 0;
        border-bottom: solid .01rem #eee;
        .title{
            color: #000;
            font-size: .16rem;
            width: 16%;
        }
    }
    .dis{
        line-height: .72rem;
        .contain{
            flex: 1;
            display: flex;
            justify-content: space-between;
            align-items: center;
            div{
                display: flex;
                align-items: center;
                &:nth-child(1) i{
                    background: url('../assets/img/positive.png') no-repeat center / contain;
                }
                &:nth-child(2) i{
                    background: url('../assets/img/moderate.png') no-repeat center / contain;
                }
                &:nth-child(3) i{
                    background: url('../assets/img/negative.png') no-repeat center / contain;
                }
                &:nth-child(1).active i{
                    background: url('../assets/img/positive-a.png') no-repeat center / contain;
                }
                &:nth-child(2).active i{
                    background: url('../assets/img/moderate-a.png') no-repeat center / contain;
                }
                &:nth-child(3).active i{
                    background: url('../assets/img/negative-a.png') no-repeat center / contain;
                }
                &.active span{
                    color: #d43d3e;
                }
            }
            i{
                width: .28rem;
                height: .28rem;
                margin-right: .04rem;
            }
            span{
                font-size: .16rem;
                color: #999;
            }
        }
    }
    .score{
        line-height: .48rem;
        .contain{
            &>div{
                display: flex;
                align-items: center;
                font-size: .14rem;
                i{
                    width: .21rem;
                    height: .21rem;
                    margin-left: .14rem;
                    background: url('../assets/img/star-unselected.png') no-repeat center / contain;
                    &.active{
                        background: url('../assets/img/star.png') no-repeat center / contain;
                    }
                }
            }
        }
    }
}
.input{
    resize: none;
    width: 100%;
    border: none;
    outline: none;
    padding: .1rem 0;
    font-size: .14rem;
    height: .56rem;
}
.dis-length{
    position: absolute;
    right: .12rem;
    bottom: .06rem;
    font-size: .14rem;
}
.submit{
    width: 100%;
    display: block;
    height: .56rem;
    background: #d43d3e;
    margin-top: .12rem;
    color: white;
    font-size: .16rem;
    border-radius: .04rem;
}
</style>

<template>
    <div class="wraper container">
        <user-header text="评价"></user-header>
        <div class="card">
            <p class="head">请真实的评价对方，不可修改</p>
            <div class="wraper">
                <div class="item-box dis">
                    <span class="title">评价</span>
                    <div class="contain">
                        <div :class="dis=='positive'?'active':''" @click="selectDis('positive')">
                            <i></i>
                            <span>好评</span>
                        </div>
                        <div :class="dis=='moderate'?'active':''" @click="selectDis('moderate')">
                            <i></i>
                            <span>中评</span>
                        </div>
                        <div :class="dis=='negative'?'active':''" @click="selectDis('negative')">
                            <i></i>
                            <span>差评</span>
                        </div>
                    </div>
                </div>
                <div class="item-box score">
                    <span class="title">评分</span>
                    <div class="contain">
                        <div>
                            <span>运输时效</span>
                            <i :class="punctual>=1?'active':''" @click="selectPunctual(1)"></i>
                            <i :class="punctual>=2?'active':''" @click="selectPunctual(2)"></i>
                            <i :class="punctual>=3?'active':''" @click="selectPunctual(3)"></i>
                            <i :class="punctual>=4?'active':''" @click="selectPunctual(4)"></i>
                            <i :class="punctual>=5?'active':''" @click="selectPunctual(5)"></i>
                        </div>
                        <div>
                            <span>服务态度</span>
                            <i :class="attitude>=1?'active':''" @click="selectAttitude(1)"></i>
                            <i :class="attitude>=2?'active':''" @click="selectAttitude(2)"></i>
                            <i :class="attitude>=3?'active':''" @click="selectAttitude(3)"></i>
                            <i :class="attitude>=4?'active':''" @click="selectAttitude(4)"></i>
                            <i :class="attitude>=5?'active':''" @click="selectAttitude(5)"></i>
                        </div>
                        <div>
                            <span>运输破损</span>
                            <i :class="completeness>=1?'active':''" @click="selectCompleteness(1)"></i>
                            <i :class="completeness>=2?'active':''" @click="selectCompleteness(2)"></i>
                            <i :class="completeness>=3?'active':''" @click="selectCompleteness(3)"></i>
                            <i :class="completeness>=4?'active':''" @click="selectCompleteness(4)"></i>
                            <i :class="completeness>=5?'active':''" @click="selectCompleteness(5)"></i>
                        </div>
                    </div>
                </div>
                <textarea class="input" placeholder="点击输入您的评论" v-model="say"></textarea>
                <select-photo :num="2">
                    <span class="dis-length">{{strLength}}/200</span>
                </select-photo>
            </div>
        </div>
        <button class="submit">确认评价</button>
    </div>
</template>

<script>
import Header from '../widget/header'
import Photo from '../widget/select'

export default {
    data(){
        return {
            dis: 'positive',
            punctual: 5,
            attitude: 5,
            completeness: 5,
            say: null,
            strLength: 0
        }
    },
    watch: {
        say(curr,old){
            if(this.strLength==200){
                this.say = old;
            }
            this.strLength = curr.length;
        }
    },
    components: {
        'user-header': Header,
        'select-photo': Photo
    },
    methods: {
        selectDis(res){
            this.dis = res;
        },
        selectPunctual(res){
            this.punctual = res;
        },
        selectAttitude(res){
            this.attitude = res;
        },
        selectCompleteness(res){
            this.completeness = res;
        }
    }
}
</script>
