(this["webpackJsonpkoma-cryptocurrency"]=this["webpackJsonpkoma-cryptocurrency"]||[]).push([[0],{223:function(e,t,n){},286:function(e,t,n){},311:function(e,t){},437:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(27),i=n.n(r),o=(n(223),n(473)),s=n(476),l=n(478),u=n(1),d=n.n(u),j=n(3),b=n(20),p=n(63),h=n.n(p),f=n(192),g=n.n(f),m=n(73),O=function(e){return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(e,"&order=market_cap_desc&per_page=100&page=1&sparkline=false")},x=function(e){return"https://api.coingecko.com/api/v3/coins/".concat(e)},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:365,n=arguments.length>2?arguments[2]:void 0;return"https://api.coingecko.com/api/v3/coins/".concat(e,"/market_chart?vs_currency=").concat(n,"&days=").concat(t)},y=function(e){return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(e,"&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h")},k=n(43),w=n(193),C=n(45),S=(n(275),n(438),{apiKey:"AIzaSyCXctbugXwhPVKIZOaceQzaAOJJRBwlEIk",authDomain:"koma-crypto.firebaseapp.com",projectId:"koma-crypto",storageBucket:"koma-crypto.appspot.com",messagingSenderId:"15638166710",appId:"1:15638166710:web:bd5ebf920321d2424c3a17"}),D=Object(w.a)(S),_=Object(k.c)(D),N=Object(C.b)(D),E=n(9),B=Object(a.createContext)(),I=function(e){var t=e.children,n=Object(a.useState)("USD"),c=Object(b.a)(n,2),r=c[0],i=c[1],o=Object(a.useState)("$"),s=Object(b.a)(o,2),l=s[0],u=s[1],p=Object(a.useState)({open:!1,message:"",type:"success"}),f=Object(b.a)(p,2),g=f[0],m=f[1],x=Object(a.useState)(null),v=Object(b.a)(x,2),y=v[0],w=v[1],S=Object(a.useState)([]),D=Object(b.a)(S,2),I=D[0],A=D[1],F=Object(a.useState)(!1),M=Object(b.a)(F,2),T=M[0],W=M[1],z=Object(a.useState)([]),L=Object(b.a)(z,2),R=L[0],U=L[1];Object(a.useEffect)((function(){if(y){var e=Object(C.a)(N,"watchlist",null===y||void 0===y?void 0:y.uid),t=Object(C.c)(e,(function(e){e.exists()?(console.log(e.data().coins),U(e.data().coins)):console.log("No Items in Watchlist")}));return function(){t()}}}),[y]),Object(a.useEffect)((function(){Object(k.d)(_,(function(e){w(e||null)}))}),[]);var H=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return W(!0),e.next=3,h.a.get(O(r));case 3:t=e.sent,n=t.data,A(n),W(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){"USD"===r?u("$"):"RUB"===r?u("\u20bd"):"UAH"===r&&u("\u20b4"),H()}),[r]),Object(E.jsx)(B.Provider,{value:{currency:r,setCurrency:i,symbol:l,alert:g,setAlert:m,user:y,coins:I,loading:T,watchlist:R},children:t})},A=function(){return Object(a.useContext)(B)},F=n(499),M=n(203),T=n(475),W=n(501),z=n(482),L=n(440),R=n(483),U=n(484),H=n(485),P=n(486),J=n(487),V=n(488),$=n(30);function K(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function X(){var e,t=Object(a.useState)(""),n=Object(b.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(1),u=Object(b.a)(i,2),d=u[0],j=u[1],p=A(),h=p.symbol,f=p.coins,g=p.loading,m=Object(o.a)({row:{backgroundColor:"#16171a",cursor:"pointer","&:hover":{backgroundColor:"#131111"},fontFamily:"Montserrat"},pagination:{"& .MuiPaginationItem-root":{color:"gold"}}})(),O=Object($.e)(),x=Object(M.a)({palette:{primary:{main:"#fff"},type:"dark"}}),v=function(){return f.filter((function(e){return e.name.toLowerCase().includes(c)||e.symbol.toLowerCase().includes(c)}))};return Object(E.jsx)(T.a,{theme:x,children:Object(E.jsxs)(s.a,{style:{textAlign:"center"},children:[Object(E.jsx)(l.a,{variant:"h4",style:{margin:18,fontFamily:"Montserrat"},children:"\u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u0446\u0435\u043d\u044b \u043d\u0430 \u0440\u044b\u043d\u043a\u0435 \u043a\u0440\u0438\u043f\u0442\u043e\u0432\u0430\u043b\u044e\u0442"}),Object(E.jsx)(W.a,{label:"\u041d\u0430\u0439\u0442\u0438 \u043d\u0443\u0436\u043d\u0443\u044e \u0432\u0430\u043b\u044e\u0442\u0443",variant:"outlined",style:{marginBottom:20,width:"100%"},onChange:function(e){return r(e.target.value)}}),Object(E.jsx)(z.a,{component:L.a,children:g?Object(E.jsx)(R.a,{style:{backgroundColor:"gold"}}):Object(E.jsxs)(U.a,{"aria-label":"simple table",children:[Object(E.jsx)(H.a,{style:{backgroundColor:"#EEBC1D"},children:Object(E.jsx)(P.a,{children:["\u0412\u0430\u043b\u044e\u0442\u0430","\u0426\u0435\u043d\u0430","\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0437\u0430 24 \u0447\u0430\u0441\u0430","\u041e\u0431\u044a\u0435\u043c \u043f\u0440\u043e\u0434\u0430\u0436"].map((function(e){return Object(E.jsx)(J.a,{style:{color:"black",fontWeight:"700",fontFamily:"Montserrat"},align:"\u0412\u0430\u043b\u044e\u0442\u0430"===e?"left":"right",children:e},e)}))})}),Object(E.jsx)(V.a,{children:v().slice(10*(d-1),10*(d-1)+10).map((function(e){var t=e.price_change_percentage_24h>0;return Object(E.jsxs)(P.a,{onClick:function(){return O.push("/coins/".concat(e.id))},className:m.row,children:[Object(E.jsxs)(J.a,{component:"th",scope:"row",style:{display:"flex",gap:15},children:[Object(E.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:e.name,height:"50",style:{marginBottom:10}}),Object(E.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(E.jsx)("span",{style:{textTransform:"uppercase",fontSize:22},children:e.symbol}),Object(E.jsx)("span",{style:{color:"darkgrey"},children:e.name})]})]}),Object(E.jsxs)(J.a,{align:"right",children:[h," ",K(e.current_price.toFixed(2))]}),Object(E.jsxs)(J.a,{align:"right",style:{color:t>0?"rgb(14, 203, 129)":"red",fontWeight:500},children:[t&&"+",e.price_change_percentage_24h.toFixed(2),"%"]}),Object(E.jsxs)(J.a,{align:"right",children:[h," ",K(e.market_cap.toString().slice(0,-6)),"M"]})]},e.name)}))})]})}),Object(E.jsx)(F.a,{count:parseInt(((null===(e=v())||void 0===e?void 0:e.length)/10).toFixed(0)),style:{padding:20,width:"100%",display:"flex",justifyContent:"center"},classes:{ul:m.pagination},onChange:function(e,t){j(t),window.scroll(0,450)}})]})})}var G=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),n=t[0],c=t[1],r=A(),i=r.currency,s=r.symbol,l=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(y(i));case 2:t=e.sent,n=t.data,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){l()}),[i]);var u=Object(o.a)((function(e){return{carousel:{height:"50%",display:"flex",alignItems:"center"},carouselItem:{display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",textTransform:"uppercase",color:"white"}}}))(),p=n.map((function(e){var t,n=(null===e||void 0===e?void 0:e.price_change_percentage_24h)>=0;return Object(E.jsxs)(m.b,{className:u.carouselItem,to:"/coins/".concat(e.id),children:[Object(E.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:e.name,height:"80",style:{marginBottom:10}}),Object(E.jsxs)("span",{children:[null===e||void 0===e?void 0:e.symbol,"\xa0",Object(E.jsxs)("span",{style:{color:n>0?"rgb(14, 203, 129)":"red",fontWeight:500},children:[n&&"+",null===e||void 0===e||null===(t=e.price_change_percentage_24h)||void 0===t?void 0:t.toFixed(2),"%"]})]}),Object(E.jsxs)("span",{style:{fontSize:22,fontWeight:500},children:[s," ",K(null===e||void 0===e?void 0:e.current_price.toFixed(2))]})]})}));return Object(E.jsx)("div",{className:u.carousel,children:Object(E.jsx)(g.a,{mouseTracking:!0,infinite:!0,autoPlayInterval:1e3,animationDuration:1500,disableDotsControls:!0,disableButtonsControls:!0,responsive:{0:{items:2},512:{items:4}},items:p,autoPlay:!0})})},Q=Object(o.a)((function(e){return{banner:{backgroundImage:"url(./banner.jpg)"},bannerContent:{height:400,display:"flex",flexDirection:"column",paddingTop:25,justifyContent:"space-around"},tagline:{display:"flex",height:"40%",flexDirection:"column",justifyContent:"center",textAlign:"center"},carousel:{height:"50%",display:"flex",alignItems:"center"}}}));var Y=function(){var e=Q();return Object(E.jsx)("div",{className:e.banner,children:Object(E.jsxs)(s.a,{className:e.bannerContent,children:[Object(E.jsxs)("div",{className:e.tagline,children:[Object(E.jsx)(l.a,{variant:"h2",style:{fontWeight:"bold",marginBottom:15,fontFamily:"Montserrat"},children:"SLV Crypto"}),Object(E.jsx)(l.a,{variant:"subtitle2",style:{color:"darkgrey",textTransform:"capitalize",fontFamily:"Montserrat"},children:"\u041e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u043d\u0443\u0436\u043d\u0443\u044e \u0432\u0430\u043c \u043a\u0440\u0438\u043f\u0442\u043e\u0432\u0430\u043b\u044e\u0442\u0443 \u2014 \u0431\u0435\u0437 \u0442\u0440\u0443\u0434\u043d\u043e\u0441\u0442\u0435\u0439."})]}),Object(E.jsx)(G,{})]})})},Z=function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(Y,{}),Object(E.jsx)(X,{})]})},q=(n(286),n(6)),ee=n(28),te=n(490),ne=n(199),ae=n.n(ne),ce=n(205),re=n(489),ie=function(e){var t=e.children,n=e.selected,a=e.onClick,c=Object(o.a)({selectbutton:{border:"1px solid gold",borderRadius:5,padding:10,fontFamily:"Montserrat",cursor:"pointer",backgroundColor:n?"gold":"",color:n?"black":"",fontWeight:n?700:500,"&:hover":{backgroundColor:"gold",color:"black"},width:"23%",textAlign:"center"}})();return Object(E.jsx)("span",{onClick:a,className:c.selectbutton,children:t})},oe=[{label:"24 \u0427\u0430\u0441\u0430",value:1},{label:"30 \u0414\u043d\u0435\u0439",value:30},{label:"3 \u041c\u0435\u0441\u044f\u0446\u0430",value:90},{label:"1 \u0413\u043e\u0434",value:365}],se=function(e){var t=e.coin,n=Object(a.useState)(),c=Object(b.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(1),l=Object(b.a)(s,2),u=l[0],p=l[1],f=A().currency,g=Object(o.a)((function(e){return{container:Object(q.a)({width:"75%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:25,padding:40},e.breakpoints.down("md"),{width:"100%",marginTop:0,padding:20,paddingTop:0})}}))(),m=function(){var e=Object(j.a)(d.a.mark((function e(){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(v(t.id,u,f));case 2:n=e.sent,a=n.data,i(a.prices);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){m()}),[u,f]);var O=Object(M.a)({palette:{primary:{main:"#fff"},type:"dark"}});return Object(E.jsx)(T.a,{theme:O,children:Object(E.jsx)("div",{className:g.container,children:r?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(ce.a,{data:{labels:r.map((function(e){var t=new Date(e[0]),n=t.getHours()>12?"".concat(t.getHours()-12,":").concat(t.getMinutes()," PM"):"".concat(t.getHours(),":").concat(t.getMinutes()," AM");return 1===u?n:t.toLocaleDateString()})),datasets:[{data:r.map((function(e){return e[1]})),label:"\u0426\u0435\u043d\u0430 ( \u0437\u0430 ".concat(u," \u0434\u0435\u043d\u044c/\u0434\u043d\u0435\u0439 ) \u0432 ").concat(f),borderColor:"#EEBC1D"}]},options:{elements:{point:{radius:1}}}}),Object(E.jsx)("div",{style:{display:"flex",marginTop:20,justifyContent:"space-around",width:"100%"},children:oe.map((function(e){return Object(E.jsx)(ie,{onClick:function(){return p(e.value)},selected:e.value===u,children:e.label},e.value)}))})]}):Object(E.jsx)(re.a,{style:{color:"gold"},size:250,thickness:1})})})},le=function(){var e=Object($.f)().id,t=Object(a.useState)(),n=Object(b.a)(t,2),c=n[0],r=n[1],i=A(),s=i.currency,u=i.symbol,p=i.user,f=i.setAlert,g=i.watchlist,m=function(){var t=Object(j.a)(d.a.mark((function t(){var n,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get(x(e));case 2:n=t.sent,a=n.data,r(a);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),O=g.includes(null===c||void 0===c?void 0:c.id),v=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(C.a)(N,"watchlist",p.uid),e.prev=1,e.next=4,Object(C.d)(t,{coins:g?[].concat(Object(ee.a)(g),[null===c||void 0===c?void 0:c.id]):[null===c||void 0===c?void 0:c.id]},{merge:!0});case 4:f({open:!0,message:"".concat(c.name," \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435 !"),type:"success"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),f({open:!0,message:e.t0.message,type:"error"});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(C.a)(N,"watchlist",p.uid),e.prev=1,e.next=4,Object(C.d)(t,{coins:g.filter((function(e){return e!==(null===c||void 0===c?void 0:c.id)}))},{merge:!0});case 4:f({open:!0,message:"".concat(c.name," \u0423\u0434\u0430\u043b\u0435\u043d\u043e \u0438\u0437 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0435\u043c\u043e\u0433\u043e !"),type:"success"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),f({open:!0,message:e.t0.message,type:"error"});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){m()}),[]);var k=Object(o.a)((function(e){var t,n;return{container:Object(q.a)({display:"flex"},e.breakpoints.down("md"),{flexDirection:"column",alignItems:"center"}),sidebar:(t={width:"30%"},Object(q.a)(t,e.breakpoints.down("md"),{width:"100%"}),Object(q.a)(t,"display","flex"),Object(q.a)(t,"flexDirection","column"),Object(q.a)(t,"alignItems","center"),Object(q.a)(t,"marginTop",25),Object(q.a)(t,"borderRight","2px solid grey"),t),heading:{fontWeight:"bold",marginBottom:20,fontFamily:"Montserrat"},description:{width:"100%",fontFamily:"Montserrat",padding:25,paddingBottom:15,paddingTop:0,textAlign:"justify"},marketData:(n={alignSelf:"start",padding:25,paddingTop:10,width:"100%"},Object(q.a)(n,e.breakpoints.down("md"),{display:"flex",flexDirection:"column",alignItems:"center"}),Object(q.a)(n,e.breakpoints.down("xs"),{alignItems:"start"}),n)}}))();return c?Object(E.jsxs)("div",{className:k.container,children:[Object(E.jsxs)("div",{className:k.sidebar,children:[Object(E.jsx)("img",{src:null===c||void 0===c?void 0:c.image.large,alt:null===c||void 0===c?void 0:c.name,height:"200",style:{marginBottom:20}}),Object(E.jsx)(l.a,{variant:"h3",className:k.heading,children:null===c||void 0===c?void 0:c.name}),Object(E.jsxs)(l.a,{variant:"subtitle1",className:k.description,children:[ae()(null===c||void 0===c?void 0:c.description.en.split(". ")[0]),"."]}),Object(E.jsxs)("div",{className:k.marketData,children:[Object(E.jsxs)("span",{style:{display:"flex"},children:[Object(E.jsx)(l.a,{variant:"h5",className:k.heading,children:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433:"}),"\xa0 \xa0",Object(E.jsx)(l.a,{variant:"h5",style:{fontFamily:"Montserrat"},children:K(null===c||void 0===c?void 0:c.market_cap_rank)})]}),Object(E.jsxs)("span",{style:{display:"flex"},children:[Object(E.jsx)(l.a,{variant:"h5",className:k.heading,children:"\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u0446\u0435\u043d\u0430:"}),"\xa0 \xa0",Object(E.jsxs)(l.a,{variant:"h5",style:{fontFamily:"Montserrat"},children:[u," ",K(null===c||void 0===c?void 0:c.market_data.current_price[s.toLowerCase()])]})]}),Object(E.jsxs)("span",{style:{display:"flex"},children:[Object(E.jsx)(l.a,{variant:"h5",className:k.heading,children:"\u0422\u043e\u0440\u0433\u043e\u0432\u044b\u0439 \u043e\u0431\u043e\u0440\u043e\u0442:"}),"\xa0 \xa0",Object(E.jsxs)(l.a,{variant:"h5",style:{fontFamily:"Montserrat"},children:[u," ",K(null===c||void 0===c?void 0:c.market_data.market_cap[s.toLowerCase()].toString().slice(0,-6)),"M"]})]}),p&&Object(E.jsx)(te.a,{variant:"outlined",style:{width:"100%",height:40,backgroundColor:O?"#ff0000":"#EEBC1D"},onClick:O?y:v,children:O?"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0435\u043c\u043e\u0433\u043e":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0435\u043c\u043e\u0435"})]})]}),Object(E.jsx)(se,{coin:c})]}):Object(E.jsx)(R.a,{style:{backgroundColor:"gold"}})},ue=n(492),de=n(494),je=n(496),be=n(506),pe=n(500),he=n(491),fe=n(441),ge=n(497),me=n(493),Oe=n(495),xe=function(e){var t=e.handleClose,n=Object(a.useState)(""),c=Object(b.a)(n,2),r=c[0],i=c[1],o=Object(a.useState)(""),s=Object(b.a)(o,2),l=s[0],u=s[1],p=Object(a.useState)(""),h=Object(b.a)(p,2),f=h[0],g=h[1],m=A().setAlert,O=function(){var e=Object(j.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l===f){e.next=3;break}return m({open:!0,message:"\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442",type:"error"}),e.abrupt("return");case 3:return e.prev=3,e.next=6,Object(k.b)(_,r,l);case 6:n=e.sent,m({open:!0,message:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430. \u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c ".concat(n.user.email),type:"success"}),t(),e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(3),m({open:!0,message:e.t0.message,type:"error"}),e.abrupt("return");case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}();return Object(E.jsxs)(Oe.a,{p:3,style:{display:"flex",flexDirection:"column",gap:"20px"},children:[Object(E.jsx)(W.a,{variant:"outlined",type:"email",label:"Email",value:r,onChange:function(e){return i(e.target.value)},fullWidth:!0}),Object(E.jsx)(W.a,{variant:"outlined",label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",value:l,onChange:function(e){return u(e.target.value)},fullWidth:!0}),Object(E.jsx)(W.a,{variant:"outlined",label:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",type:"password",value:f,onChange:function(e){return g(e.target.value)},fullWidth:!0}),Object(E.jsx)(te.a,{variant:"contained",size:"large",style:{backgroundColor:"#EEBC1D"},onClick:O,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})},ve=function(e){var t=e.handleClose,n=Object(a.useState)(""),c=Object(b.a)(n,2),r=c[0],i=c[1],o=Object(a.useState)(""),s=Object(b.a)(o,2),l=s[0],u=s[1],p=A().setAlert,h=function(){var e=Object(j.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&l){e.next=3;break}return p({open:!0,message:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u044f",type:"warning"}),e.abrupt("return");case 3:return e.prev=3,e.next=6,Object(k.e)(_,r,l);case 6:n=e.sent,p({open:!0,message:"\u0423\u0441\u043f\u0435\u0445. \u041f\u0440\u0438\u0432\u0435\u0442 ".concat(n.user.email),type:"success"}),t(),e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(3),p({open:!0,message:e.t0.message,type:"error"}),e.abrupt("return");case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}();return Object(E.jsxs)(Oe.a,{p:3,style:{display:"flex",flexDirection:"column",gap:"20px"},children:[Object(E.jsx)(W.a,{variant:"outlined",type:"email",label:"Email",value:r,onChange:function(e){return i(e.target.value)},fullWidth:!0}),Object(E.jsx)(W.a,{variant:"outlined",label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",value:l,onChange:function(e){return u(e.target.value)},fullWidth:!0}),Object(E.jsx)(te.a,{variant:"contained",size:"large",onClick:h,style:{backgroundColor:"#EEBC1D"},children:"\u0412\u043e\u0439\u0442\u0438"})]})},ye=n(202),ke=n.n(ye),we=Object(o.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{width:400,backgroundColor:e.palette.background.paper,color:"white",borderRadius:10},google:{padding:24,paddingTop:0,display:"flex",flexDirection:"column",textAlign:"center",marginLeft:"19%",gap:20,fontSize:20}}}));function Ce(){var e=we(),t=Object(a.useState)(!1),n=Object(b.a)(t,2),c=n[0],r=n[1],i=A().setAlert,o=function(){r(!1)},s=Object(a.useState)(0),l=Object(b.a)(s,2),u=l[0],d=l[1],j=new k.a;return Object(E.jsxs)("div",{children:[Object(E.jsx)(te.a,{variant:"contained",style:{width:85,height:40,marginLeft:15,backgroundColor:"#EEBC1D"},onClick:function(){r(!0)},children:"\u0412\u043e\u0439\u0442\u0438"}),Object(E.jsx)(pe.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:e.modal,open:c,onClose:o,closeAfterTransition:!0,BackdropComponent:he.a,BackdropProps:{timeout:500},children:Object(E.jsx)(fe.a,{in:c,children:Object(E.jsxs)("div",{className:e.paper,children:[Object(E.jsx)(ue.a,{position:"static",style:{backgroundColor:"transparent",color:"white"},children:Object(E.jsxs)(ge.a,{value:u,onChange:function(e,t){d(t)},variant:"fullWidth",style:{borderRadius:10},children:[Object(E.jsx)(me.a,{label:"\u0412\u043e\u0439\u0442\u0438"}),Object(E.jsx)(me.a,{label:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})}),0===u&&Object(E.jsx)(ve,{handleClose:o}),1===u&&Object(E.jsx)(xe,{handleClose:o}),Object(E.jsx)(Oe.a,{className:e.google,children:Object(E.jsx)(ke.a,{style:{width:"70%",outline:"none"},onClick:function(){Object(k.f)(_,j).then((function(e){i({open:!0,message:"\u0423\u0441\u043f\u0435\u0445! ".concat(e.user.email),type:"success"}),o()})).catch((function(e){i({open:!0,message:e.message,type:"error"})}))},label:"\u0412\u043e\u0439\u0442\u0438 \u0441 Google"})})]})})})]})}var Se=n(69),De=n(505),_e=n(504),Ne=n(204),Ee=Object(o.a)({container:{width:350,padding:25,height:"100%",display:"flex",flexDirection:"column",fontFamily:"monospace"},profile:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:"20px",height:"92%"},logout:{height:"8%",width:"100%",backgroundColor:"#EEBC1D",marginTop:20},picture:{width:100,height:100,cursor:"pointer",backgroundColor:"#EEBC1D",objectFit:"contain"},watchlist:{flex:1,width:"100%",backgroundColor:"grey",borderRadius:10,padding:15,paddingTop:10,display:"flex",flexDirection:"column",alignItems:"center",gap:12,overflowY:"scroll"},coin:{padding:10,borderRadius:5,color:"black",width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"#EEBC1D",boxShadow:"0 0 3px black"}});function Be(){var e=Ee(),t=c.a.useState({right:!1}),n=Object(b.a)(t,2),a=n[0],r=n[1],i=A(),o=i.user,s=i.setAlert,l=i.watchlist,u=i.coins,p=i.symbol;console.log(l,u);var h=function(e,t){return function(n){("keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&r(Object(Se.a)(Object(Se.a)({},a),{},Object(q.a)({},e,t)))}},f=function(){Object(k.g)(_),s({open:!0,type:"success",message:"\u0412\u044b\u0445\u043e\u0434 \u0443\u0441\u043f\u0435\u0448\u0435\u043d !"}),h()},g=function(){var e=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(C.a)(N,"watchlist",o.uid),e.prev=1,e.next=4,Object(C.d)(n,{coins:l.filter((function(e){return e!==(null===t||void 0===t?void 0:t.id)}))},{merge:!0});case 4:s({open:!0,message:"".concat(t.name," \u0423\u0434\u0430\u043b\u0435\u043d\u043e \u0438\u0437 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0435\u043c\u043e\u0433\u043e !"),type:"success"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),s({open:!0,message:e.t0.message,type:"error"});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(E.jsx)("div",{children:["right"].map((function(t){return Object(E.jsxs)(c.a.Fragment,{children:[Object(E.jsx)(_e.a,{onClick:h(t,!0),style:{height:38,width:38,marginLeft:15,cursor:"pointer",backgroundColor:"#EEBC1D"},src:o.photoURL,alt:o.displayName||o.email}),Object(E.jsx)(De.a,{anchor:t,open:a[t],onClose:h(t,!1),children:Object(E.jsxs)("div",{className:e.container,children:[Object(E.jsxs)("div",{className:e.profile,children:[Object(E.jsx)(_e.a,{className:e.picture,src:o.photoURL,alt:o.displayName||o.email}),Object(E.jsx)("span",{style:{width:"100%",fontSize:25,textAlign:"center",fontWeight:"bolder",wordWrap:"break-word"},children:o.displayName||o.email}),Object(E.jsxs)("div",{className:e.watchlist,children:[Object(E.jsx)("span",{style:{fontSize:15,textShadow:"0 0 5px black"},children:"\u041e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0435\u043c\u043e\u0435"}),u.map((function(t){return l.includes(t.id)?Object(E.jsxs)("div",{className:e.coin,children:[Object(E.jsx)("span",{children:t.name}),Object(E.jsxs)("span",{style:{display:"flex",gap:8},children:[p," ",K(t.current_price.toFixed(2)),Object(E.jsx)(Ne.a,{style:{cursor:"pointer"},fontSize:"16",onClick:function(){return g(t)}})]})]}):Object(E.jsx)(E.Fragment,{})}))]})]}),Object(E.jsx)(te.a,{variant:"contained",className:e.logout,onClick:f,children:"\u0412\u044b\u0439\u0442\u0438"})]})})]},t)}))})}var Ie=Object(o.a)((function(e){return{title:{flex:1,color:"gold",fontFamily:"Montserrat",fontWeight:"bold",cursor:"pointer"}}})),Ae=Object(M.a)({palette:{primary:{main:"#fff"},type:"dark"}});var Fe=function(){var e=Ie(),t=A(),n=t.currency,a=t.setCurrency,c=t.user,r=Object($.e)();return Object(E.jsx)(T.a,{theme:Ae,children:Object(E.jsx)(ue.a,{color:"transparent",position:"static",children:Object(E.jsx)(s.a,{children:Object(E.jsxs)(de.a,{children:[Object(E.jsx)(l.a,{onClick:function(){return r.push("/")},variant:"h6",className:e.title,children:"SLAVA Crypto"}),Object(E.jsxs)(je.a,{variant:"outlined",labelId:"demo-simple-select-label",id:"demo-simple-select",value:n,style:{width:135,height:40},onChange:function(e){return a(e.target.value)},children:[Object(E.jsx)(be.a,{value:"USD",children:"USD - $"}),Object(E.jsx)(be.a,{value:"RUB",children:"RUB - \u20bd"}),Object(E.jsx)(be.a,{value:"UAH",children:"UAH - \u20b4"})]}),c?Object(E.jsx)(Be,{}):Object(E.jsx)(Ce,{})]})})})})},Me=n(502),Te=n(498),We=function(){var e=A(),t=e.alert,n=e.setAlert,a=function(e,t){"clickaway"!==t&&n({open:!1})};return Object(E.jsx)(Me.a,{open:t.open,autoHideDuration:3e3,onClose:a,children:Object(E.jsx)(Te.a,{onClose:a,elevation:10,variant:"filled",severity:t.type,children:t.message})})},ze=Object(o.a)((function(){return{App:{backgroundColor:"#14161a",color:"orange",minHeight:"100vh"}}}));var Le=function(){var e=ze();return Object(E.jsxs)(m.a,{children:[Object(E.jsxs)("div",{className:e.App,children:[Object(E.jsx)(Fe,{}),Object(E.jsx)($.a,{path:"/",component:Z,exact:!0}),Object(E.jsx)($.a,{path:"/coins/:id",component:le,exact:!0})]}),Object(E.jsx)(We,{})]})};n(436);i.a.render(Object(E.jsx)(c.a.StrictMode,{children:Object(E.jsx)(I,{children:Object(E.jsx)(Le,{})})}),document.getElementById("root"))}},[[437,1,2]]]);
//# sourceMappingURL=main.0a803025.chunk.js.map