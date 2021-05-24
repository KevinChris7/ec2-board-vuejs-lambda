<template>
    <header>
        <h1>{{title}}</h1>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: String,
    },
}
</script>

<style scoped>
h1{
    text-align: left;
    color: #2c3e50;
    margin-top: 0px;
    left:auto;
}
</style>

