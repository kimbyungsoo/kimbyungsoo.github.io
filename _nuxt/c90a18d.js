(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{340:function(t,e,r){var content=r(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("305b2ffe",content,!0,{sourceMap:!1})},349:function(t,e,r){"use strict";r(340)},350:function(t,e,r){var n=r(15)(!1);n.push([t.i,"span[data-v-f4bc88b8]{border-radius:5px;margin:0 1px}.experiment-year[data-v-f4bc88b8]{color:#ffa600;text-shadow:0 1px 0 #3c2700}.project-count[data-v-f4bc88b8]{color:#a9f5b3;text-shadow:0 1px 0 #004408}.experiment-year-bar[data-v-f4bc88b8]{background-image:linear-gradient(180deg,#fbcac9,#ffa600)}.project-count-bar[data-v-f4bc88b8]{background-image:linear-gradient(180deg,#c9fbe6,#187024)}.neumorphism[data-v-f4bc88b8]{background:hsla(0,0%,100%,.2);box-shadow:0 8px 32px 0 rgba(31,38,135,.37);backdrop-filter:blur(2.5px);-webkit-backdrop-filter:blur(2.5px);border-radius:10px}",""]),t.exports=n},351:function(t,e,r){"use strict";r.r(e);r(23);var n={props:{title:String,name:String,summary:String,experimentYear:Number,projectCount:Number}},o=(r(349),r(78)),c=r(111),l=r.n(c),d=r(338),f=r(335),m=r(357),v=r(355),x=r(344),C=r(345),_=r(331),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"skill-card neumorphism"},[r("v-container",{attrs:{"pa-1":""}},[r("v-layout",{attrs:{wrap:"",row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("h3",{staticClass:"headline font-weight-bold",staticStyle:{"text-shadow":"rgb(0 0 0 / 75%) 1px 2px 0px"}},[t._v(t._s(t.name))]),t._v(" "),r("div",{staticClass:"font-weight-bold",staticStyle:{color:"#b0b0b0","text-shadow":"rgb(35 35 35) 0px 2px 4px"}},[t._v(t._s(t.title))]),t._v(" "),r("p",{staticClass:"caption font-weight-thin mb-0"},[r("span",{staticClass:"font-weight-bold experiment-year"},[t._v(t._s(t.experimentYear)+" yearss")]),t._v(" "),r("span",{staticClass:"font-weight-bold project-count"},[t._v(t._s(t.projectCount)+" projects")])])])])],1)],1),t._v(" "),r("v-divider",{attrs:{light:""}}),t._v(" "),r("v-card-actions",{staticClass:"pa-2"},[t._l(parseInt(t.experimentYear),(function(i){return r("span",{key:"experiment-"+i,staticClass:"caption experiment-year-bar"},[t._v("   \n      ")])})),t._v(" "),t._l(parseInt(t.projectCount),(function(e){return r("span",{key:"project-"+e,staticClass:"caption project-count-bar"},[t._v("   \n      ")])})),t._v(" "),r("v-spacer")],2)],1)],1)}),[],!1,null,"f4bc88b8",null);e.default=component.exports;l()(component,{VCard:d.a,VCardActions:f.a,VCardTitle:f.b,VContainer:m.a,VDivider:v.a,VFlex:x.a,VLayout:C.a,VSpacer:_.a})},361:function(t,e,r){var content=r(395);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("862a929c",content,!0,{sourceMap:!1})},394:function(t,e,r){"use strict";r(361)},395:function(t,e,r){var n=r(15),o=r(339),c=r(396),l=n(!1),d=o(c);l.push([t.i,".background[data-v-48622c48]{background:linear-gradient(90deg,rgba(0,0,0,.33),rgba(20,20,20,.7)),url("+d+");background-position:50%,50%;background-repeat:no-repeat,no-repeat;background-size:cover,cover}",""]),t.exports=l},396:function(t,e,r){t.exports=r.p+"img/jerry.e2c6304.gif"},412:function(t,e,r){"use strict";r.r(e);var n={components:{skill:r(351).default},data:function(){return{skills:[{title:"Django, ML, Data Crawiling",name:"Python",summary:"Web Develope, Machin Learing, Toy project, Web crawler.",experimentYear:3,projectCount:4},{title:"Spring framework",name:"Java",summary:"Web Develope",experimentYear:1,projectCount:2},{title:"Nuxt.js",name:"Node.js",summary:"Web Develope",experimentYear:1,projectCount:2},{title:"MySQL, Oracle DB, SQLite",name:"Database",summary:"Realational DB",experimentYear:3,projectCount:4}]}}},o=(r(394),r(78)),c=r(111),l=r.n(c),d=r(338),f=r(335),m=r(407),v=r(357),x=r(408),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"background",attrs:{fluid:"","fill-height":""}},[r("v-card",{staticClass:"pa-4",attrs:{id:"jumbo-card",width:"100vw"}},[r("v-card-title",{staticClass:"justify-center display-1 font-italic mb-auto"},[t._v("\n      Skills\n    ")]),t._v(" "),r("v-container",{attrs:{fluid:""}},[r("v-row",t._l(t.skills,(function(t,e){return r("v-col",{key:e,attrs:{xl:"3",lg:"4",md:"6",sm:"12",cols:"12"}},[r("skill",{attrs:{title:t.title,name:t.name,summary:t.summary,experimentYear:t.experimentYear,projectCount:t.projectCount}})],1)})),1)],1)],1)],1)}),[],!1,null,"48622c48",null);e.default=component.exports;l()(component,{Skill:r(351).default}),l()(component,{VCard:d.a,VCardTitle:f.b,VCol:m.a,VContainer:v.a,VRow:x.a})}}]);