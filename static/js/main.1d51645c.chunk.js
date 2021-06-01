(this["webpackJsonpsmart-meeting-organizer"]=this["webpackJsonpsmart-meeting-organizer"]||[]).push([[0],{107:function(e,t,n){},115:function(e,t,n){},116:function(e,t,n){},119:function(e,t,n){"use strict";n.r(t);var a,i,l,r,o,c=n(1),m=n.n(c),u=n(46),d=n.n(u),s=n(49),g=(n(93),n(68)),b=n(69),f=n(76),p=n(75),v=n(8),E=(n(94),function(){return m.a.createElement("div",null,"Page not found")}),O=n(18),j=n(24),h=n(11),T=n(50),N=n.n(T),k=(n(107),function(e){var t=e.onClick,n=e.value,a=e.disabled;return m.a.createElement("button",{onClick:t,className:"common-button",disabled:a},n)}),M=(new Date).toISOString().slice(0,-14),y=function(e,t,n){return e>t&&e<n},C=function(e,t){var n=e.split("/"),a=new Date(Number(n[2]),Number(n[1])-1,Number(n[0]));return a.setHours(Number(t.split(":")[0])),a.setMinutes(Number(t.split(":")[1])),a},S=function(e){var t=e.split("-");return"".concat(t[2],"/").concat(t[1],"/").concat(t[0])},w=function(){var e=(new Date).getTime();return Number(String(e).slice(6))},$=n(29),I=Object(h.gql)(a||(a=Object($.a)(["\n  {\n    Buildings {\n      id\n      name\n    }\n  }\n"]))),L=Object(h.gql)(i||(i=Object($.a)([" \n  {\n    MeetingRooms {\n      id\n      name\n      floor\n      building {\n        name\n      }\n      meetings {\n        id\n        title\n        date\n        startTime\n        endTime\n      }\n    }\n  }\n"]))),B=Object(h.gql)(l||(l=Object($.a)([" \n  {\n    Meetings {\n      id\n      title\n      date\n      startTime\n      endTime\n    }\n  }\n"]))),D=Object(h.gql)(o||(o=Object($.a)(["\n  mutation Meeting(\n    $id: Int!,\n    $title: String!,\n    $date: String!,\n    $startTime: String!,\n    $endTime: String!,\n    $meetingRoomId: Int!\n  ) {\n    Meeting(\n      id: $id,\n      title: $title,\n      date: $date,\n      startTime: $startTime,\n      endTime: $endTime,\n      meetingRoomId: $meetingRoomId\n    ) {\n      id,\n      title\n    }\n  }\n"])));n(115);N.a.setAppElement("body");var R=function(e){var t,n=e.isModalOpen,a=e.toggleModal,i=e.buildings,l=e.isBuildingLoading,o=Object(c.useState)(!1),u=Object(O.a)(o,2),d=u[0],s=u[1],g=Object(c.useState)(""),b=Object(O.a)(g,2),f=b[0],p=b[1],v=Object(c.useState)(),E=Object(O.a)(v,2),T=E[0],I=E[1],L=Object(c.useState)(),B=Object(O.a)(L,2),R=B[0],q=B[1],F=Object(c.useState)(),A=Object(O.a)(F,2),P=A[0],Q=A[1],x=Object(c.useState)(),z=Object(O.a)(x,2),H=z[0],G=z[1],J=Object(c.useState)(),X=Object(O.a)(J,2),K=X[0],U=X[1],V=Object(h.useQuery)((t=H||-1,Object(h.gql)(r||(r=Object($.a)(["\n  {\n    Building(id: ","){\n      id\n      name\n      meetingRooms {\n        id\n        name\n        floor\n        meetings{\n          id\n          title\n          date\n          startTime\n          endTime\n        }\n      }\n    }\n  }\n"])),t))),W=V.data,Y=V.loading,Z=Object(j.get)(W,"Building",{}),_=Object(j.get)(Z,"meetingRooms",[]),ee=_.length?function(e,t,n,a){var i=C(t,n),l=C(t,a);return e.filter((function(e){for(var t=e.meetings,n=void 0===t?[]:t,a=0;a<n.length;a++){var r=C(n[a].date,n[a].startTime),o=C(n[a].date,n[a].endTime);if(y(i,r,o)||y(l,r,o))return!1}return!0}))}(_,S(T),R,P):[],te=Object(h.useMutation)(D),ne=Object(O.a)(te,2),ae=ne[0],ie=ne[1].loading;return m.a.createElement(N.a,{overlayClassName:"overlay",className:"modal",isOpen:n,onRequestClose:a,shouldCloseOnOverlayClick:!0},d?Y?"Loading...":m.a.createElement("div",{className:"rooms-wrapper"},m.a.createElement("h3",null,ee.length?"Please select one of free rooms":"No free rooms are available. Please select another building"),ee.map((function(e){return m.a.createElement("div",{className:"rooms-info-block \n                      ".concat(e.id===K?"selected-room":""),onClick:function(){return U(e.id)}},m.a.createElement("p",null,e.name),m.a.createElement("p",null,Z.name),m.a.createElement("p",null,"Floor: ",e.floor))})),ee.length>0&&m.a.createElement(k,{onClick:function(){ae({variables:{id:w(),title:f,date:S(T),startTime:R,endTime:P,meetingRoomId:K}}),!ie&&a(!n)},disabled:!K,value:"Schedule Meeting"})):m.a.createElement("div",{className:"add-meeting-wrapper"},m.a.createElement("h2",null,"Add Meeting"),m.a.createElement("div",{className:"add-meeting-line-item"},m.a.createElement("label",{htmlFor:"booking-title"},"Title:"),m.a.createElement("input",{type:"input",id:"booking-title",name:"booking-title",onChange:function(e){return p(e.target.value)},value:f})),m.a.createElement("div",{className:"add-meeting-line-item"},m.a.createElement("label",{htmlFor:"booking-date"},"Date:"),m.a.createElement("input",{type:"date",id:"booking-date",name:"booking-date",min:M,onChange:function(e){return I(e.target.value)},value:T})),m.a.createElement("div",{className:"add-meeting-line-item"},m.a.createElement("label",{htmlFor:"start-time"},"Start Time:"),m.a.createElement("input",{type:"time",id:"start-time",name:"start-time",onChange:function(e){return q(e.target.value)},value:R})),m.a.createElement("div",{className:"add-meeting-line-item"},m.a.createElement("label",{htmlFor:"end-time"},"End Time:"),m.a.createElement("input",{type:"time",id:"end-time",name:"end-time",onChange:function(e){return Q(e.target.value)},value:P})),m.a.createElement("div",{className:"add-meeting-line-item"},m.a.createElement("label",{htmlFor:"building"},"Select Building:"),l?"Loading...":m.a.createElement("select",{name:"building",value:H,onChange:function(e){return G(e.target.value)}},m.a.createElement("option",{value:"none",selected:!0,disabled:!0,hidden:!0}),i.map((function(e){var t=e.id,n=e.name;return m.a.createElement("option",{key:t,value:t},n)})))),m.a.createElement(k,{onClick:function(){return s(!d)},disabled:!H||!R||!P||!T||!f,value:"NEXT"})))};R.defaultProps={isModalOpen:!1,toggleModal:function(){},buildings:[],isBuildingInfoLoading:!0};var q=R,F=(n(116),function(){var e=Object(c.useState)(!1),t=Object(O.a)(e,2),n=t[0],a=t[1],i=Object(h.useQuery)(I),l=i.data,r=i.loading,o=Object(h.useQuery)(L),u=o.data,d=o.loading,s=Object(h.useQuery)(B),g=s.data,b=s.loading,f=Object(j.get)(l,"Buildings",[]),p=Object(j.get)(u,"MeetingRooms",[]),v=function(e){var t=new Date;return e.filter((function(e){for(var n=e.meetings,a=void 0===n?[]:n,i=0;i<a.length;i++){var l=C(a[i].date,a[i].startTime),r=C(a[i].date,a[i].endTime);if(y(t,l,r))return!1}return!0}))}(p),E=Object(j.get)(g,"Meetings",[]),T=function(e){var t=new Date;t.setHours(0),t.setMinutes(0);var n=new Date;return n.setHours(23),n.setMinutes(59),e.filter((function(e){var a=e.date,i=e.startTime,l=e.endTime,r=C(a,i),o=C(a,l);return y(r,t,n)||y(o,t,n)}))}(E),N=function(e){var t=new Date;return e.filter((function(e){var n=e.date,a=e.startTime,i=e.endTime,l=C(n,a),r=C(n,i);return y(t,l,r)}))}(E);return m.a.createElement("div",{className:"home-page"},m.a.createElement("div",{className:"info-block"},m.a.createElement("p",null,"Buildings: "),m.a.createElement("p",null,"Total: ",r?"Loading...":f.length)),m.a.createElement("div",{className:"info-block"},m.a.createElement("p",null,"Rooms: "),m.a.createElement("p",null,"Total: ",d?"Loading...":p.length),m.a.createElement("p",null,"Free Now: ",d?"Loading...":v.length)),m.a.createElement("div",{className:"info-block"},m.a.createElement("p",null,"Meetings: "),m.a.createElement("p",null,"Total: ",b?"Loading...":E.length),m.a.createElement("p",null,"Today: ",b?"Loading...":T.length),m.a.createElement("p",null,"Total: ",b?"Loading...":"".concat(N.length," Going on now"))),m.a.createElement(k,{onClick:function(){return a(!n)},value:"ADD MEETING"}),n&&m.a.createElement(q,{isModalOpen:n,toggleModal:function(){return a(!n)},buildings:f,isBuildingLoading:r}))}),A=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return m.a.createElement(v.d,null,m.a.createElement(v.b,{path:"/",exact:!0,component:F}),m.a.createElement(v.b,{path:"/smart-meeting-organizer",exact:!0,component:F}),m.a.createElement(v.b,{component:E}),m.a.createElement(v.a,{from:"//*",to:"/*"}))}}]),n}(m.a.Component),P=function(){return m.a.createElement("div",null,m.a.createElement(A,null))},Q=new h.ApolloClient({uri:"http://smart-meeting.herokuapp.com/graphql/",cache:new h.InMemoryCache,headers:{token:"a123gjhgjsdf6576"}});d.a.render(m.a.createElement(s.a,null,m.a.createElement(h.ApolloProvider,{client:Q},m.a.createElement(P,null))),document.getElementById("root"))},88:function(e,t,n){e.exports=n(119)},93:function(e,t,n){},94:function(e,t,n){}},[[88,1,2]]]);
//# sourceMappingURL=main.1d51645c.chunk.js.map