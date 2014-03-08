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


		user.set("username", username);
		user.set("password", pswd);
		user.set("email", email);

		user.signUp(null, {
			success: function(user){
				currentUser = Parse.User.current();
				clearModal();
				$('#signup-btn').attr('data-dismiss', 'modal')
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
			success: function(){
				currentUser = Parse.User.current();
				clearModal();
				console.log('here?');
				loadPage();				
			},
			error: function(user, error){
				console.log('Oopz! You could not be logged in!' + error);
			}
		});

		$('#login-btn').attr('data-dismiss', 'modal');
	}
});


function loadPage(){
	//load user column
	new UserView();
	
	//load message stream
	messages.fetch({
		success: function(){
			messages.each(function(message){
				new ListView({model: message});
			});
		},
		error: function(){
			console.log('Just kidding! You cant fetch this stuff')
		}
	});

}

function clearModal() {
	$('#modal input').each(function() {
		$(this).val('');
	});
}

