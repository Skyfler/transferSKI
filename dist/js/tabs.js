var Tabs = function () {
	var doc = document,
		faqTabs = doc.getElementById('faqTabs'),
		tabsLinks = doc.querySelectorAll('.faq_tabs-link'),
		tabsContent = doc.querySelectorAll('.faq_tab-info--item');



	var addClass = function(e, dataAttr) {
		if(screen.width > 621) {
			var target = e && e.target|| e.srcElement;

			if(target.getAttribute('data-tab') === dataAttr) {
				for (var j = 0; j < tabsLinks.length; j++) {
					if (tabsLinks[j].classList.contains('tabs_link--active')) {
						tabsLinks[j].classList.remove('tabs_link--active');
					};
				};	

				target.classList.add('tabs_link--active');

				for (var i = 0; i < tabsContent.length; i++) {
					if(tabsContent[i].getAttribute('data-tab-content') === dataAttr && tabsContent[i].classList.contains('faq_info--hidden')) {
						tabsContent[i].classList.remove('faq_info--hidden');
					} else {
						tabsContent[i].classList.add('faq_info--hidden');
					}
				};

			};
		}
		
	};

	var showTab = function(e) {
		addClass(e, 'transfer');
		addClass(e, 'meeting');
		addClass(e, 'trip');
	};

	faqTabs.addEventListener('click', showTab);	
};


window.addEventListener('DOMContentLoaded', Tabs());