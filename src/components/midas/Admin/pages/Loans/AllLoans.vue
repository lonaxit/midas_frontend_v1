<template>
<div v-if="loan_loader && all_Loans.length >=1">

		<div class="grid">
		<div class="col-12">
            <div class="card">
				<h5>All Loans [{{all_Loans.length}}]</h5>
				<DataTable :value="all_Loans" :paginator="true" class="p-datatable-gridlines" :rows="10" dataKey="id" :rowHover="true" 
							v-model:filters="filters1" filterDisplay="menu"  :filters="filters1" responsiveLayout="scroll"
							:globalFilterFields="['loan_owner','product_name','approved_amount','totaldebt','active']" >
					
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
                        </template>
                     
                    </Column>

                      <Column field="product_name" header="Product" style="min-width:12rem">
                        <template #body="{data}">
						<router-link  icon="pi pi-pencil" :to="{name:'loan-detail',params:{id:data.id}}">{{data.product_name}}</router-link> 
                        </template>
                       
                    </Column>

                      <Column field="loan_date" header="Loan Date" style="min-width:12rem">
                        <template #body="{data}">
                            {{data.loan_date}}
                        </template>
                    </Column>

                
                    <Column header="Amount" filterField="approved_amount" dataType="numeric" style="min-width:10rem">
                        <template #body="{data}">
                            {{formatCurrency(data.approved_amount)}}
                        </template>
                      
                    </Column>
                 
                

                    <Column header="Balance" filterField="totaldebt" dataType="numeric" style="min-width:10rem">
                        <template #body="{data}">
                            {{formatCurrency(data.total_balance)}}
                        </template>
                       
                    </Column>

                    <Column field="active" header="Status" dataType="boolean" bodyClass="text-center" style="min-width:8rem">
                        <template #body="{data}">
                            <i class="pi" :class="{'text-green-500 pi-check-circle': data.active, 'text-pink-500 pi-times-circle': !data.active}"></i>
                        </template>
                      
                    </Column>


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
				// loading1: true, //initialy true
				// loading2: true,
			
			}
		},
	
		created() {
			this.getLoans()
			this.initFilters1();
		},
        computed:{
			...mapGetters(['loan_loader',
			'all_Loans'])
        },
		mounted() {
		
            // initial value
            // this.loading1= false;
            // this.loading2 = false;
		},
		methods: {
			...mapActions(['getLoans']),
			
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