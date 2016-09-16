$(document).ready(function(){
// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// pin the intro
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#intro',
		triggerHook: 0,
		duration: '50%'
	})
	.setPin('#intro', {pushFollowers: false})
	.addTo(controller);

	// Animation
	// var tween = TweenMax.to('#transfer', 1, {
	// 	top: '-50px'
	// });
	// // build a scene
	// var ourScene = new ScrollMagic.Scene({
	// 	triggerElement: '#intro',
	// })
	// .setTween(tween)
	// .addTo(controller);


});

