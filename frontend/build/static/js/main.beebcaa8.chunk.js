(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),a=n(17),s=n.n(a),r=(n(24),n(25),n(2)),l=n(8),i=n(3),u=n(0),j=function(){var e=Object(o.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(o.useEffect)((function(){null!==localStorage.getItem("token")&&c(!0)}),[]),Object(u.jsx)("nav",{className:"mb-1 bg-dark p-1 w-100",children:!0===n?Object(u.jsxs)(o.Fragment,{children:[" ",Object(u.jsx)(l.b,{to:"/",children:"Home"}),Object(u.jsx)("span",{children:" | "}),Object(u.jsx)(l.b,{to:"/logout",children:"Logout"}),Object(u.jsx)("span",{children:" | "}),Object(u.jsx)(l.b,{to:"/post-news",children:"Post"})]}):Object(u.jsxs)(o.Fragment,{children:[" ",Object(u.jsx)(l.b,{to:"/login",children:"Login"}),Object(u.jsx)("span",{children:" | "}),Object(u.jsx)(l.b,{to:"/signup",children:"Signup"}),Object(u.jsx)("span",{children:" | "}),Object(u.jsx)(l.b,{to:"/",children:"Home"})]})})},m=function(e){var t=Object(o.useState)(""),n=Object(r.a)(t,2),c=(n[0],n[1],Object(o.useState)("")),a=Object(r.a)(c,2),s=a[0],l=a[1],i=Object(o.useState)(""),j=Object(r.a)(i,2),m=j[0],b=j[1],d=Object(o.useState)(!1),p=Object(r.a)(d,2),h=p[0],O=p[1],f=Object(o.useState)(!0),g=Object(r.a)(f,2),x=g[0],v=g[1];Object(o.useEffect)((function(){null!==localStorage.getItem("token")?window.location.replace("/"):v(!1)}),[]);return Object(u.jsxs)("div",{children:[!1===x&&Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={username:s,password:m};fetch("/api/users/auth/login/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.key?(localStorage.clear(),localStorage.setItem("token",e.key),localStorage.setItem("userId",e.user.id),window.location.replace("/")):(l(""),b(""),localStorage.clear(),O(!0))}))},className:"mt-1",children:[Object(u.jsxs)("div",{className:"form-group col-md-6",children:[Object(u.jsx)("label",{className:"",htmlFor:"username",children:"Username:"}),Object(u.jsx)("input",{className:"mx-1 form-control",name:"username",type:"text",value:s,required:!0,onChange:function(e){return l(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-group col-md-6",children:[Object(u.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(u.jsx)("input",{className:"mx-1 form-control",name:"password",type:"password",value:m,required:!0,onChange:function(e){return b(e.target.value)}})]}),Object(u.jsx)("input",{className:"btn btn-primary",type:"submit",value:"Login"})]}),!0===h&&Object(u.jsx)("section",{children:"Cannot log in with provided credentials"})]})},b=function(){var e=Object(o.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(o.useState)(""),s=Object(r.a)(a,2),l=s[0],i=s[1],j=Object(o.useState)(""),m=Object(r.a)(j,2),b=m[0],d=m[1],p=Object(o.useState)(!1),h=Object(r.a)(p,2),O=h[0],f=h[1],g=Object(o.useState)(!0),x=Object(r.a)(g,2),v=x[0],S=x[1];Object(o.useEffect)((function(){null!==localStorage.getItem("token")?window.location.replace("/dashboard"):S(!1)}),[]);return Object(u.jsxs)("div",{children:[!1===v&&Object(u.jsx)("h1",{children:"Signup"}),!0===O&&Object(u.jsx)("h2",{children:"Cannot signup with provided credentials"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={username:n,password1:l,password2:b};fetch("/api/users/auth/register/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.key?(localStorage.clear(),localStorage.setItem("token",e.key),localStorage.setItem("userId",e.user.id),window.location.replace("/")):(c(""),i(""),d(""),localStorage.clear(),f(!0))}))},children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"username",children:"Username:"})," ",Object(u.jsx)("br",{}),Object(u.jsx)("input",{className:"form-control",name:"username",type:"username",value:n,onChange:function(e){return c(e.target.value)},required:!0})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"password1",children:"Password:"})," ",Object(u.jsx)("br",{}),Object(u.jsx)("input",{className:"form-control",name:"password1",type:"password",value:l,onChange:function(e){return i(e.target.value)},required:!0})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"password2",children:"Confirm password:"})," ",Object(u.jsx)("br",{}),Object(u.jsx)("input",{className:"form-control",name:"password2",type:"password",value:b,onChange:function(e){return d(e.target.value)},required:!0})]}),Object(u.jsx)("input",{className:"my-1 btn btn-primary",type:"submit",value:"Signup"})]})]})},d=function(){var e=Object(o.useState)(!0),t=Object(r.a)(e,2),n=t[0],c=t[1];Object(o.useEffect)((function(){null==localStorage.getItem("token")?window.location.replace("/login"):c(!1)}),[]);return Object(u.jsx)("div",{children:!1===n&&Object(u.jsxs)(o.Fragment,{children:[Object(u.jsx)("h4",{children:"Are you sure you want to logout?"}),Object(u.jsx)("input",{className:"btn btn-danger my-1",type:"button",value:"Logout",onClick:function(e){e.preventDefault(),fetch("/api/users/auth/logout/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(e){console.log(e),localStorage.clear(),window.location.replace("/login")}))}})]})})},p=function(){var e=Object(o.useState)(""),t=Object(r.a)(e,2),n=(t[0],t[1],Object(o.useState)("")),c=Object(r.a)(n,2),a=(c[0],c[1]),s=Object(o.useState)({}),l=Object(r.a)(s,2),i=l[0],j=l[1],m=Object(o.useState)(!0),b=Object(r.a)(m,2),d=b[0],p=b[1];return Object(o.useEffect)((function(){null===localStorage.getItem("token")||fetch("/api/users/auth/user/",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(e){console.log(e),a(e.username),localStorage.setItem("favorites",e.favorites),console.log("dashboard favorites: ",localStorage.getItem("favorites"))})),fetch("/api/data/news/",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),j(e.reverse()),p(!1)}))}),[]),Object(u.jsx)("div",{className:"d-flex flex-column align-items-center",children:!1===d&&Object(u.jsx)(o.Fragment,{children:Object(u.jsx)("div",{className:"col-12 col-sm-10 col-md-10",children:i.map((function(e){return Object(u.jsxs)("div",{className:"bg-secondary py-1 px-2 rounded my-1",children:[Object(u.jsx)("a",{target:"_blank",className:"postLinks",href:"".concat(e.url),children:e.title}),Object(u.jsx)("span",{children:"  "}),Object(u.jsx)("a",{className:"commentLinks",style:{fontSize:"0.8rem"},href:"news/".concat(e.id),children:"Comments"})]},e.id)}))})})})},h=function(){var e=Object(o.useState)(""),t=Object(r.a)(e,2),n=(t[0],t[1],Object(o.useState)("")),c=Object(r.a)(n,2),a=c[0],s=c[1],l=Object(o.useState)(""),i=Object(r.a)(l,2),j=i[0],m=i[1],b=Object(o.useState)(""),d=Object(r.a)(b,2),p=d[0],h=d[1];return Object(u.jsx)(o.Fragment,{children:Object(u.jsx)("div",{className:"mt-2",children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("post going"),null===localStorage.getItem("token")?window.location.replace("/login"):fetch("/api/data/news/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))},body:JSON.stringify({title:a,url:j,text:p})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.id&&window.location.replace("/")}))},className:"m-1",children:[Object(u.jsx)("label",{htmlFor:"title",children:"Title"}),Object(u.jsx)("input",{className:"form-control",name:"title",type:"text",value:a,required:!0,onChange:function(e){return s(e.target.value)}})," ",Object(u.jsx)("label",{htmlFor:"url",children:"Url"}),Object(u.jsx)("input",{className:"form-control",name:"url",type:"text",value:j,onChange:function(e){return m(e.target.value)}})," ",Object(u.jsx)("label",{htmlFor:"",children:"Text"}),Object(u.jsx)("textarea",{className:"form-control",name:"comment",id:"comment",value:p,onChange:function(e){return h(e.target.value)},rows:"3",cols:"40"}),Object(u.jsx)("input",{className:"btn btn-primary",type:"submit",value:"Post"})]})})})},O=n(9),f=function(e){var t=Object(o.useState)(!1),n=Object(r.a)(t,2),c=(n[0],n[1],Object(o.useState)("")),a=Object(r.a)(c,2),s=a[0],l=a[1];return Object(o.useEffect)((function(){}),[]),Object(u.jsxs)("form",{className:"mx-1 mt-2 form-group",onSubmit:function(t){t.preventDefault(),console.log(s),console.log("comment going"),null===localStorage.getItem("token")?window.location.replace("/login"):fetch("/api/users/auth/user/",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(t){var n={text:s,user:t.id,newspost:e.postId,replyTo:e.replyTo};return console.log(n),n})).then((function(t){fetch("/api/data/comment/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(t){if(console.log(t),l(""),t.id&&!e.mainPage){fetch("/api/data/comment/".concat(e.replyTo,"/"),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))},body:JSON.stringify({hasReplies:!0})}).then((function(){e.cancelButton(),console.log(e.replyTo,e.postId),e.onNewComment(e.replyTo,e.postId,!0)}))}else e.onNewComment(e.replyTo,e.postId,!0)}))}))},children:[Object(u.jsx)("textarea",{className:"form-control",name:"comment",id:"comment",required:!0,value:s,onChange:function(e){return l(e.target.value)},rows:"3",cols:"40"}),Object(u.jsx)("button",{className:"btn btn-sm btn-primary",type:"submit",children:"add comment"}),Object(u.jsx)("span",{children:" "}),e.mainPage?"":Object(u.jsx)("button",{className:"btn btn-sm btn-danger",onClick:e.cancelButton,children:"cancel"})]})},g=function(e){var t=Object(o.useState)(!1),n=Object(r.a)(t,2),c=(n[0],n[1],Object(o.useState)({})),a=Object(r.a)(c,2),s=a[0],l=a[1],i=Object(o.useState)(""),j=Object(r.a)(i,2),m=j[0],b=j[1],d=Object(o.useState)(""),p=Object(r.a)(d,2),h=p[0],g=p[1],v=Object(o.useState)(!0),S=Object(r.a)(v,2),y=S[0],w=S[1],I=Object(o.useState)(localStorage.getItem("userId")),N=Object(r.a)(I,2),k=N[0];N[1];function T(t,n){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];console.log("show replies for: ",t),fetch("/api/data/comment/?newspost=".concat(n,"&replyTo=").concat(t)).then((function(e){return console.log(e),e.json()})).then((function(n){if(console.log("repliesToComment: ",n),Object.keys(n).length>0)h!=t||o?w(!0):(console.log("toggle enabled"),w(!y)),l(n.reverse()),console.log("replies: ",s),g(t),b(""),o&&(console.log("update mode comment id: ",t),e.onNewPost(t));else if(o){fetch("/api/data/comment/".concat(t,"/"),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))},body:JSON.stringify({hasReplies:!1})}).then((function(){g("");var n=s.filter((function(e){return e==t}));e.onCommentDelete(n.replyTo,e.postId,!0)}))}}))}function C(){b("")}return Object.keys(e.comments).length>0?e.comments.map((function(t,n){return Object(u.jsxs)("div",{className:"m-2 ms-3",children:[Object(u.jsxs)("section",{className:"commentHeader",children:[t.customuser," - ",t.comment_date]}),Object(u.jsx)("div",{className:"py-1",children:t.text}),Object(u.jsx)("button",{className:"btn btn-sm btn-outline-primary",onClick:function(){return e=t.id,console.log(e),g(""),void b(e);var e},children:"reply"}),Object(u.jsx)("span",{children:" "}),t.hasReplies?Object(u.jsx)("button",{className:"btn btn-sm btn-outline-info",onClick:function(){T(t.id,e.postId)},children:"view replies"}):"",Object(u.jsx)("span",{children:" "}),t.user==k?Object(u.jsx)("button",{className:"btn btn-sm btn-outline-danger",onClick:function(){var n,o;n=t.id,o=t.replyTo,fetch("/api/data/comment/".concat(n,"/"),{method:"DELETE",headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(t){console.log("delete reply: ",t),e.onCommentDelete(o,e.postId,!0)}))},children:"delete"}):"",h==t.id&&y?Object(u.jsx)(x,{onNewPost:function(e){return function(e){var t=Object(O.a)(s),n=t.findIndex((function(t){return t.id==e}));console.log("commentIndexUpdate: ",n),t[n].hasReplies=!0,l(t)}(e)},onCommentDelete:function(e,t,n){return T(e,t,n)},comments:s,postId:e.postId}):"",m==t.id?Object(u.jsx)(f,{onNewComment:function(e,t,n){return T(e,t,n)},cancelButton:C,postId:e.postId,replyTo:t.id}):""]},t.id)})):""},x=function(e){var t=Object(o.useState)(!1),n=Object(r.a)(t,2),c=(n[0],n[1],Object(o.useState)({})),a=Object(r.a)(c,2),s=a[0],l=a[1],i=Object(o.useState)(""),j=Object(r.a)(i,2),m=j[0],b=j[1],d=Object(o.useState)(""),p=Object(r.a)(d,2),h=p[0],x=p[1],v=Object(o.useState)(!0),S=Object(r.a)(v,2),y=S[0],w=S[1],I=Object(o.useState)(localStorage.getItem("userId")),N=Object(r.a)(I,2),k=N[0];N[1];function T(t,n){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];console.log("show replies for: ",t),fetch("/api/data/comment/?newspost=".concat(n,"&replyTo=").concat(t)).then((function(e){return console.log(e),e.json()})).then((function(n){if(console.log("repliesToComment: ",n),Object.keys(n).length>0)h!=t||o?w(!0):(console.log("toggle enabled"),w(!y)),l(n.reverse()),console.log("replies: ",s),x(t),b(""),o&&(console.log("update mode comment id: ",t),e.onNewPost(t));else if(o){fetch("/api/data/comment/".concat(t,"/"),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))},body:JSON.stringify({hasReplies:!1})}).then((function(){x("");var n=s.filter((function(e){return e==t}));e.onCommentDelete(n.replyTo,e.postId,!0)}))}}))}function C(){b("")}return Object(o.useEffect)((function(){}),[]),Object.keys(e.comments).length>0?e.comments.map((function(t,n){return Object(u.jsxs)("div",{className:"m-2 ms-3",children:[Object(u.jsxs)("section",{className:"commentHeader",children:[t.customuser," - ",t.comment_date]}),Object(u.jsx)("div",{className:"py-1",children:t.text}),Object(u.jsx)("button",{className:"btn btn-sm btn-outline-primary",onClick:function(){return e=t.id,console.log(e),x(""),void b(e);var e},children:"reply"}),Object(u.jsx)("span",{children:" "}),t.hasReplies?Object(u.jsx)("button",{className:"btn btn-sm btn-outline-info",onClick:function(){T(t.id,e.postId)},children:"view replies"}):"",Object(u.jsx)("span",{children:" "}),t.user==k?Object(u.jsx)("button",{className:"btn btn-sm btn-outline-danger",onClick:function(){var n,o;n=t.id,o=t.replyTo,fetch("/api/data/comment/".concat(n,"/"),{method:"DELETE",headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(t){console.log(t),e.onCommentDelete(o,e.postId,!0)}))},children:"delete"}):"",h==t.id&&y?Object(u.jsx)(g,{onNewPost:function(e){return function(e){var t=Object(O.a)(s),n=t.findIndex((function(t){return t.id==e}));console.log("commentIndexUpdate: ",n),t[n].hasReplies=!0,l(t)}(e)},onCommentDelete:function(e,t,n){return T(e,t,n)},comments:s,postId:e.postId}):"",m==t.id?Object(u.jsx)(f,{onNewComment:function(e,t,n){return T(e,t,n)},cancelButton:C,postId:e.postId,replyTo:t.id}):""]},t.id)})):""};var v=function(){var e=Object(o.useState)(!0),t=Object(r.a)(e,2),n=(t[0],t[1]),c=Object(o.useState)(function(){var e=Object(i.f)().id;return console.log("id: ",e),e}()),a=Object(r.a)(c,2),s=a[0],l=(a[1],Object(o.useState)({})),j=Object(r.a)(l,2),m=j[0],b=j[1],d=Object(o.useState)({}),p=Object(r.a)(d,2),h=p[0],g=p[1],v=Object(o.useState)("0"),S=Object(r.a)(v,2),y=(S[0],S[1],Object(o.useState)("vote")),w=Object(r.a)(y,2),I=w[0],N=w[1],k=Object(o.useState)(""),T=Object(r.a)(k,2),C=T[0],P=T[1];function E(e){fetch("/api/data/news/".concat(e,"/")).then((function(e){return e.json()})).then((function(e){console.log("dataOfPost: ",e),b(e)})).then((function(){fetch("/api/data/comment/?newspost=".concat(e)).then((function(e){return console.log(e),e.json()})).then((function(e){console.log("commentsOfPost: ",e),g(e.reverse()),n(!1)})).catch((function(e){return console.log("error for comment: ",e)}))})).catch((function(e){window.location.reload(),console.log(e,"there is error")}))}return Object(o.useEffect)((function(){console.log("look favorites: ",localStorage.getItem("favorites")),null!==localStorage.getItem("token")&&P(localStorage.getItem("favorites").split(",")),E(s)}),[]),Object(o.useEffect)((function(){null!==localStorage.getItem("token")&&(console.log("favorites: ",C),C.includes(s.toString())?N("vote on"):N("vote"))}),[C,m]),Object(u.jsx)("div",{children:Object(u.jsxs)(o.Fragment,{children:[Object(u.jsxs)("div",{className:"col-md-8",children:[Object(u.jsxs)("h4",{children:[Object(u.jsx)("a",{className:"postRenderLinks",href:m.url?m.url:"",children:m.title}),Object(u.jsx)("span",{onClick:function(){null!==localStorage.getItem("token")?"vote"==I?fetch("/api/data/news/".concat(s,"/?vote=up"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(e){console.log("response from vote up:",e),m.point=e.point,P([].concat(Object(O.a)(C),[s]))})):fetch("/api/data/news/".concat(s,"/?vote=down"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(e){m.point=e.point,console.log("postId when removing: ",s);var t=C.filter((function(e){return e!=s}));P(t)})):window.location.replace("/login")},className:I})," ",Object(u.jsx)("small",{className:"mx-2",children:m.point})]}),m.text?Object(u.jsx)("pre",{className:"mb-2 postRender-textDisplay",children:m.text}):""]}),Object(u.jsx)(f,{onNewComment:function(e,t){return E(t)},mainPage:!0,postId:s}),Object(u.jsx)(x,{onNewPost:function(e){return function(e){var t=Object(O.a)(h),n=t.findIndex((function(t){return t.id==e}));console.log("commentIndexUpdate: ",n),t[n].hasReplies=!0,g(t)}(e)},onCommentDelete:function(e,t,n){return E(t)},comments:h,postId:s})]})})},S=function(){var e=Object(o.useState)(""),t=Object(r.a)(e,2),n=t[0],c=(t[1],Object(o.useState)("")),a=Object(r.a)(c,2),s=(a[0],a[1],Object(o.useState)(!1)),O=Object(r.a)(s,2),f=(O[0],O[1],Object(o.useState)(!0)),g=Object(r.a)(f,2),x=(g[0],g[1],function(e,t){});return Object(o.useEffect)((function(){console.log(n)})),Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(l.a,{children:Object(u.jsxs)("div",{className:"mx-2 mt-1",children:[Object(u.jsx)(j,{}),Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{path:"/login",component:function(){return Object(u.jsx)(m,{onSubmit:x})},exact:!0}),Object(u.jsx)(i.a,{path:"/signup",component:b,exact:!0}),Object(u.jsx)(i.a,{path:"/logout",component:d,exact:!0}),Object(u.jsx)(i.a,{path:"/",component:p,exact:!0}),Object(u.jsx)(i.a,{path:"/post-news",component:h,exact:!0}),Object(u.jsx)(i.a,{path:"/news/:id",component:v,exact:!0})]})]})})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),o(e),c(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root")),y()}},[[35,1,2]]]);
//# sourceMappingURL=main.beebcaa8.chunk.js.map