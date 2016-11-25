var tl = (function() {

	function init() {

		var navigation = $(".navigation");
		var header = $(".header");

		$(window).scroll(function() {
			if ($(this).scrollTop() > header.outerHeight()) {
				navigation.addClass("navigation-scrolled");
			}
			else {
				navigation.removeClass("navigation-scrolled");
			}

			if ($(this).scrollTop() > header.outerHeight() + navigation.outerHeight()) {
				navigation.addClass("navigation-shrunk");
			}
			else {
				navigation.removeClass("navigation-shrunk");
			}
		});
	}

	return {
		init: init
	};
})();
