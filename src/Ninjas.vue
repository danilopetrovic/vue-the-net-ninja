<template>
    <div>
        <h1>{{title}}</h1>
        <ul>
            <li v-for="ninja in ninjas">{{ninja}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'app',
        data() {
            return {
                title: 'list of ninjas:',
                ninjas: ['Yoshi', 'Mario', 'Ryu', 'Danilo']
            }
        },
        methods: {
            greeting() {
                return 'Funkcija vraca greeting....'
            }
        }
    }
</script>
<style scoped>
    h1 {
        color: darkolivegreen;
    }
    ul {
        background-color: aliceblue;
    }
</style>