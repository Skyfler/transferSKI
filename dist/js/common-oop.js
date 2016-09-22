function TransferApp () {
	this.doc = document;
	// Logotype
	this.logo = this.doc.getElementById('transfer_logo');
	// Parallax layers
	this.layers = this.doc.querySelectorAll("[data-type='parallax']");
	// Show/Hide mobile menu buttons
	this.menuCloseBtn = this.doc.getElementById('mobile_menu-close');
	this.menuShowBtn = this.doc.getElementById('mobile_menu-show');
	// Show/Hide FROM search form buttons
	this.searchFormShowBtn = this.doc.getElementById('showFormBtn');
	this.searchFormHideBtn = this.doc.getElementById('hideFormBtn');
	this.searchFormSubmitBtn = this.doc.getElementById('searchSubmit');
	this.searchFormMobileSubmitBtn = this.doc.getElementById('searchSubmitMobile');
	// Change input value 
	this.arrowTo = this.doc.getElementById('changeInputsValTo');
	this.arrowFrom = this.doc.getElementById('changeInputsValFrom');
	this.inputFromTo = this.doc.getElementById('static-place');
	this.inputArriveTo = this.doc.getElementById('static-destination');
	this.inputFromFrom = this.doc.getElementById('static-place-from');
	this.inputArriveFrom = this.doc.getElementById('static-destination-from');
	// Show/Hide transfewr form popup buttons
	this.errorPopupHideBtn = this.doc.getElementById('hideErrorPopupBtn');
	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~REQUEST PAGE~~~~~~~~~~~~~~~~~~~~~~~~~~
	this.inputBabyChair = this.doc.getElementById('babyChair');
	this.personalDataForm = this.doc.getElementById('personalData');
	this.inpPersonalDataFormPlaceholders = this.doc.querySelectorAll('.placeholder');
	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~RESULT PAGE~~~~~~~~~~~~~~~~~~~~~~~~~~~
	this.routeWrapper = this.doc.getElementById('routeWrapper');

	this.init();
	
};

