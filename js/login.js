$(function(){
	//电话号码正则表达式
	function testF(){
		$("#userphone").blur(function(){
			var str = this.value;
			var reg = /^[1][3-9]\d{8}\d$/g;
			if(!reg.test(str)){
				$("#hint").html( "请输入正确的手机号码");
				$("#hint").css({
					"color":"red",
					"fontSize":"12px",
					"lineHeight":"24px",
					"position":"absolute",
					"top":"20px",
	                "right":0,
					"textIndent":"24px",
					"opacity":1,
					"zIndex":110
				});
			}else{
				$("#hint").html("√");
				$("#hint").css({
					"position":"absolute",
					"top":"20px",
					"right":"12px",
					"color":"red"
				});
			}
		});
	}
	testF();
	//密码正则表达式
	function passwordF(){
		$("#userpassword").blur(function(){
			var pStr = this.value;
			var pPattern =  /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/ig;
			if(!pPattern.test(pStr)){
				$("#hint").html( "格式错误");
				$("#hint").css({
					"color":"red",
					"fontSize":"12px",
					"lineHeight":"24px",
					"position":"absolute",
					"top":"308px",
					"opacity":1
				});
			}else{
				$("#hint").html( "√");
				$("#hint").css({
					"right":"12px"
				});
			}
		});
	}
});