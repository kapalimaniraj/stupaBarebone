<?php
/**
 * Lazy Loading Feature
 */

add_action('wp_enqueue_scripts', function() {
    // Enqueue JS
    wp_enqueue_script(
        'stupa-lazyload',
        get_stylesheet_directory_uri() . '/assets/js/lazyload.js',
        [],
        filemtime(get_stylesheet_directory() . '/assets/js/lazyload.js'),
        true
    );
    
    // Force lazy loading on WordPress images
    add_filter('wp_img_tag_add_loading_attr', fn() => 'lazy');
});

// Optional: Preload critical LCP image
add_action('wp_head', function() {
    echo '<link rel="preload" href="/path/to/hero-image.jpg" as="image" fetchpriority="high">';
});