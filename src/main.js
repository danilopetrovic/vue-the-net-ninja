import Vue from 'vue'
import App from './App.vue'

/*definisanje komponente globalno*/
// import Ninjas from './Ninjas.vue'
// Vue.component('ninja_component', Ninjas);
export const bus = new Vue();

new Vue({
    el: '#app',
    render: h => h(App)
});