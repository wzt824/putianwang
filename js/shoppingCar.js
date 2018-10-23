
$(function(){
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
   //	数量增加减少
// 加
	$(".add").click(function(){
		var jia = $(this).prev(".numChange");
//		console.log(sum);
		$(this).prev(".numChange").html(parseInt(jia.html())+1);
		var danjia = $(".danjia");
//		console.log(danjia.html());
		var he = parseInt(jia.html()) * parseInt(danjia.html());
//		console.log(he);
		$(this).parent().parent().parent().find("li .pricehe").html(he);
		getSum();
	});
	
//	减
	$(".reduce").click(function(){
		var jian = $(this).next(".numChange");
//		console.log(jian);
//		console.log(sum);
		if(parseInt(jian.html()) <= 1){
			jian.html(1);
		}else{
			$(this).next(".numChange").html(parseInt(jian.html())-1);
		}
		var danjia = $(".danjia");
//		console.log(danjia);
//		console.log(danjia.html());
		var he = parseInt(jian.html()) * parseInt(danjia.html());
//		console.log(he);
		$(this).parent().parent().parent().find("li .pricehe").html(he);
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
	
	
	//z全部商品总数
	function getSum(){
		$(".car_product ul").each(function(){
			var zongshu = 0
			var shu = $(this).find(".numChange");
			var cons = $(".productNum");
			zongshu += parseInt(shu.html());
			console.log(zongshu);
			cons.html(zongshu);
		});
	}
	
	
//	全选
	$(".selectAll").click(function(){
		console.log($(this).find("i").attr("backgroundPosition.top"));
//		if($(this).find("i").attr("backgroundPosition")==-1)
	});
});