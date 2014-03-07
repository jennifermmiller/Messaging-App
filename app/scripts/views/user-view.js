//UserView - where you see user profile and can submit new tweets
var UserView = Parse.View.extend({
	className: 'user-action',

	events:{
		'click #send-btn': 'sendMsg'
	},

	template: _.template($('#user-template').text()),

	initialize: function(){
		$('.user-info').html(this.el);

		this.render();
	},

	render: function(){
		var renderedTemplate = this.template(); //pass in user info

		this.$el.html(renderedTemplate);
	},

	sendMsg: function(){
		console.log('here?');

		var message = new MessageClass;

		var msgContents = $('#message-data').val();

		//save new message to message collection 
		message.set('messageContents', msgContents);

		message.save(null,{
			successs: function(result){
				console.log('Sweet! Message saved!');
			},
			error: function(result, error){
				console.log(error.description);
			}
		});

		new ListView({model: message});

		$('#message-data').val('');
	}
});
