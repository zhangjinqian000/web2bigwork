//顶部悬浮
window.onload = function(){
	var top = document.getElementsByClassName("top")[0];
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st>180){
			top.style.position = 'fixed';

		}else{
			top.style.position = 'static';
		}
	}
}

//向左滚动轮播图
var box = document.getElementById('box');
var oNavlist = document.getElementById('nav1').children;
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var index = 1;
var timer;
var isMoving = false;

box.onmouseover = function(){
	animate(left,{opacity:50})
	animate(right,{opacity:50})
	clearInterval(timer)
}
box.onmouseout = function(){
	animate(left,{opacity:0})
	animate(right,{opacity:0})
	timer = setInterval(next, 3000);
}
right.onclick = next;
left.onclick = prev;
for( var i=0; i<oNavlist.length; i++ ){
	oNavlist[i].index = i;
	oNavlist[i].onclick = function(){
		index = this.index+1;
		navmove();
		animate(slider,{left:-800*index});
	}
}
function next(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index++;
	navmove();
	animate(slider,{left:-800*index},function(){
		if(index==6){
			slider.style.left = '-800px';
			index = 1;
		}
		isMoving = false;
	});
}
function prev(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index--;
	navmove();
	animate(slider,{left:-800*index},function(){
		if(index==0){
			slider.style.left = '-6400px';
			index = 6;
		}
		isMoving = false;
	});
}
function navmove(){
	for( var i=0; i<oNavlist.length; i++ ){
		oNavlist[i].className = "";
	}
	if(index >6 ){
		oNavlist[0].className = "active";
	}else if(index<=0){
		oNavlist[5].className = "active";
	}else {
		oNavlist[index-1].className = "active";
	}
}
timer = setInterval(next, 3000);
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}


//向上滚动轮播
var body2=document.getElementById("body2");
body2.innerHTML += body2.innerHTML;
var liHeight=24;
body2.scrollTop=0;
var delay=2000;
var speed=50;
var time;
function move(){
	body2.scrollTop++;
	time=setInterval("moveUp()",speed);
}
function moveUp(){
	if(body2.scrollTop%liHeight==0){
		clearInterval(time);
		setTimeout("move()",0);
	}else{
		body2.scrollTop++;
		if(body2.scrollTop>=body2.offsetHeight){
			body2.scrollTop=0;
		}
	}
}
move();
body2.onmouseover = function(){
	clearInterval(time);
}
body2.onmouseout = function(){
	function move(){
		body2.scrollTop++;
		time=setInterval("moveUp()",speed);
	}
	function moveUp(){
		if(body2.scrollTop%liHeight==0){
	 		clearInterval(time);
	  		setTimeout("move()",0);
	  	}else{
		 	body2.scrollTop++;
		  	if(body2.scrollTop>=body2.offsetHeight){
		  		body2.scrollTop=0;
		  	}
		}
	}
	move();
}

//固定悬浮滑动框
var slide1 = document.getElementById('slide1');
slide1.onmouseover = function(){
  	animate(slide1,{right:0,top:82,opacity:100});
}
slide1.onmouseout = function(){
    animate(slide1,{right:-83,top:82,opacity:100});
}
var slide2 = document.getElementById('slide2');
slide2.onmouseover = function(){
 	animate(slide2,{right:0,top:191,opacity:100});
}
slide2.onmouseout = function(){
   	animate(slide2,{right:-83,top:191,opacity:100});
}
var slide3 = document.getElementById('slide3');
var slide31p1 = document.getElementById('slide31p1');
slide3.onmouseover = function(){
    animate(slide3,{right:0,top:336,opacity:100});
    slide31p1.src = "img/erwei.png";
    slide31p1.style.marginTop = "3px";
}
slide3.onmouseout = function(){
 	animate(slide3,{right:-83,top:336,opacity:100});
   	slide31p1.src = "img/serwei.png";
    slide31p1.style.marginTop = "36px";
}
var slide4 = document.getElementById('slide4');
slide4.onmouseover = function(){
    animate(slide4,{right:0,top:491,opacity:100});
}
slide4.onmouseout = function(){
   	animate(slide4,{right:-83,top:491,opacity:100});
}     

//话费充值
var money = document.getElementById("money");
var mon = document.getElementById("mon");
money.onclick = function(){
	mon.innerHTML = "";
	mon.innerHTML += "¥"+money.value;
}
		
		
