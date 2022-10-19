<template>

   <div>
     <vue3-html2pdf
       
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="true"
        :paginate-elements-by-height="1400"
        filename= "loan_deduction_statement"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a4"
        pdf-orientation="portrait"
        pdf-content-width="800px"


        @progress="onProgress($event)"
        @hasStartedGeneration="hasStartedGeneration()"
        @hasGenerated="hasGenerated($event)"
        ref="html2Pdf"
    >
        <template  v-slot:pdf-content>

    <div class="midas-container">

        <section class="print-area">

          <div class="layoutHeader">
            <div class="profileHeader">
         
            </div>
            
              <!-- <div class="profileHeader">
                <p>content c here</p>
              </div> -->
          </div>

            <table style=" border:0;">
                <tbody>
                    <tr>
                        <td style="width:16%; border:0;">
                          <img src="../../../../../../public/images/logo2.png" alt="" class="logo">
                        </td>
                        <td style="text-align:left; width:20%; border:0;">

                            <span>
                                <br />
                                1 Hospital Road, Mission Ward<br />
                                Makurdi, Benue State<br />
                                mindastouch@gmail.com<br>
                                www.midastouchonline.co<br>
                                +234 81-1890-1411<br>
                            </span>
                        </td>
                        <td style=" border:0;">

                        </td>
                        <td style=" border:0;"></td>
                        <td style=" text-align:right; border:0;">
                            <span class="profile-name">DATE</span><br />
                            <!-- <span>From: {{1/2/21}}</span><br />
                            <span>To: {{1/2/21}}</span><br /> -->
                            <span>Date Printed: {{new Date().toLocaleDateString()}}</span><br />
                        </td>
                    </tr>

                </tbody>
            </table>
        </section>

        <section style="text-align:left; padding-left:3em;">

          <div> 
            <qrcode-vue :value='user_Detail.last_name' :size="100" level="H" />
          </div>
       
        </section>

        <section>
            <h4 class="statement-title">STATEMENT OF LOAN DEDUCTION</h4>
        </section>

        <section class="print-area">
            <table style=" border:0;">
                <tbody>
                    <tr>

                        <td style="text-align:left; width:30%; border:0;">

                            <span>
                                <br />
                                Name: {{user_Detail.last_name}} {{user_Detail.first_name}}
                                <br />
                                Membership No: {{user_Detail.id}}<br />
                                Membership Type: {{user_Detail.membership_type}}<br>
                                Address: {{user_Detail.address}}<br>
                            </span>
                        </td>
                        <td style=" border:0;">

                        </td>
                        <td style=" border:0;"></td>
                        <td style="border:0;">

                        </td>
                        <td style="text-align:right; border:0;">
                            <span><br />
                                Total Debit: {{loan_Detail.totalDebit}}<br />
                                Total Credit: {{loan_Detail.totalCredit}}<br />
                                Balance:
                                {{loan_Detail.total_balance}}<br /></span>
                        </td>
                    </tr>

                </tbody>
            </table>
        </section>

<!-- product heading -->
        <section class="print-area">

          <table>
               <thead>
                    <tr>
                        <th style="text-align:left; margin-right:1em;">PRODUCT</th>
                        <th style="text-align:right; margin-left:1em;">PRINCIPAL AMOUNT</th>
                        <th style="text-align:right; margin-right:1em;">DEDUCTION</th>
                        <th style="text-align:left; margin-right:1em;">START</th>
                        <th style="text-align:left; margin-right:1em;">END</th>
                    </tr>
                </thead>
                  <tbody>
                    <tr>
                        <td style="text-align:left; margin-left:1em;">{{loan_Detail.product_name}}</td>
                        <td style="text-align:right; margin-right:1em;">{{loan_Detail.approved_amount}}</td>
                        <td style="text-align:right; margin-right:1em;">
                          {{loan_Detail.monthly_deduction}}
                        </td>
                        <td style="text-align:left; margin-left:1em;">{{loan_Detail.start_date}}</td>
                        <td style="text-align:left; margin-left:1em;">
                            {{loan_Detail.end_date}}</td>
                    </tr>
                    </tbody>
          </table>

        </section>
