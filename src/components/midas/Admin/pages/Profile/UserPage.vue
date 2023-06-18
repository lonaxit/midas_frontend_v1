<template>
<div v-if="loader">
<div>
  <div class="mb-3 user-profile">
    <div class="user-panel">
    
       <span class="mb-2 text-purple-500"> <router-link :to="{name:'all-users'}">
          <span class="text-purple font-medium mr-5"><i class="pi pi-arrow-left"></i> </span>
        </router-link> Profile</span>
      <h1 class="username">{{fullName}} </h1>
      <span>
        <router-link :to="{name:'new-profile',params:{user_id:profile_Detail.user.id}}">
        <span class="text-cyan-500 mr-4"><i class="pi pi-user-edit"></i></span>
        </router-link>

         <router-link :to="{name:'profile-detail'}">
        <span class="text-cyan-500"></span> View Detail <i class="pi pi-eye"></i>
        </router-link>
        </span>
      
      <span>Ordinary</span>
      <div class="follower_count">
        <strong>{{profile_Detail.ippis}} | {{profile_Detail.user.id}}</strong>
        
      </div>
    </div>
  </div>
 
  <div class="grid">
   
		<div class="col-12 lg:col-6 xl:col-3">
			<div class="card mb-0">
				<div class="flex justify-content-between mb-3">
					<div>
						<span class="block text-500 font-medium mb-3">Loans</span>
						<div class="text-900 font-medium text-xl">{{userTotalLoans}}</div>
					</div>
					<div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem">
						<i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
					</div>
				</div>
				<span class="text-green-500 font-medium mr-3"> {{activeUserLoans.length}} active </span> |
				 <span class="text-500"> {{inactiveUserLoans.length}} Inactive</span>
			</div>
		</div>
		<div class="col-12 lg:col-6 xl:col-3">
			<div class="card mb-0">
				<div class="flex justify-content-between mb-3">
					<div>
						<span class="block text-500 font-medium mb-3">Savings</span>
						<div class="text-900 font-medium text-xl">
                
              {{formatMoney(parseFloat(user_Detail.totalSaving))}}
              </div>
					</div>
					<div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width:2.5rem;height:2.5rem">
						<i class="pi pi-map-marker text-orange-500 text-xl"></i>
					</div>
				</div>
				<router-link :to="{name:'saving-deposit',params:{userid:profile_Detail.user.id}}"><span class="text-green-500 font-medium mr-5"><i class="pi pi-wallet"></i></span></router-link>

         <router-link :to="{name:'user-saving',params:{userid:profile_Detail.user.id}}">
            <span class="text-blue-500 font-medium mr-5"><i class="pi pi-eye"></i></span>
          </router-link>

        <router-link :to="{name:'deposit-statement',params:{userid:profile_Detail.user.id}}">
        <span class="text-cyan-500"><i class="pi pi-download"></i></span>
        </router-link>

			</div>
		</div>
		<div class="col-12 lg:col-6 xl:col-3">
			<div class="card mb-0">
				<div class="flex justify-content-between mb-3">
					<div>
						<span class="block text-500 font-medium mb-3">Debtedness</span>
						<div class="text-900 font-medium text-xl">{{formatMoney(parseFloat(totalBalance))}}</div>
					</div>
					<div class="flex align-items-center justify-content-center bg-cyan-100 border-round" style="width:2.5rem;height:2.5rem">
						<i class="pi pi-inbox text-cyan-500 text-xl"></i>
					</div>
				</div>
				<span class="text-500 font-medium">Risk Exposure </span>
				<span :class="{'text-blue-500 font-medium':riskExposure == 'Low','text-red-500 font-medium':riskExposure == 'Highly Risky','text-orange-500 font-medium':riskExposure == 'Risky',
        'text-purple-500 font-medium':riskExposure == 'Moderate',
        'text-green-500 font-medium':riskExposure == 'Good'}">{{riskExposure}}</span>
			</div>
		</div>
    
</div>
</div>
</div>
<div class="mb-5" v-else>
  <span><i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i></span>
</div>

<!-- loan details -->

