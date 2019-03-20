define(["amber/boot", "require", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Microengine-Node");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.transport = {"type":"amd","amdNamespace":"amber-microengine"};

$core.addClass("MEBoundingVolume", $globals.Object, [], "Microengine-Node");


$core.addClass("MEBoxBound", $globals.MEBoundingVolume, [], "Microengine-Node");


$core.addClass("MEPolygonBound", $globals.MEBoundingVolume, [], "Microengine-Node");


$core.addClass("MESphereBound", $globals.MEBoundingVolume, [], "Microengine-Node");


$core.addClass("MENode", $globals.Object, ["currentLocation", "bounds"], "Microengine-Node");


$core.addClass("MEAudioNode", $globals.MENode, [], "Microengine-Node");


$core.addClass("MEElementNode", $globals.MENode, [], "Microengine-Node");


$core.addClass("MEPlayer", $globals.MEElementNode, [], "Microengine-Node");


$core.addClass("MEGraphicNode", $globals.MENode, [], "Microengine-Node");


$core.addClass("MECamera", $globals.MEGraphicNode, [], "Microengine-Node");


$core.addClass("MESpriteNode", $globals.MEGraphicNode, [], "Microengine-Node");


$core.addClass("METextNode", $globals.MEGraphicNode, [], "Microengine-Node");


$core.addClass("MEPhysicsNode", $globals.MENode, [], "Microengine-Node");


$core.addClass("MEProperty", $globals.Object, [], "Microengine-Node");


$core.addClass("MELife", $globals.MEProperty, [], "Microengine-Node");


$core.addClass("MEScore", $globals.MEProperty, [], "Microengine-Node");


$core.addClass("MEVelocity", $globals.MEProperty, [], "Microengine-Node");

});
