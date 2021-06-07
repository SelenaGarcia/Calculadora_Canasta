import Vue from 'vue'
import App from './App.vue'
import vueCustomElement from 'vue-custom-element'
import 'document-register-element/build/document-register-element'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
Vue.use(VueFormWizard)

Vue.use(vueCustomElement)

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.customElement('vue-widget', App)

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
