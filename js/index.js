 //小米手机-下拉菜单
 //小米手机
	 var timer = 0;
	 var oHeaderNav1 = document.getElementById('header-nav1')
	 var oDropNav1 = document.getElementById('drop-nav1')
	 oHeaderNav1.addEventListener('mouseover',function(ev){
		 	oDropNav1.style.display = 'block'
		 	ev.stopPropagation()
	 },false)
	 oDropNav1.addEventListener('mouseover',function(ev){
	 	clearTimeout(timer)
	 	oDropNav1.style.display = 'block'
	 	ev.stopPropagation()
	 },false)
	   oHeaderNav1.addEventListener('mouseout',function(ev){
	 	timer = setTimeout(function(){
	 			oDropNav1.style.display = 'none'
	 	},200)
	 	 	ev.stopPropagation()
	 },false)
	//红米
	var oHeaderNav2 = document.getElementById('header-nav2')
	 var oDropNav2 = document.getElementById('drop-nav2')
	 oHeaderNav2.addEventListener('mouseover',function(ev){
		 	oDropNav2.style.display = 'block'
		 	ev.stopPropagation()
	 },false)
	 oDropNav2.addEventListener('mouseover',function(ev){
	 	clearTimeout(timer)
	 	oDropNav2.style.display = 'block'
	 	ev.stopPropagation()
	 },false)
	   oHeaderNav2.addEventListener('mouseout',function(ev){
	 	timer = setTimeout(function(){
	 			oDropNav2.style.display = 'none'
	 	},200)
	 	 	ev.stopPropagation()
	 },false)
	//电视
	var oHeaderNav3 = document.getElementById('header-nav3')
	 var oDropNav3 = document.getElementById('drop-nav3')
	 oHeaderNav3.addEventListener('mouseover',function(ev){
		 	oDropNav3.style.display = 'block'
		 	ev.stopPropagation()
	 },false)
	 oDropNav3.addEventListener('mouseover',function(ev){
	 	clearTimeout(timer)
	 	oDropNav3.style.display = 'block'
	 	ev.stopPropagation()
	 },false)
	   oHeaderNav3.addEventListener('mouseout',function(ev){
	 	timer = setTimeout(function(){
	 			oDropNav3.style.display = 'none'
	 	},200)
	 	 	ev.stopPropagation()
	 },false)
	//笔记本
	 var oHeaderNav4 = document.getElementById('header-nav4')
	 var oDropNav4 = document.getElementById('drop-nav4')
	 oHeaderNav4.addEventListener('mouseover',function(ev){
		 	oDropNav4.style.display = 'block'
		 	ev.stopPropagation()
	 },false)
	 oDropNav4.addEventListener('mouseover',function(ev){
	 	clearTimeout(timer)
	 	oDropNav4.style.display = 'block'
	 	ev.stopPropagation()
	 },false)
	   oHeaderNav4.addEventListener('mouseout',function(ev){
	 	timer = setTimeout(function(){
	 			oDropNav4.style.display = 'none'
	 	},200)
	 	 	ev.stopPropagation()
	 },false)
	//空调
	var oHeaderNav5 = document.getElementById('header-nav5')
	 var oDropNav5 = document.getElementById('drop-nav5')
	 oHeaderNav5.addEventListener('mouseover',function(ev){
		 	oDropNav5.style.display = 'block'
		 	ev.stopPropagation()
	 },false)
	 oDropNav5.addEventListener('mouseover',function(ev){
	 	clearTimeout(timer)
	 	oDropNav5.style.display = 'block'
	 	ev.stopPropagation()
	 },false)
	   oHeaderNav5.addEventListener('mouseout',function(ev){
	 	timer = setTimeout(function(){
	 			oDropNav5.style.display = 'none'
	 	},200)
	 	 	ev.stopPropagation()
	 },false)
	//新品
	var oHeaderNav6 = document.getElementById('header-nav6')
	 var oDropNav6 = document.getElementById('drop-nav6')
	 oHeaderNav6.addEventListener('mouseover',function(ev){
		 	oDropNav6.style.display = 'block'
		 	ev.stopPropagation()
	 },false)
	 oDropNav6.addEventListener('mouseover',function(ev){
	 	clearTimeout(timer)
	 	oDropNav6.style.display = 'block'
	 	ev.stopPropagation()
	 },false)
	   oHeaderNav6.addEventListener('mouseout',function(ev){
	 	timer = setTimeout(function(){
	 			oDropNav6.style.display = 'none'
	 	},200)
	 	 	ev.stopPropagation()
	 },false)
	//路由器
	var oHeaderNav7 = document.getElementById('header-nav7')
	 var oDropNav7 = document.getElementById('drop-nav7')
	 oHeaderNav7.addEventListener('mouseover',function(ev){
		 	oDropNav7.style.display = 'block'
		 	ev.stopPropagation()
	 },false)
	 oDropNav7.addEventListener('mouseover',function(ev){
	 	clearTimeout(timer)
	 	oDropNav7.style.display = 'block'
	 	ev.stopPropagation()
	 },false)
	   oHeaderNav7.addEventListener('mouseout',function(ev){
	 	timer = setTimeout(function(){
	 			oDropNav7.style.display = 'none'
	 	},200)
	 	 	ev.stopPropagation()
	 },false)
	//智能硬件
	 var oHeaderNav8 = document.getElementById('header-nav8')
	 var oDropNav8 = document.getElementById('drop-nav8')
	 oHeaderNav8.addEventListener('mouseover',function(ev){
		 	oDropNav8.style.display = 'block'
		 	ev.stopPropagation()
	 },false)
	 oDropNav8.addEventListener('mouseover',function(ev){
	 	clearTimeout(timer)
	 	oDropNav8.style.display = 'block'
	 	ev.stopPropagation()
	 },false)
	   oHeaderNav8.addEventListener('mouseout',function(ev){
	 	timer = setTimeout(function(){
	 			oDropNav8.style.display = 'none'
	 	},200)
	 	 	ev.stopPropagation()
	 },false)


	//轮播图
	//获取元素
	var aImg = document.querySelectorAll('.carousel-imgs-item');
	var oLeftArrow = document.querySelector('.left-arrow');
	var oRightArrow = document.querySelector('.right-arrow');
	var aBtn = document.querySelector('.carousel-btn').children;
	var oCarousel = document.querySelector('.carousel')
	var timer = 0;
	console.log(aImg)
	//添加事件
	var now = 0
	aImg[0].style.display = 'block';
	aBtn[0].style.borderColor='#979590';
	aBtn[0].style.backgroundColor='#fcf9f0';

	function xunhuan(){
		for(var i = 0;i<aImg.length;i++){
			aImg[i].style.display='none';
			aBtn[i].style.borderColor='#b5b3ad';
			aBtn[i].style.backgroundColor='#96938a';
			aImg[i].style.opacity = '0.3';
		}
		aImg[now].style.display = 'block';
		aBtn[now].style.borderColor='#979590';
		aBtn[now].style.backgroundColor='#fcf9f0';
		animate(aImg[now],{opacity:100},0);

	}		
	oRightArrow.onclick = function(){
		now++;
		if(now>2){
			now=0
		}
		xunhuan()
	}
	oLeftArrow.onclick = function(){
		now--;
		if(now<0){
			now=2
		}
		xunhuan()
	}

	//底部指示按钮
	for(var i = 0;i<aBtn.length;i++){
		aBtn[i].index = i;
		aBtn[i].onclick = function(){
			now = this.index;
			xunhuan()
		}
	}
