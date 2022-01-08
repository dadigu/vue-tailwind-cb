import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App).component("fa", FontAwesomeIcon).mount("#app");
