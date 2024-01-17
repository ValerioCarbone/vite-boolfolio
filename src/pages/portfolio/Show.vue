<template>
    <div class="container" v-if="project">
        <h1 class="project-title ">{{ project.title }}</h1>
        <div>
            <h3>{{ project.type.name }}</h3>
            <ul class="d-flex technologies">
                <li v-for="technology in project.technologies" :key="technology.id">
                    {{ technology.name }}
                </li>
            </ul>
            <p v-html="project.content"></p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props: {
        slug: String
    },
    data() {
        return {
            project: null,
            BASE_URL: 'http://127.0.0.1:8000/api'
        }
    },
    methods: {
        fetchProject() {
            axios.get(`${this.BASE_URL}/projects/${this.slug}`)
                .then(res => {
                    this.project = res.data.project
                })
        }
    },
    created() {
        this.fetchProject()
    },
    mounted() {
        console.log(this.slug),
            console.log(this.$route)

    }
}
</script>

<style lang="scss" scoped>
.project-title {}

.container {
    max-width: 800px;
    margin: 0 auto;
}

.technologies {
    column-gap: 1rem;
}
</style>