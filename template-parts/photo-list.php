<div id="home_photos_gallery">
    <div id="photo_list_home">
            <?php 
            $args = array(
                'post_type' => 'photo',
                'posts_per_page' => 8,
                'paged' => 1,
                'orderby' => 'date',
                'order' => 'DESC',
            );
            $the_query = new WP_Query($args);
            if (have_posts()) : while ( $the_query->have_posts() ) : $the_query->the_post(); 
        ?>

            <?php  get_template_part( './template-parts/photo-galery' ); ?>
            <?php 
                endwhile;
                endif;
                wp_reset_postdata();
            ?>
    </div>
    <div id="button_load_more_container">
        <a href="#!"  id="button_load_more">Charger plus</a>
    </div>
</div>