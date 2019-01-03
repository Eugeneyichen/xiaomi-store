handleCart();
handleNav();
handleNav2();
handleCate();

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

function handleNav2(){
	var aNavItem = document.querySelectorAll('.header .header-nav .header-nav-item');
	var aCate = document.querySelector('.header .nav-drop .cate');

	var navTimer = 0;
	// console.log(aNavItem);
	// console.log(aCate);
	for(var i = 0;i<aNavItem.length-10;i++){
		// clearTimeout(navTimer)
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

//分类左拉面板
function handleCate(){
	var aCateItem = document.querySelectorAll('.cate .cate-item');
	var oCateContent = document.querySelector('.nav-drop .cate-content');
	var oCateBox = document.querySelector('.header .nav-drop');
	console.log(aCateItem)
	console.log(oCateContent)
	console.log(oCateBox)
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
		oCateContent.innerHTML = html;
	}

}