
function changeimage(event){
	event = event;
	var	targetElement = event.target
	document.getElementById('main_image').src = targetElement.getAttribute("src");
}

