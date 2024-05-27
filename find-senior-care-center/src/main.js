/* Set up using Vue 3 */
import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import { createNaverMap } from 'vue3-naver-maps'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(fas);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store)
app.use(createNaverMap, {
  clientId: process.env.VUE_APP_CLIENT_ID,
  category: "ncp"
})

app.mount('#app')