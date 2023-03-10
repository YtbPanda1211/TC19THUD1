(("undefined" != typeof self ? self : this).webpackChunkshopee_pc = ("undefined" != typeof self ? self : this).webpackChunkshopee_pc || []).push([
    [7464], {
        30057: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return W
                }
            });
            var a = r(27378),
                n = r(79308),
                o = r(43058),
                i = r(23615),
                s = r.n(i),
                c = r(73727),
                u = r(83367),
                p = r(98466),
                f = r(108),
                d = r(29735),
                l = r(1297),
                h = "_2o2XQg";

            function v(e, t) {
                return (v = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var y = l.o.searchWithQuery,
                _ = function(e) {
                    var t, r;

                    function n(t) {
                        var r;
                        return (r = e.call(this, t) || this).onClick = r.onClick.bind(function(e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(r)), r
                    }
                    r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, v(t, r);
                    var o = n.prototype;
                    return o.onClick = function() {
                        var e = this.props,
                            t = e.keyword,
                            r = e.trackingClick,
                            a = e.searchParams,
                            n = e.targetSearchParams,
                            o = e.recordSearchHistory,
                            i = e.index;
                        (0, u.Z)({
                            action: "submitKeyboardSearch",
                            data: {
                                keyword: t,
                                inputType: "popular_search",
                                targetSearchParams: n,
                                searchParams: a,
                                isMallSearch: !!this.context.isOfficialShopPath,
                                absoluteLocation: i,
                                relativeLocation: i
                            },
                            track: this.props.contextOnTrack
                        }), o("product", t), (0, d.b)(t), r && r()
                    }, o.render = function() {
                        var e = this.props,
                            t = e.trackingRef,
                            r = e.keyword,
                            n = e.targetSearchParams;
                        return a.createElement(c.Link, {
                            onClick: this.onClick,
                            to: y(n),
                            className: h,
                            innerRef: t
                        }, r)
                    }, n
                }(a.Component);
            _.contextTypes = {
                isOfficialShopPath: s().bool
            };
            var m, S, k = (0, o.qC)((0, p.n)("HotwordItem"), (0, f.ou)())(_),
                E = r(14081),
                C = r(67986),
                g = r(18363),
                b = (0, r(69068).n)("FETCH_POP_SEARCH"),
                R = "popsearch_sec";

            function O() {
                return (O = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var w = {
                    progress: g.Z.INIT,
                    state_update_time: 0
                },
                P = {
                    update_time: 0,
                    version: "",
                    sections: (m = {}, m.popsearch_sec = {
                        total: 0,
                        data: []
                    }, m)
                },
                I = (0, E.Z)(((S = {})[b.REQUESTED] = function(e) {
                    return O({}, e, {
                        progress: g.Z.REQ,
                        error: 0,
                        state_update_time: 0
                    })
                }, S[b.SUCCESS] = function(e, t) {
                    var r, a = t.payload,
                        n = a.offset,
                        o = a.data,
                        i = a.shouldReset,
                        s = e && e.data || P;
                    return O({}, e, {
                        data: O({}, s, {
                            update_time: o.update_time,
                            version: o.version,
                            sections: O({}, s.sections, (r = {}, r.popsearch_sec = {
                                total: o.sections.popsearch_sec.total,
                                data: (0, C.Z)(i ? [] : s.sections.popsearch_sec.data, o.sections.popsearch_sec.data, n)
                            }, r))
                        }),
                        progress: g.Z.OK,
                        state_update_time: Date.now()
                    })
                }, S[b.FAILED] = function(e, t) {
                    var r = t.payload.error;
                    return O({}, e, {
                        progress: g.Z.ERR,
                        error: r
                    })
                }, S), w),
                T = r(15263),
                Z = r(92027),
                x = r(72609);

            function D(e) {
                var t, r = {
                        update_time: e.data.update_time,
                        version: e.data.version,
                        sections: (t = {}, t.popsearch_sec = {
                            total: 0,
                            data: []
                        }, t)
                    },
                    a = e.data.sections.find((function(e) {
                        return e && e.key === R
                    }));
                if (!a || !a.index || !a.data) return r;
                var n = a.index,
                    o = a.data,
                    i = a.total;
                return r.sections.popsearch_sec.total = i || 0, n.forEach((function(e) {
                    var t = o.keyword.find((function(t) {
                        return t.key === e.key
                    }));
                    t && r.sections.popsearch_sec.data.push(t)
                })), r
            }

            function j(e) {
                var t = e.limit,
                    r = void 0 === t ? 8 : t,
                    a = e.offset,
                    n = void 0 === a ? 0 : a,
                    o = e.getStore,
                    i = e.onFinish,
                    s = e.shouldSkipCall,
                    c = e.shouldReset,
                    u = e.version,
                    p = (0, Z.Wc)({
                        bundle: "popsearch",
                        limit: r,
                        offset: n,
                        version: n > 0 && u || void 0
                    });
                return (0, T.Z)({
                    apiCall: function() {
                        return function(e) {
                            return (0, x.fetchInfo)("/api/v4/recommend/recommend" + e)
                        }(p)
                    },
                    actions: [function() {
                        return {
                            type: b.REQUESTED
                        }
                    }, function(e, t) {
                        return {
                            type: b.SUCCESS,
                            payload: {
                                offset: n,
                                data: D(t),
                                shouldReset: c
                            }
                        }
                    }, function(e, t) {
                        return {
                            type: b.FAILED,
                            payload: {
                                error: t.error
                            }
                        }
                    }],
                    shouldSkipCall: o && !s ? H(o) : s,
                    onFinish: i
                })
            }

            function H(e) {
                return function(t) {
                    var r = e(t);
                    return !!(r && r && r.state_update_time) && r.state_update_time > Date.now() - 6e4
                }
            }
            var N = [];

            function Q() {
                return (Q = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var A = r(30085),
                F = r(98953),
                L = "_1aYDEh",
                U = "_2MXg3O",
                K = [g.Z.INIT, g.Z.REQ];

            function M(e) {
                return e.popSearch
            }
            var W = function(e) {
                var t = e.searchParams,
                    r = a.useContext(A.InjectReducerContext).injectAsyncReducer;
                a.useEffect((function() {
                    var e;
                    r(((e = {}).popSearch = I, e))
                }), [r]);
                var o = (0, n.useDispatch)();
                a.useEffect((function() {
                    o(j({
                        offset: 0,
                        limit: 8,
                        getStore: M
                    }))
                }), [o]);
                var i, s = a.useCallback((function(e, t) {
                        o(function(e, t, r) {
                            return void 0 === r && (r = {}), Q({
                                type: "RECORD_SEARCH_HISTORY",
                                searchType: e,
                                data: t
                            }, r, {
                                isOfficialShop: !1
                            })
                        }(e, t))
                    }), [o]),
                    c = (0, n.useSelector)(M);
                if (K.includes((i = c) ? i.progress : g.Z.INIT)) return null;
                var u = function(e) {
                    return e && e.data ? e.data.sections.popsearch_sec.data : N
                }(c);
                return !u || u.length < 2 ? null : a.createElement("div", {
                    className: L
                }, a.createElement("div", {
                    className: U
                }, u.map((function(e, r) {
                    var n = e.keyword,
                        o = e.info,
                        i = e.label;
                    if (!n) return null;
                    var c = (0, F.C)(n, t);
                    return a.createElement(k, {
                        key: n,
                        keyword: n,
                        recordSearchHistory: s,
                        index: r,
                        searchParams: t,
                        targetSearchParams: c,
                        info: o,
                        intentionid: i
                    })
                }))))
            }
        }
    }
]);
//# sourceMappingURL=https://shopee.sg/assets/HotWordList.491dbb5b79b036fb2f2e.js.map