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
},{"preact":"../node_modules/preact/dist/preact.module.js","preact/hooks":"../node_modules/preact/hooks/dist/hooks.module.js"}],"../node_modules/@babel/runtime/helpers/esm/extends.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _extends;

function _extends() {
  exports.default = _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}
},{}],"../node_modules/history/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Action = void 0;
exports.createBrowserHistory = createBrowserHistory;
exports.createHashHistory = createHashHistory;
exports.createMemoryHistory = createMemoryHistory;
exports.createPath = createPath;
exports.parsePath = parsePath;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Actions represent the type of change to a location value.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#action
 */
var Action;
exports.Action = Action;

(function (Action) {
  /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */
  Action["Pop"] = "POP";
  /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */

  Action["Push"] = "PUSH";
  /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */

  Action["Replace"] = "REPLACE";
})(Action || (exports.Action = Action = {}));

var readOnly = "development" !== "production" ? function (obj) {
  return Object.freeze(obj);
} : function (obj) {
  return obj;
};

function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== 'undefined') console.warn(message);

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

var BeforeUnloadEventType = 'beforeunload';
var HashChangeEventType = 'hashchange';
var PopStateEventType = 'popstate';
/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */

function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$window = _options.window,
      window = _options$window === void 0 ? document.defaultView : _options$window;
  var globalHistory = window.history;

  function getIndexAndLocation() {
    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var state = globalHistory.state || {};
    return [state.idx, readOnly({
      pathname: pathname,
      search: search,
      hash: hash,
      state: state.usr || null,
      key: state.key || 'default'
    })];
  }

  var blockedPopTx = null;

  function handlePop() {
    if (blockedPopTx) {
      blockers.call(blockedPopTx);
      blockedPopTx = null;
    } else {
      var nextAction = Action.Pop;

      var _getIndexAndLocation = getIndexAndLocation(),
          nextIndex = _getIndexAndLocation[0],
          nextLocation = _getIndexAndLocation[1];

      if (blockers.length) {
        if (nextIndex != null) {
          var delta = index - nextIndex;

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
        } else {
          // Trying to POP to a location with no index. We did not create
          // this location, so we can't effectively block the navigation.
          "development" !== "production" ? warning(false, // TODO: Write up a doc that explains our blocking strategy in
          // detail and link to it here so people can understand better what
          // is going on and how to avoid it.
          "You are trying to block a POP navigation to a location that was not " + "created by the history library. The block will fail silently in " + "production, but in general you should do all navigation with the " + "history library (instead of using window.history.pushState directly) " + "to avoid this situation.") : void 0;
        }
      } else {
        applyTx(nextAction);
      }
    }
  }

  window.addEventListener(PopStateEventType, handlePop);
  var action = Action.Pop;

  var _getIndexAndLocation2 = getIndexAndLocation(),
      index = _getIndexAndLocation2[0],
      location = _getIndexAndLocation2[1];

  var listeners = createEvents();
  var blockers = createEvents();

  if (index == null) {
    index = 0;
    globalHistory.replaceState((0, _extends2.default)({}, globalHistory.state, {
      idx: index
    }), '');
  }

  function createHref(to) {
    return typeof to === 'string' ? to : createPath(to);
  } // state defaults to `null` because `window.history.state` does


  function getNextLocation(to, state) {
    if (state === void 0) {
      state = null;
    }

    return readOnly((0, _extends2.default)({
      pathname: location.pathname,
      hash: '',
      search: ''
    }, typeof to === 'string' ? parsePath(to) : to, {
      state: state,
      key: createKey()
    }));
  }

  function getHistoryStateAndUrl(nextLocation, index) {
    return [{
      usr: nextLocation.state,
      key: nextLocation.key,
      idx: index
    }, createHref(nextLocation)];
  }

  function allowTx(action, location, retry) {
    return !blockers.length || (blockers.call({
      action: action,
      location: location,
      retry: retry
    }), false);
  }

  function applyTx(nextAction) {
    action = nextAction;

    var _getIndexAndLocation3 = getIndexAndLocation();

    index = _getIndexAndLocation3[0];
    location = _getIndexAndLocation3[1];
    listeners.call({
      action: action,
      location: location
    });
  }

  function push(to, state) {
    var nextAction = Action.Push;
    var nextLocation = getNextLocation(to, state);

    function retry() {
      push(to, state);
    }

    if (allowTx(nextAction, nextLocation, retry)) {
      var _getHistoryStateAndUr = getHistoryStateAndUrl(nextLocation, index + 1),
          historyState = _getHistoryStateAndUr[0],
          url = _getHistoryStateAndUr[1]; // TODO: Support forced reloading
      // try...catch because iOS limits us to 100 pushState calls :/


      try {
        globalHistory.pushState(historyState, '', url);
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
      var _getHistoryStateAndUr2 = getHistoryStateAndUrl(nextLocation, index),
          historyState = _getHistoryStateAndUr2[0],
          url = _getHistoryStateAndUr2[1]; // TODO: Support forced reloading


      globalHistory.replaceState(historyState, '', url);
      applyTx(nextAction);
    }
  }

  function go(delta) {
    globalHistory.go(delta);
  }

  var history = {
    get action() {
      return action;
    },

    get location() {
      return location;
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

      if (blockers.length === 1) {
        window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
      }

      return function () {
        unblock(); // Remove the beforeunload listener so the document may
        // still be salvageable in the pagehide event.
        // See https://html.spec.whatwg.org/#unloading-documents

        if (!blockers.length) {
          window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
        }
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
 */


function createHashHistory(options) {
  if (options === void 0) {
    options = {};
  }

  var _options2 = options,
      _options2$window = _options2.window,
      window = _options2$window === void 0 ? document.defaultView : _options2$window;
  var globalHistory = window.history;

  function getIndexAndLocation() {
    var _parsePath = parsePath(window.location.hash.substr(1)),
        _parsePath$pathname = _parsePath.pathname,
        pathname = _parsePath$pathname === void 0 ? '/' : _parsePath$pathname,
        _parsePath$search = _parsePath.search,
        search = _parsePath$search === void 0 ? '' : _parsePath$search,
        _parsePath$hash = _parsePath.hash,
        hash = _parsePath$hash === void 0 ? '' : _parsePath$hash;

    var state = globalHistory.state || {};
    return [state.idx, readOnly({
      pathname: pathname,
      search: search,
      hash: hash,
      state: state.usr || null,
      key: state.key || 'default'
    })];
  }

  var blockedPopTx = null;

  function handlePop() {
    if (blockedPopTx) {
      blockers.call(blockedPopTx);
      blockedPopTx = null;
    } else {
      var nextAction = Action.Pop;

      var _getIndexAndLocation4 = getIndexAndLocation(),
          nextIndex = _getIndexAndLocation4[0],
          nextLocation = _getIndexAndLocation4[1];

      if (blockers.length) {
        if (nextIndex != null) {
          var delta = index - nextIndex;

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
        } else {
          // Trying to POP to a location with no index. We did not create
          // this location, so we can't effectively block the navigation.
          "development" !== "production" ? warning(false, // TODO: Write up a doc that explains our blocking strategy in
          // detail and link to it here so people can understand better
          // what is going on and how to avoid it.
          "You are trying to block a POP navigation to a location that was not " + "created by the history library. The block will fail silently in " + "production, but in general you should do all navigation with the " + "history library (instead of using window.history.pushState directly) " + "to avoid this situation.") : void 0;
        }
      } else {
        applyTx(nextAction);
      }
    }
  }

  window.addEventListener(PopStateEventType, handlePop); // popstate does not fire on hashchange in IE 11 and old (trident) Edge
  // https://developer.mozilla.org/de/docs/Web/API/Window/popstate_event

  window.addEventListener(HashChangeEventType, function () {
    var _getIndexAndLocation5 = getIndexAndLocation(),
        nextLocation = _getIndexAndLocation5[1]; // Ignore extraneous hashchange events.


    if (createPath(nextLocation) !== createPath(location)) {
      handlePop();
    }
  });
  var action = Action.Pop;

  var _getIndexAndLocation6 = getIndexAndLocation(),
      index = _getIndexAndLocation6[0],
      location = _getIndexAndLocation6[1];

  var listeners = createEvents();
  var blockers = createEvents();

  if (index == null) {
    index = 0;
    globalHistory.replaceState((0, _extends2.default)({}, globalHistory.state, {
      idx: index
    }), '');
  }

  function getBaseHref() {
    var base = document.querySelector('base');
    var href = '';

    if (base && base.getAttribute('href')) {
      var url = window.location.href;
      var hashIndex = url.indexOf('#');
      href = hashIndex === -1 ? url : url.slice(0, hashIndex);
    }

    return href;
  }

  function createHref(to) {
    return getBaseHref() + '#' + (typeof to === 'string' ? to : createPath(to));
  }

  function getNextLocation(to, state) {
    if (state === void 0) {
      state = null;
    }

    return readOnly((0, _extends2.default)({
      pathname: location.pathname,
      hash: '',
      search: ''
    }, typeof to === 'string' ? parsePath(to) : to, {
      state: state,
      key: createKey()
    }));
  }

  function getHistoryStateAndUrl(nextLocation, index) {
    return [{
      usr: nextLocation.state,
      key: nextLocation.key,
      idx: index
    }, createHref(nextLocation)];
  }

  function allowTx(action, location, retry) {
    return !blockers.length || (blockers.call({
      action: action,
      location: location,
      retry: retry
    }), false);
  }

  function applyTx(nextAction) {
    action = nextAction;

    var _getIndexAndLocation7 = getIndexAndLocation();

    index = _getIndexAndLocation7[0];
    location = _getIndexAndLocation7[1];
    listeners.call({
      action: action,
      location: location
    });
  }

  function push(to, state) {
    var nextAction = Action.Push;
    var nextLocation = getNextLocation(to, state);

    function retry() {
      push(to, state);
    }

    "development" !== "production" ? warning(nextLocation.pathname.charAt(0) === '/', "Relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")") : void 0;

    if (allowTx(nextAction, nextLocation, retry)) {
      var _getHistoryStateAndUr3 = getHistoryStateAndUrl(nextLocation, index + 1),
          historyState = _getHistoryStateAndUr3[0],
          url = _getHistoryStateAndUr3[1]; // TODO: Support forced reloading
      // try...catch because iOS limits us to 100 pushState calls :/


      try {
        globalHistory.pushState(historyState, '', url);
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

    "development" !== "production" ? warning(nextLocation.pathname.charAt(0) === '/', "Relative pathnames are not supported in hash history.replace(" + JSON.stringify(to) + ")") : void 0;

    if (allowTx(nextAction, nextLocation, retry)) {
      var _getHistoryStateAndUr4 = getHistoryStateAndUrl(nextLocation, index),
          historyState = _getHistoryStateAndUr4[0],
          url = _getHistoryStateAndUr4[1]; // TODO: Support forced reloading


      globalHistory.replaceState(historyState, '', url);
      applyTx(nextAction);
    }
  }

  function go(delta) {
    globalHistory.go(delta);
  }

  var history = {
    get action() {
      return action;
    },

    get location() {
      return location;
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

      if (blockers.length === 1) {
        window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
      }

      return function () {
        unblock(); // Remove the beforeunload listener so the document may
        // still be salvageable in the pagehide event.
        // See https://html.spec.whatwg.org/#unloading-documents

        if (!blockers.length) {
          window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
        }
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
 */


function createMemoryHistory(options) {
  if (options === void 0) {
    options = {};
  }

  var _options3 = options,
      _options3$initialEntr = _options3.initialEntries,
      initialEntries = _options3$initialEntr === void 0 ? ['/'] : _options3$initialEntr,
      initialIndex = _options3.initialIndex;
  var entries = initialEntries.map(function (entry) {
    var location = readOnly((0, _extends2.default)({
      pathname: '/',
      search: '',
      hash: '',
      state: null,
      key: createKey()
    }, typeof entry === 'string' ? parsePath(entry) : entry));
    "development" !== "production" ? warning(location.pathname.charAt(0) === '/', "Relative pathnames are not supported in createMemoryHistory({ initialEntries }) (invalid entry: " + JSON.stringify(entry) + ")") : void 0;
    return location;
  });
  var index = clamp(initialIndex == null ? entries.length - 1 : initialIndex, 0, entries.length - 1);
  var action = Action.Pop;
  var location = entries[index];
  var listeners = createEvents();
  var blockers = createEvents();

  function createHref(to) {
    return typeof to === 'string' ? to : createPath(to);
  }

  function getNextLocation(to, state) {
    if (state === void 0) {
      state = null;
    }

    return readOnly((0, _extends2.default)({
      pathname: location.pathname,
      search: '',
      hash: ''
    }, typeof to === 'string' ? parsePath(to) : to, {
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
    action = nextAction;
    location = nextLocation;
    listeners.call({
      action: action,
      location: location
    });
  }

  function push(to, state) {
    var nextAction = Action.Push;
    var nextLocation = getNextLocation(to, state);

    function retry() {
      push(to, state);
    }

    "development" !== "production" ? warning(location.pathname.charAt(0) === '/', "Relative pathnames are not supported in memory history.push(" + JSON.stringify(to) + ")") : void 0;

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

    "development" !== "production" ? warning(location.pathname.charAt(0) === '/', "Relative pathnames are not supported in memory history.replace(" + JSON.stringify(to) + ")") : void 0;

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
    get index() {
      return index;
    },

    get action() {
      return action;
    },

    get location() {
      return location;
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

  event.returnValue = '';
}

function createEvents() {
  var handlers = [];
  return {
    get length() {
      return handlers.length;
    },

    push: function push(fn) {
      handlers.push(fn);
      return function () {
        handlers = handlers.filter(function (handler) {
          return handler !== fn;
        });
      };
    },
    call: function call(arg) {
      handlers.forEach(function (fn) {
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
 */


function createPath(_ref) {
  var _ref$pathname = _ref.pathname,
      pathname = _ref$pathname === void 0 ? '/' : _ref$pathname,
      _ref$search = _ref.search,
      search = _ref$search === void 0 ? '' : _ref$search,
      _ref$hash = _ref.hash,
      hash = _ref$hash === void 0 ? '' : _ref$hash;
  if (search && search !== '?') pathname += search.charAt(0) === '?' ? search : '?' + search;
  if (hash && hash !== '#') pathname += hash.charAt(0) === '#' ? hash : '#' + hash;
  return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#parsepath
 */


function parsePath(path) {
  var parsedPath = {};

  if (path) {
    var hashIndex = path.indexOf('#');

    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }

    var searchIndex = path.indexOf('?');

    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }

    if (path) {
      parsedPath.pathname = path;
    }
  }

  return parsedPath;
}
},{"@babel/runtime/helpers/esm/extends":"../node_modules/@babel/runtime/helpers/esm/extends.js"}],"../node_modules/whatwg-fetch/fetch.js":[function(require,module,exports) {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DOMException = void 0;
exports.Headers = Headers;
exports.Request = Request;
exports.Response = Response;
exports.fetch = fetch;
var global = typeof globalThis !== 'undefined' && globalThis || typeof self !== 'undefined' && self || typeof global !== 'undefined' && global;
var support = {
  searchParams: 'URLSearchParams' in global,
  iterable: 'Symbol' in global && 'iterator' in Symbol,
  blob: 'FileReader' in global && 'Blob' in global && function () {
    try {
      new Blob();
      return true;
    } catch (e) {
      return false;
    }
  }(),
  formData: 'FormData' in global,
  arrayBuffer: 'ArrayBuffer' in global
};

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj);
}

if (support.arrayBuffer) {
  var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

  var isArrayBufferView = ArrayBuffer.isView || function (obj) {
    return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
  };
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name);
  }

  if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
    throw new TypeError('Invalid character in header field name: "' + name + '"');
  }

  return name.toLowerCase();
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value);
  }

  return value;
} // Build a destructive iterator for the value list


function iteratorFor(items) {
  var iterator = {
    next: function () {
      var value = items.shift();
      return {
        done: value === undefined,
        value: value
      };
    }
  };

  if (support.iterable) {
    iterator[Symbol.iterator] = function () {
      return iterator;
    };
  }

  return iterator;
}

function Headers(headers) {
  this.map = {};

  if (headers instanceof Headers) {
    headers.forEach(function (value, name) {
      this.append(name, value);
    }, this);
  } else if (Array.isArray(headers)) {
    headers.forEach(function (header) {
      this.append(header[0], header[1]);
    }, this);
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function (name) {
      this.append(name, headers[name]);
    }, this);
  }
}

Headers.prototype.append = function (name, value) {
  name = normalizeName(name);
  value = normalizeValue(value);
  var oldValue = this.map[name];
  this.map[name] = oldValue ? oldValue + ', ' + value : value;
};

Headers.prototype['delete'] = function (name) {
  delete this.map[normalizeName(name)];
};

Headers.prototype.get = function (name) {
  name = normalizeName(name);
  return this.has(name) ? this.map[name] : null;
};

Headers.prototype.has = function (name) {
  return this.map.hasOwnProperty(normalizeName(name));
};

Headers.prototype.set = function (name, value) {
  this.map[normalizeName(name)] = normalizeValue(value);
};

Headers.prototype.forEach = function (callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this);
    }
  }
};

Headers.prototype.keys = function () {
  var items = [];
  this.forEach(function (value, name) {
    items.push(name);
  });
  return iteratorFor(items);
};

Headers.prototype.values = function () {
  var items = [];
  this.forEach(function (value) {
    items.push(value);
  });
  return iteratorFor(items);
};

Headers.prototype.entries = function () {
  var items = [];
  this.forEach(function (value, name) {
    items.push([name, value]);
  });
  return iteratorFor(items);
};

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'));
  }

  body.bodyUsed = true;
}

function fileReaderReady(reader) {
  return new Promise(function (resolve, reject) {
    reader.onload = function () {
      resolve(reader.result);
    };

    reader.onerror = function () {
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

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i]);
  }

  return chars.join('');
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0);
  } else {
    var view = new Uint8Array(buf.byteLength);
    view.set(new Uint8Array(buf));
    return view.buffer;
  }
}

function Body() {
  this.bodyUsed = false;

  this._initBody = function (body) {
    /*
      fetch-mock wraps the Response object in an ES6 Proxy to
      provide useful test harness features such as flush. However, on
      ES5 browsers without fetch or Proxy support pollyfills must be used;
      the proxy-pollyfill is unable to proxy an attribute unless it exists
      on the object before the Proxy is created. This change ensures
      Response.bodyUsed exists on the instance, while maintaining the
      semantic of setting Request.bodyUsed in the constructor before
      _initBody is called.
    */
    this.bodyUsed = this.bodyUsed;
    this._bodyInit = body;

    if (!body) {
      this._bodyText = '';
    } else if (typeof body === 'string') {
      this._bodyText = body;
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body;
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body;
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString();
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer); // IE 10-11 can't handle a DataView body.

      this._bodyInit = new Blob([this._bodyArrayBuffer]);
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body);
    } else {
      this._bodyText = body = Object.prototype.toString.call(body);
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8');
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type);
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
      }
    }
  };

  if (support.blob) {
    this.blob = function () {
      var rejected = consumed(this);

      if (rejected) {
        return rejected;
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob);
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]));
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob');
      } else {
        return Promise.resolve(new Blob([this._bodyText]));
      }
    };

    this.arrayBuffer = function () {
      if (this._bodyArrayBuffer) {
        var isConsumed = consumed(this);

        if (isConsumed) {
          return isConsumed;
        }

        if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
          return Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength));
        } else {
          return Promise.resolve(this._bodyArrayBuffer);
        }
      } else {
        return this.blob().then(readBlobAsArrayBuffer);
      }
    };
  }

  this.text = function () {
    var rejected = consumed(this);

    if (rejected) {
      return rejected;
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob);
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text');
    } else {
      return Promise.resolve(this._bodyText);
    }
  };

  if (support.formData) {
    this.formData = function () {
      return this.text().then(decode);
    };
  }

  this.json = function () {
    return this.text().then(JSON.parse);
  };

  return this;
} // HTTP methods whose capitalization should be normalized


