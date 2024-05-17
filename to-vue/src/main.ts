import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App)

library.add(fas, far, fab);

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store).mount('#app')
