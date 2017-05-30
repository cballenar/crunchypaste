//Resize textarea to fit screen
function textarea_resize()
{
	$('.cpInTex').css({'height': $(window).height() - 460});
}

$(document).ready(function(){
	var textarea = $('.cpInTex'); //The textarea input

	//Resize textarea
	textarea_resize();
	
	if(window.location.pathname != '/')
	{
		$('.cpViewText, .cpPasteInfo, .cpFormEdit').show();
		//Get + Parse json for paste
		$.getJSON('py/pull.py', {'action': 'getpaste', 'id': window.location.pathname.substr(1)}, function(data)
		{
			$('.cpPasteHere').text(data[2]).show();
			$('.cpPasteInfo').text(['A ', data[3], ' paste written in ', data[0], ' (expires ', data[1], ')'].join(''));
			$('head').append('<style type="text/css">' + data[5] + '</style>')
			$('.cpViewText').html(data[4]);
	   });
	}
	else
	{
		//Unhide form fields
		$('.cpFormMain, .cpInTex, .cpPasteHere, .cpFormSubmit').show();
	}
});

//Resize the textarea if the window is resized
$(window).resize(function() {
	textarea_resize();
});

//Redirect to main page when title is clicked
$("h1").click(function()
{
	window.location.href = "/";
});