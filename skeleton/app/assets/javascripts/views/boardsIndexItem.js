TrelloClone.Views.BoardsIndexItem = Backbone.CompositeView.extend({

  template: JST['boards/boards_index_item'],

  tagName: 'li',

  events: {
    "click button": "deleteBoard"
  },

  render: function () {
    var renderedContent = this.template({ board: this.model });
    this.$el.html(renderedContent);

    return this;
  },

  deleteBoard: function () {
    // var prompt = "Are you sure you want to remove " + this.model.escape("title") + "?";
    // if (confirm(prompt)) {
      // this.model.destroy();
    // };
    this.model.destroy();
  }

})
