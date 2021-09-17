(self.webpackChunkmantine_docs=self.webpackChunkmantine_docs||[]).push([[137],{73702:function(e,t,r){"use strict";r.d(t,{$:function(){return O}});var a=r(27378),n=r(18783),i=r(12536),o=r(42968),c=r(81995),l=r(18091),s=r(65392),d=r(56588),m=r(25444),p=r(93098),g=r(22984),u=(0,p.QM)((function(e){return{wrapper:{"& + &":{marginLeft:60},"@media (max-width: 1000px)":{"& + &":{marginLeft:40}}},link:{display:"block",color:"dark"===e.colorScheme?e.colors.dark[1]:e.colors.gray[6],fontSize:e.fontSizes.sm,paddingTop:3,paddingBottom:3,"&:hover":{textDecoration:"underline"}},title:{fontSize:e.fontSizes.lg,fontWeight:500,marginBottom:e.spacing.xs}}}),{theming:g.MX});function h(e){var t=e.data,r=e.title,n=u(),o=t.map((function(e,t){var r="gatsby"===e.type?{to:e.link}:{href:e.link};return a.createElement(i.x,Object.assign({className:n.link,component:"gatsby"===e.type?m.Link:"a"},r,{key:t}),e.label)}));return a.createElement("div",{className:n.wrapper},a.createElement(i.x,{className:n.title},r),o)}var f=[{title:"Project",data:[{type:"gatsby",label:"Contribute to Mantine",link:"/contribute/"},{type:"gatsby",label:"Changelog",link:"/pages/changelog/"},{type:"link",label:"Releases",link:"https://github.com/mantinedev/mantine/releases"}]},{title:"Community",data:[{type:"link",label:"Join Discord community",link:"https://discord.gg/eUZpPbpxb4"},{type:"link",label:"Follow on Twitter",link:"https://twitter.com/mantinedev"},{type:"link",label:"Email newsletter",link:"https://buttondown.email/mantine"},{type:"link",label:"Github discussions",link:"https://github.com/mantinedev/mantine/discussions"}]}],b=r(96156),y=r(49031),w=r(69756),v=r(91116);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,b.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E=(0,p.QM)((function(e){var t;return{spacer:{height:400,"@media (max-width: 800px)":{height:460},"@media (max-width: 640px)":{height:320}},wrapper:{backgroundColor:"dark"===e.colorScheme?e.colors.dark[8]:e.colors.gray[0],position:"fixed",bottom:0,left:0,right:0,height:400,"@media (max-width: 800px)":{height:460},"@media (max-width: 640px)":{height:320}},withNavbar:(t={paddingLeft:w.aO+2*e.spacing.md,paddingRight:2*e.spacing.md},t["@media (max-width: "+v.Bs+"px)"]={paddingLeft:w.aO+e.spacing.md,paddingRight:e.spacing.md},t["@media (max-width: "+w.jO+"px)"]={paddingLeft:e.spacing.md,paddingRight:e.spacing.md},t),inner:{paddingTop:2*e.spacing.xl,paddingBottom:2*e.spacing.xl,display:"flex",justifyContent:"space-between","@media (max-width: 800px)":{flexDirection:"column"},"@media (max-width: 640px)":{paddingBottom:e.spacing.md}},logoSection:{maxWidth:300,"@media (max-width: 800px)":{marginBottom:e.spacing.xl},"@media (max-width: 640px)":{marginBottom:0}},description:{marginTop:e.spacing.xs,color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6]},title:{marginBottom:e.spacing.sm,lineHeight:1},afterFooter:{borderTop:"1px solid "+("dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[2]),paddingTop:e.spacing.md},afterFooterNote:{color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6],"& a":k(k({},(0,y.S)(e)),{},{color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6]})},groups:{display:"flex","@media (max-width: 640px)":{display:"none"}},feedback:{maxWidth:260,marginLeft:80,"@media (max-width: 1000px)":{marginLeft:40}},feedbackDescription:{color:"dark"===e.colorScheme?e.colors.dark[1]:e.colors.gray[6],marginBottom:e.spacing.sm},social:{display:"flex","@media (max-width: 640px)":{display:"block"}},socialButton:{"& + &":{marginLeft:e.spacing.md},"@media (max-width: 640px)":{flex:1,width:"100%","& + &":{marginLeft:0,marginTop:e.spacing.md}}}}}),{theming:g.MX});function O(e){var t,r=e.withNavbar,m=E(),p=f.map((function(e){return a.createElement(h,{data:e.data,title:e.title,key:e.title})}));return a.createElement(a.Fragment,null,a.createElement("div",{className:m.spacer}),a.createElement("div",{className:(0,l.Z)(m.wrapper,(t={},t[m.withNavbar]=r,t))},a.createElement(n.W,{size:1100},a.createElement("div",{className:m.inner},a.createElement("div",{className:m.logoSection},a.createElement(s.T,null),a.createElement(i.x,{className:m.description,size:"sm"},"Build fully functional accessible web applications with ease")),a.createElement("div",{className:m.groups},p,a.createElement("div",{className:m.feedback},a.createElement(i.x,{size:"lg",weight:500,style:{marginBottom:12}},"Feedback"),a.createElement(i.x,{className:m.feedbackDescription,size:"sm"},"Your feedback is most valuable contribution to the project, please share how you use Mantine, what features are missing and what is done good"),a.createElement(o.zx,{component:"a",href:"https://github.com/mantinedev/mantine/discussions/new",variant:"outline",color:"gray",size:"sm"},"Leave feedback")))),a.createElement("div",{className:m.afterFooter},a.createElement(c.Z,{position:"apart"},a.createElement(i.x,{size:"xs",className:m.afterFooterNote},"Built by ",a.createElement("a",{href:"https://github.com/rtivital"},"Vitaly Rtishchev")," and"," ",a.createElement("a",{href:"https://github.com/mantinedev/mantine/graphs/contributors"},"these awesome people")),a.createElement("div",{className:m.social},a.createElement(d.Z,{service:"discord",className:m.socialButton}),a.createElement(d.Z,{service:"twitter",className:m.socialButton})))))))}},72008:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return S}});var a=r(27378),n=r(18783),i=r(537),o=r(36274),c=r(18091),l=r(49483),s=r(70127),d=r(77887),m=r(31120),p=r(25599),g=r(47993),u=r(93098),h=r(22984),f="@media (max-width: 755px)",b=(0,u.QM)((function(e){var t,r;return{canvas:{borderRadius:e.radius.md,border:"1px solid "+("dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[2]),backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.white,"& + &":{marginTop:2*e.spacing.xl}},body:(t={backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0],padding:[e.spacing.xs,e.spacing.md],borderBottomRightRadius:e.radius.md-1,borderBottomLeftRadius:e.radius.md-1},t[f]={padding:0},t),bodyRaw:{padding:0,"& $preview":{padding:4,borderTopRightRadius:0,borderTopLeftRadius:0}},bodyWithCode:{padding:0,backgroundColor:e.white},code:{borderBottomRightRadius:e.radius.md-1,borderBottomLeftRadius:e.radius.md-1,borderTopRightRadius:0,borderTopLeftRadius:0},preview:(r={backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white,padding:e.spacing.md,borderRadius:e.radius.md,position:"relative"},r[f]={padding:e.spacing.xs,borderTopRightRadius:0,borderTopLeftRadius:0},r)}}),{theming:h.MX});function y(e){var t,r=(0,a.useState)("preview"),n=r[0],i=r[1],o=(0,a.useState)("blue"),u=o[0],h=o[1],f=(0,s.r)(),y=b(),w=m[e._component];return a.createElement("div",{className:y.canvas},a.createElement(g.X,Object.assign({},e,{state:n,primaryColor:u,onStateChange:i,onPrimaryColorChange:h})),a.createElement("div",{className:(0,c.Z)(y.body,(t={},t[y.bodyWithCode]="code"===n,t[y.bodyRaw]=!e.attributes.canvas.center,t))},"preview"===n?a.createElement("div",{className:y.preview,style:{zIndex:e.zIndex}},a.createElement(p.u,{canvas:e.attributes.canvas},a.createElement(d.M,{theme:{primaryColor:u,colorScheme:f.colorScheme}},a.createElement(w,e.attributes.props)))):a.createElement(l.p,{language:"tsx",className:y.code},e.code)))}var w=r(25444),v=r(66315),x=r(60397),k=r(18843),E=r(43014),O=(0,u.QM)((function(e){return{title:{fontFamily:"Dosis, "+e.fontFamily,marginBottom:e.spacing.md,marginTop:e.spacing.md,fontSize:38}}}),{theming:h.MX});function j(e){var t=e.category,r=O();return a.createElement("div",null,a.createElement(v.e,{component:w.Link,to:"/gallery/"},a.createElement(x.M,{style:{display:"inline-flex"}},a.createElement(E.Y4O,{style:{marginRight:5}}),a.createElement("span",null,"Back to all categories"))),a.createElement(k.D,{className:r.title},t.name))}function S(e){var t=e.pageContext,r=t.components.map((function(e,r){return a.createElement(y,Object.assign({},e,{key:e.url,zIndex:t.components.length-r}))}));return a.createElement(a.Fragment,null,a.createElement(i.Z,{title:t.category.name}),a.createElement(o.a,null,a.createElement(n.W,{size:"lg",style:{paddingTop:40}},a.createElement(j,{category:t.category}),r)))}},36274:function(e,t,r){"use strict";r.d(t,{a:function(){return l}});var a=r(27378),n=r(73702),i=r(93098),o=r(22984),c=(0,i.QM)((function(e){return{wrapper:{paddingTop:22},content:{minHeight:"calc(100vh - 60px)",position:"relative",zIndex:1,backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white,boxShadow:"dark"===e.colorScheme?"none":e.shadows.sm,paddingBottom:80}}}),{theming:o.MX});function l(e){var t=e.children,r=c();return a.createElement("div",{className:r.wrapper},a.createElement("div",{className:r.content},t),a.createElement(n.$,null))}},91116:function(e,t,r){"use strict";r.d(t,{Bs:function(){return a},x6:function(){return n},pp:function(){return i},s$:function(){return o},v_:function(){return c}});var a=1080,n=260,i=820,o=46,c=38},56588:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var a=r(96156),n=r(19756),i=r(27378),o=r(70127),c=r(42968);function l(e){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 209"},e),i.createElement("path",{fill:"#FFF",fillRule:"nonzero",d:"M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 01-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 01-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 01-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 00256 25.45"}))}function s(e){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 293"},e),i.createElement("path",{fill:"#fff",d:"M226.011 0H29.99C13.459 0 0 13.458 0 30.135v197.778c0 16.677 13.458 30.135 29.989 30.135h165.888l-7.754-27.063 18.725 17.408 17.7 16.384L256 292.571V30.135C256 13.458 242.542 0 226.011 0zm-56.466 191.05s-5.266-6.291-9.655-11.85c19.164-5.413 26.478-17.408 26.478-17.408-5.998 3.95-11.703 6.73-16.823 8.63-7.314 3.073-14.336 5.12-21.211 6.291-14.044 2.633-26.917 1.902-37.888-.146-8.339-1.61-15.507-3.95-21.504-6.29-3.365-1.317-7.022-2.926-10.68-4.974-.438-.293-.877-.439-1.316-.732-.292-.146-.439-.292-.585-.438-2.633-1.463-4.096-2.487-4.096-2.487s7.022 11.703 25.6 17.261c-4.388 5.56-9.801 12.142-9.801 12.142-32.33-1.024-44.617-22.235-44.617-22.235 0-47.104 21.065-85.285 21.065-85.285 21.065-15.799 41.106-15.36 41.106-15.36l1.463 1.756C80.75 77.53 68.608 89.088 68.608 89.088s3.218-1.755 8.63-4.242c15.653-6.876 28.088-8.777 33.208-9.216.877-.147 1.609-.293 2.487-.293a123.776 123.776 0 0129.55-.292c13.896 1.609 28.818 5.705 44.031 14.043 0 0-11.556-10.971-36.425-18.578l2.048-2.34s20.041-.44 41.106 15.36c0 0 21.066 38.18 21.066 85.284 0 0-12.435 21.211-44.764 22.235zm-68.023-68.316c-8.338 0-14.92 7.314-14.92 16.237 0 8.924 6.728 16.238 14.92 16.238 8.339 0 14.921-7.314 14.921-16.238.147-8.923-6.582-16.237-14.92-16.237m53.394 0c-8.339 0-14.922 7.314-14.922 16.237 0 8.924 6.73 16.238 14.922 16.238 8.338 0 14.92-7.314 14.92-16.238 0-8.923-6.582-16.237-14.92-16.237"}))}function d(e){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 230.17 230.17",fill:"currentColor"},e),i.createElement("path",{d:"M230 49.585c0-.263.181-.519.169-.779l-70.24 67.68 70.156 65.518c.041-.468-.085-.94-.085-1.418V49.585zM149.207 126.901l-28.674 27.588a7.48 7.48 0 01-5.2 2.096 7.478 7.478 0 01-5.113-2.013l-28.596-26.647-70.614 68.064c1.717.617 3.56 1.096 5.49 1.096h197.667c2.866 0 5.554-.873 7.891-2.175l-72.851-68.009z"}),i.createElement("path",{d:"M115.251 138.757L222.447 35.496c-2.427-1.443-5.252-2.411-8.28-2.411H16.5c-3.943 0-7.556 1.531-10.37 3.866l109.121 101.806zM0 52.1v128.484c0 1.475.339 2.897.707 4.256l69.738-67.156L0 52.1z"}))}var m=["style"],p=["style"],g=["style"],u=["service","style"];function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b={border:0,height:42,paddingLeft:20,paddingRight:20};function y(e){var t=e.style,r=(0,n.Z)(e,m),a=(0,o.r)();return i.createElement(c.zx,Object.assign({component:"a",target:"_blank",rel:"noopener noreferrer",href:"https://discord.gg/eUZpPbpxb4",leftIcon:i.createElement(s,{style:{width:14,marginRight:5}}),style:f(f(f({},t),b),{},{backgroundColor:"dark"===a.colorScheme?"#5865f2":"#7289da"})},r),"Join Discord community")}function w(e){var t=e.style,r=(0,n.Z)(e,p),a=(0,o.r)();return i.createElement(c.zx,Object.assign({component:"a",target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/mantinedev",leftIcon:i.createElement(l,{style:{width:14,marginRight:5}}),style:f(f(f({},t),b),{},{backgroundColor:"dark"===a.colorScheme?"#1C8CD8":"#00acee"})},r),"Follow Mantine on Twitter")}function v(e){var t=e.style,r=(0,n.Z)(e,g);return i.createElement(c.zx,Object.assign({component:"a",target:"_blank",rel:"noopener noreferrer",href:"https://buttondown.email/mantine",color:"teal",leftIcon:i.createElement(d,{style:{width:14,marginRight:5}}),style:f(f({},t),b)},r),"Subscribe to email newsletter")}function x(e){var t=e.service,r=e.style,a=(0,n.Z)(e,u);return"discord"===t?i.createElement(y,Object.assign({style:r},a)):"twitter"===t?i.createElement(w,Object.assign({style:r},a)):i.createElement(v,Object.assign({style:r},a))}}}]);
//# sourceMappingURL=component---src-components-gallery-gallery-category-page-tsx-1cbce0898f5798ebe987.js.map