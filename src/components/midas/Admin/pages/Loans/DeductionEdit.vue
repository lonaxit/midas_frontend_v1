<template>
  <div class="grid">
		<div class="col-12">
            <div class="card  p-fluid">
            <h5>Update Loan Deduction</h5>
            <form @submit.prevent="updateDeduction">
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
                        <button>Update Deduction</button>
                    </template>
                </SubmitButton>
                </form>
        </div>
		</div>
	</div>

</template>

<script>
import axios from 'axios'
import SubmitButton from '@/components/midas/ReusableComponents/submitUpdateButton.vue'
// import DatePicker from '@jobinsjp/vue3-datepicker';
// import '@jobinsjp/vue3-datepicker/index.css';
import {mapGetters} from 'vuex'
export default {

    data(){
        return{
        
            narration:null,
            debit:null,
            credit:null,
            deduction:null,
            transactiondate:null,
            transaction_code:null
        }
    },
    components:{
    SubmitButton,

},
    methods: {

     
         updateDeduction(){
            
             
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

                const editTransaction = async () =>{
                try{
                  
                const res = await axios.put('api/v1/deduction/'+this.$route.params.deductionId + '/',formData)
                
                this.credit=null
                this.debit=null
                this.transaction_date=null
                this.narration=null
                this.$router.push('/'+this.deduction_detail.loan_id +'/loan')
                    this.$notify({
                        text: "Item Updated Successfully",
                        duration:5000,
                        type:'success',
                        });
              
                } catch(err){
                //    console.log(err)
                    this.$notify({
                    text: "Unable To Delete Item",
                    duration:5000,
                        type:'error',
                        });
                }
                }
                editTransaction()
            }
                
        }
    },
    computed: {
        ...mapGetters(['deduction_detail'])
 
    },

    created(){
    
    this.$store.dispatch('getDeductionDetail',this.$route.params.deductionId)
    .then(() =>{
   
      this.credit = this.deduction_detail.credit
      this.debit = this.deduction_detail.debit
      this.narration = this.deduction_detail.narration
      this.transactiondate = this.deduction_detail.transaction_date
      this.transaction_code = this.deduction_detail.transaction_code
    }).catch(err=>{
        alert(err.response.data.detail)
    })

  

    },
  


}
</script>

<style scoped>

</style>