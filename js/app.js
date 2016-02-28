!function(){"use strict";var t="undefined"==typeof window?global:window;if("function"!=typeof t.require){var e={},n={},r={},a={}.hasOwnProperty,i="components/",o=function(t,e){var n=0;e&&(0===e.indexOf(i)&&(n=i.length),e.indexOf("/",n)>0&&(e=e.substring(n,e.indexOf("/",n))));var a=r[t+"/index.js"]||r[e+"/deps/"+t+"/index.js"];return a?i+a.substring(0,a.length-".js".length):t},l=/^\.\.?(\/|$)/,c=function(t,e){for(var n,r=[],a=(l.test(e)?t+"/"+e:e).split("/"),i=0,o=a.length;o>i;i++)n=a[i],".."===n?r.pop():"."!==n&&""!==n&&r.push(n);return r.join("/")},s=function(t){return t.split("/").slice(0,-1).join("/")},f=function(e){return function(n){var r=c(s(e),n);return t.require(r,e)}},u=function(t,e){var r={id:t,exports:{}};return n[t]=r,e(r.exports,f(t),r),r.exports},d=function(t,r){var i=c(t,".");if(null==r&&(r="/"),i=o(t,r),a.call(n,i))return n[i].exports;if(a.call(e,i))return u(i,e[i]);var l=c(i,"./index");if(a.call(n,l))return n[l].exports;if(a.call(e,l))return u(l,e[l]);throw new Error('Cannot find module "'+t+'" from "'+r+'"')};d.alias=function(t,e){r[e]=t},d.register=d.define=function(t,n){if("object"==typeof t)for(var r in t)a.call(t,r)&&(e[r]=t[r]);else e[t]=n},d.list=function(){var t=[];for(var n in e)a.call(e,n)&&t.push(n);return t},d.brunch=!0,d._cache=n,t.require=d}}(),require.register("app",function(t,e,n){"use strict";console.log("app init called"),angular.module("replay",[]),angular.module("replay").controller("ReplayCtrl",["$scope","$http",function(t,e){t.speakers=function(t){return _.map(t.speakers,function(t){return t.fullname}).join(", ")},e.get("./json/2015/talks.json").then(function(e){t.talks=e.data})}])}),require.register("programme",function(t,e,n){"use strict";angular.module("programme",["ngSanitize","hc.marked","ngLocale","ngAnimate","ui.bootstrap","ui.calendar"]).controller("ProgrammeCtrl",["$scope","$http","marked","dateFilter","$uibModal","uiCalendarConfig",function(t,e,n,r,a,i){function o(t){return'<span class="fa-stack" title="'+f[t.format].label+'"><i class="fa fa-square fa-stack-2x"></i><i style="color:'+t.color+';" class="fa fa-stack-1x fa-inverse '+f[t.format].icon+'"></i> </span> '+t.title+(t.room?" <em>("+t.room+")</em>":"")}function l(t){i.calendars[t]&&i.calendars[t].fullCalendar("refetchEvents")}var c=this.formatDefinitions=[{format:"Conf",label:"Conférence",icon:"fa-slideshare"},{format:"TiA",label:"Tool in Action",icon:"fa-wrench"},{format:"Univ",label:"Université",icon:"fa-terminal"},{format:"Quickie",label:"Quickie",icon:"fa-clock-o"},{format:"Lab",label:"Lab",icon:"fa-flask"}],s=this.categoryColors={"Objects connectés, IoT, Robotique":"#4B8865","Cloud, DevOps, Outils":"#CA5132","Agilité, Méthodologie et Tests":"#C9880F","BigData et Analytics":"#BB283C","Architecture, Performance et Sécurité":"#6B4162","Java, JVM, Javas SE/EE":"#7F71CE",Langages:"#6AAA3E",Web:"#287F95",Keynote:"#F55E52"},f=_.indexBy(c,"format");this.calendarConfig={defaultDate:"2016-03-23",defaultView:"agendaDay",slotEventOverlap:!1,slotDuration:"00:15:00",editable:!1,header:{left:"",center:"",right:"prev,next"},titleFormat:{day:""},columnFormat:{day:""},allDaySlot:!1,minTime:"08:30:00",maxTime:"21:00:00",axisFormat:"HH:mm",contentHeight:1125,height:1125,timeFormat:{agenda:"HH:mm"},eventClick:function(t){this.details(t)}.bind(this),eventRender:function(t,e){e.find(".fc-title").html(o(t)),e.attr("title",t.title)}};var u=this.filters={},d=_.keys(s);u.category=_.object(d,_.map(d,function(){return!1})),u.format=_.mapValues(f,!1),_.each(u,function(e){t.$watchCollection(function(){return e},function(){l("calendar")})}),e.get("json/2016/schedule.json").then(function(t){function e(){return _.pick(u,function(t){return _.any(t,Boolean)})}var n=t.data;this.agenda={events:function(t,r,a,i){var o=e();i(_.filter(_.map(n,function(t){return{title:t.name,format:t.format,category:t.event_type,description:t.description,speakers:t.speakers,start:t.event_start,end:t.event_end,color:s[t.event_type]}}),function(t){return _.all(o,function(e,n){return e[t[n]]})}))}}}.bind(this)),this.details=function(t){a.open({templateUrl:"talk-details.html",controller:function(){this.talk=t,this.formats=f},controllerAs:"detailsCtrl"})}}])}),require.register("scroll",function(t,e,n){"use strict";var r=e("jquery");r(document).ready(function(){r("#nav").affix({offset:{top:r("header").height()-r("#nav").height()}}),r("body").scrollspy({target:"#nav"}),r(".scroll-top").click(function(){r("body,html").animate({scrollTop:0},1e3)}),r("#nav .navbar-nav li>a").click(function(){var t=r(this).attr("href"),e=r(t).offset().top+20;r("body,html").animate({scrollTop:e},700)})})});