<template>
    <div class="project-card" :id="id">
       <nuxt-link to="/Project" >
            <div class="card-content">
                <h2 v-if='name'>{{name}}</h2>
                <p>{{project}}</p>
                <p>{{projectAddress}}</p>
                <span class="text-link white">{{linkText}}</span>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    props: ['name', 'project', 'projectAddress', 'linkText', 'imgPath', 'id']
}
</script>

<style scoped>

</style>