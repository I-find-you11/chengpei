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
        &.goods_infor {
            position: relative;
            &>span {
                position: absolute;
                top:0;
                bottom: 0;
                right: .15rem;
                display: flex;
                align-items: center;
                justify-content: space-around;
                font-size: .14rem;
                color: #d73e41;
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
            border: .01rem solid #f6b8b2;
            color:#f6b8b2;
            font-size: .13rem;
            border-radius: .02rem;
            display: flex;
            align-items: center;
            justify-content: space-around;
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
    z-index: 0;
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
.safe {
    width: 100%;;
    border-radius: .01rem;
    position: fixed;
    bottom: 0;
    z-index: 1;
    left:0;
    background: #fff;
    border-bottom: .01rem solid #eeeeee;
    .title {
        height: .64rem;
        line-height: .64rem;
        display: flex;
        justify-content: space-between;
        border-bottom: .01rem solid #eeeeee;
        font-size: .15rem;
        padding: 0 .17rem;
        span {
            font-size: .15rem;
            &:first-child {
                color: #999999;
            }
            &:last-child {
                color: #d43d3e;
            }
        }
        p {
            font-size: .184rem;
            color: #010101;
        }
    }
    .value {
        width: 3.34rem;
        height: .42rem;
        border:.01rem solid #eee;
        border-radius: .05rem;
        line-height: .42rem;
        text-align: center;
        position: relative;
        font-size: .15rem;
        color:#333333;
        margin: .2rem auto 0;
        span {
            position: absolute;
            top:0;
            bottom: 0;
            left: 0.08rem;
            line-height: .42rem;
        }
        input {
            width: 100%;
            height: 100%;
            outline: none;
            background: none;
            border:none;
            text-align: center;
        }
    }
    .select {
        width: 3.34rem;
        text-align: center;
        color:#333333;
        margin: .2rem auto 0;
        font-size: .15rem;
        div{
            height: .69rem;
            position: relative;
            box-sizing: border-box;
            padding-top: .13rem;
            &:first-child {
                border-bottom:.01rem solid #eee;
            }
            i {
                width: .2rem;
                height: .2rem;
                position: absolute;
                top:0;
                bottom: 0;
                margin: auto 0;
                right: 0;
            }
            .unselected{
                background: url('../assets/img/unselected.png') no-repeat center / contain;
            }
            .selected{
                background: url('../assets/img/selected.png') no-repeat center / contain;
            }
        }
        .red {
            color: #d1433c;
        }
    }
    .bottom {
        padding: 0 .215rem;
        border-top:.01rem solid #eee;
        height: .71rem;
        color:#666666;
        font-size: .14rem;
        padding-top: .15rem;
        box-sizing: border-box;
        a {
            display: inline;
            color:#0404fc;
        }
    }
}
.neednote {
    width: 100%;
    border-radius: .01rem;
    position: fixed;
    bottom: 0;
    z-index: 1;
    left:0;
    background: #fff;
    border-bottom: .01rem solid #eeeeee;
    .title {
        height: .64rem;
        line-height: .64rem;
        display: flex;
        justify-content: space-between;
        border-bottom: .01rem solid #eeeeee;
        padding: 0 .17rem;
        span {
            font-size: .15rem;
            &:first-child {
                color: #999999;
            }
            &:last-child {
                color: #d43d3e;
            }
        }
        p {
            font-size: .184rem;
            color: #010101;
        }
    }
    .need {
        width: 3.34rem;
        margin: .18rem auto 0;
        &>p{
            color: #666666;
            font-size: .125rem;
            margin-bottom: .15rem;
        }
        &>div{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            div {
                width: 1rem;
                height: .45rem;
                border: .02rem solid #ebebeb;
                border-radius: .05rem;
                text-align: center;
                color: #818181;
                font-size: .15rem;
                margin-right: .05rem;
                margin-bottom: .15rem;
                box-sizing: border-box;
                padding-top: .02rem;
                &:nth-child(3n) {
                    margin-right: 0;
                }
                p{
                    &:last-child{
                        font-size: .12rem;
                    }
                }
                &.on {
                    border:none;
                    background: url('../assets/img/bg_need.png');
                    background-size:100% 100%;
                }
            }
        }
    }
    .note_bottom {
        width: 3.4rem;
        box-sizing: border-box;
        border: .01rem solid #f6f6f6;
        padding: .1rem;
        border-radius: .07rem;
        margin: 0 auto .3rem;
        &>div {
            display: flex;
            justify-content: space-between;
            font-size: .15rem;
            color: #333333;
            &:last-child{
                flex-wrap: wrap;
            }
            textarea {
                width: 2.48rem;
                border:none;
                outline: none;
                min-height: .55rem;
            }
            div{
                width: 2.48rem;
                height: .3rem;
                font-size: 0;
                line-height: .3rem;
                margin-top: -.06rem;
            }
            
        }
    }
}
.topon {
    color: #d43d3e;
    background: #ffffff;
}
.record {
    padding-top: .44rem;
    &>.select {
        background: #fff;
        height: .56rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &>div {
            width: 33%;
            border-right: .01rem solid #e1e1e1;
            text-align: center;
            position: relative;
            &:last-child{
                border:none;
            }
            &>p {
                text-align: center;
                font-size: .16rem;
            }
            &>span {
                position: absolute;
                top:0;
                bottom: 0;
                font-size: 0;
                right: .2rem;
                line-height: .21rem;
                img {
                    vertical-align: middle;
                    width: .05rem;
                    transform:rotate(90deg);
                }
            }
        }
        
    }
    
    .list {
        width: 3.5rem;
        margin:.11rem auto 0;
        &>div {
            border-radius: .07rem;
            box-shadow: 0 0 .05rem #e7e8e9;
            background: #fff;
            margin-bottom: .1rem;
            &>div {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: .14rem;
                letter-spacing: .1px;
                color: #434343;
                padding: 0 .14rem;
                border-bottom: #cecece .01rem solid;
                &:first-child {
                    line-height: .41rem;
                    height: .41rem;
                    div {
                        height: .41rem;;
                    }
                    img {
                        width: .3rem;
                        vertical-align: middle;
                        margin-top: -.05rem;
                    }
                }
                &:last-child {
                    padding: .05rem .14rem;
                    div:first-child {
                        width: 2.5rem;
                        p {
                            line-height: .28rem;
                            font-size: .125rem;
                            &:last-child {
                                color: #838282;
                            }
                        }
                    }
                    div:last-child {
                        line-height: 1;
                        font-size: 0;
                        width: .71rem;
                        text-align: right;
                        span {
                            font-size: .125rem;
                            color: #adadad;
                        }
                        span:last-child {
                            display: inline-block;
                            width: .71rem;
                            height: .32rem;
                            border-radius: .03rem;
                            background: #e94d3e;
                            font-size: .15rem;
                            color: #fff;
                            margin-top: .05rem;
                            display: flex;
                            align-items: center;
                            justify-content: space-around;
                        }
                    }
                }
            }
        }
    }
}
.alert_all {
    height: 100vh;
    width: 100vw;
    position:fixed;
    top:0;
    bottom: 0;
    background: rgba(0,0,0,.2);
}
.paythanks {
    width: 3.5rem;
    border-radius: .05rem;
    margin: calc(50vh - 1rem) auto 0;
    background: #fff;
    font-size: .15rem;
    .title {
        height: .6rem;
        line-height: .6rem;
        text-align: center;
        font-size: .16rem;
        color: #000000;
        border-bottom: .01rem solid #ebebeb;
    }
    .content {
        height: .87rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: .01rem solid #ebebeb;
        padding:0 .15rem;
        span {
            display: inline-block;
            width: .71rem;
            height: .32rem;
            line-height: .32rem;
            border: .01rem solid #bdbdbd;
            text-align: center;
            border-radius: .03rem;
            font-size: .15rem;
            
            &.on {
                color: #fe0000;
                border-color: #fe0000;
            }
        }
        input {
            width: 3rem;
            height: .4rem;
            font-size: .15rem;
            text-align: center;
            color: #d4d4d4;
            outline: none;
            border:.01rem solid #d4d4d4;
            border-radius: .03rem;
        }
    }
    .bottom {
        height: .52rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: .52rem;
        font-size: 0;
        span {
            color:#d75052;
            display: inline-block;
            width: 48%;
            font-size: .15rem;
            text-align: center;
            height: .4rem;
            line-height: .4rem;
            &:first-child {
                color: #a2a2a2;
                border-right:#d1d1d1 solid .02rem; 
            }
        }
    }
}
.addgoods {
    position: fixed;
    z-index: 111;
    top:0;
    left: 0;
    background: #fff;
    min-height: 100vh;
}
</style>
<template>
    <div @click='hide'>
        <user-header text='拼车配货' mark='true'>
            <div >
                <span @click='click_fn(0)' :class='{topon: index_top==0}'>预约发货</span>
                <span @click='click_fn(1)' :class='{topon: index_top==1}'>发货记录</span>
            </div>
        </user-header>
        <div class='order_details' v-if="index_top==0">
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
                <span class='remove' @click='goods_infor_remove(index)'>删除</span>
            </div>
            <div class='item goods_infor_add'>
                <img src='@/assets/img/detail2.png' />
                <div>
                    <p>货物信息{{order_derails.data.goods.length != 0 ? order_derails.data.goods.length + 1 : ''}}</p>
                    <a @click='add_show'>+添加货物</a>
                </div>
            </div>
            <div class='item time'>
                <img src='@/assets/img/detail1.png' />
                <div>
                    <span @click='show_picker(1)' :class='order_derails.data.time?"on":""'>{{order_derails.data.time? order_derails.data.time : '取货时间'}}</span>
                    <div>
                        <img src='@/assets/img/icon_1.png'>
                        <span @click.stop='safe_show' :class='order_derails.data.insurance?"on":""'>{{order_derails.data.insurance? order_derails.data.insurance : '货物保险'}}</span>
                    </div>
                </div>
            </div>
            <div class='item note'>
                <img src='@/assets/img/icon_2.png' />
                <div>
                    <span @click.stop='neednote_show' :class='order_derails.data.note.length>0?"on":""'>{{order_derails.data.note.length>0? '有需求' : '需求备注'}}</span>
                    <div>
                        <img src='@/assets/img/detail3.png'>
                        <span @click='show_picker(2)' :class='order_derails.data.premium?"on":""'>{{order_derails.data.premium? order_derails.data.premium : '我要加价'}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class='footer' v-if="index_top==0">
            <div class='last_price'>
                <p>￥<span>{{order_derails.data.cost?order_derails.data.cost : 0}}</span></p>
                <a :href='"#/shipping-details/" + order_derails.data.id'>查看明细></a>
            </div>
            <div class='submit' :class='{on:validation}' @click='submit'>确认下单</div>
        </div>

        <!-- 收货时间 -->
        <awesome-picker
            ref="picker1"
            :data="picker1.data"
            :anchor="picker1.anchor"
            :textTitle="picker1.textTitle"
            :textConfirm="picker1.textConfirm"
            :textCancel="picker1.textCancel"
            :colorTitle="picker1.colorTitle"
            :colorConfirm="picker1.colorConfirm"
            :colorCancel="picker1.colorCancel"
            :swipeTime="picker1.swipeTime"
            @cancel="handlePickerCancel"
            @confirm="handlePickerConfirm">
        </awesome-picker>

        <!-- 支付方式 -->
        <!-- <awesome-picker
            ref="picker2"
            :data="picker2.data"
            :anchor="picker2.anchor"
            :textTitle="picker2.textTitle"
            :textConfirm="picker2.textConfirm"
            :textCancel="picker2.textCancel"
            :colorTitle="picker2.colorTitle"
            :colorConfirm="picker2.colorConfirm"
            :colorCancel="picker2.colorCancel"
            :swipeTime="picker2.swipeTime"
            @cancel="handlePickerCancel"
            @confirm="handlePickerConfirm">
        </awesome-picker> -->

        <!-- 感谢费 -->
        <div class='alert_all' v-if="paythanks">
            <div class='paythanks'>
                <div class="title">感谢费</div>
                <div class='content' v-if='!paythanks_num_show'>
                    <span @click='paythank_click(index)' v-for='(item,index) in paythanks_data' :key='index' :class='{on:index==paythank_index}'>{{item}}</span>
                </div>
                <div class='content' v-if='paythanks_num_show'>
                    <input v-model='paythanks_num' placeholder="点击输入金额最多120元">
                </div>
                <div class='bottom'>
                    <span @click='paythanks_show(false)'>取消</span>
                    <span @click='paythanks_show(true)'>确定</span>
                </div>
            </div>
        </div>
        <!-- 支付 -->
        <div class='alert_all' v-if="paying">
            <pay-dialog @click.stop="" v-if="paying" :identify="payNumber" @cancel="cancel" @confirm="confirm"></pay-dialog>
        </div>

        <!-- 货物保险 -->
        <div class='alert_all' v-if='safeshow'>
            <div class='safe' v-if='safeshow'  @click.stop="">
                <div class='title'><span @click='safe_cancel'>取消</span><p>货物保险</p><span @click='safe_confirm'>确定</span></div>
                <div class='value'><span>货物价值</span><input v-model="safe.value"></div>
                <div class='select'>
                    <div class='pay' @click="selectPayWay('pay_i')">
                        <p>超出部分额外支付保费<span class='red'>5.6元</span></p>
                        <p>（不支持现金支付）</p>
                        <i :class="selectWay=='pay_i'?'selected':'unselected'"></i>
                    </div>
                    <div class='free' @click="selectPayWay('free_i')">
                        <p class='red'>免费保险</p>
                        <p>货物价值1126元内</p>
                        <i :class="selectWay=='free_i'?'selected':'unselected'"></i>
                    </div>
                </div>
                <div class='bottom'>
                    <p>若配送导致货物损坏或丢失，按照实际价值进行赔付免赔额500元(不赔付)，选择投保即同意 <a>保险协议</a></p>
                </div>
            </div>
        </div>

        <!-- 需求备注 -->
        <div class='alert_all' v-if='neednoteshow'>
            <div class='neednote' v-if='neednoteshow'  @click.stop="">
                <div class='title'><span @click='neednote_cancel'>取消</span><p>需求备注</p><span @click='neednote_confirm'>确定</span></div>
                <div class='need'>
                    <p><img src=''>选择下列内容，方便司机了解能否提供需求，减少纠纷。</p>
                    <div>
                        <div v-for='(item,index) in neednotes_arr'
                            :key='index'
                            @click='neednote_click(item,index)'
                            :class='{on:item.bg}'
                            >
                            <p>{{item.value1}}</p>
                            <p>({{item.value2}})</p>
                        </div>
                    </div>
                </div>
                <div class='note_bottom'>
                    <div>
                        <span>备注</span>
                        <textarea v-model='neednote.content' placeholder="点击输入备注留言（可不填）"></textarea>
                    </div>
                    <div>
                        <span>照片</span>
                        <div>
                            <up-photo num='1' num1='1'></up-photo>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 送货记录 -->
        <div class='record' v-if="index_top==1">
            <div class='select'>
                <div>
                    <user-select @confirm='confirm1'  :option='option.adress' :type='"adress"'></user-select>
                    <span><img src='@/assets/img/arrow.png'></span>
                </div>
                <div>
                    <user-select  @confirm='confirm1' :option='option.type1' :type='"type1"'></user-select>
                    <span><img src='@/assets/img/arrow.png'></span>
                </div>
                <div>
                    <p @click='record_all'>全部</p>
                    <span><img src='@/assets/img/arrow.png'></span>
                </div>
            </div>
            <div class='list'>
                <div v-for='(item,index) in record.data' :key='index'>
                    <div>
                        <div>
                            <span>{{item.ad_start}}</span> <img src='@/assets/img/arrow1.png'> <span>{{item.ad_end}}</span>
                        </div>
                        <span>{{item.long}}</span>
                    </div>
                    <div>
                        <div>
                            <p>{{item.content}}</p>
                            <p>{{item.datetime}}</p>
                        </div>
                        <div>
                            <span>{{item.time}}</span>
                            <span>重发</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class='addgoods' v-if='addgoods'>
            <addgoods @confirm='addgoods_hide' @add='add_goods'></addgoods>
        </div>
        
        </div>
</template>

<script>
    import header from '../widget/header'
    import PayDialog from '../widget/pay-dialog1'
    import select from '../widget/select2'
    import select1 from '../widget/select'
    import addgoods from './goods-infor'
    export default {
        data() {
            return {
                addgoods:false,
                paythanks_prve : '',
                paythanks_num : null,
                paythanks_num_show: false,
                paythanks:false,
                paythanks_data :['10元','15元','20元','其他 >'],
                paythank_index:0,
                paying : false,
                payNumber: null,
                picker1 : {
                    data : [
                        {
                            value:'今天',
                            children:[{
                                value:'0:00-1:00',
                                children:[{value:'9.5折'}]
                            },{
                                value:'1:00:2:00',
                                children:[{value:'9折'}]
                            },{
                                value:'2:00-3:00',
                                children:[{value:'9.5折'}]
                            },{
                                value:'3:00-4:00',
                                children:[{value:'9折'}]
                            },{
                                value:'4:00-5:00',
                                children:[{value:'9.5折'}]
                            },{
                                value:'5:00-6:00',
                                children:[{value:'9折'}]
                            },{
                                value:'6:00-7:00',
                                children:[{value:'9.5折'}]
                            },{
                                value:'7:00-8:00',
                                children:[{value:'9折'}]
                            },{
                                value:'8:00-9:00',
                                children:[{value:'9.5折'}]
                            },{
                                value:'10:00-11:00',
                                children:[{value:'9折'}]
                            },{
                                value:'11:00-12:00',
                                children:[{value:'9.5折'}]
                            }]
                        },
                        {
                            value:'明天',
                            children:[{
                                value:'0:00-1:00',
                                children:[{value:'9.5折'}]
                            },{
                                value:'1:00:2:00',
                                children:[{value:'9折'}]
                            },{
                                value:'2:00-3:00',
                                children:[{value:'9.5折'}]
                            },{
                                value:'3:00-4:00',
                                children:[{value:'9折'}]
                            },{
                                value:'4:00-5:00',
                                children:[{value:'9.5折'}]
                            },{
                                value:'5:00-6:00',
                                children:[{value:'9折'}]
                            },{
                                value:'6:00-7:00',
                                children:[{value:'9.5折'}]
                            },{
                                value:'7:00-8:00',
                                children:[{value:'9折'}]
                            },{
                                value:'8:00-9:00',
                                children:[{value:'9.5折'}]
                            },{
                                value:'10:00-11:00',
                                children:[{value:'9折'}]
                            },{
                                value:'11:00-12:00',
                                children:[{value:'9.5折'}]
                            }]
                        },
                        {
                            value:'后天',
                            children:[{
                                value:'0:00-1:00',
                                children:[{value:'9.5折'}]
                            },{
                                value:'1:00:2:00',
                                children:[{value:'9折'}]
                            },{
                                value:'2:00-3:00',
                                children:[{value:'9.5折'}]
                            },{
                                value:'3:00-4:00',
                                children:[{value:'9折'}]
                            },{
                                value:'4:00-5:00',
                                children:[{value:'9.5折'}]
                            },{
                                value:'5:00-6:00',
                                children:[{value:'9折'}]
                            },{
                                value:'6:00-7:00',
                                children:[{value:'9.5折'}]
                            },{
                                value:'7:00-8:00',
                                children:[{value:'9折'}]
                            },{
                                value:'8:00-9:00',
                                children:[{value:'9.5折'}]
                            },{
                                value:'10:00-11:00',
                                children:[{value:'9折'}]
                            },{
                                value:'11:00-12:00',
                                children:[{value:'9.5折'}]
                            }]
                        }
                        ],
                    textTitle : '取货时间'
                },
                picker2 : {
                    data:[['回付·收到货后我付款','提付·取货时付款','现付·现在付款','到付·收货人付款','月结·请先开通']],
                    textTitle : '支付方式',
                    anchor:[{ 
                        index: 2
                    }]
                },
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
                        time : '',
                        insurance : '',
                        note: [],
                        premium : '',
                        cost : '',
                        id: 1
                    }
                },
                safe : {
                    value: '0'
                },
                selectWay: null,
                safeshow:false,
                neednoteshow:false,
                neednotes_arr : [{
                    value1 : '电子回单',
                    value2 : '免费',
                    color  :  false,
                    bg:false
                },{
                    value1 : '纸质回单',
                    value2 : '免费',
                    color  :  false,
                    bg:false
                },{
                    value1 : '搬运搬楼',
                    value2 : '与司机另议',
                    color  :  true,
                    bg:false
                },{
                    value1 : '走高速,过高桥',
                    value2 : '我承担费用',
                    color  :  true,
                    bg:false
                },{
                    value1 : '需要装卸',
                    value2 : '与司机另议',
                    color  :  true,
                    bg:false
                },{
                    value1 : '需开发票',
                    value2 : '限在线支付',
                    color  :  true,
                    bg:false
                }],
                index_top:0,
                option : {
                    adress : {
                        data:[
                        '出发地',
                        '全国',
                        '嘉兴市',
                        '上海市',
                        '浙江市',
                        '江苏省',
                        '南京市',
                        '深圳市'
                        ],
                        index:0
                    },
                    type1 : {
                        data:['目的地','全国','目的地1','目的地二','目的地三','目的地四','目的地五'],
                        index:0
                    },
                },
                neednote : {
                    centont: ''
                },
                record : {
                    data : [
                        {
                            ad_start: '嘉兴市 武原街道',
                            ad_end: '杭州市 华西镇',
                            long: '130km',
                            content: '五金建材 500公斤/1方 2.7米中货车',
                            time: '1分钟前',
                            datetime:'今天08:05前取货 / 距我13km'
                        },
                        {
                            ad_start: '嘉兴市 武原街道',
                            ad_end: '杭州市 华西镇',
                            long: '130km',
                            content: '五金建材 500公斤/1方 2.7米中货车',
                            time: '1分钟前',
                            datetime:'今天08:05前取货 / 距我13km'
                        },
                        {
                            ad_start: '嘉兴市 武原街道',
                            ad_end: '杭州市 华西镇',
                            long: '130km',
                            content: '五金建材 500公斤/1方 2.7米中货车',
                            time: '1分钟前',
                            datetime:'今天08:05前取货 / 距我13km'
                        },
                        {
                            ad_start: '嘉兴市 武原街道',
                            ad_end: '杭州市 华西镇',
                            long: '130km',
                            content: '五金建材 500公斤/1方 2.7米中货车',
                            time: '1分钟前',
                            datetime:'今天08:05前取货 / 距我13km'
                        }
                    ]
                }
            }
        },
        methods : {
            add_show(){
                this.addgoods = true;
            },
            add_goods(res) {
                this.addgoods = false;
                this.order_derails.data.goods.push({
                    infor:res
                })
                console.log(res);
            },
            addgoods_hide() {
                this.addgoods = false;
            },
            goods_infor_remove(index){
                this.order_derails.data.goods.splice(index,1);
            },
             paythanks_show (bl) {
                if(!bl) {
                    this.order_derails.data.premium = this.paythanks_prve;
                }
                if(this.paythanks_num_show) {
                    console.log(111);
                    if(!this.paythanks_num) {
                        alert('金额不能为空');
                        return;
                    }
                    this.order_derails.data.premium = this.paythanks_num + '元'
                }
                this.paythanks_num_show = false;
                this.paythanks = false;
                this.paythank_index = 0;

            },
            paythank_click (index) {
                this.paythanks_prve = this.order_derails.data.premium
                this.paythank_index = index;
                this.order_derails.data.premium = this.paythanks_data[index];
                if(index == 3) {
                    this.paythanks_num='';
                    this.paythanks_num_show = true;
                }
            },
            record_all(){
                this.option.adress.index=1;
                this.option.type1.index=1;
                console.log(1);
            },
            submit() {
                this.paying = true;
                if(this.validation) {
                    console.log('提交成功');
                }
            },
            show_picker(index){
                if(index==1) {
                    this.$refs['picker' + index].show();
                }else {
                    this.paythanks = true;
                }
            },
            handlePickerCancel() {
                console.log(1);
            },
            handlePickerConfirm(data) {
                console.log(data);
                if(data.length>1 ) {
                    this.order_derails.data.time = data[0].value + data[1].value;
                }
            },
            safe_cancel() {
                this.safeshow = false;
            },
            safe_confirm(data){
                this.safeshow = false;
                console.log(data);
            },
            safe_show() {
                this.safeshow = true;
            },
            neednote_cancel() {
                this.neednoteshow = false;
            },
            neednote_confirm(data){
                if(this.order_derails.data.note==0) {
                    alert('请添加需求');
                    return false;
                }
                this.neednoteshow = false;
            },
            neednote_show() {
                this.neednoteshow = true;
            },
            neednote_click(item,index) {
                item.bg = !item.bg;
                if(item.bg) {
                    this.order_derails.data.note.push(index);
                }else {
                    let index_ =  this.order_derails.data.note.indexOf(index);
                    this.order_derails.data.note.splice(index_,1);
                    
                }
                console.log(this.order_derails.data.note);
            },
            cancel(){
                this.paying = false;
            },
            confirm(data){
                this.paying = false;
                console.log(data);
            },
            selectPayWay(type){
                this.selectWay = type;
            },
            click_fn(index) {
                this.index_top = index;
                console.log(1)
            },
            confirm1(data) {
                console.log(data);
            },
            hide() {
                console.log(11);
                this.neednoteshow = false;
                this.safeshow = false;
            }

           
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
            'user-header': header,
            'pay-dialog': PayDialog,
            'user-select': select,
            'up-photo' : select1,
            'addgoods':addgoods
        }
    }
</script>

