<div class="photo-container">
    <div class="photo-informations-container">
            <h1><?php the_title() ?></h1>
            <p>Référence: <?php echo get_field('reference'); ?></p>
            <p>Catégorie: <?php $categoryPhotos = get_the_terms( $post->ID, 'categorie' );
                foreach($categoryPhotos as $categoryPhoto) {
                    echo $categoryPhoto-> name;
                } ?></p>
            <p>Format: <?php $formatPhotos = get_the_terms( $post->ID, 'format' );
                foreach($formatPhotos as $formatPhoto) {
                    echo $formatPhoto-> name;
                } ?></p>    
            <p>Type: <?php echo get_field('type'); ?></p>
            <p>Année: <?php echo get_field('annee'); ?></p>
    </div>
    <div class="photo-img-container">
      <img src="<?php the_post_thumbnail_url() ?>" alt="Photo <?php the_title() ?> ">
    </div>
    <div class="photo-contact-container">

    </div>
</div>