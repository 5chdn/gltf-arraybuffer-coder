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
    root.gltfArraybufferCoder = factory();
  }
}(this, function() {
  "use strict";

  let encodeIndices = function(arr) {
    let byt = 2;
    let siz = arr.length * byt;
    let buf = new ArrayBuffer(siz);
    let dat = new DataView(buf, 0, siz);

    for (let i = 0; i < siz; i += byt) {
      dat.setUint16(i, arr[i / byt], true);
    }

    return buf;
  };

  let encodeVertices = function(arr) {
    let byt = 4;
    let siz = arr.length * byt;
    let buf = new ArrayBuffer(siz);
    let dat = new DataView(buf, 0, siz);

    for (let i = 0; i < siz; i += byt) {
      dat.setFloat32(i, arr[i / byt], true);
    }

    return buf;
  };

  let encodeIndicesAndVertices = function(ar0, ar1) {
    let by0 = 2;
    let by1 = 4;
    let si0 = ar0.length * by0;
    let si1 = ar1.length * by1;
    let siz = si0 + si1;
    let buf = new ArrayBuffer(siz);

    let dat = new DataView(buf, 0, siz);

    for (let i = 0; i < si0; i += by0) {
      dat.setUint16(i, ar0[i / by0], true);
    }

    for (let i = si0; i < siz; i += by1) {
      dat.setFloat32(i, ar1[(i - si0) / by1], true);
    }

    return buf;
  }

  let concatenateBuffers = function(bu0, bu1) {
    let len = bu0.byteLength + bu1.byteLength;
    let arr = new Uint8Array(len);

    arr.set(new Uint8Array(bu0), 0);
    arr.set(new Uint8Array(bu1), bu0.byteLength)

    return arr;
  }

  let encodeBase64DataUri = function(buf) {
    let b64 = btoa(String.fromCharCode(...new Uint8Array(buf)));
    let uri = "data:application/octet-stream;base64," + b64;

    return uri;
  }

  return {
    encodeIndices : encodeIndices,
    encodeVertices : encodeVertices,
    encodeIndicesAndVertices : encodeIndicesAndVertices,
    concatenateBuffers : concatenateBuffers,
    encodeBase64DataUri : encodeBase64DataUri
  };
}));
