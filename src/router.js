import { createRouter, createWebHistory } from 'vue-router'
// old commented out
// import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import Home from './components/midas/Admin/Home.vue'


const routes = [
    {
        path: '/',
        name: 'app',
        component: App,
        children: [


            {
                path: '/home',
                name: 'home',
                component: Home
            },
            {
                path: '/user-dashboard',
                name: 'userdashboard',
                component: () => import('./components/midas/cooperator/UserDashboard.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/dashboard',
                name: 'dashboard',
                component: () => import('./components/midas/Admin/Dashboard.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/add-scheme',
                name: 'create-scheme',
                component: () => import('./components/midas/Admin/pages/NewScheme.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/scheme-list',
                name: 'schemelist',
                component: () => import('./components/midas/Admin/pages/SchemeList.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/update-scheme/:id',
                name: 'update-scheme',
                component: () => import('./components/midas/Admin/pages/editScheme.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/add-product',
                name: 'create-product',
                component: () => import('./components/midas/Admin/pages/products/NewProduct.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/list-product',
                name: 'list-product',
                component: () => import('./components/midas/Admin/pages/products/ProductList.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/update-product/:id',
                name: 'update-product',
                component: () => import('./components/midas/Admin/pages/products/editProduct.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/upload-loan',
                name: 'upload-loan',
                component: () => import('./components/midas/Admin/pages/Loans/UploadLoans.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/add-loan',
                name: 'add-loan',
                component: () => import('./components/midas/Admin/pages/Loans/NewLoan.vue'),
                meta: { requiresAuth: true }
            },

            {
                path: '/all-loans',
                name: 'all-loans',
                component: () => import('./components/midas/Admin/pages/Loans/AllLoans.vue'),
                meta: { requiresAuth: true }
            },

            {
                path: '/:id/loan',
                name: 'loan-detail',
                component: () => import('./components/midas/Admin/pages/Loans/LoanDetail.vue'),
                meta: { requiresAuth: true }
            },

            {
                path: '/loan/:loanId/edit',
                name: 'loan-edit',
                component: () => import('./components/midas/Admin/pages/Loans/EditLoan.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/loan/:loan_Id/transaction',
                name: 'loan-transaction',
                component: () => import('./components/midas/Admin/pages/Loans/LoanTransaction.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/loan-balances/',
                name: 'loan-balances',
                component: () => import('./components/midas/Admin/pages/Loans/LoanBalanceByDate.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/loan-balance-result/:start_date/:end_date',
                name: 'loan-balance-result',
                component: () => import('./components/midas/Admin/pages/Loans/LoanBalancesResult.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/deduction/:deductionId/edit',
                name: 'deduction-edit',
                component: () => import('./components/midas/Admin/pages/Loans/DeductionEdit.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/loan/:loan_Id/deduction-statement',
                name: 'loan-deduction-statement',
                component: () => import('./components/midas/Admin/pages/Loans/LoanDeductionStatement.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/bulk-deductions',
                name: 'bulk-deductions',
                component: () => import('./components/midas/Admin/pages/Loans/NewDeductions.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/upload_ippis_loan_deductions',
                name: 'upload-ippis-deductions',
                component: () => import('./components/midas/Admin/pages/Loans/UploadIppisLoanDeductions.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/ippis-deduction-list',
                name: 'ippis-deduction-list',
                component: () => import('./components/midas/Admin/pages/Loans/IppisDeductionList.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/:masterdeductionid/master-deduction',
                name: 'masterdeduction-detail',
                component: () => import('./components/midas/Admin/pages/Loans/IppisDeductionDetail.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/masterloandeduction/:ippisdeductionid/edit',
                name: 'masterloandeduction-edit',
                component: () => import('./components/midas/Admin/pages/Loans/EditIPPISMasterDeduction.vue'),
                meta: { requiresAuth: true }
            },

            // saving
            {
                path: '/upload_saving',
                name: 'upload-saving',
                component: () => import('./components/midas/Admin/pages/Savings/UploadSaving.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/saving-master-list',
                name: 'saving-master-list',
                component: () => import('./components/midas/Admin/pages/Savings/MasterSavingList.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/:mastersavingid/master-saving',
                name: 'mastersaving-detail',
                component: () => import('./components/midas/Admin/pages/Savings/MasterSavingDetail.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/mastersaving/:id/edit',
                name: 'mastersaving-edit',
                component: () => import('./components/midas/Admin/pages/Savings/EditMasterSavingDetail.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/saving/:userid/deposit',
                name: 'saving-deposit',
                component: () => import('./components/midas/Admin/pages/Savings/SavingTransaction.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/usersaving/:userid/list',
                name: 'user-saving',
                component: () => import('./components/midas/Admin/pages/Savings/UserSavingList.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/saving-deposit/:id/edit',
                name: 'saving-deposit-edit',
                component: () => import('./components/midas/Admin/pages/Savings/EditSavingRecord.vue'),
                meta: { requiresAuth: true }
            },
            // general statement
            {
                path: '/deposit/:userid/statement',
                name: 'deposit-statement',
                component: () => import('./components/midas/Admin/pages/Savings/SavingStatement.vue'),
                meta: { requiresAuth: true }
            },
            // statement by date
            {
                path: '/deposit/statement-bydate',
                name: 'deposit-statement-bydate',
                component: () => import('./components/midas/Admin/pages/Savings/FindDepositStatementByDate.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/:userid/:startdate/:enddate/deposit-statement',
                name: 'statement-of-saving',
                component: () => import('./components/midas/Admin/pages/Savings/DepositStatementByDateResult.vue'),
                meta: { requiresAuth: true }
            },

             {
                path: '/new-account',
                name: 'new-account',
                 component: () => import('./components/midas/Admin/pages/Profile/NewUser.vue'),
                 meta: { requiresAuth: true }
            },
            {
                path: '/:user_id/new-profile',
                name: 'new-profile',
                component: () => import('./components/midas/Admin/pages/Profile/NewProfile.vue'),
                meta: { requiresAuth: true }
            },

            {
                path: '/user-profile/:id',
                name: 'user-profile',
                component: () => import('./components/midas/Admin/pages/Profile/UserPage.vue'),
                meta: { requiresAuth: true }
            },

            {
                path: '/user-profile-detail/',
                name: 'profile-detail',
                component: () => import('./components/midas/Admin/pages/Profile/ProfileDetail.vue'),
                meta: { requiresAuth: true }
            },

            {
                path: '/my-profile',
                name: 'my-profile',
                component: () => import('./components/midas/cooperator/ProfileInfo.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/change-pass',
                name: 'change-pass',
                component: () => import('./components/midas/cooperator/ChangeLogin.vue'),
                meta: { requiresAuth: true }
            },

            {
                path: '/change-password/:userid',
                name: 'change-settings',
                component: () => import('./components/midas/Admin/pages/Profile/ChangePassword.vue'),
                meta: { requiresAuth: true }
            },

            {
                path: '/my-loans',
                name: 'my-loans',
                component: () => import('./components/midas/cooperator/MyLoans.vue'),
                meta: { requiresAuth: true }
            },

            {
                path: '/my-deposits',
                name: 'my-deposits',
                component: () => import('./components/midas/cooperator/MyDepositList.vue'),
                meta: { requiresAuth: true }
            },

            {
                path: '/user-active-loans/:userid',
                name: 'user-active-loans',
                component: () => import('./components/midas/cooperator/userActiveLoans.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/:startdate/:enddate/deposit-statement',
                name: 'user-deposit-statement',
                component: () => import('./components/midas/cooperator/DepositStatementSheet.vue'),
                meta: { requiresAuth: true }
            },

            {
                path: '/user-deposit-form',
                name: 'user-deposit-form',
                component: () => import('./components/midas/cooperator/MyDepositStatementForm.vue'),
                meta: { requiresAuth: true }
            },

            {
                path: '/user-loan-detail/:loanid',
                name: 'user-loan-detail',
                component: () => import('./components/midas/cooperator/userLoanDetail.vue'),
                meta: { requiresAuth: true }
            },

            {
                path: '/all-users',
                name: 'all-users',
                component: () => import('./components/midas/Admin/pages/Profile/ListUsers.vue'),
                meta: { requiresAuth: true }
            },    
          
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./pages/Auth/Login.vue')
    },

    {
        path: '',
        name: 'landing',
        component: () => import('./pages/web/public.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('./pages/web/About.vue')
    },
    {
        path: '/services',
        name: 'services',
        component: () => import('./pages/web/Services.vue')
    },
   
   
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

//   old commented out
// const router = createRouter({
//     history: createWebHashHistory(),
//     routes,
// });

export default router;
