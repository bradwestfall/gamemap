var $ = require('jquery');
var Backbone = require('backbone');
var mapTileTemplate = require('../templates/map-tile.hbs');

/****************************************
  App
*****************************************/

var App = require('../app');
App.Models.Map = require('../models/map');
App.Collections.item = require('../collections/item');

/****************************************
  Map View
*****************************************/

var MapView = Backbone.View.extend({
    
    el: $('.map'),

    render: function (name) {
        var _this = this;
        _this.model = new App.Models.Map({id: 1});

        _this.$tileContainer = $('<div class="tile-container"></div>');
        _this.$el.html(_this.$tileContainer);

        _this.model.fetch().done(function(map) {
            
            // Create all the tiles
            _this.setTiles(map.settings);

            // Adjust the tile-container's width to accomodate the
            // correct number of floating tiles
            _this.$tileContainer.css({
                'width': (map.settings.tilesX * 50) + 'px',
                'height': (map.settings.tilesY * 50) + 'px',
            })

            // Render Specific Tiles
            _this.renderItems(map.tiles);



        });
    },

    setTiles: function(settings) {
        var tileArray = [];

        for (var x = 1; x <= settings.tilesX; x++) {
            for (var y = 1; y <= settings.tilesY; y++) {

                // var coordX = (x * 50) - 50;
                // var coordY = (y * 50) - 50;

                var tileDiv = mapTileTemplate({
                    x: x, y: y
                })
                tileArray.push(tileDiv);
            }
        }

        this.$tileContainer.append(tileArray.join(''));

    },

    renderItems: function(tiles) {
        var _this = this;
        tiles.forEach(function(tile) {
            if (tile.item) _this.updateTile(tile);  
        });
    },

    updateTile: function(tile) {
        _this = this;
        var $tile = _this.$el.find('.tile[data-x="' + tile.x + '"][data-y="' + tile.y + '"]')
        //$div.addClass('terrain-' + tile.terrain);

        // Temp
        var itemModel = App.Collections.item.first()

        var $item = $(document.createElement('div'))
            .addClass('item-' + itemModel.get('type'))
            .addClass('item-variation-' + tile.itemVariation);

        $tile.append($item);

    }

});

module.exports = MapView;