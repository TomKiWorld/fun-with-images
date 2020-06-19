(this["webpackJsonpfun-with-images"]=this["webpackJsonpfun-with-images"]||[]).push([[4],{243:function(e,a,t){e.exports=t.p+"static/media/FaceOne.2fe015e1.svg"},244:function(e,a,t){e.exports=t.p+"static/media/FaceTwo.94a805f3.svg"},245:function(e,a,t){e.exports=t.p+"static/media/FaceThree.11ca4909.svg"},246:function(e,a,t){e.exports=t.p+"static/media/FaceFour.3a91bf1c.svg"},247:function(e,a,t){"use strict";var r=t(0),n=t.n(r),s=t(243),o=t.n(s),i=t(244),c=t.n(i),l=t(245),m=t.n(l),u=t(246),g=t.n(u),p=(t(248),function(e,a){return e===a?"avatar-img grow selected":"avatar-img grow"});a.a=function(e){var a=e.title,t=e.avatar,r=e.selectAvatar;return n.a.createElement("div",null,n.a.createElement("p",{className:"db fw6 lh-copy f6"},a),n.a.createElement("div",{className:"profile-avatars"},n.a.createElement("img",{className:p("avatarOne",t),src:o.a,alt:"Avatar one",onClick:function(){return r("avatarOne")}}),n.a.createElement("img",{className:p("avatarTwo",t),src:c.a,alt:"Avatar two",onClick:function(){return r("avatarTwo")}}),n.a.createElement("img",{className:p("avatarThree",t),src:m.a,alt:"Avatar three",onClick:function(){return r("avatarThree")}}),n.a.createElement("img",{className:p("avatarFour",t),src:g.a,alt:"Avatar four",onClick:function(){return r("avatarFour")}})))}},248:function(e,a,t){},257:function(e,a,t){"use strict";t.r(a);var r=t(32),n=t(8),s=t(9),o=t(11),i=t(10),c=t(0),l=t.n(c),m=t(43),u=t(45),g=t(21),p=t(247),h=t(1),f=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){var e;return Object(n.a)(this,t),(e=a.call(this)).sanitize=function(e){var a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"};return e.replace(/[&<>"'/]/gi,(function(e){return a[e]}))},e.onFieldChange=function(a,t){e.setState(Object(r.a)({},t,a.target.value))},e.getUserData=function(a,t){return fetch("".concat(h.c,"/profile/").concat(a),{method:"get",headers:{"Content-type":"application/json",Authorization:t}}).then((function(e){return e.json()})).then((function(a){a&&a.email?(e.props.loadUser(a),e.setState({registerError:"",loading:!1}),e.props.onRouteChange("home")):e.setState({registerError:a,loading:!1})})).catch((function(e){return console.log(e)}))},e.onSubmitRegister=function(a){a.preventDefault();var t=e.state,r=t.name,n=t.email,s=t.avatar,o=t.password,i=!1,c=!1,l=!1;""!==r?(r=e.sanitize(r),e.setState({name:r}),i=!0,e.setState({nameError:""})):e.setState({nameError:"Please enter your name"}),""!==n&&/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(n)?(c=!0,e.setState({emailError:""})):e.setState({emailError:"Please enter your email"}),""!==o?(l=!0,e.setState({passwordError:""})):e.setState({passwordError:"Please enter your password"}),i&&c&&l?(e.setState({loading:!0}),fetch("".concat(h.c,"/register"),{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({name:r,email:n,avatar:s,password:o})}).then((function(e){return e.json()})).then((function(a){a&&"true"===a.success&&(e.props.saveToken(a.token),e.getUserData(a.userId,a.token))})).catch((function(a){e.setState({registerError:"Something went wrong please try again later",loading:!1})}))):e.setState({registerError:"Something went wrong"})},e.selectAvatar=function(a){e.setState({avatar:a})},e.state={name:"",email:"",password:"",avatar:"avatarOne",nameError:"",emailError:"",passwordError:"",registerError:"",loading:!1},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this,a=this.state.nameError?l.a.createElement("p",{className:"error-message"},this.state.nameError):"",t=this.state.emailError?l.a.createElement("p",{className:"error-message"},this.state.emailError):"",r=this.state.passwordError?l.a.createElement("p",{className:"error-message"},this.state.passwordError):"",n=this.state.registerError?l.a.createElement("p",{className:"error-message"},this.state.registerError):"",s=this.state.loading?l.a.createElement(g.a,null):"";return l.a.createElement("article",{className:"register br3 ba dark-gray b--black-10 mv4 mw6 shadow-5 center"},l.a.createElement("form",{className:"pa4 black-80"},l.a.createElement("div",{className:"measure"},l.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},l.a.createElement("h1",{className:"f1 fw6 ph0 mh0"},"Register"),l.a.createElement(m.a,{label:"Name",name:"name",type:"text",onChange:function(a){return e.onFieldChange(a,"name")}}),a,l.a.createElement(m.a,{label:"Email",name:"email-address",type:"email",onChange:function(a){return e.onFieldChange(a,"email")}}),t,l.a.createElement(p.a,{title:"Select your Avatar:",avatar:this.state.avatar,selectAvatar:this.selectAvatar}),l.a.createElement(m.a,{label:"Password",name:"password",type:"password",onChange:function(a){return e.onFieldChange(a,"password")}}),r),l.a.createElement(u.a,{value:"Register",onClick:this.onSubmitRegister,extraClass:"register"}),n)),s)}}]),t}(c.Component);a.default=f}}]);
//# sourceMappingURL=4.7bf15cbb.chunk.js.map