import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";

import Wrapper from "@/components/Wrapper";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("MyWrapper", Wrapper);

app.mount("#app");
