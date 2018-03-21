var arr=["mi1.jpg","mi2.jpg","mi3.jpg","mi4.jpg"];
var ord=0;//的代表对当前 图片的序号，从0开始
var myTimer=null;

//初始化界面  首页加载时第一个的豆豆为红色
function initUI(){
	$("#btns li:first").css({"background":"red"});
}

//事件处理程序
function initEvent(){
	//鼠标进入让箭头显示
	$('#carousel').mouseenter(function(){
		$('#leftArrow').css({"display":"block"});
		$('#rightArrow').css({"display":"block"});
	});
	//鼠标离开，箭头消失
	$('#carousel').mouseleave(function(){
		$('#leftArrow').css({"display":"none"});
		$('#rightArrow').css({"display":"none"});
	});
	//鼠标进入时停止
	$("#box").mouseenter(function(){
		stopPlay();
	});
	//鼠标离开时自动播放
	$("#box").mouseleave(function(){
		autoPlay();
	});

	//点击豆豆自动跳转
	$("#btns li").click(function(){
		goImg($("#btns li").index(this));
	});

	//点击左箭头实现向左跳转
	$("#leftArrow").click(function(){
		let transOrd=ord-1;
		transOrd>0?transOrd:arr.length-1;
		goImg(transOrd);
	});
	//点击右箭头实现向右跳转
	$("#rightArrow").click(function(){
		let transOrd=ord+1;
		transOrd>arr.length-1?0:ord+1;
		goImg(transOrd);
	});


}
//自动播放
function autoPlay(){
	myTimer=setInterval(function(){
		//记录进入时的图片序号
		let outOrd=ord;

		ord++
		if(ord>arr.length-1){
			ord=0;
		}
	//淡入淡出
	let $img=$("#box img");
	//淡入
	$img.eq(outOrd).animate({"opacity":0},500);
	//淡出
	$img.eq(ord).animate({"opacity":1},500);
	//改变豆豆的颜色
	$("#btns li").eq(ord).css({"background":"red"}).siblings().css({"background":"#fff"});
	},5000);
}
//停止播放
function stopPlay(){
	window.clearInterval(myTimer);
}
//指定图片自动跳转
function goImg(transOrd){
	let outOrd=ord;
	ord=transOrd;
	if(ord>arr.length-1){
		ord=0;
	}
	//淡入淡出
	let $img=$("#box img");
	//淡入
	$img.eq(outOrd).animate({"opacity":0},500);
	//淡出
	$img.eq(ord).animate({"opacity":1},500);
	//改变豆豆的颜色
	$("#btns li").eq(ord).css({"background":"#e31436"}).siblings().css({"background":"white"});
}
//逻辑部分
$(function(){
	//初始化界面
	initUI();
	//绑定事件
	initEvent();
	//自动播放
	autoPlay();
});