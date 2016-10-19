require('es6-promise').polyfill()
import { app } from './main'

app.$mount('#app')
// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.
//store.replaceState(window.__INITIAL_STATE__)

