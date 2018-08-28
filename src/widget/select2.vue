<template>
    <div class='select'>
        <select v-model="option.index" @change="changeFn">
            <option 
                v-for='(item,index) in option.data'
                :key='index'
                :disabled='!index'
                :value='index'
            >{{item}}</option>
        </select>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value:this.option.data[this.option.index]
            }
        },
        methods : {
            changeFn() {
                console.log(this.option.data[this.option.index]);
                console.log(this.type);
                this.$emit('confirm',{value:this.option.data[this.option.index],type:this.type});
            }
        },
        props : ['option','type']
    }
</script>

<style lang='scss' scoped>
.select {
    font-size: 0;
    select {
        background: none;
        border: none;
        outline: none;
        font-size: .16rem;
    }
}
select {   
    border: solid 1px #000;  
    -moz-appearance:none;   
    -webkit-appearance:none;   
    background: url("http://ourjs.github.io/static/2015/arrow.png") no-repeat scroll rightright center transparent;   
    padding-right: 14px;   
}   
select::-ms-expand { 
    display: none;
 }
</style>