(function(t){function n(n){for(var r,i,c=n[0],u=n[1],s=n[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(n);while(p.length)p.shift()();return a.push.apply(a,s||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],r=!0,c=1;c<e.length;c++){var u=e[c];0!==o[u]&&(r=!1)}r&&(a.splice(n--,1),t=i(i.s=e[0]))}return t}var r={},o={app:0},a=[];function i(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=r,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)i.d(e,r,function(n){return t[n]}.bind(null,r));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/intelligent-app/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var s=0;s<c.length;s++)n(c[s]);var l=u;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},2447:function(t,n,e){"use strict";e("6546")},"43c0":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);var r=e("2b0e"),o=function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i={name:"App"},c=i,u=(e("64bb"),e("2877")),s=Object(u["a"])(c,o,a,!1,null,null,null),l=s.exports,f=e("8c4f"),p=function(){var t=this,n=t._self._c;return n("div",[n("Navbar"),n("VideoBackground"),n("Parallax"),t._m(0)],1)},v=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"content"},[n("h2",[t._v("Интеллектаульные приложения")]),n("p",[t._v("Интеллектуальные приложения используют последние достижения в области искусственного интеллекта, машинного обучения и анализа данных для создания более интеллектуальных и эффективных решений. Эти приложения преобразуют отрасли, автоматизируя процессы, улучшая процесс принятия решений и предоставляя персонализированный опыт.")]),n("h2",[t._v("Преимущества")]),n("ul",[n("li",[t._v("Автоматизированные процессы: Возможность оптимизировать свои процессы при помощи интеллектуальной автоматизации.")]),n("li",[t._v("Улучшенное принятие решений: Можно принимать обоснованные решения при помощи предиктивной аналитики.")]),n("li",[t._v("Персонализированный опыт: Предоставить своим пользователям индивидуальный опыт теперь гораздо проще.")]),n("li",[t._v("Масштабируемость: Легко изменяйте свои приложения в соответствии c растущими требованиями.")]),n("li",[t._v("Интеграция: Плавная интеграция c существующими системами и технологиями.")])]),n("h2",[t._v("Приложения")]),n("p",[t._v("Интеллектуальные приложения используются в различных секторах, включая здравоохранение, финансы, розничную торговлю и производство. Они помогают организациям повышать эффективность, снижать затраты и оставаться конкурентоспособными на рынке.")])])}],_=function(){var t=this,n=t._self._c;return n("nav",[n("div",{staticClass:"hamburger",on:{click:t.toggleMenu}},[t._v("☰")]),n("ul",{class:{open:t.isOpen}},[n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Домой")])],1),n("li",[n("router-link",{attrs:{to:"/about"}},[t._v("О себе")])],1),n("li",[n("router-link",{attrs:{to:"/contact"}},[t._v("Контакты")])],1)])])},d=[],b={data(){return{isOpen:!1}},methods:{toggleMenu(){this.isOpen=!this.isOpen}}},h=b,m=(e("f08f"),Object(u["a"])(h,_,d,!1,null,"8aba5f16",null)),g=m.exports,O=function(){var t=this,n=t._self._c;return n("div",{staticClass:"video-background"},[n("video",{attrs:{autoplay:"",muted:"",loop:"",id:"bg-video"},domProps:{muted:!0}},[n("source",{attrs:{src:e("ae46"),type:"video/mp4"}}),t._v(" Your browser does not support HTML5 video. ")]),t._m(0)])},y=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"content"},[n("h1",[t._v("Интеллектуальные приложения")])])}],x={name:"VideoBackground"},j=x,k=(e("f7bf"),Object(u["a"])(j,O,y,!1,null,"5953e6ca",null)),w=k.exports,C=function(){var t=this;t._self._c;return t._m(0)},P=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"parallax"},[n("div",{staticClass:"content"},[n("h1",[t._v("Погрузитесь в мир интеллектуальных приложений.")]),n("p",[t._v("Вот где настоящее будущее мира технологий.")])])])}],M={name:"Parallax"},N=M,S=(e("ba13"),Object(u["a"])(N,C,P,!1,null,"56ed3da0",null)),B=S.exports,T={components:{Navbar:g,VideoBackground:w,Parallax:B}},V=T,A=(e("da97"),Object(u["a"])(V,p,v,!1,null,null,null)),H=A.exports,J=function(){var t=this,n=t._self._c;return n("div",{staticClass:"about"},[n("Navbar"),t._m(0)],1)},F=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"content"},[n("h2",[t._v("О себе")]),n("p",[t._v("Молодой студент 3 курса МАДИ, которому была поставлена задача разработать интернет приложение на одну из тематик по стратегическим технологиям 2024 года. Кажется, у меня получилось.")])])}],K={components:{Navbar:g}},L=K,Y=(e("8f48"),Object(u["a"])(L,J,F,!1,null,"47baa330",null)),$=Y.exports,q=function(){var t=this,n=t._self._c;return n("div",{staticClass:"contact"},[n("Navbar"),t._m(0)],1)},z=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"content"},[n("h2",[t._v("Как co мной связаться")]),n("p",[t._v("Пожалуйста, перед тем как связаться, используя ресурсы ниже, поставьте оценку!")]),n("h2",[t._v("Контакты")]),n("p",[t._v("Почта: конечножереальнойпочтыздесьнебудет@google.com")]),n("p",[t._v("Телефон: 8-800-555-35-35 (реально? а как же приватность?)")]),n("h2",[t._v("Адрес")]),n("p",[t._v("Россия, Москва, Ленинградский проспект, 64")]),n("h2",[t._v("Социальные сети")]),n("p",[t._v("Следите за моими проектами (кого я обманываю) в моих социальных сетях:")]),n("ul",[n("li",[n("a",{attrs:{href:"https://vk.com/id854783343",target:"_blank"}},[t._v("BK")])]),n("li",[n("a",{attrs:{href:"https://facebook.com/intelligentapps",target:"_blank"}},[t._v("Facebook")])])])])}],D={components:{Navbar:g}},E=D,G=(e("2447"),Object(u["a"])(E,q,z,!1,null,"068c94fe",null)),I=G.exports;r["a"].use(f["a"]);var Q=new f["a"]({routes:[{path:"/",name:"Home",component:H},{path:"/about",name:"About",component:$},{path:"/contact",name:"Contact",component:I}]});e("a347");r["a"].config.productionTip=!1,new r["a"]({router:Q,render:t=>t(l)}).$mount("#app")},"5af8":function(t,n,e){},"64bb":function(t,n,e){"use strict";e("9bd3")},6546:function(t,n,e){},"8f48":function(t,n,e){"use strict";e("ebf3")},"9bd3":function(t,n,e){},a347:function(t,n,e){},ae46:function(t,n,e){t.exports=e.p+"media/video.60a1ea00.mp4"},b78e:function(t,n,e){},ba13:function(t,n,e){"use strict";e("5af8")},da97:function(t,n,e){"use strict";e("fbca")},ebf3:function(t,n,e){},f08f:function(t,n,e){"use strict";e("b78e")},f7bf:function(t,n,e){"use strict";e("43c0")},fbca:function(t,n,e){}});
//# sourceMappingURL=app.d0858158.js.map