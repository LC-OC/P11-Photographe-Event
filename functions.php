<?php 
function photographe_event_style(){
    wp_enqueue_style( 'theme-style', get_stylesheet_directory_uri() . '/assets/sass/index.css' );
}
add_action('wp_enqueue_scripts','photographe_event_style');

function scripts() {
    wp_enqueue_script( 'script-animation', get_stylesheet_directory_uri() . '/assets/js/scripts.js', array( 'jquery' ),'',true );
}
add_action( 'wp_enqueue_scripts', 'scripts' );

function add_google_fonts() {
    wp_enqueue_style( ' add_google_fonts ', 'https://fonts.googleapis.com/css2?family=Poppins&family=Space+Mono&display=swap', false );}
    add_action( 'wp_enqueue_scripts', 'add_google_fonts' );

// menu header
function register_menu_photographe_event() {
    register_nav_menu('primary', __('Main menu'));
   }
   add_action('after_setup_theme', 'register_menu_photographe_event');

   // menu footer
function register_menu_footer_photographe_event() {
    register_nav_menu('secondary', __('footer'));
   }
   add_action('after_setup_theme', 'register_menu_footer_photographe_event');


// error - conflit plugin avec thème ?
remove_action( 'shutdown', 'wp_ob_end_flush_all', 1 );








?>

