$(document).ready(function() {
	// Start writing your custom functions here.
	// All the necessary pluigns are already loaded.
});

	// Module name: Rotator
	// Dependencies: morphext.js
	// Docs: https://github.com/MrSaints/Morphext
	(function(){
		var rotators = $('.js-rotator');

		rotators.Morphext({
			animation: "bounceIn",
			separator: ",",
			speed: 2000
		});
	})();