<div v-if="loader">

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

            <div class="w-6 md:w-2 flex justify-content-space-evenly list-heading">
               Status
            </div>

           
            <div class="w-6 md:w-2 flex justify-content-space-evenly list-heading">
              Action
            </div>
        </li>
        </template>
        </ListHeader>

        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap" v-for="loan in activeUserLoans" :key="loan.id" >
            <!-- <div class="text-500 w-6 md:w-2 font-medium">Title</div> -->
             <div class="w-6 md:w-2 flex justify-content-space-evenly">
               <router-link  icon="pi pi-pencil" :to="{name:'loan-detail',params:{id:loan.id}}">{{loan.product_name}}</router-link>
               
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
              <i @click="changeStatus(loan.id)" class="pi" :class="{'text-green-500 pi-check-circle': loan.active, 'text-pink-500 pi-times-circle': !loan.active}"></i>
            </div>

            <div class="w-6 md:w-2 flex justify-content-space-evenly">


               <router-link  icon="pi pi-pencil" :to="{name:'loan-detail',params:{id:loan.id}}">Transaction</router-link>
            <!-- <span class="text-green-500 font-medium">Credit </span>
				    <span class="text-red-500 font-medium ml-3">Debit</span> -->

            </div>

             <!-- <div class="w-6 md:w-2 flex justify-content-space-evenly">
                <router-link  icon="pi pi-pencil" :to="{name:'create-product',params:{id:loan.id}}">Add Product</router-link>
            </div> -->
        </li>
    </ul>
  </div>
</div>
<div v-else>  
  <span><i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i></span>
</div>

<hr>
<div v-if="loader">

 <div v-if="inactiveUserLoans.length !=0">
    <div><h2>InActive Loans</h2></div>
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

        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap" v-for="loan in inactiveUserLoans" :key="loan.id" >
            <!-- <div class="text-500 w-6 md:w-2 font-medium">Title</div> -->
             <div class="w-6 md:w-2 flex justify-content-space-evenly">
               <router-link  icon="pi pi-pencil" :to="{name:'loan-detail',params:{id:loan.id}}">{{loan.product_name}}</router-link>
               
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
              <i @click="changeStatus(loan.id)" class="pi" :class="{'text-green-500 pi-check-circle': loan.active, 'text-pink-500 pi-times-circle': !loan.active}">

              </i>
            </div>

            <div class="w-6 md:w-2 flex justify-content-space-evenly">


               <router-link  icon="pi pi-pencil" :to="{name:'loan-detail',params:{id:loan.id}}">Transaction</router-link>
            <!-- <span class="text-green-500 font-medium">Credit </span>
				    <span class="text-red-500 font-medium ml-3">Debit</span> -->

            </div>

             <!-- <div class="w-6 md:w-2 flex justify-content-space-evenly">
                <router-link  icon="pi pi-pencil" :to="{name:'create-product',params:{id:loan.id}}">Add Product</router-link>
            </div> -->
        </li>
    </ul>
  </div>
</div>
<div v-else>  
  <span><i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i></span>
</div>

</template>

<script>
import axios from 'axios'
import ListHeader from '@/components/midas/ReusableComponents/Listheading.vue'
import {mapGetters,mapActions} from 'vuex'
import { currencyFormatter} from '../../../../../../utils/currencyFormat'
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
     changeStatus(id) {
      alert(`hi ${id}`)
     },
    ...mapActions(['getUserDetail','userLoans','UserSavingsByUserId']),

   formatMoney(value){
			return currencyFormatter(value)
		}
   },
  computed: {
    ...mapGetters(['fullName','user_Loans','userTotalLoans','activeUserLoans','inactiveUserLoans','totalBalance','riskExposure','user_Detail','profile_Detail']),

    activeLoans() {
      return this.userLoans.filter(loan => loan.active==false);
    }

  },
   created(){
      this.getUserDetail(this.$route.params.id).then(()=>{
        this.userLoans(this.$route.params.id).then(()=>{
        this.loader = true   
        })
        
      })
      
    },

}
</script>

<style scoped>

</style>