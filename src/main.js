import { createApp } from 'vue';
import { createRouter } from 'vue-router';

import App from './App.vue';

const router = createRouter({
  history: createWebHistory,
  routes: [],
});
const app = createApp(App);

app.mount('#app');
