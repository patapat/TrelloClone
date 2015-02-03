TrelloClone.Views.CardForm = Backbone.CompositeView.extend({
  template: JST['cards/card_form'],

  events: {
    "submit form": "createCard"
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    return this;
  },

  createCard: function (event) {
    event.preventDefault();

    this.collection.create({
      title: this.$('textarea').val(),
      list_id: this.collection.list.id
    }, { wait: true });

    this.$('textarea').val('');
    this.$('textarea').focus();
  }
});
