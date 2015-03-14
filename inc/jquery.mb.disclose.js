/*
 * ******************************************************************************
 *  jquery.mb.components
 *  file: jquery.mb.disclose.js
 *
 *  Copyright (c) 2001-2014. Matteo Bicocchi (Pupunzi);
 *  Open lab srl, Firenze - Italy
 *  email: matteo@open-lab.com
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
var nAgt=navigator.userAgent; if(!jQuery.browser){jQuery.browser={};jQuery.browser.mozilla=!1;jQuery.browser.webkit=!1;jQuery.browser.opera=!1;jQuery.browser.safari=!1;jQuery.browser.chrome=!1;jQuery.browser.msie=!1;jQuery.browser.ua=nAgt;jQuery.browser.name=navigator.appName;jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion);jQuery.browser.majorVersion=parseInt(navigator.appVersion,10);var nameOffset,verOffset,ix;if(-1!=(verOffset=nAgt.indexOf("Opera")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion= nAgt.substring(verOffset+6),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8));else if(-1!=(verOffset=nAgt.indexOf("OPR")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+4);else if(-1!=(verOffset=nAgt.indexOf("MSIE")))jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",jQuery.browser.fullVersion=nAgt.substring(verOffset+5);else if(-1!=nAgt.indexOf("Trident")){jQuery.browser.msie= !0;jQuery.browser.name="Microsoft Internet Explorer";var start=nAgt.indexOf("rv:")+3,end=start+4;jQuery.browser.fullVersion=nAgt.substring(start,end)}else-1!=(verOffset=nAgt.indexOf("Chrome"))?(jQuery.browser.webkit=!0,jQuery.browser.chrome=!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1!=(verOffset=nAgt.indexOf("Safari"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7), -1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("AppleWebkit"))?(jQuery.browser.webkit=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("Firefox"))?(jQuery.browser.mozilla=!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=nAgt.substring(verOffset+ 8)):(nameOffset=nAgt.lastIndexOf(" ")+1)<(verOffset=nAgt.lastIndexOf("/"))&&(jQuery.browser.name=nAgt.substring(nameOffset,verOffset),jQuery.browser.fullVersion=nAgt.substring(verOffset+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName));-1!=(ix=jQuery.browser.fullVersion.indexOf(";"))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix));-1!=(ix=jQuery.browser.fullVersion.indexOf(" "))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0, ix));jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10);isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10));jQuery.browser.version=jQuery.browser.majorVersion}jQuery.browser.android=/Android/i.test(nAgt);jQuery.browser.blackberry=/BlackBerry|BB|PlayBook/i.test(nAgt);jQuery.browser.ios=/iPhone|iPad|iPod|webOS/i.test(nAgt);jQuery.browser.operaMobile=/Opera Mini/i.test(nAgt); jQuery.browser.windowsMobile=/IEMobile|Windows Phone/i.test(nAgt);jQuery.browser.kindle=/Kindle|Silk/i.test(nAgt);jQuery.browser.mobile=jQuery.browser.android||jQuery.browser.blackberry||jQuery.browser.ios||jQuery.browser.windowsMobile||jQuery.browser.operaMobile||jQuery.browser.kindle;

/*******************************************************************************
 * jQuery.mb.components: jquery.mb.CSSAnimate
 ******************************************************************************/

