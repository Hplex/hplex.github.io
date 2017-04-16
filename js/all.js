$(function(){
	$(".phone").mask('+7 (999) 999-9999');
	
});

$('body').activity({
  'achieveTime':80
  ,'testPeriod':10
  ,useMultiMode: 1
  ,callBack: function (e) {
    console.log("80sec");
    ga('send', 'event', '80sec', 'done', '80sec');
    yaCounter32216254.reachGoal('80_sec');
  }
});



function parseQuery(str)
    {
    if(typeof str != "string" || str.length == 0) return {};
    var s = str.split("&");
    var s_length = s.length;
    var bit, query = {}, first, second;
    for(var i = 0; i < s_length; i++)
        {
        bit = s[i].split("=");
        first = decodeURIComponent(bit[0]);
        if(first.length == 0) continue;
        second = decodeURIComponent(bit[1]);
        if(typeof query[first] == "undefined") query[first] = second;
        else if(query[first] instanceof Array) query[first].push(second);
        else query[first] = [query[first], second]; 
        }
    return query;
    }
	
var ModalEffects = (function() {

	function init() {

		var overlay = document.querySelector( '.md-overlay' );

		[].slice.call( document.querySelectorAll( '.md-trigger' ) ).forEach( function( el, i ) {

			var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
				close = modal.querySelector( '.md-close' );

			function removeModal( hasPerspective ) {
				classie.remove( modal, 'md-show' );

				if( hasPerspective ) {
					classie.remove( document.documentElement, 'md-perspective' );
				}
			}

			function removeModalHandler() {
				removeModal( classie.has( el, 'md-setperspective' ) ); 
			}

			el.addEventListener( 'click', function( ev ) {
				classie.add( modal, 'md-show' );
        $('.md-content').css('opacity', '1');

				overlay.removeEventListener( 'click', removeModalHandler );
				overlay.addEventListener( 'click', removeModalHandler );

				if( classie.has( el, 'md-setperspective' ) ) {
					setTimeout( function() {
						classie.add( document.documentElement, 'md-perspective' );
					}, 25 );
				}
			});

			close.addEventListener( 'click', function( ev ) {
				ev.stopPropagation();
				removeModalHandler();
			});

		} );

	}

	init();

})();






//Бронь 2500
$('.bronir2500').on('click', function(){
	
  var user_name       = $('input[name=name2500]').val(),    
      user_phone      = $('input[name=phone2500]').val(),
	    queryString = parseQuery($(location).attr('search').substr(1));
      params = ""
       	for(property in queryString) {
       		params += " "+property+"="+queryString[property];
       	}
      proceed         = true;
  
  if(user_name==""){ 
    $('input[name=name2500]').removeClass('error accepted processing');
    $('input[name=name2500]').addClass('error'); 
    proceed = false;
  }

  if(user_phone=="") {    
    $('input[name=phone2500]').removeClass('error accepted processing');
    $('input[name=phone2500]').addClass('error');
    proceed = false;
  }
  
  if( $('input[name=name2500]').hasClass('accepted') && $('input[name=phone2500]').hasClass('accepted')){
  } else {
    proceed = false;
  }

  if(proceed) 
  {
			
    //data to be sent to server			
    var post_data = new FormData();    
    post_data.append( 'userName', user_name);
    post_data.append( 'userPhone', user_phone);
post_data.append( 'utm', params);
    /* отправляем данные из формы на сервер через ajax*/
    $.ajax({
      url: 'js/pogreb2500.php',
      data: post_data,
      processData: false,
      contentType: false,
      type: 'POST',
      dataType:'json',
      success: function(data){
        //load json data from server and output message     
        if(data.type == 'error')
        {
          output = '<div class="error">'+data.text+'</div>';
        }else{
          output = '<div class="success">'+data.text+'</div>';

          //reset values in all input fields
          $('.md-content input').val(''); 
          $('.md-content input').removeClass('accepted');
          $('.md-content textarea').val(''); 
		  yaCounter32216254.reachGoal('bronir2500');
		  ga('send', 'event', 'zayavk', 'senten', '2500');
        }
        $('.md-content').fadeTo("slow", 0, function(){
          $("#result2500").html(output);
          $("#result2500 ").hide().delay(0).fadeOut("slow", 0, function(){
            $('.md-modal').removeClass('md-show');
          });
        })
//        $("#result ").hide().html(output).slideDown(); //show results from server
      }
    });

	}

});



