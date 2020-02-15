document.addEventListener('DOMContentLoaded', function() {

	// chrome.browserAction.setBadgeText({text: '1'});

	// chrome.browserAction.setBadgeBackgroundColor({color: '#F00'});

	function startTime() {
		var today=new Date();
		var h=today.getHours();
		var min=today.getMinutes();
		var s=today.getSeconds();

		y = today.getFullYear();
		m = today.getMonth() + 1;
		d = today.getDate();
		document.getElementById("date-cont").innerHTML = d + "/" + m + "/" + y;

		// add a zero in front of numbers<10
		min=checkTime(min);
		s=checkTime(s);

		document.getElementById('hour-cont').innerHTML=h+":"+min;
		document.getElementById('sec-cont').innerHTML=s;
			
		setTimeout(function(){ startTime() },300);
	}

	function checkTime(i) {
		if (i<10) {
			i="0" + i;
		}
		return i;
	}

	function typeformPopup() { 
		var qs,js,q,s,d=document, gi=d.getElementById
		var ce=d.createElement
		var gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; 
		// if(!gi.call(d,id)){ 
		// 	js=ce.call(d,"script"); 
		// 	js.id=id; 
		// 	js.src=b+"embed.js"; 
		// 	q=gt.call(d,"script")[0]; 
		// 	q.parentNode.insertBefore(js,q) 
		// } 
	}

	startTime();

	var tfPopupBtn = document.getElementById('tf-popup-btn');
    // onClick's logic below:
    tfPopupBtn.addEventListener('click', function() {
        typeformPopup();
    });

	// // Add event listener
	// document.addEventListener("mousemove", parallax);
	// const elem = document.querySelector("#background-img");

	// // Magic happens here
	// function parallax(e) {
	//   	let _w = window.innerWidth/2;
	//   	let _h = window.innerHeight/2;
	// 	let _mouseX = e.clientX;
	// 	let _mouseY = e.clientY;
	// 	let _depth1 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
	// 	let x = `${_depth1}`;
	// 	elem.style.backgroundPosition = x;
	// }

}, false);