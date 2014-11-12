/**
 * CyberClap
 *
 * @author Clark Winkelmann
 *
 */

$(document).ready(function() {
	
	/**
	 * Sets up the gui size according to the window
	 */
	function setupGui() {
		$('body').css('font-size', $(window).height()+'px');
	}
	
	/**
	 * Handles a click in the document
	 */
	$(document).click(function(e) {
		// Not if he clicked on an editable area
		if($(e.target).attr('contenteditable') == 'true') {
			return;
		}
		
		$clap = $('.js-clap');
		
		if($clap.is('.open')) {
			$clap.removeClass('open');
			$('.js-audio')[0].play();
		} else {
			$clap.addClass('open');
		}
	});
	
	/**
	 * Handles page resize
	 */
	$(window).resize(function() {
		setupGui();
	});
	
	// Init
	setupGui();
	
});
