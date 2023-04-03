(() => {
  "use strict";
  var e, r = {
      40373: (e, r, n) => {
        n.d(r, {
          De: () => t,
          W$: () => a,
          mn: () => c,
          u_: () => s,
          yY: () => i
        });
        class t {
          constructor(e) {
            this.description = e, Object.freeze(this)
          }
        }
        const o = new WeakMap;

        function a(e) {
          const r = new t(`lang:${e.meta.lang} apikey=${e.meta.apikey}`);
          return o.set(r, e), r
        }

        function i(e) {
          return e && o.get(e)
        }
        let s;

        function c(e) {
          if (s) throw new Error("ymaps3: config is already set");
          s = e
        }
      },
      36519: (e, r, n) => {
        n.d(r, {
          Q: () => a
        });
        var t = n(40373);
        const o = {
          version: "",
          scaled: !0,
          hotspotZoomRange: {
            min: 0,
            max: 23
          }
        };

        function a(e, r = t.u_) {
          if (!e || !e.lang) throw new Error("Lang not specified");
          const {
            lang: n,
            signal: a
          } = e, i = (0, t.yY)(r);
          if (!i) throw new Error("Config not specified");
          const s = i.meta.apikey;
          if (!s) throw new Error("Apikey must be specified in order to use fetchConfig");
          let c;
          try {
            c = `${i.meta.hosts.apiConfigService}?${new URLSearchParams({lang:n,apikey:s})}`
          } catch (e) {
            return Promise.reject(e)
          }
          return fetch(c, {
            signal: a
          }).then((e => e.json())).then((e => {
            for (const r in e.layers)
              if (e.layers[r].hotspotZoomRange) {
                const [n, t] = e.layers[r].hotspotZoomRange;
                e.layers[r].hotspotZoomRange = {
                  min: n,
                  max: t
                }
              } return e.layers.map || (e.layers.map = Object.assign({}, o)), (0, t.W$)({
              meta: e
            })
          }))
        }
      },
      81119: (e, r, n) => {
        n.d(r, {
          N: () => i
        });
        const t = (0, n(30492).O)();
        let o, a = Promise.resolve();
        const i = function(e) {
          if (!i.C76__implCache[e]) {
            const r = i.loaders.slice();
            i.C76__implCache[e] = a.then((() => s(e, r, 0)))
          }
          return i.C76__implCache[e]
        };

        function s(e, r, n) {
          if (n >= r.length) throw new Error("ymaps3: no loader for pkg " + e);
          return Promise.resolve(r[n](e)).then((t => t || s(e, r, n + 1)), (() => s(e, r, n + 1)))
        }
        i.FE1__implInit = (e, r) => {
          o = e, a = r
        }, i.C76__implCache = Object.create(null), i.FE8__implInlineModules = Object.create(null);
        const c = RegExp("^(@yandex/ymaps3-)([^@]*)(?:@(\\d+\\.\\d+\\.\\d+))?$");

        function l(e, r, n) {
          return new Promise(((t, o) => {
            const a = document.createElement(e);
            Object.assign(a, r), n && Object.assign(a.dataset, n), document.head.appendChild(a), a.onload = t, a.onerror = o
          }))
        }
        i.default = function(e) {
          if (!o) return Promise.reject(new Error("ymaps3.import: not initialized"));
          if (i.FE8__implInlineModules[e]) return i.FE8__implInlineModules[e]();
          const r = c.exec(e);
          if (!r) return Promise.reject(new Error("Invalid package name format"));
          const n = r[1],
            a = r[2],
            s = r[3];
          if (!(["controls-extra", "editors", "utils", "vector"].includes(a) || ["cartesian-projection", "clusterer", "controls", "hint", "markers", "spherical-mercator-projection"].includes(a) && s)) return Promise.reject(new Error("Unknown package name"));
          let m = o;
          return m += s ? `/${s.replace(/\./g,"-")}` : "", m += `/${a}.js`, l("script", {
            src: m
          }).then((() => {
            const e = `${n}${a}`,
              r = t[e];
            return delete t[e], r
          }))
        }, i.loaders = [i.default], i.script = function(e) {
          return l("script", {
            src: e
          })
        }, i.cssText = function(e, r) {
          return l("style", {
            textContent: e
          }, {
            name: r || "inline"
          })
        }, i.style = function(e) {
          return l("link", {
            rel: "stylesheet",
            href: e
          })
        }
      },
      30492: (e, r, n) => {
        function t() {
          return "undefined" != typeof globalThis ? globalThis : this || self
        }
        n.d(r, {
          O: () => t
        })
      }
    },
    n = {};

  function t(e) {
    var o = n[e];
    if (void 0 !== o) return o.exports;
    var a = n[e] = {
      id: e,
      exports: {}
    };
    return r[e](a, a.exports, t), a.exports
  }
  t.m = r, e = [], t.O = (r, n, o, a) => {
    if (!n) {
      var i = 1 / 0;
      for (m = 0; m < e.length; m++) {
        for (var [n, o, a] = e[m], s = !0, c = 0; c < n.length; c++)(!1 & a || i >= a) && Object.keys(t.O).every((e => t.O[e](n[c]))) ? n.splice(c--, 1) : (s = !1, a < i && (i = a));
        if (s) {
          e.splice(m--, 1);
          var l = o();
          void 0 !== l && (r = l)
        }
      }
      return r
    }
    a = a || 0;
    for (var m = e.length; m > 0 && e[m - 1][2] > a; m--) e[m] = e[m - 1];
    e[m] = [n, o, a]
  }, t.n = e => {
    var r = e && e.__esModule ? () => e.default : () => e;
    return t.d(r, {
      a: r
    }), r
  }, t.d = (e, r) => {
    for (var n in r) t.o(r, n) && !t.o(e, n) && Object.defineProperty(e, n, {
      enumerable: !0,
      get: r[n]
    })
  }, t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), t.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, (() => {
    t.b = document.baseURI || self.location.href;
    var e = {
      668: 0
    };
    t.O.j = r => 0 === e[r];
    var r = (r, n) => {
        var o, a, [i, s, c] = n,
          l = 0;
        if (i.some((r => 0 !== e[r]))) {
          for (o in s) t.o(s, o) && (t.m[o] = s[o]);
          if (c) var m = c(t)
        }
        for (r && r(n); l < i.length; l++) a = i[l], t.o(e, a) && e[a] && e[a][0](), e[a] = 0;
        return t.O(m)
      },
      n = self.__chunk_yandex_ymaps3 = self.__chunk_yandex_ymaps3 || [];
    n.forEach(r.bind(null, 0)), n.push = r.bind(null, n.push.bind(n))
  })(), t.nc = void 0;
  var o = {};
  (() => {
    t.r(o), t.d(o, {
      import: () => i.N,
      ready: () => d
    });
    var e = t(30492),
      r = t(36519),
      n = t(40373);
    const a = ["fetch", "AbortController", "URL", "URLSearchParams", "ResizeObserver"];
    var i = t(81119);
    const s = (0, e.O)(),
      c = {
        "meta": {
          "lang": "ru_RU",
          "hosts": {
            "apiCoverageService": "https://api-maps.yandex.ru/services/coverage/",
            "apiRouteService": "https://api-maps.yandex.ru/services/route/",
            "apiSearchService": "https://api-maps.yandex.ru/services/search/",
            "apiConfigService": "https://api-maps.yandex.ru/3.0/config",
            "mapTiles": "https://core-renderer-tiles.maps.yandex.net/tiles?l=map&%c&%l",
            "mapjTiles": "https://core-renderer-tiles.maps.yandex.net/tiles?l=mapj&%c&%l&experimental_disable_toponym_hotspots=true",
            "satTiles": "https://core-sat.maps.yandex.net/tiles?l=sat&%c&%l",
            "suggestApi": "https://suggest-maps.yandex.ru/suggest-geo",
            "vectorTiles": "https://core-renderer-tiles.maps.yandex.net/vmap2/tiles?lang={{lang}}&x={{x}}&y={{y}}&z={{z}}&zmin={{zmin}}&zmax={{zmax}}&v={{version}}",
            "vectorImages": "https://core-renderer-tiles.maps.yandex.net/vmap2/icons?id={{id}}&scale={{scale}}",
            "vectorMeshes": "https://core-renderer-tiles.maps.yandex.net/vmap2/meshes?id={{id}}",
            "vectorGlyphs": "https://core-renderer-tiles.maps.yandex.net/vmap2/glyphs?lang={{lang}}&font_id={{fontId}}&range={{range}}"
          },
          "token": "b6b743256819656302320aa0aaba329d",
          "layers": {
            "map": {
              "version": "23.03.26-0-b230310130600",
              "scaled": true,
              "hotspotZoomRange": [1, 23]
            },
            "skl": {
              "version": "23.03.26-0-b230310130600",
              "scaled": true,
              "hotspotZoomRange": [1, 23]
            },
            "sta": {
              "version": "2023.03.26.01.23-1_23.03.24-0-14003",
              "scaled": false
            },
            "stv": {
              "version": "2023.03.26.01.23-1_23.03.24-0-14003",
              "scaled": false
            },
            "sat": {
              "version": "3.1058.0",
              "scaled": false
            },
            "trf": {
              "version": "1679855460",
              "scaled": true
            },
            "trfe": {
              "version": "",
              "scaled": true,
              "hotspotZoomRange": [0, 21]
            }
          },
          "allowedFeatures": {
            "vector": true,
            "customization": false,
            "router": false
          },
          "geolocation": {
            "lat": 55.815792,
            "long": 37.380031,
            "latSpan": 2.705659,
            "longSpan": 5.060749
          },
          "metrics": {
            "allowSending": true,
            "counterId": "80578111",
            "pageUrl": "api-maps.yandex.ru/3.0"
          },
          "copyrights": {
            "userAgreementHost": "https://yandex.ru/legal/maps_termsofuse/?lang={{lang}}",
            "userAgreementTextLong": "Условия использования",
            "userAgreementTextShort": "Условия",
            "logoLang": "ru",
            "allowRemove": false
          },
          "ruler": {
            "kmText": "км",
            "mText": "м"
          },
          "apikey": "54347af6-0186-4d82-aa17-4233803e642e"
        },
        "src": {
          "base": "https://yastatic.net/s3/front-maps-static/maps-front-jsapi-3/3.0.11127901/build/static/bundles"
        }
      };
    if (s.ymaps3) throw new Error("ymaps3: already defined");
    ! function(e) {
      if (a.filter((r => !e[r])).length) throw new Error(`ymaps3: next webapi's are required ${a.join(",")}`)
    }(s);
    const l = Promise.all([i.N.script(`${c.src.base}/main.js`), c.adhoc ? (0, r.Q)(c.adhoc.options, (0, n.W$)({
      meta: c.adhoc.meta
    })) : Promise.resolve((0, n.W$)({
      meta: c.meta
    }))]).then((([, e]) => {
      const r = "@yandex/ymaps3-main";
      Object.assign(s.ymaps3, s[r]), delete s[r], (0, n.mn)(e)
    }));
    i.N.FE8__implInlineModules["@yandex/ymaps3-reactify"] = () => l.then((() => s.ymaps3.A4F__implReactify));
    const m = "loading" !== document.readyState ? Promise.resolve() : new Promise((function(e) {
        window.addEventListener("DOMContentLoaded", e)
      })),
      d = Promise.all([m, l]).then((() => s.ymaps3));
    i.N.FE1__implInit(c.src.base, d)
  })(), o = t.O(o), self.ymaps3 = o
})();