<template>
	<div :class="containerClass" @click="onWrapperClick">
        <AppTopBar @menu-toggle="onMenuToggle" />
        <div class="layout-sidebar" @click="onSidebarClick">
            <div v-if="$store.state.auth.user.isAuthenticated && $store.state.auth.staff">
            <AppMenu :model="menu" @menuitem-click="onMenuItemClick" />
            </div>
             <div v-else-if="$store.state.auth.user.isAuthenticated && $store.state.auth.employee">
            <AppMenu :model="menu" @menuitem-click="onMenuItemClick" />
            </div>

            <div v-else-if="$store.state.auth.user.isAuthenticated && !$store.state.auth.normal">
            <AppMenu :model="usermenu" @menuitem-click="onMenuItemClick" />  
            </div>
            
        </div>

        <div class="layout-main-container">
            <div class="layout-main">
                 <Toast />
                <notifications/>
                <router-view />
            </div>
            <AppFooter />
        </div>
<!-- 
		<AppConfig :layoutMode="layoutMode" @layout-change="onLayoutChange" /> -->
        <transition name="layout-mask">
            <div class="layout-mask p-component-overlay" v-if="mobileMenuActive"></div>
        </transition>
	</div>
</template>

<script>
import AppTopBar from './AppTopbar.vue';
import AppMenu from './AppMenu.vue';
// import AppConfig from './AppConfig.vue';
import AppFooter from './AppFooter.vue';
import axios from 'axios'
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'