<!-- end product heading -->


        <section class="print-area">
            <table>
                <thead>
                    <tr>
                        <th style="text-align:right; margin-right:1em;">DATE</th>
                        <th style="text-align:left; margin-left:1em;">DESCRIPTION</th>
                        <th style="text-align:right; margin-right:1em;">CREDIT</th>
                        <th style="text-align:right; margin-right:1em;">DEBIT</th>
                        <th style="text-align:right; margin-right:1em;">BAL</th>
                    </tr>
                </thead>
                <tbody>
                   
                
                    <tr v-for="deduction in loan_Detail.deductions" :key="deduction.id">
                        <td style="text-align:right; margin-right:1em;">
                            {{deduction.transaction_date}}</td>
                        <td style="text-align:left; margin-right:1em;">
                            {{deduction.narration}}
                        </td>
                        <td style="text-align:right; margin-right:1em;">
                         
                          {{deduction.credit}}
                    
                          </td>
                        <td style="text-align:right; margin-right:1em;">
                          
                          {{deduction.debit}}
                        
                        </td>

                        <td style="text-align:right; margin-right:1em;">
                            {{deduction.loan_balance}}
                        </td>

                         <!-- <td style="text-align:right; margin-right:1em;">
                          
                        </td>  -->

                    </tr>
              
                </tbody>
            </table>

        </section>

    </div>
        </template>
    </vue3-html2pdf>
   </div>

<!-- above for print -->
    <div>
        <div class="print-area">
              <button @click="generateReport">Download Statement <i class="pi pi-download"></i></button>
        </div>
        
    <div class="midas-container">

        <section class="print-area">

          <div class="layoutHeader">
            <div class="profileHeader">
         
            </div>
            
              <!-- <div class="profileHeader">
                <p>content c here</p>
              </div> -->
          </div>

            <table style=" border:0;">
                <tbody>
                    <tr>
                        <td style="width:16%; border:0;">
                          <img src="../../../../../../public/images/logo2.png" alt="" class="logo">
                        </td>
                        <td style="text-align:left; width:20%; border:0;">

                            <span>
                                <br />
                                1 Hospital Road, Mission Ward<br />
                                Makurdi, Benue State<br />
                                mindastouch@gmail.com<br>
                                www.midastouchonline.co<br>
                                +234 81-1890-1411<br>
                            </span>
                        </td>
                        <td style=" border:0;">

                        </td>
                        <td style=" border:0;"></td>
                        <td style=" text-align:right; border:0;">
                            <span class="profile-name">DATE</span><br />
                            <!-- <span>From: {{1/2/21}}</span><br />
                            <span>To: {{1/2/21}}</span><br /> -->
                            <span>Date Printed: {{new Date().toLocaleDateString()}}</span><br />
                        </td>
                    </tr>

                </tbody>
            </table>
        </section>

        <section style="text-align:left; padding-left:3em;">

          <div>  
             <qrcode-vue :value='user_Detail.last_name' :size="100" level="H" />
            <!-- using data binding  -->
            <!-- <qrcode-vue :value="name" :size="100" level="H" /> -->
          </div>
       
        </section>

        <section>
            <h4 class="statement-title">STATEMENT OF LOAN DEDUCTION</h4>
        </section>

        <section class="print-area">
            <table style=" border:0;">
                <tbody>
                    <tr>

                        <td style="text-align:left; width:30%; border:0;">

                            <span>
                                <br />
                                Name: {{user_Detail.last_name}} {{user_Detail.first_name}}
                                <br />
                                Membership No: {{user_Detail.id}}<br />
                                Membership Type: {{user_Detail.membership_type}}<br>
                                Address: {{user_Detail.address}}<br>
                            </span>
                        </td>
                        <td style=" border:0;">

                        </td>
                        <td style=" border:0;"></td>
                        <td style="border:0;">

                        </td>
                        <td style="text-align:right; border:0;">
                            <span><br />
                                Total Debit: {{loan_Detail.totalDebit}}<br />
                                Total Credit: {{loan_Detail.totalCredit}}<br />
                                Balance:
                                {{loan_Detail.total_balance}}<br /></span>
                        </td>
                    </tr>

                </tbody>
            </table>
        </section>

