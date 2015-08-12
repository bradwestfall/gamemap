var Backbone = require('backbone');

// App
var App = require('./app');

// View: Map
var MapView = require('./views/map');
App.Views.mapView  = new MapView;

// View: Edit Map
var EditMapView = require('./views/edit-map');

// App Router
App.Router = Backbone.Router.extend({

  // Route definitions
  routes: {
    '': 'index',
    'map/:name/edit(/)': 'editMap',
    'map/:name(/)': 'playMap',
    '*actions': 'defaultRoute'
  },

  index: function() {
    $('.map').html('<a href="/#/map/foo">View Map</a>');
  },

  editMap: function(name) {
    App.Views.editMapView  = new EditMapView;
    App.Views.editMapView.render(name);
  },

  playMap: function(name) {
    App.Views.mapView.render(name);
  },

  defaultRoute: function(actions) {
    console.log('404');
  }

});

// Initiate the router
App.router = new App.Router;

Backbone.history.start();
