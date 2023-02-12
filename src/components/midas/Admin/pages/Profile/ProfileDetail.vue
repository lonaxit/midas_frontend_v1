<template>

  <div class="mb-3 user-profile">
    <div class="user-panel">
    
       <span class="mb-2 text-purple-500"> <router-link :to="{name:'all-users'}">
          <span class="text-purple font-medium mr-5"><i class="pi pi-arrow-left"></i> </span>
        </router-link> Profile</span>
      <h1 class="username">{{fullName}} </h1>
      <span>
      
         <router-link :to="{name:'change-settings'}">
        <span class="text-cyan-500"></span> Change Password <i class="pi pi-key"></i>
        </router-link>
        </span>
      
     
      <div class="follower_count mt-3">
        <strong>MIDAS NUMBER {{profile_Detail.user.id}}</strong>
        
      </div>
    </div>
  </div>


   <div class="mb-3 user-profile">
    <div class="user-panel">

   
<div class="grid">
   
<div class="col-12 lg:col-6 xl:col-4">
	<div class="user-profile-item">
    <h5>Full Name</h5>
    <p>{{fullName}}</p>
   </div>

   <div class="user-profile-item">
    <h5>Sex</h5>
    <p>{{profile_Detail.gender}}</p>
   </div>

   <div class="user-profile-item">
    <h5>Date of Birth</h5>
    <p>{{profile_Detail.user.dob}}</p>
   </div>

   <div class="user-profile-item">
    <h5>Marital Status</h5>
    <p>{{ profile_Detail.marital_status}}</p>
   </div>

   <div class="user-profile-item">
    <h5>Telephone</h5>
    <p>{{ profile_Detail.phone}}</p>
   </div>

   <div class="user-profile-item">
    <h5>Home Address</h5>
    <p>{{ profile_Detail.home_address }}</p>
   </div>
</div>


		<div class="col-12 lg:col-6 xl:col-4">
			<div class="user-profile-item">
    <h5>Date of First Appointment</h5>
    <p>{{ profile_Detail.user.dofa }}</p>
   </div>

    <div class="user-profile-item">
    <h5>Home Address</h5>
    <p>{{ profile_Detail.home_address }}</p>
   </div>

   <div class="user-profile-item">
    <h5>Email</h5>
    <p>{{ profile_Detail.email }}</p>
   </div>

   <div class="user-profile-item">
    <h5>Ippis Number</h5>
    <p>{{ profile_Detail.user.ippis_number }}</p>
   </div>

   <div class="user-profile-item">
    <h5>Employment Type</h5>
    <p>{{ profile_Detail.employment_type }}</p>
   </div>

   <div class="user-profile-item">
    <h5>Job Cadre</h5>
    <p>{{ profile_Detail.job_cadre }}</p>
   </div>

</div>



		<div class="col-12 lg:col-6 xl:col-4">
			<div class="user-profile-item">
    <h5>Next of Kin Full Name</h5>
    <p>{{ profile_Detail.nok_fullname }}</p>
   </div>

   <div class="user-profile-item">
    <h5>Next of Kin Relationshp</h5>
    <p>{{ profile_Detail.nok_relationship }}</p>
   </div>

   <div class="user-profile-item">
    <h5>Next of Kin Telephone</h5>
    <p>{{ profile_Detail.nok_phone }}</p>
   </div>
   
   <div class="user-profile-item">
    <h5>Bank</h5>
    <p>{{ profile_Detail.bank }}</p>
   </div>


   <div class="user-profile-item">
    <h5>Account Number</h5>
    <p>{{ profile_Detail.bank_account }}</p>
   </div> 
</div>
    
</div>
   
</div>
</div>


 




<!-- loan details -->



</template>

<script>
import axios from 'axios'

import {mapGetters,mapActions} from 'vuex'
import { currencyFormatter} from '../../../../../../utils/currencyFormat'
export default {

  data(){
    return {
    loader: false,
    }
  },
  components:{

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
    //   this.getUserDetail(this.$route.params.id).then(()=>{
    //     this.userLoans(this.$route.params.id).then(()=>{
    //     this.loader = true   
    //     })
        
    //   })
      
    },

}
</script>

<style scoped>

.user-profile-item {
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

h5 {
  font-weight: bold;
}

p {
  font-weight: normal;
}

</style>