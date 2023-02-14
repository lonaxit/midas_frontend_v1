import { createRouter, createWebHistory } from 'vue-router'
// old commented out
// import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import Home from './components/midas/Admin/Home.vue'
import publicFace from './components/midas/Admin/pages/PublicFace/public.vue'




const routes = [
    {
        path: '/',
        name: 'app',
        component: App,
        children: [

            {
                path: '/',
                name: 'root',
                component:publicFace
            },

            {
                path: '/home',
                name: 'home',
                component: Home
            },
            {
                path: '/user-dashboard',
                name: 'userdashboard',
                component: () => import('./components/midas/cooperator/UserDashboard.vue')
            },
            {
                path: '/dashboard',
                name: 'dashboard',
                component: () => import('./components/midas/Admin/Dashboard.vue')
            },
            {
                path: '/add-scheme',
                name: 'create-scheme',
                component: () => import('./components/midas/Admin/pages/NewScheme.vue')
            },
            {
                path: '/scheme-list',
                name: 'schemelist',
                component: () => import('./components/midas/Admin/pages/SchemeList.vue')
            },
            {
                path: '/update-scheme/:id',
                name: 'update-scheme',
                component: () => import('./components/midas/Admin/pages/editScheme.vue')
            },
            {
                path: '/add-product',
                name: 'create-product',
                component: () => import('./components/midas/Admin/pages/products/NewProduct.vue')
            },
            {
                path: '/list-product',
                name: 'list-product',
                component: () => import('./components/midas/Admin/pages/products/ProductList.vue')
            },
            {
                path: '/update-product/:id',
                name: 'update-product',
                component: () => import('./components/midas/Admin/pages/products/editProduct.vue')
            },
            {
                path: '/upload-loan',
                name: 'upload-loan',
                component: () => import('./components/midas/Admin/pages/Loans/UploadLoans.vue')
            },
            {
                path: '/add-loan',
                name: 'add-loan',
                component: () => import('./components/midas/Admin/pages/Loans/NewLoan.vue')
            },

            {
                path: '/all-loans',
                name: 'all-loans',
                component: () => import('./components/midas/Admin/pages/Loans/AllLoans.vue')
            },

            {
                path: '/:id/loan',
                name: 'loan-detail',
                component: () => import('./components/midas/Admin/pages/Loans/LoanDetail.vue')
            },

            {
                path: '/loan/:loanId/edit',
                name: 'loan-edit',
                component: () => import('./components/midas/Admin/pages/Loans/EditLoan.vue')
            },
            {
                path: '/loan/:loan_Id/transaction',
                name: 'loan-transaction',
                component: () => import('./components/midas/Admin/pages/Loans/LoanTransaction.vue')
            },
            {
                path: '/loan-balances/',
                name: 'loan-balances',
                component: () => import('./components/midas/Admin/pages/Loans/LoanBalanceByDate.vue')
            },
            {
                path: '/loan-balance-result/:start_date/:end_date',
                name: 'loan-balance-result',
                component: () => import('./components/midas/Admin/pages/Loans/LoanBalancesResult.vue')
            },
            {
                path: '/deduction/:deductionId/edit',
                name: 'deduction-edit',
                component: () => import('./components/midas/Admin/pages/Loans/DeductionEdit.vue')
            },
            {
                path: '/loan/:loan_Id/deduction-statement',
                name: 'loan-deduction-statement',
                component: () => import('./components/midas/Admin/pages/Loans/LoanDeductionStatement.vue')
            },
            {
                path: '/bulk-deductions',
                name: 'bulk-deductions',
                component: () => import('./components/midas/Admin/pages/Loans/NewDeductions.vue')
            },
            {
                path: '/upload_ippis_loan_deductions',
                name: 'upload-ippis-deductions',
                component: () => import('./components/midas/Admin/pages/Loans/UploadIppisLoanDeductions.vue')
            },
            {
                path: '/ippis-deduction-list',
                name: 'ippis-deduction-list',
                component: () => import('./components/midas/Admin/pages/Loans/IppisDeductionList.vue')
            },
            {
                path: '/:masterdeductionid/master-deduction',
                name: 'masterdeduction-detail',
                component: () => import('./components/midas/Admin/pages/Loans/IppisDeductionDetail.vue')
            },
            {
                path: '/masterloandeduction/:ippisdeductionid/edit',
                name: 'masterloandeduction-edit',
                component: () => import('./components/midas/Admin/pages/Loans/EditIPPISMasterDeduction.vue')
            },

            // saving
            {
                path: '/upload_saving',
                name: 'upload-saving',
                component: () => import('./components/midas/Admin/pages/Savings/UploadSaving.vue')
            },
            {
                path: '/saving-master-list',
                name: 'saving-master-list',
                component: () => import('./components/midas/Admin/pages/Savings/MasterSavingList.vue')
            },
            {
                path: '/:mastersavingid/master-saving',
                name: 'mastersaving-detail',
                component: () => import('./components/midas/Admin/pages/Savings/MasterSavingDetail.vue')
            },
            {
                path: '/mastersaving/:id/edit',
                name: 'mastersaving-edit',
                component: () => import('./components/midas/Admin/pages/Savings/EditMasterSavingDetail.vue')
            },
            {
                path: '/saving/:userid/deposit',
                name: 'saving-deposit',
                component: () => import('./components/midas/Admin/pages/Savings/SavingTransaction.vue')
            },
            {
                path: '/usersaving/:userid/list',
                name: 'user-saving',
                component: () => import('./components/midas/Admin/pages/Savings/UserSavingList.vue')
            },
            {
                path: '/saving-deposit/:id/edit',
                name: 'saving-deposit-edit',
                component: () => import('./components/midas/Admin/pages/Savings/EditSavingRecord.vue')
            },
            // general statement
            {
                path: '/deposit/:userid/statement',
                name: 'deposit-statement',
                component: () => import('./components/midas/Admin/pages/Savings/SavingStatement.vue')
            },
            // statement by date
            {
                path: '/deposit/statement-bydate',
                name: 'deposit-statement-bydate',
                component: () => import('./components/midas/Admin/pages/Savings/FindDepositStatementByDate.vue')
            },
            {
                path: '/:userid/:startdate/:enddate/deposit-statement',
                name: 'statement-of-saving',
                component: () => import('./components/midas/Admin/pages/Savings/DepositStatementByDateResult.vue')
            },

             {
                path: '/new-account',
                name: 'new-account',
                component: () => import('./components/midas/Admin/pages/Profile/NewUser.vue')
            },
            {
                path: '/:user_id/new-profile',
                name: 'new-profile',
                component: () => import('./components/midas/Admin/pages/Profile/NewProfile.vue')
            },

            {
                path: '/user-profile/:id',
                name: 'user-profile',
                component: () => import('./components/midas/Admin/pages/Profile/UserPage.vue')
            },

            {
                path: '/user-profile-detail/',
                name: 'profile-detail',
                component: () => import('./components/midas/Admin/pages/Profile/ProfileDetail.vue')
            },

            {
                path: '/my-profile',
                name: 'my-profile',
                component: () => import('./components/midas/cooperator/ProfileInfo.vue')
            },
            {
                path: '/change-pass',
                name: 'change-pass',
                component: () => import('./components/midas/cooperator/ChangeLogin.vue')
            },

            {
                path: '/change-password',
                name: 'change-settings',
                component: () => import('./components/midas/Admin/pages/Profile/ChangePassword.vue')
            },

            {
                path: '/my-loans',
                name: 'my-loans',
                component: () => import('./components/midas/cooperator/MyLoans.vue')
            },

            {
                path: '/my-deposits',
                name: 'my-deposits',
                component: () => import('./components/midas/cooperator/MyDepositList.vue')
            },

            {
                path: '/user-active-loans/:userid',
                name: 'user-active-loans',
                component: () => import('./components/midas/cooperator/userActiveLoans.vue')
            },
            {
                path: '/:startdate/:enddate/deposit-statement',
                name: 'user-deposit-statement',
                component: () => import('./components/midas/cooperator/DepositStatementSheet.vue')
            },

            {
                path: '/user-deposit-form',
                name: 'user-deposit-form',
                component: () => import('./components/midas/cooperator/MyDepositStatementForm.vue')
            },

            {
                path: '/user-loan-detail/:loanid',
                name: 'user-loan-detail',
                component: () => import('./components/midas/cooperator/userLoanDetail.vue')
            },

            {
                path: '/all-users',
                name: 'all-users',
                component: () => import('./components/midas/Admin/pages/Profile/ListUsers.vue')
            },
          
            {
                path: '/formlayout',
                name: 'formlayout',
                component: () => import('./components/FormLayoutDemo.vue')
            },
            {
                path: '/input',
                name: 'input',
                component: () => import('./components/InputDemo.vue')
            },
            {
                path: '/floatlabel',
                name: 'floatlabel',
                component: () => import('./components/FloatLabelDemo.vue')
            },
            {
                path: '/invalidstate',
                name: 'invalidstate',
                component: () => import('./components/InvalidStateDemo.vue')
            },
            {
                path: '/button',
                name: 'button',
                component: () => import('./components/ButtonDemo.vue')
            },
            {
                path: '/table',
                name: 'table',
                component: () => import('./components/TableDemo.vue')
            },
            {
                path: '/list',
                name: 'list',
                component: () => import('./components/ListDemo.vue')
            },
            {
                path: '/tree',
                name: 'tree',
                component: () => import('./components/TreeDemo.vue')
            },
            {
                path: '/panel',
                name: 'panel',
                component: () => import('./components/PanelsDemo.vue')
            },
            {
                path: '/overlay',
                name: 'overlay',
                component: () => import('./components/OverlayDemo.vue')
            },
            {
                path: '/media',
                name: 'media',
                component: () => import('./components/MediaDemo.vue')
            },
            {
                path: '/menu',
                component: () => import('./components/MenuDemo.vue'),
                children: [
                    {
                        path: '',
                        component: () => import('./components/menu/PersonalDemo.vue')
                    },
                    {
                        path: '/menu/seat',
                        component: () => import('./components/menu/SeatDemo.vue')
                    },
                    {
                        path: '/menu/payment',
                        component: () => import('./components/menu/PaymentDemo.vue')
                    },
                    {
                        path: '/menu/confirmation',
                        component: () => import('./components/menu/ConfirmationDemo.vue')
                    },
                ],
            },
            {
                path: '/messages',
                name: 'messages',
                component: () => import('./components/MessagesDemo.vue')
            },
            {
                path: '/file',
                name: 'file',
                component: () => import('./components/FileDemo.vue')
            },
            {
                path: '/chart',
                name: 'chart',
                component: () => import('./components/ChartDemo.vue')
            },
            {
                path: '/misc',
                name: 'misc',
                component: () => import('./components/MiscDemo.vue')
            },
            {
                path: '/crud',
                name: 'crud',
                component: () => import('./pages/CrudDemo.vue')
            },
            {
                path: '/timeline',
                name: 'timeline',
                component: () => import('./pages/TimelineDemo.vue')
            },
            {
                path: '/empty',
                name: 'empty',
                component: () => import('./components/EmptyPage.vue')
            },
            {
                path: '/documentation',
                name: 'documentation',
                component: () => import('./components/Documentation.vue')
            },
            {
                path: '/blocks',
                name: 'blocks',
                component: () => import('./components/BlocksDemo.vue')
            },
            {
                path: '/icons',
                name: 'icons',
                component: () => import('./components/IconsDemo.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./pages/Auth/Login.vue')
    },
    {
        path: '/landing',
        name: 'landing',
        component: () => import('./pages/LandingDemo.vue')
    },
    {
        path: '/error',
        name: 'error',
        component: () => import('./pages/Error.vue')
    },
    {
        path: '/notfound',
        name: 'notfound',
        component: () => import('./pages/NotFound.vue')
    },
    {
        path: '/access',
        name: 'access',
        component: () => import('./pages/Access.vue')
    }
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