//Бронь 1900
$('.bronir1900').on('click', function(){
	
  var user_name       = $('input[name=name1900]').val(),    
      user_phone      = $('input[name=phone1900]').val(),
	    queryString = parseQuery($(location).attr('search').substr(1));
      params = ""
       	for(property in queryString) {
       		params += " "+property+"="+queryString[property];
       	}
      proceed         = true;
  
  if(user_name==""){ 
    $('input[name=name1900]').removeClass('error accepted processing');
    $('input[name=name1900]').addClass('error'); 
    proceed = false;
  }

  if(user_phone=="") {    
    $('input[name=phone1900]').removeClass('error accepted processing');
    $('input[name=phone1900]').addClass('error');
    proceed = false;
  }
  
  if( $('input[name=name1900]').hasClass('accepted') && $('input[name=phone1900]').hasClass('accepted')){
  } else {
    proceed = false;
  }

  if(proceed) 
  {
			
    //data to be sent to server			
    var post_data = new FormData();    
    post_data.append( 'userName', user_name);
    post_data.append( 'userPhone', user_phone);
post_data.append( 'utm', params);
    /* отправляем данные из формы на сервер через ajax*/
    $.ajax({
      url: 'js/pogreb1900.php',
      data: post_data,
      processData: false,
      contentType: false,
      type: 'POST',
      dataType:'json',
      success: function(data){
        //load json data from server and output message     
        if(data.type == 'error')
        {
          output = '<div class="error">'+data.text+'</div>';
        }else{
          output = '<div class="success">'+data.text+'</div>';

          //reset values in all input fields
          $('.md-content input').val(''); 
          $('.md-content input').removeClass('accepted');
          $('.md-content textarea').val(''); 
		  yaCounter32216254.reachGoal('bronir1900');
		  ga('send', 'event', 'zayavk', 'senten', '1900');
        }
        $('.md-content').fadeTo("slow", 0, function(){
          $("#result1900").html(output);
          $("#result1900 ").hide().delay(0).fadeOut("slow", 0, function(){
            $('.md-modal').removeClass('md-show');
          });
        })
//        $("#result ").hide().html(output).slideDown(); //show results from server
      }
    });

	}

});








//Бронь 1500
$('.bronir1500').on('click', function(){
	
  var user_name       = $('input[name=name1500]').val(),    
      user_phone      = $('input[name=phone1500]').val(),
	    queryString = parseQuery($(location).attr('search').substr(1));
      params = ""
       	for(property in queryString) {
       		params += " "+property+"="+queryString[property];
       	}
      proceed         = true;
  
  if(user_name==""){ 
    $('input[name=name1500]').removeClass('error accepted processing');
    $('input[name=name1500]').addClass('error'); 
    proceed = false;
  }

  if(user_phone=="") {    
    $('input[name=phone1500]').removeClass('error accepted processing');
    $('input[name=phone1500]').addClass('error');
    proceed = false;
  }
  
  if( $('input[name=name1500]').hasClass('accepted') && $('input[name=phone1500]').hasClass('accepted')){
  } else {
    proceed = false;
  }

  if(proceed) 
  {
			
    //data to be sent to server			
    var post_data = new FormData();    
    post_data.append( 'userName', user_name);
    post_data.append( 'userPhone', user_phone);
post_data.append( 'utm', params);
    /* отправляем данные из формы на сервер через ajax*/
    $.ajax({
      url: 'js/pogreb1500.php',
      data: post_data,
      processData: false,
      contentType: false,
      type: 'POST',
      dataType:'json',
      success: function(data){
        //load json data from server and output message     
        if(data.type == 'error')
        {
          output = '<div class="error">'+data.text+'</div>';
        }else{
          output = '<div class="success">'+data.text+'</div>';

          //reset values in all input fields
          $('.md-content input').val(''); 
          $('.md-content input').removeClass('accepted');
          $('.md-content textarea').val(''); 
		  yaCounter32216254.reachGoal('bronir1500');
		  ga('send', 'event', 'zayavk', 'senten', '1500');
        }
        $('.md-content').fadeTo("slow", 0, function(){
          $("#result1500").html(output);
          $("#result1500 ").hide().delay(0).fadeOut("slow", 0, function(){
            $('.md-modal').removeClass('md-show');
          });
        })
//        $("#result ").hide().html(output).slideDown(); //show results from server
      }
    });

	}

});
	
	
	
	
	//Расчитать доставку
