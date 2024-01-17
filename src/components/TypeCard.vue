<template>
    <div class="card type-card">
        <h3 class="card-title">{{ project.title }}</h3>
        <div class="card-body">
            <h3>{{ project.name }}</h3>
            <div v-if="project.technologies" class="flex">
                <p v-for="cardTehcnology in cardTechnologies">
                    <strong> {{ cardTehcnology.name }} </strong>
                </p>
            </div>
            <p>{{ project.content }}</p>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            cardTechnologies: this.project.technologies
        }
    },
    mounted() {
        console.log(this.project.technologies)
    }
}
</script>

<style lang="scss" scoped>
.flex {
    display: flex;
    column-gap: 1rem;
    flex-wrap: wrap;

}

.type-card {
    background-color: rgb(233, 231, 231);
    border: 2px solid rgb(196, 194, 194);
    border-radius: 40px;
    padding: 32px 12px;
}
</style>