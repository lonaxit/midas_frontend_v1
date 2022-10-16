<template>
<div v-if="ippis_deduction_loader">

<div>
      <div class="mb-3 user-profile">
    <div class="user-panel">
    
    <span class="mb-2 text-purple-500">IPPIS Master Deduction</span>
      <h1 class="username">{{masterdeductionDetail.name}}</h1>
      <span>{{masterdeductionDetail.ippis_number}}</span>
      <div class="follower_count">
        <strong>{{masterdeductionDetail.narration}}</strong>
      </div>
    </div>
  </div>

 
  <div class="grid">
   
		<div class="col-12 lg:col-6 xl:col-3">
			<div class="card mb-0">
				<div class="flex justify-content-between mb-3">
					<div>

                        
						<span class="block text-500 font-medium mb-3">Cumulative Deduction</span>
						<div class="text-blue=900 font-medium text-xl">
                             {{formatCurrency(masterdeductionDetail.cumulative_amount)}}
                        </div>
					</div>
					<div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem">
						<i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
					</div>
				</div>
				<span class="text-green-500 font-medium mr-3">Trnx Code {{masterdeductionDetail.transaction_code}} </span>
				
			</div>
		</div>
		<div class="col-12 lg:col-6 xl:col-3">
			<div class="card mb-0">
				<div class="flex justify-content-between mb-3">
					<div>
						<span class="block text-500 font-medium mb-3">Timeline</span>
						<div class="text-900 font-medium text-xl">{{masterdeductionDetail.entry_date}}</div>
					</div>
					<div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width:2.5rem;height:2.5rem">
                        
						<i class="pi pi-map-marker text-orange-500 text-xl"></i>
					</div>
				</div>
                <span class="text-red-500 font-medium mr-3"></span>
	
			</div>
		</div>


        
		<div class="col-12 lg:col-6 xl:col-3">
			<div class="card mb-0">
				<div class="flex justify-content-between mb-3">
					<div>
						<span class="block text-500 font-medium mb-3">More</span>
						<div class="text-red-900 font-medium text-xl" v-if="masterdeductionDetail.active">Active</div>
                        <div class="text-red-900 font-medium text-xl" v-else>Inactive</div>
					</div>
					<div class="flex align-items-center justify-content-center bg-purple-100 border-round" style="width:2.5rem;height:2.5rem">
						<i class="pi pi-comment text-purple-500 text-xl"></i>
					</div>
				</div>

                <div v-if="masterdeductionDetail.active">
                    <router-link :to="{name:'masterloandeduction-edit',params:{ippisdeductionid:masterdeductionDetail.id}}">
                <span class="text-purple font-medium mr-5"><i class="pi pi-pencil"></i> </span>
                </router-link>
				
                <DeleteItem :item="masterdeductionDetail" @deleteRecord="delete_IPPISDeduction">
                    <template v-slot:deleteText>
           
                    </template>
                </DeleteItem>
                </div>
                
                <!-- <router-link :to="{name:'loan-transaction',params:{loan_Id:masterdeductionDetail.id}}">
                <span class="text-green-500"><i class="pi pi-wallet"></i></span>
                </router-link> -->     
			</div>
		</div>
	</div>
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
     userProfile:{
    
    }
    }
  },
  components:{
    DeleteItem
},
   methods:{
   
    delete_IPPISDeduction(id){
      if(confirm('Delete Deduction?')){
        console.log(id)
            this.$store.dispatch('deleteIPPISDeduction',id).then((res =>{

            this.$router.push('/ippis-deduction-list')
            this.$notify({
            text: "Item Deleted Successfully",
            duration:5000,
            type:'success',
                        });
            })
            ).catch((err=>{
            this.$notify({
            text: "Something went wrong!",
            duration:5000,
            type:'error',
                        });
            }))
      }
    
    },

    	formatCurrency(value) {
				return value.toLocaleString('en-US', {style: 'currency', currency: 'NGN'});
			},
   },
  computed: {
    ...mapGetters(['ippis_deduction_loader','masterdeductionDetail'])
  },
   created(){
    this.$store.dispatch('ippisMasterDeductionDetail', this.$route.params.masterdeductionid)
    },
    
}
</script>
<style scoped>

</style>