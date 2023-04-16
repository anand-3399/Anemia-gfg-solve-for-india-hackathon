let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
})

function myFunction() {
    var x = document.getElementById("book-form");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
  }
 
 
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }


  portfolioList = document.querySelectorAll('.portfolio-box');
	portfolioList.forEach(function(portfolioPic) {
		portfolioPic.addEventListener('click',function(){
			bg = this.style.backgroundImage;
			document.getElementById('port_pop_pic_bg').classList.add("active")
			document.getElementById('port_pop_pic').style.backgroundImage = bg
			document.getElementById('port_pop_pic').classList.add("active")
		});	
	})
	document.getElementById('port_pop_pic_bg').addEventListener('click',function(){
			document.getElementById('port_pop_pic_bg').classList.remove("active")
			document.getElementById('port_pop_pic').classList.remove("active")
	})

