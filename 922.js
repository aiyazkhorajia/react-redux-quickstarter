(self.webpackChunkreact_redux_starter=self.webpackChunkreact_redux_starter||[]).push([[922],{3922:function(e,r,t){"use strict";t.r(r);var n=t(7294),a=t(9226),c=t(2416),s=t(5893);r.default=function(){var e,r=(0,a.I0)(),t=(0,a.v9)((function(e){return e.usersData})),i=t.loading,o=t.data;return(0,n.useEffect)((function(){r((0,c.uh)())}),[r]),e=i?(0,s.jsx)("p",{children:"Please wait..."}):o&&o.data?(0,s.jsx)("div",{className:"row row-cols-1 row-cols-md-4 g-4",children:o.data.map((function(e){return(0,s.jsx)("div",{className:"col",children:(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("img",{src:e.avatar,className:"card-img-top",alt:e.first_name}),(0,s.jsxs)("div",{className:"card-body",children:[(0,s.jsx)("h5",{className:"card-title",children:e.first_name}),(0,s.jsx)("p",{className:"card-text",children:e.email})]})]})},e.id)}))}):(0,s.jsx)("p",{children:"No member found!"}),(0,s.jsx)("div",{className:"form-body",children:(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("div",{className:"form-holder",children:(0,s.jsx)("div",{className:"form-content",children:(0,s.jsxs)("div",{className:"form-items",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"d-inline-block",children:"Our Members"}),(0,s.jsx)("button",{className:"btn btn-primary d-inline-block m-2",onClick:function(){r((0,c.w7)())},children:"Sign Out"})]}),(0,s.jsx)("p",{children:"List of members fetched from the API"}),e]})})})})})}},2416:function(e,r,t){"use strict";t.d(r,{uh:function(){return d},zB:function(){return o},w7:function(){return u},y1:function(){return i}});var n=t(8238),a=t(9669),c=t.n(a)().create({baseURL:"https://reqres.in/",timeout:1e4});c.interceptors.request.use((function(e){var r=localStorage.getItem("access-token");return r&&(e.headers.Authorization="Bearer "+r),e}),(function(e){Promise.reject(e)}));var s=c;function i(e){return function(r){return r({type:n.yc}),s.post("/api/register",e).then((function(e){var t;r((t=e.data,{type:n.AK,payload:t}))})).catch((function(e){r(function(e){return{type:n.yy,error:e}}(e.response.data.error))}))}}function o(e){return function(r){return r({type:n.c$}),s.post("/api/login",e).then((function(e){var t;r((t=e.data,localStorage.setItem("access-token",t.token),{type:n._s,payload:t}))})).catch((function(e){r(function(e){return{type:n.RK,error:e}}(e.response.data.error))}))}}function u(){return localStorage.removeItem("access-token"),function(e){e({type:n.PM})}}function d(e){return function(r){return r({type:n.Ym}),s.get("/api/users?page=1&per_page=8",e).then((function(e){var t;r((t=e.data,{type:n.Js,payload:t}))})).catch((function(e){r({type:n.LD,error:"Error Occurs"})}))}}}}]);