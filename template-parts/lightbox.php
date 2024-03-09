<div id="lightbox_container">
    <?php
              $previousPhotoLink = get_previous_post();
              $nextPhotoLink = get_next_post();
    ?>
    <i class="fa-solid fa-xmark"></i>
    <div id="lightbox_content_container">
        <p> 
            <a class="previous_link" href="<?php echo get_permalink($previousPhotoLink); ?>"> <i class="fa-solid fa-arrow-left"></i></a>
            Précédente
        </p>
        <div id="lightbox_content">
        <img id="img_lightbox" src="<?php the_post_thumbnail_url() ?>" alt="Photo <?php the_title() ?> ">
            <div id="lightbox_photo_infos">
                <p id="ref_photo"></p>
                <p id="category_photo"></p>
            </div>
        </div>
       <p>
            Suivante
            <a class="next_link" href="<?php echo get_permalink($nextPhotoLink); ?>"><i class="fa-solid fa-arrow-right"></i></a> 
       </p>
    </div>
</div>