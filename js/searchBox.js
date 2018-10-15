//滚动条效果
window.onscroll = function(){
	var temp = document.body.scrollTop || document.documentElement.scrollTop;
//	console.log(temp);
	//		当你滚轮滚到214px的时候,以下显示
	if(temp >= 244){
		//productList页面菜单栏
		$(".con_fixedBox").css({
			background:"white",
			display : 'block',
			position:"fixed",
			left:47,	
			top:0,
			zIndex:10000,
			marginTop:0
		})
	}else if(temp >= 214){
		//滚动菜单
		$(".con_scroll").css({
			background:"white",
			display : 'block',
			position:"fixed",
			top:0,
			zIndex:10000,
			marginTop:0
		}),
		//右侧菜单
		$(".scroll_fixed_right").css({
			display : 'block',
			position:"fixed",
			right:0,
			bottom:100,
			zIndex:10000,
			marginTop:0
		})
	}else{
		//滚动菜单
		$(".scroll_fixed_right").css({
			display : 'none'
		}),
		//右侧菜单
		$(".con_scroll").css({
			display : 'none'
		}),
		//productList页面菜单栏
		$(".con_fixedBox").css({
			display : 'none'
		})
	} 
		
	//点击返回顶部 
	$("#icon-top").click(function(){
		$("html,body").animate({scrollTop:0},0);
	});
	
	//点击出现二维码
	$("#icon-erweima").mouseover(function(){
		$(".scroll_erweima").css({
			display:"block"
		});
	});
	$("#icon-erweima").mouseout(function(){
		$(".scroll_erweima").css({
			display:"none"
		});
	});
}

//nav鼠标滑过出现下拉菜单效果
	$("#list").mouseover(function(){
		$(".uls").css({
			display:"block"
		});
	});
	$("#list").mouseout(function(){
		$(".uls").css({
			display:"none"
		});
	});


