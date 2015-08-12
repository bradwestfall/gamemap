var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('lodash');

/****************************************
  App
*****************************************/

var App = require('../app');

// View: Map
var MapView = require('./map');
App.Views.mapView  = new MapView;


/****************************************
  Map View
*****************************************/

var MapView = Backbone.View.extend({
    
    el: $('.map'),

    events: {
        'click .tile': 'tileClick'
    },

    render: function (name) {

        // Render Map
        App.Views.mapView.render();

        this.model = App.Views.mapView.model;

    },

    tileClick: function(event) {
        
        var x = $(event.target).data('x');
        var y = $(event.target).data('y');

        var tiles = this.model.get('tiles');

        var newTile = {
              x: x,
              y: y,
              terrain: "grass",
              item: "tree",
              itemVariation: _.random(1, 5)
        }

        tiles.push(newTile);
        
        this.model.set('tiles', tiles);
        this.model.save();

        App.Views.mapView.updateTile(newTile);

    }

});

module.exports = MapView;