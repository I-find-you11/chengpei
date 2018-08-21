<style lang="scss" scoped>
.photos{
    font-size: 0;
    padding: .06rem 0;
    position: relative;
    input{
        display: none;
    }
    img{
        width: .62rem;
        height: .48rem;
        margin-right: .02rem;
    }
    .isnum1 {
        width:.3rem;height:.3rem;
    }
}
</style>

<template>
    <div class="photos">
        <img v-for="img in imgs" :key="img" :src="img" :class='{isnum1:num1}'>
        <input type="file" accept="image/*" ref="file" @change="loaderImg">
        <img src="../assets/img/photo.png" @click="onPhoto" v-if="num&&imgs.length<num &&num1!=1">
        <img src="../assets/img/photo1.png" @click="onPhoto" v-if="num1" style='width:auto;height:.3rem;'>
        <slot></slot>
    </div>
</template>

<script>
export default {
    data(){
        return {
            imgs: []
        }
    },
    props: ['num','num1'],
    methods: {
        onPhoto(){
            if(this.num&&this.imgs.length>=this.num) return;
            this.$refs.file.click()
        },
        loaderImg(){
            var reader = new FileReader();
            reader.readAsDataURL(this.$refs.file.files[0]);
            reader.onload = data => {
                this.imgs.push(reader.result)
            }
        },

    }
}
</script>
