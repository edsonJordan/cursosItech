  import { createStore } from 'vuex';

  export default createStore({
    state: {
      isLogin: false, 
      isLoading: false, 
      isData:false,
    },
    mutations: {
      SET_IS_LOGIN(state, value) {
        state.isLogin = value;
      },
      SET_IS_LOADING(state, value) {
        state.isLoading = value;
      },
      SET_IS_DATA(state, value) {
        state.isData = value;
      },
    },
    getters: {
      isData: (state) => state.isData,
    },
    actions: {
      showLoading({ commit }) {
        commit('SET_IS_LOADING', true);
      },
      hideLoading({ commit }) {
        commit('SET_IS_LOADING', false);
      },
      
      // Otras acciones que puedas necesitar
    },
  });