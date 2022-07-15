// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6FqiZ":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "4d94d0802d3ace14";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4aBH6":[function(require,module,exports) {
var _preact = require("preact");
var _preactRouter = require("preact-router");
var _history = require("history");
var _fetcher = require("./api/fetcher");
var _routes = require("./config/Routes");
var _tripWidget = require("./pages/TripWidget");
var _preactSwr = require("preact-swr");
var _widgets = require("./pages/Widgets");
const App = ()=>{
    return /*#__PURE__*/ (0, _preact.h)((0, _preactSwr.SWRConfig), {
        value: {
            fetcher: (0, _fetcher.fetcher)
        },
        __source: {
            fileName: "src/index.tsx",
            lineNumber: 12,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _preact.h)((0, _preact.Fragment), {
        __source: {
            fileName: "src/index.tsx",
            lineNumber: 17,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _preact.h)((0, _preactRouter.Router), {
        history: (0, _history.createHashHistory)(),
        __source: {
            fileName: "src/index.tsx",
            lineNumber: 18,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _preact.h)((0, _preactRouter.Route), {
        component: (0, _tripWidget.TripWidget),
        path: (0, _routes.getEmbedPath)((0, _routes.TRIP_PAGE)),
        __source: {
            fileName: "src/index.tsx",
            lineNumber: 19,
            columnNumber: 11
        },
        __self: undefined
    }), /*#__PURE__*/ (0, _preact.h)((0, _preactRouter.Route), {
        component: (0, _tripWidget.TripWidget).Code,
        path: (0, _routes.getEmbedSnippetPath)((0, _routes.TRIP_PAGE)),
        __source: {
            fileName: "src/index.tsx",
            lineNumber: 20,
            columnNumber: 11
        },
        __self: undefined
    }), /*#__PURE__*/ (0, _preact.h)((0, _preactRouter.Route), {
        component: (0, _widgets.Widgets),
        default: true,
        __source: {
            fileName: "src/index.tsx",
            lineNumber: 21,
            columnNumber: 11
        },
        __self: undefined
    }))));
};
const root = document.getElementById("root");
(0, _preact.render)(/*#__PURE__*/ (0, _preact.h)(App, {
    __source: {
        fileName: "src/index.tsx",
        lineNumber: 28,
        columnNumber: 8
    },
    __self: undefined
}), root);

},{"preact":"26zcy","preact-router":"e4tGw","history":"iE5Zp","./api/fetcher":"bXfri","./config/Routes":"aU9Qo","./pages/TripWidget":"8KJcq","preact-swr":"bPA2W","./pages/Widgets":"BtK27"}],"26zcy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>S);
parcelHelpers.export(exports, "hydrate", ()=>q);
parcelHelpers.export(exports, "createElement", ()=>v);
parcelHelpers.export(exports, "h", ()=>v);
parcelHelpers.export(exports, "Fragment", ()=>d);
parcelHelpers.export(exports, "createRef", ()=>p);
parcelHelpers.export(exports, "isValidElement", ()=>i);
parcelHelpers.export(exports, "Component", ()=>_);
parcelHelpers.export(exports, "cloneElement", ()=>B);
parcelHelpers.export(exports, "createContext", ()=>D);
parcelHelpers.export(exports, "toChildArray", ()=>A);
parcelHelpers.export(exports, "options", ()=>l);
var n, l, u, i, t, o, r, f, e = {}, c = [], s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function a(n1, l1) {
    for(var u1 in l1)n1[u1] = l1[u1];
    return n1;
}
function h(n2) {
    var l2 = n2.parentNode;
    l2 && l2.removeChild(n2);
}
function v(l3, u2, i1) {
    var t1, o1, r1, f1 = {};
    for(r1 in u2)"key" == r1 ? t1 = u2[r1] : "ref" == r1 ? o1 = u2[r1] : f1[r1] = u2[r1];
    if (arguments.length > 2 && (f1.children = arguments.length > 3 ? n.call(arguments, 2) : i1), "function" == typeof l3 && null != l3.defaultProps) for(r1 in l3.defaultProps)void 0 === f1[r1] && (f1[r1] = l3.defaultProps[r1]);
    return y(l3, f1, t1, o1, null);
}
function y(n3, i2, t2, o2, r2) {
    var f2 = {
        type: n3,
        props: i2,
        key: t2,
        ref: o2,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == r2 ? ++u : r2
    };
    return null == r2 && null != l.vnode && l.vnode(f2), f2;
}
function p() {
    return {
        current: null
    };
}
function d(n4) {
    return n4.children;
}
function _(n5, l4) {
    this.props = n5, this.context = l4;
}
function k(n6, l5) {
    if (null == l5) return n6.__ ? k(n6.__, n6.__.__k.indexOf(n6) + 1) : null;
    for(var u3; l5 < n6.__k.length; l5++)if (null != (u3 = n6.__k[l5]) && null != u3.__e) return u3.__e;
    return "function" == typeof n6.type ? k(n6) : null;
}
function b(n7) {
    var l6, u4;
    if (null != (n7 = n7.__) && null != n7.__c) {
        for(n7.__e = n7.__c.base = null, l6 = 0; l6 < n7.__k.length; l6++)if (null != (u4 = n7.__k[l6]) && null != u4.__e) {
            n7.__e = n7.__c.base = u4.__e;
            break;
        }
        return b(n7);
    }
}
function m(n8) {
    (!n8.__d && (n8.__d = !0) && t.push(n8) && !g.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(g);
}
function g() {
    for(var n9; g.__r = t.length;)n9 = t.sort(function(n10, l7) {
        return n10.__v.__b - l7.__v.__b;
    }), t = [], n9.some(function(n11) {
        var l8, u5, i3, t3, o3, r3;
        n11.__d && (o3 = (t3 = (l8 = n11).__v).__e, (r3 = l8.__P) && (u5 = [], (i3 = a({}, t3)).__v = t3.__v + 1, j(r3, t3, i3, l8.__n, void 0 !== r3.ownerSVGElement, null != t3.__h ? [
            o3
        ] : null, u5, null == o3 ? k(t3) : o3, t3.__h), z(u5, t3), t3.__e != o3 && b(t3)));
    });
}
function w(n12, l9, u6, i4, t4, o4, r4, f3, s1, a1) {
    var h1, v1, p1, _1, b1, m1, g1, w1 = i4 && i4.__k || c, A1 = w1.length;
    for(u6.__k = [], h1 = 0; h1 < l9.length; h1++)if (null != (_1 = u6.__k[h1] = null == (_1 = l9[h1]) || "boolean" == typeof _1 ? null : "string" == typeof _1 || "number" == typeof _1 || "bigint" == typeof _1 ? y(null, _1, null, null, _1) : Array.isArray(_1) ? y(d, {
        children: _1
    }, null, null, null) : _1.__b > 0 ? y(_1.type, _1.props, _1.key, null, _1.__v) : _1)) {
        if (_1.__ = u6, _1.__b = u6.__b + 1, null === (p1 = w1[h1]) || p1 && _1.key == p1.key && _1.type === p1.type) w1[h1] = void 0;
        else for(v1 = 0; v1 < A1; v1++){
            if ((p1 = w1[v1]) && _1.key == p1.key && _1.type === p1.type) {
                w1[v1] = void 0;
                break;
            }
            p1 = null;
        }
        j(n12, _1, p1 = p1 || e, t4, o4, r4, f3, s1, a1), b1 = _1.__e, (v1 = _1.ref) && p1.ref != v1 && (g1 || (g1 = []), p1.ref && g1.push(p1.ref, null, _1), g1.push(v1, _1.__c || b1, _1)), null != b1 ? (null == m1 && (m1 = b1), "function" == typeof _1.type && _1.__k === p1.__k ? _1.__d = s1 = x(_1, s1, n12) : s1 = P(n12, _1, p1, w1, b1, s1), "function" == typeof u6.type && (u6.__d = s1)) : s1 && p1.__e == s1 && s1.parentNode != n12 && (s1 = k(p1));
    }
    for(u6.__e = m1, h1 = A1; h1--;)null != w1[h1] && ("function" == typeof u6.type && null != w1[h1].__e && w1[h1].__e == u6.__d && (u6.__d = k(i4, h1 + 1)), N(w1[h1], w1[h1]));
    if (g1) for(h1 = 0; h1 < g1.length; h1++)M(g1[h1], g1[++h1], g1[++h1]);
}
function x(n13, l10, u7) {
    for(var i5, t5 = n13.__k, o5 = 0; t5 && o5 < t5.length; o5++)(i5 = t5[o5]) && (i5.__ = n13, l10 = "function" == typeof i5.type ? x(i5, l10, u7) : P(u7, i5, i5, t5, i5.__e, l10));
    return l10;
}
function A(n14, l11) {
    return l11 = l11 || [], null == n14 || "boolean" == typeof n14 || (Array.isArray(n14) ? n14.some(function(n15) {
        A(n15, l11);
    }) : l11.push(n14)), l11;
}
function P(n16, l12, u8, i6, t6, o6) {
    var r5, f4, e1;
    if (void 0 !== l12.__d) r5 = l12.__d, l12.__d = void 0;
    else if (null == u8 || t6 != o6 || null == t6.parentNode) n: if (null == o6 || o6.parentNode !== n16) n16.appendChild(t6), r5 = null;
    else {
        for(f4 = o6, e1 = 0; (f4 = f4.nextSibling) && e1 < i6.length; e1 += 2)if (f4 == t6) break n;
        n16.insertBefore(t6, o6), r5 = o6;
    }
    return void 0 !== r5 ? r5 : t6.nextSibling;
}
function C(n17, l13, u9, i7, t7) {
    var o7;
    for(o7 in u9)"children" === o7 || "key" === o7 || o7 in l13 || H(n17, o7, null, u9[o7], i7);
    for(o7 in l13)t7 && "function" != typeof l13[o7] || "children" === o7 || "key" === o7 || "value" === o7 || "checked" === o7 || u9[o7] === l13[o7] || H(n17, o7, l13[o7], u9[o7], i7);
}
function $(n18, l14, u10) {
    "-" === l14[0] ? n18.setProperty(l14, u10) : n18[l14] = null == u10 ? "" : "number" != typeof u10 || s.test(l14) ? u10 : u10 + "px";
}
function H(n19, l15, u11, i8, t8) {
    var o8;
    n: if ("style" === l15) {
        if ("string" == typeof u11) n19.style.cssText = u11;
        else {
            if ("string" == typeof i8 && (n19.style.cssText = i8 = ""), i8) for(l15 in i8)u11 && l15 in u11 || $(n19.style, l15, "");
            if (u11) for(l15 in u11)i8 && u11[l15] === i8[l15] || $(n19.style, l15, u11[l15]);
        }
    } else if ("o" === l15[0] && "n" === l15[1]) o8 = l15 !== (l15 = l15.replace(/Capture$/, "")), l15 = l15.toLowerCase() in n19 ? l15.toLowerCase().slice(2) : l15.slice(2), n19.l || (n19.l = {}), n19.l[l15 + o8] = u11, u11 ? i8 || n19.addEventListener(l15, o8 ? T : I, o8) : n19.removeEventListener(l15, o8 ? T : I, o8);
    else if ("dangerouslySetInnerHTML" !== l15) {
        if (t8) l15 = l15.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("href" !== l15 && "list" !== l15 && "form" !== l15 && "tabIndex" !== l15 && "download" !== l15 && l15 in n19) try {
            n19[l15] = null == u11 ? "" : u11;
            break n;
        } catch (n) {}
        "function" == typeof u11 || (null != u11 && (!1 !== u11 || "a" === l15[0] && "r" === l15[1]) ? n19.setAttribute(l15, u11) : n19.removeAttribute(l15));
    }
}
function I(n20) {
    this.l[n20.type + !1](l.event ? l.event(n20) : n20);
}
function T(n21) {
    this.l[n21.type + !0](l.event ? l.event(n21) : n21);
}
function j(n22, u12, i9, t9, o9, r6, f5, e2, c1) {
    var s2, h2, v2, y1, p2, k1, b2, m2, g2, x1, A2, P1, C1, $1 = u12.type;
    if (void 0 !== u12.constructor) return null;
    null != i9.__h && (c1 = i9.__h, e2 = u12.__e = i9.__e, u12.__h = null, r6 = [
        e2
    ]), (s2 = l.__b) && s2(u12);
    try {
        n: if ("function" == typeof $1) {
            if (m2 = u12.props, g2 = (s2 = $1.contextType) && t9[s2.__c], x1 = s2 ? g2 ? g2.props.value : s2.__ : t9, i9.__c ? b2 = (h2 = u12.__c = i9.__c).__ = h2.__E : ("prototype" in $1 && $1.prototype.render ? u12.__c = h2 = new $1(m2, x1) : (u12.__c = h2 = new _(m2, x1), h2.constructor = $1, h2.render = O), g2 && g2.sub(h2), h2.props = m2, h2.state || (h2.state = {}), h2.context = x1, h2.__n = t9, v2 = h2.__d = !0, h2.__h = []), null == h2.__s && (h2.__s = h2.state), null != $1.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = a({}, h2.__s)), a(h2.__s, $1.getDerivedStateFromProps(m2, h2.__s))), y1 = h2.props, p2 = h2.state, v2) null == $1.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
            else {
                if (null == $1.getDerivedStateFromProps && m2 !== y1 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(m2, x1), !h2.__e && null != h2.shouldComponentUpdate && !1 === h2.shouldComponentUpdate(m2, h2.__s, x1) || u12.__v === i9.__v) {
                    h2.props = m2, h2.state = h2.__s, u12.__v !== i9.__v && (h2.__d = !1), h2.__v = u12, u12.__e = i9.__e, u12.__k = i9.__k, u12.__k.forEach(function(n23) {
                        n23 && (n23.__ = u12);
                    }), h2.__h.length && f5.push(h2);
                    break n;
                }
                null != h2.componentWillUpdate && h2.componentWillUpdate(m2, h2.__s, x1), null != h2.componentDidUpdate && h2.__h.push(function() {
                    h2.componentDidUpdate(y1, p2, k1);
                });
            }
            if (h2.context = x1, h2.props = m2, h2.__v = u12, h2.__P = n22, A2 = l.__r, P1 = 0, "prototype" in $1 && $1.prototype.render) h2.state = h2.__s, h2.__d = !1, A2 && A2(u12), s2 = h2.render(h2.props, h2.state, h2.context);
            else do h2.__d = !1, A2 && A2(u12), s2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
            while (h2.__d && ++P1 < 25);
            h2.state = h2.__s, null != h2.getChildContext && (t9 = a(a({}, t9), h2.getChildContext())), v2 || null == h2.getSnapshotBeforeUpdate || (k1 = h2.getSnapshotBeforeUpdate(y1, p2)), C1 = null != s2 && s2.type === d && null == s2.key ? s2.props.children : s2, w(n22, Array.isArray(C1) ? C1 : [
                C1
            ], u12, i9, t9, o9, r6, f5, e2, c1), h2.base = u12.__e, u12.__h = null, h2.__h.length && f5.push(h2), b2 && (h2.__E = h2.__ = null), h2.__e = !1;
        } else null == r6 && u12.__v === i9.__v ? (u12.__k = i9.__k, u12.__e = i9.__e) : u12.__e = L(i9.__e, u12, i9, t9, o9, r6, f5, c1);
        (s2 = l.diffed) && s2(u12);
    } catch (n24) {
        u12.__v = null, (c1 || null != r6) && (u12.__e = e2, u12.__h = !!c1, r6[r6.indexOf(e2)] = null), l.__e(n24, u12, i9);
    }
}
function z(n25, u13) {
    l.__c && l.__c(u13, n25), n25.some(function(u14) {
        try {
            n25 = u14.__h, u14.__h = [], n25.some(function(n26) {
                n26.call(u14);
            });
        } catch (n27) {
            l.__e(n27, u14.__v);
        }
    });
}
function L(l16, u15, i10, t10, o10, r7, f6, c2) {
    var s3, a2, v3, y2 = i10.props, p3 = u15.props, d1 = u15.type, _2 = 0;
    if ("svg" === d1 && (o10 = !0), null != r7) {
        for(; _2 < r7.length; _2++)if ((s3 = r7[_2]) && "setAttribute" in s3 == !!d1 && (d1 ? s3.localName === d1 : 3 === s3.nodeType)) {
            l16 = s3, r7[_2] = null;
            break;
        }
    }
    if (null == l16) {
        if (null === d1) return document.createTextNode(p3);
        l16 = o10 ? document.createElementNS("http://www.w3.org/2000/svg", d1) : document.createElement(d1, p3.is && p3), r7 = null, c2 = !1;
    }
    if (null === d1) y2 === p3 || c2 && l16.data === p3 || (l16.data = p3);
    else {
        if (r7 = r7 && n.call(l16.childNodes), a2 = (y2 = i10.props || e).dangerouslySetInnerHTML, v3 = p3.dangerouslySetInnerHTML, !c2) {
            if (null != r7) for(y2 = {}, _2 = 0; _2 < l16.attributes.length; _2++)y2[l16.attributes[_2].name] = l16.attributes[_2].value;
            (v3 || a2) && (v3 && (a2 && v3.__html == a2.__html || v3.__html === l16.innerHTML) || (l16.innerHTML = v3 && v3.__html || ""));
        }
        if (C(l16, p3, y2, o10, c2), v3) u15.__k = [];
        else if (_2 = u15.props.children, w(l16, Array.isArray(_2) ? _2 : [
            _2
        ], u15, i10, t10, o10 && "foreignObject" !== d1, r7, f6, r7 ? r7[0] : i10.__k && k(i10, 0), c2), null != r7) for(_2 = r7.length; _2--;)null != r7[_2] && h(r7[_2]);
        c2 || ("value" in p3 && void 0 !== (_2 = p3.value) && (_2 !== l16.value || "progress" === d1 && !_2 || "option" === d1 && _2 !== y2.value) && H(l16, "value", _2, y2.value, !1), "checked" in p3 && void 0 !== (_2 = p3.checked) && _2 !== l16.checked && H(l16, "checked", _2, y2.checked, !1));
    }
    return l16;
}
function M(n28, u16, i11) {
    try {
        "function" == typeof n28 ? n28(u16) : n28.current = u16;
    } catch (n29) {
        l.__e(n29, i11);
    }
}
function N(n30, u17, i12) {
    var t11, o11;
    if (l.unmount && l.unmount(n30), (t11 = n30.ref) && (t11.current && t11.current !== n30.__e || M(t11, null, u17)), null != (t11 = n30.__c)) {
        if (t11.componentWillUnmount) try {
            t11.componentWillUnmount();
        } catch (n31) {
            l.__e(n31, u17);
        }
        t11.base = t11.__P = null;
    }
    if (t11 = n30.__k) for(o11 = 0; o11 < t11.length; o11++)t11[o11] && N(t11[o11], u17, "function" != typeof n30.type);
    i12 || null == n30.__e || h(n30.__e), n30.__e = n30.__d = void 0;
}
function O(n32, l, u18) {
    return this.constructor(n32, u18);
}
function S(u19, i13, t12) {
    var o12, r8, f7;
    l.__ && l.__(u19, i13), r8 = (o12 = "function" == typeof t12) ? null : t12 && t12.__k || i13.__k, f7 = [], j(i13, u19 = (!o12 && t12 || i13).__k = v(d, null, [
        u19
    ]), r8 || e, e, void 0 !== i13.ownerSVGElement, !o12 && t12 ? [
        t12
    ] : r8 ? null : i13.firstChild ? n.call(i13.childNodes) : null, f7, !o12 && t12 ? t12 : r8 ? r8.__e : i13.firstChild, o12), z(f7, u19);
}
function q(n33, l17) {
    S(n33, l17, q);
}
function B(l18, u20, i14) {
    var t13, o13, r9, f8 = a({}, l18.props);
    for(r9 in u20)"key" == r9 ? t13 = u20[r9] : "ref" == r9 ? o13 = u20[r9] : f8[r9] = u20[r9];
    return arguments.length > 2 && (f8.children = arguments.length > 3 ? n.call(arguments, 2) : i14), y(l18.type, f8, t13 || l18.key, o13 || l18.ref, null);
}
function D(n34, l19) {
    var u21 = {
        __c: l19 = "__cC" + f++,
        __: n34,
        Consumer: function(n35, l20) {
            return n35.children(l20);
        },
        Provider: function(n36) {
            var u22, i15;
            return this.getChildContext || (u22 = [], (i15 = {})[l19] = this, this.getChildContext = function() {
                return i15;
            }, this.shouldComponentUpdate = function(n37) {
                this.props.value !== n37.value && u22.some(m);
            }, this.sub = function(n38) {
                u22.push(n38);
                var l21 = n38.componentWillUnmount;
                n38.componentWillUnmount = function() {
                    u22.splice(u22.indexOf(n38), 1), l21 && l21.call(n38);
                };
            }), n36.children;
        }
    };
    return u21.Provider.__ = u21.Consumer.contextType = u21;
}
n = c.slice, l = {
    __e: function(n39, l22, u, i16) {
        for(var t14, o14, r10; l22 = l22.__;)if ((t14 = l22.__c) && !t14.__) try {
            if ((o14 = t14.constructor) && null != o14.getDerivedStateFromError && (t14.setState(o14.getDerivedStateFromError(n39)), r10 = t14.__d), null != t14.componentDidCatch && (t14.componentDidCatch(n39, i16 || {}), r10 = t14.__d), r10) return t14.__E = t14;
        } catch (l23) {
            n39 = l23;
        }
        throw n39;
    }
}, u = 0, i = function(n40) {
    return null != n40 && void 0 === n40.constructor;
}, _.prototype.setState = function(n41, l24) {
    var u23;
    u23 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = a({}, this.state), "function" == typeof n41 && (n41 = n41(a({}, u23), this.props)), n41 && a(u23, n41), null != n41 && this.__v && (l24 && this.__h.push(l24), m(this));
}, _.prototype.forceUpdate = function(n42) {
    this.__v && (this.__e = !0, n42 && this.__h.push(n42), m(this));
}, _.prototype.render = d, t = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, f = 0;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"e4tGw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Link", ()=>E);
parcelHelpers.export(exports, "Route", ()=>L);
parcelHelpers.export(exports, "Router", ()=>D);
parcelHelpers.export(exports, "default", ()=>D);
parcelHelpers.export(exports, "exec", ()=>s);
parcelHelpers.export(exports, "getCurrentUrl", ()=>R);
parcelHelpers.export(exports, "route", ()=>$);
parcelHelpers.export(exports, "useRouter", ()=>C);
var _preact = require("preact");
var _hooks = require("preact/hooks");
var a = {};
function c(n, t) {
    for(var r in t)n[r] = t[r];
    return n;
}
function s(n, t, r) {
    var i, o = /(?:\?([^#]*))?(#.*)?$/, e = n.match(o), u = {};
    if (e && e[1]) for(var f = e[1].split("&"), c1 = 0; c1 < f.length; c1++){
        var s1 = f[c1].split("=");
        u[decodeURIComponent(s1[0])] = decodeURIComponent(s1.slice(1).join("="));
    }
    n = d(n.replace(o, "")), t = d(t || "");
    for(var h1 = Math.max(n.length, t.length), v1 = 0; v1 < h1; v1++)if (t[v1] && ":" === t[v1].charAt(0)) {
        var l1 = t[v1].replace(/(^:|[+*?]+$)/g, ""), p1 = (t[v1].match(/[+*?]+$/) || a)[0] || "", m1 = ~p1.indexOf("+"), y1 = ~p1.indexOf("*"), U1 = n[v1] || "";
        if (!U1 && !y1 && (p1.indexOf("?") < 0 || m1)) {
            i = !1;
            break;
        }
        if (u[l1] = decodeURIComponent(U1), m1 || y1) {
            u[l1] = n.slice(v1).map(decodeURIComponent).join("/");
            break;
        }
    } else if (t[v1] !== n[v1]) {
        i = !1;
        break;
    }
    return (!0 === r.default || !1 !== i) && u;
}
function h(n, t) {
    return n.rank < t.rank ? 1 : n.rank > t.rank ? -1 : n.index - t.index;
}
function v(n1, t) {
    return n1.index = t, n1.rank = function(n) {
        return n.props.default ? 0 : d(n.props.path).map(l).join("");
    }(n1), n1.props;
}
function d(n) {
    return n.replace(/(^\/+|\/+$)/g, "").split("/");
}
function l(n) {
    return ":" == n.charAt(0) ? 1 + "*+?".indexOf(n.charAt(n.length - 1)) || 4 : 5;
}
var p = {}, m = [], y = [], U = null, g = {
    url: R()
}, k = (0, _preact.createContext)(g);
function C() {
    var n = (0, _hooks.useContext)(k);
    if (n === g) {
        var t = (0, _hooks.useState)()[1];
        (0, _hooks.useEffect)(function() {
            return y.push(t), function() {
                return y.splice(y.indexOf(t), 1);
            };
        }, []);
    }
    return [
        n,
        $
    ];
}
function R() {
    var n;
    return "" + ((n = U && U.location ? U.location : U && U.getCurrentLocation ? U.getCurrentLocation() : "undefined" != typeof location ? location : p).pathname || "") + (n.search || "");
}
function $(n2, t1) {
    return void 0 === t1 && (t1 = !1), "string" != typeof n2 && n2.url && (t1 = n2.replace, n2 = n2.url), function(n) {
        for(var t = m.length; t--;)if (m[t].canRoute(n)) return !0;
        return !1;
    }(n2) && function(n, t) {
        void 0 === t && (t = "push"), U && U[t] ? U[t](n) : "undefined" != typeof history && history[t + "State"] && history[t + "State"](null, null, n);
    }(n2, t1 ? "replace" : "push"), I(n2);
}
function I(n) {
    for(var t = !1, r = 0; r < m.length; r++)m[r].routeTo(n) && (t = !0);
    return t;
}
function M(n) {
    if (n && n.getAttribute) {
        var t = n.getAttribute("href"), r = n.getAttribute("target");
        if (t && t.match(/^\//g) && (!r || r.match(/^_?self$/i))) return $(t);
    }
}
function b(n) {
    return n.stopImmediatePropagation && n.stopImmediatePropagation(), n.stopPropagation && n.stopPropagation(), n.preventDefault(), !1;
}
function W(n) {
    if (!(n.ctrlKey || n.metaKey || n.altKey || n.shiftKey || n.button)) {
        var t = n.target;
        do if ("a" === t.localName && t.getAttribute("href")) {
            if (t.hasAttribute("data-native") || t.hasAttribute("native")) return;
            if (M(t)) return b(n);
        }
        while (t = t.parentNode);
    }
}
var w = !1;
function D(n) {
    n.history && (U = n.history), this.state = {
        url: n.url || R()
    };
}
c(D.prototype = new (0, _preact.Component), {
    shouldComponentUpdate: function(n) {
        return !0 !== n.static || n.url !== this.props.url || n.onChange !== this.props.onChange;
    },
    canRoute: function(n) {
        var t = (0, _preact.toChildArray)(this.props.children);
        return void 0 !== this.g(t, n);
    },
    routeTo: function(n) {
        this.setState({
            url: n
        });
        var t = this.canRoute(n);
        return this.p || this.forceUpdate(), t;
    },
    componentWillMount: function() {
        this.p = !0;
    },
    componentDidMount: function() {
        var n = this;
        w || (w = !0, U || addEventListener("popstate", function() {
            I(R());
        }), addEventListener("click", W)), m.push(this), U && (this.u = U.listen(function(t) {
            var r = t.location || t;
            n.routeTo("" + (r.pathname || "") + (r.search || ""));
        })), this.p = !1;
    },
    componentWillUnmount: function() {
        "function" == typeof this.u && this.u(), m.splice(m.indexOf(this), 1);
    },
    componentWillUpdate: function() {
        this.p = !0;
    },
    componentDidUpdate: function() {
        this.p = !1;
    },
    g: function(n, t) {
        n = n.filter(v).sort(h);
        for(var r = 0; r < n.length; r++){
            var i = n[r], o = s(t, i.props.path, i.props);
            if (o) return [
                i,
                o
            ];
        }
    },
    render: function(n, t) {
        var e, u, f = n.onChange, a1 = t.url, s2 = this.c, h2 = this.g((0, _preact.toChildArray)(n.children), a1);
        if (h2 && (u = (0, _preact.cloneElement)(h2[0], c(c({
            url: a1,
            matches: e = h2[1]
        }, e), {
            key: void 0,
            ref: void 0
        }))), a1 !== (s2 && s2.url)) {
            c(g, s2 = this.c = {
                url: a1,
                previous: s2 && s2.url,
                current: u,
                path: u ? u.props.path : null,
                matches: e
            }), s2.router = this, s2.active = u ? [
                u
            ] : [];
            for(var v2 = y.length; v2--;)y[v2]({});
            "function" == typeof f && f(s2);
        }
        return (0, _preact.h)(k.Provider, {
            value: s2
        }, u);
    }
});
var E = function(n) {
    return (0, _preact.h)("a", c({
        onClick: W
    }, n));
}, L = function(n) {
    return (0, _preact.h)(n.component, n);
};

},{"preact":"26zcy","preact/hooks":"eZN76","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eZN76":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useState", ()=>y);
parcelHelpers.export(exports, "useReducer", ()=>d);
parcelHelpers.export(exports, "useEffect", ()=>_);
parcelHelpers.export(exports, "useLayoutEffect", ()=>h);
parcelHelpers.export(exports, "useRef", ()=>s);
parcelHelpers.export(exports, "useImperativeHandle", ()=>A);
parcelHelpers.export(exports, "useMemo", ()=>F);
parcelHelpers.export(exports, "useCallback", ()=>T);
parcelHelpers.export(exports, "useContext", ()=>q);
parcelHelpers.export(exports, "useDebugValue", ()=>x);
parcelHelpers.export(exports, "useErrorBoundary", ()=>V);
var _preact = require("preact");
var t, u, r, o, i = 0, c = [], f = [], e = (0, _preact.options).__b, a = (0, _preact.options).__r, v = (0, _preact.options).diffed, l = (0, _preact.options).__c, m = (0, _preact.options).unmount;
function p(t1, r1) {
    (0, _preact.options).__h && (0, _preact.options).__h(u, t1, i || r1), i = 0;
    var o1 = u.__H || (u.__H = {
        __: [],
        __h: []
    });
    return t1 >= o1.__.length && o1.__.push({
        __V: f
    }), o1.__[t1];
}
function y(n) {
    return i = 1, d(z, n);
}
function d(n1, r2, o2) {
    var i1 = p(t++, 2);
    return i1.t = n1, i1.__c || (i1.__ = [
        o2 ? o2(r2) : z(void 0, r2),
        function(n) {
            var t2 = i1.t(i1.__[0], n);
            i1.__[0] !== t2 && (i1.__ = [
                t2,
                i1.__[1]
            ], i1.__c.setState({}));
        }
    ], i1.__c = u), i1.__;
}
function _(r3, o3) {
    var i2 = p(t++, 3);
    !(0, _preact.options).__s && w(i2.__H, o3) && (i2.__ = r3, i2.u = o3, u.__H.__h.push(i2));
}
function h(r4, o4) {
    var i3 = p(t++, 4);
    !(0, _preact.options).__s && w(i3.__H, o4) && (i3.__ = r4, i3.u = o4, u.__h.push(i3));
}
function s(n) {
    return i = 5, F(function() {
        return {
            current: n
        };
    }, []);
}
function A(n, t3, u1) {
    i = 6, h(function() {
        return "function" == typeof n ? (n(t3()), function() {
            return n(null);
        }) : n ? (n.current = t3(), function() {
            return n.current = null;
        }) : void 0;
    }, null == u1 ? u1 : u1.concat(n));
}
function F(n, u2) {
    var r5 = p(t++, 7);
    return w(r5.__H, u2) ? (r5.__V = n(), r5.u = u2, r5.__h = n, r5.__V) : r5.__;
}
function T(n, t4) {
    return i = 8, F(function() {
        return n;
    }, t4);
}
function q(n) {
    var r6 = u.context[n.__c], o5 = p(t++, 9);
    return o5.c = n, r6 ? (null == o5.__ && (o5.__ = !0, r6.sub(u)), r6.props.value) : n.__;
}
function x(t5, u3) {
    (0, _preact.options).useDebugValue && (0, _preact.options).useDebugValue(u3 ? u3(t5) : t5);
}
function V(n2) {
    var r7 = p(t++, 10), o6 = y();
    return r7.__ = n2, u.componentDidCatch || (u.componentDidCatch = function(n) {
        r7.__ && r7.__(n), o6[1](n);
    }), [
        o6[0],
        function() {
            o6[1](void 0);
        }
    ];
}
function b() {
    for(var t6; t6 = c.shift();)if (t6.__P) try {
        t6.__H.__h.forEach(j), t6.__H.__h.forEach(k), t6.__H.__h = [];
    } catch (u4) {
        t6.__H.__h = [], (0, _preact.options).__e(u4, t6.__v);
    }
}
(0, _preact.options).__b = function(n) {
    u = null, e && e(n);
}, (0, _preact.options).__r = function(n3) {
    a && a(n3), t = 0;
    var o7 = (u = n3.__c).__H;
    o7 && (r === u ? (o7.__h = [], u.__h = [], o7.__.forEach(function(n) {
        n.__V = f, n.u = void 0;
    })) : (o7.__h.forEach(j), o7.__h.forEach(k), o7.__h = [])), r = u;
}, (0, _preact.options).diffed = function(t7) {
    v && v(t7);
    var i4 = t7.__c;
    i4 && i4.__H && (i4.__H.__h.length && (1 !== c.push(i4) && o === (0, _preact.options).requestAnimationFrame || ((o = (0, _preact.options).requestAnimationFrame) || function(n) {
        var t8, u5 = function() {
            clearTimeout(r8), g && cancelAnimationFrame(t8), setTimeout(n);
        }, r8 = setTimeout(u5, 100);
        g && (t8 = requestAnimationFrame(u5));
    })(b)), i4.__H.__.forEach(function(n) {
        n.u && (n.__H = n.u), n.__V !== f && (n.__ = n.__V), n.u = void 0, n.__V = f;
    })), r = u = null;
}, (0, _preact.options).__c = function(t9, u6) {
    u6.some(function(t10) {
        try {
            t10.__h.forEach(j), t10.__h = t10.__h.filter(function(n) {
                return !n.__ || k(n);
            });
        } catch (r9) {
            u6.some(function(n) {
                n.__h && (n.__h = []);
            }), u6 = [], (0, _preact.options).__e(r9, t10.__v);
        }
    }), l && l(t9, u6);
}, (0, _preact.options).unmount = function(t11) {
    m && m(t11);
    var u7, r10 = t11.__c;
    r10 && r10.__H && (r10.__H.__.forEach(function(n) {
        try {
            j(n);
        } catch (n4) {
            u7 = n4;
        }
    }), u7 && (0, _preact.options).__e(u7, r10.__v));
};
var g = "function" == typeof requestAnimationFrame;
function j(n) {
    var t12 = u, r11 = n.__c;
    "function" == typeof r11 && (n.__c = void 0, r11()), u = t12;
}
function k(n) {
    var t13 = u;
    n.__c = n.__(), u = t13;
}
function w(n, t14) {
    return !n || n.length !== t14.length || t14.some(function(t15, u8) {
        return t15 !== n[u8];
    });
}
function z(n, t16) {
    return "function" == typeof t16 ? t16(n) : t16;
}

},{"preact":"26zcy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iE5Zp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Action", ()=>Action);
parcelHelpers.export(exports, "createBrowserHistory", ()=>createBrowserHistory);
parcelHelpers.export(exports, "createHashHistory", ()=>createHashHistory);
parcelHelpers.export(exports, "createMemoryHistory", ()=>createMemoryHistory);
parcelHelpers.export(exports, "createPath", ()=>createPath);
parcelHelpers.export(exports, "parsePath", ()=>parsePath);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
/**
 * Actions represent the type of change to a location value.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#action
 */ var Action;
(function(Action1) {
    /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */ Action1["Pop"] = "POP";
    /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */ Action1["Push"] = "PUSH";
    /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */ Action1["Replace"] = "REPLACE";
})(Action || (Action = {}));
var readOnly = function(obj) {
    return Object.freeze(obj);
};
function warning(cond, message) {
    if (!cond) {
        // eslint-disable-next-line no-console
        if (typeof console !== "undefined") console.warn(message);
        try {
            // Welcome to debugging history!
            //
            // This error is thrown as a convenience so you can more easily
            // find the source for a warning that appears in the console by
            // enabling "pause on exceptions" in your JavaScript debugger.
            throw new Error(message); // eslint-disable-next-line no-empty
        } catch (e) {}
    }
}
var BeforeUnloadEventType = "beforeunload";
var HashChangeEventType = "hashchange";
var PopStateEventType = "popstate";
/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */ function createBrowserHistory(options) {
    if (options === void 0) options = {};
    var _options = options, _options$window = _options.window, window = _options$window === void 0 ? document.defaultView : _options$window;
    var globalHistory = window.history;
    function getIndexAndLocation() {
        var _window$location = window.location, pathname = _window$location.pathname, search = _window$location.search, hash = _window$location.hash;
        var state = globalHistory.state || {};
        return [
            state.idx,
            readOnly({
                pathname: pathname,
                search: search,
                hash: hash,
                state: state.usr || null,
                key: state.key || "default"
            })
        ];
    }
    var blockedPopTx = null;
    function handlePop() {
        if (blockedPopTx) {
            blockers.call(blockedPopTx);
            blockedPopTx = null;
        } else {
            var nextAction = Action.Pop;
            var _getIndexAndLocation = getIndexAndLocation(), nextIndex = _getIndexAndLocation[0], nextLocation = _getIndexAndLocation[1];
            if (blockers.length) {
                if (nextIndex != null) {
                    var delta = index1 - nextIndex;
                    if (delta) {
                        // Revert the POP
                        blockedPopTx = {
                            action: nextAction,
                            location: nextLocation,
                            retry: function retry() {
                                go(delta * -1);
                            }
                        };
                        go(delta);
                    }
                } else warning(false, // detail and link to it here so people can understand better what
                // is going on and how to avoid it.
                "You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation.");
            } else applyTx(nextAction);
        }
    }
    window.addEventListener(PopStateEventType, handlePop);
    var action1 = Action.Pop;
    var _getIndexAndLocation2 = getIndexAndLocation(), index1 = _getIndexAndLocation2[0], location1 = _getIndexAndLocation2[1];
    var listeners = createEvents();
    var blockers = createEvents();
    if (index1 == null) {
        index1 = 0;
        globalHistory.replaceState((0, _extendsDefault.default)({}, globalHistory.state, {
            idx: index1
        }), "");
    }
    function createHref(to) {
        return typeof to === "string" ? to : createPath(to);
    } // state defaults to `null` because `window.history.state` does
    function getNextLocation(to, state) {
        if (state === void 0) state = null;
        return readOnly((0, _extendsDefault.default)({
            pathname: location1.pathname,
            hash: "",
            search: ""
        }, typeof to === "string" ? parsePath(to) : to, {
            state: state,
            key: createKey()
        }));
    }
    function getHistoryStateAndUrl(nextLocation, index) {
        return [
            {
                usr: nextLocation.state,
                key: nextLocation.key,
                idx: index
            },
            createHref(nextLocation)
        ];
    }
    function allowTx(action, location, retry) {
        return !blockers.length || (blockers.call({
            action: action,
            location: location,
            retry: retry
        }), false);
    }
    function applyTx(nextAction) {
        action1 = nextAction;
        var _getIndexAndLocation3 = getIndexAndLocation();
        index1 = _getIndexAndLocation3[0];
        location1 = _getIndexAndLocation3[1];
        listeners.call({
            action: action1,
            location: location1
        });
    }
    function push(to, state) {
        var nextAction = Action.Push;
        var nextLocation = getNextLocation(to, state);
        function retry() {
            push(to, state);
        }
        if (allowTx(nextAction, nextLocation, retry)) {
            var _getHistoryStateAndUr = getHistoryStateAndUrl(nextLocation, index1 + 1), historyState = _getHistoryStateAndUr[0], url = _getHistoryStateAndUr[1]; // TODO: Support forced reloading
            // try...catch because iOS limits us to 100 pushState calls :/
            try {
                globalHistory.pushState(historyState, "", url);
            } catch (error) {
                // They are going to lose state here, but there is no real
                // way to warn them about it since the page will refresh...
                window.location.assign(url);
            }
            applyTx(nextAction);
        }
    }
    function replace(to, state) {
        var nextAction = Action.Replace;
        var nextLocation = getNextLocation(to, state);
        function retry() {
            replace(to, state);
        }
        if (allowTx(nextAction, nextLocation, retry)) {
            var _getHistoryStateAndUr2 = getHistoryStateAndUrl(nextLocation, index1), historyState = _getHistoryStateAndUr2[0], url = _getHistoryStateAndUr2[1]; // TODO: Support forced reloading
            globalHistory.replaceState(historyState, "", url);
            applyTx(nextAction);
        }
    }
    function go(delta) {
        globalHistory.go(delta);
    }
    var history = {
        get action () {
            return action1;
        },
        get location () {
            return location1;
        },
        createHref: createHref,
        push: push,
        replace: replace,
        go: go,
        back: function back() {
            go(-1);
        },
        forward: function forward() {
            go(1);
        },
        listen: function listen(listener) {
            return listeners.push(listener);
        },
        block: function block(blocker) {
            var unblock = blockers.push(blocker);
            if (blockers.length === 1) window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
            return function() {
                unblock(); // Remove the beforeunload listener so the document may
                // still be salvageable in the pagehide event.
                // See https://html.spec.whatwg.org/#unloading-documents
                if (!blockers.length) window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
            };
        }
    };
    return history;
}
/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */ function createHashHistory(options) {
    if (options === void 0) options = {};
    var _options2 = options, _options2$window = _options2.window, window = _options2$window === void 0 ? document.defaultView : _options2$window;
    var globalHistory = window.history;
    function getIndexAndLocation() {
        var _parsePath = parsePath(window.location.hash.substr(1)), _parsePath$pathname = _parsePath.pathname, pathname = _parsePath$pathname === void 0 ? "/" : _parsePath$pathname, _parsePath$search = _parsePath.search, search = _parsePath$search === void 0 ? "" : _parsePath$search, _parsePath$hash = _parsePath.hash, hash = _parsePath$hash === void 0 ? "" : _parsePath$hash;
        var state = globalHistory.state || {};
        return [
            state.idx,
            readOnly({
                pathname: pathname,
                search: search,
                hash: hash,
                state: state.usr || null,
                key: state.key || "default"
            })
        ];
    }
    var blockedPopTx = null;
    function handlePop() {
        if (blockedPopTx) {
            blockers.call(blockedPopTx);
            blockedPopTx = null;
        } else {
            var nextAction = Action.Pop;
            var _getIndexAndLocation4 = getIndexAndLocation(), nextIndex = _getIndexAndLocation4[0], nextLocation = _getIndexAndLocation4[1];
            if (blockers.length) {
                if (nextIndex != null) {
                    var delta = index2 - nextIndex;
                    if (delta) {
                        // Revert the POP
                        blockedPopTx = {
                            action: nextAction,
                            location: nextLocation,
                            retry: function retry() {
                                go(delta * -1);
                            }
                        };
                        go(delta);
                    }
                } else warning(false, // detail and link to it here so people can understand better
                // what is going on and how to avoid it.
                "You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation.");
            } else applyTx(nextAction);
        }
    }
    window.addEventListener(PopStateEventType, handlePop); // popstate does not fire on hashchange in IE 11 and old (trident) Edge
    // https://developer.mozilla.org/de/docs/Web/API/Window/popstate_event
    window.addEventListener(HashChangeEventType, function() {
        var _getIndexAndLocation5 = getIndexAndLocation(), nextLocation = _getIndexAndLocation5[1]; // Ignore extraneous hashchange events.
        if (createPath(nextLocation) !== createPath(location2)) handlePop();
    });
    var action2 = Action.Pop;
    var _getIndexAndLocation6 = getIndexAndLocation(), index2 = _getIndexAndLocation6[0], location2 = _getIndexAndLocation6[1];
    var listeners = createEvents();
    var blockers = createEvents();
    if (index2 == null) {
        index2 = 0;
        globalHistory.replaceState((0, _extendsDefault.default)({}, globalHistory.state, {
            idx: index2
        }), "");
    }
    function getBaseHref() {
        var base = document.querySelector("base");
        var href = "";
        if (base && base.getAttribute("href")) {
            var url = window.location.href;
            var hashIndex = url.indexOf("#");
            href = hashIndex === -1 ? url : url.slice(0, hashIndex);
        }
        return href;
    }
    function createHref(to) {
        return getBaseHref() + "#" + (typeof to === "string" ? to : createPath(to));
    }
    function getNextLocation(to, state) {
        if (state === void 0) state = null;
        return readOnly((0, _extendsDefault.default)({
            pathname: location2.pathname,
            hash: "",
            search: ""
        }, typeof to === "string" ? parsePath(to) : to, {
            state: state,
            key: createKey()
        }));
    }
    function getHistoryStateAndUrl(nextLocation, index) {
        return [
            {
                usr: nextLocation.state,
                key: nextLocation.key,
                idx: index
            },
            createHref(nextLocation)
        ];
    }
    function allowTx(action, location, retry) {
        return !blockers.length || (blockers.call({
            action: action,
            location: location,
            retry: retry
        }), false);
    }
    function applyTx(nextAction) {
        action2 = nextAction;
        var _getIndexAndLocation7 = getIndexAndLocation();
        index2 = _getIndexAndLocation7[0];
        location2 = _getIndexAndLocation7[1];
        listeners.call({
            action: action2,
            location: location2
        });
    }
    function push(to, state) {
        var nextAction = Action.Push;
        var nextLocation = getNextLocation(to, state);
        function retry() {
            push(to, state);
        }
        warning(nextLocation.pathname.charAt(0) === "/", "Relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
        if (allowTx(nextAction, nextLocation, retry)) {
            var _getHistoryStateAndUr3 = getHistoryStateAndUrl(nextLocation, index2 + 1), historyState = _getHistoryStateAndUr3[0], url = _getHistoryStateAndUr3[1]; // TODO: Support forced reloading
            // try...catch because iOS limits us to 100 pushState calls :/
            try {
                globalHistory.pushState(historyState, "", url);
            } catch (error) {
                // They are going to lose state here, but there is no real
                // way to warn them about it since the page will refresh...
                window.location.assign(url);
            }
            applyTx(nextAction);
        }
    }
    function replace(to, state) {
        var nextAction = Action.Replace;
        var nextLocation = getNextLocation(to, state);
        function retry() {
            replace(to, state);
        }
        warning(nextLocation.pathname.charAt(0) === "/", "Relative pathnames are not supported in hash history.replace(" + JSON.stringify(to) + ")");
        if (allowTx(nextAction, nextLocation, retry)) {
            var _getHistoryStateAndUr4 = getHistoryStateAndUrl(nextLocation, index2), historyState = _getHistoryStateAndUr4[0], url = _getHistoryStateAndUr4[1]; // TODO: Support forced reloading
            globalHistory.replaceState(historyState, "", url);
            applyTx(nextAction);
        }
    }
    function go(delta) {
        globalHistory.go(delta);
    }
    var history = {
        get action () {
            return action2;
        },
        get location () {
            return location2;
        },
        createHref: createHref,
        push: push,
        replace: replace,
        go: go,
        back: function back() {
            go(-1);
        },
        forward: function forward() {
            go(1);
        },
        listen: function listen(listener) {
            return listeners.push(listener);
        },
        block: function block(blocker) {
            var unblock = blockers.push(blocker);
            if (blockers.length === 1) window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
            return function() {
                unblock(); // Remove the beforeunload listener so the document may
                // still be salvageable in the pagehide event.
                // See https://html.spec.whatwg.org/#unloading-documents
                if (!blockers.length) window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
            };
        }
    };
    return history;
}
/**
 * Memory history stores the current location in memory. It is designed for use
 * in stateful non-browser environments like tests and React Native.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#creatememoryhistory
 */ function createMemoryHistory(options) {
    if (options === void 0) options = {};
    var _options3 = options, _options3$initialEntr = _options3.initialEntries, initialEntries = _options3$initialEntr === void 0 ? [
        "/"
    ] : _options3$initialEntr, initialIndex = _options3.initialIndex;
    var entries = initialEntries.map(function(entry) {
        var location = readOnly((0, _extendsDefault.default)({
            pathname: "/",
            search: "",
            hash: "",
            state: null,
            key: createKey()
        }, typeof entry === "string" ? parsePath(entry) : entry));
        warning(location.pathname.charAt(0) === "/", "Relative pathnames are not supported in createMemoryHistory({ initialEntries }) (invalid entry: " + JSON.stringify(entry) + ")");
        return location;
    });
    var index = clamp(initialIndex == null ? entries.length - 1 : initialIndex, 0, entries.length - 1);
    var action3 = Action.Pop;
    var location3 = entries[index];
    var listeners = createEvents();
    var blockers = createEvents();
    function createHref(to) {
        return typeof to === "string" ? to : createPath(to);
    }
    function getNextLocation(to, state) {
        if (state === void 0) state = null;
        return readOnly((0, _extendsDefault.default)({
            pathname: location3.pathname,
            search: "",
            hash: ""
        }, typeof to === "string" ? parsePath(to) : to, {
            state: state,
            key: createKey()
        }));
    }
    function allowTx(action, location, retry) {
        return !blockers.length || (blockers.call({
            action: action,
            location: location,
            retry: retry
        }), false);
    }
    function applyTx(nextAction, nextLocation) {
        action3 = nextAction;
        location3 = nextLocation;
        listeners.call({
            action: action3,
            location: location3
        });
    }
    function push(to, state) {
        var nextAction = Action.Push;
        var nextLocation = getNextLocation(to, state);
        function retry() {
            push(to, state);
        }
        warning(location3.pathname.charAt(0) === "/", "Relative pathnames are not supported in memory history.push(" + JSON.stringify(to) + ")");
        if (allowTx(nextAction, nextLocation, retry)) {
            index += 1;
            entries.splice(index, entries.length, nextLocation);
            applyTx(nextAction, nextLocation);
        }
    }
    function replace(to, state) {
        var nextAction = Action.Replace;
        var nextLocation = getNextLocation(to, state);
        function retry() {
            replace(to, state);
        }
        warning(location3.pathname.charAt(0) === "/", "Relative pathnames are not supported in memory history.replace(" + JSON.stringify(to) + ")");
        if (allowTx(nextAction, nextLocation, retry)) {
            entries[index] = nextLocation;
            applyTx(nextAction, nextLocation);
        }
    }
    function go(delta) {
        var nextIndex = clamp(index + delta, 0, entries.length - 1);
        var nextAction = Action.Pop;
        var nextLocation = entries[nextIndex];
        function retry() {
            go(delta);
        }
        if (allowTx(nextAction, nextLocation, retry)) {
            index = nextIndex;
            applyTx(nextAction, nextLocation);
        }
    }
    var history = {
        get index () {
            return index;
        },
        get action () {
            return action3;
        },
        get location () {
            return location3;
        },
        createHref: createHref,
        push: push,
        replace: replace,
        go: go,
        back: function back() {
            go(-1);
        },
        forward: function forward() {
            go(1);
        },
        listen: function listen(listener) {
            return listeners.push(listener);
        },
        block: function block(blocker) {
            return blockers.push(blocker);
        }
    };
    return history;
} ////////////////////////////////////////////////////////////////////////////////
// UTILS
////////////////////////////////////////////////////////////////////////////////
function clamp(n, lowerBound, upperBound) {
    return Math.min(Math.max(n, lowerBound), upperBound);
}
function promptBeforeUnload(event) {
    // Cancel the event.
    event.preventDefault(); // Chrome (and legacy IE) requires returnValue to be set.
    event.returnValue = "";
}
function createEvents() {
    var handlers = [];
    return {
        get length () {
            return handlers.length;
        },
        push: function push(fn) {
            handlers.push(fn);
            return function() {
                handlers = handlers.filter(function(handler) {
                    return handler !== fn;
                });
            };
        },
        call: function call(arg) {
            handlers.forEach(function(fn) {
                return fn && fn(arg);
            });
        }
    };
}
function createKey() {
    return Math.random().toString(36).substr(2, 8);
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createpath
 */ function createPath(_ref) {
    var _ref$pathname = _ref.pathname, pathname = _ref$pathname === void 0 ? "/" : _ref$pathname, _ref$search = _ref.search, search = _ref$search === void 0 ? "" : _ref$search, _ref$hash = _ref.hash, hash = _ref$hash === void 0 ? "" : _ref$hash;
    if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
    if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
    return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#parsepath
 */ function parsePath(path) {
    var parsedPath = {};
    if (path) {
        var hashIndex = path.indexOf("#");
        if (hashIndex >= 0) {
            parsedPath.hash = path.substr(hashIndex);
            path = path.substr(0, hashIndex);
        }
        var searchIndex = path.indexOf("?");
        if (searchIndex >= 0) {
            parsedPath.search = path.substr(searchIndex);
            path = path.substr(0, searchIndex);
        }
        if (path) parsedPath.pathname = path;
    }
    return parsedPath;
}

},{"@babel/runtime/helpers/esm/extends":"fTBFS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fTBFS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
exports.default = _extends;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bXfri":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fetcher", ()=>fetcher);
var _isomorphicFetch = require("isomorphic-fetch");
const fetcher = async (input, options)=>{
    let result = await fetch(`${"https://outguided-api.herokuapp.com"}${input}`, options);
    if (!result.ok) throw new Error(result.statusText);
    return await result.json();
};

},{"isomorphic-fetch":"fy50b","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fy50b":[function(require,module,exports) {
// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
require("whatwg-fetch");
module.exports = self.fetch.bind(self);

},{"whatwg-fetch":"fBkAK"}],"fBkAK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Headers", ()=>Headers);
parcelHelpers.export(exports, "Request", ()=>Request);
parcelHelpers.export(exports, "Response", ()=>Response);
parcelHelpers.export(exports, "DOMException", ()=>DOMException);
parcelHelpers.export(exports, "fetch", ()=>fetch);
var global = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || typeof global !== "undefined" && global;
var support = {
    searchParams: "URLSearchParams" in global,
    iterable: "Symbol" in global && "iterator" in Symbol,
    blob: "FileReader" in global && "Blob" in global && function() {
        try {
            new Blob();
            return true;
        } catch (e) {
            return false;
        }
    }(),
    formData: "FormData" in global,
    arrayBuffer: "ArrayBuffer" in global
};
function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj);
}
if (support.arrayBuffer) {
    var viewClasses = [
        "[object Int8Array]",
        "[object Uint8Array]",
        "[object Uint8ClampedArray]",
        "[object Int16Array]",
        "[object Uint16Array]",
        "[object Int32Array]",
        "[object Uint32Array]",
        "[object Float32Array]",
        "[object Float64Array]"
    ];
    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
    };
}
function normalizeName(name) {
    if (typeof name !== "string") name = String(name);
    if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === "") throw new TypeError('Invalid character in header field name: "' + name + '"');
    return name.toLowerCase();
}
function normalizeValue(value) {
    if (typeof value !== "string") value = String(value);
    return value;
}
// Build a destructive iterator for the value list
function iteratorFor(items) {
    var iterator = {
        next: function() {
            var value = items.shift();
            return {
                done: value === undefined,
                value: value
            };
        }
    };
    if (support.iterable) iterator[Symbol.iterator] = function() {
        return iterator;
    };
    return iterator;
}
function Headers(headers) {
    this.map = {};
    if (headers instanceof Headers) headers.forEach(function(value, name) {
        this.append(name, value);
    }, this);
    else if (Array.isArray(headers)) headers.forEach(function(header) {
        this.append(header[0], header[1]);
    }, this);
    else if (headers) Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
    }, this);
}
Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ", " + value : value;
};
Headers.prototype["delete"] = function(name) {
    delete this.map[normalizeName(name)];
};
Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null;
};
Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name));
};
Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
};
Headers.prototype.forEach = function(callback, thisArg) {
    for(var name in this.map)if (this.map.hasOwnProperty(name)) callback.call(thisArg, this.map[name], name, this);
};
Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
        items.push(name);
    });
    return iteratorFor(items);
};
Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
        items.push(value);
    });
    return iteratorFor(items);
};
Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
        items.push([
            name,
            value
        ]);
    });
    return iteratorFor(items);
};
if (support.iterable) Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
function consumed(body) {
    if (body.bodyUsed) return Promise.reject(new TypeError("Already read"));
    body.bodyUsed = true;
}
function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
        reader.onload = function() {
            resolve(reader.result);
        };
        reader.onerror = function() {
            reject(reader.error);
        };
    });
}
function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise;
}
function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise;
}
function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);
    for(var i = 0; i < view.length; i++)chars[i] = String.fromCharCode(view[i]);
    return chars.join("");
}
function bufferClone(buf) {
    if (buf.slice) return buf.slice(0);
    else {
        var view = new Uint8Array(buf.byteLength);
        view.set(new Uint8Array(buf));
        return view.buffer;
    }
}
function Body() {
    this.bodyUsed = false;
    this._initBody = function(body) {
        /*
      fetch-mock wraps the Response object in an ES6 Proxy to
      provide useful test harness features such as flush. However, on
      ES5 browsers without fetch or Proxy support pollyfills must be used;
      the proxy-pollyfill is unable to proxy an attribute unless it exists
      on the object before the Proxy is created. This change ensures
      Response.bodyUsed exists on the instance, while maintaining the
      semantic of setting Request.bodyUsed in the constructor before
      _initBody is called.
    */ this.bodyUsed = this.bodyUsed;
        this._bodyInit = body;
        if (!body) this._bodyText = "";
        else if (typeof body === "string") this._bodyText = body;
        else if (support.blob && Blob.prototype.isPrototypeOf(body)) this._bodyBlob = body;
        else if (support.formData && FormData.prototype.isPrototypeOf(body)) this._bodyFormData = body;
        else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) this._bodyText = body.toString();
        else if (support.arrayBuffer && support.blob && isDataView(body)) {
            this._bodyArrayBuffer = bufferClone(body.buffer);
            // IE 10-11 can't handle a DataView body.
            this._bodyInit = new Blob([
                this._bodyArrayBuffer
            ]);
        } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) this._bodyArrayBuffer = bufferClone(body);
        else this._bodyText = body = Object.prototype.toString.call(body);
        if (!this.headers.get("content-type")) {
            if (typeof body === "string") this.headers.set("content-type", "text/plain;charset=UTF-8");
            else if (this._bodyBlob && this._bodyBlob.type) this.headers.set("content-type", this._bodyBlob.type);
            else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
        }
    };
    if (support.blob) {
        this.blob = function() {
            var rejected = consumed(this);
            if (rejected) return rejected;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            else if (this._bodyArrayBuffer) return Promise.resolve(new Blob([
                this._bodyArrayBuffer
            ]));
            else if (this._bodyFormData) throw new Error("could not read FormData body as blob");
            else return Promise.resolve(new Blob([
                this._bodyText
            ]));
        };
        this.arrayBuffer = function() {
            if (this._bodyArrayBuffer) {
                var isConsumed = consumed(this);
                if (isConsumed) return isConsumed;
                if (ArrayBuffer.isView(this._bodyArrayBuffer)) return Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength));
                else return Promise.resolve(this._bodyArrayBuffer);
            } else return this.blob().then(readBlobAsArrayBuffer);
        };
    }
    this.text = function() {
        var rejected = consumed(this);
        if (rejected) return rejected;
        if (this._bodyBlob) return readBlobAsText(this._bodyBlob);
        else if (this._bodyArrayBuffer) return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
        else if (this._bodyFormData) throw new Error("could not read FormData body as text");
        else return Promise.resolve(this._bodyText);
    };
    if (support.formData) this.formData = function() {
        return this.text().then(decode);
    };
    this.json = function() {
        return this.text().then(JSON.parse);
    };
    return this;
}
// HTTP methods whose capitalization should be normalized
var methods = [
    "DELETE",
    "GET",
    "HEAD",
    "OPTIONS",
    "POST",
    "PUT"
];
function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method;
}
function Request(input, options) {
    if (!(this instanceof Request)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
    options = options || {};
    var body = options.body;
    if (input instanceof Request) {
        if (input.bodyUsed) throw new TypeError("Already read");
        this.url = input.url;
        this.credentials = input.credentials;
        if (!options.headers) this.headers = new Headers(input.headers);
        this.method = input.method;
        this.mode = input.mode;
        this.signal = input.signal;
        if (!body && input._bodyInit != null) {
            body = input._bodyInit;
            input.bodyUsed = true;
        }
    } else this.url = String(input);
    this.credentials = options.credentials || this.credentials || "same-origin";
    if (options.headers || !this.headers) this.headers = new Headers(options.headers);
    this.method = normalizeMethod(options.method || this.method || "GET");
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal;
    this.referrer = null;
    if ((this.method === "GET" || this.method === "HEAD") && body) throw new TypeError("Body not allowed for GET or HEAD requests");
    this._initBody(body);
    if (this.method === "GET" || this.method === "HEAD") {
        if (options.cache === "no-store" || options.cache === "no-cache") {
            // Search for a '_' parameter in the query string
            var reParamSearch = /([?&])_=[^&]*/;
            if (reParamSearch.test(this.url)) // If it already exists then set the value with the current time
            this.url = this.url.replace(reParamSearch, "$1_=" + new Date().getTime());
            else {
                // Otherwise add a new '_' parameter to the end with the current time
                var reQueryString = /\?/;
                this.url += (reQueryString.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
            }
        }
    }
}
Request.prototype.clone = function() {
    return new Request(this, {
        body: this._bodyInit
    });
};
function decode(body) {
    var form = new FormData();
    body.trim().split("&").forEach(function(bytes) {
        if (bytes) {
            var split = bytes.split("=");
            var name = split.shift().replace(/\+/g, " ");
            var value = split.join("=").replace(/\+/g, " ");
            form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
    });
    return form;
}
function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
    // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
    // https://github.com/github/fetch/issues/748
    // https://github.com/zloirock/core-js/issues/751
    preProcessedHeaders.split("\r").map(function(header) {
        return header.indexOf("\n") === 0 ? header.substr(1, header.length) : header;
    }).forEach(function(line) {
        var parts = line.split(":");
        var key = parts.shift().trim();
        if (key) {
            var value = parts.join(":").trim();
            headers.append(key, value);
        }
    });
    return headers;
}
Body.call(Request.prototype);
function Response(bodyInit, options) {
    if (!(this instanceof Response)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
    if (!options) options = {};
    this.type = "default";
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = options.statusText === undefined ? "" : "" + options.statusText;
    this.headers = new Headers(options.headers);
    this.url = options.url || "";
    this._initBody(bodyInit);
}
Body.call(Response.prototype);
Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
        status: this.status,
        statusText: this.statusText,
        headers: new Headers(this.headers),
        url: this.url
    });
};
Response.error = function() {
    var response = new Response(null, {
        status: 0,
        statusText: ""
    });
    response.type = "error";
    return response;
};
var redirectStatuses = [
    301,
    302,
    303,
    307,
    308
];
Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) throw new RangeError("Invalid status code");
    return new Response(null, {
        status: status,
        headers: {
            location: url
        }
    });
};
var DOMException = global.DOMException;
try {
    new DOMException();
} catch (err) {
    DOMException = function(message, name) {
        this.message = message;
        this.name = name;
        var error = Error(message);
        this.stack = error.stack;
    };
    DOMException.prototype = Object.create(Error.prototype);
    DOMException.prototype.constructor = DOMException;
}
function fetch(input, init) {
    return new Promise(function(resolve, reject) {
        var request = new Request(input, init);
        if (request.signal && request.signal.aborted) return reject(new DOMException("Aborted", "AbortError"));
        var xhr = new XMLHttpRequest();
        function abortXhr() {
            xhr.abort();
        }
        xhr.onload = function() {
            var options = {
                status: xhr.status,
                statusText: xhr.statusText,
                headers: parseHeaders(xhr.getAllResponseHeaders() || "")
            };
            options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
            var body = "response" in xhr ? xhr.response : xhr.responseText;
            setTimeout(function() {
                resolve(new Response(body, options));
            }, 0);
        };
        xhr.onerror = function() {
            setTimeout(function() {
                reject(new TypeError("Network request failed"));
            }, 0);
        };
        xhr.ontimeout = function() {
            setTimeout(function() {
                reject(new TypeError("Network request failed"));
            }, 0);
        };
        xhr.onabort = function() {
            setTimeout(function() {
                reject(new DOMException("Aborted", "AbortError"));
            }, 0);
        };
        function fixUrl(url) {
            try {
                return url === "" && global.location.href ? global.location.href : url;
            } catch (e) {
                return url;
            }
        }
        xhr.open(request.method, fixUrl(request.url), true);
        if (request.credentials === "include") xhr.withCredentials = true;
        else if (request.credentials === "omit") xhr.withCredentials = false;
        if ("responseType" in xhr) {
            if (support.blob) xhr.responseType = "blob";
            else if (support.arrayBuffer && request.headers.get("Content-Type") && request.headers.get("Content-Type").indexOf("application/octet-stream") !== -1) xhr.responseType = "arraybuffer";
        }
        if (init && typeof init.headers === "object" && !(init.headers instanceof Headers)) Object.getOwnPropertyNames(init.headers).forEach(function(name) {
            xhr.setRequestHeader(name, normalizeValue(init.headers[name]));
        });
        else request.headers.forEach(function(value, name) {
            xhr.setRequestHeader(name, value);
        });
        if (request.signal) {
            request.signal.addEventListener("abort", abortXhr);
            xhr.onreadystatechange = function() {
                // DONE (success or failure)
                if (xhr.readyState === 4) request.signal.removeEventListener("abort", abortXhr);
            };
        }
        xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
    });
}
fetch.polyfill = true;
if (!global.fetch) {
    global.fetch = fetch;
    global.Headers = Headers;
    global.Request = Request;
    global.Response = Response;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aU9Qo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TRIP_PAGE", ()=>TRIP_PAGE);
parcelHelpers.export(exports, "HOST_PAGE", ()=>HOST_PAGE);
parcelHelpers.export(exports, "getTripSlugFromUrl", ()=>getTripSlugFromUrl);
parcelHelpers.export(exports, "getHostSlugFromUrl", ()=>getHostSlugFromUrl);
parcelHelpers.export(exports, "tripLink", ()=>tripLink);
parcelHelpers.export(exports, "hostLink", ()=>hostLink);
parcelHelpers.export(exports, "getEmbedPath", ()=>getEmbedPath);
parcelHelpers.export(exports, "getEmbedSnippetPath", ()=>getEmbedSnippetPath);
parcelHelpers.export(exports, "getEmbedUrl", ()=>getEmbedUrl);
parcelHelpers.export(exports, "getEmbedSnippetUrl", ()=>getEmbedSnippetUrl);
parcelHelpers.export(exports, "getExternalUrl", ()=>getExternalUrl);
var _helper = require("src/utils/helper");
const TRIP_PAGE = "/experiences/:slug";
const HOST_PAGE = "/guides/:slug";
const getTripSlugFromUrl = (url)=>url.match(new RegExp(`^${(0, _helper.escapeRegExp)(getExternalUrl())}${TRIP_PAGE.replace(":slug", "([^/?]+)")}`))?.[1];
const getHostSlugFromUrl = (url)=>url.match(new RegExp(`^${(0, _helper.escapeRegExp)(getExternalUrl())}${HOST_PAGE.replace(":slug", "([^/?]+)")}`))?.[1];
const tripLink = (slug)=>TRIP_PAGE.replace(":slug", slug ?? "");
const hostLink = (slug)=>HOST_PAGE.replace(":slug", slug ?? "");
const getEmbedPath = (path)=>`/embed${path}`;
const getEmbedSnippetPath = (path)=>`/code${path}`;
const getEmbedUrl = (path)=>`${"http://localhost:1234"}${path ? `/#${getEmbedPath(path)}` : ""}`;
const getEmbedSnippetUrl = (path)=>`${"http://localhost:1234"}${path ? `/#${getEmbedSnippetPath(path)}` : ""}`;
const getExternalUrl = (path = "")=>`${"https://outguided-frontend-dev.herokuapp.com"}${path}`;

},{"src/utils/helper":"3uqAg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3uqAg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "escapeRegExp", ()=>escapeRegExp);
parcelHelpers.export(exports, "getSnippetLink", ()=>getSnippetLink);
parcelHelpers.export(exports, "getId", ()=>getId);
var _widgets = require("src/config/Widgets");
const escapeRegExp = (string)=>string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const getSnippetLink = (url, label = "Powered by outguided.com", { data ={} , withEmbedCode  } = {})=>{
    const attributeString = Object.keys({
        ...data,
        widget: ""
    }).map((key)=>` data-og-${key}${data[key] ? `="${data[key]}"` : ""}`).join("");
    return `<a href="${url}"${attributeString}>${label}</a>${withEmbedCode ? (0, _widgets.EMBED_SCRIPT) : ""}`;
};
const getId = ()=>String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, "");

},{"src/config/Widgets":"2pGEw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2pGEw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EMBED_SCRIPT", ()=>EMBED_SCRIPT);
parcelHelpers.export(exports, "EXAMPLE_TRIP", ()=>EXAMPLE_TRIP);
const EMBED_SCRIPT = `<script async src="${"http://localhost:1234"}/embed.js"></script>`;
const EXAMPLE_TRIP = "https://outguided-frontend-dev.herokuapp.com/experiences/climbing-1";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8KJcq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TripWidget", ()=>TripWidget);
var _preact = require("preact");
var _button = require("src/components/Button/Button");
var _routes = require("src/config/Routes");
var _widgetWrapper = require("src/components/WidgetWrapper/WidgetWrapper");
var _helper = require("src/utils/helper");
var _snippet = require("src/components/Snippet/Snippet");
const Link = (slug, params = {})=>{
    const link = (0, _routes.getExternalUrl)((0, _routes.tripLink)(slug));
    return (0, _helper.getSnippetLink)(link, typeof params.data?.code !== "undefined" ? "Embed Code" : "Book Now", params);
};
const Widget = ({ matches: { slug , source  }  })=>{
    return /*#__PURE__*/ (0, _preact.h)((0, _widgetWrapper.WidgetWrapper), {
        __source: {
            fileName: "src/pages/TripWidget.tsx",
            lineNumber: 16,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _preact.h)((0, _button.Button), {
        href: (0, _routes.getExternalUrl)(`${(0, _routes.tripLink)(slug)}?source=${encodeURIComponent(source)}`),
        __source: {
            fileName: "src/pages/TripWidget.tsx",
            lineNumber: 17,
            columnNumber: 7
        },
        __self: undefined
    }, "Book Now"));
};
const Code = ({ matches: { slug  }  })=>{
    return /*#__PURE__*/ (0, _preact.h)((0, _widgetWrapper.WidgetWrapper), {
        __source: {
            fileName: "src/pages/TripWidget.tsx",
            lineNumber: 24,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _preact.h)((0, _snippet.Snippet), {
        code: Link(slug, {
            withEmbedCode: true
        }),
        __source: {
            fileName: "src/pages/TripWidget.tsx",
            lineNumber: 25,
            columnNumber: 7
        },
        __self: undefined
    }));
};
const TripWidget = Object.assign(Widget, {
    Code,
    Link
});

},{"preact":"26zcy","src/components/Button/Button":"gRY88","src/config/Routes":"aU9Qo","src/components/WidgetWrapper/WidgetWrapper":"hEMdc","src/utils/helper":"3uqAg","src/components/Snippet/Snippet":"gRvPY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gRY88":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Button", ()=>Button);
var _preact = require("preact");
const Button = ({ href , children , onClick  })=>{
    const Component = href ? "a" : "button";
    return /*#__PURE__*/ (0, _preact.h)(Component, {
        className: "button",
        href: href,
        target: href ? "_blank" : undefined,
        onClick: onClick,
        __source: {
            fileName: "src/components/Button/Button.tsx",
            lineNumber: 7,
            columnNumber: 5
        },
        __self: undefined
    }, children);
};

},{"preact":"26zcy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hEMdc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WidgetWrapper", ()=>WidgetWrapper);
var _preact = require("preact");
var _hooks = require("preact/hooks");
var _messenger = require("src/utils/messenger");
var _useEmbedSize = require("src/hooks/useEmbedSize");
const WidgetWrapper = ({ children  })=>{
    const { width , height  } = (0, _useEmbedSize.useEmbedSize)();
    (0, _hooks.useEffect)(()=>{
        if (width && height) (0, _messenger.send)({
            type: "size",
            width,
            height,
            name: window.name
        }, {
            target: window.parent
        });
    }, [
        width,
        height
    ]);
    const onCopy = (text)=>{
        (0, _messenger.send)({
            type: "copy",
            text,
            name: window.name
        }, {
            target: window.parent
        });
    };
    return /*#__PURE__*/ (0, _preact.h)((0, _preact.Fragment), {
        __source: {
            fileName: "src/components/WidgetWrapper/WidgetWrapper.tsx",
            lineNumber: 18,
            columnNumber: 10
        },
        __self: undefined
    }, (0, _preact.cloneElement)(children, {
        onCopy
    }));
};

},{"preact":"26zcy","preact/hooks":"eZN76","src/utils/messenger":"cqgH5","src/hooks/useEmbedSize":"7OJKY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cqgH5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "send", ()=>send);
parcelHelpers.export(exports, "register", ()=>register);
parcelHelpers.export(exports, "unregister", ()=>unregister);
const send = (data, options)=>{
    const { target , targetOrigin ="*"  } = options ?? {};
    (target || window).postMessage(data, targetOrigin);
};
const register = (listener)=>{
    window.addEventListener("message", listener, false);
};
const unregister = (listener)=>{
    window.removeEventListener("message", listener, false);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7OJKY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useEmbedSize", ()=>useEmbedSize);
var _hooks = require("preact/hooks");
const useEmbedSize = ()=>{
    const [dimension, setDimension] = (0, _hooks.useState)({
        width: 0,
        height: 0
    });
    (0, _hooks.useEffect)(()=>{
        if (!dimension.height && document?.body.scrollHeight) {
            const height = document?.body.scrollHeight;
            const width = document?.getElementById("root")?.children?.[0]?.scrollWidth;
            if (width && height) setDimension({
                width: width + 4,
                height
            });
        }
    }, [
        document?.body.scrollHeight,
        dimension.height
    ]);
    return dimension;
};

},{"preact/hooks":"eZN76","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gRvPY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Snippet", ()=>Snippet);
var _preact = require("preact");
var _hooks = require("preact/hooks");
const Snippet = ({ code , onCopy  })=>{
    const textAreaRef = (0, _hooks.useRef)(null);
    const [focused, setFocused] = (0, _hooks.useState)(false);
    const timeoutRef = (0, _hooks.useRef)();
    const onFocus = async ({ currentTarget  })=>{
        setFocused(true);
        try {
            await navigator.clipboard.writeText(currentTarget.value);
        } catch (e) {
            onCopy?.(currentTarget.value);
        }
    };
    (0, _hooks.useEffect)(()=>{
        if (focused) {
            textAreaRef.current?.blur();
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(()=>{
                setFocused(false);
            }, 1000);
        }
    }, [
        setFocused,
        focused
    ]);
    return /*#__PURE__*/ (0, _preact.h)("div", {
        class: `snippet-preview${focused ? " snippet-preview--focused" : ""}`,
        __source: {
            fileName: "src/components/Snippet/Snippet.tsx",
            lineNumber: 31,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _preact.h)("div", {
        class: "snippet-preview__info",
        __source: {
            fileName: "src/components/Snippet/Snippet.tsx",
            lineNumber: 32,
            columnNumber: 7
        },
        __self: undefined
    }), /*#__PURE__*/ (0, _preact.h)("textarea", {
        class: "snippet-preview__textarea",
        ref: textAreaRef,
        onFocus: onFocus,
        dangerouslySetInnerHTML: {
            __html: code
        },
        __source: {
            fileName: "src/components/Snippet/Snippet.tsx",
            lineNumber: 33,
            columnNumber: 7
        },
        __self: undefined
    }));
};

},{"preact":"26zcy","preact/hooks":"eZN76","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bPA2W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useSWRInfinite", ()=>(0, _useSwrInfinite.useSWRInfinite));
parcelHelpers.export(exports, "cache", ()=>(0, _config.cache));
var _useSwr = require("./use-swr");
var _useSwrDefault = parcelHelpers.interopDefault(_useSwr);
parcelHelpers.exportAll(_useSwr, exports);
var _useSwrInfinite = require("./use-swr-infinite");
var _config = require("./config");
exports.default = (0, _useSwrDefault.default);

},{"./use-swr":"jCPg1","./use-swr-infinite":"W2bML","./config":"ivMWF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jCPg1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "trigger", ()=>trigger);
parcelHelpers.export(exports, "mutate", ()=>mutate);
parcelHelpers.export(exports, "SWRConfig", ()=>SWRConfig);
var _hooks = require("preact/hooks");
var _config = require("./config");
var _configDefault = parcelHelpers.interopDefault(_config);
var _swrConfigContext = require("./swr-config-context");
var _swrConfigContextDefault = parcelHelpers.interopDefault(_swrConfigContext);
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var IS_SERVER = typeof window === "undefined" || // @ts-ignore
!!(typeof Deno !== "undefined" && Deno && Deno.version && Deno.version.deno);
// polyfill for requestAnimationFrame
var rAF = IS_SERVER ? null : window["requestAnimationFrame"] || function(f) {
    return setTimeout(f, 1);
};
// React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
var useIsomorphicLayoutEffect = IS_SERVER ? (0, _hooks.useEffect) : (0, _hooks.useLayoutEffect);
// global state managers
var CONCURRENT_PROMISES = {};
var CONCURRENT_PROMISES_TS = {};
var FOCUS_REVALIDATORS = {};
var RECONNECT_REVALIDATORS = {};
var CACHE_REVALIDATORS = {};
var MUTATION_TS = {};
var MUTATION_END_TS = {};
// generate strictly increasing timestamps
var now = function() {
    var ts = 0;
    return function() {
        return ++ts;
    };
}();
// setup DOM events listeners for `focus` and `reconnect` actions
if (!IS_SERVER && window.addEventListener) {
    var revalidate_1 = function(revalidators) {
        if (!(0, _configDefault.default).isDocumentVisible() || !(0, _configDefault.default).isOnline()) return;
        for(var key in revalidators)if (revalidators[key][0]) revalidators[key][0]();
    };
    // focus revalidate
    window.addEventListener("visibilitychange", function() {
        return revalidate_1(FOCUS_REVALIDATORS);
    }, false);
    window.addEventListener("focus", function() {
        return revalidate_1(FOCUS_REVALIDATORS);
    }, false);
    // reconnect revalidate
    window.addEventListener("online", function() {
        return revalidate_1(RECONNECT_REVALIDATORS);
    }, false);
}
var trigger = function(_key, shouldRevalidate) {
    if (shouldRevalidate === void 0) shouldRevalidate = true;
    // we are ignoring the second argument which correspond to the arguments
    // the fetcher will receive when key is an array
    var _a = (0, _config.cache).serializeKey(_key), key = _a[0], keyErr = _a[2], keyValidating = _a[3];
    if (!key) return Promise.resolve();
    var updaters = CACHE_REVALIDATORS[key];
    if (key && updaters) {
        var currentData = (0, _config.cache).get(key);
        var currentError = (0, _config.cache).get(keyErr);
        var currentIsValidating = (0, _config.cache).get(keyValidating);
        var promises = [];
        for(var i = 0; i < updaters.length; ++i)promises.push(updaters[i](shouldRevalidate, currentData, currentError, currentIsValidating, i > 0));
        // return new updated value
        return Promise.all(promises).then(function() {
            return (0, _config.cache).get(key);
        });
    }
    return Promise.resolve((0, _config.cache).get(key));
};
var broadcastState = function(key, data, error, isValidating) {
    var updaters = CACHE_REVALIDATORS[key];
    if (key && updaters) for(var i = 0; i < updaters.length; ++i)updaters[i](false, data, error, isValidating);
};
var mutate = function(_key, _data, shouldRevalidate) {
    if (shouldRevalidate === void 0) shouldRevalidate = true;
    return __awaiter(void 0, void 0, void 0, function() {
        var _a, key, keyErr, beforeMutationTs, beforeConcurrentPromisesTs, data, error, isAsyncMutation, err_1, shouldAbort, updaters, promises, i;
        return __generator(this, function(_b) {
            switch(_b.label){
                case 0:
                    _a = (0, _config.cache).serializeKey(_key), key = _a[0], keyErr = _a[2];
                    if (!key) return [
                        2 /*return*/ 
                    ];
                    // if there is no new data to update, let's just revalidate the key
                    if (typeof _data === "undefined") return [
                        2 /*return*/ ,
                        trigger(_key, shouldRevalidate)
                    ];
                    // update global timestamps
                    MUTATION_TS[key] = now() - 1;
                    MUTATION_END_TS[key] = 0;
                    beforeMutationTs = MUTATION_TS[key];
                    beforeConcurrentPromisesTs = CONCURRENT_PROMISES_TS[key];
                    isAsyncMutation = false;
                    if (_data && typeof _data === "function") // `_data` is a function, call it passing current cache value
                    try {
                        _data = _data((0, _config.cache).get(key));
                    } catch (err) {
                        error = err;
                    }
                    if (!(_data && typeof _data.then === "function")) return [
                        3 /*break*/ ,
                        5
                    ];
                    // `_data` is a promise
                    isAsyncMutation = true;
                    _b.label = 1;
                case 1:
                    _b.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    return [
                        4 /*yield*/ ,
                        _data
                    ];
                case 2:
                    data = _b.sent();
                    return [
                        3 /*break*/ ,
                        4
                    ];
                case 3:
                    err_1 = _b.sent();
                    error = err_1;
                    return [
                        3 /*break*/ ,
                        4
                    ];
                case 4:
                    return [
                        3 /*break*/ ,
                        6
                    ];
                case 5:
                    data = _data;
                    _b.label = 6;
                case 6:
                    shouldAbort = function() {
                        // check if other mutations have occurred since we've started this mutation
                        if (beforeMutationTs !== MUTATION_TS[key] || beforeConcurrentPromisesTs !== CONCURRENT_PROMISES_TS[key]) {
                            if (error) throw error;
                            return true;
                        }
                    };
                    // if there's a race we don't update cache or broadcast change, just return the data
                    if (shouldAbort()) return [
                        2 /*return*/ ,
                        data
                    ];
                    if (typeof data !== "undefined") // update cached data
                    (0, _config.cache).set(key, data);
                    // always update or reset the error
                    (0, _config.cache).set(keyErr, error);
                    // reset the timestamp to mark the mutation has ended
                    MUTATION_END_TS[key] = now() - 1;
                    if (!!isAsyncMutation) return [
                        3 /*break*/ ,
                        8
                    ];
                    // let's always broadcast in the next tick
                    // to dedupe synchronous mutation calls
                    // check out https://github.com/vercel/swr/pull/735 for more details
                    return [
                        4 /*yield*/ ,
                        0
                    ];
                case 7:
                    // let's always broadcast in the next tick
                    // to dedupe synchronous mutation calls
                    // check out https://github.com/vercel/swr/pull/735 for more details
                    _b.sent();
                    // we skip broadcasting if there's another mutation happened synchronously
                    if (shouldAbort()) return [
                        2 /*return*/ ,
                        data
                    ];
                    _b.label = 8;
                case 8:
                    updaters = CACHE_REVALIDATORS[key];
                    if (updaters) {
                        promises = [];
                        for(i = 0; i < updaters.length; ++i)promises.push(updaters[i](!!shouldRevalidate, data, error, undefined, i > 0));
                        // return new updated value
                        return [
                            2 /*return*/ ,
                            Promise.all(promises).then(function() {
                                if (error) throw error;
                                return (0, _config.cache).get(key);
                            })
                        ];
                    }
                    // throw error or return data to be used by caller of mutate
                    if (error) throw error;
                    return [
                        2 /*return*/ ,
                        data
                    ];
            }
        });
    });
};
function useSWR() {
    var _this = this;
    var args = [];
    for(var _i1 = 0; _i1 < arguments.length; _i1++)args[_i1] = arguments[_i1];
    var _key, fn, config = {};
    if (args.length >= 1) _key = args[0];
    if (args.length > 2) {
        fn = args[1];
        config = args[2];
    } else if (typeof args[1] === "function") fn = args[1];
    else if (typeof args[1] === "object") config = args[1];
    // we assume `key` as the identifier of the request
    // `key` can change but `fn` shouldn't
    // (because `revalidate` only depends on `key`)
    // `keyErr` is the cache key for error objects
    var _a1 = (0, _config.cache).serializeKey(_key), key = _a1[0], fnArgs = _a1[1], keyErr = _a1[2], keyValidating = _a1[3];
    config = Object.assign({}, (0, _configDefault.default), (0, _hooks.useContext)((0, _swrConfigContextDefault.default)), config);
    var configRef = (0, _hooks.useRef)(config);
    useIsomorphicLayoutEffect(function() {
        configRef.current = config;
    }, []);
    if (typeof fn === "undefined") // use the global fetcher
    fn = config.fetcher;
    var resolveData = function() {
        var cachedData = (0, _config.cache).get(key);
        return typeof cachedData === "undefined" ? config.initialData : cachedData;
    };
    var initialData = resolveData();
    var initialError = (0, _config.cache).get(keyErr);
    var initialIsValidating = !!(0, _config.cache).get(keyValidating);
    // if a state is accessed (data, error or isValidating),
    // we add the state to dependencies so if the state is
    // updated in the future, we can trigger a rerender
    var stateDependencies = (0, _hooks.useRef)({
        data: false,
        error: false,
        isValidating: false
    });
    var stateRef = (0, _hooks.useRef)({
        data: initialData,
        error: initialError,
        isValidating: initialIsValidating
    });
    // display the data label in the React DevTools next to SWR hooks
    (0, _hooks.useDebugValue)(stateRef.current.data);
    var rerender = (0, _hooks.useState)(null)[1];
    var dispatch = (0, _hooks.useCallback)(function(payload) {
        var shouldUpdateState = false;
        for(var k in payload){
            if (stateRef.current[k] === payload[k]) continue;
            stateRef.current[k] = payload[k];
            if (stateDependencies.current[k]) shouldUpdateState = true;
        }
        if (shouldUpdateState || config.suspense) {
            // if component is unmounted, should skip rerender
            // if component is not mounted, should skip rerender
            if (unmountedRef.current || !initialMountedRef.current) return;
            rerender({});
        }
    }, []);
    // error ref inside revalidate (is last request errored?)
    var unmountedRef = (0, _hooks.useRef)(false);
    var keyRef = (0, _hooks.useRef)(key);
    // check if component is mounted in suspense mode
    var initialMountedRef = (0, _hooks.useRef)(false);
    // do unmount check for callbacks
    var eventsRef = (0, _hooks.useRef)({
        emit: function(event) {
            var _a;
            var params = [];
            for(var _i = 1; _i < arguments.length; _i++)params[_i - 1] = arguments[_i];
            if (unmountedRef.current) return;
            if (!initialMountedRef.current) return;
            (_a = configRef.current)[event].apply(_a, params);
        }
    });
    var boundMutate = (0, _hooks.useCallback)(function(data, shouldRevalidate) {
        return mutate(keyRef.current, data, shouldRevalidate);
    }, []);
    var addRevalidator = function(revalidators, callback) {
        if (!callback) return;
        if (!revalidators[key]) revalidators[key] = [
            callback
        ];
        else revalidators[key].push(callback);
    };
    var removeRevalidator = function(revlidators, callback) {
        if (revlidators[key]) {
            var revalidators = revlidators[key];
            var index = revalidators.indexOf(callback);
            if (index >= 0) {
                // 10x faster than splice
                // https://jsperf.com/array-remove-by-index
                revalidators[index] = revalidators[revalidators.length - 1];
                revalidators.pop();
            }
        }
    };
    // start a revalidation
    var revalidate = (0, _hooks.useCallback)(function(revalidateOpts) {
        if (revalidateOpts === void 0) revalidateOpts = {};
        return __awaiter(_this, void 0, void 0, function() {
            var loading, shouldDeduping, newData, startAt, newState, err_2, retryCount;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!key || !fn) return [
                            2 /*return*/ ,
                            false
                        ];
                        if (unmountedRef.current) return [
                            2 /*return*/ ,
                            false
                        ];
                        revalidateOpts = Object.assign({
                            dedupe: false
                        }, revalidateOpts);
                        loading = true;
                        shouldDeduping = typeof CONCURRENT_PROMISES[key] !== "undefined" && revalidateOpts.dedupe;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([
                            1,
                            6,
                            ,
                            7
                        ]);
                        dispatch({
                            isValidating: true
                        });
                        (0, _config.cache).set(keyValidating, true);
                        if (!shouldDeduping) // also update other hooks
                        broadcastState(key, stateRef.current.data, stateRef.current.error, true);
                        newData = void 0;
                        startAt = void 0;
                        if (!shouldDeduping) return [
                            3 /*break*/ ,
                            3
                        ];
                        // there's already an ongoing request,
                        // this one needs to be deduplicated.
                        startAt = CONCURRENT_PROMISES_TS[key];
                        return [
                            4 /*yield*/ ,
                            CONCURRENT_PROMISES[key]
                        ];
                    case 2:
                        newData = _a.sent();
                        return [
                            3 /*break*/ ,
                            5
                        ];
                    case 3:
                        // if no cache being rendered currently (it shows a blank page),
                        // we trigger the loading slow event.
                        if (config.loadingTimeout && !(0, _config.cache).get(key)) setTimeout(function() {
                            if (loading) eventsRef.current.emit("onLoadingSlow", key, config);
                        }, config.loadingTimeout);
                        if (fnArgs !== null) CONCURRENT_PROMISES[key] = fn.apply(void 0, fnArgs);
                        else CONCURRENT_PROMISES[key] = fn(key);
                        CONCURRENT_PROMISES_TS[key] = startAt = now();
                        return [
                            4 /*yield*/ ,
                            CONCURRENT_PROMISES[key]
                        ];
                    case 4:
                        newData = _a.sent();
                        setTimeout(function() {
                            delete CONCURRENT_PROMISES[key];
                            delete CONCURRENT_PROMISES_TS[key];
                        }, config.dedupingInterval);
                        // trigger the success event,
                        // only do this for the original request.
                        eventsRef.current.emit("onSuccess", newData, key, config);
                        _a.label = 5;
                    case 5:
                        // if there're other ongoing request(s), started after the current one,
                        // we need to ignore the current one to avoid possible race conditions:
                        //   req1------------------>res1        (current one)
                        //        req2---------------->res2
                        // the request that fired later will always be kept.
                        if (CONCURRENT_PROMISES_TS[key] > startAt) return [
                            2 /*return*/ ,
                            false
                        ];
                        // if there're other mutations(s), overlapped with the current revalidation:
                        // case 1:
                        //   req------------------>res
                        //       mutate------>end
                        // case 2:
                        //         req------------>res
                        //   mutate------>end
                        // case 3:
                        //   req------------------>res
                        //       mutate-------...---------->
                        // we have to ignore the revalidation result (res) because it's no longer fresh.
                        // meanwhile, a new revalidation should be triggered when the mutation ends.
                        if (MUTATION_TS[key] && (startAt <= MUTATION_TS[key] || // case 2
                        startAt <= MUTATION_END_TS[key] || // case 3
                        MUTATION_END_TS[key] === 0)) {
                            dispatch({
                                isValidating: false
                            });
                            return [
                                2 /*return*/ ,
                                false
                            ];
                        }
                        (0, _config.cache).set(key, newData);
                        (0, _config.cache).set(keyErr, undefined);
                        (0, _config.cache).set(keyValidating, false);
                        newState = {
                            isValidating: false
                        };
                        if (typeof stateRef.current.error !== "undefined") // we don't have an error
                        newState.error = undefined;
                        if (!config.compare(stateRef.current.data, newData)) // deep compare to avoid extra re-render
                        // data changed
                        newState.data = newData;
                        // merge the new state
                        dispatch(newState);
                        if (!shouldDeduping) // also update other hooks
                        broadcastState(key, newData, newState.error, false);
                        return [
                            3 /*break*/ ,
                            7
                        ];
                    case 6:
                        err_2 = _a.sent();
                        delete CONCURRENT_PROMISES[key];
                        delete CONCURRENT_PROMISES_TS[key];
                        (0, _config.cache).set(keyErr, err_2);
                        // get a new error
                        // don't use deep equal for errors
                        if (stateRef.current.error !== err_2) {
                            // we keep the stale data
                            dispatch({
                                isValidating: false,
                                error: err_2
                            });
                            if (!shouldDeduping) // also broadcast to update other hooks
                            broadcastState(key, undefined, err_2, false);
                        }
                        // events and retry
                        eventsRef.current.emit("onError", err_2, key, config);
                        if (config.shouldRetryOnError) {
                            retryCount = (revalidateOpts.retryCount || 0) + 1;
                            eventsRef.current.emit("onErrorRetry", err_2, key, config, revalidate, Object.assign({
                                dedupe: true
                            }, revalidateOpts, {
                                retryCount: retryCount
                            }));
                        }
                        return [
                            3 /*break*/ ,
                            7
                        ];
                    case 7:
                        loading = false;
                        return [
                            2 /*return*/ ,
                            true
                        ];
                }
            });
        });
    }, [
        key
    ]);
    // mounted (client side rendering)
    useIsomorphicLayoutEffect(function() {
        if (!key) return undefined;
        // after `key` updates, we need to mark it as mounted
        unmountedRef.current = false;
        initialMountedRef.current = true;
        // after the component is mounted (hydrated),
        // we need to update the data from the cache
        // and trigger a revalidation
        var currentHookData = stateRef.current.data;
        var latestKeyedData = resolveData();
        // update the state if the key changed (not the inital render) or cache updated
        if (keyRef.current !== key) keyRef.current = key;
        if (!config.compare(currentHookData, latestKeyedData)) dispatch({
            data: latestKeyedData
        });
        // revalidate with deduping
        var softRevalidate = function() {
            return revalidate({
                dedupe: true
            });
        };
        // trigger a revalidation
        if (config.revalidateOnMount || !config.initialData && config.revalidateOnMount === undefined) {
            if (typeof latestKeyedData !== "undefined") // delay revalidate if there's cache
            // to not block the rendering
            rAF(softRevalidate);
            else softRevalidate();
        }
        var pending = false;
        var onFocus = function() {
            if (pending || !configRef.current.revalidateOnFocus) return;
            pending = true;
            softRevalidate();
            setTimeout(function() {
                return pending = false;
            }, configRef.current.focusThrottleInterval);
        };
        var onReconnect = function() {
            if (configRef.current.revalidateOnReconnect) softRevalidate();
        };
        // register global cache update listener
        var onUpdate = function(shouldRevalidate, updatedData, updatedError, updatedIsValidating, dedupe) {
            if (shouldRevalidate === void 0) shouldRevalidate = true;
            if (dedupe === void 0) dedupe = true;
            // update hook state
            var newState = {};
            var needUpdate = false;
            if (typeof updatedData !== "undefined" && !config.compare(stateRef.current.data, updatedData)) {
                newState.data = updatedData;
                needUpdate = true;
            }
            // always update error
            // because it can be `undefined`
            if (stateRef.current.error !== updatedError) {
                newState.error = updatedError;
                needUpdate = true;
            }
            if (typeof updatedIsValidating !== "undefined" && stateRef.current.isValidating !== updatedIsValidating) {
                newState.isValidating = updatedIsValidating;
                needUpdate = true;
            }
            if (needUpdate) dispatch(newState);
            if (shouldRevalidate) {
                if (dedupe) return softRevalidate();
                return revalidate();
            }
            return false;
        };
        addRevalidator(FOCUS_REVALIDATORS, onFocus);
        addRevalidator(RECONNECT_REVALIDATORS, onReconnect);
        addRevalidator(CACHE_REVALIDATORS, onUpdate);
        return function() {
            // cleanup
            dispatch = function() {
                return null;
            };
            // mark it as unmounted
            unmountedRef.current = true;
            removeRevalidator(FOCUS_REVALIDATORS, onFocus);
            removeRevalidator(RECONNECT_REVALIDATORS, onReconnect);
            removeRevalidator(CACHE_REVALIDATORS, onUpdate);
        };
    }, [
        key,
        revalidate
    ]);
    useIsomorphicLayoutEffect(function() {
        var timer = null;
        var tick = function() {
            return __awaiter(_this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            if (!(!stateRef.current.error && (configRef.current.refreshWhenHidden || configRef.current.isDocumentVisible()) && (configRef.current.refreshWhenOffline || configRef.current.isOnline()))) return [
                                3 /*break*/ ,
                                2
                            ];
                            // only revalidate when the page is visible
                            // if API request errored, we stop polling in this round
                            // and let the error retry function handle it
                            return [
                                4 /*yield*/ ,
                                revalidate({
                                    dedupe: true
                                })
                            ];
                        case 1:
                            // only revalidate when the page is visible
                            // if API request errored, we stop polling in this round
                            // and let the error retry function handle it
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            // Read the latest refreshInterval
                            if (configRef.current.refreshInterval) timer = setTimeout(tick, configRef.current.refreshInterval);
                            return [
                                2 /*return*/ 
                            ];
                    }
                });
            });
        };
        if (configRef.current.refreshInterval) timer = setTimeout(tick, configRef.current.refreshInterval);
        return function() {
            if (timer) clearTimeout(timer);
        };
    }, [
        config.refreshInterval,
        config.refreshWhenHidden,
        config.refreshWhenOffline,
        revalidate
    ]);
    // define returned state
    // can be memorized since the state is a ref
    var memoizedState = (0, _hooks.useMemo)(function() {
        var state = {
            revalidate: revalidate,
            mutate: boundMutate
        };
        Object.defineProperties(state, {
            error: {
                // `key` might be changed in the upcoming hook re-render,
                // but the previous state will stay
                // so we need to match the latest key and data (fallback to `initialData`)
                get: function() {
                    stateDependencies.current.error = true;
                    return keyRef.current === key ? stateRef.current.error : initialError;
                },
                enumerable: true
            },
            data: {
                get: function() {
                    stateDependencies.current.data = true;
                    return keyRef.current === key ? stateRef.current.data : initialData;
                },
                enumerable: true
            },
            isValidating: {
                get: function() {
                    stateDependencies.current.isValidating = true;
                    return key ? stateRef.current.isValidating : false;
                },
                enumerable: true
            }
        });
        return state;
    }, [
        revalidate
    ]);
    // suspense
    if (config.suspense) {
        // in suspense mode, we can't return empty state
        // (it should be suspended)
        // try to get data and error from cache
        var latestData = (0, _config.cache).get(key);
        var latestError = (0, _config.cache).get(keyErr);
        if (typeof latestData === "undefined") latestData = initialData;
        if (typeof latestError === "undefined") latestError = initialError;
        if (typeof latestData === "undefined" && typeof latestError === "undefined") {
            // need to start the request if it hasn't
            if (!CONCURRENT_PROMISES[key]) // trigger revalidate immediately
            // to get the promise
            // in this revalidate, should not rerender
            revalidate();
            if (CONCURRENT_PROMISES[key] && typeof CONCURRENT_PROMISES[key].then === "function") // if it is a promise
            throw CONCURRENT_PROMISES[key];
            // it's a value, return it directly (override)
            latestData = CONCURRENT_PROMISES[key];
        }
        if (typeof latestData === "undefined" && latestError) // in suspense mode, throw error if there's no content
        throw latestError;
        // return the latest data / error from cache
        // in case `key` has changed
        return {
            error: latestError,
            data: latestData,
            revalidate: revalidate,
            mutate: boundMutate,
            isValidating: stateRef.current.isValidating
        };
    }
    return memoizedState;
}
var SWRConfig = (0, _swrConfigContextDefault.default).Provider;
exports.default = useSWR;

},{"preact/hooks":"eZN76","./config":"ivMWF","./swr-config-context":"1RcaS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ivMWF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cache", ()=>cache);
var _lite = require("dequal/lite");
var _cache = require("./cache");
var _cacheDefault = parcelHelpers.interopDefault(_cache);
var _webPreset = require("./libs/web-preset");
var _webPresetDefault = parcelHelpers.interopDefault(_webPreset);
// cache
var cache = new (0, _cacheDefault.default)();
// error retry
function onErrorRetry(_, __, config, revalidate, opts) {
    if (!config.isDocumentVisible()) // if it's hidden, stop
    // it will auto revalidate when focus
    return;
    if (typeof config.errorRetryCount === "number" && opts.retryCount > config.errorRetryCount) return;
    // exponential backoff
    var count = Math.min(opts.retryCount || 0, 8);
    var timeout = ~~((Math.random() + 0.5) * (1 << count)) * config.errorRetryInterval;
    setTimeout(revalidate, timeout, opts);
}
// client side: need to adjust the config
// based on the browser status
// slow connection (<= 70Kbps)
var slowConnection = typeof window !== "undefined" && navigator["connection"] && [
    "slow-2g",
    "2g"
].indexOf(navigator["connection"].effectiveType) !== -1;
// config
var defaultConfig = {
    // events
    onLoadingSlow: function() {},
    onSuccess: function() {},
    onError: function() {},
    onErrorRetry: onErrorRetry,
    errorRetryInterval: (slowConnection ? 10 : 5) * 1000,
    focusThrottleInterval: 5000,
    dedupingInterval: 2000,
    loadingTimeout: (slowConnection ? 5 : 3) * 1000,
    refreshInterval: 0,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    refreshWhenHidden: false,
    refreshWhenOffline: false,
    shouldRetryOnError: true,
    suspense: false,
    compare: (0, _lite.dequal),
    fetcher: (0, _webPresetDefault.default).fetcher,
    isOnline: (0, _webPresetDefault.default).isOnline,
    isDocumentVisible: (0, _webPresetDefault.default).isDocumentVisible
};
exports.default = defaultConfig;

},{"dequal/lite":"cFomR","./cache":"4YTfo","./libs/web-preset":"i6JZ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cFomR":[function(require,module,exports) {
var has = Object.prototype.hasOwnProperty;
function dequal(foo, bar) {
    var ctor, len;
    if (foo === bar) return true;
    if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
        if (ctor === Date) return foo.getTime() === bar.getTime();
        if (ctor === RegExp) return foo.toString() === bar.toString();
        if (ctor === Array) {
            if ((len = foo.length) === bar.length) {
                while(len-- && dequal(foo[len], bar[len]));
            }
            return len === -1;
        }
        if (!ctor || typeof foo === "object") {
            len = 0;
            for(ctor in foo){
                if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
                if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
            }
            return Object.keys(bar).length === len;
        }
    }
    return foo !== foo && bar !== bar;
}
exports.dequal = dequal;

},{}],"4YTfo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hash = require("./libs/hash");
var _hashDefault = parcelHelpers.interopDefault(_hash);
var Cache = /** @class */ function() {
    function Cache1(initialData) {
        if (initialData === void 0) initialData = {};
        this.__cache = new Map(Object.entries(initialData));
        this.__listeners = [];
    }
    Cache1.prototype.get = function(key) {
        var _key = this.serializeKey(key)[0];
        return this.__cache.get(_key);
    };
    Cache1.prototype.set = function(key, value) {
        var _key = this.serializeKey(key)[0];
        this.__cache.set(_key, value);
        this.notify();
    };
    Cache1.prototype.keys = function() {
        return Array.from(this.__cache.keys());
    };
    Cache1.prototype.has = function(key) {
        var _key = this.serializeKey(key)[0];
        return this.__cache.has(_key);
    };
    Cache1.prototype.clear = function() {
        this.__cache.clear();
        this.notify();
    };
    Cache1.prototype.delete = function(key) {
        var _key = this.serializeKey(key)[0];
        this.__cache.delete(_key);
        this.notify();
    };
    // TODO: introduce namespace for the cache
    Cache1.prototype.serializeKey = function(key) {
        var args = null;
        if (typeof key === "function") try {
            key = key();
        } catch (err) {
            // dependencies not ready
            key = "";
        }
        if (Array.isArray(key)) {
            // args array
            args = key;
            key = (0, _hashDefault.default)(key);
        } else // convert null to ''
        key = String(key || "");
        var errorKey = key ? "err@" + key : "";
        var isValidatingKey = key ? "validating@" + key : "";
        return [
            key,
            args,
            errorKey,
            isValidatingKey
        ];
    };
    Cache1.prototype.subscribe = function(listener) {
        var _this = this;
        if (typeof listener !== "function") throw new Error("Expected the listener to be a function.");
        var isSubscribed = true;
        this.__listeners.push(listener);
        return function() {
            if (!isSubscribed) return;
            isSubscribed = false;
            var index = _this.__listeners.indexOf(listener);
            if (index > -1) {
                _this.__listeners[index] = _this.__listeners[_this.__listeners.length - 1];
                _this.__listeners.length--;
            }
        };
    };
    // Notify Cache subscribers about a change in the cache
    Cache1.prototype.notify = function() {
        for(var _i = 0, _a = this.__listeners; _i < _a.length; _i++){
            var listener = _a[_i];
            listener();
        }
    };
    return Cache1;
}();
exports.default = Cache;

},{"./libs/hash":"jJHDR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jJHDR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
var table = new WeakMap();
// counter of the key
var counter = 0;
function hash(args) {
    if (!args.length) return "";
    var key = "arg";
    for(var i = 0; i < args.length; ++i){
        if (args[i] === null) {
            key += "@null";
            continue;
        }
        var _hash = void 0;
        if (typeof args[i] !== "object" && typeof args[i] !== "function") {
            // need to consider the case that args[i] is a string:
            // args[i]        _hash
            // "undefined" -> '"undefined"'
            // undefined   -> 'undefined'
            // 123         -> '123'
            // "null"      -> '"null"'
            if (typeof args[i] === "string") _hash = '"' + args[i] + '"';
            else _hash = String(args[i]);
        } else if (!table.has(args[i])) {
            _hash = counter;
            table.set(args[i], counter++);
        } else _hash = table.get(args[i]);
        key += "@" + _hash;
    }
    return key;
}
exports.default = hash;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i6JZ9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isOnline() {
    if (typeof navigator.onLine !== "undefined") return navigator.onLine;
    // always assume it's online
    return true;
}
function isDocumentVisible() {
    if (typeof document !== "undefined" && typeof document.visibilityState !== "undefined") return document.visibilityState !== "hidden";
    // always assume it's visible
    return true;
}
var fetcher = function(url) {
    return fetch(url).then(function(res) {
        return res.json();
    });
};
exports.default = {
    isOnline: isOnline,
    isDocumentVisible: isDocumentVisible,
    fetcher: fetcher
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1RcaS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _preact = require("preact");
var SWRConfigContext = (0, _preact.createContext)({});
SWRConfigContext.displayName = "SWRConfigContext";
exports.default = SWRConfigContext;

},{"preact":"26zcy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"W2bML":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useSWRInfinite", ()=>useSWRInfinite);
var _hooks = require("preact/hooks");
var _config = require("./config");
var _configDefault = parcelHelpers.interopDefault(_config);
var _swrConfigContext = require("./swr-config-context");
var _swrConfigContextDefault = parcelHelpers.interopDefault(_swrConfigContext);
var _useSwr = require("./use-swr");
var _useSwrDefault = parcelHelpers.interopDefault(_useSwr);
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
function useSWRInfinite() {
    var _this = this;
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var getKey, fn, config = {};
    if (args.length >= 1) getKey = args[0];
    if (args.length > 2) {
        fn = args[1];
        config = args[2];
    } else if (typeof args[1] === "function") fn = args[1];
    else if (typeof args[1] === "object") config = args[1];
    config = Object.assign({}, (0, _configDefault.default), (0, _hooks.useContext)((0, _swrConfigContextDefault.default)), config);
    var _a1 = config.initialSize, initialSize = _a1 === void 0 ? 1 : _a1, _b1 = config.revalidateAll, revalidateAll = _b1 === void 0 ? false : _b1, _c1 = config.persistSize, persistSize = _c1 === void 0 ? false : _c1, defaultFetcher = config.fetcher, extraConfig = __rest(config, [
        "initialSize",
        "revalidateAll",
        "persistSize",
        "fetcher"
    ]);
    if (typeof fn === "undefined") // use the global fetcher
    // we have to convert the type here
    fn = defaultFetcher;
    // get the serialized key of the first page
    var firstPageKey = null;
    try {
        firstPageKey = (0, _config.cache).serializeKey(getKey(0, null))[0];
    } catch (err) {
    // not ready
    }
    var rerender = (0, _hooks.useState)(false)[1];
    // we use cache to pass extra info (context) to fetcher so it can be globally shared
    // here we get the key of the fetcher context cache
    var contextCacheKey = null;
    if (firstPageKey) contextCacheKey = "context@" + firstPageKey;
    // page count is cached as well, so when navigating the list can be restored
    var pageCountCacheKey = null;
    var cachedPageSize;
    if (firstPageKey) {
        pageCountCacheKey = "size@" + firstPageKey;
        cachedPageSize = (0, _config.cache).get(pageCountCacheKey);
    }
    var pageCountRef = (0, _hooks.useRef)(cachedPageSize || initialSize);
    var didMountRef = (0, _hooks.useRef)(false);
    // every time the key changes, we reset the page size if it's not persisted
    (0, _hooks.useEffect)(function() {
        if (didMountRef.current) {
            if (!persistSize) pageCountRef.current = initialSize;
        } else didMountRef.current = true;
    }, [
        firstPageKey
    ]);
    // actual swr of all pages
    var swr = (0, _useSwrDefault.default)(firstPageKey ? [
        "many",
        firstPageKey
    ] : null, function() {
        return __awaiter(_this, void 0, void 0, function() {
            var _a, originalData, force, data, previousPageData, i, _b, pageKey, pageArgs, pageData, shouldRevalidatePage;
            return __generator(this, function(_c) {
                switch(_c.label){
                    case 0:
                        _a = (0, _config.cache).get(contextCacheKey) || {}, originalData = _a.originalData, force = _a.force;
                        data = [];
                        previousPageData = null;
                        i = 0;
                        _c.label = 1;
                    case 1:
                        if (!(i < pageCountRef.current)) return [
                            3 /*break*/ ,
                            8
                        ];
                        _b = (0, _config.cache).serializeKey(getKey(i, previousPageData)), pageKey = _b[0], pageArgs = _b[1];
                        if (!pageKey) // pageKey is falsy, stop fetching next pages
                        return [
                            3 /*break*/ ,
                            8
                        ];
                        pageData = (0, _config.cache).get(pageKey);
                        shouldRevalidatePage = revalidateAll || force || typeof force === "undefined" && i === 0 || originalData && !config.compare(originalData[i], pageData) || typeof pageData === "undefined";
                        if (!shouldRevalidatePage) return [
                            3 /*break*/ ,
                            6
                        ];
                        if (!(pageArgs !== null)) return [
                            3 /*break*/ ,
                            3
                        ];
                        return [
                            4 /*yield*/ ,
                            fn.apply(void 0, pageArgs)
                        ];
                    case 2:
                        pageData = _c.sent();
                        return [
                            3 /*break*/ ,
                            5
                        ];
                    case 3:
                        return [
                            4 /*yield*/ ,
                            fn(pageKey)
                        ];
                    case 4:
                        pageData = _c.sent();
                        _c.label = 5;
                    case 5:
                        (0, _config.cache).set(pageKey, pageData);
                        _c.label = 6;
                    case 6:
                        data.push(pageData);
                        previousPageData = pageData;
                        _c.label = 7;
                    case 7:
                        ++i;
                        return [
                            3 /*break*/ ,
                            1
                        ];
                    case 8:
                        // once we executed the data fetching based on the context, clear the context
                        (0, _config.cache).delete(contextCacheKey);
                        // return the data
                        return [
                            2 /*return*/ ,
                            data
                        ];
                }
            });
        });
    }, extraConfig);
    // keep the data inside a ref
    var dataRef = (0, _hooks.useRef)(swr.data);
    (0, _hooks.useEffect)(function() {
        dataRef.current = swr.data;
    }, [
        swr.data
    ]);
    var mutate = (0, _hooks.useCallback)(function(data, shouldRevalidate) {
        if (shouldRevalidate === void 0) shouldRevalidate = true;
        if (shouldRevalidate && typeof data !== "undefined") {
            // we only revalidate the pages that are changed
            var originalData = dataRef.current;
            (0, _config.cache).set(contextCacheKey, {
                originalData: originalData,
                force: false
            });
        } else if (shouldRevalidate) // calling `mutate()`, we revalidate all pages
        (0, _config.cache).set(contextCacheKey, {
            force: true
        });
        return swr.mutate(data, shouldRevalidate);
    }, [
        swr.mutate,
        contextCacheKey
    ]);
    // extend the SWR API
    var size = pageCountRef.current;
    var setSize = (0, _hooks.useCallback)(function(arg) {
        if (typeof arg === "function") pageCountRef.current = arg(pageCountRef.current);
        else if (typeof arg === "number") pageCountRef.current = arg;
        (0, _config.cache).set(pageCountCacheKey, pageCountRef.current);
        rerender(function(v) {
            return !v;
        });
        return mutate(function(v) {
            return v;
        });
    }, [
        mutate,
        pageCountCacheKey
    ]);
    return __assign(__assign({}, swr), {
        mutate: mutate,
        size: size,
        setSize: setSize
    });
}

},{"preact/hooks":"eZN76","./config":"ivMWF","./swr-config-context":"1RcaS","./use-swr":"jCPg1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"BtK27":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Widgets", ()=>Widgets);
var _preact = require("preact");
var _hooks = require("preact/hooks");
var _trip = require("src/api/trip");
var _snippet = require("src/components/Snippet/Snippet");
var _routes = require("src/config/Routes");
var _widgets = require("src/config/Widgets");
var _tripWidget = require("src/pages/TripWidget");
const Widgets = ()=>{
    const [slug, setSlug] = (0, _hooks.useState)((0, _routes.getTripSlugFromUrl)((0, _widgets.EXAMPLE_TRIP)));
    const { data , error , isValidating  } = (0, _trip.useTripBySlug)(slug, {
        refreshInterval: 0
    });
    (0, _hooks.useEffect)(()=>{
        if (data) {
            if (window.OGWidgets) window.OGWidgets.init();
            else require("5dcd195c0dac97ef").then(()=>{
                window.OGWidgets.init();
            });
        }
    }, [
        data,
        window.OGWidgets
    ]);
    return /*#__PURE__*/ (0, _preact.h)("div", {
        class: "content",
        __source: {
            fileName: "src/pages/Widgets.tsx",
            lineNumber: 27,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _preact.h)("h3", {
        __source: {
            fileName: "src/pages/Widgets.tsx",
            lineNumber: 28,
            columnNumber: 7
        },
        __self: undefined
    }, "Enter experience URL:"), /*#__PURE__*/ (0, _preact.h)("form", {
        __source: {
            fileName: "src/pages/Widgets.tsx",
            lineNumber: 29,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _preact.h)("label", {
        for: "tripUrl",
        __source: {
            fileName: "src/pages/Widgets.tsx",
            lineNumber: 30,
            columnNumber: 9
        },
        __self: undefined
    }, "Trip URL:"), /*#__PURE__*/ (0, _preact.h)("input", {
        id: "tripUrl",
        placeholder: "Enter Trip Url from outguided.com",
        defaultValue: (0, _widgets.EXAMPLE_TRIP),
        onInput: ({ target  })=>setSlug((0, _routes.getTripSlugFromUrl)(target?.value)),
        __source: {
            fileName: "src/pages/Widgets.tsx",
            lineNumber: 31,
            columnNumber: 9
        },
        __self: undefined
    })), error && !isValidating && /*#__PURE__*/ (0, _preact.h)("h4", {
        __source: {
            fileName: "src/pages/Widgets.tsx",
            lineNumber: 38,
            columnNumber: 34
        },
        __self: undefined
    }, error.message), data && /*#__PURE__*/ (0, _preact.h)((0, _preact.Fragment), {
        __source: {
            fileName: "src/pages/Widgets.tsx",
            lineNumber: 40,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _preact.h)("h3", {
        __source: {
            fileName: "src/pages/Widgets.tsx",
            lineNumber: 41,
            columnNumber: 11
        },
        __self: undefined
    }, "Place this Link inside you page content where you want to show widget"), /*#__PURE__*/ (0, _preact.h)((0, _snippet.Snippet), {
        code: (0, _tripWidget.TripWidget).Link(data.slug, {
            withEmbedCode: true
        }),
        __source: {
            fileName: "src/pages/Widgets.tsx",
            lineNumber: 42,
            columnNumber: 11
        },
        __self: undefined
    }), /*#__PURE__*/ (0, _preact.h)("h4", {
        class: "preview__title",
        __source: {
            fileName: "src/pages/Widgets.tsx",
            lineNumber: 43,
            columnNumber: 11
        },
        __self: undefined
    }, "Widget preview:"), /*#__PURE__*/ (0, _preact.h)("div", {
        class: "preview",
        dangerouslySetInnerHTML: {
            __html: (0, _tripWidget.TripWidget).Link(data.slug)
        },
        __source: {
            fileName: "src/pages/Widgets.tsx",
            lineNumber: 44,
            columnNumber: 11
        },
        __self: undefined
    }), /*#__PURE__*/ (0, _preact.h)("h3", {
        __source: {
            fileName: "src/pages/Widgets.tsx",
            lineNumber: 46,
            columnNumber: 11
        },
        __self: undefined
    }, "Place this Link inside you page content where you want to show code"), /*#__PURE__*/ (0, _preact.h)((0, _snippet.Snippet), {
        code: (0, _tripWidget.TripWidget).Link(data.slug, {
            withEmbedCode: true,
            data: {
                code: ""
            }
        }),
        __source: {
            fileName: "src/pages/Widgets.tsx",
            lineNumber: 47,
            columnNumber: 11
        },
        __self: undefined
    }), /*#__PURE__*/ (0, _preact.h)("h4", {
        class: "preview__title",
        __source: {
            fileName: "src/pages/Widgets.tsx",
            lineNumber: 48,
            columnNumber: 11
        },
        __self: undefined
    }, "Widget preview:"), /*#__PURE__*/ (0, _preact.h)("div", {
        class: "preview",
        dangerouslySetInnerHTML: {
            __html: (0, _tripWidget.TripWidget).Link(data.slug, {
                data: {
                    code: ""
                },
                withEmbedCode: true
            })
        },
        __source: {
            fileName: "src/pages/Widgets.tsx",
            lineNumber: 49,
            columnNumber: 11
        },
        __self: undefined
    })));
};

},{"preact":"26zcy","preact/hooks":"eZN76","src/api/trip":"79o4T","src/components/Snippet/Snippet":"gRvPY","src/config/Routes":"aU9Qo","src/config/Widgets":"2pGEw","src/pages/TripWidget":"8KJcq","5dcd195c0dac97ef":"fS9MB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"79o4T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getTripBySlug", ()=>getTripBySlug);
parcelHelpers.export(exports, "useTripBySlug", ()=>useTripBySlug);
parcelHelpers.export(exports, "getTripBySlugKey", ()=>getTripBySlugKey);
var _preactSwr = require("preact-swr");
var _preactSwrDefault = parcelHelpers.interopDefault(_preactSwr);
var _fetcher = require("./fetcher");
const BASE_PATH = `/marketing-pages`;
const getTripBySlug = async (slug)=>{
    if (!slug) return null;
    return await (0, _fetcher.fetcher)(`${BASE_PATH}/slug/${slug}`);
};
const useTripBySlug = (slug, options = {})=>{
    return (0, _preactSwrDefault.default)(getTripBySlugKey(slug), ()=>getTripBySlug(slug), options);
};
const getTripBySlugKey = (slug)=>"trips" + slug;

},{"preact-swr":"bPA2W","./fetcher":"bXfri","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fS9MB":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require("./helpers/bundle-url").getBundleURL("6EXJA") + "embed.fd23351f.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("kf4kV"));

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"61B45":[function(require,module,exports) {
"use strict";
var cacheLoader = require("../cacheLoader");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName("script");
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement("link");
        preloadLink.href = bundle;
        preloadLink.rel = "preload";
        preloadLink.as = "script";
        document.head.appendChild(preloadLink);
        var script1 = document.createElement("script");
        script1.async = true;
        script1.type = "text/javascript";
        script1.charset = "utf-8";
        script1.src = bundle;
        script1.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script1.onerror = script1.onload = null;
            script1.remove();
            reject(error);
        };
        script1.onload = function() {
            script1.onerror = script1.onload = null;
            resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(script1);
    });
});

},{"../cacheLoader":"j49pS"}],"j49pS":[function(require,module,exports) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case "preload":
            return cachedPreloads;
        case "prefetch":
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}]},["6FqiZ","4aBH6"], "4aBH6", "parcelRequire7009")

//# sourceMappingURL=index.2d3ace14.js.map
