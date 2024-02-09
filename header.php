<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Photographe Event</title>
    <?php wp_head(); ?>
</head>
<body> 
    <header>
        <nav>
            <img src="wp-content\themes\photographevent\assets\images\logo_photographe_theme.png" alt="Logo Nathalie Mota - Photographe Theme">
            <?php
                if (has_nav_menu('primary')) {
                    wp_nav_menu(array('theme_location' => 'primary'));
                }
            ?>
        </nav>
        <img src="wp-content\themes\photographevent\assets\images\header_photographe_event.png" alt="">
        <?php  get_template_part( './template-parts/modale' ); ?>
    </header>
