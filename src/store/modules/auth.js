const auth = {

    state: {
        //user object
        user: {
          token: '',
          isAuthenticated: false,
        },
        role: false,
        username: "",
       
    },
    getters: {
    },
    mutations: {
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
      initializeUsername(state) {
        if (localStorage.getItem('username'))
        {
        state.username = localStorage.getItem('username')
        }
    },
    removeUsername(state) {
      state.username = ""
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
      
    }

}

export default auth