var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

function normalizeMethod(method) {
  var upcased = method.toUpperCase();
  return methods.indexOf(upcased) > -1 ? upcased : method;
}

function Request(input, options) {
  if (!(this instanceof Request)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  }

  options = options || {};
  var body = options.body;

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read');
    }

    this.url = input.url;
    this.credentials = input.credentials;

    if (!options.headers) {
      this.headers = new Headers(input.headers);
    }

    this.method = input.method;
    this.mode = input.mode;
    this.signal = input.signal;

    if (!body && input._bodyInit != null) {
      body = input._bodyInit;
      input.bodyUsed = true;
    }
  } else {
    this.url = String(input);
  }

  this.credentials = options.credentials || this.credentials || 'same-origin';

  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers);
  }

  this.method = normalizeMethod(options.method || this.method || 'GET');
  this.mode = options.mode || this.mode || null;
  this.signal = options.signal || this.signal;
  this.referrer = null;

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests');
  }

  this._initBody(body);

  if (this.method === 'GET' || this.method === 'HEAD') {
    if (options.cache === 'no-store' || options.cache === 'no-cache') {
      // Search for a '_' parameter in the query string
      var reParamSearch = /([?&])_=[^&]*/;

      if (reParamSearch.test(this.url)) {
        // If it already exists then set the value with the current time
        this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime());
      } else {
        // Otherwise add a new '_' parameter to the end with the current time
        var reQueryString = /\?/;
        this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime();
      }
    }
  }
}

