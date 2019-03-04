<?php /* Template Name: Info Screen */?>

<?php get_header('screen'); ?>

<?php get_template_part('template-parts/event', 'archive'); ?>

<script>
    fetch('https://harders.nu/wp-json/wp/v2/event')
    .then(function(response) {
        location.reload(true);
    });
</script>

<?php get_footer(); ?>