(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{59:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),c=s(29),i=s.n(c),r=s(8),o=s(2),j=s(1);var l=function(e){return Object(j.jsx)("span",{children:"test"})},m=s(18),u=s.n(m),d=s(30),v=s(11),b=s(12),h=s(14),p=s(13),O=s(31),x=s.n(O);s(59);var _=function(e){var t=e.id,s=e.year,n=e.title,a=e.summary,c=e.poster,i=e.genres;return Object(j.jsx)("div",{className:"movies__movie",children:Object(j.jsxs)(r.b,{to:{pathname:"/movie/".concat(t),state:{year:s,title:n,summary:a,poster:c,genres:i}},children:[Object(j.jsx)("img",{className:"movie__img",src:c,alt:n,title:n}),Object(j.jsxs)("div",{className:"movie__data",children:[Object(j.jsx)("h3",{className:"movie__title",children:n}),Object(j.jsx)("h5",{className:"movie__year",children:s}),Object(j.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(j.jsx)("li",{className:"movie__genres__genre",children:e},t)}))}),Object(j.jsxs)("p",{className:"movie__summary",children:[a.slice(0,180),"..."]})]})]})})},y=(s(65),function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(v.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movieLists:[]},e.getMovies=Object(d.a)(u.a.mark((function t(){var s,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts-proxy.now.sh/list_movies.json");case 2:s=t.sent,n=s.data.data.movies,e.setState({movieLists:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(b.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movieLists;return Object(j.jsx)("section",{className:"container",children:t?Object(j.jsx)("div",{className:"loader",children:Object(j.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(j.jsx)("div",{className:"movies",children:s.map((function(e){return Object(j.jsx)(_,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(a.a.Component)),f=function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(){return Object(v.a)(this,s),t.apply(this,arguments)}return Object(b.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,s=e.history;void 0===t.state&&s.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(j.jsxs)("div",{className:"movie__detail",children:[Object(j.jsx)("div",{className:"detail__background",children:Object(j.jsx)("img",{src:e.state.poster})}),Object(j.jsx)("h2",{children:e.state.title}),Object(j.jsx)("h4",{children:e.state.year}),Object(j.jsx)("p",{children:e.state.summary})]}):null}}]),s}(a.a.Component);s(66);var g=function(){return Object(j.jsxs)("div",{className:"nav",children:[Object(j.jsx)(r.b,{to:"/",children:"Home"}),Object(j.jsx)(r.b,{to:"/about",children:"About"})]})};var N=function(){return Object(j.jsxs)(r.a,{children:[Object(j.jsx)(g,{}),Object(j.jsx)(o.a,{path:"/",exact:!0,component:y}),Object(j.jsx)(o.a,{path:"/about",component:l}),Object(j.jsx)(o.a,{path:"/movie/:id",component:f})]})};i.a.render(Object(j.jsx)(N,{}),document.getElementById("potato"))}},[[67,1,2]]]);
//# sourceMappingURL=main.0b9d2c90.chunk.js.map