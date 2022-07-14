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
})({"config/Widgets.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EXAMPLE_TRIP = exports.EMBED_SCRIPT = void 0;
var EMBED_SCRIPT = "<script async src=\"".concat("http://localhost:1234", "/embed.js\"></script>");
exports.EMBED_SCRIPT = EMBED_SCRIPT;
var EXAMPLE_TRIP = 'https://www.outguided.com/experiences/24-hours-in-browns-canyon-deluxe-overnight-camping-experience-like-nothing-out-there-granite';
exports.EXAMPLE_TRIP = EXAMPLE_TRIP;
},{}],"utils/helper.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSnippetLink = exports.getId = exports.escapeRegExp = void 0;

var _Widgets = require("src/config/Widgets");

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var escapeRegExp = function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

exports.escapeRegExp = escapeRegExp;

var getSnippetLink = function getSnippetLink(url, label, _a) {
  if (label === void 0) {
    label = 'Powered by outguided.com';
  }

  var _b = _a === void 0 ? {} : _a,
      _c = _b.data,
      data = _c === void 0 ? {} : _c,
      withEmbedCode = _b.withEmbedCode;

  var attributeString = Object.keys(__assign(__assign({}, data), {
    widget: ''
  })).map(function (key) {
    return " data-og-".concat(key).concat(data[key] ? "=\"".concat(data[key], "\"") : '');
  }).join('');
  return "<a href=\"".concat(url, "\"").concat(attributeString, ">").concat(label, "</a>").concat(withEmbedCode ? _Widgets.EMBED_SCRIPT : '');
};

exports.getSnippetLink = getSnippetLink;

var getId = function getId() {
  return String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, '');
};

exports.getId = getId;
},{"src/config/Widgets":"config/Widgets.ts"}],"config/Routes.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tripLink = exports.hostLink = exports.getTripSlugFromUrl = exports.getHostSlugFromUrl = exports.getExternalUrl = exports.getEmbedUrl = exports.getEmbedSnippetUrl = exports.getEmbedSnippetPath = exports.getEmbedPath = exports.TRIP_PAGE = exports.HOST_PAGE = void 0;

var _helper = require("src/utils/helper");

var TRIP_PAGE = '/experiences/:slug';
exports.TRIP_PAGE = TRIP_PAGE;
var HOST_PAGE = '/guides/:slug';
exports.HOST_PAGE = HOST_PAGE;

var getTripSlugFromUrl = function getTripSlugFromUrl(url) {
  var _a;

  return (_a = url.match(new RegExp("^".concat((0, _helper.escapeRegExp)(getExternalUrl())).concat(TRIP_PAGE.replace(':slug', '([^/\?]+)'))))) === null || _a === void 0 ? void 0 : _a[1];
};

exports.getTripSlugFromUrl = getTripSlugFromUrl;

var getHostSlugFromUrl = function getHostSlugFromUrl(url) {
  var _a;

  return (_a = url.match(new RegExp("^".concat((0, _helper.escapeRegExp)(getExternalUrl())).concat(HOST_PAGE.replace(':slug', '([^/\?]+)'))))) === null || _a === void 0 ? void 0 : _a[1];
};

exports.getHostSlugFromUrl = getHostSlugFromUrl;

var tripLink = function tripLink(slug) {
  return TRIP_PAGE.replace(':slug', slug !== null && slug !== void 0 ? slug : '');
};

exports.tripLink = tripLink;

var hostLink = function hostLink(slug) {
  return HOST_PAGE.replace(':slug', slug !== null && slug !== void 0 ? slug : '');
};

exports.hostLink = hostLink;

var getEmbedPath = function getEmbedPath(path) {
  return "/embed".concat(path);
};

exports.getEmbedPath = getEmbedPath;

var getEmbedSnippetPath = function getEmbedSnippetPath(path) {
  return "/code".concat(path);
};

exports.getEmbedSnippetPath = getEmbedSnippetPath;

var getEmbedUrl = function getEmbedUrl(path) {
  return "".concat("http://localhost:1234").concat(path ? "/#".concat(getEmbedPath(path)) : '');
};

exports.getEmbedUrl = getEmbedUrl;

var getEmbedSnippetUrl = function getEmbedSnippetUrl(path) {
  return "".concat("http://localhost:1234").concat(path ? "/#".concat(getEmbedSnippetPath(path)) : '');
};

exports.getEmbedSnippetUrl = getEmbedSnippetUrl;

var getExternalUrl = function getExternalUrl(path) {
  if (path === void 0) {
    path = '';
  }

  return "".concat("https://www.outguided.com").concat(path);
};

