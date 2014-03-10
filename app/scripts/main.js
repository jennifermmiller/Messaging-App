//figure out how to sort messages newest to oldest
//Need to fetch on a loop or lookinto web sockets?

console.log('\'Allo \'Allo!');

$(document).ready(function(){
	Parse.initialize("fTnob4g9ivFWWMunx5p5tq2X2Fp4U6T56uTzd96n", "tMj1YBzrbJ4IIxCj72j7JVXy0VOVrFHJ6z9h7m4m");

	window.messages = new MessagesCollection();

	

	// $('#start-app').click(function(){
	// 	console.log('huh?');
		
	// 	new LoginView();
	// });

//Working without login:
	$('#start-app').click(function(){
		new UserView();
		$('.left-side').show();
		$('.message-stream').show();
	});	
	messages.fetch({
		success: function(){
			messages.each(function(message){
				console.log(messages)
				new ListView({model: message});
			});
		}
	});

	//Might have to fix this if I get login working
	$('#logout-btn').click(function(){
		Parse.User.logOut();
		currentUser = Parse.User.current();

		$('.left-side').hide();
		$('.message-stream').empty().hide();

		$(this).hide();
		$('#start-app').show();
	})

});	
	
//Put this somewhere?	
function getMessages(){	
	messages.fetch({
		success: function(){
			messages.each(function(message){
				console.log(messages)
				new ListView({model: message});
			});
		},
		error: function(){
			console.log('Just kidding! You cant fetch this stuff')
		}
	});
}

function loadPage(){
	
	$('.left-side').show();
	$('.message-stream').show();
	
	new UserView();
	console.log('view')
	getMessages();

	$(this).hide();
	$('#logout-btn').show();
}

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
	
