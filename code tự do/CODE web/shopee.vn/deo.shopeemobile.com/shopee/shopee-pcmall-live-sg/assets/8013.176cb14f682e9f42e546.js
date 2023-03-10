(("undefined" != typeof self ? self : this).webpackChunkshopee_pc = ("undefined" != typeof self ? self : this).webpackChunkshopee_pc || []).push([
    [8013], {
        8013: function(e, t, n) {
            "use strict";
            n.d(t, {
                sX: function() {
                    return h
                },
                lr: function() {
                    return _
                },
                gq: function() {
                    return $
                },
                mE: function() {
                    return O
                },
                Jt: function() {
                    return Y
                },
                aR: function() {
                    return K
                },
                fq: function() {
                    return re
                },
                dZ: function() {
                    return ne
                }
            });
            var r = n(60042),
                i = n.n(r),
                o = n(27378),
                a = n.n(o),
                s = n(54166),
                l = n(67062);

            function u(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function c(e, t) {
                return (c = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var h = function(e) {
                var t, n;

                function r(t) {
                    var n, r;
                    r = e.call(this, t) || this;
                    var i = [],
                        o = t.banners;
                    return o && o.length && (i = o.slice(), t.looping && (i.unshift(o[o.length - 1]), i.push(o[0]))), r.state = {
                        position: t.looping ? 1 : 0,
                        isSliding: !1,
                        banners: i,
                        showArrows: !1,
                        showDots: !!t.showDots
                    }, r.renewAutoPlay = r.renewAutoPlay.bind(u(r)), r.stopAutoPlay = r.stopAutoPlay.bind(u(r)), r.hideArrows = r.hideArrows.bind(u(r)), r.showArrows = r.showArrows.bind(u(r)), r.showDots = r.showDots.bind(u(r)), r.hideDots = r.hideDots.bind(u(r)), r.finishSliding = r.finishSliding.bind(u(r)), r.carouselWidth = 0, r._bannerVisible = ((n = {})[r.state.position] = !0, n), r
                }
                n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, c(t, n);
                var a = r.prototype;
                return a.componentDidMount = function() {
                    var e = this.props;
                    e.autoPlay ? this._carousel && (this._carousel.style.transform = this.getCurrentCarouselTransform(e.looping ? 1 : 0), this.renewAutoPlay()) : this.finishSliding(e.looping ? 1 : 0)
                }, a.UNSAFE_componentWillReceiveProps = function(e) {
                    var t = [],
                        n = e.banners;
                    n && n.length && (t = n.slice(), e.looping && (t.unshift(n[n.length - 1]), t.push(n[0]))), this.setState({
                        banners: t
                    })
                }, a.componentWillUnmount = function() {
                    this.props.autoPlay && this.stopAutoPlay()
                }, a.componentDidUpdate = function(e) {
                    e.autoPlay && !this.props.autoPlay ? this.stopAutoPlay() : !e.autoPlay && this.props.autoPlay && this.renewAutoPlay()
                }, a.getCurrentCarouselTransform = function(e) {
                    return this._carousel ? "translate(" + -e * this.carouselWidth + "px, 0px)" : ""
                }, a.render = function() {
                    var e = this,
                        t = this.props.banners || [],
                        n = t.length,
                        r = this.props.looping,
                        a = this.state,
                        s = a.banners,
                        l = a.position,
                        u = a.showArrows,
                        c = s.length;
                    return o.createElement("div", {
                        className: "image-carousel",
                        onMouseEnter: this.showArrows,
                        onMouseLeave: this.hideArrows
                    }, o.createElement("div", {
                        className: "image-carousel__item-list-wrapper"
                    }, o.createElement("ul", {
                        className: "image-carousel__item-list",
                        style: {
                            width: 100 * c + "%"
                        },
                        ref: function(t) {
                            e._carousel = t, t && t.firstElementChild && (e.carouselWidth = t.firstElementChild.getBoundingClientRect().width)
                        }
                    }, s.map((function(t, n) {
                        return o.createElement("li", {
                            className: "image-carousel__item",
                            key: n,
                            style: {
                                width: 100 / c + "%"
                            }
                        }, o.createElement("div", {
                            style: {
                                display: n === l || e._bannerVisible[n] ? null : "none"
                            }
                        }, t))
                    })))), n > 1 && (r || l > 0) && this.arrow(-1, u), n > 1 && (r || l < c - 1) && this.arrow(1, u), c > 1 && o.createElement("div", {
                        className: i()("image-carousel__dots", !this.state.showDots && "image-carousel__dots--hidden")
                    }, t.map((function(t, n) {
                        var a = n + (r ? 1 : 0);
                        return o.createElement("div", {
                            key: n,
                            className: i()("image-carousel__dot", l === a && "image-carousel__dot--active"),
                            onClick: e.slide.bind(e, a)
                        })
                    }))))
                }, a.arrow = function(e, t) {
                    return o.createElement("div", {
                        className: "image-carousel__arrow image-carousel__arrow--" + (e < 0 ? "prev" : "next"),
                        style: {
                            opacity: !this.props.isOnlyShowArrowOnHover || t ? "1" : "0"
                        },
                        onClick: this.slide.bind(this, this.state.position + e)
                    }, e < 0 ? o.createElement(s.Z, null) : o.createElement(l.Z, null))
                }, a.renewAutoPlay = function() {
                    this.stopAutoPlay(), this.props.autoPlayDelay && this.setState({
                        autoPlayId: setTimeout(this.slide.bind(this), this.props.autoPlayDelay)
                    })
                }, a.stopAutoPlay = function() {
                    this.state.autoPlayId && clearTimeout(this.state.autoPlayId)
                }, a.slide = function(e) {
                    var t = this;
                    void 0 === e && (e = this.state.position + 1), this.props.banners && this.props.banners.length <= 1 && (e = this.state.position), this._bannerVisible[e] || (this._bannerVisible[e] = !0), this.state.isSliding || (this.props.onSlide && "function" == typeof this.props.onSlide && this.props.onSlide(), this.setState({
                        isSliding: !0
                    }), this._carousel && (this._carousel.style.transition = this.props.transitionTime + "ms", this._carousel.style.transform = this.getCurrentCarouselTransform(e)), setTimeout((function() {
                        t.finishSliding(e)
                    }), this.props.transitionTime))
                }, a.finishSliding = function(e) {
                    var t = this.state.banners.length;
                    !this.props.looping || 0 !== e && e !== t - 1 || (e = Math.abs(t - 2 - e), this._carousel && (this._carousel.style.transition = "0ms", this._carousel.style.transform = this.getCurrentCarouselTransform(e))), this.props.autoPlay && this.renewAutoPlay(), this.setState({
                        isSliding: !1,
                        position: e
                    })
                }, a.showArrows = function() {
                    this.setState({
                        showArrows: !0
                    })
                }, a.hideArrows = function() {
                    this.setState({
                        showArrows: !1
                    })
                }, a.showDots = function() {
                    this.setState({
                        showDots: !0
                    })
                }, a.hideDots = function() {
                    this.setState({
                        showDots: !1
                    })
                }, r
            }(o.Component);

            function p() {
                return (p = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function d(e) {
                var t = e.direction,
                    n = e.showArrowOnHover,
                    r = e.isShown,
                    a = e.handleClick,
                    u = e.showArrowHint,
                    c = e.isVisible,
                    h = e.padding,
                    d = e.IconArrow,
                    m = e.style,
                    f = n && u && !r;
                return h = h || "0px", o.createElement("div", {
                    className: i()("carousel-arrow carousel-arrow--" + (t < 0 ? "prev" : "next"), f && "carousel-arrow--hint", !c && "carousel-arrow--hidden"),
                    role: "button",
                    tabIndex: 0,
                    style: p({
                        opacity: !n || r || f ? "1" : "0",
                        visibility: c ? "visible" : "hidden",
                        transform: "translateX(calc(" + (t < 0 ? "-50% + " + h : "50% - " + h) + "))"
                    }, m),
                    onClick: a
                }, d ? o.createElement(d, null) : t < 0 ? o.createElement(s.Z, null) : o.createElement(l.Z, null))
            }
            h.defaultProps = {
                transitionTime: 500,
                autoPlayDelay: 5e3,
                dragPickPoint: 1 / 3,
                isOnlyShowArrowOnHover: !1,
                looping: !0,
                autoPlay: !0,
                showDots: !0
            };
            var m = n(312);

            function f(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function g(e, t) {
                return (g = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var _ = function(e) {
                var t, n;

                function r(t) {
                    var n;
                    return (n = e.call(this, t) || this).state = {
                        position: 0,
                        isSliding: !1,
                        isShowArrows: !1
                    }, n.hideArrows = n.hideArrows.bind(f(n)), n.showArrows = n.showArrows.bind(f(n)), n.finishSliding = n.finishSliding.bind(f(n)), n.handleNextArrowClick = n.handleNextArrowClick.bind(f(n)), n.handlePrevArrowClick = n.handlePrevArrowClick.bind(f(n)), n.touchStart = n.touchStart.bind(f(n)), n.touchEnd = n.touchEnd.bind(f(n)), n.touchMove = n.touchMove.bind(f(n)), n.getFirstItemWidth = n.getFirstItemWidth.bind(f(n)), n._carousel = null, n._carouselItems = [], n._firstItemWidth = null, n._swipeStartX = null, n._swipeStartY = null, n._touchStarted = null, n
                }
                n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, g(t, n);
                var a = r.prototype;
                return a.componentWillUnmount = function() {
                    this._carousel = null, this._carouselItems = []
                }, a.componentDidMount = function() {
                    var e = this,
                        t = this.props,
                        n = t.numItemsPerRow,
                        r = t.focusIndex,
                        i = this.props.items ? this.props.items.length : 0;
                    if ("number" == typeof r) {
                        var o = Math.floor(r / n) * n,
                            a = Math.min(o, Math.max(i - Math.floor(n), 0));
                        this.setState({
                            position: a
                        }, (function() {
                            var t = e._carousel;
                            t && (t.style.transform = e.getCurrentCarouselTransform(a))
                        }))
                    }
                }, a.componentDidUpdate = function(e) {
                    var t = this;
                    if (e.numItemsPerRow !== this.props.numItemsPerRow) {
                        this._finishSlidingTimeout && clearTimeout(this._finishSlidingTimeout), this.setState({
                            isSliding: !0
                        });
                        var n = this._carousel,
                            r = this.state.position,
                            i = Math.max(0, Math.min(r, this.props.items.length - this.props.numItemsPerRow));
                        n && (n.style.transition = "0ms", n.style.transform = this.getCurrentCarouselTransform(i)), this._finishSlidingTimeout = setTimeout((function() {
                            t.finishSliding(i)
                        }), 0)
                    }
                }, a.renderDisplayedItems = function() {
                    var e = this,
                        t = this.props,
                        n = t.items,
                        r = t.isFluid,
                        a = t.padding,
                        s = t.distributeCardWidthWhenFewerItems,
                        l = t.numItemsPerRow,
                        u = n.length,
                        c = s && u < l ? 100 / u : 100 / l;
                    return n.map((function(t, n) {
                        return o.createElement("li", {
                            key: n,
                            className: i()("image-carousel__item", r && "image-carousel__item--fluid"),
                            style: {
                                padding: "0 " + a,
                                width: r ? null : c + "%"
                            },
                            ref: function(t) {
                                e._carouselItems[n] = t
                            }
                        }, t)
                    }))
                }, a.render = function() {
                    var e = this,
                        t = this.props,
                        n = t.items,
                        r = t.numItemsPerRow,
                        a = t.showArrowOnHover,
                        s = t.showArrowHint,
                        l = t.isFluid,
                        u = t.distributeCardWidthWhenFewerItems,
                        c = t.itemPadding,
                        h = t.className,
                        p = t.IconArrowLeft,
                        m = t.IconArrowRight,
                        f = t.arrowStyle,
                        g = this.state,
                        _ = g.isShowArrows,
                        v = g.position,
                        y = n.length,
                        w = y > r ? (u && y < r ? 100 / y : 100 / r) * y : 100,
                        b = this._carouselItems && this._carouselItems[this.state.position] ? this._carouselItems[this.state.position].getBoundingClientRect().width + "px" : null;
                    return o.createElement("div", {
                        className: i()("image-carousel", h),
                        onMouseEnter: this.showArrows,
                        onMouseLeave: this.hideArrows,
                        style: l ? {
                            width: b,
                            transition: this.props.transitionTime + "ms"
                        } : {}
                    }, o.createElement("div", {
                        className: i()("image-carousel__item-list-wrapper"),
                        onTouchEnd: this.touchEnd,
                        onTouchStart: this.touchStart,
                        onTouchMove: this.touchMove
                    }, o.createElement("ul", {
                        className: "image-carousel__item-list",
                        style: {
                            width: l ? null : w + "%",
                            transform: this.getCurrentCarouselTransform(v)
                        },
                        ref: function(t) {
                            return e._carousel = t
                        }
                    }, this.renderDisplayedItems())), o.createElement(d, {
                        direction: -1,
                        showArrowOnHover: a,
                        isVisible: y > r && v > 0,
                        isShown: _,
                        handleClick: this.handlePrevArrowClick,
                        showArrowHint: s,
                        padding: c,
                        IconArrow: p,
                        style: f
                    }), o.createElement(d, {
                        direction: 1,
                        showArrowOnHover: a,
                        isVisible: y > r && v + r < y,
                        isShown: _,
                        handleClick: this.handleNextArrowClick,
                        showArrowHint: s,
                        padding: c,
                        IconArrow: m,
                        style: f
                    }))
                }, a.getCurrentCarouselTransform = function(e) {
                    var t = this._carousel,
                        n = this._carouselItems;
                    if (!t) return "";
                    var r = 0;
                    return this.props.isFluid && n ? "translate(" + -(r = n.map((function(t, n) {
                        return t && n < e ? t.getBoundingClientRect().width : 0
                    })).reduce((function(e, t) {
                        return e + t
                    }), 0)) + "px, 0px)" : (t.firstElementChild && (r = t.firstElementChild.getBoundingClientRect().width), "translate(" + -e * r + "px, 0px)")
                }, a.touchMove = function(e) {
                    e.stopPropagation();
                    var t = this._carousel;
                    if (t && null !== this._swipeStartX && null !== this._swipeStartY) {
                        var n = this.getFirstItemWidth(),
                            r = -1 * this.state.position * n;
                        if (this._touchStarted) {
                            var i = e.changedTouches[0],
                                o = i.pageX - this._swipeStartX;
                            0 === this.state.position && (o = Math.min(o, 0)), this.state.position >= this.props.items.length - Math.floor(this.props.numItemsPerRow) && (o = Math.max(o, 0));
                            var a = i.pageY - this._swipeStartY;
                            Math.abs(o) > Math.abs(a) && Math.abs(o) > 3 && (t.style.transform = "translate(" + (r + o) + "px, 0px)")
                        }
                    }
                }, a.touchStart = function(e) {
                    e.stopPropagation(), this._swipeStartX = e.changedTouches[0].pageX, this._swipeStartY = e.changedTouches[0].pageY, this._touchStarted = !0
                }, a.touchEnd = function(e) {
                    var t = this;
                    if (e.stopPropagation(), this._touchStarted = !1, null !== this._swipeStartX && null !== this._swipeStartY) {
                        var n = e.changedTouches[0],
                            r = n.pageX - this._swipeStartX,
                            i = n.pageY - this._swipeStartY;
                        if (Math.abs(i) > Math.abs(r) || Math.abs(r) < 5) return this._swipeStartX = null, void(this._swipeStartY = null);
                        this._swipeStartX = null, this._swipeStartY = null, requestAnimationFrame((function() {
                            r < 0 ? t.handleNextArrowClick() : t.handlePrevArrowClick()
                        }))
                    }
                }, a.getFirstItemWidth = function() {
                    return null !== this._firstItemWidth ? this._firstItemWidth : this._carousel && this._carousel.firstElementChild ? (this._firstItemWidth = this._carousel.firstElementChild.getBoundingClientRect().width, this._firstItemWidth) : 0
                }, a.handlePrevArrowClick = function() {
                    var e = this.state.position,
                        t = 0;
                    this.props.keepPreviousItemOnSlide && (t = 1);
                    var n = this.props.slidesByOne ? Math.max(e - 1, 0) : Math.max(e - Math.ceil(this.props.numItemsPerRow) + t, 0);
                    this.slideTo(n)
                }, a.handleNextArrowClick = function() {
                    var e = this.props,
                        t = e.items,
                        n = e.numItemsPerRow,
                        r = e.slidesByOne,
                        i = t.length - Math.floor(n),
                        o = this.state.position,
                        a = 0;
                    this.props.keepPreviousItemOnSlide && (a = 1);
                    var s = r ? Math.min(o + 1, i) : Math.min(o + Math.ceil(n) - a, i);
                    this.slideTo(s)
                }, a.slideTo = function(e) {
                    var t = this;
                    if (!this.state.isSliding || this.props.isOverrideSliding) {
                        this._finishSlidingTimeout && clearTimeout(this._finishSlidingTimeout);
                        var n = this.props.transitionTime;
                        this.setState({
                            isSliding: !0
                        });
                        var r = this._carousel;
                        r && (r.style.transition = n + "ms", r.style.transform = this.getCurrentCarouselTransform(e)), "function" == typeof this.props.onSlide && this.props.onSlide(e), this.props.isOverrideSliding && this.setState({
                            position: e
                        }), this._finishSlidingTimeout = setTimeout((function() {
                            t.finishSliding(e)
                        }), n)
                    }
                }, a.finishSliding = function(e) {
                    this.setState({
                        isSliding: !1,
                        position: e
                    }), this._finishSlidingTimeout && clearTimeout(this._finishSlidingTimeout)
                }, a.showArrows = function() {
                    this.setState({
                        isShowArrows: !0
                    })
                }, a.hideArrows = function() {
                    this.setState({
                        isShowArrows: !1
                    })
                }, r
            }(o.Component);
            _.defaultProps = {
                transitionTime: 500,
                showArrowOnHover: !1,
                padding: (0, m.Z)(10),
                keepPreviousItemOnSlide: !0,
                showArrowHint: !1,
                isFluid: !1,
                isOverrideSliding: !1,
                slidesByOne: !1
            };
            n(58472);
            var v = n(40011),
                y = n(66156),
                w = n(9135);

            function b(e) {
                var t = e.Icon,
                    n = e.className;
                return a().createElement("div", {
                    className: i()("shopee-image-placeholder", n)
                }, t ? a().createElement(t, null) : a().createElement(w.Z, null))
            }
            var C = n(13384),
                I = n(2149),
                S = n(84571);

            function E(e, t) {
                return (E = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function k() {
                return (k = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var T = [a().createElement(b, {
                    key: 0
                }), a().createElement(b, {
                    key: 1
                })],
                P = function(e) {
                    return a().createElement(C.p, {
                        className: "full-home-banners__main-banner-image",
                        wrapperClassName: "full-home-banners__light-background",
                        isCovered: !0,
                        src: (0, v.R)(e, 3),
                        imageServerWidthOperator: 900
                    })
                },
                A = function(e) {
                    return a().createElement(C.p, {
                        className: "full-home-banners__right-banner-image",
                        wrapperClassName: "full-home-banners__full-height full-home-banners__light-background",
                        isCovered: !0,
                        src: (0, v.R)(e, 2),
                        imageServerWidthOperator: 600
                    })
                },
                O = function(e) {
                    var t, n;

                    function r() {
                        return e.apply(this, arguments) || this
                    }
                    n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, E(t, n);
                    var i = r.prototype;
                    return i.shouldComponentUpdate = function(e) {
                        return e.banners !== this.props.banners
                    }, i.render = function() {
                        var e = this.props.banners,
                            t = ne(e).map((function(t, n) {
                                return k({}, t, {
                                    data: e[n]
                                })
                            })),
                            n = t.slice(0, -2),
                            r = t.slice(-2),
                            i = r.map((function(e, t) {
                                switch (e.type) {
                                    case I.G.EXTERNAL:
                                        return a().createElement(S.LinkWithTrackImpression, {
                                            to: e.link,
                                            key: t,
                                            data: e,
                                            className: "full-home-banners__right-banner",
                                            location: t,
                                            targetType: "Banner",
                                            bannerUrl: e.url,
                                            target: "_blank",
                                            id: e.id
                                        }, A(e.image));
                                    case I.G.NONE:
                                        return a().createElement(S.LinkWithTrackImpression, {
                                            to: e.link,
                                            onClick: function(e) {
                                                return e.preventDefault()
                                            },
                                            key: t,
                                            data: e,
                                            className: "full-home-banners__right-banner",
                                            location: t,
                                            targetType: "Banner",
                                            bannerUrl: e.url,
                                            id: e.id
                                        }, A(e.image));
                                    default:
                                        return a().createElement(S.LinkWithTrackImpression, {
                                            to: e.link,
                                            key: t,
                                            data: e,
                                            id: e.id,
                                            className: "full-home-banners__right-banner",
                                            location: t,
                                            targetType: "Banner",
                                            bannerUrl: e.url
                                        }, A(e.image))
                                }
                            }));
                        return 1 === i.length && i.push(a().createElement(b, {
                            key: 1
                        })), a().createElement("div", {
                            className: "container"
                        }, a().createElement("div", {
                            className: "full-home-banners"
                        }, a().createElement("div", {
                            className: "full-home-banners__main-banner"
                        }, n.length > 0 ? function(e, t) {
                            var n = e.map((function(e, n) {
                                var r = {
                                    to: e.link,
                                    className: "full-home-banners__banner-image",
                                    targetType: "Banner",
                                    location: n + t,
                                    bannerUrl: e.url,
                                    key: n,
                                    data: e
                                };
                                switch (e.type) {
                                    case I.G.EXTERNAL:
                                        return a().createElement(S.LinkWithTrackImpression, k({}, r, {
                                            target: "_blank",
                                            rel: "noopener noreferrer"
                                        }), P(e.image));
                                    case I.G.NONE:
                                        return a().createElement(S.LinkWithTrackImpression, k({}, r, {
                                            onClick: function(e) {
                                                return e.preventDefault()
                                            }
                                        }), P(e.image));
                                    default:
                                        return a().createElement(S.LinkWithTrackImpression, r, P(e.image))
                                }
                            }));
                            return a().createElement(y.ZP, {
                                indexType: y.QV.DOTS,
                                arrowDisplayType: y.sP.SHOW_ON_HOVER,
                                looping: e.length > 1,
                                displayAllItemsOnInitialLoad: !1,
                                ratio: 796.67 / 235.02
                            }, n)
                        }(n, r.length) : a().createElement(b, null)), a().createElement("div", {
                            className: "full-home-banners__right-wrapper"
                        }, i.length ? i : T)))
                    }, r
                }(a().Component),
                x = (n(98341), n(6976)),
                N = n(95802),
                L = n(31474),
                R = n(47029),
                W = n(98466),
                D = {
                    list: "_2hR6ab",
                    twoRow: "_374MFs",
                    fiveColumn: "_2Czx7y",
                    fourColumn: "_3yVcWD",
                    circleItem: "_3tuiT8",
                    itemBannerImage: "MjGK8Q",
                    itemBannerImageTop: "_9D1-HY MjGK8Q",
                    itemBannerImageLeft: "_3JU_-3 MjGK8Q",
                    itemLabelText: "MWc1_R",
                    itemLabelTextBottom: "_2GYM92 MWc1_R",
                    itemLabelTextBottomTH: "_3LbyuX",
                    itemLabelTextRight: "_2eVEhB MWc1_R",
                    itemLabelTextRightContent: "_2lotJK",
                    squareItemImageWrapper: "_1RBcpk",
                    itemImageWrapper: "um7KUo",
                    itemImage: "_3fOtV7"
                };

            function M(e, t) {
                var n;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return j(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return j(e, t)
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

            function j(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var B = (0, x.of)(),
                H = (0, W.Z)((function(e) {
                    var t, n = e.banner_image,
                        r = e.banner_image_gif,
                        o = e.navigate_params,
                        s = e.count,
                        l = e.trackingClick,
                        u = e.trackingRef,
                        c = e.isSquareBanner,
                        h = o.url || "",
                        p = (0, I.e)(h).link,
                        d = o.navbar.title || {};
                    "string" == typeof d && (d = JSON.parse(d));
                    var m = function(e) {
                            var t = R.go[B];
                            if (e) {
                                for (var n, r = M(t); !(n = r()).done;) {
                                    var i = n.value;
                                    if (i in e) return e[i]
                                }
                                return "object" == typeof e ? e.default : ""
                            }
                            return ""
                        }(d),
                        f = c ? D.squareItemImageWrapper : D.itemImageWrapper;
                    return a().createElement(N.Z, {
                        to: p,
                        onClick: l,
                        _ref: u
                    }, a().createElement("div", {
                        style: 4 === s ? {} : {
                            width: s < 9 ? "150px" : "100px"
                        },
                        className: D.circleItem
                    }, a().createElement("div", {
                        className: 4 === s ? D.itemBannerImageLeft : D.itemBannerImageTop
                    }, a().createElement(L.Y, {
                        src: (0, v.R)(n, 2),
                        gifSrc: r && (0, v.R)(r, 2),
                        wrapperClassName: i()(f),
                        className: D.itemImage,
                        hidePlaceholder: !0
                    })), 4 === s ? a().createElement("div", {
                        className: D.itemLabelTextRight
                    }, a().createElement("div", {
                        className: D.itemLabelTextRightContent
                    }, m)) : a().createElement("div", {
                        className: i()(D.itemLabelTextBottom, (t = {}, t[D.itemLabelTextBottomTH] = "TH" === __LOCALE__, t))
                    }, m)))
                }), "HomeCircleItem");
            var X = n(56855),
                G = n(91208);

            function V() {
                return (V = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var Z = function(e) {
                    return {
                        additionalLayoutClass: e === G.V2.Tiny ? D.twoRow : ""
                    }
                },
                Y = function(e) {
                    var t = e.items,
                        n = e.isLoading,
                        r = e.isSquareBanner,
                        o = (0, G.uW)({
                            mapLayoutTypeToUsedLayoutValue: Z
                        }).layoutType,
                        s = a().useMemo((function() {
                            return o !== G.V2.Tiny || [4, 5, 6, 7].includes(t.length) ? [] : [8].includes(t.length) ? [D.twoRow, D.fourColumn] : [9, 10].includes(t.length) ? [D.twoRow, D.fiveColumn] : [D.twoRow]
                        }), [t.length, o]);
                    return n ? a().createElement("div", {
                        className: D.list
                    }) : t.length < 4 ? a().createElement(X.TimingBeacon, null) : a().createElement("div", {
                        className: i().apply(void 0, [D.list].concat(s))
                    }, a().createElement(X.TimingBeacon, null), t.map((function(e, n) {
                        return a().createElement(H, V({}, e, {
                            count: t.length,
                            key: n,
                            index: n,
                            isSquareBanner: r
                        }))
                    })))
                },
                U = n(17312),
                F = "FF7zTk",
                q = "_1R5f5Z";

            function K(e) {
                var t = e.image,
                    n = e.imageGif,
                    r = e.link,
                    i = e.location,
                    o = e.targetType,
                    s = e.id;
                return a().createElement(S.LinkWithTrackImpression, {
                    className: F,
                    to: r,
                    location: i,
                    targetType: o,
                    bannerUrl: r,
                    id: s
                }, n ? a().createElement("img", {
                    className: q,
                    src: (0, v.R)(n, 3),
                    alt: "home_popup_banner"
                }) : a().createElement(U.Z, {
                    className: q,
                    src: (0, v.R)(t, 3),
                    alt: "home_popup_banner",
                    imageServerWidthOperator: 435
                }))
            }
            var Q = n(73727);

            function z(e) {
                return {
                    backgroundImage: "url(" + e + ")"
                }
            }
            var J = (0, W.Z)((function(e) {
                    var t = e.banner,
                        n = e.trackingClick,
                        r = e.trackingRef;
                    switch (t.type) {
                        case I.G.EXTERNAL:
                            return a().createElement("a", {
                                ref: r,
                                className: "category-banners__banner-image",
                                href: t.link,
                                onClick: function(e) {
                                    n(), "#" === t.link && e.preventDefault()
                                },
                                target: "_blank",
                                rel: "noopener noreferrer",
                                style: z(t.image)
                            });
                        default:
                            return a().createElement(Q.Link, {
                                to: t.link,
                                className: "category-banners__banner-image",
                                onClick: function(e) {
                                    n(), "#" === t.link && e.preventDefault()
                                },
                                style: z(t.image)
                            }, a().createElement("div", {
                                ref: r,
                                className: "category-banners__banner-placeholder"
                            }))
                    }
                }), "CategoryBanner", {
                    reportOnce: !0
                }),
                $ = function(e) {
                    var t = ne(e.banners).map((function(e, t) {
                        return a().createElement(J, {
                            key: t,
                            banner: e,
                            index: t
                        })
                    }));
                    return a().createElement(h, {
                        banners: t,
                        isOnlyShowArrowOnHover: !0
                    })
                };

            function ee() {
                return (ee = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var te = [];

            function ne(e) {
                return e && e.length ? e.map(re).filter(Boolean) : te
            }

            function re(e) {
                var t = e.navigate_params,
                    n = e.banner_image,
                    r = e.banner_image_gif,
                    i = e.id;
                if (!t) return null;
                var o = t.url,
                    a = t.seo_url;
                return ee({}, (0, I.e)(a || o), {
                    image: n,
                    image_gif: r,
                    url: a || o,
                    id: i
                })
            }
        },
        40011: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return r
                }
            });
            var r = function(e, t) {
                var n = t || window.devicePixelRatio;
                return n ? e + function(e) {
                    return e <= 1 ? "_mdpi" : e <= 2 ? "_xhdpi" : e <= 3 ? "_xxhdpi" : ""
                }(n) : e
            }
        },
        66156: function(e, t, n) {
            "use strict";
            n.d(t, {
                sP: function() {
                    return d
                },
                QV: function() {
                    return m
                },
                ZP: function() {
                    return P
                }
            });
            var r = n(27378),
                i = n(60042),
                o = n.n(i),
                a = n(17626),
                s = n(1021),
                l = n.n(s),
                u = n(88133),
                c = n(41310);

            function h(e, t) {
                return (h = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var p = function(e) {
                    var t, n;

                    function i(t) {
                        var n;
                        return (n = e.call(this, t) || this).isDisabled = function() {
                            var e = n.props,
                                t = e.looping,
                                r = e.direction,
                                i = e.activeIndex,
                                o = e.childrenCount;
                            if (t) return !1;
                            var a = i + r;
                            return a < 0 || a >= o
                        }, n.onClick = function(e) {
                            if (e.preventDefault(), !n.isDisabled()) {
                                var t = n.props,
                                    r = t.direction,
                                    i = t.activeIndex;
                                n.props.onClick(i + r)
                            }
                        }, n
                    }
                    return n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, h(t, n), i.prototype.render = function() {
                        var e = this.props,
                            t = e.direction,
                            n = e.arrowDisplayType,
                            i = e.forceHidden;
                        return r.createElement("div", {
                            className: o()("stardust-carousel__arrow", "stardust-carousel__arrow--type-" + n, i ? "stardust-carousel__arrow--hidden" : null, "stardust-carousel__arrow--" + (t < 0 ? "prev" : "next"), this.isDisabled() ? "stardust-carousel__arrow--disabled" : null),
                            onClick: this.onClick
                        }, t < 0 ? r.createElement(u.Z, null) : r.createElement(c.Z, null))
                    }, i
                }(r.PureComponent),
                d = {
                    HIDDEN: 0,
                    SHOW_ON_HOVER: 1,
                    SHOW_ALWAYS: 2
                },
                m = {
                    NONE: 0,
                    DOTS: 1,
                    INDEX: 2,
                    TABS: 3
                },
                f = 1,
                g = -1;
            var _ = function(e) {
                var t = e.arrowDisplayType,
                    n = e.looping,
                    i = e.activeIndex,
                    o = e.childrenCount,
                    a = e.onArrowClicked;
                if (t === d.HIDDEN) return null;
                var s = !1,
                    l = !1;
                return t === d.SHOW_ON_HOVER && (s = o <= 1 || !n && i <= 0, l = o <= 1 || !n && i >= o - 1), r.createElement(r.Fragment, null, r.createElement(p, {
                    direction: g,
                    arrowDisplayType: t,
                    activeIndex: i,
                    childrenCount: o,
                    forceHidden: s,
                    looping: n,
                    onClick: a
                }), r.createElement(p, {
                    direction: f,
                    arrowDisplayType: t,
                    activeIndex: i,
                    childrenCount: o,
                    forceHidden: l,
                    looping: n,
                    onClick: a
                }))
            };

            function v(e, t) {
                return (v = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var y = function(e) {
                var t, n;

                function i(t) {
                    var n;
                    return (n = e.call(this, t) || this).onClick = function(e) {
                        e.preventDefault(), n.props.onClick(n.props.index)
                    }, n
                }
                return n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, v(t, n), i.prototype.render = function() {
                    var e = this.props.isActive;
                    return r.createElement("div", {
                        className: o()("stardust-carousel__dot", {
                            "stardust-carousel__dot--active": e
                        }),
                        onClick: this.onClick
                    })
                }, i
            }(r.PureComponent);
            var w = function(e) {
                var t = e.looping,
                    n = e.activeIndex,
                    i = e.childrenCount,
                    o = e.onDotClicked;
                return i <= 1 ? null : r.createElement("div", {
                    className: "stardust-carousel__dots"
                }, Array(i).fill(0).map((function(e, i) {
                    return r.createElement(y, {
                        key: i,
                        index: t ? i + 1 : i,
                        onClick: o,
                        isActive: t ? n === i + 1 : n === i
                    })
                })))
            };
            var b = function(e) {
                var t = e.activeChildrenIndex,
                    n = e.childrenCount;
                return r.createElement("div", {
                    className: "stardust-carousel__indexing"
                }, t + 1 + "/" + n)
            };

            function C(e, t) {
                return (C = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var I = function(e) {
                var t, n;

                function i(t) {
                    var n;
                    return (n = e.call(this, t) || this).onClick = function(e) {
                        e.preventDefault(), n.props.onClick(n.props.index)
                    }, n
                }
                return n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, C(t, n), i.prototype.render = function() {
                    var e = this.props,
                        t = e.name,
                        n = e.isActive;
                    return r.createElement("div", {
                        className: o()("stardust-carousel__tab", {
                            "stardust-carousel__tab--active": n
                        }),
                        onClick: this.onClick
                    }, r.createElement("span", {
                        className: "stardust-carousel__tab-name"
                    }, t))
                }, i
            }(r.PureComponent);
            var S = function(e) {
                var t = e.looping,
                    n = e.onTabClicked,
                    i = e.childrenCount,
                    o = e.activeIndex,
                    a = e.tabNames;
                return l()(a.length === i, "[Carousel]", "[SCWARN006]", "The given props.tabNames length does not correspond to number of children"), r.createElement("div", {
                    className: "stardust-carousel__tabs"
                }, Array(i).fill(0).map((function(e, i) {
                    return r.createElement(I, {
                        key: i,
                        index: t ? i + 1 : i,
                        onClick: n,
                        isActive: t ? o === i + 1 : o === i,
                        name: a[i]
                    })
                })))
            };

            function E(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function k(e, t) {
                return (k = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var T = function(e) {
                var t, n;

                function i(t) {
                    var n, i;
                    return (i = e.call(this, t) || this).direction = f, i.isSwiping = !1, i._finalChildren = null, i._carouselItemListWidth = null, i.__reflowCount = 0, i._swipeStartX = 0, i._swipeStartY = 0, i._swipeVx = 0, i._swipeLastX = 0, i._swipeStarted = !1, i._swipeMoved = !1, i._autoPlayId = null, i._transitionTimeoutId = null, i._slideId = null, i._calculateItemListWidthIdleCallbackId = null, i.reportCarouselPosition = function(e, t, n) {
                        if (t) {
                            var r = i.getCarouselItemListWidth();
                            "function" == typeof i.props.carouselPositionListener && i.props.carouselPositionListener(e - t / r, n)
                        } else "function" == typeof i.props.carouselPositionListener && i.props.carouselPositionListener(e, n)
                    }, i.handleSwipeStart = function(e) {
                        i.childrenCount <= 1 || (e.stopPropagation(), i._swipeStartX = e.changedTouches[0].pageX, i._swipeStartY = e.changedTouches[0].pageY, i._swipeVx = 0, i._swipeLastX = i._swipeStartX, i._swipeStarted = !0, i._swipeMoved = !1)
                    }, i.handleSwipeMove = function(e) {
                        if (i._swipeStarted) {
                            var t = e.changedTouches[0].pageX,
                                n = e.changedTouches[0].pageY,
                                r = t - i._swipeStartX;
                            if (e.stopPropagation(), !i._swipeMoved) {
                                var o = n - i._swipeStartY;
                                i.isSwiping = Math.abs(r) > Math.abs(o) && Math.abs(r) > 3, (i.isSwiping || Math.abs(o) > 3) && (i._swipeMoved = !0, i._swipeStartX = t, r = t - i._swipeStartX)
                            }
                            i.isSwiping && (i.animateCarousel(i.state.activeIndex, r), i._swipeVx = .5 * i._swipeVx + .5 * (t - i._swipeLastX), i._swipeLastX = t)
                        }
                    }, i.handleSwipeEnd = function(e) {
                        var t = i.props,
                            n = t.onChangeIndex,
                            r = t.looping;
                        if (i._swipeStarted && i.isSwiping) {
                            i._swipeStarted = !1, i._swipeMoved = !1, i.isSwiping = !1, e.stopPropagation();
                            var o = e.changedTouches[0].pageX - i._swipeStartX,
                                a = i.state.activeIndex;
                            Math.abs(i._swipeVx) > 5 ? i._swipeVx > 0 ? a -= 1 : a += 1 : o > .5 * i.getCarouselItemListWidth() ? a -= 1 : o < .5 * -i.getCarouselItemListWidth() && (a += 1), r || (a < 0 || a >= i.childrenCount) && (a = i.state.activeIndex), i.animateCarousel(a, 0, 100), a !== i.state.activeIndex && ("function" == typeof n && n(i.getItemIndex(a)), i._transitionTimeoutId = setTimeout((function() {
                                i.handleSlideEnd(a)
                            }), 100))
                        }
                    }, i.getCarouselItemListWidth = function() {
                        return i.__reflowCount > 0 && l()(null != i._carouselItemListWidth, "[Carousel] [SCWARN004] Expensive DOM operation (reflow) is about to occur again. Reflow count so far: " + i.__reflowCount), null == i._carouselItemListWidth && i._carouselItemListRef.current && i._carouselItemListRef.current.firstElementChild && i._carouselItemListRef.current.firstElementChild instanceof HTMLElement && (i._carouselItemListWidth = i._carouselItemListRef.current.firstElementChild.getBoundingClientRect().width, i.__reflowCount += 1), l()(null != i._carouselItemListWidth, "[Carousel] [SCWARN005] carouselItemListWidth is still falsy, casting to 0"), i._carouselItemListWidth || 0
                    }, i.getItemListWrapperStyle = function() {
                        return {
                            paddingTop: 1 / i.props.ratio * 100 + "%"
                        }
                    }, i.getItemListStyle = function() {
                        return {
                            width: 100 * (i.props.looping ? i.childrenCount + 2 : i.childrenCount) + "%"
                        }
                    }, i.getItemWidthPercentage = function() {
                        return 100 / (i.props.looping ? i.childrenCount + 2 : i.childrenCount)
                    }, i.getItemStyle = function() {
                        return {
                            width: i.getItemWidthPercentage() + "%"
                        }
                    }, i.isItemInnerWrapperHidden = function(e) {
                        return !(i.props.displayAllItemsOnInitialLoad || !i._isChildDisplayed[e]) && e !== i.state.activeIndex
                    }, i.animateCarousel = function(e, t, n) {
                        void 0 === t && (t = 0), void 0 === n && (n = 0);
                        var r = i._carouselItemListRef.current;
                        if (r) {
                            r.style.transition = n + "ms";
                            var o = i.getCurrentCarouselTransform(e, t);
                            r.style.webkitTransform = o, r.style.transform = o, i.reportCarouselPosition(e, t, n)
                        }
                    }, i.renewAutoPlay = function() {
                        i.stopAutoPlay(), i._autoPlayId = setTimeout(i.requestIdleCallbackSlide, i.props.autoPlayDelay)
                    }, i.stopAutoPlay = function() {
                        i._autoPlayId && clearTimeout(i._autoPlayId)
                    }, i.requestIdleCallbackSlide = function(e) {
                        void 0 === e && (e = i.state.activeIndex + 1), i._slideId && (0, a.G)(i._slideId), i._slideId = (0, a.K)((function() {
                            return i.slide(e, {
                                fromAutoPlay: !0
                            })
                        }), {
                            timeout: 2e3
                        })
                    }, i.slide = function(e, t) {
                        var n = void 0 === t ? {
                                skipAnimation: !1,
                                fromAutoPlay: !1
                            } : t,
                            r = n.skipAnimation,
                            o = n.fromAutoPlay,
                            a = i.state.activeIndex,
                            s = i.props,
                            l = s.autoPlay,
                            u = s.looping,
                            c = s.onChangeIndex,
                            h = s.transitionTime,
                            p = e;
                        l && !u && o && (i.direction === f && a >= i.childrenCount - 1 ? i.direction = g : i.direction === g && a <= 0 && (i.direction = f), p = a + i.direction), i.childrenCount <= 1 || p !== a && (i.state.isSliding || (i._isChildDisplayed[p] || (i._isChildDisplayed[p] = !0), "function" == typeof c && c(i.getItemIndex(p)), i.setState({
                            isSliding: !0
                        }), i.animateCarousel(p, 0, r ? 0 : h), i._transitionTimeoutId = setTimeout((function() {
                            i.handleSlideEnd(p)
                        }), r ? 0 : h)))
                    }, i.handleSlideEnd = function(e) {
                        var t = e;
                        i._transitionTimeoutId = null, i.props.looping && (0 === t ? (t = i.childrenCount, i.animateCarousel(t)) : t === i.childrenCount + 1 && (t = 1, i.animateCarousel(t))), i.props.autoPlay && i.renewAutoPlay(), i.setState({
                            isSliding: !1,
                            activeIndex: t
                        })
                    }, i.childrenCount = r.Children.count(i.props.children), l()(i.childrenCount > 0, "[Carousel] [SCWARN001] Empty children!"), l()(i.props.ratio > 0, "[Carousel] [SCWARN002] Ratio prop is required!"), l()(i.props.indexType !== m.TABS || Array.isArray(i.props.tabNames), "[Carousel] [SCWARN003] tabNames prop is required when indexType=tabs!"), i.state = {
                        activeIndex: Math.min(i.props.startingIndex, i.childrenCount ? i.childrenCount - 1 : 0) + (i.props.looping ? 1 : 0),
                        isSliding: !1
                    }, i._isChildDisplayed = ((n = {})[i.state.activeIndex] = !0, n), i._carouselRef = r.createRef(), i._carouselItemListRef = r.createRef(), i
                }
                n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, k(t, n);
                var s, u, c, h = i.prototype;
                return h.componentDidMount = function() {
                    var e = this,
                        t = this.state.activeIndex,
                        n = this.props,
                        r = n.onChangeIndex;
                    n.autoPlay ? ("function" == typeof r && r(this.getItemIndex(t)), this.animateCarousel(t), this.renewAutoPlay()) : (this.handleSlideEnd(t), this.animateCarousel(t)), this._calculateItemListWidthIdleCallbackId = (0, a.K)((function() {
                        e.getCarouselItemListWidth()
                    }), {
                        timeout: 3e4
                    }), this._carouselRef.current && this._carouselRef.current.addEventListener("touchmove", this.handleSwipeMove, {
                        passive: !1
                    })
                }, h.componentWillUnmount = function() {
                    this.__reflowCount = 0, this.props.autoPlay && this.stopAutoPlay(), this._transitionTimeoutId && clearTimeout(this._transitionTimeoutId), this._slideId && (0, a.G)(this._slideId), this._calculateItemListWidthIdleCallbackId && (0, a.G)(this._calculateItemListWidthIdleCallbackId), this._carouselRef.current && this._carouselRef.current.removeEventListener("touchmove", this.handleSwipeMove, {
                        passive: !1
                    })
                }, h.componentDidUpdate = function(e) {
                    e.autoPlay && !this.props.autoPlay ? this.stopAutoPlay() : !e.autoPlay && this.props.autoPlay && this.renewAutoPlay(), e.children === this.props.children && this.childrenCount === r.Children.count(this.props.children) || (this._finalChildren = null, this.childrenCount = r.Children.count(this.props.children), this.forceUpdate(), this.props.autoPlay && this.renewAutoPlay())
                }, h.getCurrentCarouselTransform = function(e, t) {
                    return void 0 === t && (t = 0), this._carouselItemListRef.current ? "translateX(" + -e * this.getItemWidthPercentage() + "%) translateX(" + t + "px)" : ""
                }, h.getItemIndex = function(e) {
                    return this.props.looping ? (e - 1 + this.childrenCount) % this.childrenCount : e
                }, h.render = function() {
                    var e = this,
                        t = this.props,
                        n = t.className,
                        i = t.tabNames,
                        a = t.arrowDisplayType,
                        s = t.looping,
                        l = t.indexType,
                        u = this.state.activeIndex,
                        c = this.getItemListWrapperStyle(),
                        h = this.getItemListStyle(),
                        p = this.getItemStyle();
                    return r.createElement("div", {
                        className: o()("stardust-carousel", n),
                        onTouchStart: this.handleSwipeStart,
                        onTouchEnd: this.handleSwipeEnd,
                        ref: this._carouselRef
                    }, r.createElement("div", {
                        className: "stardust-carousel__item-list-wrapper",
                        style: c
                    }, r.createElement("ul", {
                        className: "stardust-carousel__item-list",
                        style: h,
                        ref: this._carouselItemListRef
                    }, this.finalChildren.map((function(t, n) {
                        return r.createElement("li", {
                            className: "stardust-carousel__item",
                            key: n,
                            style: p
                        }, r.createElement("div", {
                            className: o()("stardust-carousel__item-inner-wrapper", e.isItemInnerWrapperHidden(n) && "stardust-carousel__item-inner-wrapper--hide")
                        }, t))
                    })))), r.createElement(_, {
                        arrowDisplayType: a,
                        activeIndex: u,
                        childrenCount: this.childrenCount,
                        looping: s,
                        onArrowClicked: this.slide
                    }), l === m.DOTS ? r.createElement(w, {
                        looping: s,
                        activeIndex: u,
                        childrenCount: this.childrenCount,
                        onDotClicked: this.slide
                    }) : null, l === m.INDEX ? r.createElement(b, {
                        activeChildrenIndex: s ? u - 1 : u,
                        childrenCount: this.childrenCount
                    }) : null, l === m.TABS && i ? r.createElement(S, {
                        looping: s,
                        activeIndex: u,
                        childrenCount: this.childrenCount,
                        onTabClicked: this.slide,
                        tabNames: i
                    }) : null)
                }, s = i, (u = [{
                    key: "finalChildren",
                    get: function() {
                        var e = this.props,
                            t = e.children,
                            n = e.looping;
                        if (this._finalChildren) return this._finalChildren;
                        var i = r.Children.toArray(t);
                        return n && i.length > 0 && (i.unshift(i[i.length - 1]), i.push(i[1])), this._finalChildren = i, i
                    }
                }]) && E(s.prototype, u), c && E(s, c), i
            }(r.Component);
            T.defaultProps = {
                transitionTime: 500,
                arrowDisplayType: d.SHOW_ON_HOVER,
                indexType: m.NONE,
                looping: !0,
                startingIndex: 0,
                autoPlay: !0,
                autoPlayDelay: 5e3,
                displayAllItemsOnInitialLoad: !1
            };
            var P = T
        },
        88133: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return l
                }
            });
            var r = n(88289),
                i = n(27378),
                o = n.n(i);

            function a() {
                return (a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var s = function(e) {
                    return o().createElement("svg", a({
                        enableBackground: "new 0 0 13 20",
                        viewBox: "0 0 13 20"
                    }, e), o().createElement("path", {
                        stroke: "none",
                        d: "m4.2 10l7.9-7.9-2.1-2.2-9 9-1.1 1.1 1.1 1 9 9 2.1-2.1z"
                    }))
                },
                l = (0, r.Z)(s, "arrow-left-bold")
        },
        41310: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return l
                }
            });
            var r = n(88289),
                i = n(27378),
                o = n.n(i);

            function a() {
                return (a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var s = function(e) {
                    return o().createElement("svg", a({
                        enableBackground: "new 0 0 13 21",
                        viewBox: "0 0 13 21"
                    }, e), o().createElement("path", {
                        stroke: "none",
                        d: "m11.1 9.9l-9-9-2.2 2.2 8 7.9-8 7.9 2.2 2.1 9-9 1-1z"
                    }))
                },
                l = (0, r.Z)(s, "arrow-right-bold")
        },
        31474: function(e, t, n) {
            "use strict";
            n.d(t, {
                Y: function() {
                    return l
                }
            });
            var r = n(27378),
                i = n.n(r),
                o = n(13384);

            function a() {
                return (a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function s(e, t) {
                return (s = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var l = function(e) {
                var t, n;

                function r(t) {
                    var n;
                    return (n = e.call(this, t) || this)._callbackId = null, n.prepareLoadingGif = function() {
                        "string" == typeof n.props.gifSrc && (n._callbackId = self.requestIdleCallback(n.startLoadingGif, {
                            timeout: 5e3
                        }))
                    }, n.startLoadingGif = function() {
                        var e = n.props.gifSrc;
                        if ("string" == typeof e) {
                            var t = new Image(0, 0);
                            "decode" in t ? (t.src = e, t.decode().then(n.handleGifLoaded).catch(n.handleGifError)) : (t.onload = n.handleGifLoaded, t.onerror = n.handleGifError, t.src = e)
                        }
                    }, n.handleGifLoaded = function() {
                        var e = n.props.gifSrc;
                        n.setState({
                            currentSrc: e,
                            isGifLoaded: !0
                        })
                    }, n.handleGifError = function(e) {}, n.state = {
                        currentSrc: n.props.src,
                        isGifLoaded: !1
                    }, n._callbackId = null, n
                }
                n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, s(t, n);
                var l = r.prototype;
                return l.componentWillUnmount = function() {
                    null != this._callbackId && self.cancelIdleCallback(this._callbackId)
                }, l.render = function() {
                    var e = this.props,
                        t = (e.src, e.gifSrc, function(e, t) {
                            if (null == e) return {};
                            var n, r, i = {},
                                o = Object.keys(e);
                            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i
                        }(e, ["src", "gifSrc"])),
                        n = this.state,
                        r = n.currentSrc,
                        s = n.isGifLoaded;
                    return i().createElement(o.p, a({}, t, {
                        src: r,
                        onImageReady: this.prepareLoadingGif,
                        imageServerIsSrcGif: s
                    }))
                }, r
            }(i().Component)
        },
        54166: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return l
                }
            });
            var r = n(53713),
                i = n(27378),
                o = n.n(i);

            function a() {
                return (a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var s = function(e) {
                    return o().createElement("svg", a({
                        enableBackground: "new 0 0 13 20",
                        viewBox: "0 0 13 20",
                        x: "0",
                        y: "0"
                    }, e), o().createElement("polygon", {
                        points: "4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9"
                    }))
                },
                l = (0, r.Z)({
                    Icon: s,
                    iconClassNames: ["icon-arrow-left-bold"]
                })
        },
        67062: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return l
                }
            });
            var r = n(53713),
                i = n(27378),
                o = n.n(i);

            function a() {
                return (a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var s = function(e) {
                    return o().createElement("svg", a({
                        enableBackground: "new 0 0 13 21",
                        viewBox: "0 0 13 21",
                        x: "0",
                        y: "0"
                    }, e), o().createElement("polygon", {
                        points: "11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11"
                    }))
                },
                l = (0, r.Z)({
                    Icon: s,
                    iconClassNames: ["icon-arrow-right-bold"]
                })
        }
    }
]);
//# sourceMappingURL=https://shopee.sg/assets/8013.176cb14f682e9f42e546.js.map