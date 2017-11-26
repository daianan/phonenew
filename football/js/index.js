$(function(){
	var uls=$("#section ul");
	var lis=$("#ul li");
	uls.eq(0).css("display","flex");
	lis.eq(0).addClass("active");
	lis.on("click",function(){
		$(this).addClass("active").siblings("li").removeClass("active");
		uls.css("display","none");
		uls.eq($(this).index()).css("display","flex");
	});
});
