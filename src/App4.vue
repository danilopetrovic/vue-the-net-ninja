<template>
    <div>
        <app-header v-bind:prosledi_title="title" v-on:changeTitleSlanje="updateTitle"></app-header>
        <app-ninjas v-bind:ninjas_prosledjen="ninjas"></app-ninjas>
        <app-footer v-bind:prosledi_title="title"></app-footer>
    </div>
</template>
<script>
    import Header from './components/Header4';
    import Footer from './components/Footer4';
    import Ninjas from './components/Ninjas4';

    export default {
        components: {
            'app-header': Header,
            'app-footer': Footer,
            'app-ninjas': Ninjas
        },
        data() {
            return {
                title: "String passed by props (primitive type)",
                ninjas: [
                    {name: 'Ryu', speciality: 'Vue Components', show: false},
                    {name: 'Crystal', speciality: 'HTML Wizardy', show: false},
                    {name: 'Hitoshi', speciality: 'Click Events', show: false},
                    {name: 'Tango', speciality: 'Conditionals', show: false},
                    {name: 'Kami', speciality: 'Webpack', show: false},
                    {name: 'Yoshi', speciality: 'Data Diggin', show: false}
                ],
            }
        },
        methods: {
            updateTitle: function(eventKojiSaljemKaoDrugiParametar) {
                this.title = eventKojiSaljemKaoDrugiParametar;
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
