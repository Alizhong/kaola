var arr1=["mi1.jpg","mi2.jpg","mi3.jpg"];
var order=0;//的代表对当前 图片的序号，从0开始
var myTimers=null;

//初始化界面  首页加载时第一个的豆豆为红色
function initUI1(){
	$("#btnline li:first").css({"background":"red"});
}

//事件处理程序
function initEvent1(){
	//鼠标进入让箭头显示
	$('#carouselTwo').mouseenter(function(){
		$('#leftArr').css({"display":"block"});
		$('#rightArr').css({"display":"block"});
	});
	//鼠标离开，箭头消失
	$('#carouselTwo').mouseleave(function(){
		$('#leftArr').css({"display":"none"});
		$('#rightArr').css({"display":"none"});
	});
	//鼠标进入时停止
	$("#boxLun").mouseenter(function(){
		stopPlay1();
	});
	//鼠标离开时自动播放
	$("#boxLun").mouseleave(function(){
		autoPlay1();
	});

	//点击豆豆自动跳转
	$("#btnline li").click(function(){
		goImg1($("#btnline li").index(this));
	});

	//点击左箭头实现向左跳转
	$("#leftArr").click(function(){
		let transOrd=order-1;
		transOrd>0?transOrd:arr1.length-1;
		goImg1(transOrd);
	});
	//点击右箭头实现向右跳转
	$("#rightArr").click(function(){
		let transOrd=order+1;
		transOrd>arr1.length-1?0:order+1;
		goImg1(transOrd);
	});


}
//自动播放
function autoPlay1(){
	myTimers=setInterval(function(){
		//记录进入时的图片序号
		let outOrd=order;

		order++
		if(order>arr1.length-1){
			order=0;
		}
	//淡入淡出
	let $img=$("#boxLun img");
	//淡入
	$img.eq(outOrd).animate({"opacity":0},500);
	//淡出
	$img.eq(order).animate({"opacity":1},500);
	//改变豆豆的颜色
	$("#btnline li").eq(order).css({"background":"red"}).siblings().css({"background":"#555"});
	},5000);
}
//停止播放
function stopPlay1(){
	window.clearInterval(myTimers);
}
//指定图片自动跳转
function goImg1(transOrd){
	let outOrd=order;
	order=transOrd;
	if(order>arr1.length-1){
		order=0;
	}
	//淡入淡出
	let $img=$("#boxLun img");
	//淡入
	$img.eq(outOrd).animate({"opacity":0},500);
	//淡出
	$img.eq(order).animate({"opacity":1},500);
	//改变豆豆的颜色
	$("#btns li").eq(order).css({"background":"#e31436"}).siblings().css({"background":"#555"});
}
//逻辑部分
$(function(){
	//初始化界面
	initUI1();
	//绑定事件
	initEvent1();
	//自动播放
	autoPlay1();
});