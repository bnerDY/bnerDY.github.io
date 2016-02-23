/**
 * Created by Martin on 09/08/2015.
 */
define(['jquery'], function ($) {

	return {
		'control': function () {
			var demoDiv$ = $("#demo");
			demoDiv$.css('width','10px');
			demoDiv$.css('height','10px');
			demoDiv$.css('background-color','blue');

		}
	};
});