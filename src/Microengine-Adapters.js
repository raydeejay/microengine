define(["amber/boot", "require", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Microengine-Adapters");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.transport = {"type":"amd","amdNamespace":"amber-microengine"};

$core.addClass("MEAdapter", $globals.Object, [], "Microengine-Adapters");


$core.addClass("MEAudioAdapter", $globals.MEAdapter, [], "Microengine-Adapters");


$core.addClass("MEMusicAdapter", $globals.MEAudioAdapter, [], "Microengine-Adapters");


$core.addClass("MESoundAdapter", $globals.MEAudioAdapter, [], "Microengine-Adapters");


$core.addClass("MEGameAdapter", $globals.MEAdapter, [], "Microengine-Adapters");

});
