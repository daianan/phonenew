$(function() {
	var footerNavs = $("#footerNav li a");
	footerNavs.eq(0).addClass('footerNavSel').siblings('li').removeClass('footerNavSel');
	$("#search").on('tap', function() {
		window.location.href = "http://daianan.github.io/phonenew/zuiyouApp/search.html";
	});
	$("#edit").on('tap', function() {
		window.location.href = "http://daianan.github.io/phonenew/zuiyouApp/edit.html";
	});
	var indexCloses = $("#tieList1 b[class=close]");
	var indexLists1 = $("#tieList1 > li");
	indexCloses.on("tap", function() {
		var bIndex = $(this).parent().parent().index();
		indexLists1.eq(bIndex).slideToggle(500);
		//		indexLists1.eq(bIndex).remove();
	});

	var n = 0;
	var indexHeaderNavs = $("#indexHeader a");
	var indexSection = document.getElementById("indexSection");
	$("#indexSection ul").eq(0).fadeIn().siblings("ul").fadeOut();
	indexHeaderNavs.on("tap", function() {
		$("#indexSection ul").eq(($(this).index() - 1)).fadeIn().siblings("ul").fadeOut();
		indexHeaderNavs.eq(($(this).index() - 1)).addClass("headerSel").siblings("a").removeClass("headerSel");
	});
	
	//给div#indexSection设高
	/*var arr = [$("#indexSection ul").eq(0).height(), $("#indexSection ul").eq(1).height(), $("#indexSection ul").eq(2).height()];
	$("#indexSection").css("height", arr.sort()[0]);*/
	/*$("#indexSection").on("touchmove", function(e) {
		e.stopPropagation()
	});*/

	//左滑、右滑
	/*indexSection.addEventListener("touchstart", function(e) {
		e.preventDefault();
	});*/
	/*	var startPosition, endPosition, moveX, moveY;
		$(document).on('touchstart', function(e) {
			var touch = e.touches[0];
			startPosition = {
				x: touch.pageX,
				y: touch.pageY
			}
		}).on('touchmove', function(e) {
			var touch = e.touches[0];
			endPosition = {
				x: touch.pageX,
				y: touch.pageY
			};
			moveX = endPosition.x - startPosition.x;
			moveY = endPosition.y - startPosition.y;
		});
		$("#indexSection").on("touchend", function(e) {
			if(moveY > moveX) {
				e.stopPropagation();
			}
			if(moveX > moveY && moveX > 0) {
				n++;
				if(n == $("#indexSection ul").length) {
					n = $("#indexSection ul").length - 1;
				}
				indexHeaderNavs.eq(n).addClass("headerSel").siblings("a").removeClass("headerSel");
				$("#indexSection ul").eq(n).fadeIn().siblings("ul").fadeOut();
			}
			if(moveX > moveY && moveX < 0) {
				n--;
				if(n < 0) {
					n = 0;
				}
				indexHeaderNavs.eq(n).addClass("headerSel").siblings("a").removeClass("headerSel");
				$("#indexSection ul").eq(n).fadeIn().siblings("ul").fadeOut();
			}
		});*/

});