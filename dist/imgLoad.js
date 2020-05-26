/*!
 * imgLoad.js v1
 * (c) 2020 徐大春 dachunxu@126.com
 */
(function(){var a=function(b){if(!(this instanceof a)){return new a(b)}this.options=this.extend({"imgs":[1,2,3,4,5],},b);this.init()};a.prototype={init:function(){this.event()},extend:function(d,c){for(var b in c){d[b]=c[b]}return d},event:function(){var i="2B";this.options.before&&this.options.before();var d=0;var h=this;var c=this.options.imgs;for(var e=0,g=c;e<g.length;e++){var b=g[e];var f=new Image();f.src=b;f.onload=function(){d++;var j=Math.floor(d/(c.length)*100);h.options.singleStep&&h.options.singleStep();if(j==100){h.options.loadDone&&h.options.loadDone()}}}},index:function(){return}};window.imgLoad=a}());
