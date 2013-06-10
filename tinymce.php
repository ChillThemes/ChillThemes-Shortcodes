<?php

/**
 *
 * Creates the class that adds a custom button to the visual editor
 * when creating/editing a page or post. You can read more about
 * the TinyMCE editor here:
 *
 * @link: http://codex.wordpress.org/TinyMCE
 *
 **/
class ChillThemes_TinyMCE_Buttons {

	/* Constructor */
	function __construct() {
		add_action( 'init', array( &$this, 'chillthemes_initiate_tinymce_buttons' ) );
	}

	/* Initiate the following filters, but only if the user can edit pages and posts. */
	function chillthemes_initiate_tinymce_buttons() {
		if ( !current_user_can( 'edit_pages' ) && !current_user_can( 'edit_posts' ) )
			return;		
		if ( get_user_option( 'rich_editing' ) == 'true' ) {  
			add_filter( 'mce_external_plugins', array( &$this, 'chillthemes_add_tinymce_buttons' ) );  
			add_filter( 'mce_buttons', array( &$this, 'chillthemes_register_tinymce_buttons' ) ); 
		}  
	}

	/* Add the TinyMCE buttons to the visual editor. */
	function chillthemes_add_tinymce_buttons( $button_array ) {  
		$button_array['chillthemes_shortcodes'] = plugin_dir_url( __FILE__ ) . 'js/tinymce.js';

		/* Return the button array. */
		return $button_array; 
	}

	/* Register the TinyMCE buttons to the visual editor. */
	function chillthemes_register_tinymce_buttons( $buttons ) {  
		array_push( $buttons, 'chillthemes_shortcodes_button' );

		/* Return the buttons. */
		return $buttons; 
	}
}

$chillthemes_shortcodes = new ChillThemes_TinyMCE_Buttons;

?>