<!-- product heading -->
        <section class="print-area">

          <table>
               <thead>
                    <tr>
                        <th style="text-align:left; margin-right:1em;">PRODUCT</th>
                        <th style="text-align:right; margin-left:1em;">PRINCIPAL AMOUNT</th>
                        <th style="text-align:right; margin-right:1em;">DEDUCTION</th>
                        <th style="text-align:left; margin-right:1em;">START</th>
                        <th style="text-align:left; margin-right:1em;">END</th>
                    </tr>
                </thead>
                  <tbody>
                    <tr>
                        <td style="text-align:left; margin-left:1em;">{{loan_Detail.product_name}}</td>
                        <td style="text-align:right; margin-right:1em;">{{loan_Detail.approved_amount}}</td>
                        <td style="text-align:right; margin-right:1em;">
                          {{loan_Detail.monthly_deduction}}
                        </td>
                        <td style="text-align:left; margin-left:1em;">{{loan_Detail.start_date}}</td>
                        <td style="text-align:left; margin-left:1em;">
                            {{loan_Detail.end_date}}</td>
                    </tr>
                    </tbody>
          </table>

        </section>
<!-- end product heading -->


        <section class="print-area">
            <table>
                <thead>
                    <tr>
                        <th style="text-align:right; margin-right:1em;">DATE</th>
                        <th style="text-align:left; margin-left:1em;">DESCRIPTION</th>
                        <th style="text-align:right; margin-right:1em;">CREDIT</th>
                        <th style="text-align:right; margin-right:1em;">DEBIT</th>
                        <th style="text-align:right; margin-right:1em;">BAL</th>
                    </tr>
                </thead>
                <tbody>
                   
                
                    <tr v-for="deduction in loan_Detail.deductions" :key="deduction.id">
                        <td style="text-align:right; margin-right:1em;">
                            {{deduction.transaction_date}}</td>
                        <td style="text-align:left; margin-right:1em;">
                            {{deduction.narration}}
                        </td>
                        <td style="text-align:right; margin-right:1em;">
                         
                          {{deduction.credit}}
                    
                          </td>
                        <td style="text-align:right; margin-right:1em;">
                          
                          {{deduction.debit}}
                        
                        </td>

                        <td style="text-align:right; margin-right:1em;">
                            {{deduction.loan_balance}}
                        </td>

                         <!-- <td style="text-align:right; margin-right:1em;">
                          
                        </td>  -->

                    </tr>
              
                </tbody>
            </table>

        </section>

    </div>

    </div> 
<div>
  
</div>
</template>

<script>
	import {FilterMatchMode,FilterOperator} from 'primevue/api';
	
	import {mapGetters,mapActions} from 'vuex'
  import Vue3Html2pdf from 'vue3-html2pdf'
  import QrcodeVue from 'qrcode.vue'

	export default {
		data() {
			return {
       url: 'http://localhost:8080/loan/'
			}
		},
     components: {
        Vue3Html2pdf,
        QrcodeVue
    },
  
		created() {
      const id = this.$route.params.loan_Id
      
      this.getLoanDetail(id).then(()=>{ 
          const userid =this.loan_Detail.loan_owner_id
         this.getUserDetail(userid)
      })

     
      
		},
        computed:{
			...mapGetters(['loan_loader',
			'single_loan_balance','loan_Detail','profile_Detail','user_Detail'])
        },
		mounted() {
     this.name = `${this.user_Detail.last_name} ${this.user_Detail.first_name} ${this.user_Detail.id}`
		},
		methods: {
    generateReport(){
       this.$refs.html2Pdf.generatePdf()
    },
	  ...mapActions(['individualLoanBalanceDetail','getLoanDetail','getUserDetail']),  
		}
	}
</script>

<style scoped>
.scheme-pad{
    padding-left:10px;
    padding-right:10px;
    border-radius: 4px;
    
}
.layoutHeader{
  display: flex;
  /* gap: 1rem; */
  justify-content: space-between;
}

/* .profileHeader{
  border: 2px solid black;
} */


/* body {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  line-height: 1.6;
  color: var(--dash-grey-dark2);
  min-height: 100vh;
} */

.midas-container {
  max-width: 120rem;
  margin: 1.5rem auto;
  min-height: 100%;
}

