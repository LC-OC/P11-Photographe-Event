<?php 
function photographe_event_style(){
    wp_enqueue_style( 'theme-style', get_stylesheet_directory_uri() . '/assets/sass/index.css' );
}
add_action('wp_enqueue_scripts','photographe_event_style');

 

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


function load_more_photos() {
  $ajaxposts = new WP_Query([
    'post_type' => 'photo',
    'posts_per_page' => 8,
    'paged' => $_POST['paged'],
    'orderby' => 'date',
    'order' => 'DESC',
  ]);
  
    $response = '';
    $max_pages = $ajaxposts->max_num_pages;
  
    if ($ajaxposts->have_posts()) {
      ob_start();
      while($ajaxposts->have_posts()) : $ajaxposts->the_post();
        $response .= get_template_part( 'template-parts/photo-galery' );
      endwhile;
      $output = ob_get_contents();
      ob_end_clean();
    } else {
      $response = '';
      
    }
  
    $result = [
      'max' => $max_pages,
      'html' => $output,
    ];
  
    echo json_encode($result);
    exit;
  }

  add_action('wp_ajax_load_more_photos', 'load_more_photos');
  add_action('wp_ajax_nopriv_load_more_photos', 'load_more_photos');


//


function filter_photos() {

$categorySelect = $_POST['categoryOptionSelected'];
$formatSelect = $_POST['formatOptionSelected'];
$filterBySelect = $_POST['filterByOptionSelected'];

  $filterPhotos = new WP_Query([
    'post_type' => "photo",
    'posts_per_page' => 8,
    'orderby' => 'date',
    'paged' => $paged,
    'order' => $filterBySelect,
    'tax_query' => array(
      'relation' => 'AND',
      $categorySelect != "none" ?
      array(
          'taxonomy' => 'categorie',
          'field' => 'name',
          'terms' => $categorySelect,
      ) : '',
      $formatSelect != "none" ?
      array(
        'taxonomy' => 'format',
        'field' => 'name',
        'terms' => $formatSelect,
    ) : ''
      )
  ]);

  if($filterPhotos->have_posts()) {
    while($filterPhotos->have_posts()) : $filterPhotos->the_post();
      $responseFilters .= get_template_part( 'template-parts/photo-galery' );
    endwhile;
  } else {
    $responseFilters =  'Aucune image ne correspond à ces critères. Veuillez faire une nouvelle recherche.';
  }

  echo $response;
  exit;
}
add_action('wp_ajax_filter_photos', 'filter_photos');
add_action('wp_ajax_nopriv_filter_photos', 'filter_photos');


function scripts() {
  wp_enqueue_script( 'script-modale', get_stylesheet_directory_uri() . '/assets/js/modale.js', array( 'jquery' ),'',true );
  wp_enqueue_script( 'script-js', get_stylesheet_directory_uri() . '/assets/js/scripts.js', array( 'jquery' ),'',true );
  wp_enqueue_script( 'script-ajax', get_stylesheet_directory_uri() . '/assets/js/ajax.js', array( 'jquery' ),'',true );
  wp_enqueue_script( 'script-lightbox', get_stylesheet_directory_uri() . '/assets/js/lightbox.js', array( 'jquery' ),'',true );
  
  wp_enqueue_script( 'script-font-awesome', 'https://kit.fontawesome.com/019b68e105.js', array( 'jquery' ),'' );
  
}  
add_action( 'wp_enqueue_scripts', 'scripts' );

?>