$('.dooostaa').on('click', function(){
	
		
	
  var user_name       = $('input[name=dname]').val(),    
      user_phone      = $('input[name=dphone]').val(),
	   user_text      = $('input[name=dcity]').val(),
	    queryString = parseQuery($(location).attr('search').substr(1));
      params = ""
       	for(property in queryString) {
       		params += " "+property+"="+queryString[property];
       	}
      proceed         = true;
  
  if(user_name==""){ 
    $('input[name=dname]').removeClass('error accepted processing');
    $('input[name=dname]').addClass('error'); 
    proceed = false;
  }

  if(user_phone=="") {    
    $('input[name=dphone]').removeClass('error accepted processing');
    $('input[name=dphone]').addClass('error');
    proceed = false;
  }
  
  if( $('input[name=dname]').hasClass('accepted') && $('input[name=dphone]').hasClass('accepted')){
  } else {
    proceed = false;
  }

  if(proceed) 
  {
			
    //data to be sent to server			
    var post_data = new FormData();    
    post_data.append( 'userName', user_name);
    post_data.append( 'userPhone', user_phone);
	   post_data.append( 'userText', user_text);
post_data.append( 'utm', params);
    /* отправляем данные из формы на сервер через ajax*/
    $.ajax({
      url: 'js/dostav.php',
      data: post_data,
      processData: false,
      contentType: false,
      type: 'POST',
      dataType:'json',
      success: function(data){
        //load json data from server and output message     
        if(data.type == 'error')
        {
          output = '<div class="error">'+data.text+'</div>';
        }else{
          output = '<div class="success">'+data.text+'</div>';

          //reset values in all input fields
          $('.md-content input').val(''); 
          $('.md-content input').removeClass('accepted');
          $('.md-content textarea').val(''); 
		
        }
        $('.md-content').fadeTo("slow", 0, function(){
          $("#result15").html(output);
          $("#result15 ").hide().delay(0).fadeOut("slow", 0, function(){
            $('.md-modal').removeClass('md-show');
          });
        })
//        $("#result ").hide().html(output).slideDown(); //show results from server
      }
    });
  
  

	}

});


	
	//Вова не сломай ничего
	
	//Расчитать МАНТАЖКУУУ
