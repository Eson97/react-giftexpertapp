(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(7),c=n.n(a),i=n(2),o=n(9),u=n(0),s=function(e){var t=e.setCategories,n=Object(r.useState)("Nueva categor\xeda"),a=Object(i.a)(n,2),c=a[0],s=a[1];return Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),c.trim().length>0&&(t((function(e){return[c].concat(Object(o.a)(e))})),s(""))},onFocus:function(){s("")},onBlur:function(){s("Nueva categoria")},children:Object(u.jsx)("input",{type:"text",value:c,onChange:function(e){s(e.target.value)}})})},d=n(10),l=n(6),j=n.n(l),p=n(8),b=function(){var e=Object(p.a)(j.a.mark((function e(t){var n,r,a,c,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=5&api_key=3M9NDZdLXI4Ne4e4tZ559vCNz1ahSzdt"),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,c=a.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.title,n=e.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeInLeft",children:[Object(u.jsx)("img",{src:n,alt:t}),Object(u.jsx)("p",{children:t}),Object(u.jsx)("iframe",{title:"share-button",src:"https://www.facebook.com/plugins/share_button.php?href=".concat(n,"&layout=button&size=large&width=103&height=28&appId"),width:"103",height:"28",style:{border:"none",overflow:"hidden",margin:"10px"},scrolling:"no",frameborder:"0",allowfullscreen:"true",allow:"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"})]})},h=function(e){var t=e.category,n=function(e){var t=Object(r.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){b(e).then((function(e){c({data:e,loading:!1})}))}),[e]),a}(t),a=n.data,c=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h3",{children:[" ",t," "]}),c&&Object(u.jsx)("p",{children:"Cargando..."}),Object(u.jsx)("div",{className:"card-grid",children:a.map((function(e){return Object(u.jsx)(f,Object(d.a)({},e),e.id)}))})]})},g=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(s,{setCategories:a}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(e){return Object(u.jsx)(h,{category:e},e)}))})]})};n(17);c.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.c506c58e.chunk.js.map