$(function() {
	var footerNavs = $("#footerNav li a");
	footerNavs.eq(0).addClass('footerNavSel').siblings('li').removeClass('footerNavSel');
	$("#search").on('tap', function() {
		window.location.href = "http://daianan.github.io/phonenew/zuiyouApp/search.html";
	});
	$("#edit").on('tap', function() {
		window.location.href = "http://daianan.github.io/phonenew/zuiyouApp/edit.html";
	});
	var indexCloses=$("#tieList1 b[class=close]");
	var indexLists1=$("#tieList1 > li");
	indexCloses.on("tap",function(){
		var bIndex=$(this).parent().parent().index();
		indexLists1.eq(bIndex).slideToggle(500);
//		indexLists1.eq(bIndex).remove();
		
	});
});