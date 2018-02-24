<template>
    <div>
        <add-blog></add-blog>
    </div>
</template>

<script>
// Imports
import addBlog from './components/addBlog';

export default {
    components: {
        addBlog: addBlog,
    },
    data () {
        return {
            component: 'form-one'
        }
    },
    methods: {
        handleSubmit: function(){
            alert('thanks for submitting');
        }
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
