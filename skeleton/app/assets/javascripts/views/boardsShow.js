TrelloClone.Views.BoardsShow = Backbone.CompositeView.extend({
  template: JST['boards/boards_show'],

  initialize: function () {
    this.collection = this.model.lists();
    this.listenTo(this.collection, "add", this.addList);
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({ board: this.model });
    this.$el.html(renderedContent);
    this.model.lists();
    this.renderLists();
    this.renderListForm();

    return this;
  },

  addList: function (list) {
    var listView = new TrelloClone.Views.ListShow({ model: list, collection: this.collection });
    this.addSubview('#lists', listView);
  },

  renderLists: function () {
    this.model.lists().each(this.addList.bind(this));
  },

  renderListForm: function () {
    var formView = new TrelloClone.Views.ListForm({ collection: this.collection });
    this.addSubview('#list-form', formView);

  }

});
