(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,a){e.exports={input:"Guess_input__JB4m_",button:"Guess_button__1fwit",container:"Guess_container__1lO--",guess:"Guess_guess__2m7Z_",right:"Guess_right__JUKx9",wrong:"Guess_wrong__221JS"}},13:function(e,t,a){e.exports=a(22)},18:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(9),c=a.n(r),u=(a(18),a(11)),i=a(2),o=a(3),l=a(5),m=a(4),p=a(6),d=a(7),g=a.n(d),b=a(12),h=a(1),v=a.n(h),_=function(e){var t=Object(b.a)(e.guess,4),a=t[0],s=t[1],r=t[2],c=t[3];return n.createElement("div",{className:v.a.container},n.createElement("div",{className:v.a.guess},a),n.createElement("div",{className:v.a.guess},s),n.createElement("div",{className:v.a.guess},r),n.createElement("div",{className:c?v.a.right:v.a.wrong},c?"YES!":"NO :("))},f=a(10),E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={a:"",b:"",c:""},a.setInput=function(e){return function(t){return a.setState(Object(f.a)({},e,t.currentTarget.value))}},a.addGuess=function(e){a.state.a&&a.state.b&&a.state.c&&(a.props.addGuess(parseInt(a.state.a),parseInt(a.state.b),parseInt(a.state.c)),a.setState({a:"",b:"",c:""}))},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.createElement(w,Object.assign({setInput:this.setInput,addGuess:this.addGuess},this.state))}}]),t}(n.Component),w=function(e){var t=e.a,a=e.b,s=e.c,r=e.setInput,c=e.addGuess,u=n.createRef();return n.createElement("div",{className:v.a.container},n.createElement("div",{className:v.a.guess},n.createElement("input",{ref:u,autoFocus:!0,type:"number",className:v.a.input,value:t,onChange:r("a")})),n.createElement("div",{className:v.a.guess},n.createElement("input",{type:"number",className:v.a.input,value:a,onChange:r("b")})),n.createElement("div",{className:v.a.guess},n.createElement("input",{type:"number",className:v.a.input,value:s,onChange:r("c")})),n.createElement("div",{className:v.a.guess},n.createElement("button",{className:v.a.button,onClick:function(e){c(e),u.current.focus()}},"?")))},N=E,O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={guesses:[[2,4,8,!0]]},a.addGuess=function(e,t,n){return a.setState(function(a){return{guesses:Object(u.a)(a.guesses).concat([[e,t,n,e<t]])}})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.createElement("div",{className:g.a.container},n.createElement("div",{className:g.a.titleContainer},n.createElement("h1",{className:g.a.title},"Guess the rule")),this.state.guesses.map(function(e,t){return n.createElement(_,{key:t,guess:e})}),n.createElement(N,{addGuess:this.addGuess}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,a){e.exports={container:"App_container__3wJDT",titleContainer:"App_titleContainer__2EEhb",title:"App_title__2W-Kz"}}},[[13,2,1]]]);
//# sourceMappingURL=main.57d81acf.chunk.js.map