$('.mooontage').on('click', function(){
	
		
	
  var user_name       = $('input[name=mname]').val(),    
      user_phone      = $('input[name=mphone]').val(),
	   user_text      = $('input[name=mcity]').val(),
	    queryString = parseQuery($(location).attr('search').substr(1));
      params = ""
       	for(property in queryString) {
       		params += " "+property+"="+queryString[property];
       	}
      proceed         = true;
  
  if(user_name==""){ 
    $('input[name=mname]').removeClass('error accepted processing');
    $('input[name=mname]').addClass('error'); 
    proceed = false;
  }

  if(user_phone=="") {    
    $('input[name=mphone]').removeClass('error accepted processing');
    $('input[name=mphone]').addClass('error');
    proceed = false;
  }
  
  if( $('input[name=mname]').hasClass('accepted') && $('input[name=mphone]').hasClass('accepted')){
  } else {
    proceed = false;
  }

  if(proceed) 
  {
			
    //data to be sent to server			
    var post_data = new FormData();    
    post_data.append( 'userName', user_name);
    post_data.append( 'userPhone', user_phone);
	   post_data.append( 'userText', user_text);
post_data.append( 'utm', params);
    /* отправляем данные из формы на сервер через ajax*/
    $.ajax({
      url: 'js/montag.php',
      data: post_data,
      processData: false,
      contentType: false,
      type: 'POST',
      dataType:'json',
      success: function(data){
        //load json data from server and output message     
        if(data.type == 'error')
        {
          output = '<div class="error">'+data.text+'</div>';
        }else{
          output = '<div class="success">'+data.text+'</div>';

          //reset values in all input fields
          $('.md-content input').val(''); 
          $('.md-content input').removeClass('accepted');
          $('.md-content textarea').val(''); 
		
        }
        $('.md-content').fadeTo("slow", 0, function(){
          $("#result16").html(output);
          $("#result16 ").hide().delay(0).fadeOut("slow", 0, function(){
            $('.md-modal').removeClass('md-show');
          });
        })
//        $("#result ").hide().html(output).slideDown(); //show results from server
      }
    });
  
  

	}

});


	
	
	
	
	
//Помощь с выбором
$('.callback').on('click', function(){
	
		
	
  var user_name       = $('input[name=name]').val(),    
      user_phone      = $('input[name=phone]').val(),
	    queryString = parseQuery($(location).attr('search').substr(1));
      params = ""
       	for(property in queryString) {
       		params += " "+property+"="+queryString[property];
       	}
      proceed         = true;
  
  if(user_name==""){ 
    $('input[name=name]').removeClass('error accepted processing');
    $('input[name=name]').addClass('error'); 
    proceed = false;
  }

  if(user_phone=="") {    
    $('input[name=phone]').removeClass('error accepted processing');
    $('input[name=phone]').addClass('error');
    proceed = false;
  }
  
  if( $('input[name=name]').hasClass('accepted') && $('input[name=phone]').hasClass('accepted')){
  } else {
    proceed = false;
  }

  if(proceed) 
  {
			
    //data to be sent to server			
    var post_data = new FormData();    
    post_data.append( 'userName', user_name);
    post_data.append( 'userPhone', user_phone);
post_data.append( 'utm', params);
    /* отправляем данные из формы на сервер через ajax*/
    $.ajax({
      url: 'js/help.php',
      data: post_data,
      processData: false,
      contentType: false,
      type: 'POST',
      dataType:'json',
      success: function(data){
        //load json data from server and output message     
        if(data.type == 'error')
        {
          output = '<div class="error">'+data.text+'</div>';
        }else{
          output = '<div class="success">'+data.text+'</div>';

          //reset values in all input fields
          $('.md-content input').val(''); 
          $('.md-content input').removeClass('accepted');
          $('.md-content textarea').val(''); 
		    yaCounter32216254.reachGoal('consult');
		    ga('send', 'event', 'zayavk', 'senten', 'helpen');
        }
        $('.md-content').fadeTo("slow", 0, function(){
          $("#result").html(output);
          $("#result ").hide().delay(0).fadeOut("slow", 0, function(){
            $('.md-modal').removeClass('md-show');
          });
        })
//        $("#result ").hide().html(output).slideDown(); //show results from server
      }
    });
  
  

	}
	



});




