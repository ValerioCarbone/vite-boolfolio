<template>
    <div class="container" v-if="project">
        <div class="project">
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
    </div>
    <Loading v-if="!project"></Loading>
</template>

<script>
import axios from 'axios'
import Loading from '../../components/Loading.vue'

export default {
    props: {
        slug: String
    },
    components: {
        Loading
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
                    console.log(res.data.project)
                    this.project = res.data.project
                }).catch((error) => {
                    console.log('post not found', error.response)

                    if (error.response.status === 404) {
                        this.$router.push({ name: 'not-found' })
                    }
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
@use '../../style/partials/variables' as *;

.project {
    color: $white;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 18px;
}

.technologies {
    column-gap: 1rem;
}
</style>