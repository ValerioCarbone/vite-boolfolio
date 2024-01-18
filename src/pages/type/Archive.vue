<template>
    <section class="type-archive">
        <div class="container" v-if="this.type">
            <h1 class="section-title title">{{ type.name }}</h1>
            <div class="row">
                <TypeCard v-for="project in projects" :key="project.id" :project="project" class="col-3"></TypeCard>
            </div>
        </div>
        <Loading v-if="projects.length < 1"></Loading>
    </section>
</template>

<script>
import axios from 'axios';
import TypeCard from '../../components/TypeCard.vue'
import Loading from '../../components/Loading.vue'
export default {
    props: {
        slug: String
    },
    components: {
        TypeCard,
        Loading
    },
    data() {
        return {
            BASE_URL: 'http://127.0.0.1:8000/api',
            projects: [],
            type: null
        }
    },
    methods: {
        fetchPostsByType() {
            axios.get(`${this.BASE_URL}/type/${this.slug}`)
                .then((res) => {
                    this.projects = res.data.projects.data
                    this.type = res.data.type
                }
                )
        }
    },
    created() {
        this.fetchPostsByType()
    }
}
</script>

<style lang="scss" scoped>
.section-title {
    color: white;
    padding: 24px 0;
}

.row {
    display: flex;
    flex-wrap: wrap;
    gap: 20px 30px;
}

.col-3 {
    width: calc((100% / 3) - 20px);
}

.container {
    padding: 0 20px;
    margin: 0 auto;

}
</style>