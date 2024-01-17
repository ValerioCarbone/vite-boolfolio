<template>
    <div>
        <div>
            <nav>
                <ul class="d-flex navbar">
                    <li>
                        <router-link :to="{ name: 'home' }">Home</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'projects.index' }">Portfolio</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.navbar {
    column-gap: 2rem;
    justify-content: space-evenly;
    padding: 12px 0;
}
</style>