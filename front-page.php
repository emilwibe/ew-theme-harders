<?php get_header(); ?>

<?php
  if ( get_field( 'live-feed_embed-code' ) ) {
    get_template_part('template-parts/index', 'live');
  } else {
    get_template_part('template-parts/event', 'archive');
  }
?>

<?php get_footer(); ?>