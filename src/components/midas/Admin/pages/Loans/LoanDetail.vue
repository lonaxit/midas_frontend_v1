<template>
<div v-if="loader">

<div>
      <div class="mb-3 user-profile">
    <div class="user-panel">
    
       <span class="mb-2 text-purple-500"> <router-link :to="{name:'all-users'}">
          <span class="text-purple font-medium mr-5"><i class="pi pi-arrow-left"></i> </span>
        </router-link> Profile</span>
      <h1 class="username">{{loan_Detail.loan_owner}}</h1>
      <!-- <span>Ordinary</span>
      <div class="follower_count">
        <strong>315752 | 85</strong>
      </div> -->
    </div>
  </div>

 
  <div class="grid">
   
		<div class="col-12 lg:col-6 xl:col-3">
			<div class="card mb-0">
				<div class="flex justify-content-between mb-3">
					<div>

                        
						<span class="block text-500 font-medium mb-3">{{loan_Detail.product_name}}</span>
						<div class="text-blue=900 font-medium text-xl">
                             {{formatCurrency(loan_Detail.approved_amount)}}
                        </div>
					</div>
					<div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem">
						<i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
					</div>
				</div>
				<span class="text-green-500 font-medium mr-3">Tenor {{loan_Detail.tenor}} </span>
				
			</div>
		</div>
		<div class="col-12 lg:col-6 xl:col-3">
			<div class="card mb-0">
				<div class="flex justify-content-between mb-3">
					<div>
						<span class="block text-500 font-medium mb-3"> Deductions</span>
						<div class="text-900 font-medium text-xl">{{formatCurrency(loan_Detail.totaldeduction)}}</div>
					</div>
					<div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width:2.5rem;height:2.5rem">
                        
						<i class="pi pi-map-marker text-orange-500 text-xl"></i>
					</div>
				</div>
                <span class="text-red-500 font-medium mr-3">{{formatCurrency(loan_Detail.monthly_deduction)}} Monthly</span>
	
			</div>
		</div>

		<div class="col-12 lg:col-6 xl:col-3">
			<div class="card mb-0">
				<div class="flex justify-content-between mb-3">
					<div>
						<span class="block text-500 font-medium mb-3">Timeline</span>
						<div class="text-900 font-medium text-xl">{{loan_Detail.start_date}}</div>
					</div>
					<div class="flex align-items-center justify-content-center bg-cyan-100 border-round" style="width:2.5rem;height:2.5rem">
						<i class="pi pi-inbox text-cyan-500 text-xl"></i>
					</div>
				</div>
		
				<span class="text-red-600 font-medium">{{loan_Detail.end_date}}</span>
			</div>
		</div>
        
		<div class="col-12 lg:col-6 xl:col-3">
			<div class="card mb-0">
				<div class="flex justify-content-between mb-3">
					<div>
						<span class="block text-500 font-medium mb-3">More</span>
						<div class="text-red-900 font-medium text-xl">{{formatCurrency(loan_Detail.total_balance)}}</div>
					</div>
					<div class="flex align-items-center justify-content-center bg-purple-100 border-round" style="width:2.5rem;height:2.5rem">
						<i class="pi pi-comment text-purple-500 text-xl"></i>
					</div>
				</div>
        <router-link :to="{name:'loan-edit',params:{loanId:loan_Detail.id}}">
          <span class="text-purple font-medium mr-5"><i class="pi pi-pencil"></i> </span>
        </router-link>
				
        <DeleteItem :item="loan_Detail" @deleteRecord="delete_Loan">
              <template v-slot:deleteText>
           
              </template>
        </DeleteItem>

        <router-link :to="{name:'loan-transaction',params:{loan_Id:loan_Detail.id}}">
        <span class="text-green-500 mr-5"><i class="pi pi-wallet"></i></span>
        </router-link>

          <router-link :to="{name:'loan-deduction-statement',params:{loan_Id:loan_Detail.id}}">
        <span class="text-cyan-500"><i class="pi pi-download"></i></span>
        </router-link>
                
			</div>
		</div>
	</div>
</div>



