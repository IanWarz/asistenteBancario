import{E,F as D,H as x,I as y,J as v,K as S,L as M,M as F,N as O,O as B,R as V,T as N,U as b,V as C,e as w,r as j}from"./chunk-ZUVOUA3K.js";import{Bb as m,Ka as d,La as c,Ta as L,Vb as f,W as H,Xb as _,_a as u,ab as g,bb as G,ca as h,da as P,eb as o,fb as r,gb as I,hb as z,ka as T,kb as s,la as k,mb as R,ub as a,vb as $}from"./chunk-BBMELW6L.js";var q=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275mod=P({type:i})}static{this.\u0275inj=H({imports:[D,E,D,E]})}}return i})();function K(i,A){if(i&1){let t=z();o(0,"button",2),s("click",function(){T(t);let n=R();return k(n.startListening())}),o(1,"mat-icon"),a(2,"record_voice_over"),r()()}}function Y(i,A){if(i&1){let t=z();o(0,"button",2),s("click",function(){T(t);let n=R();return k(n.stopListening())}),o(1,"mat-icon"),a(2,"record_voice_over"),r()()}}var U=(()=>{class i{constructor(t,e){this.router=t,this.ngZone=e,this.isListening=!1}ngOnInit(){typeof window<"u"&&"webkitSpeechRecognition"in window?(this.speechRecognition=new window.webkitSpeechRecognition,this.speechRecognition.continuous=!1,this.speechRecognition.lang="es-ES",this.speechRecognition.interimResults=!1,this.speechRecognition.onresult=t=>{let e=t.results[0][0].transcript.toLowerCase();this.handleVoiceCommand(e)},this.speechRecognition.onend=()=>{this.isListening=!1}):console.warn("La API SpeechRecognition no est\xE1 disponible en este entorno")}startListening(){this.speechRecognition&&(this.isListening=!0,this.speechRecognition.start())}stopListening(){this.speechRecognition&&this.speechRecognition.stop()}handleVoiceCommand(t){this.ngZone.run(()=>{t.includes("transferencia")?this.router.navigate(["/transferencia"]):t.includes("pago de cuentas")?this.router.navigate(["/apertura-tarjeta"]):t.includes("saldos")?this.router.navigate(["/bloqueo-tarjeta"]):this.respond("Lo siento, no entend\xED esa solicitud.")})}respond(t){let e=window.speechSynthesis,n=new SpeechSynthesisUtterance(t);e.speak(n)}static{this.\u0275fac=function(e){return new(e||i)(c(w),c(L))}}static{this.\u0275cmp=h({type:i,selectors:[["app-asistente"]],standalone:!0,features:[m],decls:7,vars:2,consts:[[1,"asistente-card"],["mat-mini-fab","",3,"click",4,"ngIf"],["mat-mini-fab","",3,"click"]],template:function(e,n){e&1&&(o(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),a(3,"Hola, \xBFen qu\xE9 puedo ayudarte?"),r()(),o(4,"mat-card-content"),u(5,K,3,0,"button",1)(6,Y,3,0,"button",1),r()()),e&2&&(d(5),g("ngIf",!n.isListening),d(),g("ngIf",n.isListening))},dependencies:[M,x,v,S,y,_,f,C,b]})}}return i})();function tt(i,A){i&1&&I(0,"div",9)}var It=(()=>{class i{constructor(t){this.router=t,this.dialogo="",this.speaking=!1,this.userall=[{rut:"16.991.220-3",name:"Nathalie"},{rut:"12.451.052-0",name:"Evelyn"}]}ngOnInit(){typeof window<"u"&&this.startSpeaking()}startSpeaking(){if(typeof window<"u"&&window.speechSynthesis){let t=window.speechSynthesis,e=localStorage.getItem("rut"),n;for(let p=0;p<this.userall.length;p++)e==this.userall[p].rut&&(n=this.userall[p].name);this.dialogo="\xA1Hola! "+n+" Soy tu asistente virtual Inspira.  \xBFEn qu\xE9 puedo ayudarte hoy?";let l=new SpeechSynthesisUtterance(this.dialogo);l.onstart=()=>{this.speaking=!0},l.onend=()=>{this.speaking=!1},t.speak(l)}else console.warn("La API SpeechSynthesis no est\xE1 disponible en este entorno")}changeDialog(t){this.dialogo=t,this.startSpeaking()}activateAssistant(t){t=="transferencia"?this.router.navigate(["/transferencia"]):t=="deposito"?this.router.navigate(["/apertura-tarjeta"]):t=="activar"&&this.router.navigate(["/bloqueo-tarjeta"])}cerrarSesion(){console.log("Sesi\xF3n cerrada"),this.router.navigate(["/"])}static{this.\u0275fac=function(e){return new(e||i)(c(w))}}static{this.\u0275cmp=h({type:i,selectors:[["app-pantalla-inicio"]],standalone:!0,features:[m],decls:22,vars:4,consts:[[1,"main",2,"width","100%"],["mat-mini-fab","","color","warn",1,"logout-button",3,"click"],[1,"pantalla-inicio-card"],[1,"dialogo-container"],[1,"dialogo"],["class","voice-wave",4,"ngIf"],[1,"button-container"],["mat-raised-button","","color","primary",3,"click"],[2,"margin-top","20px"],[1,"voice-wave"]],template:function(e,n){e&1&&(o(0,"div",0)(1,"button",1),s("click",function(){return n.cerrarSesion()}),o(2,"mat-icon"),a(3,"logout"),r()(),o(4,"mat-card",2)(5,"mat-card-header")(6,"mat-card-title"),a(7,"Asistente Virtual"),r()(),o(8,"mat-card-content")(9,"div",3)(10,"p",4),a(11),r(),u(12,tt,1,0,"div",5),r(),o(13,"div",6)(14,"button",7),s("click",function(){return n.activateAssistant("transferencia")}),a(15,"TRANSFERENCIAS"),r(),o(16,"button",7),s("click",function(){return n.activateAssistant("deposito")}),a(17,"PAGO DE CUENTAS"),r(),o(18,"button",7),s("click",function(){return n.activateAssistant("activar")}),a(19,"SALDOS"),r()(),o(20,"div",8),I(21,"app-asistente"),r()()()()),e&2&&(d(10),G("speaking",n.speaking),d(),$(n.dialogo),d(),g("ngIf",n.speaking))},dependencies:[M,x,v,S,y,B,F,O,N,V,j,_,f,q,C,b,U],styles:['@charset "UTF-8";.pantalla-inicio-card[_ngcontent-%COMP%]{max-width:600px;margin:50px auto;text-align:center}.dialogo-container[_ngcontent-%COMP%]{position:relative;margin-bottom:20px}.dialogo[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;color:#333;transition:color .3s ease,transform .3s ease}.dialogo.speaking[_ngcontent-%COMP%]{color:#2e7d32;transform:scale(1.05)}.voice-wave[_ngcontent-%COMP%]{width:100px;height:10px;background-color:#2e7d32;margin:20px auto;border-radius:5px;animation:_ngcontent-%COMP%_pulse 1.5s infinite ease-in-out}@keyframes _ngcontent-%COMP%_pulse{0%{transform:scaleX(1);opacity:.6}50%{transform:scaleX(1.5);opacity:1}to{transform:scaleX(1);opacity:.6}}button[_ngcontent-%COMP%]{margin-top:20px}.button-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}.logout-button[_ngcontent-%COMP%]{position:fixed;top:10px;right:10px;z-index:1000;background-color:#d32f2f;color:#fff;box-shadow:0 4px 8px #0003}@media (max-width: 600px){.logout-button[_ngcontent-%COMP%]{top:5px;right:5px}}.main[_ngcontent-%COMP%]{background:linear-gradient(to right,#bcf1e2,#38a4ec);height:100vh;margin:0;display:flex;align-items:center;justify-content:center}']})}}return i})();export{It as a};
