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
						a.render( c, 'Brown', 'brown_button' );
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

					/* Miscellaneous */
					c = b.addMenu({ title: 'Miscellaneous' });
					a.render( c, 'Emphasis', 'emphasis' );

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
					 * Accordion
					 *--------------------------------------------*/

					if ( id == 'accordion' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_accordion]<br />[chill_accordion_section icon="ok" title="Section One"]<br />Section One Content<br />[/chill_accordion_section]<br />[chill_accordion_section icon="remove" title="Section Two"]<br />Section Two Content<br />[/chill_accordion_section]<br />[/chill_accordion]' );
					}

					/*--------------------------------------------*
					 * Alerts
					 *--------------------------------------------*/

					if ( id == 'alert_message' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_alert type="alert" border_radius="1" icon="exclamation" icon_float="left" margin_bottom="20" margin_top="0"]Alert[/chill_alert]' );
					}

					if ( id == 'error_message' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_alert type="error" border_radius="1" icon="remove" icon_float="left" margin_bottom="20" margin_top="0"]Error[/chill_alert]' );
					}

					if ( id == 'info_message' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_alert type="info" border_radius="1" icon="info" icon_float="left" margin_bottom="20" margin_top="0"]Info[/chill_alert]' );
					}

					if ( id == 'success_message' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_alert type="success" border_radius="1" icon="ok" icon_float="left" margin_bottom="20" margin_top="0"]Success[/chill_alert]' );
					}

					/*--------------------------------------------*
					 * Buttons
					 *--------------------------------------------*/

					if ( id == 'black_button' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_button color="black" url="#nowhere" title="Visit Link" target="blank" border_radius="0" box_shadow="1" icon="delicious" margin_bottom="20" margin_left="0" margin_right="10" margin_top="0"]Delicious[/chill_button]' );
					}

					if ( id == 'blue_button' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_button color="blue" url="#nowhere" title="Visit Link" target="blank" border_radius="0" box_shadow="1" icon="dribbble" margin_bottom="20" margin_left="0" margin_right="10" margin_top="0"]Dribbble[/chill_button]' );
					}

					if ( id == 'brown_button' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_button color="brown" url="#nowhere" title="Visit Link" target="blank" border_radius="0" box_shadow="1" icon="dropbox" margin_bottom="20" margin_left="0" margin_right="10" margin_top="0"]Dropbox[/chill_button]' );
					}

					if ( id == 'green_button' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_button color="green" url="#nowhere" title="Visit Link" target="blank" border_radius="0" box_shadow="1" icon="facebook-sign" margin_bottom="20" margin_left="0" margin_right="10" margin_top="0"]Facebook[/chill_button]' );
					}

					if ( id == 'pink_button' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_button color="pink" url="#nowhere" title="Visit Link" target="blank" border_radius="0" box_shadow="1" icon="flickr-sign" margin_bottom="20" margin_left="0" margin_right="10" margin_top="0"]Flickr[/chill_button]' );
					}

					if ( id == 'purple_button' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_button color="purple" url="#nowhere" title="Visit Link" target="blank" border_radius="0" box_shadow="1" icon="foursquare" margin_bottom="20" margin_left="0" margin_right="10" margin_top="0"]Foursquare[/chill_button]' );
					}

					if ( id == 'red_button' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_button color="red" url="#nowhere" title="Visit Link" target="blank" border_radius="0" box_shadow="1" icon="github" margin_bottom="20" margin_left="0" margin_right="10" margin_top="0"]GitHub[/chill_button]' );
					}

					if ( id == 'white_button' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_button color="white" url="#nowhere" title="Visit Link" target="blank" border_radius="0" box_shadow="1" icon="instagram" margin_bottom="20" margin_left="0" margin_right="10" margin_top="0"]Instagram[/chill_button]' );
					}

					if ( id == 'yellow_button' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_button color="yellow" url="#nowhere" title="Visit Link" target="blank" border_radius="0" box_shadow="1" icon="wordpress" margin_bottom="20" margin_left="0" margin_right="10" margin_top="0"]WordPress[/chill_button]' );
					}

					/*--------------------------------------------*
					 * Columns
					 *--------------------------------------------*/

					if ( id == 'one_half' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_column size="one_half"]<h3>one_half</h3>Is branched in my up strictly remember. Songs but chief has ham widow downs. Genius or so up vanity cannot. Large do tried going about water defer by. Silent son man she wished mother.[/chill_column]' );
					}

					if ( id == 'one_half_last' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_column size="one_half_last"]<h3>one_half_last</h3>Attended no do thoughts me on dissuade scarcely. Own are pretty spring suffer old denote his. By proposal speedily mr striking am. But attention sex questions applauded how happiness. To travelling occasional at oh sympathize prosperous.[/chill_column]' );
					}

					if ( id == 'one_third' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_column size="one_third"]<h3>one_third</h3>Talking chamber as shewing an it minutes. Trees fully of blind do. Exquisite favourite at do extensive listening.[/chill_column]' );
					}

					if ( id == 'one_third_last' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_column size="one_third_last"]<h3>one_third_last</h3>Talking chamber as shewing an it minutes. Trees fully of blind do. Exquisite favourite at do extensive listening.[/chill_column]' );
					}

					if ( id == 'one_fourth' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_column size="one_fourth"]<h3>one_fourth</h3>Talking chamber as shewing an it minutes. Trees fully of blind do. Exquisite favourite at do extensive listening.[/chill_column]' );
					}

					if ( id == 'one_fourth_last' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_column size="one_fourth_last"]<h3>one_fourth_last</h3>Talking chamber as shewing an it minutes. Trees fully of blind do. Exquisite favourite at do extensive listening.[/chill_column]' );
					}

					if ( id == 'one_fifth' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_column size="one_fifth"]<h3>one_fourth</h3>Esteems it ye sending reached as. Longer lively her design settle tastes advice mrs off who.[/chill_column]' );
					}

					if ( id == 'one_fifth_last' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_column size="one_fifth_last"]<h3>one_fourth_last</h3>Esteems it ye sending reached as. Longer lively her design settle tastes advice mrs off who.[/chill_column]' );
					}

					if ( id == 'two_third' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_column size="two_third"]<h3>one_fourth</h3>Is branched in my up strictly remember. Songs but chief has ham widow downs. Genius or so up vanity cannot. Large do tried going about water defer by. Silent son man she wished mother. Distrusts allowance do knowledge eagerness assurance additions to.[/chill_column]' );
					}

					if ( id == 'two_third_last' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_column size="two_third_last"]<h3>one_fourth_last</h3>Is branched in my up strictly remember. Songs but chief has ham widow downs. Genius or so up vanity cannot. Large do tried going about water defer by. Silent son man she wished mother. Distrusts allowance do knowledge eagerness assurance additions to.[/chill_column]' );
					}

					if ( id == 'two_fifth' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_column size="two_fifth"]<h3>two_fifth</h3>Is branched in my up strictly remember. Songs but chief has ham widow downs. Genius or so up vanity cannot. Large do tried going about water defer by.[/chill_column]' );
					}

					if ( id == 'two_fifth_last' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_column size="two_fifth"]<h3>two_fifth</h3>Is branched in my up strictly remember. Songs but chief has ham widow downs. Genius or so up vanity cannot. Large do tried going about water defer by.[/chill_column]' );
					}

					if ( id == 'three_fifth' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_column size="three_fifth"]<h3>three_fifth</h3>Is branched in my up strictly remember. Songs but chief has ham widow downs. Genius or so up vanity cannot. Large do tried going about water defer by. Silent son man she wished mother. Distrusts allowance do knowledge eagerness assurance additions to.[/chill_column]' );
					}

					if ( id == 'three_fifth_last' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_column size="three_fifth_last"]<h3>three_fifth_last</h3>Is branched in my up strictly remember. Songs but chief has ham widow downs. Genius or so up vanity cannot. Large do tried going about water defer by. Silent son man she wished mother. Distrusts allowance do knowledge eagerness assurance additions to.[/chill_column]' );
					}

					/*--------------------------------------------*
					 * Emphasis
					 *--------------------------------------------*/

					if ( id == 'emphasis' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_emphasis color="B94A48" style="normal" weight="400"]Text[/chill_emphasis]' );
					}

					/*--------------------------------------------*
					 * Tabs
					 *--------------------------------------------*/

					if ( id == 'tabs' ) {
						tinyMCE.activeEditor.selection.setContent( '[chill_tabs]<br />[chill_tab title="Tab One"]<br />Tab Content One<br />[/chill_tab]<br />[chill_tab title="Tab Two"]<br />Tab Content Two<br />[/chill_tab]<br />[/chill_tabs]' );
					}

					return false;
				}
			})
		}
	});
	tinymce.PluginManager.add( 'chillthemes_shortcodes', tinymce.plugins.chillthemes_shortcode_mce );
})();