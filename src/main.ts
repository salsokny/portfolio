import { createApp } from "vue";
import App from "./App.vue";
import { Button, Card } from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";
import "../styles.css";
import "../script.js";

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

const app = createApp(App);
app.use(Button).use(Card).mount("#app");

window.scrollTo({ top: 0, left: 0, behavior: "instant" });
