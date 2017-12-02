$(function() {
	var footerNavs = $("#footerNav li a");
	footerNavs.eq(0).addClass('footerNavSel').siblings('li').removeClass('footerNavSel');
	$("#search").on('tap', function() {
		window.location.href = "http://daianan.github.io/phonenew/zuiyouApp/search.html";
	});
	$("#edit").on('tap', function() {
		window.location.href = "http://daianan.github.io/phonenew/zuiyouApp/edit.html";
	});
	
	//删除动态
	var indexCloses1 = $("#tieList1 b[class=close]");
	var indexCloses2 = $("#tieList2 b[class=close]");
	var indexLists1 = $("#tieList1 > li");
	var indexLists2 = $("#tieList2 > li");
	indexCloses1.on("tap", function() {
		var bIndex = $(this).parent().parent().index();
		indexLists1.eq(bIndex).slideToggle(500);
	});
	indexCloses2.on("tap", function() {
		var bIndex = $(this).parent().parent().index();
		indexLists2.eq(bIndex).slideToggle(500);
	});

	//添加数据
	var indexTous=$("#tieList1 li div[class=tieListTop] img");
	var indexNicks=$("#tieList1 li div[class=tieListTop] p[class=nick]");
	var indexCons=$("#tieList1 li p[class=tieListMsg]");
	var indexImgs=$("#tieList1 li div[class=tieListMain] img");
	for (var i=0;i<indexTous.length;i++) {
		indexTous.eq(i).attr("src",json.indexLi1[i].touImg);
		indexNicks.eq(i).html(json.indexLi1[i].nick);
		indexCons.eq(i).html(json.indexLi1[i].content);
		indexImgs.eq(i).attr("src",json.indexLi1[i].photo);
	}
	var indexTou=$("#tieList2 li div[class=tieListTop] img");
	var indexNick=$("#tieList2 li div[class=tieListTop] p[class=nick]");
	var indexCon=$("#tieList2 li p[class=tieListMsg]");
	var indexImg=$("#tieList2 li div[class=tieListMain] img");
	$.each(json, function(k,v) {
		for(var i=0;i<6;i++){
			indexTou.eq(i).attr("src",json.indexLi2[i].touImg);
			indexNick.eq(i).html(json.indexLi2[i].nick);
			indexCon.eq(i).html(json.indexLi2[i].content);
			indexImg.eq(i).attr("src",json.indexLi2[i].photo);
		}
	});
	
//	var n = 0;
	var indexHeaderNavs = $("#indexHeader a");
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
//	var indexSection = document.getElementById("indexSection");
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