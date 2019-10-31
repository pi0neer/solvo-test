(function(t){function e(e){for(var n,i,c=e[0],u=e[1],s=e[2],f=0,d=[];f<c.length;f++)i=c[f],a[i]&&d.push(a[i][0]),a[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,c=1;c<r.length;c++){var u=r[c];0!==a[u]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},o=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=u;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"app"}},[r("Table")],1)},o=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",[r("v-flex",{attrs:{xs12:""}},[r("v-data-table",{attrs:{headers:t.headers,items:t.countries},scopedSlots:t._u([{key:"items",fn:function(e){return[r("td",[t._v(t._s(e.item.caption))]),r("td",[t._v(t._s(e.item.latitude))]),r("td",[t._v(t._s(e.item.longitude))])]}}])})],1)],1),r("v-snackbar",{attrs:{top:"",right:""},model:{value:t.snackbar.showError,callback:function(e){t.$set(t.snackbar,"showError",e)},expression:"snackbar.showError"}},[t._v("\n    "+t._s(t.snackbar.text)+"\n    "),r("v-btn",{attrs:{color:"error",flat:""},on:{click:function(e){t.snackbar.showError=!1}}},[t._v("\n      Close\n    ")])],1)],1)},c=[],u=(r("7f7f"),r("cebc")),s=r("bc3a"),l=r.n(s),f=r("2ef0"),d=r.n(f),p={name:"Table",data:function(){return{countries:[],headers:[{text:"Caption",name:"caption",sortable:!1},{text:"Latitude",name:"latitude",sortable:!1},{text:"Longitude",name:"longitude",sortable:!1}],snackbar:{showError:!1,text:""}}},methods:{transformCountryData:function(t){var e=Object(u["a"])({},t),r=e.name,n=e.capital,a=e.location,o=a.latitude,i=a.longitude;return{caption:"".concat(n," is capital of ").concat(r),longitude:i,latitude:o}},checkIfDataIsAllRight:function(t){if(d.a.has(t,"name")&&d.a.has(t,"capital")&&d.a.has(t,"location.longitude")&&d.a.has(t,"location.latitude")){var e=Object(u["a"])({},t),r=e.name,n=e.capital,a=e.location,o=a.latitude,i=a.longitude;return"string"===typeof r&&"string"===typeof n&&"number"===typeof o&&"number"===typeof i||(this.snackbar.showError=!0,this.snackbar.text="Error occurred while parsing data! Some data will not display.",!1)}return this.snackbar.showError=!0,this.snackbar.text="Error occurred while parsing data! Some data will not display.",!1}},mounted:function(){var t=this;l.a.get("countries.json").then(function(e){t.countries=e.data.filter(function(e){return t.checkIfDataIsAllRight(e)}).map(function(e){return t.transformCountryData(e)})}).catch(function(e){t.snackbar.showError=!0,t.snackbar.text="Error occurred while retrieving data!"})}},b=p,h=r("2877"),v=Object(h["a"])(b,i,c,!1,null,"557cdf4f",null),m=v.exports,g={name:"app",components:{Table:m}},y=g,w=Object(h["a"])(y,a,o,!1,null,null,null),k=w.exports,_=r("ce5b"),x=r.n(_);r("bf40");n["default"].use(x.a),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(k)}}).$mount("#app")}});
//# sourceMappingURL=app.79dfab59.js.map