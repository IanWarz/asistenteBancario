import{H as w,I as k,J as S,K as I,L as v,M as F,N as P,O as E,P as O,Q as D,R as W,S as B,T as j,U as z,V as N,e as b,g as C,h as _,k as y,m as x,r as T}from"./chunk-ZUVOUA3K.js";import{Bb as h,Ka as c,La as d,Ta as M,ca as g,eb as t,fb as n,kb as s,ub as o,xb as p,yb as u,zb as f}from"./chunk-BBMELW6L.js";var $=(()=>{class r{constructor(m,a){this.router=m,this.ngZone=a}ngOnInit(){localStorage.setItem("primera","1")}realizarTransferencia(){}back(){this.ngZone.run(()=>{this.router.navigate(["/panatalla-inicio"])})}static{this.\u0275fac=function(a){return new(a||r)(d(b),d(M))}}static{this.\u0275cmp=g({type:r,selectors:[["app-transferencia"]],standalone:!0,features:[h],decls:19,vars:2,consts:[[1,"main",2,"width","100%"],["mat-mini-fab","",1,"floating-button",3,"click"],["matInput","","type","number",3,"ngModelChange","ngModel"],["matInput","","type","text",3,"ngModelChange","ngModel"],["mat-raised-button","","color","primary",1,"button-tran",3,"click"]],template:function(a,e){a&1&&(t(0,"div",0)(1,"button",1),s("click",function(){return e.back()}),t(2,"mat-icon"),o(3,"arrow_back"),n()(),t(4,"mat-card")(5,"mat-card-header")(6,"mat-card-title"),o(7,"Realizar Transferencia"),n()(),t(8,"mat-card-content")(9,"mat-form-field")(10,"mat-label"),o(11,"Monto"),n(),t(12,"input",2),f("ngModelChange",function(i){return u(e.monto,i)||(e.monto=i),i}),n()(),t(13,"mat-form-field")(14,"mat-label"),o(15,"Cuenta Destino"),n(),t(16,"input",3),f("ngModelChange",function(i){return u(e.cuentaDestino,i)||(e.cuentaDestino=i),i}),n()(),t(17,"button",4),s("click",function(){return e.realizarTransferencia()}),o(18," Enviar Transferencia "),n()()()()),a&2&&(c(12),p("ngModel",e.monto),c(4),p("ngModel",e.cuentaDestino))},dependencies:[v,w,S,I,k,W,D,O,T,C,x,_,y,j,B,E,F,P,N,z],styles:['@charset "UTF-8";[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh;background-color:#f5f5f5;margin:0}mat-card[_ngcontent-%COMP%]{width:400px;padding:20px;box-shadow:0 4px 10px #0003}mat-form-field[_ngcontent-%COMP%]{display:block;width:100%;margin-bottom:20px}.button-tran[_ngcontent-%COMP%]{display:block;width:100%;margin-top:10px}.floating-button[_ngcontent-%COMP%]{position:fixed;top:10px;right:10px;z-index:1000;background-color:#1976d2;color:#fff;box-shadow:0 4px 8px #0003}@media (max-width: 600px){.floating-button[_ngcontent-%COMP%]{top:5px;right:5px}}.main[_ngcontent-%COMP%]{background:linear-gradient(to right,#bcf1e2,#38a4ec);height:100vh;margin:0;display:flex;align-items:center;justify-content:center}']})}}return r})();export{$ as TransferenciaComponent};