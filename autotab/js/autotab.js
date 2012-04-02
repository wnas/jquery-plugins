
/*
 * jQuery autoTab plugin 0.1
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
	Autotab plugin by Wilfred Nas

	
	in order to implement you have to have some stuff in the html
	
	like three fields to collect days, months and years.
	by putting the trigger class on the first two, you force the autotab.
	the last one has a manual tab, which is (imho) like the users expect it to.
	<input type="text" maxlength="2" class="day foo" />
	<input type="text" maxlength="2" class="month foo" />
	<input type="text" maxlength="4" class="year" />
	
	REQUIRED
	-a maxlength on the input type='text'
	
	to call it do:
	
	// autotab plug in ...
	jQuery('input.foo').autotab();
	
	that's it, zero configuration in your javascript. 
	You just set the maxlenght, a class and you're done.
*/
jQuery.fn.autotab = function (){
	jQuery(this).keyup(function(e){
		switch(e.keyCode){
			// ignore the following keys
			case 9: // tab
				return false;
			case 16: // shift
				return false;
			case 20: // capslock
				return false;
			default: // any other keyup actions will trigger 
				var maxlength = jQuery(this).attr('maxlength'); // get maxlength value
				var inputlength = jQuery(this).val().length; // get the length of the text
				if ( inputlength >= maxlength ){ // if the text is equal of more than the max length
					jQuery(this).next('input[type="text"], input[type="password"]').focus(); // set focus to the next text field
				}
		}
	});
};
