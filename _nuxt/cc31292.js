(window.webpackJsonp=window.webpackJsonp||[]).push([[8,4],{329:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return v}));var n=r(330),c=r(0),o=Object(c.g)("v-card__actions"),l=Object(c.g)("v-card__subtitle"),d=Object(c.g)("v-card__text"),v=Object(c.g)("v-card__title");n.a},334:function(t,e,r){var content=r(341);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("0d9f2366",content,!0,{sourceMap:!1})},335:function(t,e,r){"use strict";r(217);var n=r(328);e.a=Object(n.a)("flex")},336:function(t,e,r){"use strict";r(217);var n=r(328);e.a=Object(n.a)("layout")},340:function(t,e,r){"use strict";r(334)},341:function(t,e,r){var n=r(9)(!1);n.push([t.i,"span[data-v-618e0ecc]{border-radius:5px;margin:0 1px}.experiment-year[data-v-618e0ecc]{color:#ffa600}.project-count[data-v-618e0ecc]{color:#a9f5b3}.experiment-year-bar[data-v-618e0ecc]{background-image:linear-gradient(180deg,#fbcac9,#ffa600)}.project-count-bar[data-v-618e0ecc]{background-image:linear-gradient(180deg,#c9fbe6,#187024)}",""]),t.exports=n},342:function(t,e,r){var content=r(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("7132a15d",content,!0,{sourceMap:!1})},343:function(t,e,r){var n=r(9)(!1);n.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=n},344:function(t,e,r){"use strict";r.r(e);r(15);var n={props:{title:String,name:String,summary:String,experimentYear:Number,projectCount:Number}},c=(r(340),r(67)),o=r(100),l=r.n(o),d=r(330),v=r(329),f=r(347),h=r(2);r(342);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _=r(25).a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:x({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:x({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}}),y=r(335),j=r(336),O=r(323),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"skill-card"},[r("v-container",{attrs:{"pa-1":""}},[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("div",{staticClass:"grey--text"},[t._v(t._s(t.title))]),t._v(" "),r("h3",{staticClass:"headline"},[t._v(t._s(t.name))]),t._v(" "),r("p",{staticClass:"caption font-weight-thin mb-0"},[r("span",{staticClass:"experiment-year"},[t._v(t._s(t.experimentYear)+" years")]),t._v(" "),r("span",{staticClass:"project-count"},[t._v(t._s(t.projectCount)+" projects")])])])])],1)],1),t._v(" "),r("v-divider",{attrs:{light:""}}),t._v(" "),r("v-card-actions",{staticClass:"pa-2"},[t._l(parseInt(t.experimentYear),(function(i){return r("span",{key:i,staticClass:"caption experiment-year-bar"},[t._v("    ")])})),t._v(" "),t._l(parseInt(t.projectCount),(function(i){return r("span",{key:i,staticClass:"caption project-count-bar"},[t._v("    ")])})),t._v(" "),r("v-spacer")],2)],1)],1)}),[],!1,null,"618e0ecc",null);e.default=component.exports;l()(component,{VCard:d.a,VCardActions:v.a,VCardTitle:v.b,VContainer:f.a,VDivider:_,VFlex:y.a,VLayout:j.a,VSpacer:O.a})},349:function(t,e,r){var content=r(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("39a9c2fa",content,!0,{sourceMap:!1})},362:function(t,e,r){"use strict";r(349)},363:function(t,e,r){var n=r(9)(!1);n.push([t.i,"#jumbo-card[data-v-5148a429]{background-color:transparent;height:none}",""]),t.exports=n},370:function(t,e,r){"use strict";r.r(e);var n={components:{skill:r(344).default}},c=(r(362),r(67)),o=r(100),l=r.n(o),d=r(330),v=r(329),f=r(347),h=r(335),m=r(130),x=r(336),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"history"}},[r("v-img",{attrs:{gradient:"to top right, rgba(0,0,0,.33), rgba(20,20,20,.7)",height:"none"}},[r("v-card",{staticClass:"pa-4",attrs:{id:"jumbo-card",width:"100vw"}},[r("v-card-title",{staticClass:"justify-center display-1 font-italic mb-auto"},[t._v("\n        Skills\n      ")]),t._v(" "),r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{wrap:"",row:""}},[r("v-flex",{staticClass:"pa-2 ma-auto",attrs:{xs12:"",sm6:"",md4:""}},[r("skill",{attrs:{title:"Django, ML, Data Crawiling",name:"Python",summary:"Django",experimentYear:"3",projectCount:"4"}})],1)],1)],1)],1)],1)],1)}),[],!1,null,"5148a429",null);e.default=component.exports;l()(component,{Skill:r(344).default}),l()(component,{VCard:d.a,VCardTitle:v.b,VContainer:f.a,VFlex:h.a,VImg:m.a,VLayout:x.a})}}]);