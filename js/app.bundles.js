!function(e){function t(t){for(var r,i,c=t[0],l=t[1],u=t[2],p=0,m=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&m.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);m.length;)m.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={5:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=i.p+"js/"+e+".js";var l=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="./",i.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=l;a.push([303,0]),n()}({177:function(e,t,n){},219:function(e,t,n){},285:function(e,t,n){},290:function(e,t,n){},294:function(e,t,n){},303:function(e,t,n){"use strict";n.r(t),n(175);var r=n(174),o=(n(177),n(0)),a=n.n(o),i=n(3),c=n.n(i),l=(n(77),n(131),n(6)),u=n.n(l),s=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={hasError:!1},n}u()(t,e),t.getDgetDerivedStateFromError=function(){return{hasError:!0}};var n=t.prototype;return n.componentDidCatch=function(){console.log("err: 错")},n.render=function(){return this.state.hasError?a.a.createElement("p",null,"页面出现了问题那"):this.props.children},t}(a.a.Component),p=n(57),m=n(28),d=(n(134),n(160)),f=n.n(d),h=(n(194),n(196),n(142),n(26)),y=n.n(h),v=n(27),g=n.n(v);function E(e){var t=e.style,n=void 0===t?{}:t,r=e.className,o=void 0===r?"":r;return a.a.createElement("i",{className:o,style:Object.assign({},n,{width:"30px",height:"30px",display:"inline-block"})})}var b=function(e){return function(t){function n(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return e=t.call.apply(t,[this].concat(r))||this,g()(y()(e),"_unount",!0),g()(y()(e),"state",{Component:null}),e}u()(n,t);var r=n.prototype;return r.componentDidMount=function(){var t=this;e().then((function(e){var n=e.default;t._unount&&t.setState({Component:n})}))},r.componentWillUnmount=function(){this._unount=!1},r.render=function(){var e=this.state.Component;return e?a.a.createElement(e,this.props):null},n}(a.a.Component)},O=b((function(){return n.e(3).then(n.bind(null,311))})),x=b((function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,312))})),C=b((function(){return n.e(1).then(n.bind(null,313))})),j=[{name:"主页",path:"/layout/web",exact:!0,requireAuth:!0,icon:"icon-zhuye",children:[{name:"主页1",path:"/layout/web",exact:!0,requireAuth:!1,component:O},{name:"主页2",path:"/layout/web/1",exact:!0,requireAuth:!1,component:b((function(){return n.e(4).then(n.bind(null,314))}))}]},{name:"规则",path:"/layout/rule",icon:"icon-guize",exact:!0,requireAuth:!0,component:C},{name:"用户",path:"/layout/user/:id",icon:"icon-yonghu",exact:!0,requireAuth:!1,component:x}],w=(n(213),n(144),n(75)),N=(n(304),n(76)),S=(n(145),n(2)),L=n.n(S),_=(n(219),N.a.SubMenu),k=N.a.Item,P=function(e){function t(t){var n;return n=e.call(this,t)||this,g()(y()(n),"toggleCollapse",(function(){n.setState((function(e){return{collapsed:!e.collapsed}}))})),g()(y()(n),"deepItem",(function(e,t){return void 0===t&&(t=!1),e.children?a.a.createElement(_,{key:"sub1",title:a.a.createElement("span",null,a.a.createElement(E,{className:""+e.icon}),a.a.createElement("span",null,e.name))},e.children.map((function(e){return n.deepItem(e,!0)}))):a.a.createElement(k,{key:e.path},!t&&a.a.createElement(E,{className:L()(""+e.icon)}),a.a.createElement(p.b,{to:"/layout/user/:id"===e.path?"/layout/user/01":e.path},e.name))})),n.state={collapsed:!0,slecteKeys:[],openKeys:[],defaultopenKeys:[],iscollapsedBtn:!1},n}u()(t,e);var n=t.prototype;return n.componentDidUpdate=function(){console.log("nextProps",this.props)},n.render=function(){var e=this,t=this.state,n=t.collapsed,r=t.slecteKeys,o=(t.openKeys,t.iscollapsedBtn),i=t.defaultopenKeys;return a.a.createElement("div",{className:L()("sidelayout")},o&&a.a.createElement(w.a,{type:"primary",onClick:this.toggleCollapse,style:{marginBottom:15}},a.a.createElement(E,{className:L()(n?"icon-icons_flod":"icon-icons_unflod")})),a.a.createElement(N.a,{className:L()("SideLayout"),defaultSelectedKeys:r,defaultOpenKeys:i,mode:"inline",theme:"dark",inlineCollapsed:!n},j.map((function(t){return e.deepItem(t)}))))},t}(a.a.Component),A=(n(285),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={name:"duzibo",toggle:!1},n}return u()(t,e),t.prototype.render=function(){return a.a.createElement("div",{className:"main"},a.a.createElement("div",{className:"header"},"头部100%"),a.a.createElement(P,this.props),a.a.createElement("div",{className:"right"},this.props.children()))},t}(a.a.Component));function D(e){return a.a.createElement(A,e,(function(){return j.map((function(t){return function e(t,n){return t.children?t.children.map((function(t){return e(t,n)})):a.a.createElement(m.b,f()({key:t.path},t,n))}(t,e)}))}))}function I(e,t,n){void 0===e&&(e=""),void 0===t&&(t=800),void 0===n&&(n=function(){}),"function"==typeof t&&(n=t,t=800);var r=null,o=document.createElement("div");document.body.appendChild(o);c.a.render(a.a.createElement((function(){return a.a.createElement("div",{className:"v_toast"},e)}),null),o),r=setTimeout((function(){o.classList.add("v_hidden"),o.parentNode.removeChild(o),n(),clearTimeout(r)}),t)}n(286),n(287),n(289),n(290);var K,T,q=n(47),M=n(309);function U(){console.log("执行"),Object(o.useEffect)((function(){}),[]);var e=Object(o.useState)({a:1}),t=e[0],n=e[1];return a.a.createElement("div",null,a.a.createElement("div",null,t.a),a.a.createElement("div",{onClick:function(){return n((function(e){return{a:1}}))}},"click"))}Object(M.a)(((K={}).LOGIN=function(e){return e},K.INPUT=function(e){return e},K)),n(294);var z,B=Object(q.b)((function(e){return{isLogin:e.isLogin}}),{login:function(){return{type:"LOGIN"}}})(T=function(e){var t=e.prototype.componentWillUnmount||function(){};e.prototype.componentWillUnmount=function(){t&&t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments))),this._unmount=!0,console.log("unmont","123")};var n=e.prototype.setState;e.prototype.setState=function(){this._unmount||n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))}}(T=function(e){function t(t){var n;return n=e.call(this,t)||this,g()(y()(n),"login",(function(){var e=n.props,t=e.login,r=e.location,o=e.history,a=n.state,i=a.user,c=a.password;return i&&c?"123456"===i&&"123456"==c?(o.replace({pathname:r.state.path,search:r.search,hash:r.hash}),t()):I("密码错误",2e3):I("请输入完整内容",2e3)})),n.state={user:"123",password:""},n}return u()(t,e),t.getDerivedStateFromProps=function(e,t){return t},t.prototype.render=function(){var e=this,t=this.state,n=t.password,r=t.user;return a.a.createElement("div",{className:L()("login")},a.a.createElement("div",{className:L()("content")},a.a.createElement("div",{style:{textAlign:"center",fontSize:"26px",color:"#000",paddingTop:"25px"}},"登陆"),a.a.createElement(U,null),a.a.createElement("div",{className:L()("form")},a.a.createElement("div",{style:{padding:"20px 30px"}},a.a.createElement("input",{type:"text",placeholder:"123456",value:r,onChange:function(t){e.setState({user:t.target.value})}})),a.a.createElement("div",{style:{padding:"20px 30px"}},a.a.createElement("input",{type:"text",placeholder:"123456",value:n,onChange:function(t){e.setState({password:t.target.value})}}))),a.a.createElement(w.a,{className:"btn",size:"large",type:"primary",shape:"round",onClick:this.login},"登陆")))},t}(o.Component))||T)||T,F=function(e){function t(){return e.apply(this,arguments)||this}return u()(t,e),t.prototype.render=function(){return a.a.createElement(s,null,a.a.createElement(p.a,null,a.a.createElement(W,null,a.a.createElement(m.d,null,a.a.createElement(a.a.Fragment,null,a.a.createElement(m.a,{from:"/",to:"/layout"}),a.a.createElement(m.b,{path:"/layout",render:function(e){return a.a.createElement(D,e)}}),a.a.createElement(m.b,{path:"/login",exact:!0,component:B}))))))},t}(a.a.Component),G=Object(q.b)((function(e){return{isLogin:e.isLogin}}))(z=function(e){function t(){return e.apply(this,arguments)||this}u()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.props,t=e.location,n=e.isLogin,r=e.history;n||"/layout/rule"!==t.pathname||console.log(r)},n.componentDidUpdate=function(){var e=this.props,t=e.location,n=e.isLogin,r=e.history;console.log("update",t),n||"/layout/rule"!==t.pathname||(console.log(111,r),r.replace({pathname:"/login",state:{path:t.pathname}}))},n.render=function(){return this.props.children},t}(a.a.Component))||z,W=Object(m.g)(G),J=F,H={isLogin:!1},Q=n(59),R=n(168),V=Object(Q.c)((function(e,t){return void 0===e&&(e=H),"LOGIN"===t.type?Object.assign({},e,{isLogin:!0}):e}),Object(Q.a)(R.a));r.a.config({top:"30vh",duration:1}),c.a.render(a.a.createElement(q.a,{store:V},a.a.createElement(J,null)),document.querySelector("#app"))}});