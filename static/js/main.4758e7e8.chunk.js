(this["webpackJsonpcorona-cases"]=this["webpackJsonpcorona-cases"]||[]).push([[0],{175:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),o=a(50),r=a.n(o),s=(a(57),a(3)),i=(a(58),a(0));function l(e){return Object(i.jsx)("div",{className:"card",children:e.children})}var d=a(15),u=function(e){var t=e.totalConfirmed,a=e.totalRecovered,n=e.totalDeaths,c=e.country;return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{style:{textTransform:"capitalize"},children:""===c?"World Wide Corona Report":c}),Object(i.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(i.jsxs)(l,{children:[Object(i.jsx)("span",{children:"Total Confirmed "}),Object(i.jsx)("span",{children:Object(i.jsx)(d.a,{value:t,displayType:"text",thousandSeparator:!0})})]}),Object(i.jsxs)(l,{children:[Object(i.jsx)("span",{children:"Total Recovered "}),Object(i.jsx)("span",{children:Object(i.jsx)(d.a,{value:a,displayType:"text",thousandSeparator:!0})})]}),Object(i.jsxs)(l,{children:[Object(i.jsx)("span",{children:"Total Deaths"}),Object(i.jsxs)("span",{children:[" ",Object(i.jsx)(d.a,{value:n,displayType:"text",thousandSeparator:!0})]})]})]})]})})},j=a(51);var b=function(e){return Object(i.jsx)("div",{style:{width:"600px",height:"600px",margin:"50px auto"},children:Object(i.jsx)(j.Line,{data:{labels:e.label.map((function(e){return e.substr(0,10)})),datasets:[{label:"Corona Cases across the country",fill:!0,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[e.yAxis]}]}})})},h=a(52),O=a.n(h).a.create({baseURL:"https://api.covid19api.com"});var p=function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(0),r=Object(s.a)(o,2),l=r[0],d=r[1],j=Object(n.useState)(0),h=Object(s.a)(j,2),p=h[0],f=h[1],v=Object(n.useState)(!1),x=Object(s.a)(v,2),g=x[0],C=x[1],y=Object(n.useState)({}),m=Object(s.a)(y,2),S=m[0],D=m[1],T=Object(n.useState)(7),R=Object(s.a)(T,2),B=R[0],w=R[1],L=Object(n.useState)(""),F=Object(s.a)(L,2),k=F[0],H=F[1],N=Object(n.useState)([]),W=Object(s.a)(N,2),A=W[0],G=W[1],J=Object(n.useState)([]),E=Object(s.a)(J,2),I=E[0],M=E[1];Object(n.useEffect)((function(){C(!0),O.get("/summary").then((function(e){C(!1),200===e.status&&(c(e.data.Global.TotalConfirmed),d(e.data.Global.NewRecovered),f(e.data.Global.TotalDeaths),D(e.data)),console.log(e)})).catch((function(e){console.log(e)}))}),[]);var P=function(e){var t=new Date(e),a=t.getFullYear(),n="0".concat(t.getMonth()+1).slice(-2),c=t.getDate();return"".concat(a,"-").concat(n,"-").concat(c)},Z=function(e,t,a){O.get("/country/".concat(e,"/status/confirmed?from=").concat(t,"T00:00:00Z&to=").concat(a,"T00:00:00Z")).then((function(t){console.log(t);var a=t.data.map((function(e){return e.Cases})),n=t.data.map((function(e){return e.Date})),o=S.Countries.find((function(t){return t.Slug===e}));G(a),c(o.TotalConfirmed),d(o.TotalRecovered),f(o.TotalDeaths),M(n)})).catch((function(e){console.log(e)}))};return g?Object(i.jsx)("p",{children:"Fetching data from api...!"}):Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(u,{totalConfirmed:a,totalRecovered:l,totalDeaths:p,country:k}),Object(i.jsxs)("div",{className:"select",children:[Object(i.jsxs)("select",{value:k,onChange:function(e){H(e.target.value);var t=new Date,a=P(t),n=P(t.setDate(t.getDate()-B));Z(e.target.value,n,a)},children:[Object(i.jsx)("option",{value:"",children:"Select Country"}),S.Countries&&S.Countries.map((function(e){return Object(i.jsx)("option",{value:e.Slug,children:e.Country},e.Slug)}))]}),Object(i.jsxs)("select",{value:B,onChange:function(e){w(e.target.value);var t=new Date,a=P(t),n=P(t.setDate(t.getDate()-e.target.value));Z(k,n,a)},children:[Object(i.jsx)("option",{value:"7",children:"Last 7 days"}),Object(i.jsx)("option",{value:"30",children:"Last 30 days"}),Object(i.jsx)("option",{value:"90",children:"Last 90 days"})]})]}),Object(i.jsx)(b,{yAxis:A,label:I})]})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,176)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),o(e),r(e)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root")),f()},57:function(e,t,a){},58:function(e,t,a){}},[[175,1,2]]]);
//# sourceMappingURL=main.4758e7e8.chunk.js.map