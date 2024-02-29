<div class="navigation_between_photos_container">
    <div class="nav_photos_arrows">
        <?php
              $previousPhotoLink = get_previous_post();
              $nextPhotoLink = get_next_post();
        ?>
        <a class="previous_link" href="<?php echo get_permalink($previousPhotoLink); ?>"> <i class="fa-solid fa-arrow-left"></i></a>
         <a class="next_link" href="<?php echo get_permalink($nextPhotoLink); ?>"><i class="fa-solid fa-arrow-right"></i></a>
    </div>
    <div class="nav_photo_hover_container">
        <?php  if($previousPhotoLink) :  ?>
        <img class="photo_prev_nav" src="<?php echo get_the_post_thumbnail_url($previousPhotoLink->ID); ?>" alt="Photo <?php the_title() ?>">
        <?php endif ?>
        <?php  if($nextPhotoLink) :  ?>
        <img class="photo_next_nav" src="<?php echo get_the_post_thumbnail_url($nextPhotoLink->ID); ?>" alt="Photo <?php the_title() ?>">
        <?php endif ?>
    </div>
</div>