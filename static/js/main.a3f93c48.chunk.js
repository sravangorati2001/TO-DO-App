(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{14:function(e,t,a){e.exports=a(26)},19:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),l=a(6),c=a.n(l),r=(a(19),a(11)),s=a(7),u=a(8),m=a(2),d=a(13),o=a(12),h=a(9);var p=function(e){var t=e.list.map((function(t){return i.a.createElement("div",{className:"list",key:"item.key"},i.a.createElement("p",null,i.a.createElement("input",{type:"text",id:t.key,value:t.text,onChange:function(a){return e.editItem(a.target.value,t.key)}}),i.a.createElement("span",null,i.a.createElement(h.a,{className:"faicons",icon:"minus-circle",onClick:function(){return e.deleteItem(t.key)}}))))}));return i.a.createElement("div",null,t)},f=(a(25),a(3)),v=a(10);f.b.add(v.a);var b=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={list:[],inputitem:{text:"",key:""}},n.handlechange=n.handlechange.bind(Object(m.a)(n)),n.addItem=n.addItem.bind(Object(m.a)(n)),n.deleteItem=n.deleteItem.bind(Object(m.a)(n)),n.editItem=n.editItem.bind(Object(m.a)(n)),n}return Object(u.a)(a,[{key:"handlechange",value:function(e){this.setState({inputitem:{text:e.target.value,key:Date.now()}})}},{key:"addItem",value:function(e){e.preventDefault();var t=this.state.inputitem;if(""!==t.text){var a=[].concat(Object(r.a)(this.state.list),[t]);this.setState({list:a,inputitem:{text:"",key:""}})}}},{key:"deleteItem",value:function(e){var t=this.state.list.filter((function(t){return t.key!==e}));this.setState({list:t})}},{key:"editItem",value:function(e,t){var a=this.state.list;a.map((function(a){a.key===t&&(a.text=e)})),this.setState({list:a})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"TO-DO APP"),i.a.createElement("header",{className:"background"},i.a.createElement("form",{id:"todo-form",onSubmit:this.addItem},i.a.createElement("input",{type:"text",placeholder:"enter text",onChange:this.handlechange,value:this.state.inputitem.text}),i.a.createElement("button",{type:"submit"},"ADD")),i.a.createElement(p,{list:this.state.list,deleteItem:this.deleteItem,editItem:this.editItem}," ")," "))}}]),a}(i.a.Component);c.a.render(i.a.createElement(b,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a3f93c48.chunk.js.map