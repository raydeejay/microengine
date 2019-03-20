define(["amber/boot", "require", "amber/core/SUnit"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Microengine-Tests");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.transport = {"type":"amd","amdNamespace":"amber-microengine"};

$core.addClass("MicroengineTest", $globals.TestCase, [], "Microengine-Tests");

});
