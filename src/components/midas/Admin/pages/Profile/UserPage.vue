<template>
<div v-if="user_loader && loan_loader">
<div>
  <div class="mb-3 user-profile">
    <div class="user-panel">
    
       <span class="mb-2 text-purple-500">Profile</span>
      <h1 class="username">{{fullName}}</h1>
      <span>Ordinary</span>
      <div class="follower_count">
        <strong>315752 | 85</strong>
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
						<div class="text-900 font-medium text-xl">   {{formatCurrency(25894)}}</div>
					</div>
					<div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width:2.5rem;height:2.5rem">
						<i class="pi pi-map-marker text-orange-500 text-xl"></i>
					</div>
				</div>
				<router-link :to="{name:'update-scheme',params:{id:1}}"><span class="text-green-500 font-medium">Transaction </span></router-link>
			</div>
		</div>
		<div class="col-12 lg:col-6 xl:col-3">
			<div class="card mb-0">
				<div class="flex justify-content-between mb-3">
					<div>
						<span class="block text-500 font-medium mb-3">Debtedness</span>
						<div class="text-900 font-medium text-xl">{{formatCurrency(totalBalance)}}</div>
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

		<!-- <div class="col-12 lg:col-6 xl:col-3">
			<div class="card mb-0">
				<div class="flex justify-content-between mb-3">
					<div>
						<span class="block text-500 font-medium mb-3">Comments</span>
						<div class="text-900 font-medium text-xl">152 Unread</div>
					</div>
					<div class="flex align-items-center justify-content-center bg-purple-100 border-round" style="width:2.5rem;height:2.5rem">
						<i class="pi pi-comment text-purple-500 text-xl"></i>
					</div>
				</div>
				<span class="text-green-500 font-medium">85 </span>
				<span class="text-500">responded</span>
			</div>
		</div> -->
</div>
</div>
</div>
<div class="mb-5" v-else>
  <span><i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i></span>
</div>

<!-- loan details -->

<div v-if="user_loader && loan_loader">

 <div v-if="activeUserLoans !=0">
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
              {{formatCurrency(loan.approved_amount)}}
            </div>

               <div class="w-6 md:w-2 flex justify-content-space-evenly">
               {{loan.tenor}}
            </div>

             <div class="w-6 md:w-2 flex justify-content-space-evenly">
               {{formatCurrency(loan.total_balance)}}
            </div>

            <div class="w-6 md:w-2 flex justify-content-space-evenly">
              <i class="pi" :class="{'text-green-500 pi-check-circle': loan.active, 'text-pink-500 pi-times-circle': !loan.active}"></i>
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
// import MyLoader from '@/components/midas/ReusableComponents/Loader.vue'
export default {

  data(){
    return {
    // userProfile:{
    //   user_id:"",
    //   username:"",
    //   first_name:"",
    //   last_name:"",
    // },
     userProfile:{
    
    }
    }
  },
  components:{
    // MyLoader,
     ListHeader
},
   methods:{

    	formatCurrency(value) {
				return value.toLocaleString('en-US', {style: 'currency', currency: 'NGN'});
			},
   },
  computed: {

    user_loader(){
      return this.$store.getters.user_loader
    },
    loan_loader(){
      return this.$store.getters.loan_loader
    },

    fullName(){
      return this.$store.getters.fullName
    },

    user_Loans(){
      return this.$store.getters.user_Loans
    },

    userTotalLoans(){
      return this.$store.getters.userTotalLoans
    },
    activeUserLoans(){
      return this.$store.getters.activeUserLoans
    },
    inactiveUserLoans(){
      return this.$store.getters.inactiveUserLoans
    },
    totalBalance(){
      return this.$store.getters.totalBalance
    },
    riskExposure(){
      return this.$store.getters.riskExposure
    }
  },
   created(){
  
      this.$store.dispatch('getUserDetail', this.$route.params.id)
      this.$store.dispatch('userLoans', this.$route.params.id)


// not used for now
    //     const getUserDetail = async () =>{
    //     try{
    //       const res = await axios.get('api/v1/'+ this.$route.params.id +'/profile/')
         
    //         this.userProfile.first_name =res.data.user.first_name
    //         this.userProfile.last_name =res.data.user.last_name
    //         this.userProfile.username =res.data.user.username
    //         this.userProfile.user_id =res.data.user.id
    //     } catch(err){
    //         this.$toast.add({severity: 'error', detail:'Unable to get item detail', life: 5000});
    //     }
    // }
    // getUserDetail()
    },

}
</script>

<style scoped>

</style>