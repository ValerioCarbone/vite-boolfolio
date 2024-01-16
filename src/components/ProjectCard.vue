<template>
    <div class="card project-card">
        <h2 class="card-title">{{ project.title }}</h2>
        <div class="card-body">
            <h4 v-if="project.type">{{ project.type.name }}</h4>
            <div v-if="project.technologies" class="flex">
                <p v-for="cardTehcnology in cardTechnologies">{{ cardTehcnology.name }}</p>
            </div>
            <p>{{ project.content }}</p>
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

<style lang="scss" scoped>
.flex {
    display: flex;
    column-gap: 1rem;
}
</style>
