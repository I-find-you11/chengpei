<template>
    <div class='select'>
        <select v-model="value" @change="changeFn">
            <option 
                v-for='(item,index) in option'
                :key='index'
            >{{item}}</option>
        </select>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value:this.option[0]
            }
        },
        methods : {
            changeFn() {
                console.log(this.value);
                console.log(this.type);
                this.$emit('confirm',{value:this.value,type:this.type});
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
</style>