Request.prototype.clone = function () {
  return new Request(this, {
    body: this._bodyInit
  });
};

function decode(body) {
  var form = new FormData();
  body.trim().split('&').forEach(function (bytes) {
    if (bytes) {
      var split = bytes.split('=');
      var name = split.shift().replace(/\+/g, ' ');
      var value = split.join('=').replace(/\+/g, ' ');
      form.append(decodeURIComponent(name), decodeURIComponent(value));
    }
  });
  return form;
}

function parseHeaders(rawHeaders) {
  var headers = new Headers(); // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2

  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' '); // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
  // https://github.com/github/fetch/issues/748
  // https://github.com/zloirock/core-js/issues/751

  preProcessedHeaders.split('\r').map(function (header) {
    return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header;
  }).forEach(function (line) {
    var parts = line.split(':');
    var key = parts.shift().trim();

    if (key) {
      var value = parts.join(':').trim();
      headers.append(key, value);
    }
  });
  return headers;
}

Body.call(Request.prototype);

function Response(bodyInit, options) {
  if (!(this instanceof Response)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  }

  if (!options) {
    options = {};
  }

  this.type = 'default';
  this.status = options.status === undefined ? 200 : options.status;
  this.ok = this.status >= 200 && this.status < 300;
  this.statusText = options.statusText === undefined ? '' : '' + options.statusText;
  this.headers = new Headers(options.headers);
  this.url = options.url || '';

  this._initBody(bodyInit);
}

Body.call(Response.prototype);

Response.prototype.clone = function () {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  });
};

Response.error = function () {
  var response = new Response(null, {
    status: 0,
    statusText: ''
  });
  response.type = 'error';
  return response;
};

var redirectStatuses = [301, 302, 303, 307, 308];

Response.redirect = function (url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code');
  }

  return new Response(null, {
    status: status,
    headers: {
      location: url
    }
  });
};

var DOMException = global.DOMException;
exports.DOMException = DOMException;

try {
  new DOMException();
} catch (err) {
  exports.DOMException = DOMException = function (message, name) {
    this.message = message;
    this.name = name;
    var error = Error(message);
    this.stack = error.stack;
  };

  DOMException.prototype = Object.create(Error.prototype);
  DOMException.prototype.constructor = DOMException;
}

function fetch(input, init) {
  return new Promise(function (resolve, reject) {
    var request = new Request(input, init);

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'));
    }

    var xhr = new XMLHttpRequest();

    function abortXhr() {
      xhr.abort();
    }

    xhr.onload = function () {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      };
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
      var body = 'response' in xhr ? xhr.response : xhr.responseText;
      setTimeout(function () {
        resolve(new Response(body, options));
      }, 0);
    };

    xhr.onerror = function () {
      setTimeout(function () {
        reject(new TypeError('Network request failed'));
      }, 0);
    };

    xhr.ontimeout = function () {
      setTimeout(function () {
        reject(new TypeError('Network request failed'));
      }, 0);
    };

    xhr.onabort = function () {
      setTimeout(function () {
        reject(new DOMException('Aborted', 'AbortError'));
      }, 0);
    };

    function fixUrl(url) {
      try {
        return url === '' && global.location.href ? global.location.href : url;
      } catch (e) {
        return url;
      }
    }

    xhr.open(request.method, fixUrl(request.url), true);

    if (request.credentials === 'include') {
      xhr.withCredentials = true;
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false;
    }

    if ('responseType' in xhr) {
      if (support.blob) {
        xhr.responseType = 'blob';
      } else if (support.arrayBuffer && request.headers.get('Content-Type') && request.headers.get('Content-Type').indexOf('application/octet-stream') !== -1) {
        xhr.responseType = 'arraybuffer';
      }
    }

    if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers)) {
      Object.getOwnPropertyNames(init.headers).forEach(function (name) {
        xhr.setRequestHeader(name, normalizeValue(init.headers[name]));
      });
    } else {
      request.headers.forEach(function (value, name) {
        xhr.setRequestHeader(name, value);
      });
    }

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr);

      xhr.onreadystatechange = function () {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr);
        }
      };
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
  });
}

fetch.polyfill = true;

if (!global.fetch) {
  global.fetch = fetch;
  global.Headers = Headers;
  global.Request = Request;
  global.Response = Response;
}
},{}],"../node_modules/isomorphic-fetch/fetch-npm-browserify.js":[function(require,module,exports) {
// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
require('whatwg-fetch');
module.exports = self.fetch.bind(self);

},{"whatwg-fetch":"../node_modules/whatwg-fetch/fetch.js"}],"api/fetcher.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetcher = void 0;

require("isomorphic-fetch");

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
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

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
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
            op = [0];
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
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var fetcher = function fetcher(input, options) {
  return __awaiter(void 0, void 0, Promise, function () {
    var result;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , fetch("".concat("https://outguided-api-production.herokuapp.com").concat(input), options)];

        case 1:
          result = _a.sent();

          if (!result.ok) {
            throw new Error(result.statusText);
          }

          return [4
          /*yield*/
          , result.json()];

        case 2:
          return [2
          /*return*/
          , _a.sent()];
      }
    });
  });
};

exports.fetcher = fetcher;
},{"isomorphic-fetch":"../node_modules/isomorphic-fetch/fetch-npm-browserify.js"}],"config/Widgets.ts":[function(require,module,exports) {
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
},{"src/utils/helper":"utils/helper.ts"}],"components/Button/Button.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _preact = require("preact");

var Button = function Button(_a) {
  var href = _a.href,
      children = _a.children,
      onClick = _a.onClick;
  var Component = href ? 'a' : 'button';
  return (0, _preact.h)(Component, {
    className: 'button',
    href: href,
    target: href ? '_blank' : undefined,
    onClick: onClick
  }, children);
};

exports.Button = Button;
},{"preact":"../node_modules/preact/dist/preact.module.js"}],"utils/messenger.ts":[function(require,module,exports) {
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
},{}],"hooks/useEmbedSize.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useEmbedSize = void 0;

var _hooks = require("preact/hooks");

var useEmbedSize = function useEmbedSize() {
  var _a = (0, _hooks.useState)({
    width: 0,
    height: 0
  }),
      dimension = _a[0],
      setDimension = _a[1];

  (0, _hooks.useEffect)(function () {
    var _a, _b, _c;

    if (!dimension.height && (document === null || document === void 0 ? void 0 : document.body.scrollHeight)) {
      var height = document === null || document === void 0 ? void 0 : document.body.scrollHeight;
      var width = (_c = (_b = (_a = document === null || document === void 0 ? void 0 : document.getElementById('root')) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.scrollWidth;

      if (width && height) {
        setDimension({
          width: width + 4,
          height: height
        });
      }
    }
  }, [document === null || document === void 0 ? void 0 : document.body.scrollHeight, dimension.height]);
  return dimension;
};

exports.useEmbedSize = useEmbedSize;
},{"preact/hooks":"../node_modules/preact/hooks/dist/hooks.module.js"}],"components/WidgetWrapper/WidgetWrapper.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WidgetWrapper = void 0;

var _preact = require("preact");

var _hooks = require("preact/hooks");

var _messenger = require("src/utils/messenger");