export default {
    emits: ['change-theme'],
    data() {
        return {
            layoutMode: 'static',
            staticMenuInactive: false,
            overlayMenuActive: false,
            mobileMenuActive: false,
            
            usermenu:[
                {
                    label:'Home',
                    items:[
                        {
                          label: 'Dashboard', icon: 'pi pi-fw pi-box', to: '/user-dashboard'
                            
                        },
                    ]
                },
                   {
                    label: 'Activity',
                    items: [
                        {
                            label: 'Profile', icon: 'pi pi-fw pi-user',
                            items:[
                                 {
                                label: 'View', icon: 'pi pi-fw pi-eye', to: '/my-profile'
                                },
                                //  {
                                // label: 'Accounts', icon: 'pi pi-fw pi-lock', to: ''
                                // },
                              
                                
                            ]
                        },
                        {
                            label: 'Loans', icon: 'pi pi-fw pi-wallet',
                            items:[
                                 {
                                label: 'All', icon: 'pi pi-fw pi-align-justify', to: '/my-loans'
                                },

                                //  {
                                // label: 'Apply', icon: 'pi pi-fw pi-pencil', to: ''
                                // },
                              
                                
                            ]
                        },

                        {
                            label: 'Savings', icon: 'pi pi-fw pi-shopping-bag',
                            items:[
                                  {
                                label: 'All', icon: 'pi pi-fw pi-align-justify', to: '/my-deposits'
                                },
                                  {
                                  label: 'Statement By Date', icon: 'pi pi-fw pi-paperclip', to: '/user-deposit-form'
                                },
                            
                                
                            ]
                        },
                       
                       
                          
                    ]
                },
            ],

            menu : [

                // {
                //     label: 'Home',
                //     items: [{
                //         label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/dashboard'
                //     }]
                // },

                {
                    label: 'Users',
                    items: [
                        {
                            label: 'Cooperators', icon: 'pi pi-fw pi-heart',
                            items:[
                                 {
                                label: 'New', icon: 'pi pi-fw pi-user-plus', to: '/new-account'
                                },
                                 {
                                label: 'List Users', icon: 'pi pi-fw pi-users', to: '/all-users'
                                },
                                {
                                label: 'Change Password', icon: 'pi pi-fw pi-lock', to: '/reset-password'
                                }
                                
                            ]
                        },

                        {
                            label: 'Staff', icon: 'pi pi-fw pi-clone',
                            items:[
                                  {
                                label: 'New Staff', icon: 'pi pi-fw pi-user-plus', to: ''
                                },
                                  {
                                  label: 'List Staff', icon: 'pi pi-fw pi-users', to: ''
                                },
                               
                                {
                                label: 'Change Password', icon: 'pi pi-fw pi-lock', to: ''
                                }
                                
                            ]
                        },
                       
                       
                          
                    ]
                },


             {
                    label: 'Services',
                    items: [
                          {
                                label: 'Schemes', icon: 'pi pi-fw pi-box',
                                 items: [  
                                {label: 'New Scheme', icon: 'pi pi-fw pi-plus', to:'/add-scheme'},

                                {label: 'List Schemes', icon: 'pi pi-fw pi-list', to:'/scheme-list'},

                             ]
                            },
                             {
                                label: 'Products', icon: 'pi pi-th-large',
                                 items: [  
                                {label: 'New Product', icon: 'pi pi-fw pi-plus', to:'/add-product'},

                                {label: 'List Products', icon: 'pi pi-fw pi-list', to:'/list-product'},

                             ]
                            },
                                {
                                label: 'Loans', icon: 'pi pi-fw pi-wallet',
                                 items: [  
                                {label: 'Create', icon: 'pi pi-fw pi-plus', to:'/add-loan'},

                                {label: 'List', icon: 'pi pi-fw pi-list', to:'/all-loans'},

                                {label: 'Loan Balances', icon: 'pi pi-fw pi-minus', to:'/loan-balances/'},

                                 {label: 'Upload', icon: 'pi pi-fw pi-file-excel', to:'/upload-loan'},

                             ]
                            },

                            {
                                label: 'Loan Deduction', icon: 'pi pi-fw pi-filter-slash',
                                    items: [
                                        {label: 'Create', icon: 'pi pi-fw pi-plus', to:'/bulk-deductions'},

                                        // {label: 'List', icon: 'pi pi-fw pi-list'},

                                        // {label: 'Upload', icon: 'pi pi-fw pi-file-excel', to:''},
                                        
                                        {
                                        label:'IPPIS',icon: 'pi pi-fw pi-briefcase', 
                                        items:[
                                        {label: 'Upload Master', icon: 'pi pi-fw pi-upload', to:'/upload_ippis_loan_deductions'},
                                        {label: 'Master List', icon: 'pi pi-fw pi-list', to:'/ippis-deduction-list'},
                                    ]
                                 },

                                        ]
                            },
                            
                            {
                                label: 'Savings', icon: 'pi pi-fw pi-shopping-bag',
                                    items: [
                                        {label: 'Create', icon: 'pi pi-fw pi-plus', to:''},

                                        // {label: 'List', icon: 'pi pi-fw pi-list', to:''},
                                        // {label: 'Upload', icon: 'pi pi-fw pi-file-excel'},

                                        {
                                        label:'IPPIS', icon: 'pi pi-fw pi-briefcase',
                                        items:[
                                        {label: 'Upload Saving', icon: 'pi pi-fw pi-upload', to:'/upload_saving'},
                                        {label: 'Master List', icon: 'pi pi-fw pi-list', to:'/saving-master-list'},
                                    ]
                                 },     
                                    ]
                            }
                    ]
                },
                
                // Reports
                
                {
                    label: 'Reports',
                    items: [
                        {
                        label: 'Deposit Statement', icon: 'pi pi-fw pi-envelope', to: '/deposit/statement-bydate'
                        },  
                        {label: 'Loan Balances', icon: 'pi pi-fw pi-check-square', to:'/loan-balances/'},   
                    ]
                },

//******************** */

            ]
        }
    },
    watch: {
        $route() {
            this.menuActive = false;
            this.$toast.removeAllGroups();
        }
    },
    //  mounted(){
    //     const my_role = localStorage.getItem('myStatus')
    //     this.myRole = my_role
    // },

    methods: {
        ...mapMutations(['initializeUsername','setStaff','setNormal','setEmployee','setUsername']),
        ...mapActions(['Me']),

        onWrapperClick() {
            if (!this.menuClick) {
                this.overlayMenuActive = false;
                this.mobileMenuActive = false;
            }

            this.menuClick = false;
        },
        onMenuToggle() {
            this.menuClick = true;

            if (this.isDesktop()) {
                if (this.layoutMode === 'overlay') {
					if(this.mobileMenuActive === true) {
						this.overlayMenuActive = true;
					}

                    this.overlayMenuActive = !this.overlayMenuActive;
					this.mobileMenuActive = false;
                }
                else if (this.layoutMode === 'static') {
                    this.staticMenuInactive = !this.staticMenuInactive;
                }
            }
            else {
                this.mobileMenuActive = !this.mobileMenuActive;
            }

            event.preventDefault();
        },
        onSidebarClick() {
            this.menuClick = true;
        },
        onMenuItemClick(event) {
            if (event.item && !event.item.items) {
                this.overlayMenuActive = false;
                this.mobileMenuActive = false;
            }
        },
		onLayoutChange(layoutMode) {
			this.layoutMode = layoutMode;
		},
        addClass(element, className) {
            if (element.classList)
                element.classList.add(className);
            else
                element.className += ' ' + className;
        },
        removeClass(element, className) {
            if (element.classList)
                element.classList.remove(className);
            else
                element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        },
        isDesktop() {
            return window.innerWidth >= 992;
        },
        isSidebarVisible() {
            if (this.isDesktop()) {
                if (this.layoutMode === 'static')
                    return !this.staticMenuInactive;
                else if (this.layoutMode === 'overlay')
                    return this.overlayMenuActive;
            }

            return true;
        }
    },
    computed: {
        ...mapState(['user','normal','staff','employee']),
        ...mapGetters(['user_Detail','getStaff','getNormal','getEmployee','getUsername','getAuthentication']),
        containerClass() {
            return ['layout-wrapper', {
                'layout-overlay': this.layoutMode === 'overlay',
                'layout-static': this.layoutMode === 'static',
                'layout-static-sidebar-inactive': this.staticMenuInactive && this.layoutMode === 'static',
                'layout-overlay-sidebar-active': this.overlayMenuActive && this.layoutMode === 'overlay',
                'layout-mobile-sidebar-active': this.mobileMenuActive,
				'p-input-filled': this.$primevue.config.inputStyle === 'filled',
				'p-ripple-disabled': this.$primevue.config.ripple === false
            }];
        },
        logo() {
            return (this.$appState.darkTheme) ? "images/logo-white.svg" : "images/logo.svg";
        },
        // userRole(){
        //     return this.$store.state.user.isStaff
        // }
    },
    beforeUpdate() {
        if (this.mobileMenuActive)
            this.addClass(document.body, 'body-overflow-hidden');
        else
            this.removeClass(document.body, 'body-overflow-hidden');
    },
    // use before to initialize the store
    beforeCreate(){
    
    this.$store.commit('initializeStore')
    

   

    const token = this.$store.state.auth.user.token

    if(token){
    axios.defaults.headers.common['Authorization'] = "Token " + token
    }else{
     axios.defaults.headers.common['Authorization'] = ""
    }

  
},
mounted() {
    // this.$store.commit('initializeStatus')
    // this.$store.commit('initializeUsername')


},
created() {
this.initializeUsername()
this.Me().then(()=>{
				this.setStaff(this.user_Detail.is_staff )
				this.setEmployee(this.user_Detail.is_employee)
				this.setNormal(this.user_Detail.is_normal)
				this.setUsername(this.user_Detail.username)
				
			}) 

},

    components: {
        'AppTopBar': AppTopBar,
        'AppMenu': AppMenu,
        // 'AppConfig': AppConfig,
        'AppFooter': AppFooter,
    }
}
</script>

<style lang="scss">
@import './App.scss';


button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}
.submit{
    text-align: left;
}
.error{
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
    text-align: center;
}
.submit-button{
    width: 20%;
   
}

.list-heading{
    font-weight:bold;
    font-size:17px;
}


// profile heading
.user-profile{
  display:grid;
  /* grid-template-columns: 1fr 3fr; */
  width: 100%;
  padding: 0px;

}
.user-panel{
  display: flex;
  flex-direction:column;
  /* margin-right:50px; */
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #DFE3E8;

}


/* in use */

.user-profile-item {
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

h5 {
  font-weight: bold;
}

p {
  font-weight: normal;
}

/* end in use */

</style>
