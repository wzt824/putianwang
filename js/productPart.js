//发送ajax请求
$.ajax({
		type:"get",
		url:"php/getGoodsList.php",
		async:true,
		data:null,
		success:function(data){ 
			var productPart = '';
			for(var i=0;i<data.length;i++){
				if(data[i].goodsId == getCookie("proXq")){
					productPart += "<div class='details_up'>\
		        		<a href='index.html'>首页</a> > \
		        		<a href='#'>"+data[i].goodsName+"</a>\
		        	</div>\
		        	<div class='details_down'>\
		        		<div class='details_down_l'>\
		        			<div id='bigBox'>\
		        				<img id='showImg' src="+data[i].goodsImg+" />\
		        				<div class='listBox_left'>\
	    							<span>"+data[i].beiyong6+"</span>\
	    							<img id='small_position' src="+data[i].beiyong7+" />\
	    						</div>\
		    					<div class='listBox_right'>\
		    						<span class='yj'>"+data[i].beiyong11+"</span>\
		    						<span class='jk'>"+data[i].beiyong12+"</span>\
		    						<span class='ld'>"+data[i].beiyong13+"</span>\
		    					</div>\
							</div>\
		        			<ul id='ulsBoxImg'>\
		        				<li><img src="+data[i].beiyong8+" /></li>\
		        				<li><img src="+data[i].beiyong9+" /></li>\
		        				<li><img src="+data[i].beiyong10+" /></li>\
		        			</ul>\
		        		</div>\
		        		<div class='details_down_r'>\
		        			<h1>"+data[i].goodsName+"</h1>\
		        			<h3>"+data[i].goodsDesc+"</h3>\
		        			<h6>"+data[i].goodsId+"</h6>\
		        			<div class='details_prices'>\
		        				<p>销售价:\
		        					<strong>￥<b>"+data[i].goodsPrice+"</b></strong>\
		        					<del>￥<b>"+data[i].beiyong1+"</b></del>\
		        					<i></i>\
		        				</p>\
		        			</div>\
		        			<div class='details_SPEC'>\
		        				<p>规格：<span>"+data[i].beiyong5+"</span></p>\
		        				<br /><br />\
		        				<p>产地:  <span style='font-weight:100;border:0;margin:0;padding:8px;'>"+data[i].beiyong3+"</span></p>\
		        				<p>存储方式:  <span style='font-weight:100;border:0;margin:0;padding:8px;'>"+data[i].beiyong4+"</span></p>\
		        			</div>\
		        			<p class='deli_info'>上海地区，16:00前下单，当日即可送达</p>\
		        			<div class='details_info'>\
		        				<div class='span_info'>\
		        					<span class='reduce'>-</span>\
		        					<span class='numChange'>1</span>\
		        					<span class='add'>+</span>\
		        				</div>\
		        				<button class='joinCar'>加入购物车</button>\
		        			</div>\
		        			<div class='details_text'>\
		        				<strong>产品详细介绍: </strong><b style='font-weight:100'>"+data[i].beiyong2+"</b>\
		        			</div>\
		        		</div>\
		        	</div>";
					$(".con_details").html(productPart);
					
					
					
					
					
				//循环去除
				//1.去除有机,进口,冷冻
				var spans =  $(".listBox_right span");
				for(var j=0;j<spans.length;j++){
					var zhi = spans[j].innerHTML;
					if(zhi==0){
						spans[j].remove();
					}
				}
				//2.去除折扣
				var spanstr =  $(".listBox_left span");
				for(var j=0;j<spanstr.length;j++){
					var zhi = spanstr[j].innerHTML;
					if(zhi==0){
						spanstr[j].remove();
					}
				}
				
				//3.去除有机图片
				$(".listBox_left").each(function(){
					if($(this).find("img").attr("src")=='/'){
						$(this).find("img").remove();
					}
				});
				
				//4.去除放大镜下边的小图
				$("#ulsBoxImg li").each(function(){
					if($(this).find("img").attr("src")=='/'){
						$(this).remove();
					}
				});
				
				//5.去除原价
				$(".details_prices").each(function(){
					if($(this).find("del").find("b").attr("src")==0){
						$(this).find("del").remove();
					}
				});
			}
		}

		//each循环取得其设置css样式
		$("#ulsBoxImg li").each(function(){
			
			$(this).click(function() {
				//siblings除过本身之外的其他同辈元素
				$(this).css({border:"1px solid #009c4c"}).siblings().css({border:"1px solid #f0f0f0"});
				//取值
				var urls = $(this).find("img").attr("src");
				console.log(urls);
				//赋值
				$("#bigBox #showImg").attr("src",urls);
				
				console.log($("#bigBox #showImg").attr("src"));
				
				$("#bigBox").mouseenter(function() {
			        singlton.getInstance({
				        //要放大的图片对应的dom元素
			            bigBoxDom:this,
			            //大图的src 要放大的效果的dom元素的背景图片
		                bigImg:urls,
		                //要放大图片的宽和高
		                bigBoxWidth:450,
		                bigBoxHeight:450,
		                //放大镜的宽和高
		                width:225,
		                height:225,
		                //放大倍数
		                multiple:2
		            });
		      	});
			})
		});
		
		
		
		//累加
		$(".add").click(function(){
			var changeAdd = parseInt($(".numChange")[0].innerHTML);
			changeAdd = changeAdd +1;
			$(".numChange")[0].innerHTML = changeAdd;
		});
		
		//累减
		$(".reduce").click(function(){
			var changeReduce = parseInt($(".numChange")[0].innerHTML);
			changeReduce = changeReduce - 1;
			if(changeReduce == 0){
				return;
			}
			$(".numChange")[0].innerHTML = changeReduce;
		});
		
		
		
		//相关食谱点击增减功能
		$(".cookbook-product:last-child span").each(function(){
			//点击事件的次数（从零开始）
			var strat = 0;
			var lis = $(".cookbook-list li");
			$(this).click(function() {
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
			
		});

	},
	dataType:"json"
});	
