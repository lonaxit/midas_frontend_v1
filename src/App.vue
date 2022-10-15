<template>
	<div :class="containerClass" @click="onWrapperClick">
        <AppTopBar @menu-toggle="onMenuToggle" />
        <div class="layout-sidebar" @click="onSidebarClick">
            <div v-if="$store.state.auth.role">
            <AppMenu :model="menu" @menuitem-click="onMenuItemClick" />
            </div>
            <div v-else>
            <AppMenu :model="usermenu" @menuitem-click="onMenuItemClick" />  
            </div>
            
        </div>

        <div class="layout-main-container">
            <div class="layout-main">
                 <Toast />
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
                          label: 'Dashboard', icon: 'pi pi-fw pi-box', to: '/dashboard'
                            
                        },
                         {
                             label: 'Loans', icon: 'pi pi-fw pi-home', to: '/user'
                            
                        }
                    ]
                }
            ],
            menu : [

                {
                    label: 'Home',
                    items: [{
                        label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/dashboard'
                    }]
                },

                {
                    label: 'Users',
                    items: [
                        {
                            label: 'Profile', icon: 'pi pi-fw pi-info',
                            items:[
                                {label: 'View', icon:'pi pi-fw pi-eye', to: ''},
                                {
                                label: 'Change Paasword', icon: 'pi pi-fw pi-lock', to: ''
                                }
                            ]
                        },
                        {
                        label: 'New', icon: 'pi pi-fw pi-user-plus', to: ''
                        },
                         {
                        label: 'List', icon: 'pi pi-fw pi-users', to: '/all-users'
                        },
                         {
                        label: 'Staff', icon: 'pi pi-fw pi-user', to: ''
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

                                {label: 'Loan Balances', icon: 'pi pi-fw pi-minus', to:''},
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

                                        {label: 'List', icon: 'pi pi-fw pi-list', to:''},
                                        {label: 'Upload', icon: 'pi pi-fw pi-file-excel'},

                                        {
                                        label:'IPPIS', 
                                        items:[
                                        {label: 'Upload Master', icon: 'pi pi-fw pi-upload', to:''},
                                        {label: 'Master List', icon: 'pi pi-fw pi-list', to:''},
                                    ]
                                 },
                                        

                                    ]
                            }
                    ]
                },
                

//******************** */

				{
					label: 'UI Components', icon: 'pi pi-fw pi-sitemap',
					items: [
						{label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/formlayout'},
						{label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/input'},
                        {label: "Float Label", icon: "pi pi-fw pi-bookmark", to: "/floatlabel"},
                        {label: "Invalid State", icon: "pi pi-fw pi-exclamation-circle", to: "/invalidstate"},
						{label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/button'},
						{label: 'Table', icon: 'pi pi-fw pi-table', to: '/table'},
						{label: 'List', icon: 'pi pi-fw pi-list', to: '/list'},
						{label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/tree'},
						{label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/panel'},
						{label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/overlay'},
                        {label: "Media", icon: "pi pi-fw pi-image", to: "/media"},
						{label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/menu'},
						{label: 'Message', icon: 'pi pi-fw pi-comment', to: '/messages'},
						{label: 'File', icon: 'pi pi-fw pi-file', to: '/file'},
						{label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/chart'},
						{label: 'Misc', icon: 'pi pi-fw pi-circle-off', to: '/misc'},
					]
				},
                {
                    label: 'PrimeBlocks',
                    items: [
                        {label: 'Free Blocks', icon: 'pi pi-fw pi-eye', to: '/blocks', badge: "NEW"},
                        {label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: 'https://www.primefaces.org/primeblocks-vue', target: '_blank'}
                    ]
                },
                {
                    label: 'Utilities',
                    items: [
                        {label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', to: '/icons'},
                        {label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: 'https://www.primefaces.org/primeflex/', target: '_blank'},
                    ]
                },
				{
					label: 'Pages', icon: 'pi pi-fw pi-clone',
					items: [
						{label: 'Crud', icon: 'pi pi-fw pi-user-edit', to: '/crud'},
						{label: 'Timeline', icon: 'pi pi-fw pi-calendar', to: '/timeline'},
                        {label: 'Landing', icon: 'pi pi-fw pi-globe', to: '/landing'},
                        {label: 'Login', icon: 'pi pi-fw pi-sign-in', to: '/login'},
                        {label: 'Error', icon: 'pi pi-fw pi-times-circle', to: '/error'},
                        {label: 'Not Found', icon: 'pi pi-fw pi-exclamation-circle', to: '/notfound'},
                        {label: 'Access Denied', icon: 'pi pi-fw pi-lock', to: '/access'},
						{label: 'Empty', icon: 'pi pi-fw pi-circle-off', to: '/empty'},
					]
				},

                {
                    label: 'Menu Hierarchy', icon: 'pi pi-fw pi-search',
                    items: [
                        {
                            label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
                            items: [
                                {
                                    label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
                                    items: [
                                        {label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark'},
                                        {label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark'},
                                        {label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark'},
                                    ]
                                },
                                {
                                    label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
                                    items: [
                                        {label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark'},
                                        {label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-bookmark'}
                                    ]
                                },
                            ]
                        },


                        {
                            label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
                            items: [
                                {
                                    label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
                                    items: [
                                        {label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark'},
                                        {label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark'},
                                        {label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-bookmark'},
                                    ]
                                },
                                {
                                    label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
                                    items: [
                                        {label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark'},
                                        {label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-bookmark'}
                                    ]
                                }
                            ]
                        }
                    ]
                },




                // {
                //     label: 'Get Started', 
                //     items: [
                //         {label: 'Documentation', icon: 'pi pi-fw pi-question', command: () => {window.location = "#/documentation"}},
                //         {label: 'View Source', icon: 'pi pi-fw pi-search', command: () => {window.location = "https://github.com/primefaces/sakai-vue"}}
                //     ]
                // }
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
    this.$store.commit('initializeStatus')
    this.$store.commit('initializeUsername')


},
created() {
    

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

</style>
