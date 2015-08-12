var Backbone = require('backbone');


/****************************************
  App
*****************************************/

var App = require('../app');


/****************************************
  Model: Map
*****************************************/

var MapModel = Backbone.Model.extend({
  url: function() {
    var base = App.Settings.apiRoot + '/maps';
    if (this.isNew()) return base;
    return base + '/' + this.id
  }
});

module.exports = MapModel;
