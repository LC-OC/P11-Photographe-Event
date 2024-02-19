
    <?php 
         $args = array(
            'post_type' => 'photo',
            'posts_per_page' => 1,
            'orderby' => 'rand',
        );
        $the_query = new WP_Query($args);
        if (have_posts()) : while ( $the_query->have_posts() ) : $the_query->the_post(); 
    ?>
    <div id="hero-home" style="background-image: url('<?php the_post_thumbnail_url() ?>" alt="Photo <?php the_title() ?>')">
        <?php 
            endwhile;
            endif;
        ?>
        <img src="http://localhost/photographe-event/wp-content/themes/photographevent/assets/images/title_header.png" alt="Photographe Event">
    </div>
