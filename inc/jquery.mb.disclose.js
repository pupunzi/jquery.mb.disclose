/*
 * ******************************************************************************
 *  jquery.mb.components
 *  file: jquery.mb.disclose.js
 *
 *  Copyright (c) 2001-2014. Matteo Bicocchi (Pupunzi);
 *  Open lab srl, Firenze - Italy
 *  email: matbicoc@gmail.com
 *  site: 	http://pupunzi.com
 *  blog:	http://pupunzi.open-lab.com
 * 	http://open-lab.com
 *
 *  Licences: MIT, GPL
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 *  last modified: 27/01/14 20.03
 *  *****************************************************************************
 */

/*Browser detection patch*/
var nAgt = navigator.userAgent
if (!jQuery.browser) {
	jQuery.browser = {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.msie = !1, jQuery.browser.ua = nAgt, jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = '' + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)
	var nameOffset, verOffset, ix
	if (-1 != (verOffset = nAgt.indexOf('Opera'))) jQuery.browser.opera = !0, jQuery.browser.name = 'Opera', jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf('Version')) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))
	else if (-1 != (verOffset = nAgt.indexOf('OPR'))) jQuery.browser.opera = !0, jQuery.browser.name = 'Opera', jQuery.browser.fullVersion = nAgt.substring(verOffset + 4)
	else if (-1 != (verOffset = nAgt.indexOf('MSIE'))) jQuery.browser.msie = !0, jQuery.browser.name = 'Microsoft Internet Explorer', jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)
		else if (-1 != nAgt.indexOf('Trident')) {
				jQuery.browser.msie = !0, jQuery.browser.name = 'Microsoft Internet Explorer'
				var start = nAgt.indexOf('rv:') + 3, end = start + 4
				jQuery.browser.fullVersion = nAgt.substring(start, end)
			} else -1 != (verOffset = nAgt.indexOf('Chrome')) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = 'Chrome', jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf('Safari')) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = 'Safari', jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf('Version')) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf('AppleWebkit')) ? (jQuery.browser.webkit = !0, jQuery.browser.name = 'Safari', jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf('Version')) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf('Firefox')) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = 'Firefox', jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/')) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName))
			  - 1 != (ix = jQuery.browser.fullVersion.indexOf(';')) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(' ')) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt('' + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = '' + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion
}
jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && jQuery(window).width() > 765, jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt)

/*******************************************************************************
 * jQuery.mb.components: jquery.mb.CSSAnimate
 ******************************************************************************/

function uncamel(a) {
	return a.replace(/([A-Z])/g, function (a) {
		return '-' + a.toLowerCase()
	})
}

function setUnit(a, b) {
	return 'string' != typeof a || a.match(/^[\-0-9\.]+jQuery/) ? '' + a + b : a
}

function setFilter(a, b, c) {
	let d = uncamel(b), e = jQuery.browser.mozilla ? '' : jQuery.CSS.sfx
	// var d = uncamel(b), e = jQuery.CSS.sfx
	a[e + 'filter'] = a[e + 'filter'] || '', c = setUnit(c > jQuery.CSS.filters[b].max ? jQuery.CSS.filters[b].max : c, jQuery.CSS.filters[b].unit), a[e + 'filter'] += d + '(' + c + ') ', delete a[b]
}

