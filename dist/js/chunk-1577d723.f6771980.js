(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1577d723"],{"9dbd":function(e,t,c){"use strict";function n(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"NGN"}).format(e)}c.d(t,"a",(function(){return n}))},b33a:function(e,t,c){"use strict";var n=c("7a23");function a(e,t,c,a,l,o){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Object(n["renderSlot"])(e.$slots,"useInsideUl")])}var l={},o=c("6b0d"),s=c.n(o);const r=s()(l,[["render",a]]);t["a"]=r},edee:function(e,t,c){"use strict";c.r(t);var n=c("7a23");const a={key:0},l={class:"grid"},o={class:"col-12 lg:col-12 xl:col-12"},s={class:"card mb-0"},r={class:"flex justify-content-between mb-3"},i=Object(n["createElementVNode"])("span",{class:"block text-500 font-bold mb-3"},"Debt",-1),d={class:"text-900 font-bold text-xl"},b=Object(n["createElementVNode"])("div",{class:"flex align-items-center justify-content-center bg-blue-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[Object(n["createElementVNode"])("i",{class:"pi pi-shopping-cart text-blue-500 text-xl"})],-1),m={class:"text-green-500 font-bold mr-5"},j={class:"text-500"},u={key:1,class:"mb-5"},p=Object(n["createElementVNode"])("span",null,[Object(n["createElementVNode"])("i",{class:"pi pi-spin pi-spinner",style:{"font-size":"2rem"}})],-1),O=[p],f={key:2},v=Object(n["createElementVNode"])("div",null,[Object(n["createElementVNode"])("h2",null,"Active Loans")],-1),y={class:"list-none p-0 m-0"},N=Object(n["createElementVNode"])("li",{class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},[Object(n["createElementVNode"])("div",{class:"w-6 md:w-2 flex justify-content-space-evenly list-heading"}," Product "),Object(n["createElementVNode"])("div",{class:"w-6 md:w-2 flex justify-content-space-evenly list-heading"}," Amount "),Object(n["createElementVNode"])("div",{class:"w-6 md:w-2 flex justify-content-space-evenly list-heading"}," Tenor "),Object(n["createElementVNode"])("div",{class:"w-6 md:w-2 flex justify-content-space-evenly list-heading"}," Balance "),Object(n["createElementVNode"])("div",{class:"w-6 md:w-2 flex justify-content-space-evenly list-heading"}," Action ")],-1),x={class:"w-6 md:w-2 flex justify-content-space-evenly"},E={class:"w-6 md:w-2 flex justify-content-space-evenly"},w={class:"w-6 md:w-2 flex justify-content-space-evenly"},V={class:"w-6 md:w-2 flex justify-content-space-evenly"},g={class:"w-6 md:w-2 flex justify-content-space-evenly"},h=Object(n["createElementVNode"])("span",{class:"text-cyan-500"},[Object(n["createElementVNode"])("i",{class:"pi pi-download"})],-1),k={key:3},B=Object(n["createElementVNode"])("h2",{class:"text-900 font-medium text-xl"}," No Active Loans Available",-1),L=[B];function D(e,t,c,p,B,D){const U=Object(n["resolveComponent"])("router-link"),_=Object(n["resolveComponent"])("ListHeader");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[B.loader?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",a,[Object(n["createElementVNode"])("div",l,[Object(n["createElementVNode"])("div",o,[Object(n["createElementVNode"])("div",s,[Object(n["createElementVNode"])("div",r,[Object(n["createElementVNode"])("div",null,[i,Object(n["createElementVNode"])("div",d,Object(n["toDisplayString"])(D.formatMoney(e.totalBalance)),1)]),b]),Object(n["createVNode"])(U,{to:{name:"user-active-loans",params:{userid:e.user_Detail.id}}},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("span",m,Object(n["toDisplayString"])(e.activeUserLoans.length)+" Active ",1)]),_:1},8,["to"]),Object(n["createVNode"])(U,{to:{name:"loan-detail",params:{id:1}}},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("span",j,Object(n["toDisplayString"])(e.inactiveUserLoans.length)+" Inactive",1)]),_:1})])])])])):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",u,O)),0!=e.activeUserLoans.length?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",f,[v,Object(n["createElementVNode"])("ul",y,[Object(n["createVNode"])(_,null,{useInsideUl:Object(n["withCtx"])(()=>[N]),_:1}),(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.activeUserLoans,e=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap",key:e.id},[Object(n["createElementVNode"])("div",x,[Object(n["createVNode"])(U,{icon:"pi pi-pencil",to:{name:"user-loan-detail",params:{loanid:e.id}}},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.product_name),1)]),_:2},1032,["to"])]),Object(n["createElementVNode"])("div",E,Object(n["toDisplayString"])(D.formatMoney(e.approved_amount)),1),Object(n["createElementVNode"])("div",w,Object(n["toDisplayString"])(e.tenor),1),Object(n["createElementVNode"])("div",V,Object(n["toDisplayString"])(D.formatMoney(e.total_balance)),1),Object(n["createElementVNode"])("div",g,[Object(n["createVNode"])(U,{to:{name:"loan-deduction-statement",params:{loan_Id:e.id}}},{default:Object(n["withCtx"])(()=>[h]),_:2},1032,["to"])])]))),128))])])):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",k,L))],64)}c("bc3a");var U=c("b33a"),_=c("5502"),S=c("9dbd"),C={data(){return{loader:!1}},components:{ListHeader:U["a"]},methods:{...Object(_["b"])(["getUserDetail","userLoans","UserSavingsByUserId"]),formatMoney(e){return Object(S["a"])(e)}},computed:{...Object(_["c"])(["fullName","user_Loans","userTotalLoans","activeUserLoans","inactiveUserLoans","totalBalance","riskExposure","user_Detail","profile_Detail"])},created(){this.getUserDetail(this.$route.params.userid).then(()=>{this.userLoans(this.$route.params.userid).then(()=>{this.loader=!0})})}},A=c("6b0d"),I=c.n(A);const M=I()(C,[["render",D]]);t["default"]=M}}]);
//# sourceMappingURL=chunk-1577d723.f6771980.js.map