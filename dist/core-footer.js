(function(){
    //DOM
    var featuredPlaceholder = document.getElementById("featured-placeholder"),
        featuredContainer = document.getElementById("featured-container")
    ;

    function featuredImageLoad(){
        featuredContainer.style.backgroundImage = "url('" + featuredPlaceholder.getAttribute("src") + "')";
    }

    if(featuredPlaceholder && featuredContainer){
        featuredPlaceholder.addEventListener("load", function(e){
            featuredImageLoad();
        }, false);
    }
})();