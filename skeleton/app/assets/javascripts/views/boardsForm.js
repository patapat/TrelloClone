TrelloClone.Views.BoardsForm = Backbone.CompositeView.extend({

  template: JST['boards/boards_form'],

  className: 'boards-form',

  events: {
    "submit form": "createBoard"
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    return this;
  },

  createBoard: function (event) {
    event.preventDefault();

    var formData = $(event.currentTarget).serializeJSON();
    var newBoard = new TrelloClone.Models.Board(formData.board);

    newBoard.save({}, {
      success: function () {
        TrelloClone.boards.add(newBoard);
        Backbone.history.navigate("/boards/" + newBoard.id, {trigger: true});
      }
    });
  }
})
