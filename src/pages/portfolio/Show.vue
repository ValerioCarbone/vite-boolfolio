<template>
    <div>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    props: {
        slug: String
    },
    data() {
        return {
            project: null,
            BASE_URL: 'http://127.0.0.1:8000/api'
        }
    },
    methods: {
        fetchProject() {
            axios.get(`${this.BASE_URL}/projects/${this.slug}`)
                .then(res => {
                    console.log(res.data.project)
                })
        }
    },
    created() {
        this.fetchProject()
    },
    mounted() {
        console.log(this.slug)
    }
}
</script>

<style lang="scss" scoped></style>