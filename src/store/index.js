import { createStore } from "vuex";

export default createStore({

    state: {

      searchInput :"",
      reklamOne: "",
      reklamTwo: "",
      reklamThree: "",
      bookData: [], // from app.vue 
    
    },

  getters:{
    justWeb: state =>{
      return state.bookData.filter(item => item.category === "Web")
    },
    justKronik: state =>{
      return state.bookData.filter(item => item.category === "Kronik")
    },
  },

  mutations: {},
  actions: {},
  modules: {},
});
