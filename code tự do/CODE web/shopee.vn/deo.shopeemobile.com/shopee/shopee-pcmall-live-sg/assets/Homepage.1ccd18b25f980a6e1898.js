(("undefined" != typeof self ? self : this).webpackChunkshopee_pc = ("undefined" != typeof self ? self : this).webpackChunkshopee_pc || []).push([
    [4037], {
        81144: function(e, t, n) {
            "use strict";
            n.d(t, {
                yV: function() {
                    return y
                },
                c5: function() {
                    return _
                },
                qC: function() {
                    return v
                },
                Bn: function() {
                    return E
                },
                kW: function() {
                    return b
                },
                pg: function() {
                    return g
                }
            });
            var r = n(69068),
                a = n(19511),
                o = n(3792),
                i = (n(86764), n(83961)),
                s = n(48173);

            function c() {
                return (c = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function u(e, t, n) {
                return void 0 === n && (n = {}), (0, i.k)(c({}, n, {
                    type: "category",
                    category_id: e,
                    version: t
                }))
            }

            function l(e, t, n) {
                return void 0 === n && (n = {}), (0, i.k)(c({}, n, {
                    type: "group",
                    group_id: e,
                    version: t
                }))
            }

            function p(e, t, n) {
                return void 0 === t && (t = null), void 0 === n && (n = {}), (0, i.k)(c({}, n, {
                    type: "official_shop",
                    category_id: e,
                    version: t
                }))
            }

            function m(e, t) {
                return void 0 === e && (e = null), void 0 === t && (t = {}), (0, i.k)(c({}, t, {
                    type: s.Zi.MALL_POPUP,
                    version: e
                }))
            }

            function f() {
                return (f = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function d(e, t, n, r, a, o, i) {
                try {
                    var s = e[o](i),
                        c = s.value
                } catch (e) {
                    return void n(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(r, a)
            }

            function h(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            d(o, r, a, i, s, "next", e)
                        }

                        function s(e) {
                            d(o, r, a, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }
            var _ = function() {
                return function() {
                    var e = h(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    t((0, r.a)(s.WY));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            };

            function g(e, t) {
                return function() {
                    var n = h(regeneratorRuntime.mark((function n(r, o) {
                        return regeneratorRuntime.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2, (0, a.Z)({
                                        apiCall: function() {
                                            return p(e, null, t)
                                        },
                                        actions: [{
                                            type: s.c8.REQUESTED
                                        }, {
                                            type: s.c8.SUCCESS,
                                            payload: function(t, n, r) {
                                                return f({}, r, {
                                                    categoryId: e
                                                })
                                            }
                                        }, {
                                            type: s.c8.FAILED,
                                            payload: function(e, t, n) {
                                                return {
                                                    error: n.error
                                                }
                                            }
                                        }]
                                    }, r, o, "" + e);
                                case 2:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })));
                    return function(e, t) {
                        return n.apply(this, arguments)
                    }
                }()
            }

            function v(e, t) {
                var n = void 0 === t ? {} : t,
                    r = n.getBannerState,
                    i = void 0 === r ? function(e) {
                        return e.banner
                    } : r,
                    c = n.params,
                    l = void 0 === c ? {} : c;
                return function() {
                    var t = h(regeneratorRuntime.mark((function t(n, r) {
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, (0, a.Z)({
                                        apiCall: function() {
                                            var t = i(r()),
                                                n = (0, o.Z)(t, ["categoryBanners", e, "version"], null);
                                            return u(e, n, l)
                                        },
                                        actions: [{
                                            type: s.UJ.REQUESTED
                                        }, {
                                            type: s.UJ.SUCCESS,
                                            payload: function(t, n, r) {
                                                return f({}, r, {
                                                    categoryId: e
                                                })
                                            }
                                        }, {
                                            type: s.UJ.FAILED,
                                            payload: function(e, t, n) {
                                                return {
                                                    error: n.error
                                                }
                                            }
                                        }]
                                    }, n, r);
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e, n) {
                        return t.apply(this, arguments)
                    }
                }()
            }

            function y(e, t) {
                var n = void 0 === t ? {} : t,
                    r = n.getBannerState,
                    c = void 0 === r ? function(e) {
                        return e.banner
                    } : r,
                    u = n.params,
                    l = void 0 === u ? {} : u,
                    p = n.updatedLocation,
                    m = n.shouldNormalizeBanners,
                    d = n.normalType,
                    _ = n.providedPlatform;
                return function() {
                    var t = h(regeneratorRuntime.mark((function t(n, r) {
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, (0, a.Z)({
                                        apiCall: function() {
                                            var t = h(regeneratorRuntime.mark((function t() {
                                                var n, a, s, u, p;
                                                return regeneratorRuntime.wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            return n = c(r()), a = e.filter((function(e) {
                                                                return !!e
                                                            })), s = a.map((function(e) {
                                                                var t = (0, o.Z)(n, [e, "version"], null);
                                                                return t ? {
                                                                    type: e,
                                                                    version: t
                                                                } : {
                                                                    type: e
                                                                }
                                                            })), u = f({}, l, {
                                                                types: s,
                                                                providedPlatform: _
                                                            }), p = (0, i.T)(u), t.abrupt("return", p);
                                                        case 6:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function() {
                                                return t.apply(this, arguments)
                                            }
                                        }(),
                                        actions: [{
                                            type: s.Dj.REQUESTED
                                        }, {
                                            type: s.Dj.SUCCESS,
                                            payload: function(e, t, n) {
                                                return f({
                                                    updatedLocation: p,
                                                    shouldNormalizeBanners: !!m,
                                                    normalType: d
                                                }, n)
                                            }
                                        }, {
                                            type: s.Dj.FAILED,
                                            payload: function(e, t, n) {
                                                return {
                                                    error: n.error
                                                }
                                            }
                                        }]
                                    }, n, r);
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e, n) {
                        return t.apply(this, arguments)
                    }
                }()
            }

            function E(e, t) {
                var n = void 0 === t ? {} : t,
                    r = n.getBannerState,
                    i = void 0 === r ? function(e) {
                        return e.banner
                    } : r,
                    c = n.params,
                    u = void 0 === c ? {} : c;
                return function() {
                    var t = h(regeneratorRuntime.mark((function t(n, r) {
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, (0, a.Z)({
                                        apiCall: function() {
                                            var t = i(r()),
                                                n = (0, o.Z)(t, ["groupBanners", "version"], null);
                                            return l(e, n, u)
                                        },
                                        actions: [{
                                            type: s.Z3.REQUESTED
                                        }, {
                                            type: s.Z3.SUCCESS,
                                            payload: function(t, n, r) {
                                                return f({}, r, {
                                                    groupId: e
                                                })
                                            }
                                        }, {
                                            type: s.Z3.FAILED,
                                            payload: function(e, t, n) {
                                                return {
                                                    error: n.error
                                                }
                                            }
                                        }]
                                    }, n, r);
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e, n) {
                        return t.apply(this, arguments)
                    }
                }()
            }
            var b = function(e) {
                var t = void 0 === e ? {} : e,
                    n = t.getBannerState,
                    r = void 0 === n ? function(e) {
                        return e.banner
                    } : n,
                    i = t.params,
                    c = void 0 === i ? {} : i;
                return function() {
                    var e = h(regeneratorRuntime.mark((function e(t, n) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, a.Z)({
                                        apiCall: function() {
                                            var e = r(n());
                                            return m((0, o.Z)(e, [s.Zi.MALL_POPUP, "version"], null), c)
                                        },
                                        actions: [{
                                            type: s.Uz.REQUESTED
                                        }, {
                                            type: s.Uz.SUCCESS,
                                            payload: function(e, t, n) {
                                                return n
                                            }
                                        }, {
                                            type: s.Uz.FAILED,
                                            payload: function(e, t, n) {
                                                return {
                                                    error: n.error
                                                }
                                            }
                                        }]
                                    }, t, n);
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }
        },
        50949: function(e, t, n) {
            "use strict";
            n.d(t, {
                tj: function() {
                    return a
                },
                Lv: function() {
                    return o
                },
                Ds: function() {
                    return i
                },
                qV: function() {
                    return s
                },
                X: function() {
                    return c
                },
                Sr: function() {
                    return u
                },
                dt: function() {
                    return p
                },
                wM: function() {
                    return m
                },
                X5: function() {
                    return f
                },
                ED: function() {
                    return d
                },
                UK: function() {
                    return h
                },
                Ms: function() {
                    return _
                },
                o8: function() {
                    return g
                },
                $g: function() {
                    return v
                },
                tV: function() {
                    return y
                }
            });
            var r = n(48173),
                a = function(e) {
                    return e[r.N3]
                },
                o = function(e, t) {
                    var n, r;
                    return (null == e || null === (n = e.categoryBanners) || void 0 === n || null === (r = n[t]) || void 0 === r ? void 0 : r.banners) || []
                },
                i = function(e, t) {
                    var n = e.officialShopBanners[t];
                    return n ? n.banners : []
                },
                s = function(e) {
                    return e.popup.banners
                },
                c = function(e) {
                    return e.activity.banners
                },
                u = function(e) {
                    return e.floating.banners
                },
                l = function(e) {
                    return null == e || null == e.data ? [] : e.data.map((function(t) {
                        return {
                            start: e.start,
                            end: e.end,
                            banner_image_hash: t.mobile_image,
                            pc_banner_image_hash: t.pc_image,
                            pc_banner_image_hash_gif: t.pc_image_gif,
                            banner_image: "",
                            id: e.id,
                            navigate_params: {
                                url: t.url,
                                navbar: {}
                            },
                            display: e.display
                        }
                    }))
                },
                p = function(e) {
                    var t, n;
                    return e.skinny_v2 ? l(null == e || null === (t = e.skinny_v2) || void 0 === t || null === (n = t.banners) || void 0 === n ? void 0 : n[0]) : e.skinny.banners
                },
                m = function(e) {
                    return e.pc_home_squares && e.pc_home_squares.banners.length > 0
                },
                f = function(e) {
                    return m(e) ? e.pc_home_squares.banners : e.pc_home_circles.banners
                },
                d = function(e, t) {
                    return e && e.groupBanners && e.groupBanners[t] && e.groupBanners[t].banners ? e.groupBanners[t].banners : []
                },
                h = function(e) {
                    return e.homepage_mall_banner.banners
                },
                _ = function(e) {
                    return e.mall_popup.banners
                },
                g = function(e) {
                    return e.mart_activity.banners
                },
                v = function(e, t) {
                    var n;
                    return void 0 === t && (t = 4), ((null == e || null === (n = e.mart_skinny_v2) || void 0 === n ? void 0 : n.banners) || []).slice(0, t).map((function(e) {
                        return l(e)
                    }))
                };

            function y(e, t) {
                return !e && !e || !(!e || !t) && (e.length === t.length && e.every((function(e, n) {
                    return function(e, t) {
                        return !e && !t || !(!e || !t) && e.length === t.length && e.every((function(e, n) {
                            return t[n].id === e.id
                        }))
                    }(e, t[n])
                })))
            }
        },
        83961: function(e, t, n) {
            "use strict";
            n.d(t, {
                k: function() {
                    return g
                },
                T: function() {
                    return _
                }
            });
            var r = n(72609),
                a = n(68214),
                o = n.n(a),
                i = n(86764),
                s = n(47546),
                c = n(41236),
                u = n(3792),
                l = n(5078);

            function p() {
                return (p = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var m = {
                    location: "location",
                    longitude: "longitude",
                    latitude: "latitude",
                    token: "token",
                    preview_params: "preview_params"
                },
                f = p({}, m, {
                    type: "type",
                    category_id: "category_id",
                    group_id: "group_id",
                    version: "version"
                });
            p({}, m, {
                version: "__version__"
            });

            function d(e) {
                return (0, s.Z)(e, ["response"], (function(e) {
                    var t = e.data;
                    return p({}, function(e, t) {
                        if (null == e) return {};
                        var n, r, a = {},
                            o = Object.keys(e);
                        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                        return a
                    }(e, ["data"]), t, {
                        banners: t && t.banners ? t.banners : []
                    })
                }))
            }

            function h() {
                return (h = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function _(e) {
                var t = e.types,
                    n = e.providedPlatform,
                    a = function(e, t) {
                        if (null == e) return {};
                        var n, r, a = {},
                            o = Object.keys(e);
                        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                        return a
                    }(e, ["types", "providedPlatform"]),
                    c = o()(t.map((function(e) {
                        return e.type
                    })).sort().join(","));
                return (0, r.jsonPost)("/api/v4/banner/batch_list", h({}, a, {
                    location: JSON.stringify(a.location),
                    preview_params: JSON.stringify(a.preview_params),
                    types: t,
                    version: c.toString()
                })).then((function(e) {
                    var t, r, a = function(e) {
                            var t = (0, i.n)(e);
                            return function(e) {
                                return Object.keys(e).reduce((function(n, r) {
                                    return n[r] = (0, s.Z)(e[r], ["banners"], (function(e) {
                                        return (e || []).filter(t)
                                    })), n
                                }), {})
                            }
                        }(n),
                        o = (t = e, r = (0, u.Z)(t, ["response", "data", "banners"], []), (0, l.Z)(t, ["response", "banners"], r.reduce((function(e, t) {
                            var n;
                            return p({}, e, ((n = {})[t.type] = t, n))
                        }), {})));
                    return (0, s.Z)(o, ["response", "banners"], a)
                }))
            }

            function g(e) {
                return (0, r.fetchInfo)("/api/v4/banner/get_list" + (t = e, n = p({}, t, {
                    preview_params: JSON.stringify(t.preview_params)
                }), (0, c.a)(f)(n))).then((function(e) {
                    return (0, s.Z)(d(e), ["response", "banners"], (function(e) {
                        return e.filter(i.D)
                    }))
                }));
                var t, n
            }
        },
        80850: function(e) {
            e.exports = {}
        },
        62198: function(e, t, n) {
            "use strict";
            var r = n(27378),
                a = n.n(r),
                o = n(31474),
                i = n(60710),
                s = n(2149),
                c = n(48173),
                u = n(84571);

            function l() {
                return (l = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            t.Z = function(e) {
                var t = e.banner,
                    n = e.bannerType,
                    r = e.width,
                    p = e.height,
                    m = e.style,
                    f = void 0 === m ? {} : m,
                    d = e.hidePlaceholderIcon,
                    h = void 0 !== d && d,
                    _ = e.location,
                    g = e.targetType,
                    v = l({
                        width: r,
                        height: p
                    }, f),
                    y = t && t.navigate_params ? (0, s.e)(t.navigate_params.url) : {
                        type: s.G.EXTERNAL,
                        link: "#"
                    },
                    E = function(e, t) {
                        if (!e || !t) return null;
                        switch (e) {
                            case c.Zi.FLOATING_ICONS:
                                return t.images && t.images.image_floating_pc ? (0, i.Jn)(t.images.image_floating_pc) : null;
                            case c.Zi.SKINNY_BANNERS:
                                return t.pc_banner_image || (0, i.Jn)(t.pc_banner_image_hash);
                            default:
                                return t.pc_banner_image
                        }
                    }(n, t),
                    b = function(e, t) {
                        if (!e || !t) return null;
                        switch (e) {
                            case c.Zi.FLOATING_ICONS:
                                return t.images && t.images.image_floating_pc_gif ? (0, i.Jn)(t.images.image_floating_pc_gif) : null;
                            case c.Zi.SKINNY_BANNERS:
                                return t.pc_banner_image_gif || (0, i.Jn)(t.pc_banner_image_hash_gif);
                            default:
                                return t.pc_banner_image_gif
                        }
                    }(n, t);
                return a().createElement("div", {
                    className: "shopee-skinny-banner__container"
                }, a().createElement(u.LinkWithTrackImpression, {
                    to: y.link,
                    className: "shopee-skinny-banner",
                    style: v,
                    bannerUrl: t && t.navigate_params ? t.navigate_params.url : "#",
                    location: _,
                    targetType: g || n,
                    id: t && t.id
                }, a().createElement(o.Y, {
                    src: E,
                    gifSrc: b,
                    wrapperClassName: "shopee-skinny-banner__full-height",
                    className: "shopee-skinny-banner__full-height",
                    hidePlaceholder: h,
                    placeholderClassName: "shopee-skinny-banner__placeholder",
                    isCovered: !0
                })))
            }
        },
        72033: function(e, t, n) {
            "use strict";
            var r = n(12128);

            function a() {}
            e.exports = function() {
                function e(e, t, n, a, o, i) {
                    if (i !== r) {
                        var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw s.name = "Invariant Violation", s
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var n = {
                    array: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t
                };
                return n.checkPropTypes = a, n.PropTypes = n, n
            }
        },
        47924: function(e, t, n) {
            e.exports = n(72033)()
        },
        12128: function(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        63849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return Xn
                }
            });
            var r = n(27378),
                a = n.n(r),
                o = n(70405),
                i = n(47924),
                s = n.n(i),
                c = n(12142),
                u = n(88623),
                l = n(79110),
                p = n(79308),
                m = n(26624),
                f = n(98845),
                d = n(49101),
                h = n(8013),
                _ = n(79409),
                g = n(93049),
                v = n(98970),
                y = n(99096),
                E = n(3140),
                b = n(70590),
                w = n(3792),
                S = n(8205),
                C = n(22333),
                P = n(98466),
                k = n(23287),
                O = n(6965),
                N = n(33379),
                T = n(91208);

            function I() {
                return (I = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function A(e, t, n, r, a, o, i) {
                try {
                    var s = e[o](i),
                        c = s.value
                } catch (e) {
                    return void n(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(r, a)
            }

            function L(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            A(o, r, a, i, s, "next", e)
                        }

                        function s(e) {
                            A(o, r, a, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function x(e, t) {
                return (x = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            for (var R = [], D = 0; D < 5; D++) R.push(r.createElement("div", {
                className: "shopee-product-recommend-items__item-wrapper"
            }, r.createElement(v.ZP, {
                isPlaceholder: !0,
                layout: v.HS.HOME_PAGE
            })));
            var B = function(e) {
                var t, n;

                function a(t) {
                    var n;
                    return (n = e.call(this, t) || this).state = {
                        isFetching: !1
                    }, n
                }
                n = e, (t = a).prototype = Object.create(n.prototype), t.prototype.constructor = t, x(t, n);
                var o = a.prototype;
                return o.UNSAFE_componentWillMount = function() {
                    var e = this;
                    this.setState({
                        isFetching: !0
                    }), L(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, e.universalDataFetch();
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                }, o.universalDataFetch = function() {
                    var e = this.props.shouldPersonalized;
                    return this.fetchFlashSaleContent(e)
                }, o.UNSAFE_componentWillReceiveProps = function(e) {
                    var t = this,
                        n = this.props.shouldPersonalized;
                    e.shouldPersonalized !== n && L(regeneratorRuntime.mark((function n() {
                        return regeneratorRuntime.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2, t.fetchFlashSaleContent(e.shouldPersonalized);
                                case 2:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })))()
                }, o.fetchFlashSaleContent = function() {
                    var e = L(regeneratorRuntime.mark((function e(t) {
                        var n = this;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.props.fetchFlashSaleItems({
                                        shouldPersonalized: t,
                                        filterSoldout: !0
                                    }, 0, f.zN, (function(e) {
                                        return n.setState({
                                            isFetching: e
                                        })
                                    }), (function() {
                                        return n.setState({
                                            isFetching: !1
                                        })
                                    }));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(), o.render = function() {
                    var e = this.props,
                        t = e.meta,
                        n = e.isShowSeeAll,
                        a = void 0 === n || n,
                        o = e.itemInfo,
                        i = e.trackingClick,
                        s = e.customHeader,
                        c = e.responsiveLayoutInfo,
                        u = o && o.items,
                        l = t ? t.end_time : -1,
                        p = t ? t.start_time : -1,
                        m = t ? t.promotionid : null;
                    return this.state.isFetching || u && !(u.length < 6) ? this.state.isFetching ? r.createElement("div", {
                        className: "shopee-flash-sale-overview-carousel"
                    }) : r.createElement("div", {
                        className: "shopee-flash-sale-overview-carousel"
                    }, r.createElement(C.ZP, {
                        targetType: "FlashSaleOverviewCarousel"
                    }, r.createElement(d.S, {
                        headerText: r.createElement(g.Z, {
                            startTime: p,
                            endTime: l,
                            country: _.LOCALE.toLowerCase()
                        }),
                        simpleVersion: !0,
                        onHeaderButtonClick: i,
                        headerButton: a && m ? {
                            text: k.default.t("label_see_all"),
                            linkTo: (0, y.getFlashSaleLandingPage)({
                                promotionId: m
                            })
                        } : null,
                        customHeader: s
                    }, r.createElement(h.lr, {
                        showArrowOnHover: !0,
                        showArrowHint: !0,
                        numItemsPerRow: c.numItemsPerRow,
                        padding: "0px",
                        items: u && u.length >= 6 && !this.state.isFetching ? u.map((function(e, t) {
                            return r.createElement("div", {
                                className: "shopee-product-recommend-items__item-wrapper",
                                key: "flash-sale-overview-item-" + t
                            }, e ? r.createElement(v.ZP, {
                                item: e,
                                index: t,
                                isOngoing: !0,
                                layout: v.HS.HOME_PAGE,
                                displayBuyNowButton: !1,
                                overwriteCardLink: (0, y.getFlashSaleLandingPage)({
                                    promotionId: m,
                                    fromItem: e.itemid
                                }),
                                displayFlashSaleProgressBar: !0,
                                setShowDiscountBadge: !0
                            }) : r.createElement("div", null))
                        })) : R
                    })))) : null
                }, a
            }(r.Component);
            B.QUERY = {
                filterSoldout: !0
            };
            var U = (0, p.connect)((function(e) {
                    var t = e.featureToggles.toggles[S.Xgy],
                        n = void 0 !== t && t;
                    return {
                        shouldPersonalized: n,
                        meta: (0, m.fg)(e),
                        itemInfo: (0, m.Kj)(e, {
                            filterSoldout: !0,
                            shouldPersonalized: n
                        })
                    }
                }), {
                    fetchFlashSaleItems: m.HU
                })((0, O.withI18nCollections)([N.L, N.GC])((0, P.Z)((0, T.xQ)({
                    mapLayoutTypeToUsedLayoutValue: function(e) {
                        return e === T.V2.Tiny ? {
                            numItemsPerRow: 4
                        } : e === T.V2.Portrait ? {
                            numItemsPerRow: 5
                        } : {
                            numItemsPerRow: 6
                        }
                    }
                })((function(e) {
                    return r.createElement(E.Z.Consumer, null, (function(t) {
                        var n = t.customHeader;
                        return r.createElement(B, I({
                            customHeader: (0, w.Z)(n, [b.u.FLASH_SALE]) || null
                        }, e))
                    }))
                })), "FlashSaleOverviewCarousel"))),
                F = n(14490);
            var j = function(e, t) {
                    return !t || t <= 0 ? e : t <= 1 ? e + "_mdpi" : t <= 2 ? e + "_xhdpi" : e + "_xxhdpi"
                },
                Z = (0, P.Z)((function(e) {
                    var t = e.welcomeDisplayBanner,
                        n = e.clickWPBanner,
                        a = e.trackingRef,
                        o = e.trackingClick;
                    return r.createElement(F.Z, {
                        className: "welcome-package-banner",
                        ref: a,
                        onClick: function() {
                            o(), n()
                        },
                        src: j(t.banner_image, 3),
                        imageServerWidthOperator: 1800
                    })
                }), "WelcomePackageBanner"),
                H = n(11540).Z,
                M = n(73727);
            var W = function(e) {
                    var t = e.img,
                        n = e.link;
                    return a().createElement("div", {
                        className: "welcomePopup"
                    }, a().createElement(M.Link, {
                        to: n
                    }, a().createElement("img", {
                        src: j(t, 2),
                        alt: "welcome_img_banner"
                    })))
                },
                V = n(60042),
                G = n.n(V),
                z = "_2FKNxQ",
                J = "-ZWMTR";

            function K(e) {
                var t = e.className,
                    n = e.isReady,
                    a = e.children;
                return r.createElement("div", {
                    className: G()(t, z, n && J)
                }, a)
            }
            var X, Y = n(60110),
                q = (n(60122), n(83367)),
                Q = n(108),
                $ = n(50949),
                ee = n(81144),
                te = n(73180),
                ne = n(43058),
                re = n(41153),
                ae = n(30085),
                oe = n(79093),
                ie = n(29540),
                se = n(73041),
                ce = n(40605),
                ue = n(60710),
                le = n(39894),
                pe = n(18272),
                me = n(13384),
                fe = "_5XYhbS",
                de = "WCwWZw",
                he = "uuQ6nw",
                _e = "_3K5s_h",
                ge = "_3DLGAG",
                ve = "_13sfos",
                ye = "_2bc8OF";
            var Ee = (0, P.Z)((function(e) {
                    var t = e.isPlaceholder,
                        n = e.imageUrl,
                        r = e.displayName,
                        o = e.trackingRef,
                        i = e.trackingClick;
                    return a().createElement("div", {
                        className: fe,
                        onClick: i,
                        ref: o
                    }, a().createElement("div", {
                        className: de
                    }, a().createElement(me.p, {
                        src: n,
                        wrapperClassName: _e,
                        placeholderClassName: he,
                        className: _e,
                        imageServerWidthOperator: 320
                    })), a().createElement("div", {
                        className: ge
                    }, t ? a().createElement(a().Fragment, null, a().createElement("div", {
                        className: G()("skeleton skeleton-medium", ye)
                    }), a().createElement("div", {
                        className: G()("skeleton skeleton-medium", ye)
                    })) : a().createElement("div", {
                        className: ve
                    }, r)))
                }), "CategoryItem"),
                be = n(32666),
                we = n(95262);

            function Se(e, t) {
                return (Se = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            for (var Ce = [], Pe = 0; Pe < 20; Pe++) Ce.push(r.createElement("div", {
                className: "home-category-list__category-grid",
                key: Pe
            }, r.createElement(Ee, {
                isPlaceholder: !0
            })));
            var ke = function(e) {
                var t, n;

                function a() {
                    return e.apply(this, arguments) || this
                }
                n = e, (t = a).prototype = Object.create(n.prototype), t.prototype.constructor = t, Se(t, n);
                var o = a.prototype;
                return o.UNSAFE_componentWillMount = function() {
                    this.universalDataFetch()
                }, o.universalDataFetch = function() {
                    return this.props.loadCategoryList(ce.t4)
                }, o.shouldComponentUpdate = function(e) {
                    return e.categories !== this.props.categories || e.responsiveLayoutInfo.responsiveCategoryItemSize !== this.props.responsiveLayoutInfo.responsiveCategoryItemSize
                }, o.render = function() {
                    var e = this.props,
                        t = e.categories,
                        n = void 0 === t ? [] : t,
                        a = e.style,
                        o = e.responsiveLayoutInfo,
                        i = (o = void 0 === o ? {} : o).responsiveCategoryItemSize,
                        s = void 0 === i ? 20 : i,
                        c = Ce;
                    n.length > 0 && (c = n.map((function(e, t) {
                        var n = e.catid,
                            a = e.display_name;
                        return r.createElement(M.Link, {
                            to: le.rj.getUrl({
                                categoryId: n,
                                categoryName: a
                            }),
                            className: "home-category-list__category-grid",
                            key: n
                        }, r.createElement(Ee, {
                            imageUrl: (0, ue.Jn)(e.image, !0),
                            displayName: a,
                            catId: n,
                            index: t
                        }))
                    })));
                    var u = [];
                    c.forEach((function(e, t) {
                        t % 2 == 0 ? u.push([e]) : u[(t - 1) / 2].push(e)
                    }));
                    var l = u.map((function(e, t) {
                        return r.createElement("div", {
                            className: "home-category-list__group",
                            key: t
                        }, e[0], 1 === e.length ? r.createElement("div", {
                            className: "home-category-list__category-grid home-category-list__category-grid--empty"
                        }) : e[1])
                    }));
                    return r.createElement("div", {
                        className: "home-category-list"
                    }, r.createElement(E.Z.Consumer, null, (function(e) {
                        var t = e.customHeader;
                        return r.createElement(be.S, {
                            headerText: (0, O.t)("home_page_label_categories"),
                            simpleVersion: !0,
                            style: a,
                            customHeader: (0, w.Z)(t, [b.u.CATEGORY])
                        }, r.createElement(h.lr, {
                            showArrowOnHover: !0,
                            showArrowHint: !0,
                            numItemsPerRow: c.length > s ? s / 2 : Math.floor(c.length / 2),
                            padding: "0px",
                            items: l
                        }))
                    })))
                }, a
            }(r.Component);
            var Oe = (0, p.connect)((function(e) {
                    return {
                        categories: (0, pe.AT)(e.sharedCategory)
                    }
                }), {
                    loadCategoryList: we.o1
                })((0, T.xQ)({
                    mapLayoutTypeToUsedLayoutValue: function(e) {
                        return {
                            responsiveCategoryItemSize: e === T.V2.Tiny ? 12 : e === T.V2.Portrait ? 16 : 20
                        }
                    }
                })(ke)),
                Ne = n(45141),
                Te = "XIR7Xg",
                Ie = "UtpFyQ";
            var Ae = function() {
                return r.createElement("div", {
                    className: Te
                }, r.createElement(Ne.Z, {
                    show: !0,
                    hideOverlay: !0,
                    spinnerClassName: Ie
                }))
            };

            function Le(e, t) {
                return (Le = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var xe, Re = function(e) {
                    var t, n;

                    function a(t) {
                        var n;
                        return (n = e.call(this, t) || this).state = {
                            style: {}
                        }, n.updateDimensions = n.updateDimensions.bind(function(e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(n)), n
                    }
                    n = e, (t = a).prototype = Object.create(n.prototype), t.prototype.constructor = t, Le(t, n);
                    var o = a.prototype;
                    return o.componentDidMount = function() {
                        window.addEventListener("resize", this.updateDimensions), this.updateDimensions()
                    }, o.componentWillUnmount = function() {
                        window.removeEventListener("resize", this.updateDimensions)
                    }, o.updateDimensions = function() {
                        var e = {};
                        window.innerWidth > 1464 ? e.left = window.innerWidth / 2 + 600 + 18 : (e.float = "right", e.right = "30px"), this.setState({
                            style: e
                        })
                    }, o.render = function() {
                        return r.createElement("div", {
                            className: "shopee-floating-icons__wrapper",
                            style: this.state.style
                        }, this.props.children)
                    }, a
                }(r.Component),
                De = n(62198),
                Be = n(48173),
                Ue = function(e) {
                    var t = e.skinnyBanners;
                    return t && t.length ? r.createElement("div", {
                        style: {
                            marginTop: 20
                        }
                    }, t.slice(0, Be.Hb).map((function(e, n) {
                        return r.createElement(De.Z, {
                            key: "skinny-banner-" + n,
                            width: 1200 / Math.min(Be.Hb, t.length) + "px",
                            height: "110px",
                            style: {
                                borderRadius: 2
                            },
                            hidePlaceholderIcon: !0,
                            banner: e,
                            bannerType: Be.Zi.SKINNY_BANNERS,
                            targetType: "SkinnyBanner",
                            location: n
                        })
                    }))) : null
                },
                Fe = n(69068),
                je = n(18363),
                Ze = (0, Fe.n)("FETCH_HOME_CAMPAIGN_MODULES"),
                He = n(14081);

            function Me() {
                return (Me = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var We = Me({}, je.e, {
                    campaign_top_visual: null,
                    featured_products: null,
                    featured_shops: null,
                    featured_collections: null,
                    campaign_bottom_visual: null,
                    cached: !1,
                    version: "init"
                }),
                Ve = (0, He.Z)(((xe = {})[Ze.SUCCESS] = function(e, t) {
                    return Me({}, e, je.e, t.payload.data, {
                        cached: !1,
                        version: t.payload.version,
                        apiProgress: je.Z.OK
                    })
                }, xe[Ze.FAILED] = function(e, t) {
                    return Me({}, e, je.e, {
                        cached: !1,
                        apiProgress: je.Z.ERR,
                        error: t.payload
                    })
                }, xe.RESTORE_HOME_CAMPAIGN_MODULES_CACHE = function(e, t) {
                    return e.apiProgress !== je.Z.OK ? Me({}, e, t.payload, {
                        cached: !0,
                        apiProgress: e.apiProgress,
                        error: e.error,
                        error_msg: e.error_msg
                    }) : e
                }, xe), We),
                Ge = n(19511),
                ze = n(72609);

            function Je(e, t, n, r, a, o, i) {
                try {
                    var s = e[o](i),
                        c = s.value
                } catch (e) {
                    return void n(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(r, a)
            }
            var Ke = "P1JRX7",
                Xe = "q6V5oo",
                Ye = n(17613),
                qe = n(42363),
                Qe = n(49792),
                $e = n(28743),
                et = n(25653);

            function tt(e) {
                if (!e) return null;
                var t = e.data && e.data.image_pc,
                    n = e.data && e.data.image_ratio_pc,
                    r = e.data && e.data.redirection_url;
                return t ? {
                    image: t,
                    ratio: n,
                    linkTo: r
                } : null
            }
            var nt = n(92027),
                rt = n(95802),
                at = n(17312),
                ot = "_2dRoLS";

            function it(e, t) {
                return (it = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var st = function(e) {
                var t, n;

                function r() {
                    for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                    return (t = e.call.apply(e, [this].concat(r)) || this).handleRef = function(e) {
                        t.imgRef = e
                    }, t
                }
                n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, it(t, n);
                var o = r.prototype;
                return o.componentDidMount = function() {
                    var e = this.imgRef;
                    if (null != e && this.props.ratio) {
                        var t = e.getBoundingClientRect().width;
                        e.style.height = t / this.props.ratio + "px"
                    }
                }, o.render = function() {
                    var e = this.props,
                        t = e.image,
                        n = e.linkTo;
                    return n ? a().createElement(rt.Z, {
                        to: (0, nt.OE)(n)
                    }, a().createElement(at.Z, {
                        ref: this.handleRef,
                        src: (0, ue.Jn)(t),
                        className: ot,
                        imageServerWidthOperator: 1200
                    })) : a().createElement(at.Z, {
                        ref: this.handleRef,
                        src: (0, ue.Jn)(t),
                        className: ot,
                        imageServerWidthOperator: 1200
                    })
                }, r
            }(a().PureComponent);
            var ct = (0, P.Z)((function(e) {
                    var t = e.trackingClick,
                        n = e.trackingRef;
                    return a().createElement("div", {
                        ref: n,
                        onClick: function() {
                            t && t()
                        }
                    }, a().createElement(st, e))
                }), "HomeCampaignTopVisual"),
                ut = n(41310),
                lt = "_1pv87h",
                pt = "_2mSgrt",
                mt = "_2pV081";

            function ft(e) {
                var t = e.url,
                    n = e.color,
                    r = e.trackingClick,
                    o = e.trackingRef;
                return a().createElement("a", {
                    href: t,
                    ref: o,
                    style: {
                        color: n
                    },
                    className: mt,
                    onClick: r
                }, (0, O.t)("promo_label_see_more"), a().createElement(ut.Z, null))
            }
            var dt = {
                hot_product: (0, P.Z)(ft, "HotProductSeeMore"),
                hot_collection: (0, P.Z)(ft, "HotCollectionSeeMore"),
                hot_brand: (0, P.Z)(ft, "HotBrandSeeMore")
            };

            function ht(e) {
                var t = e.text,
                    n = e.textColor,
                    r = e.headerSeeMoreTextColor,
                    o = e.seeMoreLink,
                    i = e.backgroundColor,
                    s = e.section,
                    c = dt[s],
                    u = i ? {
                        backgroundColor: i
                    } : {};
                return a().createElement("div", {
                    className: lt,
                    style: u
                }, a().createElement("span", {
                    style: {
                        color: n
                    },
                    className: pt
                }, t), o && a().createElement(c, {
                    url: o,
                    color: r
                }))
            }
            var _t = "o7ehE-",
                gt = "Flsiyn",
                vt = "SutD9V",
                yt = "_1NUoEB",
                Et = "_1efKXr",
                bt = "_1q_SrC",
                wt = "vrtrZV",
                St = "_2iNVI-",
                Ct = n(51816),
                Pt = (0, n(6976).of)(),
                kt = function(e) {
                    e.target.onerror = null
                };
            var Ot = "kQ0_Jy",
                Nt = "_3Vw4cV",
                Tt = "_2jKTmZ",
                It = (0, P.Z)((function(e) {
                    var t = e.item,
                        n = e.textColor,
                        r = e.trackingClick,
                        o = e.trackingRef,
                        i = e.hideTag,
                        s = t.image,
                        c = t.text,
                        u = t.linkTo,
                        l = t.textTitle;
                    return a().createElement(M.Link, {
                        to: u,
                        className: _t,
                        onClick: r,
                        innerRef: o
                    }, a().createElement(me.p, {
                        imageServerWidthOperator: 320,
                        className: gt,
                        src: s
                    }), t.hasOwnProperty("logo") && a().createElement("div", {
                        className: vt
                    }, a().createElement("img", {
                        className: yt,
                        onError: kt,
                        src: t.logo
                    })), l && a().createElement("div", {
                        className: G()(wt)
                    }, l), a().createElement("div", {
                        className: G()(Et)
                    }, a().createElement("div", {
                        style: {
                            color: n
                        },
                        className: G()(bt)
                    }, c)), !i && t.discount ? a().createElement("div", {
                        className: St
                    }, a().createElement(Ct.OO, {
                        rawDiscount: t.discount,
                        language: Pt,
                        offText: (0, O.t)("pr_badge_label_off")
                    })) : null)
                }), "CampaignHotCollection");

            function At(e) {
                var t = e.headerText,
                    n = e.headerTextColor,
                    r = e.textColor,
                    o = e.seeMoreLink,
                    i = e.items,
                    s = e.sectionBackgroundColor,
                    c = e.headerSeeMoreTextColor,
                    u = e.single,
                    l = e.hideTag;
                return a().createElement("div", {
                    className: u ? Nt : Ot
                }, a().createElement(ht, {
                    text: t,
                    textColor: n,
                    seeMoreLink: o,
                    backgroundColor: s,
                    headerSeeMoreTextColor: c,
                    section: "hot_collection"
                }), a().createElement("div", {
                    className: Tt,
                    style: {
                        backgroundColor: s
                    }
                }, i.slice(0, u ? 6 : 3).map((function(e, t) {
                    return a().createElement(It, {
                        hideTag: l,
                        key: t,
                        item: e,
                        textColor: r,
                        location: t
                    })
                }))))
            }

            function Lt(e) {
                return a().createElement(st, e)
            }

            function xt() {
                return (xt = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Rt(e, t) {
                return (Rt = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var Dt = function(e) {
                var t, n;

                function a(t) {
                    return e.call(this, t) || this
                }
                n = e, (t = a).prototype = Object.create(n.prototype), t.prototype.constructor = t, Rt(t, n);
                var o = a.prototype;
                return o.componentDidMount = function() {
                    this.load(this.props)
                }, o.load = function(e) {
                    this.props.injectAsyncReducer({
                        homeCampaign: Ve
                    }), e.fetchHomeCampaignModules()
                }, o.render = function() {
                    var e = this.props,
                        t = e.isHomeCampaignVisible,
                        n = e.isFeaturedProductsVisible,
                        a = e.isFeaturedCollectionsVisible,
                        o = e.isFeaturedShopsVisible,
                        i = e.topVisual,
                        s = e.featuredProducts,
                        c = e.featuredCollections,
                        u = e.featuredShops,
                        l = e.bottomVisual,
                        p = e.hideTag;
                    if (!t) return null;
                    var m = [];
                    return n && m.push({
                        component: At,
                        data: s
                    }), o && m.push({
                        data: u
                    }), a && m.length < 2 && m.push({
                        data: c
                    }), 1 === m.length && (0, w.Z)(m, [0, "data", "items", "length"], 0) < 6 ? null : r.createElement("div", {
                        className: Xe
                    }, i && i.image && r.createElement(ct, {
                        image: i ? i.image : "",
                        ratio: i ? i.ratio : 1,
                        linkTo: i ? i.linkTo : ""
                    }), r.createElement(F.Z, {
                        src: (0, ue.Jn)(this.props.backgroundImage),
                        className: Ke
                    }, m.map((function(e, t) {
                        var n = e.data;
                        return r.createElement(At, xt({}, n, {
                            key: t,
                            hideTag: p,
                            single: 1 === m.length
                        }))
                    }))), l && l.image && r.createElement(Lt, {
                        image: l ? l.image : "",
                        ratio: l ? l.ratio : 1
                    }))
                }, a
            }(r.Component);
            var Bt = (0, ne.qC)(ae.withInjectReducer, (0, p.connect)((function(e) {
                    var t = tt(function(e) {
                            return e && e.campaign_top_visual
                        }(e.homeCampaign)),
                        n = function(e) {
                            return e && e.campaign_images && e.campaign_images.data
                        }(e.homeCampaign),
                        r = function(e, t) {
                            if (!e) return null;
                            if (e.items.length < 3) return null;
                            var n = e.banner_image || t && t.one_row_image;
                            return {
                                items: e.items.slice(0, 6).map((function(e) {
                                    return {
                                        image: (0, ue.Jn)(e.transparent_background_image ? e.transparent_background_image : e.image, !0),
                                        text: e.hidden_price_display || (0, Ye.JL)(e.price),
                                        linkTo: $e.O.getUrl({
                                            shopId: e.shopid,
                                            itemId: e.itemid,
                                            seoName: e.name
                                        }),
                                        item: e,
                                        discount: e.raw_discount
                                    }
                                })),
                                backgroundImage: (0, ue.Jn)(n || ""),
                                headerText: e.header_text,
                                headerTextColor: e.header_text_color,
                                textColor: e.price_text_color,
                                headerSeeMoreTextColor: e.header_text_color,
                                seeMoreLink: e.see_more_link,
                                sectionBackgroundColor: e.section_background_color
                            }
                        }(function(e) {
                            return e && e.featured_products
                        }(e.homeCampaign), n),
                        a = (0, w.Z)(e.homeCampaign, ["campaign_images", "data", "image_pc"]),
                        o = function(e, t) {
                            if (!e) return null;
                            if (e.collections.length < 3) return null;
                            var n = e.banner_image || t && t.one_row_image;
                            return {
                                items: e.collections.slice(0, 6).map((function(e) {
                                    return {
                                        image: (0, ue.Jn)(e.collection_asset_image),
                                        text: e.collection_asset_text || e.collection_name || "",
                                        linkTo: et.Hh.getUrl({
                                            collection: e.collection_name,
                                            collectionId: e.collection_id
                                        }),
                                        item: e
                                    }
                                })),
                                backgroundImage: (0, ue.Jn)(n || ""),
                                headerText: e.header_text,
                                headerTextColor: e.header_text_color,
                                headerSeeMoreTextColor: e.header_text_color,
                                textColor: e.collection_title_text_color,
                                seeMoreLink: e.see_more_link,
                                sectionBackgroundColor: e.section_background_color
                            }
                        }(function(e) {
                            return e && e.featured_collections
                        }(e.homeCampaign), n),
                        i = function(e, t) {
                            if (!e) return null;
                            if (e.shops.length < 3) return null;
                            var n = e.banner_image || t && t.one_row_image;
                            return {
                                items: e.shops.slice(0, 6).map((function(t) {
                                    var n = t.first_voucher,
                                        r = t.shop_asset_text || (n ? (0, O.t)("get_discount_percentage_off", {
                                            discount: n.discount_percent ? (0, qe.gC)(__LOCALE__, n.discount_percent) + ("TW" === __LOCALE__ ? "折" : "%") : (0, Ye.rH)(n.discount_value)
                                        }) : e.default_shop_text) || e.default_shop_text || "";
                                    return {
                                        logo: (0, ue.Jn)(t.shop_account_portrait, !0),
                                        image: (0, ue.Jn)(t.shop_asset_image),
                                        text: r,
                                        linkTo: Qe.Ri.getUrl({
                                            shopId: t.shopid
                                        }),
                                        item: t
                                    }
                                })),
                                backgroundImage: (0, ue.Jn)(n || ""),
                                headerText: e.header_text,
                                headerTextColor: e.header_text_color,
                                headerSeeMoreTextColor: e.header_text_color,
                                textColor: e.promo_text_color,
                                seeMoreLink: e.see_more_link,
                                sectionBackgroundColor: e.section_background_color
                            }
                        }(function(e) {
                            return e && e.featured_shops
                        }(e.homeCampaign), n),
                        s = !!r,
                        c = !!o,
                        u = !!i;
                    return {
                        topVisual: t,
                        featuredProducts: r,
                        featuredCollections: o,
                        featuredShops: i,
                        bottomVisual: tt(function(e) {
                            return e && e.campaign_bottom_visual
                        }(e.homeCampaign)),
                        isHomeCampaignVisible: s || c || u,
                        isFeaturedProductsVisible: s,
                        isFeaturedCollectionsVisible: c,
                        isFeaturedShopsVisible: u,
                        backgroundImage: a
                    }
                }), {
                    fetchHomeCampaignModules: function() {
                        return function() {
                            var e, t = (e = regeneratorRuntime.mark((function e(t, n) {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, (0, Ge.Z)({
                                                apiCall: function() {
                                                    return (0, ze.fetchInfo)("/api/v4/homepage/campaign_modules")
                                                },
                                                actions: [{
                                                    type: Ze.REQUESTED
                                                }, {
                                                    type: Ze.SUCCESS,
                                                    payload: function(e, t, n) {
                                                        return n
                                                    }
                                                }, {
                                                    type: Ze.FAILED,
                                                    payload: function(e, t, n) {
                                                        return n.error
                                                    }
                                                }]
                                            }, t, n);
                                        case 2:
                                            return e.abrupt("return", e.sent);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })), function() {
                                var t = this,
                                    n = arguments;
                                return new Promise((function(r, a) {
                                    var o = e.apply(t, n);

                                    function i(e) {
                                        Je(o, r, a, i, s, "next", e)
                                    }

                                    function s(e) {
                                        Je(o, r, a, i, s, "throw", e)
                                    }
                                    i(void 0)
                                }))
                            });
                            return function(e, n) {
                                return t.apply(this, arguments)
                            }
                        }()
                    }
                }))(Dt),
                Ut = n(24723),
                Ft = n(13751),
                jt = n(56431);
            var Zt = n(99959),
                Ht = n(59318);

            function Mt(e) {
                var t = e.locale;
                return a().createElement(o.Helmet, null, a().createElement("link", {
                    rel: "alternate",
                    href: Zt.mg[t]
                }), a().createElement("link", {
                    rel: "alternate",
                    href: Zt.xs[t]
                }), a().createElement("meta", {
                    property: "al:ios:url",
                    content: Zt.JZ[t]
                }), a().createElement("meta", {
                    property: "al:ios:app_store_id",
                    content: Zt.cJ[t]
                }), a().createElement("meta", {
                    property: "al:ios:app_name",
                    content: Zt.iC[t]
                }), a().createElement("meta", {
                    property: "al:android:package",
                    content: Zt.Zv[t]
                }), a().createElement("meta", {
                    property: "al:android:url",
                    content: Zt.JZ[t]
                }), a().createElement("meta", {
                    property: "al:android:app_name",
                    content: Zt.iC[t]
                }), a().createElement("meta", {
                    property: "al:web:url",
                    content: Zt.Rx + "://" + Ht.R2[t]
                }))
            }
            var Wt, Vt = n(3858),
                Gt = n(25265),
                zt = n(27222),
                Jt = n(64653),
                Kt = n(63951),
                Xt = n(9982),
                Yt = n(61309),
                qt = n(93519),
                Qt = n(10291);
            ! function(e) {
                e[e.ImageLoadTargetCountReached = 0] = "ImageLoadTargetCountReached", e[e.WaitAfterDomCompleted = 1] = "WaitAfterDomCompleted", e[e.BeforeUnload = 2] = "BeforeUnload", e[e.HistoryChange = 3] = "HistoryChange"
            }(Wt || (Wt = {}));
            var $t = function(e) {
                    var t = e.maxImageCount,
                        n = e.history;
                    return Qt.Z.changeTargetCount(t), new Promise((function(e) {
                        Qt.Z.whenExceedTargetCount().then((function() {
                            return e(Wt.ImageLoadTargetCountReached)
                        })), ("complete" === document.readyState ? Promise.resolve() : new Promise((function(e) {
                            document.addEventListener("readystatechange", (function() {
                                "complete" === document.readyState && e()
                            }))
                        }))).then((function() {
                            return e = 1e4, new Promise((function(t) {
                                return setTimeout((function() {
                                    return t()
                                }), e)
                            }));
                            var e
                        })).then((function() {
                            return e(Wt.WaitAfterDomCompleted)
                        })), window.addEventListener("beforeunload", (function() {
                            return e(Wt.BeforeUnload)
                        })), n.listen((function() {
                            e(Wt.HistoryChange)
                        }))
                    }))
                },
                en = n(27213);

            function tn(e, t) {
                var n;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return nn(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return nn(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0;
                        return function() {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            }
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                return (n = e[Symbol.iterator]()).next.bind(n)
            }

            function nn(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var rn = ["domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "requestStart", "responseStart", "responseEnd", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete"],
                an = function() {
                    var e = {},
                        t = void 0;
                    if (performance && "function" == typeof performance.getEntriesByType) {
                        var n = performance.getEntriesByType("navigation");
                        Array.isArray(n) && n[0] && (e = n[0], t = 0)
                    } else {
                        if (!performance || !performance.timing) return;
                        e = performance.timing, t = performance.timing.navigationStart
                    }
                    if (void 0 !== t) {
                        for (var r, a = {}, o = tn(rn); !(r = o()).done;) {
                            var i = r.value,
                                s = (0, en.N)(e[i] - t);
                            !s || isNaN(s) || s < 0 || (a[i] = s)
                        }
                        return a
                    }
                },
                on = function() {
                    return (e = window.PerformanceObserver) && e.supportedEntryTypes && e.supportedEntryTypes.includes("largest-contentful-paint") ? new Promise((function(e) {
                        new PerformanceObserver((function(t) {
                            var n = t.getEntries();
                            if (0 !== n.length) {
                                for (var r = n.length - 1; r >= 0; r--) {
                                    var a = n[r];
                                    if ((!a.element || "home-page" !== a.element.className) && a.url) {
                                        var o = n[n.length - 1],
                                            i = o.startTime,
                                            s = o.element;
                                        return e({
                                            startTime: i,
                                            className: (null == s ? void 0 : s.className) || ""
                                        })
                                    }
                                }
                                e()
                            }
                        })).observe({
                            type: "largest-contentful-paint",
                            buffered: !0
                        })
                    })) : Promise.resolve();
                    var e
                };

            function sn() {
                return (sn = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function cn(e, t) {
                var n;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return un(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return un(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0;
                        return function() {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            }
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                return (n = e[Symbol.iterator]()).next.bind(n)
            }

            function un(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var ln, pn = function(e) {
                    var t = e.maxImageCount,
                        n = e.imagesLoadedInPreviousPage;
                    if (performance && performance.getEntriesByType && performance.getEntriesByType("resource")) {
                        var r = performance.getEntriesByType("resource");
                        if (0 !== r.length) {
                            var a = r.filter((function(e) {
                                return !n.has(e.name) && (("img" === e.initiatorType || "css" === e.initiatorType) && !e.name.endsWith(".woff") && e.name.startsWith("https://cf.shopee"))
                            })).sort((function(e, t) {
                                return e.startTime - t.startTime
                            })).slice(0, t || Number.MAX_VALUE);
                            if (0 !== a.length) {
                                for (var o, i = 0, s = 0, c = 0, u = cn(a); !(o = u()).done;) {
                                    var l = o.value;
                                    0 !== l.transferSize && (i += l.transferSize, s = l.duration), c += l.decodedBodySize
                                }
                                var p = 0 !== s ? (0, en.N)(i / s) : void 0;
                                return sn({
                                    totalImageBytes: c,
                                    transferBytes: i
                                }, p && {
                                    imageLoadSpeed: p
                                })
                            }
                        }
                    }
                },
                mn = n(77090),
                fn = function(e, t) {
                    return {
                        name: e,
                        value: void 0 === t ? -1 : t,
                        delta: 0,
                        entries: [],
                        id: "v1-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
                    }
                },
                dn = function(e, t) {
                    try {
                        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                            if ("first-input" === e && !("PerformanceEventTiming" in self)) return;
                            var n = new PerformanceObserver((function(e) {
                                return e.getEntries().map(t)
                            }));
                            return n.observe({
                                type: e,
                                buffered: !0
                            }), n
                        }
                    } catch (e) {}
                },
                hn = function(e, t) {
                    var n = function n(r) {
                        "pagehide" !== r.type && "hidden" !== document.visibilityState || (e(r), t && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)))
                    };
                    addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0)
                },
                _n = function(e) {
                    addEventListener("pageshow", (function(t) {
                        t.persisted && e(t)
                    }), !0)
                },
                gn = "function" == typeof WeakSet ? new WeakSet : new Set,
                vn = function(e, t, n) {
                    var r;
                    return function() {
                        t.value >= 0 && (n || gn.has(t) || "hidden" === document.visibilityState) && (t.delta = t.value - (r || 0), (t.delta || void 0 === r) && (r = t.value, e(t)))
                    }
                },
                yn = -1,
                En = function() {
                    return "hidden" === document.visibilityState ? 0 : 1 / 0
                },
                bn = function() {
                    hn((function(e) {
                        var t = e.timeStamp;
                        yn = t
                    }), !0)
                },
                wn = function() {
                    return yn < 0 && (yn = En(), bn(), _n((function() {
                        setTimeout((function() {
                            yn = En(), bn()
                        }), 0)
                    }))), {
                        get timeStamp() {
                            return yn
                        }
                    }
                };
            new Date;
            ! function(e, t) {
                var n, r = wn(),
                    a = fn("LCP"),
                    o = function(e) {
                        var t = e.startTime;
                        t < r.timeStamp && (a.value = t, a.entries.push(e)), n()
                    },
                    i = dn("largest-contentful-paint", o);
                if (i) {
                    n = vn(e, a, t);
                    var s = function() {
                        gn.has(a) || (i.takeRecords().map(o), i.disconnect(), gn.add(a), n())
                    };
                    ["keydown", "click"].forEach((function(e) {
                        addEventListener(e, s, {
                            once: !0,
                            capture: !0
                        })
                    })), hn(s, !0), _n((function(r) {
                        a = fn("LCP"), n = vn(e, a, t), requestAnimationFrame((function() {
                            requestAnimationFrame((function() {
                                a.value = performance.now() - r.timeStamp, gn.add(a), n()
                            }))
                        }))
                    }))
                }
            }((function(e) {
                ln = e.value
            }));
            var Sn = function() {
                return ln
            };

            function Cn() {
                return (Cn = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Pn(e, t, n, r, a, o, i) {
                try {
                    var s = e[o](i),
                        c = s.value
                } catch (e) {
                    return void n(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(r, a)
            }

            function kn(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            Pn(o, r, a, i, s, "next", e)
                        }

                        function s(e) {
                            Pn(o, r, a, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }
            var On = function() {
                    if (!window.performance || !window.performance.getEntriesByType || !window.performance.getEntriesByType("resource")) return new Set;
                    var e = performance.getEntriesByType("resource");
                    return new Set(e.filter((function(e) {
                        return ("img" === e.initiatorType || "css" === e.initiatorType) && !e.name.endsWith(".woff") && e.name.startsWith("https://cf.shopee")
                    })).map((function(e) {
                        return e.name
                    })))
                },
                Nn = function() {
                    var e = kn(regeneratorRuntime.mark((function e(t) {
                        var n, r, a, o, i, s, c;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = t.enableImageServer, r = t.maxImageCount, a = t.history, n || !(Math.random() > .05)) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    return e.next = 5, new Promise((function(e) {
                                        var t = new Image;
                                        t.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA", t.onload = t.onerror = function() {
                                            e(2 === t.height)
                                        }
                                    }));
                                case 5:
                                    if (o = e.sent, !n || o) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 8:
                                    return i = On(), s = Date.now(), c = new qt.PerformanceTrace("ImageServer"), e.abrupt("return", $t({
                                        maxImageCount: r || Number.MAX_VALUE,
                                        history: a
                                    }).then(function() {
                                        var e = kn(regeneratorRuntime.mark((function e(t) {
                                            var a, o, u, l, p, m, f;
                                            return regeneratorRuntime.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return a = {
                                                            attributes: {
                                                                enableImageServer: n.toString(),
                                                                reportScenario: t.toString()
                                                            },
                                                            metrics: {}
                                                        }, (o = an()) && (a.metrics = Cn({}, a.metrics, o)), e.next = 5, on();
                                                    case 5:
                                                        (u = e.sent) && (a.metrics.lcpStartTime = u.startTime, a.attributes.lcpClassname = u.className), (l = pn({
                                                            maxImageCount: r,
                                                            imagesLoadedInPreviousPage: i
                                                        })) && (a.metrics = Cn({}, a.metrics, l)), (p = mn.c.getResult()) && (a.metrics = Cn({}, a.metrics, p), mn.c.clear()), (m = mn.I.getResult()) && (a.metrics = Cn({}, a.metrics, {
                                                            nonWebpErrorCount: m.errorCount,
                                                            nonWebpSuccessRate: m.successRate
                                                        }), mn.I.clear()), (f = Sn()) && (a.metrics.webVitalLCP = f), c.record(s, Date.now() - s, a);
                                                    case 16:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()));
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();

            function Tn() {
                return (Tn = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function In(e, t) {
                return (In = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var An = O.config.BASE_API_URL,
                Ln = O.config.SHOPEE_BASE_URL,
                xn = O.config.LOCALE,
                Rn = O.config.ENV,
                Dn = O.config.ROOT_DOMAIN,
                Bn = function(e) {
                    window.open("//" + Dn + "/docs/" + e)
                },
                Un = 16,
                Fn = function(e) {
                    return a().memo((function(t) {
                        var r = t.env,
                            i = t.locale,
                            s = t.customOpenGraphDescription,
                            c = a().lazy((function() {
                                return n(77425)("./seo_meta_description-" + i + "-" + r + ".json").then((function(t) {
                                    var n = e(t);
                                    return {
                                        default: function() {
                                            return a().createElement(o.Helmet, null, a().createElement("meta", {
                                                name: "description",
                                                content: n
                                            }), a().createElement("meta", {
                                                property: "og:description",
                                                content: s || n
                                            }))
                                        }
                                    }
                                }))
                            }));
                        return a().createElement(a().Suspense, {
                            fallback: null
                        }, a().createElement(c, null))
                    }))
                }((function(e) {
                    return e ? e.txt_shopee_intro_full + " " + e.txt_shopee_key_features : ""
                })),
                jn = An,
                Zn = Zt.sY ? zt.S : Ln + zt.S,
                Hn = 1577638800,
                Mn = (0, Ft.Z)({
                    loader: function() {
                        return Promise.all([n.e(8013), n.e(7545), n.e(1170), n.e(4261)]).then(n.bind(n, 19688))
                    }
                }),
                Wn = (0, Ft.Z)({
                    loader: function() {
                        return n.e(442).then(n.bind(n, 33972))
                    }
                }),
                Vn = (0, Ft.Z)({
                    loader: function() {
                        return n.e(2943).then(n.bind(n, 50811))
                    }
                }),
                Gn = (0, Ft.Z)({
                    loader: function() {
                        return n.e(4193).then(n.bind(n, 88317))
                    }
                }),
                zn = (0, Ft.Z)({
                    loader: function() {
                        return n.e(6927).then(n.bind(n, 60727))
                    }
                }),
                Jn = r.lazy((function() {
                    return n.e(5637).then(n.bind(n, 90675))
                })),
                Kn = function(e) {
                    var t, n;

                    function a(t) {
                        var n;
                        return (n = e.call(this, t) || this).welcomePopupShown = (0, Kt.ej)("welcomePkgShown"), n.popupBannerShown = !1, n.shouldShowPopup = !0, n.state = {
                            showDailyDiscover: !1
                        }, Nn({
                            enableImageServer: t.isImageServerEnabledForUser,
                            maxImageCount: 80,
                            history: t.history
                        }), n
                    }
                    n = e, (t = a).prototype = Object.create(n.prototype), t.prototype.constructor = t, In(t, n);
                    var i = a.prototype;
                    return i.UNSAFE_componentWillMount = function() {
                        this.universalDataFetch(), (0, Xt.ap)()
                    }, i.universalDataFetch = function() {
                        return this.props.loadHomePage()
                    }, i.componentDidUpdate = function() {
                        this.showHomePagePopup(this.props)
                    }, i.showHomePagePopup = function(e) {
                        var t = this;
                        if (this.shouldShowPopup) {
                            var n = e.accountStatus === u.d.LOGGED_IN;
                            if (n) {
                                var a = e.accountInfo.ctime || -1,
                                    o = e.accountInfo.tosAcceptedTime || -1;
                                if ("PH" === xn && a < Hn && o < Hn) return this.context.showPopup(r.createElement(Ut.hE, {
                                    title: (0, O.t)("label_shopee_privacy_policy_title"),
                                    primaryBtnText: (0, O.t)("label_privacy_policy"),
                                    complementBtnText: (0, O.t)("label_accept_button"),
                                    preventDismissPrimaryBtn: !0,
                                    onPrimaryBtnClick: function() {
                                        Bn(3591)
                                    },
                                    onComplementBtnClick: this.props.userAcceptPrivacyPolicy,
                                    message: (0, O.t)("label_shopee_privacy_policy_popup_content__PH")
                                })), void(this.shouldShowPopup = !1)
                            }
                            if (n && !this.popupBannerShown && O.TOGGLES.KYC_CONSENT && !(e.accountInfo.webOption & Un)) return this.showKYCPopup(), void(this.shouldShowPopup = !1);
                            if (O.TOGGLES.WELCOME_PACKAGE_POPUP_FIRST) {
                                var i = e.welcomeDisplayPopup;
                                if (e.accountInfo.isNewUser && i && !this.welcomePopupShown) return this.welcomePopupLogic(i), this.setBannersShown(), void(this.shouldShowPopup = !1)
                            }
                            if (!this.popupBannerShown && e.homePopupBanner && "true" !== (0, Kt.ej)("CY_HIDE_POPUP")) {
                                var s = (0, Xt.lK)(e.homePopupBanner),
                                    c = s && s[0] && (0, h.fq)(s[0]);
                                c && (this.setBannersShown(s), this.context.showPopup(r.createElement(se.D.Provider, {
                                    value: {
                                        enable: e.isImageServerEnabledForUser
                                    }
                                }, r.createElement(h.aR, {
                                    image: c.image,
                                    imageGif: c.image_gif,
                                    link: c.link,
                                    linkType: c.type,
                                    location: 0,
                                    id: c.id,
                                    targetType: "PopupBanner"
                                })), !0, (function() {
                                    return t.trackClose(s[0])
                                })))
                            }
                        }
                    }, i.showKYCPopup = function() {
                        this.context.showPopup(r.createElement(Ut.hE, {
                            primaryBtnText: (0, O.t)("home_page_kyc_popup_primary_button"),
                            complementBtnText: (0, O.t)("home_page_kyc_popup_secondary_button"),
                            preventDismissPrimaryBtn: !0,
                            onPrimaryBtnClick: function() {
                                Bn(4505)
                            },
                            onComplementBtnClick: this.props.setKYCConsent,
                            message: (0, O.t)("msg_kyc_popup")
                        })), this.popupBannerShown = !0
                    }, i.welcomePopupLogic = function(e) {
                        this.context.showPopup(r.createElement(W, {
                            img: e.banner_image,
                            link: e.navigate_params.url
                        }), !0)
                    }, i.setBannersShown = function(e) {
                        void 0 === e && (e = []), this.popupBannerShown = !0, this.welcomePopupShown = "true", (0, Kt.pC)("welcomePkgShown", "true"), (0, Xt.MJ)(e)
                    }, i.trackClose = function(e) {
                        (0, q.Z)({
                            action: "home_click_close_popup_banner",
                            data: {
                                bannerUrl: e.navigate_params.seo_url || e.navigate_params.url,
                                location: 0,
                                bannerId: e.id
                            },
                            track: this.props.contextOnTrack
                        })
                    }, i.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.floatingIcons,
                            a = t.skinnyBanners,
                            i = t.homeBanners,
                            s = t.enableGroupBuy,
                            c = t.homeCircles,
                            u = t.welcomeDisplayBanner,
                            l = t.accountInfo,
                            p = t.isWelcomePackageEnabledForUser,
                            m = t.isSquareBanner,
                            f = t.isCampaignDiscountTagForUser,
                            d = t.isImageServerEnabledForUser,
                            _ = t.isGroupBuyMicroFeAppEnabled,
                            g = c.filter((function(e) {
                                return e && e.display && e.display.pc
                            })).slice(0, 10),
                            v = 0 === n.length && (!a || 0 === a.length) && 0 === i.length && 0 === c.length,
                            y = n && n.length ? n[0] : null,
                            b = document.body && document.body.clientWidth || document.documentElement && document.documentElement.clientWidth || window.innerWidth;
                        b = b > 1200 ? b : 1200;
                        var w = !(g && g.length && g.length > 3),
                            S = ["BR", "MX", "CO", "CL"].includes(__LOCALE__);
                        return r.createElement(E.Z.Consumer, null, (function(t) {
                            var n = t.HomeBanner,
                                c = t.customHeader;
                            return r.createElement(se.D.Provider, {
                                value: {
                                    enable: d
                                }
                            }, r.createElement("div", {
                                className: "home-page",
                                style: n
                            }, r.createElement(o.Helmet, null, r.createElement("meta", {
                                name: "robots",
                                content: "live" === __ENV__ ? "all" : "noindex"
                            }), r.createElement("link", {
                                rel: "canonical",
                                href: jn
                            }), r.createElement("meta", {
                                property: "og:type",
                                content: "website"
                            }), r.createElement("meta", {
                                property: "og:url",
                                content: jn
                            }), r.createElement("meta", {
                                property: "og:image",
                                content: Zn
                            }), r.createElement("meta", {
                                name: "msvalidate.01",
                                content: Zt.wR
                            }), r.createElement("meta", {
                                name: "ahrefs-site-verification",
                                content: Zt.Z5
                            }), r.createElement("meta", {
                                property: "fb:pages",
                                content: Zt.Bi[__LOCALE__]
                            })), r.createElement(Fn, {
                                locale: xn,
                                env: Rn
                            }), r.createElement(Vt.Z, {
                                getPageRegionalRoute: function() {
                                    return ""
                                }
                            }), r.createElement(Mt, {
                                locale: __LOCALE__
                            }), r.createElement(Re, {
                                containsFloatingIcon: !0,
                                containsSkinnyBanner: !1
                            }, !!y && r.createElement(De.Z, {
                                bannerType: Be.Zi.FLOATING_ICONS,
                                banner: y,
                                width: "82px",
                                height: "82px",
                                location: 0,
                                targetType: "FloatingBanner"
                            })), r.createElement("div", {
                                role: "main",
                                className: "container"
                            }, r.createElement("div", {
                                className: "section-banner-hotword--" + (w || n ? "with" : "no") + "-skin",
                                style: w ? {} : {
                                    width: b + "px",
                                    marginLeft: (1200 - b) / 2 + "px"
                                }
                            }, r.createElement("div", {
                                className: "full-home-banners-wrapper"
                            }, r.createElement(h.mE, {
                                banners: i
                            }), r.createElement(h.Jt, {
                                isSquareBanner: m,
                                items: g,
                                isLoading: v
                            }))), p && l.isNewUser && u && r.createElement(Z, {
                                welcomeDisplayBanner: u,
                                clickWPBanner: function() {
                                    return e.context.showPopup(r.createElement(H, null), !0)
                                }
                            }), r.createElement(Bt, {
                                hideTag: !f
                            }), r.createElement("div", {
                                className: "section-below-the-fold"
                            }, S ? r.createElement(U, null) : null, S ? null : r.createElement("div", {
                                className: "section-category-list"
                            }, r.createElement(Oe, null)), S ? null : r.createElement(U, null), r.createElement(K, {
                                isReady: s
                            }, s && (_ ? r.createElement(jt.Z, {
                                slotName: "pcmall-groupbuy",
                                spexNamespace: "app.web_fe.pc.groupbuy",
                                slotProps: {
                                    componentType: "HomeGroupBuySection"
                                }
                            }) : r.createElement(Mn, null))), r.createElement(Ue, {
                                skinnyBanners: a
                            }), S ? r.createElement("div", {
                                className: "section-category-list"
                            }, r.createElement(Oe, null)) : null, S ? null : r.createElement(Wn, null), r.createElement("div", {
                                className: "section-trending-search-list"
                            }, r.createElement(Vn, null)), r.createElement(Gn, null), r.createElement("div", {
                                className: "section-recommend-products-wrapper"
                            }, r.createElement(se.D.Provider, {
                                value: {
                                    enable: !1
                                }
                            }, r.createElement(zn, {
                                customHeader: c
                            }))), "live" !== Rn && "liveish" !== Rn && r.createElement(Jn, null)))))
                        }))
                    }, a
                }(r.Component);
            Kn.contextTypes = {
                showPopup: s().func
            };
            var Xn = (0, ne.qC)(re.EN, (0, c.u)(), (0, p.connect)((function(e) {
                var t, n = e.banner && e.banner.welcome_package_entrance && e.banner.welcome_package_entrance.banners ? e.banner.welcome_package_entrance.banners : [],
                    r = Date.now() / 1e3,
                    a = n.find((function(e) {
                        return e.display && e.display.pc && e.start < r && e.end > r
                    })),
                    o = (e.banner && e.banner.welcome_package_popup && e.banner.welcome_package_popup.banners ? e.banner.welcome_package_popup.banners : []).find((function(e) {
                        return e.display && e.display.pc && e.start < r && e.end > r
                    })),
                    i = (0, te.Au)(e.featureToggles, S.HfP),
                    s = (0, te.Au)(e.featureToggles, S.JEy),
                    c = (t = (0, te.Au)(e.featureToggles, S.iC5), "boolean" == typeof X ? X : X = t),
                    u = (0, te.Au)(e.featureToggles, S.Pon);
                return {
                    homeBanners: (0, $.X)((0, $.tj)(e)),
                    homePopupBanner: (0, $.qV)((0, $.tj)(e)),
                    skinnyBanners: (0, $.dt)((0, $.tj)(e)),
                    floatingIcons: (0, $.Sr)((0, $.tj)(e)),
                    homeCircles: (0, $.X5)((0, $.tj)(e)),
                    isSquareBanner: (0, $.wM)((0, $.tj)(e)),
                    welcomeDisplayBanner: a,
                    welcomeDisplayPopup: o,
                    isWelcomePackageEnabledForUser: i,
                    isCampaignDiscountTagForUser: s,
                    isImageServerEnabledForUser: c,
                    isGroupBuyMicroFeAppEnabled: u
                }
            }), Tn({}, Y, {
                dismissFloatingIcons: ee.c5,
                loadHomePage: function() {
                    return function(e) {
                        return e({
                            type: "LOAD_HOME_PAGE"
                        }), e((0, ee.yV)(["activity", "pc_home_circles", "pc_home_squares", "popup", "floating", "skinny_v2", "welcome_package_popup", "welcome_package_entrance", "homepage_mall_banner"], {}))
                    }
                },
                userAcceptPrivacyPolicy: l.jO
            })), ae.withInjectReducer, (0, O.withI18nCollections)([Jt.Nz], Ae), (0, oe.NS)(888, 42, "HomePage"), (0, Q.ou)(), (0, ie.withHeader)(), (0, Gt.withFooter)({
                pageType: Gt.FOOTER_PAGE_TYPE.HOME
            }))((0, Yt.Ty)(Kn, Yt.l1.homepageGroupbuySection))
        },
        33379: function(e, t, n) {
            "use strict";
            n.d(t, {
                Yg: function() {
                    return h
                },
                Bc: function() {
                    return a
                },
                An: function() {
                    return o
                },
                $C: function() {
                    return i
                },
                GC: function() {
                    return m
                },
                x7: function() {
                    return s
                },
                Zo: function() {
                    return c
                },
                pq: function() {
                    return f
                },
                F9: function() {
                    return u
                },
                w4: function() {
                    return d
                },
                L: function() {
                    return r
                },
                ez: function() {
                    return l
                },
                fW: function() {
                    return p
                }
            });
            var r = 58,
                a = 65,
                o = 63,
                i = 70,
                s = 57,
                c = 124,
                u = 52,
                l = 71,
                p = 64,
                m = 57,
                f = 208,
                d = 247,
                h = {
                    DEFAULT: 0,
                    FREE_GIFT: 1,
                    SUB_PURCHASE: 2
                }
        },
        27222: function(e, t, n) {
            "use strict";
            n.d(t, {
                S: function() {
                    return o
                }
            });
            var r = n.p + "d010b985fc1475e559b6db819889703c.png",
                a = n.p + "b442e8ea12a22339552628bb3bc5b774.jpg",
                o = "TW" === __LOCALE__ ? a : r
        },
        3858: function(e, t, n) {
            "use strict";
            var r = n(27378),
                a = n.n(r),
                o = n(70405),
                i = n(59318),
                s = {
                    SG: "en-SG",
                    MY: "en-MY",
                    TH: "th-TH",
                    TW: "zh-TW",
                    ID: "id-ID",
                    VN: "vi-VN",
                    PH: "en-PH",
                    BR: "pt-BR",
                    MX: "es-MX",
                    CO: "es-CO",
                    CL: "es-CL"
                };
            t.Z = function(e) {
                var t = e.getPageRegionalRoute,
                    n = e.getToggle,
                    r = void 0 === n ? function() {
                        return !0
                    } : n,
                    c = e.removeHreflangDefault,
                    u = void 0 !== c && c ? [] : [a().createElement("link", {
                        key: "hreflang-default",
                        rel: "alternate",
                        href: "https://shopee.com",
                        hrefLang: "x-default"
                    })];
                for (var l in s)
                    if (r(l)) {
                        var p = "https://" + i.R2[l] + t(l);
                        u.push(a().createElement("link", {
                            key: "hreflang-" + l,
                            rel: "alternate",
                            href: p,
                            hrefLang: s[l]
                        }))
                    }
                return a().createElement(o.Helmet, null, u)
            }
        },
        42363: function(e, t, n) {
            "use strict";
            n.d(t, {
                gC: function() {
                    return p
                },
                ld: function() {
                    return m
                },
                us: function() {
                    return f
                },
                U: function() {
                    return d
                },
                y5: function() {
                    return h
                },
                x2: function() {
                    return _
                },
                Ho: function() {
                    return g
                },
                AS: function() {
                    return v
                },
                G: function() {
                    return y
                },
                ce: function() {
                    return E
                },
                yl: function() {
                    return b
                }
            });
            var r = n(6976),
                a = n(81392),
                o = n(53082),
                i = n(67139);

            function s() {
                return (s = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var c = (0, a.b5)((0, r.Kd)(), r.of ? (0, r.of)() : void 0),
                u = c.localizeCompactNumber,
                l = c.compactCurrency;

            function p(e, t) {
                return t = parseFloat(String(t || 0)), isFinite(t) ? "zh-Hant" === (0, r.of)() ? Math.round(100 - t) / 10 : Math.round(t) : t
            }
            var m = function(e, t) {
                switch (t) {
                    case "TH":
                    case "TW":
                        return (0, o.x)(t, (0, i.o)(e, t));
                    case "VN":
                        return l((0, i.o)(e, t), 3);
                    default:
                        return l((0, i.o)(e, t), 2)
                }
            };

            function f(e, t, n) {
                void 0 === n && (n = !1);
                var r = n ? {
                    symbol: ""
                } : void 0;
                switch (t) {
                    case "TW":
                        return (0, o.x)(t, (0, i.o)(e, t), r);
                    case "VN":
                        return l((0, i.o)(e, t), s({
                            maxPrecision: 3
                        }, r));
                    default:
                        return l((0, i.o)(e, t), r)
                }
            }

            function d(e, t) {
                return m(e, t)
            }

            function h(e, t) {
                return m(e, t)
            }

            function _(e, t) {
                return m(e, t)
            }

            function g(e, t) {
                switch (t) {
                    case "ID":
                        return u(e);
                    case "VN":
                        return l(e, {
                            symbol: "",
                            maxPrecision: 3
                        });
                    default:
                        return l(e, {
                            symbol: "",
                            precision: 0
                        }, [])
                }
            }

            function v(e, t) {
                return p(0, e)
            }
            var y = function(e) {
                    return l(e, {
                        symbol: "",
                        maxPrecision: 3
                    })
                },
                E = function(e, t) {
                    return l((0, i.o)(e, t), {
                        maxPrecision: 3
                    })
                },
                b = function(e, t) {
                    return l((0, i.o)(e, t), {
                        maxPrecision: 3
                    })
                }
        },
        79093: function(e, t, n) {
            "use strict";
            n.d(t, {
                FE: function() {
                    return Z
                },
                NS: function() {
                    return M
                },
                ZP: function() {
                    return H
                }
            });
            var r = n(27378),
                a = n(43058),
                o = n(79308),
                i = n(41153),
                s = n(62399),
                c = n(108),
                u = n(30085),
                l = n.p + "fb73417afb1d1ff1a01ab1cec0d03507.png",
                p = n(6965),
                m = n(85989),
                f = "pAJkCU",
                d = "_1gN_jU",
                h = n(37472),
                _ = n(47029),
                g = "_1VLvDx",
                v = function(e) {
                    var t = e.error,
                        n = r.useState(_.a2.en),
                        a = n[0],
                        o = n[1];
                    return "Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node." === t.message ? r.createElement("div", {
                        className: g
                    }, r.createElement("div", null, "Looks like this error may have been caused by Google translate. Usage of Google translate is not recommended as it may cause rendering problems"), r.createElement("div", null, r.createElement("label", {
                        htmlFor: "languages"
                    }, r.createElement("b", null, "Choose locale:"), " "), r.createElement("select", {
                        id: "languages",
                        onChange: function(e) {
                            o(e.target.value)
                        }
                    }, Object.keys(_.kn).map((function(e, t) {
                        return r.createElement("option", {
                            className: "notranslate",
                            key: t,
                            value: _.kn[e].default
                        }, e)
                    }))), r.createElement(h.Z, {
                        onClick: function() {
                            document.cookie = "language=" + a + "; path=/", window.location.reload()
                        },
                        size: "small",
                        text: "Fix Error"
                    }))) : r.createElement(r.Fragment, null)
                },
                y = m.v.ENV;
            var E = function(e) {
                    var t = e.error;
                    return r.createElement(r.Fragment, null, r.createElement("img", {
                        className: f,
                        src: l
                    }), r.createElement("div", {
                        className: d
                    }, (0, p.t)("title_crash")), "live" !== y && t && r.createElement(r.Fragment, null, r.createElement("h1", null, "Please screenshot this and report to", " ", r.createElement("a", {
                        href: "https://mattermost.garenanow.com/sea/channels/shopee-dev-pm",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "Mattermost")), r.createElement(v, {
                        error: t
                    }), r.createElement("pre", {
                        style: {
                            color: "red",
                            padding: 14,
                            backgroundColor: "#ffeeee"
                        }
                    }, t.stack)))
                },
                b = n(22333),
                w = n(60042),
                S = n.n(w),
                C = n(92027),
                P = n(88885),
                k = n(82500),
                O = p.config.IS_OFFICIAL_MALL_DOMAIN,
                N = new RegExp("^\\/" + "mall".toLowerCase() + "\\/.+-cat\\.(-?\\d+)\\/?$");

            function T(e) {
                var t = e.toLowerCase();
                return O && "/" === t || t === k.ROUTE_OFFICIAL_SHOP.toLowerCase() || t === k.ROUTE_OFFICIAL_SHOP.toLowerCase() + "/" || function(e) {
                    return e.toLowerCase().startsWith(k.ROUTE_OFFICIAL_SHOP_JUST_FOR_YOU.toLowerCase())
                }(e) || N.test(t)
            }
            var I = n(11812),
                A = n(78068),
                L = n.n(A),
                x = n(48189),
                R = n(83459),
                D = "_193wCc",
                B = "_3cVWns",
                U = "_3GgbTj";

            function F() {
                return (F = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function j(e, t) {
                return (j = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function Z(e, t, n, l, m, f) {
                void 0 === l && (l = "unknown"), void 0 === m && (m = !1);
                var d = function(a) {
                    var o, i;

                    function s(e) {
                        var t;
                        return (t = a.call(this, e) || this).lastPageParams = null, t.trackingData = {
                            context: t.getPageParams(e)
                        }, t
                    }
                    i = a, (o = s).prototype = Object.create(i.prototype), o.prototype.constructor = o, j(o, i);
                    var c = s.prototype;
                    return c.componentDidMount = function() {
                        this.trackPageStateEvent(this.props, !0, !0), this.props.injectAsyncReducer({
                            theme: x.I6
                        }), L()(888 === t, "PageWrapper no longer includes Header for you. Please import Header from '@shopee/pc-header' in your page and pass _888_ as the parameter to PageWrapper as ACK that you've migrated."), L()(42 === n, "PageWrapper no longer includes Footer for you. Please import { Footer } from '@shopee/footer-pc' in your page and pass _42_ as the parameter to PageWrapper as ACK that you've migrated.")
                    }, c.UNSAFE_componentWillReceiveProps = function(e) {
                        var t = this.props.location,
                            n = e.location,
                            r = (0, C.AW)(t.search),
                            a = (0, C.AW)(n.search),
                            o = !1;
                        f && "function" == typeof f.shouldSendPageViewEvent && (o = f.shouldSendPageViewEvent(r, a));
                        var i = n.pathname !== t.pathname || o;
                        this.trackPageStateEvent(e, i)
                    }, c.getPageParams = function(e) {
                        var t = e.location,
                            n = e.match.params,
                            r = e.trackingProps,
                            a = (0, I.KN)(t.pathname) || e.isOfficialShopTheme;
                        return (0, P.ZN)(F({}, n, (0, C.AW)(t.search), {
                            hash: t.hash
                        }, r, {
                            isOfficialShopTheme: a
                        }))
                    }, c.trackPageStateEvent = function(e, t, n) {
                        void 0 === t && (t = !1), void 0 === n && (n = !1);
                        var r = e.history,
                            a = e.location,
                            o = "POP" === r.action,
                            i = this.getPageParams(e);
                        if (JSON.stringify(i) !== JSON.stringify(this.lastPageParams) && (this.lastPageParams = i, n || !m || m && t)) {
                            var s = {
                                type: "pageState",
                                timestamp: Date.now(),
                                info: {
                                    id: a.key,
                                    pageType: l,
                                    initial: t,
                                    isBack: o,
                                    pageParams: i,
                                    href: "",
                                    title: ""
                                }
                            };
                            try {
                                s.info.href = window.location.href || "", s.info.title = document.title || ""
                            } catch (e) {}
                            this.props.contextOnTrack(s)
                        }
                    }, c.render = function() {
                        var t = this.props,
                            n = t.location,
                            a = t.className,
                            o = n.pathname;
                        return r.createElement(b.ZP, {
                            targetData: this.trackingData,
                            targetType: l
                        }, r.createElement("div", {
                            className: S()(D, T(o) ? U : "/" === o ? B : null, a)
                        }, r.createElement(e, this.props)))
                    }, s
                }(r.Component);
                return (0, a.qC)((0, s.R8)(E, {
                    errorLevel: "fatal"
                }), (0, c.ou)(), i.EN, u.withInjectReducer, (0, o.connect)((function(e) {
                    return {
                        isOfficialShopTheme: (0, x.H_)(e)
                    }
                })), (0, p.withI18nCollections)([R.TU]))(d)
            }
            var H = Z;

            function M(e, t, n, r, a) {
                return void 0 === n && (n = "unknown"), void 0 === r && (r = !1),
                    function(o) {
                        return Z(o, e, t, n, r, a)
                    }
            }
        },
        9982: function(e, t, n) {
            "use strict";
            n.d(t, {
                lK: function() {
                    return o
                },
                ap: function() {
                    return i
                },
                MJ: function() {
                    return s
                }
            });
            var r = n(5751),
                a = "POPUP_HISTORY",
                o = function(e) {
                    if (0 === e.length) return [];
                    var t = r.X.getItem(a);
                    return t || (t = {}), e.filter((function(e) {
                        var n = e.id;
                        return null == t[n]
                    }))
                },
                i = function() {
                    var e = r.X.getItem(a);
                    e && "object" == typeof e && (Object.keys(e).forEach((function(t) {
                        1e3 * e[t] < (new Date).getTime() && delete e[t]
                    })), r.X.setItem(a, e))
                },
                s = function(e) {
                    var t = e[0];
                    if (t) {
                        var n = r.X.getItem(a);
                        n || (n = {}), n[t.id] = t.end, r.X.setItem(a, n)
                    }
                }
        },
        93049: function(e, t, n) {
            "use strict";
            n.d(t, {
                _: function() {
                    return f
                }
            });
            var r = n(27378),
                a = n.n(r),
                o = n(94184),
                i = n.n(o),
                s = n(5960),
                c = n(6965),
                u = n(3140),
                l = n(9315),
                p = n(70590),
                m = n(3792);
            t.Z = function(e) {
                var t = e.endTime,
                    n = void 0 === t ? 0 : t,
                    r = e.startTime,
                    o = void 0 === r ? 0 : r,
                    f = e.layout,
                    d = e.onCountdownEnd,
                    h = e.endsInLogoType,
                    _ = void 0 === h ? "" : h,
                    g = e.withHorizontalLineDecorators,
                    v = void 0 !== g && g,
                    y = o && 1e3 * o < Date.now();
                return a().createElement(u.Z.Consumer, null, (function(e) {
                    var t = e.FlashSaleCountdownTimerColon,
                        r = e.FlashSaleCountdownTimerFlipBoard,
                        u = e.customHeader,
                        h = (0, m.Z)(u, [p.u.FLASH_SALE]) || null,
                        g = h && (h.image || h.color);
                    return a().createElement("div", {
                        className: "flash-sale-header-with-countdown-timer flash-sale-header-with-countdown-timer--" + f
                    }, a().createElement("div", {
                        className: i()("flash-sale-header-with-countdown-timer__wrapper flash-sale-header-with-countdown-timer__wrapper--" + f, v && "flash-sale-header-with-countdown-timer__wrapper--with-horizontal-line-decorators")
                    }, g && h ? a().createElement(l.Z, {
                        headerText: (0, c.t)("label_flash_deals"),
                        customHeader: h
                    }) : a().createElement("div", {
                        className: "flash-sale-header-with-countdown-timer__header flash-sale-header-with-countdown-timer__header--" + __LOCALE__.toLowerCase()
                    }), _ && a().createElement("div", {
                        className: "flash-sale-ends-in flash-sale-ends-in--" + _
                    }, y ? (0, c.t)("label_ends_in") : (0, c.t)("flash_sale_header_starts_at")), n > 0 && a().createElement(s.ZP, {
                        type: s.PR.COUNT_DOWN,
                        targetTimeInSeconds: y ? n : o,
                        flipRate: s.fE.SECOND,
                        onCountdownEnded: d,
                        classNames: "flash-sale-header-with-countdown-timer__countdown-timer",
                        flipBoardStyle: r,
                        colonStyle: t
                    })))
                }))
            };
            var f = {
                HOME_PAGE: "home-page",
                LANDING_PAGE: "landing-page",
                PRODUCT_PAGE: "product-page"
            }
        },
        98970: function(e, t, n) {
            "use strict";
            n.d(t, {
                HS: function() {
                    return B
                },
                ZP: function() {
                    return F
                }
            });
            var r = n(27378),
                a = n.n(r),
                o = n(94184),
                i = n.n(o),
                s = n(74301),
                c = n(97953),
                u = n(33379),
                l = n(13384),
                p = n(51720),
                m = n(99899),
                f = n(98675),
                d = n(73777),
                h = n(6976),
                _ = (0, n(90759).S)((0, h.of)()),
                g = d.LU.bind(null, d.x5[_]),
                v = function(e, t) {
                    var n = new Date(1e3 * t),
                        r = new Date(1e3 * e),
                        a = (0, d.IS)("minute", n, r);
                    return g(n, r, {
                        totalUnits: 1,
                        endUnit: "minute",
                        roundLast: a > 60 ? "floor" : a < 1 ? "ceil" : "round",
                        unitLowerBounds: {
                            year: Number.MAX_VALUE,
                            month: Number.MAX_VALUE,
                            week: Number.MAX_VALUE,
                            day: Number.MAX_VALUE
                        }
                    })
                },
                y = n(58295),
                E = n(90858);

            function b() {
                return (b = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function w(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }

            function S(e, t, n, r) {
                return function(a) {
                    e(), a && a.stopPropagation(), a && a.preventDefault(), r ? window.location.href = t : n.push(t)
                }
            }

            function C(e) {
                var t = e.trackingClick,
                    n = e.to,
                    a = e.history,
                    o = w(e, ["trackingClick", "to", "history"]);
                return r.createElement("div", {
                    onClick: S(t, n, a, "string" == typeof n && /^http/.test(n))
                }, o.children)
            }

            function P(e) {
                var t = e.targetType,
                    n = w(e, ["targetType"]),
                    a = (0, E.Z)(t, n);
                return r.createElement(C, b({
                    trackingClick: a
                }, n))
            }
            var k = n(95802),
                O = n(99096),
                N = n(43351),
                T = n(98466);

            function I() {
                return (I = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function A(e, t) {
                return (A = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var L = c.oc.t,
                x = c.oc.withI18nCollections,
                R = p.Y.bind(null, (function(e) {
                    return a().createElement("span", {
                        className: "item-price-dollar-sign",
                        key: 0
                    }, e + " ")
                }), (function(e) {
                    return a().createElement("span", {
                        className: "item-price-number",
                        key: 1
                    }, e)
                }), __LOCALE__),
                D = (0, m.jK)(__LOCALE__),
                B = {
                    HOME_PAGE: "home-page",
                    LANDING_PAGE: "landing-page",
                    MART_LANDING_PAGE: "mart-landing-page",
                    MART_HOME_PAGE: "mart-home-page"
                },
                U = function(e) {
                    var t, n;

                    function r(t) {
                        var n;
                        return (n = e.call(this, t) || this).now = +new Date, n
                    }
                    n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, A(t, n);
                    var o = r.prototype;
                    return o.componentDidMount = function() {
                        var e = this.props,
                            t = e.item,
                            n = e.isOngoing,
                            r = t.flash_sale_stock,
                            a = t.stock,
                            o = r - a;
                        n && window.Sentry && t && o && o < 0 && window.Sentry.captureMessage("Flash Sale sold out count is negative\n        promotionid: " + t.promotionid + "\n        itemid: " + t.itemid + "\n        flash_sale_stock:" + a + "\n        stock:" + r + "\n        sold(flash_sale_stock-stock): " + o + ",", "error")
                    }, o.shouldComponentUpdate = function(e) {
                        return this.props.item.itemid !== e.item.itemid || this.props.item.promotionid !== e.item.promotionid
                    }, o.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.item,
                            r = t.layout,
                            o = t.overwriteCardLink,
                            c = t.displayFlashSaleProgressBar,
                            u = t.setShowDiscountBadge,
                            p = t.isPlaceholder,
                            m = t.isOngoing,
                            d = t.toTrack,
                            h = t.isDP,
                            _ = t.position,
                            g = t.history,
                            E = t.recommendation_info;
                        if (p && "home-page" === r) return a().createElement("div", {
                            className: i()("flash-sale-item-card", "flash-sale-item-card--home-page")
                        }, a().createElement("div", {
                            className: i()("flash-sale-item-card__image", "flash-sale-item-card__image--home-page")
                        }, a().createElement(l.p, {
                            className: "flash-sale-item-card-placeholder__image"
                        })), a().createElement("div", {
                            className: i()("flash-sale-item-card__lower-wrapper", "flash-sale-item-card__lower-wrapper--home-page")
                        }, a().createElement("div", {
                            className: "skeleton-full"
                        }, a().createElement("div", {
                            className: "center skeleton-full",
                            style: {
                                height: 26
                            }
                        }, a().createElement("div", {
                            className: "skeleton skeleton-medium skeleton-line"
                        })), a().createElement("div", {
                            className: "center skeleton-full",
                            style: {
                                height: 16
                            }
                        }, a().createElement("div", {
                            className: "skeleton skeleton-full skeleton-line"
                        })))));
                        var b = m,
                            w = b && (0 === n.stock || 0 === n.flash_sale_stock || n.is_soldout),
                            S = n.raw_discount,
                            C = (0, s.Jn)(n.promo_images && n.promo_images.length > 0 ? n.promo_images[0] : n.image, !0),
                            T = function(e, t) {
                                if (e) {
                                    var n = "TW" === __LOCALE__ ? (100 - e.extra_discount) / 10 : e.extra_discount,
                                        r = "";
                                    if (e.end_time && e.start_time && (r = v(e.start_time, e.end_time)), e && "function" == typeof t) return r ? t("fs_extra_n_off_applied_for_first_m_in_x", {
                                        n: n,
                                        m: e.extra_discount_stock,
                                        x: r
                                    }) : t("fs_extra_n_off_applied_for_first_m", {
                                        n: n,
                                        m: e.extra_discount_stock
                                    })
                                }
                                return ""
                            }(n.extra_discount_info, L),
                            A = r === B.LANDING_PAGE || r === B.MART_LANDING_PAGE,
                            x = !!T && A,
                            U = R(n.price),
                            F = R(n.price_before_discount),
                            j = n.hidden_price_display,
                            Z = !!n && !!n.shopid && !!n.itemid,
                            H = o || (Z ? w ? (0, O.recommendProduct)(n.shopid, n.itemid, n.name, "flash_sale") : (0, O.product)(n.shopid, n.itemid, n.name) : ""),
                            M = {
                                isDP: h,
                                toTrack: d,
                                item: n,
                                position: _,
                                isOngoing: m,
                                recommendation_info: E
                            };
                        return Z ? a().createElement("div", {
                            ref: function(t) {
                                e.rootElement = t, e.props.trackingRef && e.props.trackingRef(t)
                            },
                            onClick: function() {
                                e.props.trackingClick && e.props.trackingClick()
                            },
                            className: i()("flash-sale-item-card", "flash-sale-item-card--" + r.replace("_", "-").toLowerCase(), "flash-sale-item-card--" + __LOCALE__, {
                                "flash-sale-item-card--sold-out": w
                            })
                        }, a().createElement(k.Z, {
                            className: "flash-sale-item-card-link",
                            to: H
                        }, a().createElement("div", {
                            className: i()("flash-sale-item-card__image", "flash-sale-item-card__image--" + r)
                        }, w && a().createElement(y.VL, {
                            useLandingPageLayout: A
                        }), n.promo_overlay_image && a().createElement(l.p, {
                            src: (0, s.Jn)(n.promo_overlay_image, !0),
                            className: i()("flash-sale-item-card__image-overlay", "flash-sale-item-card__image-overlay--" + r),
                            position: this.props.position,
                            imageServerWidthOperator: 320
                        }), a().createElement(l.p, {
                            className: "flash-sale-item-card__animated-image",
                            src: C,
                            imageServerWidthOperator: 320
                        })), A && a().createElement("div", {
                            className: i()("flash-sale-item-card__item-name", !T && "flash-sale-item-card__item-name-extra-discount")
                        }, a().createElement("div", {
                            className: T ? "flash-sale-item-card__item-name-box-extra-discount" : "flash-sale-item-card__item-name-box",
                            title: n.promo_name || n.name
                        }, n.promo_name || n.name)), x && a().createElement("div", {
                            className: "flash-sale-item-card__extra-discount-label"
                        }, T), (A || !m && r === B.MART_HOME_PAGE) && n.price_before_discount !== n.price && a().createElement("div", {
                            className: i()("flash-sale-item-card__original-price", "flash-sale-item-card__original-price--" + r)
                        }, F), a().createElement("div", {
                            className: i()("flash-sale-item-card__lower-wrapper", "flash-sale-item-card__lower-wrapper--" + __LOCALE__, "flash-sale-item-card__lower-wrapper--" + r, !b && "flash-sale-item-card__lower-wrapper--" + r + "__coming-soon")
                        }, a().createElement("div", {
                            className: "flash-sale-item-card__lower-left"
                        }, a().createElement("div", {
                            className: i()("flash-sale-item-card__current-price", "flash-sale-item-card__current-price--" + r, !b && "flash-sale-item-card__current-price--" + r + "__coming-soon")
                        }, j ? a().createElement(a().Fragment, null, a().createElement("span", {
                            className: "item-price-dollar-sign"
                        }, D + " "), a().createElement("span", {
                            className: "item-price-number"
                        }, j)) : U), c && a().createElement(f.Z, {
                            sold: n.flash_sale_stock - n.stock,
                            total: n.flash_sale_stock,
                            soldOutTime: n.end_time,
                            startTime: n.start_time,
                            layout: r
                        })), a().createElement("div", {
                            className: "flash-sale-item-card__lower-right"
                        }, !w && A && b && a().createElement(P, I({}, M, {
                            targetType: "BuyNowButton",
                            to: H,
                            history: g
                        }), a().createElement("div", {
                            className: i()("flash-sale-item-card__buy-now-button", "flash-sale-item-card__buy-now-button--" + r)
                        }, L("label_buy_now_flash_sale"))), (A || r === B.MART_HOME_PAGE) && !b && a().createElement(P, I({}, M, {
                            targetType: "ViewDetailsButton",
                            to: H,
                            history: g
                        }), a().createElement("div", {
                            className: i()("flash-sale-item-card__view-details-button", "flash-sale-item-card__view-details-button--" + r)
                        }, L("label_btn_view_details")))), u && !!S && m && a().createElement("div", {
                            className: i()("shopee-item-card__badge-wrapper", "shopee-fs-item-card__badge-wrapper", "shopee-fs-item-card__badge-wrapper--" + r)
                        }, a().createElement(y.OO, {
                            rawDiscount: S,
                            language: N.UA,
                            key: "badge-promotion",
                            offText: L("pr_badge_label_off")
                        }))))) : null
                    }, r
                }(r.Component),
                F = x([u.x7, u.L])((0, T.Z)(U, "FlashSaleItemCard"))
        },
        98675: function(e, t, n) {
            "use strict";
            var r = n(27378),
                a = n(94184),
                o = n.n(a),
                i = n(23287),
                s = n(6965),
                c = n(33379);
            t.Z = (0, s.withI18nCollections)([c.L, c.GC])((function(e) {
                var t = e.sold,
                    n = e.total,
                    a = e.soldOutTime,
                    s = e.startTime,
                    c = e.layout,
                    u = 100 * (n - t) / n,
                    l = Math.ceil(Math.floor(2 * u) / 2),
                    p = 0 === n || t === n,
                    m = p ? Math.floor((a - s) / 3600) : null,
                    f = p && 0 === m ? a - s < 60 ? 1 : Math.floor((a - s) / 60) % 60 : null;
                return p ? r.createElement("div", {
                    className: o()("flash-sale-sold-out", "flash-sale-sold-out--" + c)
                }, f ? 1 === f ? (0, i.t)("label_amount_sold_out_in_1_min", {
                    amount: n
                }) : (0, i.t)("label_amount_sold_out_in_n_mins", {
                    minutes: f,
                    amount: n
                }) : m ? 1 === m ? (0, i.t)("label_amount_sold_out_in_1_hour", {
                    hours: 1,
                    amount: n
                }) : (0, i.t)("label_amount_sold_out_in_n_hours", {
                    hours: m,
                    amount: n
                }) : null) : r.createElement("div", {
                    className: "flash-sale-progress-bar__wrapper flash-sale-progress-bar__wrapper--" + c
                }, r.createElement("div", {
                    className: o()("flash-sale-progress-bar", "flash-sale-progress-bar--" + c)
                }, r.createElement("div", {
                    className: o()("flash-sale-progress-bar__text", {
                        "flash-sale-progress-bar__text--selling-fast": l <= 15
                    })
                }, l > 15 ? (0, i.t)("label_n_sold_flash_sale", {
                    count: t > 0 ? t : 0
                }) : (0, i.t)("label_selling_fast")), r.createElement("div", {
                    className: o()("flash-sale-progress-bar__complement-wrapper", "flash-sale-progress-bar__complement-wrapper--" + c)
                }, r.createElement("div", {
                    className: o()("flash-sale-progress-bar__complement-sizer", "flash-sale-progress-bar__complement-sizer--" + c),
                    style: {
                        width: l + "%"
                    }
                }, r.createElement("div", {
                    className: "flash-sale-progress-bar__complement-color"
                }))), u <= 50 && r.createElement("div", {
                    className: "flash-sale-progress-bar__fire"
                })))
            }))
        },
        98845: function(e, t, n) {
            "use strict";
            n.d(t, {
                zN: function() {
                    return a
                },
                LX: function() {
                    return o
                },
                bp: function() {
                    return c
                },
                Tx: function() {
                    return u
                },
                Vb: function() {
                    return r
                },
                T: function() {
                    return s
                },
                Xm: function() {
                    return i
                },
                r3: function() {
                    return l
                }
            });
            var r = {
                    default: "flash_sale",
                    SG: "flash_deal",
                    PH: "flash_deal",
                    MY: "shocking_sale",
                    ID: "flash_sale",
                    TW: "flash_sale",
                    VN: "flash_sale",
                    TH: "flash_sale",
                    BR: "flash_sale",
                    MX: "flash_sale",
                    CO: "flash_sale",
                    CL: "flash_sale"
                },
                a = 16,
                o = 12,
                i = 3,
                s = 2,
                c = {
                    ID: "https://shopee.co.id/events3/code/1409859301/",
                    VN: "https://shopee.vn/events3/code/124671459/",
                    PH: "https://shopee.ph/events3/code/182315693/",
                    TH: "https://shopee.co.th/web",
                    MY: "https://shopee.com.my/web",
                    SG: "https://shopee.sg/dp",
                    TW: "https://shopee.tw/m/DPonWeb"
                },
                u = {
                    SHOPEE_ITEM: 0,
                    DIGITAL_PURCHASE: 1
                },
                l = 30
        },
        60110: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PROGRESS: function() {
                    return g.ad
                },
                disableConfirmNavigate: function() {
                    return w
                },
                enableConfirmNavigate: function() {
                    return b
                },
                fetchAccountInfo: function() {
                    return c.M9
                },
                fetchBatchItems: function() {
                    return s
                },
                fetchFullCategoryList: function() {
                    return l
                },
                followUser: function() {
                    return m
                },
                loadAccountInfo: function() {
                    return c.LC
                },
                loadBatchItems: function() {
                    return i
                },
                loadCategoryList: function() {
                    return u
                },
                loadHomePage: function() {
                    return y
                },
                loadStaticAddressList: function() {
                    return _.V
                },
                receiveBroadcast: function() {
                    return v
                },
                recordSearchUserHistory: function() {
                    return p
                },
                remindToSelectProductVariation: function() {
                    return E
                },
                setKYCConsent: function() {
                    return c.u6
                },
                setProgress: function() {
                    return g.eE
                },
                setProgressAlmostDone: function() {
                    return g.eW
                },
                setProgressDone: function() {
                    return g.He
                },
                setProgressStart: function() {
                    return g.jd
                },
                syncFollowUser: function() {
                    return d
                },
                syncUnfollowUser: function() {
                    return h
                },
                unfollowUser: function() {
                    return f
                },
                updateUserPhoneNumber: function() {
                    return c.xz
                }
            });
            var r = n(39942),
                a = n(83410);

            function o() {
                return (o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function i(e, t) {
                return void 0 === t && (t = {}), (0, a.a)(r.nv, o({
                    itemShopIds: e
                }, t))
            }
            var s = {
                    request: function(e) {
                        return (0, a.a)(r.v4.REQUESTED, {
                            itemShopIds: e
                        })
                    },
                    success: function(e, t) {
                        return (0, a.a)(r.v4.SUCCESS, {
                            items: t,
                            itemShopIds: e
                        })
                    },
                    fail: function(e, t) {
                        return (0, a.a)(r.v4.FAILED, {
                            itemShopIds: e,
                            error: t
                        })
                    }
                },
                c = n(36994);

            function u() {
                return (0, a.a)(r.lQ)
            }
            var l = {
                request: function() {
                    return (0, a.a)(r.dZ.REQUESTED)
                },
                success: function(e) {
                    return (0, a.a)(r.dZ.SUCCESS, {
                        response: e
                    })
                },
                fail: function(e) {
                    return (0, a.a)(r.dZ.FAILED, {
                        error: e
                    })
                }
            };

            function p(e) {
                return (0, a.a)(r.O9, {
                    data: e
                })
            }

            function m(e, t) {
                return (0, a.a)(r.OU, {
                    searchKey: e,
                    shopId: t
                })
            }

            function f(e, t) {
                return (0, a.a)(r.xR, {
                    searchKey: e,
                    shopId: t
                })
            }
            var d = {
                    request: function(e, t) {
                        return (0, a.a)(r.OA.REQUESTED, {
                            searchKey: e,
                            shopId: t
                        })
                    },
                    success: function(e, t) {
                        return (0, a.a)(r.OA.SUCCESS, {
                            searchKey: e,
                            shopId: t
                        })
                    },
                    fail: function(e, t, n) {
                        return (0, a.a)(r.OA.FAILED, {
                            searchKey: e,
                            shopId: t,
                            error: n
                        })
                    }
                },
                h = {
                    request: function(e, t) {
                        return (0, a.a)(r.Mz.REQUESTED, {
                            searchKey: e,
                            shopId: t
                        })
                    },
                    success: function(e, t) {
                        return (0, a.a)(r.Mz.SUCCESS, {
                            searchKey: e,
                            shopId: t
                        })
                    },
                    fail: function(e, t, n) {
                        return (0, a.a)(r.Mz.FAILED, {
                            searchKey: e,
                            shopId: t,
                            error: n
                        })
                    }
                },
                _ = n(53685),
                g = n(82575),
                v = (n(5751), function(e, t) {
                    return (0, a.a)(e, t)
                });

            function y() {
                return (0, a.a)(r.ei)
            }

            function E() {
                return (0, a.a)(r.yo)
            }

            function b(e) {
                return (0, a.a)(r.FC, e)
            }

            function w() {
                return (0, a.a)(r.VN)
            }
        },
        49101: function(e, t, n) {
            "use strict";
            n.d(t, {
                S: function() {
                    return r.S
                }
            });
            var r = n(32666)
        },
        58295: function(e, t, n) {
            "use strict";
            n.d(t, {
                OO: function() {
                    return r.OO
                },
                Cf: function() {
                    return r.Cf
                },
                VL: function() {
                    return r.VL
                },
                tI: function() {
                    return r.tI
                },
                l: function() {
                    return r.l
                },
                TE: function() {
                    return r.TE
                }
            });
            var r = n(51816)
        },
        26624: function(e, t, n) {
            "use strict";
            n.d(t, {
                IA: function() {
                    return a.IA
                },
                T1: function() {
                    return r.T1
                },
                HU: function() {
                    return r.HU
                },
                fg: function() {
                    return c
                },
                vr: function() {
                    return s
                },
                eQ: function() {
                    return u
                },
                ks: function() {
                    return l
                },
                Kj: function() {
                    return i
                }
            });
            var r = n(24019),
                a = n(99287),
                o = n(52203),
                i = function(e, t) {
                    var n = e.flashSale && e.flashSale.flashSaleItems,
                        r = (0, o.a)(t);
                    return n && t && n[r] ? n[r] : null
                },
                s = function(e) {
                    return e && e.flashSale ? e.flashSale.flashSaleSessions : []
                },
                c = function(e) {
                    var t = s(e),
                        n = Date.now() / 1e3;
                    return t.find((function(e) {
                        return e && e.start_time < n && e.end_time > n
                    }))
                },
                u = function(e, t) {
                    return {
                        flashSaleMeta: function(e, t) {
                            var n = s(e);
                            return n ? n.find((function(e) {
                                return e && e.promotionid === t
                            })) : null
                        }(e, t.promotionId),
                        flashSaleItems: i(e, t)
                    }
                },
                l = function(e, t) {
                    return e.flashSale.fetchItemProgress[(0, o.a)(t)]
                };
            n(30151)
        },
        77425: function(e, t, n) {
            var r = {
                "./seo_meta_description-BR-live.json": [41401, 1401],
                "./seo_meta_description-CL-live.json": [85056, 5056],
                "./seo_meta_description-CO-live.json": [92767, 2767],
                "./seo_meta_description-ID-live.json": [62166, 2166],
                "./seo_meta_description-MX-live.json": [3689, 3689],
                "./seo_meta_description-MY-live.json": [17833, 7833],
                "./seo_meta_description-PH-live.json": [87558, 7558],
                "./seo_meta_description-SG-live.json": [11408, 1408],
                "./seo_meta_description-TH-live.json": [82780, 2780],
                "./seo_meta_description-TW-live.json": [41986, 1986],
                "./seo_meta_description-VN-live.json": [38123, 8123]
            };

            function a(e) {
                if (!n.o(r, e)) return Promise.resolve().then((function() {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }));
                var t = r[e],
                    a = t[0];
                return n.e(t[1]).then((function() {
                    return n.t(a, 3)
                }))
            }
            a.keys = function() {
                return Object.keys(r)
            }, a.id = 77425, e.exports = a
        }
    }
]);
//# sourceMappingURL=https://shopee.sg/assets/Homepage.1ccd18b25f980a6e1898.js.map