/**
 * big click plugin
 *
 * @author Shawn Drew
 * @copyright 2011
 * @version 0.1
 * @url http://shawndrew.me
 */

(function($){

$.fn.bigClick = function(options){

    $.fn.bigClick.defaults = {
		anchorSelector: 'a:first',
		addClass: false
    };
	
    var opts = $.extend({}, $.fn.bigClick.defaults, options);
	
	return $(this).each(function() {
		
		var a = $(this).find(opts.anchorSelector);
		
		if (a.size() > 1) {
		
			a = $(a).eq(0);
		
		}
		
		if (a.size() == 1) {
		
			if (opts.addClass) {
			
				$(this).addClass(opts.addClass);
			
			}
		
			$(this).click(function() {
				
				window.location = a.attr('href');
			
			});
			
		}
		
    });

};

})(jQuery);