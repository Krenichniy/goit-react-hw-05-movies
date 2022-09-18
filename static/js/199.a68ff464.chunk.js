"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[199],{865:function(n,t,e){e.d(t,{AL:function(){return f},PQ:function(){return i},hd:function(){return s}});var r,a,c,o=e(168),u=e(444).default,i=u.div(r||(r=(0,o.Z)(["\n        width:1200px;\n        margin: 0 auto ;\n        padding: 30px 15px;\n"]))),s=u.ul(a||(a=(0,o.Z)(["\n        display:flex;\n        flex-wrap:wrap;\n        align-items:center;\n        justify-content:center;\n        margin:0;\n        padding:0;\n"]))),f=u.li(c||(c=(0,o.Z)(["\n        display:flex;\n        flex-direction:column;\n        align-items:flex-start;\n        justify-content:center;\n        width:200px;\n        padding:5px;\n        border-radius: 10px;\n        margin-bottom:30px;\n        transform:scale(1);\n        transition: transform 500ms linear;\n        &:hover, &:focus{\n                box-shadow: 0 8px 20px rgba(0,128,128,0.5), 0 20px 25px rgba(0,128,128,0.5);\n                transform:scale(1.1);\n        }\n"])))},32:function(n,t,e){e.d(t,{Hq:function(){return d},Vd:function(){return s},oO:function(){return p},sQ:function(){return l},y:function(){return f}});var r=e(861),a=e(757),c=e.n(a),o=e(264),u="09630d0efe652d6d61bcfe25c1802e1f",i="https://api.themoviedb.org/3",s=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(i,"/movie/").concat(t,"?api_key=").concat(u,"&language=en-US"));case 3:if((e=n.sent).ok){n.next=6;break}throw new Error(e.status);case 6:return n.next=8,e.json();case 8:return r=n.sent,n.abrupt("return",r);case 12:n.prev=12,n.t0=n.catch(0),o.Notify.failure(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 3:return e=n.sent,n.next=6,e.json();case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),o.Notify.failure(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(u,"&language=en-US"));case 3:return e=n.sent,n.next=6,e.json();case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),o.Notify.failure(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(i,"/trending/movie/week?api_key=").concat(u));case 3:if((t=n.sent).ok){n.next=6;break}throw new Error(t.status);case 6:return n.next=8,t.json();case 8:return e=n.sent,n.abrupt("return",e);case 12:n.prev=12,n.t0=n.catch(0),o.Notify.failure(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(i,"/search/movie?api_key=").concat(u,"&query=").concat(t,"&language=en-USpage=1&include_adult=false"));case 3:if((e=n.sent).ok){n.next=6;break}throw new Error(e.status);case 6:return n.next=8,e.json();case 8:return r=n.sent,n.abrupt("return",r);case 12:n.prev=12,n.t0=n.catch(0),o.Notify.failure(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(t){return n.apply(this,arguments)}}()},199:function(n,t,e){e.r(t);var r=e(982),a=e(861),c=e(885),o=e(757),u=e.n(o),i=e(791),s=e(32),f=e(264),p=e(342),l=e(263),d=e(865),h=e(322),x=e(184);t.default=function(){var n=(0,i.useState)([]),t=(0,c.Z)(n,2),e=t[0],o=t[1],v=(0,i.useState)(!1),m=(0,c.Z)(v,2),g=m[0],w=m[1];(0,i.useEffect)((function(){var n=function(){var n=(0,a.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return w(!0),n.prev=1,n.next=4,(0,s.sQ)();case 4:t=n.sent,o((function(n){return[].concat((0,r.Z)(n),(0,r.Z)(t.results))})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),f.Notify.failure(n.t0);case 11:return n.prev=11,w(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[]);var y=null===e||void 0===e?void 0:e.map((function(n){var t=n.id,e=n.poster_path,r=n.title,a=n.name;return(0,x.jsx)(l.MZ,{children:(0,x.jsxs)(l.Fg,{state:{from:"/"},to:"/movies/".concat(t),children:[e?(0,x.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e),alt:r,width:"200",height:"300"}):(0,x.jsx)("img",{src:h,alt:r,width:200,height:300}),(0,x.jsxs)(l.X0,{children:[" ",r||a]})]})},t)}));return(0,x.jsxs)(d.PQ,{children:[(0,x.jsx)("h2",{children:"Tranding today"}),(0,x.jsxs)(l.cN,{children:[g&&(0,x.jsx)(p.Z,{}),y]})]})}},263:function(n,t,e){e.d(t,{Fg:function(){return f},MZ:function(){return l},X0:function(){return d},cN:function(){return p}});var r,a,c,o,u=e(168),i=e(444),s=e(501),f=(0,i.default)(s.rU)(r||(r=(0,u.Z)(["\n        color:teal;\n        text-decoration:none;\n        &:hover{\n                color:#ff8500de;\n        }\n"]))),p=i.default.ul(a||(a=(0,u.Z)(["\n        margin:0;\n        padding:0;\n        list-style:none;\n        display:flex;\n        flex-wrap:wrap;\n        align-items:center;\n        justify-content:center;\n"]))),l=i.default.li(c||(c=(0,u.Z)(["\n        display:flex;\n        align-items:center;\n        padding:5px;\n        border-radius: 10px;\n        \n        margin-bottom:30px;\n        transform:scale(1);\n        transition: transform 500ms linear;\n        &:hover, &:focus{\n                box-shadow: 0 8px 20px rgba(0,128,128,0.5), 0 20px 25px rgba(0,128,128,0.5);\n                transform:scale(1.1);\n        }\n"]))),d=i.default.p(o||(o=(0,u.Z)(["\n        width:200px;\n"])))},322:function(n,t,e){n.exports=e.p+"static/media/noPhoto.fe5347d775a758736714.jpg"},982:function(n,t,e){e.d(t,{Z:function(){return c}});var r=e(907);var a=e(181);function c(n){return function(n){if(Array.isArray(n))return(0,r.Z)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||(0,a.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=199.a68ff464.chunk.js.map