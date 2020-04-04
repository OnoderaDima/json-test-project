import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {

    },
    mutations: {
        updateH1Content(state, h1Content) {
            state.h1Content = h1Content;
        },

        updateCols(state, cols) {
            state.cols = cols;
        },

        updateData(state, data) {
            state.data = data;
        },
    },
    state: {
        PageTemplate: "",
        h1Content: "",
        cols: [],
        data: [],
    },
    getters: {
        getH1Content(state) {
            return state.h1Content;
        },

        getCols(state) {
            return state.cols;
        },

        getData(state) {
            return state.data;
        },
    },
})