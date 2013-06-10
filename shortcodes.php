<?php

/* Make widgets shortcode-aware. */
add_filter( 'widget_text', 'do_shortcode' );

/* Clean up formatting in shortcodes. */
function chillthemes_shortcode_formatting( $content ) {   
	$array = array (
		'<p>[' => '[', 
		']</p>' => ']', 
		']<br />' => ']'
	);
	$content = strtr( $content, $array );

	return $content;
}
add_filter( 'the_content', 'chillthemes_shortcode_formatting' );

/* Shortcode to display an accordion. */
function chillthemes_shortcode_accordion( $atts, $content = '' ) {
	extract( shortcode_atts( array(), $atts ) );

	wp_enqueue_script( 'jquery-ui-accordion' );
	wp_enqueue_script( 'chillthemes-accordion' );

	return '<div class="chill-accordion">' . do_shortcode( $content ) . '</div>';
}
add_shortcode( 'chill_accordion', 'chillthemes_shortcode_accordion' );

/* Shortcode to display an accordion section. */
function chillthemes_shortcode_accordion_section( $atts, $content = '' ) {
	extract( shortcode_atts(
		array(
			'icon' => '',
			'title' => 'Title'
		),
		$atts
	));

	$icon = ( $icon ) ? '<i class="icon-' . $icon . '"></i> ' : '';

	return '<h3 class="chill-accordion-trigger">' . $icon . esc_html( $title ) . '</h3><div>' . do_shortcode( $content ) . '</div>';
}
add_shortcode( 'chill_accordion_section', 'chillthemes_shortcode_accordion_section' );

/* Shortcode to display an alert. */
function chillthemes_shortcode_alert( $atts, $content = '' ) {
	extract( shortcode_atts(
		array(
			'type' => 'alert',
			'border_radius' => '',
			'icon' => '',
			'icon_float' => '',
			'margin_bottom' => '20',
			'margin_top' => ''
		),
		$atts
	));

	$style = '';
	if ( $border_radius ) { $style .= 'border-radius: ' . $border_radius . 'px;'; }
	$icon = ( $icon ) ? '<i class="icon-' . $icon . ' ' . $icon_float . '"></i> ' : '';
	if ( $margin_bottom ) { $style .= 'margin-bottom: ' . $margin_bottom . 'px;'; }
	if ( $margin_top ) { $style .= 'margin-top: ' . $margin_top . 'px;'; }

	$out = '';
	$out .= '<div class="chill-alert chill-alert-' . esc_attr( $type ) . '" style="' . esc_attr( $style ) . '">';
		$out .= $icon;
		$out .= $content;			
	$out .= '</div>';

	return $out;
}
add_shortcode( 'chill_alert', 'chillthemes_shortcode_alert' );

/* Shortcode to display a button. */
function chillthemes_shortcode_button( $atts, $content = '' ) {
	extract( shortcode_atts(
		array(
			'color' => 'black',
			'border_radius' => '',
			'box_shadow' => '1',
			'icon' => '',
			'margin_bottom' => '20',
			'margin_left' => '',
			'margin_right' => '10',
			'margin_top' => '',
			'target' => 'self',
			'title' => 'Visit Link',
			'url' => '#nowhere'
		),
		$atts
	));

	$style = '';
	if ( $border_radius ) { $style .= 'border-radius: ' . $border_radius . 'px;'; }
	if ( $box_shadow ) { $style .= 'box-shadow: 0 0 ' . $box_shadow . 'px rgba(0,0,0,0.5);'; }
	$icon = ( $icon ) ? '<i class="icon-' . $icon . '"></i> ' : '';
	if ( $margin_bottom ) { $style .= 'margin-bottom: ' . $margin_bottom . 'px;'; }
	if ( $margin_left ) { $style .= 'margin-left: ' . $margin_left . 'px;'; }
	if ( $margin_right ) { $style .= 'margin-right: ' . $margin_right . 'px;'; }
	if ( $margin_top ) { $style .= 'margin-top: ' . $margin_top . 'px;'; }

	$out = '';
	$out .= '<a class="chill-button ' . esc_attr( $color ) . '" href="' . esc_url( $url ) . '" target="_' . esc_attr( $target ) . '" title="' . esc_attr( $title ) . '" style="' . esc_attr( $style ) . '">';
		$out .= $icon;
		$out .= $content;
	$out .= '</a>';

	return $out;
}
add_shortcode( 'chill_button', 'chillthemes_shortcode_button' );

/* Shortcode to display a column. */
function chillthemes_shortcode_columns( $atts, $content = '' ) {
	extract( shortcode_atts(
		array(
			'size' => ''
		),
		$atts
	));

	$size = ($size) ? '' . $size : '';

	if ( strpos( $size, 'last' ) === false ) {
		return '<div class="' . esc_attr( $size ) . '"><span class="box-content">' . do_shortcode( $content ) . '</span></div>';
	} else {
		return '<div class="' . esc_attr( $size ) . '"><span class="box-content">' . do_shortcode( $content ) . '</span></div><div style="clear: both;"></div>';
	}
}
add_shortcode( 'chill_column', 'chillthemes_shortcode_columns' );

/* Shortcode to emphasize text. */
function chillthemes_shortcode_emphasis( $atts, $content = '' ) {
	extract( shortcode_atts(
		array(
			'color' => '',
			'style' => '',
			'weight' => ''
		),
		$atts
	));

	$color = ($color) ? '' . $color : '';
	$style = ($style) ? '' . $style : '';
	$weight = ($weight) ? '' . $weight : '';

	return '<span class="chill-emphasis" style="color: #' . esc_attr( $color ) . '; font-style: ' . esc_attr( $style ) . '; font-weight: ' . esc_attr( $weight ) . ';">' . do_shortcode( $content ) . '</span>';
}
add_shortcode( 'chill_emphasis', 'chillthemes_shortcode_emphasis' );

/* Shortcode to display a set of tabs. */
function chillthemes_shortcode_tabs( $atts, $content = null ) {
	wp_enqueue_script( 'jquery-ui-tabs' );
	wp_enqueue_script( 'chillthemes-tabs' );

	$defaults = array();
	extract( shortcode_atts( $defaults, $atts ) );
	preg_match_all( '/tab title="([^\"]+)"/i', $content, $matches, PREG_OFFSET_CAPTURE );
	$tab_titles = array();
	if ( isset( $matches[1] ) ) { $tab_titles = $matches[1]; }
	$output = '';
	if ( count( $tab_titles ) ) {
		$output .= '<div id="chill-' . rand( 1, 100 ) . '" class="chill-tabs">';
			$output .= '<ul class="ui-tabs-nav">';
			foreach( $tab_titles as $tab ) {
				$output .= '<li><a href="#chill-' . sanitize_title( $tab[0] ) . '">' . esc_attr( $tab[0] ) . '</a></li>';
			}
			$output .= '</ul><!-- .ui-tabs-nav -->';
			$output .= do_shortcode( $content );
		$output .= '</div><!-- .chill-tabs -->';
	} else {
		$output .= do_shortcode( $content );
	}

	return $output;
}
add_shortcode( 'chill_tabs', 'chillthemes_shortcode_tabs' );

/* Shortcode to display a single tab. */
function chillthemes_shortcode_tab( $atts, $content = '' ) {
	$defaults = array(
		'title' => 'Tab'
	);
	extract( shortcode_atts( $defaults, $atts ) );

	return '<div id="chill-' . sanitize_title( $title ) . '" class="tab-content">' . do_shortcode( $content ) . '</div>';
}
add_shortcode( 'chill_tab', 'chillthemes_shortcode_tab' );

?>