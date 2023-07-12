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
        },
        text: {
            type: String,
        }
    },
}

</script>

<style scoped>
.container {}

.text {
    text-align: center;
    font-size: 12px;
    color: #999;
    margin-bottom: 8px;
}
</style>