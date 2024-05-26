/* Set up using Vue 3 */
import { createApp } from 'vue'
import store from './store'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(faLocationArrow)

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store)

app.mount('#app')