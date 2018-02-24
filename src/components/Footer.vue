<template>
    <header>
        <p>{{prosledi_title}}</p>
    </header>
</template>
<script>
    import {bus} from "../main";

    export default {
        props: ['prosledi_title'],
        data() {
            return {

            }
        },
        components: {},
        methods: {},
        created() {
            bus.$on('titleChanged', (data)=> {
                this.prosledi_title = data; /*ovo uzme vrednost iz event busa i ubaci u props koji je poslat iz app.vue*/
            })
        }
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
