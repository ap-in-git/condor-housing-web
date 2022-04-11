import Vue from "vue";
import Vuex from "vuex";

import notificationState from "./notification";
import userState from "./user";
import productState from "./product";

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    notification: notificationState,
    user: userState,
    product: productState,
  },
});

export default store;
