$(function() {
	var footerNavs = $("#footerNav li a");
	var footerIcon = $("#footerNav li a span img");
	footerNavs.eq(1).addClass('footerNavSel').siblings('li').removeClass('footerNavSel');
	footerIcon.eq(1).attr("src", "icon/icon21_03.png");
	$("#searchTxt").focus(function() {
		window.location.href = "http://daianan.github.io/phonenew/jiaoyouApp/search.html";
	});
	
	var huatiNavs=$("#huatiNav a");
	var huatiSels=$("#huatiSel ul");
	huatiSels.fadeOut().eq(0).fadeIn();
	console.log(huatiNavs.eq(0).width()/2-$("#slider").width()/2)
	$("#slider").css("left",huatiNavs.eq(0).width()/2-$("#slider").width()/2);
	huatiNavs.eq(0).addClass("sel").siblings('a').removeClass('sel');
	huatiNavs.on("tap",function(){
		
	});
	
	
	var huatiNav = document.getElementById("huatiNav");
	huatiNav.addEventListener("touchstart", function(e) {
		e.preventDefault();
	}); //阻止默认行为
	
	
});