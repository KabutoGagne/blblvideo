(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},s={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"150b":function(t,e,n){},2154:function(t,e,n){},"313e":function(t,e,n){"use strict";var a=n("78a4"),s=n("aa4e"),r=n("2877"),i=Object(r["a"])(s["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports},"378a":function(t,e){},"3d70":function(t,e,n){},"434e":function(t,e,n){"use strict";var a=n("3d70"),s=n.n(a);s.a},"4e3e":function(t,e,n){},"4f0e":function(t,e,n){"use strict";var a=n("4e3e"),s=n.n(a);s.a},5298:function(t,e,n){"use strict";var a=n("e273"),s=n.n(a);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],i=n("2877"),o={},c=Object(i["a"])(o,s,r,!1,null,null,null),l=c.exports,u=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"back"},[n("nav-bar"),n("div",{staticClass:"pic"}),n("user-info",{attrs:{userInfo:t.model},on:{editProfile:t.editProfile}})],1)},f=[],p=(n("96cf"),n("1da1")),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top"},[n("van-popup",{staticClass:"conTop",style:{width:"30%",height:"100%"},attrs:{position:"left"},model:{value:t.selectVisiable,callback:function(e){t.selectVisiable=e},expression:"selectVisiable"}},[n("div",{staticStyle:{width:"100%",height:"60px","text-align":"center","line-height":"60px","background-color":"#ffadb4",color:"white"},on:{click:function(e){return t.$router.push("/user")}}},[t._v("用户中心")]),n("van-button",{staticStyle:{height:"66px",margin:"2px 3px 0"}},[n("van-icon",{attrs:{name:"eye-o"}}),t._v("我的关注")],1),n("van-button",{staticStyle:{height:"66px",margin:"2px 3px 0"}},[n("van-icon",{attrs:{name:"underway-o"}}),t._v("历史纪录")],1),n("van-button",{staticStyle:{height:"66px",margin:"2px 3px 0"}},[n("van-icon",{attrs:{name:"down"}}),t._v("离线缓存")],1),n("van-button",{staticStyle:{height:"66px",margin:"2px 3px 0"}},[n("van-icon",{attrs:{name:"star-o"}}),t._v("我的收藏")],1),n("van-button",{staticStyle:{height:"66px",margin:"2px 3px 0"}},[n("van-icon",{attrs:{name:"chat-o"}}),t._v("我的消息")],1),n("van-button",{staticStyle:{height:"66px",margin:"2px 3px 0"}},[n("van-icon",{attrs:{name:"balance-pay"}}),t._v("我的钱包")],1),n("van-button",{staticStyle:{height:"66px",margin:"2px 3px 0"}},[n("van-icon",{attrs:{name:"tv-o"}}),t._v("直播中心")],1),n("van-button",{staticStyle:{height:"66px",margin:"2px 3px 0"}},[n("van-icon",{attrs:{name:"envelop-o"}}),t._v("稿件管理")],1),n("van-button",{staticClass:"logoutBtn",attrs:{type:"default"},on:{click:function(e){return t.$router.push("/login")}}},[t._v("退出登录")])],1),n("div",{staticClass:"left",on:{click:function(e){t.selectVisiable=!0}}},[n("van-icon",{attrs:{name:"manager"}}),t._v("我的")],1),n("div",[n("p",{staticClass:"search"},[n("van-icon",{staticStyle:{position:"absolute",top:"5.5px",left:"6px"},attrs:{name:"search"}}),t._v(" 请输入内容 ")],1)]),n("div",[n("div",{staticClass:"avatar",staticStyle:{overflow:"hidden"},on:{click:function(e){return t.routerPath()}}}),n("div",{staticClass:"downloadIcon"},[t._v("下载app")])])],1)},x=[],m={props:["imgPath"],data:function(){return{selectVisiable:!1}},methods:{routerPath:function(){if("/user"!==this.$route.path)return this.$router.push("/user")}}},h=m,g=(n("70fa"),Object(i["a"])(h,v,x,!1,null,"3b36312e",null)),b=g.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile"},[n("div",{staticClass:"profile_pic"}),n("div",{staticClass:"userUp"},[t._m(0),n("van-button",{staticClass:"btn",attrs:{type:"default"},on:{click:function(e){return t.$emit("editProfile")}}},[t._v("编辑资料")])],1),n("div",{staticClass:"userDetial"},[n("h3",[t._v(t._s(t.userInfo.name))]),t.userInfo.user_desc?n("p",[t._v(t._s(t.userInfo.user_desc))]):n("p",[t._v("这个人很神秘，什么都没有写")])])])},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"upList"},[n("ul",[n("li",[t._v("0")]),n("li",[t._v("粉丝")])]),n("ul",[n("li",[t._v("99")]),n("li",[t._v("关注")])]),n("ul",[n("li",[t._v("99")]),n("li",[t._v("赞")])])])}],w={props:["userInfo"]},k=w,S=(n("434e"),Object(i["a"])(k,_,y,!1,null,"7e86c075",null)),$=S.exports,I={data:function(){return{model:{}}},components:{navBar:b,userInfo:$},created:function(){this.getUserInfo()},methods:{getUserInfo:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/user/"+localStorage.getItem("id"),{headers:{Authorization:"Bearer"+localStorage.getItem("token")}});case 2:n=e.sent,a=n.data,console.log(a);case 5:case"end":return e.stop()}}),e)})))()},editProfile:function(){this.$router.push("/edit")}}},C=I,O=(n("fda2"),Object(i["a"])(C,d,f,!1,null,"ddacff5c",null)),j=O.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"back"},[n("login-header",{attrs:{middleContent:"注册账号"}},[n("div",{attrs:{slot:"right"},on:{click:function(e){return t.$router.push("/login")}},slot:"right"},[t._v("登录")])]),n("van-form",{on:{failed:t.onFailed,submit:function(e){return t.registerSumbit()}}},[n("van-cell-group",{staticStyle:{margin:"10px 0 15px"}},[n("van-field",{staticClass:"usersname",attrs:{label:"用户名",placeholder:"输入用户名"},model:{value:t.userInfo.name,callback:function(e){t.$set(t.userInfo,"name",e)},expression:"userInfo.name"}})],1),n("van-cell-group",[n("van-field",{attrs:{label:"邮箱",placeholder:"输入邮箱",rules:t.emailRule},model:{value:t.userInfo.email,callback:function(e){t.$set(t.userInfo,"email",e)},expression:"userInfo.email"}}),n("van-field",{attrs:{label:"手机号",placeholder:"输入手机号",type:"tel",rules:t.telRule},model:{value:t.userInfo.tel,callback:function(e){t.$set(t.userInfo,"tel",e)},expression:"userInfo.tel"}}),n("van-field",{attrs:{label:"密码",placeholder:"输入密码",type:"password"},model:{value:t.userInfo.password,callback:function(e){t.$set(t.userInfo,"password",e)},expression:"userInfo.password"}})],1),n("van-button",{staticClass:"signinBtn",attrs:{type:"default"}},[t._v("同意并注册")])],1)],1)},E=[],P=(n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"header"},[n("div",{on:{click:function(e){return t.backUserInfo()}}},[n("van-icon",{attrs:{name:"arrow-left"}})],1),n("div",[t._v(t._s(t.middleContent))]),n("div",[t._t("right")],2)])])}),M=[],z={props:["middleContent"],methods:{backUserInfo:function(){history.back()}}},B=z,U=(n("4f0e"),Object(i["a"])(B,P,M,!1,null,"13937a88",null)),D=U.exports,T={name:"register",data:function(){return{userInfo:{name:"",email:"",tel:"",password:"",username:"1021667792"},emailRule:[{required:!0,message:"输入邮箱",trigger:"onBlur"},{pattern:/^\w{6,14}@\w{2,6}.com$/,message:"邮箱不符合要求",trigger:"onBlur"}],telRule:[{required:!0,message:"输入手机号",trigger:"onBlur"},{pattern:/^1[3|4|8]\d{9}$/,message:"手机号不符合要求",trigger:"onBlur"}]}},methods:{onFailed:function(t){console.log("失败",t),this.userInfo.name="",this.userInfo.email="",this.userInfo.tel="",this.userInfo.password=""},registerSumbit:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.post("/register",{name:t.userInfo.name,username:t.userInfo.username,password:t.userInfo.password});case 2:if(n=e.sent,a=n.data,302!=a.code){e.next=9;break}return t.$message.fail("信息已存在"),e.abrupt("return");case 9:if(200===a.code){e.next=11;break}return e.abrupt("return",t.$message.fail("注册失败"));case 11:t.$message.success("注册成功"),console.log(a.code),t.$router.push("login");case 14:case"end":return e.stop()}}),e)})))()}},components:{loginHeader:D}},A=T,N=(n("828f"),Object(i["a"])(A,R,E,!1,null,"673e40ed",null)),L=N.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"back"},[n("login-header",{attrs:{middleContent:"用户登录"}},[n("div",{attrs:{slot:"right"},on:{click:function(e){return t.$router.push("/register")}},slot:"right"},[t._v("忘记密码?")])]),n("van-form",{on:{submit:function(e){return t.login()}}},[n("van-cell-group",{staticClass:"content"},[n("van-field",{attrs:{label:"账号",placeholder:"输入账号"},model:{value:t.loginInfo.username,callback:function(e){t.$set(t.loginInfo,"username",e)},expression:"loginInfo.username"}}),n("van-field",{attrs:{label:"密码",placeholder:"输入密码",type:"password"},model:{value:t.loginInfo.password,callback:function(e){t.$set(t.loginInfo,"password",e)},expression:"loginInfo.password"}})],1),n("van-button",{staticClass:"signinBtn",attrs:{type:"default"}},[t._v("登录")])],1)],1)},Y=[],H={data:function(){return{loginInfo:{username:"",password:""}}},components:{loginHeader:D},methods:{login:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.post("/login",t.loginInfo);case 2:if(n=e.sent,a=n.data,200===a.code){e.next=7;break}return console.log(a),e.abrupt("return",t.$message.fail(a.msg));case 7:t.$message.success(a.msg),localStorage.setItem("id",a.id),localStorage.setItem("token",a.token),setTimeout((function(){t.$router.push("/home")}),1e3);case 11:case"end":return e.stop()}}),e)})))()}}},X=H,q=(n("66c0"),Object(i["a"])(X,V,Y,!1,null,null,null)),F=q.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"back"},[n("login-header",{attrs:{middleContent:"修改资料"}}),n("van-cell-group",[n("van-cell",{attrs:{title:"头像"},on:{click:t.upload},scopedSlots:t._u([{key:"right-icon",fn:function(){return[n("div",{staticStyle:{width:"24px",height:"24px","border-radius":"12px","background-color":"#0570DB"}},[t.model.user_image?n("img",{attrs:{src:t.model.user_image,alt:"头像"}}):t._e()])]},proxy:!0}])}),n("input",{ref:"upAvatarRef",staticStyle:{position:"absolute"},attrs:{type:"file"},on:{change:function(e){return t.trigger(e)}}})],1),n("van-cell-group",{staticClass:"profileGroup"},[n("van-cell",{attrs:{title:"昵称",value:t.model.user_name},on:{click:function(e){return t.openDialog()}}}),n("van-cell",{attrs:{title:"账号",value:"内容"}}),n("van-cell",{attrs:{title:"性别",value:"内容"}}),n("van-cell",{attrs:{title:"个签","is-link":"",value:t.descContent}})],1),n("van-cell-group",[n("van-cell",{attrs:{title:"空间隐私设置",value:""}}),n("van-cell",{attrs:{title:"账号安全中心",value:""}})],1),n("van-button",{staticStyle:{"margin-top":"10px",width:"100%"},attrs:{type:"default"},on:{click:function(e){return t.$router.push("/login")}}},[t._v("退出登录")]),n("van-dialog",{attrs:{title:"昵称","show-cancel-button":""},on:{confirm:function(e){return t.confirmName()}},model:{value:t.editName,callback:function(e){t.editName=e},expression:"editName"}},[n("van-field",{model:{value:t.input.user_name,callback:function(e){t.$set(t.input,"user_name",e)},expression:"input.user_name"}})],1)],1)},G=[],K={components:{loginHeader:D},data:function(){return{model:{user_name:"aaa",user_desc:""},input:{user_name:"",user_desc:""},editName:!1}},computed:{descContent:function(){return 0==this.model.user_desc?"这个人很神秘，什么都没有写".substr(0,8)+"...":this.model.user_desc.substr(0,8)+"..."}},created:function(){},methods:{getUserInfo:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/user/"+localStorage.getItem("id"));case 2:n=e.sent,a=n.data,t.model=a[0];case 5:case"end":return e.stop()}}),e)})))()},upload:function(){this.$refs.upAvatarRef.click()},trigger:function(t){var e=t.target.files;console.log(e)},updateAvatar:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.post("/update/"+localStorage.getItem("id"),t.model);case 2:n=e.sent,n.data;case 4:case"end":return e.stop()}}),e)})))()},afterRead:function(t){console.log(t)},openDialog:function(){this.input.user_name=this.model.user_name,this.editName=!0},confirmName:function(){this.model.user_name=this.input.user_name}}},Q=K,W=(n("e6a2"),Object(i["a"])(Q,J,G,!1,null,"3f17ed7b",null)),Z=W.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("nav-bar",{staticStyle:{position:"fixed",top:"0px","z-index":"99"}}),n("van-tabs",{staticStyle:{"margin-top":"45px","z-index":"90"},attrs:{swipeable:"",sticky:"","offset-top":"45"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.category,(function(e,a){return n("van-tab",{key:a,attrs:{title:e.title}},[n("van-list",{attrs:{finished:e.finished,"finished-text":"没有更多了"},on:{load:function(e){return t.onload()}},model:{value:e.loading,callback:function(n){t.$set(e,"loading",n)},expression:"item.loading"}},[n("div",{staticStyle:{display:"flex","flex-wrap":"wrap","align-content":"stretch"}},t._l(t.categoryList,(function(e,a){return n("detail",{key:a,staticClass:"detailitem",attrs:{detailitem:e},on:{tiaozhuan:function(n){return t.$router.push("/article/"+e.id)}}})})),1)])],1)})),1)],1)},et=[],nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{on:{click:function(e){return t.$emit("tiaozhuan")}}},[n("img",{staticStyle:{width:"100%"},attrs:{src:t.detailitem.img.substr(0,77),alt:"sss"}}),n("span",[n("van-icon",{attrs:{name:"play-circle-o"}}),t._v(t._s(t.detailitem.id))],1),n("span",[n("van-icon",{attrs:{name:"orders-o"}}),t._v(t._s(t.detailitem.commentlen))],1),n("p",[t._v(t._s(t.detailitem.name))])])},at=[],st={props:["detailitem"]},rt=st,it=Object(i["a"])(rt,nt,at,!1,null,null,null),ot=it.exports,ct={name:"Home",components:{navBar:b,detail:ot},data:function(){return{item:{loading:!1,finished:!1},category:[],active:0,categoryList:[],page:0}},watch:{active:function(){this.page=0,this.getArticle()}},mounted:function(){this.getArticle()},methods:{onload:function(){this.page>=3||(this.page+=1,this.getArticle(),this.item.finished=!0)},getArticle:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){var n,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.getCategory(),n=t.category[t.active],e.next=4,t.$http.get("/detail/"+n._id,{params:{page:t.page,pagesize:10}});case 4:a=e.sent,s=a.data,t.item.loading=!1,t.categoryList=s;case 8:case"end":return e.stop()}}),e)})))()},getCategory:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/category");case 2:n=e.sent,a=n.data,t.category=a;case 5:case"end":return e.stop()}}),e)})))()}}},lt=ct,ut=(n("5298"),Object(i["a"])(lt,tt,et,!1,null,"b323494e",null)),dt=ut.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"back"},[n("nav-bar",{staticStyle:{position:"fixed",top:"0","z-index":"99"}}),n("div",{staticStyle:{"margin-top":"45px",position:"relative"}},[n("van-icon",{attrs:{name:"arrow-left",id:"backIcon"},on:{click:function(e){return t.backUserInfo()}}}),n("div",{staticClass:"video",staticStyle:{width:"100%"}},[n("video",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.model[0].content,controls:"controls"}})]),n("van-tabs",{attrs:{swipeable:"",sticky:"","offset-top":"45"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-tab",{attrs:{title:"详情"}},[n("p",[t._v("标题"+t._s(t.model[0].name))]),n("span",[t._v(t._s(t.model[0].date))]),n("cover")],1),n("van-tab",{attrs:{title:"评论"}},[n("comment")],1)],1)],1)],1)},pt=[],vt=n("313e"),xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{ref:"contRef",staticClass:"contentN",on:{touchstart:function(e){return t.touchstart()},touchmove:function(e){return t.touchmove()}}},[n("p",{staticStyle:{"margin-bottom":"20px"}},[t._v("用户评论xxxxxxxxxxxxxscscscscscscscsvffxaxaxazvsdsccs")]),n("p",{staticStyle:{margin:"20px 0"}},[t._v('用户评论xxxxxxxxxxxxxscscscscscscscsvffxvsdzzxzxzadcd style="margin:20px 0"xdax x xa')]),n("p",{staticStyle:{margin:"20px 0"}},[t._v("用户评论xxxxxxxxxxxxxscscscscscscscsvffxvsd")]),n("p",{staticStyle:{margin:"20px 0"}},[t._v("用户评论xxxxxxxxxxxxxscscscscscscscsvxsxsxsxffxvsd")]),n("p",{staticStyle:{margin:"20px 0"}},[t._v("用户评论xxxxxxxxxxxxxscscscscscscsdcdcdccsvffxvsd")]),n("p",{staticStyle:{margin:"20px 0"}},[t._v("用户评论xxxxxxxxxxxxxscscscscscdcdscscsvffxvsd")]),n("p",{staticStyle:{margin:"20px 0"}},[t._v("用户评论xxxxxxxxxxxxxscscscscscscscsvffxvsd")]),n("p",{staticStyle:{margin:"20px 0"}},[t._v("用户评论xxxxxxxxxxxxxscscscscscscscsvffxvsd")]),n("p",{staticStyle:{margin:"20px 0"}},[t._v("用户评论xxxxxxxxxxxxxscscscscscscsdcdcdccsvffxvsd")]),n("p",{staticStyle:{margin:"20px 0"}},[t._v("用户评论xxxxxxxxxxxxxscscscscscdcdscscsvffxvsd")]),n("p",{staticStyle:{margin:"20px 0"}},[t._v("用户评论xxxxxxxxxxxxxscscscscscscscsvffxvsd")]),n("p",{staticStyle:{margin:"20px 0"}},[t._v("用户评论xxxxxxxxxxxxxscscscscscscscsvffxvsd")])]),n("div",{class:t.moveSelect,attrs:{id:"input"}},[n("input",{staticClass:"neirong",attrs:{type:"text",placeholder:"发送内容"}}),n("button",{staticClass:"fasong"},[t._v("发送")])])])},mt=[],ht={data:function(){return{moveSelect:"moveDown",i:0}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,e=t-this.i;this.i=t,this.moveSelect=e<0?"moveDown":"moveUp"},touchstart:function(){this.startX=event.changedTouches[0].pageX,this.startY=event.changedTouches[0].pageY},touchmove:function(){var t=event.changedTouches[0].pageX,e=event.changedTouches[0].pageY,n=t-this.startX,a=e-this.startY;Math.abs(n)>Math.abs(a)&&n>0||Math.abs(n)>Math.abs(a)&&n<0?console.log(n):Math.abs(a)>Math.abs(n)&&a>0?this.moveSelect="moveDown":Math.abs(a)>Math.abs(n)&&a<0&&(this.moveSelect="moveUp")},showMu:function(){"moveDown"!=this.moveSelect?this.moveSelect="moveDown":this.moveSelect="moveUp"}}},gt=ht,bt=(n("dc56"),Object(i["a"])(gt,xt,mt,!1,null,"031eb8ca",null)),_t=bt.exports,yt={components:{navBar:b,cover:vt["default"],comment:_t},data:function(){return{model:{},item:{loading:!1,finished:!1},suiji:9,active:0,userInfo:{}}},created:function(){this.getData()},watch:{active:function(){console.log(this.active)}},methods:{backUserInfo:function(){history.back()},getData:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/article/"+t.$route.params.id);case 2:n=e.sent,a=n.data,t.model=a;case 5:case"end":return e.stop()}}),e)})))()},getCommend:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$http.get("/commend");case 1:case"end":return e.stop()}}),e)})))()}}},wt=yt,kt=(n("d78a"),Object(i["a"])(wt,ft,pt,!1,null,"2a0865e1",null)),St=kt.exports;a["a"].use(u["a"]);var $t=[{path:"/",redirect:"/home"},{path:"/register",component:L},{path:"/user",component:j},{path:"/login",component:F},{path:"/edit",component:Z},{path:"/home",component:dt},{path:"/article/:id",component:St}],It=new u["a"]({routes:$t}),Ct=It,Ot=(n("150b"),n("b1ea")),jt=(n("1b8c"),n("cebf")),Rt=n("6a0a"),Et=n("e80b"),Pt=n("7334"),Mt=n("57e5"),zt=n("a1dd"),Bt=n("5e31"),Ut=n("5bfa"),Dt=n("6288"),Tt=n("4103"),At=n("621c"),Nt=n("0690"),Lt=n("ac21"),Vt=n("82ae"),Yt=n.n(Vt);a["a"].use(Ot["a"]),a["a"].use(jt["a"]),a["a"].use(Rt["a"]),a["a"].use(Et["a"]),a["a"].use(Pt["a"]),a["a"].use(Mt["a"]),a["a"].use(zt["a"]),a["a"].use(Rt["a"]),a["a"].use(Bt["a"]),a["a"].use(Ut["a"]),a["a"].use(Dt["a"]),a["a"].use(Tt["a"]),a["a"].use(At["a"]),a["a"].use(Nt["a"]),a["a"].prototype.$message=Lt["a"],Yt.a.defaults.baseURL="http://112.74.99.5:3000/web/api",a["a"].prototype.$http=Yt.a,a["a"].config.productionTip=!1,new a["a"]({router:Ct,render:function(t){return t(l)}}).$mount("#app")},"66c0":function(t,e,n){"use strict";var a=n("2154"),s=n.n(a);s.a},"70fa":function(t,e,n){"use strict";var a=n("a65e"),s=n.n(a);s.a},"78a4":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return s}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" 推荐视频 ")])},s=[]},"78b7":function(t,e,n){},"828f":function(t,e,n){"use strict";var a=n("9db3"),s=n.n(a);s.a},"9db3":function(t,e,n){},a65e:function(t,e,n){},aa4e:function(t,e,n){"use strict";var a=n("378a"),s=n.n(a);e["default"]=s.a},bddb:function(t,e,n){},d78a:function(t,e,n){"use strict";var a=n("78b7"),s=n.n(a);s.a},d78c:function(t,e,n){},dc56:function(t,e,n){"use strict";var a=n("d78c"),s=n.n(a);s.a},de60:function(t,e,n){},e273:function(t,e,n){},e6a2:function(t,e,n){"use strict";var a=n("bddb"),s=n.n(a);s.a},fda2:function(t,e,n){"use strict";var a=n("de60"),s=n.n(a);s.a}});