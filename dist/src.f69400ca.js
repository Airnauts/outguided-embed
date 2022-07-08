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
})({"../node_modules/preact/dist/preact.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = _;
exports.Fragment = d;
exports.cloneElement = B;
exports.createContext = D;
exports.h = exports.createElement = v;
exports.createRef = p;
exports.hydrate = q;
exports.options = exports.isValidElement = void 0;
exports.render = S;
exports.toChildArray = A;
var n,
    l,
    u,
    i,
    t,
    o,
    r,
    f,
    e = {},
    c = [],
    s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
exports.isValidElement = i;
exports.options = l;

function a(n, l) {
  for (var u in l) n[u] = l[u];

  return n;
}

function h(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}

function v(l, u, i) {
  var t,
      o,
      r,
      f = {};

  for (r in u) "key" == r ? t = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];

  if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), "function" == typeof l && null != l.defaultProps) for (r in l.defaultProps) void 0 === f[r] && (f[r] = l.defaultProps[r]);
  return y(l, f, t, o, null);
}

function y(n, i, t, o, r) {
  var f = {
    type: n,
    props: i,
    key: t,
    ref: o,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: null == r ? ++u : r
  };
  return null == r && null != l.vnode && l.vnode(f), f;
}

function p() {
  return {
    current: null
  };
}

function d(n) {
  return n.children;
}

function _(n, l) {
  this.props = n, this.context = l;
}

function k(n, l) {
  if (null == l) return n.__ ? k(n.__, n.__.__k.indexOf(n) + 1) : null;

  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

  return "function" == typeof n.type ? k(n) : null;
}

function b(n) {
  var l, u;

  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }

    return b(n);
  }
}

function m(n) {
  (!n.__d && (n.__d = !0) && t.push(n) && !g.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(g);
}

function g() {
  for (var n; g.__r = t.length;) n = t.sort(function (n, l) {
    return n.__v.__b - l.__v.__b;
  }), t = [], n.some(function (n) {
    var l, u, i, t, o, r;
    n.__d && (o = (t = (l = n).__v).__e, (r = l.__P) && (u = [], (i = a({}, t)).__v = t.__v + 1, j(r, t, i, l.__n, void 0 !== r.ownerSVGElement, null != t.__h ? [o] : null, u, null == o ? k(t) : o, t.__h), z(u, t), t.__e != o && b(t)));
  });
}

function w(n, l, u, i, t, o, r, f, s, a) {
  var h,
      v,
      p,
      _,
      b,
      m,
      g,
      w = i && i.__k || c,
      A = w.length;

  for (u.__k = [], h = 0; h < l.length; h++) if (null != (_ = u.__k[h] = null == (_ = l[h]) || "boolean" == typeof _ ? null : "string" == typeof _ || "number" == typeof _ || "bigint" == typeof _ ? y(null, _, null, null, _) : Array.isArray(_) ? y(d, {
    children: _
  }, null, null, null) : _.__b > 0 ? y(_.type, _.props, _.key, null, _.__v) : _)) {
    if (_.__ = u, _.__b = u.__b + 1, null === (p = w[h]) || p && _.key == p.key && _.type === p.type) w[h] = void 0;else for (v = 0; v < A; v++) {
      if ((p = w[v]) && _.key == p.key && _.type === p.type) {
        w[v] = void 0;
        break;
      }

      p = null;
    }
    j(n, _, p = p || e, t, o, r, f, s, a), b = _.__e, (v = _.ref) && p.ref != v && (g || (g = []), p.ref && g.push(p.ref, null, _), g.push(v, _.__c || b, _)), null != b ? (null == m && (m = b), "function" == typeof _.type && _.__k === p.__k ? _.__d = s = x(_, s, n) : s = P(n, _, p, w, b, s), "function" == typeof u.type && (u.__d = s)) : s && p.__e == s && s.parentNode != n && (s = k(p));
  }

  for (u.__e = m, h = A; h--;) null != w[h] && ("function" == typeof u.type && null != w[h].__e && w[h].__e == u.__d && (u.__d = k(i, h + 1)), N(w[h], w[h]));

  if (g) for (h = 0; h < g.length; h++) M(g[h], g[++h], g[++h]);
}

function x(n, l, u) {
  for (var i, t = n.__k, o = 0; t && o < t.length; o++) (i = t[o]) && (i.__ = n, l = "function" == typeof i.type ? x(i, l, u) : P(u, i, i, t, i.__e, l));

  return l;
}

function A(n, l) {
  return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {
    A(n, l);
  }) : l.push(n)), l;
}

