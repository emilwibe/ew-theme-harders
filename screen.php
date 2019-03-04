<?php /* Template Name: Info Screen */?>

<?php get_header('screen'); ?>

<?php get_template_part('template-parts/event', 'archive'); ?>

<script>
    var
        previous = null,
        current = null
    ;

    fetch('https://harders.nu/wp-json/wp/v2/event')
    .then(function(response){
        return response.json()
    })
    .then(function(myJson){
        previous = JSON.stringify(myJson);
        console.log(previous);
    })
    ;
    setInterval(function(){

        fetch('https://harders.nu/wp-json/wp/v2/event')
        .then(function(response){
            return response.json()
        })
        .then(function(myJson){
            current = JSON.stringify(myJson);
        })
    ;
        if(previous !== current){
            location.reload(true);
        } else {
            console.log("Nothing new to see here");
        }
    }, 5000);
</script>

<?php get_footer(); ?>