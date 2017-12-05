$(function() {
	var footerNavs = $("#footerNav li a");
	var footerIcon = $("#footerNav li a span img");
	footerNavs.eq(1).addClass('footerNavSel').siblings('li').removeClass('footerNavSel');
	footerIcon.eq(1).attr("src", "icon/icon21_03.png");
	$("#searchTxt").focus(function() {
		window.location.href = "http://daianan.github.io/phonenew/jiaoyouApp/search.html";
	});
	
	//导航点击
	var huatiNavs=$("#huatiNav a");
	var huatiSels=$("#huatiSel ul");
	huatiSels.fadeOut().eq(0).fadeIn();
	$("#slider").css("left",huatiNavs.eq(0).width()/2-$("#slider").width()/2);
	huatiNavs.eq(0).addClass("sel").siblings('a').removeClass('sel');
	huatiNavs.on("tap",function(){
		$(this).addClass("sel").siblings('a').removeClass('sel');
		$("#slider").animate({"left":$(this).width()*$(this).index()+$(this).width()/2-$("#slider").width()/2},100);
		$("#huatiSel ul").eq($(this).index()).fadeIn().siblings("ul").fadeOut();
	});
	
	//左滑、右滑
	var huatiNav = document.getElementById("huatiNav");
	huatiNav.addEventListener("touchstart", function(e) {
		e.preventDefault();
	}); //阻止默认行为
	var n=0;
	$(document).on("swipeLeft",function(){
		n++;
		$("#huatiSel ul").eq(n).fadeIn().siblings("ul").fadeOut();
		if (n>=3) {
			n=3;
		}
		huatiNavs.eq(n).addClass("sel").siblings('a').removeClass('sel');
		$("#slider").animate({"left":huatiNavs.eq(n).width()*n+huatiNavs.eq(n).width()/2-$("#slider").width()/2},100);
	});
	$(document).on("swipeRight",function(){
		n--;
		if (n<=0) {
			n=0;
		}
		$("#huatiSel ul").eq(n).fadeIn().siblings("ul").fadeOut();
		huatiNavs.eq(n).addClass("sel").siblings('a').removeClass('sel');
		$("#slider").animate({"left":huatiNavs.eq(n).width()*n+huatiNavs.eq(n).width()/2-$("#slider").width()/2},100);
	});
	
});