function P(n, l, u, i, t, o) {
  var r, f, e;
  if (void 0 !== l.__d) r = l.__d, l.__d = void 0;else if (null == u || t != o || null == t.parentNode) n: if (null == o || o.parentNode !== n) n.appendChild(t), r = null;else {
    for (f = o, e = 0; (f = f.nextSibling) && e < i.length; e += 2) if (f == t) break n;

    n.insertBefore(t, o), r = o;
  }
  return void 0 !== r ? r : t.nextSibling;
}

function C(n, l, u, i, t) {
  var o;

  for (o in u) "children" === o || "key" === o || o in l || H(n, o, null, u[o], i);

  for (o in l) t && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || H(n, o, l[o], u[o], i);
}

function $(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || s.test(l) ? u : u + "px";
}

function H(n, l, u, i, t) {
  var o;

  n: if ("style" === l) {
    if ("string" == typeof u) n.style.cssText = u;else {
      if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) u && l in u || $(n.style, l, "");
      if (u) for (l in u) i && u[l] === i[l] || $(n.style, l, u[l]);
    }
  } else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? i || n.addEventListener(l, o ? T : I, o) : n.removeEventListener(l, o ? T : I, o);else if ("dangerouslySetInnerHTML" !== l) {
    if (t) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");else if ("href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && l in n) try {
      n[l] = null == u ? "" : u;
      break n;
    } catch (n) {}
    "function" == typeof u || (null != u && (!1 !== u || "a" === l[0] && "r" === l[1]) ? n.setAttribute(l, u) : n.removeAttribute(l));
  }
}

function I(n) {
  this.l[n.type + !1](l.event ? l.event(n) : n);
}

function T(n) {
  this.l[n.type + !0](l.event ? l.event(n) : n);
}

function j(n, u, i, t, o, r, f, e, c) {
  var s,
      h,
      v,
      y,
      p,
      k,
      b,
      m,
      g,
      x,
      A,
      P,
      C,
      $ = u.type;
  if (void 0 !== u.constructor) return null;
  null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, r = [e]), (s = l.__b) && s(u);

  try {
    n: if ("function" == typeof $) {
      if (m = u.props, g = (s = $.contextType) && t[s.__c], x = s ? g ? g.props.value : s.__ : t, i.__c ? b = (h = u.__c = i.__c).__ = h.__E : ("prototype" in $ && $.prototype.render ? u.__c = h = new $(m, x) : (u.__c = h = new _(m, x), h.constructor = $, h.render = O), g && g.sub(h), h.props = m, h.state || (h.state = {}), h.context = x, h.__n = t, v = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), null != $.getDerivedStateFromProps && (h.__s == h.state && (h.__s = a({}, h.__s)), a(h.__s, $.getDerivedStateFromProps(m, h.__s))), y = h.props, p = h.state, v) null == $.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);else {
        if (null == $.getDerivedStateFromProps && m !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(m, x), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(m, h.__s, x) || u.__v === i.__v) {
          h.props = m, h.state = h.__s, u.__v !== i.__v && (h.__d = !1), h.__v = u, u.__e = i.__e, u.__k = i.__k, u.__k.forEach(function (n) {
            n && (n.__ = u);
          }), h.__h.length && f.push(h);
          break n;
        }

        null != h.componentWillUpdate && h.componentWillUpdate(m, h.__s, x), null != h.componentDidUpdate && h.__h.push(function () {
          h.componentDidUpdate(y, p, k);
        });
      }
      if (h.context = x, h.props = m, h.__v = u, h.__P = n, A = l.__r, P = 0, "prototype" in $ && $.prototype.render) h.state = h.__s, h.__d = !1, A && A(u), s = h.render(h.props, h.state, h.context);else do {
        h.__d = !1, A && A(u), s = h.render(h.props, h.state, h.context), h.state = h.__s;
      } while (h.__d && ++P < 25);
      h.state = h.__s, null != h.getChildContext && (t = a(a({}, t), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (k = h.getSnapshotBeforeUpdate(y, p)), C = null != s && s.type === d && null == s.key ? s.props.children : s, w(n, Array.isArray(C) ? C : [C], u, i, t, o, r, f, e, c), h.base = u.__e, u.__h = null, h.__h.length && f.push(h), b && (h.__E = h.__ = null), h.__e = !1;
    } else null == r && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = L(i.__e, u, i, t, o, r, f, c);

    (s = l.diffed) && s(u);
  } catch (n) {
    u.__v = null, (c || null != r) && (u.__e = e, u.__h = !!c, r[r.indexOf(e)] = null), l.__e(n, u, i);
  }
}

