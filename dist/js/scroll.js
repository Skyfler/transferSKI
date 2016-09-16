$(document).ready(function(){
// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// pin the intro
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#intro',
		triggerHook: 0,
		duration: "55%"
	})
	.setPin('#intro', {pushFollowers: false})
	.addTo(controller);

});

