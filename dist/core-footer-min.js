!function(){var e,t=document.getElementsByClassName("home"),n=document.getElementById("featured-placeholder"),a=document.getElementById("featured-container"),i=document.getElementById("featured-wrapper"),d=document.getElementById("featured-title"),r=document.getElementById("featured-date"),m=document.getElementById("featured-link"),l=document.getElementById("featured-slider"),u=featuredEventArray.length,o=0;if(setInterval(function(){u>2&&(o==u-1?o=0:o+=1,i.style.animationDelay="0s",i.style.animationDuration="0.10s",i.style.animationName="fade-out",a.style.animationName="fade-out",d.style.animationName="fade-out",r.style.animationName="fade-out",m.style.animationName="fade-out",setTimeout(function(){d.innerHTML=featuredEventArray[o].eventTitle,r.innerHTML=featuredEventArray[o].eventTime,m.setAttribute("href",featuredEventArray[o].eventLink),i.style.animationDelay="0.75s",i.style.animationDuration="1.5s",n.setAttribute("src",featuredEventArray[o].eventThumbnail)},2e3))},15e3),n&&a&&n.addEventListener("load",function(t){e=n.getAttribute("src"),a.style.backgroundImage="url("+e+")",a.style.animationName="fade-in",i.style.animationName="fade-in",i.style.animationDelay="0",d.style.animationName="fade-in",r.style.animationName="fade-in",m.style.animationName="fade-in"},!1),u)for(let e=0;e<u;e+=1){var s=document.createElement("a"),f=document.createElement("h2"),y=document.createElement("time");s.classList.add("featured","event","slide"),s.setAttribute("href",featuredEventArray[e].eventLink),f.innerHTML=featuredEventArray[e].eventTitle,y.innerHTML=featuredEventArray[e].eventTime,s.appendChild(f),s.appendChild(y),l.appendChild(s)}t.length&&document.addEventListener("wheel",function(e){l.scrollLeft=20},!1)}();