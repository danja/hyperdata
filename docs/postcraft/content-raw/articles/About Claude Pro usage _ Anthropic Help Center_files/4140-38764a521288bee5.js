!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="39928ea6-4a21-41ee-8d53-e53a76398916",e._sentryDebugIdIdentifier="sentry-dbid-39928ea6-4a21-41ee-8d53-e53a76398916")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4140],{4140:function(e,t,r){r.r(t),r.d(t,{__N_SSP:function(){return T},default:function(){return L}});var a=r(5893),i=r(1822),l=r.n(i),n=r(8317),s=r(3589),c=r(3967),o=r.n(c),d=r(358),m=r(4012);function x(e){let{author:t,isMessengerIframe:r,lastUpdated:i}=e;return(0,a.jsx)("div",{className:o()("avatar__info -mt-0.5 text-base",{"max-messenger:text-sm":r}),children:(0,a.jsxs)("span",{className:"text-body-secondary-color",children:[t&&(0,a.jsx)("div",{children:(0,a.jsx)(m.Z,{id:"article.written_by",values:{author:t.name,b:e=>(0,a.jsx)("span",{children:e})}})})," ",i]})})}function u(e){let{author:t,isMessengerIframe:r,lastUpdated:i}=e;return(0,a.jsxs)("div",{className:"avatar",children:[t&&(0,a.jsx)("div",{className:"avatar__photo",children:(0,a.jsx)(s.Z,{adminAvatar:t.avatar,adminName:t.name,forArticle:!0,isMessengerIframe:r})}),(0,a.jsx)(x,{author:t,lastUpdated:i,isMessengerIframe:r})]})}function f(e){let{author:t,description:r,isMessengerIframe:i,lastUpdated:l,renderTitle:n,title:s}=e;return(0,a.jsx)("div",{className:"mb-10 max-lg:mb-6",children:(0,a.jsxs)("div",{className:o()("flex flex-col",{"gap-1":i,"gap-4":!i}),children:[(0,a.jsx)(d.Z,{subtitle:r,title:n?s:null,muteSubtitle:!0,isMessengerIframe:i}),(0,a.jsx)(u,{author:t,lastUpdated:l,isMessengerIframe:i})]})})}function b(e){let{attachments:t}=e;if(!t||0===t.attachments.length)return null;let r=(0,a.jsxs)("svg",{className:"interface-icon o__standard o__standard__attachment",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("title",{children:(0,a.jsx)(m.Z,{id:"article.attachment_icon"})}),(0,a.jsx)("path",{d:"M8.256 1.454a3.7 3.7 0 015.233 5.232L8.186 11.99a2.2 2.2 0 01-3.112-3.112l3.182-3.182a.7.7 0 11.99.99L6.064 9.868A.8.8 0 107.196 11l5.303-5.304a2.3 2.3 0 00-3.253-3.252L3.943 7.747a3.8 3.8 0 005.374 5.374l3.182-3.182a.7.7 0 01.99.99l-3.182 3.182a5.2 5.2 0 01-7.354-7.354l5.303-5.303z"})]}),i=t.attachments.map((e,t)=>(0,a.jsx)("div",{className:"intercom-attachment",children:(0,a.jsxs)("div",{className:"flex flex-row items-center",children:[(0,a.jsx)("div",{className:"flex flex-col",children:r}),(0,a.jsx)("div",{className:"flex flex-col",children:(0,a.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:e.name})})]})},t));return(0,a.jsx)("div",{className:"attachments intercom-attachments",children:i})}var h=r(6896),p=r(7294);function j(){return(0,a.jsxs)("section",{className:"mt-6",children:[(0,a.jsx)("hr",{className:"bg-body-border"}),(0,a.jsxs)("div",{className:"t__h4 mb-4",children:["\uD83D\uDCA1",(0,a.jsx)("b",{className:"ml-1 font-bold",children:(0,a.jsx)(m.Z,{id:"community_banner.tip"})})]}),(0,a.jsxs)("p",{className:"text-center",children:[(0,a.jsx)(m.Z,{id:"community_banner.label",values:{b:e=>(0,a.jsx)("b",{children:e}),link:(0,a.jsx)("a",{href:"https://community.intercom.com/?utm_source=ii-help-center&utm_medium=internal",children:(0,a.jsx)(m.Z,{id:"community_banner.link_label"})})}}),(0,a.jsx)("br",{}),(0,a.jsx)(m.Z,{id:"community_banner.description"})]}),(0,a.jsx)("hr",{className:"bg-body-border"})]})}var g=r(2278);function v(e){let{isMessengerIframe:t,isSheet:r,relatedArticles:i,renderDivider:n}=e;return(0,a.jsxs)("section",{className:"jsx-62724fba150252e0 "+(o()("related_articles",{"!m-0":t||r,"mt-8":!n,"my-6":n})||""),children:[n&&(0,a.jsx)("hr",{className:"jsx-62724fba150252e0 my-6 sm:my-8"}),(0,a.jsx)("div",{className:"jsx-62724fba150252e0 "+(o()("mb-3 text-xl font-bold",{"!mb-0":t||r})||""),children:(0,a.jsx)(m.Z,{id:"article.related_articles"})}),(0,a.jsx)(g.h,{articles:i,useExpandedFormat:t||r,isRelatedArticles:!0}),(0,a.jsx)(l(),{id:"62724fba150252e0",children:".related_articles section a{color:initial}"})]})}function y(e){let{articleHeadings:t,isRenderedInArticle:r}=e,[i,n]=(0,p.useState)(t.map(e=>({link:"#".concat(e.idAttribute),text:"",type:e.type}))),s=i.map(e=>e.link),[c,d]=(0,p.useState)(!r),x=(0,p.useRef)(null),{activeHeader:u}=function(e){let[t,r]=(0,p.useState)(""),[a]=(0,p.useState)(new Set),[i,l]=(0,p.useState)(!1),n=(0,p.useRef)(0);return(0,p.useEffect)(()=>{let s=new IntersectionObserver(s=>{s.forEach(s=>{let c="#".concat(s.target.getAttribute("id"));s.intersectionRatio>0?a.add(c):a.delete(c);let o=e.find(e=>a.has(e));if(o&&(r(o),n.current=window.scrollY,l(!1)),n.current-window.scrollY>0&&c===t&&!i){let a=e[e.indexOf(t)-1];a&&(r(a),l(!0))}})},{rootMargin:"0% 0% -50% 0%"});document.querySelectorAll("article h1, article h2").forEach(e=>{s.observe(e)})},[t,e,i,a]),{activeHeader:t}}(s);(0,p.useEffect)(()=>{n(t.map(e=>{var t;return{link:"#".concat(e.idAttribute),text:(t=e.text,new DOMParser().parseFromString(t,"text/html").body.textContent),type:e.type}}))},[t,n]),(0,p.useEffect)(()=>{var e,t;if(r||!(null===(e=x.current)||void 0===e?void 0:e.scrollTo))return;let a=document.getElementById(u),i=(null==a?void 0:a.offsetTop)?(null==a?void 0:a.offsetTop)-13:0;null===(t=x.current)||void 0===t||t.scrollTo({behavior:"auto",top:i})},[u,r]);let f=(0,a.jsx)("svg",{className:"ml-2 mr-4 mt-3 transition-transform",transform:c?"rotate(180)":"",width:"16",height:"16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.93353 5.93451C4.24595 5.62209 4.75248 5.62209 5.0649 5.93451L7.99922 8.86882L10.9335 5.93451C11.246 5.62209 11.7525 5.62209 12.0649 5.93451C12.3773 6.24693 12.3773 6.75346 12.0649 7.06588L8.5649 10.5659C8.25249 10.8783 7.74595 10.8783 7.43353 10.5659L3.93353 7.06588C3.62111 6.75346 3.62111 6.24693 3.93353 5.93451Z",fill:"currentColor"})});return(0,a.jsxs)("div",{ref:x,className:"jsx-27f84a20f81f6ce9 "+(o()("table-of-contents max-h-[calc(100vh-96px)] overflow-y-auto rounded-2xl text-body-primary-color hover:text-primary max-lg:border max-lg:border-solid max-lg:border-body-border max-lg:shadow-solid-1")||""),children:[(0,a.jsxs)("div",{"data-testid":"toc-dropdown",onClick:()=>{d(!c)},className:"jsx-27f84a20f81f6ce9 "+(o()("hidden cursor-pointer justify-between border-b max-lg:flex max-lg:flex-row max-lg:border-x-0 max-lg:border-t-0 max-lg:border-solid max-lg:border-b-body-border",{"border-b-0":!c})||""),children:[(0,a.jsx)("div",{className:"jsx-27f84a20f81f6ce9 my-2 max-lg:pl-4",children:(0,a.jsx)(m.Z,{id:"article.table_of_contents"})}),(0,a.jsx)("div",{className:"jsx-27f84a20f81f6ce9 ",children:f})]}),(0,a.jsx)("div",{"data-testid":"toc-body",className:"jsx-27f84a20f81f6ce9 "+(o()({hidden:!c},"my-2")||""),children:i.map((e,t)=>{let{link:r,text:i,type:l}=e;return(0,a.jsx)("section",{"data-testid":"toc-section-".concat(t),className:"jsx-27f84a20f81f6ce9 "+(o()("flex border-y-0 border-e-0 border-s-2 border-solid py-1.5 max-lg:border-none",{"border-body-toc-active-border":""===u&&0===t||u===r,"border-body-toc-inactive-border":""!==u&&0!==t&&u!==r,"px-4":"heading"===l,"px-7":"heading"!==l})||""),children:(0,a.jsx)("a",{id:r,href:r,"data-testid":"toc-link-".concat(t),className:"jsx-27f84a20f81f6ce9 "+"w-full no-underline hover:text-body-primary-color max-lg:inline-block max-lg:text-body-primary-color max-lg:hover:text-primary lg:text-base ".concat(""===u&&0===t||u===r?"font-toc-active text-body-primary-color":"text-body-toc-inactive-color"),children:i})},t)})}),(0,a.jsx)(l(),{id:"27f84a20f81f6ce9",children:".table-of-contents::-webkit-scrollbar{width:8px}.table-of-contents::-webkit-scrollbar-thumb{background-color:#f2f2f2;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px}"})]})}var _=r(2466);function w(e){let t,{articleContent:r,articleHasToC:i,articleHeadings:s,isMessengerIframe:c,isMobileSdk:d,isSheet:m,relatedArticles:x,renderCommunityBanner:u,renderTitle:p}=e,{locale:g}=(0,h.Z)();t=r.synced?(0,a.jsx)(_.s,{html:r.blocks[0].content,element:"div"}):new n.ReactView().render(r.blocks);let w=r.blocks.filter(e=>"attachmentList"===e.type).map((e,t)=>(0,a.jsx)(b,{attachments:e},t)),N=x&&x.length>0&&!d,k=u&&"en"===g;return(0,a.jsx)("div",{className:o()({"pt-6":m}),children:(0,a.jsxs)("div",{className:"article intercom-force-break",children:[(0,a.jsx)(f,{author:r.author,description:r.description,lastUpdated:r.lastUpdated,renderTitle:p,title:r.title,isMessengerIframe:c}),(0,a.jsxs)("div",{className:"jsx-ef86202475c6562f "+(o()({"flex-col":i})||""),children:[i&&!d&&(0,a.jsx)("div",{className:"jsx-ef86202475c6562f "+(o()("mb-7 ml-0 text-md max-messenger:mb-6 lg:hidden",{"max-messenger:text-base":c})||""),children:(0,a.jsx)(y,{articleHeadings:s,isRenderedInArticle:!0})}),(0,a.jsx)("div",{className:"jsx-ef86202475c6562f article_body",children:(0,a.jsxs)("article",{className:"jsx-ef86202475c6562f "+(o()({"zendesk-article overflow-scroll whitespace-normal":r.synced})||""),children:[t,w,k&&(0,a.jsx)(j,{}),N&&(0,a.jsx)(v,{relatedArticles:x,isMessengerIframe:c,isSheet:m,renderDivider:!k})]})}),(0,a.jsx)(l(),{id:"ef86202475c6562f",children:".article_body a{color:var(--primary-color)}article a.intercom-h2b-button{background-color:var(--primary-color);border:0}.zendesk-article table{overflow-x:scroll!important;display:block!important;height:auto!important}.intercom-interblocks-unordered-nested-list ul,.intercom-interblocks-ordered-nested-list ol{margin-top:16px;margin-bottom:16px}.intercom-interblocks-unordered-nested-list ul .intercom-interblocks-unordered-nested-list ul,.intercom-interblocks-unordered-nested-list ul .intercom-interblocks-ordered-nested-list ol,.intercom-interblocks-ordered-nested-list ol .intercom-interblocks-ordered-nested-list ol,.intercom-interblocks-ordered-nested-list ol .intercom-interblocks-unordered-nested-list ul{margin-top:0;margin-bottom:0}.intercom-interblocks-image a:focus{outline-offset:3px}"})]})]})})}function N(e){let{id:t,onClick:r,reaction:i,selected:l}=e,n=(0,h.Z)();return(0,a.jsx)("button",{className:o()("intercom-reaction",{"intercom-reaction-selected":l}),"aria-label":n.formatMessage({id:"reaction_picker.reaction.".concat(t,".aria_label")}),tabIndex:0,"data-reaction-text":t,"aria-pressed":l,onClick:r,children:(0,a.jsx)("span",{title:n.formatMessage({id:"reaction_picker.reaction.".concat(t,".title")}),children:i})})}var k=r(9596),I=r(9632),C=r(1635);let E=[{emoji:"\uD83D\uDE1E",id:"disappointed",index:2},{emoji:"\uD83D\uDE10",id:"neutral",index:1},{emoji:"\uD83D\uDE03",id:"smiley",index:0}];function S(e){let{articleContentId:t,articleId:r,helpCenterId:i,selectedReaction:l}=e,{handleArticleReaction:n,selectedReactionIndex:s}=function(e){let{articleContentId:t,articleId:r,helpCenterId:a,selectedReaction:i}=e,[l,n]=(0,p.useState)(null!=i?i:null),s=function(){let e=(0,C.Z)(),{articleChannel:t,articleSource:r}=(0,p.useContext)(k.C);return(a,i,l,n)=>{let s=e();null==s||s.createArticleReaction(a,i,l,n,t,r)}}(),c=(0,I.I8)();return{handleArticleReaction:e=>{s(r,e,t,a),c({action:"clicked",metadata:{article_content_id:t,article_id:r,object:"reaction",place:window.messengerSheetUser?"messenger_sheet":"article",reaction:e},name:"educate-reaction"}),n(e)},selectedReactionIndex:l}}({articleContentId:t,articleId:r,helpCenterId:i,selectedReaction:l});return(0,a.jsxs)("div",{className:o()("intercom-reaction-picker -mb-4 -ml-4 -mr-4 mt-6 rounded-card sm:-mb-2 sm:-ml-1 sm:-mr-1 sm:mt-8",{"intercom-reaction-picker-reaction-selected":null!=s}),children:[(0,a.jsx)("div",{className:"intercom-reaction-prompt",children:(0,a.jsx)(m.Z,{id:"reaction_picker.did_this_answer_your_question"})}),E.map(e=>{let{emoji:t,id:r,index:i}=e;return(0,a.jsx)(N,{id:r,reaction:t,selected:s===i,onClick:()=>n(i)},r)})]})}var A=r(4909),D=r(9705),M=r(3950),Z=r(9245),R=r.n(Z),T=!0;function L(e){let{app:t,articleContent:r,breadcrumbs:i,helpCenterSite:n,localeLinks:s,requestContext:c,selectedReaction:d,showReactions:m,theme:x,user:u}=e,f=(0,h.Z)(),b=(0,I.jS)(c.type),{articleSource:j}=c,g=c.type===M.x.HELP_CENTER?"help_center":"messenger";!function(e,t,r,a,i){let l=(0,I.I8)();(0,p.useEffect)(()=>{l({action:"viewed",metadata:{article:{content_id:e.id,id:e.articleId,referer:document.referrer,target_user_type:e.targetUserType,url:window.location.href,value:e.title},article_channel:r,article_id:e.articleId,article_source:i,help_center_id:a,object:"article",place:t},name:"Viewed Article"})},[l,e,t,r,i,a])}(r,b,g,n.helpCenterId,c.articleSource);let v=c.type===M.x.MESSENGER,_=c.type===M.x.CANVASKIT_SHEET,N=c.type===M.x.MESSENGER_MOBILE_SDK,C=!R()(r.collectionId),E=r.blocks.filter(e=>("heading"===e.type||"subheading"===e.type)&&!!e.text.trim()),Z=r.showTableOfContents&&E.length>0;return(0,p.useEffect)(()=>{c.headerless&&N&&(window.alexandriaArticleContentId=r.id)}),(0,a.jsx)(k.C.Provider,{value:{articleChannel:g,articleSource:j,object:"article",place:b},children:(0,a.jsx)(D.Z,{app:t,articleId:r.articleId,description:r.description,headerLite:!0,showSearchBar:!0,helpCenterSite:n,localeLinks:s,requestContext:c,theme:x,title:"".concat(r.title," | ").concat(x.siteName),user:u,showContentOnly:!C,allowIndexing:C,children:(0,a.jsx)("section",{"data-testid":"article-section",className:"section section__article",children:(0,a.jsxs)("div",{className:o()({"flex-row-reverse justify-between":Z,"justify-center":!Z},"flex"),children:[Z&&!v&&!N&&!_&&(0,a.jsxs)("div",{className:"jsx-a49d9ef8a9865a27 "+(o()("w-61 sticky top-8 ml-7 max-w-61 self-start max-lg:hidden",{"mt-16":C})||""),children:[(0,a.jsx)(y,{articleHeadings:E,isRenderedInArticle:!1}),(0,a.jsx)(l(),{id:"a49d9ef8a9865a27",children:".table_of_contents.jsx-a49d9ef8a9865a27{max-width:260px;min-width:260px}"})]}),(0,a.jsxs)("div",{className:"relative z-3 w-full lg:max-w-160 ".concat(C?"":"mt-2"),children:[C&&c.type!==M.x.CANVASKIT_SHEET&&!c.headerless&&(0,a.jsx)("div",{className:"flex pb-6 max-md:pb-2 lg:max-w-160",children:(0,a.jsx)(A.Z,{breadcrumbs:i,homeTitle:f.formatMessage({id:"breadcrumb.all_collections"}),rootUrl:c.rootUrl,title:r.title})}),(0,a.jsx)(w,{articleContent:r,relatedArticles:r.relatedArticles,renderCommunityBanner:"tx2p130c"===t.id,renderTitle:!v,articleHasToC:Z,articleHeadings:E,isMessengerIframe:v,isSheet:_,isMobileSdk:N}),!v&&m&&(0,a.jsx)(S,{articleContentId:r.id,articleId:r.articleId,selectedReaction:d,helpCenterId:n.helpCenterId})]})]})})})})}}}]);