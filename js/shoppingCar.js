
$(function(){
	//增加减功能
	//累加
	$(".add").click(function(){
		var changeAdd = parseInt($(".numChange")[0].innerHTML);
		changeAdd = changeAdd +1;
		$(".numChange")[0].innerHTML = changeAdd;
	});
	
	//累减
	$(".reduce").click(function(){
		var changeReduce = parseInt($(".numChange")[0].innerHTML);
		changeReduce--;
		if(changeReduce == 0){
			return;
		}
		$(".numChange")[0].innerHTML = changeReduce;
	});
	
	
	//相关食谱点击增减功能
//  $(".car_tit ul:first-child i").each(function(){
    	//点击事件的次数（从零开始）
    	var strat = 0;
    	var lis = $(".cookbook-list li");
    	$("ul:first-child i").click(function() {
        		//求和
    		for(var i=0;i<lis.length;i++){
        		strat++;
				console.log(lis.eq(i).find("i").html());
        		if(strat%2==0){
        			$(this).css({"backgroundImage":"url(img/icons.png)","backgroundPosition":"-22px -170px"});
        			//获取点中状态的值
        		}else{
        			$(this).css({"backgroundImage":"url(img/icons.png)","backgroundPosition":"-1px -170px"});
        		}
    	  	}	
   		});
    	
//	});
});