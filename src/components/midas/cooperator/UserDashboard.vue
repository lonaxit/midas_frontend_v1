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

					<div>
						<router-link :to="{name:'deposit-statement',params:{userid:user_Detail.id}}">
        			<span class="text-cyan-500"><i class="pi pi-download"></i> Download</span>
        			</router-link>
					</div>

					<div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width:2.5rem;height:2.5rem">
						<i class="pi pi-map-marker text-orange-500 text-xl"></i>
					</div>

					

				</div>
				<span class="text-500 mr-3">Closing Today</span>
				<span class="text-green-500 font-medium">{{today}} </span>
			</div>
		</div>
	

	</div>
	
	</div>
	<div v-else>
		<span>Loading ...</span>
	</div>
</template>

<script>

import { currencyFormatter,Today }  from '../../../../utils/currencyFormat'
import {mapActions,mapGetters} from 'vuex'
import { formatDistance, format,sub,parseISO  } from 'date-fns';
export default {
	data() {
		return {
		loader:false,
		todayDate: new Date()
		}
	},
	
	
	  computed: {
    ...mapGetters(['fullName','user_Loans','userTotalLoans','activeUserLoans','inactiveUserLoans','totalBalance','riskExposure','user_Detail','profile_Detail']),

	today: function (){
    //   const date = parseISO(this.todayDate) 
      return format(this.todayDate, 'MMMM dd, yyyy')
    }

  },

	methods: {
		...mapActions(['Me','userLoans']),

		formatMoney(value){
			return currencyFormatter(value)
		},
		 
	},

	created() {
	this.Me().then(()=>{
		this.userLoans(this.user_Detail.id).then(()=>{
			this.loader = true
		})
	})
	}
}
</script>