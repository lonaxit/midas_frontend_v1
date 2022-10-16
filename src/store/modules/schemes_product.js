import axios from 'axios'
const schemes = {

  state: {
    schemes: [],
    products: [],
    loading: false,
    productDetail:null
},
mutations: {
    LIST_SCHEMES(state, schemesList) {
    state.schemes = schemesList;
    state.loading = true
  },
  LIST_PRODUCTS(state, productsList) {
    state.products = productsList;
    state.loading = true
},
  PRODUCT_DETAIL(state, data) {
    state.productDetail = data;
    state.loading = true;
}
  
  },
  getters: {
    allPrducts(state) {
      return state.products;
    },
    products_loader(state) {
      return state.loading;
    },
    product_detail(state) {
      return state.productDetail;
    },
    schemes(state) {
      return state.schemes;
    }

  
},
actions: {
    
async getSchemes(context) {
      const res = await axios.get('api/v1/schemes/')
        context.commit('LIST_SCHEMES', res.data)
  },


  // get list of products
  async getProducts(context) {

      const res = await axios.get('api/v1/products/')
        context.commit('LIST_PRODUCTS', res.data) 
  },

  async getProductDetail(context,id) {

    const res = await axios.get('api/v1/product-detail/' + id +'/')
      context.commit('PRODUCT_DETAIL', res.data) 
}




},

}
export default schemes