// Узнать все детали
$('.detali').on('click', function(){
  
  var user_name       = $('input[name=namedet]').val(),    
      user_phone      = $('input[name=phonedet]').val(),
	      queryString = parseQuery($(location).attr('search').substr(1));
      params = ""
       	for(property in queryString) {
       		params += " "+property+"="+queryString[property];
       	}
      proceed         = true;
  
  if(user_name==""){ 
    $('input[name=namedet]').removeClass('error accepted processing');
    $('input[name=namedet]').addClass('error'); 
    proceed = false;
  }

  if(user_phone=="") {    
    $('input[name=phonedet]').removeClass('error accepted processing');
    $('input[name=phonedet]').addClass('error');
    proceed = false;
  }
  
  if( $('input[name=namedet]').hasClass('accepted') && $('input[name=phonedet]').hasClass('accepted')){
  } else {
    proceed = false;
  }

  if(proceed) 
  {
			
    //data to be sent to server			
    var post_data = new FormData();    
    post_data.append( 'userName', user_name);
    post_data.append( 'userPhone', user_phone);
post_data.append( 'utm', params);
    /* отправляем данные из формы на сервер через ajax*/
    $.ajax({
      url: 'js/help2.php',
      data: post_data,
      processData: false,
      contentType: false,
      type: 'POST',
      dataType:'json',
      success: function(data){
        //load json data from server and output message     
        if(data.type == 'error')
        {
          output = '<div class="error">'+data.text+'</div>';
        }else{
          output = '<div class="success">'+data.text+'</div>';

          //reset values in all input fields
          $('.md-content input').val(''); 
          $('.md-content input').removeClass('accepted');
          $('.md-content textarea').val(''); 
		  yaCounter32216254.reachGoal('detali');
		  ga('send', 'event', 'zayavk', 'senten', 'detali');
		   
        }
        $('.md-content').fadeTo("slow", 0, function(){
          $("#result2").html(output);
          $("#result2 ").hide().delay(0).fadeOut("slow", 0, function(){
            $('.md-modal').removeClass('md-show');
          });
        })
//        $("#result ").hide().html(output).slideDown(); //show results from server
      }
    });
  }
  
})









// ближайший дилер
$('.obratnaya').on('click', function(){
  
  var user_name       = $('input[name=name4]').val(),    
      user_phone      = $('input[name=phone4]').val(),
	      queryString = parseQuery($(location).attr('search').substr(1));
      params = ""
       	for(property in queryString) {
       		params += " "+property+"="+queryString[property];
       	}
   
      proceed         = true;
  
  if(user_name==""){ 
      $('input[name=name4]').removeClass('error accepted processing');
      $('input[name=name4]').addClass('error'); 
      proceed = false;
    }

  if(user_phone=="") {    
    $('input[name=phone4]').removeClass('error accepted processing');
    $('input[name=phone4]').addClass('error');
    proceed = false;
  }

  if( $('input[name=name4]').hasClass('accepted') && $('input[name=phone4]').hasClass('accepted')){
  } else {
    proceed = false;
  }
  
  if(proceed) 
  {
			
    //data to be sent to server			
    var post_data = new FormData();    
    post_data.append( 'userName', user_name);
    post_data.append( 'userPhone', user_phone);
post_data.append( 'utm', params);
    /* отправляем данные из формы на сервер через ajax*/
    $.ajax({
          url: 'js/help3.php',
      data: post_data,
      processData: false,
      contentType: false,
      type: 'POST',
      dataType:'json',
      success: function(data){
        //load json data from server and output message     
        if(data.type == 'error')
        {
          output = '<div class="error">'+data.text+'</div>';
        }else{
          output = '<div class="success">'+data.text+'</div>';

          //reset values in all input fields
          $('.feadbacka input').val(''); 
          $('.feadbacka input').removeClass('accepted');
          $('.filename').text('Файл не выбран');
      yaCounter32216254.reachGoal('dealer');
      ga('send', 'event', 'zayavk', 'senten', 'dealer');
        }

       $('.feadbacka').fadeTo("slow", 0.8, function(){
          $("#result3").html(output);
          $("#result3 ").hide().delay(0).fadeOut("slow", 0, function(){
            
          });
        })
      }
    });
  }
  
});

