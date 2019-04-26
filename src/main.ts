import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./registerServiceWorker";
import { createProvider } from "./vue-apollo";

import Buefy from "buefy";
import VeeValidate from "vee-validate";

// Styling
import "buefy/dist/buefy.css";
import "./assets/css/bulma-helpers.min.css";

Vue.use(Buefy);
Vue.use(VeeValidate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount("#app");