jQuery.fn.CSSAnimate=function(a,g,p,m,h){function r(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function f(a,f){return"string"!==typeof a||a.match(/^[\-0-9\.]+$/)?""+a+f:a}jQuery.support.CSStransition=function(){var a=(document.body||document.documentElement).style;return void 0!==a.transition||void 0!==a.WebkitTransition||void 0!==a.MozTransition||void 0!==a.MsTransition||void 0!==a.OTransition}();return this.each(function(){var e=this,k=jQuery(this);e.id=e.id||"CSSA_"+ (new Date).getTime();var l=l||{type:"noEvent"};if(e.CSSAIsRunning&&e.eventType==l.type)e.CSSqueue=function(){k.CSSAnimate(a,g,p,m,h)};else if(e.CSSqueue=null,e.eventType=l.type,0!==k.length&&a){e.CSSAIsRunning=!0;"function"==typeof g&&(h=g,g=jQuery.fx.speeds._default);"function"==typeof p&&(h=p,p=0);"function"==typeof m&&(h=m,m="cubic-bezier(0.65,0.03,0.36,0.72)");if("string"==typeof g)for(var b in jQuery.fx.speeds)if(g==b){g=jQuery.fx.speeds[b];break}else g=jQuery.fx.speeds._default;g||(g=jQuery.fx.speeds._default); if(jQuery.support.CSStransition){l={"default":"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)", easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)", easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};l[m]&&(m=l[m]);var d="",q="transitionEnd";jQuery.browser.webkit?(d="-webkit-",q="webkitTransitionEnd"):jQuery.browser.mozilla?(d="-moz-",q="transitionend"):jQuery.browser.opera?(d="-o-",q="otransitionend"):jQuery.browser.msie&&(d="-ms-",q="msTransitionEnd");l=[];for(c in a){b=c;"transform"===b&&(b=d+"transform",a[b]=a[c],delete a[c]);"filter"===b&&(b=d+"filter",a[b]=a[c],delete a[c]);if("transform-origin"=== b||"origin"===b)b=d+"transform-origin",a[b]=a[c],delete a[c];"x"===b&&(b=d+"transform",a[b]=a[b]||"",a[b]+=" translateX("+f(a[c],"px")+")",delete a[c]);"y"===b&&(b=d+"transform",a[b]=a[b]||"",a[b]+=" translateY("+f(a[c],"px")+")",delete a[c]);"z"===b&&(b=d+"transform",a[b]=a[b]||"",a[b]+=" translateZ("+f(a[c],"px")+")",delete a[c]);"rotate"===b&&(b=d+"transform",a[b]=a[b]||"",a[b]+=" rotate("+f(a[c],"deg")+")",delete a[c]);"rotateX"===b&&(b=d+"transform",a[b]=a[b]||"",a[b]+=" rotateX("+f(a[c],"deg")+ ")",delete a[c]);"rotateY"===b&&(b=d+"transform",a[b]=a[b]||"",a[b]+=" rotateY("+f(a[c],"deg")+")",delete a[c]);"rotateZ"===b&&(b=d+"transform",a[b]=a[b]||"",a[b]+=" rotateZ("+f(a[c],"deg")+")",delete a[c]);"scale"===b&&(b=d+"transform",a[b]=a[b]||"",a[b]+=" scale("+f(a[c],"")+")",delete a[c]);"scaleX"===b&&(b=d+"transform",a[b]=a[b]||"",a[b]+=" scaleX("+f(a[c],"")+")",delete a[c]);"scaleY"===b&&(b=d+"transform",a[b]=a[b]||"",a[b]+=" scaleY("+f(a[c],"")+")",delete a[c]);"scaleZ"===b&&(b=d+"transform", a[b]=a[b]||"",a[b]+=" scaleZ("+f(a[c],"")+")",delete a[c]);"skew"===b&&(b=d+"transform",a[b]=a[b]||"",a[b]+=" skew("+f(a[c],"deg")+")",delete a[c]);"skewX"===b&&(b=d+"transform",a[b]=a[b]||"",a[b]+=" skewX("+f(a[c],"deg")+")",delete a[c]);"skewY"===b&&(b=d+"transform",a[b]=a[b]||"",a[b]+=" skewY("+f(a[c],"deg")+")",delete a[c]);"perspective"===b&&(b=d+"transform",a[b]=a[b]||"",a[b]+=" perspective("+f(a[c],"px")+")",delete a[c]);0>l.indexOf(b)&&l.push(r(b))}var c=l.join(","),s=function(){k.off(q+"."+ e.id);clearTimeout(e.timeout);k.css(d+"transition","");"function"==typeof h&&h.apply(e);e.called=!0;e.CSSAIsRunning=!1;"function"==typeof e.CSSqueue&&(e.CSSqueue(),e.CSSqueue=null)},n={};$.extend(n,a);n[d+"transition-property"]=c;n[d+"transition-duration"]=g+"ms";n[d+"transition-delay"]=p+"ms";n[d+"transition-style"]="preserve-3d";n[d+"transition-timing-function"]=m;setTimeout(function(){k.one(q+"."+e.id,s);k.css(n)},1);e.timeout=setTimeout(function(){k.called||!h?(k.called=!1,e.CSSAIsRunning=!1): (k.css(d+"transition",""),h.apply(e),e.CSSAIsRunning=!1,"function"==typeof e.CSSqueue&&(e.CSSqueue(),e.CSSqueue=null))},g+p+100)}else{for(var c in a)"transform"===c&&delete a[c],"filter"===c&&delete a[c],"transform-origin"===c&&delete a[c],"auto"===a[c]&&delete a[c];h&&"string"!==typeof h||(h="linear");k.animate(a,g,h)}}})};$.fn.css3=function(a){return this.each(function(){$(this).CSSAnimate(a,1,0,null)})};

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

(function($){

  $.disclose = {
    name:"mb.disclose",
    author:"Matteo Bicocchi",
    version:"1.1",
    defaults:{
      slideIntervall:5000,
      inTimer:1000,
      outTimer:1000,
      ease:"bezier(.24,.85,.32,.92)",
      animationIn:{left:"100%", top:0, opacity:1},
      animationOut:{left:"-100%", top:0, opacity:1},
      autoPlay:false,
      stopOnHover:true,
      activateKeyboard:true,
      indexPlaceHolder:"#slideIndex",
      progressPlaceHolder:"#slideProgress",
      onEnter:function(el, $el, $newEl){},
      onExit:function(el, $el, $newEl){},
      onInit:function(el){}
    },

    init: function(opt){

      var arg = arguments;

      return this.each(function(){

        var el= this;
        var $el= $(this);
        $el.css({overflow:"hidden"});

        if(typeof arg[0] == "string"){
          switch(arg[0]){
            case "goto":
              $.disclose.goTo(el, arg[1]);
              break;
            case "next":
              $.disclose.next(el, arg[1]);
              break;
            case "prev":
              $.disclose.prev(el, arg[1]);
              break;
            case "play":
              $.disclose.play(el);
              break;
            case "refresh":
              $.disclose.refresh(el);
              break;
          }
          return;
        }

        el.page=0;
        el.canAnimate=true;
        el.hasTouch = 'ontouchstart' in window;

        el.opt = {};
        el.opt.id = el.id ? el.id : "id_"+ new Date().getTime();
        $.extend (el.opt, $.disclose.defaults,opt);

        el.container = $("<div/>").attr("id","mbDiscloseCont_"+el.opt.id);
        el.container.css({position:"absolute",top:-5000,left:-5000});
        $("body").append(el.container);

        var pages = $(el).children();

        pages.css({height: $(el).height(), boxSizing:"border-box", overflow:"hidden"});
        var bannerWrapper = $("<div/>").addClass("mbDiscloseWrapper");
        pages.show();
        el.container.append(pages);
        pages.wrap(bannerWrapper);

        el.pages= el.container.children();

        el.pages.each(function(){
          $(this).data("idx",$(this).index());
        });
        if(el.opt.activateKeyboard)
          $(document).on("keydown", function(e){
            var key= e.which;

            switch(key){
              case 37:
                $.disclose.prev(el,true);
                break;
              case 39:
                $.disclose.next(el,true);
                break;
              case 32:
                $.disclose.play(el);
                break;
            }
          });

        $(window).on("resize",function(){
          $.disclose.refresh(el);
        });

        $.disclose.start(el);
      })
    },

    start:function(el){
      var banner= el.pages.eq(el.page).clone(true);
      banner.children().eq(0).addClass("in");
      banner.hide().css({top:0,left:0, opacity:1});
      $(el).append(banner);
      banner.show();

      var fn= banner.children().eq(0).data("onenter") ? eval("("+banner.children().eq(0).data("onenter")+")") : el.opt.onEnter;
      if(typeof fn == "function")
        fn(el);

      $(el).css("visibility","visible");
      el.actualBanner = banner;

      if($(el.opt.indexPlaceHolder).length>0){
        $.disclose.buildIndex(el);
      }

      $.disclose.animateElements(el);

      if(el.pages.length<=1)
        return;

      if(el.opt.autoPlay){

        var dataTime = banner.children().eq(0).data("time");
        var $newElTime = dataTime ? dataTime : el.opt.slideIntervall;

        el.interval = setTimeout(function(){$(el).disclose("next")},$newElTime);

      }

      if(el.opt.stopOnHover && el.opt.autoPlay)
        $(el).on("mouseenter",function(){
          el.opt.autoPlay=false;
          clearTimeout(el.interval);
        }).on("mouseleave",function(){
                  el.opt.autoPlay=true;
                  $.disclose.showProgress(el);
                  el.interval = setTimeout(function(){$(el).disclose("next")},el.opt.slideIntervall);
                });


      if(el.hasTouch){
        $(el).swipe({
          swipeLeft:function(el){
            $.disclose.next(el);
          },
          swipeRight:function(el){
            $.disclose.prev(el);
          }
        });

        $(el).doubleTap({
          func:function(el){
            $.disclose.play(el);
          }
        })
      }
    },

    next:function(el, stopSlide){

      if(!el.canAnimate || el.pauseSlide)
        return;

      if(stopSlide){
        clearTimeout(el.interval);
        el.opt.autoPlay=false;
      }

      if(el.page < el.pages.length-1)
        el.page++;
      else
        el.page=0;

      $.disclose.goTo(el);
    },

    prev:function(el, stopSlide){

      if(!el.canAnimate)
        return;

      if(stopSlide){
        clearTimeout(el.interval);
        el.opt.autoPlay=false;
      }

      if(el.page > 0)
        el.page--;
      else
        el.page=el.pages.length-1;

      $.disclose.goTo(el);
    },

    goTo:function(el, idx, stop){

      if(el.pages.length<=1)
        return;

      clearTimeout(el.interval);
      if(idx>=0 && idx == el.page)
        return;

      el.page = idx>=0 ? idx : el.page;
      el.page = el.page > el.pages.length-1 ? 0 : el.page;

      el.canAnimate = false;

      var $el = $(el).children().eq(0).css({zIndex:0});

      var $elProp = $el.children().eq(0);
      $elProp.addClass("out");

      var $newEl = el.pages.eq(el.page).clone(true).css({zIndex:1});

      var dataAnimOut = $elProp.data("animationout");
      var $elAnim = dataAnimOut ? dataAnimOut : el.opt.animationOut;
      var $newElProp = $newEl.children().eq(0);
      var dataAnimIn = $newElProp.data("animationin");
      var $newElAnim = dataAnimIn ? dataAnimIn : el.opt.animationIn;
      $newElAnim = $.normalizeTransform($newElAnim);

      var dataTime = $newElProp.data("time");
      var $newElTime = dataTime ? dataTime : el.opt.slideIntervall;

      if($newElProp.data("stop") || stop)
        el.opt.autoPlay=false;

      /*Exit*/
      var fn = $elProp.data("onexit") ? eval("("+$elProp.data("onexit")+")") : el.opt.onExit;
      if(typeof fn == "function")
        fn(el);

      setTimeout(function(){
        $el.CSSAnimate($elAnim, el.opt.outTimer, null, el.opt.ease, function(){
          $el.remove();
          el.canAnimate = true;
        });
      },1);

      $(el).append($newEl);
      $newElProp.removeClass("out");
      $newEl.css($newElAnim);

      /*ENTER*/
      el.actualBanner = $newEl;
      setTimeout(function(){
        el.actualBanner.CSSAnimate({top:0, left:0, opacity:1, transform: "rotate(0deg) scale(1)" }, el.opt.inTimer,null, el.opt.ease, function(){
          el.actualBanner.children().eq(0).addClass("in");
          var fn= $newElProp.data("onenter") ? eval("("+$newElProp.data("onenter")+")") : el.opt.onEnter;
          if(typeof fn == "function")
            fn(el);
        });

        $.disclose.animateElements(el);
        if(el.opt.autoPlay){
          el.interval = setTimeout(function(){$(el).disclose("next")},$newElTime);
        }

        if($(el.opt.indexPlaceHolder).length>0){
          $.disclose.buildIndex(el);
        }

      },1);
    },

    play:function(el){
      clearTimeout(el.interval);
      el.opt.autoPlay = !el.opt.autoPlay;

      if(el.opt.autoPlay){
        $.disclose.next(el);
      }
    },

    animateElements:function(el){

      var $el = el.actualBanner;
      var $els = $el.find("[data-animate=true]");

      $els.each(function(){
        var $el = $(this);
        var cssStart = $el.data("animationstart") ? $el.data("animationstart") : {opacity:0};
        cssStart = $.normalizeTransform(cssStart);
        var cssEnd = $el.data("animationend") ? $el.data("animationend") : {opacity:1};
        cssEnd = $.normalizeTransform(cssEnd);

        var time = $el.data("animationtime") ? $el.data("animationtime") : el.opt.inTimer;
        var cssDelay = $el.data("animationdelay") ? $el.data("animationdelay") : 700;
        var ease = $el.data("ease") ? $el.data("ease") : el.opt.ease;

        $el.css(cssStart);
        setTimeout(function(){
          $el.CSSAnimate(cssEnd, time, cssDelay, el.opt.ease, function(){});
        },1);
      });
    },

    buildIndex:function(el){

      var indexBox = $(el.opt.indexPlaceHolder);
      indexBox.empty();
      if(el.pages.length==1)
        return;
      var idxContainer =$("<div/>").addClass("idxContainer");
      indexBox.append(idxContainer);
      for (var i=0; i< el.pages.length;i++){
        var indexEl=$("<div/>").addClass("idxPage").attr("id","pageIdx_"+i).data("idx",i);
        indexEl.click(function(){
          $.disclose.goTo(el,$(this).data("idx"),true);
        });
        idxContainer.append(indexEl);
      }
      $(".idxPage",indexBox).eq(el.page).addClass("sel");

      $.disclose.showProgress(el);
    },

    showProgress:function(el){
      clearInterval(el.progress);

      if($(el.opt.progressPlaceHolder).length==0)
        return;

      el.startTime= new Date().getTime();

      var progBox = $(el.opt.progressPlaceHolder);
      progBox.empty();
      var progBar = $("<div/>").addClass("progressBar");
      progBox.append(progBar);
      var dataTime = el.actualBanner.children().eq(0).data("time");

      var totTime = dataTime ? dataTime : el.opt.slideIntervall;
      var progress = 0;
      el.progress=setInterval(function(){

        if(!el.opt.autoPlay || progress >= totTime){
          clearInterval(el.progress);
        }

        var prop = (progBox.width()*progress)/totTime;
        progBar.css({width:prop});
        var getTime = new Date().getTime();
        progress= getTime - el.startTime;
      },1);
    },

    refresh:function(el){
      el.pages.children().css({height:$(el).height()});
      el.actualBanner.children().css({height:$(el).height()});
    }

  };

  $.fn.disclose = $.disclose.init;

  /*UTILITIES*/

  $.fn.unselectable=function(){
    this.each(function(){
      $(this).css({
        "-moz-user-select": "none",
        "-khtml-user-select": "none",
        "user-select": "none"
      }).attr("unselectable","on");
    });
    return $(this);
  };

  $.fn.clearUnselectable=function(){
    this.each(function(){
      $(this).css({
        "-moz-user-select": "auto",
        "-khtml-user-select": "auto",
        "user-select": "auto"
      });
      $(this).removeAttr("unselectable");
    });
    return $(this);
  };

  $.normalizeTransform=function(css){
    var sfx = "";
    if ($.browser.webkit) {
      sfx = "-webkit-";
    } else if ($.browser.mozilla) {
      sfx = "-moz-";
    } else if ($.browser.opera) {
      sfx = "-o-";
    } else if ($.browser.msie) {
      sfx = "-ms-";
    }

    for(var o in css){
      if (o==="transform"){
        css[sfx+"transform"]=css[o];
        delete css[o];
      }
      if (o==="transform-origin"){
        css[sfx+"transform-origin"]=css[o];
        delete css[o];
      }
    }

    return css;
  };


  $.fn.swipe = function(opt) {
    var defaults = {
      time:600,
      diff:400,
      swipeLeft:function() {
      },
      swipeRight:function() {
      }
    };
    $.extend(defaults, opt);
    return this.each(function() {
      this.swipe = {sp:0,ep:0, s:0, e:0};

      this.addEventListener('touchstart', function(event) {
        if(event.touches.length>1){
          this.abort=true;
          return;
        }
        //event.preventDefault();
        var touch = event.touches[0];
        this.swipe.sp = touch.pageX;
        this.swipe.s = new Date().getTime();
      }, false);

      this.addEventListener('touchmove', function(event) {
        event.preventDefault();
      },false);

      this.addEventListener('touchend', function(event) {
        if(this.abort) {
          this.abort=false;
          return;
        }
        //event.preventDefault();
        var touch = event.changedTouches[0];
        this.swipe.ep = touch.pageX;

        if((parseFloat(new Date().getTime()) - parseFloat(this.swipe.s)) > defaults.time && event.touches.length==1)
          return;
        if (this.swipe.ep > this.swipe.sp + defaults.diff) {
          event.stopPropagation();
          defaults.swipeRight(this);
        } else if (this.swipe.ep < this.swipe.sp - defaults.diff) {
          event.stopPropagation();
          defaults.swipeLeft(this);
        }
      }, false);
    })
  };


  $.fn.doubleTap = function(opt) {
    var defaults = {
      time:300,
      func:function(o) {}
    };
    $.extend(defaults, opt);
    return this.each(function() {
      this.tap = {s:0,e:0};
      this.addEventListener('touchstart', function(event) {
        if(this.tap.s>0 && (parseFloat(new Date().getTime()) - parseFloat(this.tap.s)) < defaults.time){
          event.preventDefault();
          event.stopPropagation();
          defaults.func(this);
        }else
          this.tap.s = new Date().getTime();
      }, false);
    })
  };

})(jQuery);
