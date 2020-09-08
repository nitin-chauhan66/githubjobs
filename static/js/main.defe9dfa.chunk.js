(this.webpackJsonpwebappjobs=this.webpackJsonpwebappjobs||[]).push([[0],{226:function(e,a){},247:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(17),l=t.n(r),o=t(24),i=t(5),s=t(13),m=t(14),u=t.n(m),E="MAKE_REQUEST",p="GET_DATA",b="ERROR",d="UPDATE_HAS_NEXT_PAGE",g="https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";function h(e,a){switch(a.type){case E:return Object(i.a)(Object(i.a)({},e),{},{loading:!0,jobs:[]});case p:return Object(i.a)(Object(i.a)({},e),{},{loading:!1,jobs:a.payload});case b:return Object(i.a)(Object(i.a)({},e),{},{loading:!1,jobs:[],error:!0});case d:return Object(i.a)(Object(i.a)({},e),{},{hasNextPage:a.payload});default:return e}}var f=t(82),j=t(253),v=t(249),y=t(250),O=t(252),k=t(43),N=t.n(k);function w(e){var a=e.job,t=Object(n.useState)(!1),r=Object(s.a)(t,2),l=r[0],o=r[1];return c.a.createElement(j.a,{className:"mb-4"},c.a.createElement(j.a.Body,null,c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("div",null,c.a.createElement(j.a.Title,null,a.title," -",c.a.createElement("span",{className:"text-muted font-weight-light"},a.company)),c.a.createElement(j.a.Subtitle,{className:"text-muted mb-2"},new Date(a.created_at).toLocaleDateString()),c.a.createElement(v.a,{variant:"secondary",className:"mr-2"},a.type),c.a.createElement(v.a,{variant:"secondary"},a.location),c.a.createElement("div",{style:{wordBreak:"break-all"}},c.a.createElement(N.a,{source:a.how_to_apply,escapeHtml:!1}))),c.a.createElement("img",{className:"d-none d-md-block",height:"50",src:a.company_logo,alt:a.company})),c.a.createElement(j.a.Text,null,c.a.createElement(y.a,{variant:"primary",onClick:function(){return o(!l)}},l?"Hide Details":"View Details")),c.a.createElement(O.a,{in:l},c.a.createElement("div",{className:"mt-4"},c.a.createElement(N.a,{source:a.description,escapeHtml:!1})))))}var C=t(254);function x(e){var a=e.page,t=e.setPage,n=e.hasNextPage;function r(e){t((function(a){return a+e}))}return c.a.createElement(C.a,null,1!==a&&c.a.createElement(C.a.Prev,{onClick:function(){return r(-1)}}),1!==a&&c.a.createElement(C.a.Item,{onClick:function(){return t(1)}},"1"),a>2&&c.a.createElement(C.a.Ellipsis,null),a>2&&c.a.createElement(C.a.Item,{onClick:function(){return r(-1)}},a-1),c.a.createElement(C.a.Item,{active:!0},a),n&&c.a.createElement(C.a.Item,{onClick:function(){return r(1)}},a+1),n&&c.a.createElement(C.a.Next,{onClick:function(){return r(1)}}))}var T=t(251),_=t(81);function P(e){var a=e.params,t=e.onChangeHandler;return c.a.createElement(T.a,{className:"mb-4"},c.a.createElement(T.a.Row,{className:"align-items-end"},c.a.createElement(T.a.Group,{as:_.a},c.a.createElement(T.a.Label,null,"Description"),c.a.createElement(T.a.Control,{onChange:t,value:a.description,name:"description",type:"text"})),c.a.createElement(T.a.Group,{as:_.a},c.a.createElement(T.a.Label,null,"Location"),c.a.createElement(T.a.Control,{onChange:t,value:a.location,name:"location",type:"text"})),c.a.createElement(T.a.Group,{as:_.a,xs:"auto",className:"ml-2"},c.a.createElement(T.a.Check,{onChange:t,value:a.full_time,name:"full_time",id:"full-time",label:"Only Full Time",type:"checkbox",className:"mb-2"}))))}var S=function(){document.title="Github Jobs";var e=Object(n.useState)({}),a=Object(s.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(1),m=Object(s.a)(l,2),j=m[0],v=m[1],y=function(e,a){var t=Object(n.useReducer)(h,{jobs:[],loading:!0,error:!1}),c=Object(s.a)(t,2),r=c[0],l=c[1];return Object(n.useEffect)((function(){var t=u.a.CancelToken.source();l({type:E}),u.a.get(g,{cancelToken:t.token,params:Object(i.a)({page:a},e)}).then((function(e){l({type:p,payload:e.data})})).catch((function(e){u.a.isCancel(e)||l({type:b})}));var n=u.a.CancelToken.source();return u.a.get(g,{cancelToken:n.token,params:Object(i.a)({page:a+1},e)}).then((function(e){l({type:d,payload:0!==e.data.length})})).catch((function(e){u.a.isCancel(e)||l({type:b})})),function(){t.cancel(),n.cancel()}}),[e,a]),r}(t,j),O=y.jobs,k=y.loading,N=y.error,C=y.hasNextPage;return c.a.createElement("div",{className:"container my-4"},c.a.createElement("h1",{className:"mb-4"},"Github Jobs"),c.a.createElement(P,{params:t,onChangeHandler:function(e){var a=e.target.name,t=e.target.value;console.log(e.target),v(1),r((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(o.a)({},a,t))}))}}),c.a.createElement(x,{page:j,setPage:v,hasNextPage:C}),N?c.a.createElement("div",null,"Error"):k?c.a.createElement("div",{className:"text-center"},c.a.createElement(f.a,{animation:"border",role:"status"},c.a.createElement("span",{className:"sr-only"},"Loading..."))):O.map((function(e){return c.a.createElement(w,{job:e,key:e.id})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},83:function(e,a,t){e.exports=t(247)}},[[83,1,2]]]);
//# sourceMappingURL=main.defe9dfa.chunk.js.map