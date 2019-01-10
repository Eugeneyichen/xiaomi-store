handleCart();
handleNav();
handleNav2();
handleCate();
handleElecProduct();
handleCountdown();
handleOnTop();
handleTwo();
handleLogo();

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
//下拉菜单
function handleNav(){
	var aNavItem = document.querySelectorAll('.header .header-nav .header-nav-item');
	var oNavContent = document.querySelector('.header .header-nav-content');
	// console.log(oNavContent)
	var oNavContentContainer = oNavContent.querySelector('.container');
	var hideTimer = 0;
	var loaderTimer = 0;
	for(var i = 1;i<aNavItem.length-2;i++){
		aNavItem[i].index = i;
		aNavItem[i].onmouseenter = function(){
			clearInterval(hideTimer);
			oNavContent.style.borderTop = '1px solid #ccc';
			oNavContentContainer.innerHTML = '<div class="loader"></div>';
			animate(oNavContent,{height:200},true,function(){
				oNavContent.style.overflow = 'visible';
			});
			var index = this.index;
			clearInterval(loaderTimer);
			loaderTimer = setTimeout(function(){
				// console.log(index);
				loadDate(index);
			},500)
			
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
		var data = aNavItemDate[index-1];
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
//frist下拉菜单
function handleNav2(){
	var aNavItem = document.querySelectorAll('.header .header-nav .header-nav-item');
	var aCate = document.querySelector('.header .nav-drop .cate');

	var navTimer = 0;
	for(var i = 0;i<aNavItem.length-10;i++){
			aNavItem[i].onmouseenter = function(){
				aCate.style.display = 'block';
				aCate.onmouseenter = function(){
					aCate.style.display = 'block';
				}
		}	
		aNavItem[i].onmouseleave = function(){
			clearInterval(navTimer);
			aCate.style.display = 'none';
			aCate.onmouseleave = function(){
					aCate.style.display = 'none';
				}
		}
	}
}


//logo
function handleLogo(){
	var oPic = document.getElementById('pic')
	var oImg1 = document.getElementById('img1')
	var oImg2 = document.getElementById('img2')
	oPic.onmouseenter = function(){
		oImg1.style.left = '55px';
		oImg2.style.left = '0px';
		// oImg2.style.display = 'block';
	}
	oPic.onmouseleave = function(){
		// oImg1.style.display = 'block';
		oImg1.style.left = '0px';
		oImg2.style.left = '-55px';
	}
}
//左拉菜单
function handleCate(){
	var aCateItem = document.querySelectorAll('.cate .cate-item');
	var oCateContent = document.querySelector('.nav-drop .cate-content');
	var oCateBox = document.querySelector('.header .nav-drop');
	for(var i = 0;i<aCateItem.length;i++){
		aCateItem[i].index = i;
		aCateItem[i].onmouseenter = function(){
			for(var j = 0;j<aCateItem.length;j++){
				aCateItem[j].className = 'cate-item'
			}
			oCateContent.style.display = 'block';
			this.className = 'cate-item active';
			loadDate(this.index);
		}
	}
	oCateBox.onmouseleave = function(){
		oCateContent.style.display = 'none';
		for(var j = 0;j<aCateItem.length;j++){
				aCateItem[j].className = 'cate-item'
		}
	}
	function loadDate(index){
		var date = aCateItemDate[index];
		var html = '<ul>'
		for(var i = 0;i<date.length;i++){
			html += '<li>'
			html += 	'<a href="'+date[i].url+'">'
			html += 		'<img src="'+date[i].img+'" alt="">'
			html += 		'<span>'+date[i].name+'</span>'
			html += 	'</a>'
			html += '</li>'
		}

		html += '</ul>'
		// console.log(oCateContent)
		oCateContent.innerHTML = html;
	}
}
//倒计时
function handleCountdown(){
	var oTimenum = document.querySelector('.home-item-m .buy1');
	// console.log(oTimenum);
	var endDate = new Date('2019-1-8 12:12:00');
	var timer = 0;
	function to2(num){
		return	num > 9 ? '' + num : '0' + num ;
	}
	function handleTimer(){
		var endTime = endDate.getTime();
		var allMinseconds = endTime - Date.now();
		if(allMinseconds < 0){
			allMinseconds = 0;
			clearInterval(timer);
		}
		var allseconds = parseInt(allMinseconds / 1000);
		var iHour = parseInt(allseconds / 3600);
		var iMinute = parseInt((allseconds % 3600) / 60);
		var iSecond = (allseconds % 3600) % 60;
		oTimenum.innerHTML ="距结束 " + to2(iHour) +":"+ to2(iMinute) +":"+ to2(iSecond);		
	}
	timer = setInterval(handleTimer,500)
	handleTimer();
}
//选项卡
function handleElecProduct(){
	//获取元素
	var aTabItem = document.querySelectorAll('.home .home-item-m');
	var oElecProduct = document.querySelectorAll('.home .col1')[0];
	// console.log(oElecProduct)
	loadDate(0)
	for(var i = 0;i<aTabItem.length;i++){
		aTabItem[i].index = i;
		aTabItem[i].onclick = function(){
			for(var j = 0;j<aTabItem.length;j++){
				aTabItem[j].className = 'home-item-m';
			}
			this.className = 'home-item-m checked';
			loadDate(this.index);
		}
	}
	function loadDate(index){
		console.log(aElecItemData[index])
		var data = aElecItemData[index];

		var html = '<ul class="product-list">';
		for(var i = 0;i<data.length;i++){
			html +=		'<li class="product-item">';
			html +=			'<a href="'+data[i].url+'">';
			html +=				'<img src="'+data[i].img+'" alt="" class="product-img">';
			html +=				'<div class="bg">';
			html +=					'<p class="product-name ">'+data[i].name+'</p>';
			html +=					'<p class="product-desc ">'+data[i].desc+'</p>';
			html +=					'<p class="product-price ">';
			html +=						'<strong>'+data[i].price+'</strong><span>&nbsp;元</span>';
			html +=						'<del>'+data[i].del+'</del>';
			html +=					'</p>';
			html +=					'<span class="new-flog">'+data[i].flog+'</span>';
			html +=					'<p class="product-people">'+data[i].people+'</p>';
			html +=				'</div>';
			html +=			'</a>';
			html +=		'</li>';
		}
		html += '</ul>';
		
		oElecProduct.innerHTML = html;
		console.log(oElecProduct);
	}
}


function handleOnTop(){
	var oBox = document.querySelector('.lateral-nav');
	window.onscroll = function(){
		if(document.documentElement.scrollTop >= 1000){
			oBox.style.display = 'block';
		}else if(document.documentElement.scrollTop < 300){
			oBox.style.display = 'none';
		}
	}
}

//显示二维码
function handleTwo(){
	var oItemFooter = document.getElementById('item-footer');
	var oLateralFooter = document.querySelector('.lateral-footer');
	var lateralTimer = 0;
	// console.log(oLateralFooter)
	oItemFooter.onmouseenter = function(){
		oLateralFooter.style.display = 'block';
		oLateralFooter.onmouseenter = function(){
			oLateralFooter.style.display = 'block';
		}
		oLateralFooter.onmouseleave = function(){
			oLateralFooter.style.display = 'none';
		}
	}
	oItemFooter.onmouseleave = function(){
			oLateralFooter.style.display = 'none';	
	}
}