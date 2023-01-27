(function(){"use strict";var t={7221:function(t,e,n){var s=n(144),r=n(1096),i=n(3250),o=n(4202),a=n(5057),u=n(2469),l=n(3551),c=n(5234),p=function(){var t=this,e=t._self._c;return e(r.Z,[e(i.Z,{attrs:{app:"",color:"primary",dark:""}},[e("div",{staticClass:"d-flex align-center"},[e(u.Z,{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),e(u.Z,{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),e(c.Z),e(o.Z,{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[e("span",{staticClass:"mr-2"},[t._v("Latest Release")]),e(a.Z,[t._v("mdi-open-in-new")])],1)],1),e(l.Z,[e("GithubVuewer")],1)],1)},h=[],f=n(6035),d=function(){var t=this,e=t._self._c;return e(f.Z,[e("GithubRepo",{on:{reposelected:t.onRepoSelected}}),e("GithubConteudo",{attrs:{repo:t.repo}})],1)},v=[],g=n(4177),m=n(4437),b=n(5294),y=n(6069),w=function(){var t=this,e=t._self._c;return e("div",[e(b.Z,{staticClass:"text-center"},[e(m.Z,{attrs:{cols:"6"}},[e(g.Z,{attrs:{label:"Encontre seu usuário",items:t.userlist,loading:t.userloading,"search-input":t.usersearch,"item-text":"login"},on:{"update:searchInput":function(e){t.usersearch=e},"update:search-input":function(e){t.usersearch=e}},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}})],1),e(m.Z,{attrs:{cols:"6"}},[e(y.Z,{attrs:{items:t.repolist,loading:t.repoloading,"item-text":"name",label:"Selecione o repositorio","return-object":"","single-line":""},model:{value:t.repo,callback:function(e){t.repo=e},expression:"repo"}})],1)],1)],1)},_=[];function Z(t,e){let n=null;function s(){n&&clearTimeout(n);const s=this,r=arguments;n=setTimeout((()=>{t.apply(s,r),n=null}),e)}return s}async function x(t){let e=!0,n=[],s=1;while(e){const r=await fetch(`${t}?page=${s}`),i=await r.json();i.length>0?(n=n.concat(i),s++):e=!1}return n}const j={async search_users(t){const e=`https://api.github.com/search/users?q=${t}`,n=await fetch(e);return await n.json()},async lista_repos(t){const e=`https://api.github.com/users/${t}/repos`,n=await x(e);return n},async listaIssues(t,e,n){const s=`https://api.github.com/repos/${t}/${e}/issues?page=${n}`,r=await fetch(s);return await r.json()},async listaArquivos(t,e,n=""){const s=`https://api.github.com/repos/${t}/${e}/contents/${n}`,r=await x(s);return r}};var k={data:()=>({user:null,repo:null,usersearch:null,userlist:[],repolist:[],userloading:!1,repoloading:!1}),methods:{procuraUsuariosGithub:Z((async function(){this.userloading=!0;const t=await j.search_users(this.usersearch);this.userlist=t.items,this.userloading=!1}),500),async listaRepositorios(){this.repoloading=!0;const t=await j.lista_repos(this.user);this.repolist=t,this.repoloading=!1}},watch:{usersearch(){this.procuraUsuariosGithub()},user(){this.user&&this.listaRepositorios()},repo(){this.$emit("reposelected",this.repo)}}},O=k,$=n(1001),C=(0,$.Z)(O,w,_,!1,null,null,null),q=C.exports,S=n(6275),G=n(4397),P=function(){var t=this,e=t._self._c;return e("div",[e(b.Z,[e(m.Z,{attrs:{cols:"12"}},[e(G.Z,{scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("Number")]),e("th",{staticClass:"text-left"},[t._v("Title")])])]),e("tbody",t._l(t.arquivos,(function(n){return e("tr",{key:n.name},[e("td",[t._v(t._s(n.type))]),e("td",[t._v(t._s(n.name))])])})),0)]},proxy:!0}])})],1)],1),e(b.Z,[e(m.Z,{attrs:{cols:"12"}},[t.loading?e(S.Z,{attrs:{indeterminate:"",color:"primary"}}):t._e()],1)],1)],1)},T=[],R={props:["repo"],data:()=>({loading:!1,temmais:!1,currentPage:1,arquivos:[]}),methods:{async pegaArquivos(){this.loading=!0;const t=await j.listaArquivos(this.repo.owner.login,this.repo.name);this.arquivos=t,this.loading=!1}},watch:{repo(){this.arquivos=[],this.repo?this.pegaArquivos():this.arquivos=[]}}},A=R,V=(0,$.Z)(A,P,T,!1,null,null,null),M=V.exports,E={components:{GithubRepo:q,GithubConteudo:M},data:()=>({repo:null}),methods:{onRepoSelected(t){this.repo=t}}},I=E,L=(0,$.Z)(I,d,v,!1,null,null,null),N=L.exports,U={name:"App",components:{GithubVuewer:N},data:()=>({})},F=U,z=(0,$.Z)(F,p,h,!1,null,null,null),B=z.exports,D=n(2250);s.ZP.use(D.Z);var H=new D.Z({});s.ZP.config.productionTip=!1,new s.ZP({vuetify:H,render:t=>t(B)}).$mount("#app")}},e={};function n(s){var r=e[s];if(void 0!==r)return r.exports;var i=e[s]={exports:{}};return t[s](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,s,r,i){if(!s){var o=1/0;for(c=0;c<t.length;c++){s=t[c][0],r=t[c][1],i=t[c][2];for(var a=!0,u=0;u<s.length;u++)(!1&i||o>=i)&&Object.keys(n.O).every((function(t){return n.O[t](s[u])}))?s.splice(u--,1):(a=!1,i<o&&(o=i));if(a){t.splice(c--,1);var l=r();void 0!==l&&(e=l)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[s,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,s){var r,i,o=s[0],a=s[1],u=s[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(u)var c=u(n)}for(e&&e(s);l<o.length;l++)i=o[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(c)},s=self["webpackChunkgithub_vuewer"]=self["webpackChunkgithub_vuewer"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(7221)}));s=n.O(s)})();
//# sourceMappingURL=app.9a0407af.js.map