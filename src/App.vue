<template>
    <div id="app">
        <h1>{{title}}</h1>
        <ninja_component>ninja components</ninja_component>
        <div>{{greeting()}}</div>
    </div>
</template>
<script>
    import Ninjas from './Ninjas.vue';

    export default {
        name: 'app',
        components: {
            'ninja_component': Ninjas
        },
        data() {
            return {
                title: 'Ninjas array from component',
            }
        },
        methods: {
            greeting() {
                return 'Funkcija vraca greeting....'
            }
        }
    };
</script>
<style>
    body {
        background-color: lightgray;
    }
    h1 {
        color: blueviolet;
    }
</style>
