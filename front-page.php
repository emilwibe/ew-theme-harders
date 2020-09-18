<?php get_header(); ?>

<?php

  if ( get_field( 'live-feed_embed-code', 'option' ) && get_field( 'live-feed_embed' ) ) {
    get_template_part('template-parts/index', 'live');
  } else {
    get_template_part('template-parts/event', 'archive');
  }
  
?>
<!-- hello there <?php echo get_field( 'live-feed_embed', 'option' ); ?> -->
<?php get_footer(); ?>