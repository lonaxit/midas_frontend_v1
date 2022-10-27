<template>
  <div class="grid">
		<div class="col-12">
            <div class="card  p-fluid">
            <h5>Update Saving Deposit</h5>
            <form @submit.prevent="updateSavingDeposit">
				<div class="p-fluid formgrid grid">
                  

					<div class="field col-12 md:col-4">
						<label for="credit">Credit</label>
						<InputText id="credit" type="number" step="0.01" v-model="credit"/>
					</div>

					<div class="field col-12 md:col-4">
						<label for="debit">Debit</label>
						<InputText id="debit" type="number" step="0.01" v-model="debit"/>
					</div>

                    <div class="field col-12 md:col-4">
						<label for="debit">Transaction Code</label>
						<InputText id="transaction_code" type="number" disabled step="0.01" v-model="transaction_code"/>
					</div>
	
                    <div class="field col-12 md:col-6">
						<label for="transactiondate">Date</label>
                       <InputText id="transactiondate" type="date" v-model="transactiondate"/>
					</div>

                      <div class="field col-12 md:col-6">
						<label for="narration">Narration</label>
                       <InputText id="narration" type="text" v-model="narration"/>
					</div>
					
				</div>
                  <SubmitButton>
                    <template v-slot:action>
                        <button>Update Deposit</button>
                    </template>
                </SubmitButton>
                </form>
        </div>
		</div>
	</div>
<div>
 
</div>
</template>

<script>
import axios from 'axios'
import SubmitButton from '@/components/midas/ReusableComponents/submitUpdateButton.vue'
// import DatePicker from '@jobinsjp/vue3-datepicker';
// import '@jobinsjp/vue3-datepicker/index.css';
import {mapGetters,mapActions} from 'vuex'
export default {

    data(){
        return{
        
            narration:null,
            debit:null,
            credit:null,
           
            transactiondate:null,
            transaction_code:null,

            payload:{
                id:null,
                data:null
            }
        }
    },
    components:{
    SubmitButton,

},
    methods: {

     ...mapActions(['DetailSaving','EditSavingDeposit']),

         updateSavingDeposit(){
            
             
            if(!this.credit && !this.debit){
                    this.$notify({
                   text: "Provide  a valid value for credit or debit",
                   duration:5000,
                   type:'error',
                        });
         
            }else if(this.credit && this.debit){
                     this.$notify({
                     text: "Add either a credit or debit",
                     duration:5000,
                     type:'error',
                        });
            }else if(!this.transactiondate){

                    this.$notify({
                    text: "Please choose a valid date",
                    duration:5000,
                    type:'error',
                        });
                
            }else if(!this.narration){

                    this.$notify({
                    text: "Please provide a transaction narration",
                    duration:5000,
                    type:'error',
                        });
                
            }else{

                const formData = {
                 
                credit:this.credit,
                debit:this.debit,
                narration:this.narration,
                transaction_date:this.transactiondate,
                transaction_code:this.transaction_code
                }

                this.payload.id = this.$route.params.id
                this.payload.data = formData

                this.EditSavingDeposit(this.payload).then(()=>{

                    this.$router.push({name:'user-saving',params:{userid:this.user_savingDetail.user_id}})
                       this.$notify({
                        text: "Item Updated Successfully",
                        duration:5000,
                        type:'success',
                        });
                }).catch((err)=>{

                        this.$notify({
                        text: "An Error Has Occurred!",
                        duration:5000,
                        type:'error',
                        });
                })


                
            }
                
        }
    },
    computed: {
        ...mapGetters(['user_savingDetail'])
 
    },

    created(){
    
    this.DetailSaving(this.$route.params.id)
    .then(() =>{

      this.credit = this.user_savingDetail.credit
      this.debit = this.user_savingDetail.debit
      this.narration = this.user_savingDetail.narration
      this.transactiondate = this.user_savingDetail.transaction_date
      this.transaction_code = this.user_savingDetail.transaction_code

    }).catch(err=>{
        alert(err.response.data.detail)
    })

  

    },
  


}
</script>

<style scoped>

</style>