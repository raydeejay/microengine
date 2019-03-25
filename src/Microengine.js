define(["amber/boot", "require", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Microengine");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.imports = ["PIXI=pixi", "./Microengine-Keyboard", "amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"];
//>>excludeStart("imports", pragmas.excludeImports);
var PIXI;
$pkg.isReady = new Promise(function (resolve, reject) { requirejs(["pixi", "./Microengine-Keyboard", "amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"], function ($1) {PIXI=$1; resolve();}, reject); });
//>>excludeEnd("imports");
$pkg.transport = {"type":"amd","amdNamespace":"amber-microengine"};

$core.addClass("Action", $globals.Object, [], "Microengine");
$core.addMethod(
$core.method({
selector: "execute",
protocol: "executing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{},$globals.Action)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.Action);

$core.addMethod(
$core.method({
selector: "executeOn:",
protocol: "executing",
fn: function (aSession){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"executeOn:",{aSession:aSession},$globals.Action)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSession"],
source: "executeOn: aSession\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.Action);

$core.addMethod(
$core.method({
selector: "shouldRequeue",
protocol: "queueing",
fn: function (){
var self=this,$self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shouldRequeue\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Action);


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
$globals.Action.a$cls);


$core.addClass("CodeAction", $globals.Action, ["time", "elapsedTime", "block"], "Microengine");
$core.addMethod(
$core.method({
selector: "block",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.block;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "block\x0a\x09^ block",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CodeAction);

$core.addMethod(
$core.method({
selector: "block:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.block=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "block: anObject\x0a\x09block := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CodeAction);

$core.addMethod(
$core.method({
selector: "executeOn:",
protocol: "executing",
fn: function (aSession){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.block)._value_value_(self,aSession);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"executeOn:",{aSession:aSession},$globals.CodeAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSession"],
source: "executeOn: aSession\x0a\x09\x22Executes the block, passing itself and the session to it, in case it wants access to the action itself.\x22\x0a\x09block value: self value: aSession",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:value:"]
}),
$globals.CodeAction);


$core.addMethod(
$core.method({
selector: "do:",
protocol: "instance creation",
fn: function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._block_(aBlock);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},$globals.CodeAction.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "do: aBlock\x0a\x09^ self new\x0a\x09\x09block: aBlock;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["block:", "new", "yourself"]
}),
$globals.CodeAction.a$cls);


$core.addClass("DelayedAction", $globals.Action, ["time", "elapsedTime", "block"], "Microengine");
$core.addMethod(
$core.method({
selector: "block",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.block;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "block\x0a\x09^ block",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.DelayedAction);

$core.addMethod(
$core.method({
selector: "block:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.block=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "block: anObject\x0a\x09block := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.DelayedAction);

$core.addMethod(
$core.method({
selector: "elapsedTime",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.elapsedTime;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "elapsedTime\x0a\x09^ elapsedTime",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.DelayedAction);

$core.addMethod(
$core.method({
selector: "elapsedTime:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.elapsedTime=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "elapsedTime: anObject\x0a\x09elapsedTime := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.DelayedAction);

$core.addMethod(
$core.method({
selector: "executeOn:",
protocol: "executing",
fn: function (aSession){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$self.elapsedTime=$recv($self.elapsedTime).__plus((1));
$1=$recv($self.elapsedTime).__eq($self.time);
if($core.assert($1)){
$recv($self.block)._value_value_(self,aSession);
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"executeOn:",{aSession:aSession},$globals.DelayedAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSession"],
source: "executeOn: aSession\x0a\x09\x22Executes the block, passing itself and the session to it, in case it wants access to the action itself.\x22\x0a\x09elapsedTime := elapsedTime + 1.\x0a\x09elapsedTime = time ifTrue: [ block value: self value: aSession ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+", "ifTrue:", "=", "value:value:"]
}),
$globals.DelayedAction);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
$self.time=(0);
$self.elapsedTime=(0);
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09time := 0.\x0a\x09elapsedTime := 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.DelayedAction);

$core.addMethod(
$core.method({
selector: "shouldRequeue",
protocol: "queueing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.elapsedTime).__lt($self.time);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldRequeue",{},$globals.DelayedAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shouldRequeue\x0a\x09^ elapsedTime < time",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["<"]
}),
$globals.DelayedAction);

$core.addMethod(
$core.method({
selector: "time",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.time;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "time\x0a\x09^ time",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.DelayedAction);

$core.addMethod(
$core.method({
selector: "time:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.time=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "time: anObject\x0a\x09time := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.DelayedAction);


$core.addMethod(
$core.method({
selector: "for:do:",
protocol: "instance creation",
fn: function (someFrames,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._time_(someFrames);
$recv($1)._block_(aBlock);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"for:do:",{someFrames:someFrames,aBlock:aBlock},$globals.DelayedAction.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someFrames", "aBlock"],
source: "for: someFrames do: aBlock\x0a\x09^ self new\x0a\x09\x09time: someFrames;\x0a\x09\x09block: aBlock;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["time:", "new", "block:", "yourself"]
}),
$globals.DelayedAction.a$cls);


$core.addClass("DestroyAction", $globals.Action, ["sprite"], "Microengine");
$core.addMethod(
$core.method({
selector: "executeOn:",
protocol: "executing",
fn: function (aSession){
var self=this,$self=this;
var spr;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$5,$4,$6;
$1=$recv(aSession)._nodes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nodes"]=1;
//>>excludeEnd("ctx");
$recv($1)._keysAndValuesDo_((function(k,v){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$self._sprite();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["sprite"]=1;
//>>excludeEnd("ctx");
$2=$recv(v).__eq($3);
if($core.assert($2)){
return $recv($recv(aSession)._nodes())._remove_(k);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({k:k,v:v},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$5=$recv($recv(aSession)._app())._app();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["app"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._stage();
$6=$recv($self._sprite())._sprite();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["sprite"]=2;
//>>excludeEnd("ctx");
$recv($4)._removeChild_($6);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"executeOn:",{aSession:aSession,spr:spr},$globals.DestroyAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSession"],
source: "executeOn: aSession\x0a\x09| spr |\x0a\x09\x0a\x09aSession nodes keysAndValuesDo: [ :k :v | v = self sprite ifTrue: [ aSession nodes remove: k ] ].\x0a\x09aSession app app stage removeChild: self sprite sprite.\x0a\x09\x22self sprite die\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["keysAndValuesDo:", "nodes", "ifTrue:", "=", "sprite", "remove:", "removeChild:", "stage", "app"]
}),
$globals.DestroyAction);

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
$globals.DestroyAction);

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
$globals.DestroyAction);


$core.addMethod(
$core.method({
selector: "on:",
protocol: "as yet unclassified",
fn: function (aSprite){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._sprite_(aSprite);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aSprite:aSprite},$globals.DestroyAction.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSprite"],
source: "on: aSprite\x0a\x09^ self new\x0a\x09\x09sprite: aSprite;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sprite:", "new", "yourself"]
}),
$globals.DestroyAction.a$cls);


$core.addClass("HealthAction", $globals.Action, ["amount"], "Microengine");
$core.addMethod(
$core.method({
selector: "amount",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.amount;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "amount\x0a\x09^ amount",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HealthAction);

$core.addMethod(
$core.method({
selector: "amount:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.amount=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "amount: anObject\x0a\x09amount := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HealthAction);

$core.addMethod(
$core.method({
selector: "executeOn:",
protocol: "executing",
fn: function (aSession){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$5,$4,$3;
$2=$recv(aSession)._health();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["health"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__plus($self._amount());
$recv(aSession)._health_($1);
$5=$recv(aSession)._health();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["health"]=2;
//>>excludeEnd("ctx");
$4="Health: ".__comma($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$3=$recv($globals.ModifyMessageAction)._key_text_("health",$4);
$recv(aSession)._enqueue_($3);
$recv(console)._log_("Health: ".__comma($recv(aSession)._health()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"executeOn:",{aSession:aSession},$globals.HealthAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSession"],
source: "executeOn: aSession\x0a\x09aSession health: aSession health + self amount.\x0a\x09aSession enqueue: (ModifyMessageAction key: #health text: 'Health: ', aSession health).\x0a\x09console log: 'Health: ', aSession health",
referencedClasses: ["ModifyMessageAction"],
//>>excludeEnd("ide");
messageSends: ["health:", "+", "health", "amount", "enqueue:", "key:text:", ",", "log:"]
}),
$globals.HealthAction);


$core.addMethod(
$core.method({
selector: "worth:",
protocol: "instance creation",
fn: function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._new())._amount_(aNumber);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"worth:",{aNumber:aNumber},$globals.HealthAction.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "worth: aNumber\x0a\x09^ self new amount: aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["amount:", "new"]
}),
$globals.HealthAction.a$cls);


$core.addClass("MessageAction", $globals.Action, ["x", "y", "kind", "key", "text"], "Microengine");
$core.addMethod(
$core.method({
selector: "executeOn:",
protocol: "executing",
fn: function (aSession){
var self=this,$self=this;
var txt;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3;
txt=$recv($recv($recv($globals.Libs)._pixi())._Text())._newValue_value_($self._text(),$recv($globals.Microengine)._hudStyle());
$recv($recv($recv(aSession)._app())._stage())._addChild_(txt);
$1=$recv(aSession)._nodes();
$2=$self._key();
$4=$recv($globals.TextMessage)._on_(txt);
$recv($4)._x_($self._x());
$recv($4)._y_($self._y());
$3=$recv($4)._yourself();
return $recv($1)._at_put_($2,$3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"executeOn:",{aSession:aSession,txt:txt},$globals.MessageAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSession"],
source: "executeOn: aSession\x0a\x09| txt |\x0a\x09\x0a\x09txt := (Libs pixi Text newValue: self text value: Microengine hudStyle).\x0a\x09aSession app stage addChild: txt.\x0a\x09^ aSession nodes\x0a\x09\x09at: self key put: ((TextMessage on: txt)\x0a\x09\x09\x09x: self x;\x0a\x09\x09\x09y: self y;\x0a\x09\x09\x09yourself)",
referencedClasses: ["Libs", "Microengine", "TextMessage"],
//>>excludeEnd("ide");
messageSends: ["newValue:value:", "Text", "pixi", "text", "hudStyle", "addChild:", "stage", "app", "at:put:", "nodes", "key", "x:", "on:", "x", "y:", "y", "yourself"]
}),
$globals.MessageAction);

$core.addMethod(
$core.method({
selector: "key",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.key;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ key",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MessageAction);

$core.addMethod(
$core.method({
selector: "key:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.key=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "key: anObject\x0a\x09key := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MessageAction);

$core.addMethod(
$core.method({
selector: "style",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $globals.HashedCollection._newFromPairs_(["fontFamily","Arial","fontSize",(24),"fill",(16715792),"align","center"]);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "style\x0a\x09^ #{#fontFamily -> 'Arial'. #fontSize -> 24. #fill -> 16rff1010. #align -> 'center'}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MessageAction);

$core.addMethod(
$core.method({
selector: "text",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.text;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "text\x0a\x09^ text",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MessageAction);

$core.addMethod(
$core.method({
selector: "text:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.text=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "text: anObject\x0a\x09text := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MessageAction);

$core.addMethod(
$core.method({
selector: "x",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.x;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "x\x0a\x09^ x",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MessageAction);

$core.addMethod(
$core.method({
selector: "x:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.x=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "x: anObject\x0a\x09x := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MessageAction);

$core.addMethod(
$core.method({
selector: "y",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.y;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "y\x0a\x09^ y",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MessageAction);

$core.addMethod(
$core.method({
selector: "y:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.y=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "y: anObject\x0a\x09y := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MessageAction);


$core.addMethod(
$core.method({
selector: "key:text:x:y:",
protocol: "instance creation",
fn: function (aKey,aString,anX,aY){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._key_(aKey);
$recv($1)._text_(aString);
$recv($1)._x_(anX);
$recv($1)._y_(aY);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"key:text:x:y:",{aKey:aKey,aString:aString,anX:anX,aY:aY},$globals.MessageAction.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aString", "anX", "aY"],
source: "key: aKey text: aString x: anX y: aY\x0a\x09^ self new\x0a\x09\x09key: aKey;\x0a\x09\x09text: aString;\x0a\x09\x09x: anX;\x0a\x09\x09y: aY;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["key:", "new", "text:", "x:", "y:", "yourself"]
}),
$globals.MessageAction.a$cls);

$core.addMethod(
$core.method({
selector: "text:x:y:",
protocol: "instance creation",
fn: function (aString,anX,aY){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._key_text_x_y_($recv($recv($recv($globals.Microengine)._instance())._session())._getRandomKey(),aString,anX,aY);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"text:x:y:",{aString:aString,anX:anX,aY:aY},$globals.MessageAction.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anX", "aY"],
source: "text: aString x: anX y: aY\x0a\x09^ self key: Microengine instance session getRandomKey text: aString x: anX y: aY",
referencedClasses: ["Microengine"],
//>>excludeEnd("ide");
messageSends: ["key:text:x:y:", "getRandomKey", "session", "instance"]
}),
$globals.MessageAction.a$cls);


$core.addClass("ModifyMessageAction", $globals.Action, ["key", "message"], "Microengine");
$core.addMethod(
$core.method({
selector: "executeOn:",
protocol: "executing",
fn: function (aSession){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($recv(aSession)._nodes())._at_($self.key))._text_($self.message);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"executeOn:",{aSession:aSession},$globals.ModifyMessageAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSession"],
source: "executeOn: aSession\x0a\x09(aSession nodes at: key) text: message",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["text:", "at:", "nodes"]
}),
$globals.ModifyMessageAction);

$core.addMethod(
$core.method({
selector: "key",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.key;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ key",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ModifyMessageAction);

$core.addMethod(
$core.method({
selector: "key:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.key=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "key: anObject\x0a\x09key := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ModifyMessageAction);

$core.addMethod(
$core.method({
selector: "message",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.message;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "message\x0a\x09^ message",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ModifyMessageAction);

$core.addMethod(
$core.method({
selector: "message:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.message=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "message: anObject\x0a\x09message := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ModifyMessageAction);


$core.addMethod(
$core.method({
selector: "key:text:",
protocol: "instance creation",
fn: function (aSymbol,aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._key_(aSymbol);
$recv($1)._message_(aString);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"key:text:",{aSymbol:aSymbol,aString:aString},$globals.ModifyMessageAction.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSymbol", "aString"],
source: "key: aSymbol text: aString\x0a\x09^ self new\x0a\x09\x09key: aSymbol;\x0a\x09\x09message: aString;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["key:", "new", "message:", "yourself"]
}),
$globals.ModifyMessageAction.a$cls);


$core.addClass("MoveAction", $globals.Action, ["sprite", "dx", "dy"], "Microengine");
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
$globals.MoveAction);

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
$globals.MoveAction);

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
$globals.MoveAction);

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
$globals.MoveAction);

$core.addMethod(
$core.method({
selector: "executeOn:",
protocol: "executing",
fn: function (aSession){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._sprite())._move_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"executeOn:",{aSession:aSession},$globals.MoveAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSession"],
source: "executeOn: aSession\x0a\x09self sprite move: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["move:", "sprite"]
}),
$globals.MoveAction);

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
$globals.MoveAction);

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
$globals.MoveAction);


$core.addMethod(
$core.method({
selector: "on:dx:",
protocol: "accessing",
fn: function (aSprite,aDeltaX){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._sprite_(aSprite);
$recv($1)._dx_(aDeltaX);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:dx:",{aSprite:aSprite,aDeltaX:aDeltaX},$globals.MoveAction.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSprite", "aDeltaX"],
source: "on: aSprite dx: aDeltaX\x0a\x09^ self new\x0a\x09\x09sprite: aSprite;\x0a\x09\x09dx: aDeltaX;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sprite:", "new", "dx:", "yourself"]
}),
$globals.MoveAction.a$cls);

$core.addMethod(
$core.method({
selector: "on:dx:dy:",
protocol: "accessing",
fn: function (aSprite,aDeltaX,aDeltaY){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._sprite_(aSprite);
$recv($1)._dx_(aDeltaX);
$recv($1)._dy_(aDeltaY);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:dx:dy:",{aSprite:aSprite,aDeltaX:aDeltaX,aDeltaY:aDeltaY},$globals.MoveAction.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSprite", "aDeltaX", "aDeltaY"],
source: "on: aSprite dx: aDeltaX dy: aDeltaY\x0a\x09^ self new\x0a\x09\x09sprite: aSprite;\x0a\x09\x09dx: aDeltaX;\x0a\x09\x09dy: aDeltaY;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sprite:", "new", "dx:", "dy:", "yourself"]
}),
$globals.MoveAction.a$cls);

$core.addMethod(
$core.method({
selector: "on:dy:",
protocol: "accessing",
fn: function (aSprite,aDeltaY){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._sprite_(aSprite);
$recv($1)._dy_(aDeltaY);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:dy:",{aSprite:aSprite,aDeltaY:aDeltaY},$globals.MoveAction.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSprite", "aDeltaY"],
source: "on: aSprite dy: aDeltaY\x0a\x09^ self new\x0a\x09\x09sprite: aSprite;\x0a\x09\x09dy: aDeltaY;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sprite:", "new", "dy:", "yourself"]
}),
$globals.MoveAction.a$cls);


$core.addClass("ScoreAction", $globals.Action, ["amount"], "Microengine");
$core.addMethod(
$core.method({
selector: "amount",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.amount;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "amount\x0a\x09^ amount",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ScoreAction);

$core.addMethod(
$core.method({
selector: "amount:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.amount=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "amount: anObject\x0a\x09amount := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ScoreAction);

$core.addMethod(
$core.method({
selector: "executeOn:",
protocol: "executing",
fn: function (aSession){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$5,$4,$3;
$2=$recv(aSession)._score();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["score"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__plus($self._amount());
$recv(aSession)._score_($1);
$5=$recv(aSession)._score();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["score"]=2;
//>>excludeEnd("ctx");
$4="Score: ".__comma($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$3=$recv($globals.ModifyMessageAction)._key_text_("score",$4);
$recv(aSession)._enqueue_($3);
$recv(console)._log_("Score: ".__comma($recv(aSession)._score()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"executeOn:",{aSession:aSession},$globals.ScoreAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSession"],
source: "executeOn: aSession\x0a\x09aSession score: aSession score + self amount.\x0a\x09aSession enqueue: (ModifyMessageAction key: #score text: 'Score: ', aSession score).\x0a\x09console log: 'Score: ', aSession score",
referencedClasses: ["ModifyMessageAction"],
//>>excludeEnd("ide");
messageSends: ["score:", "+", "score", "amount", "enqueue:", "key:text:", ",", "log:"]
}),
$globals.ScoreAction);


$core.addMethod(
$core.method({
selector: "worth:",
protocol: "instance creation",
fn: function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._new())._amount_(aNumber);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"worth:",{aNumber:aNumber},$globals.ScoreAction.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "worth: aNumber\x0a\x09^ self new amount: aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["amount:", "new"]
}),
$globals.ScoreAction.a$cls);


$core.addClass("SpawnAction", $globals.Action, ["x", "y", "kind", "key", "texture", "forced", "fuzzy"], "Microengine");
$core.addMethod(
$core.method({
selector: "beForced",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
$self.forced=true;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "beForced\x0a\x09forced := true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SpawnAction);

$core.addMethod(
$core.method({
selector: "beFuzzy",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
$self.fuzzy=true;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "beFuzzy\x0a\x09fuzzy := true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SpawnAction);

$core.addMethod(
$core.method({
selector: "executeOn:",
protocol: "executing",
fn: function (aSession){
var self=this,$self=this;
var cellContents;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$2,$5,$6,$10,$9,$8,$7,$11,$12,$13,$14,$16,$15,$receiver;
$1=$recv(aSession)._grid();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["grid"]=1;
//>>excludeEnd("ctx");
$3=$self._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$4=$self._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__at($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
cellContents=$recv($1)._atPoint_($2);
$5=$recv($recv(cellContents)._isNil())._or_((function(){
return $self.forced;

}));
if($core.assert($5)){
var spr,obj;
$6=$recv($recv($globals.Libs)._pixi())._Sprite();
$10=$recv(aSession)._app();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["app"]=1;
//>>excludeEnd("ctx");
$9=$recv($10)._assets();
$8=$recv($9)._at_($self._texture());
$7=$recv($8)._texture();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["texture"]=1;
//>>excludeEnd("ctx");
spr=$recv($6)._newValue_($7);
$11=$recv($self._kind())._on_(spr);
$12=$self._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=2;
//>>excludeEnd("ctx");
$recv($11)._x_($12);
$13=$self._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=2;
//>>excludeEnd("ctx");
$recv($11)._y_($13);
obj=$recv($11)._yourself();
$14=cellContents;
if(($receiver = $14) == null || $receiver.a$nil){
$14;
} else {
$16=$recv(aSession)._app();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["app"]=2;
//>>excludeEnd("ctx");
$15=$recv($16)._stage();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["stage"]=1;
//>>excludeEnd("ctx");
$recv($15)._removeChild_($recv(cellContents)._sprite());
}
$recv($recv(aSession)._grid())._atPoint_put_($recv($self._x()).__at($self._y()),obj);
$recv($recv($recv(aSession)._app())._stage())._addChild_(spr);
$recv($recv(aSession)._nodes())._at_put_($self._key(),obj);
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"executeOn:",{aSession:aSession,cellContents:cellContents},$globals.SpawnAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSession"],
source: "executeOn: aSession\x0a\x09\x22only spawn things if the space is empty\x22\x0a\x09| cellContents |\x0a\x0a\x09cellContents := (aSession grid atPoint: self x @ self y).\x0a\x09(cellContents isNil or: [ forced ]) ifTrue: [\x0a\x09\x09| spr obj |\x0a\x09\x09\x0a\x09\x09spr := (Libs pixi Sprite newValue: (aSession app assets at: self texture) texture).\x0a\x09\x09obj := ((self kind on: spr)\x0a\x09\x09\x09\x09x: self x;\x0a\x09\x09\x09\x09y: self y;\x0a\x09\x09\x09\x09yourself).\x0a\x09\x09cellContents ifNotNil: [ aSession app stage removeChild: cellContents sprite ].\x0a\x09\x09aSession grid atPoint: self x @ self y put: obj.\x0a\x09\x09aSession app stage addChild: spr.\x0a\x09\x09aSession nodes at: self key put: obj ]",
referencedClasses: ["Libs"],
//>>excludeEnd("ide");
messageSends: ["atPoint:", "grid", "@", "x", "y", "ifTrue:", "or:", "isNil", "newValue:", "Sprite", "pixi", "texture", "at:", "assets", "app", "x:", "on:", "kind", "y:", "yourself", "ifNotNil:", "removeChild:", "stage", "sprite", "atPoint:put:", "addChild:", "at:put:", "nodes", "key"]
}),
$globals.SpawnAction);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "executing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.SpawnAction.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$self.fuzzy=false;
$self.forced=false;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.SpawnAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09fuzzy := false.\x0a\x09forced := false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.SpawnAction);

$core.addMethod(
$core.method({
selector: "key",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.key;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ key",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SpawnAction);

$core.addMethod(
$core.method({
selector: "key:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.key=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "key: anObject\x0a\x09key := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SpawnAction);

$core.addMethod(
$core.method({
selector: "kind",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.kind;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "kind\x0a\x09^ kind",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SpawnAction);

$core.addMethod(
$core.method({
selector: "kind:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.kind=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "kind: anObject\x0a\x09kind := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SpawnAction);

$core.addMethod(
$core.method({
selector: "texture",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.texture;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "texture\x0a\x09^ texture",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SpawnAction);

$core.addMethod(
$core.method({
selector: "texture:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.texture=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "texture: anObject\x0a\x09texture := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SpawnAction);

$core.addMethod(
$core.method({
selector: "x",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.x;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "x\x0a\x09^ x",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SpawnAction);

$core.addMethod(
$core.method({
selector: "x:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.x=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "x: anObject\x0a\x09x := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SpawnAction);

$core.addMethod(
$core.method({
selector: "y",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.y;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "y\x0a\x09^ y",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SpawnAction);

$core.addMethod(
$core.method({
selector: "y:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.y=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "y: anObject\x0a\x09y := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SpawnAction);


$core.addMethod(
$core.method({
selector: "key:kind:texture:x:y:",
protocol: "instance creation",
fn: function (aKey,aClass,aTexture,anX,aY){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._key_(aKey);
$recv($1)._kind_(aClass);
$recv($1)._texture_(aTexture);
$recv($1)._x_(anX);
$recv($1)._y_(aY);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"key:kind:texture:x:y:",{aKey:aKey,aClass:aClass,aTexture:aTexture,anX:anX,aY:aY},$globals.SpawnAction.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aClass", "aTexture", "anX", "aY"],
source: "key: aKey kind: aClass texture: aTexture x: anX y: aY\x0a\x09^ self new\x0a\x09\x09key: aKey;\x0a\x09\x09kind: aClass;\x0a\x09\x09texture: aTexture;\x0a\x09\x09x: anX;\x0a\x09\x09y: aY;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["key:", "new", "kind:", "texture:", "x:", "y:", "yourself"]
}),
$globals.SpawnAction.a$cls);

$core.addMethod(
$core.method({
selector: "kind:texture:x:y:",
protocol: "instance creation",
fn: function (aClass,aTexture,anX,aY){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._key_kind_texture_x_y_($recv($recv($recv($globals.Microengine)._instance())._session())._getRandomKey(),aClass,aTexture,anX,aY);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"kind:texture:x:y:",{aClass:aClass,aTexture:aTexture,anX:anX,aY:aY},$globals.SpawnAction.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aTexture", "anX", "aY"],
source: "kind: aClass texture: aTexture x: anX y: aY\x0a\x09^ self key: Microengine instance session getRandomKey kind: aClass texture: aTexture x: anX y: aY",
referencedClasses: ["Microengine"],
//>>excludeEnd("ide");
messageSends: ["key:kind:texture:x:y:", "getRandomKey", "session", "instance"]
}),
$globals.SpawnAction.a$cls);


$core.addClass("TimerAction", $globals.Action, ["time", "elapsedTime", "block"], "Microengine");
$core.addMethod(
$core.method({
selector: "block",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.block;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "block\x0a\x09^ block",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TimerAction);

$core.addMethod(
$core.method({
selector: "block:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.block=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "block: anObject\x0a\x09block := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TimerAction);

$core.addMethod(
$core.method({
selector: "elapsedTime",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.elapsedTime;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "elapsedTime\x0a\x09^ elapsedTime",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TimerAction);

$core.addMethod(
$core.method({
selector: "elapsedTime:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.elapsedTime=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "elapsedTime: anObject\x0a\x09elapsedTime := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TimerAction);

$core.addMethod(
$core.method({
selector: "executeOn:",
protocol: "executing",
fn: function (aSession){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.block)._value_value_(self,aSession);
$self.elapsedTime=$recv($self.elapsedTime).__plus((1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"executeOn:",{aSession:aSession},$globals.TimerAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSession"],
source: "executeOn: aSession\x0a\x09\x22Executes the block, passing itself and the session to it, in case it wants access to the action itself.\x22\x0a\x09block value: self value: aSession.\x0a\x09elapsedTime := elapsedTime + 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:value:", "+"]
}),
$globals.TimerAction);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
$self.time=(0);
$self.elapsedTime=(0);
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09time := 0.\x0a\x09elapsedTime := 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TimerAction);

$core.addMethod(
$core.method({
selector: "shouldRequeue",
protocol: "queueing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.elapsedTime).__lt($self.time);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldRequeue",{},$globals.TimerAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shouldRequeue\x0a\x09^ elapsedTime < time",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["<"]
}),
$globals.TimerAction);

$core.addMethod(
$core.method({
selector: "time",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.time;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "time\x0a\x09^ time",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TimerAction);

$core.addMethod(
$core.method({
selector: "time:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.time=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "time: anObject\x0a\x09time := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TimerAction);


$core.addMethod(
$core.method({
selector: "for:do:",
protocol: "instance creation",
fn: function (someFrames,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._time_(someFrames);
$recv($1)._block_(aBlock);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"for:do:",{someFrames:someFrames,aBlock:aBlock},$globals.TimerAction.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someFrames", "aBlock"],
source: "for: someFrames do: aBlock\x0a\x09^ self new\x0a\x09\x09time: someFrames;\x0a\x09\x09block: aBlock;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["time:", "new", "block:", "yourself"]
}),
$globals.TimerAction.a$cls);


$core.addClass("GameSession", $globals.Object, ["nodes", "app", "explorer", "treasure", "actions", "score", "health", "grid"], "Microengine");
$core.addMethod(
$core.method({
selector: "actions",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self.actions;
if(($receiver = $1) == null || $receiver.a$nil){
$self.actions=$recv($globals.Queue)._new();
return $self.actions;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"actions",{},$globals.GameSession)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "actions\x0a\x09^ actions ifNil: [ actions := Queue new ]",
referencedClasses: ["Queue"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.GameSession);

$core.addMethod(
$core.method({
selector: "addCoin",
protocol: "sprites",
fn: function (){
var self=this,$self=this;
var pos;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$5,$4,$3,$2;
$1=$self.grid;
$5=$recv($self.app)._renderer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["renderer"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._width();
$3=$recv($4)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atRandom"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__at($recv($recv($recv($self.app)._renderer())._height())._atRandom());
pos=$recv($1)._clampPoint_($2);
$self._enqueue_($recv($globals.SpawnAction)._kind_texture_x_y_($globals.Coin,"coin",$recv(pos)._x(),$recv(pos)._y()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addCoin",{pos:pos},$globals.GameSession)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addCoin\x0a\x09| pos |\x0a\x09\x0a\x09pos := grid clampPoint: app renderer width atRandom @ app renderer height atRandom.\x0a\x09self enqueue: (SpawnAction kind: Coin texture: #coin x: pos x y: pos y)",
referencedClasses: ["SpawnAction", "Coin"],
//>>excludeEnd("ide");
messageSends: ["clampPoint:", "@", "atRandom", "width", "renderer", "height", "enqueue:", "kind:texture:x:y:", "x", "y"]
}),
$globals.GameSession);

$core.addMethod(
$core.method({
selector: "addExplorer",
protocol: "sprites",
fn: function (){
var self=this,$self=this;
var pos;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$5,$4,$3,$2;
$1=$self.grid;
$5=$recv($self.app)._renderer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["renderer"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._width();
$3=$recv($4).__slash((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__at($recv($recv($recv($self.app)._renderer())._height()).__slash((2)));
pos=$recv($1)._clampPoint_($2);
$self._enqueue_($recv($recv($globals.SpawnAction)._key_kind_texture_x_y_("explorer",$globals.Explorer,"explorer",$recv(pos)._x(),$recv(pos)._y()))._beForced());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addExplorer",{pos:pos},$globals.GameSession)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addExplorer\x0a\x09| pos |\x0a\x09\x0a\x09pos := grid clampPoint: (app renderer width / 2) @ (app renderer height / 2).\x0a\x09self enqueue: (SpawnAction key: #explorer kind: Explorer texture: #explorer x: pos x y: pos y) beForced",
referencedClasses: ["SpawnAction", "Explorer"],
//>>excludeEnd("ide");
messageSends: ["clampPoint:", "@", "/", "width", "renderer", "height", "enqueue:", "beForced", "key:kind:texture:x:y:", "x", "y"]
}),
$globals.GameSession);

$core.addMethod(
$core.method({
selector: "addHealth",
protocol: "sprites",
fn: function (){
var self=this,$self=this;
var spr;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
spr=$recv($recv($recv($globals.Libs)._pixi())._Text())._newValue_value_("Health: ".__comma($self.health),$recv($globals.Microengine)._hudStyle());
$1=spr;
$recv($1)._x_((8));
$recv($1)._y_((40));
$recv($recv($recv($self.app)._app())._stage())._addChild_(spr);
return $recv($globals.TextMessage)._on_(spr);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addHealth",{spr:spr},$globals.GameSession)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addHealth\x0a\x09| spr |\x0a\x09\x0a\x09spr := (Libs pixi Text newValue: 'Health: ', health value: Microengine hudStyle).\x0a\x09spr x: 8; y: 40.\x0a\x09app app stage addChild: spr.\x0a\x09^ TextMessage on: spr",
referencedClasses: ["Libs", "Microengine", "TextMessage"],
//>>excludeEnd("ide");
messageSends: ["newValue:value:", "Text", "pixi", ",", "hudStyle", "x:", "y:", "addChild:", "stage", "app", "on:"]
}),
$globals.GameSession);

$core.addMethod(
$core.method({
selector: "addScore",
protocol: "sprites",
fn: function (){
var self=this,$self=this;
var spr;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
spr=$recv($recv($recv($globals.Libs)._pixi())._Text())._newValue_value_("Score: ".__comma($self.score),$recv($globals.Microengine)._hudStyle());
$1=spr;
$recv($1)._x_((8));
$recv($1)._y_((8));
$recv($recv($recv($self.app)._app())._stage())._addChild_(spr);
return $recv($globals.TextMessage)._on_(spr);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addScore",{spr:spr},$globals.GameSession)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addScore\x0a\x09| spr |\x0a\x09\x0a\x09spr := (Libs pixi Text newValue: 'Score: ', score value: Microengine hudStyle).\x0a\x09spr x: 8; y: 8.\x0a\x09app app stage addChild: spr.\x0a\x09^ TextMessage on: spr",
referencedClasses: ["Libs", "Microengine", "TextMessage"],
//>>excludeEnd("ide");
messageSends: ["newValue:value:", "Text", "pixi", ",", "hudStyle", "x:", "y:", "addChild:", "stage", "app", "on:"]
}),
$globals.GameSession);

$core.addMethod(
$core.method({
selector: "addSlime",
protocol: "sprites",
fn: function (){
var self=this,$self=this;
var pos;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$5,$4,$3,$2;
$1=$self.grid;
$5=$recv($self.app)._renderer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["renderer"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._width();
$3=$recv($4)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atRandom"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__at($recv($recv($recv($self.app)._renderer())._height())._atRandom());
pos=$recv($1)._clampPoint_($2);
$self._enqueue_($recv($globals.SpawnAction)._kind_texture_x_y_($globals.Slime,"slime",$recv(pos)._x(),$recv(pos)._y()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addSlime",{pos:pos},$globals.GameSession)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addSlime\x0a\x09| pos |\x0a\x09\x0a\x09pos := grid clampPoint: app renderer width atRandom @ app renderer height atRandom.\x0a\x09self enqueue: (SpawnAction kind: Slime texture: #slime x: pos x y: pos y)",
referencedClasses: ["SpawnAction", "Slime"],
//>>excludeEnd("ide");
messageSends: ["clampPoint:", "@", "atRandom", "width", "renderer", "height", "enqueue:", "kind:texture:x:y:", "x", "y"]
}),
$globals.GameSession);

$core.addMethod(
$core.method({
selector: "addSpawner",
protocol: "sprites",
fn: function (){
var self=this,$self=this;
var pos;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$5,$4,$3,$2;
$1=$self.grid;
$5=$recv($self.app)._renderer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["renderer"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._width();
$3=$recv($4)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atRandom"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__at($recv($recv($recv($self.app)._renderer())._height())._atRandom());
pos=$recv($1)._clampPoint_($2);
$self._enqueue_($recv($globals.SpawnAction)._kind_texture_x_y_($globals.Spawner,"coin",$recv(pos)._x(),$recv(pos)._y()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addSpawner",{pos:pos},$globals.GameSession)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addSpawner\x0a\x09| pos |\x0a\x09\x0a\x09pos := grid clampPoint: app renderer width atRandom @ app renderer height atRandom.\x0a\x09self enqueue: (SpawnAction kind: Spawner texture: #coin x: pos x y: pos y)",
referencedClasses: ["SpawnAction", "Spawner"],
//>>excludeEnd("ide");
messageSends: ["clampPoint:", "@", "atRandom", "width", "renderer", "height", "enqueue:", "kind:texture:x:y:", "x", "y"]
}),
$globals.GameSession);

$core.addMethod(
$core.method({
selector: "addTime",
protocol: "sprites",
fn: function (){
var self=this,$self=this;
var spr;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$3,$2;
spr=$recv($recv($recv($globals.Libs)._pixi())._Text())._newValue_value_("Time:",$recv($globals.Microengine)._hudStyle());
$1=spr;
$4=$recv($recv($self.app)._renderer())._width();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["width"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__minus($recv(spr)._width());
$2=$recv($3).__minus((8));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$recv($1)._x_($2);
$recv($1)._y_((8));
$recv($recv($recv($self.app)._app())._stage())._addChild_(spr);
return $recv($globals.TextMessage)._on_(spr);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addTime",{spr:spr},$globals.GameSession)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addTime\x0a\x09| spr |\x0a\x09\x0a\x09spr := (Libs pixi Text newValue: 'Time:' value: Microengine hudStyle).\x0a\x09spr x: app renderer width - spr width - 8; y: 8.\x0a\x09app app stage addChild: spr.\x0a\x09^ TextMessage on: spr",
referencedClasses: ["Libs", "Microengine", "TextMessage"],
//>>excludeEnd("ide");
messageSends: ["newValue:value:", "Text", "pixi", "hudStyle", "x:", "-", "width", "renderer", "y:", "addChild:", "stage", "app", "on:"]
}),
$globals.GameSession);

$core.addMethod(
$core.method({
selector: "addTreasure",
protocol: "sprites",
fn: function (){
var self=this,$self=this;
var pos;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$5,$4,$3,$2;
$1=$self.grid;
$5=$recv($self.app)._renderer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["renderer"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._width();
$3=$recv($4)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atRandom"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__at($recv($recv($recv($self.app)._renderer())._height())._atRandom());
pos=$recv($1)._clampPoint_($2);
$self._enqueue_($recv($recv($globals.SpawnAction)._key_kind_texture_x_y_("treasure",$globals.Treasure,"treasure",$recv(pos)._x(),$recv(pos)._y()))._beForced());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addTreasure",{pos:pos},$globals.GameSession)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addTreasure\x0a\x09| pos |\x0a\x09\x0a\x09pos := grid clampPoint: app renderer width atRandom @ app renderer height atRandom.\x0a\x09self enqueue: (SpawnAction key: #treasure kind: Treasure texture: #treasure x: pos x y: pos y) beForced",
referencedClasses: ["SpawnAction", "Treasure"],
//>>excludeEnd("ide");
messageSends: ["clampPoint:", "@", "atRandom", "width", "renderer", "height", "enqueue:", "beForced", "key:kind:texture:x:y:", "x", "y"]
}),
$globals.GameSession);

$core.addMethod(
$core.method({
selector: "addWalls",
protocol: "sprites",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$5,$4,$3,$2;
(15)._timesRepeat_((function(){
var pos;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$self.grid;
$5=$recv($self.app)._renderer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["renderer"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._width();
$3=$recv($4)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["atRandom"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__at($recv($recv($recv($self.app)._renderer())._height())._atRandom());
pos=$recv($1)._clampPoint_($2);
return $self._enqueue_($recv($globals.SpawnAction)._kind_texture_x_y_($globals.Wall,"wall",$recv(pos)._x(),$recv(pos)._y()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({pos:pos},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addWalls",{},$globals.GameSession)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addWalls\x0a\x0915 timesRepeat: [\x0a\x09\x09| pos |\x0a\x0a\x09\x09pos := grid clampPoint: app renderer width atRandom @ app renderer height atRandom.\x0a\x09\x09self enqueue: (SpawnAction kind: Wall texture: #wall x: pos x y: pos y) ]",
referencedClasses: ["SpawnAction", "Wall"],
//>>excludeEnd("ide");
messageSends: ["timesRepeat:", "clampPoint:", "@", "atRandom", "width", "renderer", "height", "enqueue:", "kind:texture:x:y:", "x", "y"]
}),
$globals.GameSession);

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
$globals.GameSession);

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
$globals.GameSession);

$core.addMethod(
$core.method({
selector: "checkCollisions",
protocol: "colliding",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3;
$recv($self.nodes)._keysAndValuesDo_((function(outerKey,outerEach){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self.nodes)._keysAndValuesDo_((function(innerKey,innerEach){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$1=$recv($recv($recv(innerKey).__tild_eq(outerKey))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(innerEach)._collidesWith_(outerEach);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
})))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(innerEach)._overlaps_(outerEach);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["and:"]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
$2=console;
$4=$recv("#".__comma(innerKey)).__comma(" colliding with #");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx[","]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__comma(outerKey);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($2)._log_($3);
return $recv(innerEach)._collideWith_on_(outerEach,self);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({innerKey:innerKey,innerEach:innerEach},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({outerKey:outerKey,outerEach:outerEach},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["keysAndValuesDo:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"checkCollisions",{},$globals.GameSession)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "checkCollisions\x0a\x09nodes keysAndValuesDo: [ :outerKey :outerEach |\x0a\x09\x09nodes keysAndValuesDo: [ :innerKey :innerEach |\x0a\x09\x09\x09((innerKey ~= outerKey\x0a\x09\x09\x09\x09and: [ innerEach collidesWith: outerEach ])\x0a\x09\x09\x09\x09\x09and: [ innerEach overlaps: outerEach ])\x0a\x09\x09\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09\x09\x09console log: '#', innerKey, ' colliding with #', outerKey.\x0a\x09\x09\x09\x09\x09\x09\x09innerEach collideWith: outerEach on: self ] ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["keysAndValuesDo:", "ifTrue:", "and:", "~=", "collidesWith:", "overlaps:", "log:", ",", "collideWith:on:"]
}),
$globals.GameSession);

$core.addMethod(
$core.method({
selector: "enqueue:",
protocol: "queueing",
fn: function (anAction){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._actions())._nextPut_(anAction);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"enqueue:",{anAction:anAction},$globals.GameSession)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAction"],
source: "enqueue: anAction\x0a\x09^ self actions nextPut: anAction",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPut:", "actions"]
}),
$globals.GameSession);

$core.addMethod(
$core.method({
selector: "executeActions",
protocol: "queueing",
fn: function (){
var self=this,$self=this;
var action,newQueue;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
newQueue=$recv($globals.Queue)._new();
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
action=$recv($self._actions())._nextIfAbsent_((function(){

}));
$1=action;
return $recv($1)._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(action)._executeOn_(self);
$2=$recv(action)._shouldRequeue();
if($core.assert($2)){
return $recv(newQueue)._nextPut_(action);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$self.actions=newQueue;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"executeActions",{action:action,newQueue:newQueue},$globals.GameSession)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "executeActions\x0a\x09| action newQueue |\x0a\x09\x0a\x09newQueue := Queue new.\x0a\x09[ (action := self actions nextIfAbsent: [ ]) notNil ]\x0a\x09\x09whileTrue: [\x0a\x09\x09\x09action executeOn: self.\x0a\x09\x09\x09action shouldRequeue ifTrue: [ newQueue nextPut: action ] ].\x0a\x09actions := newQueue",
referencedClasses: ["Queue"],
//>>excludeEnd("ide");
messageSends: ["new", "whileTrue:", "notNil", "nextIfAbsent:", "actions", "executeOn:", "ifTrue:", "shouldRequeue", "nextPut:"]
}),
$globals.GameSession);

$core.addMethod(
$core.method({
selector: "gameLoop:",
protocol: "action",
fn: function (aDelta){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
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
$self._executeActions();
$1=$recv($self.health).__lt((1));
if($core.assert($1)){
$self._stop();
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gameLoop:",{aDelta:aDelta},$globals.GameSession)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDelta"],
source: "gameLoop: aDelta\x0a\x09\x22do something :-D\x22\x0a\x09nodes do: [ :each | each update ].\x0a\x09self checkCollisions.\x0a\x09self executeActions.\x0a\x09health < 1 ifTrue: [ self stop ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "update", "checkCollisions", "executeActions", "ifTrue:", "<", "stop"]
}),
$globals.GameSession);

$core.addMethod(
$core.method({
selector: "getRandomKey",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
var str;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$self.nodes;
str=$recv($globals.String)._random();
$2=str;
return $recv($1)._includesKey_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileTrue();
return str;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getRandomKey",{str:str},$globals.GameSession)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "getRandomKey\x0a\x09| str |\x0a\x09\x0a\x09[ nodes includesKey: (str := String random) ] whileTrue.\x0a\x09^ str",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["whileTrue", "includesKey:", "random"]
}),
$globals.GameSession);

$core.addMethod(
$core.method({
selector: "grid",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.grid;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "grid\x0a\x09^ grid",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.GameSession);

$core.addMethod(
$core.method({
selector: "health",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.health;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "health\x0a\x09^ health",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.GameSession);

$core.addMethod(
$core.method({
selector: "health:",
protocol: "accessing",
fn: function (aNumber){
var self=this,$self=this;
$self.health=aNumber;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "health: aNumber\x0a\x09health := aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.GameSession);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
$self.score=(0);
$self.health=(100);
$3=$recv($self.app)._stage();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["stage"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._width();
$1=$recv($2).__at($recv($recv($self.app)._stage())._height());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$self.grid=$recv($globals.Grid)._size_cellSize_($1,(32).__at((32)));
$self.nodes=$recv($globals.Dictionary)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.GameSession)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09score := 0.\x0a\x09health := 100.\x0a\x09grid := Grid size: app stage width @ app stage height cellSize: 32@32.\x0a\x09nodes := Dictionary new",
referencedClasses: ["Grid", "Dictionary"],
//>>excludeEnd("ide");
messageSends: ["size:cellSize:", "@", "width", "stage", "height", "new"]
}),
$globals.GameSession);

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
$globals.GameSession);

$core.addMethod(
$core.method({
selector: "score",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.score;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "score\x0a\x09^ score",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.GameSession);

$core.addMethod(
$core.method({
selector: "score:",
protocol: "accessing",
fn: function (aNumber){
var self=this,$self=this;
$self.score=aNumber;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "score: aNumber\x0a\x09score := aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.GameSession);

$core.addMethod(
$core.method({
selector: "setup",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($self._setupGameElements())._setupHUD())._setupKeys();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setup",{},$globals.GameSession)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setup\x0a\x09self setupGameElements setupHUD setupKeys",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setupKeys", "setupHUD", "setupGameElements"]
}),
$globals.GameSession);

$core.addMethod(
$core.method({
selector: "setupGameElements",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._addTreasure();
$self._addWalls();
$self._addExplorer();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupGameElements",{},$globals.GameSession)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupGameElements\x0a\x09self addTreasure.\x0a\x09self addWalls.\x0a\x09self addExplorer",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addTreasure", "addWalls", "addExplorer"]
}),
$globals.GameSession);

$core.addMethod(
$core.method({
selector: "setupHUD",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.nodes;
$recv($1)._addAll_($globals.HashedCollection._newFromPairs_(["score",$self._addScore(),"health",$self._addHealth()]));
$recv($1)._yourself();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupHUD",{},$globals.GameSession)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupHUD\x0a\x09nodes addAll: #{\x0a\x09\x09\x09#score -> self addScore.\x0a\x09\x09\x09#health -> self addHealth };\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addAll:", "addScore", "addHealth", "yourself"]
}),
$globals.GameSession);

$core.addMethod(
$core.method({
selector: "setupKeys",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$6,$5;
$recv($globals.Key)._code_onPress_onRelease_((37),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv($self.nodes)._at_("explorer");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$1=$recv($globals.MoveAction)._on_dx_($2,(-5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["on:dx:"]=1;
//>>excludeEnd("ctx");
return $self._enqueue_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["enqueue:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
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
$4=$recv($self.nodes)._at_("explorer");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
$3=$recv($globals.MoveAction)._on_dx_($4,(5));
return $self._enqueue_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["enqueue:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
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
$6=$recv($self.nodes)._at_("explorer");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=3;
//>>excludeEnd("ctx");
$5=$recv($globals.MoveAction)._on_dy_($6,(-5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["on:dy:"]=1;
//>>excludeEnd("ctx");
return $self._enqueue_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["enqueue:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)});
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
return $self._enqueue_($recv($globals.MoveAction)._on_dy_($recv($self.nodes)._at_("explorer"),(5)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,7)});
//>>excludeEnd("ctx");
}),(function(){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupKeys",{},$globals.GameSession)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupKeys\x0a\x09Key\x0a\x09\x09code: 37 onPress: [ self enqueue: (MoveAction on: (nodes at: #explorer) dx: -5) ] onRelease: [ ];\x0a\x09\x09code: 39 onPress: [ self enqueue: (MoveAction on: (nodes at: #explorer) dx: 5) ] onRelease: [ ];\x0a\x09\x09code: 38 onPress: [ self enqueue: (MoveAction on: (nodes at: #explorer) dy: -5) ] onRelease: [ ];\x0a\x09\x09code: 40 onPress: [ self enqueue: (MoveAction on: (nodes at: #explorer) dy: 5) ] onRelease: [ ]",
referencedClasses: ["Key", "MoveAction"],
//>>excludeEnd("ide");
messageSends: ["code:onPress:onRelease:", "enqueue:", "on:dx:", "at:", "on:dy:"]
}),
$globals.GameSession);

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
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.GameSession)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09app ticker add: [ :delta | self gameLoop: delta ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "ticker", "gameLoop:"]
}),
$globals.GameSession);

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
}, function($ctx1) {$ctx1.fill(self,"stop",{},$globals.GameSession)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stop\x0a\x09app ticker stop",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["stop", "ticker"]
}),
$globals.GameSession);


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
}, function($ctx1) {$ctx1.fill(self,"on:",{anApplication:anApplication},$globals.GameSession.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anApplication"],
source: "on: anApplication\x0a\x09^ self basicNew\x0a\x09\x09app: anApplication;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["app:", "basicNew", "initialize", "yourself"]
}),
$globals.GameSession.a$cls);


$core.addClass("Grid", $globals.Object, ["width", "height", "cellWidth", "cellHeight", "contents"], "Microengine");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Grid.comment="I represent a grid over a rectangular area.\x0a\x0aI can translate between cell and point coordinates.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "at:",
protocol: "grid",
fn: function (aCell){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.contents)._at_ifAbsent_(aCell,(function(){

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{aCell:aCell},$globals.Grid)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell"],
source: "at: aCell\x0a\x09^ contents at: aCell ifAbsent: [ ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:"]
}),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "at:put:",
protocol: "grid",
fn: function (aCell,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.contents)._at_put_(aCell,anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:put:",{aCell:aCell,anObject:anObject},$globals.Grid)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell", "anObject"],
source: "at: aCell put: anObject\x0a\x09^ contents at: aCell put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "atPoint:",
protocol: "grid",
fn: function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.contents)._at_ifAbsent_($self._cellForPoint_(aPoint),(function(){

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atPoint:",{aPoint:aPoint},$globals.Grid)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "atPoint: aPoint\x0a\x09^ contents at: (self cellForPoint: aPoint) ifAbsent: [ ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "cellForPoint:"]
}),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "atPoint:put:",
protocol: "grid",
fn: function (aPoint,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.contents)._at_put_($self._cellForPoint_(aPoint),anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atPoint:put:",{aPoint:aPoint,anObject:anObject},$globals.Grid)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint", "anObject"],
source: "atPoint: aPoint put: anObject\x0a\x09^ contents at: (self cellForPoint: aPoint) put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "cellForPoint:"]
}),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "cellForPoint:",
protocol: "calculating",
fn: function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$2,$1;
$4=$recv($recv(aPoint)._x()).__minus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__slash($self.cellWidth);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._floor();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["floor"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
return $recv($1).__at($recv($recv($recv($recv($recv(aPoint)._y()).__minus((1))).__slash($self.cellHeight))._floor()).__plus((1)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cellForPoint:",{aPoint:aPoint},$globals.Grid)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "cellForPoint: aPoint\x0a\x09^ ((aPoint x - 1 / cellWidth) floor + 1) @ ((aPoint y - 1 / cellHeight) floor + 1)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["@", "+", "floor", "/", "-", "x", "y"]
}),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "cellHeight",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.cellHeight;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cellHeight\x0a\x09^ cellHeight",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "cellHeight:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.cellHeight=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "cellHeight: anObject\x0a\x09cellHeight := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "cellWidth",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.cellWidth;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cellWidth\x0a\x09^ cellWidth",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "cellWidth:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.cellWidth=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "cellWidth: anObject\x0a\x09cellWidth := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "clampPoint:",
protocol: "calculating",
fn: function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._pointForCell_($self._cellForPoint_(aPoint));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clampPoint:",{aPoint:aPoint},$globals.Grid)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "clampPoint: aPoint\x0a\x09^ self pointForCell: (self cellForPoint: aPoint)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["pointForCell:", "cellForPoint:"]
}),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "clear:",
protocol: "grid",
fn: function (aCell){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.contents)._removeKey_ifAbsent_(aCell,(function(){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clear:",{aCell:aCell},$globals.Grid)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell"],
source: "clear: aCell\x0a\x09contents removeKey: aCell ifAbsent: [ ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeKey:ifAbsent:"]
}),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "clearPoint:",
protocol: "grid",
fn: function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.contents)._removeKey_ifAbsent_($self._cellForPoint_(aPoint),(function(){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clearPoint:",{aPoint:aPoint},$globals.Grid)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "clearPoint: aPoint\x0a\x09contents removeKey: (self cellForPoint: aPoint) ifAbsent: [ ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeKey:ifAbsent:", "cellForPoint:"]
}),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "height",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.height;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "height\x0a\x09^ height",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "height:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.height=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "height: anObject\x0a\x09height := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "heightInCells",
protocol: "calculating",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self.height).__slash($self.cellHeight))._floor();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"heightInCells",{},$globals.Grid)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "heightInCells\x0a\x09^ (height / cellHeight) floor",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["floor", "/"]
}),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.contents=$recv($globals.Dictionary)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Grid)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09contents := Dictionary new",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "pointForCell:",
protocol: "calculating",
fn: function (aCell){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=$recv($recv(aCell)._x()).__minus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__star($self.cellWidth);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
return $recv($1).__at($recv($recv($recv($recv(aCell)._y()).__minus((1))).__star($self.cellHeight)).__plus((1)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pointForCell:",{aCell:aCell},$globals.Grid)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell"],
source: "pointForCell: aCell\x0a\x09^ ((aCell x - 1 * cellWidth) + 1) @ ((aCell y - 1 * cellHeight) + 1)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["@", "+", "*", "-", "x", "y"]
}),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "sizeInCells",
protocol: "calculating",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._horizontalCells()).__at($self._verticalCells());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sizeInCells",{},$globals.Grid)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sizeInCells\x0a\x09^ self horizontalCells @ self verticalCells",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["@", "horizontalCells", "verticalCells"]
}),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "width",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.width;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "width\x0a\x09^ width",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "width:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.width=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "width: anObject\x0a\x09width := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "widthInCells",
protocol: "calculating",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self.width).__slash($self.cellWidth))._floor();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"widthInCells",{},$globals.Grid)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "widthInCells\x0a\x09^ (width / cellWidth) floor",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["floor", "/"]
}),
$globals.Grid);


$core.addMethod(
$core.method({
selector: "new",
protocol: "instance creation",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv("Use #size:cellSize: to create ".__comma($recv($self._class())._name())).__comma(" instances");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$self._error_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{},$globals.Grid.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09self error: 'Use #size:cellSize: to create ', self class name, ' instances'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:", ",", "name", "class"]
}),
$globals.Grid.a$cls);

$core.addMethod(
$core.method({
selector: "size:cellSize:",
protocol: "instance creation",
fn: function (aSize,aCellSize){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=$self._basicNew();
$2=$recv(aSize)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$recv($1)._width_($2);
$3=$recv(aSize)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$recv($1)._height_($3);
$recv($1)._cellWidth_($recv(aCellSize)._x());
$recv($1)._cellHeight_($recv(aCellSize)._y());
$recv($1)._initialize();
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"size:cellSize:",{aSize:aSize,aCellSize:aCellSize},$globals.Grid.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSize", "aCellSize"],
source: "size: aSize cellSize: aCellSize\x0a\x09^ self basicNew\x0a\x09\x09width: aSize x;\x0a\x09\x09height: aSize y;\x0a\x09\x09cellWidth: aCellSize x;\x0a\x09\x09cellHeight: aCellSize y;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["width:", "basicNew", "x", "height:", "y", "cellWidth:", "cellHeight:", "initialize", "yourself"]
}),
$globals.Grid.a$cls);


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


$core.addClass("Microengine", $globals.Object, ["app", "resources", "loader", "renderer", "stage", "assets", "session", "ticker"], "Microengine");
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
selector: "augmentPage",
protocol: "starting",
fn: function (){
var self=this,$self=this;
var url;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7;
url="https://github.com/raydeejay/microengine";
$1="#amber-with"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$self._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["session"]=1;
//>>excludeEnd("ctx");
$recv($2)._addCoin();
$3=$self._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["session"]=2;
//>>excludeEnd("ctx");
return $recv($3)._addSlime();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["click:"]=1;
//>>excludeEnd("ctx");
$4="#silk-tag"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=2;
//>>excludeEnd("ctx");
$recv($4)._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=$self._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["session"]=3;
//>>excludeEnd("ctx");
return $recv($5)._addSpawner();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["click:"]=2;
//>>excludeEnd("ctx");
$recv("#jquery-append"._asJQuery())._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6=$self._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["session"]=4;
//>>excludeEnd("ctx");
return $recv($6)._enqueue_($recv($globals.TimerAction)._for_do_((60),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$7=$self._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["session"]=5;
//>>excludeEnd("ctx");
return $recv($7)._enqueue_($recv($globals.MoveAction)._on_dx_($recv($recv($recv($recv($globals.Microengine)._instance())._session())._nodes())._at_("explorer"),(3)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["enqueue:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$self._setup();
$recv($recv($recv($recv($globals.Silk)._new())._DIV())._A_(["href".__minus_gt(url)])).__lt_lt(url);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{url:url},$globals.Microengine)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09| url |\x0a\x09\x0a\x09url := 'https://github.com/raydeejay/microengine'.\x0a\x09'#amber-with'asJQuery click: [ self session addCoin. self session addSlime ].\x0a\x09'#silk-tag' asJQuery click: [ self session addSpawner ].\x0a\x09'#jquery-append' asJQuery click: [\x0a\x09\x09\x09self session enqueue: (TimerAction for: 60 do: [\x0a\x09\x09\x09\x09self session enqueue: (MoveAction on: (Microengine instance session nodes at: #explorer) dx: 3) ]) ].\x0a\x09self setup.\x0a\x09(Silk new DIV A: {#href -> url}) << url",
referencedClasses: ["TimerAction", "MoveAction", "Microengine", "Silk"],
//>>excludeEnd("ide");
messageSends: ["click:", "asJQuery", "addCoin", "session", "addSlime", "addSpawner", "enqueue:", "for:do:", "on:dx:", "at:", "nodes", "instance", "setup", "<<", "A:", "DIV", "new", "->"]
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
selector: "postload",
protocol: "resources",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.assets=$recv($self.loader)._resources();
$self.session=$recv($globals.GameSession)._on_(self);
$recv($recv($self.session)._setup())._start();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"postload",{},$globals.Microengine)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "postload\x0a\x09assets := loader resources.\x0a\x09session := GameSession on: self.\x0a\x09session setup start",
referencedClasses: ["GameSession"],
//>>excludeEnd("ide");
messageSends: ["resources", "on:", "start", "setup"]
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
selector: "renderer",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.renderer;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "renderer\x0a\x09^ renderer",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Microengine);

$core.addMethod(
$core.method({
selector: "resources",
protocol: "resources",
fn: function (){
var self=this,$self=this;
return $globals.HashedCollection._newFromPairs_(["treasure","images/treasure.png","explorer","images/explorer.png","slime","images/slime.png","wall","images/wall.png","coin","images/coin_stack.png"]);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resources\x0a\x09^ #{\x0a\x09\x09#treasure -> 'images/treasure.png'.\x0a\x09\x09#explorer -> 'images/explorer.png'.\x0a\x09\x09#slime -> 'images/slime.png'.\x0a\x09\x09#wall -> 'images/wall.png'.\x0a\x09\x09#coin -> 'images/coin_stack.png'\x0a\x09}",
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
$self.renderer=$recv($self.app)._renderer();
$self.stage=$recv($self.app)._stage();
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
source: "setup\x0a\x09app := Libs pixi Application new.\x0a\x09document body appendChild: app view.\x0a\x0a\x09loader := app loader.\x0a\x09ticker := app ticker.\x0a\x09renderer := app renderer.\x0a\x09stage := app stage.\x0a\x09self preload.\x0a\x09loader load: [ self postload ]",
referencedClasses: ["Libs"],
//>>excludeEnd("ide");
messageSends: ["new", "Application", "pixi", "appendChild:", "body", "view", "loader", "ticker", "renderer", "stage", "preload", "load:", "postload"]
}),
$globals.Microengine);

$core.addMethod(
$core.method({
selector: "stage",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.stage;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stage\x0a\x09^ stage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
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
selector: "hudStyle",
protocol: "constants",
fn: function (){
var self=this,$self=this;
return $globals.HashedCollection._newFromPairs_(["fontFamily","Arial","fontSize",(24),"fill",(16715792),"align","center"]);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hudStyle\x0a\x09^ #{#fontFamily -> 'Arial'. #fontSize -> 24. #fill -> 16rff1010. #align -> 'center'}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Microengine.a$cls);

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


$core.addClass("Sprite", $globals.Object, ["sprite", "dx", "dy"], "Microengine");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Sprite.comment="I wrap around a Pixi.js Sprite or Sprite-like object.\x0a\x0aI provide methods to access the underlying sprite's properties and methods, and implement my own.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "bringToFront",
protocol: "action",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$recv($self.sprite)._parent();
if(($receiver = $1) == null || $receiver.a$nil){
$1;
} else {
var p;
p=$receiver;
$recv(p)._addChild_($recv(p)._removeChild_($self.sprite));
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bringToFront",{},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "bringToFront\x0a\x09sprite parent ifNotNil: [ :p | p addChild: (p removeChild: sprite) ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "parent", "addChild:", "removeChild:"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "collideWith:on:",
protocol: "colliding",
fn: function (aSprite,aSession){
var self=this,$self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSprite", "aSession"],
source: "collideWith: aSprite on: aSession",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "collidesWith:",
protocol: "colliding",
fn: function (aSprite){
var self=this,$self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSprite"],
source: "collidesWith: aSprite\x0a\x09\x22Return true if this sprite is supposed to collide with aSprite. By default Sprites will not collide.\x22\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
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
selector: "initialize",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
$self.dx=(0);
$self.dy=(0);
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09dx := 0.\x0a\x09dy := 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "move:",
protocol: "updating",
fn: function (aMoveAction){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
$1=$recv(aMoveAction)._dx();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["dx"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.a$nil){
$1;
} else {
var n;
n=$receiver;
$2=$recv($self._dx()).__plus(n);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$self._dx_($2);
}
$3=$recv(aMoveAction)._dy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["dy"]=1;
//>>excludeEnd("ctx");
if(($receiver = $3) == null || $receiver.a$nil){
$3;
} else {
var n;
n=$receiver;
$self._dy_($recv($self._dy()).__plus(n));
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"move:",{aMoveAction:aMoveAction},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMoveAction"],
source: "move: aMoveAction\x0a\x09aMoveAction dx ifNotNil: [ :n | self dx: self dx + n ].\x0a\x09aMoveAction dy ifNotNil: [ :n | self dy: self dy + n ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "dx", "dx:", "+", "dy", "dy:"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "overlaps:",
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
}, function($ctx1) {$ctx1.fill(self,"overlaps:",{aSprite:aSprite},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSprite"],
source: "overlaps: aSprite\x0a\x09^ self sprite x <= (aSprite sprite x + aSprite sprite width)\x0a\x09\x09and: [ aSprite sprite x <= (self sprite x + self sprite width)\x0a\x09\x09\x09and: [ self sprite y <= (aSprite sprite y + aSprite sprite height)\x0a\x09\x09\x09\x09and: [ aSprite sprite y <= (self sprite y + self sprite height) ] ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "<=", "x", "sprite", "+", "width", "y", "height"]
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
}, function($ctx1) {$ctx1.fill(self,"stop",{},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stop\x0a\x09self dx: 0; dy: 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["dx:", "dy:"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "update",
protocol: "updating",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$5;
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
$4=$recv($self.dx)._abs();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["abs"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__lt((0.1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<"]=1;
//>>excludeEnd("ctx");
if($core.assert($3)){
$self.dx=(0);
$self.dx;
}
$5=$recv($recv($self.dy)._abs()).__lt((0.1));
if($core.assert($5)){
$self.dy=(0);
$self.dy;
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"update",{},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "update\x0a\x09\x22implement/override if necessary\x22\x0a\x09sprite x: sprite x + dx.\x0a\x09dx := dx * 0.9.\x0a\x09sprite y: sprite y + dy.\x0a\x09dy := dy * 0.9.\x0a\x09dx abs < 0.1 ifTrue: [ dx := 0 ].\x0a\x09dy abs < 0.1 ifTrue: [ dy := 0 ]\x0a\x09",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["x:", "+", "x", "*", "y:", "y", "ifTrue:", "<", "abs"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "x",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.sprite)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"x",{},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "x\x0a\x09^ sprite x",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["x"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "x:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.sprite)._x_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"x:",{anObject:anObject},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "x: anObject\x0a\x09sprite x: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["x:"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "y",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.sprite)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"y",{},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "y\x0a\x09^ sprite y",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["y"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "y:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.sprite)._y_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"y:",{anObject:anObject},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "y: anObject\x0a\x09sprite y: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["y:"]
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


$core.addClass("Coin", $globals.Sprite, [], "Microengine");
$core.addMethod(
$core.method({
selector: "collideWith:on:",
protocol: "colliding",
fn: function (aSprite,aSession){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aSession)._enqueue_($recv($globals.DestroyAction)._on_(self));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["enqueue:"]=1;
//>>excludeEnd("ctx");
$recv(aSession)._enqueue_($recv($globals.ScoreAction)._worth_((10)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collideWith:on:",{aSprite:aSprite,aSession:aSession},$globals.Coin)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSprite", "aSession"],
source: "collideWith: aSprite on: aSession\x0a\x09aSession\x0a\x09\x09enqueue: (DestroyAction on: self);\x0a\x09\x09enqueue: (ScoreAction worth: 10)",
referencedClasses: ["DestroyAction", "ScoreAction"],
//>>excludeEnd("ide");
messageSends: ["enqueue:", "on:", "worth:"]
}),
$globals.Coin);

$core.addMethod(
$core.method({
selector: "collidesWith:",
protocol: "colliding",
fn: function (aSprite){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv(aSprite)._class()).__eq($globals.Explorer);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collidesWith:",{aSprite:aSprite},$globals.Coin)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSprite"],
source: "collidesWith: aSprite\x0a\x09^ aSprite class = Explorer",
referencedClasses: ["Explorer"],
//>>excludeEnd("ide");
messageSends: ["=", "class"]
}),
$globals.Coin);



$core.addClass("Explorer", $globals.Sprite, [], "Microengine");
$core.addMethod(
$core.method({
selector: "collidesWith:",
protocol: "colliding",
fn: function (aSprite){
var self=this,$self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSprite"],
source: "collidesWith: aSprite\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Explorer);



$core.addClass("Slime", $globals.Sprite, [], "Microengine");
$core.addMethod(
$core.method({
selector: "collideWith:on:",
protocol: "colliding",
fn: function (aSprite,aSession){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$5,$4,$6,$3,$2;
$recv(aSession)._enqueue_($recv($globals.DestroyAction)._on_(self));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["enqueue:"]=1;
//>>excludeEnd("ctx");
$1=$recv($globals.ScoreAction)._worth_((10));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["worth:"]=1;
//>>excludeEnd("ctx");
$recv(aSession)._enqueue_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["enqueue:"]=2;
//>>excludeEnd("ctx");
$recv(aSession)._enqueue_($recv($globals.HealthAction)._worth_((-10)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["enqueue:"]=3;
//>>excludeEnd("ctx");
$5=$recv($recv(aSprite)._dx())._negated();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["negated"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__star((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$6=$recv($recv($recv(aSprite)._dy())._negated()).__star((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=2;
//>>excludeEnd("ctx");
$3=$recv($globals.MoveAction)._on_dx_dy_(aSprite,$4,$6);
$2=$recv(aSession)._enqueue_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["enqueue:"]=4;
//>>excludeEnd("ctx");
(1)._to_do_((5),(function(i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aSession)._enqueue_($recv($globals.DelayedAction)._for_do_((12).__star(i),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(aSession)._addCoin();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collideWith:on:",{aSprite:aSprite,aSession:aSession},$globals.Slime)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSprite", "aSession"],
source: "collideWith: aSprite on: aSession\x0a\x09aSession\x0a\x09\x09enqueue: (DestroyAction on: self);\x0a\x09\x09enqueue: (ScoreAction worth: 10);\x0a\x09\x09enqueue: (HealthAction worth: -10);\x0a\x09\x09enqueue: (MoveAction on: aSprite dx: aSprite dx negated * 2 dy: aSprite dy negated * 2).\x0a\x091 to: 5 do: [ :i | aSession enqueue: (DelayedAction for: 12 * i do: [ aSession addCoin ]) ]",
referencedClasses: ["DestroyAction", "ScoreAction", "HealthAction", "MoveAction", "DelayedAction"],
//>>excludeEnd("ide");
messageSends: ["enqueue:", "on:", "worth:", "on:dx:dy:", "*", "negated", "dx", "dy", "to:do:", "for:do:", "addCoin"]
}),
$globals.Slime);

$core.addMethod(
$core.method({
selector: "collidesWith:",
protocol: "colliding",
fn: function (aSprite){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv(aSprite)._class()).__eq($globals.Explorer);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collidesWith:",{aSprite:aSprite},$globals.Slime)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSprite"],
source: "collidesWith: aSprite\x0a\x09^ aSprite class = Explorer",
referencedClasses: ["Explorer"],
//>>excludeEnd("ide");
messageSends: ["=", "class"]
}),
$globals.Slime);



$core.addClass("Spawner", $globals.Sprite, ["remainingTime", "time"], "Microengine");
$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
$self.time=(60);
$self.remainingTime=$self.time;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09time := 60.\x0a\x09remainingTime := time\x0a\x09",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Spawner);

$core.addMethod(
$core.method({
selector: "remainingTime",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.remainingTime;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "remainingTime\x0a\x09^ remainingTime",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Spawner);

$core.addMethod(
$core.method({
selector: "remainingTime:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.remainingTime=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "remainingTime: anObject\x0a\x09remainingTime := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Spawner);

$core.addMethod(
$core.method({
selector: "time",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.time;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "time\x0a\x09^ time",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Spawner);

$core.addMethod(
$core.method({
selector: "time:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.time=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "time: anObject\x0a\x09time := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Spawner);

$core.addMethod(
$core.method({
selector: "update",
protocol: "updating",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$4;
$self.remainingTime=$recv($self.remainingTime).__minus((1));
$1=$recv($self.remainingTime)._isZero();
if($core.assert($1)){
var session,renderer;
$2=$recv($globals.Microengine)._instance();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["instance"]=1;
//>>excludeEnd("ctx");
session=$recv($2)._session();
renderer=$recv($recv($globals.Microengine)._instance())._renderer();
$3=session;
$5=$recv($recv(renderer)._width())._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atRandom"]=1;
//>>excludeEnd("ctx");
$4=$recv($globals.SpawnAction)._kind_texture_x_y_($globals.Slime,"slime",$5,$recv($recv(renderer)._height())._atRandom());
$recv($3)._enqueue_($4);
$self.remainingTime=$self.time;
$self.remainingTime;
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"update",{},$globals.Spawner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "update\x0a\x09remainingTime := remainingTime - 1.\x0a\x09remainingTime isZero\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09| session renderer |\x0a\x09\x09\x09\x0a\x09\x09\x09session := Microengine instance session.\x0a\x09\x09\x09renderer := Microengine instance renderer.\x0a\x09\x09\x09session enqueue: (SpawnAction kind: Slime texture: #slime x: renderer width atRandom y: renderer height atRandom).\x0a\x09\x09\x09remainingTime := time ]",
referencedClasses: ["Microengine", "SpawnAction", "Slime"],
//>>excludeEnd("ide");
messageSends: ["-", "ifTrue:", "isZero", "session", "instance", "renderer", "enqueue:", "kind:texture:x:y:", "atRandom", "width", "height"]
}),
$globals.Spawner);


$core.addMethod(
$core.method({
selector: "newWithInterval:",
protocol: "instance creation",
fn: function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._time_(aNumber);
$recv($1)._remainingTime_(aNumber);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newWithInterval:",{aNumber:aNumber},$globals.Spawner.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "newWithInterval: aNumber\x0a\x09^ self new\x0a\x09\x09time: aNumber;\x0a\x09\x09remainingTime: aNumber;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["time:", "new", "remainingTime:", "yourself"]
}),
$globals.Spawner.a$cls);


$core.addClass("TextMessage", $globals.Sprite, [], "Microengine");
$core.addMethod(
$core.method({
selector: "text",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.sprite)._text();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"text",{},$globals.TextMessage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "text\x0a\x09^ sprite text",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["text"]
}),
$globals.TextMessage);

$core.addMethod(
$core.method({
selector: "text:",
protocol: "accessing",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.sprite)._text_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"text:",{aString:aString},$globals.TextMessage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "text: aString\x0a\x09sprite text: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["text:"]
}),
$globals.TextMessage);

$core.addMethod(
$core.method({
selector: "update",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.TextMessage.superclass||$boot.nilAsClass).fn.prototype._update.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$self._bringToFront();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"update",{},$globals.TextMessage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "update\x0a\x09super update.\x0a\x09self bringToFront",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["update", "bringToFront"]
}),
$globals.TextMessage);



$core.addClass("Treasure", $globals.Sprite, [], "Microengine");
$core.addMethod(
$core.method({
selector: "collideWith:on:",
protocol: "colliding",
fn: function (aSprite,aSession){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(aSession)._enqueue_($recv($globals.DestroyAction)._on_(self));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["enqueue:"]=1;
//>>excludeEnd("ctx");
$recv(aSession)._enqueue_($recv($globals.ScoreAction)._worth_((25)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["enqueue:"]=2;
//>>excludeEnd("ctx");
$1=$recv(aSession)._enqueue_($recv($globals.CodeAction)._do_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(aSession)._nodes())._at_put_("treasure",$recv(aSession)._addTreasure());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["enqueue:"]=3;
//>>excludeEnd("ctx");
(1)._to_do_((5),(function(i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aSession)._enqueue_($recv($globals.DelayedAction)._for_do_((12).__star(i),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(aSession)._addSlime();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collideWith:on:",{aSprite:aSprite,aSession:aSession},$globals.Treasure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSprite", "aSession"],
source: "collideWith: aSprite on: aSession\x0a\x09aSession\x0a\x09\x09enqueue: (DestroyAction on: self);\x0a\x09\x09enqueue: (ScoreAction worth: 25);\x0a\x09\x09enqueue: (CodeAction do: [ aSession nodes at: #treasure put: aSession addTreasure ]).\x0a\x091 to: 5 do: [ :i | aSession enqueue: (DelayedAction for: 12 * i do: [ aSession addSlime ]) ]",
referencedClasses: ["DestroyAction", "ScoreAction", "CodeAction", "DelayedAction"],
//>>excludeEnd("ide");
messageSends: ["enqueue:", "on:", "worth:", "do:", "at:put:", "nodes", "addTreasure", "to:do:", "for:do:", "*", "addSlime"]
}),
$globals.Treasure);

$core.addMethod(
$core.method({
selector: "collidesWith:",
protocol: "colliding",
fn: function (aSprite){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv(aSprite)._class()).__eq($globals.Explorer);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collidesWith:",{aSprite:aSprite},$globals.Treasure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSprite"],
source: "collidesWith: aSprite\x0a\x09^ aSprite class = Explorer",
referencedClasses: ["Explorer"],
//>>excludeEnd("ide");
messageSends: ["=", "class"]
}),
$globals.Treasure);



$core.addClass("Wall", $globals.Sprite, [], "Microengine");
$core.addMethod(
$core.method({
selector: "collideWith:on:",
protocol: "colliding",
fn: function (aSprite,aSession){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=$recv($recv(aSprite)._dx())._negated();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["negated"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__star((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$1=$recv($globals.MoveAction)._on_dx_dy_(aSprite,$2,$recv($recv($recv(aSprite)._dy())._negated()).__star((2)));
$recv(aSession)._enqueue_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collideWith:on:",{aSprite:aSprite,aSession:aSession},$globals.Wall)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSprite", "aSession"],
source: "collideWith: aSprite on: aSession\x0a\x09aSession enqueue: (MoveAction on: aSprite dx: aSprite dx negated * 2 dy: aSprite dy negated * 2)",
referencedClasses: ["MoveAction"],
//>>excludeEnd("ide");
messageSends: ["enqueue:", "on:dx:dy:", "*", "negated", "dx", "dy"]
}),
$globals.Wall);

$core.addMethod(
$core.method({
selector: "collidesWith:",
protocol: "colliding",
fn: function (aSprite){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv(aSprite)._class()).__eq($globals.Explorer);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collidesWith:",{aSprite:aSprite},$globals.Wall)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSprite"],
source: "collidesWith: aSprite\x0a\x09^ aSprite class = Explorer",
referencedClasses: ["Explorer"],
//>>excludeEnd("ide");
messageSends: ["=", "class"]
}),
$globals.Wall);


});
