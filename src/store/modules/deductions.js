import axios from 'axios'
const deductions = {

  state: {
    deductions: [],
    deductionDetail:null,
        loading: false,
    activeDeductions: [],
    ippisDeductionDetail:null
    
},
mutations: {
    
  LIST_DEDUCTIONS(state, deductions) {
        state.deductions = deductions;
        state.loading = true
  },

  DEDUCTION_DETAIL(state, data) {
    state.deductionDetail = data;
    state.loading = true;
    },
    ACTIVE_IPPISDEDUCTIONS(state, data) {
        state.activeDeductions = data;
      state.loading = true;
  },
  IPPIS_MASTER_DEDUCTION_DETAIL(state, data) {

    state.ippisDeductionDetail = data;
    state.loading = true;
    }

  
    },
  
    getters: {
      
    deductions_list(state) {
        return state.deductions;
        },
    deduction_detail(state) {
      return state.deductionDetail;
        },
        activeMasterDeductions(state) {
          return state.activeDeductions;
        },
        ippis_deduction_loader(state) {
          return state.loading;
      },
      masterdeductionDetail(state) {
        return state.ippisDeductionDetail;
        }

},
actions: {

      // Delete a loan  
  async deleteDeduction(context,deductionid) {
      const res = await axios.delete('api/v1/deduction/' + deductionid + '/')        

  },
    // Delete ippis master deduction
  async deleteIPPISDeduction(context,id) {
      const res = await axios.delete('api/v1/masterdeduction/' + id + '/')        
  },
  //Post Bulk Deduction 
  async postBulkDeduction() {
  const res = await axios.post('api/v1/bulk-deduction/')        
      },
 
   // get deduction detail
   async getDeductionDetail(context,deductionid) {

    const res = await axios.get('api/v1/deduction/' + deductionid + '/')  
    context.commit('DEDUCTION_DETAIL', res.data)
    },
   
  //  list IPPIS Master Deduction
    async listMasterDeduction(context) {

        const res = await axios.get('api/v1/masterdeduction/list/')
        // return res.data
        let activeMaster = res.data.filter(masterDeduction =>masterDeduction.active ==true)
        context.commit('ACTIVE_IPPISDEDUCTIONS', activeMaster)
  },
    
    // master dedutcion detail

  async ippisMasterDeductionDetail(context,id) {
    const res = await axios.get('api/v1/masterdeduction/' + id + '/')
      context.commit('IPPIS_MASTER_DEDUCTION_DETAIL',res.data)
    }

},

}
export default deductions