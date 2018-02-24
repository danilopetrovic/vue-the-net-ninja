<template>
    <header>
        <p>{{copyright}} &copy;</p>
    </header>
</template>
<script>
    export default {
        components: {},
        data() {
            return {
                copyright: 'Ovo je neki CopyRight'
            }
        },
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
