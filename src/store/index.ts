import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

import getDefaultState from "./state";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: "vuejs-web-app"
});

export default new Vuex.Store({
  state: getDefaultState(),
  mutations,
  actions,
  plugins: [vuexLocal.plugin]
});

/**
 * Delete the localstorage entry which the vuex-persist plugin uses to persist vuex upon reload
 */
export function resetLocalStorage() {
  localStorage.removeItem("vuejs-web-app");
}
