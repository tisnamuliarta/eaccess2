(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{431:function(t,e,n){var content=n(432);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("2065bca8",content,!0,{sourceMap:!1})},432:function(t,e,n){var o=n(12)(!1);o.push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),t.exports=o},457:function(t,e,n){var content=n(458);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("dc0628f2",content,!0,{sourceMap:!1})},458:function(t,e,n){var o=n(12)(!1);o.push([t.i,".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:1;pointer-events:none}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}",""]),t.exports=o},466:function(t,e,n){"use strict";var o=n(116),r=n(2),c=(n(25),n(60),n(56),n(47),n(57),n(115),n(9),n(5),n(7),n(14),n(8),n(15),n(431),n(713)),l=n(436),d=n(197),h=n(462),f=n(201),v=n(463),m=n(461),y=n(53),O=n(200),x=n(11),w=n(6),I=n(1);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var G=Object(x.a)(l.a,d.a,h.a,f.a,v.a,m.a,y.a);e.a=G.extend({name:"v-dialog",directives:{ClickOutside:O.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(r.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(r.a)(t,"v-dialog--active",this.isActive),Object(r.a)(t,"v-dialog--persistent",this.persistent),Object(r.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(r.a)(t,"v-dialog--scrollable",this.scrollable),Object(r.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(w.e)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):f.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===I.y.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),r=Object(o.a)(n).find((function(t){return!t.hasAttribute("disabled")}));r&&r.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(c.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:_({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=_(_({},data.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(I.h)(this.maxWidth),width:"auto"===this.width?void 0:Object(I.h)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},483:function(t,e,n){"use strict";var o=n(2),r=(n(25),n(457),n(436)),c=n(29),l=n(476),d=n(197),h=n(477),f=n(53),v=n(1),m=n(6),y=n(11);e.a=Object(y.a)(c.a,l.a,d.a,h.a,f.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!(this.bottom||this.left||this.top||this.right),o=!1!==this.attach?e.offsetLeft:e.left,r=0;return this.top||this.bottom||n?r=o+e.width/2-content.width/2:(this.left||this.right)&&(r=o+(this.right?e.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(r-=parseInt(this.nudgeLeft)),this.nudgeRight&&(r+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(r,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!1!==this.attach?e.offsetTop:e.top,o=0;return this.top||this.bottom?o=n+(this.bottom?e.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(o=n+e.height/2-content.height/2),this.nudgeTop&&(o-=parseInt(this.nudgeTop)),this.nudgeBottom&&(o+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(o+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(v.h)(this.maxWidth),minWidth:Object(v.h)(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(v.u)(this,"activator",!0)&&Object(m.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=r.a.options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===v.y.esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var content=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[content]):content},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(o.a)(t,this.contentClass,!0),Object(o.a)(t,"menuable__content__active",this.isActive),Object(o.a)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},496:function(t,e,n){"use strict";n(5),n(7),n(14),n(15);var o=n(2),r=(n(25),n(9),n(32),n(59),n(429),n(19),n(36),n(442),n(443),n(445),n(446),n(447),n(448),n(449),n(450),n(451),n(452),n(453),n(454),n(455),n(37),n(47),n(8),n(63),n(282),n(0)),c=n(78),l=n(1);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],v=f.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=f.reduce((function(t,e){return t["offset"+Object(l.G)(e)]={type:[String,Number],default:null},t}),{}),y=f.reduce((function(t,e){return t["order"+Object(l.G)(e)]={type:[String,Number],default:null},t}),{}),O={col:Object.keys(v),offset:Object.keys(m),order:Object.keys(y)};function x(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var w=new Map;e.a=r.a.extend({name:"v-col",functional:!0,props:h(h(h(h({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,l=(e.parent,"");for(var d in n)l+=String(n[d]);var h=w.get(l);return h||function(){var t,e;for(e in h=[],O)O[e].forEach((function(t){var o=n[t],r=x(e,t,o);r&&h.push(r)}));var r=h.some((function(t){return t.startsWith("col-")}));h.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),w.set(l,h)}(),t(n.tag,Object(c.a)(data,{class:h}),r)}})},497:function(t,e,n){"use strict";n(5),n(7),n(14),n(15);var o=n(2),r=(n(47),n(57),n(26),n(9),n(32),n(59),n(429),n(19),n(36),n(442),n(443),n(445),n(446),n(447),n(448),n(449),n(450),n(451),n(452),n(453),n(454),n(455),n(37),n(8),n(282),n(0)),c=n(78),l=n(1);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],v=["start","end","center"];function m(t,e){return f.reduce((function(n,o){return n[t+Object(l.G)(o)]=e(),n}),{})}var y=function(t){return[].concat(v,["baseline","stretch"]).includes(t)},O=m("align",(function(){return{type:String,default:null,validator:y}})),x=function(t){return[].concat(v,["space-between","space-around"]).includes(t)},w=m("justify",(function(){return{type:String,default:null,validator:x}})),I=function(t){return[].concat(v,["space-between","space-around","stretch"]).includes(t)},j=m("alignContent",(function(){return{type:String,default:null,validator:I}})),_={align:Object.keys(O),justify:Object.keys(w),alignContent:Object.keys(j)},G={align:"align",justify:"justify",alignContent:"align-content"};function k(t,e,n){var o=G[t];if(null!=n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return(o+="-".concat(n)).toLowerCase()}}var C=new Map;e.a=r.a.extend({name:"v-row",functional:!0,props:h(h(h({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},O),{},{justify:{type:String,default:null,validator:x}},w),{},{alignContent:{type:String,default:null,validator:I}},j),render:function(t,e){var n=e.props,data=e.data,r=e.children,l="";for(var d in n)l+=String(n[d]);var h=C.get(l);return h||function(){var t,e;for(e in h=[],_)_[e].forEach((function(t){var o=n[t],r=k(e,t,o);r&&h.push(r)}));h.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(o.a)(t,"align-".concat(n.align),n.align),Object(o.a)(t,"justify-".concat(n.justify),n.justify),Object(o.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),C.set(l,h)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:h}),r)}})},560:function(t,e,n){"use strict";n.r(e);var o={name:"MasterUserItemGroups",data:function(){return{totalDataItemGroups:0,totalDataUserItemGroups:0,singleSelect:!1,dialogItemGroups:!1,loadingUserItemGroups:!0,loadingItemGroups:!0,allDataItemGroups:[],allDataUserItemGroups:[],selectedItemGroups:[],selectedUserItemGroups:[],optionItemGroups:{},optionUserItemGroups:{},dataUser:{},dataCompany:{},headerItemGroups:[{text:"Item Group",value:"ItmsGrpCod"},{text:"Group Name",value:"ItmsGrpNam"}],headerUserItemGroups:[{text:"Item Group",value:"U_ItmsGrpCod"}]}},methods:{openItemGroups:function(t,e){this.dataCompany=Object.assign({},t),this.dataUser=Object.assign({},e),this.dialogItemGroups=!0,this.getItemGroups(this.dataUser,t),this.getUserItemGroups(this.dataUser,t)},addItemGroups:function(){var t=this;this.$axios.post("/api/master/add-item-groups",{form:this.selectedItemGroups,user:this.dataUser,company:this.dataCompany}).then((function(e){t.getItemGroups(t.dataUser,t.dataCompany),t.getUserItemGroups(t.dataUser,t.dataCompany),t.selectedUserItemGroups=[],t.selectedItemGroups=[]}))},removeItemGroups:function(){var t=this;this.$axios.post("/api/master/remove-item-groups",{form:this.selectedUserItemGroups,user:this.dataUser}).then((function(e){t.getItemGroups(t.dataUser,t.dataCompany),t.getUserItemGroups(t.dataUser,t.dataCompany),t.selectedUserItemGroups=[],t.selectedItemGroups=[]}))},getItemGroups:function(t,e){var n=this;this.$axios.get("/api/master/item-groups",{params:{options:this.optionItemGroups,type:"userCompany",user:t,company:e}}).then((function(t){n.loadingItemGroups=!1,n.allDataItemGroups=t.data.rows,n.totalDataItemGroups=t.data.total})).catch((function(t){n.loadingItemGroups=!1,console.log(t.response.data)}))},getUserItemGroups:function(t,e){var n=this;this.$axios.get("/api/master/user-item-groups",{params:{options:this.optionUserItemGroups,user:t,company:e}}).then((function(t){n.loadingUserItemGroups=!1,n.allDataUserItemGroups=t.data.rows,n.totalDataUserItemGroups=t.data.total})).catch((function(t){n.loadingUserItemGroups=!1,console.log(t.response.data)}))}}},r=n(52),c=n(71),l=n.n(c),d=n(203),h=n(440),f=n(424),v=n(496),m=n(418),y=n(715),O=n(466),x=n(180),w=n(497),I=n(422),j=n(483),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"","max-width":"900px"},model:{value:t.dialogItemGroups,callback:function(e){t.dialogItemGroups=e},expression:"dialogItemGroups"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("Item Groups "+t._s(t.dataUser.U_UserName))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:"",color:"green",dark:""},on:{click:t.addItemGroups}},"v-btn",r,!1),o),[n("v-icon",[t._v("mdi-plus-circle")])],1)]}}])},[t._v(" "),n("span",[t._v("Add Item Groups")])]),t._v(" "),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:"",color:"red",dark:""},on:{click:t.removeItemGroups}},"v-btn",r,!1),o),[n("v-icon",[t._v("mdi-minus-circle")])],1)]}}])},[t._v(" "),n("span",[t._v("Remove Item Groups")])])],1),t._v(" "),n("v-card-text",[n("div",{staticClass:"mt-2"},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-data-table",{staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,"item-key":"LineNum","show-select":"",headers:t.headerItemGroups,items:t.allDataItemGroups,"items-per-page":5,"single-select":t.singleSelect,loading:t.loadingItemGroups},model:{value:t.selectedItemGroups,callback:function(e){t.selectedItemGroups=e},expression:"selectedItemGroups"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-data-table",{staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,"item-key":"U_DocEntry","show-select":"",headers:t.headerUserItemGroups,items:t.allDataUserItemGroups,"items-per-page":5,"single-select":t.singleSelect,loading:t.loadingUserItemGroups},model:{value:t.selectedUserItemGroups,callback:function(e){t.selectedUserItemGroups=e},expression:"selectedUserItemGroups"}})],1)],1)],1)],1)]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:"",small:""},on:{click:function(e){t.dialogItemGroups=!1}}},[t._v("\n        Close\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:h.a,VCardActions:f.a,VCardText:f.b,VCardTitle:f.c,VCol:v.a,VContainer:m.a,VDataTable:y.a,VDialog:O.a,VIcon:x.a,VRow:w.a,VSpacer:I.a,VTooltip:j.a})}}]);