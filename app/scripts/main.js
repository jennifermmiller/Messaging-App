//When I come back to refactor this:
	// Clean up collection, so that it's not responsible for rendering views
	// have defualt image for users that don't choose avatar
	// email verification?
	// max char for username?
	// Different error for usernames already in use 
	// Put main.js anf helper function into backbone mainview?
	// Add media queries to CSS
	// Add list of currents users or friends?

console.log('Welcome!');

$(document).ready(function(){
	Parse.initialize("fTnob4g9ivFWWMunx5p5tq2X2Fp4U6T56uTzd96n", "tMj1YBzrbJ4IIxCj72j7JVXy0VOVrFHJ6z9h7m4m");

	window.messages = new MessagesCollection();

	$('#start-app').click(function(event){
		event.preventDefault();
		new LoginView();
	});

	$('#logout-btn').click(function(event){
		event.preventDefault();
		Parse.User.logOut();
		currentUser = Parse.User.current();

		$('.left-side').hide();
		$('.message-stream-plus-header').hide();
		$('.message-stream').empty();

		$(this).hide();
		$('#start-app').show();
	});
});

//Helper functions:
function clearModal() {
	$('#user-name').val('');
	$('#user-pswd').val('');
	$('#user-email').val('');
	$('#user-avatar').val('');

	$('#returning-user-name').val('');	
	$('#returning-user-pswd').val('');	
}

function loadPage(){
	//Load messages
	messages.fetch({
		success: function(){
			messages.sort();
			messages.each(function(message){
				new ListView({model: message});
			});
		},
	});	
	
	//Display page
	$('.message-stream-plus-header').show();
	$('#start-app').hide();
	$('#logout-btn').show();
	$('.left-side').show();

	new UserView();
}