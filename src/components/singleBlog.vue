<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.body}}</article>
    </div>
</template>

<script>
    import searchMixin from '../mixins/searchMixin';

    export default {
        data() {
            return {
                id: this.$route.params.id,
                blog: {}
            }
        },
        created() {
            console.log('+++++++++++++++++');
            this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id).then(function (data) {
                console.log('usao+++++++++++++++++++++++++');
                console.log(data);
                this.blog = data.body;
            })
        }
    }
</script>

<style>
    #single-blog {
        max-width: 960px;
        margin: 0 auto;
    }
</style>
