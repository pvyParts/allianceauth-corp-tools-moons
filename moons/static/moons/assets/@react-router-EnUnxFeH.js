import { g as ze, _ as se, R as w, r as _e } from "./@libs-KHifEHW5.js";
var Je = { exports: {} },
  ut = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  ft = ut,
  lt = ft;
function Xe() {}
function ke() {}
ke.resetWarningCache = Xe;
var ht = function () {
  function e(n, o, i, c, u, f) {
    if (f !== lt) {
      var a = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((a.name = "Invariant Violation"), a);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var r = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: ke,
    resetWarningCache: Xe,
  };
  return (r.PropTypes = r), r;
};
Je.exports = ht();
var pt = Je.exports;
const Se = ze(pt);
var vt = !0,
  fe = "Invariant failed";
function V(e, t) {
  if (!e) {
    if (vt) throw new Error(fe);
    var r = typeof t == "function" ? t() : t,
      n = r ? fe + ": " + r : fe;
    throw new Error(n);
  }
}
function me(e, t) {
  return (
    (me =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    me(e, t)
  );
}
function Q(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    me(e, t);
}
function ne(e) {
  return e.charAt(0) === "/";
}
function le(e, t) {
  for (var r = t, n = r + 1, o = e.length; n < o; r += 1, n += 1) e[r] = e[n];
  e.pop();
}
function dt(e, t) {
  t === void 0 && (t = "");
  var r = (e && e.split("/")) || [],
    n = (t && t.split("/")) || [],
    o = e && ne(e),
    i = t && ne(t),
    c = o || i;
  if (
    (e && ne(e) ? (n = r) : r.length && (n.pop(), (n = n.concat(r))), !n.length)
  )
    return "/";
  var u;
  if (n.length) {
    var f = n[n.length - 1];
    u = f === "." || f === ".." || f === "";
  } else u = !1;
  for (var a = 0, s = n.length; s >= 0; s--) {
    var l = n[s];
    l === "." ? le(n, s) : l === ".." ? (le(n, s), a++) : a && (le(n, s), a--);
  }
  if (!c) for (; a--; a) n.unshift("..");
  c && n[0] !== "" && (!n[0] || !ne(n[0])) && n.unshift("");
  var h = n.join("/");
  return u && h.substr(-1) !== "/" && (h += "/"), h;
}
function $e(e) {
  return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
}
function re(e, t) {
  if (e === t) return !0;
  if (e == null || t == null) return !1;
  if (Array.isArray(e))
    return (
      Array.isArray(t) &&
      e.length === t.length &&
      e.every(function (o, i) {
        return re(o, t[i]);
      })
    );
  if (typeof e == "object" || typeof t == "object") {
    var r = $e(e),
      n = $e(t);
    return r !== e || n !== t
      ? re(r, n)
      : Object.keys(Object.assign({}, e, t)).every(function (o) {
          return re(e[o], t[o]);
        });
  }
  return !1;
}
function te(e) {
  return e.charAt(0) === "/" ? e : "/" + e;
}
function Ue(e) {
  return e.charAt(0) === "/" ? e.substr(1) : e;
}
function mt(e, t) {
  return (
    e.toLowerCase().indexOf(t.toLowerCase()) === 0 &&
    "/?#".indexOf(e.charAt(t.length)) !== -1
  );
}
function Ye(e, t) {
  return mt(e, t) ? e.substr(t.length) : e;
}
function Qe(e) {
  return e.charAt(e.length - 1) === "/" ? e.slice(0, -1) : e;
}
function gt(e) {
  var t = e || "/",
    r = "",
    n = "",
    o = t.indexOf("#");
  o !== -1 && ((n = t.substr(o)), (t = t.substr(0, o)));
  var i = t.indexOf("?");
  return (
    i !== -1 && ((r = t.substr(i)), (t = t.substr(0, i))),
    { pathname: t, search: r === "?" ? "" : r, hash: n === "#" ? "" : n }
  );
}
function j(e) {
  var t = e.pathname,
    r = e.search,
    n = e.hash,
    o = t || "/";
  return (
    r && r !== "?" && (o += r.charAt(0) === "?" ? r : "?" + r),
    n && n !== "#" && (o += n.charAt(0) === "#" ? n : "#" + n),
    o
  );
}
function M(e, t, r, n) {
  var o;
  typeof e == "string"
    ? ((o = gt(e)), (o.state = t))
    : ((o = se({}, e)),
      o.pathname === void 0 && (o.pathname = ""),
      o.search
        ? o.search.charAt(0) !== "?" && (o.search = "?" + o.search)
        : (o.search = ""),
      o.hash
        ? o.hash.charAt(0) !== "#" && (o.hash = "#" + o.hash)
        : (o.hash = ""),
      t !== void 0 && o.state === void 0 && (o.state = t));
  try {
    o.pathname = decodeURI(o.pathname);
  } catch (i) {
    throw i instanceof URIError
      ? new URIError(
          'Pathname "' +
            o.pathname +
            '" could not be decoded. This is likely caused by an invalid percent-encoding.'
        )
      : i;
  }
  return (
    r && (o.key = r),
    n
      ? o.pathname
        ? o.pathname.charAt(0) !== "/" &&
          (o.pathname = dt(o.pathname, n.pathname))
        : (o.pathname = n.pathname)
      : o.pathname || (o.pathname = "/"),
    o
  );
}
function yt(e, t) {
  return (
    e.pathname === t.pathname &&
    e.search === t.search &&
    e.hash === t.hash &&
    e.key === t.key &&
    re(e.state, t.state)
  );
}
function Pe() {
  var e = null;
  function t(c) {
    return (
      (e = c),
      function () {
        e === c && (e = null);
      }
    );
  }
  function r(c, u, f, a) {
    if (e != null) {
      var s = typeof e == "function" ? e(c, u) : e;
      typeof s == "string"
        ? typeof f == "function"
          ? f(s, a)
          : a(!0)
        : a(s !== !1);
    } else a(!0);
  }
  var n = [];
  function o(c) {
    var u = !0;
    function f() {
      u && c.apply(void 0, arguments);
    }
    return (
      n.push(f),
      function () {
        (u = !1),
          (n = n.filter(function (a) {
            return a !== f;
          }));
      }
    );
  }
  function i() {
    for (var c = arguments.length, u = new Array(c), f = 0; f < c; f++)
      u[f] = arguments[f];
    n.forEach(function (a) {
      return a.apply(void 0, u);
    });
  }
  return {
    setPrompt: t,
    confirmTransitionTo: r,
    appendListener: o,
    notifyListeners: i,
  };
}
var Ze = !!(
  typeof window < "u" &&
  window.document &&
  window.document.createElement
);
function et(e, t) {
  t(window.confirm(e));
}
function xt() {
  var e = window.navigator.userAgent;
  return (e.indexOf("Android 2.") !== -1 || e.indexOf("Android 4.0") !== -1) &&
    e.indexOf("Mobile Safari") !== -1 &&
    e.indexOf("Chrome") === -1 &&
    e.indexOf("Windows Phone") === -1
    ? !1
    : window.history && "pushState" in window.history;
}
function wt() {
  return window.navigator.userAgent.indexOf("Trident") === -1;
}
function Pt() {
  return window.navigator.userAgent.indexOf("Firefox") === -1;
}
function Et(e) {
  return e.state === void 0 && navigator.userAgent.indexOf("CriOS") === -1;
}
var Me = "popstate",
  He = "hashchange";
function Ie() {
  try {
    return window.history.state || {};
  } catch {
    return {};
  }
}
function Ot(e) {
  e === void 0 && (e = {}), Ze || V(!1);
  var t = window.history,
    r = xt(),
    n = !wt(),
    o = e,
    i = o.forceRefresh,
    c = i === void 0 ? !1 : i,
    u = o.getUserConfirmation,
    f = u === void 0 ? et : u,
    a = o.keyLength,
    s = a === void 0 ? 6 : a,
    l = e.basename ? Qe(te(e.basename)) : "";
  function h(v) {
    var p = v || {},
      x = p.key,
      m = p.state,
      E = window.location,
      S = E.pathname,
      D = E.search,
      F = E.hash,
      B = S + D + F;
    return l && (B = Ye(B, l)), M(B, m, x);
  }
  function d() {
    return Math.random().toString(36).substr(2, s);
  }
  var g = Pe();
  function O(v) {
    se(W, v), (W.length = t.length), g.notifyListeners(W.location, W.action);
  }
  function R(v) {
    Et(v) || H(h(v.state));
  }
  function C() {
    H(h(Ie()));
  }
  var _ = !1;
  function H(v) {
    if (_) (_ = !1), O();
    else {
      var p = "POP";
      g.confirmTransitionTo(v, p, f, function (x) {
        x ? O({ action: p, location: v }) : I(v);
      });
    }
  }
  function I(v) {
    var p = W.location,
      x = T.indexOf(p.key);
    x === -1 && (x = 0);
    var m = T.indexOf(v.key);
    m === -1 && (m = 0);
    var E = x - m;
    E && ((_ = !0), b(E));
  }
  var $ = h(Ie()),
    T = [$.key];
  function y(v) {
    return l + j(v);
  }
  function P(v, p) {
    var x = "PUSH",
      m = M(v, p, d(), W.location);
    g.confirmTransitionTo(m, x, f, function (E) {
      if (E) {
        var S = y(m),
          D = m.key,
          F = m.state;
        if (r)
          if ((t.pushState({ key: D, state: F }, null, S), c))
            window.location.href = S;
          else {
            var B = T.indexOf(W.location.key),
              J = T.slice(0, B + 1);
            J.push(m.key), (T = J), O({ action: x, location: m });
          }
        else window.location.href = S;
      }
    });
  }
  function A(v, p) {
    var x = "REPLACE",
      m = M(v, p, d(), W.location);
    g.confirmTransitionTo(m, x, f, function (E) {
      if (E) {
        var S = y(m),
          D = m.key,
          F = m.state;
        if (r)
          if ((t.replaceState({ key: D, state: F }, null, S), c))
            window.location.replace(S);
          else {
            var B = T.indexOf(W.location.key);
            B !== -1 && (T[B] = m.key), O({ action: x, location: m });
          }
        else window.location.replace(S);
      }
    });
  }
  function b(v) {
    t.go(v);
  }
  function L() {
    b(-1);
  }
  function K() {
    b(1);
  }
  var z = 0;
  function N(v) {
    (z += v),
      z === 1 && v === 1
        ? (window.addEventListener(Me, R), n && window.addEventListener(He, C))
        : z === 0 &&
          (window.removeEventListener(Me, R),
          n && window.removeEventListener(He, C));
  }
  var U = !1;
  function X(v) {
    v === void 0 && (v = !1);
    var p = g.setPrompt(v);
    return (
      U || (N(1), (U = !0)),
      function () {
        return U && ((U = !1), N(-1)), p();
      }
    );
  }
  function ue(v) {
    var p = g.appendListener(v);
    return (
      N(1),
      function () {
        N(-1), p();
      }
    );
  }
  var W = {
    length: t.length,
    action: "POP",
    location: $,
    createHref: y,
    push: P,
    replace: A,
    go: b,
    goBack: L,
    goForward: K,
    block: X,
    listen: ue,
  };
  return W;
}
var je = "hashchange",
  Tt = {
    hashbang: {
      encodePath: function (t) {
        return t.charAt(0) === "!" ? t : "!/" + Ue(t);
      },
      decodePath: function (t) {
        return t.charAt(0) === "!" ? t.substr(1) : t;
      },
    },
    noslash: { encodePath: Ue, decodePath: te },
    slash: { encodePath: te, decodePath: te },
  };
function tt(e) {
  var t = e.indexOf("#");
  return t === -1 ? e : e.slice(0, t);
}
function ee() {
  var e = window.location.href,
    t = e.indexOf("#");
  return t === -1 ? "" : e.substring(t + 1);
}
function Rt(e) {
  window.location.hash = e;
}
function he(e) {
  window.location.replace(tt(window.location.href) + "#" + e);
}
function Ct(e) {
  e === void 0 && (e = {}), Ze || V(!1);
  var t = window.history;
  Pt();
  var r = e,
    n = r.getUserConfirmation,
    o = n === void 0 ? et : n,
    i = r.hashType,
    c = i === void 0 ? "slash" : i,
    u = e.basename ? Qe(te(e.basename)) : "",
    f = Tt[c],
    a = f.encodePath,
    s = f.decodePath;
  function l() {
    var p = s(ee());
    return u && (p = Ye(p, u)), M(p);
  }
  var h = Pe();
  function d(p) {
    se(v, p), (v.length = t.length), h.notifyListeners(v.location, v.action);
  }
  var g = !1,
    O = null;
  function R(p, x) {
    return (
      p.pathname === x.pathname && p.search === x.search && p.hash === x.hash
    );
  }
  function C() {
    var p = ee(),
      x = a(p);
    if (p !== x) he(x);
    else {
      var m = l(),
        E = v.location;
      if ((!g && R(E, m)) || O === j(m)) return;
      (O = null), _(m);
    }
  }
  function _(p) {
    if (g) (g = !1), d();
    else {
      var x = "POP";
      h.confirmTransitionTo(p, x, o, function (m) {
        m ? d({ action: x, location: p }) : H(p);
      });
    }
  }
  function H(p) {
    var x = v.location,
      m = y.lastIndexOf(j(x));
    m === -1 && (m = 0);
    var E = y.lastIndexOf(j(p));
    E === -1 && (E = 0);
    var S = m - E;
    S && ((g = !0), L(S));
  }
  var I = ee(),
    $ = a(I);
  I !== $ && he($);
  var T = l(),
    y = [j(T)];
  function P(p) {
    var x = document.querySelector("base"),
      m = "";
    return (
      x && x.getAttribute("href") && (m = tt(window.location.href)),
      m + "#" + a(u + j(p))
    );
  }
  function A(p, x) {
    var m = "PUSH",
      E = M(p, void 0, void 0, v.location);
    h.confirmTransitionTo(E, m, o, function (S) {
      if (S) {
        var D = j(E),
          F = a(u + D),
          B = ee() !== F;
        if (B) {
          (O = D), Rt(F);
          var J = y.lastIndexOf(j(v.location)),
            Ae = y.slice(0, J + 1);
          Ae.push(D), (y = Ae), d({ action: m, location: E });
        } else d();
      }
    });
  }
  function b(p, x) {
    var m = "REPLACE",
      E = M(p, void 0, void 0, v.location);
    h.confirmTransitionTo(E, m, o, function (S) {
      if (S) {
        var D = j(E),
          F = a(u + D),
          B = ee() !== F;
        B && ((O = D), he(F));
        var J = y.indexOf(j(v.location));
        J !== -1 && (y[J] = D), d({ action: m, location: E });
      }
    });
  }
  function L(p) {
    t.go(p);
  }
  function K() {
    L(-1);
  }
  function z() {
    L(1);
  }
  var N = 0;
  function U(p) {
    (N += p),
      N === 1 && p === 1
        ? window.addEventListener(je, C)
        : N === 0 && window.removeEventListener(je, C);
  }
  var X = !1;
  function ue(p) {
    p === void 0 && (p = !1);
    var x = h.setPrompt(p);
    return (
      X || (U(1), (X = !0)),
      function () {
        return X && ((X = !1), U(-1)), x();
      }
    );
  }
  function W(p) {
    var x = h.appendListener(p);
    return (
      U(1),
      function () {
        U(-1), x();
      }
    );
  }
  var v = {
    length: t.length,
    action: "POP",
    location: T,
    createHref: P,
    push: A,
    replace: b,
    go: L,
    goBack: K,
    goForward: z,
    block: ue,
    listen: W,
  };
  return v;
}
function Ne(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function bt(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.getUserConfirmation,
    n = t.initialEntries,
    o = n === void 0 ? ["/"] : n,
    i = t.initialIndex,
    c = i === void 0 ? 0 : i,
    u = t.keyLength,
    f = u === void 0 ? 6 : u,
    a = Pe();
  function s(P) {
    se(y, P),
      (y.length = y.entries.length),
      a.notifyListeners(y.location, y.action);
  }
  function l() {
    return Math.random().toString(36).substr(2, f);
  }
  var h = Ne(c, 0, o.length - 1),
    d = o.map(function (P) {
      return typeof P == "string"
        ? M(P, void 0, l())
        : M(P, void 0, P.key || l());
    }),
    g = j;
  function O(P, A) {
    var b = "PUSH",
      L = M(P, A, l(), y.location);
    a.confirmTransitionTo(L, b, r, function (K) {
      if (K) {
        var z = y.index,
          N = z + 1,
          U = y.entries.slice(0);
        U.length > N ? U.splice(N, U.length - N, L) : U.push(L),
          s({ action: b, location: L, index: N, entries: U });
      }
    });
  }
  function R(P, A) {
    var b = "REPLACE",
      L = M(P, A, l(), y.location);
    a.confirmTransitionTo(L, b, r, function (K) {
      K && ((y.entries[y.index] = L), s({ action: b, location: L }));
    });
  }
  function C(P) {
    var A = Ne(y.index + P, 0, y.entries.length - 1),
      b = "POP",
      L = y.entries[A];
    a.confirmTransitionTo(L, b, r, function (K) {
      K ? s({ action: b, location: L, index: A }) : s();
    });
  }
  function _() {
    C(-1);
  }
  function H() {
    C(1);
  }
  function I(P) {
    var A = y.index + P;
    return A >= 0 && A < y.entries.length;
  }
  function $(P) {
    return P === void 0 && (P = !1), a.setPrompt(P);
  }
  function T(P) {
    return a.appendListener(P);
  }
  var y = {
    length: d.length,
    action: "POP",
    location: d[h],
    index: h,
    entries: d,
    createHref: g,
    push: O,
    replace: R,
    go: C,
    goBack: _,
    goForward: H,
    canGo: I,
    block: $,
    listen: T,
  };
  return y;
}
function ge(e, t) {
  return (
    (ge =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    ge(e, t)
  );
}
function De(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    ge(e, t);
}
var pe = 1073741823,
  We =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {};
function Lt() {
  var e = "__global_unique_id__";
  return (We[e] = (We[e] || 0) + 1);
}
function At(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function _t(e) {
  var t = [];
  return {
    on: function (n) {
      t.push(n);
    },
    off: function (n) {
      t = t.filter(function (o) {
        return o !== n;
      });
    },
    get: function () {
      return e;
    },
    set: function (n, o) {
      (e = n),
        t.forEach(function (i) {
          return i(e, o);
        });
    },
  };
}
function St(e) {
  return Array.isArray(e) ? e[0] : e;
}
function $t(e, t) {
  var r,
    n,
    o = "__create-react-context-" + Lt() + "__",
    i = (function (u) {
      De(f, u);
      function f() {
        var s;
        return (
          (s = u.apply(this, arguments) || this),
          (s.emitter = _t(s.props.value)),
          s
        );
      }
      var a = f.prototype;
      return (
        (a.getChildContext = function () {
          var l;
          return (l = {}), (l[o] = this.emitter), l;
        }),
        (a.componentWillReceiveProps = function (l) {
          if (this.props.value !== l.value) {
            var h = this.props.value,
              d = l.value,
              g;
            At(h, d)
              ? (g = 0)
              : ((g = typeof t == "function" ? t(h, d) : pe),
                (g |= 0),
                g !== 0 && this.emitter.set(l.value, g));
          }
        }),
        (a.render = function () {
          return this.props.children;
        }),
        f
      );
    })(_e.Component);
  i.childContextTypes = ((r = {}), (r[o] = Se.object.isRequired), r);
  var c = (function (u) {
    De(f, u);
    function f() {
      var s;
      return (
        (s = u.apply(this, arguments) || this),
        (s.state = { value: s.getValue() }),
        (s.onUpdate = function (l, h) {
          var d = s.observedBits | 0;
          d & h && s.setState({ value: s.getValue() });
        }),
        s
      );
    }
    var a = f.prototype;
    return (
      (a.componentWillReceiveProps = function (l) {
        var h = l.observedBits;
        this.observedBits = h ?? pe;
      }),
      (a.componentDidMount = function () {
        this.context[o] && this.context[o].on(this.onUpdate);
        var l = this.props.observedBits;
        this.observedBits = l ?? pe;
      }),
      (a.componentWillUnmount = function () {
        this.context[o] && this.context[o].off(this.onUpdate);
      }),
      (a.getValue = function () {
        return this.context[o] ? this.context[o].get() : e;
      }),
      (a.render = function () {
        return St(this.props.children)(this.state.value);
      }),
      f
    );
  })(_e.Component);
  return (
    (c.contextTypes = ((n = {}), (n[o] = Se.object), n)),
    { Provider: i, Consumer: c }
  );
}
var Ut = w.createContext || $t;
function q() {
  return (
    (q =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    q.apply(this, arguments)
  );
}
var Z = { exports: {} },
  Mt =
    Array.isArray ||
    function (e) {
      return Object.prototype.toString.call(e) == "[object Array]";
    },
  ie = Mt;
Z.exports = ot;
Z.exports.parse = Ee;
Z.exports.compile = It;
Z.exports.tokensToFunction = nt;
Z.exports.tokensToRegExp = rt;
var Ht = new RegExp(
  [
    "(\\\\.)",
    "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
  ].join("|"),
  "g"
);
function Ee(e, t) {
  for (
    var r = [], n = 0, o = 0, i = "", c = (t && t.delimiter) || "/", u;
    (u = Ht.exec(e)) != null;

  ) {
    var f = u[0],
      a = u[1],
      s = u.index;
    if (((i += e.slice(o, s)), (o = s + f.length), a)) {
      i += a[1];
      continue;
    }
    var l = e[o],
      h = u[2],
      d = u[3],
      g = u[4],
      O = u[5],
      R = u[6],
      C = u[7];
    i && (r.push(i), (i = ""));
    var _ = h != null && l != null && l !== h,
      H = R === "+" || R === "*",
      I = R === "?" || R === "*",
      $ = u[2] || c,
      T = g || O;
    r.push({
      name: d || n++,
      prefix: h || "",
      delimiter: $,
      optional: I,
      repeat: H,
      partial: _,
      asterisk: !!C,
      pattern: T ? Dt(T) : C ? ".*" : "[^" + oe($) + "]+?",
    });
  }
  return o < e.length && (i += e.substr(o)), i && r.push(i), r;
}
function It(e, t) {
  return nt(Ee(e, t), t);
}
function jt(e) {
  return encodeURI(e).replace(/[\/?#]/g, function (t) {
    return "%" + t.charCodeAt(0).toString(16).toUpperCase();
  });
}
function Nt(e) {
  return encodeURI(e).replace(/[?#]/g, function (t) {
    return "%" + t.charCodeAt(0).toString(16).toUpperCase();
  });
}
function nt(e, t) {
  for (var r = new Array(e.length), n = 0; n < e.length; n++)
    typeof e[n] == "object" &&
      (r[n] = new RegExp("^(?:" + e[n].pattern + ")$", Te(t)));
  return function (o, i) {
    for (
      var c = "",
        u = o || {},
        f = i || {},
        a = f.pretty ? jt : encodeURIComponent,
        s = 0;
      s < e.length;
      s++
    ) {
      var l = e[s];
      if (typeof l == "string") {
        c += l;
        continue;
      }
      var h = u[l.name],
        d;
      if (h == null)
        if (l.optional) {
          l.partial && (c += l.prefix);
          continue;
        } else throw new TypeError('Expected "' + l.name + '" to be defined');
      if (ie(h)) {
        if (!l.repeat)
          throw new TypeError(
            'Expected "' +
              l.name +
              '" to not repeat, but received `' +
              JSON.stringify(h) +
              "`"
          );
        if (h.length === 0) {
          if (l.optional) continue;
          throw new TypeError('Expected "' + l.name + '" to not be empty');
        }
        for (var g = 0; g < h.length; g++) {
          if (((d = a(h[g])), !r[s].test(d)))
            throw new TypeError(
              'Expected all "' +
                l.name +
                '" to match "' +
                l.pattern +
                '", but received `' +
                JSON.stringify(d) +
                "`"
            );
          c += (g === 0 ? l.prefix : l.delimiter) + d;
        }
        continue;
      }
      if (((d = l.asterisk ? Nt(h) : a(h)), !r[s].test(d)))
        throw new TypeError(
          'Expected "' +
            l.name +
            '" to match "' +
            l.pattern +
            '", but received "' +
            d +
            '"'
        );
      c += l.prefix + d;
    }
    return c;
  };
}
function oe(e) {
  return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
}
function Dt(e) {
  return e.replace(/([=!:$\/()])/g, "\\$1");
}
function Oe(e, t) {
  return (e.keys = t), e;
}
function Te(e) {
  return e && e.sensitive ? "" : "i";
}
function Wt(e, t) {
  var r = e.source.match(/\((?!\?)/g);
  if (r)
    for (var n = 0; n < r.length; n++)
      t.push({
        name: n,
        prefix: null,
        delimiter: null,
        optional: !1,
        repeat: !1,
        partial: !1,
        asterisk: !1,
        pattern: null,
      });
  return Oe(e, t);
}
function Bt(e, t, r) {
  for (var n = [], o = 0; o < e.length; o++) n.push(ot(e[o], t, r).source);
  var i = new RegExp("(?:" + n.join("|") + ")", Te(r));
  return Oe(i, t);
}
function Ft(e, t, r) {
  return rt(Ee(e, r), t, r);
}
function rt(e, t, r) {
  ie(t) || ((r = t || r), (t = [])), (r = r || {});
  for (var n = r.strict, o = r.end !== !1, i = "", c = 0; c < e.length; c++) {
    var u = e[c];
    if (typeof u == "string") i += oe(u);
    else {
      var f = oe(u.prefix),
        a = "(?:" + u.pattern + ")";
      t.push(u),
        u.repeat && (a += "(?:" + f + a + ")*"),
        u.optional
          ? u.partial
            ? (a = f + "(" + a + ")?")
            : (a = "(?:" + f + "(" + a + "))?")
          : (a = f + "(" + a + ")"),
        (i += a);
    }
  }
  var s = oe(r.delimiter || "/"),
    l = i.slice(-s.length) === s;
  return (
    n || (i = (l ? i.slice(0, -s.length) : i) + "(?:" + s + "(?=$))?"),
    o ? (i += "$") : (i += n && l ? "" : "(?=" + s + "|$)"),
    Oe(new RegExp("^" + i, Te(r)), t)
  );
}
function ot(e, t, r) {
  return (
    ie(t) || ((r = t || r), (t = [])),
    (r = r || {}),
    e instanceof RegExp ? Wt(e, t) : ie(e) ? Bt(e, t, r) : Ft(e, t, r)
  );
}
var Kt = Z.exports;
const it = ze(Kt);
function qt(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var at = function (t) {
    var r = Ut();
    return (r.displayName = t), r;
  },
  Gt = at("Router-History"),
  G = at("Router"),
  ce = (function (e) {
    Q(t, e),
      (t.computeRootMatch = function (o) {
        return { path: "/", url: "/", params: {}, isExact: o === "/" };
      });
    function t(n) {
      var o;
      return (
        (o = e.call(this, n) || this),
        (o.state = { location: n.history.location }),
        (o._isMounted = !1),
        (o._pendingLocation = null),
        n.staticContext ||
          (o.unlisten = n.history.listen(function (i) {
            o._isMounted
              ? o.setState({ location: i })
              : (o._pendingLocation = i);
          })),
        o
      );
    }
    var r = t.prototype;
    return (
      (r.componentDidMount = function () {
        (this._isMounted = !0),
          this._pendingLocation &&
            this.setState({ location: this._pendingLocation });
      }),
      (r.componentWillUnmount = function () {
        this.unlisten &&
          (this.unlisten(),
          (this._isMounted = !1),
          (this._pendingLocation = null));
      }),
      (r.render = function () {
        return w.createElement(
          G.Provider,
          {
            value: {
              history: this.props.history,
              location: this.state.location,
              match: t.computeRootMatch(this.state.location.pathname),
              staticContext: this.props.staticContext,
            },
          },
          w.createElement(Gt.Provider, {
            children: this.props.children || null,
            value: this.props.history,
          })
        );
      }),
      t
    );
  })(w.Component);
w.Component;
var Vt = (function (e) {
    Q(t, e);
    function t() {
      return e.apply(this, arguments) || this;
    }
    var r = t.prototype;
    return (
      (r.componentDidMount = function () {
        this.props.onMount && this.props.onMount.call(this, this);
      }),
      (r.componentDidUpdate = function (o) {
        this.props.onUpdate && this.props.onUpdate.call(this, this, o);
      }),
      (r.componentWillUnmount = function () {
        this.props.onUnmount && this.props.onUnmount.call(this, this);
      }),
      (r.render = function () {
        return null;
      }),
      t
    );
  })(w.Component),
  ve = {},
  zt = 1e4,
  Be = 0;
function Jt(e) {
  if (ve[e]) return ve[e];
  var t = it.compile(e);
  return Be < zt && ((ve[e] = t), Be++), t;
}
function Fe(e, t) {
  return (
    e === void 0 && (e = "/"),
    t === void 0 && (t = {}),
    e === "/" ? e : Jt(e)(t, { pretty: !0 })
  );
}
function sn(e) {
  var t = e.computedMatch,
    r = e.to,
    n = e.push,
    o = n === void 0 ? !1 : n;
  return w.createElement(G.Consumer, null, function (i) {
    i || V(!1);
    var c = i.history,
      u = i.staticContext,
      f = o ? c.push : c.replace,
      a = M(
        t
          ? typeof r == "string"
            ? Fe(r, t.params)
            : q({}, r, { pathname: Fe(r.pathname, t.params) })
          : r
      );
    return u
      ? (f(a), null)
      : w.createElement(Vt, {
          onMount: function () {
            f(a);
          },
          onUpdate: function (l, h) {
            var d = M(h.to);
            yt(d, q({}, a, { key: d.key })) || f(a);
          },
          to: r,
        });
  });
}
var Ke = {},
  Xt = 1e4,
  qe = 0;
function kt(e, t) {
  var r = "" + t.end + t.strict + t.sensitive,
    n = Ke[r] || (Ke[r] = {});
  if (n[e]) return n[e];
  var o = [],
    i = it(e, o, t),
    c = { regexp: i, keys: o };
  return qe < Xt && ((n[e] = c), qe++), c;
}
function Re(e, t) {
  t === void 0 && (t = {}),
    (typeof t == "string" || Array.isArray(t)) && (t = { path: t });
  var r = t,
    n = r.path,
    o = r.exact,
    i = o === void 0 ? !1 : o,
    c = r.strict,
    u = c === void 0 ? !1 : c,
    f = r.sensitive,
    a = f === void 0 ? !1 : f,
    s = [].concat(n);
  return s.reduce(function (l, h) {
    if (!h && h !== "") return null;
    if (l) return l;
    var d = kt(h, { end: i, strict: u, sensitive: a }),
      g = d.regexp,
      O = d.keys,
      R = g.exec(e);
    if (!R) return null;
    var C = R[0],
      _ = R.slice(1),
      H = e === C;
    return i && !H
      ? null
      : {
          path: h,
          url: h === "/" && C === "" ? "/" : C,
          isExact: H,
          params: O.reduce(function (I, $, T) {
            return (I[$.name] = _[T]), I;
          }, {}),
        };
  }, null);
}
function Yt(e) {
  return w.Children.count(e) === 0;
}
var cn = (function (e) {
  Q(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var r = t.prototype;
  return (
    (r.render = function () {
      var o = this;
      return w.createElement(G.Consumer, null, function (i) {
        i || V(!1);
        var c = o.props.location || i.location,
          u = o.props.computedMatch
            ? o.props.computedMatch
            : o.props.path
            ? Re(c.pathname, o.props)
            : i.match,
          f = q({}, i, { location: c, match: u }),
          a = o.props,
          s = a.children,
          l = a.component,
          h = a.render;
        return (
          Array.isArray(s) && Yt(s) && (s = null),
          w.createElement(
            G.Provider,
            { value: f },
            f.match
              ? s
                ? typeof s == "function"
                  ? s(f)
                  : s
                : l
                ? w.createElement(l, f)
                : h
                ? h(f)
                : null
              : typeof s == "function"
              ? s(f)
              : null
          )
        );
      });
    }),
    t
  );
})(w.Component);
function Ce(e) {
  return e.charAt(0) === "/" ? e : "/" + e;
}
function Qt(e, t) {
  return e ? q({}, t, { pathname: Ce(e) + t.pathname }) : t;
}
function Zt(e, t) {
  if (!e) return t;
  var r = Ce(e);
  return t.pathname.indexOf(r) !== 0
    ? t
    : q({}, t, { pathname: t.pathname.substr(r.length) });
}
function Ge(e) {
  return typeof e == "string" ? e : j(e);
}
function de(e) {
  return function () {
    V(!1);
  };
}
function Ve() {}
w.Component;
var un = (function (e) {
    Q(t, e);
    function t() {
      return e.apply(this, arguments) || this;
    }
    var r = t.prototype;
    return (
      (r.render = function () {
        var o = this;
        return w.createElement(G.Consumer, null, function (i) {
          i || V(!1);
          var c = o.props.location || i.location,
            u,
            f;
          return (
            w.Children.forEach(o.props.children, function (a) {
              if (f == null && w.isValidElement(a)) {
                u = a;
                var s = a.props.path || a.props.from;
                f = s ? Re(c.pathname, q({}, a.props, { path: s })) : i.match;
              }
            }),
            f ? w.cloneElement(u, { location: c, computedMatch: f }) : null
          );
        });
      }),
      t
    );
  })(w.Component),
  en = w.useContext;
function fn() {
  return en(G).location;
}
function ye(e, t) {
  return (
    (ye =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    ye(e, t)
  );
}
function st(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    ye(e, t);
}
function k() {
  return (
    (k =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    k.apply(this, arguments)
  );
}
function be(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
w.Component;
var ln = (function (e) {
    st(t, e);
    function t() {
      for (var n, o = arguments.length, i = new Array(o), c = 0; c < o; c++)
        i[c] = arguments[c];
      return (
        (n = e.call.apply(e, [this].concat(i)) || this),
        (n.history = Ct(n.props)),
        n
      );
    }
    var r = t.prototype;
    return (
      (r.render = function () {
        return w.createElement(ce, {
          history: this.history,
          children: this.props.children,
        });
      }),
      t
    );
  })(w.Component),
  xe = function (t, r) {
    return typeof t == "function" ? t(r) : t;
  },
  we = function (t, r) {
    return typeof t == "string" ? M(t, null, null, r) : t;
  },
  Le = function (t) {
    return t;
  },
  Y = w.forwardRef;
typeof Y > "u" && (Y = Le);
function tn(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var nn = Y(function (e, t) {
    var r = e.innerRef,
      n = e.navigate,
      o = e.onClick,
      i = be(e, ["innerRef", "navigate", "onClick"]),
      c = i.target,
      u = k({}, i, {
        onClick: function (a) {
          try {
            o && o(a);
          } catch (s) {
            throw (a.preventDefault(), s);
          }
          !a.defaultPrevented &&
            a.button === 0 &&
            (!c || c === "_self") &&
            !tn(a) &&
            (a.preventDefault(), n());
        },
      });
    return Le !== Y ? (u.ref = t || r) : (u.ref = r), w.createElement("a", u);
  }),
  rn = Y(function (e, t) {
    var r = e.component,
      n = r === void 0 ? nn : r,
      o = e.replace,
      i = e.to,
      c = e.innerRef,
      u = be(e, ["component", "replace", "to", "innerRef"]);
    return w.createElement(G.Consumer, null, function (f) {
      f || V(!1);
      var a = f.history,
        s = we(xe(i, f.location), f.location),
        l = s ? a.createHref(s) : "",
        h = k({}, u, {
          href: l,
          navigate: function () {
            var g = xe(i, f.location),
              O = j(f.location) === j(we(g)),
              R = o || O ? a.replace : a.push;
            R(g);
          },
        });
      return (
        Le !== Y ? (h.ref = t || c) : (h.innerRef = c), w.createElement(n, h)
      );
    });
  }),
  ct = function (t) {
    return t;
  },
  ae = w.forwardRef;
typeof ae > "u" && (ae = ct);
function on() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return t
    .filter(function (n) {
      return n;
    })
    .join(" ");
}
ae(function (e, t) {
  var r = e["aria-current"],
    n = r === void 0 ? "page" : r,
    o = e.activeClassName,
    i = o === void 0 ? "active" : o,
    c = e.activeStyle,
    u = e.className,
    f = e.exact,
    a = e.isActive,
    s = e.location,
    l = e.sensitive,
    h = e.strict,
    d = e.style,
    g = e.to,
    O = e.innerRef,
    R = be(e, [
      "aria-current",
      "activeClassName",
      "activeStyle",
      "className",
      "exact",
      "isActive",
      "location",
      "sensitive",
      "strict",
      "style",
      "to",
      "innerRef",
    ]);
  return w.createElement(G.Consumer, null, function (C) {
    C || V(!1);
    var _ = s || C.location,
      H = we(xe(g, _), _),
      I = H.pathname,
      $ = I && I.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
      T = $
        ? Re(_.pathname, { path: $, exact: f, sensitive: l, strict: h })
        : null,
      y = !!(a ? a(T, _) : T),
      P = typeof u == "function" ? u(y) : u,
      A = typeof d == "function" ? d(y) : d;
    y && ((P = on(P, i)), (A = k({}, A, c)));
    var b = k(
      { "aria-current": (y && n) || null, className: P, style: A, to: H },
      R
    );
    return (
      ct !== ae ? (b.ref = t || O) : (b.innerRef = O), w.createElement(rn, b)
    );
  });
});
export { ln as H, Se as P, cn as R, un as S, sn as a, pt as p, fn as u };
//# sourceMappingURL=@react-router-EnUnxFeH.js.map
