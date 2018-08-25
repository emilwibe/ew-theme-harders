!function(){function e(e,r){return[].slice.call((r||document).querySelectorAll(e))}if(window.addEventListener){var r=window.StyleFix={link:function(e){var t=e.href||e.getAttribute("data-href");try{if(!t||"stylesheet"!==e.rel||e.hasAttribute("data-noprefix"))return}catch(e){return}var n,i=t.replace(/[^\/]+$/,""),a=(/^[a-z]{3,10}:/.exec(i)||[""])[0],l=(/^[a-z]{3,10}:\/\/[^\/]+/.exec(i)||[""])[0],o=/^([^?]*)\??/.exec(t)[1],s=e.parentNode,u=new XMLHttpRequest;u.onreadystatechange=function(){4===u.readyState&&n()},n=function(){if((t=u.responseText)&&e.parentNode&&(!u.status||400>u.status||600<u.status)){if((t=r.fix(t,!0,e))&&i){var t=t.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi,function(e,r,t){return/^([a-z]{3,10}:|#)/i.test(t)?e:/^\/\//.test(t)?'url("'+a+t+'")':/^\//.test(t)?'url("'+l+t+'")':/^\?/.test(t)?'url("'+o+t+'")':'url("'+i+t+'")'}),n=i.replace(/([\\\^\$*+[\]?{}.=!:(|)])/g,"\\$1");t=t.replace(RegExp("\\b(behavior:\\s*?url\\('?\"?)"+n,"gi"),"$1")}(n=document.createElement("style")).textContent="/*# sourceURL="+e.getAttribute("href")+" */\n/*@ sourceURL="+e.getAttribute("href")+" */\n"+t,n.media=e.media,n.disabled=e.disabled,n.setAttribute("data-href",e.getAttribute("href")),e.id&&(n.id=e.id),s.insertBefore(n,e),s.removeChild(e),n.media=e.media}};try{u.open("GET",t),u.send(null)}catch(e){"undefined"!=typeof XDomainRequest&&((u=new XDomainRequest).onerror=u.onprogress=function(){},u.onload=n,u.open("GET",t),u.send(null))}e.setAttribute("data-inprogress","")},styleElement:function(e){if(!e.hasAttribute("data-noprefix")){var t=e.disabled;e.textContent=r.fix(e.textContent,!0,e),e.disabled=t}},styleAttribute:function(e){var t=e.getAttribute("style");t=r.fix(t,!1,e);e.setAttribute("style",t)},process:function(){e('link[rel="stylesheet"]:not([data-inprogress])').forEach(StyleFix.link),e("style").forEach(StyleFix.styleElement),e("[style]").forEach(StyleFix.styleAttribute)},register:function(e,t){(r.fixers=r.fixers||[]).splice(void 0===t?r.fixers.length:t,0,e)},fix:function(e,t,n){if(r.fixers)for(var i=0;i<r.fixers.length;i++)e=r.fixers[i](e,t,n)||e;return e},camelCase:function(e){return e.replace(/-([a-z])/g,function(e,r){return r.toUpperCase()}).replace("-","")},deCamelCase:function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})}};setTimeout(function(){e('link[rel="stylesheet"]').forEach(StyleFix.link)},10),document.addEventListener("DOMContentLoaded",StyleFix.process,!1)}}(),function(e){function r(e,r,n,i,a){return(e=t[e]).length&&(e=RegExp(r+"("+e.join("|")+")"+n,"gi"),a=a.replace(e,i)),a}if(window.StyleFix&&window.getComputedStyle){var t=window.PrefixFree={prefixCSS:function(e,n,i){var a=t.prefix;if(-1<t.functions.indexOf("linear-gradient")&&(e=e.replace(/(\s|:|,)(repeating-)?linear-gradient\(\s*(-?\d*\.?\d*)deg/gi,function(e,r,t,n){return r+(t||"")+"linear-gradient("+(90-n)+"deg"})),e=r("functions","(\\s|:|,)","\\s*\\(","$1"+a+"$2(",e),e=r("keywords","(\\s|:)","(\\s|;|\\}|$)","$1"+a+"$2$3",e),e=r("properties","(^|\\{|\\s|;)","\\s*:","$1"+a+"$2:",e),t.properties.length){var l=RegExp("\\b("+t.properties.join("|")+")(?!:)","gi");e=r("valueProperties","\\b",":(.+?);",function(e){return e.replace(l,a+"$1")},e)}return n&&(e=r("selectors","","\\b",t.prefixSelector,e),e=r("atrules","@","\\b","@"+a+"$1",e)),(e=e.replace(RegExp("-"+a,"g"),"-")).replace(/-\*-(?=[a-z]+)/gi,t.prefix)},property:function(e){return(0<=t.properties.indexOf(e)?t.prefix:"")+e},value:function(e,n){return e=r("functions","(^|\\s|,)","\\s*\\(","$1"+t.prefix+"$2(",e),e=r("keywords","(^|\\s)","(\\s|$)","$1"+t.prefix+"$2$3",e),0<=t.valueProperties.indexOf(n)&&(e=r("properties","(^|\\s|,)","($|\\s|,)","$1"+t.prefix+"$2$3",e)),e},prefixSelector:function(e){return t.selectorMap[e]||e},prefixProperty:function(e,r){var n=t.prefix+e;return r?StyleFix.camelCase(n):n}};!function(){var e={},r=[],n=getComputedStyle(document.documentElement,null),i=document.createElement("div").style,a=function(t){if("-"===t.charAt(0)){r.push(t);var n=(t=t.split("-"))[1];for(e[n]=++e[n]||1;3<t.length;)t.pop(),n=t.join("-"),StyleFix.camelCase(n)in i&&-1===r.indexOf(n)&&r.push(n)}};if(n&&0<n.length)for(var l=0;l<n.length;l++)a(n[l]);else for(var o in n)a(StyleFix.deCamelCase(o));var s,u;l=0;for(u in e)l<(n=e[u])&&(s=u,l=n);for(t.prefix="-"+s+"-",t.Prefix=StyleFix.camelCase(t.prefix),t.properties=[],l=0;l<r.length;l++)0===(o=r[l]).indexOf(t.prefix)&&(s=o.slice(t.prefix.length),StyleFix.camelCase(s)in i||t.properties.push(s));!("Ms"!=t.Prefix||"transform"in i||"MsTransform"in i)&&"msTransform"in i&&t.properties.push("transform","transform-origin"),t.properties.sort()}(),function(){function e(e,r){return a[r]="",a[r]=e,!!a[r]}var r={"linear-gradient":{property:"backgroundImage",params:"red, teal"},calc:{property:"width",params:"1px + 5%"},element:{property:"backgroundImage",params:"#foo"},"cross-fade":{property:"backgroundImage",params:"url(a.png), url(b.png), 50%"},"image-set":{property:"backgroundImage",params:"url(a.png) 1x, url(b.png) 2x"}};r["repeating-linear-gradient"]=r["repeating-radial-gradient"]=r["radial-gradient"]=r["linear-gradient"];var n={initial:"color",grab:"cursor",grabbing:"cursor","zoom-in":"cursor","zoom-out":"cursor",box:"display",flexbox:"display","inline-flexbox":"display",flex:"display","inline-flex":"display",grid:"display","inline-grid":"display","max-content":"width","min-content":"width","fit-content":"width","fill-available":"width","contain-floats":"width"};t.functions=[],t.keywords=[];var i,a=document.createElement("div").style;for(i in r){var l,o=(l=r[i]).property;!e(l=i+"("+l.params+")",o)&&e(t.prefix+l,o)&&t.functions.push(i)}for(var s in n)!e(s,o=n[s])&&e(t.prefix+s,o)&&t.keywords.push(s)}(),function(){function r(e){return l.textContent=e+"{}",!!l.sheet.cssRules.length}var n={":any-link":null,"::backdrop":null,":fullscreen":null,":full-screen":":fullscreen","::placeholder":null,":placeholder":"::placeholder","::input-placeholder":"::placeholder",":input-placeholder":"::placeholder",":read-only":null,":read-write":null,"::selection":null},i={keyframes:"name",viewport:null,document:'regexp(".")'};t.selectors=[],t.selectorMap={},t.atrules=[];var a,l=e.appendChild(document.createElement("style"));for(a in n){var o=n[a]||a,s=a.replace(/::?/,function(e){return e+t.prefix});!r(o)&&r(s)&&(t.selectors.push(o),t.selectorMap[o]=s)}for(var u in i)!r("@"+(n=u+" "+(i[u]||"")))&&r("@"+t.prefix+n)&&t.atrules.push(u);e.removeChild(l)}(),t.valueProperties=["transition","transition-property","will-change"],e.className+=" "+t.prefix,StyleFix.register(t.prefixCSS)}}(document.documentElement);