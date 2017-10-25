<<<<<<< HEAD
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {checkUser} from '@/api/auth'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
=======
import Vue from 'vue';
import App from './App';
import router from './router';
import { checkUser } from '@/api/auth';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

Vue.use(Buefy);

>>>>>>> 8e02593dfb08b79fd344fe4b4e0d7e7a6590572d
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  data: {
    user: null,
  },

  created() {
    checkUser(this.$root);
  },
});
