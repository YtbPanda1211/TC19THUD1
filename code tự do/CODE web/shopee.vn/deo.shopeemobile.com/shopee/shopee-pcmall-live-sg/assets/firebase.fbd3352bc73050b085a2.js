(("undefined" != typeof self ? self : this).webpackChunkshopee_pc = ("undefined" != typeof self ? self : this).webpackChunkshopee_pc || []).push([
    [1326], {
        24022: function(e) {
            e.exports = function() {
                "use strict";
                var e = function(t, n) {
                        return (e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                            })(t, n)
                    },
                    t = function() {
                        return (t = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            return e
                        }).apply(this, arguments)
                    };

                function n(e, t, n, r) {
                    return new(n = n || Promise)((function(i, o) {
                        function a(e) {
                            try {
                                c(r.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            try {
                                c(r.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function c(e) {
                            var t;
                            e.done ? i(e.value) : ((t = e.value) instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(a, s)
                        }
                        c((r = r.apply(e, t || [])).next())
                    }))
                }

                function r(e, t) {
                    var n, r, i, o = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1]
                            },
                            trys: [],
                            ops: []
                        },
                        a = {
                            next: s(0),
                            throw: s(1),
                            return: s(2)
                        };
                    return "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function s(a) {
                        return function(s) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                    switch (r = 0, (a = i ? [2 & a[0], i.value] : a)[0]) {
                                        case 0:
                                        case 1:
                                            i = a;
                                            break;
                                        case 4:
                                            return o.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            o.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = o.ops.pop(), o.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = o.trys).length && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                                o.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && o.label < i[1]) {
                                                o.label = i[1], i = a;
                                                break
                                            }
                                            if (i && o.label < i[2]) {
                                                o.label = i[2], o.ops.push(a);
                                                break
                                            }
                                            i[2] && o.ops.pop(), o.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, o)
                                } catch (e) {
                                    a = [6, e], r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, s])
                        }
                    }
                }

                function i(e) {
                    var t = "function" == typeof Symbol && Symbol.iterator,
                        n = t && e[t],
                        r = 0;
                    if (n) return n.call(e);
                    if (e && "number" == typeof e.length) return {
                        next: function() {
                            return {
                                value: (e = e && r >= e.length ? void 0 : e) && e[r++],
                                done: !e
                            }
                        }
                    };
                    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                }

                function o(e, t) {
                    var n = "function" == typeof Symbol && e[Symbol.iterator];
                    if (!n) return e;
                    var r, i, o = n.call(e),
                        a = [];
                    try {
                        for (;
                            (void 0 === t || 0 < t--) && !(r = o.next()).done;) a.push(r.value)
                    } catch (e) {
                        i = {
                            error: e
                        }
                    } finally {
                        try {
                            r && !r.done && (n = o.return) && n.call(o)
                        } finally {
                            if (i) throw i.error
                        }
                    }
                    return a
                }

                function a(e, t) {
                    for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
                    return e
                }

                function s(e, t) {
                    if (!(t instanceof Object)) return t;
                    switch (t.constructor) {
                        case Date:
                            return new Date(t.getTime());
                        case Object:
                            void 0 === e && (e = {});
                            break;
                        case Array:
                            e = [];
                            break;
                        default:
                            return t
                    }
                    for (var n in t) t.hasOwnProperty(n) && "__proto__" !== n && (e[n] = s(e[n], t[n]));
                    return e
                }
                var c = (u.prototype.wrapCallback = function(e) {
                    var t = this;
                    return function(n, r) {
                        n ? t.reject(n) : t.resolve(r), "function" == typeof e && (t.promise.catch((function() {})), 1 === e.length ? e(n) : e(n, r))
                    }
                }, u);

                function u() {
                    var e = this;
                    this.reject = function() {}, this.resolve = function() {}, this.promise = new Promise((function(t, n) {
                        e.resolve = t, e.reject = n
                    }))
                }
                var l, f = "FirebaseError",
                    p = (function(t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                        function r() {
                            this.constructor = t
                        }
                        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }(h, l = Error), h);

                function h(e, t, n) {
                    return (t = l.call(this, t) || this).code = e, t.customData = n, t.name = f, Object.setPrototypeOf(t, h.prototype), Error.captureStackTrace && Error.captureStackTrace(t, d.prototype.create), t
                }
                var d = (g.prototype.create = function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    var r, i = t[0] || {},
                        o = this.service + "/" + e;
                    return e = (e = this.errors[e]) ? (r = i, e.replace(m, (function(e, t) {
                        var n = r[t];
                        return null != n ? String(n) : "<" + t + "?>"
                    }))) : "Error", e = this.serviceName + ": " + e + " (" + o + ").", new p(o, e, i)
                }, g);

                function g(e, t, n) {
                    this.service = e, this.serviceName = t, this.errors = n
                }
                var m = /\{\$([^}]+)}/g;

                function v(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
                var y = (b.prototype.setInstantiationMode = function(e) {
                    return this.instantiationMode = e, this
                }, b.prototype.setMultipleInstances = function(e) {
                    return this.multipleInstances = e, this
                }, b.prototype.setServiceProps = function(e) {
                    return this.serviceProps = e, this
                }, b.prototype.setInstanceCreatedCallback = function(e) {
                    return this.onInstanceCreated = e, this
                }, b);

                function b(e, t, n) {
                    this.name = e, this.instanceFactory = t, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
                }
                var w = "[DEFAULT]",
                    I = (_.prototype.get = function(e) {
                        var t = this.normalizeInstanceIdentifier(e = void 0 === e ? w : e);
                        if (!this.instancesDeferred.has(t) && (e = new c, this.instancesDeferred.set(t, e), this.isInitialized(t) || this.shouldAutoInitialize())) try {
                            var n = this.getOrInitializeService({
                                instanceIdentifier: t
                            });
                            n && e.resolve(n)
                        } catch (e) {}
                        return this.instancesDeferred.get(t).promise
                    }, _.prototype.getImmediate = function(e) {
                        e = (n = t({
                            identifier: w,
                            optional: !1
                        }, e)).identifier;
                        var n = n.optional;
                        if (e = this.normalizeInstanceIdentifier(e), !this.isInitialized(e) && !this.shouldAutoInitialize()) {
                            if (n) return null;
                            throw Error("Service " + this.name + " is not available")
                        }
                        try {
                            return this.getOrInitializeService({
                                instanceIdentifier: e
                            })
                        } catch (e) {
                            if (n) return null;
                            throw e
                        }
                    }, _.prototype.getComponent = function() {
                        return this.component
                    }, _.prototype.setComponent = function(e) {
                        var t, n;
                        if (e.name !== this.name) throw Error("Mismatching Component " + e.name + " for Provider " + this.name + ".");
                        if (this.component) throw Error("Component for " + this.name + " has already been provided");
                        if (this.component = e, this.shouldAutoInitialize()) {
                            if ("EAGER" === e.instantiationMode) try {
                                this.getOrInitializeService({
                                    instanceIdentifier: w
                                })
                            } catch (e) {}
                            try {
                                for (var r = i(this.instancesDeferred.entries()), a = r.next(); !a.done; a = r.next()) {
                                    var s = o(a.value, 2),
                                        c = s[0],
                                        u = s[1],
                                        l = this.normalizeInstanceIdentifier(c);
                                    try {
                                        var f = this.getOrInitializeService({
                                            instanceIdentifier: l
                                        });
                                        u.resolve(f)
                                    } catch (e) {}
                                }
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    a && !a.done && (n = r.return) && n.call(r)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                        }
                    }, _.prototype.clearInstance = function(e) {
                        this.instancesDeferred.delete(e = void 0 === e ? w : e), this.instances.delete(e)
                    }, _.prototype.delete = function() {
                        return n(this, void 0, void 0, (function() {
                            var e;
                            return r(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return e = Array.from(this.instances.values()), [4, Promise.all(a(a([], o(e.filter((function(e) {
                                            return "INTERNAL" in e
                                        })).map((function(e) {
                                            return e.INTERNAL.delete()
                                        })))), o(e.filter((function(e) {
                                            return "_delete" in e
                                        })).map((function(e) {
                                            return e._delete()
                                        })))))];
                                    case 1:
                                        return t.sent(), [2]
                                }
                            }))
                        }))
                    }, _.prototype.isComponentSet = function() {
                        return null != this.component
                    }, _.prototype.isInitialized = function(e) {
                        return this.instances.has(e = void 0 === e ? w : e)
                    }, _.prototype.initialize = function(e) {
                        var t, n, r = (e = void 0 === e ? {} : e).instanceIdentifier,
                            a = (e = void 0 === (e = e.options) ? {} : e, this.normalizeInstanceIdentifier(void 0 === r ? w : r));
                        if (this.isInitialized(a)) throw Error(this.name + "(" + a + ") has already been initialized");
                        if (!this.isComponentSet()) throw Error("Component " + this.name + " has not been registered yet");
                        var s = this.getOrInitializeService({
                            instanceIdentifier: a,
                            options: e
                        });
                        try {
                            for (var c = i(this.instancesDeferred.entries()), u = c.next(); !u.done; u = c.next()) {
                                var l = o(u.value, 2),
                                    f = l[0],
                                    p = l[1];
                                a === this.normalizeInstanceIdentifier(f) && p.resolve(s)
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                u && !u.done && (n = c.return) && n.call(c)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return this.invokeOnInitCallbacks(s, a), s
                    }, _.prototype.onInit = function(e) {
                        var t = this;
                        return this.onInitCallbacks.add(e),
                            function() {
                                t.onInitCallbacks.delete(e)
                            }
                    }, _.prototype.invokeOnInitCallbacks = function(e, t) {
                        var n, r;
                        try {
                            for (var o = i(this.onInitCallbacks), a = o.next(); !a.done; a = o.next()) {
                                var s = a.value;
                                try {
                                    s(e, t)
                                } catch (e) {}
                            }
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                a && !a.done && (r = o.return) && r.call(o)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                    }, _.prototype.getOrInitializeService = function(e) {
                        var t = e.instanceIdentifier,
                            n = e.options,
                            r = void 0 === n ? {} : n;
                        if (!(e = this.instances.get(t)) && this.component && (e = this.component.instanceFactory(this.container, {
                                instanceIdentifier: (n = t) === w ? void 0 : n,
                                options: r
                            }), this.instances.set(t, e), this.component.onInstanceCreated)) try {
                            this.component.onInstanceCreated(this.container, t, e)
                        } catch (e) {}
                        return e || null
                    }, _.prototype.normalizeInstanceIdentifier = function(e) {
                        return !this.component || this.component.multipleInstances ? e : w
                    }, _.prototype.shouldAutoInitialize = function() {
                        return !!this.component && "EXPLICIT" !== this.component.instantiationMode
                    }, _);

                function _(e, t) {
                    this.name = e, this.container = t, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.onInitCallbacks = new Set
                }
                var E = (S.prototype.addComponent = function(e) {
                    var t = this.getProvider(e.name);
                    if (t.isComponentSet()) throw new Error("Component " + e.name + " has already been registered with " + this.name);
                    t.setComponent(e)
                }, S.prototype.addOrOverwriteComponent = function(e) {
                    this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e)
                }, S.prototype.getProvider = function(e) {
                    if (this.providers.has(e)) return this.providers.get(e);
                    var t = new I(e, this);
                    return this.providers.set(e, t), t
                }, S.prototype.getProviders = function() {
                    return Array.from(this.providers.values())
                }, S);

                function S(e) {
                    this.name = e, this.providers = new Map
                }
                var T, A = [];

                function N(e, t) {
                    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                    if (!(t < e.logLevel || ((new Date).toISOString(), O[t]))) throw new Error("Attempted to log a message with an invalid logType (value: " + t + ")")
                }(he = T = T || {})[he.DEBUG = 0] = "DEBUG", he[he.VERBOSE = 1] = "VERBOSE", he[he.INFO = 2] = "INFO", he[he.WARN = 3] = "WARN", he[he.ERROR = 4] = "ERROR", he[he.SILENT = 5] = "SILENT";
                var k = {
                        debug: T.DEBUG,
                        verbose: T.VERBOSE,
                        info: T.INFO,
                        warn: T.WARN,
                        error: T.ERROR,
                        silent: T.SILENT
                    },
                    C = T.INFO,
                    O = ((j = {})[T.DEBUG] = "log", j[T.VERBOSE] = "log", j[T.INFO] = "info", j[T.WARN] = "warn", j[T.ERROR] = "error", j),
                    P = (Object.defineProperty(D.prototype, "logLevel", {
                        get: function() {
                            return this._logLevel
                        },
                        set: function(e) {
                            if (!(e in T)) throw new TypeError('Invalid value "' + e + '" assigned to `logLevel`');
                            this._logLevel = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), D.prototype.setLogLevel = function(e) {
                        this._logLevel = "string" == typeof e ? k[e] : e
                    }, Object.defineProperty(D.prototype, "logHandler", {
                        get: function() {
                            return this._logHandler
                        },
                        set: function(e) {
                            if ("function" != typeof e) throw new TypeError("Value assigned to `logHandler` must be a function");
                            this._logHandler = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(D.prototype, "userLogHandler", {
                        get: function() {
                            return this._userLogHandler
                        },
                        set: function(e) {
                            this._userLogHandler = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), D.prototype.debug = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this._userLogHandler && this._userLogHandler.apply(this, a([this, T.DEBUG], e)), this._logHandler.apply(this, a([this, T.DEBUG], e))
                    }, D.prototype.log = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this._userLogHandler && this._userLogHandler.apply(this, a([this, T.VERBOSE], e)), this._logHandler.apply(this, a([this, T.VERBOSE], e))
                    }, D.prototype.info = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this._userLogHandler && this._userLogHandler.apply(this, a([this, T.INFO], e)), this._logHandler.apply(this, a([this, T.INFO], e))
                    }, D.prototype.warn = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this._userLogHandler && this._userLogHandler.apply(this, a([this, T.WARN], e)), this._logHandler.apply(this, a([this, T.WARN], e))
                    }, D.prototype.error = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this._userLogHandler && this._userLogHandler.apply(this, a([this, T.ERROR], e)), this._logHandler.apply(this, a([this, T.ERROR], e))
                    }, D);

                function D(e) {
                    this.name = e, this._logLevel = C, this._logHandler = N, this._userLogHandler = null, A.push(this)
                }

                function R(e) {
                    A.forEach((function(t) {
                        t.setLogLevel(e)
                    }))
                }

                function L(e, t) {
                    for (var n = 0, r = A; n < r.length; n++) ! function(n) {
                        var r = null;
                        t && t.level && (r = k[t.level]), n.userLogHandler = null === e ? null : function(t, n) {
                            for (var i = [], o = 2; o < arguments.length; o++) i[o - 2] = arguments[o];
                            var a = i.map((function(e) {
                                if (null == e) return null;
                                if ("string" == typeof e) return e;
                                if ("number" == typeof e || "boolean" == typeof e) return e.toString();
                                if (e instanceof Error) return e.message;
                                try {
                                    return JSON.stringify(e)
                                } catch (e) {
                                    return null
                                }
                            })).filter((function(e) {
                                return e
                            })).join(" ");
                            n >= (null != r ? r : t.logLevel) && e({
                                level: T[n].toLowerCase(),
                                message: a,
                                args: i,
                                type: t.name
                            })
                        }
                    }(r[n])
                }
                var j = ((he = {})["no-app"] = "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()", he["bad-app-name"] = "Illegal App name: '{$appName}", he["duplicate-app"] = "Firebase App named '{$appName}' already exists", he["app-deleted"] = "Firebase App named '{$appName}' already deleted", he["invalid-app-argument"] = "firebase.{$appName}() takes either no argument or a Firebase App instance.", he["invalid-log-argument"] = "First argument to `onLog` must be null or a function.", he),
                    M = new d("app", "Firebase", j),
                    B = "@firebase/app",
                    x = "[DEFAULT]",
                    U = ((he = {})[B] = "fire-core", he["@firebase/analytics"] = "fire-analytics", he["@firebase/app-check"] = "fire-app-check", he["@firebase/auth"] = "fire-auth", he["@firebase/database"] = "fire-rtdb", he["@firebase/functions"] = "fire-fn", he["@firebase/installations"] = "fire-iid", he["@firebase/messaging"] = "fire-fcm", he["@firebase/performance"] = "fire-perf", he["@firebase/remote-config"] = "fire-rc", he["@firebase/storage"] = "fire-gcs", he["@firebase/firestore"] = "fire-fst", he["fire-js"] = "fire-js", he["firebase-wrapper"] = "fire-js-all", he),
                    F = (Object.defineProperty(q.prototype, "automaticDataCollectionEnabled", {
                        get: function() {
                            return this.checkDestroyed_(), this.automaticDataCollectionEnabled_
                        },
                        set: function(e) {
                            this.checkDestroyed_(), this.automaticDataCollectionEnabled_ = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(q.prototype, "name", {
                        get: function() {
                            return this.checkDestroyed_(), this.name_
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(q.prototype, "options", {
                        get: function() {
                            return this.checkDestroyed_(), this.options_
                        },
                        enumerable: !1,
                        configurable: !0
                    }), q.prototype.delete = function() {
                        var e = this;
                        return new Promise((function(t) {
                            e.checkDestroyed_(), t()
                        })).then((function() {
                            return e.firebase_.INTERNAL.removeApp(e.name_), Promise.all(e.container.getProviders().map((function(e) {
                                return e.delete()
                            })))
                        })).then((function() {
                            e.isDeleted_ = !0
                        }))
                    }, q.prototype._getService = function(e, t) {
                        return void 0 === t && (t = x), this.checkDestroyed_(), this.container.getProvider(e).getImmediate({
                            identifier: t
                        })
                    }, q.prototype.checkDestroyed_ = function() {
                        if (this.isDeleted_) throw M.create("app-deleted", {
                            appName: this.name_
                        })
                    }, q.prototype.toJSON = function() {
                        return {
                            name: this.name,
                            automaticDataCollectionEnabled: this.automaticDataCollectionEnabled,
                            options: this.options
                        }
                    }, q);

                function q(e, t, n) {
                    var r = this;
                    this.firebase_ = n, this.isDeleted_ = !1, this.INTERNAL = {}, this.name_ = t.name, this.automaticDataCollectionEnabled_ = t.automaticDataCollectionEnabled || !1, this.options_ = s(void 0, e), this.container = new E(t.name), this.container.addComponent(new y("app", (function() {
                        return r
                    }), "PUBLIC")), this.firebase_.INTERNAL.components.forEach((function(e) {
                        return r.container.addComponent(e)
                    }))
                }
                var V = "8.6.3",
                    z = new P("@firebase/app");

                function H(e) {
                    var t = {},
                        n = new Map,
                        r = {
                            __esModule: !0,
                            initializeApp: function(n, i) {
                                void 0 === i && (i = {}), "object" == typeof i && null !== i || (i = {
                                    name: i
                                });
                                var o = i;
                                if (void 0 === o.name && (o.name = x), "string" != typeof(i = o.name) || !i) throw M.create("bad-app-name", {
                                    appName: String(i)
                                });
                                if (v(t, i)) throw M.create("duplicate-app", {
                                    appName: i
                                });
                                return o = new e(n, o, r), t[i] = o
                            },
                            app: i,
                            registerVersion: function(e, t, n) {
                                var r = null !== (i = U[e]) && void 0 !== i ? i : e;
                                n && (r += "-" + n);
                                var i = r.match(/\s|\//);
                                e = t.match(/\s|\//), i || e ? (n = ['Unable to register library "' + r + '" with version "' + t + '":'], i && n.push('library name "' + r + '" contains illegal characters (whitespace or "/")'), i && e && n.push("and"), e && n.push('version name "' + t + '" contains illegal characters (whitespace or "/")'), z.warn(n.join(" "))) : o(new y(r + "-version", (function() {
                                    return {
                                        library: r,
                                        version: t
                                    }
                                }), "VERSION"))
                            },
                            setLogLevel: R,
                            onLog: function(e, t) {
                                if (null !== e && "function" != typeof e) throw M.create("invalid-log-argument");
                                L(e, t)
                            },
                            apps: null,
                            SDK_VERSION: V,
                            INTERNAL: {
                                registerComponent: o,
                                removeApp: function(e) {
                                    delete t[e]
                                },
                                components: n,
                                useAsService: function(e, t) {
                                    return "serverAuth" !== t ? t : null
                                }
                            }
                        };

                    function i(e) {
                        if (!v(t, e = e || x)) throw M.create("no-app", {
                            appName: e
                        });
                        return t[e]
                    }

                    function o(o) {
                        var a, c = o.name;
                        if (n.has(c)) return z.debug("There were multiple attempts to register component " + c + "."), "PUBLIC" === o.type ? r[c] : null;
                        n.set(c, o), "PUBLIC" === o.type && (a = function(e) {
                            if ("function" != typeof(e = void 0 === e ? i() : e)[c]) throw M.create("invalid-app-argument", {
                                appName: c
                            });
                            return e[c]()
                        }, void 0 !== o.serviceProps && s(a, o.serviceProps), r[c] = a, e.prototype[c] = function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            return this._getService.bind(this, c).apply(this, o.multipleInstances ? e : [])
                        });
                        for (var u = 0, l = Object.keys(t); u < l.length; u++) {
                            var f = l[u];
                            t[f]._addComponent(o)
                        }
                        return "PUBLIC" === o.type ? r[c] : null
                    }
                    return r.default = r, Object.defineProperty(r, "apps", {
                        get: function() {
                            return Object.keys(t).map((function(e) {
                                return t[e]
                            }))
                        }
                    }), i.App = e, r
                }
                var K = ($.prototype.getPlatformInfoString = function() {
                    return this.container.getProviders().map((function(e) {
                        return function(e) {
                            return "VERSION" === (null == (e = e.getComponent()) ? void 0 : e.type)
                        }(e) ? (e = e.getImmediate()).library + "/" + e.version : null
                    })).filter((function(e) {
                        return e
                    })).join(" ")
                }, $);

                function $(e) {
                    this.container = e
                }
                var W, G, J = function() {
                    var e = H(F);
                    e.SDK_VERSION = e.SDK_VERSION + "_LITE";
                    var t = e.INTERNAL.registerComponent;
                    return e.INTERNAL.registerComponent = function(e) {
                        if ("PUBLIC" !== e.type || "performance" === e.name || "installations" === e.name) return t(e);
                        throw Error(e.name + " cannot register with the standalone perf instance")
                    }, e
                }();

                function X(e) {
                    return new Promise((function(t, n) {
                        e.onsuccess = function() {
                            t(e.result)
                        }, e.onerror = function() {
                            n(e.error)
                        }
                    }))
                }

                function Y(e, t, n) {
                    var r, i = new Promise((function(i, o) {
                        X(r = e[t].apply(e, n)).then(i, o)
                    }));
                    return i.request = r, i
                }

                function Z(e, t, n) {
                    n.forEach((function(n) {
                        Object.defineProperty(e.prototype, n, {
                            get: function() {
                                return this[t][n]
                            },
                            set: function(e) {
                                this[t][n] = e
                            }
                        })
                    }))
                }

                function Q(e, t, n, r) {
                    r.forEach((function(r) {
                        r in n.prototype && (e.prototype[r] = function() {
                            return Y(this[t], r, arguments)
                        })
                    }))
                }

                function ee(e, t, n, r) {
                    r.forEach((function(r) {
                        r in n.prototype && (e.prototype[r] = function() {
                            return this[t][r].apply(this[t], arguments)
                        })
                    }))
                }

                function te(e, t, n, r) {
                    r.forEach((function(r) {
                        r in n.prototype && (e.prototype[r] = function() {
                            return e = this[t], (n = Y(e, r, arguments)).then((function(e) {
                                if (e) return new re(e, n.request)
                            }));
                            var e, n
                        })
                    }))
                }

                function ne(e) {
                    this._index = e
                }

                function re(e, t) {
                    this._cursor = e, this._request = t
                }

                function ie(e) {
                    this._store = e
                }

                function oe(e) {
                    this._tx = e, this.complete = new Promise((function(t, n) {
                        e.oncomplete = function() {
                            t()
                        }, e.onerror = function() {
                            n(e.error)
                        }, e.onabort = function() {
                            n(e.error)
                        }
                    }))
                }

                function ae(e, t, n) {
                    this._db = e, this.oldVersion = t, this.transaction = new oe(n)
                }

                function se(e) {
                    this._db = e
                }
                G = "lite", (W = J).INTERNAL.registerComponent(new y("platform-logger", (function(e) {
                    return new K(e)
                }), "PRIVATE")), W.registerVersion(B, "0.6.22", G), W.registerVersion("fire-js", ""), Z(ne, "_index", ["name", "keyPath", "multiEntry", "unique"]), Q(ne, "_index", IDBIndex, ["get", "getKey", "getAll", "getAllKeys", "count"]), te(ne, "_index", IDBIndex, ["openCursor", "openKeyCursor"]), Z(re, "_cursor", ["direction", "key", "primaryKey", "value"]), Q(re, "_cursor", IDBCursor, ["update", "delete"]), ["advance", "continue", "continuePrimaryKey"].forEach((function(e) {
                    e in IDBCursor.prototype && (re.prototype[e] = function() {
                        var t = this,
                            n = arguments;
                        return Promise.resolve().then((function() {
                            return t._cursor[e].apply(t._cursor, n), X(t._request).then((function(e) {
                                if (e) return new re(e, t._request)
                            }))
                        }))
                    })
                })), ie.prototype.createIndex = function() {
                    return new ne(this._store.createIndex.apply(this._store, arguments))
                }, ie.prototype.index = function() {
                    return new ne(this._store.index.apply(this._store, arguments))
                }, Z(ie, "_store", ["name", "keyPath", "indexNames", "autoIncrement"]), Q(ie, "_store", IDBObjectStore, ["put", "add", "delete", "clear", "get", "getAll", "getKey", "getAllKeys", "count"]), te(ie, "_store", IDBObjectStore, ["openCursor", "openKeyCursor"]), ee(ie, "_store", IDBObjectStore, ["deleteIndex"]), oe.prototype.objectStore = function() {
                    return new ie(this._tx.objectStore.apply(this._tx, arguments))
                }, Z(oe, "_tx", ["objectStoreNames", "mode"]), ee(oe, "_tx", IDBTransaction, ["abort"]), ae.prototype.createObjectStore = function() {
                    return new ie(this._db.createObjectStore.apply(this._db, arguments))
                }, Z(ae, "_db", ["name", "version", "objectStoreNames"]), ee(ae, "_db", IDBDatabase, ["deleteObjectStore", "close"]), se.prototype.transaction = function() {
                    return new oe(this._db.transaction.apply(this._db, arguments))
                }, Z(se, "_db", ["name", "version", "objectStoreNames"]), ee(se, "_db", IDBDatabase, ["close"]), ["openCursor", "openKeyCursor"].forEach((function(e) {
                    [ie, ne].forEach((function(t) {
                        e in t.prototype && (t.prototype[e.replace("open", "iterate")] = function() {
                            var t = (r = arguments, Array.prototype.slice.call(r)),
                                n = t[t.length - 1],
                                r = this._store || this._index,
                                i = r[e].apply(r, t.slice(0, -1));
                            i.onsuccess = function() {
                                n(i.result)
                            }
                        })
                    }))
                })), [ne, ie].forEach((function(e) {
                    e.prototype.getAll || (e.prototype.getAll = function(e, t) {
                        var n = this,
                            r = [];
                        return new Promise((function(i) {
                            n.iterateCursor(e, (function(e) {
                                e ? (r.push(e.value), void 0 === t || r.length != t ? e.continue() : i(r)) : i(r)
                            }))
                        }))
                    })
                }));
                var ce = 1e4,
                    ue = "w:0.4.26",
                    le = "FIS_v2",
                    fe = "https://firebaseinstallations.googleapis.com/v1",
                    pe = 36e5,
                    he = ((j = {})["missing-app-config-values"] = 'Missing App configuration value: "{$valueName}"', j["not-registered"] = "Firebase Installation is not registered.", j["installation-not-found"] = "Firebase Installation not found.", j["request-failed"] = '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"', j["app-offline"] = "Could not process request. Application offline.", j["delete-pending-registration"] = "Can't delete installation while there is a pending registration request.", j),
                    de = new d("installations", "Installations", he);

                function ge(e) {
                    return e instanceof p && e.code.includes("request-failed")
                }

                function me(e) {
                    return e = e.projectId, fe + "/projects/" + e + "/installations"
                }

                function ve(e) {
                    return {
                        token: e.token,
                        requestStatus: 2,
                        expiresIn: (e = e.expiresIn, Number(e.replace("s", "000"))),
                        creationTime: Date.now()
                    }
                }

                function ye(e, t) {
                    return n(this, void 0, void 0, (function() {
                        var n;
                        return r(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, t.json()];
                                case 1:
                                    return n = (n = r.sent()).error, [2, de.create("request-failed", {
                                        requestName: e,
                                        serverCode: n.code,
                                        serverMessage: n.message,
                                        serverStatus: n.status
                                    })]
                            }
                        }))
                    }))
                }

                function be(e) {
                    return e = e.apiKey, new Headers({
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        "x-goog-api-key": e
                    })
                }

                function we(e, t) {
                    return t = t.refreshToken, (e = be(e)).append("Authorization", le + " " + t), e
                }

                function Ie(e) {
                    return n(this, void 0, void 0, (function() {
                        var t;
                        return r(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, e()];
                                case 1:
                                    return 500 <= (t = n.sent()).status && t.status < 600 ? [2, e()] : [2, t]
                            }
                        }))
                    }))
                }

                function _e(e) {
                    return new Promise((function(t) {
                        setTimeout(t, e)
                    }))
                }
                var Ee = /^[cdef][\w-]{21}$/,
                    Se = "";

                function Te() {
                    try {
                        var e = new Uint8Array(17);
                        (self.crypto || self.msCrypto).getRandomValues(e), e[0] = 112 + e[0] % 16;
                        var t = function(e) {
                            return btoa(String.fromCharCode.apply(String, a([], o(e)))).replace(/\+/g, "-").replace(/\//g, "_")
                        }(e).substr(0, 22);
                        return Ee.test(t) ? t : Se
                    } catch (e) {
                        return Se
                    }
                }

                function Ae(e) {
                    return e.appName + "!" + e.appId
                }
                var Ne = new Map;

                function ke(e, t) {
                    Ce(e = Ae(e), t),
                        function(e, t) {
                            var n = Pe();
                            n && n.postMessage({
                                key: e,
                                fid: t
                            }), De()
                        }(e, t)
                }

                function Ce(e, t) {
                    var n, r;
                    if (e = Ne.get(e)) try {
                        for (var o = i(e), a = o.next(); !a.done; a = o.next())(0, a.value)(t)
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            a && !a.done && (r = o.return) && r.call(o)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                }
                var Oe = null;

                function Pe() {
                    return !Oe && "BroadcastChannel" in self && ((Oe = new BroadcastChannel("[Firebase] FID Change")).onmessage = function(e) {
                        Ce(e.data.key, e.data.fid)
                    }), Oe
                }

                function De() {
                    0 === Ne.size && Oe && (Oe.close(), Oe = null)
                }
                var Re, Le = "firebase-installations-database",
                    je = 1,
                    Me = "firebase-installations-store",
                    Be = null;

                function xe() {
                    var e, t, n;
                    return Be || (e = je, t = function(e) {
                        0 === e.oldVersion && e.createObjectStore(Me)
                    }, (n = (e = Y(indexedDB, "open", [Le, je])).request) && (n.onupgradeneeded = function(e) {
                        t && t(new ae(n.result, e.oldVersion, n.transaction))
                    }), Be = e.then((function(e) {
                        return new se(e)
                    }))), Be
                }

                function Ue(e, t) {
                    return n(this, void 0, void 0, (function() {
                        var n, i, o, a;
                        return r(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return n = Ae(e), [4, xe()];
                                case 1:
                                    return o = r.sent(), i = o.transaction(Me, "readwrite"), [4, (o = i.objectStore(Me)).get(n)];
                                case 2:
                                    return a = r.sent(), [4, o.put(t, n)];
                                case 3:
                                    return r.sent(), [4, i.complete];
                                case 4:
                                    return r.sent(), a && a.fid === t.fid || ke(e, t.fid), [2, t]
                            }
                        }))
                    }))
                }

                function Fe(e) {
                    return n(this, void 0, void 0, (function() {
                        var t, n;
                        return r(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return t = Ae(e), [4, xe()];
                                case 1:
                                    return [4, (n = (n = r.sent()).transaction(Me, "readwrite")).objectStore(Me).delete(t)];
                                case 2:
                                    return r.sent(), [4, n.complete];
                                case 3:
                                    return r.sent(), [2]
                            }
                        }))
                    }))
                }

                function qe(e, t) {
                    return n(this, void 0, void 0, (function() {
                        var n, i, o, a, s;
                        return r(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return n = Ae(e), [4, xe()];
                                case 1:
                                    return o = r.sent(), i = o.transaction(Me, "readwrite"), [4, (o = i.objectStore(Me)).get(n)];
                                case 2:
                                    return a = r.sent(), void 0 !== (s = t(a)) ? [3, 4] : [4, o.delete(n)];
                                case 3:
                                    return r.sent(), [3, 6];
                                case 4:
                                    return [4, o.put(s, n)];
                                case 5:
                                    r.sent(), r.label = 6;
                                case 6:
                                    return [4, i.complete];
                                case 7:
                                    return r.sent(), !s || a && a.fid === s.fid || ke(e, s.fid), [2, s]
                            }
                        }))
                    }))
                }

                function Ve(e) {
                    return n(this, void 0, void 0, (function() {
                        var t, i, o;
                        return r(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, qe(e, (function(i) {
                                        return i = He(i || {
                                            fid: Te(),
                                            registrationStatus: 0
                                        }), i = function(e, t) {
                                            return 0 !== t.registrationStatus ? 1 === t.registrationStatus ? {
                                                installationEntry: t,
                                                registrationPromise: function(e) {
                                                    return n(this, void 0, void 0, (function() {
                                                        var t, n, i;
                                                        return r(this, (function(r) {
                                                            switch (r.label) {
                                                                case 0:
                                                                    return [4, ze(e)];
                                                                case 1:
                                                                    t = r.sent(), r.label = 2;
                                                                case 2:
                                                                    return 1 !== t.registrationStatus ? [3, 5] : [4, _e(100)];
                                                                case 3:
                                                                    return r.sent(), [4, ze(e)];
                                                                case 4:
                                                                    return t = r.sent(), [3, 2];
                                                                case 5:
                                                                    return 0 !== t.registrationStatus ? [3, 7] : [4, Ve(e)];
                                                                case 6:
                                                                    return i = r.sent(), n = i.installationEntry, (i = i.registrationPromise) ? [2, i] : [2, n];
                                                                case 7:
                                                                    return [2, t]
                                                            }
                                                        }))
                                                    }))
                                                }(e)
                                            } : {
                                                installationEntry: t
                                            } : navigator.onLine ? (e = function(e, t) {
                                                return n(this, void 0, void 0, (function() {
                                                    var i, o;
                                                    return r(this, (function(a) {
                                                        switch (a.label) {
                                                            case 0:
                                                                return a.trys.push([0, 2, , 7]), [4, function(e, t) {
                                                                    var i = t.fid;
                                                                    return n(this, void 0, void 0, (function() {
                                                                        var t, n, o, a, s;
                                                                        return r(this, (function(r) {
                                                                            switch (r.label) {
                                                                                case 0:
                                                                                    return t = me(e), n = be(e), s = {
                                                                                        fid: i,
                                                                                        authVersion: le,
                                                                                        appId: e.appId,
                                                                                        sdkVersion: ue
                                                                                    }, o = {
                                                                                        method: "POST",
                                                                                        headers: n,
                                                                                        body: JSON.stringify(s)
                                                                                    }, [4, Ie((function() {
                                                                                        return fetch(t, o)
                                                                                    }))];
                                                                                case 1:
                                                                                    return (a = r.sent()).ok ? [4, a.json()] : [3, 3];
                                                                                case 2:
                                                                                    return [2, {
                                                                                        fid: (s = r.sent()).fid || i,
                                                                                        registrationStatus: 2,
                                                                                        refreshToken: s.refreshToken,
                                                                                        authToken: ve(s.authToken)
                                                                                    }];
                                                                                case 3:
                                                                                    return [4, ye("Create Installation", a)];
                                                                                case 4:
                                                                                    throw r.sent()
                                                                            }
                                                                        }))
                                                                    }))
                                                                }(e, t)];
                                                            case 1:
                                                                return i = a.sent(), [2, Ue(e, i)];
                                                            case 2:
                                                                return ge(o = a.sent()) && 409 === o.customData.serverCode ? [4, Fe(e)] : [3, 4];
                                                            case 3:
                                                                return a.sent(), [3, 6];
                                                            case 4:
                                                                return [4, Ue(e, {
                                                                    fid: t.fid,
                                                                    registrationStatus: 0
                                                                })];
                                                            case 5:
                                                                a.sent(), a.label = 6;
                                                            case 6:
                                                                throw o;
                                                            case 7:
                                                                return [2]
                                                        }
                                                    }))
                                                }))
                                            }(e, t = {
                                                fid: t.fid,
                                                registrationStatus: 1,
                                                registrationTime: Date.now()
                                            }), {
                                                installationEntry: t,
                                                registrationPromise: e
                                            }) : {
                                                installationEntry: t,
                                                registrationPromise: Promise.reject(de.create("app-offline"))
                                            }
                                        }(e, i), t = i.registrationPromise, i.installationEntry
                                    }))];
                                case 1:
                                    return (i = a.sent()).fid !== Se ? [3, 3] : (o = {}, [4, t]);
                                case 2:
                                    return [2, (o.installationEntry = a.sent(), o)];
                                case 3:
                                    return [2, {
                                        installationEntry: i,
                                        registrationPromise: t
                                    }]
                            }
                        }))
                    }))
                }

                function ze(e) {
                    return qe(e, (function(e) {
                        if (!e) throw de.create("installation-not-found");
                        return He(e)
                    }))
                }

                function He(e) {
                    return 1 === (t = e).registrationStatus && t.registrationTime + ce < Date.now() ? {
                        fid: e.fid,
                        registrationStatus: 0
                    } : e;
                    var t
                }

                function Ke(e, t) {
                    var i = e.appConfig,
                        o = e.platformLoggerProvider;
                    return n(this, void 0, void 0, (function() {
                        var e, n, a, s, c;
                        return r(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return e = function(e, t) {
                                        return t = t.fid, me(e) + "/" + t + "/authTokens:generate"
                                    }(i, t), n = we(i, t), (c = o.getImmediate({
                                        optional: !0
                                    })) && n.append("x-firebase-client", c.getPlatformInfoString()), c = {
                                        installation: {
                                            sdkVersion: ue
                                        }
                                    }, a = {
                                        method: "POST",
                                        headers: n,
                                        body: JSON.stringify(c)
                                    }, [4, Ie((function() {
                                        return fetch(e, a)
                                    }))];
                                case 1:
                                    return (s = r.sent()).ok ? [4, s.json()] : [3, 3];
                                case 2:
                                    return [2, ve(c = r.sent())];
                                case 3:
                                    return [4, ye("Generate Auth Token", s)];
                                case 4:
                                    throw r.sent()
                            }
                        }))
                    }))
                }

                function $e(e, i) {
                    return void 0 === i && (i = !1), n(this, void 0, void 0, (function() {
                        var o, a, s;
                        return r(this, (function(c) {
                            switch (c.label) {
                                case 0:
                                    return [4, qe(e.appConfig, (function(a) {
                                        if (!Ge(a)) throw de.create("not-registered");
                                        var s, c = a.authToken;
                                        if (i || 2 !== (s = c).requestStatus || function(e) {
                                                var t = Date.now();
                                                return t < e.creationTime || e.creationTime + e.expiresIn < t + pe
                                            }(s)) {
                                            if (1 === c.requestStatus) return o = function(e, t) {
                                                return n(this, void 0, void 0, (function() {
                                                    var n;
                                                    return r(this, (function(r) {
                                                        switch (r.label) {
                                                            case 0:
                                                                return [4, We(e.appConfig)];
                                                            case 1:
                                                                n = r.sent(), r.label = 2;
                                                            case 2:
                                                                return 1 !== n.authToken.requestStatus ? [3, 5] : [4, _e(100)];
                                                            case 3:
                                                                return r.sent(), [4, We(e.appConfig)];
                                                            case 4:
                                                                return n = r.sent(), [3, 2];
                                                            case 5:
                                                                return 0 === (n = n.authToken).requestStatus ? [2, $e(e, t)] : [2, n]
                                                        }
                                                    }))
                                                }))
                                            }(e, i), a;
                                            if (!navigator.onLine) throw de.create("app-offline");
                                            return s = a, c = {
                                                requestStatus: 1,
                                                requestTime: Date.now()
                                            }, c = t(t({}, s), {
                                                authToken: c
                                            }), o = function(e, i) {
                                                return n(this, void 0, void 0, (function() {
                                                    var n, o, a;
                                                    return r(this, (function(r) {
                                                        switch (r.label) {
                                                            case 0:
                                                                return r.trys.push([0, 3, , 8]), [4, Ke(e, i)];
                                                            case 1:
                                                                return n = r.sent(), a = t(t({}, i), {
                                                                    authToken: n
                                                                }), [4, Ue(e.appConfig, a)];
                                                            case 2:
                                                                return r.sent(), [2, n];
                                                            case 3:
                                                                return !ge(o = r.sent()) || 401 !== o.customData.serverCode && 404 !== o.customData.serverCode ? [3, 5] : [4, Fe(e.appConfig)];
                                                            case 4:
                                                                return r.sent(), [3, 7];
                                                            case 5:
                                                                return a = t(t({}, i), {
                                                                    authToken: {
                                                                        requestStatus: 0
                                                                    }
                                                                }), [4, Ue(e.appConfig, a)];
                                                            case 6:
                                                                r.sent(), r.label = 7;
                                                            case 7:
                                                                throw o;
                                                            case 8:
                                                                return [2]
                                                        }
                                                    }))
                                                }))
                                            }(e, c), c
                                        }
                                        return a
                                    }))];
                                case 1:
                                    return a = c.sent(), o ? [4, o] : [3, 3];
                                case 2:
                                    return s = c.sent(), [3, 4];
                                case 3:
                                    s = a.authToken, c.label = 4;
                                case 4:
                                    return [2, s]
                            }
                        }))
                    }))
                }

                function We(e) {
                    return qe(e, (function(e) {
                        if (!Ge(e)) throw de.create("not-registered");
                        var n = e.authToken;
                        return 1 === (n = n).requestStatus && n.requestTime + ce < Date.now() ? t(t({}, e), {
                            authToken: {
                                requestStatus: 0
                            }
                        }) : e
                    }))
                }

                function Ge(e) {
                    return void 0 !== e && 2 === e.registrationStatus
                }

                function Je(e, t) {
                    return void 0 === t && (t = !1), n(this, void 0, void 0, (function() {
                        return r(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, function(e) {
                                        return n(this, void 0, void 0, (function() {
                                            var t;
                                            return r(this, (function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return [4, Ve(e)];
                                                    case 1:
                                                        return (t = n.sent().registrationPromise) ? [4, t] : [3, 3];
                                                    case 2:
                                                        n.sent(), n.label = 3;
                                                    case 3:
                                                        return [2]
                                                }
                                            }))
                                        }))
                                    }(e.appConfig)];
                                case 1:
                                    return i.sent(), [4, $e(e, t)];
                                case 2:
                                    return [2, i.sent().token]
                            }
                        }))
                    }))
                }

                function Xe(e, t) {
                    return n(this, void 0, void 0, (function() {
                        var n, i, o;
                        return r(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return n = function(e, t) {
                                        return t = t.fid, me(e) + "/" + t
                                    }(e, t), o = we(e, t), i = {
                                        method: "DELETE",
                                        headers: o
                                    }, [4, Ie((function() {
                                        return fetch(n, i)
                                    }))];
                                case 1:
                                    return (o = r.sent()).ok ? [3, 3] : [4, ye("Delete Installation", o)];
                                case 2:
                                    throw r.sent();
                                case 3:
                                    return [2]
                            }
                        }))
                    }))
                }

                function Ye(e, t) {
                    var n = e.appConfig;
                    return function(e, t) {
                            Pe();
                            var n = Ae(e);
                            (e = Ne.get(n)) || (e = new Set, Ne.set(n, e)), e.add(t)
                        }(n, t),
                        function() {
                            var e, r, i;
                            r = t, i = Ae(e = n), (e = Ne.get(i)) && (e.delete(r), 0 === e.size && Ne.delete(i), De())
                        }
                }

                function Ze(e) {
                    return de.create("missing-app-config-values", {
                        valueName: e
                    })
                }(Re = J).INTERNAL.registerComponent(new y("installations", (function(e) {
                    var t = e.getProvider("app").getImmediate(),
                        o = {
                            appConfig: function(e) {
                                var t, n;
                                if (!e || !e.options) throw Ze("App Configuration");
                                if (!e.name) throw Ze("App Name");
                                try {
                                    for (var r = i(["projectId", "apiKey", "appId"]), o = r.next(); !o.done; o = r.next()) {
                                        var a = o.value;
                                        if (!e.options[a]) throw Ze(a)
                                    }
                                } catch (e) {
                                    t = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        o && !o.done && (n = r.return) && n.call(r)
                                    } finally {
                                        if (t) throw t.error
                                    }
                                }
                                return {
                                    appName: e.name,
                                    projectId: e.options.projectId,
                                    apiKey: e.options.apiKey,
                                    appId: e.options.appId
                                }
                            }(t),
                            platformLoggerProvider: e.getProvider("platform-logger")
                        };
                    return {
                        app: t,
                        getId: function() {
                            return function(e) {
                                return n(this, void 0, void 0, (function() {
                                    var t, n;
                                    return r(this, (function(r) {
                                        switch (r.label) {
                                            case 0:
                                                return [4, Ve(e.appConfig)];
                                            case 1:
                                                return t = r.sent(), n = t.installationEntry, (t.registrationPromise || $e(e)).catch(console.error), [2, n.fid]
                                        }
                                    }))
                                }))
                            }(o)
                        },
                        getToken: function(e) {
                            return Je(o, e)
                        },
                        delete: function() {
                            return function(e) {
                                return n(this, void 0, void 0, (function() {
                                    var t, n;
                                    return r(this, (function(r) {
                                        switch (r.label) {
                                            case 0:
                                                return [4, qe(t = e.appConfig, (function(e) {
                                                    if (!e || 0 !== e.registrationStatus) return e
                                                }))];
                                            case 1:
                                                if (!(n = r.sent())) return [3, 6];
                                                if (1 !== n.registrationStatus) return [3, 2];
                                                throw de.create("delete-pending-registration");
                                            case 2:
                                                if (2 !== n.registrationStatus) return [3, 6];
                                                if (navigator.onLine) return [3, 3];
                                                throw de.create("app-offline");
                                            case 3:
                                                return [4, Xe(t, n)];
                                            case 4:
                                                return r.sent(), [4, Fe(t)];
                                            case 5:
                                                r.sent(), r.label = 6;
                                            case 6:
                                                return [2]
                                        }
                                    }))
                                }))
                            }(o)
                        },
                        onIdChange: function(e) {
                            return Ye(o, e)
                        }
                    }
                }), "PUBLIC")), Re.registerVersion("@firebase/installations", "0.4.26");
                var Qe, et, tt = "0.4.12",
                    nt = "FB-PERF-TRACE-MEASURE",
                    rt = "@firebase/performance/config",
                    it = "@firebase/performance/configexpire",
                    ot = (j = "Performance", (he = {})["trace started"] = "Trace {$traceName} was started before.", he["trace stopped"] = "Trace {$traceName} is not running.", he["nonpositive trace startTime"] = "Trace {$traceName} startTime should be positive.", he["nonpositive trace duration"] = "Trace {$traceName} duration should be positive.", he["no window"] = "Window is not available.", he["no app id"] = "App id is not available.", he["no project id"] = "Project id is not available.", he["no api key"] = "Api key is not available.", he["invalid cc log"] = "Attempted to queue invalid cc event", he["FB not default"] = "Performance can only start when Firebase app instance is the default one.", he["RC response not ok"] = "RC response is not ok", he["invalid attribute name"] = "Attribute name {$attributeName} is invalid.", he["invalid attribute value"] = "Attribute value {$attributeValue} is invalid.", he["invalid custom metric name"] = "Custom metric name {$customMetricName} is invalid", he["invalid String merger input"] = "Input for String merger is invalid, contact support team to resolve.", new d("performance", j, he = he)),
                    at = new P(j);
                at.logLevel = T.INFO;
                var st, ct = (ut.prototype.getUrl = function() {
                    return this.windowLocation.href.split("?")[0]
                }, ut.prototype.mark = function(e) {
                    this.performance && this.performance.mark && this.performance.mark(e)
                }, ut.prototype.measure = function(e, t, n) {
                    this.performance && this.performance.measure && this.performance.measure(e, t, n)
                }, ut.prototype.getEntriesByType = function(e) {
                    return this.performance && this.performance.getEntriesByType ? this.performance.getEntriesByType(e) : []
                }, ut.prototype.getEntriesByName = function(e) {
                    return this.performance && this.performance.getEntriesByName ? this.performance.getEntriesByName(e) : []
                }, ut.prototype.getTimeOrigin = function() {
                    return this.performance && (this.performance.timeOrigin || this.performance.timing.navigationStart)
                }, ut.prototype.requiredApisAvailable = function() {
                    return fetch && Promise && this.navigator && this.navigator.cookieEnabled ? "indexedDB" in self && null != indexedDB || (at.info("IndexedDB is not supported by current browswer"), !1) : (at.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."), !1)
                }, ut.prototype.setupObserver = function(e, t) {
                    this.PerformanceObserver && new this.PerformanceObserver((function(e) {
                        for (var n = 0, r = e.getEntries(); n < r.length; n++) {
                            var i = r[n];
                            t(i)
                        }
                    })).observe({
                        entryTypes: [e]
                    })
                }, ut.getInstance = function() {
                    return Qe = void 0 === Qe ? new ut(et) : Qe
                }, ut);

                function ut(e) {
                    if (!(this.window = e)) throw ot.create("no window");
                    this.performance = e.performance, this.PerformanceObserver = e.PerformanceObserver, this.windowLocation = e.location, this.navigator = e.navigator, this.document = e.document, this.navigator && this.navigator.cookieEnabled && (this.localStorage = e.localStorage), e.perfMetrics && e.perfMetrics.onFirstInputDelay && (this.onFirstInputDelay = e.perfMetrics.onFirstInputDelay)
                }

                function lt(e, t) {
                    var n = e.length - t.length;
                    if (n < 0 || 1 < n) throw ot.create("invalid String merger input");
                    for (var r = [], i = 0; i < e.length; i++) r.push(e.charAt(i)), t.length > i && r.push(t.charAt(i));
                    return r.join("")
                }
                var ft, pt, ht = (dt.prototype.getAppId = function() {
                    var e = this.firebaseAppInstance && this.firebaseAppInstance.options && this.firebaseAppInstance.options.appId;
                    if (!e) throw ot.create("no app id");
                    return e
                }, dt.prototype.getProjectId = function() {
                    var e = this.firebaseAppInstance && this.firebaseAppInstance.options && this.firebaseAppInstance.options.projectId;
                    if (!e) throw ot.create("no project id");
                    return e
                }, dt.prototype.getApiKey = function() {
                    var e = this.firebaseAppInstance && this.firebaseAppInstance.options && this.firebaseAppInstance.options.apiKey;
                    if (!e) throw ot.create("no api key");
                    return e
                }, dt.prototype.getFlTransportFullUrl = function() {
                    return this.flTransportEndpointUrl.concat("?key=", this.transportKey)
                }, dt.getInstance = function() {
                    return st = void 0 === st ? new dt : st
                }, dt);

                function dt() {
                    this.instrumentationEnabled = !0, this.dataCollectionEnabled = !0, this.loggingEnabled = !1, this.tracesSamplingRate = 1, this.networkRequestsSamplingRate = 1, this.logEndPointUrl = "https://firebaselogging.googleapis.com/v0cc/log?format=json_proto", this.flTransportEndpointUrl = lt("hts/frbslgigp.ogepscmv/ieo/eaylg", "tp:/ieaeogn-agolai.o/1frlglgc/o"), this.transportKey = lt("AzSC8r6ReiGqFMyfvgow", "Iayx0u-XT3vksVM-pIV"), this.logSource = 462, this.logTraceAfterSampling = !1, this.logNetworkAfterSampling = !1, this.configTimeToLive = 12
                }(j = pt = pt || {})[j.UNKNOWN = 0] = "UNKNOWN", j[j.VISIBLE = 1] = "VISIBLE", j[j.HIDDEN = 2] = "HIDDEN";
                var gt = ["firebase_", "google_", "ga_"],
                    mt = new RegExp("^[a-zA-Z]\\w*$");

                function vt() {
                    switch (ct.getInstance().document.visibilityState) {
                        case "visible":
                            return pt.VISIBLE;
                        case "hidden":
                            return pt.HIDDEN;
                        default:
                            return pt.UNKNOWN
                    }
                }
                var yt = "0.0.1",
                    bt = {
                        loggingEnabled: !0
                    },
                    wt = "FIREBASE_INSTALLATIONS_AUTH";

                function It(e) {
                    var t, n = function() {
                        var e = ct.getInstance().localStorage;
                        if (e) {
                            var t = e.getItem(it);
                            if (t && function(e) {
                                    return Number(e) > Date.now()
                                }(t) && (e = e.getItem(rt))) try {
                                return JSON.parse(e)
                            } catch (e) {
                                return
                            }
                        }
                    }();
                    return n ? (Et(n), Promise.resolve()) : (t = e, function() {
                        var e = ht.getInstance().installationsService.getToken();
                        return e.then((function(e) {})), e
                    }().then((function(e) {
                        var n = "https://firebaseremoteconfig.googleapis.com/v1/projects/" + ht.getInstance().getProjectId() + "/namespaces/fireperf:fetch?key=" + ht.getInstance().getApiKey();
                        return e = new Request(n, {
                            method: "POST",
                            headers: {
                                Authorization: wt + " " + e
                            },
                            body: JSON.stringify({
                                app_instance_id: t,
                                app_instance_id_token: e,
                                app_id: ht.getInstance().getAppId(),
                                app_version: tt,
                                sdk_version: yt
                            })
                        }), fetch(e).then((function(e) {
                            if (e.ok) return e.json();
                            throw ot.create("RC response not ok")
                        }))
                    })).catch((function() {
                        at.info(_t)
                    })).then(Et).then((function(e) {
                        var t;
                        t = e, e = ct.getInstance().localStorage, t && e && (e.setItem(rt, JSON.stringify(t)), e.setItem(it, String(Date.now() + 60 * ht.getInstance().configTimeToLive * 60 * 1e3)))
                    }), (function() {})))
                }
                var _t = "Could not fetch config, will use default configs";

                function Et(e) {
                    if (!e) return e;
                    var t = ht.getInstance(),
                        n = e.entries || {};
                    return void 0 !== n.fpr_enabled ? t.loggingEnabled = "true" === String(n.fpr_enabled) : t.loggingEnabled = bt.loggingEnabled, n.fpr_log_source && (t.logSource = Number(n.fpr_log_source)), n.fpr_log_endpoint_url && (t.logEndPointUrl = n.fpr_log_endpoint_url), n.fpr_log_transport_key && (t.transportKey = n.fpr_log_transport_key), void 0 !== n.fpr_vc_network_request_sampling_rate && (t.networkRequestsSamplingRate = Number(n.fpr_vc_network_request_sampling_rate)), void 0 !== n.fpr_vc_trace_sampling_rate && (t.tracesSamplingRate = Number(n.fpr_vc_trace_sampling_rate)), t.logTraceAfterSampling = St(t.tracesSamplingRate), t.logNetworkAfterSampling = St(t.networkRequestsSamplingRate), e
                }

                function St(e) {
                    return Math.random() <= e
                }
                var Tt, At = 1;

                function Nt() {
                    return At = 2, Tt = Tt || function() {
                        var e = ct.getInstance().document;
                        return new Promise((function(t) {
                            var n;
                            e && "complete" !== e.readyState ? (n = function() {
                                "complete" === e.readyState && (e.removeEventListener("readystatechange", n), t())
                            }, e.addEventListener("readystatechange", n)) : t()
                        }))
                    }().then((function() {
                        return (e = ht.getInstance().installationsService.getId()).then((function(e) {
                            ft = e
                        })), e;
                        var e
                    })).then(It).then(kt, kt)
                }

                function kt() {
                    At = 3
                }
                var Ct, Ot = 1e4,
                    Pt = 5500,
                    Dt = 3,
                    Rt = 1e3,
                    Lt = Dt,
                    jt = [],
                    Mt = !1;

                function Bt(e) {
                    setTimeout((function() {
                        var e, t;
                        if (0 !== Lt) return jt.length ? (t = (e = jt.splice(0, Rt)).map((function(e) {
                                return {
                                    source_extension_json_proto3: e.message,
                                    event_time_ms: String(e.eventTime)
                                }
                            })), void
                            function(e, t) {
                                return function(e) {
                                    var t = ht.getInstance().getFlTransportFullUrl();
                                    return fetch(t, {
                                        method: "POST",
                                        body: JSON.stringify(e)
                                    })
                                }(e).then((function(e) {
                                    return e.ok || at.info("Call to Firebase backend failed."), e.json()
                                })).then((function(e) {
                                    var n = Number(e.nextRequestWaitMillis),
                                        r = Ot;
                                    isNaN(n) || (r = Math.max(n, r)), e = e.logResponseDetails, Array.isArray(e) && 0 < e.length && "RETRY_REQUEST_LATER" === e[0].responseAction && (jt = a(a([], t), jt), at.info("Retry transport request later.")), Lt = Dt, Bt(r)
                                }))
                            }({
                                request_time_ms: String(Date.now()),
                                client_info: {
                                    client_type: 1,
                                    js_client_info: {}
                                },
                                log_source: ht.getInstance().logSource,
                                log_event: t
                            }, e).catch((function() {
                                jt = a(a([], e), jt), Lt--, at.info("Tries left: " + Lt + "."), Bt(Ot)
                            }))) : Bt(Ot)
                    }), e)
                }

                function xt(e) {
                    return function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        ! function(e) {
                            if (!e.eventTime || !e.message) throw ot.create("invalid cc log");
                            jt = a(a([], jt), [e])
                        }({
                            message: e.apply(void 0, t),
                            eventTime: Date.now()
                        })
                    }
                }

                function Ut(e, t) {
                    (Ct = Ct || xt(Vt))(e, t)
                }

                function Ft(e) {
                    var t = ht.getInstance();
                    !t.instrumentationEnabled && e.isAuto || (t.dataCollectionEnabled || e.isAuto) && ct.getInstance().requiredApisAvailable() && (e.isAuto && vt() !== pt.VISIBLE || (3 === At ? qt(e) : Nt().then((function() {
                        return qt(e)
                    }), (function() {
                        return qt(e)
                    }))))
                }

                function qt(e) {
                    var t;
                    !ft || (t = ht.getInstance()).loggingEnabled && t.logTraceAfterSampling && setTimeout((function() {
                        return Ut(e, 1)
                    }), 0)
                }

                function Vt(e, t) {
                    return (0 === t ? function(e) {
                        return e = {
                            url: e.url,
                            http_method: e.httpMethod || 0,
                            http_response_code: 200,
                            response_payload_bytes: e.responsePayloadBytes,
                            client_start_time_us: e.startTimeUs,
                            time_to_response_initiated_us: e.timeToResponseInitiatedUs,
                            time_to_response_completed_us: e.timeToResponseCompletedUs
                        }, e = {
                            application_info: zt(),
                            network_request_metric: e
                        }, JSON.stringify(e)
                    } : function(e) {
                        var t = {
                            name: e.name,
                            is_auto: e.isAuto,
                            client_start_time_us: e.startTimeUs,
                            duration_us: e.durationUs
                        };
                        return 0 !== Object.keys(e.counters).length && (t.counters = e.counters), e = e.getAttributes(), 0 !== Object.keys(e).length && (t.custom_attributes = e), t = {
                            application_info: zt(),
                            trace_metric: t
                        }, JSON.stringify(t)
                    })(e)
                }

                function zt() {
                    return {
                        google_app_id: ht.getInstance().getAppId(),
                        app_instance_id: ft,
                        web_app_info: {
                            sdk_version: tt,
                            page_url: ct.getInstance().getUrl(),
                            service_worker_status: "serviceWorker" in (e = ct.getInstance().navigator) ? e.serviceWorker.controller ? 2 : 3 : 1,
                            visibility_state: vt(),
                            effective_connection_type: function() {
                                var e = ct.getInstance().navigator.connection;
                                switch (e && e.effectiveType) {
                                    case "slow-2g":
                                        return 1;
                                    case "2g":
                                        return 2;
                                    case "3g":
                                        return 3;
                                    case "4g":
                                        return 4;
                                    default:
                                        return 0
                                }
                            }()
                        },
                        application_process_state: 0
                    };
                    var e
                }
                var Ht = ["_fp", "_fcp", "_fid"],
                    Kt = ($t.prototype.start = function() {
                        if (1 !== this.state) throw ot.create("trace started", {
                            traceName: this.name
                        });
                        this.api.mark(this.traceStartMark), this.state = 2
                    }, $t.prototype.stop = function() {
                        if (2 !== this.state) throw ot.create("trace stopped", {
                            traceName: this.name
                        });
                        this.state = 3, this.api.mark(this.traceStopMark), this.api.measure(this.traceMeasure, this.traceStartMark, this.traceStopMark), this.calculateTraceMetrics(), Ft(this)
                    }, $t.prototype.record = function(e, n, r) {
                        if (e <= 0) throw ot.create("nonpositive trace startTime", {
                            traceName: this.name
                        });
                        if (n <= 0) throw ot.create("nonpositive trace duration", {
                            traceName: this.name
                        });
                        if (this.durationUs = Math.floor(1e3 * n), this.startTimeUs = Math.floor(1e3 * e), r && r.attributes && (this.customAttributes = t({}, r.attributes)), r && r.metrics)
                            for (var i = 0, o = Object.keys(r.metrics); i < o.length; i++) {
                                var a = o[i];
                                isNaN(Number(r.metrics[a])) || (this.counters[a] = Number(Math.floor(r.metrics[a])))
                            }
                        Ft(this)
                    }, $t.prototype.incrementMetric = function(e, t) {
                        void 0 === t && (t = 1), void 0 === this.counters[e] ? this.putMetric(e, t) : this.putMetric(e, this.counters[e] + t)
                    }, $t.prototype.putMetric = function(e, t) {
                        if (n = e, r = this.name, 0 === n.length || 100 < n.length || !(r && r.startsWith("_wt_") && -1 < Ht.indexOf(n)) && n.startsWith("_")) throw ot.create("invalid custom metric name", {
                            customMetricName: e
                        });
                        var n, r;
                        this.counters[e] = (e = t, (t = Math.floor(e)) < e && at.info("Metric value should be an Integer, setting the value as : " + t + "."), t)
                    }, $t.prototype.getMetric = function(e) {
                        return this.counters[e] || 0
                    }, $t.prototype.putAttribute = function(e, t) {
                        var n, r = !(0 === (n = e).length || 40 < n.length || gt.some((function(e) {
                                return n.startsWith(e)
                            })) || !n.match(mt)),
                            i = 0 !== (i = t).length && i.length <= 100;
                        if (r && i) this.customAttributes[e] = t;
                        else {
                            if (!r) throw ot.create("invalid attribute name", {
                                attributeName: e
                            });
                            if (!i) throw ot.create("invalid attribute value", {
                                attributeValue: t
                            })
                        }
                    }, $t.prototype.getAttribute = function(e) {
                        return this.customAttributes[e]
                    }, $t.prototype.removeAttribute = function(e) {
                        void 0 !== this.customAttributes[e] && delete this.customAttributes[e]
                    }, $t.prototype.getAttributes = function() {
                        return t({}, this.customAttributes)
                    }, $t.prototype.setStartTime = function(e) {
                        this.startTimeUs = e
                    }, $t.prototype.setDuration = function(e) {
                        this.durationUs = e
                    }, $t.prototype.calculateTraceMetrics = function() {
                        var e;
                        (e = (e = this.api.getEntriesByName(this.traceMeasure)) && e[0]) && (this.durationUs = Math.floor(1e3 * e.duration), this.startTimeUs = Math.floor(1e3 * (e.startTime + this.api.getTimeOrigin())))
                    }, $t.createOobTrace = function(e, t, n) {
                        var r, i = ct.getInstance().getUrl();
                        i && (r = new $t("_wt_" + i, !0), i = Math.floor(1e3 * ct.getInstance().getTimeOrigin()), r.setStartTime(i), e && e[0] && (r.setDuration(Math.floor(1e3 * e[0].duration)), r.putMetric("domInteractive", Math.floor(1e3 * e[0].domInteractive)), r.putMetric("domContentLoadedEventEnd", Math.floor(1e3 * e[0].domContentLoadedEventEnd)), r.putMetric("loadEventEnd", Math.floor(1e3 * e[0].loadEventEnd))), t && ((e = t.find((function(e) {
                            return "first-paint" === e.name
                        }))) && e.startTime && r.putMetric("_fp", Math.floor(1e3 * e.startTime)), (t = t.find((function(e) {
                            return "first-contentful-paint" === e.name
                        }))) && t.startTime && r.putMetric("_fcp", Math.floor(1e3 * t.startTime)), n && r.putMetric("_fid", Math.floor(1e3 * n))), Ft(r))
                    }, $t.createUserTimingTrace = function(e) {
                        Ft(new $t(e, !1, e))
                    }, $t);

                function $t(e, t, n) {
                    void 0 === t && (t = !1), this.name = e, this.isAuto = t, this.state = 1, this.customAttributes = {}, this.counters = {}, this.api = ct.getInstance(), this.randomId = Math.floor(1e6 * Math.random()), this.isAuto || (this.traceStartMark = "FB-PERF-TRACE-START-" + this.randomId + "-" + this.name, this.traceStopMark = "FB-PERF-TRACE-STOP-" + this.randomId + "-" + this.name, this.traceMeasure = n || nt + "-" + this.randomId + "-" + this.name, n && this.calculateTraceMetrics())
                }

                function Wt(e) {
                    var t, n, r, i = e;
                    i && void 0 !== i.responseStart && (n = ct.getInstance().getTimeOrigin(), r = Math.floor(1e3 * (i.startTime + n)), e = i.responseStart ? Math.floor(1e3 * (i.responseStart - i.startTime)) : void 0, n = Math.floor(1e3 * (i.responseEnd - i.startTime)), i = {
                        url: i.name && i.name.split("?")[0],
                        responsePayloadBytes: i.transferSize,
                        startTimeUs: r,
                        timeToResponseInitiatedUs: e,
                        timeToResponseCompletedUs: n
                    }, t = i, (r = ht.getInstance()).instrumentationEnabled && (e = t.url, n = r.logEndPointUrl.split("?")[0], i = r.flTransportEndpointUrl.split("?")[0], e !== n && e !== i && r.loggingEnabled && r.logNetworkAfterSampling && setTimeout((function() {
                        return Ut(t, 0)
                    }), 0)))
                }
                var Gt = 5e3;

                function Jt() {
                    ft && (setTimeout((function() {
                        var e, t = ct.getInstance(),
                            n = t.getEntriesByType("navigation"),
                            r = t.getEntriesByType("paint");
                        t.onFirstInputDelay ? (e = setTimeout((function() {
                            Kt.createOobTrace(n, r), e = void 0
                        }), Gt), t.onFirstInputDelay((function(t) {
                            e && (clearTimeout(e), Kt.createOobTrace(n, r, t))
                        }))) : Kt.createOobTrace(n, r)
                    }), 0), setTimeout((function() {
                        for (var e = ct.getInstance(), t = 0, n = e.getEntriesByType("resource"); t < n.length; t++) Wt(n[t]);
                        e.setupObserver("resource", Wt)
                    }), 0), setTimeout((function() {
                        for (var e = ct.getInstance(), t = 0, n = e.getEntriesByType("measure"); t < n.length; t++) Xt(n[t]);
                        e.setupObserver("measure", Xt)
                    }), 0))
                }

                function Xt(e) {
                    (e = e.name).substring(0, nt.length) !== nt && Kt.createUserTimingTrace(e)
                }
                var Yt, Zt = (Qt.prototype.trace = function(e) {
                    return new Kt(e)
                }, Object.defineProperty(Qt.prototype, "instrumentationEnabled", {
                    get: function() {
                        return ht.getInstance().instrumentationEnabled
                    },
                    set: function(e) {
                        ht.getInstance().instrumentationEnabled = e
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Qt.prototype, "dataCollectionEnabled", {
                    get: function() {
                        return ht.getInstance().dataCollectionEnabled
                    },
                    set: function(e) {
                        ht.getInstance().dataCollectionEnabled = e
                    },
                    enumerable: !1,
                    configurable: !0
                }), Qt);

                function Qt(e) {
                    this.app = e, ct.getInstance().requiredApisAvailable() && new Promise((function(e, t) {
                        try {
                            var n = !0,
                                r = "validate-browser-context-for-indexeddb-analytics-module",
                                i = self.indexedDB.open(r);
                            i.onsuccess = function() {
                                i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0)
                            }, i.onupgradeneeded = function() {
                                n = !1
                            }, i.onerror = function() {
                                var e;
                                t((null === (e = i.error) || void 0 === e ? void 0 : e.message) || "")
                            }
                        } catch (e) {
                            t(e)
                        }
                    })).then((function(e) {
                        e && (Mt || (Bt(Pt), Mt = !0), Nt().then(Jt, Jt))
                    })).catch((function(e) {
                        at.info("Environment doesn't support IndexedDB: " + e)
                    }))
                }

                function en(e, t) {
                    if ("[DEFAULT]" !== e.name) throw ot.create("FB not default");
                    if ("undefined" == typeof window) throw ot.create("no window");
                    return et = window, ht.getInstance().firebaseAppInstance = e, ht.getInstance().installationsService = t, new Zt(e)
                }
                return (Yt = J).INTERNAL.registerComponent(new y("performance", (function(e) {
                    return en(e.getProvider("app").getImmediate(), e = e.getProvider("installations").getImmediate())
                }), "PUBLIC")), Yt.registerVersion("@firebase/performance", "0.4.12"), J.registerVersion("firebase", "8.6.3", "lite"), J
            }()
        },
        66360: function() {
            ! function(e, t) {
                if (self && self.performance) {
                    var n, r, i, o = [],
                        a = {
                            passive: !0,
                            capture: !0
                        },
                        s = new Date,
                        c = "pointerup",
                        u = "pointercancel";
                    h(e), self.perfMetrics = self.perfMetrics || {}, self.perfMetrics.onFirstInputDelay = function(e) {
                        o.push(e), f()
                    }
                }

                function l(e, o) {
                    n || (n = o, r = e, i = new Date, h(t), f())
                }

                function f() {
                    r >= 0 && r < i - s && (o.forEach((function(e) {
                        e(r, n)
                    })), o = [])
                }

                function p(n) {
                    if (n.cancelable) {
                        var r = (n.timeStamp > 1e12 ? new Date : self.performance.now()) - n.timeStamp;
                        "pointerdown" === n.type ? function(n, r) {
                            function i() {
                                l(n, r), s()
                            }

                            function o() {
                                s()
                            }

                            function s() {
                                t(c, i, a), t(u, o, a)
                            }
                            e(c, i, a), e(u, o, a)
                        }(r, n) : l(r, n)
                    }
                }

                function h(e) {
                    ["click", "mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(t) {
                        e(t, p, a)
                    }))
                }
            }(addEventListener, removeEventListener)
        },
        91897: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                initFirebase: function() {
                    return o
                }
            });
            var r = n(24022),
                i = n.n(r);
            n(66360);

            function o(e) {
                return i().initializeApp(e), i().performance()
            }
        }
    }
]);
//# sourceMappingURL=https://shopee.sg/assets/firebase.fbd3352bc73050b085a2.js.map