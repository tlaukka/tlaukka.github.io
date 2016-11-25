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

		$(".navigation > a").click(function(event) {
			if (this.hash !== "") {
				event.preventDefault();
				var hash = this.hash;

				$("html, body").animate({
					scrollTop: $(hash).offset().top
				},
				500,
				function() {
					window.location.hash = hash;
				});
			}
		});
	}

	return {
		init: init
	};
})();
