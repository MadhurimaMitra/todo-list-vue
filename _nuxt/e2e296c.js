(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,3,5],{265:function(e,t,o){"use strict";o.r(t);o(107),o(59),o(194);var l={props:{todos:Array,todoList:Boolean,selected:String},data:function(){return{checked:!1}},methods:{handleDeleteClick:function(e,t){e.splice(t,1)}}},n=o(43),component=Object(n.a)(l,(function(){var e=this,t=e._self._c;return e.todoList?t("section",[t("h1",{staticClass:"mb-4"},[e._v("TODO LIST")]),e._v(" "),e._l(e.todos,(function(o,l){return t("div",{key:l,staticClass:"flex justify-between items-center bg-white rounded-md py-4 px-4 mb-4"},[t("div",{},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox",id:"item"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{change:function(t){var o=e.checked,l=t.target,n=!!l.checked;if(Array.isArray(o)){var c=e._i(o,null);l.checked?c<0&&(e.checked=o.concat([null])):c>-1&&(e.checked=o.slice(0,c).concat(o.slice(c+1)))}else e.checked=n}}}),e._v(" "),t("label",{class:{"line-through":e.checked},attrs:{for:"item"}},[e._v(e._s(o))])]),e._v(" "),t("button",{staticClass:"bg-red text-white text-sm p-2 rounded",on:{click:function(t){return e.handleDeleteClick(e.todos,l)}}},[e._v("Delete")])])}))],2):e._e()}),[],!1,null,null,null);t.default=component.exports},267:function(e,t,o){"use strict";o.r(t);var l={data:function(){return{todo:"",todos:[],selected:"",todoList:!1}},methods:{handleClick:function(){console.log("click"),0!=this.todo.length&&0!=this.selected.length&&(this.todoList=!0,this.todos.push(this.todo),this.todo="",this.selected="")}}},n=o(43),component=Object(n.a)(l,(function(){var e=this,t=e._self._c;return t("section",[t("h1",{staticClass:"font-light mb-2"},[e._v("CREATE A TODO")]),e._v(" "),t("p",{staticClass:"text-sm font-semibold text-grey mb-2"},[e._v("What's on your todo list?")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.todo,expression:"todo"}],staticClass:"w-full bg-white rounded-md placeholder:font-normal placeholder:text-grey py-2 px-6 mb-6",attrs:{placeholder:"e.g. do an assignment"},domProps:{value:e.todo},on:{input:function(t){t.target.composing||(e.todo=t.target.value)}}}),e._v(" "),t("p",{staticClass:"text-sm font-semibold text-grey mb-2"},[e._v("Pick a category")]),e._v(" "),t("div",{staticClass:"flex gap-3 w-full mb-6"},[t("div",{staticClass:"basis-1/2 bg-white text-center rounded-md py-4"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],attrs:{type:"radio",id:"business",value:"business",name:"category"},domProps:{checked:e._q(e.selected,"business")},on:{change:function(t){e.selected="business"}}}),e._v(" "),t("label",{staticClass:"text-lg",attrs:{for:"business"}},[e._v("Business")])]),e._v(" "),t("div",{staticClass:"basis-1/2 bg-white text-center rounded-md py-4"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],attrs:{type:"radio",id:"personal",value:"personal",name:"category"},domProps:{checked:e._q(e.selected,"personal")},on:{change:function(t){e.selected="personal"}}}),e._v(" "),t("label",{staticClass:"text-lg",attrs:{for:"personal"}},[e._v("Personal")])])]),e._v(" "),t("button",{staticClass:"w-full bg-pink text-white rounded-md py-3 mb-8",on:{click:function(t){return e.handleClick()}}},[e._v("Add todo")]),e._v(" "),t("TodoList",{attrs:{todos:e.todos,todoList:e.todoList}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TodoList:o(265).default})},268:function(e,t,o){"use strict";o.r(t);var l=o(43),component=Object(l.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this,t=e._self._c;return t("section",{staticClass:"flex gap-2 text-2xl font-semibold"},[t("h1",[e._v("Hi, ")]),e._v(" "),t("input",{staticClass:"bg-light placeholder:font-normal placeholder:text-xl placeholder:text-grey mb-6",attrs:{type:"text",name:"",id:"",placeholder:"ENTER YOUR NAME"}})])}],!1,null,null,null);t.default=component.exports},271:function(e,t,o){"use strict";o.r(t);var l={name:"IndexPage"},n=o(43),component=Object(n.a)(l,(function(){var e=this._self._c;return e("section",{staticClass:"font-montserrat bg-light m-0 py-8 px-6 min-h-screen"},[e("Greeting"),this._v(" "),e("CreateTodo")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Greeting:o(268).default,CreateTodo:o(267).default})}}]);