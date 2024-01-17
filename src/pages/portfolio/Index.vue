<script >
import axios from 'axios';
import ProjectCard from '../../components/ProjectCard.vue'
export default {
    components: {
        ProjectCard
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
                    console.log(res.data.results)
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
    gap: 20px 30px;
}

.section-title {
    padding: 24px 0;
    color: $white;
}

.container {
    padding: 0 20px;
    margin: 0 auto;

}
</style>
