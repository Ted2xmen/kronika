(function(e){function t(t){for(var r,l,n=t[0],o=t[1],i=t[2],d=0,u=[];d<n.length;d++)l=n[d],Object.prototype.hasOwnProperty.call(c,l)&&c[l]&&u.push(c[l][0]),c[l]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);b&&b(t);while(u.length)u.shift()();return s.push.apply(s,i||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,l=1;l<a.length;l++){var o=a[l];0!==c[o]&&(r=!1)}r&&(s.splice(t--,1),e=n(n.s=a[0]))}return e}var r={},c={app:0},s=[];function l(e){return n.p+"js/"+({about:"about"}[e]||e)+"."+{about:"e647adab"}[e]+".js"}function n(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.e=function(e){var t=[],a=c[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=c[e]=[t,r]}));t.push(a[2]=r);var s,o=document.createElement("script");o.charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.src=l(e);var i=new Error;s=function(t){o.onerror=o.onload=null,clearTimeout(d);var a=c[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",i.name="ChunkLoadError",i.type=r,i.request=s,a[1](i)}c[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:o})}),12e4);o.onerror=o.onload=s,document.head.appendChild(o)}return Promise.all(t)},n.m=e,n.c=r,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var b=i;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"07a3":function(e,t,a){"use strict";var r=a("7a23"),c={class:"py-5 container-lg bg-glass text-white"},s=Object(r["h"])('<div class="row"><div class="col-2"><h5>Menu</h5><ul class="nav flex-column"><li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li></ul></div><div class="col-2"><h5>Faydalı Linkler</h5><ul class="nav flex-column"><li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li></ul></div><div class="col-2"><h5>İletişim</h5><ul class="nav flex-column"><li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li></ul></div><div class="col-4 offset-1"><form><h5>Subscribe to our newsletter</h5><p>Monthly digest of whats new and exciting from us.</p><div class="d-flex w-100 gap-2"><label for="newsletter1" class="visually-hidden">Email address</label><input id="newsletter1" type="text" class="form-control" placeholder="Email address"><button class="btn btn-primary" type="button">Subscribe</button></div></form></div></div><div class="d-flex justify-content-between py-2 my-2 border-top"><p>© 2021 KRONIKA, All rights reserved.</p></div>',2),l=[s];function n(e,t){return Object(r["s"])(),Object(r["f"])("footer",c,l)}const o={};o.render=n;t["a"]=o},1479:function(e,t,a){},"236f":function(e,t,a){},"3a0b":function(e,t,a){"use strict";var r=a("7a23"),c={id:"nav",class:"navbar navbar-expand-lg bg-nav py-4"},s={class:"container-fluid"},l=Object(r["g"])("a",{class:"navbar-brand",href:"#"},"KRONIKA",-1),n=Object(r["g"])("button",{class:"navbar-toggler bg-primary",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(r["g"])("span",{class:"navbar-toggler-icon"})],-1),o={class:"collapse navbar-collapse",id:"navbarNav"},i={class:"navbar-nav"},d={class:"nav-item"},b=Object(r["i"])("Anasayfa"),u={class:"nav-item"},v=Object(r["i"])("Hakkında");function p(e,t,a,p,m,j){var f=Object(r["z"])("router-link");return Object(r["s"])(),Object(r["f"])("div",null,[Object(r["g"])("nav",c,[Object(r["g"])("div",s,[l,n,Object(r["g"])("div",o,[Object(r["g"])("ul",i,[Object(r["g"])("li",d,[Object(r["j"])(f,{class:"nav-link",to:"/"},{default:Object(r["F"])((function(){return[b]})),_:1})]),Object(r["g"])("li",u,[Object(r["j"])(f,{class:"nav-link",to:"/about"},{default:Object(r["F"])((function(){return[v]})),_:1})])])])])])])}var m={name:"TheNavbar"};m.render=p;t["a"]=m},"3bd7":function(e,t,a){"use strict";a("236f")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23");function c(e,t,a,c,s,l){var n=Object(r["z"])("router-view");return Object(r["s"])(),Object(r["d"])(n)}var s=a("bc3a"),l=a.n(s),n={data:function(){return{myData:{}}},methods:{getBookData:function(){var e=this;l.a.get("https://json-5ff41-default-rtdb.europe-west1.firebasedatabase.app/users.json").then((function(t){var a=t.data;for(var r in a){var c=a[r];e.$store.state.bookData.push(c)}})).catch((function(e){console.log(e)}))}},mounted:function(){this.getBookData()}};a("8838");n.render=c;var o=n,i=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),d={class:"home container-fluid"},b={class:"row p-5"},u={class:"col-md-8 align-self-center"},v={class:"col-md-4"};function p(e,t,a,c,s,l){var n=Object(r["z"])("TheNavbar"),o=Object(r["z"])("TheHero"),i=Object(r["z"])("TheCardRow"),p=Object(r["z"])("TheMain"),m=Object(r["z"])("Cards"),j=Object(r["z"])("TheBooks"),f=Object(r["z"])("TheFooter");return Object(r["s"])(),Object(r["f"])(r["a"],null,[Object(r["j"])(n),Object(r["j"])(o),Object(r["g"])("div",d,[Object(r["g"])("div",b,[Object(r["g"])("div",u,[Object(r["j"])(i)]),Object(r["g"])("div",v,[Object(r["j"])(p)])]),Object(r["j"])(m),Object(r["j"])(j),Object(r["j"])(f)])],64)}var m=a("3a0b"),j=a("07a3"),f=Object(r["g"])("img",{src:"https://upload.wikimedia.org/wikipedia/commons/3/3a/Ottoman_Sultan_Selim_III_banner.jpg",alt:"",class:"img-fluid"},null,-1),g=[f];function O(e,t){return Object(r["s"])(),Object(r["f"])("div",null,g)}const h={};h.render=O;var y=h;a("fb6a"),a("a4d3"),a("e01a");Object(r["v"])("data-v-0eb07f0b");var k={class:"container-fluid glass-1 px-5 py-4 my-3 mx-auto"},x=Object(r["g"])("h1",null,"Osmanlı Kronikleri",-1),w={class:"col-6 mx-auto"},B={class:"input-group mb-1 mt-3 pt-4"},T={key:0,class:"alert alert-info py-3 my-3",role:"alert"},_=Object(r["g"])("br",null,null,-1),S={key:1,class:"container"},M=Object(r["g"])("div",{class:"alert alert-danger py-5 my-5",role:"alert"}," Aradığınız eser bulunamadı. ",-1),z=[M],C={class:"row"},D={class:"card profile-card-5 book-color",style:{"border-radius":"25px"}},I={class:"card-img-block"},L=["src","alt"],P={class:"card-body"},K={class:"card-title"},R={class:"card-title"},E={class:"d-flex justify-content-start pt-1"},H={class:"ms-2 badge bg-info text-dark"},N={class:"ms-2 badge bg-light text-dark"},U={class:"card-text my-4"},A=Object(r["g"])("span",null,[Object(r["g"])("img",{src:"src\\assets\\archive.png",alt:""})],-1),F=["href"],$=["onClick"],q={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},G={class:"modal-dialog"},J={class:"modal-content"},V={class:"modal-header"},W={class:"modal-title",id:"exampleModalLabel"},Y=Object(r["g"])("b",null,"Kronika.org",-1),Q=Object(r["g"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),X={class:"alert alert-success",role:"alert"},Z={class:"modal-body"},ee={class:"card profile-card-5"},te={class:"card-img-block"},ae=["src"],re={class:"card-body"},ce={class:"card-title"},se={class:"card-title"},le=["href"],ne=["href"],oe={class:"card-text"},ie={class:"alert alert-primary",role:"alert"},de={class:"card-text"},be={class:"alert alert-danger",role:"alert"};function ue(e,t,a,c,s,l){return Object(r["s"])(),Object(r["f"])("div",null,[Object(r["g"])("div",k,[x,Object(r["g"])("div",w,[Object(r["g"])("div",B,[Object(r["G"])(Object(r["g"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return s.searchInput=e}),type:"text",class:"form-control",placeholder:"Yazara veya başlığa göre ara...","aria-label":"Recipient's username","aria-describedby":"button-addon2"},null,512),[[r["D"],s.searchInput]])]),s.searchInput.length>0?(Object(r["s"])(),Object(r["f"])("div",T,[Object(r["i"])(" Kayıtlı toplam "+Object(r["B"])(this.$store.state.bookData.length)+" adet eser var. ",1),_,Object(r["i"])(" "+Object(r["B"])(l.filteredBooks.length)+" tanesi listeleniyor. ",1)])):Object(r["e"])("",!0),0===l.filteredBooks.length?(Object(r["s"])(),Object(r["f"])("div",S,z)):Object(r["e"])("",!0)]),Object(r["g"])("div",C,[(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["y"])(l.filteredBooks,(function(e,t){return Object(r["s"])(),Object(r["f"])("div",{class:"col-md-3 mt-4 py-4",key:t},[Object(r["g"])("div",D,[Object(r["g"])("div",I,[Object(r["g"])("img",{class:"img-fluid card-img-top box-1",src:e.imageUrl,alt:e.title,style:{width:"280px !important",height:"380px !important","object-fit":"cover","object-position":"1px 1px","border-radius":"25px","margin-left":"10%"}},null,8,L)]),Object(r["g"])("div",P,[Object(r["g"])("h4",K,Object(r["B"])(e.title),1),Object(r["g"])("h5",R,Object(r["B"])(e.author),1),Object(r["g"])("h6",null,Object(r["B"])(e.year),1),Object(r["g"])("div",E,[Object(r["g"])("span",H,Object(r["B"])(e.category[1]),1),Object(r["g"])("span",N,Object(r["B"])(e.category[0]),1)]),Object(r["g"])("p",U,Object(r["B"])(e.summary.slice(0,150))+"...",1),A,Object(r["g"])("a",{href:e.downloadUrl,target:"_href",class:"btn btn-warning"},"İndir",8,F),Object(r["g"])("button",{type:"button",class:"btn btn-success ms-2","data-bs-toggle":"modal","data-bs-target":"#exampleModal",onClick:function(t){return l.showModal(e)}}," Detaylı Bilgi ",8,$)])])])})),128)),Object(r["g"])("div",q,[Object(r["g"])("div",G,[Object(r["g"])("div",J,[Object(r["g"])("div",V,[Object(r["g"])("h5",W,[Y,Object(r["i"])(" : "+Object(r["B"])(s.modals.title),1)]),Q]),Object(r["g"])("div",X,Object(r["B"])(this.$store.state.reklamTwo),1),Object(r["g"])("div",Z,[Object(r["g"])("div",ee,[Object(r["g"])("div",te,[Object(r["g"])("img",{class:"card-img-top box-1",src:s.modals.imageUrl,alt:"Card image cap",style:{width:"280px !important",height:"380px !important","object-fit":"cover","object-position":"1px 1px"}},null,8,ae)]),Object(r["g"])("div",re,[Object(r["g"])("h5",ce,Object(r["B"])(s.modals.title),1),Object(r["g"])("h6",se,[Object(r["i"])(Object(r["B"])(s.modals.author)+" ",1),Object(r["g"])("span",null,[Object(r["g"])("a",{href:s.modals.sourceUrl,class:"btn btn-danger btn-sm"}," Kaynak",8,le),Object(r["g"])("a",{href:s.modals.downloadUrl,class:"btn btn-warning ms-2 btn-sm"},"PDF",8,ne)])]),Object(r["g"])("span",null,Object(r["B"])(s.modals.year),1),Object(r["g"])("p",oe,Object(r["B"])(s.modals.summary),1),Object(r["g"])("div",ie,Object(r["B"])(this.$store.state.reklamOne),1),Object(r["g"])("p",de,Object(r["B"])(s.modals.description),1),Object(r["g"])("div",be,Object(r["B"])(this.$store.state.reklamThree),1)])])])])])])])])])}Object(r["t"])();a("4de4"),a("caad"),a("2532");var ve={name:"TheBooks",data:function(){return{deneme:"ted",modals:{},filteredK:[],searchInput:""}},methods:{showModal:function(e){this.modals=e,console.log(e)}},computed:{filteredBooks:function(){var e=this;return this.$store.state.bookData.filter((function(t){var a=t.author+t.title;return a.toLowerCase().includes(e.searchInput.toLowerCase())}))}}};a("d23f");ve.render=ue,ve.__scopeId="data-v-0eb07f0b";var pe=ve;Object(r["v"])("data-v-6dd4d6f6");var me={class:"mt-4"},je=Object(r["h"])('<div class="hover hover-4 text-white rounded" data-v-6dd4d6f6><img src="https://images.nypl.org/index.php?id=81530&amp;t=w" class="w-100" alt="" data-v-6dd4d6f6><div class="hover-overlay" data-v-6dd4d6f6></div><div class="hover-4-content" data-v-6dd4d6f6><h3 class="hover-4-title text-uppercase font-weight-bold mb-0 text-white" data-v-6dd4d6f6><span class="font-weight-light" data-v-6dd4d6f6> Galeri</span></h3><p class="hover-4-description text-uppercase mb-0 small" data-v-6dd4d6f6>Road over the Balkan Mountain</p></div></div>',1),fe=[je];function ge(e,t){return Object(r["s"])(),Object(r["f"])("div",me,fe)}Object(r["t"])();a("3bd7");const Oe={};Oe.render=ge,Oe.__scopeId="data-v-6dd4d6f6";var he=Oe,ye={class:"row gap-0"},ke=Object(r["h"])('<div class="card box-4 my-1 pt-1 bg-dark text-white"><div class="card-body"><h6 class="card-title">Special title treatment</h6><p class="card-text">With supporting text below as a natural lead-in to additional content.</p><a href="#" class="btn btn-primary btn-sm">Go</a></div></div>',1),xe=[ke];function we(e,t){return Object(r["s"])(),Object(r["f"])("div",ye,[(Object(r["s"])(),Object(r["f"])(r["a"],null,Object(r["y"])(4,(function(e){return Object(r["g"])("div",{class:"col-sm-6 py-2 hover",key:e},xe)})),64))])}const Be={};Be.render=we;var Te=Be,_e={class:"container-fluid px-5 py-4 my-3"},Se=Object(r["g"])("h1",null,"Faydalı Siteler",-1),Me={class:"row gap-0 row-cols-1 row-cols-md-2 row-cols-sm-1 row-cols-lg-3 row-cols-xl-4"},ze=Object(r["h"])('<div class="col"><div class="card bg-glass hover"><div class="row"><div class="col-md-2"><img src="https://arastirmanv4.vercel.app/assets/images/logos/canadian.png" style="width:45px;" class="card-img-top ml-5" alt="duke"></div><div class="col-md-10"><h5 class="card-title text-warning pt-2"> Duke University Libraries </h5></div></div><div class="card-body pt-1"><p class="card-text card-font pb-1"> Duke University Libraries, Ottoman-Turkish 50karakter </p></div></div></div>',1),Ce=[ze];function De(e,t){return Object(r["s"])(),Object(r["f"])("div",_e,[Se,Object(r["g"])("div",Me,[(Object(r["s"])(),Object(r["f"])(r["a"],null,Object(r["y"])(8,(function(e){return Object(r["g"])("div",{class:"col p-1 my-1",key:e},Ce)})),64))])])}const Ie={};Ie.render=De;var Le=Ie,Pe={name:"Home",components:{TheBooks:pe,TheFooter:j["a"],TheNavbar:m["a"],TheHero:y,TheMain:he,TheCardRow:Te,Cards:Le}};Pe.render=p;var Ke=Pe,Re=[{path:"/",name:"Home",component:Ke},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],Ee=Object(i["a"])({history:Object(i["b"])(),routes:Re}),He=Ee,Ne=a("5502"),Ue=Object(Ne["a"])({state:{reklamOne:"Reklam",reklamTwo:"Reklam",reklamThree:"Reklam",bookData:[],kronikler:[{id:4,baslik:"Evliya Çelebi Seyahatnamesi",yazar:"Evliya Çelebi",kategori:"Seyahatname",etiket:"",isVar:!1,tarih:"2000",ozet:"Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint molestiae velit voluptatem nostrum similique quae sunt totam explicabo! Eos accusamus dolorum fugiat maiores.",aciklama:"",img:"https://cdn.islamansiklopedisi.org.tr/gorsel/Belge%20-%20Sahife/tevarih-i-al-i-osman-1.jpg",url1:"https://archive.org/details/evliyaelebisey01evliuoft",url2:"",url3:""}]},mutations:{},actions:{},modules:{}}),Ae=(a("845f"),a("7b17"),a("ab8b"),Object(r["c"])(o));Ae.use(Ue),Ae.use(He),Ae.mount("#app")},"845f":function(e,t,a){},8838:function(e,t,a){"use strict";a("ba5a")},ba5a:function(e,t,a){},d23f:function(e,t,a){"use strict";a("1479")}});
//# sourceMappingURL=app.c0ff9184.js.map