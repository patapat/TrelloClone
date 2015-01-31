TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({

  template: JST['boards/boards_index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function () {
    var that = this;
    var newBoard = new TrelloClone.Models.Board();
    var newBoardForm = new TrelloClone.Views.BoardsForm();
    var renderedContent = this.template();

    this.$el.html(newBoardForm.render().$el);
    this.$el.append(renderedContent);


    TrelloClone.boards.each(function (board) {
      var indexItemView = new TrelloClone.Views.BoardsIndexItem({model: board});
      that.$el.find('ul').append(indexItemView.render().$el);
    });

    return this;
  }
});
