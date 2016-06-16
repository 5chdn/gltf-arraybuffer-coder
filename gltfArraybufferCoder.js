(function(root, factory) {
    "use strict";
    /*global define*/
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else {
        // Browser globals
        root.gltfArrabufferCoder.js = factory();
    }
}(this, function() {
    "use strict";

    let dontDoStuff = function(url, success, error) {
        window.console.log("dontDoStuff");
    };

    let doStuff = function(url, success, error) {
        dontDoStuff();
        window.console.log("doStuff");
    };

    return {
        doStuff : doStuff
    };
}));
