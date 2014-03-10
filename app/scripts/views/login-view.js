//Once logged in or signed up...function that initializes user view and message board

var LoginView = Parse.View.extend({
	
	createTemplate: _.template($('#login-template').text()),

	events: {
		'click #signup-btn': 'signUpUser',
		'click #login-btn': 'logInUser',
	},

	initialize: function(){
		$('body').html(this.el);

		this.render();
	},

	render: function(){
		this.$el.html(this.createTemplate());
	},

	signUpUser: function(){
		var user = new Parse.User();
		
		var username = $('#user-name').val();
		var pswd = $('#user-pswd').val();
		var email = $('#user-email').val();
		// var userAvatar = $('#user-avatar')[0];
			//look into storing a file if time...should only need a couple of more lines
			//get into email verification better

		user.set("username", username);
		user.set("password", pswd);
		user.set("email", email);

		user.signUp(null, {
			success: function(user){
				currentUser = Parse.User.current();
				clearModal();
				loadPage();
			},
			error: function(user, error){
				console.log('Oopz! We could not sign you up!' + error);
			}
		});
	},

	logInUser: function(){
		var returningUser = $('#returning-user-name').val();
		var returningUserPswd = $('#returning-user-pswd').val();
		
		Parse.User.logIn(returningUser, returningUserPswd, {
			success: function(user){
				currentUser = Parse.User.current();

				loadPage();
				//$('#myModal').modal('hide');
				//clearModal();

				//Change login to logout
				$(this).hide();
				$('#logout-btn').show();
				
				console.log('here?');			
			},
			error: function(user, error){
				console.log('Oopz! You could not be logged in!' + error);
			}
		});
	}
});

//put these somewhere inside the view?
function clearModal() {
	$('#modal input').each(function() {
		$(this).val('');
	});
}

function loadPage(){

	$('.left-side').show();
	$('.message-stream').show();
	$('.footer').show();
	
	console.log('here in loadpage');

	new UserView();
	messages.fetch({
		success: function(){
			messages.each(function(message){
				console.log(messages)
				new ListView({model: message});
			});
		}
	});	

	$('#start-app').hide();
	$('#logout-btn').show();
}
