$(function() {
	var footerNavs = $("#footerNav li a");
	footerNavs.eq(1).addClass('footerNavSel').siblings('li').removeClass('footerNavSel');
	$("#search").on('tap', function() {
		window.location.href = "http://daianan.github.io/phonenew/zuiyouApp/search.html";
	});
});