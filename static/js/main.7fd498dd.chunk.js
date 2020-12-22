(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{44:function(e,t,r){},45:function(e,t,r){"use strict";r.r(t);var c=r(1),a=r(0),n=r.n(a),o=r(4),s=r.n(o),i=r(3),u=r(7),j=r(14);r(21);var l=function(e){var t=e.onSubmit,r=Object(a.useState)(""),n=Object(i.a)(r,2),o=n[0],s=n[1];return Object(c.jsx)("header",{className:"Searchbar",children:Object(c.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),""!==o.trim()?(t(o),s("")):Object(u.b)("Please enter search query")},children:[Object(c.jsx)("input",{value:o,onChange:function(e){return s(e.currentTarget.value.toLowerCase())},className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"}),Object(c.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(c.jsx)(j.a,{})})]})})},m=r(9);var b={fetchImages:function(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=18452046-d075d28130c097165687e8e16&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("No response from server"))}))}};var O=function(e){var t=e.message;return Object(c.jsx)("div",{role:"alert",children:Object(c.jsxs)("p",{children:["Sorry, something went wrong. Error: ",t]})})},g=r(10),h=r(11),d=r(15),f=r(13),v=r(12),p=r.n(v),x=(r(43),function(e){Object(d.a)(r,e);var t=Object(f.a)(r);function r(){return Object(g.a)(this,r),t.apply(this,arguments)}return Object(h.a)(r,[{key:"render",value:function(){return Object(c.jsx)(p.a,{className:"Loader",type:"Oval",color:"#303f9f",height:80,width:80})}}]),r}(a.Component)),y=document.querySelector("#modal-root");var w=function(e){var t=e.src,r=e.alt,n=e.onClose,s=Object(a.useRef)(!0);Object(a.useEffect)((function(){return s.current?(window.addEventListener("keydown",i),void(s.current=!1)):function(){window.removeEventListener("keydown",i)}}));var i=function(e){"Escape"===e.code&&n()};return Object(o.createPortal)(Object(c.jsx)("div",{className:"Overlay",onClick:function(e){e.currentTarget===e.target&&n()},children:Object(c.jsx)("div",{className:"Modal",children:Object(c.jsx)("img",{src:t,alt:r})})}),y)};var S=function(e){var t=e.src,r=e.alt,n=e.largeImageUrl,o=Object(a.useState)(!1),s=Object(i.a)(o,2),u=s[0],j=s[1],l=function(){return j(!u)};return Object(c.jsxs)("li",{className:"ImageGalleryItem",children:[Object(c.jsx)("img",{onClick:l,src:t,alt:r,className:"ImageGalleryItemImage"}),u&&Object(c.jsx)(w,{onClose:l,src:n,alt:r})]})};var I=function(e){var t=e.images;return Object(c.jsx)("ul",{className:"ImageGallery",children:t.map((function(e,t){return Object(c.jsx)(S,{src:e.webformatURL,alt:e.tags,largeImageUrl:e.largeImageURL},t)}))})};var k=function(e){var t=e.onClick;return Object(c.jsx)("button",{onClick:function(){t(),setTimeout((function(){window.scrollBy({top:document.documentElement.clientHeight-130,behavior:"smooth"})}),500)},className:"Button",type:"button",children:"Load more"})},N="idle",C="pending",E="resolved",L="rejected";var P=function(e){var t=e.imageName,r=e.images,n=e.page,o=e.setImages,s=e.setPage,u=Object(a.useState)({}),j=Object(i.a)(u,2),l=j[0],g=j[1],h=Object(a.useState)(N),d=Object(i.a)(h,2),f=d[0],v=d[1],p=Object(a.useState)(!0),y=Object(i.a)(p,2),w=y[0],S=y[1];return Object(a.useEffect)((function(){""!==t?(v(C),b.fetchImages(t,n).then((function(e){if(!(e.total>0))return Promise.reject(new Error("Invalid request"));o((function(t){return[].concat(Object(m.a)(t),Object(m.a)(e.hits))})),v(E),e.total<12?S(!1):S(!0)})).catch((function(e){g(e),console.log(typeof e),v(L)}))):console.log("\u0418\u043c\u0435\u043d\u0438 \u043d\u0435\u0442")}),[t,n,o]),f===N?Object(c.jsx)("p",{children:"Please enter your search term"}):f===C?Object(c.jsx)(x,{}):f===L?Object(c.jsx)(O,{message:l.message}):f===E?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(I,{images:r}),w&&Object(c.jsx)(k,{onClick:function(){return s(n+1)}})]}):void 0};var F=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),r=t[0],n=t[1],o=Object(a.useState)([]),s=Object(i.a)(o,2),j=s[0],m=s[1],b=Object(a.useState)(1),O=Object(i.a)(b,2),g=O[0],h=O[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(l,{onSubmit:function(e){n(e),m([]),h(1)}}),Object(c.jsx)(P,{imageName:r,images:j,page:g,setImages:m,setPage:h}),Object(c.jsx)(u.a,{autoClose:3e3})]})};r(44);s.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(F,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.7fd498dd.chunk.js.map