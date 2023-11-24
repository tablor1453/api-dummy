import { createApp } from "vue";
import router from "./src/router";
import axios from "./src/plugins/axios";
import { createPinia } from "pinia";
import App from "./src/App.vue";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.provide(axios);

app.mount('#app');
