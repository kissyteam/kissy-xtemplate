/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: Jun 13 11:54
*/
KISSY.add("tabs","component/container,tabs/bar,tabs/body,tabs/tab,tabs/panel,util".split(","),function(f,b,i,h){function d(e){this.removeItemByTab(e.target)}function a(e){this.setSelectedTab(e.newVal)}function j(e){var a={};a.content=e.title;a.selected=e.selected;a.closable=e.closable;return a}var c=b("component/container"),f=b("tabs/bar"),i=b("tabs/body");b("tabs/tab");var l=b("tabs/panel"),k=b("util"),g={top:0,left:0,bottom:1,right:0},b=c.extend({initializer:function(){var e=this.get("items");if(e){var a=
this.get("children"),c=this.get("barOrientation"),b,d=this.get("prefixCls"),f={prefixCls:d,xclass:"tabs-bar",changeType:this.get("changeType"),children:[]},d={prefixCls:d,xclass:"tabs-body",lazyRender:this.get("lazyRender"),children:[]},h=f.children,l=d.children;k.each(e,function(e){b=b||e.selected;h.push(j(e));l.push({content:e.content,selected:e.selected})});if(!b&&h.length){h[0].selected=true;l[0].selected=true}a[g[c]]=f;a[1-g[c]]=d}},beforeCreateDom:function(e){e.elCls.push(this.getBaseCssClass(this.get("barOrientation")))},
decorateDom:function(){this.get("bar").set("changeType",this.get("changeType"))},bindUI:function(){this.on("afterSelectedTabChange",a);this.on("afterTabClose",d)},addItem:function(e,a){var c=this.get("bar"),b,d,g=c.get("children"),f=this.get("body");if(typeof a==="undefined")a=g.length;b=j(e);d={content:e.content};c.addChild(b,a);b=g[a];f.addChild(d,a);if(e.selected){c.set("selectedTab",b);f.set("selectedPanelIndex",a)}return this},removeItemAt:function(a,b){var c=this.get("bar"),d=c.get("children"),
g=c.getChildAt(a),j=this.get("body");g.get("selected")&&(d.length===1?c.set("selectedTab",null):a===0?c.set("selectedTab",c.getChildAt(a+1)):c.set("selectedTab",c.getChildAt(a-1)));c.removeChild(c.getChildAt(a),b);j.removeChild(j.getChildAt(a),b);return this},removeItemByTab:function(a,c){return this.removeItemAt(k.indexOf(a,this.get("bar").get("children")),c)},removeItemByPanel:function(a,c){return this.removeItemAt(k.indexOf(a,this.get("body").get("children")),c)},getSelectedTab:function(){var a=
this.get("bar"),c=null;k.each(a.get("children"),function(a){if(a.get("selected")){c=a;return false}});return c},getSelectedPanel:function(){var a=this.get("body"),c=null;k.each(a.get("children"),function(a){if(a.get("selected")){c=a;return false}});return c},getTabs:function(){return this.get("bar").get("children")},getPanels:function(){return this.get("body").get("children")},getTabAt:function(a){return this.get("bar").get("children")[a]},getPanelAt:function(a){return this.get("body").get("children")[a]},
setSelectedTab:function(a){var c=this.get("bar"),b=this.get("body");c.set("selectedTab",a);b.set("selectedPanelIndex",k.indexOf(a,c.get("children")));return this},setSelectedPanel:function(a){var c=this.get("bar"),b=this.get("body"),a=k.indexOf(a,b.get("children"));b.set("selectedPanelIndex",a);c.set("selectedTab",this.getTabAt(a));return this},_onSetBarOrientation:function(a){this.$el.removeClass(this.getBaseCssClass("top bottom left right")).addClass(this.getBaseCssClass(a))}},{ATTRS:{items:{},
changeType:{},lazyRender:{value:false},handleGestureEvents:{value:false},allowTextSelection:{value:true},focusable:{value:false},bar:{getter:function(){return this.get("children")[g[this.get("barOrientation")]]}},body:{getter:function(){return this.get("children")[1-g[this.get("barOrientation")]]}},barOrientation:{render:1,sync:0,value:"top",parse:function(a){return(a=a[0].className.match(/(top|bottom|left|right)\b/))&&a[1]||void 0}}},xclass:"tabs"});b.Orientation={TOP:"top",BOTTOM:"bottom",LEFT:"left",
RIGHT:"right"};b.ChangeType=f.ChangeType;b.Bar=f;b.Body=i;b.Panel=l;h.exports=b});
KISSY.add("tabs/bar",["toolbar","util"],function(f,b,i,h){var f=b("toolbar"),d=b("util"),b=f.extend({beforeCreateDom:function(a){a.elAttrs.role="tablist"},bindUI:function(){var a=this;a.on("afterSelectedChange",function(b){b.newVal&&b.target.isTabsTab&&a.set("selectedTab",b.target)})},syncUI:function(){var a=this,b=a.get("children");d.each(b,function(c){if(c.get("selected"))return a.setInternal("selectedTab",c),!1})},handleKeyDownInternal:function(a){var b=this.get("selectedTab"),a=this.getNextItemByKeyDown(a,
b);if("boolean"===typeof a)return a;a.set("selected",!0);return!0},_onSetSelectedTab:function(a,b){var c;a&&(b&&(c=b.prevVal)&&c.set("selected",!1),a.set("selected",!0))},_onSetHighlightedItem:function(a,b){this.callSuper(a,b);"mouse"===this.get("changeType")&&this._onSetSelectedTab.apply(this,arguments)}},{ATTRS:{selectedTab:{},changeType:{value:"click"},defaultChildCfg:{valueFn:function(){return{xclass:"tabs-tab"}}}},xclass:"tabs-bar"});b.ChangeType={CLICK:"click",MOUSE:"mouse"};h.exports=b});
KISSY.add("tabs/body",["component/container","util"],function(f,b,i,h){function d(a,b,d){if(a.get("lazyRender")){var g=a.get("children")[d];if(!g.get("selected"))return g}return j.superclass[b].call(a,d)}var f=b("component/container"),a=b("util"),j=f.extend({bindUI:function(){var a=this;a.on("afterSelectedPanelIndexChange",function(b){var d=a.get("children"),g=b.newVal,e;d[g]&&((e=d[b.prevVal])&&e.set("selected",!1),a.selectPanelByIndex(g))})},syncUI:function(){var b=this,d=b.get("children");a.each(d,
function(a,d){if(a.get("selected"))return b.set("selectedPanelIndex",d),!1})},createChild:function(a){return d(this,"createChild",a)},renderChild:function(a){return d(this,"renderChild",a)},selectPanelByIndex:function(a){this.get("children")[a].set("selected",!0);this.get("lazyRender")&&this.renderChild(a)}},{ATTRS:{selectedPanelIndex:{},allowTextSelection:{value:!0},focusable:{value:!1},lazyRender:{},handleGestureEvents:{value:!1},defaultChildCfg:{valueFn:function(){return{xclass:"tabs-panel"}}}},
xclass:"tabs-body"});h.exports=j});
KISSY.add("tabs/tab",["button","./tab-xtpl","component/extension/content-box"],function(f,b,i,h){function d(){this.fire("afterTabClose")}f=b("button");i=b("./tab-xtpl");b=b("component/extension/content-box");h.exports=f.extend([b],{initializer:function(){this.publish("beforeTabClose",{defaultFn:d,defaultTargetOnly:!0})},isTabsTab:!0,beforeCreateDom:function(a){var b=a.elAttrs;b.role="tab";a.selected&&(b["aria-selected"]=!0,a.elCls.push(this.getBaseCssClasses("selected")));a.closable&&a.elCls.push(this.getBaseCssClasses("closable"))},
handleClickInternal:function(a){this.get("closable")&&a.target===this.get("closeBtn")[0]?this.fire("beforeTabClose"):(this.callSuper(a),this.set("selected",!0))},_onSetSelected:function(a){var b=this.$el,c=this.getBaseCssClasses("selected");b[a?"addClass":"removeClass"](c).attr("aria-selected",!!a)}},{ATTRS:{contentTpl:{value:i},handleGestureEvents:{value:!1},focusable:{value:!1},closable:{value:!1,render:1,sync:0,parse:function(){return!!this.get("closeBtn")}},closeBtn:{selector:function(){return"."+
this.getBaseCssClass("close")}},selected:{render:1,sync:0,parse:function(a){return a.hasClass(this.getBaseCssClass("selected"))}}},xclass:"tabs-tab"})});
KISSY.add("tabs/tab-xtpl",[],function(f,b,i,h){f=function(b,a,f){var c=this,h=c.root.utils.callFn,i=c.root.nativeCommands["if"];a.write('<div class="',0);var g={escape:1},e=[];e.push("content");g.params=e;if((g=h(c,b,g,a,["getBaseCssClasses"],0,1))&&g.isBuffer)a=g,g=f;a.write(g,!0);a.write('">',0);g=b.resolve(["content"],0);a.write(g,!1);a.write("</div>\r\n",0);var g={escape:1},e=[],m=b.resolve(["closable"],0);e.push(m);g.params=e;g.fn=function(a,b){b.write('\r\n<span class="',0);var d={escape:1},
e=[];e.push("close");d.params=e;if((d=h(c,a,d,b,["getBaseCssClasses"],0,3))&&d.isBuffer)b=d,d=f;b.write(d,!0);b.write('">close</span>\r\n',0);return b};return a=i.call(c,b,g,a,2)};f.TPL_NAME=h.name;f.version="5.0.0";h.exports=f});
KISSY.add("tabs/panel",["component/container"],function(f,b,i,h){f=b("component/container");h.exports=f.extend({isTabsPanel:1,beforeCreateDom:function(b){b.elAttrs.role="tabpanel";b.selected?b.elCls.push(this.getBaseCssClasses("selected")):b.elAttrs["aria-hidden"]=!1},_onSetSelected:function(b){var a=this.$el,f=this.getBaseCssClasses("selected");a[b?"addClass":"removeClass"](f).attr("aria-hidden",!b)}},{ATTRS:{selected:{render:1,sync:0,parse:function(b){return b.hasClass(this.getBaseCssClass("selected"))}},
focusable:{value:!1},allowTextSelection:{value:!0}},xclass:"tabs-panel"})});