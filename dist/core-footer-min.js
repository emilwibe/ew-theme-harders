!function(){var e,t=document.getElementsByClassName("home"),n=document.getElementById("featured-placeholder"),a=document.getElementById("featured-container"),i=document.getElementById("featured-wrapper"),r=document.getElementById("featured-title"),d=document.getElementById("featured-date"),l=document.getElementById("featured-link"),m=document.getElementById("featured-slider"),u=0;if(t.length){if(setInterval(function(){featuredEventArray.length>1&&(i.style.animationDelay="0s",i.style.animationDuration="0.10s",i.style.animationName="fade-out",a.style.animationName="fade-out",r.style.animationName="fade-out",d.style.animationName="fade-out",l.style.animationName="fade-out",setTimeout(function(){r.innerHTML=featuredEventArray[u].eventTitle,d.innerHTML=featuredEventArray[u].eventTime,l.setAttribute("href",featuredEventArray[u].eventLink),i.style.animationDelay="0.75s",i.style.animationDuration="1.5s",n.setAttribute("src",featuredEventArray[u].eventThumbnail)},2e3),u==featuredEventArray.length-1?u=0:u+=1)},1e4),n&&a&&n.addEventListener("load",function(t){e=n.getAttribute("src"),a.style.backgroundImage="url("+e+")",a.style.animationName="fade-in",i.style.animationName="fade-in",i.style.animationDelay="0",r.style.animationName="fade-in",d.style.animationName="fade-in",l.style.animationName="fade-in"},!1),featuredEventArray.length)for(let e=0;e<featuredEventArray.length;e+=1){var o=document.createElement("a"),f=document.createElement("h2"),s=document.createElement("time");o.classList.add("featured","event","slide"),o.setAttribute("href",featuredEventArray[e].eventLink),f.innerHTML=featuredEventArray[e].eventTitle,s.innerHTML=featuredEventArray[e].eventTime,o.appendChild(f),o.appendChild(s),m.appendChild(o)}var y,c=0;document.addEventListener("wheel",function(e){e.preventDefault(),y=m.scrollWidth-m.clientWidth,c+e.deltaX+e.deltaY>=0&&c+e.deltaX+e.deltaY<=y&&(c+=e.deltaX+e.deltaY,m.scrollLeft=c)},!1)}}();