!function(){function n(d){for(var f,a,g,b,c=[],e=0;e<x.length;e++){var h=x[e];if(h.Tag===d){c=h.CategoryId;break}var l=(f=h.Tag,b=g=a=void 0,a=-1!==(b=f).indexOf("http:")?b.replace("http:",""):b.replace("https:",""),-1!==(g=a.indexOf("?"))?a.replace(a.substring(g),""):a);if(d&&(-1!==d.indexOf(l)||-1!==h.Tag.indexOf(d))){c=h.CategoryId;break}}if(!c.length&&z){var r=function(k){var v=document.createElement("a");v.href=k;k=v.hostname.split(".");return-1!==k.indexOf("www")||2<k.length?k.slice(1).join("."):
v.hostname}(d);A.some(function(k){return k===r})&&(c=["C0004"])}return c}function m(d){return d&&window.OptanonActiveGroups&&d.every(function(f){return-1!==window.OptanonActiveGroups.indexOf(f)})}function p(d){return-1!==(d.getAttribute("class")||"").indexOf("optanon-category")}function q(d){return d.hasAttribute("data-ot-ignore")}function t(d,f){d=d.join("-");var a=f.getAttribute("class")||"";-1===a.indexOf("optanon-category-"+d)&&(d=w(d,a),f.setAttribute("class",d))}function w(d,f){return("optanon-category-"+
d+" "+f).trim()}var x=JSON.parse('[{"Tag":"https://cms.al-enterprise.com//ko-kr/rainbow","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.googletagmanager.com/gtm.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.google-analytics.com/analytics.js","CategoryId":["C0002","C0003"],"Vendor":null},{"Tag":"https://pixel.mathtag.com/misc/img","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/f92erFcbuv8","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://script.hotjar.com/modules.6707e94afd136d068134.js","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://images.conversation.al-enterprise.com/Web/img/CPaaS-banner.png","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://map.brightcove.com/config","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://developers.google.com/maps/documentation/javascript/demos/demos.css","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://s7.addthis.com/js/300/addthis_widget.js#pubid\x3dra-5882adafd63579a7","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.yammer.com/platform_embed/office_login_error","CategoryId":["C0005"],"Vendor":null},{"Tag":"https://www.al-enterprise.com/en/gated-assets/swimming-with-the-digital-sharks","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://www.al-enterprise.com/en/services/communications-software-support-services#Highlights","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://images.conversation.al-enterprise.com/Web/fonts/fontawesome-webfont.woff2","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://www.linkedin.com/px/li_sync","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://myportal-alenterprise.force.com/public/sfc/servlet.shepherd/version/download/0685I000001ebo3QAA","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/7Qm1RP69VPo","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://img.en25.com/Web/img/CPaaS-banner.png","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://px.ads.linkedin.com/collect","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://script.hotjar.com/modules.bff3b8d60820fc90decc.js","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://eastprodcdn.azureedge.net/bundles/velaro.inline.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://snap.licdn.com/li.lms-analytics/insight.min.js","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://csp-report.force.com/_/ContentDomainCSPNoAuth","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://analytics.twitter.com/i/adsct","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://s138097979.t.eloqua.com/visitor/v200/svrGP","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.facebook.com/tr/","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://img.en25.com/Web/fonts/fontawesome-webfont.woff2","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://script.hotjar.com/modules.8d61e969c7deff2570c5.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://bat.bing.com/bat.js","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://sso.ale-international.com/openam/js/ale/external/jquery-1.12.3.min.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://az416426.vo.msecnd.net/scripts/b/ai.2.min.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://connect.facebook.net/signals/config/3312173065462149","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://googleads.g.doubleclick.net/pagead/viewthroughconversion/AW-627791680/","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://cdn.syndication.twimg.com/timeline/profile","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://login.microsoftonline.com/common/oauth2/authorize","CategoryId":["C0003"],"Vendor":null}]'),
z=JSON.parse("true"),A=[""],u=["embed","iframe","img","script"];(new MutationObserver(function(d){Array.prototype.forEach.call(d,function(f){Array.prototype.forEach.call(f.addedNodes,function(e){var h,l;if(1===e.nodeType&&-1!==u.indexOf(e.tagName.toLowerCase())&&!p(e)&&!q(e))if("script"===e.tagName.toLowerCase()){if((l=n(h=e.src||"")).length){t(l,e);m(l)||(e.type="text/plain");var r=function(k){"text/plain"===e.getAttribute("type")&&k.preventDefault();e.removeEventListener("beforescriptexecute",r)};
e.addEventListener("beforescriptexecute",r)}}else(l=n(h=e.src||"")).length&&(t(l,e),m(l)||(e.removeAttribute("src"),e.setAttribute("data-src",h)))});var a=f.target;if(f.attributeName&&(!p(a)||!q(a)))if("script"===a.nodeName.toLowerCase()){if((c=n(b=a.src||"")).length){t(c,a);m(c)||(a.type="text/plain");var g=function(e){"text/plain"===a.getAttribute("type")&&e.preventDefault();a.removeEventListener("beforescriptexecute",g)};a.addEventListener("beforescriptexecute",g)}}else if(-1!==u.indexOf(f.target.nodeName.toLowerCase())){var b,
c;(c=n(b=a.src||"")).length&&(t(c,a),m(c)||(a.removeAttribute("src"),a.setAttribute("data-src",b)))}})})).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["src"]});var y=document.createElement;document.createElement=function(){for(var d=[],f=0;f<arguments.length;f++)d[f]=arguments[f];if("script"!==d[0].toLowerCase()&&-1===u.indexOf(d[0].toLowerCase()))return y.bind(document).apply(void 0,d);var a=y.bind(document).apply(void 0,d),g=a.setAttribute.bind(a);return Object.defineProperties(a,
{src:{get:function(){return a.getAttribute("src")||""},set:function(b){var c="";"string"==typeof b?c=b:b instanceof Object&&(c=b.toString());c=n(c);!c.length||"script"!==d[0].toLowerCase()||p(a)||m(c)||q(a)?!c.length||-1===u.indexOf(d[0].toLowerCase())||p(a)||m(c)||q(a)?g("src",b):(a.removeAttribute("src"),g("data-src",b),b=a.getAttribute("class"),c=c.join("-"),b||(b=w(c,b||""),g("class",b))):(g("type","text/plain"),g("src",b));return!0}},type:{set:function(b){var c=n(a.src||"");b=!c.length||p(a)||
m(c)||q(a)?b:"text/plain";return g("type",b),!0}},class:{set:function(b){var c=n(a.src);!c.length||p(a)||m(c)||q(a)?g("class",b):(b=w(c.join("-"),b),g("class",b));return!0}}}),a.setAttribute=function(b,c,e){"type"!==b&&"src"!==b||e?g(b,c):a[b]=c},a}}();