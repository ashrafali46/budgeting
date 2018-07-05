(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"./components/Chart/styles.scss":function(t,e,n){t.exports={mainSvg:"_27stx"}},"./components/DonutChart/styles.scss":function(t,e,n){t.exports={donutChart:"_1gNni"}},"./components/Legend/styles.scss":function(t,e,n){t.exports={legend:"_38CF-",reverse:"_2ItMa",value:"_3Ie5q"}},"./components/ReportsPanel/index.js":function(t,e,n){"use strict";n.r(e);var r=n("../node_modules/react/index.js"),o=n("../node_modules/react-router-dom/es/Switch.js"),a=n("../node_modules/react-router-dom/es/Route.js"),c=n("../node_modules/react-router-dom/es/Redirect.js"),i=n("./modules/transactions.js"),s=n("./modules/categories.js"),u=n("./store/index.js"),l=n("../node_modules/react-redux/es/index.js"),f=n("./selectors/transactions.js"),p=n("../node_modules/classnames/index.js"),d=n.n(p),h=n("./utils/formatAmount.js"),b=n("./components/Legend/styles.scss"),y=n.n(b),m=function(t){var e=t.color,n=t.label,o=t.value;return r.createElement("li",{style:{color:e}},r.createElement("span",null,n),r.createElement("span",{className:y.a.value}," ",Object(h.a)(o).text," "))},g=function(t){var e,n=t.data,o=t.color,a=t.dataValue,c=t.dataLabel,i=t.dataKey,s=t.reverse;return r.createElement("ul",{className:d()(y.a.legend,(e={},e[y.a.reverse]=s,e))},n.map(function(t,e){return r.createElement(m,{color:o(e),key:t[i],label:t[c],value:t[a]})}))};g.defaultProps={reverse:!1};var v=g,j=n("./components/Chart/styles.scss"),w=n.n(j),O=function(t){var e=t.width,n=t.height,o=t.padding,a=t.transform,c=t.children;return r.createElement("svg",{className:w.a.mainSvg,width:e,height:n,viewBox:"-"+Number(o)+" -"+Number(o)+" "+e+" "+n},r.createElement("g",{transform:a},c))};O.defaultProps={padding:0,transform:""};var E=O,x=n("../node_modules/d3/index.js");function P(t){for(var e=t.length-1;e>0;e-=1){var n=Math.floor(Math.random()*(e+1)),r=t[e];t[e]=t[n],t[n]=r}return t}var _,C,S=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function R(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var T=(C=_=function(t){function e(){var n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var o=arguments.length,a=Array(o),c=0;c<o;c++)a[c]=arguments[c];return n=r=R(this,t.call.apply(t,[this].concat(a))),r.handleRefUpdate=function(t){r.rectRef=t},R(r,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){var t=this.props.animDuration,e=Object(x.i)(this.rectRef);if(this.rectRef){var n=Object(x.b)(1e3,this.rectRef.getAttribute("height"));e.transition().duration(Number(t)*Math.random()).attrTween("height",function(){return function(t){return n(t)}})}},e.prototype.render=function(){var t=this.props,e=t.width,n=t.height,o=t.fill,a=t.y;return r.createElement("rect",S({ref:this.handleRefUpdate},{y:a,height:n,width:e,fill:o}))},e}(r.Component),_.defaultProps={animDuration:1e3},C);function A(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var I=function(t){function e(){var n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var o=arguments.length,a=Array(o),c=0;c<o;c++)a[c]=arguments[c];return n=r=A(this,t.call.apply(t,[this].concat(a))),r.updateChartVariables=function(){var t=r.props,e=t.yScale,n=t.data,o=e.range()[0];r.yPositions=n.map(function(t){return o-=e(t.value)})},A(r,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentWillMount=function(){this.updateChartVariables()},e.prototype.componentWillReceiveProps=function(t){var e=t.yScale,n=t.data,r=this.props;r.yScale===e&&r.data===n||this.updateChartVariables()},e.prototype.render=function(){var t=this.yPositions,e=this.props,n=e.width,o=e.yScale,a=e.colorFn,c=e.data,i=e.transform;return r.createElement("g",{transform:i},c.map(function(e,c){return r.createElement(T,{key:e.categoryId,y:t[c],height:o(e.value),width:n,fill:a(c)})}))},e}(r.Component),k=n("./components/StackedChart/styles.scss"),N=n.n(k),L=function(t){var e=t.data,n=t.totals,o=t.transform,a=t.labelColor,c=t.valueColor,i=t.xScale;return r.createElement("g",{className:N.a.xAxis,transform:o},Object.keys(e).map(function(t,e){return r.createElement("g",{key:t,transform:"translate("+(i(e)+i.bandwidth()/2)+", 0)"},r.createElement("line",{stroke:a,y2:"6",x1:"0.5",x2:"0.5"}),r.createElement("text",{fill:a,y:"9",x:"0.5",dy:"0.8em"},t.toUpperCase()),r.createElement("text",{className:N.a.value,fill:c,y:"35",x:"0.5",dy:"0.6em"},Object(h.a)(n[t]).text))}))};L.defaultProps={labelColor:"#000",valueColor:"#999",transform:""};var V,M,D=L,K=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function F(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var U=P([].concat(x.h.slice(0,2),x.h.slice(3))),W=["#2ca02c"],G=(M=V=function(t){function e(){var n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var o=arguments.length,a=Array(o),c=0;c<o;c++)a[c]=arguments[c];return n=r=F(this,t.call.apply(t,[this].concat(a))),r.updateChartVariables=function(){var t=r.props,e=t.width,n=t.height,o=t.data,a=t.totals,c=r,i=c.color,s=c.barPadding,u=c.chartPadding,l=c.bottomPadding;r.dataKeys=Object.keys(o),r.xScale=Object(x.e)().rangeRound([0,Number(e)-2*u]).paddingInner(s),r.xScale.domain([0,r.dataKeys.length-1]),r.yScale=Object(x.f)().rangeRound([Number(n)-2*u-l,0]),r.yScale.domain([Object(x.c)([a.inflow,a.outflow]),0]),r.colorFn=r.dataKeys.reduce(function(t,e){return t[e]=i[e].domain([0,o[e].length]),t},{}),r.boxLength=e+2*u,r.boxHeight=n+2*u},r.barPadding=.15,r.bottomPadding=40,r.chartPadding=10,r.color={inflow:Object(x.g)(W),outflow:Object(x.g)(U)},F(r,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentWillMount=function(){this.updateChartVariables()},e.prototype.componentWillReceiveProps=function(t){this.props.data!==t.data&&this.updateChartVariables()},e.prototype.render=function(){var t=this.xScale,e=this.yScale,n=this.colorFn,o=this.dataKeys,a=this.boxLength,c=this.boxHeight,i=this.chartPadding,s=this.props,u=s.data,l=s.totals,f=s.dataKey,p=s.dataLabel,d=s.dataValue;return r.createElement("div",{className:N.a.stackedChart},r.createElement(E,{width:a,height:c,padding:i,transform:"translate("+i+","+i+")"},o.map(function(o,a){return r.createElement(I,{key:o,data:u[o],yScale:e,colorFn:n[o],width:t.bandwidth(),transform:"translate("+t(a)+", 0)"})}),r.createElement(D,{transform:"translate(0, "+(e.range()[0]+i/3)+")",data:u,totals:l,xScale:t})),r.createElement(v,K({color:n.outflow,reverse:!0,data:u.outflow},{dataValue:d,dataLabel:p,dataKey:f})))},e}(r.Component),V.defaultProps={width:300,height:500,dataValue:"value"},M);var H,J,B=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.render=function(){var t=this.props,e=t.data,n=t.totals;return r.createElement(G,{data:e,totals:n,dataLabel:"category",dataKey:"categoryId"})},e}(r.Component),q=Object(l.b)(function(t){return{data:{inflow:Object(f.i)(Object(f.e)(t)),outflow:Object(f.i)(Object(f.g)(t))},totals:{inflow:Object(f.d)(t),outflow:Math.abs(Object(f.f)(t))}}})(B);function X(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var Z,z,Q=(J=H=function(t){function e(){var n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var o=arguments.length,a=Array(o),c=0;c<o;c++)a[c]=arguments[c];return n=r=X(this,t.call.apply(t,[this].concat(a))),r.handleRefUpdate=function(t){r.pathRef=t},X(r,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){var t=this.props,e=t.data,n=t.arcFn,r=t.animDuration;if(this.pathRef){var o=Object(x.i)(this.pathRef),a=Object(x.b)({startAngle:0,endAngle:0},{startAngle:e.startAngle,endAngle:e.endAngle});o.transition().duration(r).attrTween("d",function(){return function(t){return n(a(t))}})}},e.prototype.render=function(){var t=this.props,e=t.data,n=t.arcFn,o=t.fill;return r.createElement("path",{ref:this.handleRefUpdate,fill:o,d:n(e)})},e}(r.Component),H.defaultProps={animDuration:1e3},J),Y=n("./components/DonutChart/styles.scss"),$=n.n(Y),tt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function et(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var nt=P(x.h),rt=(z=Z=function(t){function e(){var n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var o=arguments.length,a=Array(o),c=0;c<o;c++)a[c]=arguments[c];return n=r=et(this,t.call.apply(t,[this].concat(a))),r.getPathArc=function(){var t=r.props,e=t.height,n=t.innerRatio;return Object(x.a)().innerRadius(Number(e)/Number(n)).outerRadius(Number(e)/2)},r.chartPadding=8,r.updateChartVariables=function(){var t=r.props,e=t.data,n=t.dataValue,o=t.color,a=t.height;r.chart=Object(x.d)().value(function(t){return t[n]}).sort(null),r.outerRadius=Number(a)/2,r.pathArc=r.getPathArc(),r.colorFn=o&&o.domain&&o.domain([0,e.length]),r.boxLength=a+2*r.chartPadding},et(r,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentWillMount=function(){this.updateChartVariables()},e.prototype.componentWillReceiveProps=function(t){var e=t.data,n=t.color,r=t.height,o=this.props;o.data===e&&o.color===n&&o.height===r||this.updateChartVariables()},e.prototype.render=function(){var t=this.props,e=t.data,n=t.dataLabel,o=t.dataValue,a=t.dataKey,c=this.outerRadius,i=this.pathArc,s=this.colorFn,u=this.boxLength,l=this.chartPadding;return r.createElement("div",{className:$.a.donutChart},r.createElement(E,{width:u,height:u,padding:l,transform:"translate("+c+","+c+")"},this.chart(e).map(function(t,e){return r.createElement(Q,{data:t,index:e,fill:s(e),arcFn:i,key:t.data[a]})})),r.createElement(v,tt({color:s},{data:e,dataValue:o,dataLabel:n,dataKey:a})))},e}(r.Component),Z.defaultProps={color:Object(x.g)(nt),height:300,innerRatio:4,dataValue:"value"},z);var ot=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.render=function(){var t=this.props.data;return r.createElement(rt,{data:t,dataLabel:"category",dataKey:"categoryId"})},e}(r.Component),at=Object(l.b)(function(t){return{data:Object(f.i)(Object(f.g)(t))}})(ot),ct=n("./components/NavLink/index.js"),it=n("./components/ReportsPanel/style.scss"),st=n.n(it),ut=function(){return r.createElement("div",{className:st.a.tabbar},r.createElement(ct.a,{to:"/reports/inflow-outflow",label:"Inflow vs Outflow",styles:st.a}),r.createElement(ct.a,{to:"/reports/spending",label:"Spending by Category",styles:st.a}))};Object(u.b)({transactions:i.b,categories:s.a});e.default=function(){return r.createElement("section",null,r.createElement(ut,null),r.createElement(o.a,null,r.createElement(a.a,{path:"/reports/inflow-outflow",component:q}),r.createElement(a.a,{path:"/reports/spending",component:at}),r.createElement(c.a,{to:"/reports/inflow-outflow"})))}},"./components/ReportsPanel/style.scss":function(t,e,n){t.exports={tabbar:"_1j5Zi",navLink:"PoLct",selected:"_1PrfX"}},"./components/StackedChart/styles.scss":function(t,e,n){t.exports={stackedChart:"_1GO1S",xAxis:"_37bdl",value:"_1UVu9"}},"./modules/categories.js":function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n("./modules/defaults.js");function o(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.a}},"./modules/defaults.js":function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"c",function(){return o}),n.d(e,"b",function(){return a});var r={1:"Groceries",2:"School",3:"Entertainment",4:"Utensils",5:"Kids",6:"Travel",7:"Commute",8:"Insurance",9:"Clothing",10:"Car",11:"Taxes",12:"Health",13:"Home",14:"Beauty",15:"Income",16:"Misc",17:"Gifting"},o=["15"],a=[{id:1,description:"Trader Joe's food",value:-423.34,categoryId:"1"},{id:2,description:"Gas",value:-764.73,categoryId:"6"},{id:3,description:"Ebay sale - guitar",value:1102,categoryId:"15"},{id:4,description:"Milk & Eggs for the pancake party with neighbors",value:-2300,categoryId:"3"},{id:5,description:"The usual weekly run",value:-1100,categoryId:"16"},{id:6,description:"Paycheck",value:5700,categoryId:"15"}]},"./modules/transactions.js":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s});var r=n("./modules/defaults.js"),o="budget/transaction/ADD",a="budget/transaction/DELETE";function c(t,e){var n=e.categoryId,o=e.description,a=e.value,c=r.c.includes(n)?Math.abs(a):-1*Math.abs(a);return{id:function(t){return t.reduce(function(t,e){return Math.max(e.id,t)},-1)+1}(t),categoryId:n,description:o,value:c}}var i={addTransaction:function(t){return function(e,n){return e({type:o,transaction:c(n().transactions,t)})}},deleteTransaction:function(t){return{type:a,id:t}}};function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.b,e=arguments[1];switch(e.type){case o:return[].concat(t,[e.transaction]);case a:return t.filter(function(t){return t.id!==e.id});default:return t}}},"./selectors/categories.js":function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o});var r=function(t){return t.categories||{}},o=function(){return"16"}},"./selectors/transactions.js":function(t,e,n){"use strict";n.d(e,"i",function(){return s}),n.d(e,"h",function(){return l}),n.d(e,"d",function(){return h}),n.d(e,"f",function(){return b}),n.d(e,"a",function(){return y}),n.d(e,"b",function(){return m}),n.d(e,"c",function(){return g}),n.d(e,"g",function(){return w}),n.d(e,"e",function(){return O});var r=n("../node_modules/reselect/lib/index.js"),o=n("./utils/formatAmount.js"),a=n("./selectors/categories.js");function c(t){return t.reduce(function(t,e){return t+parseFloat(e.value)},0)}function i(t){return t.reduce(function(t,e){var n=e.categoryId,r=e.value;return(t.find(function(t){return t.categoryId===n})||t[t.push({categoryId:n,value:0})-1]).value+=Math.abs(r),t},[])}var s=function(t){return[].concat(t).sort(function(t,e){return e.value-t.value})},u=function(t,e){return t.map(function(t){return t.category=e[t.categoryId],t})},l=function(t){return t.transactions||[]},f=Object(r.createSelector)([l],function(t){return t.filter(function(t){return t.value>0})}),p=Object(r.createSelector)([l],function(t){return t.filter(function(t){return t.value<0})}),d=Object(r.createSelector)([l],function(t){return c(t)}),h=Object(r.createSelector)([f],function(t){return c(t)}),b=Object(r.createSelector)([p],function(t){return c(t)}),y=Object(r.createSelector)([d],function(t){return Object(o.a)(t,!1)}),m=Object(r.createSelector)([h],function(t){return Object(o.a)(t,!1)}),g=Object(r.createSelector)([b],function(t){return Object(o.a)(t,!1)}),v=Object(r.createSelector)([p],function(t){return i(t)}),j=Object(r.createSelector)([f],function(t){return i(t)}),w=Object(r.createSelector)(v,a.a,function(t,e){return u(t,e)}),O=Object(r.createSelector)(j,a.a,function(t,e){return u(t,e)})},"./utils/formatAmount.js":function(t,e,n){"use strict";function r(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=t<0,r=Math.abs(t).toLocaleString("en-us",{style:"currency",currency:"USD"});return{text:(n&&e?"-":"")+r,isNegative:n}}n.d(e,"a",function(){return r})}}]);