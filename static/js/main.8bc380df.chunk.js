(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{10:function(e,n,a){},11:function(e,n,a){},12:function(e,n,a){"use strict";a.r(n);var t=a(0),l=a(1),i=a.n(l),c=a(4),s=a.n(c),u=(a(10),a(2)),r=(a(11),function(e){var n=e.valueSquare,a=e.handleChangeValue,l=e.index,i=e.positionWin;return Object(t.jsx)("div",{className:"square",onClick:function(){return a(l)},style:{color:"".concat("X"===n?"lightgreen":"red"),backgroundColor:"".concat(i[1]===l||i[2]===l||i[3]===l?"rgba(255, 255, 255, 0.1)":"")},children:Object(t.jsx)("span",{children:n&&n})})});var o=function(){var e=Object(l.useState)("X"),n=Object(u.a)(e,2),a=n[0],i=n[1],c=Object(l.useState)(void 0),s=Object(u.a)(c,2),o=s[0],j=s[1],d=Object(l.useState)(Array(9).fill(null)),h=Object(u.a)(d,2),b=h[0],O=h[1],x=Object(l.useState)({1:null,2:null,3:null}),v=Object(u.a)(x,2),p=v[0],g=v[1],f=function(e){if(!o){var n=b;n[e]=a,O(n),i("X"===a?"O":"X")}var t=m(b),l=Object(u.a)(t,3),c=l[0],s=l[1],r=l[2];null!==c&&null!==s&&null!==r&&(j(b[c]),g({1:c,2:s,3:r}))},m=function(e){for(var n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<n.length;a++){var t=Object(u.a)(n[a],3),l=t[0],i=t[1],c=t[2];if(e[l]&&e[l]===e[i]&&e[l]===e[c])return[l,i,c]}return[null,null,null]};return Object(t.jsx)("div",{className:"App",children:Object(t.jsxs)("div",{className:"game-tic-tac-toe",children:[Object(t.jsxs)("div",{className:"title-game",children:[Object(t.jsx)("p",{children:" Tic Tac Toe"}),Object(t.jsxs)("p",{children:["Current turn: ",a]})]}),Object(t.jsxs)("div",{className:"main-game",children:[Object(t.jsxs)("div",{className:"first-floor",children:[" ",Object(t.jsx)(r,{handleChangeValue:f,valueSquare:b[0],index:0,positionWin:p})," ",Object(t.jsx)(r,{valueSquare:b[1],handleChangeValue:f,index:1,positionWin:p}),Object(t.jsx)(r,{handleChangeValue:f,valueSquare:b[2],index:2,positionWin:p})]}),Object(t.jsxs)("div",{className:"second-floor",children:[Object(t.jsx)(r,{handleChangeValue:f,valueSquare:b[3],index:3,positionWin:p}),Object(t.jsx)(r,{valueSquare:b[4],handleChangeValue:f,index:4,positionWin:p}),Object(t.jsx)(r,{valueSquare:b[5],handleChangeValue:f,index:5,positionWin:p})]}),Object(t.jsxs)("div",{className:"third-floor",children:[Object(t.jsx)(r,{valueSquare:b[6],handleChangeValue:f,index:6,positionWin:p}),Object(t.jsx)(r,{valueSquare:b[7],handleChangeValue:f,index:7,positionWin:p}),Object(t.jsx)(r,{valueSquare:b[8],handleChangeValue:f,index:8,positionWin:p})]})]}),Object(t.jsxs)("div",{className:"end-game",style:{opacity:"".concat(o?"1":"0")},children:[Object(t.jsxs)("p",{children:[" ",o," WIN !!!"]}),Object(t.jsx)("button",{onClick:function(){j(void 0),O(Array(9).fill(null)),i("X"),g({1:null,2:null,3:null})},children:"Replay ???"})]})]})})};s.a.render(Object(t.jsx)(i.a.StrictMode,{children:Object(t.jsx)(o,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.8bc380df.chunk.js.map