(()=>{var t={n:e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},d:(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};(()=>{"use strict";t.r(e);const o=flarum.core.compat["admin/app"];var n=t.n(o);const a=flarum.core.compat["extensions/afrux-forum-widgets-core/common/extend/Widgets"];var r=t.n(a);function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}const l=flarum.core.compat["extensions/afrux-forum-widgets-core/common/components/Widget"];var c=t.n(l);const i=flarum.core.compat["forum/app"];var u=t.n(i);const b=flarum.core.compat["common/components/LoadingIndicator"];var p=t.n(b);flarum.core.compat["common/components/Link"];var d=function(t){var e,o;function n(){return t.apply(this,arguments)||this}o=t,(e=n).prototype=Object.create(o.prototype),e.prototype.constructor=e,s(e,o);var a=n.prototype;return a.oninit=function(e){var o=this;t.prototype.oninit.call(this,e),this.loading=!0;var n=u().forum.attribute("justoverclock-justblab.absoluteEndpoint");fetch(n).then((function(t){return t.json().then((function(t){o.data=t,o.loading=!1,m.redraw(),console.log(o.data)}))}))},a.oncreate=function(e){t.prototype.oncreate.call(this,e)},a.className=function(){return"justBlab-widget"},a.content=function(){var t=this;if(this.loading)return m(p(),null);var e=u().forum.attribute("justoverclock-justblab.onlineUserLabel")||"Online Users:";return void 0!==this.data?m("div",{className:"justblab-user-online"},m("h3",{className:"justBlab-title"},e),Object.keys(this.data).map((function(e){return console.log(t.data[e]),m("ul",{className:"justBlab-ul"},m("li",{className:"justBlab-list"},m("i",{className:"fas fa-user justBlab"})," ",t.data[e]))}))):void 0},n}(c());n().initializers.add("justoverclock/justblab",(function(){var t;t=n(),(new(r())).add({key:"blabWidget",component:d,isDisabled:!1,isUnique:!0,placement:"end",position:1}).extend(t,"justoverclock-justblab"),n().extensionData.for("justoverclock-justblab").registerSetting({setting:"justoverclock-justblab.absoluteEndpoint",name:"justoverclock-justblab.absoluteEndpoint",type:"url",placeholder:"https://justblab.com/baxf/widget.php?q=online_usr",label:n().translator.trans("justoverclock-justblab.admin.absoluteEndpoint"),help:n().translator.trans("justoverclock-justblab.admin.absoluteEndpoint-help")}).registerSetting({setting:"justoverclock-justblab.onlineUserLabel",name:"justoverclock-justblab.onlineUserLabel",type:"text",label:n().translator.trans("justoverclock-justblab.admin.onlineUserLabel"),help:n().translator.trans("justoverclock-justblab.admin.onlineUserLabel-help")})}))})(),module.exports=e})();
//# sourceMappingURL=admin.js.map