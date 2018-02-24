import Vue from 'vue'
// import App from './App.vue'
// import App2 from './App2.vue'
// import App3 from './App3.vue'
import App4 from './App4.vue'

/*definisanje komponente globalno*/
// import Ninjas from './Ninjas.vue'
// Vue.component('ninja_component', Ninjas);

new Vue({
    el: '#app',
    render: h => h(App)
});

new Vue({
    el: '#app2',
    render: h => h(App2)
});

new Vue({
    el: '#app3',
    render: h => h(App3)
});

new Vue({
    el: '#app4',
    render: h => h(App4)
});
