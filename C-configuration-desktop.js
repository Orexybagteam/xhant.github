//battery info popup

function showDiv1() {
  document.getElementById("batteryInfoPopUp").style.display = "block";
}
function hideDiv2() {
  document.getElementById("batteryInfoPopUp").style.display = "none";
}

//computer popup

function showDiv3() {
  document.getElementById("computer-popup").style.display = "block";
}
function hideDiv4() {
  document.getElementById("computer-popup").style.display = "none";
}

//wifi popup

function showDiv5() {
  document.getElementById("wifi-info").style.display = "block";
}
function hideDiv6() {
  document.getElementById("wifi-info").style.display = "none";
}

//sound info

function showDiv7() {
  document.getElementById("sound-info").style.display = "block";
}
function hideDiv8() {
  document.getElementById("sound-info").style.display = "none";
}


//keyboard info

function showDiv9() {
  document.getElementById("keyboard-info").style.display = "block";
}
function hideDiv10() {
  document.getElementById("keyboard-info").style.display = "none";
}

//Exibir dialogo

const dialogTrigger = document.querySelector('#menu');
		const dialog = document.querySelector('.dialog');
		const dialogClose = document.querySelector('.dialog-close');
		
		dialogTrigger.addEventListener('click', () => {
			dialog.classList.add('dialog-show');
		});

		dialogClose.addEventListener('click', () => {
			dialog.classList.remove('dialog-show');
		});