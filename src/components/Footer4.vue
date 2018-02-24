<template>
    <header>
        <p>{{copyright}} &copy; ||| {{prosledi_title}}</p>
    </header>
</template>
<script>
    export default {
        props: {
            prosledi_title: {
                type: String,
                required: true
            }
        },
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
