
handleCart()
handleNav()


//购物车
function handleCart(){
	var oCart = document.querySelector('.top .cart');
	var oCartLink = document.querySelector('.top .cart .cart-box a');
	var oCartContent = document.querySelector('.top .cart .cart-content');
	var oLoader = oCartContent.querySelector('.loader');
	var oEmptyCart = oCartContent.querySelector('.empty-cart');

	oCart.onmouseenter = function(){
		//1.当鼠标在购物车上时改变购物车背景颜色和字体颜色
		oCartLink.style.backgroundColor = '#fff';
		oCartLink.style.color = '#ff6700';
		//2.加载loading图标
		oLoader.style.display = 'block';
		//3.显示购物车内容，并模拟显示购物车里的数据
		animate(oCartContent,{height:100},true,function(){
			oLoader.style.display = 'none';
			oEmptyCart.style.display = 'block';
		});
	}
	oCart.onmouseleave = function(){
		//1.当鼠标离开购物车时改变购物车背景颜色和字体颜色
		oCartLink.style.backgroundColor = '#424242';
		oCartLink.style.color = '#b0b0b0';
		//2.隐藏购物车内容
		animate(oCartContent,{height:0},true,function(){
			oLoader.style.display = 'none';
			oEmptyCart.style.display = 'block';

		});
	}
}

//导航下拉菜单
function handleNav(){
	var aNavItem = document.querySelectorAll('.header .header-nav .header-nav-item');
	var oNavContent = document.querySelector('.header .header-nav-content');
	var oNavContentContainer = oNavContent.querySelector('.container');
	var hideTimer = 0
	for(var i = 0;i<aNavItem.length;i++){
		aNavItem[i].index = i;
		aNavItem[i].onmouseenter = function(){
			clearInterval(hideTimer);
			oNavContent.style.borderTop = '1px solid #ccc';
			animate(oNavContent,{height:200},true,function(){
				oNavContent.style.overflow = 'visible';
			});
			loadDate(this.index);
		}
		aNavItem[i].onmouseleave = function(){
			hideNavContent()
		}
	}
	oNavContent.onmouseenter = function(){
		clearInterval(hideTimer);
	}
	oNavContent.onmouseleave = function(){
		hideNavContent()
	}
	function hideNavContent(){
		hideTimer = setTimeout(function(){
				oNavContent.style.overflow = 'hidden';
				animate(oNavContent,{height:0},true,function(){
				oNavContent.style.borderTop = 'none';
				})
			},500);
	}
	function loadDate(index){
		var data = aNavItemDate[index];
		var html = '<ul>';
		for(var i = 0;i<data.length;i++){
			html += '<li>';
			html +=	'	<div class="img-box">';
			html +=	'		<a href="'+data[i].url+'">';
			html +=	'			<img src="'+data[i].img+'" alt="">';
			html +=	'		</a>';
			html +=	'	</div>';
			html +=	'	<p class="product-name">'+data[i].name+'</p>';
			html +=	'	<p class="product-price">'+data[i].price+'</p>';
			if(data[i].tag){
				html +=	'	<span class="tag">'+data[i].tag+'</span>';
			}
			html +=	'</li>';
		}
		html += '</ul>';
		oNavContentContainer.innerHTML = html;
	}
}





// function handleElecProduct(){
// 	var oElecItem = document.querySelectorAll('.elsc .more-tab .tab-item');
// 	var oElecProduct = document.querySelectorAll('.elsc .col2 .product-item');

// 		console.log(oElecItem)
// 	for(var i = 0;i<oElecItem.length;i++){
// 		oElecItem[i].onmouseenter = function(){
// 			// this.className = 'tab-item tab-item-active';
// 			console.log('aa')
			
// 		}
// 	}

// }









// 	//轮播图
// 	//获取元素
// 	var aImg = document.querySelectorAll('.carousel-imgs-item');
// 	var oLeftArrow = document.querySelector('.left-arrow');
// 	var oRightArrow = document.querySelector('.right-arrow');
// 	var aBtn = document.querySelector('.carousel-btn').children;
// 	var oCarousel = document.querySelector('.carousel')
// 	var timer = 0;
// 	console.log(aImg)
// 	//添加事件
// 	var now = 0
// 	aImg[0].style.display = 'block';
// 	aBtn[0].style.borderColor='#979590';
// 	aBtn[0].style.backgroundColor='#fcf9f0';

// 	function xunhuan(){
// 		for(var i = 0;i<aImg.length;i++){
// 			aImg[i].style.display='none';
// 			aBtn[i].style.borderColor='#b5b3ad';
// 			aBtn[i].style.backgroundColor='#96938a';
// 			aImg[i].style.opacity = '0.3';
// 		}
// 		aImg[now].style.display = 'block';
// 		aBtn[now].style.borderColor='#979590';
// 		aBtn[now].style.backgroundColor='#fcf9f0';
// 		animate(aImg[now],{opacity:100},0);

// 	}		
// 	oRightArrow.onclick = function(){
// 		now++;
// 		if(now>2){
// 			now=0
// 		}
// 		xunhuan()
// 	}
// 	oLeftArrow.onclick = function(){
// 		now--;
// 		if(now<0){
// 			now=2
// 		}
// 		xunhuan()
// 	}

