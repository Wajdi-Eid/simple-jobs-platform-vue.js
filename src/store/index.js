// Create a new store instance.
import { createStore } from 'vuex'
import main from './../modules/main/store/index'
import companies from './../modules/companies/store/index'
const store = createStore({
    state () {
      return {
      
      }
    },
  
    //mutations
    mutations: {
      
    
    },
  
     
   //actions
  actions :{
   
  
    },//end of actions
  
  
    getters :{
      
      
    },
    modules :{
      main,
      companies
    }
  });
  export default store;
  