var _useEmbedSize = require("src/hooks/useEmbedSize");

var WidgetWrapper = function WidgetWrapper(_a) {
  var children = _a.children;

  var _b = (0, _useEmbedSize.useEmbedSize)(),
      width = _b.width,
      height = _b.height;

  (0, _hooks.useEffect)(function () {
    if (width && height) {
      (0, _messenger.send)({
        type: 'size',
        width: width,
        height: height,
        name: window.name
      }, {
        target: window.parent
      });
    }
  }, [width, height]);

  var onCopy = function onCopy(text) {
    (0, _messenger.send)({
      type: 'copy',
      text: text,
      name: window.name
    }, {
      target: window.parent
    });
  };

  return (0, _preact.h)(_preact.Fragment, null, (0, _preact.cloneElement)(children, {
    onCopy: onCopy
  }));
};

exports.WidgetWrapper = WidgetWrapper;
},{"preact":"../node_modules/preact/dist/preact.module.js","preact/hooks":"../node_modules/preact/hooks/dist/hooks.module.js","src/utils/messenger":"utils/messenger.ts","src/hooks/useEmbedSize":"hooks/useEmbedSize.ts"}],"components/Snippet/Snippet.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Snippet = void 0;

var _preact = require("preact");

var _hooks = require("preact/hooks");

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
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

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
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
            op = [0];
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
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var Snippet = function Snippet(_a) {
  var code = _a.code,
      onCopy = _a.onCopy;
  var textAreaRef = (0, _hooks.useRef)();

  var _b = (0, _hooks.useState)(false),
      focused = _b[0],
      setFocused = _b[1];

  var onFocus = function onFocus(e) {
    return __awaiter(void 0, void 0, void 0, function () {
      var target, e_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            target = e.target;
            setFocused(true);
            _a.label = 1;

          case 1:
            _a.trys.push([1, 3,, 4]);

            return [4
            /*yield*/
            , navigator.clipboard.writeText(target.value)];

          case 2:
            _a.sent();

            return [3
            /*break*/
            , 4];

          case 3:
            e_1 = _a.sent();
            onCopy === null || onCopy === void 0 ? void 0 : onCopy(target.value);
            return [3
            /*break*/
            , 4];

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  (0, _hooks.useEffect)(function () {
    var _a;

    if (focused) {
      (_a = textAreaRef.current) === null || _a === void 0 ? void 0 : _a.blur();
      setFocused(false);
    }
  }, [setFocused, focused]);
  return (0, _preact.h)("div", {
    class: "snippet-preview".concat(focused ? ' snippet-preview--focused' : '')
  }, (0, _preact.h)("div", {
    class: "snippet-preview__info"
  }, "Copied!"), (0, _preact.h)("textarea", {
    readonly: true,
    class: "snippet-preview__textarea",
    ref: function ref(_ref) {
      return textAreaRef.current = _ref;
    },
    onFocus: onFocus,
    cols: 80,
    rows: 7,
    dangerouslySetInnerHTML: {
      __html: code
    }
  }));
};

exports.Snippet = Snippet;
},{"preact":"../node_modules/preact/dist/preact.module.js","preact/hooks":"../node_modules/preact/hooks/dist/hooks.module.js"}],"pages/TripWidget.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TripWidget = void 0;

var _preact = require("preact");

var _Button = require("src/components/Button/Button");

var _Routes = require("src/config/Routes");

var _WidgetWrapper = require("src/components/WidgetWrapper/WidgetWrapper");

var _helper = require("src/utils/helper");

var _Snippet = require("src/components/Snippet/Snippet");

var Link = function Link(slug, params) {
  if (params === void 0) {
    params = {};
  }

  var link = (0, _Routes.getExternalUrl)((0, _Routes.tripLink)(slug));
  return (0, _helper.getSnippetLink)(link, 'Book Now', params);
};

var Widget = function Widget(_a) {
  var slug = _a.matches.slug;
  return (0, _preact.h)(_WidgetWrapper.WidgetWrapper, null, (0, _preact.h)(_Button.Button, {
    href: (0, _Routes.getExternalUrl)("".concat((0, _Routes.tripLink)(slug), "?source=").concat(encodeURIComponent(window.parent.location.origin)))
  }, "Book Now"));
};

var Code = function Code(_a) {
  var slug = _a.matches.slug;
  return (0, _preact.h)(_WidgetWrapper.WidgetWrapper, null, (0, _preact.h)(_Snippet.Snippet, {
    code: Link(slug, {
      withEmbedCode: true
    })
  }));
};

var TripWidget = Object.assign(Widget, {
  Code: Code,
  Link: Link
});
exports.TripWidget = TripWidget;
},{"preact":"../node_modules/preact/dist/preact.module.js","src/components/Button/Button":"components/Button/Button.tsx","src/config/Routes":"config/Routes.ts","src/components/WidgetWrapper/WidgetWrapper":"components/WidgetWrapper/WidgetWrapper.tsx","src/utils/helper":"utils/helper.ts","src/components/Snippet/Snippet":"components/Snippet/Snippet.tsx"}],"../node_modules/dequal/lite/index.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var has = Object.prototype.hasOwnProperty;

function dequal(foo, bar) {
  var ctor, len;
  if (foo === bar) return true;

  if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
    if (ctor === Date) return foo.getTime() === bar.getTime();
    if (ctor === RegExp) return foo.toString() === bar.toString();

    if (ctor === Array) {
      if ((len = foo.length) === bar.length) {
        while (len-- && dequal(foo[len], bar[len])) {
          ;
        }
      }

      return len === -1;
    }

    if (!ctor || _typeof(foo) === 'object') {
      len = 0;

      for (ctor in foo) {
        if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
        if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
      }

      return Object.keys(bar).length === len;
    }
  }

  return foo !== foo && bar !== bar;
}

exports.dequal = dequal;
},{}],"../node_modules/preact-swr/esm/libs/hash.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hash;
// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
var table = new WeakMap(); // counter of the key

var counter = 0; // hashes an array of objects and returns a string

function hash(args) {
  if (!args.length) return '';
  var key = 'arg';

  for (var i = 0; i < args.length; ++i) {
    if (args[i] === null) {
      key += '@null';
      continue;
    }

    var _hash = void 0;

    if (typeof args[i] !== 'object' && typeof args[i] !== 'function') {
      // need to consider the case that args[i] is a string:
      // args[i]        _hash
      // "undefined" -> '"undefined"'
      // undefined   -> 'undefined'
      // 123         -> '123'
      // "null"      -> '"null"'
      if (typeof args[i] === 'string') {
        _hash = "\"" + args[i] + "\"";
      } else {
        _hash = String(args[i]);
      }
    } else if (!table.has(args[i])) {
      _hash = counter;
      table.set(args[i], counter++);
    } else {
      _hash = table.get(args[i]);
    }

    key += "@" + _hash;
  }

  return key;
}
},{}],"../node_modules/preact-swr/esm/cache.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _hash = _interopRequireDefault(require("./libs/hash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cache =
/** @class */
function () {
  function Cache(initialData) {
    if (initialData === void 0) {
      initialData = {};
    }

    this.__cache = new Map(Object.entries(initialData));
    this.__listeners = [];
  }

  Cache.prototype.get = function (key) {
    var _key = this.serializeKey(key)[0];
    return this.__cache.get(_key);
  };

  Cache.prototype.set = function (key, value) {
    var _key = this.serializeKey(key)[0];

    this.__cache.set(_key, value);

    this.notify();
  };

  Cache.prototype.keys = function () {
    return Array.from(this.__cache.keys());
  };

  Cache.prototype.has = function (key) {
    var _key = this.serializeKey(key)[0];
    return this.__cache.has(_key);
  };

  Cache.prototype.clear = function () {
    this.__cache.clear();

    this.notify();
  };

  Cache.prototype.delete = function (key) {
    var _key = this.serializeKey(key)[0];

    this.__cache.delete(_key);

    this.notify();
  }; // TODO: introduce namespace for the cache


  Cache.prototype.serializeKey = function (key) {
    var args = null;

    if (typeof key === 'function') {
      try {
        key = key();
      } catch (err) {
        // dependencies not ready
        key = '';
      }
    }

    if (Array.isArray(key)) {
      // args array
      args = key;
      key = (0, _hash.default)(key);
    } else {
      // convert null to ''
      key = String(key || '');
    }

    var errorKey = key ? "err@" + key : '';
    var isValidatingKey = key ? "validating@" + key : '';
    return [key, args, errorKey, isValidatingKey];
  };

  Cache.prototype.subscribe = function (listener) {
    var _this = this;

    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    var isSubscribed = true;

    this.__listeners.push(listener);

    return function () {
      if (!isSubscribed) return;
      isSubscribed = false;

      var index = _this.__listeners.indexOf(listener);

      if (index > -1) {
        _this.__listeners[index] = _this.__listeners[_this.__listeners.length - 1];
        _this.__listeners.length--;
      }
    };
  }; // Notify Cache subscribers about a change in the cache


  Cache.prototype.notify = function () {
    for (var _i = 0, _a = this.__listeners; _i < _a.length; _i++) {
      var listener = _a[_i];
      listener();
    }
  };

  return Cache;
}();

var _default = Cache;
exports.default = _default;
},{"./libs/hash":"../node_modules/preact-swr/esm/libs/hash.js"}],"../node_modules/preact-swr/esm/libs/web-preset.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function isOnline() {
  if (typeof navigator.onLine !== 'undefined') {
    return navigator.onLine;
  } // always assume it's online


  return true;
}

