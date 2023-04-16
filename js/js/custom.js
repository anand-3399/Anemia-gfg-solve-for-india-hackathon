$(document).ready(function() {
	$('.chat_icon').click(function() {
		$('.chat_box').toggleClass('active');
	});

	$('.my-conv-form-wrapper').convform({selectInputStyle: 'disable'})
});
function funct() {
    var txt;
    var r = confirm("Your Appointment have been confirm\nDetailes will be send via your email and phone number");
    if (r == true) {
      txt = "Confirmed!!!";
    } else {
      txt = "You pressed Cancel!";
    }
    // document.getElementById("demo").innerHTML = txt;
  }