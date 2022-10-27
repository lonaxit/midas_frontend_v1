<template>
<div v-if="loader">

<div>
      <div class="mb-3 user-profile">
    <div class="user-panel">
    
    <span class="mb-2 text-purple-500">Master Saving Deduction</span>
      <h1 class="username">{{master_savingDetail.name}}</h1>
      <span>{{master_savingDetail.ippis_number}}</span>
      <div class="follower_count">
        <strong>{{master_savingDetail.narration}}</strong>
      </div>
    </div>
  </div>

 
  <div class="grid">
   
		<div class="col-12 lg:col-6 xl:col-3">
			<div class="card mb-0">
				<div class="flex justify-content-between mb-3">
					<div>     
						<span class="block text-500 font-medium mb-3">Amount</span>
						<div class="text-blue=900 font-medium text-xl">
                             {{formatCurrency(master_savingDetail.amount)}}
                        </div>
					</div>
					<div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem">
						<i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
					</div>
				</div>
				<span class="text-green-500 font-medium mr-3">Trnx Code {{master_savingDetail.transaction_code}} </span>
				
			</div>
		</div>
		<div class="col-12 lg:col-6 xl:col-3">
			<div class="card mb-0">
				<div class="flex justify-content-between mb-3">
					<div>
						<span class="block text-500 font-medium mb-3">Timeline</span>
						<div class="text-900 font-medium text-xl">{{master_savingDetail.transaction_date}}</div>
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
						<div class="text-red-900 font-medium text-xl" v-if="master_savingDetail.active">Active</div>
                        <div class="text-red-900 font-medium text-xl" v-else>Inactive</div>
					</div>
					<div class="flex align-items-center justify-content-center bg-purple-100 border-round" style="width:2.5rem;height:2.5rem">
						<i class="pi pi-comment text-purple-500 text-xl"></i>
					</div>
				</div>

                <div v-if="master_savingDetail.active">
                    <router-link :to="{name:'mastersaving-edit',params:{id:master_savingDetail.id}}">
                <span class="text-purple font-medium mr-5"><i class="pi pi-pencil"></i> </span>
                </router-link>
				
                <DeleteItem :item="master_savingDetail" @deleteRecord="delete_MasterSaving">
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
    },
    loader: false
    }
  },
  components:{
    DeleteItem
},
   methods:{
    ...mapActions(['MasterSavingDetail','DeleteMasterSaving']),
   
    delete_MasterSaving(id){

      if(confirm('Delete Master Saving Record?')){
        
            this.DeleteMasterSaving(id).then((res =>{

            this.$router.push('/saving-master-list')
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
    ...mapGetters(['master_savingDetail'])
  },
   created(){
    this.MasterSavingDetail(this.$route.params.mastersavingid).then(()=>{
      this.loader = true
    })
    },
    
}
</script>
<style scoped>

</style>