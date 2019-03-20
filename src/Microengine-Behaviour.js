define(["amber/boot", "require", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Microengine-Behaviour");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.transport = {"type":"amd","amdNamespace":"amber-microengine"};

$core.addClass("MEBehaviour", $globals.Object, [], "Microengine-Behaviour");

});
