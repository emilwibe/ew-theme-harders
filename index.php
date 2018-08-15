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

        <div class="wysiwyg"><?php the_content(); ?></div>

    <?php endwhile; ?>

    </main><!--/.wrapper.sm-->
<?php endif; ?>

<?php get_footer(); ?>