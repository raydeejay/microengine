define(["amber/boot", "require", "amber/core/Kernel-Announcements", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Microengine");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.imports = ["PIXI=pixi", "./Microengine-Keyboard", "amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"];
//>>excludeStart("imports", pragmas.excludeImports);
var PIXI;
$pkg.isReady = new Promise(function (resolve, reject) { requirejs(["pixi", "./Microengine-Keyboard", "amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"], function ($1) {PIXI=$1; resolve();}, reject); });
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


$core.addClass("MEAnnouncement", $globals.Object, [], "Microengine");

$core.addMethod(
$core.method({
selector: "classTag",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return "announcement";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classTag\x0a\x09\x22Returns a tag or general category for this class.\x0a\x09Typically used to help tools do some reflection.\x0a\x09Helios, for example, uses this to decide what icon the class should display.\x22\x0a\x09\x0a\x09^ 'announcement'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MEAnnouncement.a$cls);


$core.addClass("MoveAnnouncement", $globals.MEAnnouncement, [], "Microengine");


$core.addClass("AnnounceDown", $globals.MoveAnnouncement, [], "Microengine");


$core.addClass("AnnounceLeft", $globals.MoveAnnouncement, [], "Microengine");


$core.addClass("AnnounceRight", $globals.MoveAnnouncement, [], "Microengine");


$core.addClass("AnnounceStop", $globals.MoveAnnouncement, [], "Microengine");


$core.addClass("AnnounceUp", $globals.MoveAnnouncement, [], "Microengine");


$core.addClass("MEAnnouncer", $globals.Announcer, [], "Microengine");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.MEAnnouncer.comment="My unique instance is the global announcer handling all Amber system-related announces.\x0a\x0a## API\x0a\x0aAccess to the unique instance is done via `#current`";
//>>excludeEnd("ide");

$core.setSlots($globals.MEAnnouncer.a$cls, ["current"]);
$core.addMethod(
$core.method({
selector: "current",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self.current;
if(($receiver = $1) == null || $receiver.a$nil){
$self.current=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.MEAnnouncer.a$cls.superclass||$boot.nilAsClass).fn.prototype._new.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return $self.current;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"current",{},$globals.MEAnnouncer.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "current\x0a\x09^ current ifNil: [ current := super new ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.MEAnnouncer.a$cls);

$core.addMethod(
$core.method({
selector: "new",
protocol: "instance creation",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._shouldNotImplement();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{},$globals.MEAnnouncer.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09self shouldNotImplement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["shouldNotImplement"]
}),
$globals.MEAnnouncer.a$cls);


$core.addClass("MEGameSession", $globals.Object, ["nodes", "app", "explorer", "treasure"], "Microengine");
$core.addMethod(
$core.method({
selector: "addExplorer",
protocol: "sprites",
fn: function (){
var self=this,$self=this;
var spr;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
spr=$recv($recv($recv($globals.Libs)._pixi())._Sprite())._newValue_($recv($recv($recv($self.app)._assets())._at_("explorer"))._texture());
$recv($recv($recv($self.app)._app())._stage())._addChild_(spr);
$self.explorer=$recv($globals.Explorer)._on_(spr);
$recv($self.nodes)._add_($self.explorer);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addExplorer",{spr:spr},$globals.MEGameSession)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addExplorer\x0a\x09| spr |\x0a\x09\x0a\x09spr := (Libs pixi Sprite newValue: (app assets at: 'explorer') texture).\x0a\x09app app stage addChild: spr.\x0a\x09explorer := Explorer on: spr.\x0a\x09nodes add: explorer",
referencedClasses: ["Libs", "Explorer"],
//>>excludeEnd("ide");
messageSends: ["newValue:", "Sprite", "pixi", "texture", "at:", "assets", "addChild:", "stage", "app", "on:", "add:"]
}),
$globals.MEGameSession);

$core.addMethod(
$core.method({
selector: "addTreasure",
protocol: "sprites",
fn: function (){
var self=this,$self=this;
var spr;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
spr=$recv($recv($recv($globals.Libs)._pixi())._Sprite())._newValue_($recv($recv($recv($self.app)._assets())._at_("treasure"))._texture());
$recv($recv($recv($self.app)._app())._stage())._addChild_(spr);
$self.treasure=$recv($globals.Treasure)._on_(spr);
$recv($self.nodes)._add_($self.treasure);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addTreasure",{spr:spr},$globals.MEGameSession)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addTreasure\x0a\x09| spr |\x0a\x09\x0a\x09spr := (Libs pixi Sprite newValue: (app assets at: 'treasure') texture).\x0a\x09app app stage addChild: spr.\x0a\x09treasure := Treasure on: spr.\x0a\x09nodes add: treasure",
referencedClasses: ["Libs", "Treasure"],
//>>excludeEnd("ide");
messageSends: ["newValue:", "Sprite", "pixi", "texture", "at:", "assets", "addChild:", "stage", "app", "on:", "add:"]
}),
$globals.MEGameSession);

$core.addMethod(
$core.method({
selector: "app",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.app;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "app\x0a\x09^ app",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MEGameSession);

$core.addMethod(
$core.method({
selector: "app:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.app=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "app: anObject\x0a\x09app := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MEGameSession);

$core.addMethod(
$core.method({
selector: "checkCollisions",
protocol: "action",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($self.explorer)._collidesWith_($self.treasure);
if($core.assert($1)){
$recv($recv($globals.MEAnnouncer)._current())._announce_($recv($globals.AnnounceStop)._new());
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"checkCollisions",{},$globals.MEGameSession)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "checkCollisions\x0a\x09\x22check if the explorer collides with the treasure\x22\x0a\x09(explorer collidesWith: treasure)\x0a\x09\x09ifTrue: [ MEAnnouncer current announce: AnnounceStop new ]",
referencedClasses: ["MEAnnouncer", "AnnounceStop"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "collidesWith:", "announce:", "current", "new"]
}),
$globals.MEGameSession);

$core.addMethod(
$core.method({
selector: "gameLoop:",
protocol: "action",
fn: function (aDelta){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.nodes)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._update();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$self._checkCollisions();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gameLoop:",{aDelta:aDelta},$globals.MEGameSession)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDelta"],
source: "gameLoop: aDelta\x0a\x09\x22do something :-D\x22\x0a\x09nodes do: [ :each | each update ].\x0a\x09self checkCollisions",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "update", "checkCollisions"]
}),
$globals.MEGameSession);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7;
$self.nodes=[];
$recv($self._addTreasure())._addExplorer();
$1=$recv($globals.MEAnnouncer)._current();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["current"]=1;
//>>excludeEnd("ctx");
$recv($1)._on_do_($globals.AnnounceLeft,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self.explorer)._moveLeft();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=1;
//>>excludeEnd("ctx");
$recv($1)._on_do_($globals.AnnounceRight,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self.explorer)._moveRight();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=2;
//>>excludeEnd("ctx");
$recv($1)._on_do_($globals.AnnounceUp,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self.explorer)._moveUp();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=3;
//>>excludeEnd("ctx");
$recv($1)._on_do_($globals.AnnounceDown,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self.explorer)._moveDown();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=4;
//>>excludeEnd("ctx");
$recv($1)._on_do_($globals.AnnounceStop,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self.explorer)._stop();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)});
//>>excludeEnd("ctx");
}));
$recv($globals.Key)._code_onPress_onRelease_((37),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv($globals.MEAnnouncer)._current();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["current"]=2;
//>>excludeEnd("ctx");
$3=$recv($globals.AnnounceLeft)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=1;
//>>excludeEnd("ctx");
return $recv($2)._announce_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["announce:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,6)});
//>>excludeEnd("ctx");
}),(function(){

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["code:onPress:onRelease:"]=1;
//>>excludeEnd("ctx");
$recv($globals.Key)._code_onPress_onRelease_((39),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv($globals.MEAnnouncer)._current();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["current"]=3;
//>>excludeEnd("ctx");
$5=$recv($globals.AnnounceRight)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=2;
//>>excludeEnd("ctx");
return $recv($4)._announce_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["announce:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,8)});
//>>excludeEnd("ctx");
}),(function(){

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["code:onPress:onRelease:"]=2;
//>>excludeEnd("ctx");
$recv($globals.Key)._code_onPress_onRelease_((38),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6=$recv($globals.MEAnnouncer)._current();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["current"]=4;
//>>excludeEnd("ctx");
$7=$recv($globals.AnnounceUp)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=3;
//>>excludeEnd("ctx");
return $recv($6)._announce_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["announce:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,10)});
//>>excludeEnd("ctx");
}),(function(){

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["code:onPress:onRelease:"]=3;
//>>excludeEnd("ctx");
$recv($globals.Key)._code_onPress_onRelease_((40),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($globals.MEAnnouncer)._current())._announce_($recv($globals.AnnounceDown)._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,12)});
//>>excludeEnd("ctx");
}),(function(){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.MEGameSession)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09nodes := #().\x09\x0a\x09self addTreasure addExplorer.\x0a\x09MEAnnouncer current\x0a\x09\x09on: AnnounceLeft do: [ explorer moveLeft ];\x0a\x09\x09on: AnnounceRight do: [ explorer moveRight ];\x0a\x09\x09on: AnnounceUp do: [ explorer moveUp ];\x0a\x09\x09on: AnnounceDown do: [ explorer moveDown ];\x0a\x09\x09on: AnnounceStop do: [ explorer stop ].\x0a\x09Key\x0a\x09\x09code: 37 onPress: [ MEAnnouncer current announce: AnnounceLeft new ] onRelease: [ ];\x0a\x09\x09code: 39 onPress: [ MEAnnouncer current announce: AnnounceRight new ] onRelease: [ ];\x0a\x09\x09code: 38 onPress: [ MEAnnouncer current announce: AnnounceUp new ] onRelease: [ ];\x0a\x09\x09code: 40 onPress: [ MEAnnouncer current announce: AnnounceDown new ] onRelease: [ ]\x0a\x09",
referencedClasses: ["MEAnnouncer", "AnnounceLeft", "AnnounceRight", "AnnounceUp", "AnnounceDown", "AnnounceStop", "Key"],
//>>excludeEnd("ide");
messageSends: ["addExplorer", "addTreasure", "on:do:", "current", "moveLeft", "moveRight", "moveUp", "moveDown", "stop", "code:onPress:onRelease:", "announce:", "new"]
}),
$globals.MEGameSession);

$core.addMethod(
$core.method({
selector: "nodes",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.nodes;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nodes\x0a\x09^ nodes",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MEGameSession);

$core.addMethod(
$core.method({
selector: "nodes:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.nodes=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "nodes: anObject\x0a\x09nodes := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MEGameSession);

$core.addMethod(
$core.method({
selector: "start",
protocol: "action",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($self.app)._ticker())._add_((function(delta){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._gameLoop_(delta);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({delta:delta},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.MEGameSession)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09app ticker add: [ :delta | self gameLoop: delta ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "ticker", "gameLoop:"]
}),
$globals.MEGameSession);

$core.addMethod(
$core.method({
selector: "stop",
protocol: "action",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($self.app)._ticker())._stop();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stop",{},$globals.MEGameSession)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stop\x0a\x09app ticker stop",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["stop", "ticker"]
}),
$globals.MEGameSession);


$core.addMethod(
$core.method({
selector: "on:",
protocol: "instance creation",
fn: function (anApplication){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._basicNew();
$recv($1)._app_(anApplication);
$recv($1)._initialize();
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{anApplication:anApplication},$globals.MEGameSession.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anApplication"],
source: "on: anApplication\x0a\x09^ self basicNew\x0a\x09\x09app: anApplication;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["app:", "basicNew", "initialize", "yourself"]
}),
$globals.MEGameSession.a$cls);


$core.addClass("Microengine", $globals.Object, ["app", "resources", "loader", "assets", "session", "ticker"], "Microengine");
$core.addMethod(
$core.method({
selector: "app",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.app;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "app\x0a\x09^ app",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Microengine);

$core.addMethod(
$core.method({
selector: "app:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.app=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "app: anObject\x0a\x09app := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Microengine);

$core.addMethod(
$core.method({
selector: "assets",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.assets;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "assets\x0a\x09^ assets",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Microengine);

$core.addMethod(
$core.method({
selector: "assets:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.assets=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "assets: anObject\x0a\x09assets := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Microengine);

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
$self._setup();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{},$globals.Microengine)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09\x22Silk new DIV: {#id -> 'canvas'. #width -> 512. #height -> 384}.\x22\x0a\x09'#amber-with' asJQuery click: [ self doStart ].\x0a\x09self setup",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["click:", "asJQuery", "doStart", "setup"]
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
selector: "doStart",
protocol: "action",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.session)._start();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doStart",{},$globals.Microengine)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doStart\x0a\x09\x22| spr |\x0a\x0a\x09spr := Libs pixi Sprite newValue: (assets at: 'treasure') texture.\x0a\x09app stage addChild: spr.\x22\x0a\x09session start",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["start"]
}),
$globals.Microengine);

$core.addMethod(
$core.method({
selector: "loader",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.loader;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "loader\x0a\x09^ loader",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Microengine);

$core.addMethod(
$core.method({
selector: "loader:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.loader=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "loader: anObject\x0a\x09loader := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Microengine);

$core.addMethod(
$core.method({
selector: "postload",
protocol: "resources",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.assets=$recv($self.loader)._resources();
$self.session=$recv($globals.MEGameSession)._on_(self);
$recv(console)._log_($self.session);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"postload",{},$globals.Microengine)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "postload\x0a\x09assets := loader resources.\x0a\x09session := MEGameSession on: self.\x0a\x09console log: session",
referencedClasses: ["MEGameSession"],
//>>excludeEnd("ide");
messageSends: ["resources", "on:", "log:"]
}),
$globals.Microengine);

$core.addMethod(
$core.method({
selector: "preload",
protocol: "resources",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._resources())._keysAndValuesDo_((function(k,v){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self.loader)._add_file_(k,v);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({k:k,v:v},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"preload",{},$globals.Microengine)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "preload\x0a\x09self resources keysAndValuesDo: [ :k :v | loader add: k file: v ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["keysAndValuesDo:", "resources", "add:file:"]
}),
$globals.Microengine);

$core.addMethod(
$core.method({
selector: "resources",
protocol: "resources",
fn: function (){
var self=this,$self=this;
return $globals.HashedCollection._newFromPairs_(["treasure","images/treasure.png","explorer","images/explorer.png"]);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resources\x0a\x09^ #{\x0a\x09\x09#treasure -> 'images/treasure.png'.\x0a\x09\x09#explorer -> 'images/explorer.png'\x0a\x09}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Microengine);

$core.addMethod(
$core.method({
selector: "session",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.session;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "session\x0a\x09^ session",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Microengine);

$core.addMethod(
$core.method({
selector: "session:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.session=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "session: anObject\x0a\x09session := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Microengine);

$core.addMethod(
$core.method({
selector: "setup",
protocol: "resources",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.app=$recv($recv($recv($globals.Libs)._pixi())._Application())._new();
$recv($recv(document)._body())._appendChild_($recv($self.app)._view());
$self.loader=$recv($self.app)._loader();
$self.ticker=$recv($self.app)._ticker();
$self._preload();
$recv($self.loader)._load_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._postload();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setup",{},$globals.Microengine)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setup\x0a\x09app := Libs pixi Application new.\x0a\x09document body appendChild: app view.\x0a\x0a\x09loader := app loader.\x0a\x09ticker := app ticker.\x0a\x09self preload.\x0a\x09loader load: [ self postload ]",
referencedClasses: ["Libs"],
//>>excludeEnd("ide");
messageSends: ["new", "Application", "pixi", "appendChild:", "body", "view", "loader", "ticker", "preload", "load:", "postload"]
}),
$globals.Microengine);

$core.addMethod(
$core.method({
selector: "ticker",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.ticker;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ticker\x0a\x09^ ticker",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Microengine);


$core.setSlots($globals.Microengine.a$cls, ["instance"]);
$core.addMethod(
$core.method({
selector: "instance",
protocol: "starting",
fn: function (){
var self=this,$self=this;
return $self.instance;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "instance\x0a\x09^ instance",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Microengine.a$cls);

$core.addMethod(
$core.method({
selector: "start",
protocol: "starting",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.instance=$self._new();
$recv($self.instance)._augmentPage();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.Microengine.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09instance := self new.\x0a\x09instance augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "augmentPage"]
}),
$globals.Microengine.a$cls);


$core.addClass("Registry", $globals.Object, ["dictionary"], "Microengine");
$core.addMethod(
$core.method({
selector: "at:",
protocol: "accessing",
fn: function (aKey){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._dictionary())._at_(aKey);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{aKey:aKey},$globals.Registry)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "at: aKey\x0a\x09^ self dictionary at: aKey",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "dictionary"]
}),
$globals.Registry);

$core.addMethod(
$core.method({
selector: "at:put:",
protocol: "accessing",
fn: function (aKey,aValue){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._dictionary())._at_put_(aKey,aValue);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:put:",{aKey:aKey,aValue:aValue},$globals.Registry)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aValue"],
source: "at: aKey put: aValue\x0a\x09^ self dictionary at: aKey put: aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "dictionary"]
}),
$globals.Registry);

$core.addMethod(
$core.method({
selector: "dictionary",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self.dictionary;
if(($receiver = $1) == null || $receiver.a$nil){
$self.dictionary=$recv($globals.Dictionary)._new();
return $self.dictionary;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dictionary",{},$globals.Registry)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dictionary\x0a\x09^ dictionary ifNil: [ dictionary := Dictionary new ]",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.Registry);



$core.addClass("Sprite", $globals.Object, ["sprite", "dx", "dy"], "Microengine");
$core.addMethod(
$core.method({
selector: "collidesWith:",
protocol: "colliding",
fn: function (aSprite){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$7,$6,$9,$8,$5,$2,$12,$11,$15,$14,$17,$16,$13,$10,$20,$19,$23,$22,$25,$24,$21,$18,$27,$26,$30,$29,$28,$1;
$4=$self._sprite();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["sprite"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$7=$recv(aSprite)._sprite();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["sprite"]=2;
//>>excludeEnd("ctx");
$6=$recv($7)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=2;
//>>excludeEnd("ctx");
$9=$recv(aSprite)._sprite();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["sprite"]=3;
//>>excludeEnd("ctx");
$8=$recv($9)._width();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["width"]=1;
//>>excludeEnd("ctx");
$5=$recv($6).__plus($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__lt_eq($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<="]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$12=$recv(aSprite)._sprite();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["sprite"]=4;
//>>excludeEnd("ctx");
$11=$recv($12)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["x"]=3;
//>>excludeEnd("ctx");
$15=$self._sprite();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["sprite"]=5;
//>>excludeEnd("ctx");
$14=$recv($15)._x();
$17=$self._sprite();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["sprite"]=6;
//>>excludeEnd("ctx");
$16=$recv($17)._width();
$13=$recv($14).__plus($16);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=2;
//>>excludeEnd("ctx");
$10=$recv($11).__lt_eq($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<="]=2;
//>>excludeEnd("ctx");
return $recv($10)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$20=$self._sprite();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["sprite"]=7;
//>>excludeEnd("ctx");
$19=$recv($20)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$23=$recv(aSprite)._sprite();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["sprite"]=8;
//>>excludeEnd("ctx");
$22=$recv($23)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["y"]=2;
//>>excludeEnd("ctx");
$25=$recv(aSprite)._sprite();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["sprite"]=9;
//>>excludeEnd("ctx");
$24=$recv($25)._height();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["height"]=1;
//>>excludeEnd("ctx");
$21=$recv($22).__plus($24);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["+"]=3;
//>>excludeEnd("ctx");
$18=$recv($19).__lt_eq($21);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["<="]=3;
//>>excludeEnd("ctx");
return $recv($18)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$27=$recv(aSprite)._sprite();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["sprite"]=10;
//>>excludeEnd("ctx");
$26=$recv($27)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["y"]=3;
//>>excludeEnd("ctx");
$30=$self._sprite();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["sprite"]=11;
//>>excludeEnd("ctx");
$29=$recv($30)._y();
$28=$recv($29).__plus($recv($self._sprite())._height());
return $recv($26).__lt_eq($28);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["and:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["and:"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collidesWith:",{aSprite:aSprite},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSprite"],
source: "collidesWith: aSprite\x0a\x09^ self sprite x <= (aSprite sprite x + aSprite sprite width)\x0a\x09\x09and: [ aSprite sprite x <= (self sprite x + self sprite width)\x0a\x09\x09\x09and: [ self sprite y <= (aSprite sprite y + aSprite sprite height)\x0a\x09\x09\x09\x09and: [ aSprite sprite y <= (self sprite y + self sprite height) ] ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "<=", "x", "sprite", "+", "width", "y", "height"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "dx",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.dx;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dx\x0a\x09^ dx",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "dx:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.dx=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "dx: anObject\x0a\x09dx := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "dy",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.dy;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dy\x0a\x09^ dy",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "dy:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.dy=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "dy: anObject\x0a\x09dy := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "sprite",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.sprite;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sprite\x0a\x09^ sprite",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "sprite:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.sprite=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "sprite: anObject\x0a\x09sprite := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "update",
protocol: "updating",
fn: function (){
var self=this,$self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "update\x0a\x09\x22implement if necessary\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Sprite);


$core.addMethod(
$core.method({
selector: "on:",
protocol: "instance creation",
fn: function (aSprite){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._basicNew();
$recv($1)._sprite_(aSprite);
$recv($1)._initialize();
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aSprite:aSprite},$globals.Sprite.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSprite"],
source: "on: aSprite\x0a\x09^ self basicNew\x0a\x09\x09sprite: aSprite;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sprite:", "basicNew", "initialize", "yourself"]
}),
$globals.Sprite.a$cls);


$core.addClass("Explorer", $globals.Sprite, [], "Microengine");
$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.Explorer.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$self.dx=(0);
$self.dy=(0);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Explorer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09dx := 0.\x0a\x09dy := 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.Explorer);

$core.addMethod(
$core.method({
selector: "moveDown",
protocol: "action",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._dy_((5));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveDown",{},$globals.Explorer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "moveDown\x0a\x09self dy: 5",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["dy:"]
}),
$globals.Explorer);

$core.addMethod(
$core.method({
selector: "moveLeft",
protocol: "action",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._dx_((-5));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveLeft",{},$globals.Explorer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "moveLeft\x0a\x09self dx: -5",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["dx:"]
}),
$globals.Explorer);

$core.addMethod(
$core.method({
selector: "moveRight",
protocol: "action",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._dx_((5));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveRight",{},$globals.Explorer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "moveRight\x0a\x09self dx: 5",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["dx:"]
}),
$globals.Explorer);

$core.addMethod(
$core.method({
selector: "moveUp",
protocol: "action",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._dy_((-5));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveUp",{},$globals.Explorer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "moveUp\x0a\x09self dy: -5",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["dy:"]
}),
$globals.Explorer);

$core.addMethod(
$core.method({
selector: "stop",
protocol: "action",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._dx_((0));
$self._dy_((0));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stop",{},$globals.Explorer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stop\x0a\x09self dx: 0; dy: 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["dx:", "dy:"]
}),
$globals.Explorer);

$core.addMethod(
$core.method({
selector: "update",
protocol: "updating",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$self.sprite;
$2=$recv($recv($self.sprite)._x()).__plus($self.dx);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$recv($1)._x_($2);
$self.dx=$recv($self.dx).__star((0.9));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$recv($self.sprite)._y_($recv($recv($self.sprite)._y()).__plus($self.dy));
$self.dy=$recv($self.dy).__star((0.9));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"update",{},$globals.Explorer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "update\x0a\x09sprite x: sprite x + dx.\x0a\x09dx := dx * 0.9.\x0a\x09sprite y: sprite y + dy.\x0a\x09dy := dy * 0.9\x09",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["x:", "+", "x", "*", "y:", "y"]
}),
$globals.Explorer);



$core.addClass("Treasure", $globals.Sprite, [], "Microengine");
$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.Treasure.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv($self._sprite())._x_((100));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Treasure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self sprite x: 100",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "x:", "sprite"]
}),
$globals.Treasure);

$core.addMethod(
$core.method({
selector: "update",
protocol: "updating",
fn: function (){
var self=this,$self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "update\x0a\x09\x22self sprite x: self sprite x + 1\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Treasure);


});
