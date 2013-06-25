/**
 * TinyMCE buttons for custom shortcodes
 */
( function() {
	tinymce.create( 'tinymce.plugins.buttons', {
		init: function( ed, url ) {
			ed.addButton( 'buttons', {
				title: 'Insert button',
				image: url + '/../images/icn-btn.png',
				onclick: function() {					
					ed.execCommand( 'mceInsertContent', false, '[button text="" type="" size="" url=""]' );
				}
			});
			ed.addButton( 'cols', {
				title: 'Insert columns',
				image: url + '/../images/icn-col.png',
				onclick: function() {					
					ed.execCommand( 'mceInsertContent', false, '[row][col class="span6"][/col][col class="span6"][/col][/row]' );
				}
			});
		},
		createControl: function( n, cm ) { return null; },
	});
	tinymce.PluginManager.add( 'buttons', tinymce.plugins.buttons );
})();