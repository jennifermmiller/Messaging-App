//class you're storing models in must be the first argument
var MessageClass = Parse.Object.extend('MessageClass');

var MessagesCollection = Parse.Collection.extend({
	model: MessageClass,

	//this should probably be put into a router or masterview, 
	//in general don't want collection responisble rendering views
	initialize: function(){
		this.on('add', function(message){
			new ListView({model: message});
		});
	},

	comparator: function(message){
		return message.get('createdAt');
	}
});

//if time...users collection?