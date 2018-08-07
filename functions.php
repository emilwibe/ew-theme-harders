<?php
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');

    add_action('init', function(){
        register_nav_menu('primary', 'Primary');
    });

    //CUSTOM POST TYPE
    register_post_type('event', array(
        'labels'  => array(
            'name'  =>  'Events',
            'singular_name' =>  'Event',
            'add_new' =>  'Tilføj nyt',
            'add_new_item'  =>  'Tilføj nyt event',
            'edit_item' =>  'Rediger event',
            'new_item'  =>  'Nyt event',
            'view_item'=> 'Se event',
            'view_items'  =>  'Se events',
            'search_items'  => 'Søg event',
            'not_found' =>  'Ingen events fundet',
            'not_found_in_trash'  =>  'Ingen events fundet i papirkurven',
        ),
        'show_in_rest' => true,
        'public'  =>  true,
        'show_in_admin_bar' =>  true,
        'supports' => array(
            'title',
            'editor',
            'thumbnail',
            'revisions',
            'page-attributes'
        ),
        'menu_position' =>  2,
        'menu_icon' =>  'dashicons-format-audio',
    ));