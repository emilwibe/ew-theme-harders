!function(){var e,t=document.getElementById("nav-toggle"),a=document.getElementById("nav-primary"),n=document.getElementsByClassName("home"),i=document.getElementById("featured-placeholder"),d=document.getElementById("featured-container"),l=document.getElementById("featured-wrapper"),r=document.getElementById("featured-title"),m=document.getElementById("featured-date"),u=document.getElementById("featured-link"),o=document.getElementById("featured-klub"),s=document.getElementById("featured-slider"),f=0;if(t.addEventListener("click",function(e){e.preventDefault(),a.classList.toggle("is-hidden")},!1),n.length){if(l.style.animationName="fade-in",l.style.animationDelay="0",r.style.animationName="fade-in",m.style.animationName="fade-in",o.style.animationName="fade-in",setInterval(function(){featuredEventArray.length>1&&(setTimeout(function(){featuredEventArray[f].klub25?o.setAttribute("data-klub","Club25"):o.setAttribute("data-klub","false"),r.innerHTML=featuredEventArray[f].eventTitle,m.innerHTML=featuredEventArray[f].eventTime,u.setAttribute("href",featuredEventArray[f].eventLink),l.style.animationDelay="0.75s",l.style.animationDuration="1.5s",i.setAttribute("src",featuredEventArray[f].eventThumbnail)},2e3),f==featuredEventArray.length-1?f=0:f+=1)},1e4),i&&d&&i.addEventListener("load",function(t){l.style.animationDelay="0s",l.style.animationDuration="0.10s",l.style.animationName="fade-out",d.style.animationName="fade-out",r.style.animationName="fade-out",m.style.animationName="fade-out",o.style.animationName="fade-out",setTimeout(function(){e=i.getAttribute("src"),d.style.backgroundImage="url("+e+")",d.style.animationName="fade-in",l.style.animationName="fade-in",l.style.animationDelay="0",r.style.animationName="fade-in",m.style.animationName="fade-in",o.style.animationName="fade-in"},1e3)},!1),featuredEventArray.length)for(let e=0;e<featuredEventArray.length;e+=1){var y=document.createElement("a"),c=document.createElement("h2"),v=document.createElement("time"),E=document.createElement("span");y.classList.add("featured","event","slide"),y.setAttribute("href",featuredEventArray[e].eventLink),c.innerHTML=featuredEventArray[e].eventTitle,v.innerHTML=featuredEventArray[e].eventTime,y.appendChild(c),y.appendChild(v),featuredEventArray[e].klub25&&(E.classList.add("k25"),E.innerHTML="Klub25",y.appendChild(E)),s.appendChild(y)}var g,h=0;document.addEventListener("wheel",function(e){e.preventDefault(),g=s.scrollWidth-s.clientWidth,h+e.deltaX+e.deltaY>=0&&h+e.deltaX+e.deltaY<=g&&(h+=e.deltaX+e.deltaY,s.scrollLeft=h)},!1)}}();