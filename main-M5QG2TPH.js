import"./chunk-OM2QHQEN.js";import{a as z,b as Ft,c as Nt,d as q,f as Lt,g as Vt}from"./chunk-C6MZ4JXD.js";import{A as Et,B as It,M as Tt,a as _t,b as gt,c as bt,d as vt,e as kt,f as yt,g as Ct,h as xt,i as Mt,j as At,k as St,l as wt,p as Rt,q as Pt,r as Ot,s as Bt,z as Dt}from"./chunk-ZUVOUA3K.js";import{$ as A,$a as at,Bb as g,Cb as pt,Ka as p,Kb as ht,La as d,Ma as G,Na as J,Oa as tt,Qa as et,R as $,Rb as R,Sa as nt,T as W,Ta as w,Ub as ut,V as M,Va as it,Xb as ft,Y as O,_ as f,_a as B,a as b,ab as D,ca as _,cc as jt,db as ot,dc as N,ea as S,eb as c,fa as Q,fb as l,fc as P,gb as v,gc as L,hb as rt,hc as V,i as u,jb as st,ka as Z,kb as C,la as K,lb as ct,mb as E,oa as y,qa as X,qb as I,rb as T,sb as j,ub as m,wa as Y,wb as F,xb as lt,yb as dt,zb as mt}from"./chunk-BBMELW6L.js";function Xt(i,a){if(i&1){let t=rt();c(0,"div",1)(1,"button",2),C("click",function(){Z(t);let n=E();return K(n.action())}),m(2),l()()}if(i&2){let t=E();p(2),F(" ",t.data.action," ")}}var Yt=["label"];function Gt(i,a){}var Jt=Math.pow(2,31)-1,x=class{constructor(a,t){this._overlayRef=t,this._afterDismissed=new u,this._afterOpened=new u,this._onAction=new u,this._dismissedByAction=!1,this.containerInstance=a,a._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(a){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(a,Jt))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},zt=new O("MatSnackBarData"),k=class{constructor(){this.politeness="assertive",this.announcementMessage="",this.duration=0,this.data=null,this.horizontalPosition="center",this.verticalPosition="bottom"}},te=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275dir=S({type:i,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"],standalone:!0})}}return i})(),ee=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275dir=S({type:i,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"],standalone:!0})}}return i})(),ne=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275dir=S({type:i,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"],standalone:!0})}}return i})(),ie=(()=>{class i{constructor(t,e){this.snackBarRef=t,this.data=e}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static{this.\u0275fac=function(e){return new(e||i)(d(x),d(zt))}}static{this.\u0275cmp=_({type:i,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],standalone:!0,features:[g],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["mat-button","","matSnackBarAction","",3,"click"]],template:function(e,n){e&1&&(c(0,"div",0),m(1),l(),B(2,Xt,3,1,"div",1)),e&2&&(p(),F(" ",n.data.message,`
`),p(),ot(2,n.hasAction?2:-1))},dependencies:[Tt,te,ee,ne],styles:[".mat-mdc-simple-snack-bar{display:flex}"],encapsulation:2,changeDetection:0})}}return i})(),ae={snackBarState:jt("state",[L("void, hidden",P({transform:"scale(0.8)",opacity:0})),L("visible",P({transform:"scale(1)",opacity:1})),V("* => visible",N("150ms cubic-bezier(0, 0, 0.2, 1)")),V("* => void, * => hidden",N("75ms cubic-bezier(0.4, 0.0, 1, 1)",P({opacity:0})))])},oe=0,re=(()=>{class i extends Nt{constructor(t,e,n,o,r){super(),this._ngZone=t,this._elementRef=e,this._changeDetectorRef=n,this._platform=o,this.snackBarConfig=r,this._document=A(R),this._trackedModals=new Set,this._announceDelay=150,this._destroyed=!1,this._onAnnounce=new u,this._onExit=new u,this._onEnter=new u,this._animationState="void",this._liveElementId=`mat-snack-bar-container-live-${oe++}`,this.attachDomPortal=s=>{this._assertNotAttached();let h=this._portalOutlet.attachDomPortal(s);return this._afterPortalAttached(),h},r.politeness==="assertive"&&!r.announcementMessage?this._live="assertive":r.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(t){this._assertNotAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),e}attachTemplatePortal(t){this._assertNotAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),e}onAnimationEnd(t){let{fromState:e,toState:n}=t;if((n==="void"&&e!=="void"||n==="hidden")&&this._completeExit(),n==="visible"){let o=this._onEnter;this._ngZone.run(()=>{o.next(),o.complete()})}}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce())}exit(){return this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId)}),this._onExit}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,e=this.snackBarConfig.panelClass;e&&(Array.isArray(e)?e.forEach(r=>t.classList.add(r)):t.classList.add(e)),this._exposeToModals();let n=this._label.nativeElement,o="mdc-snackbar__label";n.classList.toggle(o,!n.querySelector(`.${o}`))}_exposeToModals(){let t=this._liveElementId,e=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let n=0;n<e.length;n++){let o=e[n],r=o.getAttribute("aria-owns");this._trackedModals.add(o),r?r.indexOf(t)===-1&&o.setAttribute("aria-owns",r+" "+t):o.setAttribute("aria-owns",t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let e=t.getAttribute("aria-owns");if(e){let n=e.replace(this._liveElementId,"").trim();n.length>0?t.setAttribute("aria-owns",n):t.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector("[aria-hidden]"),e=this._elementRef.nativeElement.querySelector("[aria-live]");if(t&&e){let n=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(n=document.activeElement),t.removeAttribute("aria-hidden"),e.appendChild(t),n?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static{this.\u0275fac=function(e){return new(e||i)(d(w),d(X),d(ht),d(Bt),d(k))}}static{this.\u0275cmp=_({type:i,selectors:[["mat-snack-bar-container"]],viewQuery:function(e,n){if(e&1&&(I(q,7),I(Yt,7)),e&2){let o;T(o=j())&&(n._portalOutlet=o.first),T(o=j())&&(n._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container","mdc-snackbar--open"],hostVars:1,hostBindings:function(e,n){e&1&&ct("@state.done",function(r){return n.onAnimationEnd(r)}),e&2&&st("@state",n._animationState)},standalone:!0,features:[it,g],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(e,n){e&1&&(c(0,"div",1)(1,"div",2,0)(3,"div",3),B(4,Gt,0,0,"ng-template",4),l(),v(5,"div"),l()()),e&2&&(p(5),at("aria-live",n._live)("role",n._role)("id",n._liveElementId))},dependencies:[q],styles:['.mdc-snackbar{display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-snackbar__surface::before{border-color:CanvasText}}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1)}.mdc-snackbar__label{padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}.mat-mdc-snack-bar-container{margin:8px;position:static}.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:100%}}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container{width:100vw}}.mat-mdc-snack-bar-container .mdc-snackbar__surface{max-width:672px}.mat-mdc-snack-bar-container .mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{background-color:var(--mdc-snackbar-container-color)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{border-radius:var(--mdc-snackbar-container-shape)}.mat-mdc-snack-bar-container .mdc-snackbar__label{color:var(--mdc-snackbar-supporting-text-color)}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-size:var(--mdc-snackbar-supporting-text-size);font-family:var(--mdc-snackbar-supporting-text-font);font-weight:var(--mdc-snackbar-supporting-text-weight);line-height:var(--mdc-snackbar-supporting-text-line-height)}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:var(--mat-snack-bar-button-color);--mat-text-button-state-layer-color:currentColor;--mat-text-button-ripple-color:currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}.mat-mdc-snack-bar-container .mdc-snackbar__label::before{display:none}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-handset .mdc-snackbar__surface{width:100%}'],encapsulation:2,data:{animation:[ae.snackBarState]}})}}return i})();function se(){return new k}var ce=new O("mat-snack-bar-default-options",{providedIn:"root",factory:se}),qt=(()=>{class i{get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}constructor(t,e,n,o,r,s){this._overlay=t,this._live=e,this._injector=n,this._breakpointObserver=o,this._parentSnackBar=r,this._defaultConfig=s,this._snackBarRefAtThisLevel=null,this.simpleSnackBarComponent=ie,this.snackBarContainerComponent=re,this.handsetCssClass="mat-mdc-snack-bar-handset"}openFromComponent(t,e){return this._attach(t,e)}openFromTemplate(t,e){return this._attach(t,e)}open(t,e="",n){let o=b(b({},this._defaultConfig),n);return o.data={message:t,action:e},o.announcementMessage===t&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,e){let n=e&&e.viewContainerRef&&e.viewContainerRef.injector,o=y.create({parent:n||this._injector,providers:[{provide:k,useValue:e}]}),r=new z(this.snackBarContainerComponent,e.viewContainerRef,o),s=t.attach(r);return s.instance.snackBarConfig=e,s.instance}_attach(t,e){let n=b(b(b({},new k),this._defaultConfig),e),o=this._createOverlay(n),r=this._attachSnackBarContainer(o,n),s=new x(r,o);if(t instanceof J){let h=new Ft(t,null,{$implicit:n.data,snackBarRef:s});s.instance=r.attachTemplatePortal(h)}else{let h=this._createInjector(n,s),Zt=new z(t,void 0,h),Kt=r.attachComponentPortal(Zt);s.instance=Kt.instance}return this._breakpointObserver.observe(Et.HandsetPortrait).pipe($(o.detachments())).subscribe(h=>{o.overlayElement.classList.toggle(this.handsetCssClass,h.matches)}),n.announcementMessage&&r._onAnnounce.subscribe(()=>{this._live.announce(n.announcementMessage,n.politeness)}),this._animateSnackBar(s,n),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(t,e){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),e.announcementMessage&&this._live.clear()}),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter(),e.duration&&e.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(e.duration))}_createOverlay(t){let e=new Lt;e.direction=t.direction;let n=this._overlay.position().global(),o=t.direction==="rtl",r=t.horizontalPosition==="left"||t.horizontalPosition==="start"&&!o||t.horizontalPosition==="end"&&o,s=!r&&t.horizontalPosition!=="center";return r?n.left("0"):s?n.right("0"):n.centerHorizontally(),t.verticalPosition==="top"?n.top("0"):n.bottom("0"),e.positionStrategy=n,this._overlay.create(e)}_createInjector(t,e){let n=t&&t.viewContainerRef&&t.viewContainerRef.injector;return y.create({parent:n||this._injector,providers:[{provide:x,useValue:e},{provide:zt,useValue:t.data}]})}static{this.\u0275fac=function(e){return new(e||i)(f(Vt),f(It),f(y),f(Dt),f(i,12),f(ce))}}static{this.\u0275prov=M({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var de=i=>({error:i}),Ut=(()=>{class i{constructor(t,e){this.snackBar=t,this.router=e,this.rut="",this.rutvalidation=["16.991.220-3","12.451.052-0","16.701.518-2"],localStorage.setItem("rut",""),localStorage.setItem("primera","")}formatRut(t){let e=t.target.value.replace(/\D/g,"");e.length>9&&(e=e.slice(0,9)),e.length>1&&(e=e.replace(/^(\d{1,2})(\d{3})(\d{3})(\d{1})$/,"$1.$2.$3-$4")),e.length>13&&(e=e.slice(0,13)),t.target.value=e}isValidRut(t){return/^\d{1,2}(\.\d{3}){2}-[0-9kK]{1}$/.test(t)}showErrorMessage(){this.snackBar.open("El RUT ingresado no es v\xE1lido","Cerrar",{duration:3e3,panelClass:["error-snack"]})}onSubmit(){let t=0;if(this.isValidRut(this.rut)){for(let e=0;e<this.rutvalidation.length;e++)if(this.rut==this.rutvalidation[e]){console.log("RUT v\xE1lido: ",this.rut),localStorage.setItem("rut",this.rut),this.router.navigate(["/panatalla-inicio"]);break}else console.log("RUT no v\xE1lido: ",this.rut),t=t+1;t==this.rutvalidation.length&&this.showErrorMessage()}else console.log("RUT no v\xE1lido"),this.showErrorMessage()}static{this.\u0275fac=function(e){return new(e||i)(d(qt),d(kt))}}static{this.\u0275cmp=_({type:i,selectors:[["app-login"]],standalone:!0,features:[g],decls:17,vars:5,consts:[[1,"login-container"],[1,"login-left"],[3,"ngSubmit"],["for","number"],["type","text","id","number","name","rut","placeholder","11.111.111-1","required","","maxlength","12",3,"ngModelChange","input","ngModel","ngClass"],["type","submit",1,"btn","btn-signin",3,"disabled"],["href","#"],[1,"login-right"],[1,"login-info"],["src","assets/img.jpeg","alt","Dashboard example"]],template:function(e,n){e&1&&(c(0,"div",0)(1,"div",1)(2,"h2"),m(3,"Login! \u{1F44B}"),l(),c(4,"form",2),C("ngSubmit",function(){return n.onSubmit()}),c(5,"label",3),m(6,"Rut (Si termina en k remplazala con un 0)"),l(),c(7,"input",4),mt("ngModelChange",function(r){return dt(n.rut,r)||(n.rut=r),r}),C("input",function(r){return n.formatRut(r)}),l(),c(8,"button",5),m(9,"Comenzar"),l()(),c(10,"p"),m(11,"Don't have an account? "),c(12,"a",6),m(13,"Sign Up Now"),l()()(),c(14,"div",7)(15,"div",8),v(16,"img",9),l()()()),e&2&&(p(7),lt("ngModel",n.rut),D("ngClass",pt(3,de,n.rut&&!n.isValidRut(n.rut))),p(),D("disabled",!n.isValidRut(n.rut)))},dependencies:[Ot,wt,Ct,xt,Mt,Rt,Pt,St,At,ft,ut],styles:[".login-container[_ngcontent-%COMP%]{display:flex;height:100vh}.login-left[_ngcontent-%COMP%], .login-right[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;justify-content:center;padding:2rem}.login-left[_ngcontent-%COMP%]{flex-direction:column;background-color:#f5f5f5}.login-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:1rem}.login-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:1rem}.login-left[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%;max-width:300px;display:flex;flex-direction:column}.login-left[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-top:1rem}.login-left[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:.5rem;margin-top:.5rem;border:1px solid #ccc;border-radius:4px}.login-left[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:.75rem;margin-top:1rem;border:none;border-radius:4px;cursor:pointer}.login-left[_ngcontent-%COMP%]   .btn-google[_ngcontent-%COMP%]{background-color:#db4437;color:#fff}.login-left[_ngcontent-%COMP%]   .btn-apple[_ngcontent-%COMP%]{background-color:#000;color:#fff}.login-left[_ngcontent-%COMP%]   .btn-signin[_ngcontent-%COMP%]{background-color:#4a90e2;color:#fff}.login-right[_ngcontent-%COMP%]{background-color:#fff}.login-info[_ngcontent-%COMP%]{text-align:center}.login-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:1rem}.login-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:1rem}.login-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto;border:1px solid #ccc;border-radius:4px}input.error[_ngcontent-%COMP%]{border-color:red}button[disabled][_ngcontent-%COMP%]{background-color:gray;cursor:not-allowed}"]})}}return i})();var Ht=[{path:"",component:Ut},{path:"panatalla-inicio",loadComponent:()=>import("./chunk-WH6GN5UY.js").then(i=>i.PantallaInicioComponent)},{path:"transferencia",loadComponent:()=>import("./chunk-4LWND6K3.js").then(i=>i.TransferenciaComponent)},{path:"apertura-tarjeta",loadComponent:()=>import("./chunk-XOWDFSSN.js").then(i=>i.AperturaTarjetaComponent)},{path:"bloqueo-tarjeta",loadComponent:()=>import("./chunk-X2MI3XOA.js").then(i=>i.BloqueoTarjetaComponent)}];var me="@",pe=(()=>{class i{constructor(t,e,n,o,r){this.doc=t,this.delegate=e,this.zone=n,this.animationType=o,this.moduleImpl=r,this._rendererFactoryPromise=null,this.scheduler=A(tt,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-WQZBVDSS.js")).catch(e=>{throw new W(5300,!1)}).then(({\u0275createEngine:e,\u0275AnimationRendererFactory:n})=>{this._engine=e(this.animationType,this.doc,this.scheduler);let o=new n(this.delegate,this._engine,this.zone);return this.delegate=o,o})}createRenderer(t,e){let n=this.delegate.createRenderer(t,e);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let o=new H(n);return e?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(r=>{let s=r.createRenderer(t,e);o.use(s)}).catch(r=>{o.use(n)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(e){G()}}static{this.\u0275prov=M({token:i,factory:i.\u0275fac})}}return i})(),H=class{constructor(a){this.delegate=a,this.replay=[],this.\u0275type=1}use(a){if(this.delegate=a,this.replay!==null){for(let t of this.replay)t(a);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(a,t){return this.delegate.createElement(a,t)}createComment(a){return this.delegate.createComment(a)}createText(a){return this.delegate.createText(a)}get destroyNode(){return this.delegate.destroyNode}appendChild(a,t){this.delegate.appendChild(a,t)}insertBefore(a,t,e,n){this.delegate.insertBefore(a,t,e,n)}removeChild(a,t,e){this.delegate.removeChild(a,t,e)}selectRootElement(a,t){return this.delegate.selectRootElement(a,t)}parentNode(a){return this.delegate.parentNode(a)}nextSibling(a){return this.delegate.nextSibling(a)}setAttribute(a,t,e,n){this.delegate.setAttribute(a,t,e,n)}removeAttribute(a,t,e){this.delegate.removeAttribute(a,t,e)}addClass(a,t){this.delegate.addClass(a,t)}removeClass(a,t){this.delegate.removeClass(a,t)}setStyle(a,t,e,n){this.delegate.setStyle(a,t,e,n)}removeStyle(a,t,e){this.delegate.removeStyle(a,t,e)}setProperty(a,t,e){this.shouldReplay(t)&&this.replay.push(n=>n.setProperty(a,t,e)),this.delegate.setProperty(a,t,e)}setValue(a,t){this.delegate.setValue(a,t)}listen(a,t,e){return this.shouldReplay(t)&&this.replay.push(n=>n.listen(a,t,e)),this.delegate.listen(a,t,e)}shouldReplay(a){return this.replay!==null&&a.startsWith(me)}};function $t(i="animations"){return nt("NgAsyncAnimations"),Q([{provide:et,useFactory:(a,t,e)=>new pe(a,t,e,i),deps:[R,_t,w]},{provide:Y,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Wt={providers:[yt(Ht),bt(),$t()]};var Qt=(()=>{class i{constructor(){this.title="asistente-bancario"}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=_({type:i,selectors:[["app-root"]],standalone:!0,features:[g],decls:1,vars:0,template:function(e,n){e&1&&v(0,"router-outlet")},dependencies:[vt]})}}return i})();gt(Qt,Wt).catch(i=>console.error(i));