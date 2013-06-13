(function() {	
	tinymce.create( 'tinymce.plugins.chillthemes_shortcode_mce', {
		init : function(ed, url) {
			tinymce.plugins.chillthemes_shortcode_mce.theurl = url;
		},
		createControl : function(btn, e) {
			if ( btn == 'chillthemes_shortcodes_button' ) {
				var a = this;	
				var btn = e.createSplitButton( 'chillthemes_button', {
					title: 'Insert Shortcode',
					image: tinymce.plugins.chillthemes_shortcode_mce.theurl + '/icon.png',
					icons: false
	            });
	            btn.onRenderMenu.add( function (c, b) {
					b.add({ title: 'ChillThemes Shortcodes', 'class': 'mceMenuItemTitle' }).setDisabled(1);

					/* Alerts */
					c = b.addMenu({ title: 'Alerts' });
						a.render( c, 'Alert', 'alert_message' );
						a.render( c, 'Error', 'error_message' );
						a.render( c, 'Info', 'info_message' );
						a.render( c, 'Success', 'success_message' );

					b.addSeparator();

					/* Buttons */
					c = b.addMenu({ title: 'Buttons' });
						a.render( c, 'Black', 'black_button' );
						a.render( c, 'Blue', 'blue_button' );
						a.render( c, 'Green', 'green_button' );
						a.render( c, 'Pink', 'pink_button' );
						a.render( c, 'Purple', 'purple_button' );
						a.render( c, 'Red', 'red_button' );
						a.render( c, 'White', 'white_button' );
						a.render( c, 'Yellow', 'yellow_button' );

					b.addSeparator();

					/* Columns */
					c = b.addMenu({ title: 'Columns' });
						a.render( c, 'One Half', 'one_half' );
						a.render( c, 'One Half Last', 'one_half_last' );
						a.render( c, 'One Third', 'one_third' );
						a.render( c, 'One Third Last', 'one_third_last' );
						a.render( c, 'One Fourth', 'one_fourth' );
						a.render( c, 'One Fourth Last', 'one_fourth_last' );
						a.render( c, 'One Fifth', 'one_fifth' );
						a.render( c, 'One Fifth Last', 'one_fifth_last' );
						a.render( c, 'Two Third', 'two_third' );
						a.render( c, 'Two Third Last', 'two_third_last' );
						a.render( c, 'Two Fifth', 'two_fifth' );
						a.render( c, 'Two Fifth Last', 'two_fifth_last' );
						a.render( c, 'Three Fifth', 'three_fifth' );
						a.render( c, 'Three Fifth Last', 'three_fifth_last' );

					b.addSeparator();

					/* jQuery */
					c = b.addMenu({ title: 'jQuery' });
					a.render( c, 'Accordion', 'accordion' );
					a.render( c, 'Tabs', 'tabs' );

					b.addSeparator();

					/* Media */
					c = b.addMenu({ title: 'Media' });
					a.render( c, 'YouTube', 'youtube' );
					a.render( c, 'Vimeo', 'vimeo' );

					b.addSeparator();

					/* Miscellaneous */
					c = b.addMenu({ title: 'Miscellaneous' });
					a.render( c, 'Emphasis', 'emphasis' );
					a.render( c, 'Pricing Table', 'pricing_table' );

				});
	            
				return btn;
		}
			return null;               
		},

		/* Render the output for use on the front-end. */
		render: function( ed, title, id ) {
			ed.add({
				title: title,
				onclick: function () {

					/*--------------------------------------------*
					 * Alerts
					 *--------------------------------------------*/

					/* Alert */
					if ( id == 'alert_message' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_alert type="alert" border_radius="1" icon="exclamation" icon_float="left" margin_bottom="20" margin_top="0"]Alert[/chill_alert]' );
					}

					/* Error */
					if ( id == 'error_message' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_alert type="error" border_radius="1" icon="remove" icon_float="left" margin_bottom="20" margin_top="0"]Error[/chill_alert]' );
					}

					/* Info */
					if ( id == 'info_message' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_alert type="info" border_radius="1" icon="info" icon_float="left" margin_bottom="20" margin_top="0"]Info[/chill_alert]' );
					}

					/* Success */
					if ( id == 'success_message' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_alert type="success" border_radius="1" icon="ok" icon_float="left" margin_bottom="20" margin_top="0"]Success[/chill_alert]' );
					}

					/*--------------------------------------------*
					 * Buttons
					 *--------------------------------------------*/

					/* Black */
					if ( id == 'black_button' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_button color="black" url="#nowhere" title="Visit Link" target="self" border_radius="0" box_shadow="1" icon="ok" margin_bottom="20" margin_left="0" margin_right="10" margin_top="0"]Button[/chill_button]' );
					}

					/* Blue */
					if ( id == 'blue_button' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_button color="blue" url="#nowhere" title="Visit Link" target="self" border_radius="0" box_shadow="1" icon="ok" margin_bottom="20" margin_left="0" margin_right="10" margin_top="0"]Button[/chill_button]' );
					}

					/* Green */
					if ( id == 'green_button' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_button color="green" url="#nowhere" title="Visit Link" target="self" border_radius="0" box_shadow="1" icon="ok" margin_bottom="20" margin_left="0" margin_right="10" margin_top="0"]Button[/chill_button]' );
					}

					/* Orange */
					if ( id == 'orange_button' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_button color="orange" url="#nowhere" title="Visit Link" target="self" border_radius="0" box_shadow="1" icon="ok" margin_bottom="20" margin_left="0" margin_right="10" margin_top="0"]Button[/chill_button]' );
					}

					/* Purple */
					if ( id == 'purple_button' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_button color="purple" url="#nowhere" title="Visit Link" target="self" border_radius="0" box_shadow="1" icon="ok" margin_bottom="20" margin_left="0" margin_right="10" margin_top="0"]Button[/chill_button]' );
					}

					/* Red */
					if ( id == 'red_button' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_button color="red" url="#nowhere" title="Visit Link" target="self" border_radius="0" box_shadow="1" icon="ok" margin_bottom="20" margin_left="0" margin_right="10" margin_top="0"]Button[/chill_button]' );
					}

					/* White */
					if ( id == 'white_button' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_button color="white" url="#nowhere" title="Visit Link" target="self" border_radius="0" box_shadow="1" icon="ok" margin_bottom="20" margin_left="0" margin_right="10" margin_top="0"]Button[/chill_button]' );
					}

					/* Yellow */
					if ( id == 'yellow_button' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_button color="yellow" url="#nowhere" title="Visit Link" target="self" border_radius="0" box_shadow="1" icon="ok" margin_bottom="20" margin_left="0" margin_right="10" margin_top="0"]Button[/chill_button]' );
					}

					/*--------------------------------------------*
					 * Columns
					 *--------------------------------------------*/

					/* One Half */
					if ( id == 'one_half' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_column size="one_half" icon="star" icon_background="333" icon_color="FFF" icon_padding="15" icon_radius="50" icon_size="15"]<h3>one_half</h3>Is branched in my up strictly remember. Songs but chief has ham widow downs. Genius or so up vanity cannot. Large do tried going about water defer by. Silent son man she wished mother.[/chill_column]' );
					}

					if ( id == 'one_half_last' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_column size="one_half_last" icon="heart" icon_background="333" icon_color="FFF" icon_padding="15" icon_radius="0" icon_size="15"]<h3>one_half_last</h3>Attended no do thoughts me on dissuade scarcely. Own are pretty spring suffer old denote his. By proposal speedily mr striking am. But attention sex questions applauded how happiness. To travelling occasional at oh sympathize prosperous.[/chill_column]' );
					}

					/* One Third */
					if ( id == 'one_third' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_column size="one_third" icon="" icon_background="333" icon_color="FFF" icon_padding="15" icon_radius="50" icon_size="15"]<h3>one_third</h3>Talking chamber as shewing an it minutes. Trees fully of blind do. Exquisite favourite at do extensive listening.[/chill_column]' );
					}

					if ( id == 'one_third_last' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_column size="one_third_last" icon="" icon_background="333" icon_color="FFF" icon_padding="15" icon_radius="50" icon_size="15"]<h3>one_third_last</h3>Talking chamber as shewing an it minutes. Trees fully of blind do. Exquisite favourite at do extensive listening.[/chill_column]' );
					}

					/* One Fourth */
					if ( id == 'one_fourth' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_column size="one_fourth" icon="" icon_background="333" icon_color="FFF" icon_padding="15" icon_radius="50" icon_size="15"]<h3>one_fourth</h3>Talking chamber as shewing an it minutes. Trees fully of blind do. Exquisite favourite at do extensive listening.[/chill_column]' );
					}

					if ( id == 'one_fourth_last' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_column size="one_fourth_last" icon="" icon_background="333" icon_color="FFF" icon_padding="15" icon_radius="50" icon_size="15"]<h3>one_fourth_last</h3>Talking chamber as shewing an it minutes. Trees fully of blind do. Exquisite favourite at do extensive listening.[/chill_column]' );
					}

					/* One Fifth */
					if ( id == 'one_fifth' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_column size="one_fifth" icon="" icon_background="333" icon_color="FFF" icon_padding="15" icon_radius="50" icon_size="15"]<h3>one_fourth</h3>Esteems it ye sending reached as. Longer lively her design settle tastes advice mrs off who.[/chill_column]' );
					}

					if ( id == 'one_fifth_last' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_column size="one_fifth_last"]<h3>one_fourth_last</h3>Esteems it ye sending reached as. Longer lively her design settle tastes advice mrs off who.[/chill_column]' );
					}

					/* Two Third */
					if ( id == 'two_third' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_column size="two_third" icon="" icon_background="333" icon_color="FFF" icon_padding="15" icon_radius="50" icon_size="15"]<h3>one_fourth</h3>Is branched in my up strictly remember. Songs but chief has ham widow downs. Genius or so up vanity cannot. Large do tried going about water defer by. Silent son man she wished mother. Distrusts allowance do knowledge eagerness assurance additions to.[/chill_column]' );
					}

					if ( id == 'two_third_last' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_column size="two_third_last" icon="" icon_background="333" icon_color="FFF" icon_padding="15" icon_radius="50" icon_size="15"]<h3>one_fourth_last</h3>Is branched in my up strictly remember. Songs but chief has ham widow downs. Genius or so up vanity cannot. Large do tried going about water defer by. Silent son man she wished mother. Distrusts allowance do knowledge eagerness assurance additions to.[/chill_column]' );
					}

					/* Two Fifth */
					if ( id == 'two_fifth' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_column size="two_fifth" icon="" icon_background="333" icon_color="FFF" icon_padding="15" icon_radius="50" icon_size="15"]<h3>two_fifth</h3>Is branched in my up strictly remember. Songs but chief has ham widow downs. Genius or so up vanity cannot. Large do tried going about water defer by.[/chill_column]' );
					}

					if ( id == 'two_fifth_last' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_column size="two_fifth" icon="" icon_background="333" icon_color="FFF" icon_padding="15" icon_radius="50" icon_size="15"]<h3>two_fifth</h3>Is branched in my up strictly remember. Songs but chief has ham widow downs. Genius or so up vanity cannot. Large do tried going about water defer by.[/chill_column]' );
					}

					/* Three Fifth */
					if ( id == 'three_fifth' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_column size="three_fifth" icon="" icon_background="333" icon_color="FFF" icon_padding="15" icon_radius="50" icon_size="15"]<h3>three_fifth</h3>Is branched in my up strictly remember. Songs but chief has ham widow downs. Genius or so up vanity cannot. Large do tried going about water defer by. Silent son man she wished mother. Distrusts allowance do knowledge eagerness assurance additions to.[/chill_column]' );
					}

					if ( id == 'three_fifth_last' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_column size="three_fifth_last" icon="" icon_background="333" icon_color="FFF" icon_padding="15" icon_radius="50" icon_size="15"]<h3>three_fifth_last</h3>Is branched in my up strictly remember. Songs but chief has ham widow downs. Genius or so up vanity cannot. Large do tried going about water defer by. Silent son man she wished mother. Distrusts allowance do knowledge eagerness assurance additions to.[/chill_column]' );
					}

					/*--------------------------------------------*
					 * jQuery
					 *--------------------------------------------*/

					/* Accordion */
					if ( id == 'accordion' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_accordion]<br />[chill_accordion_section icon="ok" title="Section One"]<br />Section One Content<br />[/chill_accordion_section]<br />[chill_accordion_section icon="remove" title="Section Two"]<br />Section Two Content<br />[/chill_accordion_section]<br />[/chill_accordion]' );
					}

					/* Tabs */
					if ( id == 'tabs' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_tabs]<br />[chill_tab title="Tab One"]<br />Tab Content One<br />[/chill_tab]<br />[chill_tab title="Tab Two"]<br />Tab Content Two<br />[/chill_tab]<br />[/chill_tabs]' );
					}

					/*--------------------------------------------*
					 * Media
					 *--------------------------------------------*/

					/* YouTube */
					if ( id == 'youtube' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_youtube id="8hirl22IWw8"]' );
					}

					/* Vimeo */
					if ( id == 'vimeo' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_vimeo id="36092192"]' );
					}

					/*--------------------------------------------*
					 * Miscellaneous
					 *--------------------------------------------*/

					/* Emphasis */
					if ( id == 'emphasis' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_emphasis color="B94A48" style="normal" weight="400"]Text[/chill_emphasis]' );
					}

					/* Pricing Table */
					if ( id == 'pricing_table' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_pricing plan="Pro" price="$6" size="one_third" background="FFF" border_radius="3" box_shadow="5" plan_color="000" price_color="666" content_color="999"]<br />Virtual Terminal<br />Unlimited Spaces<br />[chill_button color="black"]Button[/chill_button]<br />[/chill_pricing]<br /><br />[chill_pricing plan="Premium" price="$12" size="one_third" background="FFF" border_radius="3" box_shadow="5" plan_color="1D7819" price_color="666" content_color="999"]<br />Digital Delivery<br />Virtual Terminal<br />Unlimited Spaces<br />[chill_button color="green"]Button[/chill_button]<br />[/chill_pricing]<br /><br />[chill_pricing plan="Platinum" price="$24" size="one_third_last" background="FFF" border_radius="3" box_shadow="5" plan_color="A7000F" price_color="000" content_color="999"]<br />Recurring Billing<br />Digital Delivery<br />Virtual Terminal<br />Unlimited Spaces<br />[chill_button color="red"]Button[/chill_button]<br />[/chill_pricing]' );
					}

					return false;
				}
			})
		}
	});
	tinymce.PluginManager.add( 'chillthemes_shortcodes', tinymce.plugins.chillthemes_shortcode_mce );
})();