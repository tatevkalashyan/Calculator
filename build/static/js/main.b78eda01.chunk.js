(this.webpackJsonpcalc=this.webpackJsonpcalc||[]).push([[0],{12:function(e,t,n){e.exports=n(23)},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),a=n(3),i=n.n(a),r=n(7),l=(n(22),n(1)),s=n(10),u=n(2),d={videos:[]},h=Object(l.c)({calcReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CALC":return Object(u.a)({},e,{isFetching:!0});case"SUCCESS_CALC":return Object(u.a)({},e,{calc:t.calc,isFetching:!1});default:return e}},videoReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_VIDEOS":return Object(u.a)({},e,{isFetching:!0});case"GET_VIDEO":var n=[];return t.getVideo.videos.map((function(e){n.push(e.url)})),console.log(n),Object(u.a)({},e,{videos:n,isFetching:!1});default:return e}}}),E=function(e,t){return h(e,t)},O=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):l.d)(Object(l.a)(s.a)),_=Object(l.e)(E,O);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=Object(c.lazy)((function(){return Promise.all([n.e(4),n.e(2)]).then(n.bind(null,51))}));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(r.a,{store:_},o.a.createElement(c.Suspense,{fallback:o.a.createElement("p",null,"Still Loading...")},o.a.createElement(v,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,3]]]);
//# sourceMappingURL=main.b78eda01.chunk.js.map