<div class="lightbox_container">
    <?php
              $previousPhotoLink = get_previous_post();
              $nextPhotoLink = get_next_post();
    ?>
    <i class="fa-solid fa-xmark"></i>
    <div class="lightbox_content_container">
        <p> 
             <i  class="fa-solid fa-arrow-left previous_lightbox"></i>
            Précédente
        </p>
        <div class="lightbox_content">
        <img class="img_lightbox" src="<?php //echo the_post_thumbnail_url() ?>" alt="Photo <?php the_title() ?> ">
            <div class="lightbox_photo_infos">
                <p class="ref_photo"><?php //echo get_field('reference'); ?></p>
                <p class="category_photo">
                <?php /*$categoryPhotos = get_the_terms( $post->ID, 'categorie' );
                            foreach($categoryPhotos as $categoryPhoto) {
                                echo $categoryPhoto-> name;
                        }*/ ?>
                </p>
            </div>
        </div>
       <p>
            Suivante
            <i class="fa-solid fa-arrow-right next_lightbox"></i>
       </p>
    </div>
</div>