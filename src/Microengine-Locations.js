define(["amber/boot", "require", "amber-microengine/Microengine-Spatial"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Microengine-Locations");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.imports = ["./Microengine-Spatial"];
//>>excludeStart("imports", pragmas.excludeImports);
$pkg.isReady = new Promise(function (resolve, reject) { requirejs(["./Microengine-Spatial"], function () {resolve();}, reject); });
//>>excludeEnd("imports");
$pkg.transport = {"type":"amd","amdNamespace":"amber-microengine"};

$core.addClass("MEMap", $globals.MELocation, [], "Microengine-Locations");


$core.addClass("MEPosition", $globals.MELocation, [], "Microengine-Locations");

});