<!-- List Deductions -->



    <div v-if="loader">
     <ul class="list-none p-0 m-0">
       
        <ListHeader>
        <template v-slot:useInsideUl>
             
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <!-- <div class="text-500 w-6 md:w-2 font-medium">Title</div> -->

            <div class="w-6 md:w-2 flex justify-content-space-evenly list-heading">
               Date
            </div>

            <div class="w-6 md:w-2 flex justify-content-space-evenly list-heading">
               Narration
            </div>

             <div class="w-6 md:w-2 flex justify-content-space-evenly list-heading">
               Credit
            </div>

            <div class="w-6 md:w-2 flex justify-content-space-evenly list-heading">
               Debit
            </div>

            <div class="w-6 md:w-2 flex justify-content-space-evenly list-heading">
               Balance
            </div>

            <div class="w-6 md:w-2 flex justify-content-space-evenly list-heading">
              Action
            </div>
        </li>
        </template>
        </ListHeader>

        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap" v-for="deduction in loan_Detail.deductions" :key="deduction.id">
            <!-- <div class="text-500 w-6 md:w-2 font-medium">Title</div> -->
            <div class="w-6 md:w-2 flex justify-content-space-evenly">
               {{deduction.transaction_date}}
            </div>

             <div class="w-6 md:w-2 flex justify-content-space-evenly">
               {{deduction.narration}}
            </div>
        
             <div class="w-6 md:w-2 flex justify-content-space-evenly">
                {{deduction.credit}}
            </div>
             
            <div class="w-6 md:w-2 flex justify-content-space-evenly">
                {{deduction.debit}}
            </div>
        
             <div class="w-6 md:w-2 flex justify-content-space-evenly">
               {{deduction.loan_balance}}
            </div>
            
            <DeleteItem :item="deduction" @deleteRecord="delete_Deduction">

              <template v-slot:deleteText>
           
              </template>
              
            </DeleteItem>

          <router-link :to="{name:'deduction-edit',params:{deductionId:deduction.id}}">
          <span class="text-purple font-medium mr-5"><i class="pi pi-pencil"></i> </span>
          </router-link>

        <!-- <div class="w-6 md:w-2 flex justify-content-space-evenly">
                	<span class="text-red-500 mr-5"><i class="pi pi-trash"></i></span>
        </div> -->
             

        </li>
    </ul>
  </div>
  <div v-else>
    <span>No Deductions Yet!</span>
  </div>

</div>
<div v-else>
<span><i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i></span>
</div>
</template>

<script>
import axios from 'axios'
import ListHeader from '@/components/midas/ReusableComponents/Listheading.vue'
import DeleteItem from '@/components/midas/ReusableComponents/deleteItem.vue'
import {mapGetters,mapActions} from 'vuex'
// import MyLoader from '@/components/midas/ReusableComponents/Loader.vue'
export default {

  data(){
    return {
     userProfile:{
    },
    loader:false
    }
  },
  components:{
    // MyLoader,
    ListHeader,
    DeleteItem
},
   methods:{
    ...mapActions(['deleteDeduction','DeleteLoan','getLoanDetail']),
    
    delete_Deduction(id){
      if(confirm('This action is dangerous!, can not be undone')){
          this.deleteDeduction(id).then((res =>{
      
          this.$router.push('/user-profile/'+ this.loan_Detail.loan_owner_id)
          this.$notify({
            text:'Deleted successfully',
            duration:5000,
            type:'success',
          })
        
          })
          ).catch((err =>{
            this.$notify({
              text:'Something went wrong',
              duration:5000,
              type:'error',
            })
          })

          )
      }
    
    },
    delete_Loan(id){
      if(confirm('Delete Loan?')){
            this.DeleteLoan(id).then((res =>{
             this.$router.push('/user-profile/'+ this.loan_Detail.loan_owner_id)
            this.$notify({
            text:'Deleted successfully',
            duration:5000,
            type:'success',
          })
            })
            ).catch((err=>{
             this.$notify({
              text:'Something went wrong',
              duration:5000,
              type:'error',
            })
            }))
      }
    
    },

    	formatCurrency(value) {
				return value.toLocaleString('en-US', {style: 'currency', currency: 'NGN'});
			},
   },
  computed: {
    ...mapGetters(['user_loader','loan_loader','fullName','user_Detail','profile_Detail','loan_Detail',])
  },
   created(){
    this.getLoanDetail(this.$route.params.id).then(()=>{
      this.loader = true
    })
    .catch((err)=>{
      this.$router.push('/all-loans')
         this.$notify({
              text:'Not Found',
              duration:5000,
              type:'error',
            })
    })
    },
    
}
</script>
<style scoped>

</style>