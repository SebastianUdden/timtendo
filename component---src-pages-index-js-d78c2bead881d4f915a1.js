(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{174:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(175),o=t(183),c=t(180),u=(t(188),t(182)),l=t.n(u),s=t(177),f=t.n(s);function m(){var n=x(["\n  margin-bottom: 0.2rem;\n  color: ",";\n"]);return m=function(){return n},n}function d(){var n=x(["\n  color: ",";\n  margin-top: 0.2rem;\n  transform: rotate(180deg);\n"]);return d=function(){return n},n}function p(){var n=x(["\n  margin: 0;\n  padding: 0;\n  text-align: center;\n  text-transform: uppercase;\n"]);return p=function(){return n},n}function g(){var n=x(["\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  ","\n"]);return g=function(){return n},n}function y(){var n=x(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  border: 1px dashed #666;\n  background-color: #444;\n  padding: 0;\n  transform: ",";\n  width: 100%;\n  height: 1.8rem;\n"]);return y=function(){return n},n}function h(){var n=x(["\n  display: flex;\n"]);return h=function(){return n},n}function v(){var n=x(["\n  touch-action: none;\n  margin: 0;\n  border: 3px solid #777;\n  background-color: #444;\n  display: flex;\n  flex-direction: column;\n"]);return v=function(){return n},n}function x(n,e){return e||(e=n.slice(0)),n.raw=e,n}var E=[["A1","A2","A3","A4","A5","A6","A7","A8","A9"],["B1","B2","B3","B4","B5","B6","B7","B8","B9"],["C1","C2","C3","C4","C5","C6","C7","C8","C9"],["D1","D2","D3","D4","D5","D6","D7","D8","D9"],["E1","E2","E3","E4","E5","E6","E7","E8","E9"],["F1","F2","F3","F4","F5","F6","F7","F8","F9"],["G1","G2","G3","G4","G5","G6","G7","G8","G9"],["A1","A2","A3","A4","A5","A6","A7","A8","A9"],["J1","J2","J3","J4","J5","J6","J7","J8","J9"]],b=function(n,e,t){switch(n){case"up":case"up2":return n.startsWith(t)?e:{x:e.x,y:0===e.y?0:e.y-1};case"down":case"down2":return n.startsWith(t)?e:{x:e.x,y:8===e.y?8:e.y+1};case"left":case"left2":return n.startsWith(t)?e:{x:0===e.x?0:e.x-1,y:e.y};case"right":case"right2":return n.startsWith(t)?e:{x:8===e.x?8:e.x+1,y:e.y};default:return e}},w=i.a.div(v()),C=i.a.div(h()),j=i.a.div(y(),function(n){return n.playerOne||n.playerTwo?"rotate("+k(n.playerDirection)+"deg)":""}),A=i.a.img(g(),function(n){return n.killMove&&"\n    border-bottom: 0.8rem dotted #ee3333;\n  "}),O=i.a.h3(p()),D=Object(i.a)(O)(d(),function(n){return n.playerColor}),W=Object(i.a)(O)(m(),function(n){return n.playerColor}),k=function(n){return n.startsWith("up")?180:n.startsWith("right")?270:n.startsWith("down")?0:n.startsWith("left")?90:void 0},F=function(n){var e=n.p1Direction,t=n.p2Direction,i=n.p1Color,o=n.p2Color,c=n.setGameActive,u=n.winners,s=n.setWinners,m=n.playerNames,d=Object(r.useState)({x:0,y:-1}),p=d[0],g=d[1],y=Object(r.useState)({x:8,y:9}),h=y[0],v=y[1],x=Object(r.useState)(void 0),O=x[0],k=x[1],F=Object(r.useState)(void 0),G=F[0],T=F[1],S=Object(r.useState)(void 0),M=S[0],J=S[1];return Object(r.useEffect)(function(){g(b(e,p,G))},[e]),Object(r.useEffect)(function(){v(b(t,h,M))},[t]),Object(r.useEffect)(function(){p.x===h.x&&p.y===h.y-1&&e.startsWith("down")?k("p1"):h.x===p.x&&h.y===p.y-1&&t.startsWith("down")?k("p2"):p.x===h.x&&p.y===h.y+1&&e.startsWith("up")?k("p1"):h.x===p.x&&h.y===p.y+1&&t.startsWith("up")?k("p2"):p.x===h.x-1&&p.y===h.y&&e.startsWith("right")?k("p1"):h.x===p.x-1&&h.y===p.y&&t.startsWith("right")?k("p2"):p.x===h.x+1&&p.y===h.y&&e.startsWith("left")?k("p1"):h.x===p.x+1&&h.y===p.y&&t.startsWith("left")?k("p2"):k(void 0),p.x===h.x&&p.y===h.y-1&&e.startsWith("down")&&t.startsWith("up")?(T("down"),J("up"),k(void 0)):h.x===p.x&&h.y===p.y-1&&e.startsWith("up")&&t.startsWith("down")?(T("up"),J("down"),k(void 0)):p.x===h.x-1&&p.y===h.y&&e.startsWith("right")&&t.startsWith("left")?(T("right"),J("left"),k(void 0)):h.x===p.x-1&&h.y===p.y&&e.startsWith("left")&&t.startsWith("right")?(T("left"),J("right"),k(void 0)):(T(void 0),J(void 0)),p.x===h.x&&p.y===h.y&&O&&(g({x:0,y:0}),v({x:8,y:8}),c(!1),s([].concat(u,[m[O]])))},[p,h]),a.a.createElement(a.a.Fragment,null,m&&a.a.createElement(D,{playerColor:i},m.p1),a.a.createElement(w,null,E.map(function(n,r){return a.a.createElement(C,null,n.map(function(n,c){return a.a.createElement(j,{playerColor:p.y===r&&p.x===c?i:o,playerOne:p.y===r&&p.x===c,playerTwo:h.y===r&&h.x===c,playerDirection:p.y===r&&p.x===c?e:h.y===r&&h.x===c?t:void 0},p.y===r&&p.x===c?a.a.createElement(A,{killMove:"p1"===O,src:l.a,alt:"1"}):h.y===r&&h.x===c?a.a.createElement(A,{killMove:"p2"===O,src:f.a,alt:"2"}):a.a.createElement(a.a.Fragment,null))}))})),m&&a.a.createElement(W,{playerColor:o},m.p2))};function G(){var n=J(["\n  touch-action: none;\n  height: 100%;\n  width: 100%;\n  max-height: 3rem;\n  max-width: 3rem;\n  margin: 0;\n  padding: 0;\n  transform: ",";\n"]);return G=function(){return n},n}function T(){var n=J(["\n  touch-action: none;\n  color: #444;\n  background-color: #444;\n  border: 1px solid #222;\n  min-height: ","%;\n  width: 100%;\n  height: 100%;\n  min-height: 100%;\n"]);return T=function(){return n},n}function S(){var n=J(["\n  touch-action: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 3rem;\n  width: 100%;\n"]);return S=function(){return n},n}function M(){var n=J(["\n  touch-action: none;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: stretch;\n  background-color: inherit;\n  min-height: 7rem;\n"]);return M=function(){return n},n}function J(n,e){return e||(e=n.slice(0)),n.raw=e,n}var B=i.a.div(M()),N=i.a.div(S()),P=i.a.button(T(),function(n){return n.mid?"50":"100"}),z=i.a.img(G(),function(n){return"rotate("+n.rotate+"deg)"}),I=function(n){var e=n.player,t=n.direction,r=n.setDirection;return a.a.createElement(B,null,a.a.createElement(P,{player:e,onClick:function(n){n.preventDefault(),n.stopPropagation(),r("left"===t?"left2":"left")}},a.a.createElement(z,{rotate:90,src:1===e?l.a:f.a,alt:e})),a.a.createElement(N,null,a.a.createElement(P,{mid:!0,player:e,onClick:function(n){n.preventDefault(),n.stopPropagation(),r("up"===t?"up2":"up")}},a.a.createElement(z,{rotate:180,src:1===e?l.a:f.a,alt:e})),a.a.createElement(P,{mid:!0,player:e,onClick:function(n){n.preventDefault(),n.stopPropagation(),r("down"===t?"down2":"down")}},a.a.createElement(z,{rotate:0,src:1===e?l.a:f.a,alt:e}))),a.a.createElement(P,{player:e,onClick:function(n){n.preventDefault(),n.stopPropagation(),r("right"===t?"right2":"right")}},a.a.createElement(z,{rotate:270,src:1===e?l.a:f.a,alt:e})))};function R(){var n=Q([""]);return R=function(){return n},n}function q(){var n=Q(["\n  text-align: center;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n"]);return q=function(){return n},n}function H(){var n=Q(["\n  text-transform: uppercase;\n  width: 45%;\n  padding: 0.5rem;\n  background-color: inherit;\n  color: ",";\n  border: none;\n  border-bottom: 1px solid ",";\n  outline: none;\n"]);return H=function(){return n},n}function L(){var n=Q(["\n  display: flex;\n  justify-content: space-between;\n"]);return L=function(){return n},n}function K(){var n=Q(["\n  margin: 2rem 0;\n  background-color: green;\n  color: white;\n  padding: 0.5rem;\n  width: 100%;\n"]);return K=function(){return n},n}function U(){var n=Q(["\n  margin: 0 0 1rem;\n  font-size: 2rem;\n  text-align: center;\n"]);return U=function(){return n},n}function V(){var n=Q(["\n  margin: 0;\n  font-size: 4rem;\n"]);return V=function(){return n},n}function Y(){var n=Q(["\n  margin: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]);return Y=function(){return n},n}function Q(n,e){return e||(e=n.slice(0)),n.raw=e,n}var X=i.a.div(Y()),Z=i.a.h2(V()),$=i.a.h3(U()),_=i.a.button(K()),nn=i.a.div(L()),en=i.a.input(H(),function(n){return n.playerColor},function(n){return n.playerColor}),tn=i.a.ul(q()),rn=i.a.li(R()),an=function(n){var e=n.p1Color,t=n.p2Color,r=n.playerNames,i=n.setPlayerNames,o=n.setGameActive,c=n.winners;return a.a.createElement(X,null,a.a.createElement(nn,null,a.a.createElement(en,{playerColor:e,onChange:function(n){return i({p1:n.target.value,p2:r.p2})},value:r.p1}),a.a.createElement(en,{playerColor:t,onChange:function(n){return i({p1:r.p1,p2:n.target.value})},value:r.p2})),a.a.createElement(_,{onClick:function(){return o(!0)}},a.a.createElement(Z,null,"START DUEL")),a.a.createElement("div",null,a.a.createElement($,null,"Victories"),a.a.createElement(tn,null,c&&c.map(function(n){return a.a.createElement(rn,null,n)}))))};function on(){var n=un(["\n  touch-action: none;\n  height: 35rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n"]);return on=function(){return n},n}function cn(){var n=un(["\n  touch-action: none;\n  text-align: center;\n  font-size: 6rem;\n  color: ",";\n"]);return cn=function(){return n},n}function un(n,e){return e||(e=n.slice(0)),n.raw=e,n}var ln=i.a.h2(cn(),function(n){return n.playerColor}),sn=i.a.div(on()),fn=function(){var n=Object(r.useState)(!1),e=n[0],t=n[1],i=Object(r.useState)(void 0),o=i[0],c=i[1],u=Object(r.useState)([]),l=u[0],s=u[1],f=Object(r.useState)({p1:"Player 1",p2:"Player 2"}),m=f[0],d=f[1],p=Object(r.useState)("down"),g=p[0],y=p[1],h=Object(r.useState)("up"),v=h[0],x=h[1];return Object(r.useEffect)(function(){c(l[l.length-1]),setTimeout(function(){c(void 0)},3e3)},[e]),a.a.createElement(sn,null,e&&a.a.createElement(a.a.Fragment,null,a.a.createElement(I,{player:1,playerColor:"#ff3333",direction:g,setDirection:y}),a.a.createElement(F,{p1Direction:g,p2Direction:v,p1Color:"#dd3333",p2Color:"#3366dd",setGameActive:t,setWinners:s,winners:l,playerNames:m}),a.a.createElement(I,{player:2,playerColor:"#3333ff",direction:v,setDirection:x})),!e&&!o&&a.a.createElement(a.a.Fragment,null,a.a.createElement(an,{p1Color:"#dd3333",p2Color:"#3366dd",playerNames:m,setPlayerNames:d,setGameActive:t,winners:l})),!e&&o&&a.a.createElement(a.a.Fragment,null,a.a.createElement(ln,{playerColor:o===m.p1?"#ff3333":"#3333ff"},o," WINS",l[l.length-2]===o?" AGAIN!":"!")))};t(123);function mn(){var n=vn(["\n  color: ",";\n  margin-top: 0.2rem;\n  transform: rotate(180deg);\n"]);return mn=function(){return n},n}function dn(){var n=vn(["\n  margin: 0;\n  padding: 0;\n  text-align: center;\n  text-transform: uppercase;\n"]);return dn=function(){return n},n}function pn(){var n=vn(["\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  ","\n"]);return pn=function(){return n},n}function gn(){var n=vn(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  border: 1px dashed #666;\n  background-color: #444;\n  padding: 0;\n  transform: ",";\n  width: 100%;\n  height: 1.8rem;\n"]);return gn=function(){return n},n}function yn(){var n=vn(["\n  display: flex;\n"]);return yn=function(){return n},n}function hn(){var n=vn(["\n  touch-action: none;\n  margin: 0;\n  border: 3px solid #777;\n  background-color: #444;\n  display: flex;\n  flex-direction: column;\n"]);return hn=function(){return n},n}function vn(n,e){return e||(e=n.slice(0)),n.raw=e,n}var xn=[["A1","A2","A3","A4","A5","A6","A7","A8","A9"],["B1","B2","B3","B4","B5","B6","B7","B8","B9"],["C1","C2","C3","C4","C5","C6","C7","C8","C9"],["D1","D2","D3","D4","D5","D6","D7","D8","D9"],["E1","E2","E3","E4","E5","E6","E7","E8","E9"],["F1","F2","F3","F4","F5","F6","F7","F8","F9"],["G1","G2","G3","G4","G5","G6","G7","G8","G9"],["A1","A2","A3","A4","A5","A6","A7","A8","A9"],["J1","J2","J3","J4","J5","J6","J7","J8","J9"]],En=i.a.div(hn()),bn=i.a.div(yn()),wn=i.a.div(gn(),function(n){return n.playerOne||n.playerTwo?"rotate("+On(n.playerDirection)+"deg)":""}),Cn=i.a.img(pn(),function(n){return n.killMove&&"\n    border-bottom: 0.8rem dotted #ee3333;\n  "}),jn=i.a.h3(dn()),An=Object(i.a)(jn)(mn(),function(n){return n.playerColor}),On=function(n){return n.startsWith("up")?180:n.startsWith("right")?270:n.startsWith("down")?0:n.startsWith("left")?90:void 0},Dn=function(n){var e=n.p1Direction,t=n.p1Color,i=(n.setGameActive,n.playerNames),o=n.setTims,c=n.tims,u=Math.floor(10*Math.random()-1),s=Math.floor(10*Math.random()-1),m=Object(r.useState)({x:u<0?0:u,y:s<0?0:s}),d=m[0],p=m[1],g=Object(r.useState)({x:0,y:-1}),y=g[0],h=g[1],v=Object(r.useState)(void 0),x=v[0];v[1];return Object(r.useEffect)(function(){h(function(n,e,t){switch(n){case"up":case"up2":return n.startsWith(t)?e:{x:e.x,y:0===e.y?0:e.y-1};case"down":case"down2":return n.startsWith(t)?e:{x:e.x,y:8===e.y?8:e.y+1};case"left":case"left2":return n.startsWith(t)?e:{x:0===e.x?0:e.x-1,y:e.y};case"right":case"right2":return n.startsWith(t)?e:{x:8===e.x?8:e.x+1,y:e.y};default:return e}}(e,y,x))},[e]),Object(r.useEffect)(function(){if(y.x===d.x&&y.y===d.y){var n=Math.floor(10*Math.random()-1),e=Math.floor(10*Math.random()-1);p({x:n<0?0:n,y:e<0?0:e}),o(c+1)}},[y,d]),a.a.createElement(a.a.Fragment,null,i&&a.a.createElement(An,{playerColor:t},i.p1),a.a.createElement(En,null,xn.map(function(n,r){return a.a.createElement(bn,null,n.map(function(n,i){return a.a.createElement(wn,{playerColor:t,playerOne:y.y===r&&y.x===i,playerDirection:y.y===r&&y.x===i?e:void 0},y.y===r&&y.x===i?a.a.createElement(Cn,{src:l.a,alt:"1"}):d.y===r&&d.x===i?a.a.createElement(Cn,{src:f.a,alt:"2"}):a.a.createElement(a.a.Fragment,null))}))})))};function Wn(){var n=Mn(["\n  height: 100%;\n  width: 3rem;\n  margin: 0;\n  padding: 0;\n  ","\n"]);return Wn=function(){return n},n}function kn(){var n=Mn(["\n  margin: 0;\n  color: #777;\n  font-size: 1.5rem;\n"]);return kn=function(){return n},n}function Fn(){var n=Mn([""]);return Fn=function(){return n},n}function Gn(){var n=Mn(["\n  color: #e33;\n"]);return Gn=function(){return n},n}function Tn(){var n=Mn(["\n  font-size: 6rem;\n  color: #666;\n  margin: 0 0 0.4rem;\n  text-align: center;\n"]);return Tn=function(){return n},n}function Sn(){var n=Mn(["\n  background-color: #444;\n  border: 3px solid #777;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n"]);return Sn=function(){return n},n}function Mn(n,e){return e||(e=n.slice(0)),n.raw=e,n}var Jn=i.a.div(Sn()),Bn=i.a.h2(Tn()),Nn=i.a.div(Gn()),Pn=i.a.div(Fn()),zn=i.a.h3(kn()),In=i.a.img(Wn(),function(n){return n.killMove&&"\n    border-bottom: 0.8rem dotted #ee3333;\n  "}),Rn=function(n){var e=n.countdown,t=n.tims;return a.a.createElement(Jn,null,0!==e?a.a.createElement(Bn,null,a.a.createElement(Nn,null,e)):a.a.createElement(zn,null,"Collected"),a.a.createElement(Bn,null,a.a.createElement(Pn,null,t,a.a.createElement(In,{src:f.a,alt:"2"}))))};function qn(){var n=_n(["\n  margin: 0;\n  background-color: green;\n  color: white;\n  padding: 0.5rem;\n  width: 100%;\n"]);return qn=function(){return n},n}function Hn(){var n=_n(["\n  margin: 0;\n  font-size: 3rem;\n"]);return Hn=function(){return n},n}function Ln(){var n=_n(["\n  padding-bottom: 0.2rem;\n"]);return Ln=function(){return n},n}function Kn(){var n=_n(["\n  position: relative;\n  z-index: 1;\n  height: 1.5rem;\n  width: 1.5rem;\n  margin: -0.1rem -0.3rem;\n"]);return Kn=function(){return n},n}function Un(){var n=_n(["\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  width: 1rem;\n  ","\n"]);return Un=function(){return n},n}function Vn(){var n=_n(["\n  font-size: 1.5rem;\n  display: inline;\n  margin: 0;\n  padding: 0;\n"]);return Vn=function(){return n},n}function Yn(){var n=_n(["\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  margin: 0;\n  padding: 0;\n  margin-bottom: 0.2rem;\n  color: #777;\n"]);return Yn=function(){return n},n}function Qn(){var n=_n(["\n  text-align: center;\n  list-style-type: none;\n  margin: 0 0 1rem;\n  padding: 0;\n"]);return Qn=function(){return n},n}function Xn(){var n=_n(["\n  z-index: 298;\n  position: relative;\n"]);return Xn=function(){return n},n}function Zn(){var n=_n(["\n  margin: 0 0 1rem;\n  font-size: 2rem;\n  text-align: center;\n"]);return Zn=function(){return n},n}function $n(){var n=_n(["\n  padding-top: 0.5rem;\n  border: 3px solid #777;\n  background-color: #444;\n  color: #eee;\n"]);return $n=function(){return n},n}function _n(n,e){return e||(e=n.slice(0)),n.raw=e,n}var ne=i.a.div($n()),ee=i.a.h3(Zn()),te=i.a.span(Xn()),re=i.a.ul(Qn()),ae=i.a.li(Yn()),ie=i.a.h4(Vn()),oe=i.a.img(Un(),function(n){return n.killMove&&"\n    border-bottom: 0.8rem dotted #ee3333;\n    "}),ce=Object(i.a)(oe)(Kn()),ue=Object(i.a)(oe)(Ln()),le=i.a.h2(Hn()),se=i.a.button(qn()),fe=function(){var n=Object(r.useState)(!0),e=n[0],t=n[1],i=Object(r.useState)(15),o=i[0],c=i[1],u=Object(r.useState)(0),l=u[0],s=u[1],m=Object(r.useState)([]),d=m[0],p=m[1],g=Object(r.useState)(!0),y=g[0],h=g[1],v=Object(r.useState)("down"),x=v[0],E=v[1];return Object(r.useEffect)(function(){0===o&&(h(!1),p([].concat(d,[l]).sort(function(n,e){return e-n})))},[o]),Object(r.useEffect)(function(){var n;return e&&(n=setInterval(function(){c(function(e){return e<=1?(t(!1),clearInterval(n),0):e-1})},1e3)),function(){return clearInterval(n)}},[e]),a.a.createElement(a.a.Fragment,null,a.a.createElement(Rn,{gameActive:y,tims:l,countdown:o}),!y&&a.a.createElement(a.a.Fragment,null,a.a.createElement(ne,null,a.a.createElement(ee,null,a.a.createElement(te,null,"High Sc"),a.a.createElement(ce,{src:f.a}),a.a.createElement(te,null,"re")),a.a.createElement(re,null,d&&d.map(function(n){return a.a.createElement(ae,null,a.a.createElement(ie,null,n),a.a.createElement(ue,{src:f.a}))}))),a.a.createElement(se,{onClick:function(){s(0),c(15),h(!0),t(!e)}},a.a.createElement(le,null,"PLAY AGAIN"))),y&&a.a.createElement(a.a.Fragment,null,a.a.createElement(Dn,{p1Direction:x,p1Color:"#dd3333",setGameActive:h,setTims:s,tims:l}),a.a.createElement("br",null),a.a.createElement(I,{player:1,playerColor:"#ff3333",direction:x,setDirection:E})))};function me(){var n=ge(["\n  height: 80vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return me=function(){return n},n}function de(){var n=ge(["\n  margin: 0;\n  text-transform: uppercase;\n"]);return de=function(){return n},n}function pe(){var n=ge(["\n  margin: 1rem 2rem;\n  background-color: green;\n  color: white;\n  padding: 1rem 2rem;\n  width: 80%;\n"]);return pe=function(){return n},n}function ge(n,e){return e||(e=n.slice(0)),n.raw=e,n}var ye=i.a.button(pe()),he=i.a.h2(de()),ve=i.a.div(me());e.default=function(){var n=Object(r.useState)(void 0),e=n[0],t=n[1];return a.a.createElement(o.a,null,a.a.createElement(c.a,{title:"Home"}),!e&&a.a.createElement(ve,null,a.a.createElement(ye,{onClick:function(){return t("faceOff")}},a.a.createElement(he,null,"Face Off")),a.a.createElement(ye,{onClick:function(){return t("superTims")}},a.a.createElement(he,null,"Super Tims"))),"faceOff"===e&&a.a.createElement(fn,{setTab:t}),"superTims"===e&&a.a.createElement(fe,{setTab:t}))}},176:function(n,e,t){var r;n.exports=(r=t(179))&&r.default||r},177:function(n,e,t){n.exports=t.p+"static/tims-blue-ab3ef2813c03f69fc775ca82169ec2f0.png"},178:function(n){n.exports={data:{site:{siteMetadata:{title:"TIMTENDO"}}}}},179:function(n,e,t){"use strict";t.r(e);t(21);var r=t(0),a=t.n(r),i=t(11),o=t.n(i),c=t(89),u=function(n){var e=n.location,t=n.pageResources;return t?a.a.createElement(c.a,Object.assign({location:e,pageResources:t},t.json)):null};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},180:function(n,e,t){"use strict";var r=t(181),a=t(0),i=t.n(a),o=t(11),c=t.n(o),u=t(185),l=t.n(u);function s(n){var e=n.description,t=n.lang,a=n.meta,o=n.title,c=r.data.site,u=e||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:t},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:o},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:u}].concat(a)})}s.defaultProps={lang:"en",meta:[],description:""},s.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},e.a=s},181:function(n){n.exports={data:{site:{siteMetadata:{title:"TIMTENDO",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},182:function(n,e,t){n.exports=t.p+"static/tims-red-b95af652961eb5db982360e6e686fa6e.png"},183:function(n,e,t){"use strict";var r=t(178),a=t(0),i=t.n(a),o=t(11),c=t.n(o),u=t(58),l=t.n(u);t(176),i.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func;var s=function(n){var e=n.siteTitle;return i.a.createElement("header",{style:{background:"black"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0.05rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(l.a,{style:{color:"white",textDecoration:"none"}},e))))};s.propTypes={siteTitle:c.a.string},s.defaultProps={siteTitle:""};var f=s,m=(t(184),function(n){var e=n.children,t=r.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f,{siteTitle:t.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",padding:0,maxWidth:960,color:"#eee"}},i.a.createElement("main",null,e)))});m.propTypes={children:c.a.node.isRequired};e.a=m}}]);
//# sourceMappingURL=component---src-pages-index-js-d78c2bead881d4f915a1.js.map