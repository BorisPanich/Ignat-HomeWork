(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,function(e,t,n){e.exports={blue:"HW4_blue__3A4-O",errorText:"HW4_errorText__1dT8T",column:"HW4_column__1g10i",button:"HW4_button__3fdvT"}},function(e,t,n){e.exports={label:"SuperCheckbox_label__1XwU1",checkbox:"SuperCheckbox_checkbox__3fp5o",checkboxTick:"SuperCheckbox_checkboxTick__35rJv",checkboxText:"SuperCheckbox_checkboxText__18RgE"}},function(e,t,n){e.exports={input:"SuperInputText_input__7jkZY",errorInput:"SuperInputText_errorInput__F-McQ",superInput1:"SuperInputText_superInput1__yjxKw",superInput2:"SuperInputText_superInput2__2eA9i",error:"SuperInputText_error__1NdYj",error1:"SuperInputText_error1__1uRY6",error2:"SuperInputText_error2__ItnZs",error3:"SuperInputText_error3__2oRla"}},function(e,t,n){e.exports={button:"SuperButton_button__1zwvx",redButton:"SuperButton_redButton__3RVHs"}},,,,function(e,t,n){e.exports={App:"App_App__2Mplf"}},function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),u=(n(15),n(9)),s=n.n(u),l=n(6),p=n(1),m=n(4),i=n.n(m),_=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,o=e.error,u=e.className,s=e.spanClassName,l=Object(p.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),m="".concat(i.a.error," ").concat(s||""),_="".concat(o?i.a.errorInput:i.a.input,"  ").concat(u||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:_},l)),o&&r.a.createElement("span",{className:m},o))},h=n(2),b=n.n(h),x=n(5),k=n.n(x),d=function(e){var t=e.red,n=e.className,a=Object(p.a)(e,["red","className"]),c="".concat(t?k.a.redButton:k.a.button," ").concat(n||"");return r.a.createElement("button",Object.assign({className:c},a))},E=n(3),g=n.n(E),C=function(e){e.type,e.onChange;var t=e.onChangeChecked,n=e.className,a=(e.spanClassName,e.children),c=Object(p.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(g.a.checkbox," ").concat(n||"");return r.a.createElement("label",{className:g.a.label},r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked)},className:o},c)),r.a.createElement("span",{className:g.a.checkboxTick}," "),a&&r.a.createElement("span",{className:g.a.checkboxText},a))};var T=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],o=n?"":"error",u=function(){o?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},s=Object(a.useState)(!1),p=Object(l.a)(s,2),m=p[0],i=p[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:b.a.column},r.a.createElement(_,{value:n,onChangeText:c,onEnter:u,error:o,spanClassName:b.a.testSpanError}),r.a.createElement(_,{className:b.a.blue}),r.a.createElement(d,null,"default"),r.a.createElement(d,{red:!0,onClick:u,className:b.a.button},"superButton "),r.a.createElement(d,{disabled:!0},"superButton disabled"),r.a.createElement(C,{checked:m,onChangeChecked:i},"superCheckbox / some text "),r.a.createElement(C,{checked:m,onChange:function(e){return i(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var f=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.411ed091.chunk.js.map