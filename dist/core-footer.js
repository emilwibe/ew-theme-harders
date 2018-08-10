(function(){
    //DOM
    var featuredPlaceholder = document.getElementById("featured-placeholder"),
        featuredPlaceholderSrc,
        featuredContainer = document.getElementById("featured-container"),
        eventTitle = document.getElementById("event-title")
    ;

    function featuredImageLoad(){
        featuredPlaceholderSrc = featuredPlaceholder.getAttribute("src");
        featuredContainer.style.backgroundImage = 'url(' + featuredPlaceholderSrc + ')';
        featuredContainer.style.animationName = "fade-in";
        eventTitle.style.animationName = "fade-in";
    }

    if(featuredPlaceholder && featuredContainer){
        featuredPlaceholder.addEventListener("load", function(e){
            featuredImageLoad();
        }, false);
    }
})();