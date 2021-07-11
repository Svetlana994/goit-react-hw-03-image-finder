(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{30:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),o=a.n(i),c=(a(30),a(10)),s=a.n(c),p=a(13),l=a(12),u=a(5),d=a(6),h=a(8),g=a(7),b=a(9),x=(a(32),a(2));var m=Object(x.a)("li",{target:"e1003cpq1"})({name:"ia8atm",styles:"border-radius:2px;box-shadow:0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)"}),f=Object(x.a)("img",{target:"e1003cpq0"})({name:"1plt1o8",styles:"width:100%;height:260px;object-fit:cover;transition:transform 250ms cubic-bezier(0.4, 0, 0.2, 1);&:hover{transform:scale(1.03);cursor:zoom-in;}"}),j=a(1);var y=function(e){var t=e.imageSrc,a=e.tags,n=e.onClick;return Object(j.jsx)(m,{onClick:n,children:Object(j.jsx)(f,{src:t,alt:a})})};var v=Object(x.a)("ul",{target:"ej1ypoz0"})({name:"1bhb8yv",styles:"display:grid;max-width:calc(100vw - 48px);grid-template-columns:repeat(auto-fill, minmax(320px, 1fr));grid-gap:16px;margin-top:0;margin-bottom:0;padding:0;list-style:none;margin-left:auto;margin-right:auto"}),w=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onSelect=function(t){e.props.modalImage(t)},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(j.jsx)(v,{children:this.props.images.map((function(t){var a=t.id,n=t.webformatURL,r=t.largeImageURL,i=t.tags;return Object(j.jsx)(y,{imageSrc:n,tags:i,onClick:function(){return e.onSelect(r)}},a)}))})}}]),a}(n.Component);var O=Object(x.a)("header",{target:"e7ywq7s4"})({name:"1ssw7nl",styles:"top:0;left:0;position:sticky;z-index:1100;display:flex;justify-content:center;align-items:center;min-height:64px;padding-right:24px;padding-left:24px;padding-top:12px;padding-bottom:12px;color:#fff;background-color:#3f51b5;box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)"}),k=Object(x.a)("form",{target:"e7ywq7s3"})({name:"kbgsnr",styles:"display:flex;align-items:center;width:100%;max-width:600px;background-color:#fff;border-radius:3px;overflow:hidden"}),S=Object(x.a)("button",{target:"e7ywq7s2"})({name:"1f32h4y",styles:'display:inline-block;width:48px;height:48px;border:0;background-image:url("https://image.flaticon.com/icons/svg/149/149852.svg");background-size:40%;background-repeat:no-repeat;background-position:center;opacity:0.6;transition:opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;outline:none;&:hover{opacity:1;}'}),C=Object(x.a)("span",{target:"e7ywq7s1"})({name:"jnnlmv",styles:"position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;clip-path:inset(50%);border:0"}),z=Object(x.a)("input",{target:"e7ywq7s0"})({name:"g6sr3k",styles:"display:inline-block;width:100%;font:inherit;font-size:20px;border:none;outline:none;padding-left:4px;padding-right:4px;&::placeholder{font:inherit;font-size:18px;}"}),q=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={searchName:""},e.handleChange=function(t){e.setState({searchName:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.searchName;""!==a.trim()?(e.props.onSubmit(a),e.setState({searchName:""})):b.b.error("Enter search query")},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(j.jsx)(O,{children:Object(j.jsxs)(k,{onSubmit:this.handleSubmit,children:[Object(j.jsx)(S,{type:"submit",children:Object(j.jsx)(C,{children:"Search"})}),Object(j.jsx)(z,{type:"text",value:this.state.searchName,autocomplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange})]})})}}]),a}(n.Component);var L=Object(x.a)("div",{target:"e31dfiv1"})({name:"8i9ttg",styles:"position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;background-color:rgba(0, 0, 0, 0.8);z-index:1200"}),E=Object(x.a)("div",{target:"e31dfiv0"})({name:"sve88p",styles:"max-width:calc(100vw - 48px);max-height:calc(100vh - 24px)"});var I=function(e){var t=e.onClick,a=e.picture;return Object(j.jsx)(L,{onClick:t,children:Object(j.jsx)(E,{children:Object(j.jsx)("img",{src:a,alt:""})})})};var M=Object(x.a)("button",{target:"e1ttn6oy0"})({name:"13drpw",styles:"margin:0 auto;padding:8px 16px;border-radius:2px;background-color:#3f51b5;transition:all 250ms cubic-bezier(0.4, 0, 0.2, 1);text-align:center;display:inline-block;color:#fff;border:0;text-decoration:none;cursor:pointer;font-family:inherit;font-size:18px;line-height:24px;font-style:normal;font-weight:500;width:200px;box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)"});var Q=function(e){var t=e.onLoad;return Object(j.jsx)(M,{type:"button",onClick:t,children:"Load More"})},F=a(25),N=a.n(F);a(56);var U=Object(x.a)("div",{target:"e1qa497k0"})({name:"9th5i",styles:"margin:0 auto"});var T=function(){return Object(j.jsx)(U,{children:Object(j.jsx)(N.a,{type:"Oval",color:"#00BFFF",height:120,width:120})})},A=a(15),K=a.n(A),R="21694514-038331012d9ce6d0d84cba359";function B(){return(B=Object(l.a)(s.a.mark((function e(t,a){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.a.get("/?q=".concat(t,"&page=").concat(a,"&key=").concat(R,"&image_type=photo&orientation=horizontal&per_page=12"));case 2:return n=e.sent,r=n.data.hits,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}K.a.defaults.baseURL="https://pixabay.com/api";var D=function(e,t){return B.apply(this,arguments)};var J=Object(x.a)("div",{target:"e16ilobg0"})({name:"kyj7j7",styles:"display:grid;grid-template-columns:1fr;grid-gap:16px;padding-bottom:24px"}),_=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={pictureQuery:"",picture:null,images:[],page:1,status:"idle",error:null},e.handleFormSubmit=function(t){e.setState({pictureQuery:t})},e.selectModalImage=function(t){e.setState({picture:t})},e.onModalClick=function(t){console.log(t.currentTarget),t.currentTarget===t.target&&e.setState({picture:null})},e.handleKeydown=function(t){"Escape"===t.code&&e.setState({picture:null})},e.loadMoreImages=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(d.a)(a,[{key:"componentDidUpdate",value:function(){var e=Object(l.a)(s.a.mark((function e(t,a){var n,r,i,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.state,r=n.pictureQuery,i=n.page,a.pictureQuery===r&&a.page===i){e.next=19;break}return this.setState({status:"pending"}),e.prev=3,e.next=6,D(r,i);case 6:if(o=e.sent,a.pictureQuery!==r&&r&&this.setState({images:Object(p.a)(o),status:"resolved",page:1}),a.page!==i&&this.setState((function(e){return{images:[].concat(Object(p.a)(e.images),Object(p.a)(o)),status:"resolved"}})),i>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),0!==o.length){e.next=14;break}throw this.setState({pictureQuery:""}),b.b.error("Enter a valid search query"),new Error;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),this.setState({error:e.t0,status:"rejected"});case 19:window.addEventListener("keydown",this.handleKeydown);case 20:case"end":return e.stop()}}),e,this,[[3,16]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){var e=this.state,t=e.status,a=e.images,n=e.picture,r=e.pictureQuery,i="pending"===t,o=a&&"resolved"===t;return Object(j.jsxs)(J,{children:[Object(j.jsx)(q,{onSubmit:this.handleFormSubmit}),i&&Object(j.jsx)(T,{}),o&&Object(j.jsx)(w,{images:a,modalImage:this.selectModalImage}),a&&r&&Object(j.jsx)(Q,{onLoad:this.loadMoreImages}),n&&Object(j.jsx)(I,{picture:n,onClick:this.onModalClick}),Object(j.jsx)(b.a,{autoClose:2e3})]})}}]),a}(n.Component);o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(_,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.626b5550.chunk.js.map