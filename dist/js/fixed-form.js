var doc = document; 
var offsetPanel = doc.getElementById('searchWrapper').offsetTop; 
var height = doc.getElementById('searchWrapper').offsetHeight; 
var heightTitle = doc.getElementById('searchWrapper').offsetHeight; 

var fixedRoutePanel = function(e) { 
	var fixedPanel = doc.getElementById('searchWrapper'), 
	topDistance = window.pageYOffset; 

	if(screen.width > 621) {
		if(topDistance > offsetPanel) { 
			doc.getElementById('bookWrapper').style.marginTop = height + 60 + 'px';
			fixedPanel.classList.add('search_wrapper--fixed'); 

		} else if (topDistance < offsetPanel) { 
			doc.getElementById('bookWrapper').style.marginTop = "0";
			fixedPanel.classList.remove('search_wrapper--fixed'); 
		} 
	}

}; 


window.addEventListener('scroll', fixedRoutePanel);