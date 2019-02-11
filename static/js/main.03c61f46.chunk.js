(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(80)},34:function(e,t,a){},36:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},78:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),c=a.n(l),o=(a(34),a(3)),s=a(4),u=a(8),i=a(7),m=a(9),h=a(84),p=a(85),f=a(81),b=a(83),d=a(82),v="/battle",E="/",g="/popular";a(36);function y(){return r.a.createElement("ul",{className:"Nav"},r.a.createElement("li",null,r.a.createElement(d.a,{exact:!0,activeClassName:"active",to:E},"Home")),r.a.createElement("li",null,r.a.createElement(d.a,{activeClassName:"active",to:v},"Battle")),r.a.createElement("li",null,r.a.createElement(d.a,{activeClassName:"active",to:g},"Popular")))}var O=a(13),j=(a(41),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},r.a.createElement("h1",null,"Github Battle: Battle your friends... and stuff."),r.a.createElement(O.a,{className:"button",to:v},"Battle"))}}]),t}(n.Component)),N=a(10),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={username:""},a.handleChange=a.handleChange.bind(Object(N.a)(Object(N.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(N.a)(Object(N.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value;this.setState(function(){return{username:t}})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onSubmit(this.props.id,this.state.username)}},{key:"render",value:function(){return r.a.createElement("form",{className:"column",onSubmit:this.handleSubmit},r.a.createElement("label",{className:"header",htmlFor:"username"},this.props.label),r.a.createElement("input",{id:"username",placeholder:"GitHub username",type:"text",value:this.state.username,autoComplete:"off",onChange:this.handleChange}),r.a.createElement("button",{className:"button",type:"submit",disabled:!this.state.username},"Submit"))}}]),t}(n.Component);w.defaultProps={label:"Username"};a(43);function k(e){return r.a.createElement("div",{className:"PlayerPreview"},r.a.createElement("div",{className:"column"},r.a.createElement("img",{className:"avatar",src:e.avatar,alt:"Avatar for ".concat(e.username)}),r.a.createElement("h2",{className:"username"},"@",e.username)),e.children)}a(45);var S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={playerOneImage:null,playerOneName:"",playerTwoImage:null,playerTwoName:""},a.handleSubmit=a.handleSubmit.bind(Object(N.a)(Object(N.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleSubmit",value:function(e,t){this.setState(function(){var a={};return a["".concat(e,"Name")]=t,a["".concat(e,"Image")]="https://github.com/".concat(t,".png?size=200"),a})}},{key:"handleReset",value:function(e){this.setState(function(){var t={};return t["".concat(e,"Name")]="",t["".concat(e,"Image")]=null,t})}},{key:"render",value:function(){var e=this.props.match,t=this.state.playerOneName,a=this.state.playerOneImage,n=this.state.playerTwoName,l=this.state.playerTwoImage;return r.a.createElement("div",{className:"Battle"},r.a.createElement("div",{className:"row"},!t&&r.a.createElement(w,{id:"playerOne",label:"Player One",onSubmit:this.handleSubmit}),null!==a&&r.a.createElement(k,{avatar:a,username:t},r.a.createElement("button",{className:"reset",onClick:this.handleReset.bind(this,"playerOne")},"Reset")),!n&&r.a.createElement(w,{id:"playerTwo",label:"Player Two",onSubmit:this.handleSubmit}),null!==l&&r.a.createElement(k,{avatar:l,username:n},r.a.createElement("button",{className:"reset",onClick:this.handleReset.bind(this,"playerTwo")},"Reset"))),a&&l&&r.a.createElement(O.a,{className:"button",to:{pathname:"".concat(e.url,"/results"),search:"?playerOneName=".concat(t,"&playerTwoName=").concat(n)}},"Battle"))}}]),t}(n.Component),C=a(27),L=a(14),R=a.n(L),x="?client_id=".concat("fde6535e18587af19147","&client_secret=").concat("46999cf5a1607bd57149f7c59b0535d7bc9b7aa1"),P=new(function(){function e(){Object(o.a)(this,e),this.getUserData=this.getUserData.bind(this)}return Object(s.a)(e,[{key:"battle",value:function(e){return R.a.all(e.map(this.getUserData)).then(this.sortPlayers).catch(this.handleError)}},{key:"fetchPopularRepos",value:function(e){var t=window.encodeURI("https://api.github.com/search/repositories?q=stars:>1+language:".concat(e,"&sort=stars&order=desc&type=Repositories"));return R.a.get(t).then(function(e){return e.data.items})}},{key:"getProfile",value:function(e){return R.a.get("https://api.github.com/users/".concat(e).concat(x)).then(function(e){return e.data})}},{key:"getRepos",value:function(e){return R.a.get("https://api.github.com/users/".concat(e,"/repos").concat(x,"&per_page=100"))}},{key:"calculateScore",value:function(e,t){return 3*e.followers+this.getStarCount(t)}},{key:"getStarCount",value:function(e){return e.data.reduce(function(e,t){return e+t.stargazers_count},0)}},{key:"handleError",value:function(e){return console.warn(e),null}},{key:"getUserData",value:function(e){var t=this;return R.a.all([this.getProfile(e),this.getRepos(e)]).then(function(e){var a=Object(C.a)(e,2),n=a[0],r=a[1];return{profile:n,score:t.calculateScore(n,r)}})}},{key:"sortPlayers",value:function(e){return e.sort(function(e,t){return t.score-e.score})}}]),e}()),I=(a(66),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={text:e.text},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.text+"...";this.interval=window.setInterval(function(){e.setState(function(e){return{text:e.text===t?"Loading":e.text+"."}})},this.props.speed)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.interval)}},{key:"render",value:function(){return r.a.createElement("p",{className:"Loading"},this.state.text)}}]),t}(n.Component));I.defaultProps={text:"Loading",speed:300};a(68);function _(e){return r.a.createElement("ul",{className:"LanguageSelect"},["All","JavaScript","Ruby","Java","CSS","Python"].map(function(t){return r.a.createElement("li",{style:t===e.selectedLanguage?{color:"#d0021b"}:null,onClick:e.onSelect.bind(null,t),key:t},t)}))}a(70);function T(e){return r.a.createElement("ul",{className:"Repos"},e.repos.map(function(e,t){return r.a.createElement("li",{key:e.name,className:"item"},r.a.createElement("div",{className:"item-rank"},"#",t+1),r.a.createElement("ul",{className:"spaced-list-items"},r.a.createElement("li",null,r.a.createElement("img",{className:"avatar",src:e.owner.avatar_url,alt:"Avatar for ".concat(e.owner.login)})),r.a.createElement("li",null,r.a.createElement("a",{href:e.html_url,rel:"noopener noreferrer",target:"_blank"},e.name)),r.a.createElement("li",null,"@",e.owner.login),r.a.createElement("li",null,e.stargazers_count," stars")))}))}var D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={repos:null,selectedLanguage:"All"},a.updateLanguage=a.updateLanguage.bind(Object(N.a)(Object(N.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.updateLanguage(this.state.selectedLanguage)}},{key:"updateLanguage",value:function(e){var t=this;this.setState(function(){return{repos:null,selectedLanguage:e}}),P.fetchPopularRepos(e).then(function(e){t.setState(function(){return{repos:e}})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(_,{selectedLanguage:this.state.selectedLanguage,onSelect:this.updateLanguage}),this.state.repos?r.a.createElement(T,{repos:this.state.repos}):r.a.createElement(I,null))}}]),t}(r.a.Component),B=a(26),U=a.n(B);function A(e){var t=e.info;return r.a.createElement(k,{username:t.login,avatar:t.avatar_url},r.a.createElement("ul",{className:"spaced-list-items"},t.name&&r.a.createElement("li",null,t.name),t.location&&r.a.createElement("li",null,t.location),t.company&&r.a.createElement("li",null,t.company),r.a.createElement("li",null,"Followers: ",t.followers),r.a.createElement("li",null,"Following: ",t.following),r.a.createElement("li",null,"Public Repos: ",t.public_repos),t.blog&&r.a.createElement("li",null,r.a.createElement("a",{href:t.blog},t.blog))))}function H(e){return r.a.createElement("div",null,r.a.createElement("h1",{className:"centered-lead"},e.label),r.a.createElement("h3",{className:"text-center"},"Score: ",e.score),r.a.createElement(A,{info:e.profile}))}var J=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={error:null,loading:!0,loser:null,winner:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=U.a.parse(this.props.location.search);P.battle([t.playerOneName,t.playerTwoName]).then(function(t){if(null===t)return e.setState(function(){return{error:"Looks like there was an error. Check that both users exist on GitHub.",loading:!1}});e.setState(function(){return{error:null,loading:!1,loser:t[1],winner:t[0]}})})}},{key:"render",value:function(){var e=this.state.error,t=this.state.loading,a=this.state.loser,n=this.state.winner;return t?r.a.createElement(I,null):e?r.a.createElement("div",null,r.a.createElement("p",null,e),r.a.createElement(O.a,{to:v},"Reset")):r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement(H,{label:"Winner",score:n.score,profile:n.profile}),r.a.createElement(H,{label:"Loser",score:a.score,profile:a.profile})),r.a.createElement("div",{className:"row"},r.a.createElement(O.a,{to:v},"Reset")))}}]),t}(n.Component),z=(a(78),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(y,null),r.a.createElement(p.a,null,r.a.createElement(f.a,{exact:!0,path:E,component:j}),r.a.createElement(f.a,{exact:!0,path:v,component:S}),r.a.createElement(f.a,{path:"/battle/results",component:J}),r.a.createElement(f.a,{path:g,component:D}),r.a.createElement(f.a,{render:function(){return r.a.createElement(b.a,{to:E})}}))))}}]),t}(n.Component));c.a.render(r.a.createElement(z,null),document.getElementById("root"))}},[[28,2,1]]]);
//# sourceMappingURL=main.03c61f46.chunk.js.map