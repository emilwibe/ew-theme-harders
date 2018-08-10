(function(){
    //DOM ELEMENTS
    var featuredPlaceholder = document.getElementById("featured-placeholder"),
        featuredContainer = document.getElementById("featured-container")
    ;

    if(featuredPlaceholder){
        featuredPlaceholder.addEventListener("load", function(e){
            featuredContainer.style.backgroundImage = "url(" + featuredPlaceholder.getAttribute("src") + ")";
        }, false);
    }
})();