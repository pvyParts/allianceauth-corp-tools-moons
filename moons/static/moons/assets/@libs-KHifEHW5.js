var gw =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Gc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function ww(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var i = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        i.get
          ? i
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var $l = Object.getOwnPropertySymbols,
  oh = Object.prototype.hasOwnProperty,
  uh = Object.prototype.propertyIsEnumerable;
function ah(e) {
  if (e == null)
    throw new TypeError(
      "Object.assign cannot be called with null or undefined"
    );
  return Object(e);
}
function lh() {
  try {
    if (!Object.assign) return !1;
    var e = new String("abc");
    if (((e[5] = "de"), Object.getOwnPropertyNames(e)[0] === "5")) return !1;
    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
    var r = Object.getOwnPropertyNames(t).map(function (o) {
      return t[o];
    });
    if (r.join("") !== "0123456789") return !1;
    var i = {};
    return (
      "abcdefghijklmnopqrst".split("").forEach(function (o) {
        i[o] = o;
      }),
      Object.keys(Object.assign({}, i)).join("") === "abcdefghijklmnopqrst"
    );
  } catch {
    return !1;
  }
}
var Xc = lh()
    ? Object.assign
    : function (e, t) {
        for (var n, r = ah(e), i, o = 1; o < arguments.length; o++) {
          n = Object(arguments[o]);
          for (var u in n) oh.call(n, u) && (r[u] = n[u]);
          if ($l) {
            i = $l(n);
            for (var a = 0; a < i.length; a++)
              uh.call(n, i[a]) && (r[i[a]] = n[i[a]]);
          }
        }
        return r;
      },
  Zc = { exports: {} },
  $ = {};
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ca = Xc,
  Tn = 60103,
  Jc = 60106;
$.Fragment = 60107;
$.StrictMode = 60108;
$.Profiler = 60114;
var ef = 60109,
  tf = 60110,
  nf = 60112;
$.Suspense = 60113;
var rf = 60115,
  of = 60116;
if (typeof Symbol == "function" && Symbol.for) {
  var Be = Symbol.for;
  (Tn = Be("react.element")),
    (Jc = Be("react.portal")),
    ($.Fragment = Be("react.fragment")),
    ($.StrictMode = Be("react.strict_mode")),
    ($.Profiler = Be("react.profiler")),
    (ef = Be("react.provider")),
    (tf = Be("react.context")),
    (nf = Be("react.forward_ref")),
    ($.Suspense = Be("react.suspense")),
    (rf = Be("react.memo")),
    (of = Be("react.lazy"));
}
var Ul = typeof Symbol == "function" && Symbol.iterator;
function sh(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ul && e[Ul]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
function Dr(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var uf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  af = {};
function Rn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = af),
    (this.updater = n || uf);
}
Rn.prototype.isReactComponent = {};
Rn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(Dr(85));
  this.updater.enqueueSetState(this, e, t, "setState");
};
Rn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function lf() {}
lf.prototype = Rn.prototype;
function ba(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = af),
    (this.updater = n || uf);
}
var Ea = (ba.prototype = new lf());
Ea.constructor = ba;
Ca(Ea, Rn.prototype);
Ea.isPureReactComponent = !0;
var Pa = { current: null },
  sf = Object.prototype.hasOwnProperty,
  cf = { key: !0, ref: !0, __self: !0, __source: !0 };
function ff(e, t, n) {
  var r,
    i = {},
    o = null,
    u = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (u = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      sf.call(t, r) && !cf.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), s = 0; s < a; s++) l[s] = arguments[s + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Tn,
    type: e,
    key: o,
    ref: u,
    props: i,
    _owner: Pa.current,
  };
}
function ch(e, t) {
  return {
    $$typeof: Tn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function xa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Tn;
}
function fh(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var jl = /\/+/g;
function Uo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? fh("" + e.key)
    : t.toString(36);
}
function li(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var u = !1;
  if (e === null) u = !0;
  else
    switch (o) {
      case "string":
      case "number":
        u = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Tn:
          case Jc:
            u = !0;
        }
    }
  if (u)
    return (
      (u = e),
      (i = i(u)),
      (e = r === "" ? "." + Uo(u, 0) : r),
      Array.isArray(i)
        ? ((n = ""),
          e != null && (n = e.replace(jl, "$&/") + "/"),
          li(i, t, n, "", function (s) {
            return s;
          }))
        : i != null &&
          (xa(i) &&
            (i = ch(
              i,
              n +
                (!i.key || (u && u.key === i.key)
                  ? ""
                  : ("" + i.key).replace(jl, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((u = 0), (r = r === "" ? "." : r + ":"), Array.isArray(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + Uo(o, a);
      u += li(o, t, n, l, i);
    }
  else if (((l = sh(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + Uo(o, a++)), (u += li(o, t, n, l, i));
  else if (o === "object")
    throw (
      ((t = "" + e),
      Error(
        Dr(
          31,
          t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t
        )
      ))
    );
  return u;
}
function qr(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    li(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function dh(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      (e._status = 0),
      (e._result = t),
      t.then(
        function (n) {
          e._status === 0 &&
            ((n = n.default), (e._status = 1), (e._result = n));
        },
        function (n) {
          e._status === 0 && ((e._status = 2), (e._result = n));
        }
      );
  }
  if (e._status === 1) return e._result;
  throw e._result;
}
var df = { current: null };
function pt() {
  var e = df.current;
  if (e === null) throw Error(Dr(321));
  return e;
}
var ph = {
  ReactCurrentDispatcher: df,
  ReactCurrentBatchConfig: { transition: 0 },
  ReactCurrentOwner: Pa,
  IsSomeRendererActing: { current: !1 },
  assign: Ca,
};
$.Children = {
  map: qr,
  forEach: function (e, t, n) {
    qr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      qr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      qr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!xa(e)) throw Error(Dr(143));
    return e;
  },
};
$.Component = Rn;
$.PureComponent = ba;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ph;
$.cloneElement = function (e, t, n) {
  if (e == null) throw Error(Dr(267, e));
  var r = Ca({}, e.props),
    i = e.key,
    o = e.ref,
    u = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (u = Pa.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      sf.call(t, l) &&
        !cf.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var s = 0; s < l; s++) a[s] = arguments[s + 2];
    r.children = a;
  }
  return { $$typeof: Tn, type: e.type, key: i, ref: o, props: r, _owner: u };
};
$.createContext = function (e, t) {
  return (
    t === void 0 && (t = null),
    (e = {
      $$typeof: tf,
      _calculateChangedBits: t,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
    }),
    (e.Provider = { $$typeof: ef, _context: e }),
    (e.Consumer = e)
  );
};
$.createElement = ff;
$.createFactory = function (e) {
  var t = ff.bind(null, e);
  return (t.type = e), t;
};
$.createRef = function () {
  return { current: null };
};
$.forwardRef = function (e) {
  return { $$typeof: nf, render: e };
};
$.isValidElement = xa;
$.lazy = function (e) {
  return { $$typeof: of, _payload: { _status: -1, _result: e }, _init: dh };
};
$.memo = function (e, t) {
  return { $$typeof: rf, type: e, compare: t === void 0 ? null : t };
};
$.useCallback = function (e, t) {
  return pt().useCallback(e, t);
};
$.useContext = function (e, t) {
  return pt().useContext(e, t);
};
$.useDebugValue = function () {};
$.useEffect = function (e, t) {
  return pt().useEffect(e, t);
};
$.useImperativeHandle = function (e, t, n) {
  return pt().useImperativeHandle(e, t, n);
};
$.useLayoutEffect = function (e, t) {
  return pt().useLayoutEffect(e, t);
};
$.useMemo = function (e, t) {
  return pt().useMemo(e, t);
};
$.useReducer = function (e, t, n) {
  return pt().useReducer(e, t, n);
};
$.useRef = function (e) {
  return pt().useRef(e);
};
$.useState = function (e) {
  return pt().useState(e);
};
$.version = "17.0.2";
Zc.exports = $;
var k = Zc.exports;
const Te = Gc(k);
var pf = { exports: {} },
  ze = {},
  hf = { exports: {} },
  mf = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  var t, n, r, i;
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var u = Date,
      a = u.now();
    e.unstable_now = function () {
      return u.now() - a;
    };
  }
  if (typeof window > "u" || typeof MessageChannel != "function") {
    var l = null,
      s = null,
      f = function () {
        if (l !== null)
          try {
            var x = e.unstable_now();
            l(!0, x), (l = null);
          } catch (I) {
            throw (setTimeout(f, 0), I);
          }
      };
    (t = function (x) {
      l !== null ? setTimeout(t, 0, x) : ((l = x), setTimeout(f, 0));
    }),
      (n = function (x, I) {
        s = setTimeout(x, I);
      }),
      (r = function () {
        clearTimeout(s);
      }),
      (e.unstable_shouldYield = function () {
        return !1;
      }),
      (i = e.unstable_forceFrameRate = function () {});
  } else {
    var m = window.setTimeout,
      h = window.clearTimeout;
    if (typeof console < "u") {
      var y = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame != "function" &&
        console.error(
          "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
        ),
        typeof y != "function" &&
          console.error(
            "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
          );
    }
    var w = !1,
      S = null,
      d = -1,
      c = 5,
      p = 0;
    (e.unstable_shouldYield = function () {
      return e.unstable_now() >= p;
    }),
      (i = function () {}),
      (e.unstable_forceFrameRate = function (x) {
        0 > x || 125 < x
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
            )
          : (c = 0 < x ? Math.floor(1e3 / x) : 5);
      });
    var v = new MessageChannel(),
      O = v.port2;
    (v.port1.onmessage = function () {
      if (S !== null) {
        var x = e.unstable_now();
        p = x + c;
        try {
          S(!0, x) ? O.postMessage(null) : ((w = !1), (S = null));
        } catch (I) {
          throw (O.postMessage(null), I);
        }
      } else w = !1;
    }),
      (t = function (x) {
        (S = x), w || ((w = !0), O.postMessage(null));
      }),
      (n = function (x, I) {
        d = m(function () {
          x(e.unstable_now());
        }, I);
      }),
      (r = function () {
        h(d), (d = -1);
      });
  }
  function P(x, I) {
    var F = x.length;
    x.push(I);
    e: for (;;) {
      var z = (F - 1) >>> 1,
        K = x[z];
      if (K !== void 0 && 0 < R(K, I)) (x[z] = I), (x[F] = K), (F = z);
      else break e;
    }
  }
  function C(x) {
    return (x = x[0]), x === void 0 ? null : x;
  }
  function b(x) {
    var I = x[0];
    if (I !== void 0) {
      var F = x.pop();
      if (F !== I) {
        x[0] = F;
        e: for (var z = 0, K = x.length; z < K; ) {
          var se = 2 * (z + 1) - 1,
            ce = x[se],
            He = se + 1,
            Qe = x[He];
          if (ce !== void 0 && 0 > R(ce, F))
            Qe !== void 0 && 0 > R(Qe, ce)
              ? ((x[z] = Qe), (x[He] = F), (z = He))
              : ((x[z] = ce), (x[se] = F), (z = se));
          else if (Qe !== void 0 && 0 > R(Qe, F))
            (x[z] = Qe), (x[He] = F), (z = He);
          else break e;
        }
      }
      return I;
    }
    return null;
  }
  function R(x, I) {
    var F = x.sortIndex - I.sortIndex;
    return F !== 0 ? F : x.id - I.id;
  }
  var T = [],
    A = [],
    q = 1,
    Q = null,
    N = 3,
    U = !1,
    V = !1,
    W = !1;
  function ee(x) {
    for (var I = C(A); I !== null; ) {
      if (I.callback === null) b(A);
      else if (I.startTime <= x)
        b(A), (I.sortIndex = I.expirationTime), P(T, I);
      else break;
      I = C(A);
    }
  }
  function te(x) {
    if (((W = !1), ee(x), !V))
      if (C(T) !== null) (V = !0), t(ue);
      else {
        var I = C(A);
        I !== null && n(te, I.startTime - x);
      }
  }
  function ue(x, I) {
    (V = !1), W && ((W = !1), r()), (U = !0);
    var F = N;
    try {
      for (
        ee(I), Q = C(T);
        Q !== null &&
        (!(Q.expirationTime > I) || (x && !e.unstable_shouldYield()));

      ) {
        var z = Q.callback;
        if (typeof z == "function") {
          (Q.callback = null), (N = Q.priorityLevel);
          var K = z(Q.expirationTime <= I);
          (I = e.unstable_now()),
            typeof K == "function" ? (Q.callback = K) : Q === C(T) && b(T),
            ee(I);
        } else b(T);
        Q = C(T);
      }
      if (Q !== null) var se = !0;
      else {
        var ce = C(A);
        ce !== null && n(te, ce.startTime - I), (se = !1);
      }
      return se;
    } finally {
      (Q = null), (N = F), (U = !1);
    }
  }
  var be = i;
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (x) {
      x.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      V || U || ((V = !0), t(ue));
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return N;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return C(T);
    }),
    (e.unstable_next = function (x) {
      switch (N) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = N;
      }
      var F = N;
      N = I;
      try {
        return x();
      } finally {
        N = F;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = be),
    (e.unstable_runWithPriority = function (x, I) {
      switch (x) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          x = 3;
      }
      var F = N;
      N = x;
      try {
        return I();
      } finally {
        N = F;
      }
    }),
    (e.unstable_scheduleCallback = function (x, I, F) {
      var z = e.unstable_now();
      switch (
        (typeof F == "object" && F !== null
          ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? z + F : z))
          : (F = z),
        x)
      ) {
        case 1:
          var K = -1;
          break;
        case 2:
          K = 250;
          break;
        case 5:
          K = 1073741823;
          break;
        case 4:
          K = 1e4;
          break;
        default:
          K = 5e3;
      }
      return (
        (K = F + K),
        (x = {
          id: q++,
          callback: I,
          priorityLevel: x,
          startTime: F,
          expirationTime: K,
          sortIndex: -1,
        }),
        F > z
          ? ((x.sortIndex = F),
            P(A, x),
            C(T) === null && x === C(A) && (W ? r() : (W = !0), n(te, F - z)))
          : ((x.sortIndex = K), P(T, x), V || U || ((V = !0), t(ue))),
        x
      );
    }),
    (e.unstable_wrapCallback = function (x) {
      var I = N;
      return function () {
        var F = N;
        N = I;
        try {
          return x.apply(this, arguments);
        } finally {
          N = F;
        }
      };
    });
})(mf);
hf.exports = mf;
var hh = hf.exports;
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fo = k,
  J = Xc,
  de = hh;
function E(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
if (!fo) throw Error(E(227));
var vf = new Set(),
  yr = {};
function Yt(e, t) {
  En(e, t), En(e + "Capture", t);
}
function En(e, t) {
  for (yr[e] = t, e = 0; e < t.length; e++) vf.add(t[e]);
}
var dt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  mh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  zl = Object.prototype.hasOwnProperty,
  Hl = {},
  Ql = {};
function vh(e) {
  return zl.call(Ql, e)
    ? !0
    : zl.call(Hl, e)
    ? !1
    : mh.test(e)
    ? (Ql[e] = !0)
    : ((Hl[e] = !0), !1);
}
function yh(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function gh(e, t, n, r) {
  if (t === null || typeof t > "u" || yh(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Pe(e, t, n, r, i, o, u) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = u);
}
var ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ve[e] = new Pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ve[t] = new Pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ve[e] = new Pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ve[e] = new Pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ve[e] = new Pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ve[e] = new Pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ve[e] = new Pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ve[e] = new Pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ve[e] = new Pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ka = /[\-:]([a-z])/g;
function Ma(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ka, Ma);
    ve[t] = new Pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ka, Ma);
    ve[t] = new Pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ka, Ma);
  ve[t] = new Pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ve[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ve.xlinkHref = new Pe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ve[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ta(e, t, n, r) {
  var i = ve.hasOwnProperty(t) ? ve[t] : null,
    o =
      i !== null
        ? i.type === 0
        : r
        ? !1
        : !(
            !(2 < t.length) ||
            (t[0] !== "o" && t[0] !== "O") ||
            (t[1] !== "n" && t[1] !== "N")
          );
  o ||
    (gh(t, n, i, r) && (n = null),
    r || i === null
      ? vh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Gt = fo.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Zn = 60103,
  At = 60106,
  vt = 60107,
  Ra = 60108,
  rr = 60114,
  _a = 60109,
  Ia = 60110,
  po = 60112,
  ir = 60113,
  Ti = 60120,
  ho = 60115,
  Fa = 60116,
  La = 60121,
  Na = 60128,
  yf = 60129,
  Da = 60130,
  gu = 60131;
if (typeof Symbol == "function" && Symbol.for) {
  var fe = Symbol.for;
  (Zn = fe("react.element")),
    (At = fe("react.portal")),
    (vt = fe("react.fragment")),
    (Ra = fe("react.strict_mode")),
    (rr = fe("react.profiler")),
    (_a = fe("react.provider")),
    (Ia = fe("react.context")),
    (po = fe("react.forward_ref")),
    (ir = fe("react.suspense")),
    (Ti = fe("react.suspense_list")),
    (ho = fe("react.memo")),
    (Fa = fe("react.lazy")),
    (La = fe("react.block")),
    fe("react.scope"),
    (Na = fe("react.opaque.id")),
    (yf = fe("react.debug_trace_mode")),
    (Da = fe("react.offscreen")),
    (gu = fe("react.legacy_hidden"));
}
var Bl = typeof Symbol == "function" && Symbol.iterator;
function Vn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Bl && e[Bl]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var jo;
function Jn(e) {
  if (jo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      jo = (t && t[1]) || "";
    }
  return (
    `
` +
    jo +
    e
  );
}
var zo = !1;
function Wr(e, t) {
  if (!e || zo) return "";
  zo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (l) {
          var r = l;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (l) {
          r = l;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l) {
        r = l;
      }
      e();
    }
  } catch (l) {
    if (l && r && typeof l.stack == "string") {
      for (
        var i = l.stack.split(`
`),
          o = r.stack.split(`
`),
          u = i.length - 1,
          a = o.length - 1;
        1 <= u && 0 <= a && i[u] !== o[a];

      )
        a--;
      for (; 1 <= u && 0 <= a; u--, a--)
        if (i[u] !== o[a]) {
          if (u !== 1 || a !== 1)
            do
              if ((u--, a--, 0 > a || i[u] !== o[a]))
                return (
                  `
` + i[u].replace(" at new ", " at ")
                );
            while (1 <= u && 0 <= a);
          break;
        }
    }
  } finally {
    (zo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Jn(e) : "";
}
function wh(e) {
  switch (e.tag) {
    case 5:
      return Jn(e.type);
    case 16:
      return Jn("Lazy");
    case 13:
      return Jn("Suspense");
    case 19:
      return Jn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Wr(e.type, !1)), e;
    case 11:
      return (e = Wr(e.type.render, !1)), e;
    case 22:
      return (e = Wr(e.type._render, !1)), e;
    case 1:
      return (e = Wr(e.type, !0)), e;
    default:
      return "";
  }
}
function fn(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case vt:
      return "Fragment";
    case At:
      return "Portal";
    case rr:
      return "Profiler";
    case Ra:
      return "StrictMode";
    case ir:
      return "Suspense";
    case Ti:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ia:
        return (e.displayName || "Context") + ".Consumer";
      case _a:
        return (e._context.displayName || "Context") + ".Provider";
      case po:
        var t = e.render;
        return (
          (t = t.displayName || t.name || ""),
          e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
        );
      case ho:
        return fn(e.type);
      case La:
        return fn(e._render);
      case Fa:
        (t = e._payload), (e = e._init);
        try {
          return fn(e(t));
        } catch {}
    }
  return null;
}
function Mt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return e;
    default:
      return "";
  }
}
function gf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Sh(e) {
  var t = gf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (u) {
          (r = "" + u), o.call(this, u);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (u) {
          r = "" + u;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Kr(e) {
  e._valueTracker || (e._valueTracker = Sh(e));
}
function wf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = gf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ri(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function wu(e, t) {
  var n = t.checked;
  return J({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ql(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Mt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Sf(e, t) {
  (t = t.checked), t != null && Ta(e, "checked", t, !1);
}
function Su(e, t) {
  Sf(e, t);
  var n = Mt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ou(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ou(e, t.type, Mt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Wl(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ou(e, t, n) {
  (t !== "number" || Ri(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
function Oh(e) {
  var t = "";
  return (
    fo.Children.forEach(e, function (n) {
      n != null && (t += n);
    }),
    t
  );
}
function Cu(e, t) {
  return (
    (e = J({ children: void 0 }, t)),
    (t = Oh(t.children)) && (e.children = t),
    e
  );
}
function dn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Mt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function bu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return J({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Kl(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(E(92));
      if (Array.isArray(n)) {
        if (!(1 >= n.length)) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Mt(n) };
}
function Of(e, t) {
  var n = Mt(t.value),
    r = Mt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Yl(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
var Eu = {
  html: "http://www.w3.org/1999/xhtml",
  mathml: "http://www.w3.org/1998/Math/MathML",
  svg: "http://www.w3.org/2000/svg",
};
function Cf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Pu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Cf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Yr,
  bf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== Eu.svg || "innerHTML" in e) e.innerHTML = t;
    else {
      for (
        Yr = Yr || document.createElement("div"),
          Yr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Yr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function gr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var or = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Ch = ["Webkit", "ms", "Moz", "O"];
Object.keys(or).forEach(function (e) {
  Ch.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (or[t] = or[e]);
  });
});
function Ef(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (or.hasOwnProperty(e) && or[e])
    ? ("" + t).trim()
    : t + "px";
}
function Pf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Ef(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var bh = J(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function xu(e, t) {
  if (t) {
    if (bh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (
        !(
          typeof t.dangerouslySetInnerHTML == "object" &&
          "__html" in t.dangerouslySetInnerHTML
        )
      )
        throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function ku(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
function Aa(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Mu = null,
  pn = null,
  hn = null;
function Gl(e) {
  if ((e = Vr(e))) {
    if (typeof Mu != "function") throw Error(E(280));
    var t = e.stateNode;
    t && ((t = So(t)), Mu(e.stateNode, e.type, t));
  }
}
function xf(e) {
  pn ? (hn ? hn.push(e) : (hn = [e])) : (pn = e);
}
function kf() {
  if (pn) {
    var e = pn,
      t = hn;
    if (((hn = pn = null), Gl(e), t)) for (e = 0; e < t.length; e++) Gl(t[e]);
  }
}
function Va(e, t) {
  return e(t);
}
function Mf(e, t, n, r, i) {
  return e(t, n, r, i);
}
function $a() {}
var Tf = Va,
  Vt = !1,
  Ho = !1;
function Ua() {
  (pn !== null || hn !== null) && ($a(), kf());
}
function Eh(e, t, n) {
  if (Ho) return e(t, n);
  Ho = !0;
  try {
    return Tf(e, t, n);
  } finally {
    (Ho = !1), Ua();
  }
}
function wr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = So(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(E(231, t, typeof n));
  return n;
}
var Tu = !1;
if (dt)
  try {
    var $n = {};
    Object.defineProperty($n, "passive", {
      get: function () {
        Tu = !0;
      },
    }),
      window.addEventListener("test", $n, $n),
      window.removeEventListener("test", $n, $n);
  } catch {
    Tu = !1;
  }
function Ph(e, t, n, r, i, o, u, a, l) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (f) {
    this.onError(f);
  }
}
var ur = !1,
  _i = null,
  Ii = !1,
  Ru = null,
  xh = {
    onError: function (e) {
      (ur = !0), (_i = e);
    },
  };
function kh(e, t, n, r, i, o, u, a, l) {
  (ur = !1), (_i = null), Ph.apply(xh, arguments);
}
function Mh(e, t, n, r, i, o, u, a, l) {
  if ((kh.apply(this, arguments), ur)) {
    if (ur) {
      var s = _i;
      (ur = !1), (_i = null);
    } else throw Error(E(198));
    Ii || ((Ii = !0), (Ru = s));
  }
}
function Xt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 1026 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Rf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Xl(e) {
  if (Xt(e) !== e) throw Error(E(188));
}
function Th(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Xt(e)), t === null)) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Xl(i), e;
        if (o === r) return Xl(i), t;
        o = o.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var u = !1, a = i.child; a; ) {
        if (a === n) {
          (u = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (u = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!u) {
        for (a = o.child; a; ) {
          if (a === n) {
            (u = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (u = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!u) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function _f(e) {
  if (((e = Th(e)), !e)) return null;
  for (var t = e; ; ) {
    if (t.tag === 5 || t.tag === 6) return t;
    if (t.child) (t.child.return = t), (t = t.child);
    else {
      if (t === e) break;
      for (; !t.sibling; ) {
        if (!t.return || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return null;
}
function Zl(e, t) {
  for (var n = e.alternate; t !== null; ) {
    if (t === e || t === n) return !0;
    t = t.return;
  }
  return !1;
}
var If,
  ja,
  Ff,
  Lf,
  _u = !1,
  Xe = [],
  St = null,
  Ot = null,
  Ct = null,
  Sr = new Map(),
  Or = new Map(),
  Un = [],
  Jl =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Iu(e, t, n, r, i) {
  return {
    blockedOn: e,
    domEventName: t,
    eventSystemFlags: n | 16,
    nativeEvent: i,
    targetContainers: [r],
  };
}
function es(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      St = null;
      break;
    case "dragenter":
    case "dragleave":
      Ot = null;
      break;
    case "mouseover":
    case "mouseout":
      Ct = null;
      break;
    case "pointerover":
    case "pointerout":
      Sr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Or.delete(t.pointerId);
  }
}
function jn(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = Iu(t, n, r, i, o)),
      t !== null && ((t = Vr(t)), t !== null && ja(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Rh(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (St = jn(St, e, t, n, r, i)), !0;
    case "dragenter":
      return (Ot = jn(Ot, e, t, n, r, i)), !0;
    case "mouseover":
      return (Ct = jn(Ct, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Sr.set(o, jn(Sr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Or.set(o, jn(Or.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function _h(e) {
  var t = $t(e.target);
  if (t !== null) {
    var n = Xt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Rf(n)), t !== null)) {
          (e.blockedOn = t),
            Lf(e.lanePriority, function () {
              de.unstable_runWithPriority(e.priority, function () {
                Ff(n);
              });
            });
          return;
        }
      } else if (t === 3 && n.stateNode.hydrate) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function si(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ba(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n !== null)
      return (t = Vr(n)), t !== null && ja(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ts(e, t, n) {
  si(e) && n.delete(t);
}
function Ih() {
  for (_u = !1; 0 < Xe.length; ) {
    var e = Xe[0];
    if (e.blockedOn !== null) {
      (e = Vr(e.blockedOn)), e !== null && If(e);
      break;
    }
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ba(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n !== null) {
        e.blockedOn = n;
        break;
      }
      t.shift();
    }
    e.blockedOn === null && Xe.shift();
  }
  St !== null && si(St) && (St = null),
    Ot !== null && si(Ot) && (Ot = null),
    Ct !== null && si(Ct) && (Ct = null),
    Sr.forEach(ts),
    Or.forEach(ts);
}
function zn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    _u ||
      ((_u = !0),
      de.unstable_scheduleCallback(de.unstable_NormalPriority, Ih)));
}
function Nf(e) {
  function t(i) {
    return zn(i, e);
  }
  if (0 < Xe.length) {
    zn(Xe[0], e);
    for (var n = 1; n < Xe.length; n++) {
      var r = Xe[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    St !== null && zn(St, e),
      Ot !== null && zn(Ot, e),
      Ct !== null && zn(Ct, e),
      Sr.forEach(t),
      Or.forEach(t),
      n = 0;
    n < Un.length;
    n++
  )
    (r = Un[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Un.length && ((n = Un[0]), n.blockedOn === null); )
    _h(n), n.blockedOn === null && Un.shift();
}
function Gr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var rn = {
    animationend: Gr("Animation", "AnimationEnd"),
    animationiteration: Gr("Animation", "AnimationIteration"),
    animationstart: Gr("Animation", "AnimationStart"),
    transitionend: Gr("Transition", "TransitionEnd"),
  },
  Qo = {},
  Df = {};
dt &&
  ((Df = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete rn.animationend.animation,
    delete rn.animationiteration.animation,
    delete rn.animationstart.animation),
  "TransitionEvent" in window || delete rn.transitionend.transition);
function mo(e) {
  if (Qo[e]) return Qo[e];
  if (!rn[e]) return e;
  var t = rn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Df) return (Qo[e] = t[n]);
  return e;
}
var Af = mo("animationend"),
  Vf = mo("animationiteration"),
  $f = mo("animationstart"),
  Uf = mo("transitionend"),
  jf = new Map(),
  za = new Map(),
  Fh = [
    "abort",
    "abort",
    Af,
    "animationEnd",
    Vf,
    "animationIteration",
    $f,
    "animationStart",
    "canplay",
    "canPlay",
    "canplaythrough",
    "canPlayThrough",
    "durationchange",
    "durationChange",
    "emptied",
    "emptied",
    "encrypted",
    "encrypted",
    "ended",
    "ended",
    "error",
    "error",
    "gotpointercapture",
    "gotPointerCapture",
    "load",
    "load",
    "loadeddata",
    "loadedData",
    "loadedmetadata",
    "loadedMetadata",
    "loadstart",
    "loadStart",
    "lostpointercapture",
    "lostPointerCapture",
    "playing",
    "playing",
    "progress",
    "progress",
    "seeking",
    "seeking",
    "stalled",
    "stalled",
    "suspend",
    "suspend",
    "timeupdate",
    "timeUpdate",
    Uf,
    "transitionEnd",
    "waiting",
    "waiting",
  ];
function Ha(e, t) {
  for (var n = 0; n < e.length; n += 2) {
    var r = e[n],
      i = e[n + 1];
    (i = "on" + (i[0].toUpperCase() + i.slice(1))),
      za.set(r, t),
      jf.set(r, i),
      Yt(i, [r]);
  }
}
var Lh = de.unstable_now;
Lh();
var Y = 8;
function tn(e) {
  if (1 & e) return (Y = 15), 1;
  if (2 & e) return (Y = 14), 2;
  if (4 & e) return (Y = 13), 4;
  var t = 24 & e;
  return t !== 0
    ? ((Y = 12), t)
    : e & 32
    ? ((Y = 11), 32)
    : ((t = 192 & e),
      t !== 0
        ? ((Y = 10), t)
        : e & 256
        ? ((Y = 9), 256)
        : ((t = 3584 & e),
          t !== 0
            ? ((Y = 8), t)
            : e & 4096
            ? ((Y = 7), 4096)
            : ((t = 4186112 & e),
              t !== 0
                ? ((Y = 6), t)
                : ((t = 62914560 & e),
                  t !== 0
                    ? ((Y = 5), t)
                    : e & 67108864
                    ? ((Y = 4), 67108864)
                    : e & 134217728
                    ? ((Y = 3), 134217728)
                    : ((t = 805306368 & e),
                      t !== 0
                        ? ((Y = 2), t)
                        : 1073741824 & e
                        ? ((Y = 1), 1073741824)
                        : ((Y = 8), e))))));
}
function Nh(e) {
  switch (e) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function Dh(e) {
  switch (e) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(E(358, e));
  }
}
function Cr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return (Y = 0);
  var r = 0,
    i = 0,
    o = e.expiredLanes,
    u = e.suspendedLanes,
    a = e.pingedLanes;
  if (o !== 0) (r = o), (i = Y = 15);
  else if (((o = n & 134217727), o !== 0)) {
    var l = o & ~u;
    l !== 0
      ? ((r = tn(l)), (i = Y))
      : ((a &= o), a !== 0 && ((r = tn(a)), (i = Y)));
  } else
    (o = n & ~u),
      o !== 0 ? ((r = tn(o)), (i = Y)) : a !== 0 && ((r = tn(a)), (i = Y));
  if (r === 0) return 0;
  if (
    ((r = 31 - Tt(r)),
    (r = n & (((0 > r ? 0 : 1 << r) << 1) - 1)),
    t !== 0 && t !== r && !(t & u))
  ) {
    if ((tn(t), i <= Y)) return t;
    Y = i;
  }
  if (((t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Tt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function zf(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Fi(e, t) {
  switch (e) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return (e = nn(24 & ~t)), e === 0 ? Fi(10, t) : e;
    case 10:
      return (e = nn(192 & ~t)), e === 0 ? Fi(8, t) : e;
    case 8:
      return (
        (e = nn(3584 & ~t)),
        e === 0 && ((e = nn(4186112 & ~t)), e === 0 && (e = 512)),
        e
      );
    case 2:
      return (t = nn(805306368 & ~t)), t === 0 && (t = 268435456), t;
  }
  throw Error(E(358, e));
}
function nn(e) {
  return e & -e;
}
function Bo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function vo(e, t, n) {
  e.pendingLanes |= t;
  var r = t - 1;
  (e.suspendedLanes &= r),
    (e.pingedLanes &= r),
    (e = e.eventTimes),
    (t = 31 - Tt(t)),
    (e[t] = n);
}
var Tt = Math.clz32 ? Math.clz32 : $h,
  Ah = Math.log,
  Vh = Math.LN2;
function $h(e) {
  return e === 0 ? 32 : (31 - ((Ah(e) / Vh) | 0)) | 0;
}
var Uh = de.unstable_UserBlockingPriority,
  jh = de.unstable_runWithPriority,
  ci = !0;
function zh(e, t, n, r) {
  Vt || $a();
  var i = Qa,
    o = Vt;
  Vt = !0;
  try {
    Mf(i, e, t, n, r);
  } finally {
    (Vt = o) || Ua();
  }
}
function Hh(e, t, n, r) {
  jh(Uh, Qa.bind(null, e, t, n, r));
}
function Qa(e, t, n, r) {
  if (ci) {
    var i;
    if ((i = (t & 4) === 0) && 0 < Xe.length && -1 < Jl.indexOf(e))
      (e = Iu(null, e, t, n, r)), Xe.push(e);
    else {
      var o = Ba(e, t, n, r);
      if (o === null) i && es(e, r);
      else {
        if (i) {
          if (-1 < Jl.indexOf(e)) {
            (e = Iu(o, e, t, n, r)), Xe.push(e);
            return;
          }
          if (Rh(o, e, t, n, r)) return;
          es(e, r);
        }
        td(e, t, r, null, n);
      }
    }
  }
}
function Ba(e, t, n, r) {
  var i = Aa(r);
  if (((i = $t(i)), i !== null)) {
    var o = Xt(i);
    if (o === null) i = null;
    else {
      var u = o.tag;
      if (u === 13) {
        if (((i = Rf(o)), i !== null)) return i;
        i = null;
      } else if (u === 3) {
        if (o.stateNode.hydrate)
          return o.tag === 3 ? o.stateNode.containerInfo : null;
        i = null;
      } else o !== i && (i = null);
    }
  }
  return td(e, t, r, i, n), null;
}
var yt = null,
  qa = null,
  fi = null;
function Hf() {
  if (fi) return fi;
  var e,
    t = qa,
    n = t.length,
    r,
    i = "value" in yt ? yt.value : yt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var u = n - e;
  for (r = 1; r <= u && t[n - r] === i[o - r]; r++);
  return (fi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function di(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Xr() {
  return !0;
}
function ns() {
  return !1;
}
function Ne(e) {
  function t(n, r, i, o, u) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = u),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Xr
        : ns),
      (this.isPropagationStopped = ns),
      this
    );
  }
  return (
    J(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Xr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Xr));
      },
      persist: function () {},
      isPersistent: Xr,
    }),
    t
  );
}
var _n = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Wa = Ne(_n),
  Ar = J({}, _n, { view: 0, detail: 0 }),
  Qh = Ne(Ar),
  qo,
  Wo,
  Hn,
  yo = J({}, Ar, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ka,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Hn &&
            (Hn && e.type === "mousemove"
              ? ((qo = e.screenX - Hn.screenX), (Wo = e.screenY - Hn.screenY))
              : (Wo = qo = 0),
            (Hn = e)),
          qo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Wo;
    },
  }),
  rs = Ne(yo),
  Bh = J({}, yo, { dataTransfer: 0 }),
  qh = Ne(Bh),
  Wh = J({}, Ar, { relatedTarget: 0 }),
  Ko = Ne(Wh),
  Kh = J({}, _n, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Yh = Ne(Kh),
  Gh = J({}, _n, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Xh = Ne(Gh),
  Zh = J({}, _n, { data: 0 }),
  is = Ne(Zh),
  Jh = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  em = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  tm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function nm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = tm[e]) ? !!t[e] : !1;
}
function Ka() {
  return nm;
}
var rm = J({}, Ar, {
    key: function (e) {
      if (e.key) {
        var t = Jh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = di(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? em[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ka,
    charCode: function (e) {
      return e.type === "keypress" ? di(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? di(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  im = Ne(rm),
  om = J({}, yo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  os = Ne(om),
  um = J({}, Ar, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ka,
  }),
  am = Ne(um),
  lm = J({}, _n, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sm = Ne(lm),
  cm = J({}, yo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  fm = Ne(cm),
  dm = [9, 13, 27, 32],
  Ya = dt && "CompositionEvent" in window,
  ar = null;
dt && "documentMode" in document && (ar = document.documentMode);
var pm = dt && "TextEvent" in window && !ar,
  Qf = dt && (!Ya || (ar && 8 < ar && 11 >= ar)),
  us = " ",
  as = !1;
function Bf(e, t) {
  switch (e) {
    case "keyup":
      return dm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function qf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var on = !1;
function hm(e, t) {
  switch (e) {
    case "compositionend":
      return qf(t);
    case "keypress":
      return t.which !== 32 ? null : ((as = !0), us);
    case "textInput":
      return (e = t.data), e === us && as ? null : e;
    default:
      return null;
  }
}
function mm(e, t) {
  if (on)
    return e === "compositionend" || (!Ya && Bf(e, t))
      ? ((e = Hf()), (fi = qa = yt = null), (on = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Qf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var vm = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ls(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!vm[e.type] : t === "textarea";
}
function Wf(e, t, n, r) {
  xf(r),
    (t = Li(t, "onChange")),
    0 < t.length &&
      ((n = new Wa("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var lr = null,
  br = null;
function ym(e) {
  Zf(e, 0);
}
function go(e) {
  var t = an(e);
  if (wf(t)) return e;
}
function gm(e, t) {
  if (e === "change") return t;
}
var Kf = !1;
if (dt) {
  var Yo;
  if (dt) {
    var Go = "oninput" in document;
    if (!Go) {
      var ss = document.createElement("div");
      ss.setAttribute("oninput", "return;"),
        (Go = typeof ss.oninput == "function");
    }
    Yo = Go;
  } else Yo = !1;
  Kf = Yo && (!document.documentMode || 9 < document.documentMode);
}
function cs() {
  lr && (lr.detachEvent("onpropertychange", Yf), (br = lr = null));
}
function Yf(e) {
  if (e.propertyName === "value" && go(br)) {
    var t = [];
    if ((Wf(t, br, e, Aa(e)), (e = ym), Vt)) e(t);
    else {
      Vt = !0;
      try {
        Va(e, t);
      } finally {
        (Vt = !1), Ua();
      }
    }
  }
}
function wm(e, t, n) {
  e === "focusin"
    ? (cs(), (lr = t), (br = n), lr.attachEvent("onpropertychange", Yf))
    : e === "focusout" && cs();
}
function Sm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return go(br);
}
function Om(e, t) {
  if (e === "click") return go(t);
}
function Cm(e, t) {
  if (e === "input" || e === "change") return go(t);
}
function bm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ae = typeof Object.is == "function" ? Object.is : bm,
  Em = Object.prototype.hasOwnProperty;
function Er(e, t) {
  if (Ae(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++)
    if (!Em.call(t, n[r]) || !Ae(e[n[r]], t[n[r]])) return !1;
  return !0;
}
function fs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ds(e, t) {
  var n = fs(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = fs(n);
  }
}
function Gf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Gf(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ps() {
  for (var e = window, t = Ri(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ri(e.document);
  }
  return t;
}
function Fu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
var Pm = dt && "documentMode" in document && 11 >= document.documentMode,
  un = null,
  Lu = null,
  sr = null,
  Nu = !1;
function hs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Nu ||
    un == null ||
    un !== Ri(r) ||
    ((r = un),
    "selectionStart" in r && Fu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (sr && Er(sr, r)) ||
      ((sr = r),
      (r = Li(Lu, "onSelect")),
      0 < r.length &&
        ((t = new Wa("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = un))));
}
Ha(
  "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
    " "
  ),
  0
);
Ha(
  "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
    " "
  ),
  1
);
Ha(Fh, 2);
for (
  var ms =
      "change selectionchange textInput compositionstart compositionend compositionupdate".split(
        " "
      ),
    Xo = 0;
  Xo < ms.length;
  Xo++
)
  za.set(ms[Xo], 0);
En("onMouseEnter", ["mouseout", "mouseover"]);
En("onMouseLeave", ["mouseout", "mouseover"]);
En("onPointerEnter", ["pointerout", "pointerover"]);
En("onPointerLeave", ["pointerout", "pointerover"]);
Yt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Yt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Yt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Yt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Yt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Yt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var er =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Xf = new Set("cancel close invalid load scroll toggle".split(" ").concat(er));
function vs(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Mh(r, t, void 0, e), (e.currentTarget = null);
}
function Zf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var u = r.length - 1; 0 <= u; u--) {
          var a = r[u],
            l = a.instance,
            s = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          vs(i, a, s), (o = l);
        }
      else
        for (u = 0; u < r.length; u++) {
          if (
            ((a = r[u]),
            (l = a.instance),
            (s = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          vs(i, a, s), (o = l);
        }
    }
  }
  if (Ii) throw ((e = Ru), (Ii = !1), (Ru = null), e);
}
function G(e, t) {
  var n = rd(t),
    r = e + "__bubble";
  n.has(r) || (ed(t, e, 2, !1), n.add(r));
}
var ys = "_reactListening" + Math.random().toString(36).slice(2);
function Jf(e) {
  e[ys] ||
    ((e[ys] = !0),
    vf.forEach(function (t) {
      Xf.has(t) || gs(t, !1, e, null), gs(t, !0, e, null);
    }));
}
function gs(e, t, n, r) {
  var i = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0,
    o = n;
  if (
    (e === "selectionchange" && n.nodeType !== 9 && (o = n.ownerDocument),
    r !== null && !t && Xf.has(e))
  ) {
    if (e !== "scroll") return;
    (i |= 2), (o = r);
  }
  var u = rd(o),
    a = e + "__" + (t ? "capture" : "bubble");
  u.has(a) || (t && (i |= 4), ed(o, e, i, t), u.add(a));
}
function ed(e, t, n, r) {
  var i = za.get(t);
  switch (i === void 0 ? 2 : i) {
    case 0:
      i = zh;
      break;
    case 1:
      i = Hh;
      break;
    default:
      i = Qa;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Tu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function td(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var u = r.tag;
      if (u === 3 || u === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (u === 4)
          for (u = r.return; u !== null; ) {
            var l = u.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = u.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            u = u.return;
          }
        for (; a !== null; ) {
          if (((u = $t(a)), u === null)) return;
          if (((l = u.tag), l === 5 || l === 6)) {
            r = o = u;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Eh(function () {
    var s = o,
      f = Aa(n),
      m = [];
    e: {
      var h = jf.get(e);
      if (h !== void 0) {
        var y = Wa,
          w = e;
        switch (e) {
          case "keypress":
            if (di(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = im;
            break;
          case "focusin":
            (w = "focus"), (y = Ko);
            break;
          case "focusout":
            (w = "blur"), (y = Ko);
            break;
          case "beforeblur":
          case "afterblur":
            y = Ko;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = rs;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = qh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = am;
            break;
          case Af:
          case Vf:
          case $f:
            y = Yh;
            break;
          case Uf:
            y = sm;
            break;
          case "scroll":
            y = Qh;
            break;
          case "wheel":
            y = fm;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Xh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = os;
        }
        var S = (t & 4) !== 0,
          d = !S && e === "scroll",
          c = S ? (h !== null ? h + "Capture" : null) : h;
        S = [];
        for (var p = s, v; p !== null; ) {
          v = p;
          var O = v.stateNode;
          if (
            (v.tag === 5 &&
              O !== null &&
              ((v = O),
              c !== null && ((O = wr(p, c)), O != null && S.push(Pr(p, O, v)))),
            d)
          )
            break;
          p = p.return;
        }
        0 < S.length &&
          ((h = new y(h, w, null, n, f)), m.push({ event: h, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          h &&
            !(t & 16) &&
            (w = n.relatedTarget || n.fromElement) &&
            ($t(w) || w[In]))
        )
          break e;
        if (
          (y || h) &&
          ((h =
            f.window === f
              ? f
              : (h = f.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          y
            ? ((w = n.relatedTarget || n.toElement),
              (y = s),
              (w = w ? $t(w) : null),
              w !== null &&
                ((d = Xt(w)), w !== d || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((y = null), (w = s)),
          y !== w)
        ) {
          if (
            ((S = rs),
            (O = "onMouseLeave"),
            (c = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = os),
              (O = "onPointerLeave"),
              (c = "onPointerEnter"),
              (p = "pointer")),
            (d = y == null ? h : an(y)),
            (v = w == null ? h : an(w)),
            (h = new S(O, p + "leave", y, n, f)),
            (h.target = d),
            (h.relatedTarget = v),
            (O = null),
            $t(f) === s &&
              ((S = new S(c, p + "enter", w, n, f)),
              (S.target = v),
              (S.relatedTarget = d),
              (O = S)),
            (d = O),
            y && w)
          )
            t: {
              for (S = y, c = w, p = 0, v = S; v; v = Jt(v)) p++;
              for (v = 0, O = c; O; O = Jt(O)) v++;
              for (; 0 < p - v; ) (S = Jt(S)), p--;
              for (; 0 < v - p; ) (c = Jt(c)), v--;
              for (; p--; ) {
                if (S === c || (c !== null && S === c.alternate)) break t;
                (S = Jt(S)), (c = Jt(c));
              }
              S = null;
            }
          else S = null;
          y !== null && ws(m, h, y, S, !1),
            w !== null && d !== null && ws(m, d, w, S, !0);
        }
      }
      e: {
        if (
          ((h = s ? an(s) : window),
          (y = h.nodeName && h.nodeName.toLowerCase()),
          y === "select" || (y === "input" && h.type === "file"))
        )
          var P = gm;
        else if (ls(h))
          if (Kf) P = Cm;
          else {
            P = Sm;
            var C = wm;
          }
        else
          (y = h.nodeName) &&
            y.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (P = Om);
        if (P && (P = P(e, s))) {
          Wf(m, P, n, f);
          break e;
        }
        C && C(e, h, s),
          e === "focusout" &&
            (C = h._wrapperState) &&
            C.controlled &&
            h.type === "number" &&
            Ou(h, "number", h.value);
      }
      switch (((C = s ? an(s) : window), e)) {
        case "focusin":
          (ls(C) || C.contentEditable === "true") &&
            ((un = C), (Lu = s), (sr = null));
          break;
        case "focusout":
          sr = Lu = un = null;
          break;
        case "mousedown":
          Nu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Nu = !1), hs(m, n, f);
          break;
        case "selectionchange":
          if (Pm) break;
        case "keydown":
        case "keyup":
          hs(m, n, f);
      }
      var b;
      if (Ya)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        on
          ? Bf(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (Qf &&
          n.locale !== "ko" &&
          (on || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && on && (b = Hf())
            : ((yt = f),
              (qa = "value" in yt ? yt.value : yt.textContent),
              (on = !0))),
        (C = Li(s, R)),
        0 < C.length &&
          ((R = new is(R, e, null, n, f)),
          m.push({ event: R, listeners: C }),
          b ? (R.data = b) : ((b = qf(n)), b !== null && (R.data = b)))),
        (b = pm ? hm(e, n) : mm(e, n)) &&
          ((s = Li(s, "onBeforeInput")),
          0 < s.length &&
            ((f = new is("onBeforeInput", "beforeinput", null, n, f)),
            m.push({ event: f, listeners: s }),
            (f.data = b)));
    }
    Zf(m, t);
  });
}
function Pr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Li(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = wr(e, n)),
      o != null && r.unshift(Pr(e, o, i)),
      (o = wr(e, t)),
      o != null && r.push(Pr(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Jt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ws(e, t, n, r, i) {
  for (var o = t._reactName, u = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      s = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      s !== null &&
      ((a = s),
      i
        ? ((l = wr(n, o)), l != null && u.unshift(Pr(n, l, a)))
        : i || ((l = wr(n, o)), l != null && u.push(Pr(n, l, a)))),
      (n = n.return);
  }
  u.length !== 0 && e.push({ event: t, listeners: u });
}
function Ni() {}
var Zo = null,
  Jo = null;
function nd(e, t) {
  switch (e) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!t.autoFocus;
  }
  return !1;
}
function Du(e, t) {
  return (
    e === "textarea" ||
    e === "option" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ss = typeof setTimeout == "function" ? setTimeout : void 0,
  xm = typeof clearTimeout == "function" ? clearTimeout : void 0;
function Ga(e) {
  e.nodeType === 1
    ? (e.textContent = "")
    : e.nodeType === 9 && ((e = e.body), e != null && (e.textContent = ""));
}
function mn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
  }
  return e;
}
function Os(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var eu = 0;
function km(e) {
  return { $$typeof: Na, toString: e, valueOf: e };
}
var wo = Math.random().toString(36).slice(2),
  gt = "__reactFiber$" + wo,
  Di = "__reactProps$" + wo,
  In = "__reactContainer$" + wo,
  Cs = "__reactEvents$" + wo;
function $t(e) {
  var t = e[gt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[In] || n[gt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Os(e); e !== null; ) {
          if ((n = e[gt])) return n;
          e = Os(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Vr(e) {
  return (
    (e = e[gt] || e[In]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function an(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function So(e) {
  return e[Di] || null;
}
function rd(e) {
  var t = e[Cs];
  return t === void 0 && (t = e[Cs] = new Set()), t;
}
var Au = [],
  ln = -1;
function Lt(e) {
  return { current: e };
}
function X(e) {
  0 > ln || ((e.current = Au[ln]), (Au[ln] = null), ln--);
}
function ie(e, t) {
  ln++, (Au[ln] = e.current), (e.current = t);
}
var Rt = {},
  Ce = Lt(Rt),
  Re = Lt(!1),
  Bt = Rt;
function Pn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Rt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function _e(e) {
  return (e = e.childContextTypes), e != null;
}
function Ai() {
  X(Re), X(Ce);
}
function bs(e, t, n) {
  if (Ce.current !== Rt) throw Error(E(168));
  ie(Ce, t), ie(Re, n);
}
function id(e, t, n) {
  var r = e.stateNode;
  if (((e = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in e)) throw Error(E(108, fn(t) || "Unknown", i));
  return J({}, n, r);
}
function pi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Rt),
    (Bt = Ce.current),
    ie(Ce, e),
    ie(Re, Re.current),
    !0
  );
}
function Es(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n
    ? ((e = id(e, t, Bt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      X(Re),
      X(Ce),
      ie(Ce, e))
    : X(Re),
    ie(Re, n);
}
var Xa = null,
  Ht = null,
  Mm = de.unstable_runWithPriority,
  Za = de.unstable_scheduleCallback,
  Vu = de.unstable_cancelCallback,
  Tm = de.unstable_shouldYield,
  Ps = de.unstable_requestPaint,
  $u = de.unstable_now,
  Rm = de.unstable_getCurrentPriorityLevel,
  Oo = de.unstable_ImmediatePriority,
  od = de.unstable_UserBlockingPriority,
  ud = de.unstable_NormalPriority,
  ad = de.unstable_LowPriority,
  ld = de.unstable_IdlePriority,
  tu = {},
  _m = Ps !== void 0 ? Ps : function () {},
  ot = null,
  hi = null,
  nu = !1,
  xs = $u(),
  Se =
    1e4 > xs
      ? $u
      : function () {
          return $u() - xs;
        };
function xn() {
  switch (Rm()) {
    case Oo:
      return 99;
    case od:
      return 98;
    case ud:
      return 97;
    case ad:
      return 96;
    case ld:
      return 95;
    default:
      throw Error(E(332));
  }
}
function sd(e) {
  switch (e) {
    case 99:
      return Oo;
    case 98:
      return od;
    case 97:
      return ud;
    case 96:
      return ad;
    case 95:
      return ld;
    default:
      throw Error(E(332));
  }
}
function qt(e, t) {
  return (e = sd(e)), Mm(e, t);
}
function xr(e, t, n) {
  return (e = sd(e)), Za(e, t, n);
}
function rt() {
  if (hi !== null) {
    var e = hi;
    (hi = null), Vu(e);
  }
  cd();
}
function cd() {
  if (!nu && ot !== null) {
    nu = !0;
    var e = 0;
    try {
      var t = ot;
      qt(99, function () {
        for (; e < t.length; e++) {
          var n = t[e];
          do n = n(!0);
          while (n !== null);
        }
      }),
        (ot = null);
    } catch (n) {
      throw (ot !== null && (ot = ot.slice(e + 1)), Za(Oo, rt), n);
    } finally {
      nu = !1;
    }
  }
}
var Im = Gt.ReactCurrentBatchConfig;
function qe(e, t) {
  if (e && e.defaultProps) {
    (t = J({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Vi = Lt(null),
  $i = null,
  sn = null,
  Ui = null;
function Ja() {
  Ui = sn = $i = null;
}
function el(e) {
  var t = Vi.current;
  X(Vi), (e.type._context._currentValue = t);
}
function fd(e, t) {
  for (; e !== null; ) {
    var n = e.alternate;
    if ((e.childLanes & t) === t) {
      if (n === null || (n.childLanes & t) === t) break;
      n.childLanes |= t;
    } else (e.childLanes |= t), n !== null && (n.childLanes |= t);
    e = e.return;
  }
}
function vn(e, t) {
  ($i = e),
    (Ui = sn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (We = !0), (e.firstContext = null));
}
function Ue(e, t) {
  if (Ui !== e && t !== !1 && t !== 0)
    if (
      ((typeof t != "number" || t === 1073741823) &&
        ((Ui = e), (t = 1073741823)),
      (t = { context: e, observedBits: t, next: null }),
      sn === null)
    ) {
      if ($i === null) throw Error(E(308));
      (sn = t),
        ($i.dependencies = { lanes: 0, firstContext: t, responders: null });
    } else sn = sn.next = t;
  return e._currentValue;
}
var ht = !1;
function tl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null },
    effects: null,
  };
}
function dd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function bt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Et(e, t) {
  if (((e = e.updateQueue), e !== null)) {
    e = e.shared;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
}
function ks(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var u = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = u) : (o = o.next = u), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function kr(e, t, n, r) {
  var i = e.updateQueue;
  ht = !1;
  var o = i.firstBaseUpdate,
    u = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      s = l.next;
    (l.next = null), u === null ? (o = s) : (u.next = s), (u = l);
    var f = e.alternate;
    if (f !== null) {
      f = f.updateQueue;
      var m = f.lastBaseUpdate;
      m !== u &&
        (m === null ? (f.firstBaseUpdate = s) : (m.next = s),
        (f.lastBaseUpdate = l));
    }
  }
  if (o !== null) {
    (m = i.baseState), (u = 0), (f = s = l = null);
    do {
      a = o.lane;
      var h = o.eventTime;
      if ((r & a) === a) {
        f !== null &&
          (f = f.next =
            {
              eventTime: h,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var y = e,
            w = o;
          switch (((a = t), (h = n), w.tag)) {
            case 1:
              if (((y = w.payload), typeof y == "function")) {
                m = y.call(h, m, a);
                break e;
              }
              m = y;
              break e;
            case 3:
              y.flags = (y.flags & -4097) | 64;
            case 0:
              if (
                ((y = w.payload),
                (a = typeof y == "function" ? y.call(h, m, a) : y),
                a == null)
              )
                break e;
              m = J({}, m, a);
              break e;
            case 2:
              ht = !0;
          }
        }
        o.callback !== null &&
          ((e.flags |= 32),
          (a = i.effects),
          a === null ? (i.effects = [o]) : a.push(o));
      } else
        (h = {
          eventTime: h,
          lane: a,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          f === null ? ((s = f = h), (l = m)) : (f = f.next = h),
          (u |= a);
      if (((o = o.next), o === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (o = a.next),
          (a.next = null),
          (i.lastBaseUpdate = a),
          (i.shared.pending = null);
      }
    } while (!0);
    f === null && (l = m),
      (i.baseState = l),
      (i.firstBaseUpdate = s),
      (i.lastBaseUpdate = f),
      (Ur |= u),
      (e.lanes = u),
      (e.memoizedState = m);
  }
}
function Ms(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(E(191, i));
        i.call(r);
      }
    }
}
var pd = new fo.Component().refs;
function ji(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : J({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Co = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Xt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Fe(),
      i = Pt(e),
      o = bt(r, i);
    (o.payload = t), n != null && (o.callback = n), Et(e, o), xt(e, i, r);
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Fe(),
      i = Pt(e),
      o = bt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      Et(e, o),
      xt(e, i, r);
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Fe(),
      r = Pt(e),
      i = bt(n, r);
    (i.tag = 2), t != null && (i.callback = t), Et(e, i), xt(e, r, n);
  },
};
function Ts(e, t, n, r, i, o, u) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, u)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Er(n, r) || !Er(i, o)
      : !0
  );
}
function hd(e, t, n) {
  var r = !1,
    i = Rt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ue(o))
      : ((i = _e(t) ? Bt : Ce.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Pn(e, i) : Rt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Co),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Rs(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Co.enqueueReplaceState(t, t.state, null);
}
function Uu(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = pd), tl(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Ue(o))
    : ((o = _e(t) ? Bt : Ce.current), (i.context = Pn(e, o))),
    kr(e, n, i, r),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (ji(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Co.enqueueReplaceState(i, i.state, null),
      kr(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4);
}
var Zr = Array.isArray;
function Qn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = r.refs;
            u === pd && (u = r.refs = {}),
              o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function Jr(e, t) {
  if (e.type !== "textarea")
    throw Error(
      E(
        31,
        Object.prototype.toString.call(t) === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : t
      )
    );
}
function md(e) {
  function t(d, c) {
    if (e) {
      var p = d.lastEffect;
      p !== null
        ? ((p.nextEffect = c), (d.lastEffect = c))
        : (d.firstEffect = d.lastEffect = c),
        (c.nextEffect = null),
        (c.flags = 8);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), (c = c.sibling);
    return null;
  }
  function r(d, c) {
    for (d = new Map(); c !== null; )
      c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling);
    return d;
  }
  function i(d, c) {
    return (d = It(d, c)), (d.index = 0), (d.sibling = null), d;
  }
  function o(d, c, p) {
    return (
      (d.index = p),
      e
        ? ((p = d.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((d.flags = 2), c) : p)
            : ((d.flags = 2), c))
        : c
    );
  }
  function u(d) {
    return e && d.alternate === null && (d.flags = 2), d;
  }
  function a(d, c, p, v) {
    return c === null || c.tag !== 6
      ? ((c = au(p, d.mode, v)), (c.return = d), c)
      : ((c = i(c, p)), (c.return = d), c);
  }
  function l(d, c, p, v) {
    return c !== null && c.elementType === p.type
      ? ((v = i(c, p.props)), (v.ref = Qn(d, c, p)), (v.return = d), v)
      : ((v = gi(p.type, p.key, p.props, null, d.mode, v)),
        (v.ref = Qn(d, c, p)),
        (v.return = d),
        v);
  }
  function s(d, c, p, v) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = lu(p, d.mode, v)), (c.return = d), c)
      : ((c = i(c, p.children || [])), (c.return = d), c);
  }
  function f(d, c, p, v, O) {
    return c === null || c.tag !== 7
      ? ((c = Sn(p, d.mode, v, O)), (c.return = d), c)
      : ((c = i(c, p)), (c.return = d), c);
  }
  function m(d, c, p) {
    if (typeof c == "string" || typeof c == "number")
      return (c = au("" + c, d.mode, p)), (c.return = d), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Zn:
          return (
            (p = gi(c.type, c.key, c.props, null, d.mode, p)),
            (p.ref = Qn(d, null, c)),
            (p.return = d),
            p
          );
        case At:
          return (c = lu(c, d.mode, p)), (c.return = d), c;
      }
      if (Zr(c) || Vn(c))
        return (c = Sn(c, d.mode, p, null)), (c.return = d), c;
      Jr(d, c);
    }
    return null;
  }
  function h(d, c, p, v) {
    var O = c !== null ? c.key : null;
    if (typeof p == "string" || typeof p == "number")
      return O !== null ? null : a(d, c, "" + p, v);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Zn:
          return p.key === O
            ? p.type === vt
              ? f(d, c, p.props.children, v, O)
              : l(d, c, p, v)
            : null;
        case At:
          return p.key === O ? s(d, c, p, v) : null;
      }
      if (Zr(p) || Vn(p)) return O !== null ? null : f(d, c, p, v, null);
      Jr(d, p);
    }
    return null;
  }
  function y(d, c, p, v, O) {
    if (typeof v == "string" || typeof v == "number")
      return (d = d.get(p) || null), a(c, d, "" + v, O);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Zn:
          return (
            (d = d.get(v.key === null ? p : v.key) || null),
            v.type === vt ? f(c, d, v.props.children, O, v.key) : l(c, d, v, O)
          );
        case At:
          return (d = d.get(v.key === null ? p : v.key) || null), s(c, d, v, O);
      }
      if (Zr(v) || Vn(v)) return (d = d.get(p) || null), f(c, d, v, O, null);
      Jr(c, v);
    }
    return null;
  }
  function w(d, c, p, v) {
    for (
      var O = null, P = null, C = c, b = (c = 0), R = null;
      C !== null && b < p.length;
      b++
    ) {
      C.index > b ? ((R = C), (C = null)) : (R = C.sibling);
      var T = h(d, C, p[b], v);
      if (T === null) {
        C === null && (C = R);
        break;
      }
      e && C && T.alternate === null && t(d, C),
        (c = o(T, c, b)),
        P === null ? (O = T) : (P.sibling = T),
        (P = T),
        (C = R);
    }
    if (b === p.length) return n(d, C), O;
    if (C === null) {
      for (; b < p.length; b++)
        (C = m(d, p[b], v)),
          C !== null &&
            ((c = o(C, c, b)), P === null ? (O = C) : (P.sibling = C), (P = C));
      return O;
    }
    for (C = r(d, C); b < p.length; b++)
      (R = y(C, d, b, p[b], v)),
        R !== null &&
          (e && R.alternate !== null && C.delete(R.key === null ? b : R.key),
          (c = o(R, c, b)),
          P === null ? (O = R) : (P.sibling = R),
          (P = R));
    return (
      e &&
        C.forEach(function (A) {
          return t(d, A);
        }),
      O
    );
  }
  function S(d, c, p, v) {
    var O = Vn(p);
    if (typeof O != "function") throw Error(E(150));
    if (((p = O.call(p)), p == null)) throw Error(E(151));
    for (
      var P = (O = null), C = c, b = (c = 0), R = null, T = p.next();
      C !== null && !T.done;
      b++, T = p.next()
    ) {
      C.index > b ? ((R = C), (C = null)) : (R = C.sibling);
      var A = h(d, C, T.value, v);
      if (A === null) {
        C === null && (C = R);
        break;
      }
      e && C && A.alternate === null && t(d, C),
        (c = o(A, c, b)),
        P === null ? (O = A) : (P.sibling = A),
        (P = A),
        (C = R);
    }
    if (T.done) return n(d, C), O;
    if (C === null) {
      for (; !T.done; b++, T = p.next())
        (T = m(d, T.value, v)),
          T !== null &&
            ((c = o(T, c, b)), P === null ? (O = T) : (P.sibling = T), (P = T));
      return O;
    }
    for (C = r(d, C); !T.done; b++, T = p.next())
      (T = y(C, d, b, T.value, v)),
        T !== null &&
          (e && T.alternate !== null && C.delete(T.key === null ? b : T.key),
          (c = o(T, c, b)),
          P === null ? (O = T) : (P.sibling = T),
          (P = T));
    return (
      e &&
        C.forEach(function (q) {
          return t(d, q);
        }),
      O
    );
  }
  return function (d, c, p, v) {
    var O =
      typeof p == "object" && p !== null && p.type === vt && p.key === null;
    O && (p = p.props.children);
    var P = typeof p == "object" && p !== null;
    if (P)
      switch (p.$$typeof) {
        case Zn:
          e: {
            for (P = p.key, O = c; O !== null; ) {
              if (O.key === P) {
                switch (O.tag) {
                  case 7:
                    if (p.type === vt) {
                      n(d, O.sibling),
                        (c = i(O, p.props.children)),
                        (c.return = d),
                        (d = c);
                      break e;
                    }
                    break;
                  default:
                    if (O.elementType === p.type) {
                      n(d, O.sibling),
                        (c = i(O, p.props)),
                        (c.ref = Qn(d, O, p)),
                        (c.return = d),
                        (d = c);
                      break e;
                    }
                }
                n(d, O);
                break;
              } else t(d, O);
              O = O.sibling;
            }
            p.type === vt
              ? ((c = Sn(p.props.children, d.mode, v, p.key)),
                (c.return = d),
                (d = c))
              : ((v = gi(p.type, p.key, p.props, null, d.mode, v)),
                (v.ref = Qn(d, c, p)),
                (v.return = d),
                (d = v));
          }
          return u(d);
        case At:
          e: {
            for (O = p.key; c !== null; ) {
              if (c.key === O)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  n(d, c.sibling),
                    (c = i(c, p.children || [])),
                    (c.return = d),
                    (d = c);
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else t(d, c);
              c = c.sibling;
            }
            (c = lu(p, d.mode, v)), (c.return = d), (d = c);
          }
          return u(d);
      }
    if (typeof p == "string" || typeof p == "number")
      return (
        (p = "" + p),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = i(c, p)), (c.return = d), (d = c))
          : (n(d, c), (c = au(p, d.mode, v)), (c.return = d), (d = c)),
        u(d)
      );
    if (Zr(p)) return w(d, c, p, v);
    if (Vn(p)) return S(d, c, p, v);
    if ((P && Jr(d, p), typeof p > "u" && !O))
      switch (d.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(E(152, fn(d.type) || "Component"));
      }
    return n(d, c);
  };
}
var zi = md(!0),
  vd = md(!1),
  $r = {},
  et = Lt($r),
  Mr = Lt($r),
  Tr = Lt($r);
function Ut(e) {
  if (e === $r) throw Error(E(174));
  return e;
}
function ju(e, t) {
  switch ((ie(Tr, t), ie(Mr, e), ie(et, $r), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Pu(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Pu(t, e));
  }
  X(et), ie(et, t);
}
function kn() {
  X(et), X(Mr), X(Tr);
}
function _s(e) {
  Ut(Tr.current);
  var t = Ut(et.current),
    n = Pu(t, e.type);
  t !== n && (ie(Mr, e), ie(et, n));
}
function nl(e) {
  Mr.current === e && (X(et), X(Mr));
}
var ne = Lt(0);
function Hi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 64) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var lt = null,
  wt = null,
  tt = !1;
function yd(e, t) {
  var n = Ve(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.type = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (n.flags = 8),
    e.lastEffect !== null
      ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
      : (e.firstEffect = e.lastEffect = n);
}
function Is(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null ? ((e.stateNode = t), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), !0) : !1
      );
    case 13:
      return !1;
    default:
      return !1;
  }
}
function zu(e) {
  if (tt) {
    var t = wt;
    if (t) {
      var n = t;
      if (!Is(e, t)) {
        if (((t = mn(n.nextSibling)), !t || !Is(e, t))) {
          (e.flags = (e.flags & -1025) | 2), (tt = !1), (lt = e);
          return;
        }
        yd(lt, n);
      }
      (lt = e), (wt = mn(t.firstChild));
    } else (e.flags = (e.flags & -1025) | 2), (tt = !1), (lt = e);
  }
}
function Fs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  lt = e;
}
function ei(e) {
  if (e !== lt) return !1;
  if (!tt) return Fs(e), (tt = !0), !1;
  var t = e.type;
  if (e.tag !== 5 || (t !== "head" && t !== "body" && !Du(t, e.memoizedProps)))
    for (t = wt; t; ) yd(e, t), (t = mn(t.nextSibling));
  if ((Fs(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              wt = mn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      wt = null;
    }
  } else wt = lt ? mn(e.stateNode.nextSibling) : null;
  return !0;
}
function ru() {
  (wt = lt = null), (tt = !1);
}
var yn = [];
function rl() {
  for (var e = 0; e < yn.length; e++)
    yn[e]._workInProgressVersionPrimary = null;
  yn.length = 0;
}
var cr = Gt.ReactCurrentDispatcher,
  $e = Gt.ReactCurrentBatchConfig,
  Rr = 0,
  oe = null,
  we = null,
  he = null,
  Qi = !1,
  fr = !1;
function xe() {
  throw Error(E(321));
}
function il(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ae(e[n], t[n])) return !1;
  return !0;
}
function ol(e, t, n, r, i, o) {
  if (
    ((Rr = o),
    (oe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (cr.current = e === null || e.memoizedState === null ? Lm : Nm),
    (e = n(r, i)),
    fr)
  ) {
    o = 0;
    do {
      if (((fr = !1), !(25 > o))) throw Error(E(301));
      (o += 1),
        (he = we = null),
        (t.updateQueue = null),
        (cr.current = Dm),
        (e = n(r, i));
    } while (fr);
  }
  if (
    ((cr.current = Ki),
    (t = we !== null && we.next !== null),
    (Rr = 0),
    (he = we = oe = null),
    (Qi = !1),
    t)
  )
    throw Error(E(300));
  return e;
}
function jt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return he === null ? (oe.memoizedState = he = e) : (he = he.next = e), he;
}
function Zt() {
  if (we === null) {
    var e = oe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = we.next;
  var t = he === null ? oe.memoizedState : he.next;
  if (t !== null) (he = t), (we = e);
  else {
    if (e === null) throw Error(E(310));
    (we = e),
      (e = {
        memoizedState: we.memoizedState,
        baseState: we.baseState,
        baseQueue: we.baseQueue,
        queue: we.queue,
        next: null,
      }),
      he === null ? (oe.memoizedState = he = e) : (he = he.next = e);
  }
  return he;
}
function Ze(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Bn(e) {
  var t = Zt(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = we,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var u = i.next;
      (i.next = o.next), (o.next = u);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (i = i.next), (r = r.baseState);
    var a = (u = o = null),
      l = i;
    do {
      var s = l.lane;
      if ((Rr & s) === s)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: l.action,
              eagerReducer: l.eagerReducer,
              eagerState: l.eagerState,
              next: null,
            }),
          (r = l.eagerReducer === e ? l.eagerState : e(r, l.action));
      else {
        var f = {
          lane: s,
          action: l.action,
          eagerReducer: l.eagerReducer,
          eagerState: l.eagerState,
          next: null,
        };
        a === null ? ((u = a = f), (o = r)) : (a = a.next = f),
          (oe.lanes |= s),
          (Ur |= s);
      }
      l = l.next;
    } while (l !== null && l !== i);
    a === null ? (o = r) : (a.next = u),
      Ae(r, t.memoizedState) || (We = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  return [t.memoizedState, n.dispatch];
}
function qn(e) {
  var t = Zt(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var u = (i = i.next);
    do (o = e(o, u.action)), (u = u.next);
    while (u !== i);
    Ae(o, t.memoizedState) || (We = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Ls(e, t, n) {
  var r = t._getVersion;
  r = r(t._source);
  var i = t._workInProgressVersionPrimary;
  if (
    (i !== null
      ? (e = i === r)
      : ((e = e.mutableReadLanes),
        (e = (Rr & e) === e) &&
          ((t._workInProgressVersionPrimary = r), yn.push(t))),
    e)
  )
    return n(t._source);
  throw (yn.push(t), Error(E(350)));
}
function gd(e, t, n, r) {
  var i = Ee;
  if (i === null) throw Error(E(349));
  var o = t._getVersion,
    u = o(t._source),
    a = cr.current,
    l = a.useState(function () {
      return Ls(i, t, n);
    }),
    s = l[1],
    f = l[0];
  l = he;
  var m = e.memoizedState,
    h = m.refs,
    y = h.getSnapshot,
    w = m.source;
  m = m.subscribe;
  var S = oe;
  return (
    (e.memoizedState = { refs: h, source: t, subscribe: r }),
    a.useEffect(
      function () {
        (h.getSnapshot = n), (h.setSnapshot = s);
        var d = o(t._source);
        if (!Ae(u, d)) {
          (d = n(t._source)),
            Ae(f, d) ||
              (s(d), (d = Pt(S)), (i.mutableReadLanes |= d & i.pendingLanes)),
            (d = i.mutableReadLanes),
            (i.entangledLanes |= d);
          for (var c = i.entanglements, p = d; 0 < p; ) {
            var v = 31 - Tt(p),
              O = 1 << v;
            (c[v] |= d), (p &= ~O);
          }
        }
      },
      [n, t, r]
    ),
    a.useEffect(
      function () {
        return r(t._source, function () {
          var d = h.getSnapshot,
            c = h.setSnapshot;
          try {
            c(d(t._source));
            var p = Pt(S);
            i.mutableReadLanes |= p & i.pendingLanes;
          } catch (v) {
            c(function () {
              throw v;
            });
          }
        });
      },
      [t, r]
    ),
    (Ae(y, n) && Ae(w, t) && Ae(m, r)) ||
      ((e = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: Ze,
        lastRenderedState: f,
      }),
      (e.dispatch = s = ll.bind(null, oe, e)),
      (l.queue = e),
      (l.baseQueue = null),
      (f = Ls(i, t, n)),
      (l.memoizedState = l.baseState = f)),
    f
  );
}
function wd(e, t, n) {
  var r = Zt();
  return gd(r, e, t, n);
}
function Wn(e) {
  var t = jt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = t.queue =
      {
        pending: null,
        dispatch: null,
        lastRenderedReducer: Ze,
        lastRenderedState: e,
      }),
    (e = e.dispatch = ll.bind(null, oe, e)),
    [t.memoizedState, e]
  );
}
function Bi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = oe.updateQueue),
    t === null
      ? ((t = { lastEffect: null }),
        (oe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ns(e) {
  var t = jt();
  return (e = { current: e }), (t.memoizedState = e);
}
function qi() {
  return Zt().memoizedState;
}
function Hu(e, t, n, r) {
  var i = jt();
  (oe.flags |= e),
    (i.memoizedState = Bi(1 | t, n, void 0, r === void 0 ? null : r));
}
function ul(e, t, n, r) {
  var i = Zt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (we !== null) {
    var u = we.memoizedState;
    if (((o = u.destroy), r !== null && il(r, u.deps))) {
      Bi(t, n, o, r);
      return;
    }
  }
  (oe.flags |= e), (i.memoizedState = Bi(1 | t, n, o, r));
}
function Ds(e, t) {
  return Hu(516, 4, e, t);
}
function Wi(e, t) {
  return ul(516, 4, e, t);
}
function Sd(e, t) {
  return ul(4, 2, e, t);
}
function Od(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Cd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ul(4, 2, Od.bind(null, t, e), n)
  );
}
function al() {}
function bd(e, t) {
  var n = Zt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && il(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ed(e, t) {
  var n = Zt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && il(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Fm(e, t) {
  var n = xn();
  qt(98 > n ? 98 : n, function () {
    e(!0);
  }),
    qt(97 < n ? 97 : n, function () {
      var r = $e.transition;
      $e.transition = 1;
      try {
        e(!1), t();
      } finally {
        $e.transition = r;
      }
    });
}
function ll(e, t, n) {
  var r = Fe(),
    i = Pt(e),
    o = {
      lane: i,
      action: n,
      eagerReducer: null,
      eagerState: null,
      next: null,
    },
    u = t.pending;
  if (
    (u === null ? (o.next = o) : ((o.next = u.next), (u.next = o)),
    (t.pending = o),
    (u = e.alternate),
    e === oe || (u !== null && u === oe))
  )
    fr = Qi = !0;
  else {
    if (
      e.lanes === 0 &&
      (u === null || u.lanes === 0) &&
      ((u = t.lastRenderedReducer), u !== null)
    )
      try {
        var a = t.lastRenderedState,
          l = u(a, n);
        if (((o.eagerReducer = u), (o.eagerState = l), Ae(l, a))) return;
      } catch {
      } finally {
      }
    xt(e, i, r);
  }
}
var Ki = {
    readContext: Ue,
    useCallback: xe,
    useContext: xe,
    useEffect: xe,
    useImperativeHandle: xe,
    useLayoutEffect: xe,
    useMemo: xe,
    useReducer: xe,
    useRef: xe,
    useState: xe,
    useDebugValue: xe,
    useDeferredValue: xe,
    useTransition: xe,
    useMutableSource: xe,
    useOpaqueIdentifier: xe,
    unstable_isNewReconciler: !1,
  },
  Lm = {
    readContext: Ue,
    useCallback: function (e, t) {
      return (jt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ue,
    useEffect: Ds,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null), Hu(4, 2, Od.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Hu(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = jt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = jt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = r.queue =
          {
            pending: null,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
        (e = e.dispatch = ll.bind(null, oe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: Ns,
    useState: Wn,
    useDebugValue: al,
    useDeferredValue: function (e) {
      var t = Wn(e),
        n = t[0],
        r = t[1];
      return (
        Ds(
          function () {
            var i = $e.transition;
            $e.transition = 1;
            try {
              r(e);
            } finally {
              $e.transition = i;
            }
          },
          [e]
        ),
        n
      );
    },
    useTransition: function () {
      var e = Wn(!1),
        t = e[0];
      return (e = Fm.bind(null, e[1])), Ns(e), [e, t];
    },
    useMutableSource: function (e, t, n) {
      var r = jt();
      return (
        (r.memoizedState = {
          refs: { getSnapshot: t, setSnapshot: null },
          source: e,
          subscribe: n,
        }),
        gd(r, e, t, n)
      );
    },
    useOpaqueIdentifier: function () {
      if (tt) {
        var e = !1,
          t = km(function () {
            throw (
              (e || ((e = !0), n("r:" + (eu++).toString(36))), Error(E(355)))
            );
          }),
          n = Wn(t)[1];
        return (
          !(oe.mode & 2) &&
            ((oe.flags |= 516),
            Bi(
              5,
              function () {
                n("r:" + (eu++).toString(36));
              },
              void 0,
              null
            )),
          t
        );
      }
      return (t = "r:" + (eu++).toString(36)), Wn(t), t;
    },
    unstable_isNewReconciler: !1,
  },
  Nm = {
    readContext: Ue,
    useCallback: bd,
    useContext: Ue,
    useEffect: Wi,
    useImperativeHandle: Cd,
    useLayoutEffect: Sd,
    useMemo: Ed,
    useReducer: Bn,
    useRef: qi,
    useState: function () {
      return Bn(Ze);
    },
    useDebugValue: al,
    useDeferredValue: function (e) {
      var t = Bn(Ze),
        n = t[0],
        r = t[1];
      return (
        Wi(
          function () {
            var i = $e.transition;
            $e.transition = 1;
            try {
              r(e);
            } finally {
              $e.transition = i;
            }
          },
          [e]
        ),
        n
      );
    },
    useTransition: function () {
      var e = Bn(Ze)[0];
      return [qi().current, e];
    },
    useMutableSource: wd,
    useOpaqueIdentifier: function () {
      return Bn(Ze)[0];
    },
    unstable_isNewReconciler: !1,
  },
  Dm = {
    readContext: Ue,
    useCallback: bd,
    useContext: Ue,
    useEffect: Wi,
    useImperativeHandle: Cd,
    useLayoutEffect: Sd,
    useMemo: Ed,
    useReducer: qn,
    useRef: qi,
    useState: function () {
      return qn(Ze);
    },
    useDebugValue: al,
    useDeferredValue: function (e) {
      var t = qn(Ze),
        n = t[0],
        r = t[1];
      return (
        Wi(
          function () {
            var i = $e.transition;
            $e.transition = 1;
            try {
              r(e);
            } finally {
              $e.transition = i;
            }
          },
          [e]
        ),
        n
      );
    },
    useTransition: function () {
      var e = qn(Ze)[0];
      return [qi().current, e];
    },
    useMutableSource: wd,
    useOpaqueIdentifier: function () {
      return qn(Ze)[0];
    },
    unstable_isNewReconciler: !1,
  },
  Am = Gt.ReactCurrentOwner,
  We = !1;
function ke(e, t, n, r) {
  t.child = e === null ? vd(t, null, n, r) : zi(t, e.child, n, r);
}
function As(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    vn(t, i),
    (r = ol(e, t, n, r, o, i)),
    e !== null && !We
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -517),
        (e.lanes &= ~i),
        st(e, t, i))
      : ((t.flags |= 1), ke(e, t, r, i), t.child)
  );
}
function Vs(e, t, n, r, i, o) {
  if (e === null) {
    var u = n.type;
    return typeof u == "function" &&
      !hl(u) &&
      u.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = u), Pd(e, t, u, r, i, o))
      : ((e = gi(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  return (
    (u = e.child),
    !(i & o) &&
    ((i = u.memoizedProps),
    (n = n.compare),
    (n = n !== null ? n : Er),
    n(i, r) && e.ref === t.ref)
      ? st(e, t, o)
      : ((t.flags |= 1),
        (e = It(u, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  );
}
function Pd(e, t, n, r, i, o) {
  if (e !== null && Er(e.memoizedProps, r) && e.ref === t.ref)
    if (((We = !1), (o & i) !== 0)) e.flags & 16384 && (We = !0);
    else return (t.lanes = e.lanes), st(e, t, o);
  return Qu(e, t, n, r, o);
}
function iu(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden" || r.mode === "unstable-defer-without-hiding")
    if (!(t.mode & 4)) (t.memoizedState = { baseLanes: 0 }), ni(t, n);
    else if (n & 1073741824)
      (t.memoizedState = { baseLanes: 0 }), ni(t, o !== null ? o.baseLanes : n);
    else
      return (
        (e = o !== null ? o.baseLanes | n : n),
        (t.lanes = t.childLanes = 1073741824),
        (t.memoizedState = { baseLanes: e }),
        ni(t, e),
        null
      );
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ni(t, r);
  return ke(e, t, i, n), t.child;
}
function xd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    (t.flags |= 128);
}
function Qu(e, t, n, r, i) {
  var o = _e(n) ? Bt : Ce.current;
  return (
    (o = Pn(t, o)),
    vn(t, i),
    (n = ol(e, t, n, r, o, i)),
    e !== null && !We
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -517),
        (e.lanes &= ~i),
        st(e, t, i))
      : ((t.flags |= 1), ke(e, t, n, i), t.child)
  );
}
function $s(e, t, n, r, i) {
  if (_e(n)) {
    var o = !0;
    pi(t);
  } else o = !1;
  if ((vn(t, i), t.stateNode === null))
    e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
      hd(t, n, r),
      Uu(t, n, r, i),
      (r = !0);
  else if (e === null) {
    var u = t.stateNode,
      a = t.memoizedProps;
    u.props = a;
    var l = u.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = Ue(s))
      : ((s = _e(n) ? Bt : Ce.current), (s = Pn(t, s)));
    var f = n.getDerivedStateFromProps,
      m =
        typeof f == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
        typeof u.componentWillReceiveProps != "function") ||
      ((a !== r || l !== s) && Rs(t, u, r, s)),
      (ht = !1);
    var h = t.memoizedState;
    (u.state = h),
      kr(t, r, u, i),
      (l = t.memoizedState),
      a !== r || h !== l || Re.current || ht
        ? (typeof f == "function" && (ji(t, n, f, r), (l = t.memoizedState)),
          (a = ht || Ts(t, n, a, r, h, l, s))
            ? (m ||
                (typeof u.UNSAFE_componentWillMount != "function" &&
                  typeof u.componentWillMount != "function") ||
                (typeof u.componentWillMount == "function" &&
                  u.componentWillMount(),
                typeof u.UNSAFE_componentWillMount == "function" &&
                  u.UNSAFE_componentWillMount()),
              typeof u.componentDidMount == "function" && (t.flags |= 4))
            : (typeof u.componentDidMount == "function" && (t.flags |= 4),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (u.props = r),
          (u.state = l),
          (u.context = s),
          (r = a))
        : (typeof u.componentDidMount == "function" && (t.flags |= 4),
          (r = !1));
  } else {
    (u = t.stateNode),
      dd(e, t),
      (a = t.memoizedProps),
      (s = t.type === t.elementType ? a : qe(t.type, a)),
      (u.props = s),
      (m = t.pendingProps),
      (h = u.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Ue(l))
        : ((l = _e(n) ? Bt : Ce.current), (l = Pn(t, l)));
    var y = n.getDerivedStateFromProps;
    (f =
      typeof y == "function" ||
      typeof u.getSnapshotBeforeUpdate == "function") ||
      (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
        typeof u.componentWillReceiveProps != "function") ||
      ((a !== m || h !== l) && Rs(t, u, r, l)),
      (ht = !1),
      (h = t.memoizedState),
      (u.state = h),
      kr(t, r, u, i);
    var w = t.memoizedState;
    a !== m || h !== w || Re.current || ht
      ? (typeof y == "function" && (ji(t, n, y, r), (w = t.memoizedState)),
        (s = ht || Ts(t, n, s, r, h, w, l))
          ? (f ||
              (typeof u.UNSAFE_componentWillUpdate != "function" &&
                typeof u.componentWillUpdate != "function") ||
              (typeof u.componentWillUpdate == "function" &&
                u.componentWillUpdate(r, w, l),
              typeof u.UNSAFE_componentWillUpdate == "function" &&
                u.UNSAFE_componentWillUpdate(r, w, l)),
            typeof u.componentDidUpdate == "function" && (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 256))
          : (typeof u.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 256),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (u.props = r),
        (u.state = w),
        (u.context = l),
        (r = s))
      : (typeof u.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof u.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 256),
        (r = !1));
  }
  return Bu(e, t, n, r, o, i);
}
function Bu(e, t, n, r, i, o) {
  xd(e, t);
  var u = (t.flags & 64) !== 0;
  if (!r && !u) return i && Es(t, n, !1), st(e, t, o);
  (r = t.stateNode), (Am.current = t);
  var a =
    u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && u
      ? ((t.child = zi(t, e.child, null, o)), (t.child = zi(t, null, a, o)))
      : ke(e, t, a, o),
    (t.memoizedState = r.state),
    i && Es(t, n, !0),
    t.child
  );
}
function Us(e) {
  var t = e.stateNode;
  t.pendingContext
    ? bs(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && bs(e, t.context, !1),
    ju(e, t.containerInfo);
}
var ti = { dehydrated: null, retryLane: 0 };
function js(e, t, n) {
  var r = t.pendingProps,
    i = ne.current,
    o = !1,
    u;
  return (
    (u = (t.flags & 64) !== 0) ||
      (u = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -65))
      : (e !== null && e.memoizedState === null) ||
        r.fallback === void 0 ||
        r.unstable_avoidThisFallback === !0 ||
        (i |= 1),
    ie(ne, i & 1),
    e === null
      ? (r.fallback !== void 0 && zu(t),
        (e = r.children),
        (i = r.fallback),
        o
          ? ((e = zs(t, e, i, n)),
            (t.child.memoizedState = { baseLanes: n }),
            (t.memoizedState = ti),
            e)
          : typeof r.unstable_expectedLoadTime == "number"
          ? ((e = zs(t, e, i, n)),
            (t.child.memoizedState = { baseLanes: n }),
            (t.memoizedState = ti),
            (t.lanes = 33554432),
            e)
          : ((n = ml({ mode: "visible", children: e }, t.mode, n, null)),
            (n.return = t),
            (t.child = n)))
      : e.memoizedState !== null
      ? o
        ? ((r = Qs(e, t, r.children, r.fallback, n)),
          (o = t.child),
          (i = e.child.memoizedState),
          (o.memoizedState =
            i === null ? { baseLanes: n } : { baseLanes: i.baseLanes | n }),
          (o.childLanes = e.childLanes & ~n),
          (t.memoizedState = ti),
          r)
        : ((n = Hs(e, t, r.children, n)), (t.memoizedState = null), n)
      : o
      ? ((r = Qs(e, t, r.children, r.fallback, n)),
        (o = t.child),
        (i = e.child.memoizedState),
        (o.memoizedState =
          i === null ? { baseLanes: n } : { baseLanes: i.baseLanes | n }),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = ti),
        r)
      : ((n = Hs(e, t, r.children, n)), (t.memoizedState = null), n)
  );
}
function zs(e, t, n, r) {
  var i = e.mode,
    o = e.child;
  return (
    (t = { mode: "hidden", children: t }),
    !(i & 2) && o !== null
      ? ((o.childLanes = 0), (o.pendingProps = t))
      : (o = ml(t, i, 0, null)),
    (n = Sn(n, i, r, null)),
    (o.return = e),
    (n.return = e),
    (o.sibling = n),
    (e.child = o),
    n
  );
}
function Hs(e, t, n, r) {
  var i = e.child;
  return (
    (e = i.sibling),
    (n = It(i, { mode: "visible", children: n })),
    !(t.mode & 2) && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((e.nextEffect = null),
      (e.flags = 8),
      (t.firstEffect = t.lastEffect = e)),
    (t.child = n)
  );
}
function Qs(e, t, n, r, i) {
  var o = t.mode,
    u = e.child;
  e = u.sibling;
  var a = { mode: "hidden", children: n };
  return (
    !(o & 2) && t.child !== u
      ? ((n = t.child),
        (n.childLanes = 0),
        (n.pendingProps = a),
        (u = n.lastEffect),
        u !== null
          ? ((t.firstEffect = n.firstEffect),
            (t.lastEffect = u),
            (u.nextEffect = null))
          : (t.firstEffect = t.lastEffect = null))
      : (n = It(u, a)),
    e !== null ? (r = It(e, r)) : ((r = Sn(r, o, i, null)), (r.flags |= 2)),
    (r.return = t),
    (n.return = t),
    (n.sibling = r),
    (t.child = n),
    r
  );
}
function Bs(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), fd(e.return, t);
}
function ou(e, t, n, r, i, o) {
  var u = e.memoizedState;
  u === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
        lastEffect: o,
      })
    : ((u.isBackwards = t),
      (u.rendering = null),
      (u.renderingStartTime = 0),
      (u.last = r),
      (u.tail = n),
      (u.tailMode = i),
      (u.lastEffect = o));
}
function qs(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((ke(e, t, r.children, n), (r = ne.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 64);
  else {
    if (e !== null && e.flags & 64)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Bs(e, n);
        else if (e.tag === 19) Bs(e, n);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ie(ne, r), !(t.mode & 2))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Hi(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          ou(t, !1, i, n, o, t.lastEffect);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Hi(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        ou(t, !0, n, null, o, t.lastEffect);
        break;
      case "together":
        ou(t, !1, null, null, void 0, t.lastEffect);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function st(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ur |= t.lanes),
    n & t.childLanes)
  ) {
    if (e !== null && t.child !== e.child) throw Error(E(153));
    if (t.child !== null) {
      for (
        e = t.child, n = It(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = It(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  return null;
}
var kd, qu, Md, Td;
kd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
qu = function () {};
Md = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Ut(et.current);
    var o = null;
    switch (n) {
      case "input":
        (i = wu(e, i)), (r = wu(e, r)), (o = []);
        break;
      case "option":
        (i = Cu(e, i)), (r = Cu(e, r)), (o = []);
        break;
      case "select":
        (i = J({}, i, { value: void 0 })),
          (r = J({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = bu(e, i)), (r = bu(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ni);
    }
    xu(n, r);
    var u;
    n = null;
    for (s in i)
      if (!r.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null)
        if (s === "style") {
          var a = i[s];
          for (u in a) a.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (yr.hasOwnProperty(s)
              ? o || (o = [])
              : (o = o || []).push(s, null));
    for (s in r) {
      var l = r[s];
      if (
        ((a = i != null ? i[s] : void 0),
        r.hasOwnProperty(s) && l !== a && (l != null || a != null))
      )
        if (s === "style")
          if (a) {
            for (u in a)
              !a.hasOwnProperty(u) ||
                (l && l.hasOwnProperty(u)) ||
                (n || (n = {}), (n[u] = ""));
            for (u in l)
              l.hasOwnProperty(u) &&
                a[u] !== l[u] &&
                (n || (n = {}), (n[u] = l[u]));
          } else n || (o || (o = []), o.push(s, n)), (n = l);
        else
          s === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(s, l))
            : s === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (o = o || []).push(s, "" + l)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (yr.hasOwnProperty(s)
                ? (l != null && s === "onScroll" && G("scroll", e),
                  o || a === l || (o = []))
                : typeof l == "object" && l !== null && l.$$typeof === Na
                ? l.toString()
                : (o = o || []).push(s, l));
    }
    n && (o = o || []).push("style", n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Td = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Kn(e, t) {
  if (!tt)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Vm(e, t, n) {
  var r = t.pendingProps;
  switch (t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null;
    case 1:
      return _e(t.type) && Ai(), null;
    case 3:
      return (
        kn(),
        X(Re),
        X(Ce),
        rl(),
        (r = t.stateNode),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ei(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
        qu(t),
        null
      );
    case 5:
      nl(t);
      var i = Ut(Tr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Md(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 128);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return null;
        }
        if (((e = Ut(et.current)), ei(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[gt] = t), (r[Di] = o), n)) {
            case "dialog":
              G("cancel", r), G("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", r);
              break;
            case "video":
            case "audio":
              for (e = 0; e < er.length; e++) G(er[e], r);
              break;
            case "source":
              G("error", r);
              break;
            case "img":
            case "image":
            case "link":
              G("error", r), G("load", r);
              break;
            case "details":
              G("toggle", r);
              break;
            case "input":
              ql(r, o), G("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                G("invalid", r);
              break;
            case "textarea":
              Kl(r, o), G("invalid", r);
          }
          xu(n, o), (e = null);
          for (var u in o)
            o.hasOwnProperty(u) &&
              ((i = o[u]),
              u === "children"
                ? typeof i == "string"
                  ? r.textContent !== i && (e = ["children", i])
                  : typeof i == "number" &&
                    r.textContent !== "" + i &&
                    (e = ["children", "" + i])
                : yr.hasOwnProperty(u) &&
                  i != null &&
                  u === "onScroll" &&
                  G("scroll", r));
          switch (n) {
            case "input":
              Kr(r), Wl(r, o, !0);
              break;
            case "textarea":
              Kr(r), Yl(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Ni);
          }
          (r = e), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          switch (
            ((u = i.nodeType === 9 ? i : i.ownerDocument),
            e === Eu.html && (e = Cf(n)),
            e === Eu.html
              ? n === "script"
                ? ((e = u.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = u.createElement(n, { is: r.is }))
                : ((e = u.createElement(n)),
                  n === "select" &&
                    ((u = e),
                    r.multiple
                      ? (u.multiple = !0)
                      : r.size && (u.size = r.size)))
              : (e = u.createElementNS(e, n)),
            (e[gt] = t),
            (e[Di] = r),
            kd(e, t, !1, !1),
            (t.stateNode = e),
            (u = ku(n, r)),
            n)
          ) {
            case "dialog":
              G("cancel", e), G("close", e), (i = r);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", e), (i = r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < er.length; i++) G(er[i], e);
              i = r;
              break;
            case "source":
              G("error", e), (i = r);
              break;
            case "img":
            case "image":
            case "link":
              G("error", e), G("load", e), (i = r);
              break;
            case "details":
              G("toggle", e), (i = r);
              break;
            case "input":
              ql(e, r), (i = wu(e, r)), G("invalid", e);
              break;
            case "option":
              i = Cu(e, r);
              break;
            case "select":
              (e._wrapperState = { wasMultiple: !!r.multiple }),
                (i = J({}, r, { value: void 0 })),
                G("invalid", e);
              break;
            case "textarea":
              Kl(e, r), (i = bu(e, r)), G("invalid", e);
              break;
            default:
              i = r;
          }
          xu(n, i);
          var a = i;
          for (o in a)
            if (a.hasOwnProperty(o)) {
              var l = a[o];
              o === "style"
                ? Pf(e, l)
                : o === "dangerouslySetInnerHTML"
                ? ((l = l ? l.__html : void 0), l != null && bf(e, l))
                : o === "children"
                ? typeof l == "string"
                  ? (n !== "textarea" || l !== "") && gr(e, l)
                  : typeof l == "number" && gr(e, "" + l)
                : o !== "suppressContentEditableWarning" &&
                  o !== "suppressHydrationWarning" &&
                  o !== "autoFocus" &&
                  (yr.hasOwnProperty(o)
                    ? l != null && o === "onScroll" && G("scroll", e)
                    : l != null && Ta(e, o, l, u));
            }
          switch (n) {
            case "input":
              Kr(e), Wl(e, r, !1);
              break;
            case "textarea":
              Kr(e), Yl(e);
              break;
            case "option":
              r.value != null && e.setAttribute("value", "" + Mt(r.value));
              break;
            case "select":
              (e.multiple = !!r.multiple),
                (o = r.value),
                o != null
                  ? dn(e, !!r.multiple, o, !1)
                  : r.defaultValue != null &&
                    dn(e, !!r.multiple, r.defaultValue, !0);
              break;
            default:
              typeof i.onClick == "function" && (e.onclick = Ni);
          }
          nd(n, r) && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 128);
      }
      return null;
    case 6:
      if (e && t.stateNode != null) Td(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        (n = Ut(Tr.current)),
          Ut(et.current),
          ei(t)
            ? ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[gt] = t),
              r.nodeValue !== n && (t.flags |= 4))
            : ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[gt] = t),
              (t.stateNode = r));
      }
      return null;
    case 13:
      return (
        X(ne),
        (r = t.memoizedState),
        t.flags & 64
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            (n = !1),
            e === null
              ? t.memoizedProps.fallback !== void 0 && ei(t)
              : (n = e.memoizedState !== null),
            r &&
              !n &&
              t.mode & 2 &&
              ((e === null &&
                t.memoizedProps.unstable_avoidThisFallback !== !0) ||
              ne.current & 1
                ? me === 0 && (me = 3)
                : ((me === 0 || me === 3) && (me = 4),
                  Ee === null ||
                    (!(Ur & 134217727) && !(Ln & 134217727)) ||
                    gn(Ee, Oe))),
            (r || n) && (t.flags |= 4),
            null)
      );
    case 4:
      return kn(), qu(t), e === null && Jf(t.stateNode.containerInfo), null;
    case 10:
      return el(t), null;
    case 17:
      return _e(t.type) && Ai(), null;
    case 19:
      if ((X(ne), (r = t.memoizedState), r === null)) return null;
      if (((o = (t.flags & 64) !== 0), (u = r.rendering), u === null))
        if (o) Kn(r, !1);
        else {
          if (me !== 0 || (e !== null && e.flags & 64))
            for (e = t.child; e !== null; ) {
              if (((u = Hi(e)), u !== null)) {
                for (
                  t.flags |= 64,
                    Kn(r, !1),
                    o = u.updateQueue,
                    o !== null && ((t.updateQueue = o), (t.flags |= 4)),
                    r.lastEffect === null && (t.firstEffect = null),
                    t.lastEffect = r.lastEffect,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 2),
                    (o.nextEffect = null),
                    (o.firstEffect = null),
                    (o.lastEffect = null),
                    (u = o.alternate),
                    u === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = u.childLanes),
                        (o.lanes = u.lanes),
                        (o.child = u.child),
                        (o.memoizedProps = u.memoizedProps),
                        (o.memoizedState = u.memoizedState),
                        (o.updateQueue = u.updateQueue),
                        (o.type = u.type),
                        (e = u.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ie(ne, (ne.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          r.tail !== null &&
            Se() > Zu &&
            ((t.flags |= 64), (o = !0), Kn(r, !1), (t.lanes = 33554432));
        }
      else {
        if (!o)
          if (((e = Hi(u)), e !== null)) {
            if (
              ((t.flags |= 64),
              (o = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Kn(r, !0),
              r.tail === null && r.tailMode === "hidden" && !u.alternate && !tt)
            )
              return (
                (t = t.lastEffect = r.lastEffect),
                t !== null && (t.nextEffect = null),
                null
              );
          } else
            2 * Se() - r.renderingStartTime > Zu &&
              n !== 1073741824 &&
              ((t.flags |= 64), (o = !0), Kn(r, !1), (t.lanes = 33554432));
        r.isBackwards
          ? ((u.sibling = t.child), (t.child = u))
          : ((n = r.last),
            n !== null ? (n.sibling = u) : (t.child = u),
            (r.last = u));
      }
      return r.tail !== null
        ? ((n = r.tail),
          (r.rendering = n),
          (r.tail = n.sibling),
          (r.lastEffect = t.lastEffect),
          (r.renderingStartTime = Se()),
          (n.sibling = null),
          (t = ne.current),
          ie(ne, o ? (t & 1) | 2 : t & 1),
          n)
        : null;
    case 23:
    case 24:
      return (
        pl(),
        e !== null &&
          (e.memoizedState !== null) != (t.memoizedState !== null) &&
          r.mode !== "unstable-defer-without-hiding" &&
          (t.flags |= 4),
        null
      );
  }
  throw Error(E(156, t.tag));
}
function $m(e) {
  switch (e.tag) {
    case 1:
      _e(e.type) && Ai();
      var t = e.flags;
      return t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null;
    case 3:
      if ((kn(), X(Re), X(Ce), rl(), (t = e.flags), t & 64))
        throw Error(E(285));
      return (e.flags = (t & -4097) | 64), e;
    case 5:
      return nl(e), null;
    case 13:
      return (
        X(ne),
        (t = e.flags),
        t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null
      );
    case 19:
      return X(ne), null;
    case 4:
      return kn(), null;
    case 10:
      return el(e), null;
    case 23:
    case 24:
      return pl(), null;
    default:
      return null;
  }
}
function sl(e, t) {
  try {
    var n = "",
      r = t;
    do (n += wh(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i };
}
function Wu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Um = typeof WeakMap == "function" ? WeakMap : Map;
function Rd(e, t, n) {
  (n = bt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Gi || ((Gi = !0), (Ju = r)), Wu(e, t);
    }),
    n
  );
}
function _d(e, t, n) {
  (n = bt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function () {
      return Wu(e, t), r(i);
    };
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        typeof r != "function" &&
          (Je === null ? (Je = new Set([this])) : Je.add(this), Wu(e, t));
        var u = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: u !== null ? u : "",
        });
      }),
    n
  );
}
var jm = typeof WeakSet == "function" ? WeakSet : Set;
function Ws(e) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (n) {
        kt(e, n);
      }
    else t.current = null;
}
function zm(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (t.flags & 256 && e !== null) {
        var n = e.memoizedProps,
          r = e.memoizedState;
        (e = t.stateNode),
          (t = e.getSnapshotBeforeUpdate(
            t.elementType === t.type ? n : qe(t.type, n),
            r
          )),
          (e.__reactInternalSnapshotBeforeUpdate = t);
      }
      return;
    case 3:
      t.flags & 256 && Ga(t.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(E(163));
}
function Hm(e, t, n) {
  switch (n.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      if (
        ((t = n.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
      ) {
        e = t = t.next;
        do {
          if ((e.tag & 3) === 3) {
            var r = e.create;
            e.destroy = r();
          }
          e = e.next;
        } while (e !== t);
      }
      if (
        ((t = n.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
      ) {
        e = t = t.next;
        do {
          var i = e;
          (r = i.next),
            (i = i.tag),
            i & 4 && i & 1 && (Ud(n, e), Xm(n, e)),
            (e = r);
        } while (e !== t);
      }
      return;
    case 1:
      (e = n.stateNode),
        n.flags & 4 &&
          (t === null
            ? e.componentDidMount()
            : ((r =
                n.elementType === n.type
                  ? t.memoizedProps
                  : qe(n.type, t.memoizedProps)),
              e.componentDidUpdate(
                r,
                t.memoizedState,
                e.__reactInternalSnapshotBeforeUpdate
              ))),
        (t = n.updateQueue),
        t !== null && Ms(n, t, e);
      return;
    case 3:
      if (((t = n.updateQueue), t !== null)) {
        if (((e = null), n.child !== null))
          switch (n.child.tag) {
            case 5:
              e = n.child.stateNode;
              break;
            case 1:
              e = n.child.stateNode;
          }
        Ms(n, t, e);
      }
      return;
    case 5:
      (e = n.stateNode),
        t === null && n.flags & 4 && nd(n.type, n.memoizedProps) && e.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      n.memoizedState === null &&
        ((n = n.alternate),
        n !== null &&
          ((n = n.memoizedState),
          n !== null && ((n = n.dehydrated), n !== null && Nf(n))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(E(163));
}
function Ks(e, t) {
  for (var n = e; ; ) {
    if (n.tag === 5) {
      var r = n.stateNode;
      if (t)
        (r = r.style),
          typeof r.setProperty == "function"
            ? r.setProperty("display", "none", "important")
            : (r.display = "none");
      else {
        r = n.stateNode;
        var i = n.memoizedProps.style;
        (i = i != null && i.hasOwnProperty("display") ? i.display : null),
          (r.style.display = Ef("display", i));
      }
    } else if (n.tag === 6) n.stateNode.nodeValue = t ? "" : n.memoizedProps;
    else if (
      ((n.tag !== 23 && n.tag !== 24) || n.memoizedState === null || n === e) &&
      n.child !== null
    ) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
}
function Ys(e, t) {
  if (Ht && typeof Ht.onCommitFiberUnmount == "function")
    try {
      Ht.onCommitFiberUnmount(Xa, t);
    } catch {}
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      if (
        ((e = t.updateQueue), e !== null && ((e = e.lastEffect), e !== null))
      ) {
        var n = (e = e.next);
        do {
          var r = n,
            i = r.destroy;
          if (((r = r.tag), i !== void 0))
            if (r & 4) Ud(t, n);
            else {
              r = t;
              try {
                i();
              } catch (o) {
                kt(r, o);
              }
            }
          n = n.next;
        } while (n !== e);
      }
      break;
    case 1:
      if (
        (Ws(t), (e = t.stateNode), typeof e.componentWillUnmount == "function")
      )
        try {
          (e.props = t.memoizedProps),
            (e.state = t.memoizedState),
            e.componentWillUnmount();
        } catch (o) {
          kt(t, o);
        }
      break;
    case 5:
      Ws(t);
      break;
    case 4:
      Id(e, t);
  }
}
function Gs(e) {
  (e.alternate = null),
    (e.child = null),
    (e.dependencies = null),
    (e.firstEffect = null),
    (e.lastEffect = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.return = null),
    (e.updateQueue = null);
}
function Xs(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Zs(e) {
  e: {
    for (var t = e.return; t !== null; ) {
      if (Xs(t)) break e;
      t = t.return;
    }
    throw Error(E(160));
  }
  var n = t;
  switch (((t = n.stateNode), n.tag)) {
    case 5:
      var r = !1;
      break;
    case 3:
      (t = t.containerInfo), (r = !0);
      break;
    case 4:
      (t = t.containerInfo), (r = !0);
      break;
    default:
      throw Error(E(161));
  }
  n.flags & 16 && (gr(t, ""), (n.flags &= -17));
  e: t: for (n = e; ; ) {
    for (; n.sibling === null; ) {
      if (n.return === null || Xs(n.return)) {
        n = null;
        break e;
      }
      n = n.return;
    }
    for (
      n.sibling.return = n.return, n = n.sibling;
      n.tag !== 5 && n.tag !== 6 && n.tag !== 18;

    ) {
      if (n.flags & 2 || n.child === null || n.tag === 4) continue t;
      (n.child.return = n), (n = n.child);
    }
    if (!(n.flags & 2)) {
      n = n.stateNode;
      break e;
    }
  }
  r ? Ku(e, n, t) : Yu(e, n, t);
}
function Ku(e, t, n) {
  var r = e.tag,
    i = r === 5 || r === 6;
  if (i)
    (e = i ? e.stateNode : e.stateNode.instance),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ni));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ku(e, t, n), e = e.sibling; e !== null; ) Ku(e, t, n), (e = e.sibling);
}
function Yu(e, t, n) {
  var r = e.tag,
    i = r === 5 || r === 6;
  if (i)
    (e = i ? e.stateNode : e.stateNode.instance),
      t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Yu(e, t, n), e = e.sibling; e !== null; ) Yu(e, t, n), (e = e.sibling);
}
function Id(e, t) {
  for (var n = t, r = !1, i, o; ; ) {
    if (!r) {
      r = n.return;
      e: for (;;) {
        if (r === null) throw Error(E(160));
        switch (((i = r.stateNode), r.tag)) {
          case 5:
            o = !1;
            break e;
          case 3:
            (i = i.containerInfo), (o = !0);
            break e;
          case 4:
            (i = i.containerInfo), (o = !0);
            break e;
        }
        r = r.return;
      }
      r = !0;
    }
    if (n.tag === 5 || n.tag === 6) {
      e: for (var u = e, a = n, l = a; ; )
        if ((Ys(u, l), l.child !== null && l.tag !== 4))
          (l.child.return = l), (l = l.child);
        else {
          if (l === a) break e;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === a) break e;
            l = l.return;
          }
          (l.sibling.return = l.return), (l = l.sibling);
        }
      o
        ? ((u = i),
          (a = n.stateNode),
          u.nodeType === 8 ? u.parentNode.removeChild(a) : u.removeChild(a))
        : i.removeChild(n.stateNode);
    } else if (n.tag === 4) {
      if (n.child !== null) {
        (i = n.stateNode.containerInfo),
          (o = !0),
          (n.child.return = n),
          (n = n.child);
        continue;
      }
    } else if ((Ys(e, n), n.child !== null)) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      (n = n.return), n.tag === 4 && (r = !1);
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
}
function uu(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var n = t.updateQueue;
      if (((n = n !== null ? n.lastEffect : null), n !== null)) {
        var r = (n = n.next);
        do
          (r.tag & 3) === 3 &&
            ((e = r.destroy), (r.destroy = void 0), e !== void 0 && e()),
            (r = r.next);
        while (r !== n);
      }
      return;
    case 1:
      return;
    case 5:
      if (((n = t.stateNode), n != null)) {
        r = t.memoizedProps;
        var i = e !== null ? e.memoizedProps : r;
        e = t.type;
        var o = t.updateQueue;
        if (((t.updateQueue = null), o !== null)) {
          for (
            n[Di] = r,
              e === "input" && r.type === "radio" && r.name != null && Sf(n, r),
              ku(e, i),
              t = ku(e, r),
              i = 0;
            i < o.length;
            i += 2
          ) {
            var u = o[i],
              a = o[i + 1];
            u === "style"
              ? Pf(n, a)
              : u === "dangerouslySetInnerHTML"
              ? bf(n, a)
              : u === "children"
              ? gr(n, a)
              : Ta(n, u, a, t);
          }
          switch (e) {
            case "input":
              Su(n, r);
              break;
            case "textarea":
              Of(n, r);
              break;
            case "select":
              (e = n._wrapperState.wasMultiple),
                (n._wrapperState.wasMultiple = !!r.multiple),
                (o = r.value),
                o != null
                  ? dn(n, !!r.multiple, o, !1)
                  : e !== !!r.multiple &&
                    (r.defaultValue != null
                      ? dn(n, !!r.multiple, r.defaultValue, !0)
                      : dn(n, !!r.multiple, r.multiple ? [] : "", !1));
          }
        }
      }
      return;
    case 6:
      if (t.stateNode === null) throw Error(E(162));
      t.stateNode.nodeValue = t.memoizedProps;
      return;
    case 3:
      (n = t.stateNode), n.hydrate && ((n.hydrate = !1), Nf(n.containerInfo));
      return;
    case 12:
      return;
    case 13:
      t.memoizedState !== null && ((dl = Se()), Ks(t.child, !0)), Js(t);
      return;
    case 19:
      Js(t);
      return;
    case 17:
      return;
    case 23:
    case 24:
      Ks(t, t.memoizedState !== null);
      return;
  }
  throw Error(E(163));
}
function Js(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new jm()),
      t.forEach(function (r) {
        var i = ev.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Qm(e, t) {
  return e !== null &&
    ((e = e.memoizedState), e === null || e.dehydrated !== null)
    ? ((t = t.memoizedState), t !== null && t.dehydrated === null)
    : !1;
}
var Bm = Math.ceil,
  Yi = Gt.ReactCurrentDispatcher,
  cl = Gt.ReactCurrentOwner,
  D = 0,
  Ee = null,
  le = null,
  Oe = 0,
  Wt = 0,
  Gu = Lt(0),
  me = 0,
  bo = null,
  Fn = 0,
  Ur = 0,
  Ln = 0,
  fl = 0,
  Xu = null,
  dl = 0,
  Zu = 1 / 0;
function Nn() {
  Zu = Se() + 500;
}
var _ = null,
  Gi = !1,
  Ju = null,
  Je = null,
  _t = !1,
  dr = null,
  tr = 90,
  ea = [],
  ta = [],
  ct = null,
  pr = 0,
  na = null,
  mi = -1,
  at = 0,
  vi = 0,
  hr = null,
  yi = !1;
function Fe() {
  return D & 48 ? Se() : mi !== -1 ? mi : (mi = Se());
}
function Pt(e) {
  if (((e = e.mode), !(e & 2))) return 1;
  if (!(e & 4)) return xn() === 99 ? 1 : 2;
  if ((at === 0 && (at = Fn), Im.transition !== 0)) {
    vi !== 0 && (vi = Xu !== null ? Xu.pendingLanes : 0), (e = at);
    var t = 4186112 & ~vi;
    return (
      (t &= -t),
      t === 0 && ((e = 4186112 & ~e), (t = e & -e), t === 0 && (t = 8192)),
      t
    );
  }
  return (
    (e = xn()),
    D & 4 && e === 98 ? (e = Fi(12, at)) : ((e = Nh(e)), (e = Fi(e, at))),
    e
  );
}
function xt(e, t, n) {
  if (50 < pr) throw ((pr = 0), (na = null), Error(E(185)));
  if (((e = Eo(e, t)), e === null)) return null;
  vo(e, t, n), e === Ee && ((Ln |= t), me === 4 && gn(e, Oe));
  var r = xn();
  t === 1
    ? D & 8 && !(D & 48)
      ? ra(e)
      : (je(e, n), D === 0 && (Nn(), rt()))
    : (!(D & 4) ||
        (r !== 98 && r !== 99) ||
        (ct === null ? (ct = new Set([e])) : ct.add(e)),
      je(e, n)),
    (Xu = e);
}
function Eo(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
function je(e, t) {
  for (
    var n = e.callbackNode,
      r = e.suspendedLanes,
      i = e.pingedLanes,
      o = e.expirationTimes,
      u = e.pendingLanes;
    0 < u;

  ) {
    var a = 31 - Tt(u),
      l = 1 << a,
      s = o[a];
    if (s === -1) {
      if (!(l & r) || l & i) {
        (s = t), tn(l);
        var f = Y;
        o[a] = 10 <= f ? s + 250 : 6 <= f ? s + 5e3 : -1;
      }
    } else s <= t && (e.expiredLanes |= l);
    u &= ~l;
  }
  if (((r = Cr(e, e === Ee ? Oe : 0)), (t = Y), r === 0))
    n !== null &&
      (n !== tu && Vu(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else {
    if (n !== null) {
      if (e.callbackPriority === t) return;
      n !== tu && Vu(n);
    }
    t === 15
      ? ((n = ra.bind(null, e)),
        ot === null ? ((ot = [n]), (hi = Za(Oo, cd))) : ot.push(n),
        (n = tu))
      : t === 14
      ? (n = xr(99, ra.bind(null, e)))
      : ((n = Dh(t)), (n = xr(n, Fd.bind(null, e)))),
      (e.callbackPriority = t),
      (e.callbackNode = n);
  }
}
function Fd(e) {
  if (((mi = -1), (vi = at = 0), D & 48)) throw Error(E(327));
  var t = e.callbackNode;
  if (Nt() && e.callbackNode !== t) return null;
  var n = Cr(e, e === Ee ? Oe : 0);
  if (n === 0) return null;
  var r = n,
    i = D;
  D |= 16;
  var o = Ad();
  (Ee !== e || Oe !== r) && (Nn(), wn(e, r));
  do
    try {
      Km();
      break;
    } catch (a) {
      Dd(e, a);
    }
  while (!0);
  if (
    (Ja(),
    (Yi.current = o),
    (D = i),
    le !== null ? (r = 0) : ((Ee = null), (Oe = 0), (r = me)),
    Fn & Ln)
  )
    wn(e, 0);
  else if (r !== 0) {
    if (
      (r === 2 &&
        ((D |= 64),
        e.hydrate && ((e.hydrate = !1), Ga(e.containerInfo)),
        (n = zf(e)),
        n !== 0 && (r = nr(e, n))),
      r === 1)
    )
      throw ((t = bo), wn(e, 0), gn(e, n), je(e, Se()), t);
    switch (
      ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
    ) {
      case 0:
      case 1:
        throw Error(E(345));
      case 2:
        Dt(e);
        break;
      case 3:
        if (
          (gn(e, n), (n & 62914560) === n && ((r = dl + 500 - Se()), 10 < r))
        ) {
          if (Cr(e, 0) !== 0) break;
          if (((i = e.suspendedLanes), (i & n) !== n)) {
            Fe(), (e.pingedLanes |= e.suspendedLanes & i);
            break;
          }
          e.timeoutHandle = Ss(Dt.bind(null, e), r);
          break;
        }
        Dt(e);
        break;
      case 4:
        if ((gn(e, n), (n & 4186112) === n)) break;
        for (r = e.eventTimes, i = -1; 0 < n; ) {
          var u = 31 - Tt(n);
          (o = 1 << u), (u = r[u]), u > i && (i = u), (n &= ~o);
        }
        if (
          ((n = i),
          (n = Se() - n),
          (n =
            (120 > n
              ? 120
              : 480 > n
              ? 480
              : 1080 > n
              ? 1080
              : 1920 > n
              ? 1920
              : 3e3 > n
              ? 3e3
              : 4320 > n
              ? 4320
              : 1960 * Bm(n / 1960)) - n),
          10 < n)
        ) {
          e.timeoutHandle = Ss(Dt.bind(null, e), n);
          break;
        }
        Dt(e);
        break;
      case 5:
        Dt(e);
        break;
      default:
        throw Error(E(329));
    }
  }
  return je(e, Se()), e.callbackNode === t ? Fd.bind(null, e) : null;
}
function gn(e, t) {
  for (
    t &= ~fl,
      t &= ~Ln,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Tt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ra(e) {
  if (D & 48) throw Error(E(327));
  if ((Nt(), e === Ee && e.expiredLanes & Oe)) {
    var t = Oe,
      n = nr(e, t);
    Fn & Ln && ((t = Cr(e, t)), (n = nr(e, t)));
  } else (t = Cr(e, 0)), (n = nr(e, t));
  if (
    (e.tag !== 0 &&
      n === 2 &&
      ((D |= 64),
      e.hydrate && ((e.hydrate = !1), Ga(e.containerInfo)),
      (t = zf(e)),
      t !== 0 && (n = nr(e, t))),
    n === 1)
  )
    throw ((n = bo), wn(e, 0), gn(e, t), je(e, Se()), n);
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Dt(e),
    je(e, Se()),
    null
  );
}
function qm() {
  if (ct !== null) {
    var e = ct;
    (ct = null),
      e.forEach(function (t) {
        (t.expiredLanes |= 24 & t.pendingLanes), je(t, Se());
      });
  }
  rt();
}
function Ld(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    (D = n), D === 0 && (Nn(), rt());
  }
}
function Nd(e, t) {
  var n = D;
  (D &= -2), (D |= 8);
  try {
    return e(t);
  } finally {
    (D = n), D === 0 && (Nn(), rt());
  }
}
function ni(e, t) {
  ie(Gu, Wt), (Wt |= t), (Fn |= t);
}
function pl() {
  (Wt = Gu.current), X(Gu);
}
function wn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), xm(n)), le !== null))
    for (n = le.return; n !== null; ) {
      var r = n;
      switch (r.tag) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ai();
          break;
        case 3:
          kn(), X(Re), X(Ce), rl();
          break;
        case 5:
          nl(r);
          break;
        case 4:
          kn();
          break;
        case 13:
          X(ne);
          break;
        case 19:
          X(ne);
          break;
        case 10:
          el(r);
          break;
        case 23:
        case 24:
          pl();
      }
      n = n.return;
    }
  (Ee = e),
    (le = It(e.current, null)),
    (Oe = Wt = Fn = t),
    (me = 0),
    (bo = null),
    (fl = Ln = Ur = 0);
}
function Dd(e, t) {
  do {
    var n = le;
    try {
      if ((Ja(), (cr.current = Ki), Qi)) {
        for (var r = oe.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Qi = !1;
      }
      if (
        ((Rr = 0),
        (he = we = oe = null),
        (fr = !1),
        (cl.current = null),
        n === null || n.return === null)
      ) {
        (me = 1), (bo = t), (le = null);
        break;
      }
      e: {
        var o = e,
          u = n.return,
          a = n,
          l = t;
        if (
          ((t = Oe),
          (a.flags |= 2048),
          (a.firstEffect = a.lastEffect = null),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var s = l;
          if (!(a.mode & 2)) {
            var f = a.alternate;
            f
              ? ((a.updateQueue = f.updateQueue),
                (a.memoizedState = f.memoizedState),
                (a.lanes = f.lanes))
              : ((a.updateQueue = null), (a.memoizedState = null));
          }
          var m = (ne.current & 1) !== 0,
            h = u;
          do {
            var y;
            if ((y = h.tag === 13)) {
              var w = h.memoizedState;
              if (w !== null) y = w.dehydrated !== null;
              else {
                var S = h.memoizedProps;
                y =
                  S.fallback === void 0
                    ? !1
                    : S.unstable_avoidThisFallback !== !0
                    ? !0
                    : !m;
              }
            }
            if (y) {
              var d = h.updateQueue;
              if (d === null) {
                var c = new Set();
                c.add(s), (h.updateQueue = c);
              } else d.add(s);
              if (!(h.mode & 2)) {
                if (
                  ((h.flags |= 64),
                  (a.flags |= 16384),
                  (a.flags &= -2981),
                  a.tag === 1)
                )
                  if (a.alternate === null) a.tag = 17;
                  else {
                    var p = bt(-1, 1);
                    (p.tag = 2), Et(a, p);
                  }
                a.lanes |= 1;
                break e;
              }
              (l = void 0), (a = t);
              var v = o.pingCache;
              if (
                (v === null
                  ? ((v = o.pingCache = new Um()), (l = new Set()), v.set(s, l))
                  : ((l = v.get(s)),
                    l === void 0 && ((l = new Set()), v.set(s, l))),
                !l.has(a))
              ) {
                l.add(a);
                var O = Jm.bind(null, o, s, a);
                s.then(O, O);
              }
              (h.flags |= 4096), (h.lanes = t);
              break e;
            }
            h = h.return;
          } while (h !== null);
          l = Error(
            (fn(a.type) || "A React component") +
              ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`
          );
        }
        me !== 5 && (me = 2), (l = sl(l, a)), (h = u);
        do {
          switch (h.tag) {
            case 3:
              (o = l), (h.flags |= 4096), (t &= -t), (h.lanes |= t);
              var P = Rd(h, o, t);
              ks(h, P);
              break e;
            case 1:
              o = l;
              var C = h.type,
                b = h.stateNode;
              if (
                !(h.flags & 64) &&
                (typeof C.getDerivedStateFromError == "function" ||
                  (b !== null &&
                    typeof b.componentDidCatch == "function" &&
                    (Je === null || !Je.has(b))))
              ) {
                (h.flags |= 4096), (t &= -t), (h.lanes |= t);
                var R = _d(h, o, t);
                ks(h, R);
                break e;
              }
          }
          h = h.return;
        } while (h !== null);
      }
      $d(n);
    } catch (T) {
      (t = T), le === n && n !== null && (le = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ad() {
  var e = Yi.current;
  return (Yi.current = Ki), e === null ? Ki : e;
}
function nr(e, t) {
  var n = D;
  D |= 16;
  var r = Ad();
  (Ee === e && Oe === t) || wn(e, t);
  do
    try {
      Wm();
      break;
    } catch (i) {
      Dd(e, i);
    }
  while (!0);
  if ((Ja(), (D = n), (Yi.current = r), le !== null)) throw Error(E(261));
  return (Ee = null), (Oe = 0), me;
}
function Wm() {
  for (; le !== null; ) Vd(le);
}
function Km() {
  for (; le !== null && !Tm(); ) Vd(le);
}
function Vd(e) {
  var t = jd(e.alternate, e, Wt);
  (e.memoizedProps = e.pendingProps),
    t === null ? $d(e) : (le = t),
    (cl.current = null);
}
function $d(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 2048)) {
      if (((n = $m(t)), n !== null)) {
        (n.flags &= 2047), (le = n);
        return;
      }
      e !== null && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
    } else {
      if (((n = Vm(n, t, Wt)), n !== null)) {
        le = n;
        return;
      }
      if (
        ((n = t),
        (n.tag !== 24 && n.tag !== 23) ||
          n.memoizedState === null ||
          Wt & 1073741824 ||
          !(n.mode & 4))
      ) {
        for (var r = 0, i = n.child; i !== null; )
          (r |= i.lanes | i.childLanes), (i = i.sibling);
        n.childLanes = r;
      }
      e !== null &&
        !(e.flags & 2048) &&
        (e.firstEffect === null && (e.firstEffect = t.firstEffect),
        t.lastEffect !== null &&
          (e.lastEffect !== null && (e.lastEffect.nextEffect = t.firstEffect),
          (e.lastEffect = t.lastEffect)),
        1 < t.flags &&
          (e.lastEffect !== null
            ? (e.lastEffect.nextEffect = t)
            : (e.firstEffect = t),
          (e.lastEffect = t)));
    }
    if (((t = t.sibling), t !== null)) {
      le = t;
      return;
    }
    le = t = e;
  } while (t !== null);
  me === 0 && (me = 5);
}
function Dt(e) {
  var t = xn();
  return qt(99, Ym.bind(null, e, t)), null;
}
function Ym(e, t) {
  do Nt();
  while (dr !== null);
  if (D & 48) throw Error(E(327));
  var n = e.finishedWork;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(E(177));
  e.callbackNode = null;
  var r = n.lanes | n.childLanes,
    i = r,
    o = e.pendingLanes & ~i;
  (e.pendingLanes = i),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= i),
    (e.mutableReadLanes &= i),
    (e.entangledLanes &= i),
    (i = e.entanglements);
  for (var u = e.eventTimes, a = e.expirationTimes; 0 < o; ) {
    var l = 31 - Tt(o),
      s = 1 << l;
    (i[l] = 0), (u[l] = -1), (a[l] = -1), (o &= ~s);
  }
  if (
    (ct !== null && !(r & 24) && ct.has(e) && ct.delete(e),
    e === Ee && ((le = Ee = null), (Oe = 0)),
    1 < n.flags
      ? n.lastEffect !== null
        ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
        : (r = n)
      : (r = n.firstEffect),
    r !== null)
  ) {
    if (
      ((i = D), (D |= 32), (cl.current = null), (Zo = ci), (u = ps()), Fu(u))
    ) {
      if ("selectionStart" in u)
        a = { start: u.selectionStart, end: u.selectionEnd };
      else
        e: if (
          ((a = ((a = u.ownerDocument) && a.defaultView) || window),
          (s = a.getSelection && a.getSelection()) && s.rangeCount !== 0)
        ) {
          (a = s.anchorNode),
            (o = s.anchorOffset),
            (l = s.focusNode),
            (s = s.focusOffset);
          try {
            a.nodeType, l.nodeType;
          } catch {
            a = null;
            break e;
          }
          var f = 0,
            m = -1,
            h = -1,
            y = 0,
            w = 0,
            S = u,
            d = null;
          t: for (;;) {
            for (
              var c;
              S !== a || (o !== 0 && S.nodeType !== 3) || (m = f + o),
                S !== l || (s !== 0 && S.nodeType !== 3) || (h = f + s),
                S.nodeType === 3 && (f += S.nodeValue.length),
                (c = S.firstChild) !== null;

            )
              (d = S), (S = c);
            for (;;) {
              if (S === u) break t;
              if (
                (d === a && ++y === o && (m = f),
                d === l && ++w === s && (h = f),
                (c = S.nextSibling) !== null)
              )
                break;
              (S = d), (d = S.parentNode);
            }
            S = c;
          }
          a = m === -1 || h === -1 ? null : { start: m, end: h };
        } else a = null;
      a = a || { start: 0, end: 0 };
    } else a = null;
    (Jo = { focusedElem: u, selectionRange: a }),
      (ci = !1),
      (hr = null),
      (yi = !1),
      (_ = r);
    do
      try {
        Gm();
      } catch (T) {
        if (_ === null) throw Error(E(330));
        kt(_, T), (_ = _.nextEffect);
      }
    while (_ !== null);
    (hr = null), (_ = r);
    do
      try {
        for (u = e; _ !== null; ) {
          var p = _.flags;
          if ((p & 16 && gr(_.stateNode, ""), p & 128)) {
            var v = _.alternate;
            if (v !== null) {
              var O = v.ref;
              O !== null &&
                (typeof O == "function" ? O(null) : (O.current = null));
            }
          }
          switch (p & 1038) {
            case 2:
              Zs(_), (_.flags &= -3);
              break;
            case 6:
              Zs(_), (_.flags &= -3), uu(_.alternate, _);
              break;
            case 1024:
              _.flags &= -1025;
              break;
            case 1028:
              (_.flags &= -1025), uu(_.alternate, _);
              break;
            case 4:
              uu(_.alternate, _);
              break;
            case 8:
              (a = _), Id(u, a);
              var P = a.alternate;
              Gs(a), P !== null && Gs(P);
          }
          _ = _.nextEffect;
        }
      } catch (T) {
        if (_ === null) throw Error(E(330));
        kt(_, T), (_ = _.nextEffect);
      }
    while (_ !== null);
    if (
      ((O = Jo),
      (v = ps()),
      (p = O.focusedElem),
      (u = O.selectionRange),
      v !== p && p && p.ownerDocument && Gf(p.ownerDocument.documentElement, p))
    ) {
      for (
        u !== null &&
          Fu(p) &&
          ((v = u.start),
          (O = u.end),
          O === void 0 && (O = v),
          ("selectionStart" in p)
            ? ((p.selectionStart = v),
              (p.selectionEnd = Math.min(O, p.value.length)))
            : ((O =
                ((v = p.ownerDocument || document) && v.defaultView) || window),
              O.getSelection &&
                ((O = O.getSelection()),
                (a = p.textContent.length),
                (P = Math.min(u.start, a)),
                (u = u.end === void 0 ? P : Math.min(u.end, a)),
                !O.extend && P > u && ((a = u), (u = P), (P = a)),
                (a = ds(p, P)),
                (o = ds(p, u)),
                a &&
                  o &&
                  (O.rangeCount !== 1 ||
                    O.anchorNode !== a.node ||
                    O.anchorOffset !== a.offset ||
                    O.focusNode !== o.node ||
                    O.focusOffset !== o.offset) &&
                  ((v = v.createRange()),
                  v.setStart(a.node, a.offset),
                  O.removeAllRanges(),
                  P > u
                    ? (O.addRange(v), O.extend(o.node, o.offset))
                    : (v.setEnd(o.node, o.offset), O.addRange(v)))))),
          v = [],
          O = p;
        (O = O.parentNode);

      )
        O.nodeType === 1 &&
          v.push({ element: O, left: O.scrollLeft, top: O.scrollTop });
      for (typeof p.focus == "function" && p.focus(), p = 0; p < v.length; p++)
        (O = v[p]),
          (O.element.scrollLeft = O.left),
          (O.element.scrollTop = O.top);
    }
    (ci = !!Zo), (Jo = Zo = null), (e.current = n), (_ = r);
    do
      try {
        for (p = e; _ !== null; ) {
          var C = _.flags;
          if ((C & 36 && Hm(p, _.alternate, _), C & 128)) {
            v = void 0;
            var b = _.ref;
            if (b !== null) {
              var R = _.stateNode;
              switch (_.tag) {
                case 5:
                  v = R;
                  break;
                default:
                  v = R;
              }
              typeof b == "function" ? b(v) : (b.current = v);
            }
          }
          _ = _.nextEffect;
        }
      } catch (T) {
        if (_ === null) throw Error(E(330));
        kt(_, T), (_ = _.nextEffect);
      }
    while (_ !== null);
    (_ = null), _m(), (D = i);
  } else e.current = n;
  if (_t) (_t = !1), (dr = e), (tr = t);
  else
    for (_ = r; _ !== null; )
      (t = _.nextEffect),
        (_.nextEffect = null),
        _.flags & 8 && ((C = _), (C.sibling = null), (C.stateNode = null)),
        (_ = t);
  if (
    ((r = e.pendingLanes),
    r === 0 && (Je = null),
    r === 1 ? (e === na ? pr++ : ((pr = 0), (na = e))) : (pr = 0),
    (n = n.stateNode),
    Ht && typeof Ht.onCommitFiberRoot == "function")
  )
    try {
      Ht.onCommitFiberRoot(Xa, n, void 0, (n.current.flags & 64) === 64);
    } catch {}
  if ((je(e, Se()), Gi)) throw ((Gi = !1), (e = Ju), (Ju = null), e);
  return D & 8 || rt(), null;
}
function Gm() {
  for (; _ !== null; ) {
    var e = _.alternate;
    yi ||
      hr === null ||
      (_.flags & 8
        ? Zl(_, hr) && (yi = !0)
        : _.tag === 13 && Qm(e, _) && Zl(_, hr) && (yi = !0));
    var t = _.flags;
    t & 256 && zm(e, _),
      !(t & 512) ||
        _t ||
        ((_t = !0),
        xr(97, function () {
          return Nt(), null;
        })),
      (_ = _.nextEffect);
  }
}
function Nt() {
  if (tr !== 90) {
    var e = 97 < tr ? 97 : tr;
    return (tr = 90), qt(e, Zm);
  }
  return !1;
}
function Xm(e, t) {
  ea.push(t, e),
    _t ||
      ((_t = !0),
      xr(97, function () {
        return Nt(), null;
      }));
}
function Ud(e, t) {
  ta.push(t, e),
    _t ||
      ((_t = !0),
      xr(97, function () {
        return Nt(), null;
      }));
}
function Zm() {
  if (dr === null) return !1;
  var e = dr;
  if (((dr = null), D & 48)) throw Error(E(331));
  var t = D;
  D |= 32;
  var n = ta;
  ta = [];
  for (var r = 0; r < n.length; r += 2) {
    var i = n[r],
      o = n[r + 1],
      u = i.destroy;
    if (((i.destroy = void 0), typeof u == "function"))
      try {
        u();
      } catch (l) {
        if (o === null) throw Error(E(330));
        kt(o, l);
      }
  }
  for (n = ea, ea = [], r = 0; r < n.length; r += 2) {
    (i = n[r]), (o = n[r + 1]);
    try {
      var a = i.create;
      i.destroy = a();
    } catch (l) {
      if (o === null) throw Error(E(330));
      kt(o, l);
    }
  }
  for (a = e.current.firstEffect; a !== null; )
    (e = a.nextEffect),
      (a.nextEffect = null),
      a.flags & 8 && ((a.sibling = null), (a.stateNode = null)),
      (a = e);
  return (D = t), rt(), !0;
}
function ec(e, t, n) {
  (t = sl(n, t)),
    (t = Rd(e, t, 1)),
    Et(e, t),
    (t = Fe()),
    (e = Eo(e, 1)),
    e !== null && (vo(e, 1, t), je(e, t));
}
function kt(e, t) {
  if (e.tag === 3) ec(e, e, t);
  else
    for (var n = e.return; n !== null; ) {
      if (n.tag === 3) {
        ec(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Je === null || !Je.has(r)))
        ) {
          e = sl(t, e);
          var i = _d(n, e, 1);
          if ((Et(n, i), (i = Fe()), (n = Eo(n, 1)), n !== null))
            vo(n, 1, i), je(n, i);
          else if (
            typeof r.componentDidCatch == "function" &&
            (Je === null || !Je.has(r))
          )
            try {
              r.componentDidCatch(t, e);
            } catch {}
          break;
        }
      }
      n = n.return;
    }
}
function Jm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Fe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ee === e &&
      (Oe & n) === n &&
      (me === 4 || (me === 3 && (Oe & 62914560) === Oe && 500 > Se() - dl)
        ? wn(e, 0)
        : (fl |= n)),
    je(e, t);
}
function ev(e, t) {
  var n = e.stateNode;
  n !== null && n.delete(t),
    (t = 0),
    t === 0 &&
      ((t = e.mode),
      t & 2
        ? t & 4
          ? (at === 0 && (at = Fn),
            (t = nn(62914560 & ~at)),
            t === 0 && (t = 4194304))
          : (t = xn() === 99 ? 1 : 2)
        : (t = 1)),
    (n = Fe()),
    (e = Eo(e, t)),
    e !== null && (vo(e, t, n), je(e, n));
}
var jd;
jd = function (e, t, n) {
  var r = t.lanes;
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Re.current) We = !0;
    else if (n & r) We = !!(e.flags & 16384);
    else {
      switch (((We = !1), t.tag)) {
        case 3:
          Us(t), ru();
          break;
        case 5:
          _s(t);
          break;
        case 1:
          _e(t.type) && pi(t);
          break;
        case 4:
          ju(t, t.stateNode.containerInfo);
          break;
        case 10:
          r = t.memoizedProps.value;
          var i = t.type._context;
          ie(Vi, i._currentValue), (i._currentValue = r);
          break;
        case 13:
          if (t.memoizedState !== null)
            return n & t.child.childLanes
              ? js(e, t, n)
              : (ie(ne, ne.current & 1),
                (t = st(e, t, n)),
                t !== null ? t.sibling : null);
          ie(ne, ne.current & 1);
          break;
        case 19:
          if (((r = (n & t.childLanes) !== 0), e.flags & 64)) {
            if (r) return qs(e, t, n);
            t.flags |= 64;
          }
          if (
            ((i = t.memoizedState),
            i !== null &&
              ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            ie(ne, ne.current),
            r)
          )
            break;
          return null;
        case 23:
        case 24:
          return (t.lanes = 0), iu(e, t, n);
      }
      return st(e, t, n);
    }
  else We = !1;
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      if (
        ((r = t.type),
        e !== null &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (e = t.pendingProps),
        (i = Pn(t, Ce.current)),
        vn(t, n),
        (i = ol(null, t, r, e, i, n)),
        (t.flags |= 1),
        typeof i == "object" &&
          i !== null &&
          typeof i.render == "function" &&
          i.$$typeof === void 0)
      ) {
        if (
          ((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), _e(r))
        ) {
          var o = !0;
          pi(t);
        } else o = !1;
        (t.memoizedState =
          i.state !== null && i.state !== void 0 ? i.state : null),
          tl(t);
        var u = r.getDerivedStateFromProps;
        typeof u == "function" && ji(t, r, u, e),
          (i.updater = Co),
          (t.stateNode = i),
          (i._reactInternals = t),
          Uu(t, r, e, n),
          (t = Bu(null, t, r, !0, o, n));
      } else (t.tag = 0), ke(null, t, i, n), (t = t.child);
      return t;
    case 16:
      i = t.elementType;
      e: {
        switch (
          (e !== null &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
          (e = t.pendingProps),
          (o = i._init),
          (i = o(i._payload)),
          (t.type = i),
          (o = t.tag = nv(i)),
          (e = qe(i, e)),
          o)
        ) {
          case 0:
            t = Qu(null, t, i, e, n);
            break e;
          case 1:
            t = $s(null, t, i, e, n);
            break e;
          case 11:
            t = As(null, t, i, e, n);
            break e;
          case 14:
            t = Vs(null, t, i, qe(i.type, e), r, n);
            break e;
        }
        throw Error(E(306, i, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : qe(r, i)),
        Qu(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : qe(r, i)),
        $s(e, t, r, i, n)
      );
    case 3:
      if ((Us(t), (r = t.updateQueue), e === null || r === null))
        throw Error(E(282));
      if (
        ((r = t.pendingProps),
        (i = t.memoizedState),
        (i = i !== null ? i.element : null),
        dd(e, t),
        kr(t, r, null, n),
        (r = t.memoizedState.element),
        r === i)
      )
        ru(), (t = st(e, t, n));
      else {
        if (
          ((i = t.stateNode),
          (o = i.hydrate) &&
            ((wt = mn(t.stateNode.containerInfo.firstChild)),
            (lt = t),
            (o = tt = !0)),
          o)
        ) {
          if (((e = i.mutableSourceEagerHydrationData), e != null))
            for (i = 0; i < e.length; i += 2)
              (o = e[i]),
                (o._workInProgressVersionPrimary = e[i + 1]),
                yn.push(o);
          for (n = vd(t, null, r, n), t.child = n; n; )
            (n.flags = (n.flags & -3) | 1024), (n = n.sibling);
        } else ke(e, t, r, n), ru();
        t = t.child;
      }
      return t;
    case 5:
      return (
        _s(t),
        e === null && zu(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (u = i.children),
        Du(r, i) ? (u = null) : o !== null && Du(r, o) && (t.flags |= 16),
        xd(e, t),
        ke(e, t, u, n),
        t.child
      );
    case 6:
      return e === null && zu(t), null;
    case 13:
      return js(e, t, n);
    case 4:
      return (
        ju(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = zi(t, null, r, n)) : ke(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : qe(r, i)),
        As(e, t, r, i, n)
      );
    case 7:
      return ke(e, t, t.pendingProps, n), t.child;
    case 8:
      return ke(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ke(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        (r = t.type._context),
          (i = t.pendingProps),
          (u = t.memoizedProps),
          (o = i.value);
        var a = t.type._context;
        if ((ie(Vi, a._currentValue), (a._currentValue = o), u !== null))
          if (
            ((a = u.value),
            (o = Ae(a, o)
              ? 0
              : (typeof r._calculateChangedBits == "function"
                  ? r._calculateChangedBits(a, o)
                  : 1073741823) | 0),
            o === 0)
          ) {
            if (u.children === i.children && !Re.current) {
              t = st(e, t, n);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var l = a.dependencies;
              if (l !== null) {
                u = a.child;
                for (var s = l.firstContext; s !== null; ) {
                  if (s.context === r && s.observedBits & o) {
                    a.tag === 1 &&
                      ((s = bt(-1, n & -n)), (s.tag = 2), Et(a, s)),
                      (a.lanes |= n),
                      (s = a.alternate),
                      s !== null && (s.lanes |= n),
                      fd(a.return, n),
                      (l.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else u = a.tag === 10 && a.type === t.type ? null : a.child;
              if (u !== null) u.return = a;
              else
                for (u = a; u !== null; ) {
                  if (u === t) {
                    u = null;
                    break;
                  }
                  if (((a = u.sibling), a !== null)) {
                    (a.return = u.return), (u = a);
                    break;
                  }
                  u = u.return;
                }
              a = u;
            }
        ke(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (o = t.pendingProps),
        (r = o.children),
        vn(t, n),
        (i = Ue(i, o.unstable_observedBits)),
        (r = r(i)),
        (t.flags |= 1),
        ke(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (i = t.type),
        (o = qe(i, t.pendingProps)),
        (o = qe(i.type, o)),
        Vs(e, t, i, o, r, n)
      );
    case 15:
      return Pd(e, t, t.type, t.pendingProps, r, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : qe(r, i)),
        e !== null &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (t.tag = 1),
        _e(r) ? ((e = !0), pi(t)) : (e = !1),
        vn(t, n),
        hd(t, r, i),
        Uu(t, r, i, n),
        Bu(null, t, r, !0, e, n)
      );
    case 19:
      return qs(e, t, n);
    case 23:
      return iu(e, t, n);
    case 24:
      return iu(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function tv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.flags = 0),
    (this.lastEffect = this.firstEffect = this.nextEffect = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ve(e, t, n, r) {
  return new tv(e, t, n, r);
}
function hl(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function nv(e) {
  if (typeof e == "function") return hl(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === po)) return 11;
    if (e === ho) return 14;
  }
  return 2;
}
function It(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ve(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.nextEffect = null),
        (n.firstEffect = null),
        (n.lastEffect = null)),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function gi(e, t, n, r, i, o) {
  var u = 2;
  if (((r = e), typeof e == "function")) hl(e) && (u = 1);
  else if (typeof e == "string") u = 5;
  else
    e: switch (e) {
      case vt:
        return Sn(n.children, i, o, t);
      case yf:
        (u = 8), (i |= 16);
        break;
      case Ra:
        (u = 8), (i |= 1);
        break;
      case rr:
        return (
          (e = Ve(12, n, t, i | 8)),
          (e.elementType = rr),
          (e.type = rr),
          (e.lanes = o),
          e
        );
      case ir:
        return (
          (e = Ve(13, n, t, i)),
          (e.type = ir),
          (e.elementType = ir),
          (e.lanes = o),
          e
        );
      case Ti:
        return (e = Ve(19, n, t, i)), (e.elementType = Ti), (e.lanes = o), e;
      case Da:
        return ml(n, i, o, t);
      case gu:
        return (e = Ve(24, n, t, i)), (e.elementType = gu), (e.lanes = o), e;
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case _a:
              u = 10;
              break e;
            case Ia:
              u = 9;
              break e;
            case po:
              u = 11;
              break e;
            case ho:
              u = 14;
              break e;
            case Fa:
              (u = 16), (r = null);
              break e;
            case La:
              u = 22;
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ve(u, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Sn(e, t, n, r) {
  return (e = Ve(7, e, r, t)), (e.lanes = n), e;
}
function ml(e, t, n, r) {
  return (e = Ve(23, e, r, t)), (e.elementType = Da), (e.lanes = n), e;
}
function au(e, t, n) {
  return (e = Ve(6, e, null, t)), (e.lanes = n), e;
}
function lu(e, t, n) {
  return (
    (t = Ve(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function rv(e, t, n) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.pendingContext = this.context = null),
    (this.hydrate = n),
    (this.callbackNode = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Bo(0)),
    (this.expirationTimes = Bo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Bo(0)),
    (this.mutableSourceEagerHydrationData = null);
}
function iv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: At,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Xi(e, t, n, r) {
  var i = t.current,
    o = Fe(),
    u = Pt(i);
  e: if (n) {
    n = n._reactInternals;
    t: {
      if (Xt(n) !== n || n.tag !== 1) throw Error(E(170));
      var a = n;
      do {
        switch (a.tag) {
          case 3:
            a = a.stateNode.context;
            break t;
          case 1:
            if (_e(a.type)) {
              a = a.stateNode.__reactInternalMemoizedMergedChildContext;
              break t;
            }
        }
        a = a.return;
      } while (a !== null);
      throw Error(E(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (_e(l)) {
        n = id(n, l, a);
        break e;
      }
    }
    n = a;
  } else n = Rt;
  return (
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = bt(o, u)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    Et(i, t),
    xt(i, u, o),
    u
  );
}
function su(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function tc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function vl(e, t) {
  tc(e, t), (e = e.alternate) && tc(e, t);
}
function ov() {
  return null;
}
function yl(e, t, n) {
  var r =
    (n != null &&
      n.hydrationOptions != null &&
      n.hydrationOptions.mutableSources) ||
    null;
  if (
    ((n = new rv(e, t, n != null && n.hydrate === !0)),
    (t = Ve(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0)),
    (n.current = t),
    (t.stateNode = n),
    tl(t),
    (e[In] = n.current),
    Jf(e.nodeType === 8 ? e.parentNode : e),
    r)
  )
    for (e = 0; e < r.length; e++) {
      t = r[e];
      var i = t._getVersion;
      (i = i(t._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [t, i])
          : n.mutableSourceEagerHydrationData.push(t, i);
    }
  this._internalRoot = n;
}
yl.prototype.render = function (e) {
  Xi(e, this._internalRoot, null, null);
};
yl.prototype.unmount = function () {
  var e = this._internalRoot,
    t = e.containerInfo;
  Xi(null, e, null, function () {
    t[In] = null;
  });
};
function jr(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function uv(e, t) {
  if (
    (t ||
      ((t = e ? (e.nodeType === 9 ? e.documentElement : e.firstChild) : null),
      (t = !(!t || t.nodeType !== 1 || !t.hasAttribute("data-reactroot")))),
    !t)
  )
    for (var n; (n = e.lastChild); ) e.removeChild(n);
  return new yl(e, 0, t ? { hydrate: !0 } : void 0);
}
function Po(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var u = o._internalRoot;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var s = su(u);
        a.call(s);
      };
    }
    Xi(t, u, e, i);
  } else {
    if (
      ((o = n._reactRootContainer = uv(n, r)),
      (u = o._internalRoot),
      typeof i == "function")
    ) {
      var l = i;
      i = function () {
        var s = su(u);
        l.call(s);
      };
    }
    Nd(function () {
      Xi(t, u, e, i);
    });
  }
  return su(u);
}
If = function (e) {
  if (e.tag === 13) {
    var t = Fe();
    xt(e, 4, t), vl(e, 4);
  }
};
ja = function (e) {
  if (e.tag === 13) {
    var t = Fe();
    xt(e, 67108864, t), vl(e, 67108864);
  }
};
Ff = function (e) {
  if (e.tag === 13) {
    var t = Fe(),
      n = Pt(e);
    xt(e, n, t), vl(e, n);
  }
};
Lf = function (e, t) {
  return t();
};
Mu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Su(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = So(r);
            if (!i) throw Error(E(90));
            wf(r), Su(r, i);
          }
        }
      }
      break;
    case "textarea":
      Of(e, n);
      break;
    case "select":
      (t = n.value), t != null && dn(e, !!n.multiple, t, !1);
  }
};
Va = Ld;
Mf = function (e, t, n, r, i) {
  var o = D;
  D |= 4;
  try {
    return qt(98, e.bind(null, t, n, r, i));
  } finally {
    (D = o), D === 0 && (Nn(), rt());
  }
};
$a = function () {
  !(D & 49) && (qm(), Nt());
};
Tf = function (e, t) {
  var n = D;
  D |= 2;
  try {
    return e(t);
  } finally {
    (D = n), D === 0 && (Nn(), rt());
  }
};
function zd(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!jr(t)) throw Error(E(200));
  return iv(e, t, null, n);
}
var av = { Events: [Vr, an, So, xf, kf, Nt, { current: !1 }] },
  Yn = {
    findFiberByHostInstance: $t,
    bundleType: 0,
    version: "17.0.2",
    rendererPackageName: "react-dom",
  },
  lv = {
    bundleType: Yn.bundleType,
    version: Yn.version,
    rendererPackageName: Yn.rendererPackageName,
    rendererConfig: Yn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Gt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = _f(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Yn.findFiberByHostInstance || ov,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ri = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ri.isDisabled && ri.supportsFiber)
    try {
      (Xa = ri.inject(lv)), (Ht = ri);
    } catch {}
}
ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = av;
ze.createPortal = zd;
ze.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(E(188))
      : Error(E(268, Object.keys(e)));
  return (e = _f(t)), (e = e === null ? null : e.stateNode), e;
};
ze.flushSync = function (e, t) {
  var n = D;
  if (n & 48) return e(t);
  D |= 1;
  try {
    if (e) return qt(99, e.bind(null, t));
  } finally {
    (D = n), rt();
  }
};
ze.hydrate = function (e, t, n) {
  if (!jr(t)) throw Error(E(200));
  return Po(null, e, t, !0, n);
};
ze.render = function (e, t, n) {
  if (!jr(t)) throw Error(E(200));
  return Po(null, e, t, !1, n);
};
ze.unmountComponentAtNode = function (e) {
  if (!jr(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (Nd(function () {
        Po(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[In] = null);
        });
      }),
      !0)
    : !1;
};
ze.unstable_batchedUpdates = Ld;
ze.unstable_createPortal = function (e, t) {
  return zd(
    e,
    t,
    2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  );
};
ze.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!jr(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return Po(e, t, n, !1, r);
};
ze.version = "17.0.2";
function Hd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hd);
    } catch (e) {
      console.error(e);
    }
}
Hd(), (pf.exports = ze);
var Qd = pf.exports;
const sv = Gc(Qd);
function M() {
  return (
    (M =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    M.apply(this, arguments)
  );
}
const Sw = Object.freeze(
  Object.defineProperty({ __proto__: null, default: M }, Symbol.toStringTag, {
    value: "Module",
  })
);
function cv(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Zi(e, t) {
  return (
    (Zi =
      Object.setPrototypeOf ||
      function (r, i) {
        return (r.__proto__ = i), r;
      }),
    Zi(e, t)
  );
}
function zr(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Zi(e, t);
}
var Bd = { exports: {} },
  B = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pe = typeof Symbol == "function" && Symbol.for,
  gl = pe ? Symbol.for("react.element") : 60103,
  wl = pe ? Symbol.for("react.portal") : 60106,
  xo = pe ? Symbol.for("react.fragment") : 60107,
  ko = pe ? Symbol.for("react.strict_mode") : 60108,
  Mo = pe ? Symbol.for("react.profiler") : 60114,
  To = pe ? Symbol.for("react.provider") : 60109,
  Ro = pe ? Symbol.for("react.context") : 60110,
  Sl = pe ? Symbol.for("react.async_mode") : 60111,
  _o = pe ? Symbol.for("react.concurrent_mode") : 60111,
  Io = pe ? Symbol.for("react.forward_ref") : 60112,
  Fo = pe ? Symbol.for("react.suspense") : 60113,
  fv = pe ? Symbol.for("react.suspense_list") : 60120,
  Lo = pe ? Symbol.for("react.memo") : 60115,
  No = pe ? Symbol.for("react.lazy") : 60116,
  dv = pe ? Symbol.for("react.block") : 60121,
  pv = pe ? Symbol.for("react.fundamental") : 60117,
  hv = pe ? Symbol.for("react.responder") : 60118,
  mv = pe ? Symbol.for("react.scope") : 60119;
function De(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case gl:
        switch (((e = e.type), e)) {
          case Sl:
          case _o:
          case xo:
          case Mo:
          case ko:
          case Fo:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Ro:
              case Io:
              case No:
              case Lo:
              case To:
                return e;
              default:
                return t;
            }
        }
      case wl:
        return t;
    }
  }
}
function qd(e) {
  return De(e) === _o;
}
B.AsyncMode = Sl;
B.ConcurrentMode = _o;
B.ContextConsumer = Ro;
B.ContextProvider = To;
B.Element = gl;
B.ForwardRef = Io;
B.Fragment = xo;
B.Lazy = No;
B.Memo = Lo;
B.Portal = wl;
B.Profiler = Mo;
B.StrictMode = ko;
B.Suspense = Fo;
B.isAsyncMode = function (e) {
  return qd(e) || De(e) === Sl;
};
B.isConcurrentMode = qd;
B.isContextConsumer = function (e) {
  return De(e) === Ro;
};
B.isContextProvider = function (e) {
  return De(e) === To;
};
B.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === gl;
};
B.isForwardRef = function (e) {
  return De(e) === Io;
};
B.isFragment = function (e) {
  return De(e) === xo;
};
B.isLazy = function (e) {
  return De(e) === No;
};
B.isMemo = function (e) {
  return De(e) === Lo;
};
B.isPortal = function (e) {
  return De(e) === wl;
};
B.isProfiler = function (e) {
  return De(e) === Mo;
};
B.isStrictMode = function (e) {
  return De(e) === ko;
};
B.isSuspense = function (e) {
  return De(e) === Fo;
};
B.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === xo ||
    e === _o ||
    e === Mo ||
    e === ko ||
    e === Fo ||
    e === fv ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === No ||
        e.$$typeof === Lo ||
        e.$$typeof === To ||
        e.$$typeof === Ro ||
        e.$$typeof === Io ||
        e.$$typeof === pv ||
        e.$$typeof === hv ||
        e.$$typeof === mv ||
        e.$$typeof === dv))
  );
};
B.typeOf = De;
Bd.exports = B;
var vv = Bd.exports,
  Hr = (function () {
    function e() {
      this.listeners = [];
    }
    var t = e.prototype;
    return (
      (t.subscribe = function (r) {
        var i = this,
          o = r || function () {};
        return (
          this.listeners.push(o),
          this.onSubscribe(),
          function () {
            (i.listeners = i.listeners.filter(function (u) {
              return u !== o;
            })),
              i.onUnsubscribe();
          }
        );
      }),
      (t.hasListeners = function () {
        return this.listeners.length > 0;
      }),
      (t.onSubscribe = function () {}),
      (t.onUnsubscribe = function () {}),
      e
    );
  })(),
  Ji = typeof window > "u";
function ge() {}
function yv(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ia(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function eo(e) {
  return Array.isArray(e) ? e : [e];
}
function Wd(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function wi(e, t, n) {
  return Do(e)
    ? typeof t == "function"
      ? M({}, n, { queryKey: e, queryFn: t })
      : M({}, t, { queryKey: e })
    : e;
}
function mt(e, t, n) {
  return Do(e) ? [M({}, t, { queryKey: e }), n] : [e || {}, t];
}
function gv(e, t) {
  if ((e === !0 && t === !0) || (e == null && t == null)) return "all";
  if (e === !1 && t === !1) return "none";
  var n = e ?? !t;
  return n ? "active" : "inactive";
}
function nc(e, t) {
  var n = e.active,
    r = e.exact,
    i = e.fetching,
    o = e.inactive,
    u = e.predicate,
    a = e.queryKey,
    l = e.stale;
  if (Do(a)) {
    if (r) {
      if (t.queryHash !== Ol(a, t.options)) return !1;
    } else if (!to(t.queryKey, a)) return !1;
  }
  var s = gv(n, o);
  if (s === "none") return !1;
  if (s !== "all") {
    var f = t.isActive();
    if ((s === "active" && !f) || (s === "inactive" && f)) return !1;
  }
  return !(
    (typeof l == "boolean" && t.isStale() !== l) ||
    (typeof i == "boolean" && t.isFetching() !== i) ||
    (u && !u(t))
  );
}
function rc(e, t) {
  var n = e.exact,
    r = e.fetching,
    i = e.predicate,
    o = e.mutationKey;
  if (Do(o)) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (zt(t.options.mutationKey) !== zt(o)) return !1;
    } else if (!to(t.options.mutationKey, o)) return !1;
  }
  return !(
    (typeof r == "boolean" && (t.state.status === "loading") !== r) ||
    (i && !i(t))
  );
}
function Ol(e, t) {
  var n = (t == null ? void 0 : t.queryKeyHashFn) || zt;
  return n(e);
}
function zt(e) {
  var t = eo(e);
  return wv(t);
}
function wv(e) {
  return JSON.stringify(e, function (t, n) {
    return oa(n)
      ? Object.keys(n)
          .sort()
          .reduce(function (r, i) {
            return (r[i] = n[i]), r;
          }, {})
      : n;
  });
}
function to(e, t) {
  return Kd(eo(e), eo(t));
}
function Kd(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some(function (n) {
        return !Kd(e[n], t[n]);
      })
    : !1;
}
function no(e, t) {
  if (e === t) return e;
  var n = Array.isArray(e) && Array.isArray(t);
  if (n || (oa(e) && oa(t))) {
    for (
      var r = n ? e.length : Object.keys(e).length,
        i = n ? t : Object.keys(t),
        o = i.length,
        u = n ? [] : {},
        a = 0,
        l = 0;
      l < o;
      l++
    ) {
      var s = n ? l : i[l];
      (u[s] = no(e[s], t[s])), u[s] === e[s] && a++;
    }
    return r === o && a === r ? e : u;
  }
  return t;
}
function Sv(e, t) {
  if ((e && !t) || (t && !e)) return !1;
  for (var n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function oa(e) {
  if (!ic(e)) return !1;
  var t = e.constructor;
  if (typeof t > "u") return !0;
  var n = t.prototype;
  return !(!ic(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function ic(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Do(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Ov(e) {
  return new Promise(function (t) {
    setTimeout(t, e);
  });
}
function oc(e) {
  Promise.resolve()
    .then(e)
    .catch(function (t) {
      return setTimeout(function () {
        throw t;
      });
    });
}
function Yd() {
  if (typeof AbortController == "function") return new AbortController();
}
var Cv = (function (e) {
    zr(t, e);
    function t() {
      var r;
      return (
        (r = e.call(this) || this),
        (r.setup = function (i) {
          var o;
          if (!Ji && (o = window) != null && o.addEventListener) {
            var u = function () {
              return i();
            };
            return (
              window.addEventListener("visibilitychange", u, !1),
              window.addEventListener("focus", u, !1),
              function () {
                window.removeEventListener("visibilitychange", u),
                  window.removeEventListener("focus", u);
              }
            );
          }
        }),
        r
      );
    }
    var n = t.prototype;
    return (
      (n.onSubscribe = function () {
        this.cleanup || this.setEventListener(this.setup);
      }),
      (n.onUnsubscribe = function () {
        if (!this.hasListeners()) {
          var i;
          (i = this.cleanup) == null || i.call(this), (this.cleanup = void 0);
        }
      }),
      (n.setEventListener = function (i) {
        var o,
          u = this;
        (this.setup = i),
          (o = this.cleanup) == null || o.call(this),
          (this.cleanup = i(function (a) {
            typeof a == "boolean" ? u.setFocused(a) : u.onFocus();
          }));
      }),
      (n.setFocused = function (i) {
        (this.focused = i), i && this.onFocus();
      }),
      (n.onFocus = function () {
        this.listeners.forEach(function (i) {
          i();
        });
      }),
      (n.isFocused = function () {
        return typeof this.focused == "boolean"
          ? this.focused
          : typeof document > "u"
          ? !0
          : [void 0, "visible", "prerender"].includes(document.visibilityState);
      }),
      t
    );
  })(Hr),
  mr = new Cv(),
  bv = (function (e) {
    zr(t, e);
    function t() {
      var r;
      return (
        (r = e.call(this) || this),
        (r.setup = function (i) {
          var o;
          if (!Ji && (o = window) != null && o.addEventListener) {
            var u = function () {
              return i();
            };
            return (
              window.addEventListener("online", u, !1),
              window.addEventListener("offline", u, !1),
              function () {
                window.removeEventListener("online", u),
                  window.removeEventListener("offline", u);
              }
            );
          }
        }),
        r
      );
    }
    var n = t.prototype;
    return (
      (n.onSubscribe = function () {
        this.cleanup || this.setEventListener(this.setup);
      }),
      (n.onUnsubscribe = function () {
        if (!this.hasListeners()) {
          var i;
          (i = this.cleanup) == null || i.call(this), (this.cleanup = void 0);
        }
      }),
      (n.setEventListener = function (i) {
        var o,
          u = this;
        (this.setup = i),
          (o = this.cleanup) == null || o.call(this),
          (this.cleanup = i(function (a) {
            typeof a == "boolean" ? u.setOnline(a) : u.onOnline();
          }));
      }),
      (n.setOnline = function (i) {
        (this.online = i), i && this.onOnline();
      }),
      (n.onOnline = function () {
        this.listeners.forEach(function (i) {
          i();
        });
      }),
      (n.isOnline = function () {
        return typeof this.online == "boolean"
          ? this.online
          : typeof navigator > "u" || typeof navigator.onLine > "u"
          ? !0
          : navigator.onLine;
      }),
      t
    );
  })(Hr),
  Si = new bv();
function Ev(e) {
  return Math.min(1e3 * Math.pow(2, e), 3e4);
}
function ro(e) {
  return typeof (e == null ? void 0 : e.cancel) == "function";
}
var Gd = function (t) {
  (this.revert = t == null ? void 0 : t.revert),
    (this.silent = t == null ? void 0 : t.silent);
};
function Oi(e) {
  return e instanceof Gd;
}
var Xd = function (t) {
    var n = this,
      r = !1,
      i,
      o,
      u,
      a;
    (this.abort = t.abort),
      (this.cancel = function (h) {
        return i == null ? void 0 : i(h);
      }),
      (this.cancelRetry = function () {
        r = !0;
      }),
      (this.continueRetry = function () {
        r = !1;
      }),
      (this.continue = function () {
        return o == null ? void 0 : o();
      }),
      (this.failureCount = 0),
      (this.isPaused = !1),
      (this.isResolved = !1),
      (this.isTransportCancelable = !1),
      (this.promise = new Promise(function (h, y) {
        (u = h), (a = y);
      }));
    var l = function (y) {
        n.isResolved ||
          ((n.isResolved = !0),
          t.onSuccess == null || t.onSuccess(y),
          o == null || o(),
          u(y));
      },
      s = function (y) {
        n.isResolved ||
          ((n.isResolved = !0),
          t.onError == null || t.onError(y),
          o == null || o(),
          a(y));
      },
      f = function () {
        return new Promise(function (y) {
          (o = y), (n.isPaused = !0), t.onPause == null || t.onPause();
        }).then(function () {
          (o = void 0),
            (n.isPaused = !1),
            t.onContinue == null || t.onContinue();
        });
      },
      m = function h() {
        if (!n.isResolved) {
          var y;
          try {
            y = t.fn();
          } catch (w) {
            y = Promise.reject(w);
          }
          (i = function (S) {
            if (
              !n.isResolved &&
              (s(new Gd(S)), n.abort == null || n.abort(), ro(y))
            )
              try {
                y.cancel();
              } catch {}
          }),
            (n.isTransportCancelable = ro(y)),
            Promise.resolve(y)
              .then(l)
              .catch(function (w) {
                var S, d;
                if (!n.isResolved) {
                  var c = (S = t.retry) != null ? S : 3,
                    p = (d = t.retryDelay) != null ? d : Ev,
                    v = typeof p == "function" ? p(n.failureCount, w) : p,
                    O =
                      c === !0 ||
                      (typeof c == "number" && n.failureCount < c) ||
                      (typeof c == "function" && c(n.failureCount, w));
                  if (r || !O) {
                    s(w);
                    return;
                  }
                  n.failureCount++,
                    t.onFail == null || t.onFail(n.failureCount, w),
                    Ov(v)
                      .then(function () {
                        if (!mr.isFocused() || !Si.isOnline()) return f();
                      })
                      .then(function () {
                        r ? s(w) : h();
                      });
                }
              });
        }
      };
    m();
  },
  Pv = (function () {
    function e() {
      (this.queue = []),
        (this.transactions = 0),
        (this.notifyFn = function (n) {
          n();
        }),
        (this.batchNotifyFn = function (n) {
          n();
        });
    }
    var t = e.prototype;
    return (
      (t.batch = function (r) {
        this.transactions++;
        var i = r();
        return this.transactions--, this.transactions || this.flush(), i;
      }),
      (t.schedule = function (r) {
        var i = this;
        this.transactions
          ? this.queue.push(r)
          : oc(function () {
              i.notifyFn(r);
            });
      }),
      (t.batchCalls = function (r) {
        var i = this;
        return function () {
          for (var o = arguments.length, u = new Array(o), a = 0; a < o; a++)
            u[a] = arguments[a];
          i.schedule(function () {
            r.apply(void 0, u);
          });
        };
      }),
      (t.flush = function () {
        var r = this,
          i = this.queue;
        (this.queue = []),
          i.length &&
            oc(function () {
              r.batchNotifyFn(function () {
                i.forEach(function (o) {
                  r.notifyFn(o);
                });
              });
            });
      }),
      (t.setNotifyFunction = function (r) {
        this.notifyFn = r;
      }),
      (t.setBatchNotifyFunction = function (r) {
        this.batchNotifyFn = r;
      }),
      e
    );
  })(),
  re = new Pv(),
  Zd = console;
function io() {
  return Zd;
}
function xv(e) {
  Zd = e;
}
var kv = (function () {
    function e(n) {
      (this.abortSignalConsumed = !1),
        (this.hadObservers = !1),
        (this.defaultOptions = n.defaultOptions),
        this.setOptions(n.options),
        (this.observers = []),
        (this.cache = n.cache),
        (this.queryKey = n.queryKey),
        (this.queryHash = n.queryHash),
        (this.initialState = n.state || this.getDefaultState(this.options)),
        (this.state = this.initialState),
        (this.meta = n.meta),
        this.scheduleGc();
    }
    var t = e.prototype;
    return (
      (t.setOptions = function (r) {
        var i;
        (this.options = M({}, this.defaultOptions, r)),
          (this.meta = r == null ? void 0 : r.meta),
          (this.cacheTime = Math.max(
            this.cacheTime || 0,
            (i = this.options.cacheTime) != null ? i : 5 * 60 * 1e3
          ));
      }),
      (t.setDefaultOptions = function (r) {
        this.defaultOptions = r;
      }),
      (t.scheduleGc = function () {
        var r = this;
        this.clearGcTimeout(),
          ia(this.cacheTime) &&
            (this.gcTimeout = setTimeout(function () {
              r.optionalRemove();
            }, this.cacheTime));
      }),
      (t.clearGcTimeout = function () {
        clearTimeout(this.gcTimeout), (this.gcTimeout = void 0);
      }),
      (t.optionalRemove = function () {
        this.observers.length ||
          (this.state.isFetching
            ? this.hadObservers && this.scheduleGc()
            : this.cache.remove(this));
      }),
      (t.setData = function (r, i) {
        var o,
          u,
          a = this.state.data,
          l = yv(r, a);
        return (
          (o = (u = this.options).isDataEqual) != null && o.call(u, a, l)
            ? (l = a)
            : this.options.structuralSharing !== !1 && (l = no(a, l)),
          this.dispatch({
            data: l,
            type: "success",
            dataUpdatedAt: i == null ? void 0 : i.updatedAt,
          }),
          l
        );
      }),
      (t.setState = function (r, i) {
        this.dispatch({ type: "setState", state: r, setStateOptions: i });
      }),
      (t.cancel = function (r) {
        var i,
          o = this.promise;
        return (
          (i = this.retryer) == null || i.cancel(r),
          o ? o.then(ge).catch(ge) : Promise.resolve()
        );
      }),
      (t.destroy = function () {
        this.clearGcTimeout(), this.cancel({ silent: !0 });
      }),
      (t.reset = function () {
        this.destroy(), this.setState(this.initialState);
      }),
      (t.isActive = function () {
        return this.observers.some(function (r) {
          return r.options.enabled !== !1;
        });
      }),
      (t.isFetching = function () {
        return this.state.isFetching;
      }),
      (t.isStale = function () {
        return (
          this.state.isInvalidated ||
          !this.state.dataUpdatedAt ||
          this.observers.some(function (r) {
            return r.getCurrentResult().isStale;
          })
        );
      }),
      (t.isStaleByTime = function (r) {
        return (
          r === void 0 && (r = 0),
          this.state.isInvalidated ||
            !this.state.dataUpdatedAt ||
            !Wd(this.state.dataUpdatedAt, r)
        );
      }),
      (t.onFocus = function () {
        var r,
          i = this.observers.find(function (o) {
            return o.shouldFetchOnWindowFocus();
          });
        i && i.refetch(), (r = this.retryer) == null || r.continue();
      }),
      (t.onOnline = function () {
        var r,
          i = this.observers.find(function (o) {
            return o.shouldFetchOnReconnect();
          });
        i && i.refetch(), (r = this.retryer) == null || r.continue();
      }),
      (t.addObserver = function (r) {
        this.observers.indexOf(r) === -1 &&
          (this.observers.push(r),
          (this.hadObservers = !0),
          this.clearGcTimeout(),
          this.cache.notify({
            type: "observerAdded",
            query: this,
            observer: r,
          }));
      }),
      (t.removeObserver = function (r) {
        this.observers.indexOf(r) !== -1 &&
          ((this.observers = this.observers.filter(function (i) {
            return i !== r;
          })),
          this.observers.length ||
            (this.retryer &&
              (this.retryer.isTransportCancelable || this.abortSignalConsumed
                ? this.retryer.cancel({ revert: !0 })
                : this.retryer.cancelRetry()),
            this.cacheTime ? this.scheduleGc() : this.cache.remove(this)),
          this.cache.notify({
            type: "observerRemoved",
            query: this,
            observer: r,
          }));
      }),
      (t.getObserversCount = function () {
        return this.observers.length;
      }),
      (t.invalidate = function () {
        this.state.isInvalidated || this.dispatch({ type: "invalidate" });
      }),
      (t.fetch = function (r, i) {
        var o = this,
          u,
          a,
          l;
        if (this.state.isFetching) {
          if (this.state.dataUpdatedAt && i != null && i.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (this.promise) {
            var s;
            return (
              (s = this.retryer) == null || s.continueRetry(), this.promise
            );
          }
        }
        if ((r && this.setOptions(r), !this.options.queryFn)) {
          var f = this.observers.find(function (p) {
            return p.options.queryFn;
          });
          f && this.setOptions(f.options);
        }
        var m = eo(this.queryKey),
          h = Yd(),
          y = { queryKey: m, pageParam: void 0, meta: this.meta };
        Object.defineProperty(y, "signal", {
          enumerable: !0,
          get: function () {
            if (h) return (o.abortSignalConsumed = !0), h.signal;
          },
        });
        var w = function () {
            return o.options.queryFn
              ? ((o.abortSignalConsumed = !1), o.options.queryFn(y))
              : Promise.reject("Missing queryFn");
          },
          S = {
            fetchOptions: i,
            options: this.options,
            queryKey: m,
            state: this.state,
            fetchFn: w,
            meta: this.meta,
          };
        if ((u = this.options.behavior) != null && u.onFetch) {
          var d;
          (d = this.options.behavior) == null || d.onFetch(S);
        }
        if (
          ((this.revertState = this.state),
          !this.state.isFetching ||
            this.state.fetchMeta !==
              ((a = S.fetchOptions) == null ? void 0 : a.meta))
        ) {
          var c;
          this.dispatch({
            type: "fetch",
            meta: (c = S.fetchOptions) == null ? void 0 : c.meta,
          });
        }
        return (
          (this.retryer = new Xd({
            fn: S.fetchFn,
            abort: h == null || (l = h.abort) == null ? void 0 : l.bind(h),
            onSuccess: function (v) {
              o.setData(v),
                o.cache.config.onSuccess == null ||
                  o.cache.config.onSuccess(v, o),
                o.cacheTime === 0 && o.optionalRemove();
            },
            onError: function (v) {
              (Oi(v) && v.silent) || o.dispatch({ type: "error", error: v }),
                Oi(v) ||
                  (o.cache.config.onError == null ||
                    o.cache.config.onError(v, o),
                  io().error(v)),
                o.cacheTime === 0 && o.optionalRemove();
            },
            onFail: function () {
              o.dispatch({ type: "failed" });
            },
            onPause: function () {
              o.dispatch({ type: "pause" });
            },
            onContinue: function () {
              o.dispatch({ type: "continue" });
            },
            retry: S.options.retry,
            retryDelay: S.options.retryDelay,
          })),
          (this.promise = this.retryer.promise),
          this.promise
        );
      }),
      (t.dispatch = function (r) {
        var i = this;
        (this.state = this.reducer(this.state, r)),
          re.batch(function () {
            i.observers.forEach(function (o) {
              o.onQueryUpdate(r);
            }),
              i.cache.notify({ query: i, type: "queryUpdated", action: r });
          });
      }),
      (t.getDefaultState = function (r) {
        var i =
            typeof r.initialData == "function"
              ? r.initialData()
              : r.initialData,
          o = typeof r.initialData < "u",
          u = o
            ? typeof r.initialDataUpdatedAt == "function"
              ? r.initialDataUpdatedAt()
              : r.initialDataUpdatedAt
            : 0,
          a = typeof i < "u";
        return {
          data: i,
          dataUpdateCount: 0,
          dataUpdatedAt: a ? u ?? Date.now() : 0,
          error: null,
          errorUpdateCount: 0,
          errorUpdatedAt: 0,
          fetchFailureCount: 0,
          fetchMeta: null,
          isFetching: !1,
          isInvalidated: !1,
          isPaused: !1,
          status: a ? "success" : "idle",
        };
      }),
      (t.reducer = function (r, i) {
        var o, u;
        switch (i.type) {
          case "failed":
            return M({}, r, { fetchFailureCount: r.fetchFailureCount + 1 });
          case "pause":
            return M({}, r, { isPaused: !0 });
          case "continue":
            return M({}, r, { isPaused: !1 });
          case "fetch":
            return M(
              {},
              r,
              {
                fetchFailureCount: 0,
                fetchMeta: (o = i.meta) != null ? o : null,
                isFetching: !0,
                isPaused: !1,
              },
              !r.dataUpdatedAt && { error: null, status: "loading" }
            );
          case "success":
            return M({}, r, {
              data: i.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: (u = i.dataUpdatedAt) != null ? u : Date.now(),
              error: null,
              fetchFailureCount: 0,
              isFetching: !1,
              isInvalidated: !1,
              isPaused: !1,
              status: "success",
            });
          case "error":
            var a = i.error;
            return Oi(a) && a.revert && this.revertState
              ? M({}, this.revertState)
              : M({}, r, {
                  error: a,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  isFetching: !1,
                  isPaused: !1,
                  status: "error",
                });
          case "invalidate":
            return M({}, r, { isInvalidated: !0 });
          case "setState":
            return M({}, r, i.state);
          default:
            return r;
        }
      }),
      e
    );
  })(),
  Mv = (function (e) {
    zr(t, e);
    function t(r) {
      var i;
      return (
        (i = e.call(this) || this),
        (i.config = r || {}),
        (i.queries = []),
        (i.queriesMap = {}),
        i
      );
    }
    var n = t.prototype;
    return (
      (n.build = function (i, o, u) {
        var a,
          l = o.queryKey,
          s = (a = o.queryHash) != null ? a : Ol(l, o),
          f = this.get(s);
        return (
          f ||
            ((f = new kv({
              cache: this,
              queryKey: l,
              queryHash: s,
              options: i.defaultQueryOptions(o),
              state: u,
              defaultOptions: i.getQueryDefaults(l),
              meta: o.meta,
            })),
            this.add(f)),
          f
        );
      }),
      (n.add = function (i) {
        this.queriesMap[i.queryHash] ||
          ((this.queriesMap[i.queryHash] = i),
          this.queries.push(i),
          this.notify({ type: "queryAdded", query: i }));
      }),
      (n.remove = function (i) {
        var o = this.queriesMap[i.queryHash];
        o &&
          (i.destroy(),
          (this.queries = this.queries.filter(function (u) {
            return u !== i;
          })),
          o === i && delete this.queriesMap[i.queryHash],
          this.notify({ type: "queryRemoved", query: i }));
      }),
      (n.clear = function () {
        var i = this;
        re.batch(function () {
          i.queries.forEach(function (o) {
            i.remove(o);
          });
        });
      }),
      (n.get = function (i) {
        return this.queriesMap[i];
      }),
      (n.getAll = function () {
        return this.queries;
      }),
      (n.find = function (i, o) {
        var u = mt(i, o),
          a = u[0];
        return (
          typeof a.exact > "u" && (a.exact = !0),
          this.queries.find(function (l) {
            return nc(a, l);
          })
        );
      }),
      (n.findAll = function (i, o) {
        var u = mt(i, o),
          a = u[0];
        return Object.keys(a).length > 0
          ? this.queries.filter(function (l) {
              return nc(a, l);
            })
          : this.queries;
      }),
      (n.notify = function (i) {
        var o = this;
        re.batch(function () {
          o.listeners.forEach(function (u) {
            u(i);
          });
        });
      }),
      (n.onFocus = function () {
        var i = this;
        re.batch(function () {
          i.queries.forEach(function (o) {
            o.onFocus();
          });
        });
      }),
      (n.onOnline = function () {
        var i = this;
        re.batch(function () {
          i.queries.forEach(function (o) {
            o.onOnline();
          });
        });
      }),
      t
    );
  })(Hr),
  Tv = (function () {
    function e(n) {
      (this.options = M({}, n.defaultOptions, n.options)),
        (this.mutationId = n.mutationId),
        (this.mutationCache = n.mutationCache),
        (this.observers = []),
        (this.state = n.state || Rv()),
        (this.meta = n.meta);
    }
    var t = e.prototype;
    return (
      (t.setState = function (r) {
        this.dispatch({ type: "setState", state: r });
      }),
      (t.addObserver = function (r) {
        this.observers.indexOf(r) === -1 && this.observers.push(r);
      }),
      (t.removeObserver = function (r) {
        this.observers = this.observers.filter(function (i) {
          return i !== r;
        });
      }),
      (t.cancel = function () {
        return this.retryer
          ? (this.retryer.cancel(), this.retryer.promise.then(ge).catch(ge))
          : Promise.resolve();
      }),
      (t.continue = function () {
        return this.retryer
          ? (this.retryer.continue(), this.retryer.promise)
          : this.execute();
      }),
      (t.execute = function () {
        var r = this,
          i,
          o = this.state.status === "loading",
          u = Promise.resolve();
        return (
          o ||
            (this.dispatch({
              type: "loading",
              variables: this.options.variables,
            }),
            (u = u
              .then(function () {
                r.mutationCache.config.onMutate == null ||
                  r.mutationCache.config.onMutate(r.state.variables, r);
              })
              .then(function () {
                return r.options.onMutate == null
                  ? void 0
                  : r.options.onMutate(r.state.variables);
              })
              .then(function (a) {
                a !== r.state.context &&
                  r.dispatch({
                    type: "loading",
                    context: a,
                    variables: r.state.variables,
                  });
              }))),
          u
            .then(function () {
              return r.executeMutation();
            })
            .then(function (a) {
              (i = a),
                r.mutationCache.config.onSuccess == null ||
                  r.mutationCache.config.onSuccess(
                    i,
                    r.state.variables,
                    r.state.context,
                    r
                  );
            })
            .then(function () {
              return r.options.onSuccess == null
                ? void 0
                : r.options.onSuccess(i, r.state.variables, r.state.context);
            })
            .then(function () {
              return r.options.onSettled == null
                ? void 0
                : r.options.onSettled(
                    i,
                    null,
                    r.state.variables,
                    r.state.context
                  );
            })
            .then(function () {
              return r.dispatch({ type: "success", data: i }), i;
            })
            .catch(function (a) {
              return (
                r.mutationCache.config.onError == null ||
                  r.mutationCache.config.onError(
                    a,
                    r.state.variables,
                    r.state.context,
                    r
                  ),
                io().error(a),
                Promise.resolve()
                  .then(function () {
                    return r.options.onError == null
                      ? void 0
                      : r.options.onError(
                          a,
                          r.state.variables,
                          r.state.context
                        );
                  })
                  .then(function () {
                    return r.options.onSettled == null
                      ? void 0
                      : r.options.onSettled(
                          void 0,
                          a,
                          r.state.variables,
                          r.state.context
                        );
                  })
                  .then(function () {
                    throw (r.dispatch({ type: "error", error: a }), a);
                  })
              );
            })
        );
      }),
      (t.executeMutation = function () {
        var r = this,
          i;
        return (
          (this.retryer = new Xd({
            fn: function () {
              return r.options.mutationFn
                ? r.options.mutationFn(r.state.variables)
                : Promise.reject("No mutationFn found");
            },
            onFail: function () {
              r.dispatch({ type: "failed" });
            },
            onPause: function () {
              r.dispatch({ type: "pause" });
            },
            onContinue: function () {
              r.dispatch({ type: "continue" });
            },
            retry: (i = this.options.retry) != null ? i : 0,
            retryDelay: this.options.retryDelay,
          })),
          this.retryer.promise
        );
      }),
      (t.dispatch = function (r) {
        var i = this;
        (this.state = _v(this.state, r)),
          re.batch(function () {
            i.observers.forEach(function (o) {
              o.onMutationUpdate(r);
            }),
              i.mutationCache.notify(i);
          });
      }),
      e
    );
  })();
function Rv() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    isPaused: !1,
    status: "idle",
    variables: void 0,
  };
}
function _v(e, t) {
  switch (t.type) {
    case "failed":
      return M({}, e, { failureCount: e.failureCount + 1 });
    case "pause":
      return M({}, e, { isPaused: !0 });
    case "continue":
      return M({}, e, { isPaused: !1 });
    case "loading":
      return M({}, e, {
        context: t.context,
        data: void 0,
        error: null,
        isPaused: !1,
        status: "loading",
        variables: t.variables,
      });
    case "success":
      return M({}, e, {
        data: t.data,
        error: null,
        status: "success",
        isPaused: !1,
      });
    case "error":
      return M({}, e, {
        data: void 0,
        error: t.error,
        failureCount: e.failureCount + 1,
        isPaused: !1,
        status: "error",
      });
    case "setState":
      return M({}, e, t.state);
    default:
      return e;
  }
}
var Iv = (function (e) {
  zr(t, e);
  function t(r) {
    var i;
    return (
      (i = e.call(this) || this),
      (i.config = r || {}),
      (i.mutations = []),
      (i.mutationId = 0),
      i
    );
  }
  var n = t.prototype;
  return (
    (n.build = function (i, o, u) {
      var a = new Tv({
        mutationCache: this,
        mutationId: ++this.mutationId,
        options: i.defaultMutationOptions(o),
        state: u,
        defaultOptions: o.mutationKey
          ? i.getMutationDefaults(o.mutationKey)
          : void 0,
        meta: o.meta,
      });
      return this.add(a), a;
    }),
    (n.add = function (i) {
      this.mutations.push(i), this.notify(i);
    }),
    (n.remove = function (i) {
      (this.mutations = this.mutations.filter(function (o) {
        return o !== i;
      })),
        i.cancel(),
        this.notify(i);
    }),
    (n.clear = function () {
      var i = this;
      re.batch(function () {
        i.mutations.forEach(function (o) {
          i.remove(o);
        });
      });
    }),
    (n.getAll = function () {
      return this.mutations;
    }),
    (n.find = function (i) {
      return (
        typeof i.exact > "u" && (i.exact = !0),
        this.mutations.find(function (o) {
          return rc(i, o);
        })
      );
    }),
    (n.findAll = function (i) {
      return this.mutations.filter(function (o) {
        return rc(i, o);
      });
    }),
    (n.notify = function (i) {
      var o = this;
      re.batch(function () {
        o.listeners.forEach(function (u) {
          u(i);
        });
      });
    }),
    (n.onFocus = function () {
      this.resumePausedMutations();
    }),
    (n.onOnline = function () {
      this.resumePausedMutations();
    }),
    (n.resumePausedMutations = function () {
      var i = this.mutations.filter(function (o) {
        return o.state.isPaused;
      });
      return re.batch(function () {
        return i.reduce(function (o, u) {
          return o.then(function () {
            return u.continue().catch(ge);
          });
        }, Promise.resolve());
      });
    }),
    t
  );
})(Hr);
function Fv() {
  return {
    onFetch: function (t) {
      t.fetchFn = function () {
        var n,
          r,
          i,
          o,
          u,
          a,
          l =
            (n = t.fetchOptions) == null || (r = n.meta) == null
              ? void 0
              : r.refetchPage,
          s =
            (i = t.fetchOptions) == null || (o = i.meta) == null
              ? void 0
              : o.fetchMore,
          f = s == null ? void 0 : s.pageParam,
          m = (s == null ? void 0 : s.direction) === "forward",
          h = (s == null ? void 0 : s.direction) === "backward",
          y = ((u = t.state.data) == null ? void 0 : u.pages) || [],
          w = ((a = t.state.data) == null ? void 0 : a.pageParams) || [],
          S = Yd(),
          d = S == null ? void 0 : S.signal,
          c = w,
          p = !1,
          v =
            t.options.queryFn ||
            function () {
              return Promise.reject("Missing queryFn");
            },
          O = function (U, V, W, ee) {
            return (
              (c = ee ? [V].concat(c) : [].concat(c, [V])),
              ee ? [W].concat(U) : [].concat(U, [W])
            );
          },
          P = function (U, V, W, ee) {
            if (p) return Promise.reject("Cancelled");
            if (typeof W > "u" && !V && U.length) return Promise.resolve(U);
            var te = {
                queryKey: t.queryKey,
                signal: d,
                pageParam: W,
                meta: t.meta,
              },
              ue = v(te),
              be = Promise.resolve(ue).then(function (I) {
                return O(U, W, I, ee);
              });
            if (ro(ue)) {
              var x = be;
              x.cancel = ue.cancel;
            }
            return be;
          },
          C;
        if (!y.length) C = P([]);
        else if (m) {
          var b = typeof f < "u",
            R = b ? f : uc(t.options, y);
          C = P(y, b, R);
        } else if (h) {
          var T = typeof f < "u",
            A = T ? f : Lv(t.options, y);
          C = P(y, T, A, !0);
        } else
          (function () {
            c = [];
            var N = typeof t.options.getNextPageParam > "u",
              U = l && y[0] ? l(y[0], 0, y) : !0;
            C = U ? P([], N, w[0]) : Promise.resolve(O([], w[0], y[0]));
            for (
              var V = function (te) {
                  C = C.then(function (ue) {
                    var be = l && y[te] ? l(y[te], te, y) : !0;
                    if (be) {
                      var x = N ? w[te] : uc(t.options, ue);
                      return P(ue, N, x);
                    }
                    return Promise.resolve(O(ue, w[te], y[te]));
                  });
                },
                W = 1;
              W < y.length;
              W++
            )
              V(W);
          })();
        var q = C.then(function (N) {
            return { pages: N, pageParams: c };
          }),
          Q = q;
        return (
          (Q.cancel = function () {
            (p = !0), S == null || S.abort(), ro(C) && C.cancel();
          }),
          q
        );
      };
    },
  };
}
function uc(e, t) {
  return e.getNextPageParam == null
    ? void 0
    : e.getNextPageParam(t[t.length - 1], t);
}
function Lv(e, t) {
  return e.getPreviousPageParam == null
    ? void 0
    : e.getPreviousPageParam(t[0], t);
}
var Ow = (function () {
    function e(n) {
      n === void 0 && (n = {}),
        (this.queryCache = n.queryCache || new Mv()),
        (this.mutationCache = n.mutationCache || new Iv()),
        (this.defaultOptions = n.defaultOptions || {}),
        (this.queryDefaults = []),
        (this.mutationDefaults = []);
    }
    var t = e.prototype;
    return (
      (t.mount = function () {
        var r = this;
        (this.unsubscribeFocus = mr.subscribe(function () {
          mr.isFocused() &&
            Si.isOnline() &&
            (r.mutationCache.onFocus(), r.queryCache.onFocus());
        })),
          (this.unsubscribeOnline = Si.subscribe(function () {
            mr.isFocused() &&
              Si.isOnline() &&
              (r.mutationCache.onOnline(), r.queryCache.onOnline());
          }));
      }),
      (t.unmount = function () {
        var r, i;
        (r = this.unsubscribeFocus) == null || r.call(this),
          (i = this.unsubscribeOnline) == null || i.call(this);
      }),
      (t.isFetching = function (r, i) {
        var o = mt(r, i),
          u = o[0];
        return (u.fetching = !0), this.queryCache.findAll(u).length;
      }),
      (t.isMutating = function (r) {
        return this.mutationCache.findAll(M({}, r, { fetching: !0 })).length;
      }),
      (t.getQueryData = function (r, i) {
        var o;
        return (o = this.queryCache.find(r, i)) == null ? void 0 : o.state.data;
      }),
      (t.getQueriesData = function (r) {
        return this.getQueryCache()
          .findAll(r)
          .map(function (i) {
            var o = i.queryKey,
              u = i.state,
              a = u.data;
            return [o, a];
          });
      }),
      (t.setQueryData = function (r, i, o) {
        var u = wi(r),
          a = this.defaultQueryOptions(u);
        return this.queryCache.build(this, a).setData(i, o);
      }),
      (t.setQueriesData = function (r, i, o) {
        var u = this;
        return re.batch(function () {
          return u
            .getQueryCache()
            .findAll(r)
            .map(function (a) {
              var l = a.queryKey;
              return [l, u.setQueryData(l, i, o)];
            });
        });
      }),
      (t.getQueryState = function (r, i) {
        var o;
        return (o = this.queryCache.find(r, i)) == null ? void 0 : o.state;
      }),
      (t.removeQueries = function (r, i) {
        var o = mt(r, i),
          u = o[0],
          a = this.queryCache;
        re.batch(function () {
          a.findAll(u).forEach(function (l) {
            a.remove(l);
          });
        });
      }),
      (t.resetQueries = function (r, i, o) {
        var u = this,
          a = mt(r, i, o),
          l = a[0],
          s = a[1],
          f = this.queryCache,
          m = M({}, l, { active: !0 });
        return re.batch(function () {
          return (
            f.findAll(l).forEach(function (h) {
              h.reset();
            }),
            u.refetchQueries(m, s)
          );
        });
      }),
      (t.cancelQueries = function (r, i, o) {
        var u = this,
          a = mt(r, i, o),
          l = a[0],
          s = a[1],
          f = s === void 0 ? {} : s;
        typeof f.revert > "u" && (f.revert = !0);
        var m = re.batch(function () {
          return u.queryCache.findAll(l).map(function (h) {
            return h.cancel(f);
          });
        });
        return Promise.all(m).then(ge).catch(ge);
      }),
      (t.invalidateQueries = function (r, i, o) {
        var u,
          a,
          l,
          s = this,
          f = mt(r, i, o),
          m = f[0],
          h = f[1],
          y = M({}, m, {
            active:
              (u = (a = m.refetchActive) != null ? a : m.active) != null
                ? u
                : !0,
            inactive: (l = m.refetchInactive) != null ? l : !1,
          });
        return re.batch(function () {
          return (
            s.queryCache.findAll(m).forEach(function (w) {
              w.invalidate();
            }),
            s.refetchQueries(y, h)
          );
        });
      }),
      (t.refetchQueries = function (r, i, o) {
        var u = this,
          a = mt(r, i, o),
          l = a[0],
          s = a[1],
          f = re.batch(function () {
            return u.queryCache.findAll(l).map(function (h) {
              return h.fetch(
                void 0,
                M({}, s, {
                  meta: { refetchPage: l == null ? void 0 : l.refetchPage },
                })
              );
            });
          }),
          m = Promise.all(f).then(ge);
        return (s != null && s.throwOnError) || (m = m.catch(ge)), m;
      }),
      (t.fetchQuery = function (r, i, o) {
        var u = wi(r, i, o),
          a = this.defaultQueryOptions(u);
        typeof a.retry > "u" && (a.retry = !1);
        var l = this.queryCache.build(this, a);
        return l.isStaleByTime(a.staleTime)
          ? l.fetch(a)
          : Promise.resolve(l.state.data);
      }),
      (t.prefetchQuery = function (r, i, o) {
        return this.fetchQuery(r, i, o).then(ge).catch(ge);
      }),
      (t.fetchInfiniteQuery = function (r, i, o) {
        var u = wi(r, i, o);
        return (u.behavior = Fv()), this.fetchQuery(u);
      }),
      (t.prefetchInfiniteQuery = function (r, i, o) {
        return this.fetchInfiniteQuery(r, i, o).then(ge).catch(ge);
      }),
      (t.cancelMutations = function () {
        var r = this,
          i = re.batch(function () {
            return r.mutationCache.getAll().map(function (o) {
              return o.cancel();
            });
          });
        return Promise.all(i).then(ge).catch(ge);
      }),
      (t.resumePausedMutations = function () {
        return this.getMutationCache().resumePausedMutations();
      }),
      (t.executeMutation = function (r) {
        return this.mutationCache.build(this, r).execute();
      }),
      (t.getQueryCache = function () {
        return this.queryCache;
      }),
      (t.getMutationCache = function () {
        return this.mutationCache;
      }),
      (t.getDefaultOptions = function () {
        return this.defaultOptions;
      }),
      (t.setDefaultOptions = function (r) {
        this.defaultOptions = r;
      }),
      (t.setQueryDefaults = function (r, i) {
        var o = this.queryDefaults.find(function (u) {
          return zt(r) === zt(u.queryKey);
        });
        o
          ? (o.defaultOptions = i)
          : this.queryDefaults.push({ queryKey: r, defaultOptions: i });
      }),
      (t.getQueryDefaults = function (r) {
        var i;
        return r
          ? (i = this.queryDefaults.find(function (o) {
              return to(r, o.queryKey);
            })) == null
            ? void 0
            : i.defaultOptions
          : void 0;
      }),
      (t.setMutationDefaults = function (r, i) {
        var o = this.mutationDefaults.find(function (u) {
          return zt(r) === zt(u.mutationKey);
        });
        o
          ? (o.defaultOptions = i)
          : this.mutationDefaults.push({ mutationKey: r, defaultOptions: i });
      }),
      (t.getMutationDefaults = function (r) {
        var i;
        return r
          ? (i = this.mutationDefaults.find(function (o) {
              return to(r, o.mutationKey);
            })) == null
            ? void 0
            : i.defaultOptions
          : void 0;
      }),
      (t.defaultQueryOptions = function (r) {
        if (r != null && r._defaulted) return r;
        var i = M(
          {},
          this.defaultOptions.queries,
          this.getQueryDefaults(r == null ? void 0 : r.queryKey),
          r,
          { _defaulted: !0 }
        );
        return (
          !i.queryHash && i.queryKey && (i.queryHash = Ol(i.queryKey, i)), i
        );
      }),
      (t.defaultQueryObserverOptions = function (r) {
        return this.defaultQueryOptions(r);
      }),
      (t.defaultMutationOptions = function (r) {
        return r != null && r._defaulted
          ? r
          : M(
              {},
              this.defaultOptions.mutations,
              this.getMutationDefaults(r == null ? void 0 : r.mutationKey),
              r,
              { _defaulted: !0 }
            );
      }),
      (t.clear = function () {
        this.queryCache.clear(), this.mutationCache.clear();
      }),
      e
    );
  })(),
  Nv = (function (e) {
    zr(t, e);
    function t(r, i) {
      var o;
      return (
        (o = e.call(this) || this),
        (o.client = r),
        (o.options = i),
        (o.trackedProps = []),
        (o.previousSelectError = null),
        o.bindMethods(),
        o.setOptions(i),
        o
      );
    }
    var n = t.prototype;
    return (
      (n.bindMethods = function () {
        (this.remove = this.remove.bind(this)),
          (this.refetch = this.refetch.bind(this));
      }),
      (n.onSubscribe = function () {
        this.listeners.length === 1 &&
          (this.currentQuery.addObserver(this),
          ac(this.currentQuery, this.options) && this.executeFetch(),
          this.updateTimers());
      }),
      (n.onUnsubscribe = function () {
        this.listeners.length || this.destroy();
      }),
      (n.shouldFetchOnReconnect = function () {
        return Vv(this.currentQuery, this.options);
      }),
      (n.shouldFetchOnWindowFocus = function () {
        return $v(this.currentQuery, this.options);
      }),
      (n.destroy = function () {
        (this.listeners = []),
          this.clearTimers(),
          this.currentQuery.removeObserver(this);
      }),
      (n.setOptions = function (i, o) {
        var u = this.options,
          a = this.currentQuery;
        if (
          ((this.options = this.client.defaultQueryObserverOptions(i)),
          typeof this.options.enabled < "u" &&
            typeof this.options.enabled != "boolean")
        )
          throw new Error("Expected enabled to be a boolean");
        this.options.queryKey || (this.options.queryKey = u.queryKey),
          this.updateQuery();
        var l = this.hasListeners();
        l && lc(this.currentQuery, a, this.options, u) && this.executeFetch(),
          this.updateResult(o),
          l &&
            (this.currentQuery !== a ||
              this.options.enabled !== u.enabled ||
              this.options.staleTime !== u.staleTime) &&
            this.updateStaleTimeout();
        var s = this.computeRefetchInterval();
        l &&
          (this.currentQuery !== a ||
            this.options.enabled !== u.enabled ||
            s !== this.currentRefetchInterval) &&
          this.updateRefetchInterval(s);
      }),
      (n.getOptimisticResult = function (i) {
        var o = this.client.defaultQueryObserverOptions(i),
          u = this.client.getQueryCache().build(this.client, o);
        return this.createResult(u, o);
      }),
      (n.getCurrentResult = function () {
        return this.currentResult;
      }),
      (n.trackResult = function (i, o) {
        var u = this,
          a = {},
          l = function (f) {
            u.trackedProps.includes(f) || u.trackedProps.push(f);
          };
        return (
          Object.keys(i).forEach(function (s) {
            Object.defineProperty(a, s, {
              configurable: !1,
              enumerable: !0,
              get: function () {
                return l(s), i[s];
              },
            });
          }),
          (o.useErrorBoundary || o.suspense) && l("error"),
          a
        );
      }),
      (n.getNextResult = function (i) {
        var o = this;
        return new Promise(function (u, a) {
          var l = o.subscribe(function (s) {
            s.isFetching ||
              (l(),
              s.isError && i != null && i.throwOnError ? a(s.error) : u(s));
          });
        });
      }),
      (n.getCurrentQuery = function () {
        return this.currentQuery;
      }),
      (n.remove = function () {
        this.client.getQueryCache().remove(this.currentQuery);
      }),
      (n.refetch = function (i) {
        return this.fetch(
          M({}, i, {
            meta: { refetchPage: i == null ? void 0 : i.refetchPage },
          })
        );
      }),
      (n.fetchOptimistic = function (i) {
        var o = this,
          u = this.client.defaultQueryObserverOptions(i),
          a = this.client.getQueryCache().build(this.client, u);
        return a.fetch().then(function () {
          return o.createResult(a, u);
        });
      }),
      (n.fetch = function (i) {
        var o = this;
        return this.executeFetch(i).then(function () {
          return o.updateResult(), o.currentResult;
        });
      }),
      (n.executeFetch = function (i) {
        this.updateQuery();
        var o = this.currentQuery.fetch(this.options, i);
        return (i != null && i.throwOnError) || (o = o.catch(ge)), o;
      }),
      (n.updateStaleTimeout = function () {
        var i = this;
        if (
          (this.clearStaleTimeout(),
          !(Ji || this.currentResult.isStale || !ia(this.options.staleTime)))
        ) {
          var o = Wd(this.currentResult.dataUpdatedAt, this.options.staleTime),
            u = o + 1;
          this.staleTimeoutId = setTimeout(function () {
            i.currentResult.isStale || i.updateResult();
          }, u);
        }
      }),
      (n.computeRefetchInterval = function () {
        var i;
        return typeof this.options.refetchInterval == "function"
          ? this.options.refetchInterval(
              this.currentResult.data,
              this.currentQuery
            )
          : (i = this.options.refetchInterval) != null
          ? i
          : !1;
      }),
      (n.updateRefetchInterval = function (i) {
        var o = this;
        this.clearRefetchInterval(),
          (this.currentRefetchInterval = i),
          !(
            Ji ||
            this.options.enabled === !1 ||
            !ia(this.currentRefetchInterval) ||
            this.currentRefetchInterval === 0
          ) &&
            (this.refetchIntervalId = setInterval(function () {
              (o.options.refetchIntervalInBackground || mr.isFocused()) &&
                o.executeFetch();
            }, this.currentRefetchInterval));
      }),
      (n.updateTimers = function () {
        this.updateStaleTimeout(),
          this.updateRefetchInterval(this.computeRefetchInterval());
      }),
      (n.clearTimers = function () {
        this.clearStaleTimeout(), this.clearRefetchInterval();
      }),
      (n.clearStaleTimeout = function () {
        clearTimeout(this.staleTimeoutId), (this.staleTimeoutId = void 0);
      }),
      (n.clearRefetchInterval = function () {
        clearInterval(this.refetchIntervalId),
          (this.refetchIntervalId = void 0);
      }),
      (n.createResult = function (i, o) {
        var u = this.currentQuery,
          a = this.options,
          l = this.currentResult,
          s = this.currentResultState,
          f = this.currentResultOptions,
          m = i !== u,
          h = m ? i.state : this.currentQueryInitialState,
          y = m ? this.currentResult : this.previousQueryResult,
          w = i.state,
          S = w.dataUpdatedAt,
          d = w.error,
          c = w.errorUpdatedAt,
          p = w.isFetching,
          v = w.status,
          O = !1,
          P = !1,
          C;
        if (o.optimisticResults) {
          var b = this.hasListeners(),
            R = !b && ac(i, o),
            T = b && lc(i, u, o, a);
          (R || T) && ((p = !0), S || (v = "loading"));
        }
        if (
          o.keepPreviousData &&
          !w.dataUpdateCount &&
          y != null &&
          y.isSuccess &&
          v !== "error"
        )
          (C = y.data), (S = y.dataUpdatedAt), (v = y.status), (O = !0);
        else if (o.select && typeof w.data < "u") {
          var A;
          if (
            l &&
            w.data === (s == null ? void 0 : s.data) &&
            o.select === ((A = this.previousSelect) == null ? void 0 : A.fn) &&
            !this.previousSelectError
          )
            C = this.previousSelect.result;
          else
            try {
              (C = o.select(w.data)),
                (this.previousSelect = { fn: o.select, result: C }),
                o.structuralSharing !== !1 &&
                  (C = no(l == null ? void 0 : l.data, C)),
                (this.previousSelectError = null);
            } catch (N) {
              io().error(N),
                (d = N),
                (this.previousSelectError = N),
                (c = Date.now()),
                (v = "error");
            }
        } else C = w.data;
        if (
          typeof o.placeholderData < "u" &&
          typeof C > "u" &&
          (v === "loading" || v === "idle")
        ) {
          var q;
          if (
            l != null &&
            l.isPlaceholderData &&
            o.placeholderData === (f == null ? void 0 : f.placeholderData)
          )
            q = l.data;
          else if (
            ((q =
              typeof o.placeholderData == "function"
                ? o.placeholderData()
                : o.placeholderData),
            o.select && typeof q < "u")
          )
            try {
              (q = o.select(q)),
                o.structuralSharing !== !1 &&
                  (q = no(l == null ? void 0 : l.data, q)),
                (this.previousSelectError = null);
            } catch (N) {
              io().error(N),
                (d = N),
                (this.previousSelectError = N),
                (c = Date.now()),
                (v = "error");
            }
          typeof q < "u" && ((v = "success"), (C = q), (P = !0));
        }
        var Q = {
          status: v,
          isLoading: v === "loading",
          isSuccess: v === "success",
          isError: v === "error",
          isIdle: v === "idle",
          data: C,
          dataUpdatedAt: S,
          error: d,
          errorUpdatedAt: c,
          failureCount: w.fetchFailureCount,
          isFetched: w.dataUpdateCount > 0 || w.errorUpdateCount > 0,
          isFetchedAfterMount:
            w.dataUpdateCount > h.dataUpdateCount ||
            w.errorUpdateCount > h.errorUpdateCount,
          isFetching: p,
          isRefetching: p && v !== "loading",
          isLoadingError: v === "error" && w.dataUpdatedAt === 0,
          isPlaceholderData: P,
          isPreviousData: O,
          isRefetchError: v === "error" && w.dataUpdatedAt !== 0,
          isStale: Qr(i, o),
          refetch: this.refetch,
          remove: this.remove,
        };
        return Q;
      }),
      (n.shouldNotifyListeners = function (i, o) {
        if (!o) return !0;
        var u = this.options,
          a = u.notifyOnChangeProps,
          l = u.notifyOnChangePropsExclusions;
        if ((!a && !l) || (a === "tracked" && !this.trackedProps.length))
          return !0;
        var s = a === "tracked" ? this.trackedProps : a;
        return Object.keys(i).some(function (f) {
          var m = f,
            h = i[m] !== o[m],
            y =
              s == null
                ? void 0
                : s.some(function (S) {
                    return S === f;
                  }),
            w =
              l == null
                ? void 0
                : l.some(function (S) {
                    return S === f;
                  });
          return h && !w && (!s || y);
        });
      }),
      (n.updateResult = function (i) {
        var o = this.currentResult;
        if (
          ((this.currentResult = this.createResult(
            this.currentQuery,
            this.options
          )),
          (this.currentResultState = this.currentQuery.state),
          (this.currentResultOptions = this.options),
          !Sv(this.currentResult, o))
        ) {
          var u = { cache: !0 };
          (i == null ? void 0 : i.listeners) !== !1 &&
            this.shouldNotifyListeners(this.currentResult, o) &&
            (u.listeners = !0),
            this.notify(M({}, u, i));
        }
      }),
      (n.updateQuery = function () {
        var i = this.client.getQueryCache().build(this.client, this.options);
        if (i !== this.currentQuery) {
          var o = this.currentQuery;
          (this.currentQuery = i),
            (this.currentQueryInitialState = i.state),
            (this.previousQueryResult = this.currentResult),
            this.hasListeners() &&
              (o == null || o.removeObserver(this), i.addObserver(this));
        }
      }),
      (n.onQueryUpdate = function (i) {
        var o = {};
        i.type === "success"
          ? (o.onSuccess = !0)
          : i.type === "error" && !Oi(i.error) && (o.onError = !0),
          this.updateResult(o),
          this.hasListeners() && this.updateTimers();
      }),
      (n.notify = function (i) {
        var o = this;
        re.batch(function () {
          i.onSuccess
            ? (o.options.onSuccess == null ||
                o.options.onSuccess(o.currentResult.data),
              o.options.onSettled == null ||
                o.options.onSettled(o.currentResult.data, null))
            : i.onError &&
              (o.options.onError == null ||
                o.options.onError(o.currentResult.error),
              o.options.onSettled == null ||
                o.options.onSettled(void 0, o.currentResult.error)),
            i.listeners &&
              o.listeners.forEach(function (u) {
                u(o.currentResult);
              }),
            i.cache &&
              o.client.getQueryCache().notify({
                query: o.currentQuery,
                type: "observerResultsUpdated",
              });
        });
      }),
      t
    );
  })(Hr);
function Dv(e, t) {
  return (
    t.enabled !== !1 &&
    !e.state.dataUpdatedAt &&
    !(e.state.status === "error" && t.retryOnMount === !1)
  );
}
function Av(e, t) {
  return (
    t.enabled !== !1 &&
    e.state.dataUpdatedAt > 0 &&
    (t.refetchOnMount === "always" || (t.refetchOnMount !== !1 && Qr(e, t)))
  );
}
function ac(e, t) {
  return Dv(e, t) || Av(e, t);
}
function Vv(e, t) {
  return (
    t.enabled !== !1 &&
    (t.refetchOnReconnect === "always" ||
      (t.refetchOnReconnect !== !1 && Qr(e, t)))
  );
}
function $v(e, t) {
  return (
    t.enabled !== !1 &&
    (t.refetchOnWindowFocus === "always" ||
      (t.refetchOnWindowFocus !== !1 && Qr(e, t)))
  );
}
function lc(e, t, n, r) {
  return (
    n.enabled !== !1 &&
    (e !== t || r.enabled === !1) &&
    (!n.suspense || e.state.status !== "error") &&
    Qr(e, n)
  );
}
function Qr(e, t) {
  return e.isStaleByTime(t.staleTime);
}
var Uv = sv.unstable_batchedUpdates;
re.setBatchNotifyFunction(Uv);
var jv = console;
xv(jv);
var sc = Te.createContext(void 0),
  Jd = Te.createContext(!1);
function ep(e) {
  return e && typeof window < "u"
    ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = sc),
      window.ReactQueryClientContext)
    : sc;
}
var zv = function () {
    var t = Te.useContext(ep(Te.useContext(Jd)));
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  Cw = function (t) {
    var n = t.client,
      r = t.contextSharing,
      i = r === void 0 ? !1 : r,
      o = t.children;
    Te.useEffect(
      function () {
        return (
          n.mount(),
          function () {
            n.unmount();
          }
        );
      },
      [n]
    );
    var u = ep(i);
    return Te.createElement(
      Jd.Provider,
      { value: i },
      Te.createElement(u.Provider, { value: n }, o)
    );
  };
function Hv() {
  var e = !1;
  return {
    clearReset: function () {
      e = !1;
    },
    reset: function () {
      e = !0;
    },
    isReset: function () {
      return e;
    },
  };
}
var Qv = Te.createContext(Hv()),
  Bv = function () {
    return Te.useContext(Qv);
  };
function qv(e, t, n) {
  return typeof t == "function" ? t(n) : typeof t == "boolean" ? t : !!e;
}
function Wv(e, t) {
  var n = Te.useRef(!1),
    r = Te.useState(0),
    i = r[1],
    o = zv(),
    u = Bv(),
    a = o.defaultQueryObserverOptions(e);
  (a.optimisticResults = !0),
    a.onError && (a.onError = re.batchCalls(a.onError)),
    a.onSuccess && (a.onSuccess = re.batchCalls(a.onSuccess)),
    a.onSettled && (a.onSettled = re.batchCalls(a.onSettled)),
    a.suspense &&
      (typeof a.staleTime != "number" && (a.staleTime = 1e3),
      a.cacheTime === 0 && (a.cacheTime = 1)),
    (a.suspense || a.useErrorBoundary) &&
      (u.isReset() || (a.retryOnMount = !1));
  var l = Te.useState(function () {
      return new t(o, a);
    }),
    s = l[0],
    f = s.getOptimisticResult(a);
  if (
    (Te.useEffect(
      function () {
        (n.current = !0), u.clearReset();
        var m = s.subscribe(
          re.batchCalls(function () {
            n.current &&
              i(function (h) {
                return h + 1;
              });
          })
        );
        return (
          s.updateResult(),
          function () {
            (n.current = !1), m();
          }
        );
      },
      [u, s]
    ),
    Te.useEffect(
      function () {
        s.setOptions(a, { listeners: !1 });
      },
      [a, s]
    ),
    a.suspense && f.isLoading)
  )
    throw s
      .fetchOptimistic(a)
      .then(function (m) {
        var h = m.data;
        a.onSuccess == null || a.onSuccess(h),
          a.onSettled == null || a.onSettled(h, null);
      })
      .catch(function (m) {
        u.clearReset(),
          a.onError == null || a.onError(m),
          a.onSettled == null || a.onSettled(void 0, m);
      });
  if (
    f.isError &&
    !u.isReset() &&
    !f.isFetching &&
    qv(a.suspense, a.useErrorBoundary, f.error)
  )
    throw f.error;
  return a.notifyOnChangeProps === "tracked" && (f = s.trackResult(f, a)), f;
}
function bw(e, t, n) {
  var r = wi(e, t, n);
  return Wv(r, Nv);
}
function Kv(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function Yv(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var Gv = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (i) {
        var o;
        r.tags.length === 0
          ? r.insertionPoint
            ? (o = r.insertionPoint.nextSibling)
            : r.prepend
            ? (o = r.container.firstChild)
            : (o = r.before)
          : (o = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(i, o),
          r.tags.push(i);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(Yv(this));
        var i = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = Kv(i);
          try {
            o.insertRule(r, o.cssRules.length);
          } catch {}
        } else i.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  ye = "-ms-",
  oo = "-moz-",
  j = "-webkit-",
  tp = "comm",
  Cl = "rule",
  bl = "decl",
  Xv = "@import",
  np = "@keyframes",
  Zv = Math.abs,
  Ao = String.fromCharCode,
  Jv = Object.assign;
function ey(e, t) {
  return (
    (((((((t << 2) ^ Me(e, 0)) << 2) ^ Me(e, 1)) << 2) ^ Me(e, 2)) << 2) ^
    Me(e, 3)
  );
}
function rp(e) {
  return e.trim();
}
function ty(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function H(e, t, n) {
  return e.replace(t, n);
}
function ua(e, t) {
  return e.indexOf(t);
}
function Me(e, t) {
  return e.charCodeAt(t) | 0;
}
function _r(e, t, n) {
  return e.slice(t, n);
}
function Ke(e) {
  return e.length;
}
function El(e) {
  return e.length;
}
function ii(e, t) {
  return t.push(e), e;
}
function ny(e, t) {
  return e.map(t).join("");
}
var Vo = 1,
  Mn = 1,
  ip = 0,
  Ie = 0,
  ae = 0,
  Dn = "";
function $o(e, t, n, r, i, o, u) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: o,
    line: Vo,
    column: Mn,
    length: u,
    return: "",
  };
}
function Gn(e, t) {
  return Jv($o("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function ry() {
  return ae;
}
function iy() {
  return (
    (ae = Ie > 0 ? Me(Dn, --Ie) : 0), Mn--, ae === 10 && ((Mn = 1), Vo--), ae
  );
}
function Le() {
  return (
    (ae = Ie < ip ? Me(Dn, Ie++) : 0), Mn++, ae === 10 && ((Mn = 1), Vo++), ae
  );
}
function nt() {
  return Me(Dn, Ie);
}
function Ci() {
  return Ie;
}
function Br(e, t) {
  return _r(Dn, e, t);
}
function Ir(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function op(e) {
  return (Vo = Mn = 1), (ip = Ke((Dn = e))), (Ie = 0), [];
}
function up(e) {
  return (Dn = ""), e;
}
function bi(e) {
  return rp(Br(Ie - 1, aa(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function oy(e) {
  for (; (ae = nt()) && ae < 33; ) Le();
  return Ir(e) > 2 || Ir(ae) > 3 ? "" : " ";
}
function uy(e, t) {
  for (
    ;
    --t &&
    Le() &&
    !(ae < 48 || ae > 102 || (ae > 57 && ae < 65) || (ae > 70 && ae < 97));

  );
  return Br(e, Ci() + (t < 6 && nt() == 32 && Le() == 32));
}
function aa(e) {
  for (; Le(); )
    switch (ae) {
      case e:
        return Ie;
      case 34:
      case 39:
        e !== 34 && e !== 39 && aa(ae);
        break;
      case 40:
        e === 41 && aa(e);
        break;
      case 92:
        Le();
        break;
    }
  return Ie;
}
function ay(e, t) {
  for (; Le() && e + ae !== 57; ) if (e + ae === 84 && nt() === 47) break;
  return "/*" + Br(t, Ie - 1) + "*" + Ao(e === 47 ? e : Le());
}
function ly(e) {
  for (; !Ir(nt()); ) Le();
  return Br(e, Ie);
}
function sy(e) {
  return up(Ei("", null, null, null, [""], (e = op(e)), 0, [0], e));
}
function Ei(e, t, n, r, i, o, u, a, l) {
  for (
    var s = 0,
      f = 0,
      m = u,
      h = 0,
      y = 0,
      w = 0,
      S = 1,
      d = 1,
      c = 1,
      p = 0,
      v = "",
      O = i,
      P = o,
      C = r,
      b = v;
    d;

  )
    switch (((w = p), (p = Le()))) {
      case 40:
        if (w != 108 && b.charCodeAt(m - 1) == 58) {
          ua((b += H(bi(p), "&", "&\f")), "&\f") != -1 && (c = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        b += bi(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        b += oy(w);
        break;
      case 92:
        b += uy(Ci() - 1, 7);
        continue;
      case 47:
        switch (nt()) {
          case 42:
          case 47:
            ii(cy(ay(Le(), Ci()), t, n), l);
            break;
          default:
            b += "/";
        }
        break;
      case 123 * S:
        a[s++] = Ke(b) * c;
      case 125 * S:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            d = 0;
          case 59 + f:
            y > 0 &&
              Ke(b) - m &&
              ii(
                y > 32
                  ? fc(b + ";", r, n, m - 1)
                  : fc(H(b, " ", "") + ";", r, n, m - 2),
                l
              );
            break;
          case 59:
            b += ";";
          default:
            if (
              (ii((C = cc(b, t, n, s, f, i, a, v, (O = []), (P = []), m)), o),
              p === 123)
            )
              if (f === 0) Ei(b, t, C, C, O, o, m, a, P);
              else
                switch (h) {
                  case 100:
                  case 109:
                  case 115:
                    Ei(
                      e,
                      C,
                      C,
                      r && ii(cc(e, C, C, 0, 0, i, a, v, i, (O = []), m), P),
                      i,
                      P,
                      m,
                      a,
                      r ? O : P
                    );
                    break;
                  default:
                    Ei(b, C, C, C, [""], P, 0, a, P);
                }
        }
        (s = f = y = 0), (S = c = 1), (v = b = ""), (m = u);
        break;
      case 58:
        (m = 1 + Ke(b)), (y = w);
      default:
        if (S < 1) {
          if (p == 123) --S;
          else if (p == 125 && S++ == 0 && iy() == 125) continue;
        }
        switch (((b += Ao(p)), p * S)) {
          case 38:
            c = f > 0 ? 1 : ((b += "\f"), -1);
            break;
          case 44:
            (a[s++] = (Ke(b) - 1) * c), (c = 1);
            break;
          case 64:
            nt() === 45 && (b += bi(Le())),
              (h = nt()),
              (f = m = Ke((v = b += ly(Ci())))),
              p++;
            break;
          case 45:
            w === 45 && Ke(b) == 2 && (S = 0);
        }
    }
  return o;
}
function cc(e, t, n, r, i, o, u, a, l, s, f) {
  for (
    var m = i - 1, h = i === 0 ? o : [""], y = El(h), w = 0, S = 0, d = 0;
    w < r;
    ++w
  )
    for (var c = 0, p = _r(e, m + 1, (m = Zv((S = u[w])))), v = e; c < y; ++c)
      (v = rp(S > 0 ? h[c] + " " + p : H(p, /&\f/g, h[c]))) && (l[d++] = v);
  return $o(e, t, n, i === 0 ? Cl : a, l, s, f);
}
function cy(e, t, n) {
  return $o(e, t, n, tp, Ao(ry()), _r(e, 2, -2), 0);
}
function fc(e, t, n, r) {
  return $o(e, t, n, bl, _r(e, 0, r), _r(e, r + 1, -1), r);
}
function ap(e, t) {
  switch (ey(e, t)) {
    case 5103:
      return j + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return j + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return j + e + oo + e + ye + e + e;
    case 6828:
    case 4268:
      return j + e + ye + e + e;
    case 6165:
      return j + e + ye + "flex-" + e + e;
    case 5187:
      return (
        j + e + H(e, /(\w+).+(:[^]+)/, j + "box-$1$2" + ye + "flex-$1$2") + e
      );
    case 5443:
      return j + e + ye + "flex-item-" + H(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        j +
        e +
        ye +
        "flex-line-pack" +
        H(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return j + e + ye + H(e, "shrink", "negative") + e;
    case 5292:
      return j + e + ye + H(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        j +
        "box-" +
        H(e, "-grow", "") +
        j +
        e +
        ye +
        H(e, "grow", "positive") +
        e
      );
    case 4554:
      return j + H(e, /([^-])(transform)/g, "$1" + j + "$2") + e;
    case 6187:
      return (
        H(H(H(e, /(zoom-|grab)/, j + "$1"), /(image-set)/, j + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return H(e, /(image-set\([^]*)/, j + "$1$`$1");
    case 4968:
      return (
        H(
          H(e, /(.+:)(flex-)?(.*)/, j + "box-pack:$3" + ye + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        j +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return H(e, /(.+)-inline(.+)/, j + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ke(e) - 1 - t > 6)
        switch (Me(e, t + 1)) {
          case 109:
            if (Me(e, t + 4) !== 45) break;
          case 102:
            return (
              H(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  j +
                  "$2-$3$1" +
                  oo +
                  (Me(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~ua(e, "stretch")
              ? ap(H(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (Me(e, t + 1) !== 115) break;
    case 6444:
      switch (Me(e, Ke(e) - 3 - (~ua(e, "!important") && 10))) {
        case 107:
          return H(e, ":", ":" + j) + e;
        case 101:
          return (
            H(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                j +
                (Me(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                j +
                "$2$3$1" +
                ye +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (Me(e, t + 11)) {
        case 114:
          return j + e + ye + H(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return j + e + ye + H(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return j + e + ye + H(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return j + e + ye + e + e;
  }
  return e;
}
function On(e, t) {
  for (var n = "", r = El(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || "";
  return n;
}
function fy(e, t, n, r) {
  switch (e.type) {
    case Xv:
    case bl:
      return (e.return = e.return || e.value);
    case tp:
      return "";
    case np:
      return (e.return = e.value + "{" + On(e.children, r) + "}");
    case Cl:
      e.value = e.props.join(",");
  }
  return Ke((n = On(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function dy(e) {
  var t = El(e);
  return function (n, r, i, o) {
    for (var u = "", a = 0; a < t; a++) u += e[a](n, r, i, o) || "";
    return u;
  };
}
function py(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function hy(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case bl:
        e.return = ap(e.value, e.length);
        break;
      case np:
        return On([Gn(e, { value: H(e.value, "@", "@" + j) })], r);
      case Cl:
        if (e.length)
          return ny(e.props, function (i) {
            switch (ty(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return On(
                  [Gn(e, { props: [H(i, /:(read-\w+)/, ":" + oo + "$1")] })],
                  r
                );
              case "::placeholder":
                return On(
                  [
                    Gn(e, {
                      props: [H(i, /:(plac\w+)/, ":" + j + "input-$1")],
                    }),
                    Gn(e, { props: [H(i, /:(plac\w+)/, ":" + oo + "$1")] }),
                    Gn(e, { props: [H(i, /:(plac\w+)/, ye + "input-$1")] }),
                  ],
                  r
                );
            }
            return "";
          });
    }
}
function my(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var vy = function (t, n, r) {
    for (
      var i = 0, o = 0;
      (i = o), (o = nt()), i === 38 && o === 12 && (n[r] = 1), !Ir(o);

    )
      Le();
    return Br(t, Ie);
  },
  yy = function (t, n) {
    var r = -1,
      i = 44;
    do
      switch (Ir(i)) {
        case 0:
          i === 38 && nt() === 12 && (n[r] = 1), (t[r] += vy(Ie - 1, n, r));
          break;
        case 2:
          t[r] += bi(i);
          break;
        case 4:
          if (i === 44) {
            (t[++r] = nt() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += Ao(i);
      }
    while ((i = Le()));
    return t;
  },
  gy = function (t, n) {
    return up(yy(op(t), n));
  },
  dc = new WeakMap(),
  wy = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          i = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !dc.get(r)) &&
        !i
      ) {
        dc.set(t, !0);
        for (
          var o = [], u = gy(n, o), a = r.props, l = 0, s = 0;
          l < u.length;
          l++
        )
          for (var f = 0; f < a.length; f++, s++)
            t.props[s] = o[l] ? u[l].replace(/&\f/g, a[f]) : a[f] + " " + u[l];
      }
    }
  },
  Sy = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  },
  Oy = [hy],
  Cy = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (S) {
        var d = S.getAttribute("data-emotion");
        d.indexOf(" ") !== -1 &&
          (document.head.appendChild(S), S.setAttribute("data-s", ""));
      });
    }
    var i = t.stylisPlugins || Oy,
      o = {},
      u,
      a = [];
    (u = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (S) {
          for (
            var d = S.getAttribute("data-emotion").split(" "), c = 1;
            c < d.length;
            c++
          )
            o[d[c]] = !0;
          a.push(S);
        }
      );
    var l,
      s = [wy, Sy];
    {
      var f,
        m = [
          fy,
          py(function (S) {
            f.insert(S);
          }),
        ],
        h = dy(s.concat(i, m)),
        y = function (d) {
          return On(sy(d), h);
        };
      l = function (d, c, p, v) {
        (f = p),
          y(d ? d + "{" + c.styles + "}" : c.styles),
          v && (w.inserted[c.name] = !0);
      };
    }
    var w = {
      key: n,
      sheet: new Gv({
        key: n,
        container: u,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: o,
      registered: {},
      insert: l,
    };
    return w.sheet.hydrate(a), w;
  },
  lp = vv,
  by = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Ey = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  sp = {};
sp[lp.ForwardRef] = by;
sp[lp.Memo] = Ey;
var Py = !0;
function cp(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (i) {
      e[i] !== void 0 ? t.push(e[i] + ";") : (r += i + " ");
    }),
    r
  );
}
var fp = function (t, n, r) {
  var i = t.key + "-" + n.name;
  if (
    ((r === !1 || Py === !1) &&
      t.registered[i] === void 0 &&
      (t.registered[i] = n.styles),
    t.inserted[n.name] === void 0)
  ) {
    var o = n;
    do t.insert(n === o ? "." + i : "", o, t.sheet, !0), (o = o.next);
    while (o !== void 0);
  }
};
function xy(e) {
  for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var ky = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  My = /[A-Z]|^ms/g,
  Ty = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  dp = function (t) {
    return t.charCodeAt(1) === 45;
  },
  pc = function (t) {
    return t != null && typeof t != "boolean";
  },
  cu = my(function (e) {
    return dp(e) ? e : e.replace(My, "-$&").toLowerCase();
  }),
  hc = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(Ty, function (r, i, o) {
            return (Ye = { name: i, styles: o, next: Ye }), i;
          });
    }
    return ky[t] !== 1 && !dp(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function Fr(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (Ye = { name: n.name, styles: n.styles, next: Ye }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (Ye = { name: r.name, styles: r.styles, next: Ye }), (r = r.next);
        var i = n.styles + ";";
        return i;
      }
      return Ry(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var o = Ye,
          u = n(e);
        return (Ye = o), Fr(e, t, u);
      }
      break;
    }
  }
  if (t == null) return n;
  var a = t[n];
  return a !== void 0 ? a : n;
}
function Ry(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++) r += Fr(e, t, n[i]) + ";";
  else
    for (var o in n) {
      var u = n[o];
      if (typeof u != "object")
        t != null && t[u] !== void 0
          ? (r += o + "{" + t[u] + "}")
          : pc(u) && (r += cu(o) + ":" + hc(o, u) + ";");
      else if (
        Array.isArray(u) &&
        typeof u[0] == "string" &&
        (t == null || t[u[0]] === void 0)
      )
        for (var a = 0; a < u.length; a++)
          pc(u[a]) && (r += cu(o) + ":" + hc(o, u[a]) + ";");
      else {
        var l = Fr(e, t, u);
        switch (o) {
          case "animation":
          case "animationName": {
            r += cu(o) + ":" + l + ";";
            break;
          }
          default:
            r += o + "{" + l + "}";
        }
      }
    }
  return r;
}
var mc = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Ye,
  Pl = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var i = !0,
      o = "";
    Ye = void 0;
    var u = t[0];
    u == null || u.raw === void 0
      ? ((i = !1), (o += Fr(r, n, u)))
      : (o += u[0]);
    for (var a = 1; a < t.length; a++) (o += Fr(r, n, t[a])), i && (o += u[a]);
    mc.lastIndex = 0;
    for (var l = "", s; (s = mc.exec(o)) !== null; ) l += "-" + s[1];
    var f = xy(o) + l;
    return { name: f, styles: o, next: Ye };
  },
  xl = {}.hasOwnProperty,
  pp = k.createContext(typeof HTMLElement < "u" ? Cy({ key: "css" }) : null);
pp.Provider;
var hp = function (t) {
    return k.forwardRef(function (n, r) {
      var i = k.useContext(pp);
      return t(n, i, r);
    });
  },
  mp = k.createContext({}),
  la = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  _y = function (t, n) {
    var r = {};
    for (var i in n) xl.call(n, i) && (r[i] = n[i]);
    return (r[la] = t), r;
  },
  Iy = function () {
    return null;
  },
  Fy = hp(function (e, t, n) {
    var r = e.css;
    typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
    var i = e[la],
      o = [r],
      u = "";
    typeof e.className == "string"
      ? (u = cp(t.registered, o, e.className))
      : e.className != null && (u = e.className + " ");
    var a = Pl(o, void 0, k.useContext(mp));
    fp(t, a, typeof i == "string"), (u += t.key + "-" + a.name);
    var l = {};
    for (var s in e) xl.call(e, s) && s !== "css" && s !== la && (l[s] = e[s]);
    (l.ref = n), (l.className = u);
    var f = k.createElement(i, l),
      m = k.createElement(Iy, null);
    return k.createElement(k.Fragment, null, m, f);
  }),
  L = function (t, n) {
    var r = arguments;
    if (n == null || !xl.call(n, "css"))
      return k.createElement.apply(void 0, r);
    var i = r.length,
      o = new Array(i);
    (o[0] = Fy), (o[1] = _y(t, n));
    for (var u = 2; u < i; u++) o[u] = r[u];
    return k.createElement.apply(null, o);
  };
function kl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Pl(t);
}
var Ly = function () {
    var t = kl.apply(void 0, arguments),
      n = "animation-" + t.name;
    return {
      name: n,
      styles: "@keyframes " + n + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  Ny = function e(t) {
    for (var n = t.length, r = 0, i = ""; r < n; r++) {
      var o = t[r];
      if (o != null) {
        var u = void 0;
        switch (typeof o) {
          case "boolean":
            break;
          case "object": {
            if (Array.isArray(o)) u = e(o);
            else {
              u = "";
              for (var a in o) o[a] && a && (u && (u += " "), (u += a));
            }
            break;
          }
          default:
            u = o;
        }
        u && (i && (i += " "), (i += u));
      }
    }
    return i;
  };
function Dy(e, t, n) {
  var r = [],
    i = cp(e, r, n);
  return r.length < 2 ? n : i + t(r);
}
var Ay = function () {
    return null;
  },
  Vy = hp(function (e, t) {
    var n = !1,
      r = function () {
        for (var s = arguments.length, f = new Array(s), m = 0; m < s; m++)
          f[m] = arguments[m];
        var h = Pl(f, t.registered);
        return fp(t, h, !1), t.key + "-" + h.name;
      },
      i = function () {
        for (var s = arguments.length, f = new Array(s), m = 0; m < s; m++)
          f[m] = arguments[m];
        return Dy(t.registered, r, Ny(f));
      },
      o = { css: r, cx: i, theme: k.useContext(mp) },
      u = e.children(o);
    n = !0;
    var a = k.createElement(Ay, null);
    return k.createElement(k.Fragment, null, a, u);
  });
function $y(e, t) {
  return (
    t || (t = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
    )
  );
}
function An(e, t) {
  if (e == null) return {};
  var n = cv(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function sa(e) {
  "@babel/helpers - typeof";
  return (
    (sa =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    sa(e)
  );
}
function Ml(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function vc(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function Tl(e, t, n) {
  return (
    t && vc(e.prototype, t),
    n && vc(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Rl(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Zi(e, t);
}
function it(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Uy(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function yc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? yc(Object(n), !0).forEach(function (r) {
          Uy(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : yc(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function uo(e) {
  return (
    (uo = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    uo(e)
  );
}
function jy() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function zy(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Hy(e, t) {
  return t && (typeof t == "object" || typeof t == "function") ? t : zy(e);
}
function _l(e) {
  var t = jy();
  return function () {
    var r = uo(e),
      i;
    if (t) {
      var o = uo(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return Hy(this, i);
  };
}
var Qy = [
    "className",
    "clearValue",
    "cx",
    "getStyles",
    "getValue",
    "hasValue",
    "isMulti",
    "isRtl",
    "options",
    "selectOption",
    "selectProps",
    "setValue",
    "theme",
  ],
  ao = function () {};
function By(e, t) {
  return t ? (t[0] === "-" ? e + t : e + "__" + t) : e;
}
function qy(e, t, n) {
  var r = [n];
  if (t && e)
    for (var i in t) t.hasOwnProperty(i) && t[i] && r.push("".concat(By(e, i)));
  return r
    .filter(function (o) {
      return o;
    })
    .map(function (o) {
      return String(o).trim();
    })
    .join(" ");
}
var gc = function (t) {
    return tg(t)
      ? t.filter(Boolean)
      : sa(t) === "object" && t !== null
      ? [t]
      : [];
  },
  vp = function (t) {
    t.className,
      t.clearValue,
      t.cx,
      t.getStyles,
      t.getValue,
      t.hasValue,
      t.isMulti,
      t.isRtl,
      t.options,
      t.selectOption,
      t.selectProps,
      t.setValue,
      t.theme;
    var n = An(t, Qy);
    return Z({}, n);
  };
function Il(e) {
  return [document.documentElement, document.body, window].indexOf(e) > -1;
}
function yp(e) {
  return Il(e) ? window.pageYOffset : e.scrollTop;
}
function lo(e, t) {
  if (Il(e)) {
    window.scrollTo(0, t);
    return;
  }
  e.scrollTop = t;
}
function Wy(e) {
  var t = getComputedStyle(e),
    n = t.position === "absolute",
    r = /(auto|scroll)/;
  if (t.position === "fixed") return document.documentElement;
  for (var i = e; (i = i.parentElement); )
    if (
      ((t = getComputedStyle(i)),
      !(n && t.position === "static") &&
        r.test(t.overflow + t.overflowY + t.overflowX))
    )
      return i;
  return document.documentElement;
}
function Ky(e, t, n, r) {
  return n * ((e = e / r - 1) * e * e + 1) + t;
}
function oi(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200,
    r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ao,
    i = yp(e),
    o = t - i,
    u = 10,
    a = 0;
  function l() {
    a += u;
    var s = Ky(a, i, o, n);
    lo(e, s), a < n ? window.requestAnimationFrame(l) : r(e);
  }
  l();
}
function Yy(e, t) {
  var n = e.getBoundingClientRect(),
    r = t.getBoundingClientRect(),
    i = t.offsetHeight / 3;
  r.bottom + i > n.bottom
    ? lo(
        e,
        Math.min(
          t.offsetTop + t.clientHeight - e.offsetHeight + i,
          e.scrollHeight
        )
      )
    : r.top - i < n.top && lo(e, Math.max(t.offsetTop - i, 0));
}
function Gy(e) {
  var t = e.getBoundingClientRect();
  return {
    bottom: t.bottom,
    height: t.height,
    left: t.left,
    right: t.right,
    top: t.top,
    width: t.width,
  };
}
function wc() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function Xy() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  } catch {
    return !1;
  }
}
var gp = !1,
  Zy = {
    get passive() {
      return (gp = !0);
    },
  },
  ui = typeof window < "u" ? window : {};
ui.addEventListener &&
  ui.removeEventListener &&
  (ui.addEventListener("p", ao, Zy), ui.removeEventListener("p", ao, !1));
var Jy = gp;
function eg(e) {
  return e != null;
}
function tg(e) {
  return Array.isArray(e);
}
function ai(e, t, n) {
  return e ? t : n;
}
function ng(e) {
  var t = e.maxHeight,
    n = e.menuEl,
    r = e.minHeight,
    i = e.placement,
    o = e.shouldScroll,
    u = e.isFixedPosition,
    a = e.theme,
    l = a.spacing,
    s = Wy(n),
    f = { placement: "bottom", maxHeight: t };
  if (!n || !n.offsetParent) return f;
  var m = s.getBoundingClientRect(),
    h = m.height,
    y = n.getBoundingClientRect(),
    w = y.bottom,
    S = y.height,
    d = y.top,
    c = n.offsetParent.getBoundingClientRect(),
    p = c.top,
    v = window.innerHeight,
    O = yp(s),
    P = parseInt(getComputedStyle(n).marginBottom, 10),
    C = parseInt(getComputedStyle(n).marginTop, 10),
    b = p - C,
    R = v - d,
    T = b + O,
    A = h - O - d,
    q = w - v + O + P,
    Q = O + d - C,
    N = 160;
  switch (i) {
    case "auto":
    case "bottom":
      if (R >= S) return { placement: "bottom", maxHeight: t };
      if (A >= S && !u)
        return o && oi(s, q, N), { placement: "bottom", maxHeight: t };
      if ((!u && A >= r) || (u && R >= r)) {
        o && oi(s, q, N);
        var U = u ? R - P : A - P;
        return { placement: "bottom", maxHeight: U };
      }
      if (i === "auto" || u) {
        var V = t,
          W = u ? b : T;
        return (
          W >= r && (V = Math.min(W - P - l.controlHeight, t)),
          { placement: "top", maxHeight: V }
        );
      }
      if (i === "bottom")
        return o && lo(s, q), { placement: "bottom", maxHeight: t };
      break;
    case "top":
      if (b >= S) return { placement: "top", maxHeight: t };
      if (T >= S && !u)
        return o && oi(s, Q, N), { placement: "top", maxHeight: t };
      if ((!u && T >= r) || (u && b >= r)) {
        var ee = t;
        return (
          ((!u && T >= r) || (u && b >= r)) && (ee = u ? b - C : T - C),
          o && oi(s, Q, N),
          { placement: "top", maxHeight: ee }
        );
      }
      return { placement: "bottom", maxHeight: t };
    default:
      throw new Error('Invalid placement provided "'.concat(i, '".'));
  }
  return f;
}
function rg(e) {
  var t = { bottom: "top", top: "bottom" };
  return e ? t[e] : "bottom";
}
var ca = function (t) {
    return t === "auto" ? "bottom" : t;
  },
  ig = function (t) {
    var n,
      r = t.placement,
      i = t.theme,
      o = i.borderRadius,
      u = i.spacing,
      a = i.colors;
    return (
      (n = { label: "menu" }),
      it(n, rg(r), "100%"),
      it(n, "backgroundColor", a.neutral0),
      it(n, "borderRadius", o),
      it(
        n,
        "boxShadow",
        "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)"
      ),
      it(n, "marginBottom", u.menuGutter),
      it(n, "marginTop", u.menuGutter),
      it(n, "position", "absolute"),
      it(n, "width", "100%"),
      it(n, "zIndex", 1),
      n
    );
  },
  wp = k.createContext({ getPortalPlacement: null }),
  Sp = (function (e) {
    Rl(n, e);
    var t = _l(n);
    function n() {
      var r;
      Ml(this, n);
      for (var i = arguments.length, o = new Array(i), u = 0; u < i; u++)
        o[u] = arguments[u];
      return (
        (r = t.call.apply(t, [this].concat(o))),
        (r.state = { maxHeight: r.props.maxMenuHeight, placement: null }),
        (r.context = void 0),
        (r.getPlacement = function (a) {
          var l = r.props,
            s = l.minMenuHeight,
            f = l.maxMenuHeight,
            m = l.menuPlacement,
            h = l.menuPosition,
            y = l.menuShouldScrollIntoView,
            w = l.theme;
          if (a) {
            var S = h === "fixed",
              d = y && !S,
              c = ng({
                maxHeight: f,
                menuEl: a,
                minHeight: s,
                placement: m,
                shouldScroll: d,
                isFixedPosition: S,
                theme: w,
              }),
              p = r.context.getPortalPlacement;
            p && p(c), r.setState(c);
          }
        }),
        (r.getUpdatedProps = function () {
          var a = r.props.menuPlacement,
            l = r.state.placement || ca(a);
          return Z(
            Z({}, r.props),
            {},
            { placement: l, maxHeight: r.state.maxHeight }
          );
        }),
        r
      );
    }
    return (
      Tl(n, [
        {
          key: "render",
          value: function () {
            var i = this.props.children;
            return i({
              ref: this.getPlacement,
              placerProps: this.getUpdatedProps(),
            });
          },
        },
      ]),
      n
    );
  })(k.Component);
Sp.contextType = wp;
var og = function (t) {
    var n = t.children,
      r = t.className,
      i = t.cx,
      o = t.getStyles,
      u = t.innerRef,
      a = t.innerProps;
    return L(
      "div",
      M({ css: o("menu", t), className: i({ menu: !0 }, r), ref: u }, a),
      n
    );
  },
  ug = function (t) {
    var n = t.maxHeight,
      r = t.theme.spacing.baseUnit;
    return {
      maxHeight: n,
      overflowY: "auto",
      paddingBottom: r,
      paddingTop: r,
      position: "relative",
      WebkitOverflowScrolling: "touch",
    };
  },
  ag = function (t) {
    var n = t.children,
      r = t.className,
      i = t.cx,
      o = t.getStyles,
      u = t.innerProps,
      a = t.innerRef,
      l = t.isMulti;
    return L(
      "div",
      M(
        {
          css: o("menuList", t),
          className: i({ "menu-list": !0, "menu-list--is-multi": l }, r),
          ref: a,
        },
        u
      ),
      n
    );
  },
  Op = function (t) {
    var n = t.theme,
      r = n.spacing.baseUnit,
      i = n.colors;
    return {
      color: i.neutral40,
      padding: "".concat(r * 2, "px ").concat(r * 3, "px"),
      textAlign: "center",
    };
  },
  lg = Op,
  sg = Op,
  Cp = function (t) {
    var n = t.children,
      r = t.className,
      i = t.cx,
      o = t.getStyles,
      u = t.innerProps;
    return L(
      "div",
      M(
        {
          css: o("noOptionsMessage", t),
          className: i({ "menu-notice": !0, "menu-notice--no-options": !0 }, r),
        },
        u
      ),
      n
    );
  };
Cp.defaultProps = { children: "No options" };
var bp = function (t) {
  var n = t.children,
    r = t.className,
    i = t.cx,
    o = t.getStyles,
    u = t.innerProps;
  return L(
    "div",
    M(
      {
        css: o("loadingMessage", t),
        className: i({ "menu-notice": !0, "menu-notice--loading": !0 }, r),
      },
      u
    ),
    n
  );
};
bp.defaultProps = { children: "Loading..." };
var cg = function (t) {
    var n = t.rect,
      r = t.offset,
      i = t.position;
    return { left: n.left, position: i, top: r, width: n.width, zIndex: 1 };
  },
  fg = (function (e) {
    Rl(n, e);
    var t = _l(n);
    function n() {
      var r;
      Ml(this, n);
      for (var i = arguments.length, o = new Array(i), u = 0; u < i; u++)
        o[u] = arguments[u];
      return (
        (r = t.call.apply(t, [this].concat(o))),
        (r.state = { placement: null }),
        (r.getPortalPlacement = function (a) {
          var l = a.placement,
            s = ca(r.props.menuPlacement);
          l !== s && r.setState({ placement: l });
        }),
        r
      );
    }
    return (
      Tl(n, [
        {
          key: "render",
          value: function () {
            var i = this.props,
              o = i.appendTo,
              u = i.children,
              a = i.className,
              l = i.controlElement,
              s = i.cx,
              f = i.innerProps,
              m = i.menuPlacement,
              h = i.menuPosition,
              y = i.getStyles,
              w = h === "fixed";
            if ((!o && !w) || !l) return null;
            var S = this.state.placement || ca(m),
              d = Gy(l),
              c = w ? 0 : window.pageYOffset,
              p = d[S] + c,
              v = { offset: p, position: h, rect: d },
              O = L(
                "div",
                M(
                  {
                    css: y("menuPortal", v),
                    className: s({ "menu-portal": !0 }, a),
                  },
                  f
                ),
                u
              );
            return L(
              wp.Provider,
              { value: { getPortalPlacement: this.getPortalPlacement } },
              o ? Qd.createPortal(O, o) : O
            );
          },
        },
      ]),
      n
    );
  })(k.Component),
  dg = function (t) {
    var n = t.isDisabled,
      r = t.isRtl;
    return {
      label: "container",
      direction: r ? "rtl" : void 0,
      pointerEvents: n ? "none" : void 0,
      position: "relative",
    };
  },
  pg = function (t) {
    var n = t.children,
      r = t.className,
      i = t.cx,
      o = t.getStyles,
      u = t.innerProps,
      a = t.isDisabled,
      l = t.isRtl;
    return L(
      "div",
      M(
        {
          css: o("container", t),
          className: i({ "--is-disabled": a, "--is-rtl": l }, r),
        },
        u
      ),
      n
    );
  },
  hg = function (t) {
    var n = t.theme.spacing,
      r = t.isMulti,
      i = t.hasValue,
      o = t.selectProps.controlShouldRenderValue;
    return {
      alignItems: "center",
      display: r && i && o ? "flex" : "grid",
      flex: 1,
      flexWrap: "wrap",
      padding: "".concat(n.baseUnit / 2, "px ").concat(n.baseUnit * 2, "px"),
      WebkitOverflowScrolling: "touch",
      position: "relative",
      overflow: "hidden",
    };
  },
  mg = function (t) {
    var n = t.children,
      r = t.className,
      i = t.cx,
      o = t.innerProps,
      u = t.isMulti,
      a = t.getStyles,
      l = t.hasValue;
    return L(
      "div",
      M(
        {
          css: a("valueContainer", t),
          className: i(
            {
              "value-container": !0,
              "value-container--is-multi": u,
              "value-container--has-value": l,
            },
            r
          ),
        },
        o
      ),
      n
    );
  },
  vg = function () {
    return {
      alignItems: "center",
      alignSelf: "stretch",
      display: "flex",
      flexShrink: 0,
    };
  },
  yg = function (t) {
    var n = t.children,
      r = t.className,
      i = t.cx,
      o = t.innerProps,
      u = t.getStyles;
    return L(
      "div",
      M(
        {
          css: u("indicatorsContainer", t),
          className: i({ indicators: !0 }, r),
        },
        o
      ),
      n
    );
  },
  Sc,
  gg = ["size"],
  wg = {
    name: "8mmkcg",
    styles:
      "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0",
  },
  Ep = function (t) {
    var n = t.size,
      r = An(t, gg);
    return L(
      "svg",
      M(
        {
          height: n,
          width: n,
          viewBox: "0 0 20 20",
          "aria-hidden": "true",
          focusable: "false",
          css: wg,
        },
        r
      )
    );
  },
  Fl = function (t) {
    return L(
      Ep,
      M({ size: 20 }, t),
      L("path", {
        d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z",
      })
    );
  },
  Pp = function (t) {
    return L(
      Ep,
      M({ size: 20 }, t),
      L("path", {
        d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z",
      })
    );
  },
  xp = function (t) {
    var n = t.isFocused,
      r = t.theme,
      i = r.spacing.baseUnit,
      o = r.colors;
    return {
      label: "indicatorContainer",
      color: n ? o.neutral60 : o.neutral20,
      display: "flex",
      padding: i * 2,
      transition: "color 150ms",
      ":hover": { color: n ? o.neutral80 : o.neutral40 },
    };
  },
  Sg = xp,
  Og = function (t) {
    var n = t.children,
      r = t.className,
      i = t.cx,
      o = t.getStyles,
      u = t.innerProps;
    return L(
      "div",
      M(
        {
          css: o("dropdownIndicator", t),
          className: i({ indicator: !0, "dropdown-indicator": !0 }, r),
        },
        u
      ),
      n || L(Pp, null)
    );
  },
  Cg = xp,
  bg = function (t) {
    var n = t.children,
      r = t.className,
      i = t.cx,
      o = t.getStyles,
      u = t.innerProps;
    return L(
      "div",
      M(
        {
          css: o("clearIndicator", t),
          className: i({ indicator: !0, "clear-indicator": !0 }, r),
        },
        u
      ),
      n || L(Fl, null)
    );
  },
  Eg = function (t) {
    var n = t.isDisabled,
      r = t.theme,
      i = r.spacing.baseUnit,
      o = r.colors;
    return {
      label: "indicatorSeparator",
      alignSelf: "stretch",
      backgroundColor: n ? o.neutral10 : o.neutral20,
      marginBottom: i * 2,
      marginTop: i * 2,
      width: 1,
    };
  },
  Pg = function (t) {
    var n = t.className,
      r = t.cx,
      i = t.getStyles,
      o = t.innerProps;
    return L(
      "span",
      M({}, o, {
        css: i("indicatorSeparator", t),
        className: r({ "indicator-separator": !0 }, n),
      })
    );
  },
  xg = Ly(
    Sc ||
      (Sc = $y([
        `
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`,
      ]))
  ),
  kg = function (t) {
    var n = t.isFocused,
      r = t.size,
      i = t.theme,
      o = i.colors,
      u = i.spacing.baseUnit;
    return {
      label: "loadingIndicator",
      color: n ? o.neutral60 : o.neutral20,
      display: "flex",
      padding: u * 2,
      transition: "color 150ms",
      alignSelf: "center",
      fontSize: r,
      lineHeight: 1,
      marginRight: r,
      textAlign: "center",
      verticalAlign: "middle",
    };
  },
  fu = function (t) {
    var n = t.delay,
      r = t.offset;
    return L("span", {
      css: kl(
        {
          animation: ""
            .concat(xg, " 1s ease-in-out ")
            .concat(n, "ms infinite;"),
          backgroundColor: "currentColor",
          borderRadius: "1em",
          display: "inline-block",
          marginLeft: r ? "1em" : void 0,
          height: "1em",
          verticalAlign: "top",
          width: "1em",
        },
        "",
        ""
      ),
    });
  },
  kp = function (t) {
    var n = t.className,
      r = t.cx,
      i = t.getStyles,
      o = t.innerProps,
      u = t.isRtl;
    return L(
      "div",
      M(
        {
          css: i("loadingIndicator", t),
          className: r({ indicator: !0, "loading-indicator": !0 }, n),
        },
        o
      ),
      L(fu, { delay: 0, offset: u }),
      L(fu, { delay: 160, offset: !0 }),
      L(fu, { delay: 320, offset: !u })
    );
  };
kp.defaultProps = { size: 4 };
var Mg = function (t) {
    var n = t.isDisabled,
      r = t.isFocused,
      i = t.theme,
      o = i.colors,
      u = i.borderRadius,
      a = i.spacing;
    return {
      label: "control",
      alignItems: "center",
      backgroundColor: n ? o.neutral5 : o.neutral0,
      borderColor: n ? o.neutral10 : r ? o.primary : o.neutral20,
      borderRadius: u,
      borderStyle: "solid",
      borderWidth: 1,
      boxShadow: r ? "0 0 0 1px ".concat(o.primary) : void 0,
      cursor: "default",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      minHeight: a.controlHeight,
      outline: "0 !important",
      position: "relative",
      transition: "all 100ms",
      "&:hover": { borderColor: r ? o.primary : o.neutral30 },
    };
  },
  Tg = function (t) {
    var n = t.children,
      r = t.cx,
      i = t.getStyles,
      o = t.className,
      u = t.isDisabled,
      a = t.isFocused,
      l = t.innerRef,
      s = t.innerProps,
      f = t.menuIsOpen;
    return L(
      "div",
      M(
        {
          ref: l,
          css: i("control", t),
          className: r(
            {
              control: !0,
              "control--is-disabled": u,
              "control--is-focused": a,
              "control--menu-is-open": f,
            },
            o
          ),
        },
        s
      ),
      n
    );
  },
  Rg = ["data"],
  _g = function (t) {
    var n = t.theme.spacing;
    return { paddingBottom: n.baseUnit * 2, paddingTop: n.baseUnit * 2 };
  },
  Ig = function (t) {
    var n = t.children,
      r = t.className,
      i = t.cx,
      o = t.getStyles,
      u = t.Heading,
      a = t.headingProps,
      l = t.innerProps,
      s = t.label,
      f = t.theme,
      m = t.selectProps;
    return L(
      "div",
      M({ css: o("group", t), className: i({ group: !0 }, r) }, l),
      L(u, M({}, a, { selectProps: m, theme: f, getStyles: o, cx: i }), s),
      L("div", null, n)
    );
  },
  Fg = function (t) {
    var n = t.theme.spacing;
    return {
      label: "group",
      color: "#999",
      cursor: "default",
      display: "block",
      fontSize: "75%",
      fontWeight: 500,
      marginBottom: "0.25em",
      paddingLeft: n.baseUnit * 3,
      paddingRight: n.baseUnit * 3,
      textTransform: "uppercase",
    };
  },
  Lg = function (t) {
    var n = t.getStyles,
      r = t.cx,
      i = t.className,
      o = vp(t);
    o.data;
    var u = An(o, Rg);
    return L(
      "div",
      M(
        { css: n("groupHeading", t), className: r({ "group-heading": !0 }, i) },
        u
      )
    );
  },
  Ng = ["innerRef", "isDisabled", "isHidden", "inputClassName"],
  Dg = function (t) {
    var n = t.isDisabled,
      r = t.value,
      i = t.theme,
      o = i.spacing,
      u = i.colors;
    return Z(
      {
        margin: o.baseUnit / 2,
        paddingBottom: o.baseUnit / 2,
        paddingTop: o.baseUnit / 2,
        visibility: n ? "hidden" : "visible",
        color: u.neutral80,
        transform: r ? "translateZ(0)" : "",
      },
      Ag
    );
  },
  Mp = {
    gridArea: "1 / 2",
    font: "inherit",
    minWidth: "2px",
    border: 0,
    margin: 0,
    outline: 0,
    padding: 0,
  },
  Ag = {
    flex: "1 1 auto",
    display: "inline-grid",
    gridArea: "1 / 1 / 2 / 3",
    gridTemplateColumns: "0 min-content",
    "&:after": Z(
      {
        content: 'attr(data-value) " "',
        visibility: "hidden",
        whiteSpace: "pre",
      },
      Mp
    ),
  },
  Vg = function (t) {
    return Z(
      {
        label: "input",
        color: "inherit",
        background: 0,
        opacity: t ? 0 : 1,
        width: "100%",
      },
      Mp
    );
  },
  $g = function (t) {
    var n = t.className,
      r = t.cx,
      i = t.getStyles,
      o = t.value,
      u = vp(t),
      a = u.innerRef,
      l = u.isDisabled,
      s = u.isHidden,
      f = u.inputClassName,
      m = An(u, Ng);
    return L(
      "div",
      {
        className: r({ "input-container": !0 }, n),
        css: i("input", t),
        "data-value": o || "",
      },
      L(
        "input",
        M(
          { className: r({ input: !0 }, f), ref: a, style: Vg(s), disabled: l },
          m
        )
      )
    );
  },
  Ug = function (t) {
    var n = t.theme,
      r = n.spacing,
      i = n.borderRadius,
      o = n.colors;
    return {
      label: "multiValue",
      backgroundColor: o.neutral10,
      borderRadius: i / 2,
      display: "flex",
      margin: r.baseUnit / 2,
      minWidth: 0,
    };
  },
  jg = function (t) {
    var n = t.theme,
      r = n.borderRadius,
      i = n.colors,
      o = t.cropWithEllipsis;
    return {
      borderRadius: r / 2,
      color: i.neutral80,
      fontSize: "85%",
      overflow: "hidden",
      padding: 3,
      paddingLeft: 6,
      textOverflow: o || o === void 0 ? "ellipsis" : void 0,
      whiteSpace: "nowrap",
    };
  },
  zg = function (t) {
    var n = t.theme,
      r = n.spacing,
      i = n.borderRadius,
      o = n.colors,
      u = t.isFocused;
    return {
      alignItems: "center",
      borderRadius: i / 2,
      backgroundColor: u ? o.dangerLight : void 0,
      display: "flex",
      paddingLeft: r.baseUnit,
      paddingRight: r.baseUnit,
      ":hover": { backgroundColor: o.dangerLight, color: o.danger },
    };
  },
  Tp = function (t) {
    var n = t.children,
      r = t.innerProps;
    return L("div", r, n);
  },
  Hg = Tp,
  Qg = Tp;
function Bg(e) {
  var t = e.children,
    n = e.innerProps;
  return L("div", M({ role: "button" }, n), t || L(Fl, { size: 14 }));
}
var qg = function (t) {
    var n = t.children,
      r = t.className,
      i = t.components,
      o = t.cx,
      u = t.data,
      a = t.getStyles,
      l = t.innerProps,
      s = t.isDisabled,
      f = t.removeProps,
      m = t.selectProps,
      h = i.Container,
      y = i.Label,
      w = i.Remove;
    return L(Vy, null, function (S) {
      var d = S.css,
        c = S.cx;
      return L(
        h,
        {
          data: u,
          innerProps: Z(
            {
              className: c(
                d(a("multiValue", t)),
                o({ "multi-value": !0, "multi-value--is-disabled": s }, r)
              ),
            },
            l
          ),
          selectProps: m,
        },
        L(
          y,
          {
            data: u,
            innerProps: {
              className: c(
                d(a("multiValueLabel", t)),
                o({ "multi-value__label": !0 }, r)
              ),
            },
            selectProps: m,
          },
          n
        ),
        L(w, {
          data: u,
          innerProps: Z(
            {
              className: c(
                d(a("multiValueRemove", t)),
                o({ "multi-value__remove": !0 }, r)
              ),
              "aria-label": "Remove ".concat(n || "option"),
            },
            f
          ),
          selectProps: m,
        })
      );
    });
  },
  Wg = function (t) {
    var n = t.isDisabled,
      r = t.isFocused,
      i = t.isSelected,
      o = t.theme,
      u = o.spacing,
      a = o.colors;
    return {
      label: "option",
      backgroundColor: i ? a.primary : r ? a.primary25 : "transparent",
      color: n ? a.neutral20 : i ? a.neutral0 : "inherit",
      cursor: "default",
      display: "block",
      fontSize: "inherit",
      padding: "".concat(u.baseUnit * 2, "px ").concat(u.baseUnit * 3, "px"),
      width: "100%",
      userSelect: "none",
      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      ":active": { backgroundColor: n ? void 0 : i ? a.primary : a.primary50 },
    };
  },
  Kg = function (t) {
    var n = t.children,
      r = t.className,
      i = t.cx,
      o = t.getStyles,
      u = t.isDisabled,
      a = t.isFocused,
      l = t.isSelected,
      s = t.innerRef,
      f = t.innerProps;
    return L(
      "div",
      M(
        {
          css: o("option", t),
          className: i(
            {
              option: !0,
              "option--is-disabled": u,
              "option--is-focused": a,
              "option--is-selected": l,
            },
            r
          ),
          ref: s,
          "aria-disabled": u,
        },
        f
      ),
      n
    );
  },
  Yg = function (t) {
    var n = t.theme,
      r = n.spacing,
      i = n.colors;
    return {
      label: "placeholder",
      color: i.neutral50,
      gridArea: "1 / 1 / 2 / 3",
      marginLeft: r.baseUnit / 2,
      marginRight: r.baseUnit / 2,
    };
  },
  Gg = function (t) {
    var n = t.children,
      r = t.className,
      i = t.cx,
      o = t.getStyles,
      u = t.innerProps;
    return L(
      "div",
      M({ css: o("placeholder", t), className: i({ placeholder: !0 }, r) }, u),
      n
    );
  },
  Xg = function (t) {
    var n = t.isDisabled,
      r = t.theme,
      i = r.spacing,
      o = r.colors;
    return {
      label: "singleValue",
      color: n ? o.neutral40 : o.neutral80,
      gridArea: "1 / 1 / 2 / 3",
      marginLeft: i.baseUnit / 2,
      marginRight: i.baseUnit / 2,
      maxWidth: "100%",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    };
  },
  Zg = function (t) {
    var n = t.children,
      r = t.className,
      i = t.cx,
      o = t.getStyles,
      u = t.isDisabled,
      a = t.innerProps;
    return L(
      "div",
      M(
        {
          css: o("singleValue", t),
          className: i(
            { "single-value": !0, "single-value--is-disabled": u },
            r
          ),
        },
        a
      ),
      n
    );
  },
  Jg = {
    ClearIndicator: bg,
    Control: Tg,
    DropdownIndicator: Og,
    DownChevron: Pp,
    CrossIcon: Fl,
    Group: Ig,
    GroupHeading: Lg,
    IndicatorsContainer: yg,
    IndicatorSeparator: Pg,
    Input: $g,
    LoadingIndicator: kp,
    Menu: og,
    MenuList: ag,
    MenuPortal: fg,
    LoadingMessage: bp,
    NoOptionsMessage: Cp,
    MultiValue: qg,
    MultiValueContainer: Hg,
    MultiValueLabel: Qg,
    MultiValueRemove: Bg,
    Option: Kg,
    Placeholder: Gg,
    SelectContainer: pg,
    SingleValue: Zg,
    ValueContainer: mg,
  },
  e0 = function (t) {
    return Z(Z({}, Jg), t.components);
  };
function t0(e) {
  if (Array.isArray(e)) return e;
}
function n0(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r = [],
      i = !0,
      o = !1,
      u,
      a;
    try {
      for (
        n = n.call(e);
        !(i = (u = n.next()).done) && (r.push(u.value), !(t && r.length === t));
        i = !0
      );
    } catch (l) {
      (o = !0), (a = l);
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (o) throw a;
      }
    }
    return r;
  }
}
function fa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Rp(e, t) {
  if (e) {
    if (typeof e == "string") return fa(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return fa(e, t);
  }
}
function r0() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function du(e, t) {
  return t0(e) || n0(e, t) || Rp(e, t) || r0();
}
var i0 = [
  "defaultInputValue",
  "defaultMenuIsOpen",
  "defaultValue",
  "inputValue",
  "menuIsOpen",
  "onChange",
  "onInputChange",
  "onMenuClose",
  "onMenuOpen",
  "value",
];
function o0(e) {
  var t = e.defaultInputValue,
    n = t === void 0 ? "" : t,
    r = e.defaultMenuIsOpen,
    i = r === void 0 ? !1 : r,
    o = e.defaultValue,
    u = o === void 0 ? null : o,
    a = e.inputValue,
    l = e.menuIsOpen,
    s = e.onChange,
    f = e.onInputChange,
    m = e.onMenuClose,
    h = e.onMenuOpen,
    y = e.value,
    w = An(e, i0),
    S = k.useState(a !== void 0 ? a : n),
    d = du(S, 2),
    c = d[0],
    p = d[1],
    v = k.useState(l !== void 0 ? l : i),
    O = du(v, 2),
    P = O[0],
    C = O[1],
    b = k.useState(y !== void 0 ? y : u),
    R = du(b, 2),
    T = R[0],
    A = R[1],
    q = k.useCallback(
      function (te, ue) {
        typeof s == "function" && s(te, ue), A(te);
      },
      [s]
    ),
    Q = k.useCallback(
      function (te, ue) {
        var be;
        typeof f == "function" && (be = f(te, ue)), p(be !== void 0 ? be : te);
      },
      [f]
    ),
    N = k.useCallback(
      function () {
        typeof h == "function" && h(), C(!0);
      },
      [h]
    ),
    U = k.useCallback(
      function () {
        typeof m == "function" && m(), C(!1);
      },
      [m]
    ),
    V = a !== void 0 ? a : c,
    W = l !== void 0 ? l : P,
    ee = y !== void 0 ? y : T;
  return Z(
    Z({}, w),
    {},
    {
      inputValue: V,
      menuIsOpen: W,
      onChange: q,
      onInputChange: Q,
      onMenuClose: U,
      onMenuOpen: N,
      value: ee,
    }
  );
}
function u0(e) {
  if (Array.isArray(e)) return fa(e);
}
function a0(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function l0() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _p(e) {
  return u0(e) || a0(e) || Rp(e) || l0();
}
var Oc =
  Number.isNaN ||
  function (t) {
    return typeof t == "number" && t !== t;
  };
function s0(e, t) {
  return !!(e === t || (Oc(e) && Oc(t)));
}
function c0(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++) if (!s0(e[n], t[n])) return !1;
  return !0;
}
function f0(e, t) {
  t === void 0 && (t = c0);
  var n,
    r = [],
    i,
    o = !1;
  function u() {
    for (var a = [], l = 0; l < arguments.length; l++) a[l] = arguments[l];
    return (
      (o && n === this && t(a, r)) ||
        ((i = e.apply(this, a)), (o = !0), (n = this), (r = a)),
      i
    );
  }
  return u;
}
var d0 = {
    name: "7pg0cj-a11yText",
    styles:
      "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap",
  },
  Cc = function (t) {
    return L("span", M({ css: d0 }, t));
  },
  p0 = {
    guidance: function (t) {
      var n = t.isSearchable,
        r = t.isMulti,
        i = t.isDisabled,
        o = t.tabSelectsValue,
        u = t.context;
      switch (u) {
        case "menu":
          return "Use Up and Down to choose options"
            .concat(
              i ? "" : ", press Enter to select the currently focused option",
              ", press Escape to exit the menu"
            )
            .concat(
              o ? ", press Tab to select the option and exit the menu" : "",
              "."
            );
        case "input":
          return ""
            .concat(t["aria-label"] || "Select", " is focused ")
            .concat(
              n ? ",type to refine list" : "",
              ", press Down to open the menu, "
            )
            .concat(r ? " press left to focus selected values" : "");
        case "value":
          return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
        default:
          return "";
      }
    },
    onChange: function (t) {
      var n = t.action,
        r = t.label,
        i = r === void 0 ? "" : r,
        o = t.labels,
        u = t.isDisabled;
      switch (n) {
        case "deselect-option":
        case "pop-value":
        case "remove-value":
          return "option ".concat(i, ", deselected.");
        case "clear":
          return "All selected options have been cleared.";
        case "initial-input-focus":
          return "option"
            .concat(o.length > 1 ? "s" : "", " ")
            .concat(o.join(","), ", selected.");
        case "select-option":
          return u
            ? "option ".concat(i, " is disabled. Select another option.")
            : "option ".concat(i, ", selected.");
        default:
          return "";
      }
    },
    onFocus: function (t) {
      var n = t.context,
        r = t.focused,
        i = t.options,
        o = t.label,
        u = o === void 0 ? "" : o,
        a = t.selectValue,
        l = t.isDisabled,
        s = t.isSelected,
        f = function (w, S) {
          return w && w.length
            ? "".concat(w.indexOf(S) + 1, " of ").concat(w.length)
            : "";
        };
      if (n === "value" && a)
        return "value ".concat(u, " focused, ").concat(f(a, r), ".");
      if (n === "menu") {
        var m = l ? " disabled" : "",
          h = "".concat(s ? "selected" : "focused").concat(m);
        return "option ".concat(u, " ").concat(h, ", ").concat(f(i, r), ".");
      }
      return "";
    },
    onFilter: function (t) {
      var n = t.inputValue,
        r = t.resultsMessage;
      return "".concat(r).concat(n ? " for search term " + n : "", ".");
    },
  },
  h0 = function (t) {
    var n = t.ariaSelection,
      r = t.focusedOption,
      i = t.focusedValue,
      o = t.focusableOptions,
      u = t.isFocused,
      a = t.selectValue,
      l = t.selectProps,
      s = t.id,
      f = l.ariaLiveMessages,
      m = l.getOptionLabel,
      h = l.inputValue,
      y = l.isMulti,
      w = l.isOptionDisabled,
      S = l.isSearchable,
      d = l.menuIsOpen,
      c = l.options,
      p = l.screenReaderStatus,
      v = l.tabSelectsValue,
      O = l["aria-label"],
      P = l["aria-live"],
      C = k.useMemo(
        function () {
          return Z(Z({}, p0), f || {});
        },
        [f]
      ),
      b = k.useMemo(
        function () {
          var U = "";
          if (n && C.onChange) {
            var V = n.option,
              W = n.options,
              ee = n.removedValue,
              te = n.removedValues,
              ue = n.value,
              be = function (ce) {
                return Array.isArray(ce) ? null : ce;
              },
              x = ee || V || be(ue),
              I = x ? m(x) : "",
              F = W || te || void 0,
              z = F ? F.map(m) : [],
              K = Z({ isDisabled: x && w(x, a), label: I, labels: z }, n);
            U = C.onChange(K);
          }
          return U;
        },
        [n, C, w, a, m]
      ),
      R = k.useMemo(
        function () {
          var U = "",
            V = r || i,
            W = !!(r && a && a.includes(r));
          if (V && C.onFocus) {
            var ee = {
              focused: V,
              label: m(V),
              isDisabled: w(V, a),
              isSelected: W,
              options: c,
              context: V === r ? "menu" : "value",
              selectValue: a,
            };
            U = C.onFocus(ee);
          }
          return U;
        },
        [r, i, m, w, C, c, a]
      ),
      T = k.useMemo(
        function () {
          var U = "";
          if (d && c.length && C.onFilter) {
            var V = p({ count: o.length });
            U = C.onFilter({ inputValue: h, resultsMessage: V });
          }
          return U;
        },
        [o, h, d, C, c, p]
      ),
      A = k.useMemo(
        function () {
          var U = "";
          if (C.guidance) {
            var V = i ? "value" : d ? "menu" : "input";
            U = C.guidance({
              "aria-label": O,
              context: V,
              isDisabled: r && w(r, a),
              isMulti: y,
              isSearchable: S,
              tabSelectsValue: v,
            });
          }
          return U;
        },
        [O, r, i, y, w, S, d, C, a, v]
      ),
      q = "".concat(R, " ").concat(T, " ").concat(A),
      Q = L(
        k.Fragment,
        null,
        L("span", { id: "aria-selection" }, b),
        L("span", { id: "aria-context" }, q)
      ),
      N = (n == null ? void 0 : n.action) === "initial-input-focus";
    return L(
      k.Fragment,
      null,
      L(Cc, { id: s }, N && Q),
      L(
        Cc,
        {
          "aria-live": P,
          "aria-atomic": "false",
          "aria-relevant": "additions text",
        },
        u && !N && Q
      )
    );
  },
  da = [
    { base: "A", letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ" },
    { base: "AA", letters: "Ꜳ" },
    { base: "AE", letters: "ÆǼǢ" },
    { base: "AO", letters: "Ꜵ" },
    { base: "AU", letters: "Ꜷ" },
    { base: "AV", letters: "ꜸꜺ" },
    { base: "AY", letters: "Ꜽ" },
    { base: "B", letters: "BⒷＢḂḄḆɃƂƁ" },
    { base: "C", letters: "CⒸＣĆĈĊČÇḈƇȻꜾ" },
    { base: "D", letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ" },
    { base: "DZ", letters: "ǱǄ" },
    { base: "Dz", letters: "ǲǅ" },
    { base: "E", letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ" },
    { base: "F", letters: "FⒻＦḞƑꝻ" },
    { base: "G", letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ" },
    { base: "H", letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ" },
    { base: "I", letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ" },
    { base: "J", letters: "JⒿＪĴɈ" },
    { base: "K", letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ" },
    { base: "L", letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ" },
    { base: "LJ", letters: "Ǉ" },
    { base: "Lj", letters: "ǈ" },
    { base: "M", letters: "MⓂＭḾṀṂⱮƜ" },
    { base: "N", letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ" },
    { base: "NJ", letters: "Ǌ" },
    { base: "Nj", letters: "ǋ" },
    { base: "O", letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ" },
    { base: "OI", letters: "Ƣ" },
    { base: "OO", letters: "Ꝏ" },
    { base: "OU", letters: "Ȣ" },
    { base: "P", letters: "PⓅＰṔṖƤⱣꝐꝒꝔ" },
    { base: "Q", letters: "QⓆＱꝖꝘɊ" },
    { base: "R", letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ" },
    { base: "S", letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ" },
    { base: "T", letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ" },
    { base: "TZ", letters: "Ꜩ" },
    { base: "U", letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ" },
    { base: "V", letters: "VⓋＶṼṾƲꝞɅ" },
    { base: "VY", letters: "Ꝡ" },
    { base: "W", letters: "WⓌＷẀẂŴẆẄẈⱲ" },
    { base: "X", letters: "XⓍＸẊẌ" },
    { base: "Y", letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ" },
    { base: "Z", letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ" },
    { base: "a", letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ" },
    { base: "aa", letters: "ꜳ" },
    { base: "ae", letters: "æǽǣ" },
    { base: "ao", letters: "ꜵ" },
    { base: "au", letters: "ꜷ" },
    { base: "av", letters: "ꜹꜻ" },
    { base: "ay", letters: "ꜽ" },
    { base: "b", letters: "bⓑｂḃḅḇƀƃɓ" },
    { base: "c", letters: "cⓒｃćĉċčçḉƈȼꜿↄ" },
    { base: "d", letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ" },
    { base: "dz", letters: "ǳǆ" },
    { base: "e", letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ" },
    { base: "f", letters: "fⓕｆḟƒꝼ" },
    { base: "g", letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ" },
    { base: "h", letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ" },
    { base: "hv", letters: "ƕ" },
    { base: "i", letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı" },
    { base: "j", letters: "jⓙｊĵǰɉ" },
    { base: "k", letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ" },
    { base: "l", letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ" },
    { base: "lj", letters: "ǉ" },
    { base: "m", letters: "mⓜｍḿṁṃɱɯ" },
    { base: "n", letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ" },
    { base: "nj", letters: "ǌ" },
    { base: "o", letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ" },
    { base: "oi", letters: "ƣ" },
    { base: "ou", letters: "ȣ" },
    { base: "oo", letters: "ꝏ" },
    { base: "p", letters: "pⓟｐṕṗƥᵽꝑꝓꝕ" },
    { base: "q", letters: "qⓠｑɋꝗꝙ" },
    { base: "r", letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ" },
    { base: "s", letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ" },
    { base: "t", letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ" },
    { base: "tz", letters: "ꜩ" },
    { base: "u", letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ" },
    { base: "v", letters: "vⓥｖṽṿʋꝟʌ" },
    { base: "vy", letters: "ꝡ" },
    { base: "w", letters: "wⓦｗẁẃŵẇẅẘẉⱳ" },
    { base: "x", letters: "xⓧｘẋẍ" },
    { base: "y", letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ" },
    { base: "z", letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ" },
  ],
  m0 = new RegExp(
    "[" +
      da
        .map(function (e) {
          return e.letters;
        })
        .join("") +
      "]",
    "g"
  ),
  Ip = {};
for (var pu = 0; pu < da.length; pu++)
  for (var hu = da[pu], mu = 0; mu < hu.letters.length; mu++)
    Ip[hu.letters[mu]] = hu.base;
var Fp = function (t) {
    return t.replace(m0, function (n) {
      return Ip[n];
    });
  },
  v0 = f0(Fp),
  bc = function (t) {
    return t.replace(/^\s+|\s+$/g, "");
  },
  y0 = function (t) {
    return "".concat(t.label, " ").concat(t.value);
  },
  g0 = function (t) {
    return function (n, r) {
      if (n.data.__isNew__) return !0;
      var i = Z(
          {
            ignoreCase: !0,
            ignoreAccents: !0,
            stringify: y0,
            trim: !0,
            matchFrom: "any",
          },
          t
        ),
        o = i.ignoreCase,
        u = i.ignoreAccents,
        a = i.stringify,
        l = i.trim,
        s = i.matchFrom,
        f = l ? bc(r) : r,
        m = l ? bc(a(n)) : a(n);
      return (
        o && ((f = f.toLowerCase()), (m = m.toLowerCase())),
        u && ((f = v0(f)), (m = Fp(m))),
        s === "start" ? m.substr(0, f.length) === f : m.indexOf(f) > -1
      );
    };
  },
  w0 = ["innerRef"];
function S0(e) {
  var t = e.innerRef,
    n = An(e, w0);
  return L(
    "input",
    M({ ref: t }, n, {
      css: kl(
        {
          label: "dummyInput",
          background: 0,
          border: 0,
          caretColor: "transparent",
          fontSize: "inherit",
          gridArea: "1 / 1 / 2 / 3",
          outline: 0,
          padding: 0,
          width: 1,
          color: "transparent",
          left: -100,
          opacity: 0,
          position: "relative",
          transform: "scale(.01)",
        },
        "",
        ""
      ),
    })
  );
}
var O0 = function (t) {
  t.preventDefault(), t.stopPropagation();
};
function C0(e) {
  var t = e.isEnabled,
    n = e.onBottomArrive,
    r = e.onBottomLeave,
    i = e.onTopArrive,
    o = e.onTopLeave,
    u = k.useRef(!1),
    a = k.useRef(!1),
    l = k.useRef(0),
    s = k.useRef(null),
    f = k.useCallback(
      function (d, c) {
        if (s.current !== null) {
          var p = s.current,
            v = p.scrollTop,
            O = p.scrollHeight,
            P = p.clientHeight,
            C = s.current,
            b = c > 0,
            R = O - P - v,
            T = !1;
          R > c && u.current && (r && r(d), (u.current = !1)),
            b && a.current && (o && o(d), (a.current = !1)),
            b && c > R
              ? (n && !u.current && n(d),
                (C.scrollTop = O),
                (T = !0),
                (u.current = !0))
              : !b &&
                -c > v &&
                (i && !a.current && i(d),
                (C.scrollTop = 0),
                (T = !0),
                (a.current = !0)),
            T && O0(d);
        }
      },
      [n, r, i, o]
    ),
    m = k.useCallback(
      function (d) {
        f(d, d.deltaY);
      },
      [f]
    ),
    h = k.useCallback(function (d) {
      l.current = d.changedTouches[0].clientY;
    }, []),
    y = k.useCallback(
      function (d) {
        var c = l.current - d.changedTouches[0].clientY;
        f(d, c);
      },
      [f]
    ),
    w = k.useCallback(
      function (d) {
        if (d) {
          var c = Jy ? { passive: !1 } : !1;
          d.addEventListener("wheel", m, c),
            d.addEventListener("touchstart", h, c),
            d.addEventListener("touchmove", y, c);
        }
      },
      [y, h, m]
    ),
    S = k.useCallback(
      function (d) {
        d &&
          (d.removeEventListener("wheel", m, !1),
          d.removeEventListener("touchstart", h, !1),
          d.removeEventListener("touchmove", y, !1));
      },
      [y, h, m]
    );
  return (
    k.useEffect(
      function () {
        if (t) {
          var d = s.current;
          return (
            w(d),
            function () {
              S(d);
            }
          );
        }
      },
      [t, w, S]
    ),
    function (d) {
      s.current = d;
    }
  );
}
var Ec = ["boxSizing", "height", "overflow", "paddingRight", "position"],
  Pc = {
    boxSizing: "border-box",
    overflow: "hidden",
    position: "relative",
    height: "100%",
  };
function xc(e) {
  e.preventDefault();
}
function kc(e) {
  e.stopPropagation();
}
function Mc() {
  var e = this.scrollTop,
    t = this.scrollHeight,
    n = e + this.offsetHeight;
  e === 0 ? (this.scrollTop = 1) : n === t && (this.scrollTop = e - 1);
}
function Tc() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var Rc = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  ),
  Xn = 0,
  en = { capture: !1, passive: !1 };
function b0(e) {
  var t = e.isEnabled,
    n = e.accountForScrollbars,
    r = n === void 0 ? !0 : n,
    i = k.useRef({}),
    o = k.useRef(null),
    u = k.useCallback(
      function (l) {
        if (Rc) {
          var s = document.body,
            f = s && s.style;
          if (
            (r &&
              Ec.forEach(function (w) {
                var S = f && f[w];
                i.current[w] = S;
              }),
            r && Xn < 1)
          ) {
            var m = parseInt(i.current.paddingRight, 10) || 0,
              h = document.body ? document.body.clientWidth : 0,
              y = window.innerWidth - h + m || 0;
            Object.keys(Pc).forEach(function (w) {
              var S = Pc[w];
              f && (f[w] = S);
            }),
              f && (f.paddingRight = "".concat(y, "px"));
          }
          s &&
            Tc() &&
            (s.addEventListener("touchmove", xc, en),
            l &&
              (l.addEventListener("touchstart", Mc, en),
              l.addEventListener("touchmove", kc, en))),
            (Xn += 1);
        }
      },
      [r]
    ),
    a = k.useCallback(
      function (l) {
        if (Rc) {
          var s = document.body,
            f = s && s.style;
          (Xn = Math.max(Xn - 1, 0)),
            r &&
              Xn < 1 &&
              Ec.forEach(function (m) {
                var h = i.current[m];
                f && (f[m] = h);
              }),
            s &&
              Tc() &&
              (s.removeEventListener("touchmove", xc, en),
              l &&
                (l.removeEventListener("touchstart", Mc, en),
                l.removeEventListener("touchmove", kc, en)));
        }
      },
      [r]
    );
  return (
    k.useEffect(
      function () {
        if (t) {
          var l = o.current;
          return (
            u(l),
            function () {
              a(l);
            }
          );
        }
      },
      [t, u, a]
    ),
    function (l) {
      o.current = l;
    }
  );
}
var E0 = function () {
    return document.activeElement && document.activeElement.blur();
  },
  P0 = {
    name: "1kfdb0e",
    styles: "position:fixed;left:0;bottom:0;right:0;top:0",
  };
function x0(e) {
  var t = e.children,
    n = e.lockEnabled,
    r = e.captureEnabled,
    i = r === void 0 ? !0 : r,
    o = e.onBottomArrive,
    u = e.onBottomLeave,
    a = e.onTopArrive,
    l = e.onTopLeave,
    s = C0({
      isEnabled: i,
      onBottomArrive: o,
      onBottomLeave: u,
      onTopArrive: a,
      onTopLeave: l,
    }),
    f = b0({ isEnabled: n }),
    m = function (y) {
      s(y), f(y);
    };
  return L(k.Fragment, null, n && L("div", { onClick: E0, css: P0 }), t(m));
}
var k0 = function (t) {
    return t.label;
  },
  M0 = function (t) {
    return t.label;
  },
  T0 = function (t) {
    return t.value;
  },
  R0 = function (t) {
    return !!t.isDisabled;
  },
  _0 = {
    clearIndicator: Cg,
    container: dg,
    control: Mg,
    dropdownIndicator: Sg,
    group: _g,
    groupHeading: Fg,
    indicatorsContainer: vg,
    indicatorSeparator: Eg,
    input: Dg,
    loadingIndicator: kg,
    loadingMessage: sg,
    menu: ig,
    menuList: ug,
    menuPortal: cg,
    multiValue: Ug,
    multiValueLabel: jg,
    multiValueRemove: zg,
    noOptionsMessage: lg,
    option: Wg,
    placeholder: Yg,
    singleValue: Xg,
    valueContainer: hg,
  },
  I0 = {
    primary: "#2684FF",
    primary75: "#4C9AFF",
    primary50: "#B2D4FF",
    primary25: "#DEEBFF",
    danger: "#DE350B",
    dangerLight: "#FFBDAD",
    neutral0: "hsl(0, 0%, 100%)",
    neutral5: "hsl(0, 0%, 95%)",
    neutral10: "hsl(0, 0%, 90%)",
    neutral20: "hsl(0, 0%, 80%)",
    neutral30: "hsl(0, 0%, 70%)",
    neutral40: "hsl(0, 0%, 60%)",
    neutral50: "hsl(0, 0%, 50%)",
    neutral60: "hsl(0, 0%, 40%)",
    neutral70: "hsl(0, 0%, 30%)",
    neutral80: "hsl(0, 0%, 20%)",
    neutral90: "hsl(0, 0%, 10%)",
  },
  F0 = 4,
  Lp = 4,
  L0 = 38,
  N0 = Lp * 2,
  D0 = { baseUnit: Lp, controlHeight: L0, menuGutter: N0 },
  vu = { borderRadius: F0, colors: I0, spacing: D0 },
  A0 = {
    "aria-live": "polite",
    backspaceRemovesValue: !0,
    blurInputOnSelect: wc(),
    captureMenuScroll: !wc(),
    closeMenuOnSelect: !0,
    closeMenuOnScroll: !1,
    components: {},
    controlShouldRenderValue: !0,
    escapeClearsValue: !1,
    filterOption: g0(),
    formatGroupLabel: k0,
    getOptionLabel: M0,
    getOptionValue: T0,
    isDisabled: !1,
    isLoading: !1,
    isMulti: !1,
    isRtl: !1,
    isSearchable: !0,
    isOptionDisabled: R0,
    loadingMessage: function () {
      return "Loading...";
    },
    maxMenuHeight: 300,
    minMenuHeight: 140,
    menuIsOpen: !1,
    menuPlacement: "bottom",
    menuPosition: "absolute",
    menuShouldBlockScroll: !1,
    menuShouldScrollIntoView: !Xy(),
    noOptionsMessage: function () {
      return "No options";
    },
    openMenuOnFocus: !1,
    openMenuOnClick: !0,
    options: [],
    pageSize: 5,
    placeholder: "Select...",
    screenReaderStatus: function (t) {
      var n = t.count;
      return "".concat(n, " result").concat(n !== 1 ? "s" : "", " available");
    },
    styles: {},
    tabIndex: 0,
    tabSelectsValue: !0,
  };
function _c(e, t, n, r) {
  var i = Vp(e, t, n),
    o = $p(e, t, n),
    u = Ap(e, t),
    a = so(e, t);
  return {
    type: "option",
    data: t,
    isDisabled: i,
    isSelected: o,
    label: u,
    value: a,
    index: r,
  };
}
function Np(e, t) {
  return e.options
    .map(function (n, r) {
      if ("options" in n) {
        var i = n.options
          .map(function (u, a) {
            return _c(e, u, t, a);
          })
          .filter(function (u) {
            return Ic(e, u);
          });
        return i.length > 0
          ? { type: "group", data: n, options: i, index: r }
          : void 0;
      }
      var o = _c(e, n, t, r);
      return Ic(e, o) ? o : void 0;
    })
    .filter(eg);
}
function Dp(e) {
  return e.reduce(function (t, n) {
    return (
      n.type === "group"
        ? t.push.apply(
            t,
            _p(
              n.options.map(function (r) {
                return r.data;
              })
            )
          )
        : t.push(n.data),
      t
    );
  }, []);
}
function V0(e, t) {
  return Dp(Np(e, t));
}
function Ic(e, t) {
  var n = e.inputValue,
    r = n === void 0 ? "" : n,
    i = t.data,
    o = t.isSelected,
    u = t.label,
    a = t.value;
  return (!jp(e) || !o) && Up(e, { label: u, value: a, data: i }, r);
}
function $0(e, t) {
  var n = e.focusedValue,
    r = e.selectValue,
    i = r.indexOf(n);
  if (i > -1) {
    var o = t.indexOf(n);
    if (o > -1) return n;
    if (i < t.length) return t[i];
  }
  return null;
}
function U0(e, t) {
  var n = e.focusedOption;
  return n && t.indexOf(n) > -1 ? n : t[0];
}
var Ap = function (t, n) {
    return t.getOptionLabel(n);
  },
  so = function (t, n) {
    return t.getOptionValue(n);
  };
function Vp(e, t, n) {
  return typeof e.isOptionDisabled == "function"
    ? e.isOptionDisabled(t, n)
    : !1;
}
function $p(e, t, n) {
  if (n.indexOf(t) > -1) return !0;
  if (typeof e.isOptionSelected == "function") return e.isOptionSelected(t, n);
  var r = so(e, t);
  return n.some(function (i) {
    return so(e, i) === r;
  });
}
function Up(e, t, n) {
  return e.filterOption ? e.filterOption(t, n) : !0;
}
var jp = function (t) {
    var n = t.hideSelectedOptions,
      r = t.isMulti;
    return n === void 0 ? r : n;
  },
  j0 = 1,
  zp = (function (e) {
    Rl(n, e);
    var t = _l(n);
    function n(r) {
      var i;
      return (
        Ml(this, n),
        (i = t.call(this, r)),
        (i.state = {
          ariaSelection: null,
          focusedOption: null,
          focusedValue: null,
          inputIsHidden: !1,
          isFocused: !1,
          selectValue: [],
          clearFocusValueOnUpdate: !1,
          prevWasFocused: !1,
          inputIsHiddenAfterUpdate: void 0,
          prevProps: void 0,
        }),
        (i.blockOptionHover = !1),
        (i.isComposing = !1),
        (i.commonProps = void 0),
        (i.initialTouchX = 0),
        (i.initialTouchY = 0),
        (i.instancePrefix = ""),
        (i.openAfterFocus = !1),
        (i.scrollToFocusedOptionOnUpdate = !1),
        (i.userIsDragging = void 0),
        (i.controlRef = null),
        (i.getControlRef = function (o) {
          i.controlRef = o;
        }),
        (i.focusedOptionRef = null),
        (i.getFocusedOptionRef = function (o) {
          i.focusedOptionRef = o;
        }),
        (i.menuListRef = null),
        (i.getMenuListRef = function (o) {
          i.menuListRef = o;
        }),
        (i.inputRef = null),
        (i.getInputRef = function (o) {
          i.inputRef = o;
        }),
        (i.focus = i.focusInput),
        (i.blur = i.blurInput),
        (i.onChange = function (o, u) {
          var a = i.props,
            l = a.onChange,
            s = a.name;
          (u.name = s), i.ariaOnChange(o, u), l(o, u);
        }),
        (i.setValue = function (o, u, a) {
          var l = i.props,
            s = l.closeMenuOnSelect,
            f = l.isMulti,
            m = l.inputValue;
          i.onInputChange("", { action: "set-value", prevInputValue: m }),
            s &&
              (i.setState({ inputIsHiddenAfterUpdate: !f }), i.onMenuClose()),
            i.setState({ clearFocusValueOnUpdate: !0 }),
            i.onChange(o, { action: u, option: a });
        }),
        (i.selectOption = function (o) {
          var u = i.props,
            a = u.blurInputOnSelect,
            l = u.isMulti,
            s = u.name,
            f = i.state.selectValue,
            m = l && i.isOptionSelected(o, f),
            h = i.isOptionDisabled(o, f);
          if (m) {
            var y = i.getOptionValue(o);
            i.setValue(
              f.filter(function (w) {
                return i.getOptionValue(w) !== y;
              }),
              "deselect-option",
              o
            );
          } else if (!h)
            l
              ? i.setValue([].concat(_p(f), [o]), "select-option", o)
              : i.setValue(o, "select-option");
          else {
            i.ariaOnChange(o, { action: "select-option", option: o, name: s });
            return;
          }
          a && i.blurInput();
        }),
        (i.removeValue = function (o) {
          var u = i.props.isMulti,
            a = i.state.selectValue,
            l = i.getOptionValue(o),
            s = a.filter(function (m) {
              return i.getOptionValue(m) !== l;
            }),
            f = ai(u, s, s[0] || null);
          i.onChange(f, { action: "remove-value", removedValue: o }),
            i.focusInput();
        }),
        (i.clearValue = function () {
          var o = i.state.selectValue;
          i.onChange(ai(i.props.isMulti, [], null), {
            action: "clear",
            removedValues: o,
          });
        }),
        (i.popValue = function () {
          var o = i.props.isMulti,
            u = i.state.selectValue,
            a = u[u.length - 1],
            l = u.slice(0, u.length - 1),
            s = ai(o, l, l[0] || null);
          i.onChange(s, { action: "pop-value", removedValue: a });
        }),
        (i.getValue = function () {
          return i.state.selectValue;
        }),
        (i.cx = function () {
          for (var o = arguments.length, u = new Array(o), a = 0; a < o; a++)
            u[a] = arguments[a];
          return qy.apply(void 0, [i.props.classNamePrefix].concat(u));
        }),
        (i.getOptionLabel = function (o) {
          return Ap(i.props, o);
        }),
        (i.getOptionValue = function (o) {
          return so(i.props, o);
        }),
        (i.getStyles = function (o, u) {
          var a = _0[o](u);
          a.boxSizing = "border-box";
          var l = i.props.styles[o];
          return l ? l(a, u) : a;
        }),
        (i.getElementId = function (o) {
          return "".concat(i.instancePrefix, "-").concat(o);
        }),
        (i.getComponents = function () {
          return e0(i.props);
        }),
        (i.buildCategorizedOptions = function () {
          return Np(i.props, i.state.selectValue);
        }),
        (i.getCategorizedOptions = function () {
          return i.props.menuIsOpen ? i.buildCategorizedOptions() : [];
        }),
        (i.buildFocusableOptions = function () {
          return Dp(i.buildCategorizedOptions());
        }),
        (i.getFocusableOptions = function () {
          return i.props.menuIsOpen ? i.buildFocusableOptions() : [];
        }),
        (i.ariaOnChange = function (o, u) {
          i.setState({ ariaSelection: Z({ value: o }, u) });
        }),
        (i.onMenuMouseDown = function (o) {
          o.button === 0 &&
            (o.stopPropagation(), o.preventDefault(), i.focusInput());
        }),
        (i.onMenuMouseMove = function (o) {
          i.blockOptionHover = !1;
        }),
        (i.onControlMouseDown = function (o) {
          var u = i.props.openMenuOnClick;
          i.state.isFocused
            ? i.props.menuIsOpen
              ? o.target.tagName !== "INPUT" &&
                o.target.tagName !== "TEXTAREA" &&
                i.onMenuClose()
              : u && i.openMenu("first")
            : (u && (i.openAfterFocus = !0), i.focusInput()),
            o.target.tagName !== "INPUT" &&
              o.target.tagName !== "TEXTAREA" &&
              o.preventDefault();
        }),
        (i.onDropdownIndicatorMouseDown = function (o) {
          if (
            !(o && o.type === "mousedown" && o.button !== 0) &&
            !i.props.isDisabled
          ) {
            var u = i.props,
              a = u.isMulti,
              l = u.menuIsOpen;
            i.focusInput(),
              l
                ? (i.setState({ inputIsHiddenAfterUpdate: !a }),
                  i.onMenuClose())
                : i.openMenu("first"),
              o.preventDefault(),
              o.stopPropagation();
          }
        }),
        (i.onClearIndicatorMouseDown = function (o) {
          (o && o.type === "mousedown" && o.button !== 0) ||
            (i.clearValue(),
            o.preventDefault(),
            o.stopPropagation(),
            (i.openAfterFocus = !1),
            o.type === "touchend"
              ? i.focusInput()
              : setTimeout(function () {
                  return i.focusInput();
                }));
        }),
        (i.onScroll = function (o) {
          typeof i.props.closeMenuOnScroll == "boolean"
            ? o.target instanceof HTMLElement &&
              Il(o.target) &&
              i.props.onMenuClose()
            : typeof i.props.closeMenuOnScroll == "function" &&
              i.props.closeMenuOnScroll(o) &&
              i.props.onMenuClose();
        }),
        (i.onCompositionStart = function () {
          i.isComposing = !0;
        }),
        (i.onCompositionEnd = function () {
          i.isComposing = !1;
        }),
        (i.onTouchStart = function (o) {
          var u = o.touches,
            a = u && u.item(0);
          a &&
            ((i.initialTouchX = a.clientX),
            (i.initialTouchY = a.clientY),
            (i.userIsDragging = !1));
        }),
        (i.onTouchMove = function (o) {
          var u = o.touches,
            a = u && u.item(0);
          if (a) {
            var l = Math.abs(a.clientX - i.initialTouchX),
              s = Math.abs(a.clientY - i.initialTouchY),
              f = 5;
            i.userIsDragging = l > f || s > f;
          }
        }),
        (i.onTouchEnd = function (o) {
          i.userIsDragging ||
            (i.controlRef &&
              !i.controlRef.contains(o.target) &&
              i.menuListRef &&
              !i.menuListRef.contains(o.target) &&
              i.blurInput(),
            (i.initialTouchX = 0),
            (i.initialTouchY = 0));
        }),
        (i.onControlTouchEnd = function (o) {
          i.userIsDragging || i.onControlMouseDown(o);
        }),
        (i.onClearIndicatorTouchEnd = function (o) {
          i.userIsDragging || i.onClearIndicatorMouseDown(o);
        }),
        (i.onDropdownIndicatorTouchEnd = function (o) {
          i.userIsDragging || i.onDropdownIndicatorMouseDown(o);
        }),
        (i.handleInputChange = function (o) {
          var u = i.props.inputValue,
            a = o.currentTarget.value;
          i.setState({ inputIsHiddenAfterUpdate: !1 }),
            i.onInputChange(a, { action: "input-change", prevInputValue: u }),
            i.props.menuIsOpen || i.onMenuOpen();
        }),
        (i.onInputFocus = function (o) {
          i.props.onFocus && i.props.onFocus(o),
            i.setState({ inputIsHiddenAfterUpdate: !1, isFocused: !0 }),
            (i.openAfterFocus || i.props.openMenuOnFocus) &&
              i.openMenu("first"),
            (i.openAfterFocus = !1);
        }),
        (i.onInputBlur = function (o) {
          var u = i.props.inputValue;
          if (i.menuListRef && i.menuListRef.contains(document.activeElement)) {
            i.inputRef.focus();
            return;
          }
          i.props.onBlur && i.props.onBlur(o),
            i.onInputChange("", { action: "input-blur", prevInputValue: u }),
            i.onMenuClose(),
            i.setState({ focusedValue: null, isFocused: !1 });
        }),
        (i.onOptionHover = function (o) {
          i.blockOptionHover ||
            i.state.focusedOption === o ||
            i.setState({ focusedOption: o });
        }),
        (i.shouldHideSelectedOptions = function () {
          return jp(i.props);
        }),
        (i.onKeyDown = function (o) {
          var u = i.props,
            a = u.isMulti,
            l = u.backspaceRemovesValue,
            s = u.escapeClearsValue,
            f = u.inputValue,
            m = u.isClearable,
            h = u.isDisabled,
            y = u.menuIsOpen,
            w = u.onKeyDown,
            S = u.tabSelectsValue,
            d = u.openMenuOnFocus,
            c = i.state,
            p = c.focusedOption,
            v = c.focusedValue,
            O = c.selectValue;
          if (!h && !(typeof w == "function" && (w(o), o.defaultPrevented))) {
            switch (((i.blockOptionHover = !0), o.key)) {
              case "ArrowLeft":
                if (!a || f) return;
                i.focusValue("previous");
                break;
              case "ArrowRight":
                if (!a || f) return;
                i.focusValue("next");
                break;
              case "Delete":
              case "Backspace":
                if (f) return;
                if (v) i.removeValue(v);
                else {
                  if (!l) return;
                  a ? i.popValue() : m && i.clearValue();
                }
                break;
              case "Tab":
                if (
                  i.isComposing ||
                  o.shiftKey ||
                  !y ||
                  !S ||
                  !p ||
                  (d && i.isOptionSelected(p, O))
                )
                  return;
                i.selectOption(p);
                break;
              case "Enter":
                if (o.keyCode === 229) break;
                if (y) {
                  if (!p || i.isComposing) return;
                  i.selectOption(p);
                  break;
                }
                return;
              case "Escape":
                y
                  ? (i.setState({ inputIsHiddenAfterUpdate: !1 }),
                    i.onInputChange("", {
                      action: "menu-close",
                      prevInputValue: f,
                    }),
                    i.onMenuClose())
                  : m && s && i.clearValue();
                break;
              case " ":
                if (f) return;
                if (!y) {
                  i.openMenu("first");
                  break;
                }
                if (!p) return;
                i.selectOption(p);
                break;
              case "ArrowUp":
                y ? i.focusOption("up") : i.openMenu("last");
                break;
              case "ArrowDown":
                y ? i.focusOption("down") : i.openMenu("first");
                break;
              case "PageUp":
                if (!y) return;
                i.focusOption("pageup");
                break;
              case "PageDown":
                if (!y) return;
                i.focusOption("pagedown");
                break;
              case "Home":
                if (!y) return;
                i.focusOption("first");
                break;
              case "End":
                if (!y) return;
                i.focusOption("last");
                break;
              default:
                return;
            }
            o.preventDefault();
          }
        }),
        (i.instancePrefix = "react-select-" + (i.props.instanceId || ++j0)),
        (i.state.selectValue = gc(r.value)),
        i
      );
    }
    return (
      Tl(
        n,
        [
          {
            key: "componentDidMount",
            value: function () {
              this.startListeningComposition(),
                this.startListeningToTouch(),
                this.props.closeMenuOnScroll &&
                  document &&
                  document.addEventListener &&
                  document.addEventListener("scroll", this.onScroll, !0),
                this.props.autoFocus && this.focusInput();
            },
          },
          {
            key: "componentDidUpdate",
            value: function (i) {
              var o = this.props,
                u = o.isDisabled,
                a = o.menuIsOpen,
                l = this.state.isFocused;
              ((l && !u && i.isDisabled) || (l && a && !i.menuIsOpen)) &&
                this.focusInput(),
                l &&
                  u &&
                  !i.isDisabled &&
                  this.setState({ isFocused: !1 }, this.onMenuClose),
                this.menuListRef &&
                  this.focusedOptionRef &&
                  this.scrollToFocusedOptionOnUpdate &&
                  (Yy(this.menuListRef, this.focusedOptionRef),
                  (this.scrollToFocusedOptionOnUpdate = !1));
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this.stopListeningComposition(),
                this.stopListeningToTouch(),
                document.removeEventListener("scroll", this.onScroll, !0);
            },
          },
          {
            key: "onMenuOpen",
            value: function () {
              this.props.onMenuOpen();
            },
          },
          {
            key: "onMenuClose",
            value: function () {
              this.onInputChange("", {
                action: "menu-close",
                prevInputValue: this.props.inputValue,
              }),
                this.props.onMenuClose();
            },
          },
          {
            key: "onInputChange",
            value: function (i, o) {
              this.props.onInputChange(i, o);
            },
          },
          {
            key: "focusInput",
            value: function () {
              this.inputRef && this.inputRef.focus();
            },
          },
          {
            key: "blurInput",
            value: function () {
              this.inputRef && this.inputRef.blur();
            },
          },
          {
            key: "openMenu",
            value: function (i) {
              var o = this,
                u = this.state,
                a = u.selectValue,
                l = u.isFocused,
                s = this.buildFocusableOptions(),
                f = i === "first" ? 0 : s.length - 1;
              if (!this.props.isMulti) {
                var m = s.indexOf(a[0]);
                m > -1 && (f = m);
              }
              (this.scrollToFocusedOptionOnUpdate = !(l && this.menuListRef)),
                this.setState(
                  {
                    inputIsHiddenAfterUpdate: !1,
                    focusedValue: null,
                    focusedOption: s[f],
                  },
                  function () {
                    return o.onMenuOpen();
                  }
                );
            },
          },
          {
            key: "focusValue",
            value: function (i) {
              var o = this.state,
                u = o.selectValue,
                a = o.focusedValue;
              if (this.props.isMulti) {
                this.setState({ focusedOption: null });
                var l = u.indexOf(a);
                a || (l = -1);
                var s = u.length - 1,
                  f = -1;
                if (u.length) {
                  switch (i) {
                    case "previous":
                      l === 0 ? (f = 0) : l === -1 ? (f = s) : (f = l - 1);
                      break;
                    case "next":
                      l > -1 && l < s && (f = l + 1);
                      break;
                  }
                  this.setState({
                    inputIsHidden: f !== -1,
                    focusedValue: u[f],
                  });
                }
              }
            },
          },
          {
            key: "focusOption",
            value: function () {
              var i =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : "first",
                o = this.props.pageSize,
                u = this.state.focusedOption,
                a = this.getFocusableOptions();
              if (a.length) {
                var l = 0,
                  s = a.indexOf(u);
                u || (s = -1),
                  i === "up"
                    ? (l = s > 0 ? s - 1 : a.length - 1)
                    : i === "down"
                    ? (l = (s + 1) % a.length)
                    : i === "pageup"
                    ? ((l = s - o), l < 0 && (l = 0))
                    : i === "pagedown"
                    ? ((l = s + o), l > a.length - 1 && (l = a.length - 1))
                    : i === "last" && (l = a.length - 1),
                  (this.scrollToFocusedOptionOnUpdate = !0),
                  this.setState({ focusedOption: a[l], focusedValue: null });
              }
            },
          },
          {
            key: "getTheme",
            value: function () {
              return this.props.theme
                ? typeof this.props.theme == "function"
                  ? this.props.theme(vu)
                  : Z(Z({}, vu), this.props.theme)
                : vu;
            },
          },
          {
            key: "getCommonProps",
            value: function () {
              var i = this.clearValue,
                o = this.cx,
                u = this.getStyles,
                a = this.getValue,
                l = this.selectOption,
                s = this.setValue,
                f = this.props,
                m = f.isMulti,
                h = f.isRtl,
                y = f.options,
                w = this.hasValue();
              return {
                clearValue: i,
                cx: o,
                getStyles: u,
                getValue: a,
                hasValue: w,
                isMulti: m,
                isRtl: h,
                options: y,
                selectOption: l,
                selectProps: f,
                setValue: s,
                theme: this.getTheme(),
              };
            },
          },
          {
            key: "hasValue",
            value: function () {
              var i = this.state.selectValue;
              return i.length > 0;
            },
          },
          {
            key: "hasOptions",
            value: function () {
              return !!this.getFocusableOptions().length;
            },
          },
          {
            key: "isClearable",
            value: function () {
              var i = this.props,
                o = i.isClearable,
                u = i.isMulti;
              return o === void 0 ? u : o;
            },
          },
          {
            key: "isOptionDisabled",
            value: function (i, o) {
              return Vp(this.props, i, o);
            },
          },
          {
            key: "isOptionSelected",
            value: function (i, o) {
              return $p(this.props, i, o);
            },
          },
          {
            key: "filterOption",
            value: function (i, o) {
              return Up(this.props, i, o);
            },
          },
          {
            key: "formatOptionLabel",
            value: function (i, o) {
              if (typeof this.props.formatOptionLabel == "function") {
                var u = this.props.inputValue,
                  a = this.state.selectValue;
                return this.props.formatOptionLabel(i, {
                  context: o,
                  inputValue: u,
                  selectValue: a,
                });
              } else return this.getOptionLabel(i);
            },
          },
          {
            key: "formatGroupLabel",
            value: function (i) {
              return this.props.formatGroupLabel(i);
            },
          },
          {
            key: "startListeningComposition",
            value: function () {
              document &&
                document.addEventListener &&
                (document.addEventListener(
                  "compositionstart",
                  this.onCompositionStart,
                  !1
                ),
                document.addEventListener(
                  "compositionend",
                  this.onCompositionEnd,
                  !1
                ));
            },
          },
          {
            key: "stopListeningComposition",
            value: function () {
              document &&
                document.removeEventListener &&
                (document.removeEventListener(
                  "compositionstart",
                  this.onCompositionStart
                ),
                document.removeEventListener(
                  "compositionend",
                  this.onCompositionEnd
                ));
            },
          },
          {
            key: "startListeningToTouch",
            value: function () {
              document &&
                document.addEventListener &&
                (document.addEventListener("touchstart", this.onTouchStart, !1),
                document.addEventListener("touchmove", this.onTouchMove, !1),
                document.addEventListener("touchend", this.onTouchEnd, !1));
            },
          },
          {
            key: "stopListeningToTouch",
            value: function () {
              document &&
                document.removeEventListener &&
                (document.removeEventListener("touchstart", this.onTouchStart),
                document.removeEventListener("touchmove", this.onTouchMove),
                document.removeEventListener("touchend", this.onTouchEnd));
            },
          },
          {
            key: "renderInput",
            value: function () {
              var i = this.props,
                o = i.isDisabled,
                u = i.isSearchable,
                a = i.inputId,
                l = i.inputValue,
                s = i.tabIndex,
                f = i.form,
                m = i.menuIsOpen,
                h = this.getComponents(),
                y = h.Input,
                w = this.state,
                S = w.inputIsHidden,
                d = w.ariaSelection,
                c = this.commonProps,
                p = a || this.getElementId("input"),
                v = Z(
                  Z(
                    {
                      "aria-autocomplete": "list",
                      "aria-expanded": m,
                      "aria-haspopup": !0,
                      "aria-controls": this.getElementId("listbox"),
                      "aria-owns": this.getElementId("listbox"),
                      "aria-errormessage": this.props["aria-errormessage"],
                      "aria-invalid": this.props["aria-invalid"],
                      "aria-label": this.props["aria-label"],
                      "aria-labelledby": this.props["aria-labelledby"],
                      role: "combobox",
                    },
                    !u && { "aria-readonly": !0 }
                  ),
                  this.hasValue()
                    ? (d == null ? void 0 : d.action) ===
                        "initial-input-focus" && {
                        "aria-describedby": this.getElementId("live-region"),
                      }
                    : { "aria-describedby": this.getElementId("placeholder") }
                );
              return u
                ? k.createElement(
                    y,
                    M(
                      {},
                      c,
                      {
                        autoCapitalize: "none",
                        autoComplete: "off",
                        autoCorrect: "off",
                        id: p,
                        innerRef: this.getInputRef,
                        isDisabled: o,
                        isHidden: S,
                        onBlur: this.onInputBlur,
                        onChange: this.handleInputChange,
                        onFocus: this.onInputFocus,
                        spellCheck: "false",
                        tabIndex: s,
                        form: f,
                        type: "text",
                        value: l,
                      },
                      v
                    )
                  )
                : k.createElement(
                    S0,
                    M(
                      {
                        id: p,
                        innerRef: this.getInputRef,
                        onBlur: this.onInputBlur,
                        onChange: ao,
                        onFocus: this.onInputFocus,
                        disabled: o,
                        tabIndex: s,
                        inputMode: "none",
                        form: f,
                        value: "",
                      },
                      v
                    )
                  );
            },
          },
          {
            key: "renderPlaceholderOrValue",
            value: function () {
              var i = this,
                o = this.getComponents(),
                u = o.MultiValue,
                a = o.MultiValueContainer,
                l = o.MultiValueLabel,
                s = o.MultiValueRemove,
                f = o.SingleValue,
                m = o.Placeholder,
                h = this.commonProps,
                y = this.props,
                w = y.controlShouldRenderValue,
                S = y.isDisabled,
                d = y.isMulti,
                c = y.inputValue,
                p = y.placeholder,
                v = this.state,
                O = v.selectValue,
                P = v.focusedValue,
                C = v.isFocused;
              if (!this.hasValue() || !w)
                return c
                  ? null
                  : k.createElement(
                      m,
                      M({}, h, {
                        key: "placeholder",
                        isDisabled: S,
                        isFocused: C,
                        innerProps: { id: this.getElementId("placeholder") },
                      }),
                      p
                    );
              if (d)
                return O.map(function (R, T) {
                  var A = R === P,
                    q = ""
                      .concat(i.getOptionLabel(R), "-")
                      .concat(i.getOptionValue(R));
                  return k.createElement(
                    u,
                    M({}, h, {
                      components: { Container: a, Label: l, Remove: s },
                      isFocused: A,
                      isDisabled: S,
                      key: q,
                      index: T,
                      removeProps: {
                        onClick: function () {
                          return i.removeValue(R);
                        },
                        onTouchEnd: function () {
                          return i.removeValue(R);
                        },
                        onMouseDown: function (N) {
                          N.preventDefault(), N.stopPropagation();
                        },
                      },
                      data: R,
                    }),
                    i.formatOptionLabel(R, "value")
                  );
                });
              if (c) return null;
              var b = O[0];
              return k.createElement(
                f,
                M({}, h, { data: b, isDisabled: S }),
                this.formatOptionLabel(b, "value")
              );
            },
          },
          {
            key: "renderClearIndicator",
            value: function () {
              var i = this.getComponents(),
                o = i.ClearIndicator,
                u = this.commonProps,
                a = this.props,
                l = a.isDisabled,
                s = a.isLoading,
                f = this.state.isFocused;
              if (!this.isClearable() || !o || l || !this.hasValue() || s)
                return null;
              var m = {
                onMouseDown: this.onClearIndicatorMouseDown,
                onTouchEnd: this.onClearIndicatorTouchEnd,
                "aria-hidden": "true",
              };
              return k.createElement(
                o,
                M({}, u, { innerProps: m, isFocused: f })
              );
            },
          },
          {
            key: "renderLoadingIndicator",
            value: function () {
              var i = this.getComponents(),
                o = i.LoadingIndicator,
                u = this.commonProps,
                a = this.props,
                l = a.isDisabled,
                s = a.isLoading,
                f = this.state.isFocused;
              if (!o || !s) return null;
              var m = { "aria-hidden": "true" };
              return k.createElement(
                o,
                M({}, u, { innerProps: m, isDisabled: l, isFocused: f })
              );
            },
          },
          {
            key: "renderIndicatorSeparator",
            value: function () {
              var i = this.getComponents(),
                o = i.DropdownIndicator,
                u = i.IndicatorSeparator;
              if (!o || !u) return null;
              var a = this.commonProps,
                l = this.props.isDisabled,
                s = this.state.isFocused;
              return k.createElement(
                u,
                M({}, a, { isDisabled: l, isFocused: s })
              );
            },
          },
          {
            key: "renderDropdownIndicator",
            value: function () {
              var i = this.getComponents(),
                o = i.DropdownIndicator;
              if (!o) return null;
              var u = this.commonProps,
                a = this.props.isDisabled,
                l = this.state.isFocused,
                s = {
                  onMouseDown: this.onDropdownIndicatorMouseDown,
                  onTouchEnd: this.onDropdownIndicatorTouchEnd,
                  "aria-hidden": "true",
                };
              return k.createElement(
                o,
                M({}, u, { innerProps: s, isDisabled: a, isFocused: l })
              );
            },
          },
          {
            key: "renderMenu",
            value: function () {
              var i = this,
                o = this.getComponents(),
                u = o.Group,
                a = o.GroupHeading,
                l = o.Menu,
                s = o.MenuList,
                f = o.MenuPortal,
                m = o.LoadingMessage,
                h = o.NoOptionsMessage,
                y = o.Option,
                w = this.commonProps,
                S = this.state.focusedOption,
                d = this.props,
                c = d.captureMenuScroll,
                p = d.inputValue,
                v = d.isLoading,
                O = d.loadingMessage,
                P = d.minMenuHeight,
                C = d.maxMenuHeight,
                b = d.menuIsOpen,
                R = d.menuPlacement,
                T = d.menuPosition,
                A = d.menuPortalTarget,
                q = d.menuShouldBlockScroll,
                Q = d.menuShouldScrollIntoView,
                N = d.noOptionsMessage,
                U = d.onMenuScrollToTop,
                V = d.onMenuScrollToBottom;
              if (!b) return null;
              var W = function (F, z) {
                  var K = F.type,
                    se = F.data,
                    ce = F.isDisabled,
                    He = F.isSelected,
                    Qe = F.label,
                    nh = F.value,
                    Dl = S === se,
                    Al = ce
                      ? void 0
                      : function () {
                          return i.onOptionHover(se);
                        },
                    rh = ce
                      ? void 0
                      : function () {
                          return i.selectOption(se);
                        },
                    Vl = "".concat(i.getElementId("option"), "-").concat(z),
                    ih = {
                      id: Vl,
                      onClick: rh,
                      onMouseMove: Al,
                      onMouseOver: Al,
                      tabIndex: -1,
                    };
                  return k.createElement(
                    y,
                    M({}, w, {
                      innerProps: ih,
                      data: se,
                      isDisabled: ce,
                      isSelected: He,
                      key: Vl,
                      label: Qe,
                      type: K,
                      value: nh,
                      isFocused: Dl,
                      innerRef: Dl ? i.getFocusedOptionRef : void 0,
                    }),
                    i.formatOptionLabel(F.data, "menu")
                  );
                },
                ee;
              if (this.hasOptions())
                ee = this.getCategorizedOptions().map(function (I) {
                  if (I.type === "group") {
                    var F = I.data,
                      z = I.options,
                      K = I.index,
                      se = "".concat(i.getElementId("group"), "-").concat(K),
                      ce = "".concat(se, "-heading");
                    return k.createElement(
                      u,
                      M({}, w, {
                        key: se,
                        data: F,
                        options: z,
                        Heading: a,
                        headingProps: { id: ce, data: I.data },
                        label: i.formatGroupLabel(I.data),
                      }),
                      I.options.map(function (He) {
                        return W(He, "".concat(K, "-").concat(He.index));
                      })
                    );
                  } else if (I.type === "option")
                    return W(I, "".concat(I.index));
                });
              else if (v) {
                var te = O({ inputValue: p });
                if (te === null) return null;
                ee = k.createElement(m, w, te);
              } else {
                var ue = N({ inputValue: p });
                if (ue === null) return null;
                ee = k.createElement(h, w, ue);
              }
              var be = {
                  minMenuHeight: P,
                  maxMenuHeight: C,
                  menuPlacement: R,
                  menuPosition: T,
                  menuShouldScrollIntoView: Q,
                },
                x = k.createElement(Sp, M({}, w, be), function (I) {
                  var F = I.ref,
                    z = I.placerProps,
                    K = z.placement,
                    se = z.maxHeight;
                  return k.createElement(
                    l,
                    M({}, w, be, {
                      innerRef: F,
                      innerProps: {
                        onMouseDown: i.onMenuMouseDown,
                        onMouseMove: i.onMenuMouseMove,
                        id: i.getElementId("listbox"),
                      },
                      isLoading: v,
                      placement: K,
                    }),
                    k.createElement(
                      x0,
                      {
                        captureEnabled: c,
                        onTopArrive: U,
                        onBottomArrive: V,
                        lockEnabled: q,
                      },
                      function (ce) {
                        return k.createElement(
                          s,
                          M({}, w, {
                            innerRef: function (Qe) {
                              i.getMenuListRef(Qe), ce(Qe);
                            },
                            isLoading: v,
                            maxHeight: se,
                            focusedOption: S,
                          }),
                          ee
                        );
                      }
                    )
                  );
                });
              return A || T === "fixed"
                ? k.createElement(
                    f,
                    M({}, w, {
                      appendTo: A,
                      controlElement: this.controlRef,
                      menuPlacement: R,
                      menuPosition: T,
                    }),
                    x
                  )
                : x;
            },
          },
          {
            key: "renderFormField",
            value: function () {
              var i = this,
                o = this.props,
                u = o.delimiter,
                a = o.isDisabled,
                l = o.isMulti,
                s = o.name,
                f = this.state.selectValue;
              if (!(!s || a))
                if (l)
                  if (u) {
                    var m = f
                      .map(function (w) {
                        return i.getOptionValue(w);
                      })
                      .join(u);
                    return k.createElement("input", {
                      name: s,
                      type: "hidden",
                      value: m,
                    });
                  } else {
                    var h =
                      f.length > 0
                        ? f.map(function (w, S) {
                            return k.createElement("input", {
                              key: "i-".concat(S),
                              name: s,
                              type: "hidden",
                              value: i.getOptionValue(w),
                            });
                          })
                        : k.createElement("input", { name: s, type: "hidden" });
                    return k.createElement("div", null, h);
                  }
                else {
                  var y = f[0] ? this.getOptionValue(f[0]) : "";
                  return k.createElement("input", {
                    name: s,
                    type: "hidden",
                    value: y,
                  });
                }
            },
          },
          {
            key: "renderLiveRegion",
            value: function () {
              var i = this.commonProps,
                o = this.state,
                u = o.ariaSelection,
                a = o.focusedOption,
                l = o.focusedValue,
                s = o.isFocused,
                f = o.selectValue,
                m = this.getFocusableOptions();
              return k.createElement(
                h0,
                M({}, i, {
                  id: this.getElementId("live-region"),
                  ariaSelection: u,
                  focusedOption: a,
                  focusedValue: l,
                  isFocused: s,
                  selectValue: f,
                  focusableOptions: m,
                })
              );
            },
          },
          {
            key: "render",
            value: function () {
              var i = this.getComponents(),
                o = i.Control,
                u = i.IndicatorsContainer,
                a = i.SelectContainer,
                l = i.ValueContainer,
                s = this.props,
                f = s.className,
                m = s.id,
                h = s.isDisabled,
                y = s.menuIsOpen,
                w = this.state.isFocused,
                S = (this.commonProps = this.getCommonProps());
              return k.createElement(
                a,
                M({}, S, {
                  className: f,
                  innerProps: { id: m, onKeyDown: this.onKeyDown },
                  isDisabled: h,
                  isFocused: w,
                }),
                this.renderLiveRegion(),
                k.createElement(
                  o,
                  M({}, S, {
                    innerRef: this.getControlRef,
                    innerProps: {
                      onMouseDown: this.onControlMouseDown,
                      onTouchEnd: this.onControlTouchEnd,
                    },
                    isDisabled: h,
                    isFocused: w,
                    menuIsOpen: y,
                  }),
                  k.createElement(
                    l,
                    M({}, S, { isDisabled: h }),
                    this.renderPlaceholderOrValue(),
                    this.renderInput()
                  ),
                  k.createElement(
                    u,
                    M({}, S, { isDisabled: h }),
                    this.renderClearIndicator(),
                    this.renderLoadingIndicator(),
                    this.renderIndicatorSeparator(),
                    this.renderDropdownIndicator()
                  )
                ),
                this.renderMenu(),
                this.renderFormField()
              );
            },
          },
        ],
        [
          {
            key: "getDerivedStateFromProps",
            value: function (i, o) {
              var u = o.prevProps,
                a = o.clearFocusValueOnUpdate,
                l = o.inputIsHiddenAfterUpdate,
                s = o.ariaSelection,
                f = o.isFocused,
                m = o.prevWasFocused,
                h = i.options,
                y = i.value,
                w = i.menuIsOpen,
                S = i.inputValue,
                d = i.isMulti,
                c = gc(y),
                p = {};
              if (
                u &&
                (y !== u.value ||
                  h !== u.options ||
                  w !== u.menuIsOpen ||
                  S !== u.inputValue)
              ) {
                var v = w ? V0(i, c) : [],
                  O = a ? $0(o, c) : null,
                  P = U0(o, v);
                p = {
                  selectValue: c,
                  focusedOption: P,
                  focusedValue: O,
                  clearFocusValueOnUpdate: !1,
                };
              }
              var C =
                  l != null && i !== u
                    ? { inputIsHidden: l, inputIsHiddenAfterUpdate: void 0 }
                    : {},
                b = s,
                R = f && m;
              return (
                f &&
                  !R &&
                  ((b = {
                    value: ai(d, c, c[0] || null),
                    options: c,
                    action: "initial-input-focus",
                  }),
                  (R = !m)),
                (s == null ? void 0 : s.action) === "initial-input-focus" &&
                  (b = null),
                Z(
                  Z(Z({}, p), C),
                  {},
                  { prevProps: i, ariaSelection: b, prevWasFocused: R }
                )
              );
            },
          },
        ]
      ),
      n
    );
  })(k.Component);
zp.defaultProps = A0;
var z0 = k.forwardRef(function (e, t) {
  var n = o0(e);
  return k.createElement(zp, M({ ref: t }, n));
});
const Ew = z0;
var Hp = "en",
  Ll = {},
  pa = {};
function Qp() {
  return Hp;
}
function H0(e) {
  Hp = e;
}
function Fc(e) {
  return Ll[e];
}
function Q0(e) {
  if (!e) throw new Error("No locale data passed");
  (Ll[e.locale] = e), (pa[e.locale.toLowerCase()] = e.locale);
}
function Lc(e) {
  if (Ll[e]) return e;
  if (pa[e.toLowerCase()]) return pa[e.toLowerCase()];
}
function Bp(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.localeMatcher || "lookup";
  switch (n) {
    case "lookup":
      return Nc(e);
    case "best fit":
      return Nc(e);
    default:
      throw new RangeError('Invalid "localeMatcher" option: '.concat(n));
  }
}
function Nc(e) {
  var t = Lc(e);
  if (t) return t;
  for (var n = e.split("-"); e.length > 1; ) {
    n.pop(), (e = n.join("-"));
    var r = Lc(e);
    if (r) return r;
  }
}
var g = {
  af: function (t) {
    return t == 1 ? "one" : "other";
  },
  am: function (t) {
    return t >= 0 && t <= 1 ? "one" : "other";
  },
  ar: function (t) {
    var n = String(t).split("."),
      r = Number(n[0]) == t,
      i = r && n[0].slice(-2);
    return t == 0
      ? "zero"
      : t == 1
      ? "one"
      : t == 2
      ? "two"
      : i >= 3 && i <= 10
      ? "few"
      : i >= 11 && i <= 99
      ? "many"
      : "other";
  },
  ast: function (t) {
    var n = String(t).split("."),
      r = !n[1];
    return t == 1 && r ? "one" : "other";
  },
  be: function (t) {
    var n = String(t).split("."),
      r = Number(n[0]) == t,
      i = r && n[0].slice(-1),
      o = r && n[0].slice(-2);
    return i == 1 && o != 11
      ? "one"
      : i >= 2 && i <= 4 && (o < 12 || o > 14)
      ? "few"
      : (r && i == 0) || (i >= 5 && i <= 9) || (o >= 11 && o <= 14)
      ? "many"
      : "other";
  },
  br: function (t) {
    var n = String(t).split("."),
      r = Number(n[0]) == t,
      i = r && n[0].slice(-1),
      o = r && n[0].slice(-2),
      u = r && n[0].slice(-6);
    return i == 1 && o != 11 && o != 71 && o != 91
      ? "one"
      : i == 2 && o != 12 && o != 72 && o != 92
      ? "two"
      : (i == 3 || i == 4 || i == 9) &&
        (o < 10 || o > 19) &&
        (o < 70 || o > 79) &&
        (o < 90 || o > 99)
      ? "few"
      : t != 0 && r && u == 0
      ? "many"
      : "other";
  },
  bs: function (t) {
    var n = String(t).split("."),
      r = n[0],
      i = n[1] || "",
      o = !n[1],
      u = r.slice(-1),
      a = r.slice(-2),
      l = i.slice(-1),
      s = i.slice(-2);
    return (o && u == 1 && a != 11) || (l == 1 && s != 11)
      ? "one"
      : (o && u >= 2 && u <= 4 && (a < 12 || a > 14)) ||
        (l >= 2 && l <= 4 && (s < 12 || s > 14))
      ? "few"
      : "other";
  },
  ceb: function (t) {
    var n = String(t).split("."),
      r = n[0],
      i = n[1] || "",
      o = !n[1],
      u = r.slice(-1),
      a = i.slice(-1);
    return (o && (r == 1 || r == 2 || r == 3)) ||
      (o && u != 4 && u != 6 && u != 9) ||
      (!o && a != 4 && a != 6 && a != 9)
      ? "one"
      : "other";
  },
  cs: function (t) {
    var n = String(t).split("."),
      r = n[0],
      i = !n[1];
    return t == 1 && i
      ? "one"
      : r >= 2 && r <= 4 && i
      ? "few"
      : i
      ? "other"
      : "many";
  },
  cy: function (t) {
    return t == 0
      ? "zero"
      : t == 1
      ? "one"
      : t == 2
      ? "two"
      : t == 3
      ? "few"
      : t == 6
      ? "many"
      : "other";
  },
  da: function (t) {
    var n = String(t).split("."),
      r = n[0],
      i = Number(n[0]) == t;
    return t == 1 || (!i && (r == 0 || r == 1)) ? "one" : "other";
  },
  dsb: function (t) {
    var n = String(t).split("."),
      r = n[0],
      i = n[1] || "",
      o = !n[1],
      u = r.slice(-2),
      a = i.slice(-2);
    return (o && u == 1) || a == 1
      ? "one"
      : (o && u == 2) || a == 2
      ? "two"
      : (o && (u == 3 || u == 4)) || a == 3 || a == 4
      ? "few"
      : "other";
  },
  dz: function (t) {
    return "other";
  },
  ff: function (t) {
    return t >= 0 && t < 2 ? "one" : "other";
  },
  fr: function (t) {
    var n = String(t).split("."),
      r = n[0],
      i = !n[1],
      o = r.slice(-6);
    return t >= 0 && t < 2 ? "one" : r != 0 && o == 0 && i ? "many" : "other";
  },
  ga: function (t) {
    var n = String(t).split("."),
      r = Number(n[0]) == t;
    return t == 1
      ? "one"
      : t == 2
      ? "two"
      : r && t >= 3 && t <= 6
      ? "few"
      : r && t >= 7 && t <= 10
      ? "many"
      : "other";
  },
  gd: function (t) {
    var n = String(t).split("."),
      r = Number(n[0]) == t;
    return t == 1 || t == 11
      ? "one"
      : t == 2 || t == 12
      ? "two"
      : (r && t >= 3 && t <= 10) || (r && t >= 13 && t <= 19)
      ? "few"
      : "other";
  },
  he: function (t) {
    var n = String(t).split("."),
      r = n[0],
      i = !n[1],
      o = Number(n[0]) == t,
      u = o && n[0].slice(-1);
    return t == 1 && i
      ? "one"
      : r == 2 && i
      ? "two"
      : i && (t < 0 || t > 10) && o && u == 0
      ? "many"
      : "other";
  },
  is: function (t) {
    var n = String(t).split("."),
      r = n[0],
      i = Number(n[0]) == t,
      o = r.slice(-1),
      u = r.slice(-2);
    return (i && o == 1 && u != 11) || !i ? "one" : "other";
  },
  ksh: function (t) {
    return t == 0 ? "zero" : t == 1 ? "one" : "other";
  },
  lt: function (t) {
    var n = String(t).split("."),
      r = n[1] || "",
      i = Number(n[0]) == t,
      o = i && n[0].slice(-1),
      u = i && n[0].slice(-2);
    return o == 1 && (u < 11 || u > 19)
      ? "one"
      : o >= 2 && o <= 9 && (u < 11 || u > 19)
      ? "few"
      : r != 0
      ? "many"
      : "other";
  },
  lv: function (t) {
    var n = String(t).split("."),
      r = n[1] || "",
      i = r.length,
      o = Number(n[0]) == t,
      u = o && n[0].slice(-1),
      a = o && n[0].slice(-2),
      l = r.slice(-2),
      s = r.slice(-1);
    return (o && u == 0) ||
      (a >= 11 && a <= 19) ||
      (i == 2 && l >= 11 && l <= 19)
      ? "zero"
      : (u == 1 && a != 11) ||
        (i == 2 && s == 1 && l != 11) ||
        (i != 2 && s == 1)
      ? "one"
      : "other";
  },
  mk: function (t) {
    var n = String(t).split("."),
      r = n[0],
      i = n[1] || "",
      o = !n[1],
      u = r.slice(-1),
      a = r.slice(-2),
      l = i.slice(-1),
      s = i.slice(-2);
    return (o && u == 1 && a != 11) || (l == 1 && s != 11) ? "one" : "other";
  },
  mt: function (t) {
    var n = String(t).split("."),
      r = Number(n[0]) == t,
      i = r && n[0].slice(-2);
    return t == 1
      ? "one"
      : t == 0 || (i >= 2 && i <= 10)
      ? "few"
      : i >= 11 && i <= 19
      ? "many"
      : "other";
  },
  pa: function (t) {
    return t == 0 || t == 1 ? "one" : "other";
  },
  pl: function (t) {
    var n = String(t).split("."),
      r = n[0],
      i = !n[1],
      o = r.slice(-1),
      u = r.slice(-2);
    return t == 1 && i
      ? "one"
      : i && o >= 2 && o <= 4 && (u < 12 || u > 14)
      ? "few"
      : (i && r != 1 && (o == 0 || o == 1)) ||
        (i && o >= 5 && o <= 9) ||
        (i && u >= 12 && u <= 14)
      ? "many"
      : "other";
  },
  pt: function (t) {
    var n = String(t).split("."),
      r = n[0];
    return r == 0 || r == 1 ? "one" : "other";
  },
  ro: function (t) {
    var n = String(t).split("."),
      r = !n[1],
      i = Number(n[0]) == t,
      o = i && n[0].slice(-2);
    return t == 1 && r
      ? "one"
      : !r || t == 0 || (o >= 2 && o <= 19)
      ? "few"
      : "other";
  },
  ru: function (t) {
    var n = String(t).split("."),
      r = n[0],
      i = !n[1],
      o = r.slice(-1),
      u = r.slice(-2);
    return i && o == 1 && u != 11
      ? "one"
      : i && o >= 2 && o <= 4 && (u < 12 || u > 14)
      ? "few"
      : (i && o == 0) || (i && o >= 5 && o <= 9) || (i && u >= 11 && u <= 14)
      ? "many"
      : "other";
  },
  se: function (t) {
    return t == 1 ? "one" : t == 2 ? "two" : "other";
  },
  si: function (t) {
    var n = String(t).split("."),
      r = n[0],
      i = n[1] || "";
    return t == 0 || t == 1 || (r == 0 && i == 1) ? "one" : "other";
  },
  sl: function (t) {
    var n = String(t).split("."),
      r = n[0],
      i = !n[1],
      o = r.slice(-2);
    return i && o == 1
      ? "one"
      : i && o == 2
      ? "two"
      : (i && (o == 3 || o == 4)) || !i
      ? "few"
      : "other";
  },
};
g.as = g.am;
g.az = g.af;
g.bg = g.af;
g.bn = g.am;
g.ca = g.ast;
g.ce = g.af;
g.chr = g.af;
g.de = g.ast;
g.ee = g.af;
g.el = g.af;
g.en = g.ast;
g.es = g.af;
g.et = g.ast;
g.eu = g.af;
g.fa = g.am;
g.fi = g.ast;
g.fil = g.ceb;
g.fo = g.af;
g.fur = g.af;
g.fy = g.ast;
g.gl = g.ast;
g.gu = g.am;
g.ha = g.af;
g.hi = g.am;
g.hr = g.bs;
g.hsb = g.dsb;
g.hu = g.af;
g.hy = g.ff;
g.ia = g.ast;
g.id = g.dz;
g.ig = g.dz;
g.it = g.ast;
g.ja = g.dz;
g.jgo = g.af;
g.jv = g.dz;
g.ka = g.af;
g.kea = g.dz;
g.kk = g.af;
g.kl = g.af;
g.km = g.dz;
g.kn = g.am;
g.ko = g.dz;
g.ku = g.af;
g.ky = g.af;
g.lb = g.af;
g.lkt = g.dz;
g.lo = g.dz;
g.ml = g.af;
g.mn = g.af;
g.mr = g.af;
g.ms = g.dz;
g.my = g.dz;
g.nb = g.af;
g.ne = g.af;
g.nl = g.ast;
g.nn = g.af;
g.no = g.af;
g.or = g.af;
g.pcm = g.am;
g.ps = g.af;
g.rm = g.af;
g.sah = g.dz;
g.sd = g.af;
g.sk = g.cs;
g.so = g.af;
g.sq = g.af;
g.sr = g.bs;
g.su = g.dz;
g.sv = g.ast;
g.sw = g.ast;
g.ta = g.af;
g.te = g.af;
g.th = g.dz;
g.ti = g.pa;
g.tk = g.af;
g.to = g.dz;
g.tr = g.af;
g.ug = g.af;
g.uk = g.ru;
g.ur = g.ast;
g.uz = g.af;
g.vi = g.dz;
g.wae = g.af;
g.wo = g.dz;
g.yi = g.ast;
g.yo = g.dz;
g.yue = g.dz;
g.zh = g.dz;
g.zu = g.am;
const Dc = g;
function Ac(e) {
  return e === "pt-PT" ? e : q0(e);
}
var B0 = /^([a-z0-9]+)/i;
function q0(e) {
  var t = e.match(B0);
  if (!t) throw new TypeError("Invalid locale: ".concat(e));
  return t[1];
}
function W0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Vc(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function K0(e, t, n) {
  return t && Vc(e.prototype, t), n && Vc(e, n), e;
}
var ha = (function () {
  function e(t, n) {
    W0(this, e);
    var r = e.supportedLocalesOf(t);
    if (r.length === 0) throw new RangeError("Unsupported locale: " + t);
    if (n && n.type !== "cardinal")
      throw new RangeError('Only "cardinal" "type" is supported');
    this.$ = Dc[Ac(r[0])];
  }
  return (
    K0(
      e,
      [
        {
          key: "select",
          value: function (n) {
            return this.$(n);
          },
        },
      ],
      [
        {
          key: "supportedLocalesOf",
          value: function (n) {
            return (
              typeof n == "string" && (n = [n]),
              n.filter(function (r) {
                return Dc[Ac(r)];
              })
            );
          },
        },
      ]
    ),
    e
  );
})();
function Pi(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Pi = function (n) {
          return typeof n;
        })
      : (Pi = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    Pi(e)
  );
}
function Y0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (i) {
          return Object.getOwnPropertyDescriptor(n, i).enumerable;
        })
      )),
      r.forEach(function (i) {
        xi(e, i, n[i]);
      });
  }
  return e;
}
function $c(e, t) {
  return Z0(e) || X0(e, t) || G0();
}
function G0() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function X0(e, t) {
  var n = [],
    r = !0,
    i = !1,
    o = void 0;
  try {
    for (
      var u = e[Symbol.iterator](), a;
      !(r = (a = u.next()).done) && (n.push(a.value), !(t && n.length === t));
      r = !0
    );
  } catch (l) {
    (i = !0), (o = l);
  } finally {
    try {
      !r && u.return != null && u.return();
    } finally {
      if (i) throw o;
    }
  }
  return n;
}
function Z0(e) {
  if (Array.isArray(e)) return e;
}
function J0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Uc(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function e1(e, t, n) {
  return t && Uc(e.prototype, t), n && Uc(e, n), e;
}
function xi(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var t1 = [
    "second",
    "minute",
    "hour",
    "day",
    "week",
    "month",
    "quarter",
    "year",
  ],
  n1 = ["auto", "always"],
  jc = ["long", "short", "narrow"],
  r1 = ["lookup", "best fit"],
  Ft = (function () {
    function e() {
      var t =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
        n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      J0(this, e),
        xi(this, "numeric", "always"),
        xi(this, "style", "long"),
        xi(this, "localeMatcher", "lookup");
      var r = n.numeric,
        i = n.style,
        o = n.styleFallback,
        u = n.localeMatcher;
      if (r !== void 0) {
        if (n1.indexOf(r) < 0)
          throw new RangeError('Invalid "numeric" option: '.concat(r));
        this.numeric = r;
      }
      if (i !== void 0) {
        if (jc.indexOf(i) < 0 && !o)
          throw new RangeError('Invalid "style" option: '.concat(i));
        this.style = i;
      }
      if (u !== void 0) {
        if (r1.indexOf(u) < 0)
          throw new RangeError('Invalid "localeMatcher" option: '.concat(u));
        this.localeMatcher = u;
      }
      if (
        (typeof t == "string" && (t = [t]),
        t.push(Qp()),
        (this.locale = e.supportedLocalesOf(t, {
          localeMatcher: this.localeMatcher,
        })[0]),
        !this.locale)
      )
        throw new Error("No supported locale was found");
      if (
        (ha.supportedLocalesOf(this.locale).length > 0
          ? (this.pluralRules = new ha(this.locale))
          : console.warn('"'.concat(this.locale, '" locale is not supported')),
        typeof Intl < "u" && Intl.NumberFormat
          ? ((this.numberFormat = new Intl.NumberFormat(this.locale)),
            (this.numberingSystem =
              this.numberFormat.resolvedOptions().numberingSystem))
          : (this.numberingSystem = "latn"),
        (this.locale = Bp(this.locale, { localeMatcher: this.localeMatcher })),
        o)
      )
        for (
          var a = Object.keys(Fc(this.locale)),
            l = [this.style].concat(jc, [a[0]]),
            s = 0;
          s < l.length;
          s++
        ) {
          var f = l[s];
          if (a.indexOf(f) >= 0) {
            this.style = f;
            break;
          }
        }
    }
    return (
      e1(e, [
        {
          key: "format",
          value: function () {
            var n = zc(arguments),
              r = $c(n, 2),
              i = r[0],
              o = r[1];
            return this.getRule(i, o).replace(
              "{0}",
              this.formatNumber(Math.abs(i))
            );
          },
        },
        {
          key: "formatToParts",
          value: function () {
            var n = zc(arguments),
              r = $c(n, 2),
              i = r[0],
              o = r[1],
              u = this.getRule(i, o),
              a = u.indexOf("{0}");
            if (a < 0) return [{ type: "literal", value: u }];
            var l = [];
            return (
              a > 0 && l.push({ type: "literal", value: u.slice(0, a) }),
              (l = l.concat(
                this.formatNumberToParts(Math.abs(i)).map(function (s) {
                  return Y0({}, s, { unit: o });
                })
              )),
              a + 3 < u.length - 1 &&
                l.push({ type: "literal", value: u.slice(a + 3) }),
              l
            );
          },
        },
        {
          key: "getRule",
          value: function (n, r) {
            var i = Fc(this.locale)[this.style][r];
            if (typeof i == "string") return i;
            if (this.numeric === "auto") {
              if (n === -2 || n === -1) {
                var o = i["previous".concat(n === -1 ? "" : "-" + Math.abs(n))];
                if (o) return o;
              } else if (n === 1 || n === 2) {
                var u = i["next".concat(n === 1 ? "" : "-" + Math.abs(n))];
                if (u) return u;
              } else if (n === 0 && i.current) return i.current;
            }
            var a = i[l1(n) ? "past" : "future"];
            if (typeof a == "string") return a;
            var l =
              (this.pluralRules && this.pluralRules.select(Math.abs(n))) ||
              "other";
            return a[l] || a.other;
          },
        },
        {
          key: "formatNumber",
          value: function (n) {
            return this.numberFormat ? this.numberFormat.format(n) : String(n);
          },
        },
        {
          key: "formatNumberToParts",
          value: function (n) {
            return this.numberFormat && this.numberFormat.formatToParts
              ? this.numberFormat.formatToParts(n)
              : [{ type: "integer", value: this.formatNumber(n) }];
          },
        },
        {
          key: "resolvedOptions",
          value: function () {
            return {
              locale: this.locale,
              style: this.style,
              numeric: this.numeric,
              numberingSystem: this.numberingSystem,
            };
          },
        },
      ]),
      e
    );
  })();
Ft.supportedLocalesOf = function (e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (typeof e == "string") e = [e];
  else if (!Array.isArray(e)) throw new TypeError('Invalid "locales" argument');
  return e.filter(function (n) {
    return Bp(n, t);
  });
};
Ft.addLocale = Q0;
Ft.setDefaultLocale = H0;
Ft.getDefaultLocale = Qp;
Ft.PluralRules = ha;
var yu = 'Invalid "unit" argument';
function i1(e) {
  if (Pi(e) === "symbol") throw new TypeError(yu);
  if (typeof e != "string") throw new RangeError("".concat(yu, ": ").concat(e));
  if (
    (e[e.length - 1] === "s" && (e = e.slice(0, e.length - 1)),
    t1.indexOf(e) < 0)
  )
    throw new RangeError("".concat(yu, ": ").concat(e));
  return e;
}
var o1 = 'Invalid "number" argument';
function u1(e) {
  if (((e = Number(e)), Number.isFinite && !Number.isFinite(e)))
    throw new RangeError("".concat(o1, ": ").concat(e));
  return e;
}
function a1(e) {
  return 1 / e === -1 / 0;
}
function l1(e) {
  return e < 0 || (e === 0 && a1(e));
}
function zc(e) {
  if (e.length < 2) throw new TypeError('"unit" argument is required');
  return [u1(e[0]), i1(e[1])];
}
function vr(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (vr = function (n) {
          return typeof n;
        })
      : (vr = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    vr(e)
  );
}
function s1(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Hc(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function c1(e, t, n) {
  return t && Hc(e.prototype, t), n && Hc(e, n), e;
}
function f1(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var Qc = (function () {
  function e() {
    s1(this, e), f1(this, "cache", {});
  }
  return (
    c1(e, [
      {
        key: "get",
        value: function () {
          for (
            var n = this.cache, r = arguments.length, i = new Array(r), o = 0;
            o < r;
            o++
          )
            i[o] = arguments[o];
          for (var u = 0; u < i.length; u++) {
            var a = i[u];
            if (vr(n) !== "object") return;
            n = n[a];
          }
          return n;
        },
      },
      {
        key: "put",
        value: function () {
          for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
            r[i] = arguments[i];
          for (
            var o = r.pop(), u = r.pop(), a = this.cache, l = 0;
            l < r.length;
            l++
          ) {
            var s = r[l];
            vr(a[s]) !== "object" && (a[s] = {}), (a = a[s]);
          }
          return (a[u] = o);
        },
      },
    ]),
    e
  );
})();
function ki(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (ki = function (n) {
          return typeof n;
        })
      : (ki = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    ki(e)
  );
}
function d1(e, t) {
  for (
    var i = e, n = Array.isArray(i), r = 0, i = n ? i : i[Symbol.iterator]();
    ;

  ) {
    var o;
    if (n) {
      if (r >= i.length) break;
      o = i[r++];
    } else {
      if (((r = i.next()), r.done)) break;
      o = r.value;
    }
    var u = o;
    if (t(u)) return u;
    for (var a = u.split("-"); a.length > 1; )
      if ((a.pop(), (u = a.join("-")), t(u))) return u;
  }
  throw new Error(
    "No locale data has been registered for any of the locales: ".concat(
      e.join(", ")
    )
  );
}
function p1() {
  var e = (typeof Intl > "u" ? "undefined" : ki(Intl)) === "object";
  return e && typeof Intl.DateTimeFormat == "function";
}
var ut = 60,
  co = 60 * ut,
  Qt = 24 * co,
  ma = 7 * Qt,
  va = 30.44 * Qt,
  qp = (146097 / 400) * Qt;
function Cn(e) {
  switch (e) {
    case "second":
      return 1;
    case "minute":
      return ut;
    case "hour":
      return co;
    case "day":
      return Qt;
    case "week":
      return ma;
    case "month":
      return va;
    case "year":
      return qp;
  }
}
function Wp(e) {
  return e.factor !== void 0 ? e.factor : Cn(e.unit || e.formatAs) || 1;
}
function Lr(e) {
  switch (e) {
    case "floor":
      return Math.floor;
    default:
      return Math.round;
  }
}
function Nl(e) {
  switch (e) {
    case "floor":
      return 1;
    default:
      return 0.5;
  }
}
function Mi(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Mi = function (n) {
          return typeof n;
        })
      : (Mi = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    Mi(e)
  );
}
function Kp(e, t) {
  var n = t.prevStep,
    r = t.timestamp,
    i = t.now,
    o = t.future,
    u = t.round,
    a;
  return (
    n && (n.id || n.unit) && (a = e["threshold_for_".concat(n.id || n.unit)]),
    a === void 0 &&
      e.threshold !== void 0 &&
      ((a = e.threshold), typeof a == "function" && (a = a(i, o))),
    a === void 0 && (a = e.minTime),
    Mi(a) === "object" &&
      (n && n.id && a[n.id] !== void 0 ? (a = a[n.id]) : (a = a.default)),
    typeof a == "function" &&
      (a = a(r, {
        future: o,
        getMinTimeForUnit: function (s, f) {
          return Bc(s, f || (n && n.formatAs), { round: u });
        },
      })),
    a === void 0 &&
      e.test &&
      (e.test(r, { now: i, future: o }) ? (a = 0) : (a = 9007199254740991)),
    a === void 0 &&
      (n
        ? e.formatAs &&
          n.formatAs &&
          (a = Bc(e.formatAs, n.formatAs, { round: u }))
        : (a = 0)),
    a === void 0 &&
      console.warn(
        "[javascript-time-ago] A step should specify `minTime`:\n" +
          JSON.stringify(e, null, 2)
      ),
    a
  );
}
function Bc(e, t, n) {
  var r = n.round,
    i = Cn(e),
    o;
  if ((t === "now" ? (o = Cn(e)) : (o = Cn(t)), i !== void 0 && o !== void 0))
    return i - o * (1 - Nl(r));
}
function h1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (i) {
          return Object.getOwnPropertyDescriptor(n, i).enumerable;
        })
      )),
      r.forEach(function (i) {
        m1(e, i, n[i]);
      });
  }
  return e;
}
function m1(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function v1(e, t, n) {
  var r = n.now,
    i = n.future,
    o = n.round,
    u = n.units,
    a = n.getNextStep;
  e = g1(e, u);
  var l = y1(e, t, { now: r, future: i, round: o });
  if (a) {
    if (l) {
      var s = e[e.indexOf(l) - 1],
        f = e[e.indexOf(l) + 1];
      return [s, l, f];
    }
    return [void 0, void 0, e[0]];
  }
  return l;
}
function y1(e, t, n) {
  var r = n.now,
    i = n.future,
    o = n.round;
  if (e.length !== 0) {
    var u = Yp(e, t, { now: r, future: i || t < 0, round: o });
    if (u !== -1) {
      var a = e[u];
      if (a.granularity) {
        var l = Lr(o)(Math.abs(t) / Wp(a) / a.granularity) * a.granularity;
        if (l === 0 && u > 0) return e[u - 1];
      }
      return a;
    }
  }
}
function Yp(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
    i = Kp(e[r], h1({ prevStep: e[r - 1], timestamp: n.now - t * 1e3 }, n));
  return i === void 0 || Math.abs(t) < i
    ? r - 1
    : r === e.length - 1
    ? r
    : Yp(e, t, n, r + 1);
}
function g1(e, t) {
  return e.filter(function (n) {
    var r = n.unit,
      i = n.formatAs;
    return (r = r || i), r ? t.indexOf(r) >= 0 : !0;
  });
}
function w1(e, t, n) {
  var r = n.now,
    i = n.round;
  if (Cn(e)) {
    var o = Cn(e) * 1e3,
      u = t > r,
      a = Math.abs(t - r),
      l = Lr(i)(a / o) * o;
    return u ? (l > 0 ? a - l + O1(i, o) : a - l + 1) : -(a - l) + S1(i, o);
  }
}
function S1(e, t) {
  return Nl(e) * t;
}
function O1(e, t) {
  return (1 - Nl(e)) * t + 1;
}
var C1 = 365 * 24 * 60 * 60 * 1e3,
  Gp = 1e3 * C1;
function b1(e, t, n) {
  var r = n.prevStep,
    i = n.nextStep,
    o = n.now,
    u = n.future,
    a = n.round,
    l = e.getTime ? e.getTime() : e,
    s = function (w) {
      return w1(w, l, { now: o, round: a });
    },
    f = P1(u ? t : i, l, { future: u, now: o, round: a, prevStep: u ? r : t });
  if (f !== void 0) {
    var m;
    if (
      t &&
      (t.getTimeToNextUpdate &&
        (m = t.getTimeToNextUpdate(l, {
          getTimeToNextUpdateForUnit: s,
          getRoundFunction: Lr,
          now: o,
          future: u,
          round: a,
        })),
      m === void 0)
    ) {
      var h = t.unit || t.formatAs;
      h && (m = s(h));
    }
    return m === void 0 ? f : Math.min(m, f);
  }
}
function E1(e, t, n) {
  var r = n.now,
    i = n.future,
    o = n.round,
    u = n.prevStep,
    a = Kp(e, { timestamp: t, now: r, future: i, round: o, prevStep: u });
  if (a !== void 0)
    return i ? t - a * 1e3 + 1 : a === 0 && t === r ? Gp : t + a * 1e3;
}
function P1(e, t, n) {
  var r = n.now,
    i = n.future,
    o = n.round,
    u = n.prevStep;
  if (e) {
    var a = E1(e, t, { now: r, future: i, round: o, prevStep: u });
    return a === void 0 ? void 0 : a - r;
  } else return i ? t - r + 1 : Gp;
}
var Xp = {};
function cn(e) {
  return Xp[e];
}
function Zp(e) {
  if (!e) throw new Error("[javascript-time-ago] No locale data passed.");
  Xp[e.locale] = e;
}
const x1 = [
    { formatAs: "now" },
    { formatAs: "second" },
    { formatAs: "minute" },
    { formatAs: "hour" },
    { formatAs: "day" },
    { formatAs: "week" },
    { formatAs: "month" },
    { formatAs: "year" },
  ],
  ya = { steps: x1, labels: "long" };
function k1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (i) {
          return Object.getOwnPropertyDescriptor(n, i).enumerable;
        })
      )),
      r.forEach(function (i) {
        M1(e, i, n[i]);
      });
  }
  return e;
}
function M1(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
const ga = k1({}, ya, {
    steps: ya.steps.filter(function (e) {
      return e.formatAs !== "second";
    }),
  }),
  Jp = [
    { factor: 1, unit: "now" },
    { threshold: 1, threshold_for_now: 45.5, factor: 1, unit: "second" },
    { threshold: 45.5, factor: ut, unit: "minute" },
    { threshold: 2.5 * ut, granularity: 5, factor: ut, unit: "minute" },
    { threshold: 22.5 * ut, factor: 0.5 * co, unit: "half-hour" },
    {
      threshold: 42.5 * ut,
      threshold_for_minute: 52.5 * ut,
      factor: co,
      unit: "hour",
    },
    { threshold: (20.5 / 24) * Qt, factor: Qt, unit: "day" },
    { threshold: 5.5 * Qt, factor: ma, unit: "week" },
    { threshold: 3.5 * ma, factor: va, unit: "month" },
    { threshold: 10.5 * va, factor: qp, unit: "year" },
  ],
  qc = {
    gradation: Jp,
    flavour: "long",
    units: ["now", "minute", "hour", "day", "week", "month", "year"],
  },
  T1 = {
    gradation: Jp,
    flavour: "long-time",
    units: ["now", "minute", "hour", "day", "week", "month", "year"],
  };
function eh(e) {
  return e instanceof Date ? e : new Date(e);
}
var wa = [{ formatAs: "second" }, { formatAs: "minute" }, { formatAs: "hour" }],
  Ge = {},
  R1 = {
    minTime: function (t, n) {
      n.future;
      var r = n.getMinTimeForUnit;
      return r("day");
    },
    format: function (t, n) {
      return (
        Ge[n] || (Ge[n] = {}),
        Ge[n].dayMonth ||
          (Ge[n].dayMonth = new Intl.DateTimeFormat(n, {
            month: "short",
            day: "numeric",
          })),
        Ge[n].dayMonth.format(eh(t))
      );
    },
  },
  _1 = {
    minTime: function (t, n) {
      var r = n.future;
      if (r) {
        var i = new Date(new Date(t).getFullYear(), 0).getTime() - 1;
        return (t - i) / 1e3;
      } else {
        var o = new Date(new Date(t).getFullYear() + 1, 0).getTime();
        return (o - t) / 1e3;
      }
    },
    format: function (t, n) {
      return (
        Ge[n] || (Ge[n] = {}),
        Ge[n].dayMonthYear ||
          (Ge[n].dayMonthYear = new Intl.DateTimeFormat(n, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })),
        Ge[n].dayMonthYear.format(eh(t))
      );
    },
  };
p1()
  ? wa.push(R1, _1)
  : wa.push(
      { formatAs: "day" },
      { formatAs: "week" },
      { formatAs: "month" },
      { formatAs: "year" }
    );
const Kt = { steps: wa, labels: ["mini", "short-time", "narrow", "short"] };
function I1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (i) {
          return Object.getOwnPropertyDescriptor(n, i).enumerable;
        })
      )),
      r.forEach(function (i) {
        F1(e, i, n[i]);
      });
  }
  return e;
}
function F1(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
const L1 = I1({}, Kt, { steps: [{ formatAs: "now" }].concat(Kt.steps) });
function N1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (i) {
          return Object.getOwnPropertyDescriptor(n, i).enumerable;
        })
      )),
      r.forEach(function (i) {
        D1(e, i, n[i]);
      });
  }
  return e;
}
function D1(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
const Sa = N1({}, Kt, {
  steps: Kt.steps.filter(function (e) {
    return e.formatAs !== "second";
  }),
});
function A1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (i) {
          return Object.getOwnPropertyDescriptor(n, i).enumerable;
        })
      )),
      r.forEach(function (i) {
        V1(e, i, n[i]);
      });
  }
  return e;
}
function V1(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
const $1 = A1({}, Sa, { steps: [{ formatAs: "now" }].concat(Sa.steps) });
function Wc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (i) {
          return Object.getOwnPropertyDescriptor(n, i).enumerable;
        })
      )),
      r.forEach(function (i) {
        U1(e, i, n[i]);
      });
  }
  return e;
}
function U1(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
const j1 = Wc({}, Kt, {
    steps: Kt.steps
      .filter(function (e) {
        return e.formatAs !== "second";
      })
      .map(function (e) {
        return e.formatAs === "minute" ? Wc({}, e, { minTime: ut }) : e;
      }),
  }),
  Nr = {
    steps: [
      { formatAs: "second" },
      { formatAs: "minute" },
      { formatAs: "hour" },
      { formatAs: "day" },
      { formatAs: "month" },
      { formatAs: "year" },
    ],
    labels: ["mini", "short-time", "narrow", "short"],
  };
function z1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (i) {
          return Object.getOwnPropertyDescriptor(n, i).enumerable;
        })
      )),
      r.forEach(function (i) {
        H1(e, i, n[i]);
      });
  }
  return e;
}
function H1(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
const Q1 = z1({}, Nr, { steps: [{ formatAs: "now" }].concat(Nr.steps) });
function B1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (i) {
          return Object.getOwnPropertyDescriptor(n, i).enumerable;
        })
      )),
      r.forEach(function (i) {
        q1(e, i, n[i]);
      });
  }
  return e;
}
function q1(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
const Oa = B1({}, Nr, {
  steps: Nr.steps.filter(function (e) {
    return e.formatAs !== "second";
  }),
});
function W1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (i) {
          return Object.getOwnPropertyDescriptor(n, i).enumerable;
        })
      )),
      r.forEach(function (i) {
        K1(e, i, n[i]);
      });
  }
  return e;
}
function K1(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
const Y1 = W1({}, Oa, { steps: [{ formatAs: "now" }].concat(Oa.steps) });
function G1(e) {
  switch (e) {
    case "default":
    case "round":
      return ya;
    case "round-minute":
      return ga;
    case "approximate":
      return qc;
    case "time":
    case "approximate-time":
      return T1;
    case "mini":
      return Nr;
    case "mini-now":
      return Q1;
    case "mini-minute":
      return Oa;
    case "mini-minute-now":
      return Y1;
    case "twitter":
      return Kt;
    case "twitter-now":
      return L1;
    case "twitter-minute":
      return Sa;
    case "twitter-minute-now":
      return $1;
    case "twitter-first-minute":
      return j1;
    default:
      return qc;
  }
}
function bn(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (bn = function (n) {
          return typeof n;
        })
      : (bn = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    bn(e)
  );
}
function X1(e, t) {
  return ew(e) || J1(e, t) || Z1();
}
function Z1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function J1(e, t) {
  var n = [],
    r = !0,
    i = !1,
    o = void 0;
  try {
    for (
      var u = e[Symbol.iterator](), a;
      !(r = (a = u.next()).done) && (n.push(a.value), !(t && n.length === t));
      r = !0
    );
  } catch (l) {
    (i = !0), (o = l);
  } finally {
    try {
      !r && u.return != null && u.return();
    } finally {
      if (i) throw o;
    }
  }
  return n;
}
function ew(e) {
  if (Array.isArray(e)) return e;
}
function tw(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Kc(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function nw(e, t, n) {
  return t && Kc(e.prototype, t), n && Kc(e, n), e;
}
var ft = (function () {
    function e() {
      var t =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
        n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        r = n.polyfill;
      tw(this, e),
        typeof t == "string" && (t = [t]),
        (this.locale = d1(t.concat(e.getDefaultLocale()), cn)),
        typeof Intl < "u" &&
          Intl.NumberFormat &&
          (this.numberFormat = new Intl.NumberFormat(this.locale)),
        r === !1
          ? ((this.IntlRelativeTimeFormat = Intl.RelativeTimeFormat),
            (this.IntlPluralRules = Intl.PluralRules))
          : ((this.IntlRelativeTimeFormat = Ft),
            (this.IntlPluralRules = Ft.PluralRules)),
        (this.relativeTimeFormatCache = new Qc()),
        (this.pluralRulesCache = new Qc());
    }
    return (
      nw(e, [
        {
          key: "format",
          value: function (n, r, i) {
            i || (r && !sw(r) ? ((i = r), (r = void 0)) : (i = {})),
              r || (r = ga),
              typeof r == "string" && (r = G1(r));
            var o = rw(n),
              u = this.getLabels(r.flavour || r.labels),
              a = u.labels,
              l = u.labelsType,
              s;
            r.now !== void 0 && (s = r.now),
              s === void 0 && i.now !== void 0 && (s = i.now),
              s === void 0 && (s = Date.now());
            var f = (s - o) / 1e3,
              m = i.future || f < 0,
              h = uw(a, cn(this.locale).now, cn(this.locale).long, m);
            if (r.custom) {
              var y = r.custom({
                now: s,
                date: new Date(o),
                time: o,
                elapsed: f,
                locale: this.locale,
              });
              if (y !== void 0) return y;
            }
            var w = ow(r.units, a, h),
              S = i.round || r.round,
              d = v1(r.gradation || r.steps || ga.steps, f, {
                now: s,
                units: w,
                round: S,
                future: m,
                getNextStep: !0,
              }),
              c = X1(d, 3),
              p = c[0],
              v = c[1],
              O = c[2],
              P =
                this.formatDateForStep(o, v, f, {
                  labels: a,
                  labelsType: l,
                  nowLabel: h,
                  now: s,
                  future: m,
                  round: S,
                }) || "";
            if (i.getTimeToNextUpdate) {
              var C = b1(o, v, {
                nextStep: O,
                prevStep: p,
                now: s,
                future: m,
                round: S,
              });
              return [P, C];
            }
            return P;
          },
        },
        {
          key: "formatDateForStep",
          value: function (n, r, i, o) {
            var u = this,
              a = o.labels,
              l = o.labelsType,
              s = o.nowLabel,
              f = o.now,
              m = o.future,
              h = o.round;
            if (r) {
              if (r.format)
                return r.format(n, this.locale, {
                  formatAs: function (c, p) {
                    return u.formatValue(p, c, { labels: a, future: m });
                  },
                  now: f,
                  future: m,
                });
              var y = r.unit || r.formatAs;
              if (!y)
                throw new Error(
                  "[javascript-time-ago] Each step must define either `formatAs` or `format()`. Step: ".concat(
                    JSON.stringify(r)
                  )
                );
              if (y === "now") return s;
              var w = Math.abs(i) / Wp(r);
              r.granularity && (w = Lr(h)(w / r.granularity) * r.granularity);
              var S = -1 * Math.sign(i) * Lr(h)(w);
              switch ((S === 0 && (m ? (S = 0) : (S = -0)), l)) {
                case "long":
                case "short":
                case "narrow":
                  return this.getFormatter(l).format(S, y);
                default:
                  return this.formatValue(S, y, { labels: a, future: m });
              }
            }
          },
        },
        {
          key: "formatValue",
          value: function (n, r, i) {
            var o = i.labels,
              u = i.future;
            return this.getFormattingRule(o, r, n, { future: u }).replace(
              "{0}",
              this.formatNumber(Math.abs(n))
            );
          },
        },
        {
          key: "getFormattingRule",
          value: function (n, r, i, o) {
            var u = o.future;
            if ((this.locale, (n = n[r]), typeof n == "string")) return n;
            var a =
                i === 0 ? (u ? "future" : "past") : i < 0 ? "past" : "future",
              l = n[a] || n;
            if (typeof l == "string") return l;
            var s = this.getPluralRules().select(Math.abs(i));
            return l[s] || l.other;
          },
        },
        {
          key: "formatNumber",
          value: function (n) {
            return this.numberFormat ? this.numberFormat.format(n) : String(n);
          },
        },
        {
          key: "getFormatter",
          value: function (n) {
            return (
              this.relativeTimeFormatCache.get(this.locale, n) ||
              this.relativeTimeFormatCache.put(
                this.locale,
                n,
                new this.IntlRelativeTimeFormat(this.locale, { style: n })
              )
            );
          },
        },
        {
          key: "getPluralRules",
          value: function () {
            return (
              this.pluralRulesCache.get(this.locale) ||
              this.pluralRulesCache.put(
                this.locale,
                new this.IntlPluralRules(this.locale)
              )
            );
          },
        },
        {
          key: "getLabels",
          value: function () {
            var n =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : [];
            typeof n == "string" && (n = [n]),
              (n = n.map(function (s) {
                switch (s) {
                  case "tiny":
                  case "mini-time":
                    return "mini";
                  default:
                    return s;
                }
              })),
              (n = n.concat("long"));
            for (
              var r = cn(this.locale),
                u = n,
                i = Array.isArray(u),
                o = 0,
                u = i ? u : u[Symbol.iterator]();
              ;

            ) {
              var a;
              if (i) {
                if (o >= u.length) break;
                a = u[o++];
              } else {
                if (((o = u.next()), o.done)) break;
                a = o.value;
              }
              var l = a;
              if (r[l]) return { labelsType: l, labels: r[l] };
            }
          },
        },
      ]),
      e
    );
  })(),
  th = "en";
ft.getDefaultLocale = function () {
  return th;
};
ft.setDefaultLocale = function (e) {
  return (th = e);
};
ft.addDefaultLocale = function (e) {
  if (Yc)
    return console.error(
      "[javascript-time-ago] `TimeAgo.addDefaultLocale()` can only be called once. To add other locales, use `TimeAgo.addLocale()`."
    );
  (Yc = !0), ft.setDefaultLocale(e.locale), ft.addLocale(e);
};
var Yc;
ft.addLocale = function (e) {
  Zp(e), Ft.addLocale(e);
};
ft.locale = ft.addLocale;
ft.addLabels = function (e, t, n) {
  var r = cn(e);
  r || (Zp({ locale: e }), (r = cn(e))), (r[t] = n);
};
function rw(e) {
  if (e.constructor === Date || iw(e)) return e.getTime();
  if (typeof e == "number") return e;
  throw new Error(
    "Unsupported relative time formatter input: ".concat(bn(e), ", ").concat(e)
  );
}
function iw(e) {
  return bn(e) === "object" && typeof e.getTime == "function";
}
function ow(e, t, n) {
  var r = Object.keys(t);
  return (
    n && r.push("now"),
    e &&
      (r = e.filter(function (i) {
        return i === "now" || r.indexOf(i) >= 0;
      })),
    r
  );
}
function uw(e, t, n, r) {
  var i = e.now || (t && t.now);
  if (i) return typeof i == "string" ? i : r ? i.future : i.past;
  if (n && n.second && n.second.current) return n.second.current;
}
var aw = {}.constructor;
function lw(e) {
  return bn(e) !== void 0 && e !== null && e.constructor === aw;
}
function sw(e) {
  return typeof e == "string" || cw(e);
}
function cw(e) {
  return (
    lw(e) &&
    (Array.isArray(e.steps) ||
      Array.isArray(e.gradation) ||
      Array.isArray(e.flavour) ||
      typeof e.flavour == "string" ||
      Array.isArray(e.labels) ||
      typeof e.labels == "string" ||
      Array.isArray(e.units) ||
      typeof e.custom == "function")
  );
}
const fw = "en",
  dw = {
    year: {
      previous: "last year",
      current: "this year",
      next: "next year",
      past: { one: "{0} year ago", other: "{0} years ago" },
      future: { one: "in {0} year", other: "in {0} years" },
    },
    quarter: {
      previous: "last quarter",
      current: "this quarter",
      next: "next quarter",
      past: { one: "{0} quarter ago", other: "{0} quarters ago" },
      future: { one: "in {0} quarter", other: "in {0} quarters" },
    },
    month: {
      previous: "last month",
      current: "this month",
      next: "next month",
      past: { one: "{0} month ago", other: "{0} months ago" },
      future: { one: "in {0} month", other: "in {0} months" },
    },
    week: {
      previous: "last week",
      current: "this week",
      next: "next week",
      past: { one: "{0} week ago", other: "{0} weeks ago" },
      future: { one: "in {0} week", other: "in {0} weeks" },
    },
    day: {
      previous: "yesterday",
      current: "today",
      next: "tomorrow",
      past: { one: "{0} day ago", other: "{0} days ago" },
      future: { one: "in {0} day", other: "in {0} days" },
    },
    hour: {
      current: "this hour",
      past: { one: "{0} hour ago", other: "{0} hours ago" },
      future: { one: "in {0} hour", other: "in {0} hours" },
    },
    minute: {
      current: "this minute",
      past: { one: "{0} minute ago", other: "{0} minutes ago" },
      future: { one: "in {0} minute", other: "in {0} minutes" },
    },
    second: {
      current: "now",
      past: { one: "{0} second ago", other: "{0} seconds ago" },
      future: { one: "in {0} second", other: "in {0} seconds" },
    },
  },
  pw = {
    year: {
      previous: "last yr.",
      current: "this yr.",
      next: "next yr.",
      past: "{0} yr. ago",
      future: "in {0} yr.",
    },
    quarter: {
      previous: "last qtr.",
      current: "this qtr.",
      next: "next qtr.",
      past: { one: "{0} qtr. ago", other: "{0} qtrs. ago" },
      future: { one: "in {0} qtr.", other: "in {0} qtrs." },
    },
    month: {
      previous: "last mo.",
      current: "this mo.",
      next: "next mo.",
      past: "{0} mo. ago",
      future: "in {0} mo.",
    },
    week: {
      previous: "last wk.",
      current: "this wk.",
      next: "next wk.",
      past: "{0} wk. ago",
      future: "in {0} wk.",
    },
    day: {
      previous: "yesterday",
      current: "today",
      next: "tomorrow",
      past: { one: "{0} day ago", other: "{0} days ago" },
      future: { one: "in {0} day", other: "in {0} days" },
    },
    hour: { current: "this hour", past: "{0} hr. ago", future: "in {0} hr." },
    minute: {
      current: "this minute",
      past: "{0} min. ago",
      future: "in {0} min.",
    },
    second: { current: "now", past: "{0} sec. ago", future: "in {0} sec." },
  },
  hw = {
    year: {
      previous: "last yr.",
      current: "this yr.",
      next: "next yr.",
      past: "{0} yr. ago",
      future: "in {0} yr.",
    },
    quarter: {
      previous: "last qtr.",
      current: "this qtr.",
      next: "next qtr.",
      past: { one: "{0} qtr. ago", other: "{0} qtrs. ago" },
      future: { one: "in {0} qtr.", other: "in {0} qtrs." },
    },
    month: {
      previous: "last mo.",
      current: "this mo.",
      next: "next mo.",
      past: "{0} mo. ago",
      future: "in {0} mo.",
    },
    week: {
      previous: "last wk.",
      current: "this wk.",
      next: "next wk.",
      past: "{0} wk. ago",
      future: "in {0} wk.",
    },
    day: {
      previous: "yesterday",
      current: "today",
      next: "tomorrow",
      past: { one: "{0} day ago", other: "{0} days ago" },
      future: { one: "in {0} day", other: "in {0} days" },
    },
    hour: { current: "this hour", past: "{0} hr. ago", future: "in {0} hr." },
    minute: {
      current: "this minute",
      past: "{0} min. ago",
      future: "in {0} min.",
    },
    second: { current: "now", past: "{0} sec. ago", future: "in {0} sec." },
  },
  mw = { now: { current: "now", future: "in a moment", past: "just now" } },
  vw = {
    year: "{0}yr",
    month: "{0}mo",
    week: "{0}wk",
    day: "{0}d",
    hour: "{0}h",
    minute: "{0}m",
    second: "{0}s",
    now: "now",
  },
  yw = {
    year: "{0}yr",
    month: "{0}mo",
    week: "{0}wk",
    day: "{0}d",
    hour: "{0}h",
    minute: "{0}m",
    second: "{0}s",
    now: "now",
  },
  Pw = {
    locale: fw,
    long: dw,
    short: pw,
    narrow: hw,
    "short-time": {
      year: "{0} yr.",
      month: "{0} mo.",
      week: "{0} wk.",
      day: { one: "{0} day", other: "{0} days" },
      hour: "{0} hr.",
      minute: "{0} min.",
      second: "{0} sec.",
    },
    "long-time": {
      year: { one: "{0} year", other: "{0} years" },
      month: { one: "{0} month", other: "{0} months" },
      week: { one: "{0} week", other: "{0} weeks" },
      day: { one: "{0} day", other: "{0} days" },
      hour: { one: "{0} hour", other: "{0} hours" },
      minute: { one: "{0} minute", other: "{0} minutes" },
      second: { one: "{0} second", other: "{0} seconds" },
    },
    now: mw,
    tiny: vw,
    mini: yw,
  };
export {
  Ow as Q,
  Te as R,
  Ew as S,
  ft as T,
  M as _,
  zr as a,
  cv as b,
  vv as c,
  ww as d,
  Qd as e,
  sv as f,
  Gc as g,
  Sw as h,
  gw as i,
  Pw as j,
  Cw as k,
  k as r,
  bw as u,
};
//# sourceMappingURL=@libs-KHifEHW5.js.map
