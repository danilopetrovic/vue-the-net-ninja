<template>
    <header>
        <p>{{prosledi_title}}</p>
    </header>
</template>
<script>
    export default {
        props: ['prosledi_title'],
        components: {},
        methods: {}
    };
</script>
<style scoped>
    header {
        background: #222222;
        padding: 6px;
    }
    p {
        color: lightgreen;
        text-align: center;
    }
</style>
