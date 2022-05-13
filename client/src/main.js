import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

import '@fortawesome/fontawesome-free/js/all.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'axios';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
