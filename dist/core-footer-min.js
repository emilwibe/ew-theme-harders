!function(){var e,t=document.getElementById("featured-placeholder"),n=document.getElementById("featured-container"),a=document.getElementById("featured-wrapper"),d=document.getElementById("featured-title"),i=document.getElementById("featured-date"),l=document.getElementById("featured-link"),m=(document.getElementById("featured-slider"),featuredEventArray.length);t&&n&&t.addEventListener("load",function(m){e=t.getAttribute("src"),n.style.backgroundImage="url("+e+")",n.style.animationName="fade-in",a.style.animationName="fade-in",d.style.animationName="fade-in",i.style.animationName="fade-in",l.style.animationName="fade-in"},!1),m&&console.log("it is all fine now")}();