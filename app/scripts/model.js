//class youre storing models in must be the first argument
var MessageClass = Parse.Object.extend("MessageClass");

var MessagesCollection = Parse.Collection.extend({
	model: MessageClass,

	initialize: function(){
		this.on('add', function(message){
			new ListView({model: message})
		});
	// 	this.fetch();
	}
});

//if time...users collection?

