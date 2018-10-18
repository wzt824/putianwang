
$(function(){
	//增加减功能
	//累加
	$(".car_product ul").each(function(){
		$(this).find(".add").click(function(){
			var changeAdd = parseInt($(".numChange")[0].innerHTML);
			changeAdd++;
			$(".numChange")[0].innerHTML = changeAdd;
		});
		
		//累减
		$(this).find(".reduce").click(function(){
			var changeReduce = parseInt($(".numChange")[0].innerHTML);
			changeReduce--;
			if(changeReduce == 0){
				return;
			}
			$(".numChange")[0].innerHTML = changeReduce;
		});
	});
	
	
	//购物车  选中状态
    $(".car_product ul").each(function(){
    	//点击事件的次数（从零开始）
    	var strat = 0;
    	$(this).find("i").click(function() {
    		strat++;
    		if(strat%2==0){
    			$(this).css({"backgroundImage":"url(img/icons.png)","backgroundPosition":"-22px -170px"});
    			//获取点中状态的值
    		}else{
    			$(this).css({"backgroundImage":"url(img/icons.png)","backgroundPosition":"-1px -170px"});
    		}
   		});
    	
	});
	
	
	//删除
	$(".car_product ul").each(function(){
		$(this).find("li:last-child").click(function() {
			$(this).parent().remove();
		});
	});
	var uu = $(".car_product").val();
	if(uu == 0){
		$(this).parent().remove();
	}
});