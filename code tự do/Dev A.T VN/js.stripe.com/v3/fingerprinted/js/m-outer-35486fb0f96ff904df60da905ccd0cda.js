! function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    var n = {};
    t.m = e, t.c = n, t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: r
        })
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function(e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (t.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var o in e) t.d(r, o, function(t) {
                return e[t]
            }.bind(null, o));
        return r
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "https://js.stripe.com/v3/", t(t.s = 24)
}({
    24: function(e, t, n) {
        e.exports = n("XQp5")
    },
    XQp5: function() {
        var e = "https://m.stripe.network",
            t = window.location.hash,
            n = /preview=true/.test(t) ? "inner-preview.html" : "inner.html",
            r = document.createElement("iframe");
        r.src = "".concat(e, "/").concat(n).concat(t);
        var o = function(t) {
            if (t.origin === e) {
                var n = window.opener || window.parent || window;
                if (!n) return;
                n.postMessage(t.data, "*")
            } else r.contentWindow.postMessage(t.data, "*")
        };
        window.addEventListener ? window.addEventListener("message", o, !1) : window.attachEvent("onMessage", o), document.body && document.body.appendChild(r)
    }
});