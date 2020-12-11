(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{40:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n(0),a=n.n(r),i=n(33),s=n.n(i),o=(n(40),n(9)),l=n(10),u=n(6),j=n.n(u),b=n(7),d=n(8),p=n(14),O=n(17),x=n.n(O),f="https://travel-map-ap.herokuapp.com/",h=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat(f,"/entries"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("".concat(f,"/entries"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(b.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.delete("".concat(f,"/entries/").concat(t),n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t._id,e.next=3,console.log(n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=n(19),w=(n(60),function(e){var t=e.location,n=e.onClose,a=Object(r.useState)(!1),i=Object(d.a)(a,2),s=i[0],o=(i[1],Object(r.useState)(!1)),l=Object(d.a)(o,2),u=l[0],p=(l[1],Object(y.a)()),O=p.register,x=p.handleSubmit,f=function(){var e=Object(b.a)(j.a.mark((function e(c){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.latitude=t.latitude,c.longitude=t.longitude,e.next=4,m(c);case 4:r=e.sent,console.log(r),m(r),n();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("form",{className:"entryForm",onSubmit:x(f),children:[u?Object(c.jsx)("h3",{children:u}):null,Object(c.jsx)("label",{for:"title",children:"Title"}),Object(c.jsx)("input",{type:"text",name:"title",required:!0,ref:O}),Object(c.jsx)("label",{for:"comments",children:"Comments"}),Object(c.jsx)("input",{type:"text",name:"comments",ref:O}),Object(c.jsx)("label",{for:"description",children:"Description"}),Object(c.jsx)("textarea",{type:"text",name:"description",ref:O}),Object(c.jsx)("label",{for:"image",children:"Image (url)"}),Object(c.jsx)("input",{type:"text",name:"image",alt:"",ref:O}),Object(c.jsx)("label",{for:"visitDate",children:"Visit Date"}),Object(c.jsx)("input",{type:"date",name:"visitDate",required:!0,ref:O}),Object(c.jsx)("button",{className:"entryForm__button",disabled:s,children:s?"Loading...":"Create Entry"})]})}),k=n(66),C=(n(61),function(e){var t=e.logEntries,n=e.onClose,r=e.flyTo,a=t.data||[],i=function(){var e=Object(b.a)(j.a.mark((function e(t,c){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),r=c._id,g(r),n();case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"sidebar",children:[Object(c.jsx)("h3",{children:"Locations saved"}),Object(c.jsx)("ul",{children:a.map((function(e){return Object(c.jsxs)("div",{className:"sidebar__item",children:[Object(c.jsx)("li",{onClick:function(t){return r(t,e)},children:Object(c.jsx)("h4",{children:e.title})}),Object(c.jsx)("button",{onClick:function(t){return i(t,e)},children:"X "})]},e._id)}))}),Object(c.jsx)("div",{className:"sidebar__help",children:Object(c.jsx)("h4",{children:"Double click on Map to save a new Location"})})]})}),S=(n(62),function(e){var t=e.entry,n=Object(r.useState)(!0),a=Object(d.a)(n,2),i=a[0],s=a[1],u=Object(y.a)(),p=u.register,O=u.handleSubmit,x=Object(r.useState)(!1),f=Object(d.a)(x,2),h=f[0],m=(f[1],Object(r.useState)(!1)),g=Object(d.a)(m,2),w=g[0],k=(g[1],Object(r.useState)(t)),C=Object(d.a)(k,2),S=C[0],_=C[1],D=function(e){_(Object(l.a)(Object(l.a)({},S),{},Object(o.a)({},e.target.name,e.target.value)))},N=function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,v(S);case 3:n=e.sent,v(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"popup",children:i?Object(c.jsxs)("div",{className:"popup__complete",children:[Object(c.jsx)("h3",{children:t.title}),Object(c.jsx)("p",{children:t.comments}),Object(c.jsx)("p",{children:t.description}),t.image&&Object(c.jsx)("img",{src:t.image,alt:t.title}),Object(c.jsxs)("small",{children:["Visited on: ",new Date(t.visitDate).toLocaleDateString()]}),Object(c.jsx)("button",{onClick:function(e){return s(!1)},children:"Edit"})]}):Object(c.jsx)("div",{children:Object(c.jsxs)("form",{className:"entryForm",onSubmit:function(e){return O(N(e))},children:[w?Object(c.jsx)("h3",{children:w}):null,Object(c.jsx)("label",{for:"title",children:"Title"}),Object(c.jsx)("input",{type:"text",name:"title",defaultValue:t.title,required:!0,ref:p,onChange:D}),Object(c.jsx)("label",{for:"comments",children:"Comments"}),Object(c.jsx)("input",{type:"text",name:"comments",defaultValue:t.comments,onChange:D,ref:p}),Object(c.jsx)("label",{for:"description",children:"Description"}),Object(c.jsx)("textarea",{type:"text",name:"description",defaultValue:t.description,ref:p}),Object(c.jsx)("label",{for:"image",children:"Image (url)"}),Object(c.jsx)("input",{type:"text",name:"image",defaultValue:t.image,alt:"",onChange:D,ref:p}),Object(c.jsx)("label",{for:"visitDate",children:"Visit Date"}),Object(c.jsx)("input",{type:"date",name:"visitDate",required:!0,ref:p,onChange:D}),Object(c.jsx)("button",{className:"entryForm__button",disabled:h,children:h?"Loading...":"Save new Entry"}),Object(c.jsx)("button",{className:"entryForm__button",onClick:function(e){return s(!0)},children:"Cancel"})]})})})}),_=(n(63),function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],i=t[1],s=Object(r.useState)({}),u=Object(d.a)(s,2),O=u[0],x=u[1],f=Object(r.useState)(null),m=Object(d.a)(f,2),g=m[0],v=m[1],y=Object(r.useState)(!1),_=Object(d.a)(y,2),D=(_[0],_[1],Object(r.useState)({width:"80%",height:"100%",latitude:0,longitude:0,zoom:2})),N=Object(d.a)(D,2),z=N[0],E=N[1],L=function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){L()}),[]);var F=n.data||[];return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsxs)(p.d,Object(l.a)(Object(l.a)({},z),{},{mapStyle:"mapbox://styles/faculacarbonaro/ckidhkgwk2fg819pbglqo4n12",mapboxApiAccessToken:"pk.eyJ1IjoiZmFjdWxhY2FyYm9uYXJvIiwiYSI6ImNraWRneXM3YTE1cjUyc3J0aXZzMTI0N2EifQ.4fpyZ_jDJHSzLs4TQNOk8w",onViewportChange:function(e){return E(e)},onDblClick:function(e){var t=Object(d.a)(e.lngLat,2),n=t[0],c=t[1];v({longitude:n,latitude:c})},children:[F.map((function(e){return Object(c.jsxs)(a.a.Fragment,{children:[Object(c.jsx)(p.b,{latitude:e.latitude,longitude:e.longitude,children:Object(c.jsx)("div",{onClick:function(){return x(Object(l.a)(Object(l.a)({},O),{},Object(o.a)({},e._id,!0)))},children:Object(c.jsx)("svg",{className:"marker yellow",style:{height:"".concat(6*z.zoom,"px"),width:"".concat(6*z.zoom,"px")},version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 512 512",children:Object(c.jsx)("g",{children:Object(c.jsx)("g",{children:Object(c.jsx)("path",{d:"M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035 c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719 c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"})})})})})}),O[e._id]?Object(c.jsx)(p.c,{latitude:e.latitude,longitude:e.longitude,closeButton:!0,closeOnClick:!1,dynamicPosition:!0,onClose:function(){return x(Object(l.a)(Object(l.a)({},O),{},Object(o.a)({},e._id,!1)))},anchor:"top",children:Object(c.jsx)(S,{entry:e})}):null]},e._id)})),g?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(p.b,{latitude:g.latitude,longitude:g.longitude,children:Object(c.jsx)("div",{children:Object(c.jsx)("svg",{className:"marker yellow",style:{height:"".concat(6*z.zoom,"px"),width:"".concat(6*z.zoom,"px")},version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 512 512",children:Object(c.jsx)("g",{children:Object(c.jsx)("g",{children:Object(c.jsx)("path",{d:"M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035 c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719 c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"})})})})})}),Object(c.jsx)(p.c,{latitude:g.latitude,longitude:g.longitude,closeButton:!0,closeOnClick:!1,dynamicPosition:!0,anchor:"top",onClose:function(){return v(null)},children:Object(c.jsx)("div",{className:"popup",children:Object(c.jsx)(w,{onClose:function(){v(null),L()},location:g})})})]}):null]})),Object(c.jsx)(C,{setLogEntries:i,logEntries:n,onClose:function(){v(null),L()},flyTo:function(e,t){e.preventDefault();var n=t.longitude,c=t.latitude,r=Object(l.a)(Object(l.a)({},z),{},{latitude:c,longitude:n,zoom:10,transitionDuration:5e3,transitionInterpolator:new p.a,transitionEasing:k.a});E(r),x(Object(l.a)(Object(l.a)({},O),{},Object(o.a)({},t._id,!0)))}})]})});s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(_,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.59d7e85c.chunk.js.map