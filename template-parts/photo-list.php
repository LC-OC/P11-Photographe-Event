<div id="photo_list_home">
        <?php 
         $args = array(
            'post_type' => 'photo',
            'posts_per_page' => 8,
            'orderby' => 'none',
            'post_status' => 'publish',
        );
        $the_query = new WP_Query($args);
        if (have_posts()) : while ( $the_query->have_posts() ) : $the_query->the_post(); 
    ?>

        <?php  get_template_part( './template-parts/photo-galery' ); ?>
        <?php 
            endwhile;
            endif;
        ?>
    </div>