@media only screen and (max-width: 75em) {
  .midas-container {
    margin: 0;
    max-width: 100%;
    width: 100%;
  }
}

.header {
  background-color: #fff;
  border-bottom: 1px solid #f4f2f2;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding: 2rem 2rem;
}

@media only screen and (max-width: 31.25em) {
  .header {
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    -ms-flex-line-pack: distribute;
        align-content: space-around;
    height: 11rem;
  }
}

.logo {
  height: 3.25rem;
  width: 7.25rem;
}

.midas-item-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.midas-item-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  margin-left: 1.5rem;
}

.statement-notification {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  margin-right: 2rem;
}

span {
  font-size: 0.95rem;
  margin-left: 1.5rem;
}

.profile-name {
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
}

.header-content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.membership-details {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.precision-left {
  margin-left: 2rem;
}

.precision-right {
  margin-right: 2rem;
}

.statement-title {
  text-align: center;
  font-size: 1.1rem;
}

.statement-title h4 {
  display: inline-block;
  text-decoration: underline;
  text-transform: uppercase;
}

.print-area {
  margin: 2rem 2rem 2rem 2rem;
}

table,
th,
td {
  border: 0.5px solid;
}

table {
  width: 100%;
  display: table;
  border-collapse: collapse;
  border-spacing: 0;
}

table thead tr th,
table tbody tr td {
  text-align: left;
}

tr {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

td,
th {
  padding: 3px 3px;
  display: table-cell;
  vertical-align: middle;
  border-radius: 2px;
  font-size: 0.6rem;
}

/* code to format pdf */

.footer {
  width: 100%;
  text-align: center;
  position: fixed;
}

.header {
  top: 0px;
}

.small-text {
  font-size: 9px;
}

.footer {
  bottom: 0px;
}

.pagenum:before {
  content: counter(page);
}

.logo_footer_pdf {
  height: 0.9rem;
  width: 0.9rem;
  border-radius: 50%;
}

/* end pdf format code */

/* :root {
  --color-primary: #cb2f64;
  --color-primary-light: #e62253;
  --color-primary-dark: #911937;
  --dash-grey-light1: #faf9f9;
  --dash-grey-light2: #f4f2f2;
  --dash-grey-light3: #f0eeee;
  --dash-grey-light4: #ccc;
  --grey-dark1: #333;
  --dash-grey-dark2: #777;
  --dash-grey-dark3: #999;
}

body {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  line-height: 1.6;
  color: var(--dash-grey-dark2);
  min-height: 100vh;
}

.midas-container {
  max-width: 120rem;
  margin: 1.5rem auto;
  min-height: 100%;
}

@media only screen and (max-width: 75em) {
  .midas-container {
    margin: 0;
    max-width: 100%;
    width: 100%;
  }
}

.header {
  background-color: #fff;
  border-bottom: 1px solid #f4f2f2;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding: 2rem 2rem;
}

@media only screen and (max-width: 31.25em) {
  .header {
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    -ms-flex-line-pack: distribute;
        align-content: space-around;
    height: 11rem;
  }
}

.logo {
  height: 3.25rem;
  width: 7.25rem;
  margin-left: 2rem;
}

.midas-item-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.midas-item-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  margin-left: 1.5rem;
}

.statement-notification {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  margin-right: 2rem;
}

.profile-item {
  font-size: 0.6rem;
}

.profile-name {
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
}

.header-content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.membership-details {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.precision-left {
  margin-left: 2rem;
}

.precision-right {
  margin-right: 2rem;
}

.statement-title {
  text-align: center;
  font-size: 1.1rem;
}

.statement-title h4 {
  display: inline-block;
  text-decoration: underline;
  text-transform: uppercase;
}

.print-area {
  margin: 2rem 2rem 2rem 2rem;
}

table,
th,
td {
  border: 0.5px solid;
}

table {
  width: 100%;
  display: table;
  border-collapse: collapse;
  border-spacing: 0;
}

table thead tr th,
table tbody tr td {
  text-align: left;
}

tr {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

td,
th {
  padding: 3px 3px;
  display: table-cell;
  vertical-align: middle;
  border-radius: 2px;
  font-size: 0.7rem;
} */



</style>