// Заказ погреба
$('.obratnaya2').on('click', function(){
  
  var user_name       = $('input[name=name5]').val(),    
      user_phone      = $('input[name=phone5]').val(),
	      queryString = parseQuery($(location).attr('search').substr(1));
      params = ""
       	for(property in queryString) {
       		params += " "+property+"="+queryString[property];
       	}
   
      proceed         = true;
  
  if(user_name==""){ 
      $('input[name=name5]').removeClass('error accepted processing');
      $('input[name=name5]').addClass('error'); 
      proceed = false;
    }

  if(user_phone=="") {    
    $('input[name=phone5]').removeClass('error accepted processing');
    $('input[name=phone5]').addClass('error');
    proceed = false;
  }

  if( $('input[name=name5]').hasClass('accepted') && $('input[name=phone5]').hasClass('accepted')){
  } else {
    proceed = false;
  }
  
  if(proceed) 
  {
			
    //data to be sent to server			
    var post_data = new FormData();    
    post_data.append( 'userName', user_name);
    post_data.append( 'userPhone', user_phone);
post_data.append( 'utm', params);

    /* отправляем данные из формы на сервер через ajax*/
    $.ajax({
          url: 'js/help4.php',
      data: post_data,
      processData: false,
      contentType: false,
      type: 'POST',
      dataType:'json',
      success: function(data){
        //load json data from server and output message     
        if(data.type == 'error')
        {
          output = '<div class="error">'+data.text+'</div>';
        }else{
          output = '<div class="success">'+data.text+'</div>';

          //reset values in all input fields
          $('.feadbacka input').val(''); 
          $('.feadbacka input').removeClass('accepted');
      yaCounter32216254.reachGoal('zakaz');
      ga('send', 'event', 'zayavk', 'senten', 'zakazan');
        }

        $('.feadbacka').fadeTo("slow", 0.8, function(){
          $("#result4").html(output);
          $("#result4 ").hide().delay(0).fadeOut("slow", 0, function(){
            
          });
        })
      }
    });
  }
  
});
  
  
  

$('.mobbi').on('click', function(){
  
  var user_name       = $('input[name=name6]').val(),    
      user_phone      = $('input[name=phone6]').val(),
      queryString = parseQuery($(location).attr('search').substr(1));
      params = ""
       	for(property in queryString) {
       		params += " "+property+"="+queryString[property];
       	}
   
      proceed         = true;
  
  if(user_name==""){ 
      $('input[name=name6]').removeClass('error accepted processing');
      $('input[name=name6]').addClass('error'); 
      proceed = false;
    }

  if(user_phone=="") {    
    $('input[name=phone6]').removeClass('error accepted processing');
    $('input[name=phone6]').addClass('error');
    proceed = false;
  }

  if( $('input[name=name6]').hasClass('accepted') && $('input[name=phone6]').hasClass('accepted')){
  } else {
    proceed = false;
  }
  
  if(proceed) 
  {
			
    //data to be sent to server			
    var post_data = new FormData();    
    post_data.append( 'userName', user_name);
    post_data.append( 'userPhone', user_phone);
post_data.append( 'utm', params);

    /* отправляем данные из формы на сервер через ajax*/
    $.ajax({
          url: 'js/help5.php',
      data: post_data,
      processData: false,
      contentType: false,
      type: 'POST',
      dataType:'json',
      success: function(data){
        //load json data from server and output message     
        if(data.type == 'error')
        {
          output = '<div class="error">'+data.text+'</div>';
        }else{
          output = '<div class="success">'+data.text+'</div>';

          //reset values in all input fields
          $('.feadbacka input').val(''); 
          $('.feadbacka input').removeClass('accepted');

        }

        $('.feadbacka').fadeTo("slow", 0.8, function(){
          $("#result5").html(output);
          $("#result5 ").hide().delay(0).fadeOut("slow", 0, function(){
            
          });
        })
      }
    });
  }
  
});

