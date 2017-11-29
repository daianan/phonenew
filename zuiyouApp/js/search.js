$(function() {
	var searchNavs = $("#searchNav a");
	var smallWidth = $("#small").innerWidth() / 2;
	var smallLeft = searchNavs.eq(0).innerWidth() / 2 - smallWidth;
	$("#small").css("left", smallLeft);
	searchNavs.eq(0).addClass("col");
	$("#searchTxt").trigger("focus");
	searchNavs.on("tap", function() {
		var small_left = $(this).innerWidth() * ($(this).index() + 1) - $(this).innerWidth() / 2 - smallWidth;
		$("#small").animate({
			"left": small_left
		}, 200);
		$(this).addClass("col").siblings('a').removeClass("col");
	});
	$("#searchClose").on("tap", function() {
		history.back();
	});
});