(this.webpackJsonphackernoon=this.webpackJsonphackernoon||[]).push([[0],{10:function(e,c,t){},12:function(e,c,t){"use strict";t.r(c);var s=t(1),a=t.n(s),n=t(4),i=t.n(n),j=(t(9),t(2)),o=(t(10),t(0));var r=function(){var e=Object(s.useState)({}),c=Object(j.a)(e,2),t=c[0],a=c[1],n=Object(s.useState)(),i=Object(j.a)(n,2),r=i[0],l=i[1],h=Object(s.useState)({}),m=Object(j.a)(h,2),d=m[0],b=m[1],O=Object(s.useState)(),x=Object(j.a)(O,2),p=x[0],g=x[1],u=Object(s.useState)([]),f=Object(j.a)(u,2),k=f[0],N=f[1],v=Object(s.useState)([]),w=Object(j.a)(v,2),S=w[0],C=w[1];Object(s.useEffect)((function(){fetch("guide.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),a(e),l(y(e.createdAt)),b(e.profile),g(e.reactions.total),N(e.relatedStories),C(e.tags)}))}),[]);var y=function(e){return new Date(1e3*e).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric"})},E=function(){g(p+1)},T=k.map((function(e){if(e.reactionsCount>0)return Object(o.jsxs)("div",{className:"RelatedStories",children:[Object(o.jsx)("h2",{children:Object(o.jsx)("a",{href:"",children:e.title})}),Object(o.jsxs)("div",{className:"RelatedReactions",children:[e.reactionsCount," reactions"]}),Object(o.jsx)("img",{src:e.mainImage}),Object(o.jsxs)("div",{className:"RelatedDetails",children:[Object(o.jsxs)("div",{className:"Profile",children:[Object(o.jsx)("img",{src:e.profile.avatar}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{children:["@",e.profile.handle]}),Object(o.jsx)("p",{children:e.profile.displayName})]})]}),Object(o.jsxs)("div",{className:"Info",children:[Object(o.jsx)("p",{children:e.estimatedTime}),Object(o.jsx)("p",{children:e.createdAt?y(e.createdAt):""})]})]})]})})),A=S.map((function(e){return Object(o.jsxs)("a",{className:"Tag",href:"https://hackernoon.com/tagged/"+e,children:["#",e]})}));return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:t.title}),Object(o.jsxs)("div",{className:"InfoTop",children:[Object(o.jsx)("a",{href:!0,className:"date",children:r}),Object(o.jsxs)("div",{className:"Reactions",children:[Object(o.jsx)("p",{children:p}),Object(o.jsx)("img",{className:"Emoji",src:"https://hackernoon.com/emojis/heart.png",alt:"heart",onClick:E}),Object(o.jsx)("img",{className:"Emoji",src:"https://hackernoon.com/emojis/light.png",alt:"light",onClick:E}),Object(o.jsx)("img",{className:"Emoji",src:"https://hackernoon.com/emojis/boat.png",alt:"boat",onClick:E}),Object(o.jsx)("img",{className:"Emoji",src:"https://hackernoon.com/emojis/money.png",alt:"money",onClick:E})]})]}),Object(o.jsx)("div",{className:"Image",children:Object(o.jsx)("img",{src:t.mainImage,alt:"main"})}),Object(o.jsxs)("div",{className:"Post",children:[Object(o.jsxs)("div",{className:"Profile",children:[Object(o.jsx)("img",{className:"Avatar",src:d.avatar,alt:"avatar"}),Object(o.jsxs)("h3",{children:[Object(o.jsxs)("a",{children:["@",d.handle]}),Object(o.jsx)("p",{children:d.displayName})]}),Object(o.jsx)("p",{children:d.bio}),Object(o.jsxs)("div",{className:"SocialMedia",children:[Object(o.jsx)("a",{target:"_blank",href:"https://twitter.com/"+d.twitter,children:Object(o.jsx)("img",{src:"https://hackernoon.com/social-icons/twitter-new.png",width:"20",height:"20",alt:"twitter"})}),Object(o.jsx)("a",{target:"_blank",href:d.adLink,children:Object(o.jsx)("img",{src:"https://hackernoon.com/social-icons/github-new.png",width:"20",height:"20",alt:"github"})})]})]}),Object(o.jsx)("div",{className:"Content",dangerouslySetInnerHTML:{__html:t.markup}})]}),Object(o.jsxs)("div",{className:"Reactions Bottom",children:[Object(o.jsx)("p",{children:p}),Object(o.jsx)("img",{className:"Emoji",src:"https://hackernoon.com/emojis/heart.png",alt:"heart",onClick:E}),Object(o.jsx)("img",{className:"Emoji",src:"https://hackernoon.com/emojis/light.png",alt:"light",onClick:E}),Object(o.jsx)("img",{className:"Emoji",src:"https://hackernoon.com/emojis/boat.png",alt:"boat",onClick:E}),Object(o.jsx)("img",{className:"Emoji",src:"https://hackernoon.com/emojis/money.png",alt:"money",onClick:E})]}),Object(o.jsxs)("div",{className:"Share",children:[Object(o.jsxs)("div",{className:"Top",children:[Object(o.jsx)("p",{children:"Share this story"}),Object(o.jsx)("a",{href:"",children:Object(o.jsx)("img",{src:"https://hackernoon.com/social-icons/twitter-new.png",alt:"twitter"})}),Object(o.jsx)("a",{href:"",children:Object(o.jsx)("img",{src:"https://hackernoon.com/social-icons/facebook-new.png",alt:"facebook"})}),Object(o.jsx)("a",{href:"",children:Object(o.jsx)("img",{src:"https://hackernoon.com/social-icons/linkedin-new.png",alt:"linkedin"})}),Object(o.jsx)("a",{href:"",src:"https://hackernoon.com/social-icons/email-new.png",children:Object(o.jsx)("img",{src:"https://hackernoon.com/social-icons/email-new.png",alt:"email"})})]}),Object(o.jsxs)("div",{className:"Bottom",children:[Object(o.jsxs)("div",{className:"Profile",children:[Object(o.jsx)("img",{className:"Avatar",src:d.avatar,height:"50",width:"50",alt:"avatar"}),Object(o.jsxs)("h3",{children:[Object(o.jsxs)("a",{children:["@",d.handle]}),Object(o.jsx)("p",{children:d.displayName})]})]}),Object(o.jsx)("div",{children:Object(o.jsx)("p",{children:d.adText})})]})]}),Object(o.jsxs)("div",{className:"Related",children:[Object(o.jsx)("h4",{children:Object(o.jsx)("span",{children:"RELATED"})}),Object(o.jsx)("div",{className:"Box",children:T})]}),Object(o.jsxs)("div",{className:"Tags",children:[Object(o.jsx)("h4",{children:Object(o.jsx)("span",{children:"TAGS"})}),A]}),Object(o.jsxs)("div",{className:"Join",children:[Object(o.jsx)("a",{href:"https://app.hackernoon.com/signup",children:"Join Hacker Noon"}),Object(o.jsx)("p",{children:"Create your free account to unlock your custom reading experience."})]})]})},l=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(c){var t=c.getCLS,s=c.getFID,a=c.getFCP,n=c.getLCP,i=c.getTTFB;t(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(r,{})}),document.getElementById("root")),l()},9:function(e,c,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.ccbc297c.chunk.js.map