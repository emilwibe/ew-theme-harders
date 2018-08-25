(function(){
    //DOM
    var navToggle = document.getElementById("nav-toggle"),
        navPrimary = document.getElementById("nav-primary"),
        homePage = document.getElementsByClassName("home"),
        featuredPlaceholder = document.getElementById("featured-placeholder"),
        featuredPlaceholderSrc,
        featuredContainer = document.getElementById("featured-container"),
        featuredWrapper = document.getElementById("featured-wrapper"),
        featuredTitle = document.getElementById("featured-title"),
        featuredDate = document.getElementById("featured-date"),
        featuredLink = document.getElementById("featured-link"),
        featuredKlub = document.getElementById("featured-klub"),
        featuredSlider = document.getElementById("featured-slider"),
        featuredEventCounter = 0

    ;
    navToggle.addEventListener("click", function(e){
        e.preventDefault();
        navPrimary.classList.toggle("is-hidden");

    }, false);

    if(homePage.length){
        function featuredImageLoad(){
            featuredPlaceholderSrc = featuredPlaceholder.getAttribute("src");
            featuredContainer.style.backgroundImage = 'url(' + featuredPlaceholderSrc + ')';
            featuredContainer.style.animationName = "fade-in";
            featuredWrapper.style.animationName = "fade-in";
            featuredWrapper.style.animationDelay = "0";
            featuredTitle.style.animationName = "fade-in";
            featuredDate.style.animationName = "fade-in";
            featuredKlub.style.animationName = "fade-in";
        }
        function featuredSwitchContent(){
            if(featuredEventArray.length > 1){
                featuredWrapper.style.animationDelay = "0s";
                featuredWrapper.style.animationDuration = "0.10s";
                featuredWrapper.style.animationName = "fade-out";
                featuredContainer.style.animationName = "fade-out";
                featuredTitle.style.animationName = "fade-out";
                featuredDate.style.animationName = "fade-out";
                featuredKlub.style.animationName = "fade-out";
                setTimeout(function(){
                    if(featuredEventArray[featuredEventCounter]["klub25"]){
                        featuredKlub.setAttribute("data-klub", "Club25");
                    } else {
                        featuredKlub.setAttribute("data-klub", "false");
                    }
                    featuredTitle.innerHTML = featuredEventArray[featuredEventCounter]["eventTitle"];
                    featuredDate.innerHTML = featuredEventArray[featuredEventCounter]["eventTime"];
                    featuredLink.setAttribute("href", featuredEventArray[featuredEventCounter]["eventLink"]);
                    featuredWrapper.style.animationDelay = "0.75s";
                    featuredWrapper.style.animationDuration = "1.5s";
                    featuredPlaceholder.setAttribute("src", featuredEventArray[featuredEventCounter]["eventThumbnail"]);
                }, 2000);
                if(featuredEventCounter == featuredEventArray.length - 1){
                    featuredEventCounter = 0;
                } else {
                    featuredEventCounter += 1;
                }
            }
        }

        featuredWrapper.style.animationName = "fade-in";
        featuredWrapper.style.animationDelay = "0";
        featuredTitle.style.animationName = "fade-in";
        featuredDate.style.animationName = "fade-in";
        featuredKlub.style.animationName = "fade-in";

        setInterval(featuredSwitchContent, 10000);
    
        if(featuredPlaceholder && featuredContainer){
            featuredPlaceholder.addEventListener("load", function(e){
                featuredImageLoad();
            }, false);
        }
    
        if(featuredEventArray.length){
            for(let i = 0 ; i < featuredEventArray.length ; i += 1){
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

        var scrollMax,
            scrollNum = 0
        ;
        document.addEventListener("wheel", function(e){
            e.preventDefault();
            scrollMax = featuredSlider.scrollWidth - featuredSlider.clientWidth;
            if(scrollNum + e.deltaX + e.deltaY >= 0 && scrollNum + e.deltaX + e.deltaY <= scrollMax){
                scrollNum += e.deltaX + e.deltaY;
                featuredSlider.scrollLeft = scrollNum;
            }  
        }, false);
        
    }
})();