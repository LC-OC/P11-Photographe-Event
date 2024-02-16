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

/*
function example_cats_related_post() {

    $post_id = get_the_ID();
    $cat_ids = array();
    $categories = get_the_category( $post_id );

    if(!empty($categories) && is_wp_error($categories)):
        foreach ($categories as $category):
            array_push($cat_ids, $category->term_id);
        endforeach;
    endif;

    $current_post_type = get_post_type($post_id);
    $query_args = array( 

        'category__in'   => $cat_ids,
        'post_type'      => $current_post_type,
        'post__not_in'    => array($post_id),
        'posts_per_page'  => '2'


     );

    $related_cats_post = new WP_Query( $query_args );

    if($related_cats_post->have_posts()):
         while($related_cats_post->have_posts()): $related_cats_post->the_post(); ?>
            <ul>
                <li>
                    <a href="<?php the_permalink(); ?>">
                        <?php the_title(); ?>
                    </a>
                </li>
            </ul>
        <?php endwhile;

        // Restore original Post Data
        wp_reset_postdata();
     endif;

}*/