// Связь с производителем
$('.proisvodit').on('click', function(){
  
  var user_name       = $('input[name=name7]').val(),    
      user_phone      = $('input[name=phone7]').val(),
	  user_text      = $('textarea[name=texx]').val(),
	        queryString = parseQuery($(location).attr('search').substr(1));
      params = ""
       	for(property in queryString) {
       		params += " "+property+"="+queryString[property];
       	}
      proceed         = true;
  
  if(user_name==""){ 
    $('input[name=name7]').removeClass('error accepted processing');
    $('input[name=name7]').addClass('error'); 
    proceed = false;
  }

  if(user_phone=="") {    
    $('input[name=phone7]').removeClass('error accepted processing');
    $('input[name=phone7]').addClass('error');
    proceed = false;
  }
  
  if( $('input[name=name7]').hasClass('accepted') && $('input[name=phone7]').hasClass('accepted')){
  } else {
    proceed = false;
  }

  if(proceed) 
  {
			
    //data to be sent to server			
    var post_data = new FormData();    
    post_data.append( 'userName', user_name);
    post_data.append( 'userPhone', user_phone);
	post_data.append( 'userText', user_text);
post_data.append( 'utm', params);
    /* отправляем данные из формы на сервер через ajax*/
    $.ajax({
      url: 'js/help6.php',
      data: post_data,
      processData: false,
      contentType: false,
      type: 'POST',
      dataType:'json',
      success: function(data){
        //load json data from server and output message     
        if(data.type == 'error')
        {
          output = '<div class="error">'+data.text+'</div>';
        }else{
          output = '<div class="success">'+data.text+'</div>';

          //reset values in all input fields
          $('.md-content input').val(''); 
          $('.md-content input').removeClass('accepted');
          $('.md-content textarea').val(''); 
		  yaCounter32216254.reachGoal('proizvel');
		  ga('send', 'event', 'zayavk', 'senten', 'proizvodit');
        }
        $('.md-content').fadeTo("slow", 0, function(){
          $("#result7").html(output);
          $("#result7 ").hide().delay(0).fadeOut("slow", 0, function(){
            $('.md-modal').removeClass('md-show');
          });
        })
//        $("#result ").hide().html(output).slideDown(); //show results from server
      }
    });
  }
  
});






// Опросник
$('.luche').on('click', function(){
  
  var user_name       = $('input[name=name8]').val(),    
      user_phone      = $('input[name=phone8]').val(),
	  user_text      = $('textarea[name=texx2]').val(),
      user_message    = $('checkbox[name=manquest3]').val(),
      user_add         = ""; 
	    $(".switch:checked").each(function(index, el) {
        	user_add += " " + $(this).next("label").text();
        }),
		      queryString = parseQuery($(location).attr('search').substr(1));
      params = ""
       	for(property in queryString) {
       		params += " "+property+"="+queryString[property];
       	}
   proceed = true;
  
  if(user_name==""){ 
    $('input[name=name8]').removeClass('error accepted processing');
    $('input[name=name8]').addClass('error'); 
    proceed = false;
  }

  if(user_phone=="") {    
    $('input[name=phone8]').removeClass('error accepted processing');
    $('input[name=phone8]').addClass('error');
    proceed = false;
  }
  
  if( $('input[name=name8]').hasClass('accepted') && $('input[name=phone8]').hasClass('accepted')){
  } else {
    proceed = false;
  }

  if(proceed) 
  {
			
    //data to be sent to server			
    var post_data = new FormData();    
    post_data.append( 'userName', user_name);
    post_data.append( 'userPhone', user_phone);
	post_data.append( 'userText', user_text);
	post_data.append( 'utm', params);
post_data.append( 'user_add', user_add);
    /* отправляем данные из формы на сервер через ajax*/
    $.ajax({
      url: 'js/help7.php',
      data: post_data,
      processData: false,
      contentType: false,
      type: 'POST',
      dataType:'json',
      success: function(data){
        //load json data from server and output message     
        if(data.type == 'error')
        {
          output = '<div class="error">'+data.text+'</div>';
        }else{
          output = '<div class="success">'+data.text+'</div>';

          //reset values in all input fields
          $('.md-content input').val(''); 
          $('.md-content input').removeClass('accepted');
          $('.md-content textarea').val(''); 
		  yaCounter32216254.reachGoal('detali2');
        }
        $('.md-content').fadeTo("slow", 0, function(){
          $("#result8").html(output);
          $("#result8 ").hide().delay(0).fadeOut("slow", 0, function(){
            $('.md-modal').removeClass('md-show');
          });
        })
//        $("#result ").hide().html(output).slideDown(); //show results from server
      }
    });
  }
  
});





