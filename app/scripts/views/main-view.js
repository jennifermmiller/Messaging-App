var MainView = Parse.View.extend({
	
	events:{
		'click #start': 'lauchApp',
		//'click #logout': 'logOut'
	},

	lauchApp: function(){
		new LoginView();
	}

});