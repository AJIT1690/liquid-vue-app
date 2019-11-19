<template>
    <div class="project-card">
        <a v-on:click="testMethod">
            <div class="card-content">
                <h2>{{name}}</h2>
                <p>{{project}}</p>
                <p>{{projectAddress}}</p>
                <span class="text-link white">{{linkText}}</span>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    props: ['name', 'project', 'projectAddress', 'linkText', 'imgPath'],

    methods: {
        testMethod: () => {
            console.log('%%%%%%%');
        }
    }
}
</script>

<style scoped>
    .project-card  a {
        background-image: url('/img/portfolio-card-1.jpg') no-repeat;
    }
</style>