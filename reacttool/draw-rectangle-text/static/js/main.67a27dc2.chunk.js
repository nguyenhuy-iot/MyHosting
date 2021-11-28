(this["webpackJsonpdraw-rectangle-text"]=this["webpackJsonpdraw-rectangle-text"]||[]).push([[0],{101:function(t,e,n){},172:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(19),c=n.n(r),i=(n(92),n(57)),u=n(6),s=n(42),l=n(18),f=n(20),d=function(t){var e,n=null!==(e=JSON.parse(localStorage.getItem(t)))&&void 0!==e?e:{},a=function(){localStorage.setItem(t,JSON.stringify(n))};return{get:function(t){return n[t]},set:function(t,e){n[t]=e,a()},remove:function(t){delete n[t],a()}}},b=n(7),h="canvas";var g=function(t){var e=t.imgUrl,n=o.a.useState(),a=Object(l.a)(n,2),r=a[0],c=a[1],i=o.a.useRef({}),u=function(){var t=0;return{next:function(){return t++},reset:function(){return t=0}}}(),g=d("CanvasStorage");o.a.useEffect((function(){return f.fabric.Image.fromURL(e,(function(t){var n=new f.fabric.Canvas(h,{width:t.width,height:t.height,isDrawingMode:!1,renderOnAddRemove:!0,preserveObjectStacking:!0,backgroundImage:e});n.on("mouse:down",(function(t){return x(t,i,n)})),n.on("mouse:up",(function(t){return p(t,i,n)})),n.on("mouse:move",(function(t){return m(t,i,n)})),c(n)})),function(){r&&r.dispose()}}),[e]);var m=function(t,e,n){var a=t.e.buttons,o=t.target;if(o&&1===a){var r=o.name,c=o.top,i=o.left,u=r.split("-"),f=Object(l.a)(u,2),d=(f[0],f[1]),b=n.getObjects().find((function(t){return t.name==="text-".concat(d)}));b.set(Object(s.a)(Object(s.a)({},b),{},{top:c,left:i}))}},x=function(t,e,n){Object.assign(e.current,{down:t})},p=function(t,e,n){var a=e.current.down,o=t;a.target||o.target||O(n,a.pointer,o.pointer),Object.assign(e.current,{up:t})},O=function(t,e,n){var a=Math.abs(n.x-e.x),o=Math.abs(n.y-e.y),r=[Math.min(e.y,n.y),Math.min(e.x,n.x)],c=r[0],i=r[1];if(!(a*o))return null;if(a<50&&o<30)return null;var l=u.next(),d=new f.fabric.Rect(Object(s.a)({name:"rect-".concat(l),width:a,height:o,top:c,left:i},j)),b=new f.fabric.Textbox("Text",Object(s.a)({name:"text-".concat(l),top:c,left:i,width:a},v));t.add(d,b)};return Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:function(){var t=r.getObjects(),e=t.filter((function(t){return t.name.includes("rect")})),n=t.filter((function(t){return t.name.includes("text")})),a=e.map((function(t,e){var n=t.top,a=t.left,o=t.width,r=t.height,c=t.angle;return{top:n,left:a,width:o*t.zoomX,height:r*t.zoomY,angle:c}}));n.forEach((function(t,e){var n=t.text;Object.assign(a[e],{text:n})})),g.set("ListInput",a)},children:"save"}),Object(b.jsx)("canvas",{style:{border:"1px solid black"},id:h})]})};var j={fill:"rgba(255,255,255,0.7)",stroke:"blue",strokeWidth:1,strokeUniform:!0},v={fontSize:24,editable:!0,borderColor:"blue",hasControls:!1,lockMovementX:!0,lockMovementY:!0,lockScalingX:!0,lockScalingY:!0},m="canvas-text-box";var x=function(t){var e=t.imgUrl,n=o.a.useState(),a=Object(l.a)(n,2),r=a[0],c=a[1],i=d("CanvasStorage");return o.a.useEffect((function(){return f.fabric.Image.fromURL(e,(function(t){var n=new f.fabric.Canvas(m,{width:t.width,height:t.height,isDrawingMode:!1,renderOnAddRemove:!0,backgroundImage:e});n.on("mouse:dblclick",(function(t){return p(t,n)}));var a=i.get("CanvasObjects");a&&(console.log(a),a.forEach((function(t){var e=new f.fabric.IText("Text Box",t);n.add(e)}))),c(n)})),function(){r&&r.dispose()}}),[e]),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:function(){var t=r.getObjects().map((function(t){var e=t.top,n=t.left,a=t.width,o=t.height,r=t.angle,c=t.text;return{top:e,left:n,width:a*t.zoomX,height:o*t.zoomY,angle:r,text:c}}));i.set("ListInput",t),i.set("CanvasObjects",r.getObjects())},children:"save"}),Object(b.jsx)("canvas",{style:{border:"1px solid black"},id:m})]})},p=function(t,e){var n=t.pointer;t.target||O(e,n)},O=function(t,e){var n=e.x,a=e.y,o=new f.fabric.IText("Text Box",{top:a,left:n,editable:!0,backgroundColor:"#fafafa",borderColor:"blue"});t.add(o)},w=[{name:"Textbox",path:"/",component:x},{name:"Canvas",path:"/canvas",component:g},{name:"K\u1ebft qu\u1ea3",path:"/render",component:function(t){var e,n=t.imgUrl,a=d("CanvasStorage"),r=o.a.useState(null!==(e=a.get("ListInput"))&&void 0!==e?e:[]),c=Object(l.a)(r,2),i=c[0];c[1];return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{style:{position:"relative"},children:[Object(b.jsx)("img",{src:n,alt:""}),i.map((function(t,e){var n=t.top,a=t.left,o=t.width,r=t.height;return t.angle,t.text,console.log("\ud83d\ude80 ~ item",t),Object(b.jsx)("div",{style:{position:"absolute",top:"".concat(n,"px"),left:"".concat(a,"px"),width:"".concat(o,"px"),height:"".concat(r,"px"),backgroundColor:"blue"}},e)}))]})})}}],k=n(175),C=n(176),S=(n(101),k.a.Header),I=k.a.Content,y=function(t,e){return Object(b.jsx)(u.a,{path:t.path,element:Object(b.jsx)(t.component,{imgUrl:"image/1.jpg"})},e)},M=function(t){var e=window.location.pathname,n=o.a.useMemo((function(){return w.findIndex((function(t){return t.path===e})).toString()}),[e]);return Object(b.jsxs)(k.a,{className:"layout",children:[Object(b.jsx)(S,{children:Object(b.jsx)(C.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:[n],children:w.map((function(t,e){var n=e;return Object(b.jsx)(C.a.Item,{children:Object(b.jsx)(i.b,{to:t.path,children:t.name})},n)}))})}),Object(b.jsx)(I,{children:Object(b.jsx)("div",{className:"site-layout-content",children:Object(b.jsx)(u.c,{children:w.map(y)})})})]})};var T=function(){return Object(b.jsx)(i.a,{children:Object(b.jsx)(M,{})})},L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,177)).then((function(e){var n=e.getCLS,a=e.getFID,o=e.getFCP,r=e.getLCP,c=e.getTTFB;n(t),a(t),o(t),r(t),c(t)}))};n(171);c.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(T,{})}),document.getElementById("root")),L()},92:function(t,e,n){},97:function(t,e){},98:function(t,e){},99:function(t,e){}},[[172,1,2]]]);
//# sourceMappingURL=main.67a27dc2.chunk.js.map