function z(n, u) {
  l.__c && l.__c(u, n), n.some(function (u) {
    try {
      n = u.__h, u.__h = [], n.some(function (n) {
        n.call(u);
      });
    } catch (n) {
      l.__e(n, u.__v);
    }
  });
}

function L(l, u, i, t, o, r, f, c) {
  var s,
      a,
      v,
      y = i.props,
      p = u.props,
      d = u.type,
      _ = 0;
  if ("svg" === d && (o = !0), null != r) for (; _ < r.length; _++) if ((s = r[_]) && "setAttribute" in s == !!d && (d ? s.localName === d : 3 === s.nodeType)) {
    l = s, r[_] = null;
    break;
  }

  if (null == l) {
    if (null === d) return document.createTextNode(p);
    l = o ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, p.is && p), r = null, c = !1;
  }

  if (null === d) y === p || c && l.data === p || (l.data = p);else {
    if (r = r && n.call(l.childNodes), a = (y = i.props || e).dangerouslySetInnerHTML, v = p.dangerouslySetInnerHTML, !c) {
      if (null != r) for (y = {}, _ = 0; _ < l.attributes.length; _++) y[l.attributes[_].name] = l.attributes[_].value;
      (v || a) && (v && (a && v.__html == a.__html || v.__html === l.innerHTML) || (l.innerHTML = v && v.__html || ""));
    }

    if (C(l, p, y, o, c), v) u.__k = [];else if (_ = u.props.children, w(l, Array.isArray(_) ? _ : [_], u, i, t, o && "foreignObject" !== d, r, f, r ? r[0] : i.__k && k(i, 0), c), null != r) for (_ = r.length; _--;) null != r[_] && h(r[_]);
    c || ("value" in p && void 0 !== (_ = p.value) && (_ !== l.value || "progress" === d && !_ || "option" === d && _ !== y.value) && H(l, "value", _, y.value, !1), "checked" in p && void 0 !== (_ = p.checked) && _ !== l.checked && H(l, "checked", _, y.checked, !1));
  }
  return l;
}

function M(n, u, i) {
  try {
    "function" == typeof n ? n(u) : n.current = u;
  } catch (n) {
    l.__e(n, i);
  }
}

function N(n, u, i) {
  var t, o;

  if (l.unmount && l.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || M(t, null, u)), null != (t = n.__c)) {
    if (t.componentWillUnmount) try {
      t.componentWillUnmount();
    } catch (n) {
      l.__e(n, u);
    }
    t.base = t.__P = null;
  }

  if (t = n.__k) for (o = 0; o < t.length; o++) t[o] && N(t[o], u, "function" != typeof n.type);
  i || null == n.__e || h(n.__e), n.__e = n.__d = void 0;
}

function O(n, l, u) {
  return this.constructor(n, u);
}

function S(u, i, t) {
  var o, r, f;
  l.__ && l.__(u, i), r = (o = "function" == typeof t) ? null : t && t.__k || i.__k, f = [], j(i, u = (!o && t || i).__k = v(d, null, [u]), r || e, e, void 0 !== i.ownerSVGElement, !o && t ? [t] : r ? null : i.firstChild ? n.call(i.childNodes) : null, f, !o && t ? t : r ? r.__e : i.firstChild, o), z(f, u);
}

function q(n, l) {
  S(n, l, q);
}

function B(l, u, i) {
  var t,
      o,
      r,
      f = a({}, l.props);

  for (r in u) "key" == r ? t = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];

  return arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), y(l.type, f, t || l.key, o || l.ref, null);
}

