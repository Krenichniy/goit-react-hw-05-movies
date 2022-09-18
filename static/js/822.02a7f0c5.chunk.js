"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[822],{865:function(n,e,t){t.d(e,{AL:function(){return f},PQ:function(){return u},hd:function(){return o}});var r,a,c,i=t(168),s=t(444).default,u=s.div(r||(r=(0,i.Z)(["\n        width:1200px;\n        margin: 0 auto ;\n        padding: 30px 15px;\n"]))),o=s.ul(a||(a=(0,i.Z)(["\n        display:flex;\n        flex-wrap:wrap;\n        align-items:center;\n        justify-content:center;\n        margin:0;\n        padding:0;\n"]))),f=s.li(c||(c=(0,i.Z)(["\n        display:flex;\n        flex-direction:column;\n        align-items:flex-start;\n        justify-content:center;\n        width:200px;\n        padding:5px;\n        border-radius: 10px;\n        margin-bottom:30px;\n        transform:scale(1);\n        transition: transform 500ms linear;\n        &:hover, &:focus{\n                box-shadow: 0 8px 20px rgba(0,128,128,0.5), 0 20px 25px rgba(0,128,128,0.5);\n                transform:scale(1.1);\n        }\n"])))},32:function(n,e,t){t.d(e,{Hq:function(){return d},Vd:function(){return o},oO:function(){return l},sQ:function(){return p},y:function(){return f}});var r=t(861),a=t(757),c=t.n(a),i=t(264),s="09630d0efe652d6d61bcfe25c1802e1f",u="https://api.themoviedb.org/3",o=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(u,"/movie/").concat(e,"?api_key=").concat(s,"&language=en-US"));case 3:if((t=n.sent).ok){n.next=6;break}throw new Error(t.status);case 6:return n.next=8,t.json();case 8:return r=n.sent,n.abrupt("return",r);case 12:n.prev=12,n.t0=n.catch(0),i.Notify.failure(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(u,"/movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),i.Notify.failure(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(u,"/movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US"));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),i.Notify.failure(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(u,"/trending/movie/week?api_key=").concat(s));case 3:if((e=n.sent).ok){n.next=6;break}throw new Error(e.status);case 6:return n.next=8,e.json();case 8:return t=n.sent,n.abrupt("return",t);case 12:n.prev=12,n.t0=n.catch(0),i.Notify.failure(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(u,"/search/movie?api_key=").concat(s,"&query=").concat(e,"&language=en-USpage=1&include_adult=false"));case 3:if((t=n.sent).ok){n.next=6;break}throw new Error(t.status);case 6:return n.next=8,t.json();case 8:return r=n.sent,n.abrupt("return",r);case 12:n.prev=12,n.t0=n.catch(0),i.Notify.failure(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()},822:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,a,c,i,s=t(861),u=t(885),o=t(757),f=t.n(o),l=t(791),p=t(871),d=t(264),h=t(342),v=t(32),x=t(852),m=t(539),w=t(168),g=t(501),j=t(444),k=(0,j.default)(g.OL)(r||(r=(0,w.Z)(["\n        &:not(:last-child){\n            margin-right:20px;\n        }\n"]))),y=j.default.div(a||(a=(0,w.Z)(["\n            display:flex;\n            align-items:center;\n\n"]))),b=j.default.div(c||(c=(0,w.Z)(["\n            max-width:800px;\n            width:100%;\n            display:flex;\n            padding:30px;  \n            \n            & div:first-child{\n                margin-right:30px;\n            }\n"]))),Z=j.default.div(i||(i=(0,w.Z)(["\n \n"]))),_=t(865),N=t(322),S=t(184),U=function(){var n,e=(0,p.UO)().id,t=(0,l.useState)({item:{}}),r=(0,u.Z)(t,2),a=r[0],c=r[1],i=(0,l.useState)(!1),o=(0,u.Z)(i,2),w=o[0],g=o[1];(0,l.useEffect)((function(){var n=function(){var n=(0,s.Z)(f().mark((function n(){var t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return g(!0),n.prev=1,n.next=4,(0,v.Vd)(e);case 4:t=n.sent,c((function(n){return{item:t}})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),d.Notify.failure(n.t0);case 11:return n.prev=11,g(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]);var j=a.item,U=j.title,C=j.poster_path,E=j.name,O=j.overview,P=j.release_date,Q=j.vote_average,q=j.genres,A=null===P||void 0===P?void 0:P.split("").slice(0,4),G=String(10*Q).slice(0,2),H=(null===(n=(0,p.TH)().state)||void 0===n?void 0:n.from)||"/",L=(0,p.s0)();return(0,S.jsxs)(_.PQ,{children:[(0,S.jsx)(x.r,{onClick:function(){return L(H,{replace:!1})},children:(0,S.jsx)("span",{className:m.Z.link,children:"Go Back"})}),w&&(0,S.jsx)(h.Z,{}),(0,S.jsxs)(b,{children:[(0,S.jsxs)("div",{children:[(0,S.jsxs)("h2",{children:[U," (",A,")"]}),(0,S.jsxs)("p",{children:["User Score : ",G," %"]}),C?(0,S.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(C),width:"300",alt:E}):(0,S.jsx)("img",{src:N,alt:E,width:300,height:250})]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("h3",{children:"Overview :"}),(0,S.jsx)("p",{children:O}),(0,S.jsxs)(y,{children:["Genres : ",(0,S.jsx)("p",{children:null===q||void 0===q?void 0:q.map((function(n){return n.name})).join(" , ")})]}),(0,S.jsxs)(Z,{children:[(0,S.jsx)("h3",{children:"Additional information"}),(0,S.jsxs)(y,{children:[(0,S.jsx)(k,{state:{from:H},to:"cast",className:m.Z.link,children:"Cast"}),(0,S.jsx)(k,{state:{from:H},to:"reviews",className:m.Z.link,children:" Reviews"})]})]})]})]}),(0,S.jsx)(p.j3,{})]})}},852:function(n,e,t){t.d(e,{r:function(){return c}});var r,a=t(168),c=t(444).default.button(r||(r=(0,a.Z)(["\n      background:transparent;\n      border:none;\n      cursor:pointer;\n"])))},322:function(n,e,t){n.exports=t.p+"static/media/noPhoto.fe5347d775a758736714.jpg"}}]);
//# sourceMappingURL=822.02a7f0c5.chunk.js.map