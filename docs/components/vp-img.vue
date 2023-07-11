<template>
    <div class="container">
        <img :src="src" :alt="text" :title="text">
        <div class="text">{{ text }}</div>
    </div>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        }
    },
    created() {
        // props 会暴露到 `this` 上
        // console.log(this.text)
    },
    methods: {
        handleSrc(){
            console.log(this.src);
            console.log();
        }
    }
}

</script>

<style scoped>
.container {
}

.text {
    text-align: center;
    font-size: 12px;
    color: #999;
    margin-bottom: 8px;
}
</style>