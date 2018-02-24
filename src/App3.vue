<template>
    <div>
        <app-header></app-header>
        <app-ninjas v-bind:ninjas_prosledjen="ninjas"  v-bind:title_prosledjen="title"></app-ninjas>
        <app-footer></app-footer>
    </div>
</template>
<script>
    import Header from './components/Header';
    import Footer from './components/Footer';
    import Ninjas from './components/Ninjas3';

    export default {
        components: {
            'app-header': Header,
            'app-footer': Footer,
            'app-ninjas': Ninjas
        },
        data() {
            return {
                ninjas: [
                    {name: 'Ryu', speciality: 'Vue Components', show: false},
                    {name: 'Crystal', speciality: 'HTML Wizardy', show: false},
                    {name: 'Hitoshi', speciality: 'Click Events', show: false},
                    {name: 'Tango', speciality: 'Conditionals', show: false},
                    {name: 'Kami', speciality: 'Webpack', show: false},
                    {name: 'Yoshi', speciality: 'Data Diggin', show: false}
                ],
                title: "String passed by props (primitive type)"
            }
        },
        methods: {}
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
