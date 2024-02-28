<div id="filters_container">
    <div id="select_category_format_container">
        <select name="category" id="category_select">
            <option selected="selected" disabled hidden>Catégories</option>
            <?php $photoCategories = get_terms( 'categorie' );
             foreach($photoCategories as $photoCategory) : ?>
            <option value= "<?php $photoCategory->term_id; ?>"><?php echo $photoCategory->name; ?> </option>
            <?php endforeach; ?> 
        </select>
        <select name="format" id="format_select">
            <option selected="selected" disabled hidden>Formats</option>
            <?php $photoFormats = get_terms( 'format' );
             foreach($photoFormats as $photoFormat) : ?>
            <option value= "<?php $photoFormat->term_id; ?>"><?php echo $photoFormat->name; ?> </option>
            <?php endforeach; ?> 
        </select>
    </div>
    <div id="select_filter_container">
        <select name="filter" id="filter_by_select">
            <option selected="selected" disabled hidden>Trier par</option>
            <option value="recent">Plus récentes</option>
            <option value="older">Plus anciennes</option>
        </select>
    </div>
</div>