function isDocumentVisible() {
  if (typeof document !== 'undefined' && typeof document.visibilityState !== 'undefined') {
    return document.visibilityState !== 'hidden';
  } // always assume it's visible


  return true;
}

var fetcher = function (url) {
  return fetch(url).then(function (res) {
    return res.json();
  });
};

var _default = {
  isOnline: isOnline,
  isDocumentVisible: isDocumentVisible,
  fetcher: fetcher
};
exports.default = _default;
},{}],"../node_modules/preact-swr/esm/config.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.cache = void 0;

var _lite = require("dequal/lite");

var _cache = _interopRequireDefault(require("./cache"));

var _webPreset = _interopRequireDefault(require("./libs/web-preset"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// cache
var cache = new _cache.default(); // error retry

exports.cache = cache;

function onErrorRetry(_, __, config, revalidate, opts) {
  if (!config.isDocumentVisible()) {
    // if it's hidden, stop
    // it will auto revalidate when focus
    return;
  }

  if (typeof config.errorRetryCount === 'number' && opts.retryCount > config.errorRetryCount) {
    return;
  } // exponential backoff


  var count = Math.min(opts.retryCount || 0, 8);
  var timeout = ~~((Math.random() + 0.5) * (1 << count)) * config.errorRetryInterval;
  setTimeout(revalidate, timeout, opts);
} // client side: need to adjust the config
// based on the browser status
// slow connection (<= 70Kbps)


var slowConnection = typeof window !== 'undefined' && navigator['connection'] && ['slow-2g', '2g'].indexOf(navigator['connection'].effectiveType) !== -1; // config

var defaultConfig = {
  // events
  onLoadingSlow: function () {},
  onSuccess: function () {},
  onError: function () {},
  onErrorRetry: onErrorRetry,
  errorRetryInterval: (slowConnection ? 10 : 5) * 1000,
  focusThrottleInterval: 5 * 1000,
  dedupingInterval: 2 * 1000,
  loadingTimeout: (slowConnection ? 5 : 3) * 1000,
  refreshInterval: 0,
  revalidateOnFocus: true,
  revalidateOnReconnect: true,
  refreshWhenHidden: false,
  refreshWhenOffline: false,
  shouldRetryOnError: true,
  suspense: false,
  compare: _lite.dequal,
  fetcher: _webPreset.default.fetcher,
  isOnline: _webPreset.default.isOnline,
  isDocumentVisible: _webPreset.default.isDocumentVisible
};
var _default = defaultConfig;
exports.default = _default;
},{"dequal/lite":"../node_modules/dequal/lite/index.js","./cache":"../node_modules/preact-swr/esm/cache.js","./libs/web-preset":"../node_modules/preact-swr/esm/libs/web-preset.js"}],"../node_modules/preact-swr/esm/swr-config-context.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var SWRConfigContext = (0, _preact.createContext)({});
SWRConfigContext.displayName = 'SWRConfigContext';
var _default = SWRConfigContext;
exports.default = _default;
},{"preact":"../node_modules/preact/dist/preact.module.js"}],"../node_modules/preact-swr/esm/use-swr.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trigger = exports.mutate = exports.default = exports.SWRConfig = void 0;

var _hooks = require("preact/hooks");

var _config = _interopRequireWildcard(require("./config"));

var _swrConfigContext = _interopRequireDefault(require("./swr-config-context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
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

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
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
          op = [0];
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
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var IS_SERVER = typeof window === 'undefined' || // @ts-ignore
!!(typeof Deno !== 'undefined' && Deno && Deno.version && Deno.version.deno); // polyfill for requestAnimationFrame

var rAF = IS_SERVER ? null : window['requestAnimationFrame'] || function (f) {
  return setTimeout(f, 1);
}; // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.

var useIsomorphicLayoutEffect = IS_SERVER ? _hooks.useEffect : _hooks.useLayoutEffect; // global state managers

var CONCURRENT_PROMISES = {};
var CONCURRENT_PROMISES_TS = {};
var FOCUS_REVALIDATORS = {};
var RECONNECT_REVALIDATORS = {};
var CACHE_REVALIDATORS = {};
var MUTATION_TS = {};
var MUTATION_END_TS = {}; // generate strictly increasing timestamps

var now = function () {
  var ts = 0;
  return function () {
    return ++ts;
  };
}(); // setup DOM events listeners for `focus` and `reconnect` actions


if (!IS_SERVER && window.addEventListener) {
  var revalidate_1 = function (revalidators) {
    if (!_config.default.isDocumentVisible() || !_config.default.isOnline()) return;

    for (var key in revalidators) {
      if (revalidators[key][0]) revalidators[key][0]();
    }
  }; // focus revalidate


  window.addEventListener('visibilitychange', function () {
    return revalidate_1(FOCUS_REVALIDATORS);
  }, false);
  window.addEventListener('focus', function () {
    return revalidate_1(FOCUS_REVALIDATORS);
  }, false); // reconnect revalidate

  window.addEventListener('online', function () {
    return revalidate_1(RECONNECT_REVALIDATORS);
  }, false);
}

var trigger = function (_key, shouldRevalidate) {
  if (shouldRevalidate === void 0) {
    shouldRevalidate = true;
  } // we are ignoring the second argument which correspond to the arguments
  // the fetcher will receive when key is an array


  var _a = _config.cache.serializeKey(_key),
      key = _a[0],
      keyErr = _a[2],
      keyValidating = _a[3];

  if (!key) return Promise.resolve();
  var updaters = CACHE_REVALIDATORS[key];

  if (key && updaters) {
    var currentData = _config.cache.get(key);

    var currentError = _config.cache.get(keyErr);

    var currentIsValidating = _config.cache.get(keyValidating);

    var promises = [];

    for (var i = 0; i < updaters.length; ++i) {
      promises.push(updaters[i](shouldRevalidate, currentData, currentError, currentIsValidating, i > 0));
    } // return new updated value


    return Promise.all(promises).then(function () {
      return _config.cache.get(key);
    });
  }

  return Promise.resolve(_config.cache.get(key));
};

exports.trigger = trigger;

var broadcastState = function (key, data, error, isValidating) {
  var updaters = CACHE_REVALIDATORS[key];

  if (key && updaters) {
    for (var i = 0; i < updaters.length; ++i) {
      updaters[i](false, data, error, isValidating);
    }
  }
};

var mutate = function (_key, _data, shouldRevalidate) {
  if (shouldRevalidate === void 0) {
    shouldRevalidate = true;
  }

  return __awaiter(void 0, void 0, void 0, function () {
    var _a, key, keyErr, beforeMutationTs, beforeConcurrentPromisesTs, data, error, isAsyncMutation, err_1, shouldAbort, updaters, promises, i;

    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          _a = _config.cache.serializeKey(_key), key = _a[0], keyErr = _a[2];
          if (!key) return [2
          /*return*/
          ]; // if there is no new data to update, let's just revalidate the key

          if (typeof _data === 'undefined') return [2
          /*return*/
          , trigger(_key, shouldRevalidate) // update global timestamps
          ]; // update global timestamps

          MUTATION_TS[key] = now() - 1;
          MUTATION_END_TS[key] = 0;
          beforeMutationTs = MUTATION_TS[key];
          beforeConcurrentPromisesTs = CONCURRENT_PROMISES_TS[key];
          isAsyncMutation = false;

          if (_data && typeof _data === 'function') {
            // `_data` is a function, call it passing current cache value
            try {
              _data = _data(_config.cache.get(key));
            } catch (err) {
              error = err;
            }
          }

          if (!(_data && typeof _data.then === 'function')) return [3
          /*break*/
          , 5]; // `_data` is a promise

          isAsyncMutation = true;
          _b.label = 1;

        case 1:
          _b.trys.push([1, 3,, 4]);

          return [4
          /*yield*/
          , _data];

        case 2:
          data = _b.sent();
          return [3
          /*break*/
          , 4];

        case 3:
          err_1 = _b.sent();
          error = err_1;
          return [3
          /*break*/
          , 4];

        case 4:
          return [3
          /*break*/
          , 6];

        case 5:
          data = _data;
          _b.label = 6;

        case 6:
          shouldAbort = function () {
            // check if other mutations have occurred since we've started this mutation
            if (beforeMutationTs !== MUTATION_TS[key] || beforeConcurrentPromisesTs !== CONCURRENT_PROMISES_TS[key]) {
              if (error) throw error;
              return true;
            }
          }; // if there's a race we don't update cache or broadcast change, just return the data


          if (shouldAbort()) return [2
          /*return*/
          , data];

          if (typeof data !== 'undefined') {
            // update cached data
            _config.cache.set(key, data);
          } // always update or reset the error


          _config.cache.set(keyErr, error); // reset the timestamp to mark the mutation has ended


          MUTATION_END_TS[key] = now() - 1;
          if (!!isAsyncMutation) return [3
          /*break*/
          , 8]; // let's always broadcast in the next tick
          // to dedupe synchronous mutation calls
          // check out https://github.com/vercel/swr/pull/735 for more details

          return [4
          /*yield*/
          , 0 // we skip broadcasting if there's another mutation happened synchronously
          ];

        case 7:
          // let's always broadcast in the next tick
          // to dedupe synchronous mutation calls
          // check out https://github.com/vercel/swr/pull/735 for more details
          _b.sent(); // we skip broadcasting if there's another mutation happened synchronously


          if (shouldAbort()) return [2
          /*return*/
          , data];
          _b.label = 8;

        case 8:
          updaters = CACHE_REVALIDATORS[key];

          if (updaters) {
            promises = [];

            for (i = 0; i < updaters.length; ++i) {
              promises.push(updaters[i](!!shouldRevalidate, data, error, undefined, i > 0));
            } // return new updated value


            return [2
            /*return*/
            , Promise.all(promises).then(function () {
              if (error) throw error;
              return _config.cache.get(key);
            })];
          } // throw error or return data to be used by caller of mutate


          if (error) throw error;
          return [2
          /*return*/
          , data];
      }
    });
  });
};

