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
        featuredEventArrayLength = featuredEventArray.length,
        featuredEventCounter = 0

    ;

    function featuredImageLoad(){
        featuredPlaceholderSrc = featuredPlaceholder.getAttribute("src");
        featuredContainer.style.backgroundImage = 'url(' + featuredPlaceholderSrc + ')';
        featuredContainer.style.animationName = "fade-in";
        featuredWrapper.style.animationName = "fade-in";
        featuredWrapper.style.animationDelay = "0";
        featuredTitle.style.animationName = "fade-in";
        featuredDate.style.animationName = "fade-in";
        featuredLink.style.animationName = "fade-in";
    }
    function featuredSwitchContent(){
        if(featuredEventArrayLength > 2){
            if(featuredEventCounter == featuredEventArrayLength - 1){
                featuredEventCounter = 0;
            } else {
                featuredEventCounter += 1;
            }
            featuredContainer.style.animationName = "fade-out";
            featuredWrapper.style.animationName = "fade-out";
            featuredTitle.style.animationName = "fade-out";
            featuredDate.style.animationName = "fade-out";
            featuredLink.style.animationName = "fade-out";
            
            featuredTitle.innerHTML = featuredEventArray[featuredEventCounter]["eventTitle"];
            featuredDate.innerHTML = featuredEventArray[featuredEventCounter]["eventTime"];
            featuredLink.setAttribute("href", featuredEventArray[featuredEventCounter]["eventLink"]);
            featuredWrapper.style.animationDelay = "0.75s";
            setTimeout(function(){
                featuredPlaceholder.setAttribute("src", featuredEventArray[featuredEventCounter]["eventThumbnail"]);
            }, 1500);
        }
    }

    setInterval(featuredSwitchContent, 10000);

    if(featuredPlaceholder && featuredContainer){
        featuredPlaceholder.addEventListener("load", function(e){
            featuredImageLoad();
        }, false);
    }

    if(featuredEventArrayLength){
        for(let i = 0 ; i < featuredEventArrayLength ; i += 1){
            var newEl = document.createElement("a");
            var newHeading = document.createElement("h2");
            var newTime = document.createElement("time");
            newEl.classList.add("featured", "event", "slide");
            newEl.setAttribute("href", featuredEventArray[i]["eventLink"]);
            newHeading.innerHTML = featuredEventArray[i]["eventTitle"];
            newTime.innerHTML = featuredEventArray[i]["eventTime"];
            newEl.appendChild(newHeading);
            newEl.appendChild(newTime);
            featuredSlider.appendChild(newEl);
        }
    }

})();