function D(n, l) {
  var u = {
    __c: l = "__cC" + f++,
    __: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n) {
      var u, i;
      return this.getChildContext || (u = [], (i = {})[l] = this, this.getChildContext = function () {
        return i;
      }, this.shouldComponentUpdate = function (n) {
        this.props.value !== n.value && u.some(m);
      }, this.sub = function (n) {
        u.push(n);
        var l = n.componentWillUnmount;

        n.componentWillUnmount = function () {
          u.splice(u.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Provider.__ = u.Consumer.contextType = u;
}

n = c.slice, exports.options = l = {
  __e: function (n, l, u, i) {
    for (var t, o, r; l = l.__;) if ((t = l.__c) && !t.__) try {
      if ((o = t.constructor) && null != o.getDerivedStateFromError && (t.setState(o.getDerivedStateFromError(n)), r = t.__d), null != t.componentDidCatch && (t.componentDidCatch(n, i || {}), r = t.__d), r) return t.__E = t;
    } catch (l) {
      n = l;
    }

    throw n;
  }
}, u = 0, exports.isValidElement = i = function (n) {
  return null != n && void 0 === n.constructor;
}, _.prototype.setState = function (n, l) {
  var u;
  u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = a({}, this.state), "function" == typeof n && (n = n(a({}, u), this.props)), n && a(u, n), null != n && this.__v && (l && this.__h.push(l), m(this));
}, _.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), m(this));
}, _.prototype.render = d, t = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, f = 0;
},{}],"../node_modules/preact/hooks/dist/hooks.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCallback = T;
exports.useContext = q;
exports.useDebugValue = x;
exports.useEffect = _;
exports.useErrorBoundary = V;
exports.useImperativeHandle = A;
exports.useLayoutEffect = h;
exports.useMemo = F;
exports.useReducer = d;
exports.useRef = s;
exports.useState = y;

var _preact = require("preact");

var t,
    u,
    r,
    o,
    i = 0,
    c = [],
    f = [],
    e = _preact.options.__b,
    a = _preact.options.__r,
    v = _preact.options.diffed,
    l = _preact.options.__c,
    m = _preact.options.unmount;

function p(t, r) {
  _preact.options.__h && _preact.options.__h(u, t, i || r), i = 0;
  var o = u.__H || (u.__H = {
    __: [],
    __h: []
  });
  return t >= o.__.length && o.__.push({
    __V: f
  }), o.__[t];
}

function y(n) {
  return i = 1, d(z, n);
}

function d(n, r, o) {
  var i = p(t++, 2);
  return i.t = n, i.__c || (i.__ = [o ? o(r) : z(void 0, r), function (n) {
    var t = i.t(i.__[0], n);
    i.__[0] !== t && (i.__ = [t, i.__[1]], i.__c.setState({}));
  }], i.__c = u), i.__;
}

function _(r, o) {
  var i = p(t++, 3);
  !_preact.options.__s && w(i.__H, o) && (i.__ = r, i.u = o, u.__H.__h.push(i));
}

function h(r, o) {
  var i = p(t++, 4);
  !_preact.options.__s && w(i.__H, o) && (i.__ = r, i.u = o, u.__h.push(i));
}

function s(n) {
  return i = 5, F(function () {
    return {
      current: n
    };
  }, []);
}

function A(n, t, u) {
  i = 6, h(function () {
    return "function" == typeof n ? (n(t()), function () {
      return n(null);
    }) : n ? (n.current = t(), function () {
      return n.current = null;
    }) : void 0;
  }, null == u ? u : u.concat(n));
}

function F(n, u) {
  var r = p(t++, 7);
  return w(r.__H, u) ? (r.__V = n(), r.u = u, r.__h = n, r.__V) : r.__;
}

function T(n, t) {
  return i = 8, F(function () {
    return n;
  }, t);
}

function q(n) {
  var r = u.context[n.__c],
      o = p(t++, 9);
  return o.c = n, r ? (null == o.__ && (o.__ = !0, r.sub(u)), r.props.value) : n.__;
}

function x(t, u) {
  _preact.options.useDebugValue && _preact.options.useDebugValue(u ? u(t) : t);
}

function V(n) {
  var r = p(t++, 10),
      o = y();
  return r.__ = n, u.componentDidCatch || (u.componentDidCatch = function (n) {
    r.__ && r.__(n), o[1](n);
  }), [o[0], function () {
    o[1](void 0);
  }];
}

function b() {
  for (var t; t = c.shift();) if (t.__P) try {
    t.__H.__h.forEach(j), t.__H.__h.forEach(k), t.__H.__h = [];
  } catch (u) {
    t.__H.__h = [], _preact.options.__e(u, t.__v);
  }
}

