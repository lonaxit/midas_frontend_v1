import axios from 'axios'
const baseUrl ='https://midasapiv1-production.up.railway.app/'

const users = {

    state: {
        
        profileDetail: {},
        userDetail:{},
        usersList:[],
        loading:false
    },
    mutations: {
    LIST_USERS(state, users) {
            state.usersList = users;
      },
     SET_USER(state, user) {
         state.userDetail = user;
        },
     SET_PROFILE(state, profile) {
         state.profileDetail = profile;
        },
    },
    
    getters: {
        user_loader(state) {
            return state.loading
        },
        fullName(state) {
            return `${state.userDetail.last_name} ${state.userDetail.first_name}`
        },
        user_Detail(state) {
            return state.userDetail
        },
        profile_Detail(state) {
            return state.profileDetail
        },
        user_List(state) {
            return state.usersList
        }
      
    },
    actions: {
        
  
      async getUserDetail({commit},userid) {
     
          const res = await axios.get('api/v1/'+ userid +'/profile/')
            commit('SET_USER', res.data.user)
            commit('SET_PROFILE', res.data)
        },
        
        async fetchUsers({ commit }) {
            try {
                const response = await fetch('https://midasapiv1-production.up.railway.app/api/v1/list-profile/')
              const users = await response.json()
              commit('LIST_USERS', users)
            } catch (error) {
              console.error(error)
            }
          },
    
      // get list of users
      async getUsers({commit}) {
          const res = await axios.get('api/v1/list-profile/')
            commit('LIST_USERS', res.data)      
      },
        async newAccount(context,payload) {
            const res = await axios.post('auth/register/', payload)
        },
        async getUserByUsername(context,username) {
            const res = await axios.get('auth/get-user/' + username + '/')
            context.commit('SET_USER',res.data)
        },
        
      async updateProfile({commit},payload) {
        const res = await axios.put('api/v1/' + payload.profileID +'/profileupdate/',payload.data)
        },

    async updateAccount({commit},payload) {
            const res = await axios.put('api/v1/' + payload.userID +'/user-update/',payload.data)
            },
      
    //   fetch logged in user
        async Me({commit}) {
            const res = await axios.get('auth/me/')
            commit('SET_USER', res.data.user)
            commit('SET_PROFILE', res.data)
        },
        
        //Change user login details
        async changeLoginDetails({ commit },payload) {
            const res = await axios.put('auth/' +payload.userid+'/update-password/',payload)
        }
    },

}

export default users