(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){},20:function(e,t,a){e.exports=a(35)},29:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(19),i=a.n(l),c=(a(29),a(6)),o=a(7),s=a(9),u=a(5),m=a(8),d=a(0),b=function(){return r.a.createElement("h1",null,"Rentals")},f=function(){return r.a.createElement("h1",null,"Customers")},h=a(10),v=a.n(h),p=a(4),g=a(15),y=a(16),E=function(e){var t=e.name,a=e.label,n=e.error,l=Object(y.a)(e,["name","label","error"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",Object.assign({},l,{id:t,name:t,className:"form-control"})),n&&r.a.createElement("div",{className:"alert alert-danger"},n))},S=function(e){var t=e.name,a=e.label,n=e.options,l=e.error,i=Object(y.a)(e,["name","label","options","error"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("select",Object.assign({name:t,id:t},i,{className:"form-control"}),r.a.createElement("option",{value:"Select Options"}),n.map(function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.name)})),l&&r.a.createElement("div",{className:"alert alert-danger"},l))};function _(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return O(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return O(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,i=!0,c=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return i=e.done,e},e:function(e){c=!0,l=e},f:function(){try{i||null==a.return||a.return()}finally{if(c)throw l}}}}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={data:{},errors:{}},a.validate=function(){var e=v.a.validate(a.state.data,a.schema,{abortEarly:!1}).error;if(!e)return null;var t,n={},r=_(e.details);try{for(r.s();!(t=r.n()).done;){var l=t.value;n[l.path[0]]=l.message}}catch(i){r.e(i)}finally{r.f()}return n},a.handleSubmit=function(e){e.preventDefault();var t=a.validate();a.setState({errors:t||{}}),t||a.doSubmit()},a.handleChange=function(e){var t=Object(g.a)({},a.state.errors),n=a.validateProperty(e.currentTarget);n?t[e.currentTarget.name]=n:delete t[e.currentTarget.name];var r=Object(g.a)({},a.state.data);r[e.currentTarget.name]=e.currentTarget.value,a.setState({data:r,errors:t})},a.validateProperty=function(e){var t=e.name,n=e.value,r=Object(p.a)({},t,n),l=Object(p.a)({},t,a.schema[t]),i=v.a.validate(r,l).error;return i?i.details[0].message:null},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"renderButton",value:function(e){return r.a.createElement("button",{disabled:this.validate(),className:"btn btn-primary",style:{margin:20}},e)}},{key:"renderInput",value:function(e,t,a){var n=this.state,l=n.data,i=n.errors;return r.a.createElement(E,{type:a,name:e,value:l[e],label:t,onChange:this.handleChange,error:i[e]})}},{key:"renderSelect",value:function(e,t,a){var n=this.state,l=n.data,i=n.errors;return r.a.createElement(S,{name:e,value:l[e],label:t,options:a,onChange:this.handleChange,error:i[e]})}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={data:{username:"",password:""},errors:{}},a.schema={username:v.a.string().required().label("Username"),password:v.a.string().required().label("Password")},a.doSubmit=function(){console.log("submitted")},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state;e.data,e.errors;return r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("username","Username","text"),this.renderInput("password","Password","password"),this.renderButton("Login")))}}]),t}(j),C=a(12),R=(a(18),[{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"}]);function N(){return R.filter(function(e){return e})}var I=[{_id:"5b21ca3eeb7f6fbccd471815",title:"Terminator",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:6,dailyRentalRate:2.5,publishDate:"2018-01-03T19:04:28.809Z"},{_id:"5b21ca3eeb7f6fbccd471816",title:"Die Hard",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:5,dailyRentalRate:2.5},{_id:"5b21ca3eeb7f6fbccd471817",title:"Get Out",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:8,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471819",title:"Trip to Italy",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181a",title:"Airplane",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181b",title:"Wedding Crashers",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181e",title:"Gone Girl",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:7,dailyRentalRate:4.5},{_id:"5b21ca3eeb7f6fbccd47181f",title:"The Sixth Sense",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:4,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471821",title:"The Avengers",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:7,dailyRentalRate:3.5}];var w=function(e){var t=e.items,a=e.name,n=e.value,l=e.selectedValue;return r.a.createElement("div",null,t.map(function(t){return r.a.createElement("li",{key:t[n],onClick:function(){return e.onItemSelect(t)},className:l===t?"list-group-item active":"list-group-item "},t[a])}))};w.defaultProps={name:"name",value:"_id"};var M=w,T=a(13),L=a.n(T),A=function(e){var t=e.itemsCount,a=e.currentPage,n=e.onPageChange,l=e.pageSize,i=Math.ceil(t/l);if(1===i)return null;var c=L.a.range(1,i+1);return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination"},c.map(function(e){return r.a.createElement("li",{key:e,className:e===a?"page-item active":"page-item"},r.a.createElement("a",{className:"page-link",onClick:function(){return n(e)}},e))})))};var P=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).RaiseSort=function(e){var t=Object(g.a)({},a.props.sortColumn);t.path===e?t.order="asc"===t.order?"desc":"asc":(t.path=e,t.order="asc"),a.props.onSort(t)},a.renderSortIcon=function(e){return e.path!==a.props.sortColumn.path?null:"asc"===a.props.sortColumn.order?r.a.createElement("i",{className:"fa fa-sort-asc"}):r.a.createElement("i",{className:"fa fa-sort-desc"})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("thead",null,r.a.createElement("tr",null,this.props.columns.map(function(t){return r.a.createElement("th",{className:"clickable",key:t.path||t.key,onClick:function(){return e.RaiseSort(t.path)}},t.label,e.renderSortIcon(t))})))}}]),t}(n.Component),D=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).renderCell=function(e,t){return t.content?t.content(e):L.a.get(e,t.path)},a.createKey=function(e,t){return e._id+(t.path||t.key)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.data,n=t.column;return r.a.createElement("tbody",null,a.map(function(t){return r.a.createElement("tr",{key:t._id},n.map(function(a){return r.a.createElement("td",{key:e.createKey(t,a)},e.renderCell(t,a))}))}))}}]),t}(n.Component),G=a(11),x=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).columns=[{path:"title",label:"Title",content:function(e){return r.a.createElement(G.b,{to:"/movies/".concat(e._id)},e.title)}},{path:"genre.name",label:"Genre"},{path:"numberInStock",label:"Stock"},{path:"dailyRentalRate",label:"Rate"},{key:"delete",content:function(e){return r.a.createElement("button",{onClick:function(){return a.props.onDelete(e)},className:"btn btn-danger btn-sm"},"Delete")}}],a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.movie,a=(e.onDelete,e.sortColumn),n=e.onSort;return r.a.createElement("table",{className:"table"},r.a.createElement(P,{columns:this.columns,sortColumn:a,onSort:n}),r.a.createElement(D,{data:t,column:this.columns}))}}]),t}(n.Component),q=function(e){var t=e.value,a=e.onChange;return r.a.createElement("input",{type:"text",name:"query",className:"form-control my-3",placeholder:"Search...",value:t,onChange:function(e){return a(e.currentTarget.value)}})},F=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[],pageSize:4,currentPage:1,searchQuery:"",selectedGenre:null,genres:[],sortColumn:{path:"title",order:"asc"}},a.handleGenreSelect=function(e){a.setState({selectedGenre:e,searchQuery:"",currentPage:1})},a.handleDelete=function(e){var t=a.state.movies.filter(function(t){return t._id!==e._id});a.setState({movies:t})},a.handlePageChange=function(e){a.setState({currentPage:e})},a.handleSorting=function(e){a.setState({sortColumn:e})},a.handleSearch=function(e){a.setState({searchQuery:e,selectedGenre:null,currentPage:1})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=[{_id:"",name:"All Genre"}].concat(Object(C.a)(N()));this.setState({movies:I,genres:e})}},{key:"render",value:function(){var e=this.state.movies.length,t=this.state,a=t.pageSize,n=t.selectedGenre,l=t.searchQuery,i=t.currentPage,c=t.movies,o=t.sortColumn;if(0===e)return r.a.createElement("p",{className:"hding"},"There are no movies in Database");var s=c;l?s=c.filter(function(e){return e.title.toLowerCase().startWith(l.toLowerCase())}):n&&n._id&&(s=c.filter(function(e){return e.genre._id===n._id}));var u=function(e,t,a){var n=(t-1)*a;return L()(e).slice(n).take(a).value()}(L.a.orderBy(s,[o.path],[o.order]),i,a);return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2"},r.a.createElement("div",{className:"margin_design"},r.a.createElement(M,{items:this.state.genres,onItemSelect:this.handleGenreSelect,selectedValue:n}))),r.a.createElement("div",{className:"col"},r.a.createElement(G.b,{to:"/movies/new",className:"btn btn-primary",style:{marginBottom:20}},"New Movie"),r.a.createElement("div",{className:"container"},r.a.createElement("h3",{className:"hding"},"Showing ",s.length," Movies in the database ."),r.a.createElement(x,{movie:u,onDelete:this.handleDelete,onSort:this.handleSorting,sortColumn:o}),r.a.createElement(q,{value:l,onChange:this.handleSearch}),r.a.createElement(A,{itemsCount:s.length,pageSize:this.state.pageSize,currentPage:i,onPageChange:this.handlePageChange}))))}}]),t}(n.Component),B=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(G.b,{className:"navbar-brand",to:"/Movies_List/"},"Vidly"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(G.c,{className:"nav-item nav-link",to:"/Movies_List/movies"},"Movies"),r.a.createElement(G.c,{className:"nav-item nav-link",to:"/Movies_List/customers"},"Customers"),r.a.createElement(G.c,{className:"nav-item nav-link",to:"/Movies_List/rentals"},"Rentals"),r.a.createElement(G.c,{className:"nav-item nav-link",to:"/Movies_List/login"},"Login"),r.a.createElement(G.c,{className:"nav-item nav-link",to:"/Movies_List/register"},"Register"))))};var z,U=(z=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={data:{title:"",genreId:"",numberInStock:"",dailyRentalRate:""},genres:[],errors:{}},a.schema={_id:v.a.string(),title:v.a.string().required().label("Title"),genre:v.a.string().required().label("Genre"),numberInStock:v.a.number().required().min(0).max(100).label("Number In Stock"),dailyRentalRate:v.a.number().required().min(0).max(100).label("Rate")},a.doSubmit=function(){!function(e){var t=I.find(function(t){return t._id===e._id})||{};t.title=e.title,t.genre=R.find(function(t){return t._id===e.genreId}),t.numberInStock=e.numberInStock,t.dailyRentalRate=e.dailyRentalRate,t._id||(t._id=Date.now().toString(),I.push(t))}(a.state.data),a.props.history.push("/movies")},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=N();this.setState({genres:e});var t=this.props.params.id;if("new"!==t){var a,n=(a=t,I.find(function(e){return e._id===a}));if(!n)return r.a.createElement(d.a,{to:"/not-found"});this.setState({data:this.mapToViewModel(n)})}}},{key:"mapToViewModel",value:function(e){return{_id:e._id,title:e.title,genreId:e.genre._id,numberInStock:e.numberInStock,dailyRentalRate:e.dailyRentalRate}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null," Movie Form"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("title","Title"),this.renderSelect("genreId","Genre",this.state.genres),this.renderInput("numberInStock","Number In Stock"),this.renderInput("dailyRentalRate","Rate"),this.renderButton("Save")))}}]),t}(j),function(e){return r.a.createElement(z,Object.assign({},e,{params:Object(d.o)()}))}),V=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={data:{username:"",password:""},errors:{}},a.schema={username:v.a.string().required().email().label("Username"),password:v.a.string().required().min(5).label("Password"),name:v.a.string().required().label("Name")},a.doSubmit=function(){console.log("submitted")},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Register"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("username","Username","text"),this.renderInput("password","Password","password"),this.renderInput("name","Name","text"),this.renderButton("REGISTER")))}}]),t}(j),Q=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null),r.a.createElement("main",{className:"container"},r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/Movies_List/login",element:r.a.createElement(k,null)}),r.a.createElement(d.b,{path:"/Movies_List/movies/:id",element:r.a.createElement(U,null)}),r.a.createElement(d.b,{path:"/Movies_List/movies",element:r.a.createElement(F,null)}),r.a.createElement(d.b,{path:"/Movies_List/customers",element:r.a.createElement(f,null)}),r.a.createElement(d.b,{path:"/Movies_List/rentals",element:r.a.createElement(b,null)}),r.a.createElement(d.b,{path:"/Movies_List/not-found",element:r.a.createElement("notFound",null)}),r.a.createElement(d.b,{path:"/Movies_List/register",element:r.a.createElement(V,null)}),r.a.createElement(d.b,{path:"/Movies_List/movies/new",element:r.a.createElement(U,null)}),r.a.createElement(d.b,{path:"/Movies_List/",element:r.a.createElement(d.a,{to:"/Movies_List/movies"})}),r.a.createElement(d.b,{path:"/Movies_List/*",element:r.a.createElement(d.a,{to:"/Movies_List/not-found"})}))))}}]),t}(n.Component),J=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,36)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),l(e),i(e)})};a(33);i.a.createRoot(document.getElementById("root")).render(r.a.createElement(G.a,null,r.a.createElement(Q,null))),J()}},[[20,3,2]]]);
//# sourceMappingURL=main.d55e9d9d.chunk.js.map