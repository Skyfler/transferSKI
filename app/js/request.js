var requestForm = function () {
	var doc = document,
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
	}

	personalDataForm.addEventListener('click', placeholderGoUp);
};
window.addEventListener('DOMContentLoaded', requestForm);