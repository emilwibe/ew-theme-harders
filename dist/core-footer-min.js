!function(){var e,t=document.getElementsByClassName("home"),n=document.getElementById("featured-placeholder"),a=document.getElementById("featured-container"),i=document.getElementById("featured-wrapper"),r=document.getElementById("featured-title"),d=document.getElementById("featured-date"),l=document.getElementById("featured-link"),m=document.getElementById("featured-slider"),o=featuredEventArray.length,u=0;if(setInterval(function(){o>2&&(u==o-1?u=0:u+=1,i.style.animationDelay="0s",i.style.animationDuration="0.10s",i.style.animationName="fade-out",a.style.animationName="fade-out",r.style.animationName="fade-out",d.style.animationName="fade-out",l.style.animationName="fade-out",setTimeout(function(){r.innerHTML=featuredEventArray[u].eventTitle,d.innerHTML=featuredEventArray[u].eventTime,l.setAttribute("href",featuredEventArray[u].eventLink),i.style.animationDelay="0.75s",i.style.animationDuration="1.5s",n.setAttribute("src",featuredEventArray[u].eventThumbnail)},2e3))},15e3),n&&a&&n.addEventListener("load",function(t){e=n.getAttribute("src"),a.style.backgroundImage="url("+e+")",a.style.animationName="fade-in",i.style.animationName="fade-in",i.style.animationDelay="0",r.style.animationName="fade-in",d.style.animationName="fade-in",l.style.animationName="fade-in"},!1),o)for(let e=0;e<o;e+=1){var s=document.createElement("a"),f=document.createElement("h2"),y=document.createElement("time");s.classList.add("featured","event","slide"),s.setAttribute("href",featuredEventArray[e].eventLink),f.innerHTML=featuredEventArray[e].eventTitle,y.innerHTML=featuredEventArray[e].eventTime,s.appendChild(f),s.appendChild(y),m.appendChild(s)}if(t.length){var c,v=0;document.addEventListener("wheel",function(e){e.preventDefault(),c=m.scrollWidth-m.clientWidth,console.log("scrollMax: "+c),console.log("scrollNum "+v),v>=-5&&v<=c+5&&(v+=e.deltaX+e.deltaY,m.scrollLeft=v)},!1)}}();