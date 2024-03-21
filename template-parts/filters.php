<div id="filters_container">
    <div id="select_category_format_container">
        <select name="category" id="category_select">
            <option value="none">Catégories</option>
            <?php $photoCategories = get_terms( 'categorie' );
             foreach($photoCategories as $photoCategory) : ?>
            <option value= "<?php echo $photoCategory->name; ?>"><?php echo $photoCategory->name; ?> </option>
            <?php endforeach; ?> 
        </select>
        <select name="format" id="format_select">
            <option value="none">Formats</option>
            <?php $photoFormats = get_terms( 'format' );
             foreach($photoFormats as $photoFormat) : ?>
            <option value= "<?php echo $photoFormat->name; ?>"><?php echo $photoFormat->name; ?> </option>
            <?php endforeach; ?> 
        </select>
    </div>
    <div id="select_filter_container">
        <select name="filter" id="filter_by_select">
        <option value="none" selected disabled hidden>Trier par</option> 
            <option value="DESC">Plus récentes</option>
            <option value="ASC">Plus anciennes</option>
        </select>
    </div>
</div>