TrelloClone.Collections.Lists = Backbone.Collection.extend({
  comparator: 'ord',

  model: TrelloClone.Models.List,

  url: 'api/lists',

  initialize: function (models, options) {
    // debugger;
    // this.board = options.board;
  }
});
