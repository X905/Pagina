(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{150:function(t,e,o){var content=o(152);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(35).default)("5db11919",content,!0,{sourceMap:!1})},151:function(t,e,o){"use strict";var r=o(150);o.n(r).a},152:function(t,e,o){(t.exports=o(34)(!1)).push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;-webkit-transform:rotateX(180deg);transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""])},153:function(t,e,o){"use strict";o.r(e);o(14),o(151);var r=o(13),n={components:{AppLogo:Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"VueToNuxtLogo"},[e("div",{staticClass:"Triangle Triangle--two"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--one"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--three"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null).exports},mounted:function(){var t=this.$route.params.slug;console.log(t)},transition:function(t,e){return e&&+t.query.page<+e.query.page?"slide-right":"slide-left"},asyncData:function(){return new Promise((function(t){setTimeout((function(){t({})}),900)}))},head:{title:"Inicio - Angel Castillo",meta:[{hid:"portafolio",name:"portafolio",content:"Soy Daniel y este es mi portafolio"}]}},l=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container"},[e("div",[e("h1",{staticClass:"title"},[this._v("\n       Hola!\n    ")]),this._v(" "),e("h2",{staticClass:"subtitle"},[this._v("\n      Soy Daniel, Puedes echarle un vistazo a mi portafolio :)\n    ")]),this._v(" "),e("div",{staticClass:"links"},[e("nuxt-link",{staticClass:"button--green",attrs:{to:"/about"}},[this._v("Sobre Mí")]),this._v(" "),e("nuxt-link",{staticClass:"button--grey",attrs:{to:"#blog"}},[this._v("Blog")])],1)])])}),[],!1,null,null,null);e.default=l.exports}}]);