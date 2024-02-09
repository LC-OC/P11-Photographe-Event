<footer>
    <?php 
        if (has_nav_menu('secondary')) {
            wp_nav_menu(array('theme_location' => 'secondary'));
           } 
    ?>
</footer>
</body>
</html>