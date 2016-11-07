
$(document).ready(function () {
	/*此处鼠标移入,切换下尖角号*/
	$(".sm1").mouseover(function(){
		//alert(1)
		$("#span_sm").html("&or;");
	});
	/*此处鼠标移出,切换上尖角号*/
	$(".sm1").mouseout(function(){
		//alert(1)
		$("#span_sm").html("&and;");
	});/*是否有更简单的方法.例如是否可用toggle*/
	
	/*此处是二级菜单的动态样式*/
	var $oDivCD=$(".CDdl");
	var $oDivYC=$(".CD_yc");
	/*此处是移入鼠标，二级菜单出现*/
	$oDivCD.mouseover(function(){
		var index=$(this).index();
		$oDivYC.eq(index).show();
		$oDivYC.eq(index).css("border","#333333 1px solid");	
	})//此处二级菜单出现后，边框未解决？？？？？？？？？？？？？？？？？？？？？？？
	/*此处是移出鼠标，二级菜单消失*/
	$oDivCD.mouseout(function(){
		var index=$(this).index();
		$oDivYC.eq(index).hide();	
	})
	
	
	/*此处是轮播图*/
	var oUlImag=document.getElementById("ulimg");
	var	oNavLiList=document.getElementById("urdh").children;
	var pageIndex=1;
	var timer;
		startPlan();
		for(var i=0;i<oNavLiList.length;i++){
			oNavLiList[i].index=i;
			oNavLiList[i].onclick=function(){
				clearInterval(timer);
				//oNavLiList[i].index=i;此i的变量是for循环的变量，不能再点击事件里直接用，应该
				//在for循环里,点击事件外面定义;
				pageIndex=this.index+1;//此处是为了同步，点击在哪里，下次重新运动时，就从哪里开始运动；
				move(oUlImag,{"left":-1*this.index*1383},startPlan);
				for(var k=0;k<oNavLiList.length;k++){
					oNavLiList[k].className="liun";					
				}
				this.className="lion";	
			}	
		}
			
		
		function startPlan(){		
			timer=setInterval(function(){
			if(isPause){
			if(pageIndex==4){
				oUlImag.style.left=0;
				pageIndex=1;//连续动画，没有空白出现
			}
			pageIndex++;//从第一张开始播放图片
			move(oUlImag,{"left":-1*(pageIndex-1)*1383});//让每张图片以动画的形式展现
			//oNavLiList[i]=i;	
			for(var i=0;i<oNavLiList.length;i++){
				oNavLiList[i].className="liun";					
			}
			//page 1 2 3 4 5
			//onav 0 1 2 3
			if(pageIndex==4){
				oNavLiList[0].className="lion";
			}else{
				oNavLiList[pageIndex-1].className="lion";
			}
			}
		},3000)				
	}
			
			var isPause=true;
			oUlImag.onmouseover=function(){
				isPause=false;
			}
			oUlImag.onmouseout=function(){
				isPause=true;
			}
			
			/*此处是主页的第二个选项卡效果*/
	var $oPrdlist=$("#tpqhz div");
	var $oUlli=$("#Ullist li");
	console.log($oPrdlist,$oUlli)
	$oUlli.click(function(){
		var index=$(this).index();
		$oPrdlist.eq(index).css("display","block").siblings("div").css("display","none");
	})
	
	/*此处是手风琴*/
	$("#sfq_1 dl").mouseenter(function(){
				$(this).stop().animate({height:"214px"},"fast").siblings("dl").stop().animate({height:"52px"},"fast")
			})
	
	
	
})


