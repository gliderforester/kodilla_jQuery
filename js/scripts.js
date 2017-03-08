$(function(){
/* $('span').each(function(index, element) {
	if(index % 2 == 0) {
		$(element).css('color', 'red');
	}
});*/

 $('span:odd').css('color', 'red');


	$('p').each(function(index, element) {
		var button = '<button class="btn" data-tmp="' + index + '"> Naciśnij </button>'
		$(element).append(button);
	});

	$('button').on('click', function(){
		alert($(this).attr("data-tmp"));
	});


});
