import axios from 'axios'
const loan = {

  state: {
    loans: [],
    userLoans: [],
    loanDetail:[],
    loading: false,
    userActiveLoans: [],
    userInActiveLoans: [],
    loanBalances: [],
    loanBalanceDetail:[],
    
},
mutations: {
  LIST_LOANS(state, loansList) {
        state.loans = loansList;
        state.loading = true
  },
  USER_LOANS(state, userLoans) {
    state.userLoans = userLoans;
    state.loading=true
  },

  LOAN_DETAIL(state, loandetail) {
    state.loanDetail = loandetail;
    state.loading = true
  },
  USER_ACTIVELOANS(state, data) {
    state.userActiveLoans = data;
    state.loading = true
  },

  USER_INACTIVELOANS(state, data) {
    state.userInActiveLoans = data;
    state.loading = true;
  },

  LOAN_BALANCES(state,data) {
    state.loanBalances = data;
    state.loading = true;
  },
  LOAN_BALANCE_DETAIL(state, payload) {
    state.loanBalanceDetail = payload;
    state.loading = true
  },
  
  },


  getters: {
    loan_balances(state) {
      return state.loanBalances;
    },
    single_loan_balance(state) {
      return state.loanBalanceDetail;
    },
    loan_Detail(state) {
      return state.loanDetail;
    },

    userTotalLoans(state) {
      return state.userLoans.length
    },
    activeUserLoans(state) {
      return state.userLoans.filter( loan =>loan.active ==true)
    },

    inactiveUserLoans(state) {
      return state.userLoans.filter( loan => loan.active == false)
    },
    totalBalance(state, getters) {
      
      var result = getters.activeUserLoans.reduce(function (accumulator, obj) {
        return accumulator + obj.total_balance;
      }, 0);
      return result
    
  },
  riskExposure(state, getters) {
      
      const result = getters.totalBalance
      if (result >= 5000000) {
        return "Highly Risky"
      } else if(result >= 2500000 && result <= 4999999){
        return "Risky"
      } else if(result >= 1500000 && result <= 2499999){
        return "Moderate"
      } else if(result >= 1 && result <= 1499999){
        return "Low"
      } else {
        return "Good"
      }
    },
    loan_loader(state) {
    return state.loading
    },
    user_Loans(state) {
      return state.userLoans
    },
    all_Loans(state) {
      return state.loans
    },
    
},
actions: {
 
// get all loans
async getLoans(context){

      const res = await axios.get('api/v1/loans/')
      context.commit('LIST_LOANS', res.data)
      },

  // get loans by a user
  async userLoans(context,userid) {
      const res = await axios.get('api/v1/' + userid + '/loans/')
      context.commit('USER_LOANS', res.data)     
  },

   // get loan detail
   async getLoanDetail(context,loanid) {
        const res = await axios.get('api/v1/loan/' + loanid + '/')  
        context.commit('LOAN_DETAIL', res.data)
  },

  // Delete a loan  
  async DeleteLoan(context,loanid) {
      const res = await axios.delete('api/v1/loan/' + loanid + '/')  
  },

  
  async ListLoanBalances(context, payload) {
    const res = await axios.get('api/v1/balances/' + payload.start_date + '/' + payload.end_date + '/')
    context.commit('LOAN_BALANCES', res.data)
  },
  
    // get individual loan balance detail
    async individualLoanBalanceDetail(context,loanid) {
      const res = await axios.get('api/v1/loan-balance/' + loanid + '/')  
      context.commit('LOAN_BALANCE_DETAIL', res.data)
},

},

}
export default loan