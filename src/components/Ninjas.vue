<template>
    <div id="ninjas">
        <ul>
            <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show">
                <h2>{{ninja.name}}</h2>
                <h3 v-show="ninja.show">{{ninja.speciality}}</h3>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        components: {},
        data() {
            return {
                ninjas: [
                    {name: 'Ryu', speciality: 'Vue Components', show: false},
                    {name: 'Crystal', speciality: 'HTML Wizardy', show: false},
                    {name: 'hitoshi', speciality: 'Click Events', show: false},
                    {name: 'Tango', speciality: 'Conditionals', show: false},
                    {name: 'Kami', speciality: 'Webpack', show: false},
                    {name: 'Yoshi', speciality: 'Data Diggin', show: false}
                ]
            }
        },
        methods: {}
    };
</script>
<style scoped>
    #ninjas {
        width: 100%;
        max-width: 1200px;
        margin: 40px auto;
        padding: 0 20px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    ul {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
    }
    li {
        flex-grow: 1;
        flex-basis: 300px;
        text-align: center;
        padding: 30px;
        border: 1px solid #222222;
        margin: 10px;
    }
</style>
