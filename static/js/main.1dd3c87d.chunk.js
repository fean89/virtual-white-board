(this["webpackJsonpclient-app"]=this["webpackJsonpclient-app"]||[]).push([[0],{23:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(17),j=c.n(a),r=(c(23),c(7)),i=c(2),l=c(10),o=c(11),b=c(0);var d=function(e){var t=Object(s.useState)(e),c=Object(o.a)(t,2),n=c[0],a=c[1];return{value:n,onChange:function(e){a(e.target.value)}}},O=function(e){var t=d(""),c=d(""),n=Object(s.useState)(null),a=Object(o.a)(n,2),j=a[0],r=(a[1],Object(s.useState)(!1)),i=Object(o.a)(r,2),O=i[0];return i[1],Object(b.jsxs)("div",{children:["Login",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{children:["Username",Object(b.jsx)("br",{}),Object(b.jsx)("input",Object(l.a)(Object(l.a)({type:"text"},t),{},{autoComplete:"new-password"}))]}),Object(b.jsxs)("div",{style:{marginTop:10},children:["Password",Object(b.jsx)("br",{}),Object(b.jsx)("input",Object(l.a)(Object(l.a)({type:"password"},c),{},{autoComplete:"new-password"}))]}),j&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("small",{style:{color:"red"},children:j}),Object(b.jsx)("br",{})]}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"button",value:O?"Loading...":"Login",onClick:function(){e.history.push("/dashboard")},disabled:O}),Object(b.jsx)("br",{})]})};var x=function(e){return Object(b.jsxs)("div",{style:{color:"black",backgroundColor:"white",width:"300px",height:"300px",margin:"10px"},children:["Some post, ",e.name,Object(b.jsx)("br",{}),"Date: ",e.date]})};var h=function(e){var t=function(e){return e%4===0?e/4:Math.floor(e/4)+1};function c(e){return Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col",children:Object(b.jsx)(x,{name:"Sara",date:"2021-08-07 16:54"})}),Object(b.jsx)("div",{className:"col",children:Object(b.jsx)(x,{name:"Maj",date:"2021-08-07 16:54"})}),Object(b.jsx)("div",{className:"col",children:Object(b.jsx)(x,{name:"Felix",date:"2021-08-07 16:54"})}),Object(b.jsx)("div",{className:"col",children:Object(b.jsx)(x,{name:t(13),date:"2021-08-07 16:54"})})]})}function s(e){return Object(b.jsx)("div",{className:"container-fluid",children:Array.from(Array(t(e.totalPosts)).keys()).map((function(e){return Object(b.jsx)(c,{},"row"+e)}))})}return Object(b.jsxs)("div",{children:[Object(b.jsx)(s,{totalPosts:10}),";"]})};var u=function(){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("h1",{children:[Object(b.jsx)("span",{style:{color:"#edf2fb"},children:"W"}),Object(b.jsx)("span",{style:{color:"#edf2fb"},children:"E"}),Object(b.jsx)("span",{style:{color:"#e2eafc"},children:"L"}),Object(b.jsx)("span",{style:{color:"#e2eafc"},children:"C"}),Object(b.jsx)("span",{style:{color:"#d7e3fc"},children:"O"}),Object(b.jsx)("span",{style:{color:"#d7e3fc"},children:"M"}),Object(b.jsx)("span",{style:{color:"#ccdbfd"},children:"E"}),Object(b.jsx)("span",{style:{color:"#ccdbfd"},children:"!"})]}),Object(b.jsx)("p",{children:"Access the virtual white board here"}),Object(b.jsx)("p",{children:Object(b.jsx)(r.b,{activeClassName:"active",to:"/login",children:Object(b.jsx)("input",{type:"button",className:"button",value:"Login"})})})]})};var p=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(r.a,{children:Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)(r.b,{exact:!0,activeClassName:"active",to:"/",children:"Home"}),Object(b.jsx)(r.b,{activeClassName:"active",to:"/login",children:"Login"}),Object(b.jsx)("small",{children:"(Access without token only)"}),Object(b.jsx)(r.b,{activeClassName:"active",to:"/dashboard",children:"Dashboard"}),Object(b.jsx)("small",{children:"(Access with token only)"})]}),Object(b.jsx)("div",{className:"content",children:Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{exact:!0,path:"/",component:u}),Object(b.jsx)(i.a,{path:"/login",component:O}),Object(b.jsx)(i.a,{path:"/dashboard",component:h})]})})]})})})};c(30);j.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.1dd3c87d.chunk.js.map