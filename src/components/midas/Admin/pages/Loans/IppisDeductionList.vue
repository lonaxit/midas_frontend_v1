<template>
<div v-if="ippis_deduction_loader && activeMasterDeductions.length >=1">

		<div class="grid">
		<div class="col-12">
            <div class="card">
				<h5>IPPIS Deductions
                    <Badge :value="activeMasterDeductions.length" severity="info" @click=postDeduction()></Badge>
                  </h5>
				<DataTable :value="activeMasterDeductions" :paginator="true" class="p-datatable-gridlines" :rows="10" dataKey="id" :rowHover="true" 
							v-model:filters="filters1" filterDisplay="menu"  :filters="filters1" responsiveLayout="scroll"
							:globalFilterFields="['name','entry_date','cumulative_amount','active']" >
					
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
                            {{data.name}}
                        </template>
                     
                    </Column>

                      <Column field="ippis_number" header="IPPIS" style="min-width:12rem">
                        <template #body="{data}">
							<router-link  :to="{name:'masterdeduction-detail',params:{masterdeductionid:data.id}}">{{data.ippis_number}}</router-link> 
                        </template>
                       
                    </Column>

                      <Column field="entry_date" header="Date" style="min-width:12rem">
                        <template #body="{data}">
                            {{data.entry_date}}
                        </template>
                    </Column>

                
                    <Column header="Amount" filterField="cumulative_amount" dataType="numeric" style="min-width:10rem">
                        <template #body="{data}">
                            {{formatCurrency(data.cumulative_amount)}}
                        </template>
                      
                    </Column>
                 
                

                    <!-- <Column header="Balance" filterField="totaldebt" dataType="numeric" style="min-width:10rem">
                        <template #body="{data}">
                            {{formatCurrency(data.total_balance)}}
                        </template>
                       
                    </Column> -->

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
	// import CustomerService from "../service/CustomerService";
	// import ProductService from '../service/ProductService';
	import {mapGetters} from 'vuex'
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
			this.$store.dispatch('listMasterDeduction')
			this.initFilters1();
		},
        computed:{
			...mapGetters(['ippis_deduction_loader',
			'activeMasterDeductions'])
        },
		mounted() {
		
          
		},
		methods: {
			postDeduction(){
				this.$store.dispatch('postBulkDeduction').then(()=>{
					// return to the master deduction page
					this.$router.push('/ippis-deduction-list')
					this.$notify({
						text:'Deductions created successfully',
						duration:5000,
						type:'success' 
					})
				
				}).catch(err=>{
					this.$notify({
						text:'Something went wrong',
						duration:5000,
						type:'error',
					})
					
				})
			},
			
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