$(function() {
	$("#regBack").css("display", "none");
	$("#loginBack").css("display", "block");
	$("#loginBack").on("tap", function() {
		history.back();
	});
	var loginBtns = $(".loginMain a");
	loginBtns.eq(1).css("display", "none");
	$("#loginReg").on("tap", function() {
		$(".loginTxt").html("注册");
		$(this).hide();
		loginBtns.eq(0).css("display", "none");
		loginBtns.eq(1).css("display", "block");
		$("#regBack").css("display", "block");
		$("#loginBack").css("display", "none");
	});

	$("#password").on('input', function() {
		if($("#username").val() != '' && $("#password").val() != '') {
			$("#userLogin").css('background', '#149eff');
		}
	});

	$("#userLogin").on("click", function() {
		var usern = $("#username").val();
		var pwd = $("#password").val();
		if(usern == "admin" && pwd == '123456') {
			$("#userLogin").attr("href","wo.html?username="+usern);
		}else{
			alert("用户名或密码错误，请重新输入");
			return;
		}
	});
});