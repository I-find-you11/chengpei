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
}
</style>

<template>
    <div class="photos">
        <img v-for="img in imgs" :key="img" :src="img">
        <input type="file" accept="image/*" ref="file" @change="loaderImg">
        <img src="../assets/img/photo.png" @click="onPhoto" v-if="num&&imgs.length<num">
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
    props: ['num'],
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
