// 婴幼童辅食
$("#btnBox1").mouseenter(function(){
	$('#V-icon1').attr('src','images/V-2.jpg');
	$('#hiddenBox1').css('display','block');
	$("#btnBox1").css('border-bottom','#fff');
});
$("#btnBox1").mouseleave(function(){
	$('#V-icon1').attr('src','images/V-1.jpg');
	$('#hiddenBox1').css('display','none');
	$("#btnBox1").css('border-bottom','#ccc');
});
// 果泥/菜泥
$("#btnBox2").mouseenter(function(){
	$('#V-icon2').attr('src','images/V-2.jpg');
	$('#hiddenBox2').css('display','block');
	$("#btnBox2").css('border-bottom','#fff');
});
$("#btnBox2").mouseleave(function(){
	$('#V-icon2').attr('src','images/V-1.jpg');
	$('#hiddenBox2').css('display','none');
	$("#btnBox2").css('border-bottom','#ccc');
});
// 艾拉的厨房
$("#btnBox3").mouseenter(function(){
	$('#V-icon3').attr('src','images/V-2.jpg');
	$('#hiddenBox3').css('display','block');
	$("#btnBox3").css('border-bottom','#fff');
});
$("#btnBox3").mouseleave(function(){
	$('#V-icon3').attr('src','images/V-1.jpg');
	$('#hiddenBox3').css('display','none');
	$("#btnBox3").css('border-bottom','#ccc');
});

//放大镜
$(function(){
	//给缩略图添加鼠标进入事件
	$('.litImgU li').mouseenter(function(){ 
		
		$(this).find('img').css({'border':'1px solid #e31436'});
		var index = $(this).index();
		//动态改变bigImg的src地址
		$(".bigImg").attr({
			"src":"images/y"+index+".jpg"
		});
		//动态改变大图地址
		$(".img_modal").attr({
			"src":"images/y"+index+".jpg"
		});
	});
	// 鼠标离开缩略图
	$('.litImgU li').mouseleave(function(){ 
		//给缩略图添加鼠标离开事件
		$(this).find('img').css({'border':'1px solid #eee'});
	});
});
// 放大镜的开始
//遮罩层最大的left和top
var maxL=0;
var maxT=0;
//大图的最大的left和top
var bigImgL=0;
var bigImgT=0;
//鼠标进入
$('.showImgBox').mouseover(function(){
	//显示遮罩层
	$('.shadow').show();
	//大图显示
	$('.bigBox').show();
	//获取最大的left和top
	//获取遮罩层
	maxL=$('.showImgBox').width()-$('.shadow').width();
	maxT=$('.showImgBox').height()-$('.shadow').height();
	//获取大图的left和top
	bigImgL = $('.img_modal').width()-$('.bigBox').width();
	bigImgT = $('.img_modal').height()-$('.bigBox').height();
});
//鼠标移除
$('.showImgBox').mouseout(function(){
	//隐藏遮罩层
	$('.shadow').hide();
	//隐藏大图
	$('.bigBox').hide();
});
//鼠标移动
$('.showImgBox').mousemove(function(e){
	var iL = e.pageX-$('.shadow').width();
	var iT = e.pageY-$('.shadow').height()/2-$('.showImgBox').offset().top;
	//边界判断
		if(iL<0){
			iL=0;
		}
		if(iT<0){
			iT=0;
		}
		if(iL>maxL){
			iL=maxL;
		}
		if(iT>maxT){
			iT=maxT;
		}
	// 改变遮罩层的位置
	$('.shadow').css({
		left:iL,
		top:iT
	});
	// 改变大图的位置
	$('.img_modal').css({
		left:-iL*bigImgL/maxL,
		top:-iT*bigImgT/maxT 
	});
});




















// var oBox  	   = document.getElementById('box');
// var oSmallBox  = document.getElementById('small-box');
// var aSmallImg  = Array.from(oSmallBox.children);
// var oMiddleBox = document.getElementById('middle-box');
// var oMiddleImg = document.getElementById('middle-img');
// var oLargeBox  = document.getElementById('large-box');
// var oLargeImg  = document.querySelector('.actImg');
// var oShadow    = document.getElementById('shadow');
// var lBox    = document.getElementById('l-box');



// // 遮罩层最大的left和top值
// var maxL = 0;
// var maxT = 0;
// // 大图片最大的left和top值
// var maxLargeImgL  = 0;
// var maxLargeImgT  = 0;

// // 鼠标进入middle-box
// oMiddleBox.onmouseover = function () {
// 	// 显示遮罩层
// 	oShadow.style.display = 'block';
// 	// 显示右侧的盒子
// 	oLargeBox.style.display = 'block';

// 	// 获取最大的left和top值
// 	maxL = oMiddleBox.offsetWidth - oShadow.offsetWidth;
// 	maxT = oMiddleBox.offsetHeight - oShadow.offsetHeight;

// 	maxLargeImgL = oLargeImg.offsetWidth - oLargeBox.offsetWidth;
// 	// console.log(maxLargeImgL);
// 	maxLargeImgT = oLargeImg.offsetHeight - oLargeBox.offsetHeight;
// 	// console.log(maxLargeImgT);

// };

// // 鼠标离开middle-box
// oMiddleBox.onmouseout = function () {
// 	// 隐藏遮罩层
// 	oShadow.style.display = 'none';
// 	// 隐藏右侧的盒子
// 	oLargeBox.style.display = 'none';
// };

// // 给middle-box添加移动事件
// oMiddleBox.onmousemove = function (ev) {
// 	var e = ev || window.event;
// 	var iL = e.clientX - oShadow.offsetWidth /2 - lBox.offsetLeft;
// 	var iT = e.pageY - oShadow.offsetHeight /2 - lBox.offsetTop;

// 	// 限定左侧
// 	if(iL < 0) {
// 		iL = 0;
// 	}

// 	// 限定上侧
// 	if(iT < 0) {
// 		iT = 0;
// 	}

// 	// 限定右侧
// 	if(iL > maxL) {
// 		iL = maxL;
// 	}

// 	// 限定下侧
// 	if(iT > maxT) {
// 		iT = maxT;
// 	}
// 	oShadow.style.left = iL + 'px';
// 	oShadow.style.top  = iT + 'px';

// // 让大图移动
// 	var img_l= - iL * maxLargeImgL / maxL;
// 	var img_t= - iT * maxLargeImgT / maxT;
// 	oLargeImg.style.left  = img_l + 'px';
// 	oLargeImg.style.top   = img_t + 'px';
// };

// $('.carousel_s ul li').click(function(){
// 		$(this).addClass('activeLi').siblings().removeClass('activeLi');
// 		var index = $(this).index()+1;
// 		$('.box_img img').attr({'src':'img/int_0'+index+'.jpg'});
// 		$('.hide_box img').attr({'src':'img/int_0'+index+'.jpg'});
		
// 	});