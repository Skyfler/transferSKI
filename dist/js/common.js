;(function () {
    // Parallax
    function parallax(e) {
        var depth,
            layer,
            layers = document.querySelectorAll("[data-type='parallax']"),
            topDistance = this.pageYOffset,
            movement,
            translate3d = 'translate3d(0, ' + movement + 'px, 0)';

        for (var i = 0; i < layers.length; i++) {
            layer = layers[i];
            depth = layer.getAttribute('data-depth');
            movement = - (topDistance * depth);

            layer.style['-webkit-transform'] = translate3d;
            layer.style['-moz-transform'] = translate3d;
            layer.style['-ms-transform'] = translate3d;
            layer.style['-o-transform'] = translate3d;
            layer.style.transform = translate3d;

        }
    }

    // Show Logo
    function showLogo(e) {
        var logo = document.getElementById('transfer_logo'),
            topDistance = this.pageYOffset;

        if(top >= 400) {
            logo.style.cssText = "opacity: 1;";

        } else {
            logo.style.cssText = "opacity: 0;";
        }   
    }

    window.addEventListener('scroll', parallax());
    window.addEventListener('scroll', showLogo()); 

});

// Close and Show menu
var closeBtn = document.getElementById('mobile_menu-close'),
    showBtn = document.getElementById('mobile_menu-show');

function showMenu (e) {
    e.preventDefault();
    var target = e && e.target,
        menu = document.getElementById('mobile_menu');
    if(target.getAttribute('data-action') == 'show') {
        menu.style.right = "0";
    }
}


function closeMenu (e) {
    e.preventDefault();
    var target = e && e.target,
        menu = closeBtn.parentNode;
    if(target.getAttribute('data-action') == 'close') {
        menu.style.right = "-100%";
    }
}

closeBtn.addEventListener('click', closeMenu);
showBtn.addEventListener('click', showMenu);

