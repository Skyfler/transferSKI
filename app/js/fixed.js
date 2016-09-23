var doc = document; 
var offsetPanel = doc.getElementById('routeWrapper').offsetTop; 

var fixedRoutePanel = function(e) { 
	var fixedPanel = doc.getElementById('routeWrapper'), 
	topDistance = window.pageYOffset; 

	if(screen.width > 621) {
		if(topDistance > offsetPanel) { 
			fixedPanel.classList.add('route_wrapper--fixed'); 

		} else if (topDistance < offsetPanel) { 
			fixedPanel.classList.remove('route_wrapper--fixed'); 
		} 
	}

}; 


window.addEventListener('scroll', fixedRoutePanel);