import { createStore } from "vuex";

export default createStore({

  state: {

    searchInput :"",
    reklamOne: "Reklam",
    reklamTwo: "Reklam",
    reklamThree: "Reklam",
    bookData: [], // app.vue 
   
  },

  getters:{
    justWeb: state =>{
      return state.bookData.filter(item => item.year === 1600)
    },
  },

  mutations: {},
  actions: {},
  modules: {},
});
