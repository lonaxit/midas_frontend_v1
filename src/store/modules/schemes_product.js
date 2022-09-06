import axios from 'axios'
const schemes = {

  state: {
    schemes:[],
},
mutations: {
    LIST_SCHEMES(state, schemesList) {
        state.schemes = schemesList;
    },
  },
  getters: {
  
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
},

}
export default schemes