(this["webpackJsonpfun-with-images"]=this["webpackJsonpfun-with-images"]||[]).push([[0],{222:function(e,t,a){},223:function(e,t,a){},224:function(e,t,a){},225:function(e,t,a){},226:function(e,t,a){},227:function(e,t,a){},229:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(63),o=a.n(s),i=(a(72),a(5)),l=a(6),c=a(8),u=a(7),m=(a(73),a(64)),h=a.n(m),p=function(e){var t=e.onRouteChange,a=e.isSignedIn,n="home"===e.route?r.a.createElement("p",{onClick:function(){return t("profile")},className:"link dim black underline pa3 pointer"},"Profile"):r.a.createElement("p",{onClick:function(){return t("home")},className:"link dim black underline pa3 pointer"},"Home");return a?r.a.createElement("nav",{className:"main-nav end"},n,r.a.createElement("p",{onClick:function(){return t("signin")},className:"link dim black underline pa3 pointer"},"Sign out")):r.a.createElement("nav",{className:"main-nav end"},r.a.createElement("p",{onClick:function(){return t("signin")},className:"link dim black underline pa3 pointer"},"Sign in"),r.a.createElement("p",{onClick:function(){return t("register")},className:"link dim black underline pa3 pointer"},"Register"))},d=(a(222),a(65)),g=a.n(d),f=function(){return r.a.createElement("div",{className:"Logo"},r.a.createElement("img",{src:g.a,alt:"logo"}))},b=function(e){var t=e.isSignedIn,a=e.onRouteChange,n=e.route;return r.a.createElement("header",{className:"site-header"},r.a.createElement(p,{isSignedIn:t,onRouteChange:a,route:n}),r.a.createElement(f,null))},E=function(e){var t=e.label,a=e.name,n=e.type,s=e.onChange,o=e.onKeyUp,i=e.extraClass,l=null!==i&&void 0!==i?i:"",c="";switch(a){case"password":c="current-password";break;case"email-address":c="email";break;case"name":c="name";break;default:c=""}return r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:n},t,r.a.createElement("input",{onChange:s,onKeyUp:o,className:"".concat(l," pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100"),type:n,name:a,id:a,autoComplete:c})))},v=function(e){var t=e.value,a=e.type,n=e.onClick,s=e.extraClass,o=null!==s&&void 0!==s?s:"";return r.a.createElement("div",{className:"mt3"},r.a.createElement("input",{onClick:n,className:"".concat(o," b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"),type:a,value:t}))},y=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this)).handleKeyUp=function(e){13===e.keyCode&&document.querySelector(".signIn").click()},n.onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onSubmitSignIn=function(e){e.preventDefault(),""!==n.state.signInEmail&&""!==n.state.signInPassword?fetch("".concat(n.props.database,"/signin"),{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id?(n.props.loadUser(e),n.setState({loginError:""}),n.props.onRouteChange("home")):n.setState({loginError:e})})):n.setState({loginError:"Please make sure both fields are entered"})},n.onSubmitVisitor=function(e){e.preventDefault(),fetch("".concat(n.props.database,"/signin"),{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({email:"visitor@gmail.com",password:"visit"})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={signInEmail:"",signInPassword:"",loginError:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange,t=this.state.loginError?r.a.createElement("p",{className:"error-message"},this.state.loginError):"";return r.a.createElement("article",{className:"sign-in br3 ba dark-gray b--black-10 mv4 mw6 shadow-5 center"},r.a.createElement("form",{className:"pa4 black-80",action:"/"},r.a.createElement("div",{className:"measure"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),r.a.createElement(E,{label:"Email",name:"email-address",type:"email",onChange:this.onEmailChange,onKeyUp:this.handleKeyUp,extraClass:"inputField"}),r.a.createElement(E,{label:"Password",name:"password",type:"password",onChange:this.onPasswordChange,onKeyUp:this.handleKeyUp,extraClass:"inputField"})),t,r.a.createElement(v,{value:"Sign in",type:"submit",onClick:this.onSubmitSignIn,extraClass:"signIn"}),r.a.createElement(v,{value:"Log in as Visitor",type:"submit",onClick:this.onSubmitVisitor}),r.a.createElement("div",{className:"lh-copy mt3"},r.a.createElement("p",{onClick:function(){return e("register")},className:"f6 link dim black db pointer"},"Register")))))}}]),a}(n.Component),C=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this)).handleKeyUp=function(e){13===e.keyCode&&document.querySelector(".register").click()},n.sanitize=function(e){var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"};return e.replace(/[&<>"'/]/gi,(function(e){return t[e]}))},n.onNameChange=function(e){n.setState({name:e.target.value})},n.onEmailChange=function(e){n.setState({email:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onSubmitRegister=function(e){e.preventDefault();var t=n.state,a=t.name,r=t.email,s=t.password,o=!1,i=!1,l=!1;""!==a?(a=n.sanitize(a),n.setState({name:a}),o=!0,n.setState({nameError:""})):n.setState({nameError:"Please enter your name"}),""!==r&&/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(r)?(i=!0,n.setState({emailError:""})):n.setState({emailError:"Please enter your email"}),""!==s?(l=!0,n.setState({passwordError:""})):n.setState({passwordError:"Please enter your password"}),o&&i&&l?fetch("".concat(n.props.database,"/register"),{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({name:a,email:r,password:s})}).then((function(e){return e.json()})).then((function(e){e.id?(n.props.loadUser(e),n.setState({registerError:""}),n.props.onRouteChange("home")):n.setState({registerError:e})})):n.setState({registerError:"Something went wrong"})},n.state={name:"",email:"",password:"",nameError:"",emailError:"",passwordError:"",registerError:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.nameError?r.a.createElement("p",{className:"error-message"},this.state.nameError):"",t=this.state.emailError?r.a.createElement("p",{className:"error-message"},this.state.emailError):"",a=this.state.passwordError?r.a.createElement("p",{className:"error-message"},this.state.passwordError):"",n=this.state.registerError?r.a.createElement("p",{className:"error-message"},this.state.registerError):"";return r.a.createElement("article",{className:"register br3 ba dark-gray b--black-10 mv4 mw6 shadow-5 center"},r.a.createElement("form",{className:"pa4 black-80"},r.a.createElement("div",{className:"measure"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),r.a.createElement(E,{label:"Name",name:"name",type:"text",onChange:this.onNameChange,onKeyUp:this.handleKeyUp}),e,r.a.createElement(E,{label:"Email",name:"email-address",type:"email",onChange:this.onEmailChange,onKeyUp:this.handleKeyUp}),t,r.a.createElement(E,{label:"Password",name:"password",type:"password",onChange:this.onPasswordChange,onKeyUp:this.handleKeyUp}),a),r.a.createElement(v,{value:"Register",type:"submit",onClick:this.onSubmitRegister,extraClass:"register"}),n)))}}]),a}(n.Component),w=function(e){var t=e.name,a=e.entries,n=a>0?"Welcome back":"Lets start";return r.a.createElement("div",null,r.a.createElement("div",{className:"white f3"},r.a.createElement("p",null,n," ",r.a.createElement("span",{className:"capitalize"},t),", your current entry count is:")),r.a.createElement("div",{className:"white f1"},r.a.createElement("p",null,"#",a)))},S=(a(223),function(e){var t=e.onInputChange,a=e.onButtonSubmit,n=e.imageUrlError,s=e.inputValue;return r.a.createElement("div",null,r.a.createElement("p",{className:"f3"},"This App detects faces in images"),r.a.createElement("p",null,"Click on the ",r.a.createElement("strong",null,"paint icon")," to see which colors were detected"),r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"center form pa4 br3 shadow-5"},r.a.createElement("input",{className:"f4 pa2 w-70 center",value:s,type:"url",onChange:t,onKeyUp:function(e){return function(e){13===e.keyCode&&document.querySelector(".detect").click()}(e)}}),r.a.createElement("button",{className:"detect w-30 grow link ph3 pv2 dib white bg-light-blue",onClick:a},"Detect"))),n)}),k=(a(224),a(66)),N=a.n(k),j=function(e){var t=e.imageUrl,a=e.onShowClick,n=t?r.a.createElement("img",{id:"imageElement",src:t,alt:"result"}):r.a.createElement("p",null,"Submit an image url to start"),s=t?r.a.createElement("div",{className:"view-colors",onClick:a},r.a.createElement("img",{src:N.a,alt:"View Colors"})):"";return r.a.createElement("div",{className:"center image-holder"},s,n)},U=(a(225),function(e){var t=e.colors,a=e.showColor,n=e.onShowClick,s=a?"block":"none",o=r.a.createElement("p",null,"No colors detected.");if(t.length){var i=t.map((function(e){var t=e.hex,a=e.name;return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{backgroundColor:t}}),"HEX: ",t,", Name: ",a)}));o=r.a.createElement("ul",null,i)}return r.a.createElement("div",{className:"colors-list br3",style:{display:s}},r.a.createElement("span",{className:"close-colors",onClick:n},"X"),r.a.createElement("h2",null,"These colors were detected:"),o)}),x=function(e){var t=e.userName,a=e.entries,n=e.inputValue,s=e.imageUrlError,o=e.onInputChange,i=e.onImageUrlSubmit,l=e.imageUrl,c=e.boxes,u=e.toggleColorList,m=e.colors,h=e.showColorList;return r.a.createElement("article",{className:"pa4 mb4"},r.a.createElement(w,{name:t,entries:a}),r.a.createElement(S,{inputValue:n,imageUrlError:s,onInputChange:o,onButtonSubmit:i}),r.a.createElement(j,{imageUrl:l,boxes:c,onShowClick:u}),r.a.createElement(U,{colors:m,showColor:h,onShowClick:u}))},I=(a(226),a(227),function(e){var t=e.id,a=e.url,n=e.onResubmit;return r.a.createElement("div",{id:"ImageCard-".concat(t),className:"ImageCard",style:{backgroundImage:'url("'.concat(a,'")')}},r.a.createElement("button",{className:"card-button",onClick:function(){return n(a)}},"Resubmit"))}),O=a(4),R=a(15),M=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(i.a)(this,a),(n=t.call(this,e)).state={style:{}};return n.width=null,n.height=null,n.left=null,n.top=null,n.transitionTimeout=null,n.updateCall=null,n.element=null,n.settings=Object.assign({},{reverse:!1,max:35,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:"1.1",speed:"1000",transition:!0,axis:null,reset:!0},n.props.options),n.reverse=n.settings.reverse?-1:1,n.onMouseEnter=n.onMouseEnter.bind(Object(R.a)(n),n.props.onMouseEnter),n.onMouseMove=n.onMouseMove.bind(Object(R.a)(n),n.props.onMouseMove),n.onMouseLeave=n.onMouseLeave.bind(Object(R.a)(n),n.props.onMouseLeave),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.element=document.getElementById(this.props.elementId)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.transitionTimeout),cancelAnimationFrame(this.updateCall)}},{key:"onMouseEnter",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments.length>1?arguments[1]:void 0;return this.updateElementPosition(),this.setState(Object.assign({},this.state,{style:Object(O.a)(Object(O.a)({},this.state.style),{},{willChange:"transform"})})),this.setTransition(),e(t)}},{key:"reset",value:function(){var e=this;window.requestAnimationFrame((function(){e.setState(Object.assign({},e.state,{style:Object(O.a)(Object(O.a)({},e.state.style),{},{transform:"perspective(".concat(e.settings.perspective,"px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")})}))}))}},{key:"onMouseMove",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments.length>1?arguments[1]:void 0;return t.persist(),null!==this.updateCall&&window.cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.update.bind(this,t)),e(t)}},{key:"setTransition",value:function(){var e=this;clearTimeout(this.transitionTimeout),this.setState(Object.assign({},this.state,{style:Object(O.a)(Object(O.a)({},this.state.style),{},{transition:"".concat(this.settings.speed,"ms ").concat(this.settings.easing)})})),this.transitionTimeout=setTimeout((function(){e.setState(Object.assign({},e.state,{style:Object(O.a)(Object(O.a)({},e.state.style),{},{transition:""})}))}),this.settings.speed)}},{key:"onMouseLeave",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments.length>1?arguments[1]:void 0;return this.setTransition(),this.settings.reset&&this.reset(),e(t)}},{key:"getValues",value:function(e){var t=(e.nativeEvent.clientX-this.left)/this.width,a=(e.nativeEvent.clientY-this.top)/this.height,n=Math.min(Math.max(t,0),1),r=Math.min(Math.max(a,0),1);return{tiltX:(this.reverse*(this.settings.max/2-n*this.settings.max)).toFixed(2),tiltY:(this.reverse*(r*this.settings.max-this.settings.max/2)).toFixed(2),percentageX:100*n,percentageY:100*r}}},{key:"updateElementPosition",value:function(){var e=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=e.left,this.top=e.top}},{key:"update",value:function(e){var t=this.getValues(e);this.setState(Object.assign({},this.state,{style:Object(O.a)(Object(O.a)({},this.state.style),{},{transform:"perspective(".concat(this.settings.perspective,"px)\n                      rotateX(").concat("x"===this.settings.axis?0:t.tiltY,"deg)\n                      rotateY(").concat("y"===this.settings.axis?0:t.tiltX,"deg)\n                      scale3d(").concat(this.settings.scale,", ").concat(this.settings.scale,", ").concat(this.settings.scale,")")})})),this.updateCall=null}},{key:"render",value:function(){var e=Object.assign({},this.props.style,this.state.style);return r.a.createElement("div",{style:e,onMouseEnter:this.onMouseEnter,onMouseMove:this.onMouseMove,onMouseLeave:this.onMouseLeave,options:{max:25}},this.props.children)}}]),a}(n.Component),L=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this)).onSubmitRemoval=function(){fetch("".concat(n.props.database,"/profile-removal/").concat(n.props.userId),{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({email:n.props.userEmail,id:n.props.userId})}).then((function(e){return e.json()})).then((function(e){alert(e)})).then((function(){return n.props.onRouteChange("signin")})).catch((function(e){return alert("Unable to remove profile")}))},n.state={images:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(this.props.database,"/profile-images/").concat(this.props.userId)).then((function(e){return e.json()})).then((function(t){t.length&&e.setState({images:t})})).catch((function(e){return console.log("Could not fetch images")}))}},{key:"render",value:function(){var e=this.props,t=e.userId,a=e.userName,n=e.entries,s=e.onResubmit,o=1!==t?r.a.createElement("button",{className:"remove-button",onClick:this.onSubmitRemoval},"Delete your profile"):"",i=n>0?r.a.createElement("div",null,r.a.createElement("p",null,"Thank you for using the app ",n," times so far!!"),r.a.createElement("h3",null,"The following images were submitted by you:"),r.a.createElement("p",null,"Note: Some images might have been submitted multipale times")):r.a.createElement("h3",null,"You haven't submitted any images yet.. "),l=n>0?r.a.createElement("p",null,"Loading..."):r.a.createElement("p",null,"Go ahead and submit ",r.a.createElement("span",{role:"img","aria-label":"Smirking Face"},"\ud83d\ude0f"));return this.state.images.length&&(l=this.state.images.map((function(e){return r.a.createElement(M,{key:e.id,elementId:"ImageCard-".concat(e.id)},r.a.createElement(I,{key:e.id,id:e.id,url:e.url,onResubmit:s}))}))),r.a.createElement("article",{className:"profile pa4 mb4"},r.a.createElement("h2",null,"Hi ",r.a.createElement("span",{className:"capitalize"},a)),i,o,r.a.createElement("section",{className:"images-container"},l))}}]),a}(n.Component),F=function(){return r.a.createElement("footer",{className:"site-footer"},r.a.createElement("p",null,"Made with ",r.a.createElement("span",null,"\u2665")," by ",r.a.createElement("a",{href:"https://github.com/TomKiWorld",target:"_blank",rel:"noopener noreferrer"},"TomKiWorld")))},P="https://fierce-oasis-21316.herokuapp.com",K={particles:{line_linked:{shadow:{enable:!0,color:"#3CA9D1",blur:5}},number:{value:50,density:{enable:!0,value_area:500}}}},T={input:"",imageUrl:"",imageUrlError:"",colors:[],showColorList:!1,route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},B=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onImageUrlSubmit=function(){if(e.state.input){e.state.input!==e.state.imageUrl?/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/.test(e.state.input)?(e.setState({imageUrl:e.state.input,imageUrlError:""}),document.querySelectorAll(".bounding-box").forEach((function(e){return e.remove()})),e.getColors(),e.getFaces()):e.setState({imageUrlError:"Please enter a valid url"}):e.setState({imageUrlError:"Please enter a new url"})}else e.setState({imageUrlError:"Please enter an image url"})},e.onImageResubmit=function(t){e.onRouteChange("home"),e.setState({input:t,imageUrl:"",imageUrlError:""}),window.setTimeout((function(){e.onImageUrlSubmit()}),500)},e.getColors=function(){fetch("".concat(P,"/image-colors"),{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){if(!t||!t.outputs)throw e.setState({imageUrlError:t}),new Error(t);fetch("".concat(P,"/image"),{method:"put",headers:{"Content-type":"application/json"},body:JSON.stringify({id:e.state.user.id,url:e.state.imageUrl})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})).catch((function(e){return console.log("getFaces colors: ",e)}));var a=[];t.outputs[0].data.colors.map((function(t){var n={hex:t.w3c.hex,name:t.w3c.name};return a.push(n),e.setState({colors:a})}))})).catch((function(e){return console.log(e)}))},e.getFaces=function(){fetch("".concat(P,"/image-faces"),{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){if(!t||!t.outputs)throw e.setState({imageUrlError:t}),new Error(t);e.calculateFaceLocations(t)})).catch((function(e){return console.log("getFaces error: ",e)}))},e.calculateFaceLocations=function(t){var a=document.getElementById("imageElement");if(a){var n=Number(a.width),r=Number(a.height),s=t.outputs[0].data.regions,o=[];s.map((function(t){return e.calculateBoundingBox(t,n,r,o)})),o.map((function(t){return e.displayBoundingBox(t,a)}))}},e.calculateBoundingBox=function(e,t,a,n){var r=e.region_info.bounding_box,s={leftCol:r.left_col*t,topRow:r.top_row*a,RightCol:t-r.right_col*t,bottomRow:a-r.bottom_row*a};n.push(s)},e.displayBoundingBox=function(e,t){var a=document.createElement("DIV");return a.classList.add("bounding-box"),a.style.left="".concat(e.leftCol.toFixed(4),"px"),a.style.top="".concat(e.topRow.toFixed(4),"px"),a.style.right="".concat(e.RightCol.toFixed(4),"px"),a.style.bottom="".concat(e.bottomRow.toFixed(4),"px"),t.parentElement.appendChild(a)},e.toggleColorList=function(){e.setState({showColorList:!e.state.showColorList})},e.onRouteChange=function(t){"home"===t||"profile"===t?e.setState({isSignedIn:!0}):e.setState({isSignedIn:!1}),"signin"===t&&e.setState(T),"home"===t&&e.setState({input:"",imageUrl:"",imageUrlError:""}),e.setState({route:t})},e.state=T,e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,a=e.imageUrl,n=e.boxes,s=e.colors,o=e.showColorList,i=e.route,l=this.state.imageUrlError?r.a.createElement("p",{className:"error-message"},this.state.imageUrlError):"",c="";switch(i){case"home":c=r.a.createElement(x,{userName:this.state.user.name,entries:this.state.user.entries,inputValue:this.state.input,imageUrlError:l,onInputChange:this.onInputChange,onImageUrlSubmit:this.onImageUrlSubmit,imageUrl:a,boxes:n,toggleColorList:this.toggleColorList,colors:s,showColorList:o});break;case"register":c=r.a.createElement(C,{database:P,loadUser:this.loadUser,onRouteChange:this.onRouteChange});break;case"profile":c=r.a.createElement(L,{database:P,userId:this.state.user.id,userName:this.state.user.name,userEmail:this.state.user.email,entries:this.state.user.entries,onRouteChange:this.onRouteChange,onResubmit:this.onImageResubmit});break;default:c=r.a.createElement(y,{database:P,loadUser:this.loadUser,onRouteChange:this.onRouteChange})}return r.a.createElement("div",{className:"App"},r.a.createElement(h.a,{className:"particles",params:K}),r.a.createElement(b,{isSignedIn:t,onRouteChange:this.onRouteChange,route:this.state.route}),c,r.a.createElement(F,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(228);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},65:function(e,t,a){e.exports=a.p+"static/media/funGif.1e4a7e6e.gif"},66:function(e,t,a){e.exports=a.p+"static/media/colorsIcon.16c2fe4a.svg"},67:function(e,t,a){e.exports=a(229)},72:function(e,t,a){},73:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.fdbca690.chunk.js.map