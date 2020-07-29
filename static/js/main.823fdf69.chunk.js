(this["webpackJsonpface-recognition"]=this["webpackJsonpface-recognition"]||[]).push([[0],{274:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(30),r=a.n(i),o=(a(69),a(7)),l=a(8),c=a(10),m=a(9),u=function(e){var t=e.onRouteChange;return e.isSignedIn?s.a.createElement("div",null,s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end",marginRight:"0.5em"}},s.a.createElement("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline p3 pointer"},"Sign out"))):s.a.createElement("div",null,s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end",marginRight:"0.5em"}},s.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline p3 pointer ma3"},"Sign in"),s.a.createElement("p",{onClick:function(){return t("register")},className:"f3 link dim black underline p3 ma3 pointer"},"Register")))},d=a(61),h=a.n(d),g=(a(70),a(62)),p=a.n(g),b=function(){return s.a.createElement("div",{className:"ma4 mt0 "},s.a.createElement(h.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:150,width:150}},s.a.createElement("div",{className:"Tilt-inner pa3 "}," ",s.a.createElement("img",{style:{paddingTop:"5px"},alt:"brainlogo",src:p.a})," ")))},f=(a(71),function(e){var t=e.onImputChange,a=e.onSubmit;return s.a.createElement("div",null,s.a.createElement("p",{className:"f3 white"},"detect face in your url's picture, give it a try"),s.a.createElement("div",{className:"center"},s.a.createElement("div",{className:"center form br3 pa4 shadow-5"},s.a.createElement("input",{type:"text",className:"w-70 f4 pa2  center",onChange:t}),s.a.createElement("button",{className:"w-35 grow  f4  link  ph3 pv2 fiv black bg-light-gray br2",onClick:a},"Detect"))))}),E=function(e){var t=e.name,a=e.entries;return s.a.createElement("div",null,s.a.createElement("div",{className:"white f3"},"".concat(t,", your current entrie count is:...")),s.a.createElement("div",{className:"white f1"},"#"+a))},y=(a(72),function(e){var t=e.imgUrl,a=e.box;return s.a.createElement("div",{className:"ma4 center"},s.a.createElement("div",{className:"mt2 absolute"},s.a.createElement("img",{id:"inputImage",className:"br3",width:"500px",height:"auto",alt:"",src:t}),s.a.createElement("div",{className:"boundig-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}})))}),w=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onSubmitSignIn=function(){fetch("http://localhost:3001/signin",{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={signInEmail:"",signInPassword:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return s.a.createElement("div",null,s.a.createElement("article",{className:"br4 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("div",{className:"measure"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),s.a.createElement("div",{className:""},s.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),s.a.createElement("div",{className:"lh-copy mt3"},s.a.createElement("p",{onClick:function(){return e("register")},className:"f6 link pointer dim black db"},"Register"))))))}}]),a}(n.Component),v=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onNameChange=function(e){n.setState({createName:e.target.value})},n.onEmailChange=function(e){n.setState({createEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({createPassword:e.target.value})},n.onSubmitRegister=function(){fetch("http://localhost:3001/register",{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({email:n.state.createEmail,password:n.state.createPassword,name:n.state.createName})}).then((function(e){return e.json()})).then((function(e){n.props.loadUser(e.id),n.props.onRouteChange("home")})).catch((function(e){return console.log(e)}))},n.state={createName:"",createEmail:"",createPassword:""},n}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("article",{className:"br4 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("div",{className:"measure"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),s.a.createElement("input",{onChange:this.onNameChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),s.a.createElement("div",{className:""},s.a.createElement("input",{onClick:this.onSubmitRegister,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"}))))))}}]),a}(n.Component),N=(a(73),a(63)),A=a.n(N),C={particles:{number:{value:50,density:{enable:!0,value_area:800}}}},k={input:"",imgUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},R=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,password:t.password,entries:t.entries,joined:t.joined}})},e.faceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputImage"),n=Number(a.width),s=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*s,rightCol:n-t.right_col*n,bottomRow:s-t.bottom_row*s}},e.displayFaceBox=function(t){e.setState({box:t})},e.onImputChange=function(t){e.setState({input:t.target.value})},e.onSubmit=function(){e.setState({imgUrl:e.state.input}),fetch("http://localhost:3001/imageurl",{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){fetch("http://localhost:3001/image",{method:"put",headers:{"content-type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})),e.displayFaceBox(e.faceLocation(t))})).catch((function(e){return console.log("pilla",e)}))},e.onRouteChange=function(t){"signout"===t?e.setState(k):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state=k,e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,a=e.imgUrl,n=e.route,i=e.box;return s.a.createElement("div",{className:"App"},s.a.createElement(A.a,{className:"particles",params:C}),s.a.createElement(u,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===n?s.a.createElement("div",null,s.a.createElement(b,null),s.a.createElement(E,{name:this.state.user.name,entries:this.state.user.entries}),s.a.createElement(f,{onImputChange:this.onImputChange,onSubmit:this.onSubmit}),s.a.createElement(y,{box:i,imgUrl:a})):"signin"===n?s.a.createElement(w,{onRouteChange:this.onRouteChange,loadUser:this.loadUser}):s.a.createElement(v,{onRouteChange:this.onRouteChange,loadUser:this.loadUser}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(273);r.a.render(s.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},62:function(e,t){e.exports="data:image/png;base64,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"},64:function(e,t,a){e.exports=a(274)},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.823fdf69.chunk.js.map