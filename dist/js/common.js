var transferApp = function () {
	// Cache document
	var doc = document;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~HANDLERS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
	var menuCloseBtn = doc.getElementById('mobile_menu-close'),
		menuShowBtn = doc.getElementById('mobile_menu-show');

	var toggleMobileMenu = function(e) {
		var target = e && e.target|| e.srcElement,
			menu = doc.getElementById('mobile_menu');
		if(target.getAttribute('data-action') === 'show') {
			menu.style.right = "0";
		} else if (target.getAttribute('data-action') === 'close') {
			menu.style.right = "-100%";
		}

	};

	// Hide/show search form handler
	var searchFormShowBtn = doc.getElementById('showFormBtn'),
		searchFormSubmitBtn = doc.getElementById('searchSubmit'),
		searchFormMobileSubmitBtn = doc.getElementById('searchSubmitMobile'),
		searchFormHideBtn = doc.getElementById('hideFormBtn');

	var toggleSearchForm = function(e) {
		var target =  e && e.target || e.srcElement,
			 searchForm = doc.getElementById('overlayForm');

		if (target.getAttribute('data-show') === 'close') {
			searchForm.style.right = "0";
			searchFormSubmitBtn.style.width = "100%";
		} else if (target.getAttribute('data-show') === 'show') {
			searchForm.style.right = "-100%";
			searchFormSubmitBtn.style.width = "220%";
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

	var changeArrowActive = function(e) {
		var target = e && e.target || e.srcElement;
		if (target.id === 'static-place' || target.id === 'static-destination') {
			arrowTo.classList.add('search_form-arrow--active');

		} else if (target.id === 'static-place-from' || target.id === 'static-destination-from'){
			arrowFrom.classList.add('search_form-arrow--active');
		}
	};

	// Show/Hide error popup
	var errorPopupHideBtn = doc.getElementById('hideErrorPopupBtn'),
		errorPopup = doc.getElementById('errorPopup');

	var showErrorPopup = function(e) {
		e.preventDefault();
		var target = e && e.target|| e.srcElement;		
		if(target.getAttribute('data-id') === 'error_transfer') {
			errorPopup.style.cssText = "opacity: 1; z-index: 2";
		}
	};

	var hideErrorPopup = function (e) {
		var target = e && e.target|| e.srcElement;
		if(target.id === 'hideErrorPopupBtn') {
			errorPopup.style.cssText = 'z-index: -1; opacity: 0';
		}
	};

	searchFormSubmitBtn.addEventListener('click', showErrorPopup);
	searchFormMobileSubmitBtn.addEventListener('click', showErrorPopup);

	// Scroll to form
	$('.route_wrapper').on('click', 'a.route_change-link', function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;

		$('html, body').animate({scrollTop: top}, 'slow');
	});	

	

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~EVENTS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// Show logo event
	window.addEventListener('scroll', showLogo); 

	// Mobile menu event
	menuCloseBtn.addEventListener('click', toggleMobileMenu);
	menuShowBtn.addEventListener('click', toggleMobileMenu);

	// Hide/show form event
	searchFormHideBtn.addEventListener('click', toggleSearchForm);
	searchFormShowBtn.addEventListener('click', toggleSearchForm);

	// Change value inputs event
	arrowTo.addEventListener('click', changeInputs);
	arrowFrom.addEventListener('click', changeInputs);

	// Change arrow bg on focus input
	inputFromTo.addEventListener('focus', changeArrowActive);
	inputFromFrom.addEventListener('focus', changeArrowActive);

	// Close error popup
	errorPopupHideBtn.addEventListener('click', hideErrorPopup);
};

window.addEventListener('DOMContentLoaded', transferApp);
