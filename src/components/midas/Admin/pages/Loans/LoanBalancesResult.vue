<template>
<div v-if="loan_loader && loan_balances.length >=1">

		<div class="grid">
		<div class="col-12">
            <div class="card">
				<h5>Loan Balances</h5>
				<DataTable :value="loan_balances" :paginator="true" class="p-datatable-gridlines" :rows="2000" dataKey="id" :rowHover="true" 
							v-model:filters="filters1" filterDisplay="menu"  :filters="filters1" responsiveLayout="scroll"
							:globalFilterFields="['loan_owner','balance']" >
					
					<template #header>
                        <div class="flex justify-content-between flex-column sm:flex-row">
                            
                            <span class="p-input-icon-left mb-2">
                                <i class="pi pi-search" />
                                <InputText v-model="filters1['global'].value" placeholder="Keyword Search" style="width: 100%"/>
                            </span>
                        </div>
                    </template>
                    <!-- <template #empty>
                        No customers found.
                    </template>
                    <template #loading>
                        Loading customers data. Please wait.
                    </template> -->

                    <Column field="loan_owner" header="Name" style="min-width:12rem">
                        <template #body="{data}">
                            {{data.loan_owner}}
							<!-- <router-link  icon="pi pi-pencil" :to="{name:'user-prfile',params:{id:data.owner}}">{{data.loan_owner}}</router-link>  -->
                        </template>
                     
                    </Column>
                
                    <Column header="Balance" filterField="balance" dataType="numeric" style="min-width:10rem">
                        <template #body="{data}">
                            {{formatCurrency(data.balance)}}
                        </template>
                      
                    </Column>
                 
                

                    
<!-- 
                    <Column field="active" header="Status" dataType="boolean" bodyClass="text-center" style="min-width:8rem">
                        <template #body="{data}">
                            <i class="pi" :class="{'text-green-500 pi-check-circle': data.active, 'text-pink-500 pi-times-circle': !data.active}"></i>
                        </template>
                      
                    </Column> -->


				</DataTable>
			</div>

        </div>
		</div>

</div>


<div v-else>
<span><i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i></span>
</div>


</template>

<script>
	import {FilterMatchMode,FilterOperator} from 'primevue/api';
	
	import {mapGetters,mapActions} from 'vuex'
	export default {
		data() {
			return {
				filters1: null,
				filters2: {},			
			}
		},
	
		created() {
			const payload = {
				start_date:this.$route.params.start_date,
				end_date: this.$route.params.end_date
			}
			
			this.ListLoanBalances(payload)
			this.initFilters1();
       
		},
        computed:{
			...mapGetters(['loan_loader',
			'loan_balances'])
        },
		mounted() {
		
        
		},
		methods: {
			...mapActions(['ListLoanBalances']),
			
			initFilters1() {
				this.filters1 = {
					'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
					'loan_owner': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},

					'date': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.DATE_IS}]},
					'totaldebt': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
					'active': {operator: FilterOperator.OR, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
				
					// 'active': {value: null, matchMode: FilterMatchMode.EQUALS}
				}
			},
			clearFilter1() {
				this.initFilters1();
			},
		
		
			formatCurrency(value) {
				return value.toLocaleString('en-US', {style: 'currency', currency: 'NGN'});
			},
			formatDate(value) {
				return value.toLocaleDateString('en-US', {
					day: '2-digit',
					month: '2-digit',
					year: 'numeric',
				});
			},
          
		}
	}
</script>

<style scoped>
.scheme-pad{
    padding-left:10px;
    padding-right:10px;
    border-radius: 4px;
    
}
</style>