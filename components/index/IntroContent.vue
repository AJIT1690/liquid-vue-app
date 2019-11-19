<template>
    <div class="section-content">
        <h1>{{pageTitle}}</h1>
        <p class="main-text lead mb0">{{leadText}}</p>
    </div>
</template>

<script>
export default {
    props: ['pageTitle', 'leadText']
}
</script>