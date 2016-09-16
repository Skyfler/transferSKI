var transferApp = function () {
		// Cache document
		var doc = document;

		// Show Logo handler
		var showLogo = function(e) {
			var logo = doc.getElementById('transfer_logo'),
				topDistance = window.pageYOffset;

			if(topDistance >= 400) {
				logo.style.cssText = "opacity: 1;";

			} else {
				logo.style.cssText = "opacity: 0;";
			}   
		};

		// parallax
		window.addEventListener('scroll', function(event) {
		  var depth, layers, movement, topDistance, translate3d;
		  topDistance = this.pageYOffset;
		  layers = document.querySelectorAll("[data-type='parallax']");

		  for (var i = 0; i <layers.length; i++) {
		    depth = layers[i].getAttribute('data-depth');
		    movement = -(topDistance * depth);

		    translate = 'translate(0, ' + movement + 'px)';
		    layers[i].style['-webkit-transform'] = translate;
		    layers[i].style['-moz-transform'] = translate;
		    layers[i].style['-ms-transform'] = translate;
		    layers[i].style['-o-transform'] = translate;
		    layers[i].style.transform = translate;
		  }
		});

		// window.addEventListener('scroll', function(event) {
		//   var depth, elem, movement, topDistance, translate3d;

		//   topDistance = this.pageYOffset;
		//   elem = doc.getElementById("forma");
		//   depth = elem.getAttribute('data-depthh');
		//   movement = -(topDistance * depth);
		//   translate = 'translate(-50%, ' + movement + 'px)';
		  
		//   elem.style['-webkit-transform'] = translate;
		//   elem.style['-moz-transform'] = translate;
		//   elem.style['-ms-transform'] = translate;
		//   elem.style['-o-transform'] = translate;
		//   elem.style.transform = translate;
		// });


		// var parallax = function () {
		// 	var topDistance = window.pageYOffset,
		// 		forma = doc.getElementById('forma'),
		// 		depth=0.02,
		// 		movement = topDistance * depth;

		// 	while (topDistance < 1000) {
		// 		forma.style.top = movement + 'px';
		// 	}
		// };

		// window.addEventListener('scroll', parallax);
		// Close/Show mobile menu handler
		var closeBtn = doc.getElementById('mobile_menu-close'),
				showBtn = doc.getElementById('mobile_menu-show');

		var showMenu = function(e) {
				var target = e && e.target|| e.srcElement,
						menu = doc.getElementById('mobile_menu');
				if(target.getAttribute('data-action') === 'show') {
						menu.style.right = "0";
				}
		};

		var closeMenu = function(e) {
				var target = e && e.target|| e.srcElement,
						menu = closeBtn.parentNode;
				if(target.getAttribute('data-action') === 'close') {
						menu.style.right = "-100%";
				}
		};

		// Hide/show search form handler
		var showFormBtn = doc.getElementById('showForm'),
				hideFormBtn = doc.getElementById('hideForm');

		var hideShowForm = function(e) {
			var target =  e && e.target || e.srcElement,
				 	searchForm = doc.getElementById('overlayForm');

			if (target.getAttribute('data-show') === 'close') {
				searchForm.style.right = "0";
			} else if (target.getAttribute('data-show') === 'show') {
				searchForm.style.right = "-100%";
			}
		};

		// Change input value handler
		var arrowTo = doc.getElementById('changeInputsValTo'),
				arrowFrom = doc.getElementById('changeInputsValFrom'),
				inputFromTo = doc.getElementById('inputFromTo'),
				inputArriveTo = doc.getElementById('inputArriveTo'),
				inputFromFrom = doc.getElementById('inputFromFrom'),
				inputArriveFrom = doc.getElementById('inputArriveFrom');
		
		var changeInputs = function(e) {
				var target = e && e.target || e.srcElement,
						valFromTo =  inputFromTo.value,
						valArriveTo = inputArriveTo.value,
						valFromFrom = inputFromFrom.value,
						valArriveFrom = inputArriveFrom.value;

				if(target.id === 'changeInputsValTo') {
						inputFromTo.value = null;
						inputArriveTo.value = null;
						inputFromTo.value = valArriveTo;
						inputArriveTo.value = valFromTo;
				} else if (target.id === 'changeInputsValFrom') {
						inputFromFrom.value = null;
						inputArriveFrom.value = null;
						inputFromFrom.value = valArriveFrom;
						inputArriveFrom.value = valFromFrom;
				}
		};

		// Change arrow bg event
		// var changeArrowBlur = function(e) {
		// 	var target = e && e.target || e.srcElement;
		// 	if (target.id === 'inputFromTo' || target.id === 'inputArriveTo') {
		// 		arrowTo.classList.remove('search_form-arrow--active');

		// 	} else if (target.id === 'inputFromFrom' || target.id === 'inputArriveFrom'){
		// 		arrowFrom.classList.remove('search_form-arrow--active');
		// 	}
		// };

		var changeArrowActive = function(e) {
			var target = e && e.target || e.srcElement;
			if (target.id === 'inputFromTo' || target.id === 'inputArriveTo') {
				arrowTo.classList.add('search_form-arrow--active');

			} else if (target.id === 'inputFromFrom' || target.id === 'inputArriveFrom'){
				arrowFrom.classList.add('search_form-arrow--active');
			}
		};

		// Show logo event
		window.addEventListener('scroll', showLogo); 

		// Mobile menu event
		closeBtn.addEventListener('click', closeMenu);
		showBtn.addEventListener('click', showMenu);

		// Hide/show form event
		hideFormBtn.addEventListener('click', hideShowForm);
		showFormBtn.addEventListener('click', hideShowForm);

		// Change value inputs event
		arrowTo.addEventListener('click', changeInputs);
		arrowFrom.addEventListener('click', changeInputs);

		// Change arrow bg on focus input
		inputFromTo.addEventListener('focus', changeArrowActive);
		inputFromFrom.addEventListener('focus', changeArrowActive);
		// inputFromTo.addEventListener('blur', changeArrowBlur);
		// inputFromFrom.addEventListener('blur', changeArrowBlur);

		

		// Parallax event
		// window.addEventListener('scroll', parallax);


};

window.addEventListener('DOMContentLoaded', transferApp);
