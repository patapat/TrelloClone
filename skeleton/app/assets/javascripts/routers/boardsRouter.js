TrelloClone.Routers.Boards = Backbone.Router.extend({
  routes: {
    "" : "index",
    "boards/:id": "boardShow"
  },

  initialize: function (options) {
    this.$rootEl = $('#main');
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
    board.fetch({
      success: function () {
        var boardShow = new TrelloClone.Views.BoardsShow({ model: board });
        that._swapView(boardShow);
      }
    });

  },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;

    this.$rootEl.html(view.render().$el);
  }
});
