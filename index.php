<?php get_header(); ?>

<?php
    the_post_thumbnail('full', [
        'class' => 'thumbnail default full'
    ]);
?>

<?php get_footer(); ?>