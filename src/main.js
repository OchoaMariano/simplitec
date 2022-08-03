import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueStripeMenu from 'vue-stripe-menu'
import { createI18n } from 'vue-i18n'
import './assets/main.css'

const i18n = createI18n({
  // something vue-i18n options here ...
  locale: 'Esp',
  fallbackLocale: 'Esp',
  messages: {
    Esp: {
        "about": {
            "title": 'test'
        }
    },
    Eng: {
        "about": {
            "title": 'test/en'
        }
    }
  }

})


const app = createApp(App)

app.use(router)
app.use(VueStripeMenu)
app.use(i18n)


app.mount('#app')
