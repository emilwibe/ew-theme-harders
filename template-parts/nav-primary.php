<?php
    wp_nav_menu(
        array(
            'container_id' => 'nav-primary',
            'container_class' => 'nav primary',
            'theme_location' => 'primary',
            'container' => 'nav',
            'items_wrap' => '<ul>%3$s</ul>'
        )
    );
?>