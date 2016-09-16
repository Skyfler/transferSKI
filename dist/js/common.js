var transferApp = function () {
		// Cache document
		var doc = document;

		// Show Logo handler
		var showLogo = function(e) {
			var logo = doc.getElementById('transfer_logo'),
				formWrapper = doc.getElementById('formWrapper'),
				offsetForm = formWrapper.offsetHeight + formWrapper.offsetTop + 15,
				topDistance = window.pageYOffset;

			if(topDistance > offsetForm) {
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
				inputFromTo = doc.getElementById('static-place'),
				inputArriveTo = doc.getElementById('static-destination'),
				inputFromFrom = doc.getElementById('static-place-from'),
				inputArriveFrom = doc.getElementById('static-destination-from');
		
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
			if (target.id === 'static-place' || target.id === 'static-destination') {
				arrowTo.classList.add('search_form-arrow--active');

			} else if (target.id === 'static-place-from' || target.id === 'static-destination-from'){
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


};

window.addEventListener('DOMContentLoaded', transferApp);
