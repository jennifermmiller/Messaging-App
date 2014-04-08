//Once logged in or signed up...function that initializes user view and message board

var LoginView = Parse.View.extend({
	
	createTemplate: _.template($('#login-template').text()),

	events: {
		'click #signup-btn': 'signUpUser',
		'click #login-btn': 'logInUser',
	},

	initialize: function(){
		$('body').append(this.el);

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

		user.set('username', username);
		user.set('password', pswd);
		user.set('email', email);

		var fileUploadControl = $('#user-avatar')[0];

		if (fileUploadControl.files.length > 0) {
			var file = fileUploadControl.files[0];
			var name = 'photo.jpg';

			var parseFile = new Parse.File(name, file);

			parseFile.save().then(function(){
				user.set('avatar', parseFile);
				user.save();
			}); 
		} else {
			console.log('An error saving avatar occured.');
		}

		user.signUp(null, {
			success: function(user){
				currentUser = Parse.User.current();
			},
			error: function(user, error){
				console.log('Oopz! We could not sign you up!' + error);
			}
		}).then(function(){
			clearModal();
			loadPage();
		});
	},

	logInUser: function(){
		var returningUser = $('#returning-user-name').val();
		var returningUserPswd = $('#returning-user-pswd').val();
		
		Parse.User.logIn(returningUser, returningUserPswd, {
			success: function(user){
				currentUser = Parse.User.current();
			},
			error: function(user, error){
				console.log('Oopz! You could not be logged in!' + error);
			}
		}).then(function(){
			clearModal();
			loadPage();

			//Change login to logout
			$(this).hide();
			$('#logout-btn').show();
		});
	}
});