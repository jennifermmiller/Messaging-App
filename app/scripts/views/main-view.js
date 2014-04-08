var MainView = Parse.View.extend({
	
	events:{
		'click #start-app': 'lauchApp',
		'click #logout': 'logOut'
	},

	initialize: function(){
		this.messages = new MessagesCollection();
	},

	lauchApp: function(){
		new LoginView();
	},

	logOut: function(){
		Parse.User.logOut();
		currentUser = Parse.User.current();

		$('.left-side').hide();
		$('.message-stream-plus-header').empty().hide();

		$(this).hide();
		$('#start-app').show();
	}
});