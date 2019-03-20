define(["amber/boot", "require", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Microengine-Spatial");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.transport = {"type":"amd","amdNamespace":"amber-microengine"};

$core.addClass("MESpatial", $globals.Object, [], "Microengine-Spatial");


$core.addClass("MEEnvironment", $globals.MESpatial, [], "Microengine-Spatial");


$core.addClass("MELocation", $globals.MESpatial, [], "Microengine-Spatial");

});
