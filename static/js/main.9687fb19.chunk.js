(window.webpackJsonpmonsters=window.webpackJsonpmonsters||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),s=n.n(o),c=(n(13),n(3)),i=n(4),l=n(6),u=n(5),m=n(7),h=(n(14),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"monster",src:"https://robohash.org/"+e.monster.id+"?set=set2"}),r.a.createElement("h2",null,e.monster.name),r.a.createElement("p",null,e.monster.email))}),d=(n(15),function(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return r.a.createElement(h,{key:e.id,monster:e})})))}),p=(n(16),n(17),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),f=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={monsters:[],searchField:""},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,a=t.searchField,o=n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monsters App"),r.a.createElement(p,{placeholder:"search monsters",handleChange:function(t){return e.setState({searchField:t.target.value})}}),r.a.createElement(d,{monsters:o}))}},{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.9687fb19.chunk.js.map