// Initial all methods
TransferApp.prototype.init = function() {
	// Inspection elements


	// ShowLogo Event
	window.addEventListener('scroll', this.showLogo.bind(this));
	// Parallax
	window.addEventListener('scroll', this.parallax.bind(this));
	// Show/Hide mobile menu
	this.menuCloseBtn.addEventListener('click', this.toggleMobileMenu.bind(this));
	this.menuShowBtn.addEventListener('click', this.toggleMobileMenu.bind(this));
	// Show/Hide FROM search form
	this.searchFormShowBtn.addEventListener('click', this.toggleSearchForm.bind(this));
	this.searchFormHideBtn.addEventListener('click', this.toggleSearchForm.bind(this));
	// Change inputs value
	this.arrowTo.addEventListener('click', this.changeInputs.bind(this));
	this.arrowFrom.addEventListener('click', this.changeInputs.bind(this));
	// Change form arrow direction
	this.inputFromTo.addEventListener('focus', this.changeArrowActive.bind(this));
	this.inputFromFrom.addEventListener('focus', this.changeArrowActive.bind(this));
	// Show/Hide error transfer form popup
	this.errorPopupHideBtn.addEventListener('click', this.toggleSearchErrorPopup.bind(this));
	this.searchFormSubmitBtn.addEventListener('click', this.toggleSearchErrorPopup.bind(this));
	this.searchFormMobileSubmitBtn.addEventListener('click', this.toggleSearchErrorPopup.bind(this));
	// ~~~~~~~~~~~~~~~~~~~~~~REQUEST PAGE~~~~~~~~~~~~~~~~~~~~~~~~
	if(this.personalDataForm) {
		this.personalDataForm.addEventListener('click', this.placeholderGoUp.bind(this));
	}
	if(this.inputBabyChair) {this.inputBabyChair.addEventListener('blur', this.focusInput.bind(this));}
	if(this.inputBabyChair)	{this.inputBabyChair.addEventListener('keypress', this.onlyNumbers.bind(this));}
	
	// Fixed route panel
	window.addEventListener('scroll', this.fixedRoutePanel.bind(this));
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~MAIN PAGE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Show Logo
TransferApp.prototype.showLogo = function() {
	if (!this.logo) {return};
	var formWrapper = this.doc.getElementById('formWrapper'),
		offsetForm = formWrapper.offsetHeight + formWrapper.offsetTop + 15,
		topDistance = window.pageYOffset;

	if(topDistance > offsetForm) {
		this.logo.style.cssText = 'opacity: 1';
	} else {
		this.logo.style.cssText = 'opacity: 0';
	}
};

// Parallax scroll
TransferApp.prototype.parallax = function () {
	if(!this.layers) {return};
	var depth, movement, translate;
		topDistance = window.pageYOffset;

	for (var i = 0; i < this.layers.length; i++) {
		depth = this.layers[i].getAttribute('data-depth');
		movement = -(topDistance * depth);

		translate = 'translate(0, ' + movement + 'px)';

		this.layers[i].style['-webkit-transform'] = translate;
	    this.layers[i].style['-moz-transform'] = translate;
	    this.layers[i].style['-ms-transform'] = translate;
	    this.layers[i].style['-o-transform'] = translate;
	    this.layers[i].style.transform = translate;
	}
};

// Show/Hide mobile menu
TransferApp.prototype.toggleMobileMenu = function(e) {
	if(!this.menuCloseBtn && !this.menuShowBtn) {return};

	var target =  e && e.target|| e.srcElement,
		menu = this.doc.getElementById('mobile_menu');

	if(target.getAttribute('data-action') === 'show') {
		menu.style.right = "0";
	} else if (target.getAttribute('data-action') === 'close') {
		menu.style.right = "-100%";
	}
};

// Show/hide FROM search form
TransferApp.prototype.toggleSearchForm = function(e) {
	if(!this.searchFormShowBtn && !this.searchFormHideBtn) {return};
	var target =  e && e.target || e.srcElement,
		searchForm = this.doc.getElementById('overlayForm');

	if (target.getAttribute('data-show') === 'close') {
		searchForm.style.right = "0";
		this.searchFormSubmitBtn.style.width = "100%";
	} else if (target.getAttribute('data-show') === 'show') {
		searchForm.style.right = "-100%";
		this.searchFormSubmitBtn.style.width = "220%";
	}
};

// Change input value 
TransferApp.prototype.changeInputs = function(e) {
	if(!this.arrowTo && !this.arrowFrom) {return};

	var target = e && e.target || e.srcElement,
		valFromTo =  this.inputFromTo.value,
		valArriveTo = this.inputArriveTo.value,
		valFromFrom = this.inputFromFrom.value,
		valArriveFrom = this.inputArriveFrom.value;

	if(target.id === 'changeInputsValTo') {
		this.inputFromTo.value = null;
		this.inputArriveTo.value = null;
		this.inputFromTo.value = valArriveTo;
		this.inputArriveTo.value = valFromTo;
	} else if (target.id === 'changeInputsValFrom') {
		this.inputFromFrom.value = null;
		this.inputArriveFrom.value = null;
		this.inputFromFrom.value = valArriveFrom;
		this.inputArriveFrom.value = valFromFrom;
	}
};

// Change arrow form direction
TransferApp.prototype.changeArrowActive = function(e) {
	if(!this.inputFromTo && !this.inputFromFrom) {return};

	var target = e && e.target || e.srcElement;
	if (target.id === 'static-place' || target.id === 'static-destination') {
		this.arrowTo.classList.add('search_form-arrow--active');

	} else if (target.id === 'static-place-from' || target.id === 'static-destination-from'){
		this.arrowFrom.classList.add('search_form-arrow--active');
	}
};

// Show/hide transfer search error popup
TransferApp.prototype.toggleSearchErrorPopup = function(e) {
	if(!this.searchFormSubmitBtn && !this.errorPopupHideBtn) {return};
	e.preventDefault();

	var target = e && e.target|| e.srcElement,
		errorPopup = this.doc.getElementById('errorPopup');

	if(target.getAttribute('data-id') === 'error_transfer') {
		errorPopup.style.cssText = "opacity: 1; z-index: 2";
	} else if (target.id === 'hideErrorPopupBtn') {
		errorPopup.style.cssText = 'z-index: -1; opacity: 0';
	}

};
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~REQUEST PAGE~~~~~~~~~~~~~~~~~~~~~~
// Placeholders go up
TransferApp.prototype.placeholderGoUp = function (e) {
	if(!this.personalDataForm) {return};

	var target = e && e.target|| e.srcElement;

	if(target.getAttribute('data-id') === 'name') {
		for (var i = 0; i < this.inpPersonalDataFormPlaceholders.length; i++) {
			if(this.inpPersonalDataFormPlaceholders[i].getAttribute('data-placeholder') === 'name') {
				this.inpPersonalDataFormPlaceholders[i].style.cssText = 'font-size: 14px; top: 20px; opacity: 1';
			} 
		}
	} else if (target.getAttribute('data-id') === 'mail') {
		for (var i = 0; i < this.inpPersonalDataFormPlaceholders.length; i++) {
			if(this.inpPersonalDataFormPlaceholders[i].getAttribute('data-placeholder') === 'mail') {
				this.inpPersonalDataFormPlaceholders[i].style.cssText = 'font-size: 14px; top: 20px; opacity: 1';
			} 
		}
	} else if (target.getAttribute('data-id') === 'phone') {
		for (var i = 0; i < this.inpPersonalDataFormPlaceholders.length; i++) {
			if(this.inpPersonalDataFormPlaceholders[i].getAttribute('data-placeholder') === 'phone') {
				this.inpPersonalDataFormPlaceholders[i].style.cssText = 'font-size: 14px; top: 20px; opacity: 1';
			} 
		}
	}
};

TransferApp.prototype.inputFocus = function(e) {
	if(!this.inputBabyChair) {return};

	var target = e && e.target|| e.srcElement,
		val = parseInt(target.value);
	if(target.id === 'babyChair' && val > 0) {
		this.inputBabyChair.style.border = "2px solid #854cff";
	} else if (val === 0 || val === NaN) {
		this.inputBabyChair.style.border = "2px solid transparent";
	}
};

// Only number for baby chair
TransferApp.prototype.onlyNumbers = function(e) {
	var chr = this.getChar(e);

	if(chr == null) {return};

	if(chr < '0' || chr > '9') {
		e.preventDefault();
	}
};

TransferApp.prototype.getChar = function(e) {
	if(e.which == null) {
		if(e.keyCode < 32) {return null};
		return String.fromCharCode(e.keycode);
	}

	if(e.which != 0 && e.charCode !=0) {
		if(e.which < 32) {return null};
		return String.fromCharCode(e.which);
	}

	return null;
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~RESULT PAGE~~~~~~~~~~~~~~~~~~~~~~~
// Fixed route panel
TransferApp.prototype.fixedRoutePanel = function () {
	if (!this.routeWrapper) {return};

	var topDistance = window.pageYOffset;

	if(topDistance > this.offsetPanel) {
		this.routeWrapper.classList.add('route_wrapper--fixed');
	} else if (topDistance < this.offsetPanel) {
		this.routeWrapper.classList.remove('route_wrapper--fixed');
	}
};


window.addEventListener('DOMContentLoaded', new TransferApp());

