(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{43:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(18),r=n.n(i),s=n(16),o=n(6),j=(n(43),n(8)),l=n(15),h=n(14),d=n(4),b=n(1),u=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),r=Object(j.a)(i,2),o=r[0],u=r[1],O=Object(c.useState)(""),m=Object(j.a)(O,2),x=m[0],v=m[1],y=Object(c.useState)("Category?"),p=Object(j.a)(y,2),S=p[0],g=p[1],f=Object(c.useState)("Number of questions?"),I=Object(j.a)(f,2),K=I[0],q=I[1];function w(e,t){a(e),v(t.target.outerText),g(t.target.outerText)}function C(e,t){u(e),q(t.target.outerText)}return Object(b.jsx)("div",{id:"home",children:Object(b.jsxs)(h.a,{id:"homeContainer",children:[Object(b.jsxs)(h.a,{children:[Object(b.jsx)("h1",{children:"Quiz"}),Object(b.jsx)("p",{children:"Choose from a number of categories and the number of questions you'd like to play with."}),Object(b.jsx)("p",{children:"How many will you get right??"}),Object(b.jsx)("p",{children:"Good luck!"})]}),Object(b.jsxs)(h.a,{id:"selections",children:[Object(b.jsxs)(d.a,{className:"dropdown",children:[Object(b.jsx)(d.a.Toggle,{id:"categoryDropdown",variant:"custom",children:S}),Object(b.jsxs)(d.a.Menu,{children:[Object(b.jsx)(d.a.Item,{onSelect:w,eventKey:"27",children:"Animals"}),Object(b.jsx)(d.a.Item,{onSelect:w,eventKey:"25",children:"Art"}),Object(b.jsx)(d.a.Item,{onSelect:w,eventKey:"26",children:"Celebrities"}),Object(b.jsx)(d.a.Item,{onSelect:w,eventKey:"16",children:"Entertainment: Board Games"}),Object(b.jsx)(d.a.Item,{onSelect:w,eventKey:"10",children:"Entertainment: Books"}),Object(b.jsx)(d.a.Item,{onSelect:w,eventKey:"32",children:"Entertainment: Cartoons & Animations"}),Object(b.jsx)(d.a.Item,{onSelect:w,eventKey:"29",children:"Entertainment: Comics"}),Object(b.jsx)(d.a.Item,{onSelect:w,eventKey:"11",children:"Entertainment: Film"}),Object(b.jsx)(d.a.Item,{onSelect:w,eventKey:"31",children:"Entertainment: Japanese Anime & Manga"}),Object(b.jsx)(d.a.Item,{onSelect:w,eventKey:"12",children:"Entertainment: Music"}),Object(b.jsx)(d.a.Item,{onSelect:w,eventKey:"13",children:"Entertainment: Musicals & Theatres"}),Object(b.jsx)(d.a.Item,{onSelect:w,eventKey:"14",children:"Entertainment: Television"}),Object(b.jsx)(d.a.Item,{onSelect:w,eventKey:"15",children:"Entertainment: Video Games"}),Object(b.jsx)(d.a.Item,{onSelect:w,eventKey:"9",children:"General Knowledge"}),Object(b.jsx)(d.a.Item,{onSelect:w,eventKey:"22",children:"Geography"}),Object(b.jsx)(d.a.Item,{onSelect:w,eventKey:"23",children:"History"}),Object(b.jsx)(d.a.Item,{onSelect:w,eventKey:"20",children:"Mythology"}),Object(b.jsx)(d.a.Item,{onSelect:w,eventKey:"24",children:"Politics"}),Object(b.jsx)(d.a.Item,{onSelect:w,eventKey:"",children:"Random"}),Object(b.jsx)(d.a.Item,{onSelect:w,eventKey:"17",children:"Science & Nature"}),Object(b.jsx)(d.a.Item,{onSelect:w,eventKey:"18",children:"Science: Computers"}),Object(b.jsx)(d.a.Item,{onSelect:w,eventKey:"19",children:"Science: Mathematics"}),Object(b.jsx)(d.a.Item,{onSelect:w,eventKey:"30",children:"Science: Gadgets"}),Object(b.jsx)(d.a.Item,{onSelect:w,eventKey:"21",children:"Sports"}),Object(b.jsx)(d.a.Item,{onSelect:w,eventKey:"28",children:"Vehicles"})]})]}),Object(b.jsxs)(d.a,{className:"dropdown",children:[Object(b.jsx)(d.a.Toggle,{id:"questionNumberDropdown",variant:"custom",children:K}),Object(b.jsxs)(d.a.Menu,{children:[Object(b.jsx)(d.a.Item,{onSelect:C,eventKey:"10",children:"10 questions"}),Object(b.jsx)(d.a.Item,{onSelect:C,eventKey:"15",children:"15 questions"}),Object(b.jsx)(d.a.Item,{onSelect:C,eventKey:"20",children:"20 questions"})]})]})]}),Object(b.jsx)(h.a,{children:o&&Object(b.jsxs)("div",{id:"letsGo",children:[Object(b.jsxs)("p",{id:"playerChoice",children:["You've chosen ",o,' questions from the "',x,'" category!']}),Object(b.jsx)(s.b,{to:{pathname:"/quiz/play",state:{categoryKey:n,questionAmount:o}},children:Object(b.jsx)(l.a,{variant:"custom",children:"Let's Go!"})})]})})]})})},O=n(25),m=n.n(O),x=n(35),v=n(36),y=n.n(v),p=n(37),S=n.n(p),g=n(96),f=n(38),I=n.n(f),K=function(e){var t=e.location,n=Object(c.useState)(!0),a=Object(j.a)(n,2),i=a[0],r=a[1],o=Object(c.useState)([]),d=Object(j.a)(o,2),u=d[0],O=d[1],v=Object(c.useState)(""),p=Object(j.a)(v,2),f=p[0],K=p[1],q=Object(c.useState)([]),w=Object(j.a)(q,2),C=w[0],z=w[1],M=Object(c.useState)([]),T=Object(j.a)(M,2),k=T[0],E=T[1],A=Object(c.useState)(0),F=Object(j.a)(A,2),G=F[0],N=F[1],B=Object(c.useState)(!1),P=Object(j.a)(B,2),_=P[0],D=P[1],J=Object(c.useState)(0),L=Object(j.a)(J,2),Q=L[0],R=L[1],Y=Object(c.useState)(!1),H=Object(j.a)(Y,2),V=H[0],W=H[1],U=t.state.categoryKey,X=t.state.questionAmount,Z=Object(g.a)(),$=Z.width,ee=Z.height;function te(e){N(G+1),K(u[G+1].question),z(u[G+1].correct_answer),E(u[G+1].incorrect_answers)}return Object(c.useEffect)((function(){function e(){return(e=Object(x.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("https://opentdb.com/api.php?amount=".concat(X,"&").concat(U?"category":"","=").concat(U,"&encode=base64"));case 3:t=e.sent,n=t.data,O(n.results),K(n.results[0].question),z(n.results[0].correct_answer),E(n.results[0].incorrect_answers),r(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),D(!0),r(!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[U,X]),i?Object(b.jsx)("div",{id:"loader",children:Object(b.jsx)(S.a,{type:"Circles",color:" #40e0d0",height:200,width:200,timeout:3e3})}):_?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:"There are not enough questions available for this category."}),Object(b.jsx)(s.b,{to:{pathname:"/quiz/"},children:Object(b.jsx)(l.a,{variant:"custom",children:"Choose again?"})})]}):Object(b.jsxs)("div",{id:"quiz",children:[!V&&Object(b.jsxs)(h.a,{id:"quizContainer",children:[Object(b.jsxs)(h.a,{id:"quizText",children:[Object(b.jsxs)("h3",{children:["Question ",G+1," of ",X]}),Object(b.jsxs)("h3",{children:["Score: ",Q]})]}),Object(b.jsx)("h2",{id:"question",children:decodeURIComponent(atob(f).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""))}),Object(b.jsx)("div",{children:function(){var e=[C].concat(k);return Object(b.jsx)("div",{id:"allAnswers",children:e.sort().map((function(e,t){return Object(b.jsx)(l.a,{variant:"custom",id:e,className:"answerButton",onClick:function(){return function(e){G+1<X?e===C?(R(Q+1),te()):te():W(!0)}(e)},children:atob(e)},t)}))})}()})]}),V&&Object(b.jsxs)(h.a,{id:"gameOver",children:[Object(b.jsx)("h2",{className:"gameOverText",children:function(){if(Q/X<=.5){var e=["Well tried!","Better luck next time!","You gave it a good go!"];return e[Math.floor(Math.random()*e.length)]}if(Q/X>.5&&Q/X<.9){var t=["Well done, you got more than half right!","Really good attempt - can you do better next time?!","So close!"];return t[Math.floor(Math.random()*t.length)]}var n=["Amazing work!","Full marks - take a bow!!","Quiz Pro!"];return n[Math.floor(Math.random()*n.length)]}()}),Object(b.jsxs)("h2",{className:"gameOverText",children:["Your final score was ",Q," out of ",X,"!"]}),Object(b.jsx)(s.b,{to:{pathname:"/quiz/"},children:Object(b.jsx)(l.a,{variant:"custom",children:"Play again?"})}),Object(b.jsx)(I.a,{width:$,height:ee})]})]})};var q=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(s.a,{children:Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{exact:!0,path:"/quiz",component:u}),Object(b.jsx)(o.b,{exact:!0,path:"/quiz/play",component:K}),Object(b.jsx)(o.a,{to:"/quiz/not-found"})]})})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,97)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(q,{})}),document.getElementById("root")),w()}},[[91,1,2]]]);
//# sourceMappingURL=main.e75ffe6b.chunk.js.map