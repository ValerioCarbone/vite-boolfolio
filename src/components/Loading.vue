<template>
    <div>
        <span class="loading"></span>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.loading {
    height: 60px;
    aspect-ratio: 1;
    border-radius: 999px;
    border: 10px solid rgb(255, 254, 254);
    border-top: 10px solid rgb(149, 149, 149);
    position: fixed;
    animation: spin 2s infinite linear;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}


@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>