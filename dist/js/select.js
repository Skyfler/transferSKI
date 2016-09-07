			function DropDown(el) {
				this.dd = el;
				this.initEvents();
			}
			DropDown.prototype = {
				initEvents : function() {
					var obj = this;

					obj.dd.on('click', function(event){
						$(this).toggleClass('active');
						event.stopPropagation();
					});	
				}
			}

			$(function() {

				var dd = new DropDown( $('#dd1') );
				var dd2 = new DropDown( $('#dd2') );

				$(document).click(function() {
					// all dropdowns
					$('.dropdown_wrap').removeClass('active');
				});

			});