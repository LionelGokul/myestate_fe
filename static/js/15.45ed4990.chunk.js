(this.webpackJsonpfe=this.webpackJsonpfe||[]).push([[15],{232:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(8),r=a(37),c=a(1),i=a(18),o=a(21),s=a(24),l=function(){var e=Object(r.a)().sendRequest,t=Object(c.useContext)(s.a),a=t.setMsg,l=t.setOpen,m=t.setSuccess,u=Object(i.b)(),p=Object(n.a)(u,2),d=p[0].user,y=p[1],b=function(){return void 0!==d.email||(a("Please login in before shortlisting."),l(!0),m(!1),!1)};return{addItem:Object(c.useCallback)((function(t){b()&&e("post","wishlist",{propertyId:t.id,userId:d.id},{"Content-Type":"application/json",Accept:"application/json"}).then((function(){y({type:o.a.ADD_TO_WISHLIST,property:t})})).catch((function(e){console.log("err",e)}))}),[d]),removeItem:Object(c.useCallback)((function(t){b()&&e("delete","removewishlist",{propertyId:t.id,userId:d.id},{"Content-Type":"application/json",Accept:"application/json"}).then((function(){y({type:o.a.REMOVE_FROM_WISHLIST,propertyID:t.id})})).catch((function(e){console.log("err",e)}))}),[d])}}},233:function(e,t,a){"use strict";var n=a(1),r=a.n(n),c=a(85),i=a(234),o=a.n(i);t.a=function(e){return r.a.createElement(c.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement("img",{alt:"no result icon",src:o.a,style:{height:200,margin:0,width:"100%"}}),r.a.createElement(c.a,{items:!0,xs:!0}),r.a.createElement(c.a,{items:!0,xs:!0},r.a.createElement("span",{className:"noitem_msg"},e.text)))}},234:function(e,t,a){e.exports=a.p+"static/media/undraw_No_data_re_kwbl.6aed01b7.svg"},290:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(1),c=a.n(r),i=a(18),o=a(15),s=a(85),l=a(232),m=a(235),u=a(278),p=a(239),d=c.a.memo((function(e){var t=e.property,a=Object(l.a)().removeItem;return c.a.createElement(s.a,{item:!0,xs:12,className:"prop_card"},c.a.createElement(s.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:1},c.a.createElement(s.a,{item:!0,xs:!0,style:{width:"40%"}},c.a.createElement(o.b,{to:"/property/".concat(t.id)},c.a.createElement("img",{className:"cmn_card_media",src:t.images[0].url,alt:t.name}))),c.a.createElement(s.a,{item:!0,xs:!0,sm:!0,container:!0,style:{height:200}},c.a.createElement(s.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:2},c.a.createElement(s.a,{item:!0,xs:!0},c.a.createElement(m.a,{gutterBottom:!0,variant:"subtitle1"},t.name),c.a.createElement(m.a,{variant:"body2",gutterBottom:!0},t.bhk),c.a.createElement(m.a,{variant:"body2",color:"textSecondary",className:"card_prop_details"},t.city),c.a.createElement(m.a,{variant:"body2",color:"textSecondary",gutterBottom:!0},t.sqft),c.a.createElement(m.a,{variant:"body2",color:"textSecondary",gutterBottom:!0},t.price))),c.a.createElement(s.a,{item:!0},c.a.createElement(p.a,{"aria-label":"like",color:"secondary",size:"medium",className:"card_close_btn",onClick:function(){t.id,a(t)}},c.a.createElement(u.a,{style:{fontSize:20,cursor:"pointer"}}))))))})),y=a(233);t.default=function(){var e=Object(i.b)(),t=Object(n.a)(e,1)[0].favList;return c.a.createElement(c.a.Fragment,null,void 0!==t?0===t.length?c.a.createElement(y.a,{text:"Sorry you haven't shortlisted any properties."}):t.map((function(e){return c.a.createElement(d,{property:e,key:e.id})})):null)}}}]);
//# sourceMappingURL=15.45ed4990.chunk.js.map