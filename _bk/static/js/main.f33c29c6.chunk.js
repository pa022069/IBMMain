(this.webpackJsonpwww=this.webpackJsonpwww||[]).push([[0],{42:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(1),o=n(12),c=n(7),s=n.n(c),r=!0;s()(".hamburger").click((function(){r&&(r=!1,s()(this).toggleClass("hamburger--active"),s()(".menu").fadeToggle((function(){r=!0})))}));var l=n(8),m=n(9),p=n(11),u=n(10),d=Object(a.createContext)({Last_name:"",First_name:"",Phone:"",Company:"",Department:"",Job_title:"",Email:"",Company_size:"",Email_verification:!1,Phone_verification:!1,data:"",swipeItem:[],videoIdx:0,videoItem:[],changeVideo:function(){},onLastName:function(){},onFirstName:function(){},onPhone:function(){},onCompany:function(){},onDept:function(){},onJob:function(){},onEmail:function(){},onScale:function(){},valid:function(){},download:function(){},ChangeEmail:function(){},ChangePhone:function(){}}),h=d.Provider,f=d.Consumer,j=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={select:[{value:"0~500",text:"500\u4ee5\u4e0b"},{value:"501~1000",text:"501-1000 \u4eba"},{value:"1001",text:"1001 \u4eba\u4ee5\u4e0a"}]},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){s()(".form").fadeIn()}},{key:"componentWillUnmount",value:function(){s()(".form").fadeOut()}},{key:"render",value:function(){var e=this.state.select;return Object(i.jsx)(f,{children:function(t){return Object(i.jsxs)(a.Fragment,{children:[Object(i.jsxs)("a",{className:"form__close",onClick:function(){t.openForm("")},children:[Object(i.jsx)("span",{}),Object(i.jsx)("span",{})]}),Object(i.jsx)("div",{className:"form__box",children:Object(i.jsxs)("form",{children:[Object(i.jsxs)("div",{className:"form__info",children:[Object(i.jsx)("h2",{className:"title",children:"\u586b\u5beb\u8868\u55ae"}),Object(i.jsx)("p",{className:"text",children:"\u53d6\u5f97 H.I.T \u9867\u554f\u795e\u52a9\u653b\u89e3\u7b54\u89e3\u9396\u5b8c\u6574\u5f71\u7247\u8207 IBM \u95dc\u9375\u8da8\u52e2\u5831\u544a"})]}),Object(i.jsxs)("div",{className:"form__group half",children:[Object(i.jsx)("input",{className:"input",type:"text",placeholder:"\u59d3\u2f52",value:t.Last_name,onChange:t.onLastName}),Object(i.jsx)("input",{className:"input",type:"text",placeholder:"\u540d\u5b57",value:t.First_name,onChange:t.onFirstName})]}),Object(i.jsx)("div",{className:"form__group",children:Object(i.jsx)("input",{className:"input",type:"tel",placeholder:"\u96fb\u8a71\u865f\u78bc",maxLength:"12",value:t.Phone,onChange:t.onPhone})}),Object(i.jsx)("div",{className:"form__group",children:Object(i.jsx)("input",{className:"input",type:"text",placeholder:"\u516c\u53f8",value:t.Company,onChange:t.onCompany})}),Object(i.jsx)("div",{className:"form__group",children:Object(i.jsx)("input",{className:"input",type:"text",placeholder:"\u90e8\u2fa8",value:t.Department,onChange:t.onDept})}),Object(i.jsx)("div",{className:"form__group",children:Object(i.jsx)("input",{className:"input",type:"text",placeholder:"\u8077\u7a31",value:t.Job_title,onChange:t.onJob})}),Object(i.jsx)("div",{className:"form__group",children:Object(i.jsx)("input",{className:"input",type:"email",placeholder:"\u96fb\u2f26\u4fe1\u7bb1",value:t.Email,onChange:t.onEmail})}),Object(i.jsx)("div",{className:"form__group",children:Object(i.jsxs)("select",{name:"group",className:"select",id:"group",value:t.Company_size,onChange:t.onScale,children:[Object(i.jsx)("option",{value:"0",disabled:!0,children:"\u516c\u53f8\u898f\u6a21"}),e.map((function(e){return Object(i.jsx)("option",{value:e.value,children:e.text},e.text)}))]})}),Object(i.jsxs)("div",{className:"form__group check",children:[Object(i.jsx)("h3",{children:"IBM \u5f97\u4ee5\u4f7f\u2f64\u6211\u7684\u806f\u7d61\u2f08\u8cc7\u6599\uff0c\u4ee5\u8b93\u6211\u5f97\u77e5\u7522\u54c1\u3001\u670d\u52d9\u53ca\u4f9b\u61c9\u2f45\u6848\u7684\u6700\u65b0\u8cc7\u8a0a"}),Object(i.jsxs)("div",{className:"box",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{type:"checkbox",id:"email",name:"email",value:"email",onChange:t.ChangeEmail,checked:t.Email_verification}),Object(i.jsx)("label",{htmlFor:"email",children:"\u900f\u904e\u96fb\u2f26\u90f5\u4ef6"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{type:"checkbox",id:"phone",name:"phone",value:"phone",onChange:t.ChangePhone,checked:t.Phone_verification}),Object(i.jsx)("label",{htmlFor:"phone",children:"\u900f\u904e\u96fb\u8a71"})]})]})]}),Object(i.jsx)("div",{className:"form__group",children:Object(i.jsx)("p",{children:"\u60a8\u53ef\u4ee5\u96a8\u6642\u900f\u904e\u50b3\u9001\u96fb\u2f26\u90f5\u4ef6\u2f84 netsupp@us.ibm.com \u4f86\u53d6\u6d88\u63a5\u6536\u6700\u65b0\u8a0a\u606f\u3002\u60a8\u4e5f\u53ef\u4ee5\u900f\u904e\u6309\u2f00\u4e0b\u6bcf\u5c01\u6b64\u985e\u96fb\u2f26\u90f5\u4ef6\u4e2d\u7684\u53d6\u6d88\u8a02\u95b1\u93c8\u7d50\u4f86\u53d6\u6d88\u8a02\u95b1\u63a5\u6536\u2f8f\u92b7\u96fb\u2f26\u90f5\u4ef6\u3002\u6709\u95dc\u6211\u5011\u7684\u8655\u7406\u4f5c\u696d\u8a73\u7d30\u8cc7\u8a0a\u53ef\u4ee5\u5728 IBM \u96b1\u79c1\u6b0a\u8072\u660e\u3002\u63d0\u4ea4\u6b64\u8868\u55ae\u6642\uff0c\u5373\u8868\u2f70\u6211\u78ba\u8a8d\u6211\u5df2\u95b1\u8b80\u4e26\u77ad\u89e3 IBM \u96b1\u79c1\u6b0a\u8072\u660e\u3002"})}),Object(i.jsx)("div",{className:"form__group",children:Object(i.jsx)("a",{className:"submit",onClick:t.valid,children:"\u586b\u5beb\u5b8c\u7562"})})]})})]})}})}}]),n}(a.Component),b=n(49),g=n(44),v=n(45),w=n(46),x=n(47),_=n(50),O=n(48);n(24),n(25),n(26),n(27);b.a.use([g.a,v.a,w.a,x.a]);var y=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return Object(o.createPortal)(Object(i.jsx)(f,{children:function(e){return Object(i.jsx)(_.a,{spaceBetween:30,slidesPerView:1,navigation:!0,loop:!0,breakpoints:{200:{slidesPerView:1},967:{slidesPerView:3}},children:e.videoItem[e.videoIdx].item.map((function(e,t){return Object(i.jsxs)(O.a,{children:[Object(i.jsx)("div",{className:"product__img",children:Object(i.jsx)("div",{style:{backgroundImage:"url(".concat(e.image,")")}})}),Object(i.jsx)("p",{className:"product__info",children:e.info}),Object(i.jsx)("a",{className:"product__link",href:e.link,rel:"noreferrer",target:"_blank",children:"\u4e86\u89e3\u66f4\u591a"})]},t)}))})}}),document.getElementById("swiper"))}}]),n}(a.Component),I=n(16),k=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={finish:!0},e._onReady=function(e){console.log("Ready!")},e._onPlay=function(t){e.state.finish&&(e.setState({finish:!1}),setTimeout((function(){t.target.pauseVideo(),s()(".video__popup").fadeIn()}),2e4))},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){s()(".video__popup").hide()}},{key:"render",value:function(){var e=this,t={playerVars:{autoplay:0,controls:1,playsinline:1}};return Object(o.createPortal)(Object(i.jsx)(f,{children:function(n){return Object(i.jsxs)(a.Fragment,{children:[Object(i.jsxs)("div",{className:"video__show",children:[Object(i.jsxs)("div",{className:"video__popup",children:[Object(i.jsx)("p",{children:"\u7559\u4e0b\u8cc7\u8a0a\u770b\u9867\u554f\u5982\u4f55\u89e3\u7b54"}),Object(i.jsx)("a",{onClick:function(){return n.openForm("V")},children:"\u7559\u8cc7\u8a0a\u770b\u5b8c\u6574\u5f71\u7247"})]}),Object(i.jsx)(I.a,{videoId:n.videoItem[n.videoIdx].id,opts:t,onPlay:e._onPlay,onReady:e._onReady})]}),Object(i.jsx)("div",{className:"video__nav",children:Object(i.jsx)("ul",{children:n.videoItem.map((function(e,t){return Object(i.jsx)("li",{className:e.state,onClick:function(){n.changeVideo(t)},style:{backgroundImage:"url(https://img.youtube.com/vi/".concat(e.id,"/default.jpg)")},children:Object(i.jsx)("div",{children:Object(i.jsx)("p",{children:e.title})})},t)}))})})]})}}),document.getElementById("youtube"))}}]),n}(a.Component),C=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).downloadBtn=function(e){e.preventDefault()},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(o.createPortal)(Object(i.jsx)(f,{children:function(e){return Object(i.jsxs)(a.Fragment,{children:[Object(i.jsx)("h2",{className:"info__title",children:e.videoItem[e.videoIdx].fileTitle}),Object(i.jsx)("p",{className:"info__text",children:e.videoItem[e.videoIdx].fileText}),Object(i.jsx)("a",{className:"info__link",onClick:function(){e.openForm("P")},children:"\u4e0b\u8f09\u95dc\u9375\u5831\u544a"})]})}}),document.getElementById("download"))}}]),n}(a.Component),E=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return Object(o.createPortal)(Object(i.jsx)(f,{children:function(e){return Object(i.jsxs)(a.Fragment,{children:[Object(i.jsxs)("h2",{className:"info__title",children:["\u79d1\u6280\u6700 H.I.T. ",Object(i.jsx)("br",{className:"break"}),"\u6253\u7834\u4f60\u7684\u6578\u4f4d\u8f49\u578b\u8ff7\u601d"]}),Object(i.jsx)("h3",{className:"info__video",children:e.videoItem[e.videoIdx].title}),Object(i.jsx)("p",{className:"info__text",children:e.videoItem[e.videoIdx].text})]})}}),document.getElementById("video"))}}]),n}(a.Component),P=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={state:!1,download:0,Last_name:"",First_name:"",Phone:"",Company:"",Department:"",Job_title:"",Email:"",Company_size:0,Email_verification:!0,Phone_verification:!0,data:"",type:"",swipeItem:[{image:"./images/product/1.png",info:"\u6df7\u5408\u96f2\u53ef\u64f4\u5145\u4f3a\u670d\u5668- IBM Power Systems",link:"/#"},{image:"./images/product/1.png",info:"\u6df7\u5408\u96f2\u53ef\u64f4\u5145\u4f3a\u670d\u5668- IBM Power Systems",link:"/#"},{image:"./images/product/1.png",info:"\u6df7\u5408\u96f2\u53ef\u64f4\u5145\u4f3a\u670d\u5668- IBM Power Systems",link:"/#"},{image:"./images/product/1.png",info:"\u6df7\u5408\u96f2\u53ef\u64f4\u5145\u4f3a\u670d\u5668- IBM Power Systems",link:"/#"}],videoIdx:0,videoItem:[{id:"qlcHH6wMaHU",state:"new ",title:"AI \u6c3e\u6feb\u5230\u807d\u4e86\u5c31\u60f3\u5410\uff5c\u6c92\u6709 IA \u5c31\u5225\u60f3\u8457 AI",text:"\u842c\u7269\u7686 AI\uff0c\u516c\u53f8\u8001\u95c6\u3001\u4e3b\u7ba1\u4e5f\u5c0d\u4eba\u5de5\u667a\u6167\u4e00\u982d\u71b1\u3002\u96e3\u9053 AI \u8aaa\u6709\u5c31\u80fd\u6709\uff0c\u800c\u4e14\u6709\u4e86 AI \u5c31\u4e00\u5207\u597d\u68d2\u68d2\uff1f\u200bH.I.T. \u771f\u5fc3\u8a71\uff0c\u544a\u8a34\u4f60\u6295\u8cc7 AI \u524d\u8981\u8a72\u505a\u7684\u6e96\u5099\u6709\u54ea\u4e9b\u3002",item:[{image:"./images/product/1-1.png",info:"AI \u6642\u4ee3\u5c08\u7528\u8655\u7406\u5668\u67b6\u69cb- IBM Power System AC922",link:"https://www.ibm.com/tw-zh/products/power-systems-ac922"},{image:"./images/product/1-2.png",info:"AI \u6642\u4ee3\u5c08\u7528\u8655\u7406\u5668\u67b6\u69cb- IBM Power System IC922",link:"https://www.ibm.com/tw-zh/products/power-system-ic922"},{image:"./images/product/1-3.png",info:"\u652f\u63f4AI\u61c9\u7528\u7684\u9ad8\u6548\u80fd\u5132\u5b58\u67b6\u69cb- IBM Spectrum Scale",link:"https://www.ibm.com/tw-zh/products/spectrum-scale"},{image:"./images/product/1-4.png",info:"\u652f\u63f4AI\u61c9\u7528\u7684\u9ad8\u6548\u80fd\u5132\u5b58\u67b6\u69cb- IBM ESS3000",link:"https://www.ibm.com/tw-zh/products/elastic-storage-system"}],fileTitle:"\u9081\u5411\u4f01\u696d\u7d1a\u4eba\u5de5\u667a\u6167",fileText:"\u505a\u5230\u5584\u7528\u7d44\u7e54\u8cc7\u6599\uff0c\u5728\u4f01\u696d\u4e2d\u767c\u63ee\u8de8\u90e8\u9580\u529f\u6548\uff0c\u6839\u64da\u6df1\u5ea6\u8cc7\u6599\u6d1e\u5bdf\u5236\u5b9a\u66f4\u660e\u667a\u7684\u6c7a\u7b56\u3002",fileLink:"https://www.digitimes.com.tw/seminar/IBM_20201116/pdf/%E9%82%81%E5%90%91%E4%BC%81%E6%A5%AD%E7%B4%9A%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7.pdf"},{id:"",state:"comingsoon",title:"\u517c\u9867\u65b0\u820a\u8a2d\u5099\uff0c\u4f01\u696d\u4e0a\u96f2\u4e0d\u518d\u64d4\u5fc3\u82b1\u9322\u8cb7\u5230\u721b\u6771\u897f",text:"\u6b63\u601d\u8003\u8a72\u5982\u4f55\u70ba\u516c\u53f8\u63a1\u8cfc\u96f2\u7aef\u8a2d\u5099\u55ce\uff1f\u60f3\u77e5\u9053\u8a72\u5982\u4f55\u8cb7\u624d\u80fd\u8b93\u516c\u6709\u96f2\u3001\u79c1\u6709\u96f2\u9593\u4e92\u901a\uff1fH.I.T. \u5206\u4eab\u5e74\u672b\u8cfc\u7269\u5b63\uff0c\u6559\u4f60\u8a72\u5982\u4f55\u6b63\u78ba\u82b1\u9322\u3001\u8cb7\u5c0d\u6df7\u5408\u96f2\u7d44\u5408\u65b9\u6848\u3002",item:[{image:"./images/product/2-1.png",info:"\u6df7\u5408\u96f2\u53ef\u64f4\u5145\u4f3a\u670d\u5668- IBM Power Systems",link:"https://www.ibm.com/tw-zh/it-infrastructure/power"},{image:"./images/product/2-2.png",info:"\u6df7\u5408\u96f2\u53ef\u64f4\u5145\u4f3a\u670d\u5668- IBM LinuxONE",link:"https://www.ibm.com/tw-zh/it-infrastructure/linuxone"},{image:"./images/product/2-3.png",info:"\u6df7\u5408\u96f2\u5132\u5b58\u67b6\u69cb- FlashSystem5000/7000/9000 \u7cfb\u5217",link:"https://www.ibm.com/tw-zh/it-infrastructure/storage/flash"},{image:"./images/product/2-4.png",info:"\u6df7\u5408\u96f2\u5132\u5b58\u67b6\u69cb- Spectrum Virtualize \u5132\u5b58\u8edf\u9ad4",link:"https://www.ibm.com/tw-zh/products/spectrum-virtualize-for-public-cloud"}],fileTitle:"\u4f01\u696d\u6df7\u5408\u96f2\u7aef\u7b56\u7565",fileText:"\u8b93\u60a8\u7684\u57fa\u790e\u67b6\u69cb\u5728\u4fdd\u6301\u6c38\u7e8c\u904b\u884c\u4e0b\uff0c\u4ea6\u53ef\u5f48\u6027\u64f4\u5145\u3001\u654f\u6377\u53cd\u61c9\u4ee5\u53ca\u7b26\u5408\u6210\u672c\u6548\u76ca\uff0c\u4e26\u4e14\u78ba\u4fdd\u8cc7\u6599\u5b89\u5168\u3002",fileLink:"https://www.digitimes.com.tw/seminar/IBM_20201116/pdf/%E4%BC%81%E6%A5%AD%E6%B7%B7%E5%90%88%E9%9B%B2%E7%AB%AF%E7%AD%96%E7%95%A5%E4%B9%8B%E9%97%9C%E9%8D%B5.pdf"},{id:"",state:"comingsoon",title:"\u8d85\u5168\u9762\u5132\u5b58\u67b6\u69cb\u5168\u5bb6\u6876\uff0c\u4e00\u6b21\u6eff\u8db3\u4f60\u6240\u6709\u9858\u671b\uff01",text:"\u63a1\u8cfc\u5c6c\u65bc\u516c\u53f8\u57fa\u77f3\u7684\u5132\u5b58\u8a2d\u5099\uff0c\u537b\u7e3d\u662f\u9810\u7b97\u5c11\u3001\u597d\u7169\u60f1\uff1fH.I.T \u544a\u8a34\u4f60\u7269\u8d85\u6240\u503c\u3001\u8d85\u5168\u9762\u7684 IBM \u5132\u5b58\u67b6\u69cb\u7522\u54c1\u7dda\uff0c\u63d0\u4f9b\u5404\u7a2e\u9700\u6c42\u6240\u9700\u7684\u9ad8\u6548\u76ca\u6578\u64da\u5206\u6790\u5132\u5b58\u67b6\u69cb\uff01\u200b",item:[{image:"./images/product/3-1.png",info:"\u6df7\u5408\u5f0f\u5feb\u9583\u8a18\u61b6\u9ad4\u5132\u5b58",link:"https://www.ibm.com/tw-zh/it-infrastructure/storage/flash"},{image:"./images/product/3-2.png",info:"SAN \u7cfb\u5217\u5132\u5b58",link:"https://www.ibm.com/tw-zh/it-infrastructure/storage/san"},{image:"./images/product/3-3.png",info:"Spectrum Virtualize \u5132\u5b58\u8edf\u9ad4",link:"https://www.ibm.com/tw-zh/products/spectrum-virtualize-for-public-cloud"}],fileTitle:"IBM \u5132\u5b58\u7522\u54c1\u5168\u5bb6\u798f",fileText:"\u6eff\u8db3\u6301\u7e8c\u6210\u9577\u7684\u696d\u52d9\u9700\u6c42\uff0c\u5354\u52a9\u4f01\u696d\u63d0\u9ad8\u50b3\u8f38\uff0c\u70ba\u61c9\u7528\u7a0b\u5f0f\u7684\u6301\u7e8c\u589e\u9577\u5275\u9020\u7a7a\u9593\u4e26\u5f37\u5316\u8cc7\u6599\u50b3\u8f38\u6548\u80fd\uff01",fileLink:"https://app.box.com/file/731603147411?s=fv2iej2gakxn5cmy37zo64hrmlz5xxj6"},{id:"",state:"comingsoon",title:"\u5354\u5c0b\u597d\u7528\u7684\u624b\u6a5f\u5099\u4efd\u8edf\u9ad4\uff01\u4e0d\u6015\u8cc7\u6599\u7a7a\uff0c\u53ea\u6015\u7a7a\u5099\u63f4",text:"\u73fe\u4ee3\u4eba\u7684\u624b\u6a5f\u662f\u5168\u4e16\u754c\uff0c\u800c\u4f01\u696d\u7684\u5168\u4e16\u754c\u662f\u8cc7\u6599\uff0c\u60f3\u628a\u8cc7\u6599\u4fdd\u8b77\u597d\uff0cH.I.T. \u50b3\u6388\u5099\u63f4\u79d8\u8a23\uff0c\u6559\u4f60\u505a\u597d\u65e5\u5e38\u5099\u4efd\u5de5\u4f5c\u3002",item:[{image:"./images/product/4-1.png",info:"\u8cc7\u6599\u5099\u4efd- IBM Spectrum Protect",link:"https://www.ibm.com/tw-zh/products/data-protection-and-recovery"},{image:"./images/product/4-2.png",info:"\u8cc7\u6599\u6b78\u6a94- IBM Spectrum Protect Plus",link:"https://www.ibm.com/tw-zh/marketplace/ibm-spectrum-protect-plus"},{image:"./images/product/4-3.png",info:"\u96e2\u7dda\u5099\u4efd-IBM Storage \u78c1\u5e36\u6a5f",link:"https://www.ibm.com/tw-zh/it-infrastructure/storage/tape/drives"}],fileTitle:"\u4f01\u696d\u6c7a\u52dd\u9ede\u7684\u8cc7\u6599\u8207\u5132\u5b58\u7b56\u7565",fileText:"\u53ef\u4ee5\u5728\u78ba\u4fdd\u696d\u52d9\u6b63\u5e38\u904b\u4f5c\u4e0b\uff0c\u70ba IT \u57fa\u790e\u67b6\u69cb\u7684\u6bcf\u500b\u5c64\u9762\u5efa\u7acb\u5b89\u5168\u4fdd\u8b77\u3002",fileLink:"https://app.box.com/file/731615185648?s=kbtram7itxcu3hmzvg4zebmgabb3yig8"},{id:"",state:"comingsoon",title:"\u4ed9\u5973\u4e0b\u51e1\u4f86\u89e3\u60d1\uff0cIT \u4eba\u7684\u4e09\u5927\u4f01\u696d ERP \u554f\u984c",text:"\u73fe\u4ee3\u4eba\u7684\u624b\u6a5f\u662f\u5168\u4e16\u754c\uff0c\u800c\u4f01\u696d\u7684\u5168\u4e16\u754c\u662f\u8cc7\u6599\uff0c\u60f3\u628a\u8cc7\u6599\u4fdd\u8b77\u597d\uff0cH.I.T. \u50b3\u6388\u5099\u63f4\u79d8\u8a23\uff0c\u6559\u4f60\u505a\u597d\u65e5\u5e38\u5099\u4efd\u5de5\u4f5c\u3002",item:[{image:"./images/product/5-1.png",info:"\u8cc7\u6599\u5eab\u4f3a\u670d\u5668-SAP HANA on Power \u4f3a\u670d\u5668",link:"https://www.ibm.com/tw-zh/it-infrastructure/power/sap-hana"},{image:"./images/product/5-2.png",info:"\u5132\u5b58\u67b6\u69cb-FlashSystem5000/7000/9000\u7cfb\u5217",link:"https://www.ibm.com/tw-zh/it-infrastructure/storage/flash"},{image:"./images/product/5-3.png",info:"\u8cc7\u6599\u5099\u4efd-IBM Storage \u78c1\u5e36\u6a5f",link:"https://www.ibm.com/tw-zh/it-infrastructure/storage/tape/drives"}],fileTitle:"\u5229\u7528 IBM Powers \u9818\u822a\u4f01\u696d\u8f49\u578b",fileText:"\u5982\u4f55\u90e8\u7f72\u767c\u63ee\u65b0\u4e00\u4ee3ERP-SAPHANA\u7684\u5168\u90e8\u5be6\u529b\uff0c\u4ee5\u667a\u80fd\u81ea\u52d5\u5316\u5e36\u4f86\u4f01\u696d\u6210\u672c\u6548\u76ca\uff0c\u7372\u5f97\u5373\u6642\u6d1e\u5bdf\u5354\u52a9\u6c7a\u7b56\uff01",fileLink:"https://app.box.com/file/731612395109"}]},e.changeVideo=function(t){""!==e.state.videoItem[t].id&&e.setState({videoIdx:t})},e.openForm=function(t){e.setState({state:!e.state.state,type:t})},e.onLastName=function(t){e.setState({Last_name:t.target.value})},e.onFirstName=function(t){e.setState({First_name:t.target.value})},e.onPhone=function(t){e.setState({Phone:t.target.value})},e.onCompany=function(t){e.setState({Company:t.target.value})},e.onDept=function(t){e.setState({Department:t.target.value})},e.onJob=function(t){e.setState({Job_title:t.target.value})},e.onEmail=function(t){e.setState({Email:t.target.value})},e.onScale=function(t){e.setState({Company_size:t.target.value})},e.ChangeEmail=function(){e.setState({Email_verification:!e.state.Email_verification})},e.ChangePhone=function(){e.setState({Phone_verification:!e.state.Phone_verification})},e.valid=function(){var t=e.state,n=t.Last_name,i=t.First_name,a=t.Phone,o=t.Company,c=t.Department,r=t.Job_title,l=t.Email,m=t.Company_size,p=t.Email_verification,u=t.Phone_verification;function d(e){return e?"NOT CHECKED":"CHECKED"}n?i?l?o?m?c?r?/^[0-9]+$/.test(a)?/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(l)?n.match(/\d+/g)||i.match(/\d+/g)?alert("\u540d\u7a31\u4e0d\u5f97\u542b\u6709\u6578\u5b57"):s.a.post("".concat("https://www.digitimes.com.tw/seminar/IBM_20210104/ajax/testapi/upload/"),{Last_name:n,First_name:i,Phone:a,Company:o,Department:c,Job_title:r,Email:l,Company_size:m,Email_verification:d(p),Phone_verification:d(u)},(function(t){console.log(t),e.download(),e.sendTrack(e.state.videoIdx,e.state.type)})):alert("\u8acb\u8f38\u5165\u6b63\u78ba\u4fe1\u7bb1\u683c\u5f0f"):alert("\u8acb\u8f38\u5165\u5168\u6578\u5b57\u96fb\u8a71\u683c\u5f0f"):alert("\u8acb\u8f38\u5165\u8077\u7a31"):alert("\u8acb\u8f38\u5165\u516c\u53f8\u90e8\u9580"):alert("\u8acb\u8f38\u5165\u516c\u53f8\u898f\u6a21"):alert("\u8acb\u8f38\u5165\u4efb\u8077\u516c\u53f8"):alert("\u8acb\u8f38\u5165\u96fb\u5b50\u4fe1\u7bb1"):alert("\u8acb\u8f38\u5165\u540d\u5b57"):alert("\u8acb\u8f38\u5165\u59d3\u6c0f")},e.sendTrack=function(t,n){s.a.post("https://www.digitimes.com.tw/seminar/IBM_20210104/ajax/testapi/click/",{Pid:t,Title:e.state.videoItem[t].fileTitle,Type:n},(function(e){console.log(e)}))},e.download=function(){window.open(e.state.videoItem[e.state.videoIdx].fileLink,"_blank"),s()(".video__popup").fadeOut(),e.setState({state:!e.state.state})},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,t=e.Last_name,n=e.First_name,o=e.Phone,c=e.Company,s=e.Department,r=e.Job_title,l=e.Email,m=e.Company_size,p=e.data,u=e.state,d={Last_name:t,First_name:n,Phone:o,Company:c,Department:s,Job_title:r,Email:l,Company_size:m,data:p,swipeItem:e.swipeItem,videoIdx:e.videoIdx,videoItem:e.videoItem,Email_verification:e.Email_verification,Phone_verification:e.Phone_verification,changeVideo:this.changeVideo,openForm:this.openForm,onLastName:this.onLastName,onFirstName:this.onFirstName,onPhone:this.onPhone,onCompany:this.onCompany,onDept:this.onDept,onJob:this.onJob,onEmail:this.onEmail,onScale:this.onScale,valid:this.valid,download:this.download,ChangeEmail:this.ChangeEmail,ChangePhone:this.ChangePhone};return Object(i.jsx)(a.Fragment,{children:Object(i.jsxs)(h,{value:d,children:[u?Object(i.jsx)(j,{}):"",Object(i.jsx)(y,{}),Object(i.jsx)(k,{}),Object(i.jsx)(C,{}),Object(i.jsx)(E,{})]})})}}]),n}(a.Component);Object(o.render)(Object(i.jsx)(P,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.f33c29c6.chunk.js.map