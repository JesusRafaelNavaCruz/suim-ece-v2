import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import router from './router'; 
import "@/assets/styles.scss";

// PrimeVue Components
import Button from "primevue/button";

// PrimeVue Imports
import 'primevue/resources/themes/saga-green/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css'; 
import "/node_modules/primeflex/primeflex.css";

// Remix Icons Imports
import 'remixicon/fonts/remixicon.css'


const app = createApp(App);
app.use(PrimeVue);

app.component('Button', Button);

app.use(router);
app.mount("#app");
