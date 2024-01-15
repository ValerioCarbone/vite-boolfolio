<script >
import axios from 'axios';
export default {
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
        <p v-for="project in projects" :key="project.id">{{ project.title }}</p>
    </div>
</template>

<style></style>
