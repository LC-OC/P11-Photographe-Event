<footer>
    <?php 
        if (has_nav_menu('secondary')) {
            wp_nav_menu(array('theme_location' => 'secondary'));
           } 

        wp_footer()

    ?>
</footer>
</body>
</html>