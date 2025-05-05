<?php
/**
 * StupaChild Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package StupaChild
 * @since 1.0.0
 */

/**
 * Define Constants
 */
define( 'CHILD_THEME_STUPACHILD_VERSION', '1.0.0' );

/**
 * Enqueue styles
 */
function stupa_barebone_enqueue_styles() {
    wp_enqueue_style('astra-parent', get_template_directory_uri() . '/style.css');
    wp_enqueue_style('astra-child', get_stylesheet_directory_uri() . '/style.css');
}

add_action( 'wp_enqueue_scripts', 'stupa_barebone_enqueue_styles', 15 );

// 2. Define active features (toggle with true/false)
$features = [
    'lazyload'      => true,  // Enabled
    'transitions'   => false, // Disabled
    'skeletons'     => false  // Disabled
];

// 3. Load feature files conditionally
foreach ($features as $feature => $is_active) {
    if ($is_active) {
        require_once get_stylesheet_directory() . "/inc/features/{$feature}.php";
    }
}