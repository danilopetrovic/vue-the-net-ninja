<template>
    <header>
        <h1 v-on:click="changeTitle">{{prosledi_title}} |klikniMe|</h1>
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
                title: 'Nindzin Tuturijal'
            }
        },
        methods: {
            changeTitle() {
                this.$emit('changeTitleSlanje', 'Menjanje $emit-om, slanjem i hvatanjem eventa')
            }
        }
    };
</script>
<style scoped>
    header {
        background: lightgreen;
        padding: 10px;
    }
    h1 {
        color: #222222;
        text-align: center;
    }
</style>
