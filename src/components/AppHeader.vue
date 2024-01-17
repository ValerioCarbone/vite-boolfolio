<template>
    <div>
        <div>
            <nav>
                <ul class="d-flex navbar">
                    <li class="navbar-item">
                        <router-link :to="{ name: 'home' }">Home</router-link>
                    </li>
                    <li class="navbar-item">
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
@use '../style/partials/variables' as *;

.navbar {
    column-gap: 2rem;
    justify-content: space-evenly;
    height: 50px;
    align-items: center;
}

.navbar-item {
    font-size: 20px;
    color: $white;
    font-weight: 600px;
}

a {
    text-decoration: none;
    color: currentColor;
}
</style>