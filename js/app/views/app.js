define([
	'jquery',
	'underscore',
	'backbone',
	'app/views/counter'
], function($, bootstrap, Backbone, CounterView){

	'use strict';

	var AppView = Backbone.View.extend({
		id: 'app-view',

		html: [
			'<div class="navbar navbar-default">',
				'<a class="navbar-brand" href="#">Weather Watcher</a>',
				'<ul class="nav navbar-nav">',
					'<li id="nav-dash"><a href="#">Dashboard</a></li>',
					'<li id="nav-about"><a href="#">About</a></li>',
				'</ul>',
			'</div>',
			'<div id="content"></div>'
		].join(''),

		events: {
			'click #nav-dash' : 'onNavDash',
			'click #nav-about': 'onNavAbout'
		},

		views: {},

		initialize: function(){

			this.views['counter'] = new CounterView({
				id: 'counter-widget',
				classname: 'counter-widget'
			});

			this.$el.append(this.html);

			this.$('#content').append(this.views['counter'].render().el);
		},

		onNavDash: function(){
			console.log("Dash button clicked");
		},

		onNavAbout: function(){
			console.log("About button clicked");
		}



	});

	return AppView;

});