exports.mutate = mutate;

function useSWR() {
  var _this = this;

  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var _key,
      fn,
      config = {};

  if (args.length >= 1) {
    _key = args[0];
  }

  if (args.length > 2) {
    fn = args[1];
    config = args[2];
  } else if (typeof args[1] === 'function') {
    fn = args[1];
  } else if (typeof args[1] === 'object') {
    config = args[1];
  } // we assume `key` as the identifier of the request
  // `key` can change but `fn` shouldn't
  // (because `revalidate` only depends on `key`)
  // `keyErr` is the cache key for error objects


  var _a = _config.cache.serializeKey(_key),
      key = _a[0],
      fnArgs = _a[1],
      keyErr = _a[2],
      keyValidating = _a[3];

  config = Object.assign({}, _config.default, (0, _hooks.useContext)(_swrConfigContext.default), config);
  var configRef = (0, _hooks.useRef)(config);
  useIsomorphicLayoutEffect(function () {
    configRef.current = config;
  }, []);

  if (typeof fn === 'undefined') {
    // use the global fetcher
    fn = config.fetcher;
  }

  var resolveData = function () {
    var cachedData = _config.cache.get(key);

    return typeof cachedData === 'undefined' ? config.initialData : cachedData;
  };

  var initialData = resolveData();

  var initialError = _config.cache.get(keyErr);

  var initialIsValidating = !!_config.cache.get(keyValidating); // if a state is accessed (data, error or isValidating),
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
  }); // display the data label in the React DevTools next to SWR hooks

  (0, _hooks.useDebugValue)(stateRef.current.data);
  var rerender = (0, _hooks.useState)(null)[1];
  var dispatch = (0, _hooks.useCallback)(function (payload) {
    var shouldUpdateState = false;

    for (var k in payload) {
      if (stateRef.current[k] === payload[k]) {
        continue;
      }

      stateRef.current[k] = payload[k];

      if (stateDependencies.current[k]) {
        shouldUpdateState = true;
      }
    }

    if (shouldUpdateState || config.suspense) {
      // if component is unmounted, should skip rerender
      // if component is not mounted, should skip rerender
      if (unmountedRef.current || !initialMountedRef.current) return;
      rerender({});
    }
  }, []); // error ref inside revalidate (is last request errored?)

  var unmountedRef = (0, _hooks.useRef)(false);
  var keyRef = (0, _hooks.useRef)(key); // check if component is mounted in suspense mode

  var initialMountedRef = (0, _hooks.useRef)(false); // do unmount check for callbacks

  var eventsRef = (0, _hooks.useRef)({
    emit: function (event) {
      var _a;

      var params = [];

      for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
      }

      if (unmountedRef.current) return;
      if (!initialMountedRef.current) return;

      (_a = configRef.current)[event].apply(_a, params);
    }
  });
  var boundMutate = (0, _hooks.useCallback)(function (data, shouldRevalidate) {
    return mutate(keyRef.current, data, shouldRevalidate);
  }, []);

  var addRevalidator = function (revalidators, callback) {
    if (!callback) return;

    if (!revalidators[key]) {
      revalidators[key] = [callback];
    } else {
      revalidators[key].push(callback);
    }
  };

  var removeRevalidator = function (revlidators, callback) {
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
  }; // start a revalidation


  var revalidate = (0, _hooks.useCallback)(function (revalidateOpts) {
    if (revalidateOpts === void 0) {
      revalidateOpts = {};
    }

    return __awaiter(_this, void 0, void 0, function () {
      var loading, shouldDeduping, newData, startAt, newState, err_2, retryCount;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!key || !fn) return [2
            /*return*/
            , false];
            if (unmountedRef.current) return [2
            /*return*/
            , false];
            revalidateOpts = Object.assign({
              dedupe: false
            }, revalidateOpts);
            loading = true;
            shouldDeduping = typeof CONCURRENT_PROMISES[key] !== 'undefined' && revalidateOpts.dedupe;
            _a.label = 1;

          case 1:
            _a.trys.push([1, 6,, 7]);

            dispatch({
              isValidating: true
            });

            _config.cache.set(keyValidating, true);

            if (!shouldDeduping) {
              // also update other hooks
              broadcastState(key, stateRef.current.data, stateRef.current.error, true);
            }

            newData = void 0;
            startAt = void 0;
            if (!shouldDeduping) return [3
            /*break*/
            , 3]; // there's already an ongoing request,
            // this one needs to be deduplicated.

            startAt = CONCURRENT_PROMISES_TS[key];
            return [4
            /*yield*/
            , CONCURRENT_PROMISES[key]];

          case 2:
            newData = _a.sent();
            return [3
            /*break*/
            , 5];

          case 3:
            // if no cache being rendered currently (it shows a blank page),
            // we trigger the loading slow event.
            if (config.loadingTimeout && !_config.cache.get(key)) {
              setTimeout(function () {
                if (loading) eventsRef.current.emit('onLoadingSlow', key, config);
              }, config.loadingTimeout);
            }

            if (fnArgs !== null) {
              CONCURRENT_PROMISES[key] = fn.apply(void 0, fnArgs);
            } else {
              CONCURRENT_PROMISES[key] = fn(key);
            }

            CONCURRENT_PROMISES_TS[key] = startAt = now();
            return [4
            /*yield*/
            , CONCURRENT_PROMISES[key]];

          case 4:
            newData = _a.sent();
            setTimeout(function () {
              delete CONCURRENT_PROMISES[key];
              delete CONCURRENT_PROMISES_TS[key];
            }, config.dedupingInterval); // trigger the success event,
            // only do this for the original request.

            eventsRef.current.emit('onSuccess', newData, key, config);
            _a.label = 5;

          case 5:
            // if there're other ongoing request(s), started after the current one,
            // we need to ignore the current one to avoid possible race conditions:
            //   req1------------------>res1        (current one)
            //        req2---------------->res2
            // the request that fired later will always be kept.
            if (CONCURRENT_PROMISES_TS[key] > startAt) {
              return [2
              /*return*/
              , false];
            } // if there're other mutations(s), overlapped with the current revalidation:
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


            if (MUTATION_TS[key] && ( // case 1
            startAt <= MUTATION_TS[key] || // case 2
            startAt <= MUTATION_END_TS[key] || // case 3
            MUTATION_END_TS[key] === 0)) {
              dispatch({
                isValidating: false
              });
              return [2
              /*return*/
              , false];
            }

            _config.cache.set(key, newData);

            _config.cache.set(keyErr, undefined);

            _config.cache.set(keyValidating, false);

            newState = {
              isValidating: false
            };

            if (typeof stateRef.current.error !== 'undefined') {
              // we don't have an error
              newState.error = undefined;
            }

            if (!config.compare(stateRef.current.data, newData)) {
              // deep compare to avoid extra re-render
              // data changed
              newState.data = newData;
            } // merge the new state


            dispatch(newState);

            if (!shouldDeduping) {
              // also update other hooks
              broadcastState(key, newData, newState.error, false);
            }

            return [3
            /*break*/
            , 7];

          case 6:
            err_2 = _a.sent();
            delete CONCURRENT_PROMISES[key];
            delete CONCURRENT_PROMISES_TS[key];

            _config.cache.set(keyErr, err_2); // get a new error
            // don't use deep equal for errors


            if (stateRef.current.error !== err_2) {
              // we keep the stale data
              dispatch({
                isValidating: false,
                error: err_2
              });

              if (!shouldDeduping) {
                // also broadcast to update other hooks
                broadcastState(key, undefined, err_2, false);
              }
            } // events and retry


            eventsRef.current.emit('onError', err_2, key, config);

            if (config.shouldRetryOnError) {
              retryCount = (revalidateOpts.retryCount || 0) + 1;
              eventsRef.current.emit('onErrorRetry', err_2, key, config, revalidate, Object.assign({
                dedupe: true
              }, revalidateOpts, {
                retryCount: retryCount
              }));
            }

            return [3
            /*break*/
            , 7];

          case 7:
            loading = false;
            return [2
            /*return*/
            , true];
        }
      });
    });
  }, [key]); // mounted (client side rendering)

  useIsomorphicLayoutEffect(function () {
    if (!key) return undefined; // after `key` updates, we need to mark it as mounted

    unmountedRef.current = false;
    initialMountedRef.current = true; // after the component is mounted (hydrated),
    // we need to update the data from the cache
    // and trigger a revalidation

    var currentHookData = stateRef.current.data;
    var latestKeyedData = resolveData(); // update the state if the key changed (not the inital render) or cache updated

    if (keyRef.current !== key) {
      keyRef.current = key;
    }

    if (!config.compare(currentHookData, latestKeyedData)) {
      dispatch({
        data: latestKeyedData
      });
    } // revalidate with deduping


    var softRevalidate = function () {
      return revalidate({
        dedupe: true
      });
    }; // trigger a revalidation


    if (config.revalidateOnMount || !config.initialData && config.revalidateOnMount === undefined) {
      if (typeof latestKeyedData !== 'undefined') {
        // delay revalidate if there's cache
        // to not block the rendering
        rAF(softRevalidate);
      } else {
        softRevalidate();
      }
    }

    var pending = false;

    var onFocus = function () {
      if (pending || !configRef.current.revalidateOnFocus) return;
      pending = true;
      softRevalidate();
      setTimeout(function () {
        return pending = false;
      }, configRef.current.focusThrottleInterval);
    };

    var onReconnect = function () {
      if (configRef.current.revalidateOnReconnect) {
        softRevalidate();
      }
    }; // register global cache update listener


    var onUpdate = function (shouldRevalidate, updatedData, updatedError, updatedIsValidating, dedupe) {
      if (shouldRevalidate === void 0) {
        shouldRevalidate = true;
      }

      if (dedupe === void 0) {
        dedupe = true;
      } // update hook state


      var newState = {};
      var needUpdate = false;

      if (typeof updatedData !== 'undefined' && !config.compare(stateRef.current.data, updatedData)) {
        newState.data = updatedData;
        needUpdate = true;
      } // always update error
      // because it can be `undefined`


      if (stateRef.current.error !== updatedError) {
        newState.error = updatedError;
        needUpdate = true;
      }

      if (typeof updatedIsValidating !== 'undefined' && stateRef.current.isValidating !== updatedIsValidating) {
        newState.isValidating = updatedIsValidating;
        needUpdate = true;
      }

      if (needUpdate) {
        dispatch(newState);
      }

      if (shouldRevalidate) {
        if (dedupe) {
          return softRevalidate();
        }

        return revalidate();
      }

      return false;
    };

    addRevalidator(FOCUS_REVALIDATORS, onFocus);
    addRevalidator(RECONNECT_REVALIDATORS, onReconnect);
    addRevalidator(CACHE_REVALIDATORS, onUpdate);
    return function () {
      // cleanup
      dispatch = function () {
        return null;
      }; // mark it as unmounted


      unmountedRef.current = true;
      removeRevalidator(FOCUS_REVALIDATORS, onFocus);
      removeRevalidator(RECONNECT_REVALIDATORS, onReconnect);
      removeRevalidator(CACHE_REVALIDATORS, onUpdate);
    };
  }, [key, revalidate]);
  useIsomorphicLayoutEffect(function () {
    var timer = null;

    var tick = function () {
      return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!(!stateRef.current.error && (configRef.current.refreshWhenHidden || configRef.current.isDocumentVisible()) && (configRef.current.refreshWhenOffline || configRef.current.isOnline()))) return [3
              /*break*/
              , 2]; // only revalidate when the page is visible
              // if API request errored, we stop polling in this round
              // and let the error retry function handle it

              return [4
              /*yield*/
              , revalidate({
                dedupe: true
              })];

            case 1:
              // only revalidate when the page is visible
              // if API request errored, we stop polling in this round
              // and let the error retry function handle it
              _a.sent();

              _a.label = 2;

            case 2:
              // Read the latest refreshInterval
              if (configRef.current.refreshInterval) {
                timer = setTimeout(tick, configRef.current.refreshInterval);
              }

              return [2
              /*return*/
              ];
          }
        });
      });
    };

    if (configRef.current.refreshInterval) {
      timer = setTimeout(tick, configRef.current.refreshInterval);
    }

    return function () {
      if (timer) clearTimeout(timer);
    };
  }, [config.refreshInterval, config.refreshWhenHidden, config.refreshWhenOffline, revalidate]); // define returned state
  // can be memorized since the state is a ref

  var memoizedState = (0, _hooks.useMemo)(function () {
    var state = {
      revalidate: revalidate,
      mutate: boundMutate
    };
    Object.defineProperties(state, {
      error: {
        // `key` might be changed in the upcoming hook re-render,
        // but the previous state will stay
        // so we need to match the latest key and data (fallback to `initialData`)
        get: function () {
          stateDependencies.current.error = true;
          return keyRef.current === key ? stateRef.current.error : initialError;
        },
        enumerable: true
      },
      data: {
        get: function () {
          stateDependencies.current.data = true;
          return keyRef.current === key ? stateRef.current.data : initialData;
        },
        enumerable: true
      },
      isValidating: {
        get: function () {
          stateDependencies.current.isValidating = true;
          return key ? stateRef.current.isValidating : false;
        },
        enumerable: true
      }
    });
    return state;
  }, [revalidate]); // suspense

  if (config.suspense) {
    // in suspense mode, we can't return empty state
    // (it should be suspended)
    // try to get data and error from cache
    var latestData = _config.cache.get(key);

    var latestError = _config.cache.get(keyErr);

    if (typeof latestData === 'undefined') {
      latestData = initialData;
    }

    if (typeof latestError === 'undefined') {
      latestError = initialError;
    }

    if (typeof latestData === 'undefined' && typeof latestError === 'undefined') {
      // need to start the request if it hasn't
      if (!CONCURRENT_PROMISES[key]) {
        // trigger revalidate immediately
        // to get the promise
        // in this revalidate, should not rerender
        revalidate();
      }

      if (CONCURRENT_PROMISES[key] && typeof CONCURRENT_PROMISES[key].then === 'function') {
        // if it is a promise
        throw CONCURRENT_PROMISES[key];
      } // it's a value, return it directly (override)


      latestData = CONCURRENT_PROMISES[key];
    }

    if (typeof latestData === 'undefined' && latestError) {
      // in suspense mode, throw error if there's no content
      throw latestError;
    } // return the latest data / error from cache
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

var SWRConfig = _swrConfigContext.default.Provider;
exports.SWRConfig = SWRConfig;
var _default = useSWR;
exports.default = _default;
},{"preact/hooks":"../node_modules/preact/hooks/dist/hooks.module.js","./config":"../node_modules/preact-swr/esm/config.js","./swr-config-context":"../node_modules/preact-swr/esm/swr-config-context.js"}],"../node_modules/preact-swr/esm/use-swr-infinite.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSWRInfinite = useSWRInfinite;

