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
                    this.projects = res.data.results
                })
        }
    },
    created() {
        this.fetchProjects()
    }
}
</script>

<template>
    <div class="container">
        <h1 class="section-title">Your projects</h1>
        <div class="row">
            <ProjectCard v-for="project in projects" :project="project" :key="project.id" class="col-3" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.col-3 {
    width: calc((100% / 3) - 39px);
}

.row {
    display: flex;
    flex-wrap: wrap;
    row-gap: 1rem;
    justify-content: space-evenly;

}

.section-title {
    text-align: center;
    padding: 24px 0;
}

.container {
    padding: 0 20px;
    margin: 0 auto;
}
</style>
