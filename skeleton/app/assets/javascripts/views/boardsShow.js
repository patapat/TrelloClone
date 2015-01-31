TrelloClone.Views.BoardsShow = Backbone.CompositeView.extend({
  template: JST['boards/boards_show'],

  render: function () {
    var renderedContent = this.template({ board: this.model });
    this.$el.html(renderedContent);
    this.model.lists();

    return this;
  },

  addList: function (list) {
    var listView = new TrelloClone.Views.ListView({ model: list });
    this.addSubView('#lists', listView);
  },

  renderLists: function () {
    this.model.lists().each(this.addList.bind(this));
  },

  renderListForm: function () {

  }

});
