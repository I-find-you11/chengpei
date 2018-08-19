<template>
    <div class='goods_infor'>
        <user-header text='货物详情'></user-header>
        <div class='goods name'>
            <div class='title'>
                <span>名称</span>
                <input v-model="goods.data.name" placeholder="点击输入，最多20个字" />
            </div>
            <div class='chang'>
                <span 
                    v-for="(item,index) in goods.chang1" 
                    :key='index' 
                    :class="goods.data.name_type==index?'active':''"
                    @click="name_click(index)"
                >{{item}}</span>
            </div>
        </div>
        <div class='goods num'>
            <div class='title'>
                <span>件数</span>
                <input type='number' v-model="goods.data.num" placeholder="点击输入" />
            </div>
        </div>
        <div class='goods weight'>
            <div class='title'>
                <span>重量（kg）</span>
                <input type='number' v-model="goods.data.weight" placeholder="输入重量" />
            </div>
            <div class='title'>
                <span>体积（m3）</span>
                <input type='number' v-model="goods.data.volume" placeholder="输入体积" />
            </div>
            <span>至少填一项</span>
        </div>
        <div class='goods package'>
            <div class='title'>
                <span>名称</span>
                <input v-model="goods.data.package" placeholder="点击输入，最多20个字" />
            </div>
            <div class='chang'>
                <span 
                    v-for="(item,index) in goods.chang2" 
                    :key='index' 
                    @click="package_click(item,$event)"
                >{{item}}</span>
            </div>
        </div>
        <div class='goods photo'>
            <div class='title'>
                <span>拍照</span>
                <a 
                    v-for='(item,index) in goods.photo'
                    :key='index'
                    v-show='index <= goods.photo_index'
                >
                    <img src='@/assets/img/photo.png' >
                    <input type='file' @chang='photo_change'>
                </a>
               
            </div>
        </div>
        <div class='submit' @click='submit'>确认</div>
    </div>
</template>

<script>
    import header from '../widget/header'
    export default {
        data() {
            return {
                goods : {
                    data : {
                        name : '',
                        name_type : 0,
                        num : '',
                        weight: '',
                        volume : '',
                        package : ''
                    }, 
                    chang1 : ['日用品','文件','水果','电子产品'],
                    chang2 : ['托盘','木架','袋装','纸箱'],
                    chang2_arr : [],
                    photo : new Array(3),
                    photo_index : 0
                }
            }
        },
        methods : {
            name_click(index) {
                this.goods.data.name_type = index;
            },
            package_click(item,el) {
                console.log(1);
                if(this.goods.chang2_arr.indexOf(item) == -1) {
                    if(this.goods.chang2_arr.length < 2) {
                        this.goods.chang2_arr.push(item);
                        this.goods.data.package = this.goods.chang2_arr.toString('.');
                        el.target.className = 'active';
                    }else {
                        return false;
                    }
                }else {
                    let this_index = this.goods.chang2_arr.indexOf(item);
                    this.goods.chang2_arr.splice(this_index,1);
                    this.goods.data.package = this.goods.chang2_arr.toString('.');
                    el.target.className = '';
                    return false;
                }
            },
            photo_change() {

            },
            submit() {
                console.log('提交成功');
            }
        },
        components : {
            'user-header': header
        }
    }
</script>

<style lang="scss" scoped>
.goods_infor {
    padding-top: .44rem;
}
.goods {
    box-shadow: 0 0 .03rem #ccc;
    margin-top: .1rem;
    font-size: .16rem;
    padding: 0 .22rem;
    background: #fff;
    &.name {
        height: 1.09rem;
        .title:first-child {
            border-bottom: .02rem solid #efefef;
        }
    }
    &.package {
        height: 1.09rem;
        .title:first-child {
            border-bottom: .02rem solid #efefef;
        }
    }
    &.num {
        height: .51rem;
    }
    &.weight {
        position: relative;
        height: 1.04rem;
        .title:first-child {
            border-bottom: .02rem solid #efefef;
        }
        >span {
            position: absolute;
            right: .22rem;
            top:0;
            line-height: 1.04rem;
            bottom: 0;
            margin: auto 0;
            color: #838383;
        }
    }
    &.photo {
        height: .76rem;
        line-height: .76rem;
        .title {
            height: 100%;
            line-height: .76rem;
            font-size: 0;
            padding-left: .5rem;
            text-align: left;
            a {
                display: inline-block;
                position: relative;
                width: .8rem;
                height: .5rem;
                margin-right: .1rem;
                vertical-align: middle;
                font-size:0;
                overflow: hidden;
                &:last-child {
                    margin-right: 0;
                }
                img {
                    width: 100%;
                    height: 100%;
                }
                input {
                    position: absolute;
                    left: 0;
                    top: 0;
                    opacity: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 999;
                }
            }
            span {
                font-size: .16rem;
            }
        }
    }
    .title {
        height: .52rem;
        line-height: .52rem;
        color: #838383;
        font-size: .16rem;
        text-align: center;
        position: relative;
        box-sizing: border-box;
        span {
            position: absolute;
            left: 0;
            top:0;
            bottom: 0;
            margin: auto 0;
            color: #3b3b3b;
        }
        >input {
            width: 100%;
            box-sizing: border-box;
            height: 90%;
            vertical-align: middle;
            padding: 0 .35rem;
            outline: none;
            border: none;
            font-size: .14rem;
            text-align: center;
        }
    }
    .chang {
        height: .54rem;
        text-align: center;
        font-size: 0;
        line-height: .54rem;
        span {
            display: inline-block;
            color: #848484;
            font-size: .14rem;
            width: .74rem;
            height: .3rem;
            line-height: .3rem;
            border:#eeeeee .01rem solid;
            border-radius: .05rem;
            box-sizing: border-box;
            margin-right: .11rem;
            vertical-align: middle;
            &:last-child {
                margin-right: 0;
            }
            &.active {
                border-color: #f1bebf;
                color: #dc6d6d;
            }
        }
    }
}
.submit {
    background: #d43d3e;
    border-radius: .05rem;
    color: #fff;
    font-size: .17rem;
    width: 3.47rem;
    height: .53rem;
    text-align: center;
    line-height: .53rem;
    position: fixed;
    bottom: .1rem;
    z-index: 999;
    left:0;
    right: 0;
    margin: 0 auto;
}
</style>