_preact.options.__b = function (n) {
  u = null, e && e(n);
}, _preact.options.__r = function (n) {
  a && a(n), t = 0;
  var o = (u = n.__c).__H;
  o && (r === u ? (o.__h = [], u.__h = [], o.__.forEach(function (n) {
    n.__V = f, n.u = void 0;
  })) : (o.__h.forEach(j), o.__h.forEach(k), o.__h = [])), r = u;
}, _preact.options.diffed = function (t) {
  v && v(t);
  var i = t.__c;
  i && i.__H && (i.__H.__h.length && (1 !== c.push(i) && o === _preact.options.requestAnimationFrame || ((o = _preact.options.requestAnimationFrame) || function (n) {
    var t,
        u = function () {
      clearTimeout(r), g && cancelAnimationFrame(t), setTimeout(n);
    },
        r = setTimeout(u, 100);

    g && (t = requestAnimationFrame(u));
  })(b)), i.__H.__.forEach(function (n) {
    n.u && (n.__H = n.u), n.__V !== f && (n.__ = n.__V), n.u = void 0, n.__V = f;
  })), r = u = null;
}, _preact.options.__c = function (t, u) {
  u.some(function (t) {
    try {
      t.__h.forEach(j), t.__h = t.__h.filter(function (n) {
        return !n.__ || k(n);
      });
    } catch (r) {
      u.some(function (n) {
        n.__h && (n.__h = []);
      }), u = [], _preact.options.__e(r, t.__v);
    }
  }), l && l(t, u);
}, _preact.options.unmount = function (t) {
  m && m(t);
  var u,
      r = t.__c;
  r && r.__H && (r.__H.__.forEach(function (n) {
    try {
      j(n);
    } catch (n) {
      u = n;
    }
  }), u && _preact.options.__e(u, r.__v));
};
var g = "function" == typeof requestAnimationFrame;

function j(n) {
  var t = u,
      r = n.__c;
  "function" == typeof r && (n.__c = void 0, r()), u = t;
}

function k(n) {
  var t = u;
  n.__c = n.__(), u = t;
}

function w(n, t) {
  return !n || n.length !== t.length || t.some(function (t, u) {
    return t !== n[u];
  });
}

function z(n, t) {
  return "function" == typeof t ? t(n) : t;
}
},{"preact":"../node_modules/preact/dist/preact.module.js"}],"../node_modules/preact-router/dist/preact-router.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Route = exports.Link = void 0;
exports.default = exports.Router = D;
exports.exec = s;
exports.getCurrentUrl = R;
exports.route = $;
exports.useRouter = C;

var _preact = require("preact");

var _hooks = require("preact/hooks");

var a = {};

function c(n, t) {
  for (var r in t) n[r] = t[r];

  return n;
}

