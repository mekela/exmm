$(document).ready(function() {
	//fancybox
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});

	$('.datepicker').datepicker({
		language: 'ru'
	})

	//slider
	$('.product_info_slider ul').bxSlider();


	/*----------------        footerBottom         --------------------*/
	function footerBottom(){
		var $this = $('.footer'),
		height = parseInt($this.innerHeight());
		$('.wrapper').css({
			'padding-bottom': height + 'px',
		});
		$this.css({
			'margin-top': '-' + height + 'px',
		});
	}
	$(window).resize(function(event) {
		footerBottom();
	});
	footerBottom();

	/*----------------        sidebar         --------------------*/
	function sidebar(){
		var $this = $('.sidebar');
		$this.css({
			'min-height': $('.main').innerHeight()
		})
		$('.main').css({
			'min-height': '720px'
		})
	}
	$(window).resize(function(event) {
		sidebar();
	});
	sidebar();
	
	/*----------------        sidebar navbar         --------------------*/
	$('.sidebar-navbar').click(function(event) {
		$('.sidebar').toggleClass('active');
	});

	$(document).click( function(event){
      if( $(event.target).closest('.sidebar-navbar').length ) 
        return;
      $('.sidebar').removeClass('active');
      event.stopPropagation();
    });
	

});