(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{175:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(182),o=n(180),c=n(183),u=(n(195),n(188)),l=n.n(u),s=n(189),f=n.n(s);function p(){var t=v(["\n  color: ",";\n"]);return p=function(){return t},t}function d(){var t=v(["\n  color: ",";\n  transform: rotate(180deg);\n"]);return d=function(){return t},t}function m(){var t=v(["\n  margin: 0;\n  padding: 0;\n  text-align: center;\n  text-transform: uppercase;\n"]);return m=function(){return t},t}function y(){var t=v(["\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n"]);return y=function(){return t},t}function h(){var t=v(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  border: 1px dashed #666;\n  background-color: #444;\n  padding: 0;\n  transform: ",";\n  width: 100%;\n  height: 6vh;\n"]);return h=function(){return t},t}function g(){var t=v(["\n  display: flex;\n"]);return g=function(){return t},t}function x(){var t=v(["\n  margin: 0;\n  border: 3px solid #777;\n  background-color: #444;\n  display: flex;\n  flex-direction: column;\n"]);return x=function(){return t},t}function v(t,e){return e||(e=t.slice(0)),t.raw=e,t}var E=[["A1","A2","A3","A4","A5","A6","A7","A8","A9"],["B1","B2","B3","B4","B5","B6","B7","B8","B9"],["C1","C2","C3","C4","C5","C6","C7","C8","C9"],["D1","D2","D3","D4","D5","D6","D7","D8","D9"],["E1","E2","E3","E4","E5","E6","E7","E8","E9"],["F1","F2","F3","F4","F5","F6","F7","F8","F9"],["G1","G2","G3","G4","G5","G6","G7","G8","G9"],["A1","A2","A3","A4","A5","A6","A7","A8","A9"],["J1","J2","J3","J4","J5","J6","J7","J8","J9"]],b=function(t,e,n){switch(t){case"up":case"up2":return t.startsWith(n)?e:{x:e.x,y:0===e.y?0:e.y-1};case"down":case"down2":return t.startsWith(n)?e:{x:e.x,y:8===e.y?8:e.y+1};case"left":case"left2":return t.startsWith(n)?e:{x:0===e.x?0:e.x-1,y:e.y};case"right":case"right2":return t.startsWith(n)?e:{x:8===e.x?8:e.x+1,y:e.y};default:return e}},w=c.a.div(x()),C=c.a.div(g()),j=c.a.div(h(),function(t){return t.playerOne||t.playerTwo?"rotate("+T(t.playerDirection)+"deg)":""}),W=c.a.img(y()),A=c.a.h2(m()),O=Object(c.a)(A)(d(),function(t){return t.playerColor}),D=Object(c.a)(A)(p(),function(t){return t.playerColor}),T=function(t){return t.startsWith("up")?180:t.startsWith("right")?270:t.startsWith("down")?0:t.startsWith("left")?90:void 0},k=function(t){var e=t.p1Direction,n=t.p2Direction,i=t.p1Color,o=t.p2Color,c=t.setGameActive,u=t.winners,s=t.setWinners,p=t.playerNames,d=Object(r.useState)({x:0,y:-1}),m=d[0],y=d[1],h=Object(r.useState)({x:8,y:9}),g=h[0],x=h[1],v=Object(r.useState)(void 0),A=v[0],T=v[1],k=Object(r.useState)(void 0),G=k[0],F=k[1],S=Object(r.useState)(void 0),J=S[0],N=S[1];return Object(r.useEffect)(function(){y(b(e,m,G))},[e]),Object(r.useEffect)(function(){x(b(n,g,J))},[n]),Object(r.useEffect)(function(){m.x===g.x&&m.y===g.y-1&&e.startsWith("down")&&T("p1"),g.x===m.x&&g.y===m.y-1&&n.startsWith("down")&&T("p2"),m.x===g.x&&m.y===g.y+1&&e.startsWith("up")&&T("p1"),g.x===m.x&&g.y===m.y+1&&n.startsWith("up")&&T("p2"),m.x===g.x-1&&m.y===g.y&&e.startsWith("right")&&T("p1"),g.x===m.x-1&&g.y===m.y&&n.startsWith("right")&&T("p2"),m.x===g.x+1&&m.y===g.y&&e.startsWith("left")&&T("p1"),g.x===m.x+1&&g.y===m.y&&n.startsWith("left")&&T("p2"),m.x===g.x&&m.y===g.y-1&&e.startsWith("down")&&n.startsWith("up")?(F("down"),N("up")):g.x===m.x&&g.y===m.y-1&&e.startsWith("up")&&n.startsWith("down")?(F("up"),N("down")):m.x===g.x-1&&m.y===g.y&&e.startsWith("right")&&n.startsWith("left")?(F("right"),N("left")):g.x===m.x-1&&g.y===m.y&&e.startsWith("left")&&n.startsWith("right")?(F("left"),N("right")):(F(void 0),N(void 0)),m.x===g.x&&m.y===g.y&&A&&(y({x:0,y:0}),x({x:8,y:8}),c(!1),s([].concat(u,[p[A]])))},[m,g]),a.a.createElement(a.a.Fragment,null,p&&a.a.createElement(O,{playerColor:i},p.p1),a.a.createElement(w,null,E.map(function(t,r){return a.a.createElement(C,null,t.map(function(t,c){return a.a.createElement(j,{playerColor:m.y===r&&m.x===c?i:o,playerOne:m.y===r&&m.x===c,playerTwo:g.y===r&&g.x===c,playerDirection:m.y===r&&m.x===c?e:g.y===r&&g.x===c?n:void 0},m.y===r&&m.x===c?a.a.createElement(W,{src:l.a,alt:"1"}):g.y===r&&g.x===c?a.a.createElement(W,{src:f.a,alt:"2"}):a.a.createElement(a.a.Fragment,null))}))})),p&&a.a.createElement(D,{playerColor:o},p.p2))};function G(){var t=N(["\n  height: 100%;\n  width: 100%;\n  max-height: 7rem;\n  max-width: 5rem;\n  margin: 0;\n  padding: 0;\n  transform: ",";\n"]);return G=function(){return t},t}function F(){var t=N(["\n  color: #444;\n  background-color: #444;\n  border: 1px solid #222;\n  min-height: ","%;\n  width: 100%;\n  height: 100%;\n  background-color: ",";\n"]);return F=function(){return t},t}function S(){var t=N(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 100%;\n  height: 10vh;\n  width: 100%;\n"]);return S=function(){return t},t}function J(){var t=N(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 17vh;\n  justify-content: stretch;\n  background-color: red;\n"]);return J=function(){return t},t}function N(t,e){return e||(e=t.slice(0)),t.raw=e,t}var B=c.a.div(J()),M=c.a.div(S()),R=c.a.button(F(),function(t){return t.mid?"50":"100"},function(t){return t.player}),P=c.a.img(G(),function(t){return"rotate("+t.rotate+"deg)"}),q=function(t){var e=t.player,n=t.direction,r=t.setDirection;return a.a.createElement(B,null,a.a.createElement(R,{player:e,onClick:function(){return r("left"===n?"left2":"left")}},a.a.createElement(P,{rotate:90,src:1===e?l.a:f.a,alt:e})),a.a.createElement(M,null,a.a.createElement(R,{mid:!0,player:e,onClick:function(){return r("up"===n?"up2":"up")}},a.a.createElement(P,{rotate:180,src:1===e?l.a:f.a,alt:e})),a.a.createElement(R,{mid:!0,player:e,onClick:function(){return r("down"===n?"down2":"down")}},a.a.createElement(P,{rotate:0,src:1===e?l.a:f.a,alt:e}))),a.a.createElement(R,{player:e,onClick:function(){return r("right"===n?"right2":"right")}},a.a.createElement(P,{rotate:270,src:1===e?l.a:f.a,alt:e})))};function I(){var t=X([""]);return I=function(){return t},t}function z(){var t=X(["\n  text-align: center;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n"]);return z=function(){return t},t}function H(){var t=X(["\n  text-transform: uppercase;\n  width: 45%;\n  padding: 0.5rem;\n  background-color: inherit;\n  color: ",";\n  border: none;\n  border-bottom: 1px solid ",";\n  outline: none;\n"]);return H=function(){return t},t}function K(){var t=X(["\n  display: flex;\n  justify-content: space-between;\n"]);return K=function(){return t},t}function L(){var t=X(["\n  background-color: green;\n  color: white;\n  padding: 0.5rem;\n  width: 100%;\n"]);return L=function(){return t},t}function U(){var t=X(["\n  margin: 0 0 1rem;\n  font-size: 2rem;\n  text-align: center;\n"]);return U=function(){return t},t}function V(){var t=X(["\n  margin: 0;\n  font-size: 4rem;\n"]);return V=function(){return t},t}function Q(){var t=X(["\n  margin: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 80vh;\n"]);return Q=function(){return t},t}function X(t,e){return e||(e=t.slice(0)),t.raw=e,t}var Y=c.a.div(Q()),Z=c.a.h2(V()),$=c.a.h3(U()),_=c.a.button(L()),tt=c.a.div(K()),et=c.a.input(H(),function(t){return t.playerColor},function(t){return t.playerColor}),nt=c.a.ul(z()),rt=c.a.li(I()),at=function(t){var e=t.p1Color,n=t.p2Color,r=t.playerNames,i=t.setPlayerNames,o=t.setGameActive,c=t.winners;return a.a.createElement(Y,null,a.a.createElement(tt,null,a.a.createElement(et,{playerColor:e,onChange:function(t){return i({p1:t.target.value,p2:r.p2})},value:r.p1}),a.a.createElement(et,{playerColor:n,onChange:function(t){return i({p1:r.p1,p2:t.target.value})},value:r.p2})),a.a.createElement(_,{onClick:function(){return o(!0)}},a.a.createElement(Z,null,"START DUEL")),a.a.createElement("div",null,a.a.createElement($,null,"Victories"),a.a.createElement(nt,null,c&&c.map(function(t){return a.a.createElement(rt,null,t)}))))};function it(){var t=ct(["\n  height: 92vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n"]);return it=function(){return t},t}function ot(){var t=ct(["\n  text-align: center;\n  margin: 0;\n  font-size: 6rem;\n  color: ",";\n"]);return ot=function(){return t},t}function ct(t,e){return e||(e=t.slice(0)),t.raw=e,t}var ut=c.a.h2(ot(),function(t){return t.playerColor}),lt=c.a.div(it()),st=function(){var t=Object(r.useState)(!1),e=t[0],n=t[1],i=Object(r.useState)(void 0),o=i[0],c=i[1],u=Object(r.useState)([]),l=u[0],s=u[1],f=Object(r.useState)({p1:"Player 1",p2:"Player 2"}),p=f[0],d=f[1],m=Object(r.useState)("down"),y=m[0],h=m[1],g=Object(r.useState)("up"),x=g[0],v=g[1];return Object(r.useEffect)(function(){c(l[l.length-1]),setTimeout(function(){c(void 0)},3e3)},[e]),a.a.createElement(lt,null,e&&a.a.createElement(a.a.Fragment,null,a.a.createElement(q,{player:1,playerColor:"#ff3333",direction:y,setDirection:h}),a.a.createElement(k,{p1Direction:y,p2Direction:x,p1Color:"#dd3333",p2Color:"#3366dd",setGameActive:n,setWinners:s,winners:l,playerNames:p}),a.a.createElement(q,{player:2,playerColor:"#3333ff",direction:x,setDirection:v})),!e&&!o&&a.a.createElement(a.a.Fragment,null,a.a.createElement(at,{p1Color:"#dd3333",p2Color:"#3366dd",playerNames:p,setPlayerNames:d,setGameActive:n,winners:l})),!e&&o&&a.a.createElement(a.a.Fragment,null,a.a.createElement(ut,{playerColor:o===p.p1?"#ff3333":"#3333ff"},o," WINS",l[l.length-2]===o?" AGAIN!":"!")))};e.default=function(){return a.a.createElement(i.a,null,a.a.createElement(o.a,{title:"Home"}),a.a.createElement(st,null))}},176:function(t,e,n){var r;t.exports=(r=n(179))&&r.default||r},177:function(t,e,n){"use strict";var r=n(0),a=n.n(r),i=n(11),o=n.n(i),c=n(58),u=n.n(c);n.d(e,"a",function(){return u.a});n(176),a.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},178:function(t){t.exports={data:{site:{siteMetadata:{title:"TIMTENDO"}}}}},179:function(t,e,n){"use strict";n.r(e);n(21);var r=n(0),a=n.n(r),i=n(11),o=n.n(i),c=n(83),u=function(t){var e=t.location,n=t.pageResources;return n?a.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json)):null};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},180:function(t,e,n){"use strict";var r=n(181),a=n(0),i=n.n(a),o=n(11),c=n.n(o),u=n(185),l=n.n(u);function s(t){var e=t.description,n=t.lang,a=t.meta,o=t.title,c=r.data.site,u=e||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:o},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:u}].concat(a)})}s.defaultProps={lang:"en",meta:[],description:""},s.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},e.a=s},181:function(t){t.exports={data:{site:{siteMetadata:{title:"TIMTENDO",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},182:function(t,e,n){"use strict";var r=n(178),a=n(0),i=n.n(a),o=n(11),c=n.n(o),u=n(177),l=function(t){var e=t.siteTitle;return i.a.createElement("header",{style:{background:"black"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0.05rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(u.a,{style:{color:"white",textDecoration:"none"}},e))))};l.propTypes={siteTitle:c.a.string},l.defaultProps={siteTitle:""};var s=l,f=(n(184),function(t){var e=t.children,n=r.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(s,{siteTitle:n.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",padding:0,maxWidth:960,color:"#eee"}},i.a.createElement("main",null,e)))});f.propTypes={children:c.a.node.isRequired};e.a=f},188:function(t,e,n){t.exports=n.p+"static/tims-red-b95af652961eb5db982360e6e686fa6e.png"},189:function(t,e,n){t.exports=n.p+"static/tims-blue-ab3ef2813c03f69fc775ca82169ec2f0.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-f4f76f1128cce7382652.js.map