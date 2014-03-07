console.log('\'Allo \'Allo!');

$(document).ready(function(){
	Parse.initialize("fTnob4g9ivFWWMunx5p5tq2X2Fp4U6T56uTzd96n", "tMj1YBzrbJ4IIxCj72j7JVXy0VOVrFHJ6z9h7m4m");
	
	var messages = new MessagesCollection();


	$('#start').click(function(){
		new UserView();
	})


});