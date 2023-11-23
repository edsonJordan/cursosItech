import './assets/main.css'
import store from './store'; // Asegúrate de importar la configuración de Vuex


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Loading from './utils/loading.vue';



import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon  } from '@fortawesome/vue-fontawesome'
// import { fas  } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// Toast
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";


const app = createApp(App)
library.add(fas, far, fab)

app.component('Loading', Loading);  
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.use(Toast/* , { position: POSITION.BOTTOM_LEFT} */);
app.use(store);


/* app.use(vue3GoogleLogin, {
  clientId: '1064089967190-l3120u5v9vtt01u08c4ft9etrl5g4rem.apps.googleusercontent.com'
}) */


app.mount('#app')

