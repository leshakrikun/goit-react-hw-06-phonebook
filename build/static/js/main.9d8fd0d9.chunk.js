(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{16:function(t,e,n){t.exports={phoneBookButton:"phonebook_phoneBookButton__2F-Lr",formPhoneBook:"phonebook_formPhoneBook__94Gnw",phonebook:"phonebook_phonebook__3K5st"}},17:function(t,e,n){t.exports={contactItem__btn:"contacts_contactItem__btn__mdf4X",contactList:"contacts_contactList__1Ui5w",contactListformat:"contacts_contactListformat__3TBy5"}},20:function(t,e,n){t.exports={findcontacts:"filter_findcontacts__2jD_4",findInput:"filter_findInput__RquXd"}},40:function(t,e,n){},41:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var c,a=n(0),o=n.n(a),r=n(14),s=n.n(r),i=n(12),b=n(13),u=n(8),j=n(24),l=n.n(j),d=n(7),f={contacts:null!==(c=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==c?c:[]},O=Object(b.b)({name:"contacts",initialState:f,reducers:{addContacts:function(t,e){return Object(d.a)(Object(d.a)({},t),{},{contacts:[].concat(Object(i.a)(t.contacts),[e.payload])})},deleteContact:function(t,e){return Object(d.a)(Object(d.a)({},t),{},{contacts:Object(i.a)(t.contacts.filter((function(t){return t.id!==e.payload})))})},filterContact:function(t,e){return Object(d.a)(Object(d.a)({},t),{},{filter:e.payload})}}}),h={key:"contacts",storage:l.a,blacklist:["filter"]},m=Object(i.a)(Object(b.c)({serializableCheck:{ignoredActions:[u.a,u.f,u.b,u.c,u.d,u.e]}})),p=Object(b.a)({reducer:Object(u.g)(h,O.reducer),middleware:m,devTools:!1}),x=Object(u.h)(p),_=n(25),k=n(27),v=n(6),g=n(23),C=n(49),y=n(16),w=n.n(y),B=n(1),N=function(){var t=Object(v.b)(),e=Object(v.c)((function(t){return t})),n=Object(a.useState)(""),c=Object(g.a)(n,2),o=c[0],r=c[1],s=Object(a.useState)(""),i=Object(g.a)(s,2),b=i[0],u=i[1],j=e.contacts,l=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":r(c);break;case"number":u(c);break;default:return}};return Object(B.jsxs)("div",{className:w.a.phonebook,children:[Object(B.jsx)("h2",{children:"Phonebook"}),Object(B.jsxs)("div",{className:w.a.formPhoneBook,children:[Object(B.jsx)("p",{children:"Name"}),Object(B.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j.find((function(t){return o===t.name}))?alert(o+" is already in contact"):t(O.actions.addContacts({name:o,number:b,id:Object(C.a)()})),r(""),u("")},children:[Object(B.jsx)("input",{type:"text",onChange:l,name:"name",value:o,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(B.jsx)("p",{children:"Number"}),Object(B.jsx)("input",{type:"tel",name:"number",onChange:l,value:b,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(B.jsx)("button",{type:"submit",className:w.a.phoneBookButton,children:"Add contact"})]})]})]})},L=n(17),I=n.n(L),A=function(t){var e=t.contacts,n=Object(v.b)();return Object(B.jsx)("div",{className:I.a.contactListformat,children:Object(B.jsx)("ul",{className:I.a.contactList,children:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(B.jsxs)("li",{children:[c,": ",a,Object(B.jsx)("button",{type:"button",className:I.a.contactItem__btn,onClick:function(){return function(t){n(O.actions.deleteContact(t))}(e)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},e)}))})})},S=n(20),z=n.n(S),F=function(){var t=Object(v.b)();return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("h2",{children:"Contacts"}),Object(B.jsxs)("label",{className:z.a.findcontacts,children:["Find contacts by name",Object(B.jsx)("input",{className:z.a.findInput,type:"text",name:"filter",onChange:function(e){var n=e.target.value;t(O.actions.filterContact(n))}})]})]})};n(40);function J(){var t=Object(v.c)((function(t){return t}));return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(N,{}),Object(B.jsx)(F,{}),Object(B.jsx)(A,{contacts:function(){if(t.filter){var e=t.filter.toLowerCase();return t.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}))}return t.contacts}()})]})}n(41),n(42);s.a.render(Object(B.jsx)(o.a.StrictMode,{children:Object(B.jsx)(v.a,{store:p,children:Object(B.jsx)(_.a,{loading:null,persistor:x,children:Object(B.jsx)(k.a,{children:Object(B.jsx)(J,{})})})})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.9d8fd0d9.chunk.js.map