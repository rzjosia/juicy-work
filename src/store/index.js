import Vue from "vue";
import Vuex from "vuex";
import * as user from "./modules/users";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {user},
});
