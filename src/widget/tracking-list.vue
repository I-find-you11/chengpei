<style lang="scss" scoped>
.box{
    display: flex;
    height: .84rem;
    width: 100%;
    font-size: 0;
    background: white;
    i{
        height: 100%;
        width: 15%;
        background: url('../assets/img/tracking-past.png') no-repeat center / auto 100%;
    }
    .info{
        display: flex;
        flex: 1;
        justify-content: center;
        flex-direction: column;
        color: #a19f9f;
        border-bottom: solid .01rem #eee;
        p{
            padding: .04rem 0;
        }
        p:nth-child(1){
            font-size: .15rem;
        }
        p:nth-child(2){
            font-size: .12rem;
        }
    }
    &.current{
        i{
            background: url('../assets/img/tracking-current.png') no-repeat center bottom / auto 80%;
        }
        .info{
            color: #25ae5f;
        }
    }
}
</style>

<template>
    <div class="box" :class="isCurrent?'current':'sdf'">
        <i></i>
        <div class="info">
            <p>{{initData.contain}}</p>
            <p>&ensp;{{initData.time}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    props: ['initData','isCurrent']
}
</script>
