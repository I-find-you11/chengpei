<style lang="scss" scoped>
.contain{
    padding-top: .44rem;
}
.map-box{
    font-size: 0;
    width: 100%;
    height: 3.5rem;
    img{
        width: 100%;
        height: 100%;
    }
}
.list-header{
    font-size: .15rem;
    color: black;
    line-height: .4rem;
    border-bottom: solid .01rem #eee;
    border-top: solid .01rem #eee;
    background: white;
}
</style>

<template>
    <div class="contain">
        <user-header text="跟踪记录"></user-header>
        <div class="map-box">
            <img src="../../static/img/map.png">
        </div>
        <p class="list-header wraper">跟踪记录</p>
        <track-list v-for="(item, index) in track" :key="index" :init-data="item" :is-current="index==0"></track-list>
    </div>
</template>

<script>
import Header from '../widget/header'
import TrackingList from '../widget/tracking-list'

export default {
    data(){
        return {
            track: [{
                contain: '【上海市】上海浦东区 已签收',
                time: '2016-07-08 16:50:10'
            },{
                contain: '【上海市】上海浦东区 已签收',
                time: '2016-07-08 16:50:10'
            },{
                contain: '【上海市】上海浦东区 已签收',
                time: '2016-07-08 16:50:10'
            },{
                contain: '【上海市】上海浦东区 已签收',
                time: '2016-07-08 16:50:10'
            }]
        }
    },
    components: {
        'user-header': Header,
        'track-list': TrackingList
    }
}
</script>
