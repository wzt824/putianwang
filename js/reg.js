$(function(){
	//定义变量用来验证正则是否全部输入正确

	var queStr = false;
	//刷新图形验证码
    function myReload(){
        document.getElementById("l_yzm").src=document.getElementById("l_yzm").src+"&"+new Date().getTime();
    };


	//电话号码正则表达式
	$("#userphone").blur(function(){
		testF();
	});
	function testF(){
		let pattern = /^[1][3-9]\d{8}\d$/g;
		let str = pattern.test($("#userphone").val());
		if (!str){
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
			queStr = false;
		}else{
			$("#hint").html("√");
			$("#hint").css({
				"position":"absolute",
				"top":"20px",
				"right":"12px",
				"color": "red"
			});
			queStr = true;
		}
		return str;
	}
	
	//密码正则表达式
	$("#userpassword").blur(function(){
		passwordF();
	});
	function passwordF(){
		let pattern = /^\d{6,12}\d$/g;
		//let pattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
		let str = pattern.test($("#userpassword").val());
		if (!str){
			$("#hint").html( "格式错误");
			$("#hint").css({
				"color":"red",
				"fontSize":"12px",
				"lineHeight":"24px",
				"position":"absolute",
				"top":"308px",
				"opacity":1
			});
			queStr = false;
		}else{
			$("#hint").html( "√");
			$("#hint").css({
				"right":"12px"
			});
			queStr = true;
		}
		return str;
	}

	//确认输入密码
	$("#turePass").blur(function(){
		passwordT(); 
	});
	function passwordT(){
		let tStr = $("#turePass").val();
		let pStr = $("#userpassword").val();
		if (tStr == pStr) {
			var str = tStr;
		}else if(!str){
			$("#hint").html("两次密码输入不一致");
			$("#hint").css({
				"color":"red",
				"fontSize":"12px",
				"lineHeight":"24px",
				"position":"absolute",
				"top":"405px",
				"opacity":1
			});
			queStr = false;
		}else{
			$("#hint").html("√");
			$("#hint").css({
				"top":"405px",
				"right":"12px"
			});
			queStr = true;
		}
		return str;
	}
	


	//确认两次输入的密码是否一致表达式
	$("#checkbox_public").click(function(){
		checkE();
	});
	function checkE(){
		let str = $("#checkbox_public").prop("checked");
		if (!str) {
			queStr = true;
		}else{
			queStr = false;
		}
		return str;
	}

    //判断表单内容是否有值
    function register(){
        $("#btn").click(function(){
            let str = $("#userphone").val();
            let pstr = $("#userpassword").val();
            let tstr = $("#turePass").val();
            if(str==""){
                alert("亲！手机号不能为空");
            }else if(pstr==""){
                alert("亲！密码不能为空");
            }else if (tstr=="") {
                alert("亲！确认密码不能丢哦");
            }else if (tstr != pstr) {
                alert("亲！确认密码得和前面保持一致哟");
            }else if(!$("#checkbox_public").prop("checked")){
                alert("亲！是否同意我站服务条款");
            }
        });
    }
    register();




    // //按钮都禁用了，二次验证的时候哪来的点击事件？
    // $("#btn").click(function(){
	// 	if (queStr && testF() && passwordF() && passwordT() && checkE()){
    //        //当所有条件都满足的时候，移除禁用属性，可以注册
    //        $('#btn').attr("disabled","false");
    //     }else{
    //         //当有一个条件不满足的时候，添加禁用属性，禁止注册
    //        $('#btn').attr("disabled","true");
    //     }
    // });
});
