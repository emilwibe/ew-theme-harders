<?php
    wp_nav_menu(
        array(
            'container_id' => 'nav-primary',
            'container_class' => 'nav primary is-hidden',
            'theme_location' => 'primary',
            'container' => 'nav',
            'items_wrap' => '<ul>%3$s</ul>'
        )
    );
?>

<a href="#" class="nav toggle" id="nav-toggle">Menu</a>