exports.getExternalUrl = getExternalUrl;
},{"src/utils/helper":"utils/helper.ts"}],"utils/messenger.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unregister = exports.send = exports.register = void 0;

var send = function send(data, options) {
  var _a = options !== null && options !== void 0 ? options : {},
      target = _a.target,
      _b = _a.targetOrigin,
      targetOrigin = _b === void 0 ? '*' : _b;

  (target || window).postMessage(data, targetOrigin);
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

var _helper = require("./utils/helper");

var _messenger = require("./utils/messenger");

var IFRAME_STYLES = {
  border: 'none',
  width: '0px',
  height: '0px',
  'overflow-x': 'hidden',
  'overflow-y': 'hidden',
  display: 'block'
};
var IFRAME_ATTRIBUTES = {
  scrolling: 'no',
  frameborder: '0',
  allowtransparency: 'true',
  allowfullscreen: 'true'
};

(function (window) {
  var OGWidgets = {
    processedWidgets: [],
    listenerCallbacks: [],
    listenerRegistered: false,
    init: function init() {
      this.registerListener();
      var widgets = document.querySelectorAll("a[data-og-widget][href^=\"".concat((0, _Routes.getExternalUrl)(), "\"]"));
      widgets.forEach(this.initializeWidget.bind(this));
    },
    registerListener: function registerListener() {
      var _this = this;

      if (!this.listenerRegistered) {
        (0, _messenger.register)(function (ev) {
          _this.listenerCallbacks.forEach(function (listener) {
            return listener(ev);
          });
        });
        this.listenerRegistered = true;
      }
    },
    addListenerCallback: function addListenerCallback(listener) {
      this.listenerCallbacks.push(listener);
    },
    initializeWidget: function initializeWidget(element) {
      if (this.processedWidgets.includes(element)) {
        return;
      }

      this.processedWidgets.push(element);
      var url = this.getWidgetCallbackUrl(element);

      if (!url) {
        return;
      }

      var iframe = this.createIframe(url);

      iframe.onload = function () {
        element.remove();
      };

      element.after(iframe);
      this.addListenerCallback(this.getWidgetListenerCallback(iframe));
    },
    getWidgetCallbackUrl: function getWidgetCallbackUrl(element) {
      var url;
      var href = element.href,
          ogCode = element.dataset.ogCode;

      if ((0, _Routes.getTripSlugFromUrl)(href)) {
        url = (0, _Routes.tripLink)((0, _Routes.getTripSlugFromUrl)(href));
      } else if ((0, _Routes.getHostSlugFromUrl)(href)) {
        url = (0, _Routes.hostLink)((0, _Routes.getHostSlugFromUrl)(href));
      }

      return url ? typeof ogCode !== 'undefined' ? (0, _Routes.getEmbedSnippetUrl)(url) : (0, _Routes.getEmbedUrl)(url) : null;
    },
    createIframe: function createIframe(src) {
      var iframe;

      try {
        iframe = document.createElement('<iframe name="' + (0, _helper.getId)() + '"></iframe>');
      } catch (e) {
        iframe = document.createElement('iframe');
        iframe.name = (0, _helper.getId)();
      }

      iframe.src = src + '?source=' + encodeURIComponent(window.location.origin);
      Object.keys(IFRAME_ATTRIBUTES).forEach(function (attribute) {
        return iframe.setAttribute(attribute, IFRAME_ATTRIBUTES[attribute]);
      });
      Object.keys(IFRAME_STYLES).forEach(function (style) {
        return iframe.style.setProperty(style, IFRAME_STYLES[style]);
      });
      return iframe;
    },
    getWidgetListenerCallback: function getWidgetListenerCallback(iframe) {
      return function (event) {
        var _a = event,
            origin = _a.origin,
            _b = _a.data,
            type = _b.type,
            name = _b.name;
        console.log('event received from iframe', event.data);

        if ((0, _Routes.getEmbedUrl)().startsWith(origin) && iframe.name === name) {
          switch (type) {
            case 'size':
              var _c = event.data,
                  width = _c.width,
                  height = _c.height;
              iframe.style.height = height + 'px';
              iframe.style.width = width + 'px';
              break;

            case 'copy':
              var text = event.data.text;
              console.log('copy text', text);
              window.navigator.clipboard.writeText(text);
              break;

            default:
              console.log(event.data);
              break;
          }
        }
      };
    }
  };

  if (!window.OGWidgets) {
    OGWidgets.init();

    window.onload = function () {
      return OGWidgets.init();
    };

    window.OGWidgets = OGWidgets;
  }
})(window);
},{"./config/Routes":"config/Routes.ts","./utils/helper":"utils/helper.ts","./utils/messenger":"utils/messenger.ts"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56787" + '/');

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