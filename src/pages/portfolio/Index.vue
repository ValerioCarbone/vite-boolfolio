<script >
import axios from 'axios';
import ProjectCard from '../../components/ProjectCard.vue'
import Loading from '../../components/Loading.vue'
export default {
    components: {
        ProjectCard,
        Loading
    },
    data() {
        return {
            projects: [],
            BASE_URL: 'http://127.0.0.1:8000/api'
        }
    },
    methods: {
        fetchProjects() {
            axios.get(`${this.BASE_URL}/projects`)
                .then((res) => {

                    this.projects = res.data.results.data
                })
        }
    },
    created() {
        this.fetchProjects()
    }
}
</script>

<template>
    <section class="portfolio">
        <div class="container">
            <h1 class="section-title title">Your projects</h1>
            <div class="row">
                <ProjectCard v-for="project in projects" :project="project" :key="project.id" class="col-3" />
            </div>
        </div>
        <Loading v-if="projects.length < 1"></Loading>
    </section>
</template>

<style lang="scss" scoped>
@use '../../style/partials/variables' as *;



.col-3 {
    width: calc((100% / 3) - 20px);
}

.row {
    display: flex;
    flex-wrap: wrap;
    gap: 50px 30px;
    margin-bottom: auto;
}

.section-title {
    padding: 18px 0;
    font-size: 60px;
    color: white;
}

.container {
    padding: 0 20px;
    margin: 0 auto;

}
</style>
