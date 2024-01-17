<template>
    <div class="card project-card">
        <h3 class="card-title">{{ project.title }}</h3>
        <div class="card-body">
            <h4 v-if="project.type">{{ project.type.name }}</h4>
            <div v-if="project.technologies" class="flex">
                <p v-for="cardTehcnology in cardTechnologies">
                    <strong> {{ cardTehcnology.name }} </strong>
                </p>
            </div>
            <p>{{ project.content }}</p>
            <router-link :to="{ name: 'projects.show', params: { slug: project.slug } }">
                Details
            </router-link>
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
    },
    mounted() {
        console.log(this.project.slug)
    }
}
</script>

<style lang="scss" scoped>
.flex {
    display: flex;
    column-gap: 1rem;
    flex-wrap: wrap;

}

.project-card {
    background-color: rgb(233, 231, 231);
    border: 2px solid rgb(196, 194, 194);
    border-radius: 40px;
    padding: 32px 12px;
}
</style>