function s(n, t, r) {
  var i,
      o = /(?:\?([^#]*))?(#.*)?$/,
      e = n.match(o),
      u = {};
  if (e && e[1]) for (var f = e[1].split("&"), c = 0; c < f.length; c++) {
    var s = f[c].split("=");
    u[decodeURIComponent(s[0])] = decodeURIComponent(s.slice(1).join("="));
  }
  n = d(n.replace(o, "")), t = d(t || "");

  for (var h = Math.max(n.length, t.length), v = 0; v < h; v++) if (t[v] && ":" === t[v].charAt(0)) {
    var l = t[v].replace(/(^:|[+*?]+$)/g, ""),
        p = (t[v].match(/[+*?]+$/) || a)[0] || "",
        m = ~p.indexOf("+"),
        y = ~p.indexOf("*"),
        U = n[v] || "";

    if (!U && !y && (p.indexOf("?") < 0 || m)) {
      i = !1;
      break;
    }

    if (u[l] = decodeURIComponent(U), m || y) {
      u[l] = n.slice(v).map(decodeURIComponent).join("/");
      break;
    }
  } else if (t[v] !== n[v]) {
    i = !1;
    break;
  }

  return (!0 === r.default || !1 !== i) && u;
}

function h(n, t) {
  return n.rank < t.rank ? 1 : n.rank > t.rank ? -1 : n.index - t.index;
}

function v(n, t) {
  return n.index = t, n.rank = function (n) {
    return n.props.default ? 0 : d(n.props.path).map(l).join("");
  }(n), n.props;
}

function d(n) {
  return n.replace(/(^\/+|\/+$)/g, "").split("/");
}

function l(n) {
  return ":" == n.charAt(0) ? 1 + "*+?".indexOf(n.charAt(n.length - 1)) || 4 : 5;
}

var p = {},
    m = [],
    y = [],
    U = null,
    g = {
  url: R()
},
    k = (0, _preact.createContext)(g);

function C() {
  var n = (0, _hooks.useContext)(k);

  if (n === g) {
    var t = (0, _hooks.useState)()[1];
    (0, _hooks.useEffect)(function () {
      return y.push(t), function () {
        return y.splice(y.indexOf(t), 1);
      };
    }, []);
  }

  return [n, $];
}

function R() {
  var n;
  return "" + ((n = U && U.location ? U.location : U && U.getCurrentLocation ? U.getCurrentLocation() : "undefined" != typeof location ? location : p).pathname || "") + (n.search || "");
}

function $(n, t) {
  return void 0 === t && (t = !1), "string" != typeof n && n.url && (t = n.replace, n = n.url), function (n) {
    for (var t = m.length; t--;) if (m[t].canRoute(n)) return !0;

    return !1;
  }(n) && function (n, t) {
    void 0 === t && (t = "push"), U && U[t] ? U[t](n) : "undefined" != typeof history && history[t + "State"] && history[t + "State"](null, null, n);
  }(n, t ? "replace" : "push"), I(n);
}

function I(n) {
  for (var t = !1, r = 0; r < m.length; r++) m[r].routeTo(n) && (t = !0);

  return t;
}

function M(n) {
  if (n && n.getAttribute) {
    var t = n.getAttribute("href"),
        r = n.getAttribute("target");
    if (t && t.match(/^\//g) && (!r || r.match(/^_?self$/i))) return $(t);
  }
}

function b(n) {
  return n.stopImmediatePropagation && n.stopImmediatePropagation(), n.stopPropagation && n.stopPropagation(), n.preventDefault(), !1;
}

function W(n) {
  if (!(n.ctrlKey || n.metaKey || n.altKey || n.shiftKey || n.button)) {
    var t = n.target;

    do {
      if ("a" === t.localName && t.getAttribute("href")) {
        if (t.hasAttribute("data-native") || t.hasAttribute("native")) return;
        if (M(t)) return b(n);
      }
    } while (t = t.parentNode);
  }
}

var w = !1;

function D(n) {
  n.history && (U = n.history), this.state = {
    url: n.url || R()
  };
}

c(D.prototype = new _preact.Component(), {
  shouldComponentUpdate: function (n) {
    return !0 !== n.static || n.url !== this.props.url || n.onChange !== this.props.onChange;
  },
  canRoute: function (n) {
    var t = (0, _preact.toChildArray)(this.props.children);
    return void 0 !== this.g(t, n);
  },
  routeTo: function (n) {
    this.setState({
      url: n
    });
    var t = this.canRoute(n);
    return this.p || this.forceUpdate(), t;
  },
  componentWillMount: function () {
    this.p = !0;
  },
  componentDidMount: function () {
    var n = this;
    w || (w = !0, U || addEventListener("popstate", function () {
      I(R());
    }), addEventListener("click", W)), m.push(this), U && (this.u = U.listen(function (t) {
      var r = t.location || t;
      n.routeTo("" + (r.pathname || "") + (r.search || ""));
    })), this.p = !1;
  },
  componentWillUnmount: function () {
    "function" == typeof this.u && this.u(), m.splice(m.indexOf(this), 1);
  },
  componentWillUpdate: function () {
    this.p = !0;
  },
  componentDidUpdate: function () {
    this.p = !1;
  },
  g: function (n, t) {
    n = n.filter(v).sort(h);

    for (var r = 0; r < n.length; r++) {
      var i = n[r],
          o = s(t, i.props.path, i.props);
      if (o) return [i, o];
    }
  },
  render: function (n, t) {
    var e,
        u,
        f = n.onChange,
        a = t.url,
        s = this.c,
        h = this.g((0, _preact.toChildArray)(n.children), a);

    if (h && (u = (0, _preact.cloneElement)(h[0], c(c({
      url: a,
      matches: e = h[1]
    }, e), {
      key: void 0,
      ref: void 0
    }))), a !== (s && s.url)) {
      c(g, s = this.c = {
        url: a,
        previous: s && s.url,
        current: u,
        path: u ? u.props.path : null,
        matches: e
      }), s.router = this, s.active = u ? [u] : [];

      for (var v = y.length; v--;) y[v]({});

      "function" == typeof f && f(s);
    }

    return (0, _preact.h)(k.Provider, {
      value: s
    }, u);
  }
});

var E = function (n) {
  return (0, _preact.h)("a", c({
    onClick: W
  }, n));
},
    L = function (n) {
  return (0, _preact.h)(n.component, n);
};

exports.Route = L;
exports.Link = E;
},{"preact":"../node_modules/preact/dist/preact.module.js","preact/hooks":"../node_modules/preact/hooks/dist/hooks.module.js"}],"config/Routes.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tripLink = exports.hostLink = exports.getExternalLink = exports.getEmbedPath = exports.TRIP_PAGE = exports.HOST_PAGE = void 0;
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

var getExternalLink = function getExternalLink(path) {
  if (path === void 0) {
    path = '';
  }

  return "".concat("http://localhost:1234").concat(path);
};

exports.getExternalLink = getExternalLink;
},{}],"components/Button/Button.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _preact = require("preact");

var Button = function Button(_a) {
  var href = _a.href,
      children = _a.children;
  return (0, _preact.h)("a", {
    className: 'button',
    href: href
  }, children);
};

exports.Button = Button;
},{"preact":"../node_modules/preact/dist/preact.module.js"}],"pages/TripPage.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TripPage = void 0;

