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
        featuredFynsLive = document.getElementById("featured-fynslive"),
        featuredSlider = document.getElementById("featured-slider"),
        featuredEventCounter = 1

    ;
    if(navToggle){
        navToggle.addEventListener("click", function(e){
            e.preventDefault();
            navPrimary.classList.toggle("is-hidden");
        }, false);
    }

    if(featuredContainer){
        function featuredImageLoad(){
            if ( featuredWrapper ) {
                featuredWrapper.style.animationDelay = "0s";
                featuredWrapper.style.animationDuration = "0.10s";
                featuredWrapper.style.animationName = "fade-out";
                featuredContainer.style.animationName = "fade-out";
                featuredTitle.style.animationName = "fade-out";
                featuredDate.style.animationName = "fade-out";
                featuredKlub.style.animationName = "fade-out";
                featuredFynsLive.style.animationName = "fade-out";
            }
            

            setTimeout(function(){
                featuredPlaceholderSrc = featuredPlaceholder.getAttribute("src");

                if ( featuredWrapper ) {
                    if(featuredEventArray[featuredEventCounter]["klub25"]){
                        featuredKlub.setAttribute("data-klub", "Club25");
                    } else {
                        featuredKlub.setAttribute("data-klub", "false");
                    }

                    if(featuredEventArray[featuredEventCounter]["fynlive"]){
                        featuredFynsLive.setAttribute("data-klub", "fynlive");
                    } else {
                        featuredFynsLive.setAttribute("data-klub", "false");
                    }

                    featuredTitle.innerHTML = featuredEventArray[featuredEventCounter]["eventTitle"];
                    featuredDate.innerHTML = featuredEventArray[featuredEventCounter]["eventTime"];
                    featuredLink.setAttribute("href", featuredEventArray[featuredEventCounter]["eventLink"]);
                    featuredWrapper.style.animationDelay = "0.75s";
                    featuredWrapper.style.animationDuration = "1.5s";

                    featuredWrapper.style.animationName = "fade-in";
                    featuredWrapper.style.animationDelay = "0";
                    featuredTitle.style.animationName = "fade-in";
                    featuredDate.style.animationName = "fade-in";
                    featuredKlub.style.animationName = "fade-in";
                    featuredFynsLive.style.animationName = "fade-in";
                }
                


                featuredContainer.style.backgroundImage = 'url(' + featuredPlaceholderSrc + ')';
                featuredContainer.style.animationName = "fade-in";
                

                if(featuredEventCounter == featuredEventArray.length - 1){
                    featuredEventCounter = 0;
                } else {
                    featuredEventCounter += 1;
                }

                console.log("Counter: " + featuredEventCounter);
            }, 1000);
            
        }
        function featuredSwitchContent(){
            if(featuredEventArray.length > 1){
                featuredPlaceholder.setAttribute("src", featuredEventArray[featuredEventCounter]["eventThumbnail"]);
            }
        }

        if ( featuredWrapper ) {
            featuredWrapper.style.animationName = "fade-in";
            featuredWrapper.style.animationDelay = "0";
            featuredTitle.style.animationName = "fade-in";
            featuredDate.style.animationName = "fade-in";
            featuredKlub.style.animationName = "fade-in";
            featuredFynsLive.style.animationName = "fade-in";
        }
        

        setInterval(featuredSwitchContent, 10000);
    
        if(featuredPlaceholder && featuredContainer){
            featuredPlaceholder.addEventListener("load", function(e){
                featuredImageLoad();
            }, false);
        }
    }
    // events i bunden af forsiden
    if ( featuredSlider ) {
        if(featuredEventArray.length && homePage.length){
            for(let i = 0 ; i < featuredEventArray.length ; i += 1){
                var newEl = document.createElement("a");
                var newHeading = document.createElement("h2");
                var newTime = document.createElement("time");
                var newKlub = document.createElement("span");
                var newFL = document.createElement("span");

                newEl.classList.add("featured", "event", "slide");
                newEl.setAttribute("href", featuredEventArray[i]["eventLink"]);
                newHeading.innerHTML = featuredEventArray[i]["eventTitle"];
                newTime.innerHTML = featuredEventArray[i]["eventTime"];
                newEl.appendChild(newHeading);
                newEl.appendChild(newTime);

                if(featuredEventArray[i]["klub25"]){
                    newKlub.classList.add("k25");
                    newKlub.innerHTML = "Klub25";
                    newEl.appendChild(newKlub);
                }
                if( featuredEventArray[i]["fynlive"] ){
                    newFL.classList.add("FL");
                    newFL.innerHTML = "FynLIVE";
                    newEl.appendChild(newFL);
                }
                featuredSlider.appendChild(newEl);
            }
        }
        var scrollMax,
            scrollNum = 0
        ;
        document.addEventListener("wheel", function(e){
            scrollMax = featuredSlider.scrollWidth - featuredSlider.clientWidth;
            if(scrollNum + e.deltaX + e.deltaY >= 0 && scrollNum + e.deltaX + e.deltaY <= scrollMax){
                scrollNum += e.deltaX + e.deltaY;
                featuredSlider.scrollLeft = scrollNum;
            }  
        }, false, {passive: true});
    }
})();