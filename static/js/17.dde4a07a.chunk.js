(this.webpackJsonpfe=this.webpackJsonpfe||[]).push([[17],{243:function(e,a,t){"use strict";var n=t(1),l=t.n(n),r=t(325),i=t(235);a.a=function(e){return l.a.createElement(l.a.Fragment,null,e.label&&l.a.createElement(i.a,{id:"non-linear-slider",gutterBottom:!0},e.label),void 0!==e.formatLabel?l.a.createElement(r.a,Object.assign({value:e.value,valueLabelFormat:e.formatLabel,onChange:function(a,t){e.setValue(t)},min:e.minValue,max:e.maxValue,color:"secondary",valueLabelDisplay:"auto","aria-labelledby":"range-slider"},e)):l.a.createElement(r.a,Object.assign({value:e.value,onChange:function(a,t){e.setValue(t)},min:e.minValue,max:e.maxValue,color:"secondary",valueLabelDisplay:"auto","aria-labelledby":"range-slider"},e)))}},244:function(e,a,t){"use strict";var n=t(86),l=t(1),r=t.n(l),i=t(321),c=t(122),u=t(32);a.a=function(e){var a=Object(u.d)().control;return r.a.createElement(u.a,{name:e.name,id:e.id,defaultValue:e.defaultValue,control:a,rules:e.rules,render:function(a){var t=a.onChange,l=Object(n.a)(a,["onChange"]);return r.a.createElement(i.a,Object.assign({multiple:e.multiple||!1},l,{options:e.options,renderInput:function(a){return r.a.createElement(c.a,Object.assign({},a,{label:e.label,variant:"outlined",color:"secondary"}))},onChange:function(e,a){return t(a)}}))}})}},316:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(85),i=t(243),c=t(244),u=t(63),o=["Chennai","Arrakonam","Banglore","Hyderabad"];a.default=function(e){var a=e.price,t=e.setPrice,n=e.onClear;return l.a.createElement(r.a,{className:"search_filters",style:{margin:"auto",borderRadius:5}},l.a.createElement(r.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"center",style:{width:"95%",margin:"auto",borderRadius:5},spacing:3},l.a.createElement(r.a,{item:!0,xs:6},l.a.createElement(c.a,{name:"city",id:"city",label:"City",defaultValue:[],options:o,multiple:!0})),l.a.createElement(r.a,{item:!0,xs:6},l.a.createElement(i.a,{name:"price",id:"price",value:a,setValue:t,minValue:0,maxValue:1e5,formatLabel:function(e){return 1e5===e?l.a.createElement("div",{className:"cmn_slider_label"},"1 lakh+"):e},label:"Price"}))),l.a.createElement(r.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"center",style:{maxWidth:"95%",margin:"auto",borderRadius:5},spacing:3},l.a.createElement(r.a,{item:!0,xs:6},l.a.createElement(c.a,{name:"type",id:"type",defaultValue:[],label:"Type",options:["buy","rent"],multiple:!0})),l.a.createElement(r.a,{item:!0,xs:2},l.a.createElement(u.a,{onCancel:n,submitButtonText:"Apply",cancelButtonText:"clear"}))))}}}]);
//# sourceMappingURL=17.dde4a07a.chunk.js.map