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
        }
       
      
    },
    actions: {
        
    // async searchUser(context,userid) {
    
    //     try {
    //       const res = await axios.get('api/v1/' + userid +'/profile/')
    //         context.commit('GET_USER', res.data)
    //       }
    //     catch(err) {
        
    //       alert(err)
    //       console.log(err)
              
    //       }
    //   },
      async getUserDetail(context,userid) {
     
          const res = await axios.get('api/v1/'+ userid +'/profile/')
            context.commit('SET_USER', res.data.user)
            context.commit('SET_PROFILE', res.data)
      },
    
      // get list of products
      async getUsers(context) {
    
          const res = await axios.get('api/v1/list-profile/')
            context.commit('LIST_USERS', res.data)      
      }
    
    
    
    },

}

export default users