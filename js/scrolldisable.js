"use strict";
(() => {
  var Ae = Object.create;
  var X = Object.defineProperty;
  var Se = Object.getOwnPropertyDescriptor;
  var we = Object.getOwnPropertyNames;
  var ye = Object.getPrototypeOf,
    xe = Object.prototype.hasOwnProperty;
  var ge = (t, e) => () => (
    e || t((e = { exports: {} }).exports, e),
    e.exports
  );
  var ve = (t, e, o, n) => {
    if ((e && typeof e == "object") || typeof e == "function")
      for (let r of we(e))
        !xe.call(t, r) &&
          r !== o &&
          X(t, r, {
            get: () => e[r],
            enumerable: !(n = Se(e, r)) || n.enumerable
          });
    return t;
  };
  var _e = (t, e, o) => (
    (o = t != null ? Ae(ye(t)) : {}),
    ve(
      e || !t || !t.__esModule
        ? X(o, "default", { value: t, enumerable: !0 })
        : o,
      t
    )
  );
  var me = ge((Ht, pe) => {
    pe.exports = qe;
    function qe(t, e, o, n) {
      var r, i, s;
      return function() {
        if (
          (
            (s = this),
            (i = Array.prototype.slice.call(arguments)),
            r && (o || n)
          )
        )
          return;
        if (!o) return a(), (r = setTimeout(l, e)), r;
        (r = setTimeout(a, e)), t.apply(s, i);
        function l() {
          a(), t.apply(s, i);
        }
        function a() {
          clearTimeout(r), (r = null);
        }
      };
    }
  });
  var T = "fs-attributes";
  var W = "cmsattribute";
  var b = "scrolldisable";
  var O = "support";
  var z = async (...t) => {
    var o;
    let e = [];
    for (let n of t) {
      let r = await ((o = window.fsAttributes[n]) == null ? void 0 : o.loading);
      e.push(r);
    }
    return e;
  };
  var S = () => {};
  function w(t, e, o, n) {
    return t
      ? (t.addEventListener(e, o, n), () => t.removeEventListener(e, o, n))
      : S;
  }
  var Q = t => t instanceof Element,
    v = t => t instanceof HTMLElement;
  var _ = t => typeof t == "string";
  var J = { navMenu: "w-nav-menu" };
  var R = t => {
    let { overflow: e } = getComputedStyle(t);
    return e === "auto" || e === "scroll";
  };
  var P = t => !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
  function Z(t, e, o) {
    var r;
    let n = window.fsAttributes[t];
    return (n.destroy = o || S), (r = n.resolve) == null || r.call(n, e), e;
  }
  var ee = (t, e = "1", o = "iife") => {
    let r = `${t}${o === "esm" ? ".esm" : ""}.js`;
    return `https://cdn.jsdelivr.net/npm/@finsweet/attributes-${t}@${e}/${r}`;
  };
  var Re = `${T}-${O}`,
    te = async () => {
      var r;
      let { fsAttributes: t, location: e } = window,
        { host: o, searchParams: n } = new URL(e.href);
      return !o.includes("webflow.io") || !n.has(Re)
        ? !1
        : (r = t.import) == null ? void 0 : r.call(t, O, "1");
    };
  var I = t => {
    let e = (r, i, s) => {
      let c = t[r],
        { key: l, values: a } = c,
        d;
      if (!i) return `[${l}]`;
      let A = a == null ? void 0 : a[i];
      _(A)
        ? (d = A)
        : (d = A(s && "instanceIndex" in s ? s.instanceIndex : void 0));
      let m = s && "caseInsensitive" in s && s.caseInsensitive ? "i" : "";
      if (!(s != null && s.operator)) return `[${l}="${d}"${m}]`;
      switch (s.operator) {
        case "prefixed":
          return `[${l}^="${d}"${m}]`;
        case "suffixed":
          return `[${l}$="${d}"${m}]`;
        case "contains":
          return `[${l}*="${d}"${m}]`;
      }
    };
    function o(r, i) {
      let s = e("element", r, i),
        c = (i == null ? void 0 : i.scope) || document;
      return i != null && i.all
        ? [...c.querySelectorAll(s)]
        : c.querySelector(s);
    }
    return [
      e,
      o,
      (r, i) => {
        let s = t[i];
        return s ? r.getAttribute(s.key) : null;
      }
    ];
  };
  var y = {
      preventLoad: { key: `${T}-preventload` },
      debugMode: { key: `${T}-debug` },
      src: { key: "src", values: { finsweet: "@finsweet/attributes" } },
      dev: { key: `${T}-dev` }
    },
    [k, St] = I(y);
  var oe = t => {
    let { currentScript: e } = document,
      o = {};
    if (!e) return { attributes: o, preventsLoad: !1 };
    let r = {
      preventsLoad: _(e.getAttribute(y.preventLoad.key)),
      attributes: o
    };
    for (let i in t) {
      let s = e.getAttribute(t[i]);
      r.attributes[i] = s;
    }
    return r;
  };
  var re = ({ scriptAttributes: t, attributeKey: e, version: o, init: n }) => {
      var c;
      Ie(), (c = window.fsAttributes)[e] || (c[e] = {});
      let { preventsLoad: r, attributes: i } = oe(t),
        s = window.fsAttributes[e];
      (s.version = o), (s.init = n), r ||
        (
          window.Webflow || (window.Webflow = []),
          window.Webflow.push(() => n(i))
        );
    },
    Ie = () => {
      let t = Le();
      if (window.fsAttributes && !Array.isArray(window.fsAttributes)) {
        D(window.fsAttributes, t);
        return;
      }
      let e = he(t);
      D(e, t), Be(e), (window.fsAttributes = e), (window.FsAttributes =
        window.fsAttributes), te();
    },
    he = t => {
      let e = {
        cms: {},
        push(...o) {
          var n, r;
          for (let [i, s] of o)
            (r = (n = this[i]) == null ? void 0 : n.loading) == null ||
              r.then(s);
        },
        async import(o, n) {
          let r = e[o];
          return (
            r ||
            new Promise(i => {
              let s = document.createElement("script");
              (s.src = ee(o, n)), (s.async = !0), (s.onload = () => {
                let [c] = D(e, [o]);
                i(c);
              }), document.head.append(s);
            })
          );
        },
        destroy() {
          var o, n;
          for (let r of t)
            (n = (o = window.fsAttributes[r]) == null ? void 0 : o.destroy) ==
              null || n.call(o);
        }
      };
      return e;
    },
    Le = () => {
      let t = k("src", "finsweet", { operator: "contains" }),
        e = k("dev");
      return [
        ...document.querySelectorAll(`script${t}, script${e}`)
      ].reduce((r, i) => {
        var c;
        let s =
          i.getAttribute(y.dev.key) ||
          ((c = i.src.match(/[\w-. ]+(?=(\.js)$)/)) == null ? void 0 : c[0]);
        return s && !r.includes(s) && r.push(s), r;
      }, []);
    },
    D = (t, e) =>
      e.map(n => {
        let r = t[n];
        return (
          r ||
          (
            (t[n] = {}),
            (r = t[n]),
            (r.loading = new Promise(i => {
              r.resolve = s => {
                i(s), delete r.resolve;
              };
            })),
            r
          )
        );
      }),
    Be = t => {
      let e = Array.isArray(window.fsAttributes) ? window.fsAttributes : [];
      t.push(...e);
    };
  var ne = "1.6.2";
  var V = `fs-${b}`,
    Me = "when-visible",
    Ue = "enable",
    Ne = "disable",
    Oe = "toggle",
    Pe = "smart-nav",
    ke = "preserve",
    De = "media",
    Ve = "gap",
    p = {
      element: {
        key: `${V}-element`,
        values: {
          whenVisible: Me,
          enable: Ue,
          disable: Ne,
          toggle: Oe,
          nav: Pe,
          preserve: ke
        }
      },
      matchMedia: { key: `${V}-${De}` },
      gap: { key: `${V}-${Ve}`, values: { true: "true", false: "false" } }
    },
    [u, Ct] = I(p),
    se = {
      medium: "(max-width: 991px)",
      small: "(max-width: 767px)",
      tiny: "(max-width: 479px)"
    };
  function $e(t) {
    if (Array.isArray(t)) {
      for (var e = 0, o = Array(t.length); e < t.length; e++) o[e] = t[e];
      return o;
    } else return Array.from(t);
  }
  var H = !1;
  typeof window != "undefined" &&
    (
      ($ = {
        get passive() {
          H = !0;
        }
      }),
      window.addEventListener("testPassive", null, $),
      window.removeEventListener("testPassive", null, $)
    );
  var $,
    h =
      typeof window != "undefined" &&
      window.navigator &&
      window.navigator.platform &&
      (/iP(ad|hone|od)/.test(window.navigator.platform) ||
        (window.navigator.platform === "MacIntel" &&
          window.navigator.maxTouchPoints > 1)),
    E = [],
    L = !1,
    K = -1,
    x = void 0,
    f = void 0,
    g = void 0,
    ie = function(e) {
      return E.some(function(o) {
        return !!(o.options.allowTouchMove && o.options.allowTouchMove(e));
      });
    },
    B = function(e) {
      var o = e || window.event;
      return ie(o.target) || o.touches.length > 1
        ? !0
        : (o.preventDefault && o.preventDefault(), !1);
    },
    He = function(e) {
      if (g === void 0) {
        var o = !!e && e.reserveScrollBarGap === !0,
          n = window.innerWidth - document.documentElement.clientWidth;
        if (o && n > 0) {
          let r = parseInt(
            window
              .getComputedStyle(window.top.document.body)
              .getPropertyValue("padding-right"),
            10
          );
          (g =
            window.top.document.body.style
              .paddingRight), (window.top.document.body.style.paddingRight = `${r +
            n}px`);
        }
      }
      x === void 0 &&
        (
          (x = window.top.document.body.style.overflow),
          (window.top.document.body.style.overflow = "hidden")
        );
    },
    Ke = function() {
      g !== void 0 &&
        ((window.top.document.body.style.paddingRight = g), (g = void 0)), x !==
        void 0 && ((window.top.document.body.style.overflow = x), (x = void 0));
    },
    Fe = function() {
      return window.requestAnimationFrame(function() {
        if (f === void 0) {
          f = {
            position: window.top.body.style.position,
            top: window.top.body.style.top,
            left: window.top.body.style.left
          };
          let { scrollY: e, scrollX: o, innerHeight: n } = window;
          (window.top.document.body.style.position =
            "fixed"), (window.top.document.body.style.top = `${-e}px`), (window.top.document.body.style.left = `${-o}px`);
        }
      });
    },
    Ge = function() {
      if (f !== void 0) {
        let e = -parseInt(window.top.document.body.style.top, 10),
          o = -parseInt(window.top.document.body.style.left, 10);
        (window.top.body.style.position =
          f.position), (window.top.body.style.top =
          f.top), (window.top.body.style.left = f.left), window.scrollTo(
          o,
          e
        ), (f = void 0);
      }
    },
    Ye = function(e) {
      return e ? e.scrollHeight - e.scrollTop <= e.clientHeight : !1;
    },
    je = function(e, o) {
      var n = e.targetTouches[0].clientY - K;
      return ie(e.target)
        ? !1
        : (o && o.scrollTop === 0 && n > 0) || (Ye(o) && n < 0)
          ? B(e)
          : (e.stopPropagation(), !0);
    },
    le = function(e, o) {
      if (!e) {
        console.error(
          "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
        );
        return;
      }
      if (
        !E.some(function(r) {
          return r.targetElement === e;
        })
      ) {
        var n = { targetElement: e, options: o || {} };
        (E = [].concat($e(E), [n])), h ? Fe() : He(o), h &&
          (
            (e.ontouchstart = function(r) {
              r.targetTouches.length === 1 && (K = r.targetTouches[0].clientY);
            }),
            (e.ontouchmove = function(r) {
              r.targetTouches.length === 1 && je(r, e);
            }),
            L ||
              (
                document.addEventListener(
                  "touchmove",
                  B,
                  H ? { passive: !1 } : void 0
                ),
                (L = !0)
              )
          );
      }
    },
    ce = function() {
      h &&
        (
          E.forEach(function(e) {
            (e.targetElement.ontouchstart = null), (e.targetElement.ontouchmove = null);
          }),
          L &&
            (
              document.removeEventListener(
                "touchmove",
                B,
                H ? { passive: !1 } : void 0
              ),
              (L = !1)
            ),
          (K = -1)
        ), h ? Ge() : Ke(), (E = []);
    };
  var { body: F } = document,
    ae = !0,
    G = !1,
    C,
    Y = () => G,
    ue = t => {
      ae = t;
    },
    M = t => {
      (C = window.scrollY), (G = !0), le(t, {
        reserveScrollBarGap: ae
      }), F.style.setProperty("top", `${C * -1}px`);
    },
    U = () => {
      (G = !1), ce(), F.style.setProperty("top", ""), C && F.scrollTo(0, C);
    },
    N = t => {
      if (R(t)) return t;
      let e = t.querySelectorAll("*");
      for (let o of e) if (v(o) && R(o)) return o;
    };
  var de = t =>
    w(window, "click", ({ target: o }) => {
      if (!Q(o)) return;
      let n = o.closest(u("element", "toggle")),
        r = n || o.closest(u("element", "disable")),
        i = n || o.closest(u("element", "enable")),
        s = r || i;
      if (!s) return;
      let c = s.getAttribute(p.matchMedia.key);
      if (!(c && !window.matchMedia(c).matches)) {
        if (Y() && i) U();
        else if (!Y() && v(r)) for (let l of new Set([...t, N(r) || r])) M(l);
      }
    });
  var q = _e(me(), 1);
  var { navMenu: fe } = J,
    Te = new Map(),
    j = (t, e) => {
      let o = Te.get(t);
      if (!o) return;
      let { matchMedia: n, firstScrollableElement: r, visible: i } = o;
      if (n && !window.matchMedia(n).matches) return;
      let s = P(t);
      if (s !== i) {
        if ((i && U(), s)) for (let c of new Set([...e, r])) M(c);
        o.visible = s;
      }
    },
    be = t => {
      let e = u("element", "nav"),
        o = document.querySelectorAll(
          `${u("element", "whenVisible")}, ${e}.${fe}, ${e} .${fe}`
        ),
        r = (0, q.default)(l => {
          let a = l[0].target;
          j(a, t);
        }, 25),
        i = new MutationObserver(r);
      for (let l of o) {
        let a = l.getAttribute(p.matchMedia.key),
          d = l.closest(".w-nav");
        if (d) {
          let m = d.dataset.collapse;
          m && (a = se[m]);
        }
        let A = N(l) || l;
        Te.set(l, { firstScrollableElement: A, matchMedia: a }), j(
          l,
          t
        ), i.observe(l, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        });
      }
      let s = (0, q.default)(() => {
          for (let l of o) j(l, t);
        }, 250),
        c = w(window, "resize", s);
      return () => {
        i.disconnect(), c();
      };
    };
  var Ee = async () => {
    await z(W);
    let t = document.querySelectorAll(u("element", "preserve")),
      e = !0,
      o = document.querySelector(u("gap"));
    (o == null ? void 0 : o.getAttribute(p.gap.key)) === p.gap.values.false &&
      (e = !1), ue(e);
    let r = de(t),
      i = be(t);
    return Z(b, void 0, () => {
      r(), i();
    });
  };
  re({ init: Ee, version: ne, attributeKey: b });
})();
