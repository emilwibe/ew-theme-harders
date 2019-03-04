<?php
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');

    add_action('init', function(){
        register_nav_menu('primary', 'Primary');
    });
    add_action('wp_enqueue_scripts', function(){
        wp_enqueue_style('core-styles', get_template_directory_uri() . '/dist/core-styles.css', '', '');
        wp_enqueue_script('core-scripts-head', get_template_directory_uri() . '/dist/core-head-min.js', '', '', false);
        wp_enqueue_script('core-scripts-footer', get_template_directory_uri() . '/dist/core-footer-min.js', '', '', true);
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

    //ADD EVENT CUSTOM FIELDS TO REST API
    add_action('rest_api_init', function(){
        register_rest_field('event', 'event_date',array(
            'get_callback' => function(){
                return get_field('event_datetime');
            }
        ));
        register_rest_field('event', 'ticket_url', array(
            'get_callback' => function(){
                return get_field('ticket_url');
            }
        ));
    });