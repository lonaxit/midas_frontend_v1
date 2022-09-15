import { createStore } from 'vuex'
// import axios from 'axios'

import auth from './modules/auth'
import SchemesProduct from './modules/schemes_product'
import Loan from './modules/loans'
import UserProfile from './modules/users'
export default createStore({

  modules: {
    auth,
    SchemesProduct,
    Loan,
    UserProfile
  }

})
