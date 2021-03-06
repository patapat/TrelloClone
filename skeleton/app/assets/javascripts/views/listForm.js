TrelloClone.Views.ListForm = Backbone.CompositeView.extend({
  template: JST['lists/list_form'],

  events: {
    "submit form": "createList"
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    return this;
  },

  createList: function (event) {
    event.preventDefault();

    this.collection.create({
      title: this.$('textarea').val(),
      board_id: this.collection.board.id
    }, { wait: true });


    this.$('textarea').val('');
    this.$('textarea').focus();
  }
})
