import "./main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from './i18n';

const app = createApp(App)
  .use(i18n)
  .mount('#app');
app.use(router);

