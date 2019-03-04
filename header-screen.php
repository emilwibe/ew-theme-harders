<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <script>
        document.body.classList.add("enhanced");
    </script>

    <a href="<?php echo get_site_url(); ?>" class="logo-link"><img src="<?php echo get_template_directory_uri() . "/assets/harders-logo.svg"; ?>" alt="Harders Logo"></a>