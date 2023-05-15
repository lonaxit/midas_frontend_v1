<template>
<div v-if="loader">
<div>
  <div class="mb-3 user-profile">
    <div class="user-panel">
    
       <span class="mb-2 text-purple-500"> <router-link :to="{name:'all-users'}">
          <span class="text-purple font-medium mr-5"><i class="pi pi-arrow-left"></i> </span>
        </router-link> Profile</span>
      <h1 class="username">{{fullName}}</h1>
      <span>Ordinary</span>
      <div class="follower_count">
        <strong>{{profile_Detail.ippis}} | {{profile_Detail.user.id}}</strong>

        <router-link :to="{name:'all-users'}">
        <span class="text-cyan-500 ml-5"><i class="pi pi-download"></i></span>
        </router-link>

        <router-link :to="{name:'saving-deposit',params:{userid:profile_Detail.user.id}}"><span class="text-green-500 font-medium ml-5"><i class="pi pi-wallet"></i></span></router-link>
        
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

 <div v-if="user_Detail.savinguser !=0">
    <div><h2>Active Savings</h2></div>
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

        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap" v-for="saving in user_Detail.savinguser" :key="saving.id" >
            <!-- <div class="text-500 w-6 md:w-2 font-medium">Title</div> -->
             <div class="w-6 md:w-2 flex justify-content-space-evenly">
               {{saving.transaction_date}}
               
            </div>

             <div class="w-6 md:w-2 flex justify-content-space-evenly">
              {{saving.narration}}
            </div>

             

             <div class="w-6 md:w-2 flex justify-content-space-evenly">
               {{saving.credit}}
            </div>

            <div class="w-6 md:w-2 flex justify-content-space-evenly">
               {{saving.debit}}
            </div>

            <div class="w-6 md:w-2 flex justify-content-space-evenly">
               {{saving.balance}}
            </div>
            <!-- <div class="w-6 md:w-2 flex justify-content-space-evenly">
              <i class="pi" :class="{'text-green-500 pi-check-circle': loan.active, 'text-pink-500 pi-times-circle': !loan.active}"></i>
            </div> -->

            <div class="w-6 md:w-2 flex justify-content-space-evenly">


            <DeleteItem :item="saving" @deleteRecord="delete_Saving">
              <template v-slot:deleteText>
           
              </template>
            </DeleteItem>

            <router-link :to="{name:'saving-deposit-edit',params:{id:saving.id}}">
                <span class="text-purple font-medium mr-5"><i class="pi pi-pencil"></i> </span>
                </router-link>

            </div>

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
import DeleteItem from '@/components/midas/ReusableComponents/deleteItem.vue'
import {mapGetters,mapActions} from 'vuex'
export default {

  data(){
    return {
    loader: false,
    }
  },
  components:{
 
     ListHeader,
    DeleteItem
},
   methods:{
    ...mapActions(['getUserDetail','DeleteSaving']),

    	formatCurrency(value) {
				return value.toLocaleString('en-US', {style: 'currency', currency: 'NGN'});
			},

    delete_Saving(id){
      if(confirm("Do you really want to delete this saving?")){
       
          this.DeleteSaving(id).then(()=>{
            this.$router.go()
            this.$notify({
              text:'Item Deleted Successfully',
              duration:5000,
              type:'success'
            })
          }).catch((err)=>{
            this.$notify({
              text:'Unable to delete deposit!',
              duration:5000,
              type:'error'
            })
          })
      }
    }

   },
  computed: {
    ...mapGetters(['fullName','user_Detail','profile_Detail']),

  },
   created(){
      this.getUserDetail(this.$route.params.userid).then(()=>{
        this.loader = true 
      })
      
    },

}
</script>

<style scoped>

</style>