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
/*
    setInterval(function(){

    }, 5000);
    /*
    .then(function(response) {
        location.reload(true);
    });*/
</script>

<?php get_footer(); ?>