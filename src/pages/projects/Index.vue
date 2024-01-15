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
        <h1>Your projects</h1>
        <ProjectCard v-for="project in projects" :project="project" :key="project.id" />
    </div>
</template>

<style lang="scss"></style>
