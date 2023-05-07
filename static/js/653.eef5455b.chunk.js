"use strict";(self.webpackChunkgoit_react_hw_05_movie=self.webpackChunkgoit_react_hw_05_movie||[]).push([[653],{653:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(861),a=n(439),c=n(757),s=n.n(c),i=n(791),u=n(946),o=n(689),p=n(87),l=n(705),v="Movies_container__sNK5N",h="Movies_moviesList__Un-WS",f="Movies_movieItem__WBe6u",m="Movies_Searchbar__LCyHp",_="Movies_SearchForm__MevnG",d="Movies_SearchForm-button__m4DX+",g="Movies_SearchForm-button-label__dZkeN",x="Movies_SearchForm-input__ITE2j",w="Movies_noImage__ptZIg",y="Movies_movieTitle__5wMIS",b="Movies_movieImage__7C3bK",k=n(184),S={query:""},j=function(){var e=(0,o.TH)(),t=(0,i.useState)(""),n=(0,a.Z)(t,2),c=n[0],j=n[1],Z=(0,i.useState)([]),N=(0,a.Z)(Z,2),M=N[0],F=N[1],I=(0,i.useState)(!1),U=(0,a.Z)(I,2),q=U[0],C=U[1],L=(0,p.lr)(),T=(0,a.Z)(L,2),B=T[0],E=T[1];(0,i.useEffect)((function(){if(j(B.get("search")),c){C(!0);var e=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.mv)(t);case 2:n=e.sent,r=n.data.results,F(r),console.log("data:",r),C(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e(c)}}),[c,B]);return(0,k.jsxs)("div",{className:v,children:[(0,k.jsx)("div",{className:m,children:(0,k.jsx)(l.J9,{initialValues:S,onSubmit:function(e,t){var n=e.query,r=t.resetForm;j(n),E({search:n}),r()},children:(0,k.jsxs)(l.l0,{className:_,children:[(0,k.jsx)(l.gN,{id:"query",className:x,type:"text",name:"query",autoComplete:"off",autoFocus:!0,placeholder:"Search films"}),(0,k.jsx)("button",{type:"submit",className:d,children:(0,k.jsx)("span",{className:g,children:"Search"})})]})})}),(0,k.jsx)("div",{children:q?(0,k.jsx)("p",{children:"Loading..."}):(0,k.jsx)(k.Fragment,{children:(0,k.jsx)("ul",{className:h,children:M.map((function(t){var n=t.original_title,r=t.id,a=t.poster_path,c=t.title;return(0,k.jsx)("li",{className:f,children:(0,k.jsxs)(p.rU,{to:"/Movies/".concat(r),state:{from:e},children:[a?(0,k.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(a),alt:c,width:250,className:b}):(0,k.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",alt:c,width:250,className:w}),(0,k.jsx)("p",{className:y,children:n})]})},r)}))})})})]})}},946:function(e,t,n){n.d(t,{Bt:function(){return v},Mc:function(){return p},mv:function(){return h},uS:function(){return o},y:function(){return l}});var r=n(861),a=n(757),c=n.n(a),s=n(243),i="https://api.themoviedb.org/3/",u="b27f2f3d79b3a6e46fc2bca972d7f174",o=function(){var e=(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"trending/movie/day?api_key=").concat(u));case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"movie/").concat(t,"?api_key=").concat(u,"&language=en-US"));case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"search/movie?api_key=").concat(u,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=653.eef5455b.chunk.js.map