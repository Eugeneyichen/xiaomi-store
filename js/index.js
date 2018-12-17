 //小米手机-社区
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






 //   	var oHomeb= document.querySelector('.homeb')
	// var oImg = document.querySelectorAll('.am-lb-i')
	// var oLrow = document.querySelector('.left-aarow')
	// var oRrow = document.querySelector('.right-aarow')
	// var oArow = document.querySelector('.main-ul1-1')
	// var oAarow = oArow.children;
	// console.log(oImg);
	// console.log(oLrow);
	// console.log(oRrow);
	// console.log(oAarow);
	// var neww=0;
	// var timer=0;
	// function aaa(){
	// 	for(var i=0;i<oImg.length;i++){
	// 		oImg[i].style.display='none';
	// 		oAarow[i].style.borderColor='gray';
	// 	}
	// 	oImg[neww].style.display='block'
	// 	oAarow[neww].style.borderColor='white';
	// }
	// 	oAarow[neww].style.borderColor='white';
	// oLrow.onclick =function(){
	// 	neww--;
	// 	if(neww<0){
	// 		neww=oImg.length-1;
	// 	}
	// 	aaa()
	// }
	// oRrow.onclick =function(){
	// 	neww++;
	// 	if(neww>=3){
	// 		neww=0;
	// 	}
	// 	aaa()
	// }
	// oArow.onclick = function(){
	// 	neww=this.index;
	// 	console.log(this.index);
	// 	aaa()
	// }

	//轮播图
	// <div class="carousel">
	// 	<ul>
	// 		<li class="carousel-imgs-item"><img src="image/b1.jpg" alt=""></img></li>
	// 		<li class="carousel-imgs-item"><img src="image/b2.jpg" alt=""></img></li>
	// 		<li class="carousel-imgs-item"><img src="image/b3.jpg" alt=""></img></li>
	// 	</ul>
	// 	<span class="arrow left-arrow iconfont">&#xe627;</span>
	// 	<span class="arrow right-arrow iconfont">&#xe622;</span>
	// 	<ul class="carousel-btn">
	// 		<li class="active"></li>
	// 		<li></li>
	// 		<li></li>
	// 	</ul>
	// </div>

	//获取元素
	var aImg = document.querySelectorAll('.carousel-imgs-item');
	var oLeftArrow = document.querySelector('.left-arrow');
	var oRightArrow = document.querySelector('.right-arrow');
	var aBtn = document.querySelector('.carousel-btn').children;
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
		}
		aImg[now].style.display = 'block';
		aBtn[now].style.borderColor='#979590';
		aBtn[now].style.backgroundColor='#fcf9f0';
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