var validateString = function(object){
  var objectContent = object.val(),
      typeOfObject = 'Неизвестно',
      accepted = true;
  if(object.hasClass('name')){
    typeOfObject = 'name';
    console.log('Это имя')
    if(objectContent.length < 2){
      $('<p>Недостаточное количество знаков</p>').insertAfter(object);
      accepted = false;
    } 
//    if(/^[A-Za-z\u0400-\u04FF\s]+$/.test(objectContent)){
//      
//    } else {
//      console.error('Поле имени должно содержать только буквы');
//      accepted = false;
//    }
  } else if(object.hasClass('email')){
    typeOfObject = 'email';
    if(/^[-!#$%&'*+/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&*+/0-9=?A-Z^_a-z{|}~])*@[a-zA-Z](-?[a-zA-Z0-9])*(\.[a-zA-Z](-?[a-zA-Z0-9])*)+$/.test(objectContent)){

    } else {
       $('<p>Введите корректный адрес эл.почты</p>').insertAfter(object);
      accepted = false;
    }
  }
  if (accepted)
    {
      if(object.hasClass('accepted')){
        object.removeClass('error processing')
      } else{
        object.addClass('accepted');
        object.removeClass('error processing');
        object.next('p').remove();
//        console.log('Все хорошо, можно отправлять... Accepted = ', accepted)
      }
    } else {
      if(object.hasClass('error')){
        object.removeClass('accepted processing');
//        console.log('Все плохо, нельзя отправлять... Accepted = ', accepted)
      } else {
        object.removeClass('accepted processing');
//        console.log('Все плохо, нельзя отправлять... Accepted = ', accepted);
        object.addClass('error');}
    }
  console.log(typeOfObject);
  return accepted;
  
}
$('.md-content input').on('focus input keyup paste', function(){
    $(this).removeClass('accepted error processing');
    $(this).addClass('processing');
//    validateString($(this));

})

$('.md-content input').on('focusout', function(){
   if(!$.trim(this.value).length){
     $(this).removeClass('accepted error processing');
     $(this).next('p').remove();
   } else {
    validateString($(this));
   }
})

$('.feadbacka input').on('focus input keyup paste', function(){
    $(this).removeClass('accepted error processing');
    $(this).addClass('processing');
//    validateString($(this));

})

$('.feadbacka input').on('focusout', function(){
   if(!$.trim(this.value).length){
     $(this).removeClass('accepted error processing');
     $(this).next('p').remove();
   } else {
    validateString($(this));
   }
});





	

var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);


function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
//    var geocoder = new ymaps.geocode(
//            // Строка с адресом, который нужно геокодировать
//            'г.Москва ул. Антонова-Овсеенко 15с1',
//            // требуемое количество результатов
//            { results: 1 }
//        );
//     geocoder.then(
//                function (res) {
//    var coord = res.geoObjects.get(0).geometry.getCoordinates()
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [55.756969, 37.535610],
        zoom: 16,
        behaviors: ["default"]
    });
    office = new ymaps.Placemark([55.756969, 37.535610], {
            hintContent: 'Наш офис'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
             iconImageHref: 'images/fav.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0]
        });             
    myMap.geoObjects.add(office);
//                })
}