var _hooks = require("preact/hooks");

var _config = _interopRequireWildcard(require("./config"));

var _swrConfigContext = _interopRequireDefault(require("./swr-config-context"));

var _useSwr = _interopRequireDefault(require("./use-swr"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
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

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
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
          op = [0];
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
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

function useSWRInfinite() {
  var _this = this;

  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var getKey,
      fn,
      config = {};

  if (args.length >= 1) {
    getKey = args[0];
  }

  if (args.length > 2) {
    fn = args[1];
    config = args[2];
  } else if (typeof args[1] === 'function') {
    fn = args[1];
  } else if (typeof args[1] === 'object') {
    config = args[1];
  }

  config = Object.assign({}, _config.default, (0, _hooks.useContext)(_swrConfigContext.default), config);

  var _a = config.initialSize,
      initialSize = _a === void 0 ? 1 : _a,
      _b = config.revalidateAll,
      revalidateAll = _b === void 0 ? false : _b,
      _c = config.persistSize,
      persistSize = _c === void 0 ? false : _c,
      defaultFetcher = config.fetcher,
      extraConfig = __rest(config, ["initialSize", "revalidateAll", "persistSize", "fetcher"]);

  if (typeof fn === 'undefined') {
    // use the global fetcher
    // we have to convert the type here
    fn = defaultFetcher;
  } // get the serialized key of the first page


  var firstPageKey = null;

  try {
    ;
    firstPageKey = _config.cache.serializeKey(getKey(0, null))[0];
  } catch (err) {// not ready
  }

  var rerender = (0, _hooks.useState)(false)[1]; // we use cache to pass extra info (context) to fetcher so it can be globally shared
  // here we get the key of the fetcher context cache

  var contextCacheKey = null;

  if (firstPageKey) {
    contextCacheKey = "context@" + firstPageKey;
  } // page count is cached as well, so when navigating the list can be restored


  var pageCountCacheKey = null;
  var cachedPageSize;

  if (firstPageKey) {
    pageCountCacheKey = "size@" + firstPageKey;
    cachedPageSize = _config.cache.get(pageCountCacheKey);
  }

  var pageCountRef = (0, _hooks.useRef)(cachedPageSize || initialSize);
  var didMountRef = (0, _hooks.useRef)(false); // every time the key changes, we reset the page size if it's not persisted

  (0, _hooks.useEffect)(function () {
    if (didMountRef.current) {
      if (!persistSize) {
        pageCountRef.current = initialSize;
      }
    } else {
      didMountRef.current = true;
    }
  }, [firstPageKey]); // actual swr of all pages

  var swr = (0, _useSwr.default)(firstPageKey ? ['many', firstPageKey] : null, function () {
    return __awaiter(_this, void 0, void 0, function () {
      var _a, originalData, force, data, previousPageData, i, _b, pageKey, pageArgs, pageData, shouldRevalidatePage;

      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            _a = _config.cache.get(contextCacheKey) || {}, originalData = _a.originalData, force = _a.force;
            data = [];
            previousPageData = null;
            i = 0;
            _c.label = 1;

          case 1:
            if (!(i < pageCountRef.current)) return [3
            /*break*/
            , 8];
            _b = _config.cache.serializeKey(getKey(i, previousPageData)), pageKey = _b[0], pageArgs = _b[1];

            if (!pageKey) {
              // pageKey is falsy, stop fetching next pages
              return [3
              /*break*/
              , 8];
            }

            pageData = _config.cache.get(pageKey);
            shouldRevalidatePage = revalidateAll || force || typeof force === 'undefined' && i === 0 || originalData && !config.compare(originalData[i], pageData) || typeof pageData === 'undefined';
            if (!shouldRevalidatePage) return [3
            /*break*/
            , 6];
            if (!(pageArgs !== null)) return [3
            /*break*/
            , 3];
            return [4
            /*yield*/
            , fn.apply(void 0, pageArgs)];

          case 2:
            pageData = _c.sent();
            return [3
            /*break*/
            , 5];

          case 3:
            return [4
            /*yield*/
            , fn(pageKey)];

          case 4:
            pageData = _c.sent();
            _c.label = 5;

          case 5:
            _config.cache.set(pageKey, pageData);

            _c.label = 6;

          case 6:
            data.push(pageData);
            previousPageData = pageData;
            _c.label = 7;

          case 7:
            ++i;
            return [3
            /*break*/
            , 1];

          case 8:
            // once we executed the data fetching based on the context, clear the context
            _config.cache.delete(contextCacheKey); // return the data


            return [2
            /*return*/
            , data];
        }
      });
    });
  }, extraConfig); // keep the data inside a ref

  var dataRef = (0, _hooks.useRef)(swr.data);
  (0, _hooks.useEffect)(function () {
    dataRef.current = swr.data;
  }, [swr.data]);
  var mutate = (0, _hooks.useCallback)(function (data, shouldRevalidate) {
    if (shouldRevalidate === void 0) {
      shouldRevalidate = true;
    }

    if (shouldRevalidate && typeof data !== 'undefined') {
      // we only revalidate the pages that are changed
      var originalData = dataRef.current;

      _config.cache.set(contextCacheKey, {
        originalData: originalData,
        force: false
      });
    } else if (shouldRevalidate) {
      // calling `mutate()`, we revalidate all pages
      _config.cache.set(contextCacheKey, {
        force: true
      });
    }

    return swr.mutate(data, shouldRevalidate);
  }, [swr.mutate, contextCacheKey]); // extend the SWR API

  var size = pageCountRef.current;
  var setSize = (0, _hooks.useCallback)(function (arg) {
    if (typeof arg === 'function') {
      pageCountRef.current = arg(pageCountRef.current);
    } else if (typeof arg === 'number') {
      pageCountRef.current = arg;
    }

    _config.cache.set(pageCountCacheKey, pageCountRef.current);

    rerender(function (v) {
      return !v;
    });
    return mutate(function (v) {
      return v;
    });
  }, [mutate, pageCountCacheKey]);
  return __assign(__assign({}, swr), {
    mutate: mutate,
    size: size,
    setSize: setSize
  });
}
},{"preact/hooks":"../node_modules/preact/hooks/dist/hooks.module.js","./config":"../node_modules/preact-swr/esm/config.js","./swr-config-context":"../node_modules/preact-swr/esm/swr-config-context.js","./use-swr":"../node_modules/preact-swr/esm/use-swr.js"}],"../node_modules/preact-swr/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  useSWRInfinite: true,
  cache: true
};
Object.defineProperty(exports, "cache", {
  enumerable: true,
  get: function () {
    return _config.cache;
  }
});
exports.default = void 0;
Object.defineProperty(exports, "useSWRInfinite", {
  enumerable: true,
  get: function () {
    return _useSwrInfinite.useSWRInfinite;
  }
});

