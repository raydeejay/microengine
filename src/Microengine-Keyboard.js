define(["amber/boot", "require", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Microengine-Keyboard");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.transport = {"type":"amd","amdNamespace":"amber-microengine"};

$core.addClass("Key", $globals.Object, ["code"], "Microengine-Keyboard");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Key.comment="I represent a keyboard key. I delegate all my methods to the Keyboard singleton.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "code",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.code;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "code\x0a\x09^ code",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Key);

$core.addMethod(
$core.method({
selector: "code:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.code=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "code: anObject\x0a\x09code := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Key);

$core.addMethod(
$core.method({
selector: "isDown",
protocol: "testing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Keyboard)._pressed_($self._code());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isDown",{},$globals.Key)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isDown\x0a\x09^ Keyboard pressed: self code",
referencedClasses: ["Keyboard"],
//>>excludeEnd("ide");
messageSends: ["pressed:", "code"]
}),
$globals.Key);

$core.addMethod(
$core.method({
selector: "isUp",
protocol: "testing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Keyboard)._notPressed_($self._code());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isUp",{},$globals.Key)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isUp\x0a\x09^ Keyboard notPressed: self code",
referencedClasses: ["Keyboard"],
//>>excludeEnd("ide");
messageSends: ["notPressed:", "code"]
}),
$globals.Key);

$core.addMethod(
$core.method({
selector: "onPress:",
protocol: "binding",
fn: function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.Keyboard)._bind_to_($self._code(),aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onPress:",{aBlock:aBlock},$globals.Key)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onPress: aBlock\x0a\x09Keyboard bind: self code to: aBlock",
referencedClasses: ["Keyboard"],
//>>excludeEnd("ide");
messageSends: ["bind:to:", "code"]
}),
$globals.Key);

$core.addMethod(
$core.method({
selector: "onRelease:",
protocol: "binding",
fn: function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.Keyboard)._bindRelease_to_($self._code(),aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onRelease:",{aBlock:aBlock},$globals.Key)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onRelease: aBlock\x0a\x09Keyboard bindRelease: self code to: aBlock",
referencedClasses: ["Keyboard"],
//>>excludeEnd("ide");
messageSends: ["bindRelease:to:", "code"]
}),
$globals.Key);


$core.addMethod(
$core.method({
selector: "code:onPress:onRelease:",
protocol: "instance creation",
fn: function (aNumber,aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Keyboard)._code_onPress_onRelease_(aNumber,aBlock,anotherBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"code:onPress:onRelease:",{aNumber:aNumber,aBlock:aBlock,anotherBlock:anotherBlock},$globals.Key.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber", "aBlock", "anotherBlock"],
source: "code: aNumber onPress: aBlock onRelease: anotherBlock\x0a\x09\x22Returns a fully configured Key instance\x22\x0a\x09\x0a\x09^ Keyboard code: aNumber onPress: aBlock onRelease: anotherBlock",
referencedClasses: ["Keyboard"],
//>>excludeEnd("ide");
messageSends: ["code:onPress:onRelease:"]
}),
$globals.Key.a$cls);


$core.addClass("Keyboard", $globals.Object, ["keys", "blocks", "releaseBlocks"], "Microengine-Keyboard");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Keyboard.comment="I represent the keyboard and manage bindings and their handling.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "bind:to:",
protocol: "as yet unclassified",
fn: function (aKey,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.blocks)._at_put_(aKey,aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bind:to:",{aKey:aKey,aBlock:aBlock},$globals.Keyboard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "bind: aKey to: aBlock\x0a\x09blocks at: aKey put: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "bindRelease:to:",
protocol: "as yet unclassified",
fn: function (aKey,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.releaseBlocks)._at_put_(aKey,aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bindRelease:to:",{aKey:aKey,aBlock:aBlock},$globals.Keyboard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "bindRelease: aKey to: aBlock\x0a\x09releaseBlocks at: aKey put: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "blocks",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.blocks;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "blocks\x0a\x09^ blocks",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "blocks:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.blocks=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "blocks: anObject\x0a\x09blocks := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.Keyboard.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$self.keys=$globals.HashedCollection._newFromPairs_([]);
$self.blocks=$globals.HashedCollection._newFromPairs_([]);
$self.releaseBlocks=$globals.HashedCollection._newFromPairs_([]);
$recv(window)._addEventListener_func_capture_("keydown",(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._onPress_(event);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)});
//>>excludeEnd("ctx");
}),false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addEventListener:func:capture:"]=1;
//>>excludeEnd("ctx");
$recv(window)._addEventListener_func_capture_("keyup",(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._onRelease_(event);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,2)});
//>>excludeEnd("ctx");
}),false);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Keyboard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09keys := #{}.\x0a\x09blocks := #{}.\x0a\x09releaseBlocks := #{}.\x0a\x09window addEventListener: 'keydown' func: [ :event | self onPress: event ] capture: false.\x0a\x09window addEventListener: 'keyup' func: [ :event | self onRelease: event ] capture: false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "addEventListener:func:capture:", "onPress:", "onRelease:"]
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "keys",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.keys;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "keys\x0a\x09^ keys",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "keys:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.keys=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "keys: anObject\x0a\x09keys := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "notPressed:",
protocol: "as yet unclassified",
fn: function (aKeyCode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._pressed_(aKeyCode))._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"notPressed:",{aKeyCode:aKeyCode},$globals.Keyboard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKeyCode"],
source: "notPressed: aKeyCode\x0a\x09^ (self pressed: aKeyCode) not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["not", "pressed:"]
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "onPress:",
protocol: "as yet unclassified",
fn: function (anEvent){
var self=this,$self=this;
var code;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
code=$recv(anEvent)._keyCode();
$self._press_(code);
$recv($self.blocks)._at_ifPresent_ifAbsent_(code,(function(block){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(block)._value_(anEvent);
return $recv(anEvent)._preventDefault();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({block:block},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onPress:",{anEvent:anEvent,code:code},$globals.Keyboard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEvent"],
source: "onPress: anEvent\x0a\x09| code |\x0a\x09\x0a\x09code := anEvent keyCode.\x0a\x09self press: code.\x0a\x09blocks at: code ifPresent: [ :block | block value: anEvent. anEvent preventDefault ] ifAbsent: [].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["keyCode", "press:", "at:ifPresent:ifAbsent:", "value:", "preventDefault"]
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "onRelease:",
protocol: "as yet unclassified",
fn: function (anEvent){
var self=this,$self=this;
var code;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
code=$recv(anEvent)._keyCode();
$self._release_(code);
$recv($self.releaseBlocks)._at_ifPresent_ifAbsent_(code,(function(block){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(block)._value_(anEvent);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({block:block},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){

}));
$recv(anEvent)._preventDefault();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onRelease:",{anEvent:anEvent,code:code},$globals.Keyboard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEvent"],
source: "onRelease: anEvent\x0a\x09| code |\x0a\x09\x0a\x09code := anEvent keyCode.\x0a\x09self release: code.\x0a\x09releaseBlocks at: code ifPresent: [ :block | block value: anEvent ] ifAbsent: [].\x0a\x09anEvent preventDefault",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["keyCode", "release:", "at:ifPresent:ifAbsent:", "value:", "preventDefault"]
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "press:",
protocol: "as yet unclassified",
fn: function (aKeyCode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.keys)._at_put_(aKeyCode,true);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"press:",{aKeyCode:aKeyCode},$globals.Keyboard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKeyCode"],
source: "press: aKeyCode\x0a\x09keys at: aKeyCode put: true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "pressed:",
protocol: "as yet unclassified",
fn: function (aKeyCode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.keys)._at_ifAbsent_(aKeyCode,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self.keys)._at_put_(aKeyCode,false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pressed:",{aKeyCode:aKeyCode},$globals.Keyboard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKeyCode"],
source: "pressed: aKeyCode\x0a\x09^ keys at: aKeyCode ifAbsent: [ keys at: aKeyCode put: false ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "at:put:"]
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "release:",
protocol: "as yet unclassified",
fn: function (aKeyCode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.keys)._at_put_(aKeyCode,false);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"release:",{aKeyCode:aKeyCode},$globals.Keyboard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKeyCode"],
source: "release: aKeyCode\x0a\x09keys at: aKeyCode put: false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "releaseBlocks",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.releaseBlocks;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "releaseBlocks\x0a\x09^ releaseBlocks",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "releaseBlocks:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.releaseBlocks=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "releaseBlocks: anObject\x0a\x09releaseBlocks := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "unbind:",
protocol: "as yet unclassified",
fn: function (aKey){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.blocks)._removeKey_ifAbsent_(aKey,(function(){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unbind:",{aKey:aKey},$globals.Keyboard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "unbind: aKey\x0a\x09blocks removeKey: aKey ifAbsent: []",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeKey:ifAbsent:"]
}),
$globals.Keyboard);


$core.setSlots($globals.Keyboard.a$cls, ["instance"]);
$core.addMethod(
$core.method({
selector: "bind:to:",
protocol: "factories",
fn: function (aKey,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($self._instance())._blocks())._at_put_(aKey,aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bind:to:",{aKey:aKey,aBlock:aBlock},$globals.Keyboard.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "bind: aKey to: aBlock\x0a\x09self instance blocks at: aKey put: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "blocks", "instance"]
}),
$globals.Keyboard.a$cls);

$core.addMethod(
$core.method({
selector: "bindRelease:to:",
protocol: "factories",
fn: function (aKey,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($self._instance())._releaseBlocks())._at_put_(aKey,aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bindRelease:to:",{aKey:aKey,aBlock:aBlock},$globals.Keyboard.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "bindRelease: aKey to: aBlock\x0a\x09self instance releaseBlocks at: aKey put: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "releaseBlocks", "instance"]
}),
$globals.Keyboard.a$cls);

$core.addMethod(
$core.method({
selector: "code:onPress:onRelease:",
protocol: "factories",
fn: function (aNumber,aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.Key)._new();
$recv($1)._code_(aNumber);
$recv($1)._onPress_(aBlock);
$recv($1)._onRelease_(anotherBlock);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"code:onPress:onRelease:",{aNumber:aNumber,aBlock:aBlock,anotherBlock:anotherBlock},$globals.Keyboard.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber", "aBlock", "anotherBlock"],
source: "code: aNumber onPress: aBlock onRelease: anotherBlock\x0a\x09\x22Returns a fully configured Key instance\x22\x0a\x09\x0a\x09^ Key new\x0a\x09\x09code: aNumber;\x0a\x09\x09onPress: aBlock;\x0a\x09\x09onRelease: anotherBlock;\x0a\x09\x09yourself",
referencedClasses: ["Key"],
//>>excludeEnd("ide");
messageSends: ["code:", "new", "onPress:", "onRelease:", "yourself"]
}),
$globals.Keyboard.a$cls);

$core.addMethod(
$core.method({
selector: "instance",
protocol: "factories",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self.instance;
if(($receiver = $1) == null || $receiver.a$nil){
$self.instance=$self._new();
return $self.instance;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"instance",{},$globals.Keyboard.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "instance\x0a\x09^ instance ifNil: [ instance := self new ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.Keyboard.a$cls);

$core.addMethod(
$core.method({
selector: "unbind:",
protocol: "factories",
fn: function (aKey){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($self._instance())._blocks())._removeKey_ifAbsent_(aKey,(function(){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unbind:",{aKey:aKey},$globals.Keyboard.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "unbind: aKey\x0a\x09self instance blocks removeKey: aKey ifAbsent: []",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeKey:ifAbsent:", "blocks", "instance"]
}),
$globals.Keyboard.a$cls);

});
