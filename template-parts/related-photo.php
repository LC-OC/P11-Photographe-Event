<div class="related_photo_container">
    <h2>Vous aimerez aussi</h2>
    <div class="related_photos">
        <?php 
        $category_photo = wp_get_post_terms( $post->ID, 'categorie'); 
        $args = array(
            'post_type' => 'photo',
            'posts_per_page' => 2,
            'post_status' => 'publish',
            'orderby' => 'rand',
            'post__not_in' => array(get_the_ID()),
            'tax_query' => array(
                array(
                    'taxonomy' => 'categorie',
                    'field'    => 'term_id',
                    'terms'    => $category_photo[0]->term_id,
                )
            ),
        );
        $the_query = new WP_Query($args);
        if ( $the_query->have_posts() ) {
            while ( $the_query->have_posts() ) {
                $the_query->the_post();
                get_template_part('./template-parts/photo-galery');
            }
        }
        ?>
    </div>        
</div>