/*
* @Author: 17334
* @Date:   2019-01-05 10:38:46
* @Last Modified by:   17334
* @Last Modified time: 2019-01-05 22:45:26
*/
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












        var box14 = document.getElementById('box14');
		var box15 = document.getElementById('box15');
		var box16 = document.getElementById('box16');
		var box17 = document.getElementById('box17');
		var pic1 = document.getElementById('pic1');
		box14.onclick = function(){
			box15.style.border = "1px solid #ff9003";
			box16.style.border = "1px solid #ffffff";
			pic1.src = "img/pp0.jpeg";
			bigimg.src = "img/pp0.jpeg";
		}
		box15.onclick = function(){
			box15.style.border = "1px solid #ff9003";
			box16.style.border = "1px solid #ffffff";
			pic1.src = "img/pp0.jpeg";
			bigimg.src = "img/pp0.jpeg";
		}
		box16.onclick = function(){
			box16.style.border = "1px solid #ff9003";
			box15.style.border = "1px solid #ffffff";
			pic1.src = "img/pp1.jpeg";
			bigimg.src = "img/pp1.jpeg";
		}
		box17.onclick = function(){
			box16.style.border = "1px solid #ff9003";
			box15.style.border = "1px solid #ffffff";
			pic1.src = "img/pp1.jpeg";
			bigimg.src = "img/pp1.jpeg";
		}
		var ml1 = document.getElementById('ml1');
		var ml2 = document.getElementById('ml2');
		var gaibian = document.getElementById('gaibian');
		var ml11 = document.getElementById('ml11');
		var ml21 = document.getElementById('ml21');
		ml1.onclick = function(){
			ml1.style.border = "1px solid #ff0754";
			ml2.style.border = "1px solid #ffffff";
			ml1.style.borderRadius = "2px";
			gaibian.innerHTML = "150ml";
			ml11.src = "img/duigou.png";
			ml21.src = "";
		}
		ml2.onclick = function(){
			ml1.style.border = "1px solid #ffffff";
			ml2.style.border = "1px solid #ff0754";
			ml2.style.borderRadius = "2px";
			gaibian.innerHTML = "200ml";
			ml21.src = "img/duigou.png";
			ml11.src = "";
		}


		var coun1 = document.getElementById('coun1');
		var coun2 = document.getElementById('coun2');
		var coun3 = document.getElementById('coun3');
		var i = 1;
		coun1.onclick = function(){
			if(i>0){
				--i;
				coun2.innerHTML = i;
			}
		}
		coun1.onmouseover = function(){
			if(i>0){
				coun1.style.cursor = "pointer";
			}else{
				coun1.style.cursor = "not-allowed";
			}
		}
		coun3.onclick = function(){
			if(i<5){
				++i;
				coun2.innerHTML = i;
			}
		}
		coun3.onmouseover = function(){
			if(i>4){
				coun3.style.cursor = "not-allowed";
			}else{
				coun3.style.cursor = "pointer";
			}
		}
		var img1 = document.getElementById('img1');
		var img2 = document.getElementById('img2');
		var pic = document.getElementById('pic');
		var bigimg = document.getElementById('bigimg');
		var box12 = document.getElementById('box12');

		img1.onmouseover = function () {
    		pic.style.display = 'block';
    		img2.style.display = 'block';
		}
		img1.onmouseout = function () {
    		pic.style.display = 'none';
    		img2.style.display = 'none';
		}
		img1.onmousemove = function (ev) {
   			var ev = ev || event;
    		var x = ev.clientX - box12.offsetLeft - pic.offsetWidth / 2;
			var y = ev.clientY - box12.offsetTop - pic.offsetHeight / 2;
    		var oMaxw = img1.offsetWidth - pic.offsetWidth;
    		var oMaxh = img1.offsetHeight - pic.offsetHeight;
   		 	x = x > oMaxw ? oMaxw : x < 0 ? 0 : x;
    		y = y > oMaxh ? oMaxh : y < 0 ? 0 : y;
    		pic.style.left = x + 'px';
    		pic.style.top = y + 'px';
    		var scale = img2.offsetWidth / pic.offsetWidth;
    		bigimg.style.left = -scale * x +22 + 'px'
    		bigimg.style.top = -scale * y +22 + 'px'
		}
		var add = document.getElementById('add');
		var xuanfu = document.getElementById('xuanfu'); 
		var addc = document.getElementById('addc');
		var addc1 = document.getElementById('addc1');
		var bt1 = document.getElementById('bt1');
		var bt2 = document.getElementById('bt2');
		add.onclick = function(){
    		xuanfu.setAttribute('class', 'addc4');
    		addc.setAttribute('class', 'addc5');
		}
		addc1.onclick = function(){
     		xuanfu.setAttribute('class', 'xuanfu');
     		addc.setAttribute('class', 'addc');
		}
		bt1.onclick=addc1.onclick;
		bt2.onclick=addc1.onclick;
