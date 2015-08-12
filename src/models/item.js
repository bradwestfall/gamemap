var Backbone = require('backbone');


/****************************************
  App
*****************************************/

var App = require('../app');


/****************************************
  Model: Map
*****************************************/

var ItemModel = Backbone.Model.extend({
  url: function() {
    var base = App.Settings.apiRoot + '/items';
    if (this.isNew()) return base;
    return base + '/' + this.id
  }
});

module.exports = ItemModel;
