import axios from 'axios'
const schemes = {

  state: {
    schemes: [],
    products:[]
},
mutations: {
    LIST_SCHEMES(state, schemesList) {
        state.schemes = schemesList;
  },
  LIST_PRODUCTS(state, productsList) {
    state.products = productsList;
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
    catch(err) {
      // if (err.response) {
      //   this.$toast.add({severity: 'error', detail:err.response.data, life: 5000});
      // } else if (err.request) {
      //   this.$toast.add({severity: 'error', detail:err.request, life: 5000}); 
      // }else{
      //   this.$toast.add({severity: 'error', detail:err.message, life: 5000}); 
      // }
      console.log(err)
          
      }
  },


  // get list of products
  async getProducts(context) {

    try {
      const res = await axios.get('api/v1/products/')
        context.commit('LIST_PRODUCTS', res.data)
      }
      catch (err) {
        // if (err.response) {
        //   this.$toast.add({severity: 'error', detail:err.response.data, life: 5000});
        // } else if (err.request) {
        //   this.$toast.add({severity: 'error', detail:err.request, life: 5000}); 
        // }else{
        //   this.$toast.add({severity: 'error', detail:err.message, life: 5000}); 
        // }
        console.log(err)
      }
  }



},

}
export default schemes