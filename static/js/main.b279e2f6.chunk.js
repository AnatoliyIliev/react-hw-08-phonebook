(this["webpackJsonpreact-hw-07-phonebook"]=this["webpackJsonpreact-hw-07-phonebook"]||[]).push([[1],{31:function(A,t,e){"use strict";e.d(t,"b",(function(){return R})),e.d(t,"d",(function(){return C})),e.d(t,"c",(function(){return z})),e.d(t,"a",(function(){return x}));var n,c,r,a=e(14),o=e.n(a),i=e(18),u=e(15),s=e.n(u),l=e(4),j=Object(l.b)("contacts/fetchContactRequest"),f=Object(l.b)("contacts/fetchContactSuccess"),d=Object(l.b)("contacts/fetchContactError"),b=Object(l.b)("contacts/addContactRequest"),h=Object(l.b)("contacts/addContactSuccess"),O=Object(l.b)("contacts/addContactError"),g=Object(l.b)("contacts/addContactRequest"),v=Object(l.b)("contacts/addContactSuccess"),p=Object(l.b)("contacts/addContactError"),x=Object(l.b)("contacts/changeFilter"),R={fetchContacts:function(){return function(){var A=Object(i.a)(o.a.mark((function A(t){return o.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return t(j()),A.next=3,s.a.get("/contacts").then((function(A){A.name;var t=A.number;return console.log("operations-fetchContacts",t)})).then((function(A){var e=A.name,n=A.number;return t(f(e,n))})).catch((function(A){return t(d(A))}));case 3:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}()},addContacts:function(A,t){return function(e){console.log("operations-addContacts",A,t);var n={name:A,number:t};e(b()),s.a.post("/contacts",n).then((function(A){var t=A.data;return e(h(t))})).catch((function(A){return e(O(A))}))}},deleteContacts:function(A){return function(t){t(g()),s.a.delete("/contacts/".concat(A)).then((function(){return t(v(A))})).catch((function(A){return t(p(A))}))}}},H=e(25),U=function(A){return A.contacts.filter},C={getLoading:function(A){return A.contacts.loading},getFilter:U,getVisibleContacts:Object(H.a)([function(A){return A.contacts.items},U],(function(A,t){var e=t.toLowerCase();return A.filter((function(A){return A.name.toLowerCase().includes(e)}))}))},y=e(5),k=e(26),q=e(8),G=Object(l.d)([],(n={},Object(y.a)(n,f,(function(A,t){return t.payload})),Object(y.a)(n,h,(function(A,t){var e=t.payload;return A.some((function(A){return A.name===e.name}))?(alert("".concat(e.name," is already in contacts.")),A):[].concat(Object(k.a)(A),[e])})),Object(y.a)(n,v,(function(A,t){var e=t.payload;return A.filter((function(A){return A.id!==e}))})),n)),w=Object(l.d)(!1,(c={},Object(y.a)(c,j,(function(){return!0})),Object(y.a)(c,f,(function(){return!1})),Object(y.a)(c,d,(function(){return!1})),Object(y.a)(c,b,(function(){return!0})),Object(y.a)(c,h,(function(){return!1})),Object(y.a)(c,O,(function(){return!1})),Object(y.a)(c,g,(function(){return!0})),Object(y.a)(c,v,(function(){return!1})),Object(y.a)(c,p,(function(){return!1})),c)),T=Object(l.d)("",Object(y.a)({},x,(function(A,t){return t.payload}))),P=Object(l.d)(null,(r={},Object(y.a)(r,O,(function(A,t){return t.payload})),Object(y.a)(r,p,(function(A,t){return t.payload})),Object(y.a)(r,d,(function(A,t){return t.payload})),r)),z=Object(q.b)({items:G,filter:T,loading:w,error:P})},41:function(A,t,e){"use strict";e.d(t,"a",(function(){return a}));var n=e(43),c=e.n(n),r=e(1),a=function(A){var t=A.children;return Object(r.jsx)("div",{className:c.a.container,children:t})}},43:function(A,t,e){A.exports={container:"Container_container__fpIq5"}},54:function(A,t,e){},7:function(A,t,e){"use strict";e.d(t,"a",(function(){return j})),e.d(t,"c",(function(){return f})),e.d(t,"b",(function(){return b}));var n=e(14),c=e.n(n),r=e(18),a=e(15),o=e.n(a),i=e(4);o.a.defaults.baseURL="https://connections-api.herokuapp.com";var u,s=function(A){o.a.defaults.headers.common.Authorization="Bearer ".concat(A)},l=function(){o.a.defaults.headers.common.Authorization=""},j={register:Object(i.c)("auth/register",function(){var A=Object(r.a)(c.a.mark((function A(t){var e,n;return c.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,o.a.post("/users/signup",t);case 3:return e=A.sent,n=e.data,s(n.token),A.abrupt("return",n);case 9:A.prev=9,A.t0=A.catch(0);case 11:case"end":return A.stop()}}),A,null,[[0,9]])})));return function(t){return A.apply(this,arguments)}}()),logIn:Object(i.c)("auth/login",function(){var A=Object(r.a)(c.a.mark((function A(t){var e,n;return c.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,o.a.post("/users/login",t);case 3:return e=A.sent,n=e.data,s(n.token),A.abrupt("return",n);case 9:A.prev=9,A.t0=A.catch(0);case 11:case"end":return A.stop()}}),A,null,[[0,9]])})));return function(t){return A.apply(this,arguments)}}()),logOut:Object(i.c)("auth/logout",Object(r.a)(c.a.mark((function A(){return c.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,o.a.post("/users/logout");case 3:l(),A.next=8;break;case 6:A.prev=6,A.t0=A.catch(0);case 8:case"end":return A.stop()}}),A,null,[[0,6]])})))),fetchCurrentUser:Object(i.c)("auth/refresh",function(){var A=Object(r.a)(c.a.mark((function A(t,e){var n,r,a,i;return c.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:if(n=e.getState(),null!==(r=n.auth.token)){A.next=5;break}return console.log("\u0422\u043e\u043a\u0435\u043d\u0430 \u043d\u0435\u0442, \u0443\u0445\u043e\u0434\u0438\u043c \u0438\u0437 fetchCurrentUser"),A.abrupt("return",e.rejectWithValue());case 5:return s(r),A.prev=6,A.next=9,o.a.get("/users/current");case 9:return a=A.sent,i=a.data,A.abrupt("return",i);case 14:A.prev=14,A.t0=A.catch(6);case 16:case"end":return A.stop()}}),A,null,[[6,14]])})));return function(t,e){return A.apply(this,arguments)}}())},f={getIsLoggedIn:function(A){return A.auth.isLoggedIn},getUsername:function(A){return A.auth.user.name},getIsFetchingCurrent:function(A){return A.auth.isFetchingCurrentUser}},d=e(5),b=Object(i.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isFetchingCurrentUser:!1},extraReducers:(u={},Object(d.a)(u,j.register.fulfilled,(function(A,t){console.log("auth-slise-action-register",t),console.log("auth-slise-state-register",A),A.user=t.payload.user,A.token=t.payload.token,A.isLoggedIn=!0})),Object(d.a)(u,j.logIn.fulfilled,(function(A,t){console.log("auth-slise-action-logIn",t),console.log("auth-slise-state-logIn",A),A.user=t.payload.user,A.token=t.payload.token,A.isLoggedIn=!0})),Object(d.a)(u,j.logOut.fulfilled,(function(A,t){A.user={name:null,email:null},A.token=null,A.isLoggedIn=!1})),Object(d.a)(u,j.fetchCurrentUser.pending,(function(A){A.isFetchingCurrentUser=!0})),Object(d.a)(u,j.fetchCurrentUser.fulfilled,(function(A,t){A.user=t.payload,A.isLoggedIn=!0,A.isFetchingCurrentUser=!1})),Object(d.a)(u,j.fetchCurrentUser.rejected,(function(A){A.isFetchingCurrentUser=!1})),u)}).reducer},79:function(A,t,e){"use strict";e.r(t);var n=e(0),c=e.n(n),r=e(23),a=e.n(r),o=e(16),i=e(6),u=e(42),s=(e(53),e(54),e(3)),l=e(7),j=e(41),f=e(1),d={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}},b=function(){var A=Object(i.d)(l.c.getIsLoggedIn);return Object(f.jsxs)("nav",{children:[Object(f.jsx)(o.b,{to:"/",exact:!0,style:d.link,activeStyle:d.activeLink,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),A&&Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(o.b,{to:"/contacts",exact:!0,style:d.link,activeStyle:d.activeLink,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})})]})},h={container:{display:"flex",alignItems:"center"},avatar:{marginRight:4},name:{fontWeight:700,marginRight:12}};function O(){var A=Object(i.c)(),t=Object(i.d)(l.c.getUsername);return Object(f.jsxs)("div",{style:h.container,children:[Object(f.jsx)("img",{src:"data:image/png;base64,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",alt:"",width:"32",style:h.avatar}),Object(f.jsxs)("span",{style:h.name,children:["\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c, ",t]}),Object(f.jsx)("button",{type:"button",onClick:function(){return A(l.a.logOut())},children:"\u0412\u044b\u0439\u0442\u0438"})]})}var g={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}},v=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(o.b,{to:"/register",exact:!0,style:g.link,activeStyle:g.activeLink,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(f.jsx)(o.b,{to:"/login",exact:!0,style:g.link,activeStyle:g.activeLink,children:"\u041b\u043e\u0433\u0438\u043d"})]})},p={header:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #2A363B"}};function x(){var A=Object(i.d)(l.c.getIsLoggedIn);return Object(f.jsxs)("header",{style:p.header,children:[Object(f.jsx)(b,{}),A?Object(f.jsx)(O,{}):Object(f.jsx)(v,{})]})}var R=e(20),H=e(27),U=["redirectTo","children","restricted"];function C(A){var t=A.redirectTo,e=void 0===t?"/":t,n=A.children,c=(A.restricted,Object(H.a)(A,U)),r=Object(i.d)(l.c.getIsLoggedIn)&&c.restricted;return Object(f.jsx)(s.b,Object(R.a)(Object(R.a)({},c),{},{children:r?Object(f.jsx)(s.a,{to:e}):n}))}var y=["redirectTo","children"];function k(A){var t=A.redirectTo,e=void 0===t?"/":t,n=A.children,c=Object(H.a)(A,y),r=Object(i.d)(l.c.getIsLoggedIn);return Object(f.jsx)(s.b,Object(R.a)(Object(R.a)({},c),{},{children:r?n:Object(f.jsx)(s.a,{to:e})}))}var q=Object(n.lazy)((function(){return e.e(5).then(e.bind(null,83))})),G=Object(n.lazy)((function(){return e.e(0).then(e.bind(null,85))})),w=Object(n.lazy)((function(){return e.e(0).then(e.bind(null,85))})),T=Object(n.lazy)((function(){return e.e(4).then(e.bind(null,84))}));var P=function(){var A=Object(i.c)(),t=Object(i.d)(l.c.getIsFetchingCurrent);return Object(n.useEffect)((function(){A(l.a.fetchCurrentUser())}),[A]),!t&&Object(f.jsxs)(j.a,{children:[Object(f.jsx)(x,{}),Object(f.jsx)(s.d,{children:Object(f.jsxs)(n.Suspense,{fallback:Object(f.jsx)("div",{children:"Loading..."}),children:[Object(f.jsx)(C,{exact:!0,path:"/",children:Object(f.jsx)(q,{})}),Object(f.jsx)(k,{exact:!0,path:"/register",restricted:!0,children:Object(f.jsx)(G,{})}),Object(f.jsx)(k,{exact:!0,path:"/login",redirectTo:"/contacts",restricted:!0,children:Object(f.jsx)(w,{})}),Object(f.jsx)(k,{path:"/contacts",redirectTo:"/login",children:Object(f.jsx)(T,{})})]})})]})},z=e(26),V=e(4),E=e(17),Y=e(45),D=e.n(Y),M=e(31),I=Object(z.a)(Object(V.f)({serializableCheck:{ignoredActions:[E.a,E.f,E.b,E.c,E.d,E.e]}})),Q={key:"auth",storage:D.a,whitelist:["token"]},W=Object(V.a)({reducer:{auth:Object(E.g)(Q,l.b),contacts:M.c},middleware:I,devTools:!1}),m=Object(E.h)(W);a.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(i.a,{store:W,children:Object(f.jsx)(u.a,{loading:null,persistor:m,children:Object(f.jsx)(o.a,{children:Object(f.jsx)(P,{})})})})}),document.getElementById("root"))}},[[79,2,3]]]);
//# sourceMappingURL=main.b279e2f6.chunk.js.map