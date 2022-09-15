<template>

<div class="grid">
		<div class="col-12">
            <div class="card">
				<h5>All Loans</h5>
				<DataTable :value="LoanList" :paginator="true" class="p-datatable-gridlines" :rows="10" dataKey="id" :rowHover="true" 
							v-model:filters="filters1" filterDisplay="menu" :loading="loading1" :filters="filters1" responsiveLayout="scroll"
							:globalFilterFields="['loan_owner','product_name','approved_amount','totaldebt','active']" >
					
					<template #header>
                        <div class="flex justify-content-between flex-column sm:flex-row">
                            
                            <span class="p-input-icon-left mb-2">
                                <i class="pi pi-search" />
                                <InputText v-model="filters1['global'].value" placeholder="Keyword Search" style="width: 100%"/>
                            </span>
                        </div>
                    </template>
                    <template #empty>
                        No customers found.
                    </template>
                    <template #loading>
                        Loading customers data. Please wait.
                    </template>

                    <Column field="loan_owner" header="Name" style="min-width:12rem">
                        <template #body="{data}">
                            {{data.loan_owner}}
                        </template>
                     
                    </Column>

                      <Column field="product_name" header="Product" style="min-width:12rem">
                        <template #body="{data}">
                            {{data.product_name}}
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
                            {{formatCurrency(data.totaldebt)}}
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
</template>

<script>
	import {FilterMatchMode,FilterOperator} from 'primevue/api';
	// import CustomerService from "../service/CustomerService";
	// import ProductService from '../service/ProductService';
	export default {
		data() {
			return {
				customer1: null,
				customer2: null,
				customer3: null,
				filters1: null,
				filters2: {},
				loading1: true, //initialy true
				// loading2: true,
				products: null,
			}
		},
		customerService: null,
		productService: null,
		created() {
			this.$store.dispatch('getLoans')
			this.initFilters1();
		},
        computed:{
        LoanList(){
        return  this.$store.state.Loan.loans;
            }
        },
		mounted() {
			// this.productService.getProductsWithOrdersSmall().then(data => this.products = data);
			// this.customerService.getCustomersLarge().then(data => {
			// 	this.customer1 = data; 
			// 	this.loading1 = false;
			// 	this.customer1.forEach(customer => customer.date = new Date(customer.date));
			// });
			// this.customerService.getCustomersLarge().then(data => this.customer2 = data);
			// this.customerService.getCustomersMedium().then(data => this.customer3 = data);
            // initial value
            this.loading1= false;
            // this.loading2 = false;
		},
		methods: {
			
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