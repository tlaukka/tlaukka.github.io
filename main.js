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

		function addEmail() {
			var email = $(".email");

			var m1 = "teemulaukka";
			var m2 = "@outlook.com";

			email.append(m1);
			email.append("<span style='display:none'>foo</span>");
			email.append(m2);
		}

		addEmail();
	}

	function toggleAssetInfo(caller, id) {
		var element = $("#" + id);

		element.slideToggle(200, function() {
			if (element.is(":visible")) {
				caller.html("Less Info<i class='icon-angle-double-up'></i>");
			}
			else {
				caller.html("More Info<i class='icon-angle-double-down'></i>");
			}
		});
	}

	return {
		init: init,
		toggleAssetInfo: toggleAssetInfo
	};
})();
