// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"config/Routes.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tripLink = exports.hostLink = exports.getExternalUrl = exports.getEmbedUrl = exports.getEmbedPath = exports.TRIP_PAGE = exports.HOST_PAGE = void 0;
var TRIP_PAGE = '/experiences/:slug';
exports.TRIP_PAGE = TRIP_PAGE;
var HOST_PAGE = '/guides/:slug';
exports.HOST_PAGE = HOST_PAGE;

var tripLink = function tripLink(slug) {
  return TRIP_PAGE.replace(':slug', slug);
};

exports.tripLink = tripLink;

var hostLink = function hostLink(slug) {
  return HOST_PAGE.replace(':slug', slug);
};

exports.hostLink = hostLink;

var getEmbedPath = function getEmbedPath(path) {
  return "/embed".concat(path);
};

exports.getEmbedPath = getEmbedPath;

var getEmbedUrl = function getEmbedUrl(path) {
  return "".concat("http://localhost:1234").concat(path ? "/#".concat(getEmbedPath(path)) : '');
};

exports.getEmbedUrl = getEmbedUrl;

var getExternalUrl = function getExternalUrl(path) {
  if (path === void 0) {
    path = '';
  }

  return "".concat("https://www.outguided.com").concat(path);
};

exports.getExternalUrl = getExternalUrl;
},{}],"utils/messenger.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unregister = exports.sendToParent = exports.send = exports.register = void 0;

var sendToParent = function sendToParent(data, options) {
  if (options === void 0) {
    options = {
      targetOrigin: '*'
    };
  }

  window.parent.postMessage(data, options.targetOrigin);
};

exports.sendToParent = sendToParent;

var send = function send(data, options) {
  if (options === void 0) {
    options = {
      targetOrigin: '*'
    };
  }

  window.postMessage(data, options.targetOrigin);
};

exports.send = send;

var register = function register(listener) {
  window.addEventListener('message', listener, false);
};

exports.register = register;

var unregister = function unregister(listener) {
  window.removeEventListener('message', listener, false);
};

exports.unregister = unregister;
},{}],"embed.ts":[function(require,module,exports) {
"use strict";

var _Routes = require("./config/Routes");

var _messenger = require("./utils/messenger");

;

(function (window) {
  var OGWidgets = {
    processedWidgets: [],
    listeners: [],
    listenersRegistered: false,
    addListener: function addListener(listener) {
      this.listeners.push(listener);
    },
    registerListeners: function registerListeners() {
      var _this = this;

      if (!this.listenersRegistered) {
        (0, _messenger.register)(function (ev) {
          _this.listeners.forEach(function (listener) {
            return listener(ev);
          });
        });
        this.listenersRegistered = true;
      }
    },
    isValidWidgetElement: function isValidWidgetElement(element) {
      var _a;

      if (!((_a = element.getAttribute('href')) === null || _a === void 0 ? void 0 : _a.startsWith((0, _Routes.getExternalUrl)()))) {
        return false;
      }

      if (!element.dataset.ogWidget) {
        return false;
      }

      return true;
    },
    getWidgetListener: function getWidgetListener(element, iframe) {
      return function (event) {
        if ((0, _Routes.getEmbedUrl)().startsWith(event.origin)) {
          var type = event.data.type;

          switch (type) {
            case 'size':
              var _a = event.data,
                  width = _a.width,
                  height = _a.height;
              iframe.style.height = height + 'px';
              iframe.style.width = width + 'px';
              break;

            case 'other':
              console.log('other event');
              break;
          }
        }
      };
    },
    getWidgetCallbackUrl: function getWidgetCallbackUrl(name, _a) {
      var trip = _a.trip,
          guide = _a.guide;
      var url;

      switch (name) {
        case 'trip':
          url = trip && (0, _Routes.getEmbedUrl)((0, _Routes.tripLink)(trip));
          break;

        case 'guide':
          url = guide && (0, _Routes.getEmbedUrl)((0, _Routes.hostLink)(guide));
          break;
      }

      return url;
    },
    getWidgetsToInitialize: function getWidgetsToInitialize() {
      var _this = this;

      return Array.from(document.querySelectorAll('[data-og-widget]')).filter(function (widget) {
        return !_this.processedWidgets.includes(widget);
      });
    },
    initializeWidget: function initializeWidget(element) {
      this.processedWidgets.push(element);

      if (!this.isValidWidgetElement(element)) {
        return;
      }

      var _a = element.dataset,
          ogWidget = _a.ogWidget,
          ogTrip = _a.ogTrip,
          ogGuide = _a.ogGuide;
      var url = this.getWidgetCallbackUrl(ogWidget, {
        trip: ogTrip,
        guide: ogGuide
      });

      if (!url) {
        return;
      }

      var iframe = document.createElement('iframe');
      iframe.src = url;
      iframe.style.border = 'none';
      iframe.style.width = '0px';
      iframe.style.height = '0px';
      iframe.style.overflowX = 'hidden';
      iframe.style.overflowY = 'hidden';
      iframe.style.display = 'block';
      this.addListener(this.getWidgetListener(element, iframe));
      element.after(iframe);
      element.style.display = 'none';
    },
    init: function init() {
      this.registerListeners();
      this.getWidgetsToInitialize().forEach(this.initializeWidget.bind(this));
    }
  };

  if (!window.OGWidgets) {
    window.onload = function () {
      return OGWidgets.init();
    };

    window.OGWidgets = OGWidgets;
  }
})(window);
},{"./config/Routes":"config/Routes.ts","./utils/messenger":"utils/messenger.ts"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53726" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","embed.ts"], null)
//# sourceMappingURL=/embed.f68637fa.js.map