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
	var usern = $("#username").val();
	$("#username").on("input", function() {
		var usern = $("#username").val();
		$.ajax({
			type: "post",
			url: "php/login.php",
			data:{
				us:usern
			},
			success: function(data) {
				console.log(data)
			}
		});
	});

});