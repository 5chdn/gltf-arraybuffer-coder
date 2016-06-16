(function(root, factory) {
    "use strict";
    /*global define*/
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory();
    } else {
        // Browser globals
        root.gltfArrabufferCoder = factory();
    }
}(this, function() {
    "use strict";

    let dontDoStuff = function() {
        window.console.log("dontDoStuff()");
    };

    let doStuff = function() {
        dontDoStuff();
        window.console.log("doStuff()");
    };

    return {
        doStuff : doStuff
    };
}));
