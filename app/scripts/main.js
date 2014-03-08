console.log('\'Allo \'Allo!');

$(document).ready(function(){
	Parse.initialize("fTnob4g9ivFWWMunx5p5tq2X2Fp4U6T56uTzd96n", "tMj1YBzrbJ4IIxCj72j7JVXy0VOVrFHJ6z9h7m4m");

	window.messages = new MessagesCollection();

	//$('#login-btn').attr('data-dismiss', 'modal');

	$('#start-app').click(function(event){
		event.preventDefault();
		new UserView;
	});
	
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

	//Needs to bw switched once I get login working

	
// 	$('send-btn').click(function(){
// 	var message = new MessageClass();

// 		var msgContents = $('#message-data').val();

// 		//save new message to message collection 
// 		message.set('messageContents', msgContents);
// 		messages.add(message);

// 		//set message.createdAt to readable timestamp

// 		message.save(null,{
// 			successs: function(result){
// 				console.log('Sweet! Message saved!');
// 			},
// 			error: function(result, error){
// 				console.log(error.description);
// 			}

// 			});
// 	});	
	
});