// 	//底部指示按钮
// 	for(var i = 0;i<aBtn.length;i++){
// 		aBtn[i].index = i;
// 		aBtn[i].onclick = function(){
// 			now = this.index;
// 			xunhuan()
// 		}
// 	}
// //自动循环播放
// 	timer = setInterval(oRightArrow.onclick,3000)
// 	oCarousel.onmouseover = function(){
// 		clearInterval(timer)
// 	}
// 	oCarousel.onmouseout = function(){
// 		timer = setInterval(oRightArrow.onclick,3000);
// 	}

// 	function animate(obj,options,isLinear,fnEnd){
// 	//设置默认是匀速动画
// 	if(isLinear == undefined){
// 		isLinear = true;
// 	}
// 	//防止多次操作开启多个定时器
// 	clearInterval(obj.timer);
// 	//速度/步长
// 	var iSpeed = 0;

// 	obj.timer = setInterval(function(){
// 		//代表是否终止所有的动画
// 		var isStopAll = true;
// 		for(var attr in options){
// 			//isStopCurrent代表是否终止当前动画,由于在循环定时器中,所以每次执行都会变为false,代表不终止当前动画
// 			var isStopCurrent = false;
// 			//获取当前的最新的值
// 			var current = parseFloat(getComputedStyle(obj,false)[attr]);
			
// 			//opacity属性的处理
// 			if(attr == 'opacity'){
// 				//1.乘以100是为了计算
// 				//2.四舍五入是为了处理小数
// 				current = Math.round(current*100);
// 			}
// 			//匀速动画的处理
// 			if(isLinear){
// 				//确定匀速动画的速度
// 				if(current > options[attr]){
// 					iSpeed = -10;
// 				}else{
// 					iSpeed = 10;
// 				}
// 				//匀速动画终止条件
// 				if(Math.abs(options[attr] - current) < Math.abs(iSpeed)){
// 					//匀速动画终止后的处理:如果最后一次动画不够一个速度的话,直接到达目标值
// 					if(attr == 'opacity'){
// 						obj.style.opacity = options[attr] / 100;
// 					}else{
// 						obj.style[attr] = options[attr] + 'px';
// 					}
// 					//代表终止当前的动画					
// 					isStopCurrent = true;
// 				}else{
// 					//代表当前的动画还没有结束,所以不能终止所有的动画
// 					isStopAll = false;
// 				}
// 			//减速动画的处理
// 			}else{
// 				//确定减速动画的速度
// 				iSpeed = (options[attr] - current)/10;
// 				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
// 				//减速动画的终止条件
// 				if(!iSpeed){
// 					//代表终止当前的动画
// 					isStopCurrent = true;
// 				}else{
// 					//代表当前的动画还没有结束,所以不能终止所有的动画
// 					isStopAll = false;
// 				}
// 			}
// 			//如果不终止当前动画,运动
// 			if(!isStopCurrent){
// 				if(attr == 'opacity'){
// 					obj.style.opacity = (current + iSpeed)/100 ;
// 				}else{
// 					obj.style[attr] = current + iSpeed + 'px';
// 				}	
// 			}
// 		}
// 		//如果终止所有动画,清除定时器
// 		if(isStopAll){
// 			clearInterval(obj.timer);
// 			//动画执行完毕后的执行函数
// 			typeof fnEnd == 'function' && fnEnd();				
// 		}		
// 	},30)
// }
					// <div class="drop" id="drop-nav1">
					// 			<ul>
					// 				<li class="drop-item">
					// 						<img src="image/qg22.png" alt="">
					// 						<p class="drop-name">小米MIX3</p>
					// 						<p class="drop-price">3299元起</p>
					// 					<span class="new-flag">新品</span>
					// 				</li>
					// 				<li class="drop-item">
					// 					<!-- <a href="#"> -->
					// 						<img src="image/qg23.png" alt="">
					// 						<p class="drop-name">小米8 青春版</p>
					// 						<p class="drop-price">1399元起</p>
					// 					<!-- </a> -->
					// 					<span class="new-flag">新品</span>
					// 				</li>
					// 				<li class="drop-item">
					// 					<!-- <a href="#"> -->
					// 						<img src="image/qg24.png" alt="">
					// 						<p class="drop-name">小米8 屏幕指纹版</p>
					// 						<p class="drop-price">3199元起</p>
					// 					<!-- </a> -->
					// 					<span class="new-flag">新品</span>
					// 				</li>
					// 				<li class="drop-item">
					// 					<!-- <a href="#"> -->
					// 						<img src="image/qg25.png" alt="">
					// 						<p class="drop-name">小米8</p>
					// 						<p class="drop-price">2699元起</p>
					// 					<!-- </a> -->
					// 				</li>
					// 				<li class="drop-item">
					// 					<!-- <a href="#"> -->
					// 						<img src="image/qg26.png" alt="">
					// 						<p class="drop-name">小米8 SE</p>
					// 						<p class="drop-price">1799元起</p>
					// 					<!-- </a> -->
					// 				</li>
					// 				<li class="drop-item">
					// 					<!-- <a href="#"> -->
					// 						<img src="image/qg27.png" alt="">
					// 						<p class="drop-name">小米Max 3</p>
					// 						<p class="drop-price">1699元起</p>
					// 					<!-- </a> -->
					// 				</li>
					// 			</ul>
					// 		</div>