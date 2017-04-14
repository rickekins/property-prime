$(document).ready(function(){
	console.log('serializedData: ', serializedData);
	$('button.newLogin').click(function(){
		var login = {
			name: $('input[name="name"]'),
			password: $('input[name="password"]')
		}
		$.post( "/new-login", serializedData)
		.done(function( data ) {
		alert( "Data Loaded: " + data );
		});
	});

});