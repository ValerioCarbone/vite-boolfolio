<template>
    <div>
        <div>
            <nav>
                <ul>
                    <li>
                        <router-link :to="{ name: 'home' }">Home</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'portfolio' }">Portfolio</router-link>
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

<style lang="scss" scoped></style>