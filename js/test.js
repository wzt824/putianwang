getCookie("proXq");
	

$.ajax({
		type:"get",
		url:"php/getGoodsList.php",
		async:true,
		data:null,
		success:function(data){
			console.log(data);
			var productlist = '';
			for(var i=0;i<data.length;i++){
				console.log(data[i].goodsType == getCookie("selectPro"));
				if(data[i].goodsType == getCookie("selectPro")){
					productlist+="<li>\
						<div class='listBox'>\
						<span class='proId'>"+data[i].goodsId+"</span>\
							<a href='javascript:;'>\
    							<img src='"+data[i].goodsImg+"' alt='' />\
        						<a href='javascript:;'>\
        							<h3>"+data[i].goodsName+"</h3>\
        						</a>\
    						</a>\
							<div class='listBox_left'>\
	    						<span>"+data[i].beiyong6+"</span>\
	    						<img src='"+data[i].beiyong7+"' />\
	    					</div>\
	    					<div class='listBox_right'>\
	    						<span class='yj'>"+data[i].beiyong11+"</span>\
	    						<span class='jk'>"+data[i].beiyong12+"</span>\
	    						<span class='ld'>"+data[i].beiyong13+"</span>\
	    					</div>\
							<p>"+data[i].goodsDesc+"</p>\
							<div class='public_imgBox'>\
								<p id='zhongliang'>"+data[i].beiyong5+"</p>\
								<span>"+data[i].beiyong3+"</span>\
								<p id='price'>￥"+data[i].goodsPrice+"</p>\
								<a href='#'>\
									<div class='public_caricons'></div>\
								</a>\
							</div>\
						</div>\
					</li>";
					$(".pro_list").html(productlist);
					
					
				//循环去除
				var spans =  $(".listBox_right span");
				for(var j=0;j<spans.length;j++){
					var zhi = spans[j].innerHTML;
						//console.log(zhi);
					if(zhi==0){
						spans[j].remove();
					}
				}
				
				var spanstr =  $(".listBox_left span");
				for(var j=0;j<spanstr.length;j++){
					var zhi = spanstr[j].innerHTML;
						//console.log(zhi);
					if(zhi==0){
						spanstr[j].remove();
					}
				}
				
				
				$(".listBox_left").each(function(){
					if($(this).find("img").attr("src")==0){
						$(this).find("img").remove();
					}
				});
			
				}
			}
			
			
			$(".listBox").each(function(){
				$(this).click(function(){
					var proIds = $(this).find(".proId").html();
					
					setCookie("proXq",proIds,-1);
					setCookie("proXq",proIds,1);
					window.open("productPart.html");
				});
			});
		},
		dataType:"json"
	});	