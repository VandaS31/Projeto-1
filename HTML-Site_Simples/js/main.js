//menu
  $(document).ready(function(){
	$('#nav-menu').click(function(){
		$('ul.nav-list').addClass('open').slideToggle('200');
	});
});
$(document).ready(function(){
    $('#nav-menu').click(function(){

			if( ( $('ul.nav-list').hasClass('open') ) ) {

				$('ul.nav-list').removeClass('open');

			}else{

				$('ul.nav-list').addClass('open');

			}

    });
   
});
