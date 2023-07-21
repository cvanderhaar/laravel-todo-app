import './bootstrap';
import { createApp } from 'vue';
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from './components/App.vue'

const app = createApp({});

Vue.use(Vuetify)

import ExampleComponent from './components/ExampleComponent.vue';
app.component('example-component', ExampleComponent);

const app = new Vue({
    el: '#app',
    components: { App },
    vuetify: new Vuetify(),
});

app.mount('#app');
