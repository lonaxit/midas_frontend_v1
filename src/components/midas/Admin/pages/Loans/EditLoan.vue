<template>
  <div class="grid">
		<div class="col-12">
            <div class="card  p-fluid">
            <h5>Update Loan</h5>
            <form @submit.prevent="updateLoan">
				<div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-3">
						<label for="userid">UserID</label>
						<InputText id="userid" type="number" v-model="userid"/>
					</div>

					<div class="field col-12 md:col-3">
						<label for="amount">Requested Amount</label>
						<InputText id="amount" type="number" v-model="amount"/>
					</div>

					<div class="field col-12 md:col-3">
						<label for="approved">Approved Amount</label>
						<InputText id="approved" type="number" v-model="approved"/>
					</div>

                    	<div class="field col-12 md:col-3">
						<label for="deduction">Deduction</label>
						<InputText id="deduction" type="number" v-model="deduction"/>
					</div>

                    <div class="field col-12 md:col-3">
						<label for="loandate">Loan Date</label>
                  
                       <InputText id="loandate" type="date" v-model="loandate"/>
					</div>

					<div class="field col-12 md:col-3">
						<label for="startdate">Start Date</label>
                         <InputText id="startdate" type="date" v-model="startdate"/>
					</div>

                    <div class="field col-12 md:col-3">
						<label for="enddate">End Date</label>
                        <InputText id="enddate" type="date" v-model="enddate"/>
                        <!-- <date-picker v-model:value="enddate"></date-picker> -->
					</div>

                   

					<div class="field col-12 md:col-3">
						<label for="tenor">Tenor</label>
						<InputText id="tenor" type="number" v-model="tenor"/>
					</div>
					<div class="field col-12 md:col-4">
						<label for="netpay">Net Pay</label>
						<InputText id="netpay" type="number" v-model="netpay"/>
					</div>
                    <div class="field col-12 md:col-4">
						<label for="netpay">Transaction Code</label>
						<InputText id="code" type="number" Disabled v-model="transaction_code"/>
					</div>
					<div class="field col-12 md:col-4">
						<label for="products">Products</label>
						<Dropdown id="products" v-model="selectedProduct" :options="allPrducts" optionLabel="name" placeholder="Select One"></Dropdown>
					</div>
				</div>

                  <SubmitButton>
                    <template v-slot:action>
                        <button>Update Loan</button>
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
        
            selectedProduct:[],
            product_id:null,
            enddate:null,
            amount:null,
            approved:null,
            deduction:null,
            loandate:null,
            startdate:null,
            tenor:null,
            netpay:null,
            userid:null,
            transaction_code:null
        }
    },
    components:{
    SubmitButton,
    // DatePicker
},
    methods: {

     
        updateLoan(){
            
            // initialize the errors array  
            if(this.amount == null || this.amount==0 && this.approved == null || this.approved == 0 && this.deduction == null || this.deduction==0 && this.tenor == null || this.tenor==0 && this.netpay== null || this.netpay==0){
               this.$toast.add({severity: 'error', detail:'Please provide a valid value', life: 5000});
            }else if(this.selectedProduct.length==0){
                   this.$toast.add({severity: 'error', detail:'Please select a product', life: 5000});
            }else if(this.enddate==null || this.startdate==null || this.loandate==null){
                   this.$toast.add({severity: 'error', detail:'Please select a valid date', life: 5000});
            }else{
               

                const formData = {
                 
                end_date:this.enddate,
                applied_amount:this.amount,
                approved_amount:this.approved,
                monthly_deduction:this.deduction,
                loan_date:this.loandate,
                start_date:this.startdate,
                tenor:this.tenor,
                net_pay:this.netpay,
                product:this.selectedProduct.id,
                owner:this.userid,
                 transaction_code:this.transaction_code
                }
                const editLoan = async () =>{
                try{
                const res = await axios.put('api/v1/loan/' + this.$route.params.loanId + '/',formData)
                this.$toast.add({severity: 'success', detail:'Item Successfully Updated', life: 5000});
             
                this.enddate=null
                this.amount=null
                this.approved=null
                this.deduction=null
                this.loandate=null
                this.startdate=null
                this.tenor=null
                this.netpay=null
                this.product_id=null
                this.selectedProduct=null
                this.userid =null

                } catch(err){
                console.log(err)
                // this.$toast.add({severity: 'error', detail:'Something went wrong', life: 5000});
                }
                }
                editLoan()
            }
            
                
        }
    },
    computed: {
        ...mapGetters(['allPrducts','loan_Detail'])
 
    },

    created(){
        this.$store.dispatch('getProducts')
        // this.$store.dispatch('getLoanDetail', this.$route.params.loanId)
        
        // get loan details
     const getLoanDetail = async () => {

        try {
        const res = await axios.get('api/v1/loan/' + this.$route.params.loanId + '/')  
         this.userid = res.data.loan_owner_id
            this.selectedProduct= res.data.product_name
            this.product_id = res.data.product
            this.enddate = res.data.end_date
            this.amount = res.data.applied_amount
            this.approved = res.data.approved_amount
            this.deduction = res.data.monthly_deduction
            this.loandate =res.data.loan_date
            this.startdate = res.data.start_date
            this.tenor = res.data.tenor
            this.netpay = res.data.net_pay
            this.transaction_code=res.data.transaction_code
        }
        catch (err) {
    
        if(err.response.status==404){
        alert('No Loans Available')
        }
        console.log(err)
          
        }
    }
    getLoanDetail()

    },
  


}
</script>

<style scoped>

</style>