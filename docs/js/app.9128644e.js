(function(t){function e(e){for(var o,r,a=e[0],c=e[1],l=e[2],d=0,p=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],o=!0,a=1;a<s.length;a++){var c=s[a];0!==i[c]&&(o=!1)}o&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var o={},i={app:0},n=[];function r(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=o,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(s,o,function(e){return t[e]}.bind(null,o));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/hack2020-David-Andrea-Collin/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var o=s("85ec"),i=s.n(o);i.a},"0f54":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAAgMAAACJFjxpAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAABvKAAAbygEeqZAXAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAAlQTFRF////AAAAAAAAflGpXQAAAAJ0Uk5TAICbK04YAAAEbElEQVR42u3aya0jMQyEYerCIBTNi+dFoyB40UQ5F8Pw0osWkgXM1B9BHT64uyWLMMYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhj7L/v9w+0LhU7wESxA5oU7IAfMIIugkVgIlgETQSL4Af8S9BFsAhMBIugiWAR/IAfB/3xPKpYAkAE7TGggAnAEPTnS0nFEoAhaM8BBUwAhKC/vJlWLAEQgvYyoIAJQBD0t8+TiiUAQdDeBhQwAQCC/vGNWrEEAAjax4ACJpCOoH8dVFQsgXQE7WtAARNIRtAPTqsqlkAygnYwoIAJpCLoh0eWFUsgFUE7HFDABBIR9JNz64olkIignQwoYAJpCPrp5UXFEkhD0E4HFDCBJAT94garYgkkIWgXAwqYQAqCfnmNWbEEUhC0ywEFTCABQb+5y65YAgkI2s2AAiYQjqDf/qGhYgmEI2i3AwqYQDCCewLBCGxggGIJBCMYIBCKYIRAKAIbGqBYAqEIhggEIhgjEIjABgcolkAggkECYQhGCYQhsOEBiiUQhmCYQBCCcQJBCGxigGIJBCGYIBCCYIZACAKbGqBYAiEIpggEIJgjEIDAJgcolkAAgkkC7ghmCbgjsOkBiiXgjmCagDOCeQLOCGxhgGIJOCNYIOCKYIWAKwJbGqBYAq4Ilgg4Ilgj4IjAFgcoloAjgkUCbghWCbghsOUBiiXghmCZgBOCdQJOCGxjgGIJOCHYIOCCYIeACwLbGqBYAi4Itgg4INgj4IDANgcoloADgk0C2wh2CWwjsO0BiiWwjWCbwCaCfQKbCMxhgGIJbCJwILCFwIPAFgJzGaBYAlsIXAhsIPAhsIHAnAYolsAGAicCywi8CCwjMLcBiiWwjMCNwCICPwKLCMxxgGIJLCJwJLCEwJPAEgJzHaBYAksIXAksIPAlsIDAnAcolsACAmcC0wi8CUwjMPcBiiUwjcCdwCQCfwKTCCxggGIJTCIIIDCFIILAFAILGaBYAlMIQghMIIghMIHAggYolsAEgiACwwiiCAwjsLABiiUwjCCMwCCCOAKDCCxwgGIJDCIIJDCEIJLAEAILHaBYAkMIQgkMIIglMIDAggcolsAAgmACtwiiCdwisPABiiVwiyCcwA2CeAI3CCxhgGIJ3CBIIHCJIIPAJQJLGaBYApcIUghcIMghcIHAkgYolsAFgiQCpwiyCJwisLQBiiVwiiCNwAmCPAInCCxxgGIJnCBIJHCIIJPAIQJLHaBYAocIUgkcIMglcIDAkgcolsABgmQCXwiyCXwhsPQBiiXwhSCdwAeCfAIfCAwwQLEEPhAACLwhQBB4Q2CQAYol8IYAQuAFAYbACwIDDVAsgRcEIAJPBCgCTwQGG6BYAk8EMAIPBDgCDwQGHKBYAg8EQAIiv1gCIhVLQESxBEQKmIDIL5aASDXwAG3gAQVMgDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY/9AfwFl5IJ3vCCsmQAAAABJRU5ErkJggg=="},"1f88":function(t,e,s){t.exports=s.p+"img/logo.d737b575.jpg"},3540:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var o=s("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"nav"}},[t._m(0),o("div",{attrs:{id:"nav-links-and-profile"}},[o("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:function(e){return t.toHome()}}},[t._v("Home")]),o("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:function(e){return t.toExplore()}}},[t._v("Explore")]),o("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:function(e){return t.toCreate()}}},[t._v("Create")]),o("p",[t._v("Welcome "+t._s(t.loggedUser))]),o("img",{attrs:{src:s("0f54"),alt:"drop down arrow"},on:{click:function(e){return t.showUsers()}}})]),t.showDropDown?o("div",{attrs:{id:"user-menu"}},[o("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:function(e){return t.switchUsers("5f387cc2cd4be563940f57de")}}},[t._v("Andrea")]),o("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:function(e){return t.switchUsers("5f391d85cda06e001f39cca6")}}},[t._v("David")])]):t._e()]),o("router-view")],1)},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"logo-area"}},[o("p",{attrs:{id:"logo-title"}},[t._v("FitFriends")]),o("img",{attrs:{src:s("1f88"),alt:"logo"}})])}],r={data:function(){return{showDropDown:!1,loggedUser:null,userMap:{"5f387cc2cd4be563940f57de":"Andrea","5f391d85cda06e001f39cca6":"David"}}},mounted:function(){this.loggedUser=this.userMap[localStorage.getItem("userId")]},methods:{toHome:function(){this.$router.push("/")},toCreate:function(){this.$router.push("/create")},toExplore:function(){this.$router.push("/explore")},showUsers:function(){this.showDropDown=!this.showDropDown},switchUsers:function(t){localStorage.setItem("userId",t),this.showDropDown=!1,window.location.reload()}}},a=r,c=(s("034f"),s("2877")),l=Object(c["a"])(a,i,n,!1,null,null,null),u=l.exports,d=s("8c4f"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home-page"},[s("div",{attrs:{id:"savedWorkouts"}},[s("h2",{staticClass:"savedWorkoutsTitle"},[t._v("Saved Workouts")]),s("div",{staticClass:"typeOptions"},[s("button",{staticClass:"btn btn-outline-dark",class:{active:t.clearAll},attrs:{id:"all"},on:{click:function(e){return t.updateSelectedTypes("clear")}}},[t._v("Clear")]),t._l(t.workoutTypes,(function(e){return s("div",{key:e},[s("button",{staticClass:"btn btn-outline-dark",class:{active:t.selectedTypes.includes(e)},attrs:{id:e},on:{click:function(s){return t.updateSelectedTypes(e)}}},[t._v(t._s(e))])])}))],2),s("div",{staticClass:"timeOptions"},t._l(t.workoutTimes,(function(e){return s("div",{key:e},[s("button",{staticClass:"btn btn-outline-dark",class:{active:t.selectedTime==e},attrs:{id:e},on:{click:function(s){return t.updateSelectedTime(e)}}},[t._v(t._s(e))])])})),0),s("br"),s("p",{staticClass:"workouts-header"},[t._v(" Workouts ")]),s("div",{staticClass:"main-flex"},[s("div",{staticClass:"workout-card-container"},t._l(t.displayedWorkouts,(function(e){return s("div",{key:e.title,staticClass:"workout-card",on:{click:function(s){return t.switchSelectedWorkout(e)}}},[s("div",{staticClass:"workout-card-header"},[s("p",{staticClass:"workout-card-title"},[t._v(t._s(e.title))]),s("div",{staticClass:"tag-flex"},t._l(e.tags,(function(e){return s("p",{key:e,staticClass:"tag-bubble",attrs:{id:"static-"+e}},[t._v(" "+t._s(e)+" ")])})),0)])])})),0),null!=t.selectedWorkout?s("div",{staticClass:"detail-container"},[s("div",{staticClass:"detail-header-flex"},[s("p",{staticClass:"detail-title"},[t._v(t._s(t.selectedWorkout.title))]),s("p",{staticClass:"duration"},[t._v(t._s(t.selectedWorkout.duration)+" Minutes")])]),s("div",{staticClass:"detail-tag-flex"},t._l(t.selectedWorkout.tags,(function(e){return s("p",{key:e,staticClass:"tag-bubble",attrs:{id:"static-"+e}},[t._v(" "+t._s(e)+" ")])})),0),s("div",{staticClass:"detail-description-container"},[t._v(" "+t._s(t.selectedWorkout.description)+" ")]),s("div",{staticClass:"save-unsave"},[s("br"),s("button",{staticClass:"btn btn-outline-dark",attrs:{id:"unsave"},on:{click:function(e){return t.unsave()}}},[t._v("-")])])]):s("div",{staticClass:"detail-container"})])])])},h=[],f=(s("4160"),s("caad"),s("a434"),s("d3b7"),s("2532"),s("3ca3"),s("159b"),s("ddb0"),s("2b3d"),{name:"Home",mounted:function(){this.getAllWorkouts()},data:function(){return{workoutTypes:["full-body","calisthenics","core","hiit","strength","upper-body","lower-body","arms","legs","cardio"],workoutTimes:[5,10,15,20,25,30,45,60,120],allWorkouts:[],displayedWorkouts:[],selectedTypes:[],selectedTime:null,clearAll:!0,selectedWorkout:null}},methods:{unsave:function(){fetch("https://hack-2020-backend.uc.r.appspot.com/workouts/"+this.selectedWorkout._id+"/unsave?"+new URLSearchParams({userId:localStorage.getItem("userId")}),{method:"DELETE"}).then((function(t){return t.json()})).then((function(t){console.log(t),window.location.reload()})).catch((function(t){console.log(t)}))},switchSelectedWorkout:function(t){this.selectedWorkout=t},toExplore:function(){this.$router.push("/explore")},getAllWorkouts:function(){var t=this;console.log("localstorage",localStorage.getItem("userId")),fetch("https://hack-2020-backend.uc.r.appspot.com/users/"+localStorage.getItem("userId"),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(e){console.log(e),t.allWorkouts=e.user.saved_posts,t.displayedWorkouts=e.user.saved_posts})).catch((function(t){console.log(t)}))},updateSelectedTime:function(t){this.selectedTime==t?this.selectedTime=null:(this.selectedTime=t,this.clearAll=!1),this.updateDisplayed()},updateSelectedTypes:function(t){if("clear"==t)return console.log("ALL IS PRESSED"),this.selectedTypes=[],this.selectedTime=null,this.clearAll=!0,void(this.displayedWorkouts=this.allWorkouts);this.clearAll=!1,console.log("typeee",t),this.selectedTypes.includes(t)?this.remove(this.selectedTypes,t):this.selectedTypes.push(t),this.updateDisplayed()},updateDisplayed:function(){null==this.selectedTime&&0==this.selectedTypes&&(this.clearAll=!0),this.displayedWorkouts=[];var t=this;this.clearAll&&(this.selectedTypes=[]),console.log("updating display"),this.allWorkouts.forEach((function(e){var s=!0;t.selectedTypes.forEach((function(t){e.tags.includes(t)||(s=!1)})),console.log("that.selectedTime == workout.duration",t.selectedTime==e.duration),!s||t.selectedTime!=e.duration&&null!=t.selectedTime||t.displayedWorkouts.push(e)})),this.displayedWorkouts.includes(this.selectedWorkout)||(this.displayedWorkouts.length>0?this.selectedWorkout=this.displayedWorkouts[0]:this.selectedWorkout=null)},remove:function(t,e){for(var s=0;s<t.length;s++)t[s]==e&&t.splice(s,1)}}}),g=f,A=(s("cccb"),Object(c["a"])(g,p,h,!1,null,null,null)),k=A.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"workouts-page"},[s("h2",{staticClass:"savedWorkoutsTitle"},[t._v("Explore Workouts")]),s("div",{staticClass:"typeOptions"},[s("button",{staticClass:"btn btn-outline-dark",class:{active:t.clearAll},attrs:{id:"all"},on:{click:function(e){return t.updateSelectedTypes("clear")}}},[t._v("Clear")]),t._l(t.workoutTypes,(function(e){return s("div",{key:e},[s("button",{staticClass:"btn btn-outline-dark",class:{active:t.selectedTypes.includes(e)},attrs:{id:e},on:{click:function(s){return t.updateSelectedTypes(e)}}},[t._v(t._s(e))])])}))],2),s("div",{staticClass:"timeOptions"},t._l(t.workoutTimes,(function(e){return s("div",{key:e},[s("button",{staticClass:"btn btn-outline-dark",class:{active:t.selectedTime==e},attrs:{id:e},on:{click:function(s){return t.updateSelectedTime(e)}}},[t._v(t._s(e))])])})),0),s("br"),s("p",{staticClass:"workouts-header"},[t._v(" Workouts ")]),s("div",{staticClass:"main-flex"},[s("div",{staticClass:"workout-card-container"},t._l(t.displayedWorkouts,(function(e){return s("div",{key:e.title,staticClass:"workout-card",on:{click:function(s){return t.switchSelectedWorkout(e)}}},[s("div",{staticClass:"workout-card-header"},[s("p",{staticClass:"workout-card-title"},[t._v(t._s(e.title))]),s("div",{staticClass:"tag-flex"},t._l(e.tags,(function(e){return s("p",{key:e,staticClass:"tag-bubble",attrs:{id:"static-"+e}},[t._v(" "+t._s(e)+" ")])})),0)])])})),0),null!=t.selectedWorkout?s("div",{staticClass:"detail-container"},[s("div",{staticClass:"detail-header-flex"},[s("p",{staticClass:"detail-title"},[t._v(t._s(t.selectedWorkout.title))]),s("p",{staticClass:"duration"},[t._v(t._s(t.selectedWorkout.duration)+" Minutes")])]),s("div",{staticClass:"detail-tag-flex"},t._l(t.selectedWorkout.tags,(function(e){return s("p",{key:e,staticClass:"tag-bubble",attrs:{id:"static-"+e}},[t._v(" "+t._s(e)+" ")])})),0),s("div",{staticClass:"detail-description-container"},[t._v(" "+t._s(t.selectedWorkout.description)+" ")]),s("div",{staticClass:"save-unsave"},[s("br"),s("button",{staticClass:"btn btn-outline-dark",attrs:{id:"unsave"},on:{click:function(e){return t.save()}}},[t._v("+")])])]):s("div",{staticClass:"detail-container"})])])},v=[],m=(s("96cf"),s("1da1")),w={name:"Explore",data:function(){return{workoutTypes:["full-body","calisthenics","core","hiit","strength","upper-body","lower-body","arms","legs","cardio"],workoutTimes:[5,10,15,20,25,30,45,60,120],allWorkouts:[],displayedWorkouts:[],selectedTypes:[],selectedTime:null,clearAll:!0,selectedWorkout:null}},mounted:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=[],console.log("localstorage",localStorage.getItem("userId")),e.next=4,fetch("https://hack-2020-backend.uc.r.appspot.com/users/"+localStorage.getItem("userId"),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){for(var e=t.user.saved_posts,o=0;o<e.length;o++)s.push(e[o]._id)})).catch((function(t){console.log(t)}));case 4:console.log(s),fetch("https://hack-2020-backend.uc.r.appspot.com/workouts",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(e){for(var o=0;o<e.workouts.length;o++)s.includes(e.workouts[o]._id)||(console.log("id",e.workouts[o]._id),t.allWorkouts.push(e.workouts[o]),t.displayedWorkouts.push(e.workouts[o]))})).catch((function(t){console.log(t)}));case 6:case"end":return e.stop()}}),e)})))()},methods:{save:function(){fetch("https://hack-2020-backend.uc.r.appspot.com/workouts/"+this.selectedWorkout._id+"/save?"+new URLSearchParams({userId:localStorage.getItem("userId")}),{method:"POST"}).then((function(t){return t.json()})).then((function(t){console.log(t),window.location.reload()})).catch((function(t){console.log(t)}))},switchSelectedWorkout:function(t){this.selectedWorkout=t},updateSelectedTime:function(t){this.selectedTime==t?this.selectedTime=null:(this.selectedTime=t,this.clearAll=!1),this.updateDisplayed()},updateSelectedTypes:function(t){if("clear"==t)return console.log("ALL IS PRESSED"),this.selectedTypes=[],this.selectedTime=null,this.clearAll=!0,void(this.displayedWorkouts=this.allWorkouts);this.clearAll=!1,console.log("typeee",t),this.selectedTypes.includes(t)?this.remove(this.selectedTypes,t):this.selectedTypes.push(t),this.updateDisplayed()},updateDisplayed:function(){null==this.selectedTime&&0==this.selectedTypes&&(this.clearAll=!0),this.displayedWorkouts=[];var t=this;this.clearAll&&(this.selectedTypes=[]),console.log("updating display"),this.allWorkouts.forEach((function(e){var s=!0;t.selectedTypes.forEach((function(t){e.tags.includes(t)||(s=!1)})),console.log("that.selectedTime == workout.duration",t.selectedTime==e.duration),!s||t.selectedTime!=e.duration&&null!=t.selectedTime||t.displayedWorkouts.push(e)})),this.displayedWorkouts.includes(this.selectedWorkout)||(this.displayedWorkouts.length>0?this.selectedWorkout=this.displayedWorkouts[0]:this.selectedWorkout=null)},remove:function(t,e){for(var s=0;s<t.length;s++)t[s]==e&&t.splice(s,1)},toCreate:function(){this.$router.push("/create")},toHome:function(){this.$router.push("/")}}},b=w,y=(s("f4d9"),Object(c["a"])(b,C,v,!1,null,null,null)),I=y.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"create-page"}},[s("h2",{attrs:{id:"createWorkoutTitle"}},[t._v("Create Workout")]),s("div",{attrs:{id:"create-page-body"}},[s("div",{attrs:{id:"left-create"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{name:"workout_name",placeholder:"workout name"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),s("br"),t._v(" "),s("br"),s("p",[t._v("Workout Type (select all that apply)")]),s("div",{staticClass:"typeOptions"},t._l(t.workoutTypes,(function(e){return s("div",{key:e},[s("button",{staticClass:"btn btn-outline-dark",class:{active:t.selectedTypes.includes(e)},attrs:{id:e},on:{click:function(s){return t.updateSelectedTypes(e)}}},[t._v(t._s(e))])])})),0),s("br"),s("p",[t._v("Total Time")]),s("div",{staticClass:"timeOptions"},t._l(t.workoutTimes,(function(e){return s("div",{key:e},[s("button",{staticClass:"btn btn-secondary",class:{active:t.selectedTime==e},attrs:{id:e},on:{click:function(s){return t.updateSelectedTime(e)}}},[t._v(t._s(e))])])})),0)]),s("div",{attrs:{id:"right-create"}},[s("div",[s("p",[t._v(" Workout Description")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"enter-description",attrs:{rows:"15",cols:"50",placeholder:"Write about your reps, sets, resting time, overall tips"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})])])]),s("button",{staticClass:"btn btn-success",on:{click:function(e){return t.create()}}},[t._v("Create")])])},_=[],W=(s("a4d3"),s("e01a"),s("a9e3"),{name:"Create",data:function(){return{workoutTypes:["full-body","calisthenics","core","hiit","strength","upper-body","lower-body","arms","legs","cardio"],workoutTimes:[5,10,15,20,25,30,45,60,120],selectedTime:0,selectedTypes:[],setNum:1,setName:"",numOfSets:0,repName:"",numOfReps:0,description:null,title:null}},methods:{create:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,JSON.stringify({title:t.title,description:t.description,user:"5f387cc2cd4be563940f57de",duration:Number(t.selectedTime),tags:t.selectedTypes});case 2:s=e.sent,fetch("https://hack-2020-backend.uc.r.appspot.com/workouts",{method:"POST",headers:{"Content-Type":"application/json"},body:s}).then((function(e){console.log(e),alert("workout successfully created!"),t.$router.push("/explore")})).catch((function(t){console.log(t)}));case 4:case"end":return e.stop()}}),e)})))()},updateSelectedTypes:function(t){this.selectedTypes.includes(t)?this.remove(this.selectedTypes,t):this.selectedTypes.push(t)},updateSelectedTime:function(t){this.selectedTime=t},remove:function(t,e){for(var s=0;s<t.length;s++)t[s]==e&&t.splice(s,1)},incrementNumber:function(){this.setNum<=4?this.setNum++:this.setNum=1},addSet:function(){this.applicants.push({previous:"",expiration:""})},deleteSet:function(t){this.applicants.splice(t,1)}}}),E=W,x=(s("fa65"),Object(c["a"])(E,T,_,!1,null,"5b2ba4f4",null)),B=x.exports;o["a"].use(d["a"]);var Y=[{path:"/",name:"Home",component:k},{path:"/explore",name:"Explore",component:I},{path:"/create",name:"Create",component:B}],j=new d["a"]({routes:Y}),S=j;s("4989"),s("f9e3");o["a"].config.productionTip=!1,new o["a"]({router:S,render:function(t){return t(u)}}).$mount("#app")},"5ced":function(t,e,s){},"85ec":function(t,e,s){},8805:function(t,e,s){},cccb:function(t,e,s){"use strict";var o=s("5ced"),i=s.n(o);i.a},f4d9:function(t,e,s){"use strict";var o=s("3540"),i=s.n(o);i.a},fa65:function(t,e,s){"use strict";var o=s("8805"),i=s.n(o);i.a}});
//# sourceMappingURL=app.9128644e.js.map