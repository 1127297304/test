function move(element,target,fn){
	clearInterval(element.timer);
	element.timer=setInterval(function(){
		var isComplete=true;
		for(var attr in target){
			var current;
			if(attr=="opacity"){
				current=Math.round(parseFloat(getStyle(element,attr))*100);
			}else{
				current=Math.round(parseFloat(getStyle(element,attr)));
			}
			if(!current){
				current=0;
			}
			var speed=(target[attr]-current)/10;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(current!=target[attr]){
				if(attr=="opacity"){
					element.style.filter="alpha(opacity:"+parseInt(current+speed)+")";
					element.style.opacity=current+speed/100;
				}else{
					element.style[attr]=current+speed+"px";
				}
				isComplete=false;
			}
		}
		if(isComplete){
			clearInterval(element.timer);
			if(fn){
				fn();
			}
		}
	},30);
}
//是兼容的一种获取当前值的封装函数
function getStyle(dom,name){
	if(dom.currentStyle){
		return dom.currentStyle[name];
	}else{
		return window.getComputedStyle(dom,false)[name];
	}
}
