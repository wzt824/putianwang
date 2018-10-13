
jQuery.fn.extend({
	masking:function(obj){	
		this.each(function(){
			if(!obj){
				var obj = {};
			}
			//1、把当前div赋给属性
			obj.$boxDomObj=$(this);
			//2、给当前div增加蒙版
			new Masking(obj);	
		});
	}
});

class Masking{
	//构造函数
	constructor(obj){
		let defaultObj = {
			$boxDomObj:null,
			width:obj.$boxDomObj.width(),
			height:obj.$boxDomObj.height(),
			bgColor:"rgba(0,0,0,.5)",//透明度
//			bgColor:"black",
//			opacity:0.5,
			timeLong:200
		};

		for(let key in defaultObj){
			this[key] = obj[key]?obj[key]:defaultObj[key];
		}
		this.$domObj = null;
		//外面的位置
		this.outPos={
			"left":{left:-1*this.width,top:0},
			"right":{left:this.width,top:0},
			"top":{left:0,top:-1*this.height},
			"bottom":{left:0,top:this.height}
		}
		this.createUI();
		this.addEvent();
	}
	
	//创建外观
	createUI(){
		this.$domObj = $("<div></div>");
		this.$domObj.css({
			margin:0,
			position: "absolute",
			left:-1*this.width,
			top:0,
			width: this.width,
			height: this.height,
			backgroundColor: this.bgColor,
//			opacity: this.opacity
		});
		this.$boxDomObj.append(this.$domObj);
//		
//		this.createContant();
	}
	
//	
//	//创建蒙版上的内容
//	createContant(){
//		this.$pObj = $("<p>Hello</p>");
//		this.$domObj.append(this.$pObj);
//	}
	//添加事件
	addEvent(){
		this.$boxDomObj.mouseenter((event)=>{			
			this.$domObj
			.css(this.outPos[this.getDirection(event.offsetX,event.offsetY)])
			.animate({left:0,top:0},this.timeLong);
		});
		
		this.$boxDomObj.mouseleave((event)=>{			
			this.$domObj
			.animate(
				this.outPos[this.getDirection(event.offsetX,event.offsetY)]
				,
				this.timeLong
			);
		});	
	}
	
	getDirection(x,y){
		//1、先判断方向
		let dis={
			left:x,
			right:this.width-x,
			top:y,
			bottom:this.height-y
		};
		let direction="left";
		for(let key in dis){
			if(dis[key]<dis[direction]){
				direction = key;
			}
		}
		return direction;
	}	
}
