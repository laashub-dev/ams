(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1021:function(e,o,s){"use strict";s.r(o);var t=s(126),a={passwordField1:{type:"form",resource:{fields:{passwordField:{type:"password",label:"密码",props:{placeholder:"请输入密码"}}}},ctx:"edit"},passwordField2:{type:"form",resource:{fields:{passwordField:{type:"password",label:"密码",props:{placeholder:"请输入密码"}}}},data:{passwordField:"123456"},ctx:"view"}},i=s(138),n=s.n(i),l=s(137),c=s.n(l),d={mixins:[t.a],mounted:function(){var e=n()(a[this.blockName]);this.configCode=c()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block(this.blockName,a[this.blockName]),this.init=!0)}},r=s(1),f=Object(r.a)(d,(function(){var e=this,o=e.$createElement,s=e._self._c||o;return s("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?s("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),s("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[s("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),s("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[s("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?s("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);o.default=f.exports},125:function(e,o,s){"use strict";var t=s(0),a=(s(131),s(130)),i=s.n(a),n=s(128),l=s.n(n),c=s(136),d=s(132),r=s.n(d),f=(s(133),s(134)),p=s.n(f),u=s(135),m=s.n(u);t.default.use(i.a),t.default.use(l.a),console.log("ams init config"),t.default.use(p.a),t.default.use(m.a),"undefined"!=typeof window&&(window.Vue=t.default),t.default.use(c.a,{languages:{javascript:r.a}}),l.a.config({resource:{api:{withCredentials:!1}}})},126:function(e,o,s){"use strict";s(125);o.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}}}]);