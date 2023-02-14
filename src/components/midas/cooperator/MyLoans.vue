<template>
<div v-if="loader">

        <div class="grid">
		<div class="col-12 lg:col-6 xl:col-6">
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


		<div class="col-12 lg:col-6 xl:col-6">
			<div class="card mb-0">
				<div class="flex justify-content-between mb-3">
					<div>
						<span class="block text-500 font-bold mb-3">Savings</span>
						<div class="text-900 font-bold text-xl">{{formatMoney(user_Detail.totalSaving)}}</div>
					</div>
					<div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width:2.5rem;height:2.5rem">
						<i class="pi pi-map-marker text-orange-500 text-xl"></i>
					</div>
				</div>
                <span class="text-500 mr-3">Closing Today</span>
				<span class="text-green-500 font-medium">{{todayDate}} </span>
				
			</div>
		</div>
	</div>
</div>



<!-- loan details -->



 <div v-if="user_Loans.length !=0">
    <div><h2>All Loans</h2></div>
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

            <div class="w-6 md:w-2 flex justify-content-space-evenly list-heading">
               Status
            </div>

           
            <div class="w-6 md:w-2 flex justify-content-space-evenly list-heading">
              Action
            </div>
        </li>
        </template>
        </ListHeader>

        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap" v-for="loan in user_Loans" :key="loan.id" >
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

            <div class="w-6 md:w-2 flex justify-content-space-evenly">
              <i class="pi" :class="{'text-green-500 pi-check-circle': loan.active, 'text-pink-500 pi-times-circle': !loan.active}"></i>
            </div>

            <div class="w-6 md:w-2 flex justify-content-space-evenly">


             <router-link :to="{name:'loan-deduction-statement',params:{loan_Id:loan.id}}">
              <span class="text-cyan-500"><i class="pi pi-download"></i></span>
            </router-link>
       
            </div>
            
        </li>
    </ul>
  </div>

<div class="mb-5" v-else>
  <span><i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i></span>
</div>



</template>

<script>
import axios from 'axios'
import ListHeader from '@/components/midas/ReusableComponents/Listheading.vue'
import {mapGetters,mapActions} from 'vuex'
import { currencyFormatter,Today} from '../../../../utils/currencyFormat'
import { formatDistance, format,sub,parseISO  } from 'date-fns';
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
    ...mapActions(['getUserDetail','userLoans','UserSavingsByUserId','Me']),

   formatMoney(value){
			return currencyFormatter(value)
		},
        // TodayDate(){
        //     return Today()
        // }

   },
  computed: {
    ...mapGetters(['fullName','user_Loans','userTotalLoans','activeUserLoans','inactiveUserLoans','totalBalance','riskExposure','user_Detail','profile_Detail']),

    todayDate(){
      const date_now = new Date()
      return format(date_now,'MMMM dd, yyyy')
    }

  },
   created(){
        this.Me().then(()=>{
            this.getUserDetail(this.user_Detail.id).then(()=>{
            this.userLoans(this.user_Detail.id).then(()=>{
            this.loader = true   
        })
        
      })
        })
     
      
    },

}
</script>

<style scoped>

</style>