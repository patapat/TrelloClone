TrelloClone.Routers.Boards = Backbone.Router.extend({
  routes: {
    "" : "index",
    "boards/:id": "boardShow"
  },

  initialize: function (options) {
    // this.$rootEl = options.$rootEl;
  },

  index: function () {
    var that = this;
    TrelloClone.boards.fetch({
      success: function () {
        var indexView =
          new TrelloClone.Views.BoardsIndex({ collection: TrelloClone.boards});
        that.$rootEl.append(indexView.render().$el);
      }
    });
  },

  boardShow: function (id) {
    var that = this;
    var board = TrelloClone.boards.getOrFetch(id);
    debugger;
    board.fetch({
      success: function () {
        var boardShow = new TrelloClone.Views.BoardsShow({ model: board });
        that.$rootEl.find('#lists').html(boardShow.render().$el);
      }
    });
  }
});
