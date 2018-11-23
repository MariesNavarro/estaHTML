/*!
 * Bowser - a browser detector
 * https://github.com/ded/bowser
 * MIT License | (c) Dustin Diaz 2015
 */
!function(e,t,n){typeof module!="undefined"&&module.exports?module.exports=n():typeof define=="function"&&define.amd?define(t,n):e[t]=n()}(this,"bowser",function(){function t(t){function n(e){var n=t.match(e);return n&&n.length>1&&n[1]||""}function r(e){var n=t.match(e);return n&&n.length>1&&n[2]||""}var i=n(/(ipod|iphone|ipad)/i).toLowerCase(),s=/like android/i.test(t),o=!s&&/android/i.test(t),u=/nexus\s*[0-6]\s*/i.test(t),a=!u&&/nexus\s*[0-9]+/i.test(t),f=/CrOS/.test(t),l=/silk/i.test(t),c=/sailfish/i.test(t),h=/tizen/i.test(t),p=/(web|hpw)os/i.test(t),d=/windows phone/i.test(t),v=/SamsungBrowser/i.test(t),m=!d&&/windows/i.test(t),g=!i&&!l&&/macintosh/i.test(t),y=!o&&!c&&!h&&!p&&/linux/i.test(t),b=n(/edge\/(\d+(\.\d+)?)/i),w=n(/version\/(\d+(\.\d+)?)/i),E=/tablet/i.test(t),S=!E&&/[^-]mobi/i.test(t),x=/xbox/i.test(t),T;/opera/i.test(t)?T={name:"Opera",opera:e,version:w||n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)}:/opr|opios/i.test(t)?T={name:"Opera",opera:e,version:n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i)||w}:/SamsungBrowser/i.test(t)?T={name:"Samsung Internet for Android",samsungBrowser:e,version:w||n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)}:/coast/i.test(t)?T={name:"Opera Coast",coast:e,version:w||n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)}:/yabrowser/i.test(t)?T={name:"Yandex Browser",yandexbrowser:e,version:w||n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/ucbrowser/i.test(t)?T={name:"UC Browser",ucbrowser:e,version:n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)}:/mxios/i.test(t)?T={name:"Maxthon",maxthon:e,version:n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)}:/epiphany/i.test(t)?T={name:"Epiphany",epiphany:e,version:n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)}:/puffin/i.test(t)?T={name:"Puffin",puffin:e,version:n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)}:/sleipnir/i.test(t)?T={name:"Sleipnir",sleipnir:e,version:n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)}:/k-meleon/i.test(t)?T={name:"K-Meleon",kMeleon:e,version:n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)}:d?(T={name:"Windows Phone",windowsphone:e},b?(T.msedge=e,T.version=b):(T.msie=e,T.version=n(/iemobile\/(\d+(\.\d+)?)/i))):/msie|trident/i.test(t)?T={name:"Internet Explorer",msie:e,version:n(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:f?T={name:"Chrome",chromeos:e,chromeBook:e,chrome:e,version:n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/chrome.+? edge/i.test(t)?T={name:"Microsoft Edge",msedge:e,version:b}:/vivaldi/i.test(t)?T={name:"Vivaldi",vivaldi:e,version:n(/vivaldi\/(\d+(\.\d+)?)/i)||w}:c?T={name:"Sailfish",sailfish:e,version:n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(t)?T={name:"SeaMonkey",seamonkey:e,version:n(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel|fxios/i.test(t)?(T={name:"Firefox",firefox:e,version:n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t)&&(T.firefoxos=e)):l?T={name:"Amazon Silk",silk:e,version:n(/silk\/(\d+(\.\d+)?)/i)}:/phantom/i.test(t)?T={name:"PhantomJS",phantom:e,version:n(/phantomjs\/(\d+(\.\d+)?)/i)}:/slimerjs/i.test(t)?T={name:"SlimerJS",slimer:e,version:n(/slimerjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(t)||/rim\stablet/i.test(t)?T={name:"BlackBerry",blackberry:e,version:w||n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:p?(T={name:"WebOS",webos:e,version:w||n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(t)&&(T.touchpad=e)):/bada/i.test(t)?T={name:"Bada",bada:e,version:n(/dolfin\/(\d+(\.\d+)?)/i)}:h?T={name:"Tizen",tizen:e,version:n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||w}:/qupzilla/i.test(t)?T={name:"QupZilla",qupzilla:e,version:n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i)||w}:/chromium/i.test(t)?T={name:"Chromium",chromium:e,version:n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i)||w}:/chrome|crios|crmo/i.test(t)?T={name:"Chrome",chrome:e,version:n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:o?T={name:"Android",version:w}:/safari|applewebkit/i.test(t)?(T={name:"Safari",safari:e},w&&(T.version=w)):i?(T={name:i=="iphone"?"iPhone":i=="ipad"?"iPad":"iPod"},w&&(T.version=w)):/googlebot/i.test(t)?T={name:"Googlebot",googlebot:e,version:n(/googlebot\/(\d+(\.\d+))/i)||w}:T={name:n(/^(.*)\/(.*) /),version:r(/^(.*)\/(.*) /)},!T.msedge&&/(apple)?webkit/i.test(t)?(/(apple)?webkit\/537\.36/i.test(t)?(T.name=T.name||"Blink",T.blink=e):(T.name=T.name||"Webkit",T.webkit=e),!T.version&&w&&(T.version=w)):!T.opera&&/gecko\//i.test(t)&&(T.name=T.name||"Gecko",T.gecko=e,T.version=T.version||n(/gecko\/(\d+(\.\d+)?)/i)),!T.windowsphone&&!T.msedge&&(o||T.silk)?T.android=e:!T.windowsphone&&!T.msedge&&i?(T[i]=e,T.ios=e):g?T.mac=e:x?T.xbox=e:m?T.windows=e:y&&(T.linux=e);var N="";T.windowsphone?N=n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):i?(N=n(/os (\d+([_\s]\d+)*) like mac os x/i),N=N.replace(/[_\s]/g,".")):o?N=n(/android[ \/-](\d+(\.\d+)*)/i):T.webos?N=n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):T.blackberry?N=n(/rim\stablet\sos\s(\d+(\.\d+)*)/i):T.bada?N=n(/bada\/(\d+(\.\d+)*)/i):T.tizen&&(N=n(/tizen[\/\s](\d+(\.\d+)*)/i)),N&&(T.osversion=N);var C=N.split(".")[0];if(E||a||i=="ipad"||o&&(C==3||C>=4&&!S)||T.silk)T.tablet=e;else if(S||i=="iphone"||i=="ipod"||o||u||T.blackberry||T.webos||T.bada)T.mobile=e;return T.msedge||T.msie&&T.version>=10||T.yandexbrowser&&T.version>=15||T.vivaldi&&T.version>=1||T.chrome&&T.version>=20||T.samsungBrowser&&T.version>=4||T.firefox&&T.version>=20||T.safari&&T.version>=6||T.opera&&T.version>=10||T.ios&&T.osversion&&T.osversion.split(".")[0]>=6||T.blackberry&&T.version>=10.1||T.chromium&&T.version>=20?T.a=e:T.msie&&T.version<10||T.chrome&&T.version<20||T.firefox&&T.version<20||T.safari&&T.version<6||T.opera&&T.version<10||T.ios&&T.osversion&&T.osversion.split(".")[0]<6||T.chromium&&T.version<20?T.c=e:T.x=e,T}function r(e){return e.split(".").length}function i(e,t){var n=[],r;if(Array.prototype.map)return Array.prototype.map.call(e,t);for(r=0;r<e.length;r++)n.push(t(e[r]));return n}function s(e){var t=Math.max(r(e[0]),r(e[1])),n=i(e,function(e){var n=t-r(e);return e+=(new Array(n+1)).join(".0"),i(e.split("."),function(e){return(new Array(20-e.length)).join("0")+e}).reverse()});while(--t>=0){if(n[0][t]>n[1][t])return 1;if(n[0][t]!==n[1][t])return-1;if(t===0)return 0}}function o(e,r,i){var o=n;typeof r=="string"&&(i=r,r=void 0),r===void 0&&(r=!1),i&&(o=t(i));var u=""+o.version;for(var a in e)if(e.hasOwnProperty(a)&&o[a]){if(typeof e[a]!="string")throw new Error("Browser version in the minVersion map should be a string: "+a+": "+String(e));return s([u,e[a]])<0}return r}function u(e,t,n){return!o(e,t,n)}var e=!0,n=t(typeof navigator!="undefined"?navigator.userAgent||"":"");return n.test=function(e){for(var t=0;t<e.length;++t){var r=e[t];if(typeof r=="string"&&r in n)return!0}return!1},n.isUnsupportedBrowser=o,n.compareVersions=s,n.check=u,n._detect=t,n})
/*!
 * Lottie
 */

/*!
 * FrontEnd JS
 * 4 de Noviembre
 * Mn
 */
 "use strict";
window.console.log("%cCoded by OET Capital", "color:#34408f;  font-size: 10px; background:#000; padding:20px;");
function _(el){return document.querySelector(el); }
function __(el){return document.querySelectorAll(el); }
window.requestAnimFrame = (function(){
return  window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        function( callback ){ window.setTimeout(callback, 1000 / 60); };
})();
var fps = 0;
var seqReq = [];
var isMobile = false;
var loadingReady = false;
var initFront = (function(){
  if(bowser.mobile || bowser.tablet || /SymbianOS/.test(window.navigator.userAgent)) isMobile = true;
  if(isMobile){
    loadSeq(seqReq, "ui/img/seq/mob-", 9, ".png");
  } else {
    if(window.innerWidth > 960){
      loadSeq(seqReq, "ui/img/seq/desk-", 15, ".png");
    } else if (window.innerWidth < 960) {
      loadSeq(seqReq, "ui/img/seq/mob-", 9, ".png");
    }
  }
  //eventos buttons
  setEventButtons("#obtenCupon", generandoC);
})();
var ct = 0;
function generateSeq(len,url, ext){
  var wr = _("#center"), seqContainer;
  for (var i = 0; i < len; i++) {
    seqContainer = document.createElement("DIV");
    seqContainer.setAttribute("class", "seqContainer");
    seqContainer.style.backgroundImage = "url('"+url+i+ext+"')";
    wr.appendChild(seqContainer);
  }
};
function animationSeq(){
  var seq = __(".seqContainer"),
  center = _("#center"),
  scratchWr = _("#scratch"),
  nav = _("#nav"),
  foot = _("#foot"),
  botella = _("#producto");
  seq[ct].style.display = "none";
  ct++;
  if(ct >= fps){
    center.style.display = "none";
    scratchWr.style.zIndex = "0";
    nav.style.opacity = "1";
    foot.style.opacity = "1";
  }
  if(ct < fps){
    requestAnimationFrame(animationSeq);
  }
};
function loadSeq(arr, url,len, ext){
  fps = len;
  var c = 0;
  for(var i = 0; i<len; i++){
  arr[i] = new XMLHttpRequest();
  arr[i].open("GET", url+i+ext, true);
  arr[i].responseType = "blob";
    arr[i].onload = function(e){
      if(this.readyState == 4){
        c++;
        if(c === len){
          loadingReady = true;
          generateSeq(len, url, ext);
          var wr = _("#loading");
          setTimeout(function(){
            wr.style.opacity = "0";
            setTimeout(function(){
              requestAnimationFrame(animationSeq);
              wr.setAttribute("class", "trans5 standarWindow dislplayNone");
            },1000);
          },3000);
        }
      }
    }
  arr[i].send();
  }
};

function setEventButtons(bt, fun){
  var bt = _(bt);
  if(isMobile){
    obtenCupon.addEventListener("touchstart", fun);
  } else {
    obtenCupon.addEventListener("click", fun);
  }
};
function unsettledEventButtons(bt, fun){
  var bt = _(bt);
  if(isMobile){
    obtenCupon.removeEventListener("touchstart", fun);
  } else {
    obtenCupon.removeEventListener("click", fun);
  }
};

function generandoC(){
  unsettledEventButtons("#obtenCupon", generandoC);
  var obtenInfo = _("#obtenInfo"),
      generandoInfo = _("#generandoInfo");
  obtenInfo.style.opacity = "0";
  setTimeout(function(){
    obtenInfo.setAttribute("class", "dislplayNone");
    generandoInfo.setAttribute("class", "flexDisplay trans5");
    setTimeout(function(){
      generandoInfo.style.opacity = "1";
      pathM();
      botellaAni.play();
    },500);
  },500);
  obtenerAni.play();
}

// Window Functions
function preventLandscape(){
  var wr = _('#preventLandscape');
  if(window.orientation == 90 || window.orientation == -90){
    wr.setAttribute("class", "flexDisplay");
  } else {
    wr.setAttribute("class", "dislplayNone");
  }
};
function preventHeight(){
  var w = window.innerWidth,
      h = window.innerHeight,
      wr = _("#preventHeight");
  if(w > 960 && h < 450){
    wr.setAttribute("class", "flexDisplay");
  } else {
    wr.setAttribute("class", "dislplayNone");
  }
};
function abortLoading(){
  console.log("Aun no se ha cargado");
}
// Window Events
window.onorientationchange = function(){
  if(!isMobile){ preventLandscape(); }
};
window.onresize = function(){
  if(!isMobile){
    preventHeight();
    if(!loadingReady){

    }
  }
};
var wiggles = ["path st2 wiggle1", "path st3 wiggle2", "path st4 wiggle5", "path st2 wiggle4", "path st2 wiggle3"];
function pathM(){
  var path = __(".path");
  for (var i = 0; i < path.length; i++) {
    path[i].setAttribute("class", wiggles[i]);
  }
}

var botellaAniData = {
  container: document.getElementById('botella'),
  render: "svg",
  loop: false,
  autoplay: false,
  path: "ui/js/botella.json"
}
var botellaAni = bodymovin.loadAnimation(botellaAniData);



var obtenerAniData = {
  container: document.getElementById('obtenCupon'),
  render: "svg",
  loop: false,
  autoplay: false,
  path: "ui/js/button.json"
}
var obtenerAni = bodymovin.loadAnimation(obtenerAniData);

obtenerAni.onComplete = function(){
  var cupon = _("#cuponwrap"),
  producto  = _("#producto");
  cupon.setAttribute("class", "flexDisplay trans5");
  producto.style.opacity = "0";
  setTimeout(function(){
    producto.setAttribute("class", "dislplayNone");
    cupon.style.opacity = "1";
  });
}