jQuery.support.CSStransition = function () {
	var a = document.body || document.documentElement, b = a.style
	return void 0 !== b.transition || void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.MsTransition || void 0 !== b.OTransition
}(), jQuery.CSS = {
	name: 'mb.CSSAnimate',
	author: 'Matteo Bicocchi',
	version: '2.0.0',
	transitionEnd: 'transitionEnd',
	sfx: '',
	filters: {
		blur: {min: 0, max: 100, unit: 'px'},
		brightness: {min: 0, max: 400, unit: '%'},
		contrast: {min: 0, max: 400, unit: '%'},
		grayscale: {min: 0, max: 100, unit: '%'},
		hueRotate: {min: 0, max: 360, unit: 'deg'},
		invert: {min: 0, max: 100, unit: '%'},
		saturate: {min: 0, max: 400, unit: '%'},
		sepia: {min: 0, max: 100, unit: '%'}
	},
	normalizeCss: function (a) {
		var b = jQuery.extend(!0, {}, a)
		jQuery.browser.webkit || jQuery.browser.opera ? jQuery.CSS.sfx = '-webkit-' : jQuery.browser.mozilla ? jQuery.CSS.sfx = '-moz-' : jQuery.browser.msie && (jQuery.CSS.sfx = '-ms-')
		// jQuery.CSS.sfx = "";

		for (var c in b) {
			'transform' === c && (b[jQuery.CSS.sfx + 'transform'] = b[c], delete b[c]), 'transform-origin' === c && (b[jQuery.CSS.sfx + 'transform-origin'] = a[c], delete b[c]), 'filter' !== c || jQuery.browser.mozilla || (b[jQuery.CSS.sfx + 'filter'] = a[c], delete b[c]), 'blur' === c && setFilter(b, 'blur', a[c]), 'brightness' === c && setFilter(b, 'brightness', a[c]), 'contrast' === c && setFilter(b, 'contrast', a[c]), 'grayscale' === c && setFilter(b, 'grayscale', a[c]), 'hueRotate' === c && setFilter(b, 'hueRotate', a[c]), 'invert' === c && setFilter(b, 'invert', a[c]), 'saturate' === c && setFilter(b, 'saturate', a[c]), 'sepia' === c && setFilter(b, 'sepia', a[c])
			var d = ''
			'x' === c && (d = jQuery.CSS.sfx + 'transform', b[d] = b[d] || '', b[d] += ' translateX(' + setUnit(a[c], 'px') + ')', delete b[c]), 'y' === c && (d = jQuery.CSS.sfx + 'transform', b[d] = b[d] || '', b[d] += ' translateY(' + setUnit(a[c], 'px') + ')', delete b[c]), 'z' === c && (d = jQuery.CSS.sfx + 'transform', b[d] = b[d] || '', b[d] += ' translateZ(' + setUnit(a[c], 'px') + ')', delete b[c]), 'rotate' === c && (d = jQuery.CSS.sfx + 'transform', b[d] = b[d] || '', b[d] += ' rotate(' + setUnit(a[c], 'deg') + ')', delete b[c]), 'rotateX' === c && (d = jQuery.CSS.sfx + 'transform', b[d] = b[d] || '', b[d] += ' rotateX(' + setUnit(a[c], 'deg') + ')', delete b[c]), 'rotateY' === c && (d = jQuery.CSS.sfx + 'transform', b[d] = b[d] || '', b[d] += ' rotateY(' + setUnit(a[c], 'deg') + ')', delete b[c]), 'rotateZ' === c && (d = jQuery.CSS.sfx + 'transform', b[d] = b[d] || '', b[d] += ' rotateZ(' + setUnit(a[c], 'deg') + ')', delete b[c]), 'scale' === c && (d = jQuery.CSS.sfx + 'transform', b[d] = b[d] || '', b[d] += ' scale(' + setUnit(a[c], '') + ')', delete b[c]), 'scaleX' === c && (d = jQuery.CSS.sfx + 'transform', b[d] = b[d] || '', b[d] += ' scaleX(' + setUnit(a[c], '') + ')', delete b[c]), 'scaleY' === c && (d = jQuery.CSS.sfx + 'transform', b[d] = b[d] || '', b[d] += ' scaleY(' + setUnit(a[c], '') + ')', delete b[c]), 'scaleZ' === c && (d = jQuery.CSS.sfx + 'transform', b[d] = b[d] || '', b[d] += ' scaleZ(' + setUnit(a[c], '') + ')', delete b[c]), 'skew' === c && (d = jQuery.CSS.sfx + 'transform', b[d] = b[d] || '', b[d] += ' skew(' + setUnit(a[c], 'deg') + ')', delete b[c]), 'skewX' === c && (d = jQuery.CSS.sfx + 'transform', b[d] = b[d] || '', b[d] += ' skewX(' + setUnit(a[c], 'deg') + ')', delete b[c]), 'skewY' === c && (d = jQuery.CSS.sfx + 'transform', b[d] = b[d] || '', b[d] += ' skewY(' + setUnit(a[c], 'deg') + ')', delete b[c]), 'perspective' === c && (d = jQuery.CSS.sfx + 'transform', b[d] = b[d] || '', b[d] += ' perspective(' + setUnit(a[c], 'px') + ')', delete b[c])
		}
		return b
	},
	getProp: function (a) {
		var b = []
		for (var c in a) b.indexOf(c) < 0 && b.push(uncamel(c))
		return b.join(',')
	},
	animate: function (a, b, c, d, e) {
		return this.each(function () {
			function o() {
				f.called = !0, f.CSSAIsRunning = !1, g.off(jQuery.CSS.transitionEnd + '.' + f.id), clearTimeout(f.timeout), g.css(jQuery.CSS.sfx + 'transition', ''), 'function' == typeof e && e.apply(f), 'function' == typeof f.CSSqueue && (f.CSSqueue(), f.CSSqueue = null)
			}

			var f = this, g = jQuery(this)
			f.id = f.id || 'CSSA_' + (new Date).getTime()
			var h = h || {type: 'noEvent'}
			if (f.CSSAIsRunning && f.eventType == h.type && !jQuery.browser.msie && jQuery.browser.version <= 9) return f.CSSqueue = function () {
				g.CSSAnimate(a, b, c, d, e)
			}, void 0
			if (f.CSSqueue = null, f.eventType = h.type, 0 !== g.length && a) {
				if (a = jQuery.normalizeCss(a), f.CSSAIsRunning = !0, 'function' == typeof b && (e = b, b = jQuery.fx.speeds._default), 'function' == typeof c && (d = c, c = 0), 'string' == typeof c && (e = c, c = 0), 'function' == typeof d && (e = d, d = 'cubic-bezier(0.65,0.03,0.36,0.72)'), 'string' == typeof b) for (var i in jQuery.fx.speeds) {
					if (b == i) {
						b = jQuery.fx.speeds[i]
						break
					}
					b = jQuery.fx.speeds._default
				}
				if (b || (b = jQuery.fx.speeds._default), 'string' == typeof e && (d = e, e = null), !jQuery.support.CSStransition) {
					for (var j in a) {
						if ('transform' === j && delete a[j], 'filter' === j && delete a[j], 'transform-origin' === j && delete a[j], 'auto' === a[j] && delete a[j], 'x' === j) {
							var k = a[j], l = 'left'
							a[l] = k, delete a[j]
						}
						if ('y' === j) {
							var k = a[j], l = 'top'
							a[l] = k, delete a[j]
						}
						('-ms-transform' === j || '-ms-filter' === j) && delete a[j]
					}
					return g.delay(c).animate(a, b, e), void 0
				}
				var m = {
					'default': 'ease',
					'in': 'ease-in',
					out: 'ease-out',
					'in-out': 'ease-in-out',
					snap: 'cubic-bezier(0,1,.5,1)',
					easeOutCubic: 'cubic-bezier(.215,.61,.355,1)',
					easeInOutCubic: 'cubic-bezier(.645,.045,.355,1)',
					easeInCirc: 'cubic-bezier(.6,.04,.98,.335)',
					easeOutCirc: 'cubic-bezier(.075,.82,.165,1)',
					easeInOutCirc: 'cubic-bezier(.785,.135,.15,.86)',
					easeInExpo: 'cubic-bezier(.95,.05,.795,.035)',
					easeOutExpo: 'cubic-bezier(.19,1,.22,1)',
					easeInOutExpo: 'cubic-bezier(1,0,0,1)',
					easeInQuad: 'cubic-bezier(.55,.085,.68,.53)',
					easeOutQuad: 'cubic-bezier(.25,.46,.45,.94)',
					easeInOutQuad: 'cubic-bezier(.455,.03,.515,.955)',
					easeInQuart: 'cubic-bezier(.895,.03,.685,.22)',
					easeOutQuart: 'cubic-bezier(.165,.84,.44,1)',
					easeInOutQuart: 'cubic-bezier(.77,0,.175,1)',
					easeInQuint: 'cubic-bezier(.755,.05,.855,.06)',
					easeOutQuint: 'cubic-bezier(.23,1,.32,1)',
					easeInOutQuint: 'cubic-bezier(.86,0,.07,1)',
					easeInSine: 'cubic-bezier(.47,0,.745,.715)',
					easeOutSine: 'cubic-bezier(.39,.575,.565,1)',
					easeInOutSine: 'cubic-bezier(.445,.05,.55,.95)',
					easeInBack: 'cubic-bezier(.6,-.28,.735,.045)',
					easeOutBack: 'cubic-bezier(.175, .885,.32,1.275)',
					easeInOutBack: 'cubic-bezier(.68,-.55,.265,1.55)'
				}
				m[d] && (d = m[d]), g.off(jQuery.CSS.transitionEnd + '.' + f.id)
				var n = jQuery.CSS.getProp(a), p = {}
				jQuery.extend(p, a), p[jQuery.CSS.sfx + 'transition-property'] = n, p[jQuery.CSS.sfx + 'transition-duration'] = b + 'ms', p[jQuery.CSS.sfx + 'transition-delay'] = c + 'ms', p[jQuery.CSS.sfx + 'transition-timing-function'] = d, setTimeout(function () {
					g.one(jQuery.CSS.transitionEnd + '.' + f.id, o), g.css(p)
				}, 1), f.timeout = setTimeout(function () {
					return f.called || !e ? (f.called = !1, f.CSSAIsRunning = !1, void 0) : (g.css(jQuery.CSS.sfx + 'transition', ''), e.apply(f), f.CSSAIsRunning = !1, 'function' == typeof f.CSSqueue && (f.CSSqueue(), f.CSSqueue = null), void 0)
				}, b + c + 10)
			}
		})
	}
}, jQuery.fn.CSSAnimate = jQuery.CSS.animate, jQuery.normalizeCss = jQuery.CSS.normalizeCss, jQuery.fn.css3 = function (a) {
	return this.each(function () {
		var b = jQuery(this), c = jQuery.normalizeCss(a)
		b.css(c)
	})
};