//自动循环播放
	timer = setInterval(oRightArrow.onclick,3000)
	oCarousel.onmouseover = function(){
		clearInterval(timer)
	}
	oCarousel.onmouseout = function(){
		timer = setInterval(oRightArrow.onclick,3000);
	}

	function animate(obj,options,isLinear,fnEnd){
	//设置默认是匀速动画
	if(isLinear == undefined){
		isLinear = true;
	}
	//防止多次操作开启多个定时器
	clearInterval(obj.timer);
	//速度/步长
	var iSpeed = 0;

	obj.timer = setInterval(function(){
		//代表是否终止所有的动画
		var isStopAll = true;
		for(var attr in options){
			//isStopCurrent代表是否终止当前动画,由于在循环定时器中,所以每次执行都会变为false,代表不终止当前动画
			var isStopCurrent = false;
			//获取当前的最新的值
			var current = parseFloat(getComputedStyle(obj,false)[attr]);
			
			//opacity属性的处理
			if(attr == 'opacity'){
				//1.乘以100是为了计算
				//2.四舍五入是为了处理小数
				current = Math.round(current*100);
			}
			//匀速动画的处理
			if(isLinear){
				//确定匀速动画的速度
				if(current > options[attr]){
					iSpeed = -10;
				}else{
					iSpeed = 10;
				}
				//匀速动画终止条件
				if(Math.abs(options[attr] - current) < Math.abs(iSpeed)){
					//匀速动画终止后的处理:如果最后一次动画不够一个速度的话,直接到达目标值
					if(attr == 'opacity'){
						obj.style.opacity = options[attr] / 100;
					}else{
						obj.style[attr] = options[attr] + 'px';
					}
					//代表终止当前的动画					
					isStopCurrent = true;
				}else{
					//代表当前的动画还没有结束,所以不能终止所有的动画
					isStopAll = false;
				}
			//减速动画的处理
			}else{
				//确定减速动画的速度
				iSpeed = (options[attr] - current)/10;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				//减速动画的终止条件
				if(!iSpeed){
					//代表终止当前的动画
					isStopCurrent = true;
				}else{
					//代表当前的动画还没有结束,所以不能终止所有的动画
					isStopAll = false;
				}
			}
			//如果不终止当前动画,运动
			if(!isStopCurrent){
				if(attr == 'opacity'){
					obj.style.opacity = (current + iSpeed)/100 ;
				}else{
					obj.style[attr] = current + iSpeed + 'px';
				}	
			}
		}
		//如果终止所有动画,清除定时器
		if(isStopAll){
			clearInterval(obj.timer);
			//动画执行完毕后的执行函数
			typeof fnEnd == 'function' && fnEnd();				
		}		
	},30)
}