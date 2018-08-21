<style lang="scss" scoped>
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
</style>

<template>
    <a>
        <img :src='img_url' >
        <input type='file' accept="image/*" ref="file" @change="loaderImg">
    </a>
</template>

<script>
export default {
    data(){
        return {
            imgs: ''
        }
    },
    props: [],
    methods: {
        loaderImg(){
            var reader = new FileReader();
            reader.readAsDataURL(this.$refs.file.files[0]);
            reader.onload = data => {
                this.$emit('confirm','上传图片');
                this.imgs = reader.result;
            }
        },

    },
    computed:{
        img_url() {
            return this.imgs?this.imgs:require('@/assets/img/photo.png');
        }
    }
}
</script>
