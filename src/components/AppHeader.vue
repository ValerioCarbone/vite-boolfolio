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
    font-size: 26px;
    color: $white;
    font-weight: 600px;
    background: -webkit-linear-gradient(#ffffff, #cf9fce);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

a {
    text-decoration: none;
    color: currentColor;
}
</style>