/*******************************************************************************
 DATA:

 CONTAINERS:

 data-animationin
 data-animationout
 data-time
 data-onenter
 data-onexit
 data-stop

 ELEMENTS:

 data-animate
 data-animationstart
 data-animationend
 data-animationtime
 data-animationdelay
 data-ease
 ******************************************************************************/

(function ($) {

	$.disclose = {
		name: 'mb.disclose',
		author: 'Matteo Bicocchi',
		version: '1.1',
		defaults: {
			slideIntervall: 5000,
			inTimer: 1000,
			outTimer: 1000,
			ease: 'bezier(.24,.85,.32,.92)',
			animationIn: {left: '100%', top: 0, opacity: 1},
			animationOut: {left: '-100%', top: 0, opacity: 1},
			autoPlay: false,
			stopOnHover: false,
			activateKeyboard: true,
			startAt: 0,
			startAtAfter: 300,
			indexPlaceHolder: '#slideIndex',
			progressPlaceHolder: '#slideProgress',
			excluded: '.ecluded',
			onEnter: function (el, $el, $newEl) {
			},
			onExit: function (el, $el, $newEl) {
			},
			onInit: function (el) {
			}
		},

		init: function (opt) {

			var arg = arguments

			return this.each(function () {

				var el = this
				var $el = $(this)
				$el.css({overflow: 'hidden'})

				if (typeof arg[0] == 'string') {
					switch (arg[0]) {
						case 'goto':
							$.disclose.goTo(el, arg[1])
							break
						case 'next':
							$.disclose.next(el, arg[1])
							break
						case 'prev':
							$.disclose.prev(el, arg[1])
							break
						case 'play':
							$.disclose.play(el)
							break
						case 'refresh':
							$.disclose.refresh(el)
							break
					}
					return
				}

				el.canAnimate = true
				el.hasTouch = 'ontouchstart' in window

				el.opt = {}
				el.opt.id = el.id ? el.id : 'id_' + new Date().getTime()
				$.extend(el.opt, $.disclose.defaults, opt)

				el.page = 0;

				if(el.opt.startAt)
					setTimeout(function(){
						$.disclose.goTo(el, el.opt.startAt, true)
					},el.opt.startAtAfter);

				el.container = $('<div/>').attr('id', 'mbDiscloseCont_' + el.opt.id)
				el.container.css({position: 'absolute', top: -5000, left: -5000})
				$('body').append(el.container)

				$el.children(el.opt.excluded).remove();
				let pages = $el.children()

				// pages.css({height: $(el).height(), boxSizing: 'border-box', overflow: 'hidden'})
				let bannerWrapper = $('<div/>').addClass('mbDiscloseWrapper')
				pages.show()
				el.container.append(pages)
				pages.wrap(bannerWrapper)

				el.pages = el.container.children()
				el.pages.each(function () {
					$(this).data('idx', $(this).index())
				})
				if (el.opt.activateKeyboard)
					$(document).on('keydown', function (e) {
						var key = e.which

						switch (key) {
							case 37:
								$.disclose.prev(el, true)
								break
							case 39:
								$.disclose.next(el, true)
								break
							case 32:
								$.disclose.play(el)
								break
						}
					})

				$(window).on('resize', function () {
					$.disclose.refresh(el)
				})

				$.disclose.start(el)
			})
		},

		start: function (el) {
			let banner = el.pages.eq(el.page).clone(true)

			banner.children().eq(0).addClass('in')
			banner.hide().css({top: 0, left: 0, opacity: 1})
			$(el).append(banner)
			banner.show()

			let fn = banner.children().eq(0).data('onenter') ? eval('(' + banner.children().eq(0).data('onenter') + ')') : el.opt.onEnter
			if (typeof fn == 'function')
				fn(el)

			$(el).css('visibility', 'visible')
			el.actualBanner = banner

			if ($(el.opt.indexPlaceHolder).length > 0) {
				$.disclose.buildIndex(el)
			}
			$.disclose.showProgress(el)

			$.disclose.animateElements(el)

			if (el.pages.length <= 1)
				return

			var dataTime = banner.children().eq(0).data('time')
			var $newElTime = dataTime ? dataTime : el.opt.slideIntervall

			if (el.opt.autoPlay)
				el.interval = setTimeout(function () {
					$(el).disclose('next')
				}, $newElTime)

			if (el.opt.stopOnHover && el.opt.autoPlay)
				$(el).on('mouseenter', function () {
					el.opt.autoPlay = false
					clearTimeout(el.interval)
				}).on('mouseleave', function () {

					el.opt.autoPlay = true
					$.disclose.showProgress(el)
					el.interval = setTimeout(function () {
						$(el).disclose('next')
					}, $newElTime)
				})


			if (el.hasTouch) {
				$(el).swipe({
					swipeLeft: function (el) {
						$.disclose.next(el)
					},
					swipeRight: function (el) {
						$.disclose.prev(el)
					}
				})

				$(el).doubleTap({
					func: function (el) {
						$.disclose.play(el)
					}
				})
			}
		},

		next: function (el, stopSlide) {

			if (!el.canAnimate)
				return

			if (stopSlide) {
				clearTimeout(el.interval)
				el.opt.autoPlay = false
			}

			if (el.page < el.pages.length - 1)
				el.page++
			else
				el.page = 0

			$.disclose.goTo(el)
		},

		prev: function (el, stopSlide) {

			if (!el.canAnimate)
				return

			if (stopSlide) {
				clearTimeout(el.interval)
				el.opt.autoPlay = false
			}

			if (el.page > 0)
				el.page--
			else
				el.page = el.pages.length - 1

			$.disclose.goTo(el)
		},

		goTo: function (el, idx, stop) {

			clearTimeout(el.interval)

			if (el.pages.length <= 1)
				return

			if (idx >= 0 && idx == el.page)
				return

			el.page = idx >= 0 ? idx : el.page
			el.page = el.page > el.pages.length - 1 ? 0 : el.page

			el.canAnimate = false

			var $el = $(el).children().eq(0).css({zIndex: 0})

			var $elProp = $el.children().eq(0)
			$elProp.addClass('out')

			var $newEl = el.pages.eq(el.page).clone(true).css({zIndex: 1})

			var dataAnimOut = $elProp.data('animationout')
			var $elAnim = dataAnimOut ? dataAnimOut : el.opt.animationOut
			var $newElProp = $newEl.children().eq(0)
			var dataAnimIn = $newElProp.data('animationin')
			var $newElAnim = dataAnimIn ? dataAnimIn : el.opt.animationIn
			$newElAnim = $.normalizeTransform($newElAnim)

			var dataTime = $newElProp.data('time')
			var $newElTime = dataTime ? dataTime : el.opt.slideIntervall

			if ($newElProp.data('stop') || stop)
				el.opt.autoPlay = false

			/*Exit*/
			var fn = $elProp.data('onexit') ? eval('(' + $elProp.data('onexit') + ')') : el.opt.onExit
			if (typeof fn == 'function')
				fn(el)

			setTimeout(function () {
				$el.CSSAnimate($elAnim, el.opt.outTimer, null, el.opt.ease, function () {
					$el.remove()
					el.canAnimate = true
				})
			}, 100)

			$(el).append($newEl)
			$newElProp.removeClass('out')
			$newEl.css($newElAnim)

			/*ENTER*/
			el.actualBanner = $newEl
			setTimeout(function () {
				el.actualBanner.CSSAnimate({top: 0, left: 0, opacity: 1, transform: 'rotate(0deg) scale(1)'}, el.opt.inTimer, null, el.opt.ease, function () {
					el.actualBanner.children().eq(0).addClass('in')
					var fn = $newElProp.data('onenter') ? eval('(' + $newElProp.data('onenter') + ')') : el.opt.onEnter
					if (typeof fn == 'function')
						fn(el)
				})

				$.disclose.animateElements(el)
				if (el.opt.autoPlay) {
					el.interval = setTimeout(function () {
						$(el).disclose('next')
					}, $newElTime)
				}

				if ($(el.opt.indexPlaceHolder).length > 0) {
					$.disclose.buildIndex(el)
				}

				$.disclose.showProgress(el)

			}, 1)
		},

		play: function (el) {
			clearTimeout(el.interval)
			el.opt.autoPlay = !el.opt.autoPlay

			if (el.opt.autoPlay) {
				$.disclose.next(el)
			}
		},

		animateElements: function (el) {

			var $el = el.actualBanner
			var $els = $el.find('[data-animate=true]')

			$els.each(function () {
				var $el = $(this)
				var cssStart = $el.data('animationstart') ? $el.data('animationstart') : {opacity: 0}
				cssStart = $.normalizeTransform(cssStart)
				var cssEnd = $el.data('animationend') ? $el.data('animationend') : {opacity: 1}
				cssEnd = $.normalizeTransform(cssEnd)

				var time = $el.data('animationtime') ? $el.data('animationtime') : el.opt.inTimer
				var cssDelay = $el.data('animationdelay') ? $el.data('animationdelay') : 700
				var ease = $el.data('ease') ? $el.data('ease') : el.opt.ease

				$el.css(cssStart)
				setTimeout(function () {
					$el.CSSAnimate(cssEnd, time, cssDelay, el.opt.ease, function () {
					})
				}, 1)
			})
		},

		buildIndex: function (el) {

			var indexBox = $(el.opt.indexPlaceHolder)
			indexBox.empty()
			if (el.pages.length == 1)
				return
			var idxContainer = $('<div/>').addClass('idxContainer')
			indexBox.append(idxContainer)
			for (var i = 0; i < el.pages.length; i++) {
				var indexEl = $('<div/>').addClass('idxPage').attr('id', 'pageIdx_' + i).data('idx', i)
				indexEl.click(function () {
					$.disclose.goTo(el, $(this).data('idx'), true)
				})
				idxContainer.append(indexEl)
			}
			$('.idxPage', indexBox).eq(el.page).addClass('sel')

		},

		showProgress: function (el) {
			clearInterval(el.progress)

			if ($(el.opt.progressPlaceHolder).length == 0)
				return

			el.startTime = new Date().getTime()

			var progBox = $(el.opt.progressPlaceHolder)
			progBox.empty()
			var progBar = $('<div/>').addClass('progressBar')
			progBox.append(progBar)
			var dataTime = el.actualBanner.children().eq(0).data('time')

			var totTime = dataTime ? dataTime : el.opt.slideIntervall
			var progress = 0
			el.progress = setInterval(function () {

				if (!el.opt.autoPlay || progress >= totTime) {
					clearInterval(el.progress)
				}

				var prop = (progBox.width() * progress) / totTime
				progBar.css({width: prop})
				var getTime = new Date().getTime()
				progress = getTime - el.startTime
			}, 1)
		},

		refresh: function (el) {
			// el.pages.children().css({height: $(el).height()})
			// el.actualBanner.children().css({height: $(el).height()})
		}

	}

	$.fn.disclose = $.disclose.init

	/*UTILITIES*/

	$.fn.unselectable = function () {
		this.each(function () {
			$(this).css({
				'-moz-user-select': 'none',
				'-khtml-user-select': 'none',
				'user-select': 'none'
			}).attr('unselectable', 'on')
		})
		return $(this)
	}

	$.fn.clearUnselectable = function () {
		this.each(function () {
			$(this).css({
				'-moz-user-select': 'auto',
				'-khtml-user-select': 'auto',
				'user-select': 'auto'
			})
			$(this).removeAttr('unselectable')
		})
		return $(this)
	}

	$.normalizeTransform = function (css) {
		var sfx = ''

		if ($.browser.webkit || $.browser.opera) {
			sfx = '-webkit-'
		} else if ($.browser.mozilla) {
			sfx = '-moz-'
		} else if ($.browser.msie) {
			sfx = '-ms-'
		}

		for (var o in css) {
			if (o === 'transform') {
				css[sfx + 'transform'] = css[o]
				delete css[o]
			}
			if (o === 'transform-origin') {
				css[sfx + 'transform-origin'] = css[o]
				delete css[o]
			}
		}

		return css
	}


	$.fn.swipe = function (opt) {
		var defaults = {
			time: 600,
			diff: 400,
			swipeLeft: function () {
			},
			swipeRight: function () {
			}
		}
		$.extend(defaults, opt)
		return this.each(function () {
			this.swipe = {sp: 0, ep: 0, s: 0, e: 0}

			this.addEventListener('touchstart', function (event) {
				if (event.touches.length > 1) {
					this.abort = true
					return
				}
				//event.preventDefault();
				var touch = event.touches[0]
				this.swipe.sp = touch.pageX
				this.swipe.s = new Date().getTime()
			}, false)

			this.addEventListener('touchmove', function (event) {
				event.preventDefault()
			}, false)

			this.addEventListener('touchend', function (event) {
				if (this.abort) {
					this.abort = false
					return
				}
				//event.preventDefault();
				var touch = event.changedTouches[0]
				this.swipe.ep = touch.pageX

				if ((parseFloat(new Date().getTime()) - parseFloat(this.swipe.s)) > defaults.time && event.touches.length == 1)
					return
				if (this.swipe.ep > this.swipe.sp + defaults.diff) {
					event.stopPropagation()
					defaults.swipeRight(this)
				} else if (this.swipe.ep < this.swipe.sp - defaults.diff) {
					event.stopPropagation()
					defaults.swipeLeft(this)
				}
			}, false)
		})
	}


	$.fn.doubleTap = function (opt) {
		var defaults = {
			time: 300,
			func: function (o) {
			}
		}
		$.extend(defaults, opt)
		return this.each(function () {
			this.tap = {s: 0, e: 0}
			this.addEventListener('touchstart', function (event) {
				if (this.tap.s > 0 && (parseFloat(new Date().getTime()) - parseFloat(this.tap.s)) < defaults.time) {
					event.preventDefault()
					event.stopPropagation()
					defaults.func(this)
				} else
					this.tap.s = new Date().getTime()
			}, false)
		})
	}

})(jQuery)
