<template>
    <div id="add-blog">
        <h2>Add new blog post</h2>
        <form>
            <label>Blog Title:</label> <input type="text" v-model="blog.title" required>
            <label>Blog Content:</label> <textarea v-model.lazy="blog.content" placeholder="lazy"></textarea>
            <div id="checkboxes">
                <input id="Ninjas" type="checkbox" value="Ninjas" v-model="blog.categories"><label for="Ninjas">Ninjas</label>
                <input id="Wizards" type="checkbox" value="Wizards" v-model="blog.categories"><label for="Wizards">Wizards</label>
                <input id="Mario" type="checkbox" value="Mario" v-model="blog.categories"><label for="Mario">Mario</label>
                <input id="Cheese" type="checkbox" value="Cheese" v-model="blog.categories"><label for="Cheese">Cheese</label>
            </div>
            <p>Author:</p>
            <select v-model="blog.author">
                <option v-for="aut in authors">{{aut}}</option>
            </select>
        </form>
        <div id="preview">
            <h3>Preview Blog</h3>
            <p>Blog title: {{blog.title}}</p>
            <p>Blog content: <br>{{blog.content}}</p>
            <p>Categories:</p>
            <ul>
                <li v-for="category in blog.categories">{{category}}</li>
            </ul>
            <p>Author: {{blog.author}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                authors: ['Author1', 'Author2', 'Author3'],
                blog: {
                    title: "",
                    content: "",
                    categories: [],
                    author: "",
                }
            };
        },
        methods() {
        }
    }
</script>

<style scoped>

</style>