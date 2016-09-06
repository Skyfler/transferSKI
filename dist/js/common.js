(function ($) {
    // DROPDOWN
    $('.js-dropdown-link').on('click',function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).closest('.js-dropdown').toggleClass('open');
    });

    /*
    $('.js-dropdown-item').on('click',function (e) {
        var text = $(this).text();
        $(this).closest('.js-dropdown').find('.js-dropdown-link').text(text);
    });
    */


    $('.js-dropdown-inner').on('click',function (e) {
        e.stopPropagation();
    });

    $('.js-dropdown-list').on('click',function (e) {
        e.stopPropagation();
        offDropdowns();
    });

    $('.js-dropdown-sprop').on('click',function (e) {
        e.stopPropagation();
    });

    // selectize

    // $('#select-lang').selectize({
    //                 allowEmptyOption: true,
    //                 create: true
    //             });
 }(jQuery));  


window.addEventListener('scroll', function(event) {
  var depth, i, layer, layers, len, movement, topDistance, translate3d;
  topDistance = this.pageYOffset;
  console.log(topDistance);
  layers = document.querySelectorAll("[data-type='parallax']");
  for (i = 0, len = layers.length; i < len; i++) {
    layer = layers[i];
    depth = layer.getAttribute('data-depth');
    movement = -(topDistance * depth);
    translate3d = 'translate3d(0, ' + movement + 'px, 0)';
    layer.style['-webkit-transform'] = translate3d;
    layer.style['-moz-transform'] = translate3d;
    layer.style['-ms-transform'] = translate3d;
    layer.style['-o-transform'] = translate3d;
    layer.style.transform = translate3d;
  }

  // var trans = document.getElementById('transfer');
  // if(topDistance >= 1600) {
  //       trans.style.cssText = "opacity: 0;"
  //   } else {
  //       trans.style.cssText = "opacity: 1;"
  //   }   
});

window.addEventListener('scroll', function(e) {
    var logo = document.getElementById('transfer_logo'),
        top = this.pageYOffset;
        
   if(top >= 1600) {
        logo.style.cssText = "opacity: 1;"
    } else {
        logo.style.cssText = "opacity: 0;"
    }   

});