(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51b85d4e"],{"474e":function(e,t,c){"use strict";c.r(t);var l=c("7a23");const n={key:0},a={class:"mb-3 user-profile"},o={class:"user-panel"},r={class:"username text-900 font-bold text-xl"},s={class:"grid"},i={class:"col-12 lg:col-6 xl:col-3"},d={class:"card mb-0"},b={class:"flex justify-content-between mb-3"},m={class:"block text-500 font-medium mb-3"},j={class:"text-900 font-bold text-xl"},O=Object(l["createElementVNode"])("div",{class:"flex align-items-center justify-content-center bg-blue-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[Object(l["createElementVNode"])("i",{class:"pi pi-shopping-cart text-blue-500 text-xl"})],-1),u={class:"text-green-500 font-medium mr-3"},p={class:"col-12 lg:col-6 xl:col-3"},f={class:"card mb-0"},y={class:"flex justify-content-between mb-3"},x=Object(l["createElementVNode"])("span",{class:"block text-500 font-medium mb-3"}," Deductions",-1),N={class:"text-900 font-bold text-xl"},E=Object(l["createElementVNode"])("div",{class:"flex align-items-center justify-content-center bg-orange-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[Object(l["createElementVNode"])("i",{class:"pi pi-map-marker text-orange-500 text-xl"})],-1),v={class:"text-red-500 font-medium mr-3"},V={class:"col-12 lg:col-6 xl:col-3"},g={class:"card mb-0"},w={class:"flex justify-content-between mb-3"},h=Object(l["createElementVNode"])("span",{class:"block text-500 font-medium mb-3"},"Timeline",-1),D={class:"text-900 font-bold text-xl"},_=Object(l["createElementVNode"])("div",{class:"flex align-items-center justify-content-center bg-cyan-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[Object(l["createElementVNode"])("i",{class:"pi pi-inbox text-cyan-500 text-xl"})],-1),k={class:"text-red-600 font-medium"},S={class:"col-12 lg:col-6 xl:col-3"},B={class:"card mb-0"},M={class:"flex justify-content-between mb-3"},C=Object(l["createElementVNode"])("span",{class:"block text-500 font-medium mb-3"},"More",-1),L={class:"text-900 font-bold text-xl"},I=Object(l["createElementVNode"])("div",{class:"flex align-items-center justify-content-center bg-purple-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[Object(l["createElementVNode"])("i",{class:"pi pi-comment text-purple-500 text-xl"})],-1),$=Object(l["createElementVNode"])("span",{class:"text-cyan-500"},[Object(l["createElementVNode"])("i",{class:"pi pi-download"})],-1),F={key:0},U={class:"list-none p-0 m-0"},H=Object(l["createElementVNode"])("li",{class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},[Object(l["createElementVNode"])("div",{class:"w-6 md:w-2 flex justify-content-space-evenly list-heading"}," Date "),Object(l["createElementVNode"])("div",{class:"w-6 md:w-2 flex justify-content-space-evenly list-heading"}," Narration "),Object(l["createElementVNode"])("div",{class:"w-6 md:w-2 flex justify-content-space-evenly list-heading"}," Credit "),Object(l["createElementVNode"])("div",{class:"w-6 md:w-2 flex justify-content-space-evenly list-heading"}," Debit "),Object(l["createElementVNode"])("div",{class:"w-6 md:w-2 flex justify-content-space-evenly list-heading"}," Balance ")],-1),J={class:"w-6 md:w-2 flex justify-content-space-evenly"},T={class:"w-6 md:w-2 flex justify-content-space-evenly"},z={class:"w-6 md:w-2 flex justify-content-space-evenly"},G={class:"w-6 md:w-2 flex justify-content-space-evenly"},P={class:"w-6 md:w-2 flex justify-content-space-evenly"},q={key:1},A=Object(l["createElementVNode"])("span",null,[Object(l["createElementVNode"])("i",{class:"pi pi-spin pi-spinner",style:{"font-size":"2rem"}})],-1),K=[A];function Q(e,t,c,A,Q,R){const W=Object(l["resolveComponent"])("router-link"),X=Object(l["resolveComponent"])("ListHeader");return Q.loader?(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",n,[Object(l["createElementVNode"])("div",null,[Object(l["createElementVNode"])("div",a,[Object(l["createElementVNode"])("div",o,[Object(l["createElementVNode"])("h1",r,Object(l["toDisplayString"])(e.loan_Detail.product_name)+" Detail",1)])]),Object(l["createElementVNode"])("div",s,[Object(l["createElementVNode"])("div",i,[Object(l["createElementVNode"])("div",d,[Object(l["createElementVNode"])("div",b,[Object(l["createElementVNode"])("div",null,[Object(l["createElementVNode"])("span",m,Object(l["toDisplayString"])(e.loan_Detail.product_name),1),Object(l["createElementVNode"])("div",j,Object(l["toDisplayString"])(R.formatMoney(e.loan_Detail.approved_amount)),1)]),O]),Object(l["createElementVNode"])("span",u,"Tenor "+Object(l["toDisplayString"])(e.loan_Detail.tenor),1)])]),Object(l["createElementVNode"])("div",p,[Object(l["createElementVNode"])("div",f,[Object(l["createElementVNode"])("div",y,[Object(l["createElementVNode"])("div",null,[x,Object(l["createElementVNode"])("div",N,Object(l["toDisplayString"])(R.formatMoney(e.loan_Detail.totaldeduction)),1)]),E]),Object(l["createElementVNode"])("span",v,Object(l["toDisplayString"])(R.formatMoney(e.loan_Detail.monthly_deduction))+" Monthly",1)])]),Object(l["createElementVNode"])("div",V,[Object(l["createElementVNode"])("div",g,[Object(l["createElementVNode"])("div",w,[Object(l["createElementVNode"])("div",null,[h,Object(l["createElementVNode"])("div",D,Object(l["toDisplayString"])(e.loan_Detail.start_date),1)]),_]),Object(l["createElementVNode"])("span",k,Object(l["toDisplayString"])(e.loan_Detail.end_date),1)])]),Object(l["createElementVNode"])("div",S,[Object(l["createElementVNode"])("div",B,[Object(l["createElementVNode"])("div",M,[Object(l["createElementVNode"])("div",null,[C,Object(l["createElementVNode"])("div",L,Object(l["toDisplayString"])(R.formatMoney(e.loan_Detail.total_balance)),1)]),I]),Object(l["createVNode"])(W,{to:{name:"loan-deduction-statement",params:{loan_Id:e.loan_Detail.id}}},{default:Object(l["withCtx"])(()=>[$]),_:1},8,["to"])])])])]),0!=e.loan_Detail.deductions.length?(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",F,[Object(l["createElementVNode"])("ul",U,[Object(l["createVNode"])(X,null,{useInsideUl:Object(l["withCtx"])(()=>[H]),_:1}),(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(e.loan_Detail.deductions,e=>(Object(l["openBlock"])(),Object(l["createElementBlock"])("li",{class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap",key:e.id},[Object(l["createElementVNode"])("div",J,Object(l["toDisplayString"])(e.transaction_date),1),Object(l["createElementVNode"])("div",T,Object(l["toDisplayString"])(e.narration),1),Object(l["createElementVNode"])("div",z,Object(l["toDisplayString"])(e.credit),1),Object(l["createElementVNode"])("div",G,Object(l["toDisplayString"])(e.debit),1),Object(l["createElementVNode"])("div",P,Object(l["toDisplayString"])(e.loan_balance),1)]))),128))])])):Object(l["createCommentVNode"])("",!0)])):(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",q,K))}c("bc3a");var R=c("b33a"),W=c("5502"),X=c("9dbd"),Y={data(){return{userProfile:{},loader:!1}},components:{ListHeader:R["a"]},methods:{...Object(W["b"])(["getLoanDetail"]),formatMoney(e){return Object(X["a"])(e)}},computed:{...Object(W["c"])(["user_loader","loan_loader","fullName","user_Detail","profile_Detail","loan_Detail"])},created(){this.getLoanDetail(this.$route.params.loanid).then(()=>{this.loader=!0}).catch(e=>{this.$router.push("/all-loans"),this.$notify({text:"Not Found",duration:5e3,type:"error"})})}},Z=c("6b0d"),ee=c.n(Z);const te=ee()(Y,[["render",Q]]);t["default"]=te},"9dbd":function(e,t,c){"use strict";function l(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"NGN"}).format(e)}c.d(t,"a",(function(){return l}))},b33a:function(e,t,c){"use strict";var l=c("7a23");function n(e,t,c,n,a,o){return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",null,[Object(l["renderSlot"])(e.$slots,"useInsideUl")])}var a={},o=c("6b0d"),r=c.n(o);const s=r()(a,[["render",n]]);t["a"]=s}}]);
//# sourceMappingURL=chunk-51b85d4e.368f9446.js.map