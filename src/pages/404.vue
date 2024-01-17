<template>
    <div class="row">
        <h1 class="error">404 - Page not found</h1>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.row {
    display: flex;
    align-items: center;
    justify-content: center;
    color: $white;
    font-size: 40px;
    height: calc(100% - 50px);
}
</style>