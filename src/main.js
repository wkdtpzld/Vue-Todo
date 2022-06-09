import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store/store'
import Vuex from 'vuex'

createApp(App).use(Vuex).use(store).mount('#app')
