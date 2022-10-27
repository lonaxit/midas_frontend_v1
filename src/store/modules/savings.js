import axios from "axios";

const saving = {

    state: {
        masterSavings: [],
        userSavings: [],
        userSavingDetail:null,
        masterSavingDetail: null,
        activeMasterSaving: [],
        openingDepositBalance:null
    
    },

    mutations: {
        MASTER_SAVINGS(state, payload) {
            state.masterSavings = payload;
        },
        USER_SAVINGS(state, payload) {
            state.userSavings = payload;
        },
        USER_SAVING_DETAIL(state, payload) {
            state.userSavingDetail = payload;
        },
        MASTER_SAVING_DETAIL(state, payload) {
            state.masterSavingDetail = payload;
        },
        ACTIVE_MASTER_SAVING(state, payload) {
            state.activeMasterSaving = payload;
        },
        OPENING_DEPOSIT_BALANCE(state, payload) {
            state.openingDepositBalance = payload;
        }
    },

    getters: {

        mastersaving(state) {

            return state.masterSavings;
        },
        user_savings(state) {

            return state.userSavings;
        },
        user_savingDetail(state) {

            return state.userSavingDetail;
        },
        master_savingDetail(state) {

            return state.masterSavingDetail;
        },
        active_MasterSaving(state) {

            return state.activeMasterSaving;
        },
        deposit_openingBal(state) {

            return state.openingDepositBalance;
        }
      
    },
    
    actions: {

         //  list Master Saving
    async listActiveMasterSaving(context) {

        const res = await axios.get('api/v1/mastersaving/list/')
      
        let activeMaster = res.data.filter(masterDeduction =>masterDeduction.active ==true)
        context.commit('ACTIVE_MASTER_SAVING', activeMaster)
        },

        async createSavingDeduction(context) {
            const res = await axios.post('api/v1/bulk-savingdeduction/')
        },

        async MasterSavingDetail(context, id) {
            const res = await axios.get('api/v1/mastersaving/' + id + '/')
            context.commit('MASTER_SAVING_DETAIL',res.data)
        },
        async UpdateMasterSaving(context, payload) {
            const res = await axios.put('api/v1/mastersaving/'+payload.id+'/',payload.data)
        },
        async DeleteMasterSaving(context, id) {
            const res = await axios.delete('api/v1/mastersaving/'+id+'/')
        },
        async Deposit(context, payload) {
            const res = await axios.post('api/v1/saving-create/'+payload.userid +'/', payload.data)
        },

        async UserSavingsByUserId(context, userid) {
            const res = await axios.get('api/v1/' + userid + '/user-saving/')
            context.commit('USER_SAVINGS',res.data)
        },

        async DetailSaving(context, id) {
            const res = await axios.get('api/v1/' + id + '/saving/')
            context.commit('USER_SAVING_DETAIL',res.data)
        },
        async EditSavingDeposit(context, payload) {
            const res = await axios.put('api/v1/' + payload.id + '/saving/',payload.data)
        },
        async DeleteSaving(context,id) {
            const res = await axios.delete('api/v1/' + id + '/saving/')
        },
        async OpeningBalance(context, payload) {
            const res = await axios.get('api/v1/' + payload.userid + '/' + payload.start_date + '/deposit-opening/balance/')
            context.commit('OPENING_DEPOSIT_BALANCE', res.data)
        },
        async userDepositByDate(context, payload) {
            const res = await axios.get('api/v1/' + payload.userid + '/' + payload.start_date + '/' + payload.end_date + '/mystatement/')
            context.commit('USER_SAVINGS',res.data)
        }
        
    },
}

export default saving