"use strict";(self.webpackChunkgoit_react_hw_05_movie=self.webpackChunkgoit_react_hw_05_movie||[]).push([[888],{854:function(e,t,n){n.d(t,{a:function(){return c}});var r=n(5243),a=n(184),c=function(){return(0,a.jsx)(r.Z1,{height:"100",width:"100",color:"orange",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})}},8888:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r,a=n(5861),c=n(9439),i=n(168),s=n(7757),o=n.n(s),u=n(2791),l=n(1087),p=n(7689),v=n(3946),f=n(854),h=n(6444),d="MovieDetails_container__o8VqJ",m="MovieDetails_detailsLinks__IPM0O",_="MovieDetails_movieContainer__78Fk4",x="MovieDetails_movieTitle__qwoTW",g="MovieDetails_subTitle__q3c5+",w="MovieDetails_moreInfo__aYhGr",b=n(184),j=(0,u.lazy)((function(){return n.e(906).then(n.bind(n,7906))})),k=(0,h.ZP)(l.OL)(r||(r=(0,i.Z)(["\n  display: flex;\n  color: black;\n  align-items: center;\n}\n\n  &.active {\n    color: aliceblue;\n    background-color: orange;\n    border-color: aliceblue;\n  }\n"]))),y=function(){var e,t,n=(0,u.useState)([]),r=(0,c.Z)(n,2),i=r[0],s=r[1],l=(0,u.useState)(!1),h=(0,c.Z)(l,2),y=h[0],Z=h[1],C=(0,p.UO)().movieid,S=null!==(e=null===(t=(0,p.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",M=(0,u.useState)([]),N=(0,c.Z)(M,2),D=N[0],U=N[1];return(0,u.useEffect)((function(){Z(!0);var e=function(){var e=(0,a.Z)(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v.Mc)(C);case 2:t=e.sent,n=t.data,U(n),Z(!1),s(n.genres);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[C]),(0,b.jsx)("div",{className:d,children:y?(0,b.jsx)(f.a,{}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(j,{to:S,children:"Go Back"}),(0,b.jsxs)("div",{className:_,children:[D.poster_path&&(0,b.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(D.poster_path),alt:D.title,width:350}),D.release_date&&(0,b.jsxs)("div",{children:[(0,b.jsxs)("h2",{className:x,children:[D.original_title," (",D.release_date.slice(0,4),")"]}),(0,b.jsxs)("p",{children:["User Score: ",Math.ceil(10*D.vote_average),"%"]}),(0,b.jsx)("h3",{className:g,children:"Overview"}),(0,b.jsx)("p",{children:D.overview}),(0,b.jsx)("h3",{className:g,children:"Genres"}),(0,b.jsx)("p",{children:i.map((function(e){return e.name})).join(", ")}),(0,b.jsxs)("div",{className:m,children:[(0,b.jsx)(k,{to:"Cast",state:{from:S},className:w,children:"Cast"}),(0,b.jsx)(k,{to:"Reviews",state:{from:S},className:w,children:"Reviews"})]})]})]}),(0,b.jsx)(u.Suspense,{fallback:(0,b.jsx)(f.a,{}),children:(0,b.jsx)(p.j3,{})})]})})}},3946:function(e,t,n){n.d(t,{Bt:function(){return v},Mc:function(){return l},mv:function(){return f},uS:function(){return u},y:function(){return p}});var r=n(5861),a=n(7757),c=n.n(a),i=n(1243),s="https://api.themoviedb.org/3/",o="b27f2f3d79b3a6e46fc2bca972d7f174",u=function(){var e=(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"trending/movie/day?api_key=").concat(o));case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"movie/").concat(t,"?api_key=").concat(o,"&language=en-US"));case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"search/movie?api_key=").concat(o,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=888.2ac614b0.chunk.js.map