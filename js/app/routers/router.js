define([
	'jquery',
	'underscore',
	'backbone'
], function($, _ , Backbone){

	'use strict';

	var Router = Backbone.Router.extend({
		
		routes: {
			'': 'goToDash',
			'dash': 'goToDash',
			// You can pass in variables using the : colon the next 
			//  next  value will be counted as a variable.
			'dash/:place': 'goToDash',
			'about': 'goToAbout'
		},

		initialize: function(view){
			this.appView = view;
		},

		// function can take the parameter passed in as a varible 
		goToDash: function(place){
			this.appView.setPage('dash');

			// Alert if place is not undefined
			if(place){
				alert('Weather detail for ' + place);
			}
		},

		goToAbout: function(){
			this.appView.setPage('about');
		}

	});

	return Router;

});