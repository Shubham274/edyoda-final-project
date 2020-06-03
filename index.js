var freeQuote = document.getElementsByClassName('free-quote');
var bigWrapper = document.getElementsByClassName('info-big-wrapper')[0];
var leftWrapper = document.getElementsByClassName('info-left-wrapper')[0];
var closeBtn = document.getElementsByClassName('for-x')[0];

for (var i = 0; i < freeQuote.length; i++) {
	freeQuote[i].addEventListener('click', function(e) {
		bigWrapper.style.display = 'block';
		bigWrapper.style.opacity = 1;
		leftWrapper.style.transform = 'translateX(0)';
	});
}

function closePopUp(e) {
	bigWrapper.style.display = 'none';
	bigWrapper.style.opacity = 0;
	leftWrapper.style.transform = 'translateX(100%)';
}

closeBtn.addEventListener('click', closePopUp);
bigWrapper.addEventListener('click', closePopUp);

// var menuItems = document.getElementsByClassName('w-nav-menu')[0];
// var menuToggleIcon = document.getElementById('menu-toggle-icon');

// menuToggleIcon.onclick = function() {
// 	menuItems.style.display = 'flex';
// 	menuItems.style.zIndex = 10;
// 	menuItems.height = '356 px';
// 	menuItems.opacity = '1';
// 	menuItems.overflow = 'visible';
// };
var navBtn = document.getElementsByClassName('w-nav-button')[0];

navBtn.onclick = function() {
	this.classList.toggle('w--open');
	document.getElementsByClassName('w-nav-menu')[0].classList.toggle('m--open');
};
