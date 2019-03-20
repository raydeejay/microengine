define(["amber/boot", "require", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Microengine");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.imports = ["PIXI=pixi", "./Microengine-Adapters", "./Microengine-Behaviour", "./Microengine-Locations", "./Microengine-Node", "./Microengine-Observers", "./Microengine-Spatial", "amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"];
//>>excludeStart("imports", pragmas.excludeImports);
var PIXI;
$pkg.isReady = new Promise(function (resolve, reject) { requirejs(["pixi", "./Microengine-Adapters", "./Microengine-Behaviour", "./Microengine-Locations", "./Microengine-Node", "./Microengine-Observers", "./Microengine-Spatial", "amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"], function ($1) {PIXI=$1; resolve();}, reject); });
//>>excludeEnd("imports");
$pkg.transport = {"type":"amd","amdNamespace":"amber-microengine"};

$core.addClass("Libs", $globals.Object, [], "Microengine");

$core.addMethod(
$core.method({
selector: "pixi",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $globals.PIXI;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pixi\x0a\x09^ PIXI",
referencedClasses: ["PIXI"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Libs.a$cls);


$core.addClass("MEGameSession", $globals.Object, [], "Microengine");


$core.addClass("Microengine", $globals.Object, [], "Microengine");
$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: "starting",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#amber-with"._asJQuery())._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._doStart();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{},$globals.Microengine)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09'#amber-with' asJQuery click: [ self doStart ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["click:", "asJQuery", "doStart"]
}),
$globals.Microengine);

$core.addMethod(
$core.method({
selector: "doAmberWith",
protocol: "action",
fn: function (){
var self=this,$self=this;
var tag;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
tag=$recv($recv($globals.HTMLCanvas)._onJQuery_("#output-list"._asJQuery()))._root();
$recv(tag)._with_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(html)._li())._with_("Amber Web #with: added me!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doAmberWith",{tag:tag},$globals.Microengine)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doAmberWith\x0a\x09| tag |\x0a\x09tag := (HTMLCanvas onJQuery: '#output-list' asJQuery) root.\x0a\x09tag with: [ :html | html li with: 'Amber Web #with: added me!' ]",
referencedClasses: ["HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["root", "onJQuery:", "asJQuery", "with:", "li"]
}),
$globals.Microengine);

$core.addMethod(
$core.method({
selector: "doConsoleLog",
protocol: "action",
fn: function (){
var self=this,$self=this;
var greeting,target;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
greeting="Hello";
target="world";
$recv(console)._log_($globals.HashedCollection._newFromPairs_(["greeting",greeting,"target",target,"callback",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=console;
$3=$recv($recv(greeting).__comma(", ")).__comma(target);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
$2=$recv($3).__comma("!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $recv($1)._log_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
})]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["log:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doConsoleLog",{greeting:greeting,target:target},$globals.Microengine)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doConsoleLog\x0a\x09| greeting target |\x0a\x09greeting := 'Hello'.\x0a\x09target := 'world'.\x0a\x09console log: #{ #greeting -> greeting. #target -> target. #callback -> [ console log: greeting, ', ', target, '!' ] }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["log:", ","]
}),
$globals.Microengine);

$core.addMethod(
$core.method({
selector: "doJQueryAppend",
protocol: "action",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#output-list"._asJQuery())._append_("<li>jQuery append added me!</li>");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doJQueryAppend",{},$globals.Microengine)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doJQueryAppend\x0a\x09'#output-list' asJQuery append: '<li>jQuery append added me!</li>'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["append:", "asJQuery"]
}),
$globals.Microengine);

$core.addMethod(
$core.method({
selector: "doSilkTAG",
protocol: "action",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#output-list"._asSilk())._LI_("Silk TAG: added me!");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doSilkTAG",{},$globals.Microengine)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doSilkTAG\x0a\x09'#output-list' asSilk LI: 'Silk TAG: added me!'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["LI:", "asSilk"]
}),
$globals.Microengine);

$core.addMethod(
$core.method({
selector: "doStart",
protocol: "starting",
fn: function (){
var self=this,$self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doStart",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Microengine);


$core.addMethod(
$core.method({
selector: "start",
protocol: "starting",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._new())._augmentPage();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.Microengine.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["augmentPage", "new"]
}),
$globals.Microengine.a$cls);

});
