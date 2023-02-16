const auth = {

    state: {
        //user object
        user: {
          token: '',
          isAuthenticated: false,
        },
    normal: false,
    staff: false,
    employee:false,
    username: '',
       
    },
  getters: {
    getNormal(state) {
      return state.normal
    },
    getStaff(state) {
      return state.staff
    },
    getEmployee(state) {
      return state.employee
    },
  
    getUsername(state) {
      return state.username
    },
    getAuthentication(state) {
      return state.user.isAuthenticated
    }
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
      
      setNormal(state, payload) {
        state.normal = payload
      },
      setStaff(state, payload) {
        state.staff = payload
      },
      setEmployee(state, payload) {
        state.employee = payload
      },
   
      setUsername(state, payload) {
        state.username = payload
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
      setAuth(state) {
        state.user.isAuthenticated = true
      }
     
  },
  actions: {
      
    }

}

export default auth