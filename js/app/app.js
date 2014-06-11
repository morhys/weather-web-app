define([
	'app/views/app',
	'app/routers/router'
], function(AppView, Router){

	'use strict';

	var initialize = function(){

		var appView = new AppView();
		$('body').append(appView.el);

		// create a new instance of the Router passing in the main app view
		var router = new Router(appView);
		// initialize monitoring of the url links that need to be converted into actions
		Backbone.history.start();

	}

	return {
		initialize : initialize
	}

});