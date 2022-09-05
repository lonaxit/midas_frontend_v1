import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
    
  state: {
    //user object
    user: {
      token: '',
      isAuthenticated: false,
    },
    role:false,
    username: "",
    schemes:[],
  },

  getters: {
  },

  mutations: {
    LIST_SCHEMES(state, schemesList) {
      state.schemes = schemesList;
    },
    //initialize store 
    initializeStore(state) {

      if (localStorage.getItem('token')) {
        state.user.token = localStorage.getItem('token')
        state.user.isAuthenticated = true 
      }else {
        state.user.token = ''
        state.user.isAuthenticated = false
      }
    },

    initializeStatus(state) {
      if (localStorage.getItem('myStatus')) {
        const myStatus = localStorage.getItem('myStatus')
        if (myStatus == 'true') {
           state.role = true
        } else {
          state.role =false
         }
      }
    },
    removeStatus(state) {
      state.role = false
    },

    setToken(state, token) {
      state.user.token = token
      state.user.isAuthenticated = true
    },

    removeToken(state) {
      state.user.token = ''
      state.user.isAuthenticated = false
    },
    setStatus(state,role) {
      state.role = role
    },
    setUsername(state, username) {
      state.username = username
    }
  },
  actions: {

    async getSchemes(context) {

      try {
        const res = await axios.get('api/v1/schemes/')
          context.commit('LIST_SCHEMES', res.data)
        }
        catch (error) {
            console.log(error)
        }
    },

    // ==

    // loadSchemes({ commit }) {
      
    //   const getSchemes = async () =>{
    //     try{
    //         const res = await axios.get('api/v1/schemes/')
    //         this.schemes =res.data
    //     } catch(err){
    //         console.log(err)
    //     }
    // }

  //   UserStatus: async (context) => {
  //     await axios.get('auth/me/')
  //     .then(res =>{
  //       if (res.data.user.is_employee || res.data.user.is_account || res.data.user.is_normal) {
  //         const loggedinStatus = true
         
  //         localStorage.setItem('myStatus',loggedinStatus)
  //         context.commit('setStatus', loggedinStatus)
  //         console.log('true call me')
  //       } else {
  //         const loggedinStatus = false
  //         localStorage.setItem('myStatus',loggedinStatus)
  //         context.commit('setStatus', loggedinStatus)
  //         console.log('false call me')
  //         }
  //     })
  //     .catch(err =>{
  //         console.log(err)
  //     })
    
  //  }

    
    
    // findUserStatus: context => {

    //     // use an asynchronous task
  
    //     setTimeout(() => {
    //       context.commit('reducePrice')
    //     },3000)
    //   }
  },

  modules: {
  }
})
