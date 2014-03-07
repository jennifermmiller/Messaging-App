//class youre storing models in must be the first argument
var MessageClass = Parse.Object.extend("MessageClass");

var MessagesCollection = Parse.Collection.extend({
	model: MessageClass
});

//one day, users or current users collection?

