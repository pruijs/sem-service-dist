(function(t){function e(e){for(var o,i,a=e[0],s=e[1],u=e[2],m=0,f=[];m<a.length;m++)i=a[m],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&f.push(c[i][0]),c[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,a=1;a<n.length;a++){var s=n[a];0!==c[s]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},c={app:0},r=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var o=n("85ec"),c=n.n(o);c.a},"169e":function(t,e,n){"use strict";var o=n("3cb4"),c=n.n(o);c.a},"16b5":function(t,e,n){},"28f7":function(t,e,n){"use strict";var o=n("b1a7"),c=n.n(o);c.a},"3cb4":function(t,e,n){},"63a1":function(t,e,n){"use strict";var o=n("c35e"),c=n.n(o);c.a},"63bc":function(t,e,n){},6559:function(t,e,n){"use strict";var o=n("63bc"),c=n.n(o);c.a},"7dfc":function(t,e,n){},"85ec":function(t,e,n){},"8aed":function(t,e,n){},a3c8:function(t,e,n){"use strict";var o=n("8aed"),c=n.n(o);c.a},b1a7:function(t,e,n){},c35e:function(t,e,n){},c6cf:function(t,e,n){"use strict";var o=n("7dfc"),c=n.n(o);c.a},c9e4:function(t,e,n){"use strict";var o=n("16b5"),c=n.n(o);c.a},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Shop")]),t._v(" | "),n("router-link",{attrs:{to:"/products"}},[t._v("Products")]),t._v(" | "),n("router-link",{attrs:{to:"/inventory"}},[t._v("Inventory")])],1),n("router-view")],1)},r=[],i=(n("034f"),n("2877")),a={},s=Object(i["a"])(a,c,r,!1,null,null,null),u=s.exports,l=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Stock")],1)},f=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{attrs:{id:"stock"}},t._l(t.items,(function(t){return n("li",{key:t.name},[n("BuyItem",{attrs:{item:t}})],1)})),0)},d=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:t.buyLink}},[n("Item",{attrs:{item:t.item}})],1)},h=[],b=(n("99af"),n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item",on:{click:function(e){return t.$emit("item-click")}}},[n("ItemImage",{attrs:{item:t.item}}),t._v(t._s(t.item.price)+" ")],1)}),_=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{attrs:{src:t.src,width:"300px"}})},I=[],g={name:"ItemImage",props:{item:{}},computed:{src:function(){return"https://semservice.s3.amazonaws.com/".concat(encodeURIComponent(this.item.name),".jpeg")}}},k=g,w=(n("c9e4"),Object(i["a"])(k,y,I,!1,null,"74f8cdcc",null)),x=w.exports,O={name:"Item",components:{ItemImage:x},props:{item:{}}},j=O,L=(n("63a1"),Object(i["a"])(j,b,_,!1,null,"19c5fbca",null)),S=L.exports,$={name:"BuyItem",components:{Item:S},props:{item:{}},computed:{buyLink:function(){return"https://bunq.me/SemService/".concat(encodeURIComponent(this.item.price),"/").concat(encodeURIComponent(this.item.name))}}},E=$,P=(n("6559"),Object(i["a"])(E,v,h,!1,null,"3159d1ed",null)),C=P.exports,z=n("bc3a"),M=n.n(z),R={name:"Stock",components:{BuyItem:C},props:{link:String},data:function(){return{items:null}},mounted:function(){var t=this;M.a.get("https://htun05wn1f.execute-api.us-east-1.amazonaws.com/prod/stock").then((function(e){return t.items=e.data.list}))}},U=R,B=(n("169e"),Object(i["a"])(U,p,d,!1,null,"59774406",null)),T=B.exports,J={name:"Home",components:{Stock:T}},q=J,H=Object(i["a"])(q,m,f,!1,null,null,null),A=H.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("ItemList")],1)},F=[],G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{attrs:{id:"stock"}},t._l(t.items,(function(e){return n("li",{key:e.name},[n("Item",{attrs:{item:e},on:{"item-click":function(n){return t.$emit("item-select",e)}}})],1)})),0)},K=[],N={name:"ItemList",components:{Item:S},props:{link:String},data:function(){return{items:null}},mounted:function(){var t=this;M.a.get("https://htun05wn1f.execute-api.us-east-1.amazonaws.com/prod/items").then((function(e){return t.items=e.data.list}))}},Q=N,V=(n("a3c8"),Object(i["a"])(Q,G,K,!1,null,"d41f9c5a",null)),W=V.exports,X={name:"Products",components:{ItemList:W}},Y=X,Z=Object(i["a"])(Y,D,F,!1,null,null,null),tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("LocationList")],1)},nt=[],ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{attrs:{id:"stock"}},t._l(t.locations,(function(t){return n("li",{key:t.name},[n("Location",{attrs:{location:t}})],1)})),0)},ct=[],rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"location"},[t._v(" "+t._s(t.location.name)+" - "),n("span",{on:{click:t.edit}},[t._v(t._s(t.item))]),t.editing?n("ItemList",{on:{"item-select":t.selectItem}}):t._e()],1)},it=[],at={name:"Location",components:{ItemList:W},props:{location:{}},data:function(){return{editing:!1,item:this.location.item}},methods:{edit:function(){this.editing=!0},selectItem:function(t){var e=this;M.a.put("https://htun05wn1f.execute-api.us-east-1.amazonaws.com/prod/locations/".concat(encodeURIComponent(this.location.name)),{item:t.name}).then((function(n){e.item=t.name,e.editing=!1}))}}},st=at,ut=(n("c6cf"),Object(i["a"])(st,rt,it,!1,null,"6224fc94",null)),lt=ut.exports,mt={name:"LocationList",components:{Location:lt},props:{link:String},data:function(){return{locations:null}},mounted:function(){var t=this;M.a.get("https://htun05wn1f.execute-api.us-east-1.amazonaws.com/prod/locations").then((function(e){return t.locations=e.data.list}))}},ft=mt,pt=(n("28f7"),Object(i["a"])(ft,ot,ct,!1,null,"0ccaf397",null)),dt=pt.exports,vt={name:"Inventory",components:{LocationList:dt}},ht=vt,bt=Object(i["a"])(ht,et,nt,!1,null,null,null),_t=bt.exports;o["a"].use(l["a"]);var yt=[{path:"/",name:"Shop",component:A},{path:"/products",name:"Products",component:tt},{path:"/inventory",name:"Inventory",component:_t}],It=new l["a"]({mode:"history",base:"/",routes:yt}),gt=It;o["a"].config.productionTip=!1,new o["a"]({router:gt,render:function(t){return t(u)}}).$mount("#app")}});
//# sourceMappingURL=app.3823409e.js.map