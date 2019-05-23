<?php /* Template Name: Testplate */ ?>

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
            'compare' => 'NOT BETWEEN',
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

        <h1><?php the_title(); ?></h1>

    <?php endwhile; ?>
<?php endif; ?>