(function (window,document){
	'use strict';

	//Note: remember to resize everything when the display size changes
	function init(){

		window.addEventListener ("beforeunload", function() {
			document.body.classList.add("animate-out");
		});

	}

	window.Window = {
		init : init
	}
})(window,document);
Window.init();
