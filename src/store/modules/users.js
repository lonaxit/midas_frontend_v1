import axios from 'axios'

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
            state.loading = true
      },
     SET_USER(state, user) {
         state.userDetail = user;
         state.loading = true
        },
     SET_PROFILE(state, profile) {
         state.profileDetail = profile;
         state.loading = true
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
      
    },
    actions: {
        
  
      async getUserDetail(context,userid) {
     
          const res = await axios.get('api/v1/'+ userid +'/profile/')
            context.commit('SET_USER', res.data.user)
            context.commit('SET_PROFILE', res.data)
      },
    
      // get list of products
      async getUsers(context) {
    
          const res = await axios.get('api/v1/list-profile/')
            context.commit('LIST_USERS', res.data)      
      },
        async newAccount(context,payload) {
            const res = await axios.post('auth/register/',payload)
        },
        async getUserByUsername(context,username) {
            const res = await axios.get('auth/get-user/' + username + '/')
            context.commit('SET_USER',res.data)
        },
        
      async updateProfile(context,payload) {
        const res = await axios.put('api/v1/' + payload.profileID +'/profile/',payload.data)
  }
    },

}

export default users