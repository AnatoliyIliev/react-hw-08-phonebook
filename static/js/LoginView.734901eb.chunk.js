(this["webpackJsonpreact-hw-08-phonebook"]=this["webpackJsonpreact-hw-08-phonebook"]||[]).push([[2],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n(84),a=n(0),o=n(6),i=n(7),l=n(1),c={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15},center:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}};function s(){var e=Object(o.c)(),t=Object(a.useState)(""),n=Object(r.a)(t,2),s=n[0],u=n[1],b=Object(a.useState)(""),f=Object(r.a)(b,2),d=f[0],h=f[1],j=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"email":return u(r);case"password":return h(r);default:return}};return Object(l.jsxs)("div",{style:c.center,children:[Object(l.jsx)("h1",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043b\u043e\u0433\u0438\u043d\u0430"}),Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(i.a.logIn({email:s,password:d})),u(""),h("")},style:c.form,autoComplete:"off",children:[Object(l.jsxs)("label",{style:c.label,children:["\u041f\u043e\u0447\u0442\u0430",Object(l.jsx)("input",{type:"email",name:"email",value:s,onChange:j})]}),Object(l.jsxs)("label",{style:c.label,children:["\u041f\u0430\u0440\u043e\u043b\u044c",Object(l.jsx)("input",{type:"password",name:"password",value:d,onChange:j})]}),Object(l.jsx)("button",{type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(32);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=LoginView.734901eb.chunk.js.map