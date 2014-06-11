define([
	'app/views/app'
], function(AppView){

	'use strict';

	var initialize = function(){
		var appView = new AppView();
		$('body').append(appView.el);
		//$('body').append(appView.render().el);
	}

	// var initialize = function(){
	// 	$('body').append('<div id="' + id + '"></div>');
	// }

	// var id = "content";

	// var getId = function(){
	// 	return id;
	// }

	// var getTimeString = function(){
	// 	var date = new Date();
	// 	return [date.getHours(), ':', date.getMinutes()].join('');
	// };

	// var displayTime = function(){
	// 	var html = [
	// 		'<div class="alert alert-warning">',
	// 			'<button type="button" class="close" data-dismiss="alert">&times;</button>',
	// 			'The time is: ',
	// 			getTimeString(),
	// 		'</div>'
	// 	].join('');
	// 	$('#' + id).html(html);
	// };


	return {
		initialize : initialize
	}

});