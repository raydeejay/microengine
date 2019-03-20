define(["amber/boot", "require", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Microengine-Observers");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.transport = {"type":"amd","amdNamespace":"amber-microengine"};

$core.addClass("MEObserver", $globals.Object, [], "Microengine-Observers");


$core.addClass("CollisionGroupObserver", $globals.MEObserver, [], "Microengine-Observers");


$core.addClass("CollisionObserver", $globals.MEObserver, [], "Microengine-Observers");


$core.addClass("InputObserver", $globals.MEObserver, [], "Microengine-Observers");

});
