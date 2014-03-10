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
		var email = $('#user-email').val();  //get into email verification better
		var fileUploadControl = $('#user-avatar')[0];
			
			if (fileUploadControl.files.length > 0) {
			  var file = fileUploadControl.files[0];
			  var name = 'photo.jpg';
			 
			  var parseFile = new Parse.File(name, file);
			}

			parseFile.save().then(function() {
				user.set("avatar", parseFile);
			  	console.log("Yay! Your avatar has been saved!");
			});

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
				clearModal();

				//Change login to logout
				$(this).hide();
				$('#logout-btn').show();
				
				console.log(currentUser);			
			},
			error: function(user, error){
				console.log('Oopz! You could not be logged in!' + error);
			}
		});
	}
});

//put these somewhere inside the view?

//Input not clearing........This needs to be fixed!
function clearModal() {
	$('#modal input').each(function() {
		$(this).val('');
	});
}

function loadPage(){
	$('.left-side').show();
	$('.message-stream-plus-header').show();
	$('.footer').show();

	new UserView();
	
	messages.fetch({
		success: function(){
			messages.sort();
			messages.each(function(message){
				console.log(messages)
				new ListView({model: message});
			});
		},
	});	

	$('#start-app').hide();
	$('#logout-btn').show();
}
