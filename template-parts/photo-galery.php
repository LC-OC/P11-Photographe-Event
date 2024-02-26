<div class="photo_galery_container">
    <img class="photo_galery" src="<?php the_post_thumbnail_url() ?>" alt="Photo <?php the_title() ?> ">
    <div class="photo_overlay">
        <div class="icon_expand_background">
            <i class="fa-solid fa-expand"></i>
        </div>
        <a href="<?php echo get_permalink( $post->ID ); ?>">
            <i class="fa-regular fa-eye fa-2x"></i>
        </a>
        <div class="infos_photo_galery">
            <p id="title_photo"><?php the_title() ?></p>
                <p id="category_photo"> 
                    <?php $categoryPhotos = get_the_terms( $post->ID, 'categorie' );
                            foreach($categoryPhotos as $categoryPhoto) {
                                echo $categoryPhoto-> name;
                        } ?>
                </p>
        </div>
    </div>
</div>