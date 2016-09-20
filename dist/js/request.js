var requestForm = function () {
	var doc = document,
		inp = doc.getElementById('babyChair'),
		personalDataForm = doc.getElementById('personalData'),
		placeholders = doc.querySelectorAll('.placeholder');

	var placeholderGoUp = function (e) {
		var target = e && e.target|| e.srcElement;

		if(target.getAttribute('data-id') === 'name') {
			for (var i = 0; i < placeholders.length; i++) {
				if(placeholders[i].getAttribute('data-placeholder') === 'name') {
					placeholders[i].style.cssText = 'font-size: 14px; top: 20px; opacity: 1';
				} 
			}
		} else if (target.getAttribute('data-id') === 'mail') {
			for (var i = 0; i < placeholders.length; i++) {
				if(placeholders[i].getAttribute('data-placeholder') === 'mail') {
					placeholders[i].style.cssText = 'font-size: 14px; top: 20px; opacity: 1';
				} 
			}
		} else if (target.getAttribute('data-id') === 'phone') {
			for (var i = 0; i < placeholders.length; i++) {
				if(placeholders[i].getAttribute('data-placeholder') === 'phone') {
					placeholders[i].style.cssText = 'font-size: 14px; top: 20px; opacity: 1';
				} 
			}
		}
	};

	var focusInput = function (e) {
		var target = e && e.target|| e.srcElement,
			val = parseInt(target.value);
		if(target.id === 'babyChair' && val > 0) {
			inp.style.border = "2px solid #854cff";
		} else if (val === 0 || val === NaN) {
			inp.style.border = "2px solid transparent";
		}

	};
	// only numbers value
	var onlyNumbers = function (e) {
		
	   var chr = getChar(e);

	   if (chr == null) {return};

	    if (chr < '0' || chr > '9') {
	       e.preventDefault();
	     }
	};

	var getChar = function(event) {
		if (event.which == null) {
	        if (event.keyCode < 32) {return null};
	        return String.fromCharCode(event.keyCode) // IE
	      }

	      if (event.which != 0 && event.charCode != 0) {
	        if (event.which < 32) {return null};
	        return String.fromCharCode(event.which) // остальные
	      }

	      return null; // специальная клавиша

	};


//---------------------------------------------------


	personalDataForm.addEventListener('click', placeholderGoUp);
	inp.addEventListener('blur', focusInput);
	inp.addEventListener('keypress', onlyNumbers);
};
window.addEventListener('DOMContentLoaded', requestForm);