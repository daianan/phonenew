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
		$("#username").attr("placeholder","请输入6-15位字母、数字，以字母开头");
		$("#password").attr("placeholder","请输入6-18位包含字母、数字和下划线");
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
	$("#userReg").on("click",function(){
		var reg1=/^[a-zA-Z]{1}[a-zA-z0-9]{5,14}$/;
		var reg2=/^\w{6,17}$/;
		var usern = $("#username").val();
		var pwd = $("#password").val();
		console.log(reg1.test(usern));
		console.log(reg2.test(pwd));
		if (reg1.test(usern)&&reg2.test(pwd)) {
			alert('注册成功!');
		}else if(reg1.test(usern)===false&&reg2.test(pwd)){
			alert('用户名错误，请重新输入');
		}else if (reg1.test(usern)&&reg2.test(pwd)===false) {
			alert('密码错误，请重新输入');
		}else if (usern===''||pwd==='') {
			alert('输入内容不能为空');
		}
	});
});