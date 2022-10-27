<template>

<div v-if="$store.state.UserProfile.loading">
<div class="grid">
		<div class="col-12">
            <div class="card">
				<h5>All Users</h5>
				<DataTable :value="users" :paginator="true" class="p-datatable-gridlines" :rows="10" dataKey="id" :rowHover="true" 
							v-model:filters="filters1" filterDisplay="menu" :loading="loading1" :filters="filters1" responsiveLayout="scroll"
							:globalFilterFields="['user.last_name','ippis','approved_amount','totaldebt','active']" >
					
					<template #header>
                        <div class="flex justify-content-between flex-column sm:flex-row">
                            
                            <span class="p-input-icon-left mb-2">
                                <i class="pi pi-search" />
                                <InputText v-model="filters1['global'].value" placeholder="Keyword Search" style="width: 100%"/>
                            </span>
                        </div>
                    </template>
                    <template #empty>
                        No users found.
                    </template>
                    <template #loading>
                        Loading data. Please wait.
                    </template>

                    <Column field="user.last_name" header="NAME" style="min-width:12rem">
                        <template #body="{data}">
                            <router-link  icon="pi pi-pencil" :to="{name:'user-profile', params:{id:data.user.id}}">{{data.user.last_name}}   {{data.user.first_name}}</router-link>
                            
                        </template>
                     
                    </Column>

                      <Column field="ippis" header="IPPIS" style="min-width:12rem">
                        <template #body="{data}">
                            {{data.ippis}}
                        </template>
                       
                    </Column>

                    <!-- <Column field="loan_date" header="Loan Date" style="min-width:12rem">
                        <template #body="{data}">
                            {{data.loan_date}}
                        </template>
                    </Column> -->

                
                    <!-- <Column header="Amount" filterField="approved_amount" dataType="numeric" style="min-width:10rem">
                        <template #body="{data}">
                            {{formatCurrency(data.approved_amount)}}
                        </template>
                      
                    </Column> -->
                 
                

                    <!-- <Column header="Balance" filterField="totaldebt" dataType="numeric" style="min-width:10rem">
                        <template #body="{data}">
                            {{formatCurrency(data.totaldebt)}}
                        </template>
                       
                    </Column> -->

                    <Column field="active" header="Status" dataType="boolean" bodyClass="text-center" style="min-width:8rem">
                        <template #body="{data}">
                            <i class="pi" :class="{'text-green-500 pi-check-circle': data.user.is_active, 'text-pink-500 pi-times-circle': !data.user.is_active}"></i>
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
	// import CustomerService from "../service/CustomerService";
	// import ProductService from '../service/ProductService';
	export default {
		data() {
			return {
			
				filters1: null,
				filters2: {},
				loading1: true, //initialy true
				// loading2: true,
		
			}
		},
		customerService: null,
		productService: null,
		created() {
			this.$store.dispatch('getUsers')
			this.initFilters1();
		},
        computed:{
        users(){
        return  this.$store.state.UserProfile.usersList;
            }
        },
		mounted() {
		
            // initial value
            this.loading1= false;
            // this.loading2 = false;
		},
		methods: {
			
			initFilters1() {
				this.filters1 = {
					'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
					'last_name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},

					'date': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.DATE_IS}]},
					'totaldebt': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
					'active': {operator: FilterOperator.OR, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
				
					// 'active': {value: null, matchMode: FilterMatchMode.EQUALS}
				}
			},
			clearFilter1() {
				this.initFilters1();
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