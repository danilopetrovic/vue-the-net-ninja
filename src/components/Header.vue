<template>
    <header>
        <h1 v-on:click="changeTitle">{{title}} (klikniMe)</h1>
    </header>
</template>
<script>
    import {bus} from "../main";

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
                title: 'title headera'
            }
        },
        methods: {
            changeTitle() {
                this.title = "Title is Changed by event bus";
                bus.$emit('titleChanged', 'Title is Changed by event bus');
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
