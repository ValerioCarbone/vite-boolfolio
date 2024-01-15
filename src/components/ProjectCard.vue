<template>
    <div class="card project-card">
        <h3>{{ project.title }}</h3>
        <p v-if="project.type">{{ project.type.name }}</p>
        <div v-if="project.technologies">
            <p v-for="cardTehcnology in cardTechnologies">{{ cardTehcnology.name }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cardTechnologies: this.project.technologies
        }
    },
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped></style>
