(this["webpackJsonpfun-with-images"]=this["webpackJsonpfun-with-images"]||[]).push([[0],{1:function(e,n,t){"use strict";t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return r})),t.d(n,"f",(function(){return o})),t.d(n,"g",(function(){return i})),t.d(n,"e",(function(){return c})),t.d(n,"d",(function(){return l})),t.d(n,"b",(function(){return s})),t.d(n,"h",(function(){return u}));var a="https://fierce-oasis-21316.herokuapp.com",r="CHANGE_INPUT_VALUE",o="SET_IMAGE_URL",i="SET_IMAGE_URL_ERROR",c="RESUBMIT_INPUT_VALUE",l="RESUBMIT_IMAGE_URL",s="CHANGE_USER",u="SET_USER_ENTRIES"},18:function(e,n,t){"use strict";t.d(n,"f",(function(){return r})),t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return i})),t.d(n,"d",(function(){return c})),t.d(n,"e",(function(){return l})),t.d(n,"g",(function(){return s})),t.d(n,"c",(function(){return u}));var a=t(1),r=function(e){return{type:a.a,payload:e}},o=function(e){return{type:a.e,payload:e}},i=function(e){return{type:a.d,payload:e}},c=function(e){return{type:a.f,payload:e}},l=function(e){return{type:a.g,payload:e}},s=function(e){return{type:a.b,payload:e}},u=function(e,n){return{type:a.h,payload:{user:e,count:n}}}},21:function(e,n,t){"use strict";var a=t(0),r=t.n(a);t(237);n.a=function(){return r.a.createElement("div",{className:"Preloader"},r.a.createElement("div",{className:"Preloader__holder"},r.a.createElement("div",{className:"Preloader__bar"}),r.a.createElement("div",{className:"Preloader__bar"}),r.a.createElement("div",{className:"Preloader__bar"}),r.a.createElement("div",{className:"Preloader__bar"}),r.a.createElement("div",{className:"Preloader__bar"}),r.a.createElement("div",{className:"Preloader__ball"})))}},237:function(e,n,t){},238:function(e,n,t){},239:function(e,n,t){},241:function(e,n,t){},242:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(20),i=t.n(o),c=t(33),l=t(19),s=t(8),u=t(9),m=t(11),d=t(10),p=t(18),f=(t(89),t(77)),g=t.n(f),h=t(21),E=function(e){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(h.a,null)},e.children)},b=(t(238),function(e){Object(m.a)(t,e);var n=Object(d.a)(t);function t(e){var a;return Object(s.a)(this,t),(a=n.call(this,e)).toggle=function(e){e?a.setState({dropdownOpen:e}):a.setState((function(e){return{dropdownOpen:!e.dropdownOpen}}))},a.showDropDown=function(){var e=a.props.onRouteChange;if(a.state.dropdownOpen)return r.a.createElement("div",{className:"nav-drop-down menu-links",onMouseLeave:function(){return a.toggle(!1)}},r.a.createElement("ul",null,r.a.createElement("li",{onClick:function(){return e("home")}},"Home"),r.a.createElement("li",{onClick:function(){return e("profile")}},"View Profile"),r.a.createElement("li",{onClick:function(){return e("signin")}},"Sign out")))},a.state={dropdownOpen:!1},a}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props.onRouteChange;return r.a.createElement("div",{className:"menu-container tc"},r.a.createElement("div",{"aria-expanded":this.state.dropdownOpen},r.a.createElement("p",{className:"menu",onClick:this.toggle},"\u2261")),this.showDropDown(),r.a.createElement("div",{className:"nav-open menu-links"},r.a.createElement("ul",null,r.a.createElement("li",{onClick:function(){return e("home")},className:"link dim black underline pa3 pointer"},"Home"),r.a.createElement("li",{onClick:function(){return e("profile")},className:"link dim black underline pa3 pointer"},"View Profile"),r.a.createElement("li",{onClick:function(){return e("signin")},className:"link dim black underline pa3 pointer"},"Sign out"))))}}]),t}(a.Component)),v=function(e){var n=e.onRouteChange;return e.isSignedIn?r.a.createElement("nav",{className:"main-nav end"},r.a.createElement(b,{onRouteChange:n})):r.a.createElement("nav",{className:"main-nav end"},r.a.createElement("p",{onClick:function(){return n("signin")},className:"link dim black underline pa3 pointer"},"Sign in"),r.a.createElement("p",{onClick:function(){return n("register")},className:"link dim black underline pa3 pointer"},"Register"))},k=(t(239),t(78)),C=t.n(k),y=function(){return r.a.createElement("div",{className:"Logo"},r.a.createElement("img",{src:C.a,alt:"logo"}))},w=function(e){e.avatarId;var n=e.isSignedIn,t=e.onRouteChange;return r.a.createElement("header",{className:"site-header container"},r.a.createElement(v,{isSignedIn:n,onRouteChange:t}),r.a.createElement(y,null))},S=t(32),j=t(43),I=t(45),O=t(1),N=function(e){Object(m.a)(t,e);var n=Object(d.a)(t);function t(){var e;return Object(s.a)(this,t),(e=n.call(this)).getUserData=function(n,t){return fetch("".concat(O.c,"/profile/").concat(n),{method:"get",headers:{"Content-type":"application/json",Authorization:t}}).then((function(e){return e.json()})).then((function(n){n&&n.email?(e.props.loadUser(n),e.setState({loading:!1}),e.props.onRouteChange("home")):e.setState({loginError:n,loading:!1})})).catch((function(e){return console.log(e)}))},e.onFieldChange=function(n,t){e.setState(Object(S.a)({},t,n.target.value))},e.onSubmitSignIn=function(n,t,a){n.preventDefault(),""!==t&&""!==a?(e.setState({loading:!0}),fetch("".concat(O.c,"/signin"),{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({email:t,password:a})}).then((function(e){return e.json()})).then((function(n){n.userId&&"true"===n.success?(e.props.saveToken(n.token),e.getUserData(n.userId,n.token)):e.setState({loginError:n,loading:!1})})).catch((function(n){e.setState({loginError:"Something went wrong please try again later",loading:!1})}))):e.setState({loginError:"Please make sure both fields are entered"})},e.state={signInEmail:"",signInPassword:"",loginError:"",loading:!1},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,n=window.sessionStorage.getItem("token");n&&fetch("".concat(O.c,"/signin"),{method:"post",headers:{"Content-type":"application/json",Authorization:n}}).then((function(e){return e.json()})).then((function(t){t&&t.id&&e.getUserData(t.id,n)}))}},{key:"render",value:function(){var e=this,n=this.props.onRouteChange,t=this.state.loginError?r.a.createElement("p",{className:"error-message"},this.state.loginError):"",a=this.state.loading?r.a.createElement(h.a,null):"";return r.a.createElement("article",{className:"sign-in ba dark-gray b--black-10 mv4 mw6 shadow-5 center"},r.a.createElement("form",{className:"pa4 black-80",action:"/"},r.a.createElement("div",{className:"measure"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("h1",{className:"f1 fw6 ph0 mh0"},"Sign In"),r.a.createElement(j.a,{label:"Email",name:"email-address",type:"email",onChange:function(n){return e.onFieldChange(n,"signInEmail")},extraClass:"inputField"}),r.a.createElement(j.a,{label:"Password",name:"password",type:"password",onChange:function(n){return e.onFieldChange(n,"signInPassword")},extraClass:"inputField"})),t,r.a.createElement(I.a,{value:"Sign in",onClick:function(n){return e.onSubmitSignIn(n,e.state.signInEmail,e.state.signInPassword)},extraClass:"signIn"}),r.a.createElement(I.a,{value:"Log in as Visitor",onClick:function(n){return e.onSubmitSignIn(n,"visitor@gmail.com","visit")}}),r.a.createElement("div",{className:"lh-copy mt3"},r.a.createElement("p",{onClick:function(){return n("register")},className:"f6 link dim black db pointer"},"Register")))),a)}}]),t}(a.Component),R=function(){return r.a.createElement("footer",{className:"site-footer"},r.a.createElement("p",null,"Made with ",r.a.createElement("span",null,"\u2665")," by ",r.a.createElement("a",{href:"https://github.com/TomKiWorld",target:"_blank",rel:"noopener noreferrer"},"TomKiWorld")))},U=r.a.lazy((function(){return t.e(5).then(t.bind(null,258))})),_=r.a.lazy((function(){return t.e(4).then(t.bind(null,256))})),T=r.a.lazy((function(){return t.e(3).then(t.bind(null,257))})),P={particles:{number:{value:50,density:{enable:!0,value_area:500}}}},A={route:"signin",isSignedIn:!1},L=function(e){Object(m.a)(t,e);var n=Object(d.a)(t);function t(){var e;return Object(s.a)(this,t),(e=n.call(this)).onRouteChange=function(n){"home"===n||"profile"===n?e.setState({isSignedIn:!0}):e.setState({isSignedIn:!1}),"signin"===n&&(e.setState(A),e.props.onInputChange(""),e.props.onUserLoad({}),window.sessionStorage.removeItem("token")),"home"===n&&(e.props.onImageChange(""),e.props.onImageError("")),e.setState({route:n})},e.saveAuthTokenInSession=function(e){window.sessionStorage.setItem("token",e)},e.renderContent=function(n){switch(n){case"signin":return r.a.createElement(N,{loadUser:e.props.onUserLoad,onRouteChange:e.onRouteChange,saveToken:e.saveAuthTokenInSession});case"home":return r.a.createElement(E,null,r.a.createElement(U,null));case"register":return r.a.createElement(E,null,r.a.createElement(_,{loadUser:e.props.onUserLoad,onRouteChange:e.onRouteChange,saveToken:e.saveAuthTokenInSession}));case"profile":return r.a.createElement(E,null,r.a.createElement(T,{loadUser:e.props.onUserLoad,onRouteChange:e.onRouteChange}));default:return r.a.createElement(N,{loadUser:e.props.onUserLoad,onRouteChange:e.onRouteChange,saveToken:e.saveAuthTokenInSession})}},e.state=A,e}return Object(u.a)(t,[{key:"render",value:function(){var e=this.state,n=e.isSignedIn,t=e.route;return r.a.createElement("div",{className:"App"},r.a.createElement(g.a,{className:"particles",params:P}),r.a.createElement(w,{isSignedIn:n,onRouteChange:this.onRouteChange}),this.renderContent(t),r.a.createElement(R,null))}}]),t}(a.Component),D=function(e){Object(m.a)(t,e);var n=Object(d.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(L,this.props)}}]),t}(a.Component),M=Object(c.b)((function(e){return{user:e.userInformation.user}}),(function(e){return{onInputChange:function(n){return e(Object(p.f)(n))},onImageChange:function(n){return e(Object(p.d)(n))},onImageError:function(n){return e(Object(p.e)(n))},onUserLoad:function(n){return e(Object(p.g)(n))}}}))(D);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=t(3),V={inputValue:"",imageUrl:"",imageUrlError:"",resubmit:!1},F={user:{id:"",name:"",email:"",avatar:"avatarOne",entries:0,joined:""}},G=(t(240),t(241),Object(l.b)({imageUrlInputValue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case O.a:case O.e:return Object(x.a)(Object(x.a)({},e),{},{inputValue:n.payload});case O.d:return Object(x.a)(Object(x.a)({},e),{},{resubmit:n.payload});case O.f:return Object(x.a)(Object(x.a)({},e),{},{imageUrl:n.payload});case O.g:return Object(x.a)(Object(x.a)({},e),{},{imageUrlError:n.payload});default:return e}},userInformation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case O.b:if(n.payload&&n.payload.id){var t=n.payload;return Object(x.a)(Object(x.a)({},e),{},{user:{id:t.id,name:t.name,email:t.email,entries:t.entries,avatar:t.avatar,joined:t.joined}})}return e;case O.h:var a=n.payload.user;return Object(x.a)(Object(x.a)({},e),{},{user:{id:a.id,name:a.name,email:a.email,entries:n.payload.count,avatar:a.avatar,joined:a.joined}});default:return e}}})),z=Object(l.c)(G);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,{store:z},r.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},43:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){var n=e.label,t=e.name,a=e.type,o=e.placeholder,i=e.onChange,c=e.onKeyUp,l=e.extraClass,s=null!==l&&void 0!==l?l:"",u="";switch(t){case"password":u="current-password";break;case"email-address":u="email";break;case"name":u="name";break;default:u=""}var m=o||"";return r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:a},n,r.a.createElement("input",{onChange:i,onKeyUp:c,className:"".concat(s," pa2 input-reset ba b--black hover-bg-black hover-white w-100"),type:a,name:t,placeholder:m,id:t,autoComplete:u})))}},45:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){var n=e.value,t=e.onClick,a=e.extraClass,o=null!==a&&void 0!==a?a:"";return r.a.createElement("div",{className:"mt3"},r.a.createElement("input",{onClick:t,className:"".concat(o," b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"),type:"submit",value:n}))}},78:function(e,n,t){e.exports=t.p+"static/media/funGif.d1e0a335.gif"},79:function(e,n,t){e.exports=t(242)},89:function(e,n,t){}},[[79,1,2]]]);
//# sourceMappingURL=main.9b6990cc.chunk.js.map