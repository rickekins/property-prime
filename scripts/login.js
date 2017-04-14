$(document).ready(function(){
	$('form[name="createNewLogin"]').on('submit', function(){
	var serializedData = $(this).serialize();
	console.log('serializedData: ', serializedData);

	$.post( "/new-login", serializedData)
	  .done(function( data ) {
	    alert( "Data Loaded: " + data );
	  });

	});
});