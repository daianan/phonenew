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
	
	//左滑、右滑
	var n=0;
	var indexHeaderNavs=$("#indexHeader a");
	var indexSection=document.getElementById("indexSection");
	indexSection.addEventListener("touchstart",function(e){
		e.preventDefault();
	});
	$("#indexSection").on("swipeLeft",function(){
		n++;
		if (n==$("#indexSection ul").length) {
			n=$("#indexSection ul").length-1;
		}
		indexHeaderNavs.eq(n).addClass("headerSel").siblings("a").removeClass("headerSel");
		$("#indexSection").css("transform","translate3d(-"+n*33.33+"%,0,0)");
	});
	$("#indexSection").on("swipeRight",function(){
		n--;
		if (n<0) {
			n=0;
		}
		indexHeaderNavs.eq(n).addClass("headerSel").siblings("a").removeClass("headerSel");
		$("#indexSection").css("transform","translate3d(-"+n*33.33+"%,0,0)");
	});
	indexHeaderNavs.on("tap",function(){
		console.log($(this).index()-1)
		$("#indexSection").css("transform","translate3d(-"+($(this).index()-1)*33.33+"%,0,0)");
		indexHeaderNavs.eq(($(this).index()-1)).addClass("headerSel").siblings("a").removeClass("headerSel");
	});
});