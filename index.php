<?php get_header(); ?>

<?php
    the_post_thumbnail('full', [
        'class' => 'thumbnail default full'
    ]);
?>

<?php if(have_posts()) : ?>

    <main class="wrapper sm">
    <?php while(have_posts()) : the_post(); ?>

        <h1><?php the_title(); ?></h1>

        <?php
            $eventDateTime = date_create(get_field('event_datetime'));
            $eventDateFormat = date_format($eventDateTime, "j/n");
        ?>

        <time><?php echo $eventDateFormat; ?></time>

        <?php if(get_field('ticket_url')) : ?>

            <a href="<?php the_field('ticket_url'); ?>" class="event ticket" target="_blank">Køb Billet</a>
        <?php endif; ?>

        <div class="wysiwyg"><?php the_content(); ?></div>

    <?php endwhile; ?>

    </main><!--/.wrapper.sm-->
<?php endif; ?>

<?php get_footer(); ?>