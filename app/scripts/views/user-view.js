//UserView - where you see user profile and can submit new tweets
var UserView = Parse.View.extend({

	events:{
		'click #send-btn': 'sendMsg'
	},

	template: _.template($('#user-template').text()),

	initialize: function(){
		$('.user-info').html(this.el);

		this.render();
		console.log('render')
	},

	render: function(){
		var renderedTemplate = this.template();

		this.$el.html(renderedTemplate);
	},

	sendMsg: function(){
		console.log('here?');

		var message = new MessageClass();

		var msgContents = $('#message-data').val();
		//var sentFrom = currentUser.get('username');
		var timeStamp = moment().format('MMM Do YY, h:mm a');

		message.set('messageContents', msgContents);
		//message.set('author', sentFrom);
		message.set('time', timeStamp);

		messages.add(message);

		message.save(null,{
			successs: function(result){
				console.log('Sweet! Message saved!');
			},
			error: function(result, error){
				console.log(error.description);
			}
		});

		$('#message-data').val('');
	}
});
