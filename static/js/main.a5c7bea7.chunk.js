(this.webpackJsonphw1=this.webpackJsonphw1||[]).push([[0],{1:function(e,t,a){e.exports={profile:"user_profile__1MMZZ",description:"user_description__17iZL",name:"user_name__1unN4",statistics:"user_statistics__1Qbb-",feedBack:"user_feedBack__3VZJ0"}},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(2),s=a.n(c),i=a(4),r=a.n(i),l=a(5),o=a(6),d=a(7),b=a(9),j=a(8),u=a(1),h=a.n(u),O=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onHandleClick=function(t){var a=t.target.name;e.setState((function(e){return Object(l.a)({},a,e[a]+1)}))},e.getTotalFeebback=function(){return e.state.good+e.state.neutral+e.state.bad},e.getPositiveFeedback=function(){return 100*e.state.good/e.getTotalFeebback()},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,c=e.bad;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:h.a.profile,children:Object(n.jsxs)("div",{className:h.a.description,children:[Object(n.jsx)("h3",{children:" Pleace leave feedback"}),Object(n.jsx)("button",{type:"button",name:"good",onClick:this.onHandleClick,className:h.a.name,children:"Good"}),Object(n.jsxs)("button",{type:"button",name:"neutral",onClick:this.onHandleClick,className:h.a.name,children:["Neutral"," "]})," ",Object(n.jsxs)("button",{type:"button",name:"bad",onClick:this.onHandleClick,className:h.a.name,children:["Bad"," "]}),Object(n.jsx)("p",{className:h.a.statistics,children:"Statistics"}),!!this.getTotalFeebback()&&Object(n.jsxs)("ul",{className:h.a.feedBack,children:[Object(n.jsx)("li",{children:Object(n.jsxs)("span",{children:["Good: ",t]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("span",{children:["Neutral: ",a]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("span",{children:["Bad: ",c]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("span",{children:["Total: ",this.getTotalFeebback()]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("span",{children:["Positive feedback: ",this.getPositiveFeedback().toFixed(2),"%"]})})]})]})})})}}]),a}(c.Component),x=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(O,{initialValue:0})})};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a5c7bea7.chunk.js.map