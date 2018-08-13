(function(){
    //DOM
    var featuredPlaceholder = document.getElementById("featured-placeholder"),
        featuredPlaceholderSrc,
        featuredContainer = document.getElementById("featured-container"),
        featuredWrapper = document.getElementById("featured-wrapper"),
        featuredTitle = document.getElementById("featured-title"),
        featuredDate = document.getElementById("featured-date"),
        featuredLink = document.getElementById("featured-link"),
        featuredSlider = document.getElementById("featured-slider"),
        featuredEventArrayLength = featuredEventArray.length

    ;

    function featuredImageLoad(){
        featuredPlaceholderSrc = featuredPlaceholder.getAttribute("src");
        featuredContainer.style.backgroundImage = 'url(' + featuredPlaceholderSrc + ')';
        featuredContainer.style.animationName = "fade-in";
        featuredWrapper.style.animationName = "fade-in";
        featuredTitle.style.animationName = "fade-in";
        featuredDate.style.animationName = "fade-in";
        featuredLink.style.animationName = "fade-in";
    }

    if(featuredPlaceholder && featuredContainer){
        featuredPlaceholder.addEventListener("load", function(e){
            featuredImageLoad();
        }, false);
    }

    if(featuredEventArrayLength){
        for(let i = 0 ; i < featuredEventArrayLength ; i += 1){
            var newEl = document.createElement("a");
            newEl.classList.add("featured", "event", "slide");
            newEl.setAttribute("href", featuredEventArray[i]["eventTitle"]);
            newEl.innerHTML = featuredEventArray[i]["eventTitle"];
            featuredSlider.appendChild(newEL);
        }
    }

})();