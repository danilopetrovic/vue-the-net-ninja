<template>
    <div id="ninjas">
        <ul>
            <li v-for="ninja in ninjas_prosledjen" v-on:click="ninja.show = !ninja.show">
                <h2>{{ninja.name}}</h2>
                <h3 v-show="ninja.show">{{ninja.speciality}}</h3>
            </li>
        </ul>
        <button v-on:click="deleteNinja">Delete last ninja pop()</button>
    </div>
</template>
<script>
    export default {
        // props: ['ninjas_prosledjen'],
        props: {
            ninjas_prosledjen: {
                type: Array,
                required: true
            }
        },
        components: {},
        data() {
        },
        methods: {
            deleteNinja() {
                this.ninjas_prosledjen.pop();
            }
        }
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
