!function(n){function e(e){for(var o,i,s=e[0],l=e[1],c=e[2],u=0,m=[];u<s.length;u++)i=s[u],a[i]&&m.push(a[i][0]),a[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(n[o]=l[o]);for(d&&d(e);m.length;)m.shift()();return r.push.apply(r,c||[]),t()}function t(){for(var n,e=0;e<r.length;e++){for(var t=r[e],o=!0,s=1;s<t.length;s++){var l=t[s];0!==a[l]&&(o=!1)}o&&(r.splice(e--,1),n=i(i.s=t[0]))}return n}var o={},a={0:0},r=[];function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=o,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)i.d(t,o,function(e){return n[e]}.bind(null,o));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=l;r.push([95,1]),t()}([,,,,function(n){n.exports={titul:["Великий","Ужастный","Страшный","Безпощадный","Кровожадный"],kind:["Орк","Гоблин","Бармалей","Злодей","Сатана"],name:["Боб","Вася","Игорь","Миша","Антон"]}},,,,,,,,,,function(n,e,t){t(1);n.exports=function(n){var e="";return e+='\n<div class="infotext-reg">\n  <h3>Для того, чтобы Дед Мороз знал кого благодарить за помощь - необходимо зарегистрироваться...</h3>\n  <h3>Если ты уже зарегистрирован - используй свой логин и пароль для входа...</h3>\n</div>\n<div class="row">\n  <div class="col col-sm-5 reg-form fontree">\n    <h2>Регистрация</h2>\n    <form>\n      <div class="form-group row">\n        <label class="col-sm-4 col-form-label" for="inputNamer">Назови свое имя</label>\n        <div class="col-sm-8">\n          <input class="form-control" type="text" id="inputNamer" placeholder="Имя" required>\n        </div>\n      </div>\n      <div class="form-group row">\n        <label class="col-sm-4 col-form-label" for="inputLoginr">Придумай логин</label>\n        <div class="col-sm-8">\n          <input class="form-control" type="email" aria-describedby="emailHelp" id="inputLoginr" placeholder="Логин" required>\n        </div>\n      </div>\n      <div class="form-group row">\n        <label class="col-sm-4 col-form-label" for="inputPasswordr">Придумай пароль</label>\n        <div class="col-sm-8">\n          <input class="form-control" type="password" id="inputPasswordr" placeholder="Пароль" required>\n        </div>\n      </div>\n    </form>\n    <div class="form-group row">\n      <div class="col-sm-10">\n        <button class="btn btn-primary" type="submit" id="registerButton">Готово</button>\n      </div>\n    </div>\n  </div>\n  <div class="col col-sm-5 enter-form fontree">\n    <h2>Вход</h2>\n    <form action="">\n      <div class="form-group row">\n        <label class="col-sm-4 col-form-label" for="inputLogine">Вспомни логин</label>\n        <div class="col-sm-8">\n          <input class="form-control" type="text" id="inputLogine" placeholder="Логин">\n        </div>\n      </div>\n      <div class="form-group row">\n        <label class="col-sm-4 col-form-label" for="inputPassworde">Вспомни  пароль</label>\n        <div class="col-sm-8">\n          <input class="form-control" type="password" id="inputPassworde" placeholder="Пароль">\n        </div>\n      </div>\n      <div class="form-group row">\n        <label class="col-sm-5 col-form-label">------</label>\n      </div>\n    </form>\n    <div class="form-group row">\n      <div class="col-sm-10">\n        <button class="btn btn-primary" type="submit" id="inputButton">Готово</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class="modal fade" id="msgBox" tabindex="-1" role="dialog" data-backdrop="static"></div>\n<div class="loadershow" id="loadershow"></div>'}},function(n,e,t){t(1);n.exports=function(n){var e,t="",o=n||{};return function(n,o,a){t=t+'\n<div class="modal-dialog modal-dialog-centered modal-lg warning " role="document">\n  <div class="modal-content message-warning">\n    <div class="modal-header">\n      <h5 class="modal-title">'+(null==(e=a)?"":e)+'     </h5>\n    </div>\n    <div class="modal-body">\n      <p>'+(null==(e=o)?"":e)+'</p>\n    </div>\n    <div class="modal-footer">\n      <button class="btn btn-outline-secondary" type="button" data-dismiss="modal">'+(null==(e=n)?"":e)+'</button>\n    </div>\n  </div>\n</div>\n<div id="loadershow"></div>'}.call(this,"btnName"in o?o.btnName:"undefined"!=typeof btnName?btnName:void 0,"msg"in o?o.msg:"undefined"!=typeof msg?msg:void 0,"title"in o?o.title:"undefined"!=typeof title?title:void 0),t}},function(n,e,t){var o=t(1);n.exports=function(n){var e="";return e=e+'\n<div class="loader-back"><img'+o.attr("src",t(80),!0,!0)+"></div>"}},function(n,e,t){var o=t(1);n.exports=function(n){var e,a="",r=n||{};return function(n,r){a=a+'\n<div class="landing-page" id="landing">\n  <div class="hero">   \n    <svg viewBox="0 0 500 200">\n      <path id="curve" fill="transparent" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"></path>\n      <text class="text" width="500">\n        <textPath xlink:href="#curve">Новогодний переполох</textPath>\n      </text>\n    </svg>\n    <h1>Пока Дед Мороз развозил подарки, с Главной Ёлки украли все игрушки... </h1>\n    <button class="btn btn-info btn-lg" type="button">'+(null==(e=n)?"":e)+'  </button>\n  </div>\n  <div class="about"><img'+o.attr("src",t(81),!0,!0)+' alt="tree">\n    <div class="text">\n      <h2>Следы на снегу привели Деда Мороза к логову похитителей...</h2>\n      <h2>Но он один не справится...</h2>\n      <h2>Только ты можешь помочь ему!</h2>\n      <h2>В твоих знаниях заключена великая сила магии! </h2>\n    </div>\n    <button class="btn btn-info btn-lg" type="button">'+(null==(e=r)?"":e)+"</button>\n  </div>\n</div>"}.call(this,"content1"in r?r.content1:"undefined"!=typeof content1?content1:void 0,"content2"in r?r.content2:"undefined"!=typeof content2?content2:void 0),a}},function(n){n.exports={russian:["Об игре","Рекорды","Вход / Регистрация"]}},function(n,e,t){var o=t(1);n.exports=function(n){var e,a="",r=n||{};return function(n){a=a+'\n<div class="gameNavBar">\n  <nav class="navbar navbar-expand-md navbar-light bg-light"><img class="navbar-brand"'+o.attr("src",t(83),!0,!0)+' width="40" alt="logo">\n    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>\n    <div class="collapse navbar-collapse" id="navbarSupportedContent">\n      <ul class="navbar-nav mr-auto">',function(){var t=n;if("number"==typeof t.length)for(var r=0,i=t.length;r<i;r++){var s=t[r];a=a+'\n        <li class="nav-item">\n          <button class=" menubtn btn btn-outline-success" type="button"'+o.attr("id",`page-${r}`,!0,!0)+">"+(null==(e=s)?"":e)+"</button>\n        </li>"}else for(var r in i=0,t)i++,s=t[r],a=a+'\n        <li class="nav-item">\n          <button class=" menubtn btn btn-outline-success" type="button"'+o.attr("id",`page-${r}`,!0,!0)+">"+(null==(e=s)?"":e)+"</button>\n        </li>"}.call(this),a=a+'\n      </ul><span class="navbar-text " id="userName">              </span><img class="tree"'+o.attr("src",t(84),!0,!0)+' alt="tree" width="40">\n    </div>\n  </nav>\n</div>'}.call(this,"items"in r?r.items:"undefined"!=typeof items?items:void 0),a}},function(n,e,t){t(1);n.exports=function(n){var e,t="",o=n||{};return function(n){t+='\n<div class="root">\n  <div class="score">\n    <h1>Таблица Рекордов</h1>\n    <table class="table table-striped">\n      <tr>\n        <th scope="row">Место</th>\n        <th scope="row">Имя игрока</th>\n        <th scope="row">Очки</th>\n        <th scope="row">Уровень</th>\n      </tr>',function(){var o=n;if("number"==typeof o.length)for(var a=0,r=o.length;a<r;a++){var i=o[a];t=t+"\n      <tr>\n        <td>"+(null==(e=a+1)?"":e)+"</td>\n        <td>"+(null==(e=i.name)?"":e)+"</td>\n        <td>"+(null==(e=i.score)?"":e)+"</td>\n        <td>"+(null==(e=i.level)?"":e)+"</td>\n      </tr>"}else for(var a in r=0,o)r++,i=o[a],t=t+"\n      <tr>\n        <td>"+(null==(e=a+1)?"":e)+"</td>\n        <td>"+(null==(e=i.name)?"":e)+"</td>\n        <td>"+(null==(e=i.score)?"":e)+"</td>\n        <td>"+(null==(e=i.level)?"":e)+"</td>\n      </tr>"}.call(this),t+="\n    </table>\n  </div>\n</div>"}.call(this,"items"in o?o.items:"undefined"!=typeof items?items:void 0),t}},function(n,e,t){var o=t(1);n.exports=function(n){var e,a="",r=n||{};return function(n){a=a+'\n<div class=" game col col-sm-12 ">\n  <div class="row alert alert-success" role="alert"> \n    <h1>'+(null==(e=n)?"":e)+'</h1>\n  </div>\n  <div class="row">\n    <button class="col col-sm-4 btn btn-outline-success" type="button" id="go">В бой!</button>\n    <button class="col col-sm-4 btn btn-outline-danger" type="button" id="exit">Я боюсь...  </button>\n  </div>\n  <div class="row wrapper">\n    <div class="user-progress" id="user-hp"></div>\n    <div class="monster-progress" id="monster-hp">      </div>\n    <div class="col col-sm-9"> \n      <div class="santa-sprite" id="santa">        </div>\n      <div class="monster-sprite" id="monster">  </div>\n    </div>\n    <div class="col col-sm-3"><img class="gametree"'+o.attr("src",t(88),!0,!0)+' width="400" alt="tree"></div>\n  </div>\n</div>\n<div class="modal fade" id="chooseMagic" tabindex="-1" role="dialog" data-backdrop="static"></div>\n<div class="modal fade" id="task-window" tabindex="-1" role="dialog" data-backdrop="static"></div>\n<div class="modal fade" id="msgBox" tabindex="-1" role="dialog" data-backdrop="static">       </div>'}.call(this,"greeting"in r?r.greeting:"undefined"!=typeof greeting?greeting:void 0),a}},function(n,e,t){n.exports=t.p+"images/leftArm.png"},function(n,e,t){n.exports=t.p+"images/leftLeg.png"},function(n,e,t){n.exports=t.p+"images/rightLeg.png"},function(n,e,t){n.exports=t.p+"images/body.png"},function(n,e,t){n.exports=t.p+"images/head.png"},function(n,e,t){n.exports=t.p+"images/rightArm.png"},function(n,e,t){n.exports=t.p+"images/leftArm1.png"},function(n,e,t){n.exports=t.p+"images/leftLeg1.png"},function(n,e,t){n.exports=t.p+"images/rightLeg1.png"},function(n,e,t){n.exports=t.p+"images/body1.png"},function(n,e,t){n.exports=t.p+"images/head1.png"},function(n,e,t){n.exports=t.p+"images/rightArm1.png"},function(n,e,t){n.exports=t.p+"images/weapon1.png"},function(n,e,t){n.exports=t.p+"images/leftArm2.png"},function(n,e,t){n.exports=t.p+"images/leftLeg2.png"},function(n,e,t){n.exports=t.p+"images/rightLeg2.png"},function(n,e,t){n.exports=t.p+"images/body2.png"},function(n,e,t){n.exports=t.p+"images/head2.png"},function(n,e,t){n.exports=t.p+"images/rightArm2.png"},function(n,e,t){n.exports=t.p+"images/weapon2.png"},function(n,e,t){n.exports=t.p+"images/leftArm3.png"},function(n,e,t){n.exports=t.p+"images/leftLeg3.png"},function(n,e,t){n.exports=t.p+"images/rightLeg3.png"},function(n,e,t){n.exports=t.p+"images/body3.png"},function(n,e,t){n.exports=t.p+"images/head3.png"},function(n,e,t){n.exports=t.p+"images/rightArm3.png"},function(n,e,t){n.exports=t.p+"images/weapon3.png"},function(n,e,t){var o=t(1);n.exports=function(n){var e,t="",a=n||{};return function(n,a,r){t=t+'\n<div class="progress " style="height: 50px;">\n  <div class="progress-bar bg-hp-100 a-breath"'+o.attr("id",`${a}`,!0,!0)+' role="progressbar"'+o.attr("style",o.style(`width: ${n}%;`),!0,!0)+">\n    <h3>"+(null==(e=r)?"":e)+"</h3>\n  </div>\n</div>"}.call(this,"hp"in a?a.hp:"undefined"!=typeof hp?hp:void 0,"idpb"in a?a.idpb:"undefined"!=typeof idpb?idpb:void 0,"name"in a?a.name:"undefined"!=typeof name?name:void 0),t}},function(n,e,t){var o=t(1);n.exports=function(n){var e,t="",a=n||{};return function(n,a,r){t=t+'\n<div class="modal-dialog modal-dialog-centered modal-lg warning " role="document">\n  <div class="modal-content message-warning">\n    <div class="modal-header">\n      <h5 class="modal-title">'+(null==(e=r)?"":e)+'     </h5>\n    </div>\n    <div class="modal-body">\n      <div id="btn-area">',function(){var n=a;if("number"==typeof n.length)for(var r=0,i=n.length;r<i;r++){var s=n[r];t=t+"\n        <button"+(o.attr("class",o.classes([`btn btn-lg btn-block btn-outline-${s.color}`],[!0]),!1,!0)+o.attr("id",`magic-btn-${r}`,!0,!0))+' type="button">'+(null==(e=s.name)?"":e)+"</button>"}else for(var r in i=0,n)i++,s=n[r],t=t+"\n        <button"+(o.attr("class",o.classes([`btn btn-lg btn-block btn-outline-${s.color}`],[!0]),!1,!0)+o.attr("id",`magic-btn-${r}`,!0,!0))+' type="button">'+(null==(e=s.name)?"":e)+"</button>"}.call(this),t=t+'\n      </div>\n    </div>\n    <div class="modal-footer">\n      <button class="btn btn-outline-secondary" type="button" data-dismiss="modal">'+(null==(e=n)?"":e)+'</button>\n    </div>\n  </div>\n</div>\n<div id="loadershow"></div>'}.call(this,"btnName"in a?a.btnName:"undefined"!=typeof btnName?btnName:void 0,"btns"in a?a.btns:"undefined"!=typeof btns?btns:void 0,"title"in a?a.title:"undefined"!=typeof title?title:void 0),t}},function(n){n.exports={types:[{name:"Ледяная Глыба",color:"primary"},{name:"Зеленый Змий",color:"success"},{name:"Огненный Дракон",color:"danger"},{name:"Буря в пустыне",color:"warning"},{name:"Смертельный Град",color:"info"},{name:"Черный плащ",color:"dark"}]}},function(n,e,t){t(1);n.exports=function(n){var e,t="",o=n||{};return function(n,o,a,r,i){t=t+'\n<div class="modal-dialog modal-dialog-centered modal-lg warning " role="document">\n  <div class="modal-content message-warning">\n    <div class="modal-header">\n      <h5 class="modal-title">'+(null==(e=i)?"":e)+'     </h5>\n    </div>\n    <div class="modal-body">\n      <div id="task-area"> \n        <p>'+(null==(e=o)?"":e)+"  "+(null==(e=a)?"":e)+"  "+(null==(e=r)?"":e)+'</p>\n        <div class="input-group mb-3">\n          <input class="form-control" type="number" placeholder="Твой ответ" id="user-answer">\n          <div class="input-group-append">\n            <button class="btn btn-success" type="button" id="chekIt">Проверить</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="modal-footer">\n      <button class="btn btn-outline-secondary" type="button" data-dismiss="modal">'+(null==(e=n)?"":e)+'</button>\n    </div>\n  </div>\n</div>\n<div id="loadershow"></div>'}.call(this,"btnName"in o?o.btnName:"undefined"!=typeof btnName?btnName:void 0,"first"in o?o.first:"undefined"!=typeof first?first:void 0,"operator"in o?o.operator:"undefined"!=typeof operator?operator:void 0,"second"in o?o.second:"undefined"!=typeof second?second:void 0,"title"in o?o.title:"undefined"!=typeof title?title:void 0),t}},,,,,,,,,,,,,,,,,,,,,,,,function(n,e){},function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){n.exports=t.p+"images/loader.gif"},function(n,e,t){n.exports=t.p+"images/tree.1.png"},function(n,e,t){},function(n,e,t){n.exports=t.p+"images/fav.png"},function(n,e,t){n.exports=t.p+"images/tree.png"},function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){n.exports=t.p+"images/tree.1.png"},function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){"use strict";t.r(e);t(53),t(55);var o=t(3),a=t(2),r=t.n(a),i=t(14),s=t.n(i),l=(t(77),t(15)),c=t.n(l);t(78);function d(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}var u=function(){function n(e,t){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.msg=c()({title:e,msg:t,btnName:"Понял"}),document.getElementById("msgBox").innerHTML=this.msg}var e,t,o;return e=n,(t=[{key:"show",value:function(){window.$("#msgBox").modal("show")}}])&&d(e.prototype,t),o&&d(e,o),n}(),m=(t(79),t(16)),f=t.n(m);function p(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}var v=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.elemHtml=f()()}var e,t,o;return e=n,(t=[{key:"show",value:function(){document.getElementById("loadershow").innerHTML=this.elemHtml,document.getElementById("loadershow").style.display="block"}},{key:"hide",value:function(){document.getElementById("loadershow").innerHTML="",document.getElementById("loadershow").style.display="none",this.element=""}}])&&p(e.prototype,t),o&&p(e,o),n}();function h(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function g(n){de.name=n.name,de.login=n.login,de.password=n.password,de.score=n.score,de.level=n.level,de.toys=n.toys,de.novice=n.novice||!1,de.hp=pe}function b(){document.getElementById("userName").innerText="".concat(de.name,", ").concat(ge),(new ce).render()}var y=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.element=s()()}var e,t,o;return e=n,(t=[{key:"addUser",value:function(){var n=this,e={};e.password=document.getElementById("inputPasswordr").value,e.login=document.getElementById("inputLoginr").value,e.name=document.getElementById("inputNamer").value,""===e.name||""===e.login||""===e.password?(this.msg=new u("Внимание!","Необходимо заполнить все поля..."),window.$("#msgBox").modal("show")):(document.getElementById("inputPasswordr").value="",document.getElementById("inputLoginr").value="",document.getElementById("inputNamer").value="",e.score=0,e.level=0,e.toys=0,e.novice=fe,this.loadershow=new v,this.loadershow.show(),r.a.post("".concat(be,"/add"),e).then(function(t){n.loadershow.hide(),"error"===t.data?(n.msg=new u("Внимание! Что-то пошло не так...","Пользователь с таким логином уже существует или нет связи с сервером! Попробуй другой ЛОГИН"),window.$("#msgBox").modal("show")):(g(e),b())}))}},{key:"getUser",value:function(){var n=this;de.password=document.getElementById("inputPassworde").value,de.login=document.getElementById("inputLogine").value,""===de.login||""===de.password?(this.msg=new u("Внимание!","Необходимо заполнить все поля..."),window.$("#msgBox").modal("show")):(document.getElementById("inputPassworde").value="",document.getElementById("inputLogine").value="",this.loadershow=new v,this.loadershow.show(),r.a.post("".concat(be,"/login"),de).then(function(e){n.loadershow.hide(),e.data?(g(e.data),b()):(n.msg=new u("Внимание! Что-то пошло не так...","Пользователя с таким логином и паролем нет в базе данных... Вспомни свой ЛОГИН и ПАРОЛЬ"),window.$("#msgBox").modal("show"))}))}},{key:"render",value:function(){""===de.name?(document.getElementById("root").innerHTML=this.element,document.getElementById("registerButton").addEventListener("click",this.addUser),document.getElementById("inputButton").addEventListener("click",this.getUser)):b()}}])&&h(e.prototype,t),o&&h(e,o),n}(),w=t(17),k=t.n(w);t(82);function x(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function E(n){"button"===n.target.type&&(""!==de.name?(new ce).render():(new y).render())}var B=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n);var e=Be.button1,t=Be.button2,o=de.name;""!==o&&(e="".concat(o,", ").concat(Be.button1.toLowerCase()),t="".concat(o,", ").concat(Be.button2.toLowerCase())),this.page=k()({content1:e,content2:t})}var e,t,o;return e=n,(t=[{key:"render",value:function(){document.getElementById("root").innerHTML=this.page,document.getElementById("landing").addEventListener("click",E)}}])&&x(e.prototype,t),o&&x(e,o),n}(),L=t(18),I=t(19),T=t.n(I);t(85);function M(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}var P=function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.menuItems=L[e]}var e,t,o;return e=n,(t=[{key:"render",value:function(){document.querySelector("#nav").innerHTML=T()({items:this.menuItems})}}])&&M(e.prototype,t),o&&M(e,o),n}(),j=t(20),N=t.n(j);t(86);function A(n){return function(n){if(Array.isArray(n))return n}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function H(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}var O=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.url=be,document.getElementById("root").innerHTML='<div id="loadershow" class="loadershow"></div>'}var e,t,a;return e=n,(t=[{key:"render",value:function(){var n=this;this.loadershow=new v,this.loadershow.show(),r.a.get(this.url).then(function(e){n.loadershow.hide();var t=A(o.sortBy(e.data,"score").reverse()).slice(0);n.page=N()({items:t}),document.getElementById("root").innerHTML=n.page})}}])&&H(e.prototype,t),a&&H(e,a),n}(),C=(t(87),t(21)),S=t.n(C),$=t(22),q=t.n($),_=t(23),U=t.n(_),F=t(24),G=t.n(F),J=t(25),z=t.n(J),D=t(26),K=t.n(D),Q=t(27),R=t.n(Q);t(89);function V(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}var W=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.santaId=["santa-leftArm","santa-leftLeg","santa-rightLeg","santa-body","santa-head","santa-rightArm"],this.santa=[q.a,U.a,G.a,z.a,K.a,R.a],this.container=document.createElement("div"),this.container.classList.add("santa")}var e,t,o;return e=n,(t=[{key:"draw",value:function(){var n=this;this.sprite=this.santa.map(function(e,t){var o=new Image;return o.src=e,o.id=n.santaId[t],o.classList.add([n.santaId[t].split("-")[1],"breath"].join("-")),o}),this.sprite.forEach(function(e){n.container.appendChild(e)}),document.getElementById("santa").appendChild(this.container)}}])&&V(e.prototype,t),o&&V(e,o),n}(),X=t(28),Y=t.n(X),Z=t(29),nn=t.n(Z),en=t(30),tn=t.n(en),on=t(31),an=t.n(on),rn=t(32),sn=t.n(rn),ln=t(33),cn=t.n(ln),dn=t(34),un=t.n(dn),mn=t(35),fn=t.n(mn),pn=t(36),vn=t.n(pn),hn=t(37),gn=t.n(hn),bn=t(38),yn=t.n(bn),wn=t(39),kn=t.n(wn),xn=t(40),En=t.n(xn),Bn=t(41),Ln=t.n(Bn),In=t(42),Tn=t.n(In),Mn=t(43),Pn=t.n(Mn),jn=t(44),Nn=t.n(jn),An=t(45),Hn=t.n(An),On=t(46),Cn=t.n(On),Sn=t(47),$n=t.n(Sn),qn=t(48),_n=t.n(qn),Un=t(4);t(90);function Fn(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function Gn(n){return Math.floor(Math.random()*n)}var Jn=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.monsterChunks=[[cn.a,En.a,$n.a],[tn.a,gn.a,Nn.a],[an.a,yn.a,Hn.a],[nn.a,vn.a,Pn.a],[sn.a,kn.a,Cn.a],[un.a,Ln.a,_n.a],[Y.a,fn.a,Tn.a]],this.monsterId=["monster-rightArm","monster-rightLeg","monster-body","monster-leftLeg","monster-head","monster-weapon","monster-leftArm"],this.container=document.createElement("div"),this.container.classList.add("monster"),""===ue.name?(this.name="",this.monster=[],this.level=0):(this.name=ue.name,this.monster=ue.monster.slice())}var e,t,o;return e=n,(t=[{key:"getNewMonster",value:function(){var n,e=this;this.monster=this.monsterChunks.map(function(n,t){var o=new Image;return o.src=n[Gn(3)],o.id=e.name[t],o}),this.name=(n=5,[Un.titul[Gn(n)],Un.kind[Gn(n)],Un.name[Gn(n)]].join(" ")),ue.name=this.name,ue.monster=this.monster.slice()}},{key:"getName",value:function(){return this.name}},{key:"getMonster",value:function(){""===this.name&&this.getNewMonster()}},{key:"reset",value:function(){this.monster=[],this.name=""}},{key:"draw",value:function(){var n=this;this.getMonster(),this.monster.forEach(function(e,t){e.classList.add([n.monsterId[t].split("-")[1],"breath"].join("-")),n.container.appendChild(e)}),document.getElementById("monster").innerHTML="",document.getElementById("monster").appendChild(this.container)}}])&&Fn(e.prototype,t),o&&Fn(e,o),n}(),zn=t(49),Dn=t.n(zn);t(91);function Kn(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}var Qn=function(){function n(e,t){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n);var o="".concat(e);this.pbHtml=Dn()({idpb:t,name:o,hp:100})}var e,t,o;return e=n,(t=[{key:"getElement",value:function(){return this.pbHtml}}])&&Kn(e.prototype,t),o&&Kn(e,o),n}(),Rn=(t(92),t(50)),Vn=t.n(Rn),Wn=t(51),Xn=(t(93),t(52)),Yn=t.n(Xn);function Zn(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}var ne=function(){function n(e){if(function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),"Math"===e){var t=Math.floor(100*Math.random()+10);this.firstNumber=Math.floor(Math.random()*t+1),this.secondNumber=Math.floor(Math.random()*t+1);var o=Math.floor(2*Math.random());switch(this.operator="",this.result=0,o){case 0:this.result=this.firstNumber+this.secondNumber,this.operator="+";break;case 1:this.result=this.firstNumber-this.secondNumber,this.operator="-"}this.TaskElement=Yn()({title:"Реши Задачу",btnName:"Закрыть",first:this.firstNumber,second:this.secondNumber,operator:this.operator}),this.FullTask={Element:this.TaskElement,Answer:this.result}}}var e,t,o;return e=n,(t=[{key:"getTask",value:function(){return this.FullTask}}])&&Zn(e.prototype,t),o&&Zn(e,o),n}();function ee(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}var te=0;function oe(n){var e="userHP"===n?Ee:xe,t=document.getElementById(n),o=parseInt(t.style.width,10);if(o>0){var a="bg-hp-".concat(o),r="bg-hp-".concat(o-e),i="".concat(o-e,"%");return t.style.width=i,t.classList.replace(a,r),o-e}return o}var ae=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.task=new ne("Math").getTask(),te=this.task.Answer}var e,t,o;return e=n,(t=[{key:"solveTask",value:function(n){if("button"===n.target.type){var e=parseInt(document.getElementById("user-answer").value,10);if(window.$("#task-window").modal("hide"),console.log(te===e,e),e===te)ue.hp=oe("monsterHP"),0===ue.hp&&(ue.name="",(new Jn).draw(),document.querySelector(".monster-progress").innerHTML=new Qn(ue.name,"monsterHP").getElement(),de.score+=100,de.toys+=1,de.level+=1,(t=new v).show(),r.a.post("".concat(be,"/edit"),de).then(function(n){t.hide(),"error"===n.data?new u("Внимание! Что-то пошло не так...","Игра не сохранена. Сервер не доступен...").show():new u("Игра сохранена.","Переход на следующий уровень. Закрывай это окно и в бой!").show()}));else if(de.hp=oe("userHP"),0===de.hp)document.querySelectorAll(".menubtn").forEach(function(n){n.classList.remove("disabled"),n.removeAttribute("disabled")}),(new O).render()}var t}},{key:"show",value:function(){document.getElementById("task-window").innerHTML=this.task.Element,document.getElementById("task-area").addEventListener("click",this.solveTask),window.$("#task-window").modal("show")}}])&&ee(e.prototype,t),o&&ee(e,o),n}();function re(n){return function(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function ie(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}var se=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n);var e=re(Wn.types);this.element=Vn()({title:"Выбери заклинание",btnName:"Закрыть",btns:e})}var e,t,o;return e=n,(t=[{key:"goToBattle",value:function(n){"button"===n.target.type&&(this.targetId=n.target.id,window.$("#chooseMagic").modal("hide"),(new ae).show())}},{key:"show",value:function(){document.getElementById("chooseMagic").innerHTML=this.element,document.getElementById("btn-area").addEventListener("click",this.goToBattle),window.$("#chooseMagic").modal("show")}}])&&ie(e.prototype,t),o&&ie(e,o),n}();function le(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}var ce=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.greeting="",this.user=new W,this.monster=new Jn}var e,t,a;return e=n,(t=[{key:"getElement",value:function(){return this.page}},{key:"exit",value:function(){this.landing=new B,document.querySelectorAll(".menubtn").forEach(function(n){n.classList.remove("disabled"),n.removeAttribute("disabled")}),this.landing.render()}},{key:"goGame",value:function(){this.battle=me,(new se).show()}},{key:"render",value:function(){""!==de.name?(de.novice?(this.greeting=o.join([we,de.name,"!"],""),de.visit=!1):this.greeting=o.join([ke,de.name,"!"],""),this.page=S()({greeting:this.greeting}),document.querySelectorAll(".menubtn").forEach(function(n){n.classList.add("disabled"),n.setAttribute("disabled","disabled")}),document.getElementById("root").innerHTML=this.page,this.user.draw(),this.monster.draw(),this.monsterProgressBar=new Qn(ue.name,"monsterHP"),this.userProgressBar=new Qn(de.name,"userHP"),de.hp=pe,ue.hp=pe,document.querySelector(".user-progress").innerHTML=this.userProgressBar.getElement(),document.querySelector(".monster-progress").innerHTML=this.monsterProgressBar.getElement(),document.getElementById("exit").addEventListener("click",this.exit),document.getElementById("go").addEventListener("click",this.goGame)):(this.page=ye,document.getElementById("root").innerHTML=this.page)}}])&&le(e.prototype,t),a&&le(e,a),n}(),de={name:"",login:"",password:"",score:0,level:0,toys:0},ue={name:"",monster:[]},me={},fe=!0,pe=100,ve=[],he=0,ge="помоги Деду Морозу нарядить Ёлку!",be="https://sleepy-atoll-27552.herokuapp.com/user",ye='<div class="game alert alert-danger" role="alert"><h1>Зарегистрируйся или войди под своим именем...</h1></div>',we="Добро пожаловать, ",ke="С возвращением, ",xe=25,Ee=10,Be={button1:"НАЙДИ ИГРУШКИ",button2:"В БОЙ"};function Le(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}ve.push(B),ve.push(O),ve.push(y);var Ie=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.navbar=new P("russian"),this.page=new ve[he]}var e,t,o;return e=n,(t=[{key:"handler",value:function(n){if("button"===n.target.type){var e=n.target.id.split("-")[1];this.page=new ve[e],this.page.render()}}},{key:"render",value:function(){this.navbar.render(),this.page.render(),document.querySelector("nav").addEventListener("click",this.handler)}}])&&Le(e.prototype,t),o&&Le(e,o),n}();t(94);window.$=t(7),(new Ie).render()}]);