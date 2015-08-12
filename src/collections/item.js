var Backbone = require('backbone');


/****************************************
  App
*****************************************/

var App = require('../app');
App.Models.Item = require('../models/item');


/****************************************
  Collection: Item
*****************************************/

var ItemCollection = Backbone.Collection.extend({
  url: App.Settings.apiRoot + '/items',
  model: App.Models.Item
});

App.Collections.item = new ItemCollection;
App.Collections.item.fetch();

module.exports = App.Collections.item;
