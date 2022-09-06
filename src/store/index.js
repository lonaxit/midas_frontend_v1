import { createStore } from 'vuex'
// import axios from 'axios'

import auth from './modules/auth'
import SchemesProduct from './modules/schemes_product'
export default createStore({
  modules: {
    auth,
    SchemesProduct,
  }

})
