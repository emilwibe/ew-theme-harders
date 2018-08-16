<?php
  $months = array();
  $months[1] = "Januar";
  $months[2] = "Februar";
  $months[3] = "Marts";
  $months[4] = "April";
  $months[5] = "Maj";
  $months[6] = "Juni";
  $months[7] = "Juli";
  $months[8] = "August";
  $months[9] = "September";
  $months[10] = "Oktober";
  $months[11] = "November";
  $months[12] = "December";

  $date_now = date('Y-m-d H:i:s');
  $time_now = strtotime($date_now);

  $time_next_year = strtotime('+365 day', $time_now);
  $date_next_year = date('Y-m-d H:i:s', $time_next_year);

  $args = array(
      'post_type' => 'event',
      'posts_per_page' => 1,
      'meta_query' => array(
          array(
            'key' => 'event_datetime',
            'compare' => 'BETWEEN',
            'value' => array($date_now, $date_next_year),
            'type' => 'DATETIME'
          )
        ),
        'order' => 'ASC',
        'orderby' => 'meta_value',
        'meta_key' => 'event_datetime',
        'meta_type' => 'DATETIME'
  );

  $the_query = new WP_Query($args);
  ?>
  <?php if($the_query->have_posts()) : ?>
    <?php while($the_query->have_posts()) : $the_query->the_post(); ?>
    
        <img src="" alt="" class="featured placeholder" id="featured-placeholder">
        <div class="featured image container" id="featured-container" style="background-image:url('<?php echo get_the_post_thumbnail_url(null, 'full'); ?>'); ?>"></div><!--/.featured.image-->

        <div class="featured wrapper sm2" id="featured-wrapper">
        <a class="featured event link" id="featured-link" href="<?php echo get_the_permalink(); ?>">
            <h2 class="featured event title" id="featured-title" style="color:<?php the_field('event_text_color'); ?>"><?php the_title(); ?></h2>
            <time class="featured event date" id="featured-date"><?php $date = date_create(get_field('event_datetime')); echo date_format($date, "d/m"); ?></time>
        </a>
        </div><!--/.wrapper.sm-->

    <?php endwhile; ?>
    <?php wp_reset_postdata(); ?>
  <?php endif; ?>

    <div class="featured event slider" id="featured-slider">

    </div><!--/.featured.event.slider-->

  <?php
    $args = array(
        'post_type' => 'event',
        'posts_per_page' => 200,
        'meta_query' => array(
            array(
              'key' => 'event_datetime',
              'compare' => 'BETWEEN',
              'value' => array($date_now, $date_next_year),
              'type' => 'DATETIME'
            )
          ),
        'order' => 'ASC',
        'orderby' => 'meta_value',
        'meta_key' => 'event_datetime',
        'meta_type' => 'DATETIME'
    );
    $the_query = new WP_Query($args);
?>
 
 <?php //ARRAY OF EVENT OBJECT ?>
 <?php if($the_query->have_posts()) : ?>
    
    <script>
        var featuredEventArray = [],
            eventSingle
        ;
    <?php while($the_query->have_posts()) : $the_query->the_post(); ?>
        eventSingle = {
            "eventTitle": "<?php the_title(); ?>",
            "eventTime": "<?php $date = date_create(get_field('event_datetime')); echo date_format($date, "d/m"); ?>",
            "eventLink": "<?php echo get_the_permalink(); ?>",
            "eventThumbnail": "<?php echo get_the_post_thumbnail_url('', 'full'); ?>"
        }
        featuredEventArray.push(eventSingle);
    <?php endwhile; ?>
    <?php wp_reset_postdata(); ?>

    </script>
<?php endif; ?>