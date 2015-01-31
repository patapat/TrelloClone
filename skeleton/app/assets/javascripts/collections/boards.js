TrelloClone.Collections.Boards = Backbone.Collection.extend({
  model: TrelloClone.Models.Board,

  url: "/api/boards",

  getOrFetch: function (id) {
    var board = this.get(id);
    var that = this;
    if (board) {
      board.fetch();
    } else {
      var board = new TrelloClone.Models.Board({ id: id });
      TrelloClone.boards.fetch({
        success: function () {
          that.add(board);
        }
      });
    }

    return board;
  }
});
