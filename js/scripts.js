
		$(function(){
			$('.bxslider').bxSlider({
			  auto: true,
			  captions: false
			});		

			$('.bxslider2').bxSlider({
			  auto: true,
			  captions: false
			});	
			$('.bxslider3').bxSlider({
			  auto: true,
			  captions: false,
			  minSlides: 1,
			  maxSlides: 3,
			  slideWidth: 372,
			slideMargin: 25
			});
			
		});


            $(document).ready(function ($) {
                // delegate calls to data-toggle="lightbox"
                $(document).delegate('*[data-toggle="lightbox"]:not([data-gallery="navigateTo"])', 'click', function(event) {
                    event.preventDefault();
                    return $(this).ekkoLightbox({
                        onShown: function() {
                            if (window.console) {
                                return console.log('Checking our the events huh?');
                            }
                        },
						onNavigate: function(direction, itemIndex) {
                            if (window.console) {
                                return console.log('Navigating '+direction+'. Current item: '+itemIndex);
                            }
						}
                    });
                });

                //Programatically call
                $('#open-image').click(function (e) {
                    e.preventDefault();
                    $(this).ekkoLightbox();
                });
                $('#open-youtube').click(function (e) {
                    e.preventDefault();
                    $(this).ekkoLightbox();
                });

				// navigateTo
                $(document).delegate('*[data-gallery="navigateTo"]', 'click', function(event) {
                    event.preventDefault();

                    var lb;
                    return $(this).ekkoLightbox({
                        onShown: function() {

                            lb = this;

							$(lb.modal_content).on('click', '.modal-footer a', function(e) {

								e.preventDefault();
								lb.navigateTo(2);

							});

                        }
                    });
                });


            });



nashClubV = 1;
$(document).ready(function(){
        
    $(window).scroll(function(){
        if($('.preims').length){

        if ($(document).scrollTop() + $(window).height() > $('.preims').offset().top && $(document).scrollTop() -                       $('.preims').offset().top < $('.preims').height()){
                if(nashClubV){
                    nashClubV = 0;
                    goPr();
                }
            }
        }
    });            
});

function goPr(){  
    $('.preims .item:nth-child(2n+1)').css('left', '2000px').animate({'left': '-=2100px'}, 800, function(){
        $(this).animate({'left': '+=150px'}, 400, function(){
            $(this).animate({'left': '-=50px'}, 300);
        });
    });
    
    $('.preims .item:nth-child(2n)').css('right', '2000px').animate({'right': '-=2100px'}, 800, function(){
        $(this).animate({'right': '+=150px'}, 400, function(){
            $(this).animate({'right': '-=50px'}, 300);
        });
    });
}



(function($) {
$(function() {

  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

});
})(jQuery);

var _ajaxForm = function(form) {
    if (form.submited) return false;
    var $form = $(form),
        $errors = $form.find(".errors"),
        data = $form.serialize();

    $.ajax({
        data: data,
        url: $form.attr("action"),
        dataType: "json",
        type: "post",
        success: function(r) {            
            $errors.empty().removeClass('alert alert-danger');            
            if (r.TYPE === 'OK') {
                $form.replaceWith('<div class="alert alert-success">' + r.MESSAGE + '</div>');
            }
            else if(r.TYPE === 'ERROR') {                
                $errors.addClass('alert alert-danger');
                for (var i in r.ERRORS) {
                    $errors.append('<div class="error">' + r.ERRORS[i] + '</div>');
                }
            }
            form.submited = false;
        },
        error: function() {
            form.submited = false;
        }
    });
};
$(document).ready(function () {
    $('.t1').click(function(){
        $('.kont-tabl-wr').slideToggle();
        $('.kont-tabl-wr2').slideUp();
        $('.t2').removeClass('activ');
        $('.t1').addClass('activ');
    });
    $('.t2').click(function(){
        $('.kont-tabl-wr2').slideToggle();
        $('.kont-tabl-wr').slideUp();
        $('.t1').removeClass('activ');
        $('.t2').addClass('activ');
    });
});