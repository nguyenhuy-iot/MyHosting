(this["webpackJsonpdraw-tools"]=this["webpackJsonpdraw-tools"]||[]).push([[0],{104:function(e,t,n){},182:function(e,t){},183:function(e,t){},184:function(e,t){},185:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(19),i=n.n(s),r=(n(104),n(105),n(20)),o=n(39),l=n.n(o),u=n(60),d=n(28),b=n(187),j=n(66),f=n.n(j),g=n(6),m=b.a.TabPane,h=function(e){var t=e.select,n=e.data,a=e.setData,s=c.a.useState({activeKey:"1"}),i=Object(r.a)(s,2),o=i[0],l=i[1],j=c.a.useRef(0);var h=function(){var e="".concat(j.current=n.length>0?+n[n.length-1].key+1:1),c=Object(u.a)(n);c.push({key:e,bodyContent:[],isStart:!1}),a(c),t(e),l({activeKey:e})},v=function(e){var c,s=o.activeKey;n.forEach((function(t,n){t.key===e&&(c=n-1)}));var i=n.filter((function(t){return t.key!==e}));i.length&&s===e&&(s=c>=0?i[c].key:i[0].key),j.current--,a(i),t(s),l({activeKey:s})},O=o.activeKey;return Object(g.jsxs)("div",{className:"d-flex",children:[Object(g.jsx)("div",{className:f.a.banner,children:"Draw Tools"}),Object(g.jsx)(b.a,{type:"editable-card",className:f.a.menu,activeKey:O,onChange:function(e){l((function(t){return Object(d.a)(Object(d.a)({},t),{},{activeKey:e})})),t(e)},onEdit:function(e,t){({add:h,remove:v})[t](e)},closable:n,children:null===n||void 0===n?void 0:n.map((function(e,t){return Object(g.jsx)(m,{tab:"Trang ".concat(t+1)},"".concat(e.key))}))})]})},v=n(189),O=n(190),y=n(97),_=n(69),x=n.n(_);var p=function(e){var t=e.setCurrentTools,n=c.a.useState(),a=Object(r.a)(n,2),s=a[0],i=a[1],o=c.a.useState(),l=Object(r.a)(o,2),u=l[0],b=l[1];c.a.useEffect((function(){return s&&u&&t((function(e){return Object.assign(e,{SelectedTool:s,ColorCode:u}),Object(d.a)({},e)})),function(){}}),[u,s,t]);var j=c.a.useCallback((function(e){var t=e.target.value;i(t)}),[]),f=c.a.useCallback((function(){var e=["Di chuy\u1ec3n","V\u1ebd","V\u0103n b\u1ea3n","T\xf4 m\xe0u","H\xecnh kh\u1ed1i","X\xf3a"];return["pointer","pencil","type","bucket","shape","delete"].map((function(t,n){var a="icon/".concat(t,s===t?"-on.svg":".svg");return Object(g.jsx)(v.a.Button,{value:t,className:x.a.radio_button,children:Object(g.jsx)(O.a,{placement:"right",title:e[n],children:Object(g.jsx)("img",{style:{width:50},src:a,alt:""})})},n)}))}),[s]),m=c.a.useCallback((function(){return Object(g.jsx)("div",{children:Object(g.jsx)(y.a,{initialValue:"#1890FF",onChange:function(e){return b(e)},placement:"right"})})}),[]);return Object(g.jsxs)("div",{children:[Object(g.jsx)(v.a.Group,{className:x.a["radio-group"],buttonStyle:"solid",onChange:j,children:f()}),m()]})},C=n.p+"static/media/animation.f2609b19.gif",k=n(22),S=n.n(k),N=function(e){var t=e.setData,n=e.data,a=e.selected;return Object(g.jsxs)("div",{className:S.a.container,children:[Object(g.jsx)("div",{className:S.a["img-cover"],children:Object(g.jsx)("img",{className:S.a["img-animation"],src:C,alt:"gif"})}),Object(g.jsx)("h3",{className:S.a.title,children:"B\u1ed8 C\xd4NG C\u1ee4 V\u1ebc C\u01a0 B\u1ea2N"}),Object(g.jsxs)("div",{className:S.a.functions,children:[Object(g.jsxs)("div",{className:"".concat(S.a.button," ").concat(S.a.import),children:[Object(g.jsx)("img",{className:"mx-2",src:"/image/import.png",alt:"blank",width:"35",height:"35"}),"Th\xeam \u1ea3nh"]}),Object(g.jsxs)("div",{onClick:function(){var e=Array.from(n),c=e.findIndex((function(e){return e.key===a}));e[c].isStart=!0,t(e)},className:"".concat(S.a.button," ").concat(S.a.blank),children:[Object(g.jsx)("img",{className:"mx-2",src:"/image/blank-paper.png",alt:"blank",width:"40",height:"40"}),"Trang m\u1edbi"]})]})]})},w=n(72),T=localStorage.getItem("draw"),D="canvas-table",I=function(e){var t=e.imgUrl,n=e.CurrentTools,a=e.currentPage,s=c.a.useState(),i=Object(r.a)(s,2),o=i[0],l=i[1],b=c.a.useRef(!1);return c.a.useEffect((function(){return w.fabric.Image.fromURL(t,(function(e){var n=new w.fabric.Canvas(D,Object(d.a)({width:e.width,height:e.height,backgroundImage:t},J));l(n)})),function(){o&&o.dispose()}}),[t]),c.a.useEffect((function(){if(!o)return null;var e=n.SelectedTool,t=n.ColorCode;switch(e){case"pencil":Object.assign(o,{isDrawingMode:!0}),o.freeDrawingBrush.width=30,o.freeDrawingBrush.color=t.rgba;break;default:Object.assign(o,Object(d.a)({},J))}return console.log(o.getObjects()),function(){}}),[o,n]),c.a.useEffect((function(){o&&(console.log("\ud83d\ude80 ~ file: CanvasTable.js ~ line 49 ~ React.useEffect ~ Canvas",o),b.current?function(e,t){var n,a=JSON.parse(T),c=a.findIndex((function(e){return e.key===t}));(n=a[c].bodyContent).push.apply(n,Object(u.a)(e)),console.log(a[c]),localStorage.setItem("draw",JSON.stringify(a))}(o.getObjects(),a):b.current=!0)})),Object(g.jsxs)("div",{children:[Object(g.jsx)("button",{onClick:function(){var e=function(e){var t=JSON.parse(T).find((function(t){return t.key===e})).bodyContent;return console.log("\ud83d\ude80 ~ file: localData.js ~ line 14 ~ getLocalData ~ obj",t),t}(a);console.log("\ud83d\ude80 ~ file: CanvasTable.js ~ line 51 ~ React.useEffect ~ obj",e),o.add(e[0])},children:"Add"}),Object(g.jsx)("canvas",{id:D,style:{border:"1px solid black"}})]})},J={isDrawingMode:!1,renderOnAddRemove:!0},B=function(e){var t,n=c.a.useState("1"),a=Object(r.a)(n,2),s=a[0],i=a[1],o=c.a.useState({}),u=Object(r.a)(o,2),d=u[0],b=u[1],j=c.a.useState(null),f=Object(r.a)(j,2),m=f[0],v=f[1],O=localStorage.getItem("draw"),y=function(e){localStorage.setItem("draw",JSON.stringify(e)),v(e)};return c.a.useEffect((function(){if(O)v(JSON.parse(O));else{var e=[];e.push({key:"1",bodyContent:[],isStart:!0}),localStorage.setItem("draw",JSON.stringify(e)),v(e)}}),[O]),Object(g.jsxs)("div",{className:l.a.draw,children:[Object(g.jsx)("div",{className:l.a.header,children:Object(g.jsx)(h,{setData:y,data:m,select:i})}),m&&(t=m.find((function(e){return e.key===s})),t?t.isStart?Object(g.jsxs)("div",{className:l.a.body,children:[Object(g.jsx)("div",{className:l.a.toolsSide,children:Object(g.jsx)("div",{children:Object(g.jsx)(p,{setCurrentTools:b})})}),Object(g.jsx)("div",{className:l.a.content,children:Object(g.jsx)(I,{currentPage:s,imgUrl:"/image/1.jpg",CurrentTools:d})})]}):Object(g.jsx)(N,{setData:y,data:m,selected:s}):"")]})};var E=function(){return Object(g.jsx)(B,{})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,191)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(E,{})}),document.getElementById("root")),K()},22:function(e,t,n){e.exports={container:"styles_container__1XbUT","img-animation":"styles_img-animation__2DO5L","img-cover":"styles_img-cover__2yJ1r",title:"styles_title__1-Ia6",functions:"styles_functions__1VplT",button:"styles_button__3LwIm",import:"styles_import__2CBlF",blank:"styles_blank__2mkB-"}},39:function(e,t,n){e.exports={draw:"styles_draw__3ZCo5",header:"styles_header__uPXre",body:"styles_body__28B1J",toolsSide:"styles_toolsSide__HlWDn",content:"styles_content__2HXTP"}},66:function(e,t,n){e.exports={banner:"styles_banner__HrZWS",menu:"styles_menu__3r23K"}},69:function(e,t,n){e.exports={radio_button:"styles_radio_button__2ggnJ"}}},[[185,1,2]]]);
//# sourceMappingURL=main.e4c3cd2e.chunk.js.map