import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';


const app = createApp(App);

// // app.component('default-layout', DashboardLayout);
// app.component('empty-layout', EmptyLayout);

// app.use(router);
app.mount('#app');
