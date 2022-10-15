<template>
  <div class="grid">
		<div class="col-12">
            <div class="card  p-fluid">
            <h5>Loan Transaction</h5>
            <form @submit.prevent="createDeduction">
				<div class="p-fluid formgrid grid">
                  

					<div class="field col-12 md:col-6">
						<label for="credit">Credit</label>
						<InputText id="credit" type="number" step="0.01" v-model="credit"/>
					</div>

					<div class="field col-12 md:col-6">
						<label for="debit">Debit</label>
						<InputText id="debit" type="number" step="0.01" v-model="debit"/>
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
                        <button>Create Transaction</button>
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

export default {

    data(){
        return{
            narration:null,
            debit:null,
            credit:null,
            deduction:null,
            transactiondate:null,
       
        }
    },
    components:{
    SubmitButton,
  
},
    methods: {

        createDeduction(){
            
             
            if(!this.credit && !this.debit){
               this.$toast.add({severity: 'error', detail:'Please provide a valid value for credit or debit', life: 5000});
            }else if(this.credit && this.debit){
                 this.$toast.add({severity: 'error', detail:'Transaction can only be credit or debit not both', life: 5000});
            }else if(!this.transactiondate){
                   this.$toast.add({severity: 'error', detail:'Please select a valid date', life: 5000});
            }else if(!this.narration){
                this.$toast.add({severity: 'error', detail:'Please enter a transaction description', life: 5000});
            }else{

                const formData = {
                 
                credit:this.credit,
                debit:this.debit,
                narration:this.narration,
                transaction_date:this.transactiondate,
                transaction_code:Math.floor(1000000 + Math.random() * 9000000)
                }
                const newTransaction = async () =>{
                try{
                  
                const res = await axios.post('api/v1/deduction/'+this.$route.params.loan_Id + '/create/',formData)
                
                this.credit=null
                this.debit=null
                this.transaction_date=null
                this.narration=null
                this.$router.push('/'+this.$route.params.loan_Id +'/loan')
                this.$toast.add({severity: 'success', detail:'Item Successfully Created', life: 5000});
                } catch(err){
                //    console.log(err)
                this.$toast.add({severity: 'error', detail:'Something went wrong', life: 5000});
                }
                }
                newTransaction()
            }
                
        }
    },
    computed: {
  },
}
</script>

<style scoped>

</style>