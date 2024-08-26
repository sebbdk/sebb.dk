/* 
* @Author: sebb
* @Date:   2014-04-04 20:44:35
* @Last Modified by:   sebb
* @Last Modified time: 2014-04-04 21:25:39
*/

(function($) {

	$(window).on('resize', onResize);

	$(document).ready(function() {
		onResize();
		setTimeout(function() {
			$('body').addClass('active');
		}, 300);
	});

	function onResize() {
		console.log('resize!');
		var pos = ($(window).height()/2) - ($('.bubble').outerHeight()/2);
		$('.bubble').css('margin-top', pos)
	}

})(jQuery);