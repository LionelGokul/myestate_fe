(this.webpackJsonpfe=this.webpackJsonpfe||[]).push([[31],{309:function(e,a,t){"use strict";t.r(a);var n=t(8),l=t(1),i=t.n(l),s=t(37),c=t(50),m=t(62),o=t(18),r=t(21),u=t(56),p=t(24),d=Object(l.lazy)((function(){return Promise.all([t.e(3),t.e(33),t.e(21)]).then(t.bind(null,292))})),b=Object(l.lazy)((function(){return Promise.all([t.e(34),t.e(30)]).then(t.bind(null,282))}));a.default=function(e){var a=Object(l.useContext)(p.a),t=Object(o.b)(),f=Object(n.a)(t,2),E=f[0].user,v=f[1],O=Object(l.useState)(null),h=Object(n.a)(O,2),j=h[0],g=h[1],P=Object(s.a)().sendRequest,w={name:E.name,email:void 0!==E.email?E.email:"",mobile:void 0!==E.mobile?E.mobile:"",password:void 0!==E.password?E.password:""};return i.a.createElement(l.Suspense,{fallback:i.a.createElement(u.a,null)},i.a.createElement("div",{className:"cmn_section no_bg"},i.a.createElement(d,null)),i.a.createElement("div",{className:"cmn_section"},i.a.createElement(c.a,{initialValue:w,onSubmit:function(t){var n=new FormData;n.append("image",j),n.append("saveImage",null!==j),n.append("email",t.email),n.append("mobile",t.mobile),n.append("userId",E.id),n.append("name",t.name),P("post","users/update",n,{"content-type":"multipart/form-data"}).then((function(t){v({type:r.a.UPDATE_USER,user:{name:t.name,id:t.id,imageUrl:t.profilePic,email:t.email,mobile:t.mobile}}),a.setOpen(!0),a.setSuccess(!0),a.setMsg("Successfully updated user details"),e.handleClose()})).catch((function(e){console.log(e)}))}},i.a.createElement(m.a,{title:"Update Details"}),i.a.createElement(b,{user:E,profilePic:j,setProfilePic:g})),i.a.createElement("div",{className:"margin_top"})))}}}]);
//# sourceMappingURL=31.d151f68b.chunk.js.map