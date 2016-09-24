var doc = document; 
var offsetPanel = doc.getElementById('searchWrapper').offsetTop; 

var fixedRoutePanel = function(e) { 
	var fixedPanel = doc.getElementById('searchWrapper'), 
	topDistance = window.pageYOffset; 

	if(screen.width > 621) {
		if(topDistance > offsetPanel) { 
			fixedPanel.classList.add('search_wrapper--fixed'); 

		} else if (topDistance < offsetPanel) { 
			fixedPanel.classList.remove('search_wrapper--fixed'); 
		} 
	}

}; 


window.addEventListener('scroll', fixedRoutePanel);