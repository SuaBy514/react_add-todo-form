(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(6),s=a(2),c=a(7),o=a(1),l=(a(13),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),d=a(0),u=function(e){var t=e.user,a=t.name,n=t.email;return Object(d.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},m=function(e){var t=e.todo,a=t.title,n=t.completed,i=t.id,r=t.user;return Object(d.jsxs)("article",{"data-id":i,className:"TodoInfo".concat(n?" TodoInfo--completed":""),children:[Object(d.jsx)("h2",{className:"TodoInfo__title",children:a}),r&&Object(d.jsx)(u,{user:r})]})},j=function(e){var t=e.todos;return Object(d.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(d.jsx)(m,{todo:e},e.id)}))})};function b(e){return l.find((function(t){return t.id===e}))||null}var h=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:b(e.userId)})})),O=function(){var e=Object(o.useState)(h),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),c=Object(s.a)(i,2),u=c[0],m=c[1],O=Object(o.useState)(0),f=Object(s.a)(O,2),p=f[0],x=f[1],v=Object(o.useState)(!1),y=Object(s.a)(v,2),S=y[0],N=y[1],g=Object(o.useState)(!1),I=Object(s.a)(g,2),C=I[0],_=I[1],T=Math.max.apply(Math,Object(r.a)(a.map((function(e){return e.id}))));return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Add todo form"}),Object(d.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){if(e.preventDefault(),u&&p){var t={id:T+1,title:u,completed:!1,userId:p,user:b(p)};n([].concat(Object(r.a)(a),[t])),x(0),m("")}else 0===u.length&&N(!0),p<=0&&_(!0)},children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{htmlFor:"title",children:"Title: "}),Object(d.jsx)("input",{id:"title",type:"text","data-cy":"titleInput",placeholder:"Title",value:u,onChange:function(e){var t=/^[\w\u0430-\u044f\u0410-\u042fa-zA-Z ]+/,a=e.target.value.split("").filter((function(e){return t.test(e)})).join("");m(a),S&&a&&N(!1)}}),S&&Object(d.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{htmlFor:"user",children:"User: "}),Object(d.jsxs)("select",{id:"user","data-cy":"userSelect",value:p,onChange:function(e){x(Number(e.target.value)),C&&Number(e.target.value)>0&&_(!1)},children:[Object(d.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),l.map((function(e){var t=e.id,a=e.name;return Object(d.jsx)("option",{value:t,children:a},t)}))]}),C&&Object(d.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(d.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(d.jsx)(j,{todos:a})]})};i.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.fc9c4da3.chunk.js.map