var _preact = require("preact");

var _Button = require("../components/Button/Button");

var _Routes = require("../config/Routes");

var TripPage = function TripPage(_a) {
  var slug = _a.matches.slug;
  return (0, _preact.h)(_Button.Button, {
    href: (0, _Routes.getExternalLink)((0, _Routes.tripLink)(slug))
  }, "Book Now");
};

exports.TripPage = TripPage;
},{"preact":"../node_modules/preact/dist/preact.module.js","../components/Button/Button":"components/Button/Button.tsx","../config/Routes":"config/Routes.ts"}],"pages/HostPage.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HostPage = void 0;

var _preact = require("preact");

var HostPage = function HostPage(_a) {
  var slug = _a.matches.slug;
  return (0, _preact.h)(_preact.Fragment, null);
};

exports.HostPage = HostPage;
},{"preact":"../node_modules/preact/dist/preact.module.js"}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles/styles.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.tsx":[function(require,module,exports) {
"use strict";

var _preact = require("preact");

var _preactRouter = require("preact-router");

var _Routes = require("./config/Routes");

var _TripPage = require("./pages/TripPage");

var _HostPage = require("./pages/HostPage");

require("./styles/styles.scss");

var App = function App() {
  return (0, _preact.h)(_preactRouter.Router, null, (0, _preact.h)(_preactRouter.Route, {
    component: _TripPage.TripPage,
    path: (0, _Routes.getEmbedPath)(_Routes.TRIP_PAGE)
  }), (0, _preact.h)(_preactRouter.Route, {
    component: _HostPage.HostPage,
    path: (0, _Routes.getEmbedPath)(_Routes.HOST_PAGE)
  }), (0, _preact.h)(_preactRouter.Route, {
    component: function component() {
      return (0, _preact.h)("div", {
        class: "content"
      }, (0, _preact.h)("textarea", {
        cols: 50,
        rows: 3,
        dangerouslySetInnerHTML: {
          __html: " <a href=\"https://www.outguided.com\" data-og-widget=\"trip\" data-og-trip=\"123\">\n                                powered by outguided.com\n                            </a>"
        }
      }), (0, _preact.h)("a", {
        href: "https://www.outguided.com",
        "data-og-widget": "trip",
        "data-og-trip": "123"
      }, "powered by outguided.com"));
    },
    default: true
  }));
};

var root = document.getElementById('root');
(0, _preact.render)((0, _preact.h)(App, null), root);
},{"preact":"../node_modules/preact/dist/preact.module.js","preact-router":"../node_modules/preact-router/dist/preact-router.module.js","./config/Routes":"config/Routes.ts","./pages/TripPage":"pages/TripPage.tsx","./pages/HostPage":"pages/HostPage.tsx","./styles/styles.scss":"styles/styles.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58182" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.tsx"], null)
//# sourceMappingURL=/src.f69400ca.js.map