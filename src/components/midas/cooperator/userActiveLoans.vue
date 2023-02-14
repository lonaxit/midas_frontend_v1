<template>
<div v-if="loader">

    <div class="grid">
		<div class="col-12 lg:col-12 xl:col-12">
			<div class="card mb-0">
				<div class="flex justify-content-between mb-3">
					<div>
						<span class="block text-500 font-bold mb-3">Debt</span>
						<div class="text-900 font-bold text-xl">{{ formatMoney(totalBalance)}}</div>
					</div>
					<div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem">
						<i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
					</div>
				</div>
				<router-link  :to="{name:'user-active-loans',params:{userid:user_Detail.id}}">
					<span class="text-green-500 font-bold mr-5">
					{{activeUserLoans.length}} Active </span>
				</router-link>
			
				<router-link :to="{name:'loan-detail',params:{id:1}}">
						<span class="text-500">{{inactiveUserLoans.length}} Inactive</span>
				</router-link>
			
			</div>
		</div>
	</div>



</div>




<div class="mb-5" v-else>
  <span><i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i></span>
</div>



<!-- loan details -->



 <div v-if="activeUserLoans.length !=0">
    <div><h2>Active Loans</h2></div>

  


     <ul class="list-none p-0 m-0">
       
        <ListHeader>
        <template v-slot:useInsideUl>
             
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <!-- <div class="text-500 w-6 md:w-2 font-medium">Title</div> -->

            <div class="w-6 md:w-2 flex justify-content-space-evenly list-heading">
               Product
            </div>

            <div class="w-6 md:w-2 flex justify-content-space-evenly list-heading">
               Amount
            </div>

             <div class="w-6 md:w-2 flex justify-content-space-evenly list-heading">
               Tenor
            </div>

            <div class="w-6 md:w-2 flex justify-content-space-evenly list-heading">
               Balance
            </div>

            <!-- <div class="w-6 md:w-2 flex justify-content-space-evenly list-heading">
               Status
            </div> -->

           
            <div class="w-6 md:w-2 flex justify-content-space-evenly list-heading">
              Action
            </div>
        </li>
        </template>
        </ListHeader>

        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap" v-for="loan in activeUserLoans" :key="loan.id" >
            <!-- <div class="text-500 w-6 md:w-2 font-medium">Title</div> -->
             <div class="w-6 md:w-2 flex justify-content-space-evenly">
               <router-link  icon="pi pi-pencil" :to="{name:'user-loan-detail',params:{loanid:loan.id}}">{{loan.product_name}}</router-link>
               
            </div>

             <div class="w-6 md:w-2 flex justify-content-space-evenly">
              {{formatMoney(loan.approved_amount)}}
            </div>

               <div class="w-6 md:w-2 flex justify-content-space-evenly">
               {{loan.tenor}}
            </div>

             <div class="w-6 md:w-2 flex justify-content-space-evenly">
               {{formatMoney(loan.total_balance)}}
            </div>

            <!-- <div class="w-6 md:w-2 flex justify-content-space-evenly">
              <i class="pi" :class="{'text-green-500 pi-check-circle': loan.active, 'text-pink-500 pi-times-circle': !loan.active}"></i>
            </div> -->

            <div class="w-6 md:w-2 flex justify-content-space-evenly">


             <router-link :to="{name:'loan-deduction-statement',params:{loan_Id:loan.id}}">
              <span class="text-cyan-500"><i class="pi pi-download"></i></span>
            </router-link>
       
            </div>
            
        </li>
    </ul>
  </div>
  <div v-else>
    <h2 class="text-900 font-medium text-xl"> No Active Loans Available</h2>
  </div>



</template>

<script>
import axios from 'axios'
import ListHeader from '@/components/midas/ReusableComponents/Listheading.vue'
import {mapGetters,mapActions} from 'vuex'
import { currencyFormatter} from '../../../../utils/currencyFormat'

export default {

  data(){
    return {
    loader: false,
    }
  },
  components:{
 
     ListHeader
},
   methods:{
    ...mapActions(['getUserDetail','userLoans','UserSavingsByUserId']),

   formatMoney(value){
			return currencyFormatter(value)
		}
   },
  computed: {
    ...mapGetters(['fullName','user_Loans','userTotalLoans','activeUserLoans','inactiveUserLoans','totalBalance','riskExposure','user_Detail','profile_Detail']),

  },
   created(){
      this.getUserDetail(this.$route.params.userid).then(()=>{
        this.userLoans(this.$route.params.userid).then(()=>{
        this.loader = true   
        })
        
      })
      
    },

}
</script>

<style scoped>

</style>