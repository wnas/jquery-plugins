/*
 * jQuery inputfile plugin 0.1
 * requires jquery 1.2.6 ( only tested with this one)
 *
 * http://wnas.nl/
 *
 * Copyright (c) 2008 Wilfred Nas
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

/*

	to intiate the  function do
	jQuery('foobar').inputfile();
	
	NOTE  the input type file has to have an unique id.
	
	it first add's a class to the input file (style / hide with css)
	then we create a div with an input and a span (span for button)
	on change we set the value of file in the text...
	
	DONE
*/



jQuery.fn.inputfile = function (){
	jQuery(this).addClass('hidden');
	var fii = jQuery(this).attr('id');
	jQuery(this).after('<div class="fakefile"><input type="text" class="fakefile ' + fii + ' " /><button class="btn">choose</button></div>');
	jQuery(this).change(function () {
		var val = jQuery(this).val();
		jQuery('.'+fii).val(val);
	});
};