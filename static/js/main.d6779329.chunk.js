(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports={nav:"Header_nav__NcqCj",menuHover:"Header_menuHover__2htUh",items:"Header_items__3hRiB",item:"Header_item__1iy5L",activeLink:"Header_activeLink__2oUjt"}},function(e,t,a){e.exports={message:"Message_message__11y63",img:"Message_img__1Nn6z",angle:"Message_angle__1oS18",content:"Message_content__BdQMf",name:"Message_name__3c7I1",text:"Message_text__3ujKx",time:"Message_time__3Xvv6"}},,function(e,t,a){e.exports={button:"Affairs_button__2SQnY",content:"Affairs_content__2WtKB"}},,function(e,t,a){e.exports={someClass:"Greeting_someClass__1xKWv",error:"Greeting_error__3CGPp",errorText:"Greeting_errorText__3uHiD",totalUsers:"Greeting_totalUsers__2B8lQ",displayNone:"Greeting_displayNone__2gCk4",button:"Greeting_button__3geJO",content:"Greeting_content__2ISQl"}},,,function(e,t,a){e.exports={blue:"HW4_blue__3A4-O",errorText:"HW4_errorText__1dT8T",column:"HW4_column__1g10i",button:"HW4_button__3fdvT"}},function(e,t,a){e.exports={label:"SuperCheckbox_label__1XwU1",checkbox:"SuperCheckbox_checkbox__3fp5o",checkboxTick:"SuperCheckbox_checkboxTick__35rJv",checkboxText:"SuperCheckbox_checkboxText__18RgE"}},,function(e,t,a){e.exports={wrapperHW7:"hw7_wrapperHW7__1VEG3",wrapperSuperSelect:"hw7_wrapperSuperSelect__2CeRA",wrapperSuperRadio:"hw7_wrapperSuperRadio__13msb"}},function(e,t,a){e.exports={input:"SuperInputText_input__7jkZY",errorInput:"SuperInputText_errorInput__F-McQ",superInput1:"SuperInputText_superInput1__yjxKw",superInput2:"SuperInputText_superInput2__2eA9i",error:"SuperInputText_error__1NdYj",error1:"SuperInputText_error1__1uRY6",error2:"SuperInputText_error2__ItnZs",error3:"SuperInputText_error3__2oRla"}},,function(e,t,a){e.exports={pageError:"Error404_pageError__O7xSX",tilt:"Error404_tilt__D8ow_",tiltInner:"Error404_tiltInner__1cXaU"}},function(e,t,a){e.exports={dark:"HW12_dark__1aEex","dark-text":"HW12_dark-text__1QsM6",red:"HW12_red__3dpN4","red-text":"HW12_red-text__25j07",some:"HW12_some__3aZox","some-text":"HW12_some-text__26mqs"}},function(e,t,a){e.exports={button:"SuperButton_button__1zwvx",redButton:"SuperButton_redButton__3RVHs"}},,,,function(e,t,a){},,,function(e,t,a){e.exports={App:"App_App__2Mplf"}},function(e,t,a){e.exports={range:"SuperRange_range__2C0ib"}},,,function(e,t,a){e.exports=a(46)},,,,,function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(30),c=a.n(l),o=(a(40),a(31)),u=a.n(o),s=a(10),i=a(8),m=a.n(i),p=a(1),_=a(22),E=a.n(_);var d=function(){return r.a.createElement("div",{className:E.a.pageError},r.a.createElement("div",{className:E.a.tiltInner},r.a.createElement("img",{src:"https://image.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg",alt:"404"})))},h=a(2),v=a(4),b=function(e){var t=e.options,a=e.onChange,n=e.onChangeOption,l=Object(v.a)(e,["options","onChange","onChangeOption"]),c=t?t.map((function(e,t){return r.a.createElement("option",{key:t},e)})):[];return r.a.createElement("select",Object.assign({onChange:function(e){a&&a(e),n&&n(e.currentTarget.value)}},l),c)},g=function(e){e.type;var t=e.name,a=e.options,n=e.value,l=(e.onChange,e.onChangeOption),c=(Object(v.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){l&&l(e.currentTarget.value)}),o=a?a.map((function(e,a){return r.a.createElement("label",{key:t+"-"+a},r.a.createElement("input",{type:"radio",name:t,checked:n===e,value:e,onChange:c}),e)})):[];return r.a.createElement(r.a.Fragment,null,o)},f=a(19),k=a.n(f),C=["x","y","z"];var N=function(){var e=Object(n.useState)(C[1]),t=Object(h.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",{className:k.a.wrapperHW7},r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",{className:k.a.wrapperSuperSelect},r.a.createElement(b,{options:C,value:a,onChangeOption:l})),r.a.createElement("div",{className:k.a.wrapperSuperRadio},r.a.createElement(g,{name:"radio",options:C,value:a,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var x=function(){return r.a.createElement("div",null,r.a.createElement(N,null))},O=a(32),j=a.n(O),S=function(e){e.type;var t=e.onChange,a=e.onChangeRange,n=e.className,l=Object(v.a)(e,["type","onChange","onChangeRange","className"]),c="".concat(j.a.range," ").concat(n||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"range",onChange:function(e){t&&t(e),a&&a(+e.currentTarget.value)},className:c},l)))},w=function(e){e.onChangeRange,e.value;return r.a.createElement(r.a.Fragment,null,"DoubleRange")};var y=function(){var e=Object(n.useState)(0),t=Object(h.a)(e,2),a=t[0],l=(t[1],Object(n.useState)(100)),c=Object(h.a)(l,2),o=c[0];return c[1],r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 11",r.a.createElement("div",null,r.a.createElement("span",null,a),r.a.createElement(S,null)),r.a.createElement("div",null,r.a.createElement("span",null,a),r.a.createElement(w,null),r.a.createElement("span",null,o)),r.a.createElement("hr",null),r.a.createElement("hr",null))},T=a(23),H=a.n(T);var I=function(){return r.a.createElement("div",{className:H.a.some},r.a.createElement("hr",null),r.a.createElement("span",{className:H.a["some-text"]},"homeworks 12"),r.a.createElement("hr",null))};var A=function(){return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(I,null))},W=a(9),B=a.n(W);var F=function(e){return r.a.createElement("div",{className:B.a.message},r.a.createElement("img",{className:B.a.img,alt:"Avatar",src:e.avatar}),r.a.createElement("div",{className:B.a.angle}),r.a.createElement("div",{className:B.a.content},r.a.createElement("div",{className:B.a.name},e.name),r.a.createElement("div",{className:B.a.text},e.message),r.a.createElement("div",{className:B.a.time},e.time)))},R="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",M="Artem",U="npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",G="20:00";var J=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(F,{avatar:R,name:M,message:U,time:G}),r.a.createElement("hr",null),r.a.createElement("hr",null))},P=a(11),K=a.n(P);var L=function(e){return r.a.createElement("div",null,"// show some text",e.affair.name,r.a.createElement("button",{className:K.a.button,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var D=function(e){var t=e.data.map((function(t){return r.a.createElement(L,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,t,r.a.createElement("button",{className:K.a.button,onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{className:K.a.button,onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{className:K.a.button,onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{className:K.a.button,onClick:function(){e.setFilter("low")}},"Low"))},Q=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var X=function(){var e=Object(n.useState)(Q),t=Object(h.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("all"),o=Object(h.a)(c,2),u=o[0],s=o[1],i=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(a,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(D,{data:i,setFilter:s,deleteAffairCallback:function(e){return l(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},Y=a(34),Z=a(13),q=a.n(Z),z=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=q.a.errorFalse,u=q.a.displayNone;return r.a.createElement("div",{className:q.a.content},r.a.createElement("input",{value:t,onChange:a,className:l?o:""}),r.a.createElement("span",{className:l?q.a.errorText:u},l?"You did't enter a name":""),r.a.createElement("button",{onClick:n,className:q.a.button},"add"),r.a.createElement("span",{className:q.a.totalUser},r.a.createElement("div",null,"Add users: ",c)))},V=function(e){var t=e.users,a=e.addUserCallback,l=Object(n.useState)(""),c=Object(h.a)(l,2),o=c[0],u=c[1],s=Object(n.useState)(!1),i=Object(h.a)(s,2),m=i[0],p=i[1],_=t.length;return r.a.createElement(z,{name:o,setNameCallback:function(e){u(e.currentTarget.value)},addUser:function(){""===o?p(!0):(p(!1),setTimeout((function(){return alert("Hello ".concat(o," !"))}),100),a(o),u(""))},error:m,totalUsers:_})},$=a(48);var ee=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(V,{users:a,addUserCallback:function(e){var t={_id:Object($.a)(),name:e};l([].concat(Object(Y.a)(a),[t]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},te=a(20),ae=a.n(te),ne=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,s=Object(v.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(ae.a.error," ").concat(u||""),m="".concat(c?ae.a.errorInput:ae.a.input,"  ").concat(o||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},s)),c&&r.a.createElement("span",{className:i},c))},re=a(16),le=a.n(re),ce=a(24),oe=a.n(ce),ue=function(e){var t=e.red,a=e.className,n=Object(v.a)(e,["red","className"]),l="".concat(t?oe.a.redButton:oe.a.button," ").concat(a||"");return r.a.createElement("button",Object.assign({className:l},n))},se=a(17),ie=a.n(se),me=function(e){e.type,e.onChange;var t=e.onChangeChecked,a=e.className,n=(e.spanClassName,e.children),l=Object(v.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),c="".concat(ie.a.checkbox," ").concat(a||"");return r.a.createElement("label",{className:ie.a.label},r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked)},className:c},l)),r.a.createElement("span",{className:ie.a.checkboxTick}," "),n&&r.a.createElement("span",{className:ie.a.checkboxText},n))};var pe=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],l=t[1],c=a?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},u=Object(n.useState)(!1),s=Object(h.a)(u,2),i=s[0],m=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:le.a.column},r.a.createElement(ne,{value:a,onChangeText:l,onEnter:o,error:c,spanClassName:le.a.testSpanError}),r.a.createElement(ne,{className:le.a.blue}),r.a.createElement(ue,null,"default"),r.a.createElement(ue,{red:!0,onClick:o,className:le.a.button},"superButton "),r.a.createElement(ue,{disabled:!0},"superButton disabled"),r.a.createElement(me,{checked:i,onChangeChecked:m},"superCheckbox / some text "),r.a.createElement(me,{checked:i,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},_e=(a(28),function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,l=e.spanProps,c=Object(v.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(h.a)(o,2),s=u[0],i=u[1],m=l||{},p=m.children,_=m.onDoubleClick,E=(m.className,Object(v.a)(m,["children","onDoubleClick","className"]));return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(ne,Object.assign({autoFocus:!0,onBlur:function(e){i(!1),t&&t(e)},onEnter:function(){i(!1),a&&a()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){i(!0),_&&_(e)},className:"input-hw6"},E),p||c.value))});function Ee(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}function de(e,t){var a=t,n=localStorage.getItem(e);return null!==n&&(a=JSON.parse(n)),a}Ee("test",{x:"A",y:1});de("test",{x:"",y:0});var he=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",{className:"wrapper-hw6"},r.a.createElement("div",null,r.a.createElement(_e,{value:a,onChangeText:l,spanProps:{children:a?void 0:"enter text..."}})),r.a.createElement("div",{className:"button-hw6"},r.a.createElement(ue,{onClick:function(){Ee("editable-span-value",a)}},"save"),r.a.createElement(ue,{onClick:function(){var e=de("editable-span-value",a);l(e)}},"restore")),r.a.createElement("hr",null),r.a.createElement("hr",null)))};var ve=function(){return r.a.createElement("div",null,r.a.createElement(J,null),r.a.createElement(X,null),r.a.createElement(ee,null),r.a.createElement(pe,null),r.a.createElement(he,null))},be="/pre-junior",ge="/junior",fe="/junior-plus";var ke=function(){return r.a.createElement("div",null,r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/",exact:!0,render:function(){return r.a.createElement(p.a,{to:be})}}),r.a.createElement(p.b,{path:be,render:function(){return r.a.createElement(ve,null)}}),r.a.createElement(p.b,{path:ge,render:function(){return r.a.createElement(x,null)}}),r.a.createElement(p.b,{path:fe,render:function(){return r.a.createElement(A,null)}}),r.a.createElement(p.b,{render:function(){return r.a.createElement(d,null)}})))};var Ce=function(){return r.a.createElement("div",{className:m.a.nav},r.a.createElement("button",{className:m.a.menuHover},"Menu"),r.a.createElement("div",{className:m.a.items},r.a.createElement("div",{className:m.a.item},r.a.createElement(s.b,{to:be,activeClassName:m.a.activeLink},"PreJunior")),r.a.createElement("div",{className:m.a.item},r.a.createElement(s.b,{to:ge,activeClassName:m.a.activeLink},"Junior")),r.a.createElement("div",{className:m.a.item},r.a.createElement(s.b,{to:fe,activeClassName:m.a.activeLink},"JuniorPlus"))))};var Ne=function(){return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(Ce,null),r.a.createElement(ke,null)))};var xe=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(Ne,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(xe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[35,1,2]]]);
//# sourceMappingURL=main.d6779329.chunk.js.map