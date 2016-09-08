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

		// Close and Show mobile menu handler
		var closeBtn = doc.getElementById('mobile_menu-close'),
				showBtn = doc.getElementById('mobile_menu-show');

		var showMenu = function(e) {
				var target = e && e.target|| e.srcElement,
						menu = doc.getElementById('mobile_menu');
				if(target.getAttribute('data-action') === 'show') {
						menu.style.right = "0";
				}
		}


		var closeMenu = function(e) {
				var target = e && e.target|| e.srcElement,
						menu = closeBtn.parentNode;
				if(target.getAttribute('data-action') === 'close') {
						menu.style.right = "-100%";
				}
		};

		// Show/close search form handler
		var showFormBtn = doc.getElementById('showForm'),
				closeFormBtn = doc.getElementById('closeForm');

		var closeForm = function(e) {
			var target =  e && e.target || e.srcElement,
				 	searchForm = doc.getElementById('overlayForm');

			if (target.getAttribute('data-show') === 'close') {
				searchForm.style.right = "0";
			} else if (target.getAttribute('data-show') === 'show') {
				searchForm.style.right = "-100%";
			}
		};

		// arrow change input
		var arrowTo = doc.getElementById('searchArrowTo'),
				arrowFrom = doc.getElementById('searchArrowFrom'),
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

				if(target.id === 'searchArrowTo') {
						inputFromTo.value = null;
						inputArriveTo.value = null;
						inputFromTo.value = valArriveTo;
						inputArriveTo.value = valFromTo;
				} else if (target.id === 'searchArrowFrom') {
						inputFromFrom.value = null;
						inputArriveFrom.value = null;
						inputFromFrom.value = valArriveFrom;
						inputArriveFrom.value = valFromFrom;
				}
		};

		// Change arrow handler
		var changeArrowActive = function(e) {
			var target = e && e.target || e.srcElement;
			if (target.id === 'inputFromTo' || target.id === 'inputArriveTo') {
				arrowTo.classList.add('arrow_active');

			} else if (target.id === 'inputFromFrom' || target.id === 'inputArriveFrom'){
				arrowFrom.classList.add('arrow_active');
			}
		};

		var changeArrowBlur = function(e) {
			var target = e && e.target || e.srcElement;
			if (target.id === 'inputFromTo' || target.id === 'inputArriveTo') {
				arrowTo.classList.remove('arrow_active');

			} else if (target.id === 'inputFromFrom' || target.id === 'inputArriveFrom'){
				arrowFrom.classList.remove('arrow_active');
			}
		};

		// Change Arrow event
		inputFromTo.addEventListener('focus', changeArrowActive);
		inputFromFrom.addEventListener('focus', changeArrowActive);
		// inputFromTo.addEventListener('blur', changeArrowBlur);
		// inputFromFrom.addEventListener('blur', changeArrowBlur);

		// Show Search form event
		closeFormBtn.addEventListener('click', closeForm);
		showFormBtn.addEventListener('click', closeForm);

		// Change value of inputs event
		arrowTo.addEventListener('click', changeInputs);
		arrowFrom.addEventListener('click', changeInputs);

		// Mobile menu event
		closeBtn.addEventListener('click', closeMenu);
		showBtn.addEventListener('click', showMenu);

		// Parallax event
		// window.addEventListener('scroll', parallax;

		// Show logo event
		window.addEventListener('scroll', showLogo); 

};

window.addEventListener('DOMContentLoaded', transferApp);
