<template>

    <div class="midas-container">

        <!-- <header class="header"> -->
            <!-- <section class="midas-item-container">
                <img src="images/logo2.png" alt="" class="logo"> -->
                
                <!-- <div class="midas-item-wrapper">
                    <p class="profile-item">1 Hospital Road, Mission Ward</p>
                    <p class="profile-item">Makurdi, Benue State</p>
                    <p class="profile-item">mindastouch@gmail.com</p>
                    <p class="profile-item">www.midastouchonline.co</p>
                    <p class="profile-item">+234 81-1890-1411</p>
                </div> -->
            <!-- </section>  -->

            <!-- <section class="statement-notification">
                <span class="profile-name">Period</span>
                <span class="profile-item">From: {{1/1/12}}</span>
            <span class="profile-item">To: {{2/2/22}}</span>
            </section> -->

        <!-- </header> -->

        <section class="print-area">

          <div class="layoutHeader">
            <div class="profileHeader">
              <button>Download Statement <i class="pi pi-download"></i></button>
            </div>
            
              <!-- <div class="profileHeader">
                <p>content c here</p>
              </div> -->
          </div>

            <table style=" border:0;">
                <tbody>
                    <tr>
                        <td style="width:16%; border:0;"><img src="images/logo2.png" alt="" class="logo">
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
                            <span class="profile-name">PERIOD</span><br />
                            <span>From: {{1/2/21}}</span><br />
                            <span>To: {{1/2/21}}</span><br />
                            <span>Date Printed: {{2/2/15}}</span><br />
                        </td>
                    </tr>

                </tbody>
            </table>
        </section>

        <section style="text-align:left; padding-left:3em;">

          <div> barcode </div>
       
        </section>

        <section>
            <h4 class="statement-title">STATEMENT OF SAVINGS</h4>
        </section>

        <section class="print-area">
            <table style=" border:0;">
                <tbody>
                    <tr>

                        <td style="text-align:left; width:30%; border:0;">

                            <span>
                                <br />
                                Name: {{tyrt}} {{mnb}}
                                <br />
                                Membership No: {{6}}<br />
                                Membership Type: {{ordinary}}<br>
                                Address: {{vbbccv}}<br>
                            </span>
                        </td>
                        <td style=" border:0;">

                        </td>
                        <td style=" border:0;"></td>
                        <td style="border:0;">

                        </td>
                        <td style="text-align:right; border:0;">
                            <span><br />
                                Total Debit: {{10000}}<br />
                                Total Credit: {{24444}}<br />
                                Net Saving:
                                {{2000}}<br /></span>
                        </td>
                    </tr>

                </tbody>
            </table>
        </section>
        <section class="print-area">
            <table>
                <thead>
                    <tr>
                        <th style="text-align:right; margin-right:1em;">DATE</th>
                        <th style="text-align:left; margin-left:1em;">DESCRIPTION</th>
                        <th style="text-align:right; margin-right:1em;">DEBIT</th>
                        <th style="text-align:right; margin-right:1em;">CREDIT</th>
                        <th style="text-align:right; margin-right:1em;">BAL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align:right; margin-right:1em;">{{2/2/25}}</td>
                        <td style="text-align:left; margin-left:1em;">Openning Balance</td>
                        <td>
                        </td>
                        <td></td>
                        <td style="text-align:right; margin-right:1em;">
                            {{25452}}</td>
                    </tr>
                
                    <tr>
                        <td style="text-align:right; margin-right:1em;">
                            {{1/2/25}}</td>
                        <td style="text-align:left; margin-right:1em;">
                            {{accccab}}
                        </td>
                        <td style="text-align:right; margin-right:1em;">
                         
                          {{47777}}
                    
                          </td>
                        <td style="text-align:right; margin-right:1em;">
                          
                          {{254}}
                        
                        </td>

                        <td style="text-align:right; margin-right:1em;">
                            {{24514}}
                        </td>

                         <td style="text-align:right; margin-right:1em;">
                          
                        </td> 

                    </tr>
              
                </tbody>
            </table>

        </section>

    </div>

</template>

<script>
	import {FilterMatchMode,FilterOperator} from 'primevue/api';
	
	import {mapGetters,mapActions} from 'vuex'
	export default {
		data() {
			return {
				
			}
		},
	
		created() {
	
		},
        computed:{
			// ...mapGetters(['loan_loader',
			// 'loan_balances'])
        },
		mounted() {
		
        
		},
		methods: {
			// ...mapActions(['ListLoanBalances']),  
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