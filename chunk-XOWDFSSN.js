import{a as Z}from"./chunk-2MCN273G.js";import"./chunk-C6MZ4JXD.js";import{H as T,I as k,J as O,K as w,L as E,M as A,N as I,O as j,P,Q as F,R as D,S as N,T as R,U as z,V as B,e as h,g as C,h as x,k as _,n as S,o as v,r as y}from"./chunk-ZUVOUA3K.js";import{Bb as b,Ka as u,La as m,Ta as s,ca as p,eb as t,fb as e,kb as d,ub as n,xb as f,yb as g,zb as M}from"./chunk-BBMELW6L.js";var nt=(()=>{class o{constructor(r,i){this.router=r,this.ngZone=i}ngOnInit(){}realizarTransferencia(){}back(){this.ngZone.run(()=>{this.router.navigate(["/panatalla-inicio"])})}static{this.\u0275fac=function(i){return new(i||o)(m(h),m(s))}}static{this.\u0275cmp=p({type:o,selectors:[["app-apertura-tarjeta"]],standalone:!0,features:[b],decls:27,vars:1,consts:[[1,"main",2,"width","100%"],["mat-mini-fab","",1,"floating-button",3,"click"],["matNativeControl","","required",""],["value","volvo"],["value","saab"],["value","mercedes"],["value","audi"],["matInput","","type","text",3,"ngModelChange","ngModel"],["mat-raised-button","","color","primary",1,"button-tran",3,"click"]],template:function(i,a){i&1&&(t(0,"div",0)(1,"button",1),d("click",function(){return a.back()}),t(2,"mat-icon"),n(3,"arrow_back"),e()(),t(4,"mat-card")(5,"mat-card-header")(6,"mat-card-title"),n(7,"Realizar pago de cuentas"),e()(),t(8,"mat-card-content")(9,"mat-form-field")(10,"mat-label"),n(11,"Cuenta"),e(),t(12,"select",2)(13,"option",3),n(14,"AGUA"),e(),t(15,"option",4),n(16,"LUZ"),e(),t(17,"option",5),n(18,"HIPOTECARIO"),e(),t(19,"option",6),n(20,"CREDITO"),e()()(),t(21,"mat-form-field")(22,"mat-label"),n(23,"Detalle"),e(),t(24,"input",7),M("ngModelChange",function(l){return g(a.cuentaDestino,l)||(a.cuentaDestino=l),l}),e()(),t(25,"button",8),d("click",function(){return a.realizarTransferencia()}),n(26," PAGAR "),e()()()()),i&2&&(u(24),f("ngModel",a.cuentaDestino))},dependencies:[E,T,O,w,k,D,F,P,y,S,v,C,x,_,R,N,j,A,I,B,z,Z],styles:['@charset "UTF-8";[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh;background-color:#f5f5f5;margin:0}mat-card[_ngcontent-%COMP%]{width:400px;padding:20px;box-shadow:0 4px 10px #0003}mat-form-field[_ngcontent-%COMP%]{display:block;width:100%;margin-bottom:20px}.button-tran[_ngcontent-%COMP%]{display:block;width:100%;margin-top:10px}.floating-button[_ngcontent-%COMP%]{position:fixed;top:10px;right:10px;z-index:1000;background-color:#1976d2;color:#fff;box-shadow:0 4px 8px #0003}@media (max-width: 600px){.floating-button[_ngcontent-%COMP%]{top:5px;right:5px}}.main[_ngcontent-%COMP%]{background:linear-gradient(to right,#bcf1e2,#38a4ec);height:100vh;margin:0;display:flex;align-items:center;justify-content:center}']})}}return o})();export{nt as AperturaTarjetaComponent};
