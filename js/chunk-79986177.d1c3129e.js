(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79986177"],{"1dde":function(e,r,t){var n=t("d039"),i=t("b622"),o=t("2d00"),a=i("species");e.exports=function(e){return o>=51||!n((function(){var r=[],t=r.constructor={};return t[a]=function(){return{foo:1}},1!==r[e](Boolean).foo}))}},"1ef8":function(e,r,t){"use strict";t("863a")},2614:function(e,r,t){"use strict";t.r(r);var n=t("7a23"),i={class:"container-fluid"},o={class:"row my-2"},a={class:"col-md-3 order-2 order-md-1"},c={class:"row"},s={class:"col my-2 order-1 order-md-2"};function u(e,r,t,u,f,l){var d=Object(n["i"])("CamPlaceholder");return Object(n["g"])(),Object(n["c"])("main",i,[Object(n["e"])("div",o,[Object(n["e"])("aside",a,[Object(n["e"])("div",c,[(Object(n["g"])(!0),Object(n["c"])(n["a"],null,Object(n["h"])(l.sidebarCameras,(function(e){return Object(n["g"])(),Object(n["c"])("div",{key:e.identifier,class:"col-6 col-md-12 my-2"},[Object(n["e"])(d,{identifier:e.identifier,title:e.title,"background-color":e.backgroundColor,onPlaceholderClick:l.switchMainCamera},null,8,["identifier","title","background-color","onPlaceholderClick"])])})),128))])]),Object(n["e"])("section",s,[Object(n["e"])(d,{key:l.mainCamera.identifier,title:l.mainCamera.title,"background-color":l.mainCamera.backgroundColor},null,8,["title","background-color"])])])])}t("4de4"),t("7db0");var f={class:"position-absolute top-0 start-0 end-0 bottom-0 text-center text-white"};function l(e,r,t,i,o,a){return Object(n["g"])(),Object(n["c"])("div",{style:{backgroundColor:t.backgroundColor,cursor:t.identifier?"pointer":"unset"},class:[a.cssClasses,"position-relative CamPlaceholder"],onClick:r[1]||(r[1]=function(){return a.onClick&&a.onClick.apply(a,arguments)})},[Object(n["e"])("div",f,Object(n["j"])(t.title),1)],6)}t("a9e3");var d={name:"CamPlaceholder",props:{identifier:{type:Number},title:{type:String,required:!0},backgroundColor:{type:String,default:"rgb(0, 0, 0)"}},emits:["placeholderClick"],computed:{cssClasses:function(){return this.identifier?["CamPlaceholder--Identifier".concat(this.identifier)]:[]}},methods:{onClick:function(){this.identifier&&this.$emit("placeholderClick",this.identifier)}}};t("1ef8");d.render=l;var b=d,p={name:"Main",components:{CamPlaceholder:b},data:function(){return{allCameras:[{identifier:1,title:"CAM 1",backgroundColor:"var(--bs-danger)"},{identifier:2,title:"CAM 2",backgroundColor:"var(--bs-warning)"},{identifier:3,title:"CAM 3",backgroundColor:"var(--bs-success)"},{identifier:4,title:"CAM 4",backgroundColor:"var(--bs-info)"}],mainCameraIdentifier:4}},computed:{sidebarCameras:function(){var e=this;return this.allCameras.filter((function(r){return r.identifier!==e.mainCameraIdentifier}))},mainCamera:function(){var e=this;return this.allCameras.find((function(r){return r.identifier===e.mainCameraIdentifier}))}},methods:{switchMainCamera:function(e){this.mainCameraIdentifier=e}}};p.render=u;r["default"]=p},"4de4":function(e,r,t){"use strict";var n=t("23e7"),i=t("b727").filter,o=t("1dde"),a=o("filter");n({target:"Array",proto:!0,forced:!a},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},5899:function(e,r){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,r,t){var n=t("1d80"),i=t("5899"),o="["+i+"]",a=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),s=function(e){return function(r){var t=String(n(r));return 1&e&&(t=t.replace(a,"")),2&e&&(t=t.replace(c,"")),t}};e.exports={start:s(1),end:s(2),trim:s(3)}},"65f0":function(e,r,t){var n=t("861d"),i=t("e8b5"),o=t("b622"),a=o("species");e.exports=function(e,r){var t;return i(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!i(t.prototype)?n(t)&&(t=t[a],null===t&&(t=void 0)):t=void 0),new(void 0===t?Array:t)(0===r?0:r)}},7156:function(e,r,t){var n=t("861d"),i=t("d2bb");e.exports=function(e,r,t){var o,a;return i&&"function"==typeof(o=r.constructor)&&o!==t&&n(a=o.prototype)&&a!==t.prototype&&i(e,a),e}},"7db0":function(e,r,t){"use strict";var n=t("23e7"),i=t("b727").find,o=t("44d2"),a="find",c=!0;a in[]&&Array(1)[a]((function(){c=!1})),n({target:"Array",proto:!0,forced:c},{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),o(a)},"863a":function(e,r,t){},a9e3:function(e,r,t){"use strict";var n=t("83ab"),i=t("da84"),o=t("94ca"),a=t("6eeb"),c=t("5135"),s=t("c6b6"),u=t("7156"),f=t("c04e"),l=t("d039"),d=t("7c73"),b=t("241c").f,p=t("06cf").f,m=t("9bf2").f,C=t("58a8").trim,h="Number",v=i[h],g=v.prototype,k=s(d(g))==h,y=function(e){var r,t,n,i,o,a,c,s,u=f(e,!1);if("string"==typeof u&&u.length>2)if(u=C(u),r=u.charCodeAt(0),43===r||45===r){if(t=u.charCodeAt(2),88===t||120===t)return NaN}else if(48===r){switch(u.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+u}for(o=u.slice(2),a=o.length,c=0;c<a;c++)if(s=o.charCodeAt(c),s<48||s>i)return NaN;return parseInt(o,n)}return+u};if(o(h,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var I,A=function(e){var r=arguments.length<1?0:e,t=this;return t instanceof A&&(k?l((function(){g.valueOf.call(t)})):s(t)!=h)?u(new v(y(r)),t,A):y(r)},O=n?b(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),N=0;O.length>N;N++)c(v,I=O[N])&&!c(A,I)&&m(A,I,p(v,I));A.prototype=g,g.constructor=A,a(i,h,A)}},b727:function(e,r,t){var n=t("0366"),i=t("44ad"),o=t("7b0b"),a=t("50c4"),c=t("65f0"),s=[].push,u=function(e){var r=1==e,t=2==e,u=3==e,f=4==e,l=6==e,d=7==e,b=5==e||l;return function(p,m,C,h){for(var v,g,k=o(p),y=i(k),I=n(m,C,3),A=a(y.length),O=0,N=h||c,j=r?N(p,A):t||d?N(p,0):void 0;A>O;O++)if((b||O in y)&&(v=y[O],g=I(v,O,k),e))if(r)j[O]=g;else if(g)switch(e){case 3:return!0;case 5:return v;case 6:return O;case 2:s.call(j,v)}else switch(e){case 4:return!1;case 7:s.call(j,v)}return l?-1:u||f?f:j}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},e8b5:function(e,r,t){var n=t("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}}}]);
//# sourceMappingURL=chunk-79986177.d1c3129e.js.map