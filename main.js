var tl = (function() {

	function init() {

		var navigation = $(".navigation");
		var header = $(".header");

		// Sticky navigation
		$(window).scroll(function() {
			if ($(this).scrollTop() > header.outerHeight()) {
				navigation.addClass("navigation-scrolled");
			}
			else {
				navigation.removeClass("navigation-scrolled");
			}

			// if ($(this).scrollTop() > header.outerHeight() + navigation.outerHeight()) {
			// 	navigation.addClass("navigation-shrunk");
			// }
			// else {
			// 	navigation.removeClass("navigation-shrunk");
			// }
		});

		// Smooth scrolling navigation links
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

	function toggleAssetInfo(caller, id) {
		var element = $("#" + id);

		element.slideToggle(200, function() {
			if (element.is(":visible")) {
				caller.html("Less Info<i class='icon-up-open'></i>");
			}
			else {
				caller.html("More Info<i class='icon-down-open'></i>");
			}
		});
	}

	return {
		init: init,
		toggleAssetInfo: toggleAssetInfo
	};
})();