var _useSwr = _interopRequireWildcard(require("./use-swr"));

Object.keys(_useSwr).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useSwr[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useSwr[key];
    }
  });
});

var _useSwrInfinite = require("./use-swr-infinite");

var _config = require("./config");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = _useSwr.default;
exports.default = _default;
},{"./use-swr":"../node_modules/preact-swr/esm/use-swr.js","./use-swr-infinite":"../node_modules/preact-swr/esm/use-swr-infinite.js","./config":"../node_modules/preact-swr/esm/config.js"}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
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
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"api/trip.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTripBySlug = exports.getTripBySlugKey = exports.getTripBySlug = void 0;

var _preactSwr = _interopRequireDefault(require("preact-swr"));

var _fetcher = require("./fetcher");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
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

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
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
            op = [0];
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
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var BASE_PATH = "/marketing-pages";

var getTripBySlug = function getTripBySlug(slug) {
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (!slug) {
            return [2
            /*return*/
            , null];
          }

          return [4
          /*yield*/
          , (0, _fetcher.fetcher)("".concat(BASE_PATH, "/slug/").concat(slug))];

        case 1:
          return [2
          /*return*/
          , _a.sent()];
      }
    });
  });
};

exports.getTripBySlug = getTripBySlug;

var useTripBySlug = function useTripBySlug(slug, options) {
  if (options === void 0) {
    options = {};
  }

  return (0, _preactSwr.default)(getTripBySlugKey(slug), function () {
    return getTripBySlug(slug);
  }, options);
};

exports.useTripBySlug = useTripBySlug;

var getTripBySlugKey = function getTripBySlugKey(slug) {
  return 'trips' + slug;
};

exports.getTripBySlugKey = getTripBySlugKey;
},{"preact-swr":"../node_modules/preact-swr/esm/index.js","./fetcher":"api/fetcher.ts"}],"pages/Widgets.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Widgets = void 0;

var _preact = require("preact");

var _hooks = require("preact/hooks");

var _trip = require("src/api/trip");

var _Snippet = require("src/components/Snippet/Snippet");

var _Routes = require("src/config/Routes");

var _Widgets = require("src/config/Widgets");

var _TripWidget = require("src/pages/TripWidget");

var Widgets = function Widgets() {
  var _a = (0, _hooks.useState)((0, _Routes.getTripSlugFromUrl)(_Widgets.EXAMPLE_TRIP)),
      slug = _a[0],
      setSlug = _a[1];

  var _b = (0, _trip.useTripBySlug)(slug, {
    refreshInterval: 0
  }),
      data = _b.data,
      error = _b.error,
      isValidating = _b.isValidating;

  (0, _hooks.useEffect)(function () {
    if (data && window.OGWidgets) {
      window.OGWidgets.init();
    }
  }, [data, window.OGWidgets]);
  return (0, _preact.h)("div", {
    class: "content"
  }, (0, _preact.h)("h3", null, "Enter experience URL:"), (0, _preact.h)("form", null, (0, _preact.h)("label", {
    for: "tripUrl"
  }, "Trip URL:"), (0, _preact.h)("input", {
    id: "tripUrl",
    placeholder: "Enter Trip Url from outguided.com",
    defaultValue: _Widgets.EXAMPLE_TRIP,
    onInput: function onInput(_a) {
      var target = _a.target;
      return setSlug((0, _Routes.getTripSlugFromUrl)(target === null || target === void 0 ? void 0 : target.value));
    }
  })), error && !isValidating && (0, _preact.h)("h4", null, error.message), data && (0, _preact.h)(_preact.Fragment, null, (0, _preact.h)("h3", null, "Place this Link inside you page content where you want to show widget"), (0, _preact.h)(_Snippet.Snippet, {
    code: _TripWidget.TripWidget.Link(data.slug, {
      withEmbedCode: true
    })
  }), (0, _preact.h)("h4", {
    class: "preview__title"
  }, "Widget preview:"), (0, _preact.h)("div", {
    class: "preview",
    dangerouslySetInnerHTML: {
      __html: _TripWidget.TripWidget.Link(data.slug)
    }
  }), (0, _preact.h)("h3", null, "Place this Link inside you page content where you want to show code"), (0, _preact.h)(_Snippet.Snippet, {
    code: _TripWidget.TripWidget.Link(data.slug, {
      withEmbedCode: true,
      data: {
        code: ''
      }
    })
  }), (0, _preact.h)("h4", {
    class: "preview__title"
  }, "Widget preview:"), (0, _preact.h)("div", {
    class: "preview",
    dangerouslySetInnerHTML: {
      __html: _TripWidget.TripWidget.Link(data.slug, {
        data: {
          code: ''
        }
      })
    }
  })));
};

exports.Widgets = Widgets;
},{"preact":"../node_modules/preact/dist/preact.module.js","preact/hooks":"../node_modules/preact/hooks/dist/hooks.module.js","src/api/trip":"api/trip.ts","src/components/Snippet/Snippet":"components/Snippet/Snippet.tsx","src/config/Routes":"config/Routes.ts","src/config/Widgets":"config/Widgets.ts","src/pages/TripWidget":"pages/TripWidget.tsx"}],"index.tsx":[function(require,module,exports) {
"use strict";

var _preact = require("preact");

var _preactRouter = require("preact-router");

var _history = require("history");

var _fetcher = require("./api/fetcher");

var _Routes = require("./config/Routes");

var _TripWidget = require("./pages/TripWidget");

var _preactSwr = require("preact-swr");

require("./styles/styles.scss");

var _Widgets = require("./pages/Widgets");

var App = function App() {
  return (0, _preact.h)(_preactSwr.SWRConfig, {
    value: {
      fetcher: _fetcher.fetcher
    }
  }, (0, _preact.h)(_preact.Fragment, null, (0, _preact.h)(_preactRouter.Router, {
    history: (0, _history.createHashHistory)()
  }, (0, _preact.h)(_preactRouter.Route, {
    component: _TripWidget.TripWidget,
    path: (0, _Routes.getEmbedPath)(_Routes.TRIP_PAGE)
  }), (0, _preact.h)(_preactRouter.Route, {
    component: _TripWidget.TripWidget.Code,
    path: (0, _Routes.getEmbedSnippetPath)(_Routes.TRIP_PAGE)
  }), (0, _preact.h)(_preactRouter.Route, {
    component: _Widgets.Widgets,
    default: true
  }))));
};

var root = document.getElementById('root');
(0, _preact.render)((0, _preact.h)(App, null), root);
},{"preact":"../node_modules/preact/dist/preact.module.js","preact-router":"../node_modules/preact-router/dist/preact-router.module.js","history":"../node_modules/history/index.js","./api/fetcher":"api/fetcher.ts","./config/Routes":"config/Routes.ts","./pages/TripWidget":"pages/TripWidget.tsx","preact-swr":"../node_modules/preact-swr/esm/index.js","./styles/styles.scss":"styles/styles.scss","./pages/Widgets":"pages/Widgets.tsx"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50556" + '/');

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