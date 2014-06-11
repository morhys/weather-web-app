define([
	'jquery',
	'underscore',
	'backbone',
	'app/views/dash',
	'app/views/about',
], function($, bootstrap, Backbone, DashView, AboutView){

	'use strict';

	var AppView = Backbone.View.extend({
		id: 'app-view',

		html: [
			'<div class="navbar navbar-default">',
				'<a class="navbar-brand" href="#">Weather Watcher</a>',
				'<ul class="nav navbar-nav">',
					'<li id="nav-dash"><a href="#dash">Dashboard</a></li>',
					'<li id="nav-about"><a href="#about">About</a></li>',
				'</ul>',
			'</div>',
			'<div id="content"></div>'
		].join(''),

		events: {
	
		},

		views: {},

		initialize: function(){

			this.views['about'] = new AboutView({
				id: 'page-about',
				className: 'page-view'
			});

			this.views['dash'] = new DashView({
				id: 'page-dash',
				className: 'page-view'
			});

			this.$el.append(this.html);

			this.$('#content').append(this.views['about'].render().el);
			this.$('#content').append(this.views['dash'].render().el);
		},

		setPage: function(page){

			this.$('.nav li').removeClass("active");
			this.$('#nav-'+page).addClass("active");

			// Hide all the pages with class .page-view when setting new page
			this.$('.page-view').hide();
			// Set the page to the correct id
			this.$('#page-'+page).show();

		}



	});

	return AppView;

});