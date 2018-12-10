var oChan=document.getElementById('chanpin');
var oChild=document.getElementById('chanpin-child');
var timer=0;
// oChan.onmouseover=function(){
// 	oChild.style.display='block';
// }
// oChan.onmouseout=function(){
// 	oChild.style.display='none';
// }
// 延迟菜单
oChan.onmouseover=oChild.onmouseover=function(){
	clearTimeout(timer);
	oChild.style.display='block';
}
oChan.onmouseout=oChild.onmouseleave=function(){
	timer=setTimeout(function(){
		oChild.style.display='none';
	},500);
}